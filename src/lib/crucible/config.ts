import type {
  CrucibleRole,
  DesignMode,
  RoundConfig,
  RoundId,
  RoundKind,
  RoundLimits,
  SessionPhase,
  TopicSpec
} from "@/types/crucible";

/* -------------------------------------------------------------------------- */
/* Fixed interviewer lines (deterministic, never model-generated)              */
/* -------------------------------------------------------------------------- */

export const MESSAGES = {
  approachAccepted:
    "That makes sense. Go ahead and implement the solution in the editor above, then click 'Submit Solution' when ready.",
  approachForced:
    "Let's get you into the editor. Implement the approach you have described as best you can, then click 'Submit Solution' when ready, and we will dig into the details afterwards.",
  codingNudge:
    "Keep going in the editor. Run your tests, and click 'Submit Solution' when you are ready to defend it.",
  designNudge:
    "Take the time to put your design in the editor above, then click 'Submit Architecture Defense' when you are ready for me to challenge it.",
  questionOneClosing:
    "Thank you for the thorough walkthrough. We have concluded Question 1 of this set. Please click 'Conclude & Score' at the top right to proceed to Question 2.",
  setFinishedClosing:
    "Thank you. You have completed both questions of this Bar Raiser set! Please click 'Conclude & Score' at the top right to finalize your round and review your comprehensive scorecard.",
  designClosing:
    "Thank you for the comprehensive architectural defense. You have concluded your Round 3 System Design assessment! Please click 'Conclude & Score' at the top right to finalize your round and review your technical scorecard.",
  dsaClosing:
    "Thank you. That completes the technical deep dive. Your solution and your answers are now being evaluated.",
  injectionRefusal:
    "I can only evaluate your own work, so let's stay with the question. Take it from where you left off.",
  approachBeforeSubmit:
    "Before you submit, walk me through your approach in the chat first: the algorithm, the data structure, and the Big-O.",
  designBeforeSubmit:
    "Please outline your core class interfaces, concurrency primitives, or architectural components in the editor before submitting for technical defense."
} as const;

/* -------------------------------------------------------------------------- */
/* Phase transition tables                                                     */
/* -------------------------------------------------------------------------- */

const NO_TRANSITIONS: Record<SessionPhase, SessionPhase[]> = {
  INITIAL: [],
  CODING: [],
  FOLLOW_UPS: [],
  VERDICT: []
};

const DSA_TRANSITIONS: Record<SessionPhase, SessionPhase[]> = {
  INITIAL: ["CODING"],
  CODING: ["FOLLOW_UPS"],
  FOLLOW_UPS: ["VERDICT"],
  VERDICT: []
};

const DESIGN_TRANSITIONS: Record<SessionPhase, SessionPhase[]> = {
  INITIAL: ["FOLLOW_UPS"],
  CODING: [],
  FOLLOW_UPS: ["VERDICT"],
  VERDICT: []
};

/* -------------------------------------------------------------------------- */
/* Limits                                                                      */
/* -------------------------------------------------------------------------- */

const BASE_LIMITS: RoundLimits = {
  maxApproachTurns: 0,
  maxCodingChats: 0,
  maxTurnsPerTopic: 1,
  maxPushbacksPerTopic: 0,
  maxFreeClarificationsPerTopic: 2,
  minTurnsBeforeEarlyFinish: 99,
  maxTurnsPerQuestion: 99
};

export const ROUND_CONFIGS: Record<RoundId, RoundConfig> = {
  "round-1": {
    roundId: "round-1",
    kind: "oa",
    title: "Online Assessment",
    questionsPerSet: 1,
    chatEnabled: false,
    transitions: NO_TRANSITIONS,
    limits: BASE_LIMITS
  },
  "round-2": {
    roundId: "round-2",
    kind: "dsa_viva",
    title: "Technical Screen and DSA Viva",
    questionsPerSet: 1,
    chatEnabled: true,
    transitions: DSA_TRANSITIONS,
    limits: {
      ...BASE_LIMITS,
      maxApproachTurns: 6,
      maxCodingChats: 8,
      maxTurnsPerTopic: 3,
      maxPushbacksPerTopic: 1,
      maxFreeClarificationsPerTopic: 2
    }
  },
  "round-3": {
    roundId: "round-3",
    kind: "system_design",
    title: "Architecture and System Design",
    questionsPerSet: 1,
    chatEnabled: true,
    transitions: DESIGN_TRANSITIONS,
    limits: {
      ...BASE_LIMITS,
      maxCodingChats: 8,
      maxTurnsPerTopic: 1,
      maxPushbacksPerTopic: 0,
      maxFreeClarificationsPerTopic: 2
    }
  },
  "round-4": {
    roundId: "round-4",
    kind: "behavioral",
    title: "Amazon Bar Raiser",
    questionsPerSet: 2,
    chatEnabled: true,
    transitions: DESIGN_TRANSITIONS,
    limits: {
      ...BASE_LIMITS,
      maxTurnsPerTopic: 99,
      minTurnsBeforeEarlyFinish: 3,
      maxTurnsPerQuestion: 5
    }
  }
};

/* -------------------------------------------------------------------------- */
/* Slug / role / mode resolution                                               */
/* -------------------------------------------------------------------------- */

const ROUND_ALIASES: Record<string, RoundId> = {
  "round-1": "round-1",
  oa: "round-1",
  "round-2": "round-2",
  technical: "round-2",
  "round-3": "round-3",
  lld: "round-3",
  hld: "round-3",
  architecture: "round-3",
  "round-4": "round-4",
  "bar-raiser": "round-4"
};

export function roundIdFromSlug(slug: string): RoundId | null {
  const key = slug.trim().toLowerCase();
  return Object.prototype.hasOwnProperty.call(ROUND_ALIASES, key) ? ROUND_ALIASES[key] : null;
}

export function getRoundConfig(roundId: RoundId): RoundConfig {
  return ROUND_CONFIGS[roundId];
}

const ROLES: readonly CrucibleRole[] = ["sde_intern", "sde_1", "sde_2", "sde_3", "principal"];

export function normalizeRole(value: string): CrucibleRole {
  const key = value.trim().toLowerCase();
  const match = ROLES.find((role) => role === key);
  return match ?? "sde_1";
}

/** Accepts 3, "3", "set-3" and "Set 3". Returns 1 when unparseable. */
export function parseSetId(value: unknown): number {
  if (typeof value === "number" && Number.isFinite(value) && value >= 1) return Math.floor(value);
  if (typeof value === "string") {
    const match = value.match(/(\d+)/);
    if (match) {
      const parsed = parseInt(match[1], 10);
      if (parsed >= 1) return parsed;
    }
  }
  return 1;
}

export function designModeFor(category: string, title: string): DesignMode {
  const haystack = (category + " " + title).toLowerCase();
  return /object-oriented|object oriented|low-level|low level|\blld\b|\bood\b/.test(haystack) ? "LLD" : "HLD";
}

export function levelGuidance(role: CrucibleRole): string {
  switch (role) {
    case "sde_intern":
      return "SDE Intern. Test fundamentals: recursion, boundary validation, clear thinking. Be encouraging but precise. Leadership principle focus: Learn and Be Curious.";
    case "sde_1":
      return "SDE I (L4, new grad or junior). Half algorithmic depth, half leadership principles. Expect correct fundamentals and honest ownership of small scopes.";
    case "sde_2":
      return "SDE II (L5, mid-level). Expect strong design judgment, concurrency awareness, and cross-examined leadership stories with real metrics.";
    case "sde_3":
      return "SDE III (L6, senior). Expect distributed-systems depth, operational excellence, fault tolerance, non-functional requirements, blast-radius thinking and strategic ownership.";
    case "principal":
      return "Principal Engineer (L7). Expect planetary-scale stewardship, long-term multi-year trade-offs, organizational influence and narrative clarity.";
  }
}

/* -------------------------------------------------------------------------- */
/* Topics                                                                      */
/* -------------------------------------------------------------------------- */

const DSA_TOPICS: TopicSpec[] = [
  {
    id: "complexity",
    label: "time and space complexity",
    instruction:
      "Probe the time and space complexity of THEIR code. Make them justify it from the structure of their loops, recursion or data structure, and name which part dominates.",
    fallbackQuestion:
      "Walk me through the time and space complexity of your solution, and tell me which part of it dominates."
  },
  {
    id: "edge-cases",
    label: "edge cases and boundaries",
    instruction:
      "Probe edge cases for THEIR code: empty input, a single element, duplicates or collisions, extreme values, and memory boundaries. Ask what breaks first.",
    fallbackQuestion:
      "What are the edge cases that could break your solution, such as empty input, duplicates or extreme values, and how does your code handle them?"
  },
  {
    id: "scale",
    label: "extreme scale",
    instruction:
      "Push on scale: assume 100 million or more items arriving as a stream, or data that no longer fits in one machine's memory. Ask what changes in their approach and what trade-offs they would accept.",
    fallbackQuestion:
      "Suppose this input becomes a stream of a hundred million items that no longer fits in one machine's memory. What would you change in your approach?"
  }
];

const HLD_TOPICS: TopicSpec[] = [
  {
    id: "concurrency",
    label: "concurrency, lock granularity and hot partitions",
    instruction:
      "Challenge THEIR design on concurrency: lock granularity, race conditions, and database or shard hot-partitioning under skewed traffic.",
    fallbackQuestion:
      "How does your design handle concurrent writers, what is your lock granularity, and what happens when one partition gets hot?"
  },
  {
    id: "backpressure",
    label: "backpressure and queue exhaustion",
    instruction:
      "Challenge THEIR design on backpressure: ring buffer or queue exhaustion (Kafka or SQS style), producer and consumer throttling, and what happens when consumers fall behind.",
    fallbackQuestion:
      "When a consumer falls behind and your queue or buffer fills up at peak traffic, how do you apply backpressure without blocking producers?"
  },
  {
    id: "cascading-failure",
    label: "cascading failures and graceful degradation",
    instruction:
      "Challenge THEIR design on cascading failures: circuit breaking, failover and resilience, retry storms, and graceful degradation.",
    fallbackQuestion:
      "If a downstream dependency starts failing, how do you stop it from cascading, and what does graceful degradation look like in your design?"
  }
];

const LLD_TOPICS: TopicSpec[] = [
  {
    id: "contracts",
    label: "class contracts and SOLID",
    instruction:
      "Challenge THEIR class contracts: responsibilities, interface boundaries, and where they violate or honor the SOLID principles.",
    fallbackQuestion:
      "Walk me through your key class contracts. Where did you apply or deliberately bend the SOLID principles?"
  },
  {
    id: "patterns",
    label: "design patterns and extensibility",
    instruction:
      "Challenge THEIR extensibility: where a pattern like Strategy, Factory or State would or would not help, and what a new requirement would cost to add.",
    fallbackQuestion:
      "If a new requirement arrives, such as a new locker size or pricing rule, what changes in your design, and would a pattern like Strategy or Factory help?"
  },
  {
    id: "concurrency-lld",
    label: "concurrency, race conditions and deadlocks",
    instruction:
      "Challenge THEIR code-level concurrency: shared mutable state, race conditions, lock ordering and deadlocks.",
    fallbackQuestion:
      "Where in your design could two threads race or deadlock, and how do you make the critical sections safe?"
  }
];

const BEHAVIORAL_TOPICS: TopicSpec[] = [
  {
    id: "lp-interrogation",
    label: "leadership principle deep dive",
    instruction:
      "Interrogate the candidate's story with the STAR method: personal ownership, quantified results, trade-offs, and lessons learned.",
    fallbackQuestion: "Walk me through the situation and what you personally did."
  }
];

export function topicsFor(kind: RoundKind, mode: DesignMode): TopicSpec[] {
  switch (kind) {
    case "dsa_viva":
      return DSA_TOPICS;
    case "system_design":
      return mode === "LLD" ? LLD_TOPICS : HLD_TOPICS;
    case "behavioral":
      return BEHAVIORAL_TOPICS;
    case "oa":
      return [];
  }
}
