/**
 * Shared types for the Crucible interview engine.
 *
 * The first block (ProblemExample / ProblemDefinition) is the legacy problem
 * shape that src/data/problems/amazon/oaSets.ts still imports. The rest is the
 * engine contract: round kinds, the 4-phase state machine, the API schema and
 * the error schema. Nothing in this file uses `any`.
 */

/* -------------------------------------------------------------------------- */
/* Legacy problem types (kept for compatibility)                               */
/* -------------------------------------------------------------------------- */

export interface ProblemExample {
  input: string;
  output: string;
  explanation?: string;
}

export interface ProblemDefinition {
  id: string;
  title: string;
  taskIndex?: number;
  setId?: number;
  role?: string;
  nextProblemId?: string;
  paragraphs?: string[];
  description?: string;
  category?: string;
  difficulty?: string;
  examples?: ProblemExample[];
  constraints?: string[];
  starterCode?: string;
  starterTemplates?: Record<string, string>;
  testCases?: Array<{ input: unknown; expected: unknown }>;
  [key: string]: unknown;
}

/* -------------------------------------------------------------------------- */
/* Engine: rounds, phases, roles                                               */
/* -------------------------------------------------------------------------- */

export type RoundId = "round-1" | "round-2" | "round-3" | "round-4";

/** What kind of interview a round is. Drives persona, topics and limits. */
export type RoundKind = "oa" | "dsa_viva" | "system_design" | "behavioral";

/** The 4-phase lifecycle shared by every conversational round. */
export type SessionPhase = "INITIAL" | "CODING" | "FOLLOW_UPS" | "VERDICT";

export type DesignMode = "LLD" | "HLD";

export type CrucibleRole = "sde_intern" | "sde_1" | "sde_2" | "sde_3" | "principal";

export type CrucibleEvent = "message" | "code_result" | "design_submitted" | "evaluate";

export type AnswerQuality =
  | "strong"
  | "adequate"
  | "vague"
  | "off_topic"
  | "clarification_request"
  | "candidate_question"
  | "injection_attempt";

/** What the state machine decided to do with a turn. */
export type TurnAction =
  | "continue"
  | "advance_topic"
  | "phase_change"
  | "complete_question"
  | "complete_set";

/* -------------------------------------------------------------------------- */
/* Engine: configuration                                                       */
/* -------------------------------------------------------------------------- */

export interface TopicSpec {
  id: string;
  label: string;
  /** Instruction handed to the model about what to probe on this topic. */
  instruction: string;
  /** Used when no AI provider is reachable. */
  fallbackQuestion: string;
}

export interface RoundLimits {
  /** DSA INITIAL phase: after this many approach messages, force CODING. */
  maxApproachTurns: number;
  /** Chats allowed in CODING (or design drafting) before replies become fixed nudges. */
  maxCodingChats: number;
  /** Counted candidate answers allowed per follow-up topic. */
  maxTurnsPerTopic: number;
  /** Times the interviewer may push back on a vague answer per topic. */
  maxPushbacksPerTopic: number;
  /** "what?" / clarification requests that do not use up a topic slot. */
  maxFreeClarificationsPerTopic: number;
  /** Behavioral: earliest turn at which the interviewer may end a question early. */
  minTurnsBeforeEarlyFinish: number;
  /** Behavioral: hard cap of candidate submissions per question. */
  maxTurnsPerQuestion: number;
}

export interface RoundConfig {
  roundId: RoundId;
  kind: RoundKind;
  title: string;
  questionsPerSet: number;
  chatEnabled: boolean;
  transitions: Record<SessionPhase, SessionPhase[]>;
  limits: RoundLimits;
}

/* -------------------------------------------------------------------------- */
/* Engine: session state                                                       */
/* -------------------------------------------------------------------------- */

export interface SessionContext {
  company: string;
  role: CrucibleRole;
  roundId: RoundId;
  setId: number;
  problemId: string;
  questionIndex: number;
}

export interface SessionState {
  v: 1;
  ctx: SessionContext;
  phase: SessionPhase;
  topicIndex: number;
  turnsInTopic: number;
  clarificationsInTopic: number;
  pushbacksInTopic: number;
  turnsInQuestion: number;
  approachTurns: number;
  codingChats: number;
  codePassed: boolean;
  completed: boolean;
  /** Issued-at, epoch milliseconds. */
  iat: number;
}

/** The model's structured judgment of a candidate message. */
export interface AiSignal {
  answerQuality: AnswerQuality;
  readyToAdvance: boolean;
  approachAccepted: boolean;
}

/* -------------------------------------------------------------------------- */
/* API contract                                                                */
/* -------------------------------------------------------------------------- */

export type ErrorCode =
  | "BAD_REQUEST"
  | "INVALID_STATE"
  | "CHAT_DISABLED"
  | "QUESTION_COMPLETE"
  | "AI_UNAVAILABLE"
  | "AI_BAD_OUTPUT"
  | "INTERNAL";

export interface ApiError {
  error: string;
  code: ErrorCode;
}

export interface TranscriptMessage {
  speaker: "ai" | "candidate";
  text: string;
}

export interface TurnResponse {
  reply: string;
  action: TurnAction;
  phase: SessionPhase;
  topicIndex: number;
  totalTopics: number;
  turnsInQuestion: number;
  maxTurnsInQuestion: number | null;
  questionCompleted: boolean;
  isSetFinished: boolean;
  /** Legacy alias kept for the existing page: true when the whole round is done. */
  isCompleted: boolean;
  nextQuestionIndex: number;
  sessionToken: string;
  /** True when no AI provider answered and the deterministic fallback was used. */
  degraded: boolean;
  provider: string | null;
}

export interface ScorecardStar {
  situationAndTask: string;
  actionDepth: string;
  resultAndMetrics: string;
}

export type Verdict = "Strong Hire" | "Hire" | "Lean Hire" | "No Hire";

export interface Scorecard {
  score: number;
  verdict: Verdict;
  starBreakdown: ScorecardStar;
  strengths: string[];
  areasForImprovement: string[];
  barRaiserDebriefNote: string;
}
