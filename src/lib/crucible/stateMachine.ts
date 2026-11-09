import type { AiSignal, RoundConfig, SessionContext, SessionPhase, SessionState, TopicSpec, TurnAction } from "@/types/crucible";
import { MESSAGES } from "@/lib/crucible/config";
import { EngineError } from "@/lib/crucible/errors";

/**
 * The deterministic core of every interview round.
 *
 * Nothing here calls an AI model. The model only judges what the candidate said
 * (an AiSignal) and writes the words; this module decides what happens next.
 * That is what guarantees a round can not loop forever, skip a phase, or lose
 * track of where it is.
 */

export type ReplySource =
  /** Use the model's "stay on this topic" reply. */
  | "model_continue"
  /** Use the model's "move to the next topic" reply. */
  | "model_advance"
  /** Ask the model (or fallback bank) for the opening question of topicIndex. */
  | "ask_topic"
  /** Use the fixed text in `fixedReply`. */
  | "fixed"
  /** Say nothing (the client already shows the result). */
  | "none";

export interface Decision {
  state: SessionState;
  action: TurnAction;
  replySource: ReplySource;
  fixedReply: string | null;
}

export function createInitialState(ctx: SessionContext, now: number = Date.now()): SessionState {
  return {
    v: 1,
    ctx,
    phase: "INITIAL",
    topicIndex: 0,
    turnsInTopic: 0,
    clarificationsInTopic: 0,
    pushbacksInTopic: 0,
    turnsInQuestion: 0,
    approachTurns: 0,
    codingChats: 0,
    codePassed: false,
    completed: false,
    iat: now
  };
}

export function isLastQuestion(config: RoundConfig, state: SessionState): boolean {
  return state.ctx.questionIndex >= config.questionsPerSet - 1;
}

export function canTransition(config: RoundConfig, from: SessionPhase, to: SessionPhase): boolean {
  return config.transitions[from].includes(to);
}

function moveTo(config: RoundConfig, state: SessionState, to: SessionPhase): SessionState {
  if (state.phase === to) return state;
  if (!canTransition(config, state.phase, to)) {
    throw new EngineError("INVALID_STATE", "Illegal phase change " + state.phase + " -> " + to + " for " + config.roundId + ".");
  }
  return { ...state, phase: to };
}

function resetTopicCounters(state: SessionState): SessionState {
  return { ...state, turnsInTopic: 0, clarificationsInTopic: 0, pushbacksInTopic: 0 };
}

function closingFor(config: RoundConfig, state: SessionState): string {
  switch (config.kind) {
    case "behavioral":
      return isLastQuestion(config, state) ? MESSAGES.setFinishedClosing : MESSAGES.questionOneClosing;
    case "system_design":
      return MESSAGES.designClosing;
    default:
      return MESSAGES.dsaClosing;
  }
}

/** Ends the current question (and the set, when it was the last question). */
function complete(config: RoundConfig, state: SessionState): Decision {
  const moved = moveTo(config, state, "VERDICT");
  const finished = { ...moved, completed: true };
  return {
    state: finished,
    action: isLastQuestion(config, state) ? "complete_set" : "complete_question",
    replySource: "fixed",
    fixedReply: closingFor(config, state)
  };
}

function continueWith(state: SessionState, source: ReplySource, fixedReply: string | null = null): Decision {
  return { state, action: "continue", replySource: source, fixedReply };
}

function isSolid(signal: AiSignal): boolean {
  return signal.answerQuality === "strong" || signal.answerQuality === "adequate";
}

function isFreeTurn(signal: AiSignal): boolean {
  return signal.answerQuality === "clarification_request" || signal.answerQuality === "candidate_question";
}

/* -------------------------------------------------------------------------- */
/* Candidate message                                                           */
/* -------------------------------------------------------------------------- */

function decideBehavioral(config: RoundConfig, state: SessionState, signal: AiSignal): Decision {
  const limits = config.limits;
  let next: SessionState = { ...state, turnsInQuestion: state.turnsInQuestion + 1 };
  if (next.phase === "INITIAL") next = moveTo(config, next, "FOLLOW_UPS");

  // Hard stop: the 5th candidate submission never produces another question.
  if (next.turnsInQuestion >= limits.maxTurnsPerQuestion) return complete(config, next);

  // Flexible stop: once the story is solid and the minimum depth is reached, move on.
  if (next.turnsInQuestion >= limits.minTurnsBeforeEarlyFinish && signal.readyToAdvance && isSolid(signal)) {
    return complete(config, next);
  }

  return continueWith(next, "model_continue");
}

function decideApproach(config: RoundConfig, state: SessionState, signal: AiSignal): Decision {
  const limits = config.limits;
  const next: SessionState = { ...state, approachTurns: state.approachTurns + 1 };

  if (signal.approachAccepted && isSolid(signal)) {
    return {
      state: moveTo(config, next, "CODING"),
      action: "phase_change",
      replySource: "fixed",
      fixedReply: MESSAGES.approachAccepted
    };
  }
  if (next.approachTurns >= limits.maxApproachTurns) {
    return {
      state: moveTo(config, next, "CODING"),
      action: "phase_change",
      replySource: "fixed",
      fixedReply: MESSAGES.approachForced
    };
  }
  return continueWith(next, "model_continue");
}

function decideDrafting(config: RoundConfig, state: SessionState, nudge: string): Decision {
  const next: SessionState = { ...state, codingChats: state.codingChats + 1 };
  if (next.codingChats > config.limits.maxCodingChats) return continueWith(next, "fixed", nudge);
  return continueWith(next, "model_continue");
}

function decideTopic(config: RoundConfig, topics: TopicSpec[], state: SessionState, signal: AiSignal): Decision {
  const limits = config.limits;

  // "what?" and direct questions are answered like a human would, without costing a topic slot.
  if (isFreeTurn(signal) && state.clarificationsInTopic < limits.maxFreeClarificationsPerTopic) {
    return continueWith({ ...state, clarificationsInTopic: state.clarificationsInTopic + 1 }, "model_continue");
  }

  const counted: SessionState = {
    ...state,
    turnsInTopic: state.turnsInTopic + 1,
    turnsInQuestion: state.turnsInQuestion + 1
  };

  const roomToProbe = counted.turnsInTopic < limits.maxTurnsPerTopic;
  const weak = signal.answerQuality === "vague" || signal.answerQuality === "off_topic";

  // One honest push-back on a weak answer, bounded so it can never loop.
  if (weak && roomToProbe && counted.pushbacksInTopic < limits.maxPushbacksPerTopic) {
    return continueWith({ ...counted, pushbacksInTopic: counted.pushbacksInTopic + 1 }, "model_continue");
  }

  // The interviewer wants to dig deeper into a decent answer, but only within the per-topic cap.
  if (isSolid(signal) && !signal.readyToAdvance && roomToProbe) {
    return continueWith(counted, "model_continue");
  }

  if (counted.topicIndex >= topics.length - 1) return complete(config, counted);

  const advanced = resetTopicCounters({ ...counted, topicIndex: counted.topicIndex + 1 });
  return { state: advanced, action: "advance_topic", replySource: "model_advance", fixedReply: null };
}

export function applyCandidateMessage(
  config: RoundConfig,
  topics: TopicSpec[],
  state: SessionState,
  signal: AiSignal
): Decision {
  if (!config.chatEnabled) throw new EngineError("CHAT_DISABLED", "The interviewer is silent in this round.");
  if (state.completed || state.phase === "VERDICT") {
    throw new EngineError("QUESTION_COMPLETE", "This question is already complete.");
  }

  if (config.kind === "behavioral") return decideBehavioral(config, state, signal);

  if (config.kind === "dsa_viva") {
    if (state.phase === "INITIAL") return decideApproach(config, state, signal);
    if (state.phase === "CODING") return decideDrafting(config, state, MESSAGES.codingNudge);
    return decideTopic(config, topics, state, signal);
  }

  // system_design
  if (state.phase === "INITIAL") return decideDrafting(config, state, MESSAGES.designNudge);
  return decideTopic(config, topics, state, signal);
}

/* -------------------------------------------------------------------------- */
/* Other events                                                                */
/* -------------------------------------------------------------------------- */

/**
 * The candidate ran their code. Only a pass can unlock the follow-ups, and only
 * from CODING. (Phase 2 replaces the client-reported pass with a server-side run.)
 */
export function applyCodeResult(config: RoundConfig, state: SessionState, passed: boolean): Decision {
  if (config.kind !== "dsa_viva") {
    throw new EngineError("BAD_REQUEST", "Code results only apply to the technical viva round.");
  }
  if (state.completed || state.phase === "VERDICT") {
    throw new EngineError("QUESTION_COMPLETE", "This question is already complete.");
  }
  if (state.phase === "INITIAL") throw new EngineError("INVALID_STATE", MESSAGES.approachBeforeSubmit);
  if (state.phase === "FOLLOW_UPS") {
    // Resubmitting during the defense is harmless: keep the current topic.
    return continueWith(state, "none");
  }
  if (!passed) return continueWith(state, "none");

  const unlocked = resetTopicCounters({ ...moveTo(config, state, "FOLLOW_UPS"), topicIndex: 0, codePassed: true });
  return { state: unlocked, action: "phase_change", replySource: "ask_topic", fixedReply: null };
}

/** The candidate submitted their architecture. Unlocks the strict 3-topic interrogation. */
export function applyDesignSubmitted(config: RoundConfig, state: SessionState, designLength: number): Decision {
  if (config.kind !== "system_design") {
    throw new EngineError("BAD_REQUEST", "Design submissions only apply to the architecture round.");
  }
  if (state.completed || state.phase === "VERDICT") {
    throw new EngineError("QUESTION_COMPLETE", "This question is already complete.");
  }
  if (state.phase === "FOLLOW_UPS") return continueWith(state, "none");
  if (designLength < 40) throw new EngineError("INVALID_STATE", MESSAGES.designBeforeSubmit);

  const unlocked = resetTopicCounters({ ...moveTo(config, state, "FOLLOW_UPS"), topicIndex: 0 });
  return { state: unlocked, action: "phase_change", replySource: "ask_topic", fixedReply: null };
}
