import type { AiSignal, AnswerQuality } from "@/types/crucible";
import { detectInjection } from "@/lib/crucible/sanitize";

export interface MessageSignals {
  wordCount: number;
  isClarification: boolean;
  askedQuestion: boolean;
  isVague: boolean;
  isRepeat: boolean;
  hasMetric: boolean;
  iCount: number;
  weCount: number;
  injectionFlags: string[];
}

function wordSet(text: string): Set<string> {
  return new Set(
    text
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, " ")
      .split(/\s+/)
      .filter((word) => word.length > 2)
  );
}

function jaccard(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 || b.size === 0) return 0;
  let shared = 0;
  a.forEach((word) => {
    if (b.has(word)) shared += 1;
  });
  const union = a.size + b.size - shared;
  return union === 0 ? 0 : shared / union;
}

export function analyzeMessage(message: string, previousCandidateText: string | null): MessageSignals {
  const trimmed = message.trim();
  const lower = trimmed.toLowerCase();
  const wordCount = trimmed.split(/\s+/).filter((word) => word.length > 0).length;

  const startsConfused = /^(what|huh|sorry|pardon|come again|which|meaning)\b/.test(lower) && wordCount <= 6;
  const asksRepeat =
    /\b(repeat|rephrase|clarify|didn'?t (get|understand|catch)|don'?t (get|understand)|not sure what you mean|what do you mean|can you explain the question)\b/.test(
      lower
    );
  const isClarification = startsConfused || asksRepeat;
  const askedQuestion = trimmed.endsWith("?") && !isClarification;

  const hasMetric =
    /\d/.test(trimmed) ||
    /%|percent|latency|revenue|dollars|\bcost\b|\bsla\b|faster|slower|reduced|increased|p99|p50/.test(lower);
  const iCount = (lower.match(/\bi\b|\bi'(m|ve|d|ll)\b|\bmy\b/g) ?? []).length;
  const weCount = (lower.match(/\bwe\b|\bour\b|\bus\b|\bthe team\b/g) ?? []).length;

  let isRepeat = false;
  if (previousCandidateText !== null && wordCount >= 4) {
    isRepeat = jaccard(wordSet(trimmed), wordSet(previousCandidateText)) >= 0.7;
  }

  return {
    wordCount,
    isClarification,
    askedQuestion,
    isVague: wordCount < 20 && !isClarification && !askedQuestion,
    isRepeat,
    hasMetric,
    iCount,
    weCount,
    injectionFlags: detectInjection(trimmed)
  };
}

export function describeSignals(signals: MessageSignals): string {
  const notes: string[] = ["The latest candidate message is " + signals.wordCount + " words long."];
  if (signals.injectionFlags.length > 0) notes.push("It contains attempts to manipulate the interviewer or the scoring.");
  if (signals.isClarification) notes.push("It reads as confusion or a request to repeat or clarify the question.");
  if (signals.askedQuestion) notes.push("The candidate asked you a question rather than answering.");
  if (signals.isVague) notes.push("It is short and light on specifics.");
  if (signals.isRepeat) notes.push("It largely repeats what the candidate already said.");
  notes.push(
    signals.hasMetric
      ? "It contains concrete numbers or measurable outcomes."
      : "It contains no concrete numbers or measurable outcomes."
  );
  if (signals.iCount > 0 || signals.weCount > 0) {
    notes.push(
      "Ownership language: " + signals.iCount + " first-person singular references versus " + signals.weCount + " team ('we') references."
    );
  }
  return notes.join(" ");
}

const APPROACH_KEYWORDS =
  /(hash ?map|hash ?table|dictionary|heap|priority queue|stack|queue|deque|trie|prefix tree|graph|dijkstra|bfs|dfs|topological|union.?find|dynamic programming|\bdp\b|memoi[sz]|binary search|two pointers|sliding window|greedy|backtrack|sort|segment tree|o\(|complexity|big-?o)/i;

/**
 * Deterministic judgment used when no AI provider is reachable. It is
 * deliberately conservative so the flow always keeps moving.
 */
export function heuristicSignal(message: string, signals: MessageSignals): AiSignal {
  let answerQuality: AnswerQuality;
  if (signals.injectionFlags.length > 0) answerQuality = "injection_attempt";
  else if (signals.isClarification) answerQuality = "clarification_request";
  else if (signals.askedQuestion) answerQuality = "candidate_question";
  else if (signals.isVague || signals.isRepeat) answerQuality = "vague";
  else if (signals.hasMetric && signals.iCount >= signals.weCount) answerQuality = "strong";
  else answerQuality = "adequate";

  const solid = answerQuality === "strong" || answerQuality === "adequate";
  return {
    answerQuality,
    readyToAdvance: solid && signals.wordCount >= 35,
    approachAccepted: solid && signals.wordCount >= 20 && APPROACH_KEYWORDS.test(message)
  };
}
