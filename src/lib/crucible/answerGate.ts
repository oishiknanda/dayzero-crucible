// ANSWER GATE FOR THE CRUCIBLE AI INTERVIEWER (ROUNDS 2, 3 AND 4)
//
// Pure functions: no AI calls, no network, no side effects, no state.
// Round 1 is bypassed. Round 4 uses its own behavioral-answer phase, never an editor phase.
//
// Classification rules, applied in this order. The stored or sent text is never changed;
// only a normalized copy is used for matching.
//   1. Empty text                                          -> non_answer
//   2. Code-like content, digits, Big-O                    -> answer
//   3. Mostly non-Latin script                             -> answer
//   4. Only punctuation or emoji                           -> non_answer
//   5. Clarification phrase ("what?", "pardon")            -> clarification
//   6. Domain token (heap, shard, "i led" ...)             -> answer
//   7. Honest weak answers ("i don't know", "pass")        -> answer (existing logic handles them)
//   8. Greetings and fillers ("hello", "thank you")        -> non_answer
//   9. Keyboard mashing ("asdf", "aaaaa")                  -> non_answer
//  10. 1-6 words with no overlap with problem or question  -> non_answer
//  11. Everything else, including 7 or more words          -> answer
//
// This file is ASCII only on purpose: invisible characters are written as \u escapes.

export type AnswerClass = "answer" | "clarification" | "non_answer";
export type GateSignal = "reask" | "clarification" | "none";
export type GatePhase = "INITIAL" | "FOLLOW_UPS" | "CODING" | "DRAFTING" | "BEHAVIORAL" | "VERDICT";

export interface AnswerGateResult {
  classification: AnswerClass;
  gate: GateSignal;
}

export interface AnswerGateContext {
  /** 1 to 4. Rounds 2, 3 and 4 are gated. */
  round: number;
  phase: GatePhase;
  /** The interviewer question waiting for an answer (used for word overlap). */
  questionText?: string;
  /** Problem title (Round 2) or design prompt (Round 3), used for word overlap. */
  problemTitle?: string;
}

// ---------- Named constants (tune these) ----------

/** Feature flag. Set ANSWER_GATE_ENABLED=false to switch the gate off. Read on every call. */
export function isAnswerGateEnabled(): boolean {
  return process.env.ANSWER_GATE_ENABLED !== "false";
}

/** Round 1 has no interviewer answer gate. */
export const GATED_ROUNDS: readonly number[] = [2, 3, 4];

/** After this many consecutive re-asks, the next non-answer moves on by the normal path. */
export const MAX_CONSECUTIVE_NON_ANSWERS = 3;

/** Free "say that again" requests per question before they count as strikes. */
export const MAX_FREE_CLARIFICATIONS = 2;

/** Messages with up to this many words and no overlap/domain token are non-answers. */
export const OFF_TOPIC_MAX_WORDS = 6;

/** Overlap with the problem or question only counts for words at least this long. */
export const MIN_OVERLAP_WORD_LENGTH = 4;

/** Greetings, fillers and what a silent microphone usually transcribes to. */
const NON_ANSWER_PHRASES = new Set([
  "hello", "hi", "hey", "ok", "okay", "yes", "no", "yeah", "yep", "nope",
  "hmm", "hmmm", "um", "umm", "uh", "test", "testing", "thanks", "thank you",
  "you", "bye", "sorry", "good morning", "good afternoon", "good evening",
  "can you hear me",
]);

/** Exact phrases meaning "please say that again". Free, up to MAX_FREE_CLARIFICATIONS. */
const CLARIFICATION_PHRASES = new Set([
  "what", "huh", "pardon", "repeat", "rephrase", "come again", "say that again",
  "can you repeat", "can you repeat that", "can you repeat the question",
  "can you rephrase", "can you rephrase that", "can you explain",
  "can you explain the question", "could you clarify", "clarify",
  "i didn't get that", "i did not get that", "i don't understand",
  "i do not understand", "what do you mean",
]);

/** Honest weak answers. They stay answers: today's logic already handles them. */
const WEAK_ANSWER_PHRASES = new Set([
  "i don't know", "i do not know", "dont know", "idk", "no idea", "not sure",
  "i'm not sure", "i have no idea", "skip", "pass",
]);

/**
 * Domain terms. A term of 3 characters or fewer must match a whole word; longer terms
 * match as a word prefix, so "sort" also matches "sorting" and "sorted".
 */
const DOMAIN_TERMS: readonly string[] = [
  // complexity
  "o(", "big-o", "big o", "big-oh", "omega", "theta", "complexity", "runtime", "linear",
  "logarithmic", "quadratic", "constant time", "amortized",
  // data structures and algorithms
  "hash", "heap", "stack", "queue", "trie", "tree", "graph", "array", "linked list", "deque",
  "bfs", "dfs", "dp", "bst", "lru", "two pointers", "pointer", "sliding window", "binary search",
  "sort", "recursion", "recursive", "iterat", "greedy", "memoiz", "dynamic programming",
  "brute force", "backtrack", "approach", "algorithm", "loop", "sql", "nosql",
  // system design and concurrency
  "shard", "partition", "cache", "lock", "mutex", "semaphore", "deadlock", "race condition",
  "thread", "concurren", "primitive", "retry", "retries", "backpressure", "circuit breaker",
  "replica", "replicat", "throttl", "rate limit", "idempoten", "latency", "throughput",
  "consisten", "availability", "scal", "database", "load balanc", "kafka", "sqs", "redis",
  "dynamo", "failover", "trade-off", "tradeoff", "interface", "abstract", "inherit",
  "polymorph", "singleton", "factory", "strategy", "observer", "solid", "encapsulat",
  "architecture", "migration", "api",
  // first-person ownership
  "i led", "i built", "i designed", "i implemented", "i wrote", "i created", "i owned",
  "i drove", "i was responsible", "my team", "we built", "we designed", "we implemented",
];

/** Common words ignored when looking for overlap with the problem or the question. */
const STOPWORDS = new Set([
  "what", "that", "this", "with", "from", "your", "have", "will", "would", "could", "should",
  "about", "there", "their", "them", "then", "than", "when", "where", "which", "while",
  "does", "into", "over", "just", "like", "some", "very", "much", "here", "today", "right",
]);

// ---------- Internals ----------

function escapeRegExp(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function buildDomainRegex(): RegExp {
  const parts = DOMAIN_TERMS.map((term) => {
    const body = escapeRegExp(term);
    if (term.endsWith("(")) return "\\b" + body;
    return term.length <= 3 ? "\\b" + body + "\\b" : "\\b" + body;
  });
  return new RegExp("(?:" + parts.join("|") + ")");
}

const DOMAIN_RE = buildDomainRegex();
const INVISIBLE_RE = /[\u200B-\u200D\u2060\uFEFF\u00AD]/g;
const QUOTE_RE = /[\u2018\u2019\u02BC]/g;
const EDGE_NOISE_RE = new RegExp("^[\\p{P}\\p{S}\\s]+|[\\p{P}\\p{S}\\s]+$", "gu");

/**
 * Normalizes for MATCHING only: NFKC (this also turns NBSP into a normal space),
 * strips zero-width characters and BOM, straightens quotes, lowercases, collapses whitespace.
 */
function normalize(message: string): string {
  return message
    .normalize("NFKC")
    .replace(INVISIBLE_RE, "")
    .replace(QUOTE_RE, "'")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function stripEdges(text: string): string {
  return text.replace(EDGE_NOISE_RE, "").replace(/\s+/g, " ").trim();
}

function containsCodeLikeContent(text: string): boolean {
  return (
    /[{}[\]]/.test(text) ||
    /=>|:=|=/.test(text) ||
    /;/.test(text) ||
    /\b(function|class|def|return)\b/.test(text) ||
    /\d/.test(text) ||
    /\bo\s*\(/.test(text) ||
    /\w\(/.test(text)
  );
}

function isMostlyNonLatin(text: string): boolean {
  const letters = text.match(new RegExp("\\p{L}", "gu"));
  if (!letters || letters.length === 0) return false;
  const latinRe = new RegExp("\\p{Script=Latin}", "u");
  const latin = letters.filter((c) => latinRe.test(c)).length;
  return letters.length - latin > letters.length / 2;
}

function isKeyboardMash(text: string): boolean {
  const compact = text.replace(/\s/g, "");
  if (compact.length < 3) return false;
  if (/^(.)\1+$/.test(compact)) return true;
  if (new RegExp("\\p{L}", "u").test(compact) && !/[aeiouy]/.test(compact)) return true;

  const words = text.split(" ").filter(Boolean);
  if (words.length >= 5 && new Set(words).size <= Math.ceil(words.length * 0.35)) return true;
  const letters = compact.replace(/[^a-z]/g, "");
  if (letters.length >= 14 && (letters.match(/[aeiouy]/g) || []).length / letters.length < 0.12) return true;
  return false;
}

function isPlausibleShortBehavioralAnswer(text: string, context: AnswerGateContext): boolean {
  if (context.round !== 4) return false;
  return /\b(i|we|my|our)\b/.test(text)
    && /\b(would|will|did|made|asked|decided|owned|led|built|changed|handled|worked|learned|chose|explained|proposed|raised|shared|told|helped|listened|aligned|escalated)\b/.test(text);
}

function significantWords(text: string): Set<string> {
  const words = text.toLowerCase().split(new RegExp("[^\\p{L}\\p{N}']+", "u"));
  const result = new Set<string>();
  for (const w of words) {
    if (w.length >= MIN_OVERLAP_WORD_LENGTH && !STOPWORDS.has(w)) result.add(w);
  }
  return result;
}

function hasWordOverlap(text: string, context: AnswerGateContext): boolean {
  const reference = significantWords((context.problemTitle ?? "") + " " + (context.questionText ?? ""));
  if (reference.size === 0) return false;
  let found = false;
  significantWords(text).forEach((w) => {
    if (reference.has(w)) found = true;
  });
  return found;
}

function classify(message: string, context: AnswerGateContext): AnswerClass {
  const base = normalize(message);
  if (base.length === 0) return "non_answer";

  if (containsCodeLikeContent(base)) return "answer";
  if (isMostlyNonLatin(base)) return "answer";

  const text = stripEdges(base);
  if (text.length === 0) return "non_answer";

  if (CLARIFICATION_PHRASES.has(text)) return "clarification";
  if (DOMAIN_RE.test(text)) return "answer";
  if (WEAK_ANSWER_PHRASES.has(text)) return "answer";
  if (NON_ANSWER_PHRASES.has(text)) return "non_answer";
  if (isKeyboardMash(text)) return "non_answer";
  if (isPlausibleShortBehavioralAnswer(text, context)) return "answer";

  const wordCount = text.split(" ").length;
  if (wordCount <= OFF_TOPIC_MAX_WORDS && !hasWordOverlap(text, context)) return "non_answer";

  return "answer";
}

// ---------- Public API ----------

/**
 * Classifies a candidate message. FAILS OPEN: if anything goes wrong, or the gate is
 * disabled, or the round is not gated, the message is treated as a normal answer.
 */
export function classifyCandidateMessage(message: string, context: AnswerGateContext): AnswerGateResult {
  try {
    if (!isAnswerGateEnabled() || !GATED_ROUNDS.includes(context.round)) {
      return { classification: "answer", gate: "none" };
    }
    if (typeof message !== "string") return { classification: "answer", gate: "none" };

    const classification = classify(message, context);
    if (classification === "non_answer") return { classification, gate: "reask" };
    if (classification === "clarification") return { classification, gate: "clarification" };
    return { classification, gate: "none" };
  } catch (error) {
    console.error("[answerGate] classifier failed, treating message as an answer", error);
    return { classification: "answer", gate: "none" };
  }
}

// ---------- Decision helper (strikes, free clarifications, safety valve) ----------

export type GateAction =
  /** Run today's logic exactly as it is. Strikes reset. */
  | "proceed"
  /** Reply with the re-ask template. Do not advance, do not count, no AI call. */
  | "reask"
  /** Reply with the free clarification wording. No strike. */
  | "clarify"
  /** CODING or DRAFTING: reply with the fixed editor nudge and increment the strike. */
  | "nudge"
  /** Safety valve: take the EXISTING progression path and mark the question unanswered. */
  | "force_advance";

export interface GateDecision {
  action: GateAction;
  classification: AnswerClass;
  /** Consecutive non-answers including this one (0 when the message was an answer). */
  strike: number;
  /** Free clarifications used on this question including this one. */
  clarificationsUsed: number;
}

export interface GateCounters {
  /** Consecutive non-answers since the last real answer (use the larger of client and server). */
  consecutiveNonAnswers: number;
  /** Free clarifications already used on the current question. */
  clarificationsUsed: number;
}

/**
 * Turns a classification plus the running counters into one action.
 * - answer: proceed, strikes reset.
 * - CODING and DRAFTING: nudge until the same bounded safety valve is reached.
 * - clarification: free up to MAX_FREE_CLARIFICATIONS, then it counts as a strike.
 * - non-answer: re-ask; after MAX_CONSECUTIVE_NON_ANSWERS re-asks, force the normal move-on.
 */
export function decideGate(
  message: string,
  context: AnswerGateContext,
  counters: GateCounters
): GateDecision {
  const { classification } = classifyCandidateMessage(message, context);
  const prior = Math.max(0, Math.floor(counters.consecutiveNonAnswers));
  const used = Math.max(0, Math.floor(counters.clarificationsUsed));

  if (classification === "answer") {
    return { action: "proceed", classification, strike: 0, clarificationsUsed: used };
  }

  if (context.phase === "CODING" || context.phase === "DRAFTING") {
    if (prior >= MAX_CONSECUTIVE_NON_ANSWERS) {
      return { action: "force_advance", classification, strike: prior + 1, clarificationsUsed: used };
    }
    return { action: "nudge", classification, strike: prior + 1, clarificationsUsed: used };
  }

  if (classification === "clarification" && used < MAX_FREE_CLARIFICATIONS) {
    return { action: "clarify", classification, strike: prior, clarificationsUsed: used + 1 };
  }

  if (prior >= MAX_CONSECUTIVE_NON_ANSWERS) {
    return { action: "force_advance", classification, strike: prior + 1, clarificationsUsed: used };
  }

  return { action: "reask", classification, strike: prior + 1, clarificationsUsed: used };
}

// ---------- Deterministic wording (never written by the AI model) ----------

/** Re-ask templates per strike level. {question} is replaced with the question verbatim. */
export const REASK_TEMPLATES: Readonly<Record<1 | 2 | 3, readonly string[]>> = {
  1: [
    "Let me repeat the question: {question} Please answer it in your own words.",
    "I'm asking again so we stay on track: {question} Go ahead and answer it in your own words.",
    "To be clear, this is what I'm asking: {question} I need your answer to continue.",
    "Let's come back to the question: {question} Please give me your answer.",
    "Just so we are on the same page: {question} Please answer it directly.",
  ],
  2: [
    "I have asked this twice, I need an actual answer to continue: {question}",
    "This is the second time I'm asking: {question} Please give a real answer.",
    "I need you to answer this directly before we can move on: {question}",
    "We are still on the same question, and I need a real answer: {question}",
    "I can't move forward without your answer to this: {question}",
  ],
  3: [
    "This is my last reminder: {question} Please give a substantive answer, otherwise we will have to move on.",
    "One final time: {question} If I do not get an answer, I will have to move on.",
    "I really need an answer to this one, otherwise we will move on: {question}",
    "Last chance on this question: {question} Please answer it now.",
    "Please answer this now, or we will have to continue without it: {question}",
  ],
};

const CLARIFICATION_LEADS: readonly string[] = [
  "Sure, let me say it again, take your time: {question}",
  "No problem, here is the question once more: {question}",
  "Of course, here it is again: {question}",
];

/** Short fixed nudges for phases that have no question to repeat. */
export const NUDGE_REPLIES: Readonly<Record<"CODING" | "DRAFTING", string>> = {
  CODING: "Keep going in the editor. Run your tests, and click 'Submit Solution' when you are ready to defend it.",
  DRAFTING:
    "Take the time to put your design in the editor above, then click 'Submit Architecture Defense' when you are ready for me to challenge it.",
};

function fillQuestion(template: string, question: string): string {
  return template.replace("{question}", () => question);
}

/**
 * Re-ask reply for the current question. `strike` is the number of consecutive non-answers
 * so far (1, 2, 3...). `rotation` picks the wording deterministically (for example the
 * question or topic index), so tests never depend on randomness.
 */
export function buildReaskReply(strike: number, currentQuestion: string, rotation = 0): string {
  const level = (strike <= 1 ? 1 : strike === 2 ? 2 : 3) as 1 | 2 | 3;
  const pool = REASK_TEMPLATES[level];
  const index = Math.abs(Math.trunc(rotation)) % pool.length;
  return fillQuestion(pool[index], currentQuestion);
}

/** Free reply when the candidate asks to hear the question again. */
export function buildClarificationReply(currentQuestion: string, rotation = 0): string {
  const index = Math.abs(Math.trunc(rotation)) % CLARIFICATION_LEADS.length;
  return fillQuestion(CLARIFICATION_LEADS[index], currentQuestion);
}
