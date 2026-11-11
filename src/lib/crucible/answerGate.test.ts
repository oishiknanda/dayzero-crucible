// ANSWER GATE TESTS (Rounds 2, 3 and 4). Runner: vitest.
// Pure classifier tests plus the strike / free-clarification / safety-valve decisions.

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import {
  classifyCandidateMessage,
  decideGate,
  buildReaskReply,
  buildClarificationReply,
  REASK_TEMPLATES,
  NUDGE_REPLIES,
  MAX_CONSECUTIVE_NON_ANSWERS,
  MAX_FREE_CLARIFICATIONS,
  type AnswerGateContext,
  type AnswerClass,
  type GateSignal,
} from "./answerGate";

const R2_INIT: AnswerGateContext = { round: 2, phase: "INITIAL" };
const R2_FOLLOW: AnswerGateContext = { round: 2, phase: "FOLLOW_UPS" };
const R3_FOLLOW: AnswerGateContext = { round: 3, phase: "FOLLOW_UPS" };
const R3_DRAFT: AnswerGateContext = { round: 3, phase: "DRAFTING" };

function expectClass(
  inputs: string[],
  ctx: AnswerGateContext,
  classification: AnswerClass,
  gate: GateSignal
) {
  for (const input of inputs) {
    const result = classifyCandidateMessage(input, ctx);
    expect(result, JSON.stringify(input)).toEqual({ classification, gate });
  }
}

beforeEach(() => {
  delete process.env.ANSWER_GATE_ENABLED;
});

describe("real answers pass (Round 2 and Round 3)", () => {
  const answers = [
    "O(n log n)", "O(n)", "O(1) lookups", "hash map", "hash table", "two pointers", "use a heap", "BFS", "DFS",
    "binary search", "sorting first", "dp solution", "a mutex per shard", "circuit breaker with retries",
    "shard the database", "cache layer", "backpressure", "idempotent write", "replica set",
    "I led the migration and cut p99 latency by 40%",
    "I designed the API and own the throughput numbers",
    "My approach uses a hash map with O(n) time complexity and a heap for priority access",
    "My design uses concurrent hash maps with proper lock granularity",
    "I designed this architecture with proper concurrency primitives",
    "please explain your algorithm carefully",
    "{ return a + b; }", "const f = (x: number) => x + 1", "var x = 5;", "function foo() {}",
    "this is a lot of words here",
  ];
  it("Round 2", () => expectClass(answers, R2_INIT, "answer", "none"));
  it("Round 3", () => expectClass(answers, R3_FOLLOW, "answer", "none"));
});

describe("honest weak answers stay answers (never blocked)", () => {
  const weak = ["I don't know", "no idea", "not sure", "skip", "pass", "idk"];
  it("Round 2", () => expectClass(weak, R2_INIT, "answer", "none"));
  it("Round 3", () => expectClass(weak, R3_FOLLOW, "answer", "none"));
});

describe("non-Latin text is never flagged", () => {
  const hindi = "\u0928\u0939\u0940\u0902 \u092E\u0941\u091D\u0947 \u0938\u092E\u091D \u0928\u0939\u0940\u0902 \u0906\u092F\u093E";
  const chinese = "\u6211\u4E0D\u592A\u4E86\u89E3";
  const russian = "\u041F\u0440\u0438\u0432\u0435\u0442";
  it("passes through as answer", () => expectClass([hindi, chinese, russian], R2_INIT, "answer", "none"));
});

describe("non-answers are re-asked", () => {
  const nonAnswers = [
    "hello", "Hello!", "hi", "hey", "ok", "okay", "yes", "no", "yeah", "hmm", "um", "uh", "test", "testing",
    "thanks", "thank you", "Thank you.", "you", "bye", "sorry", "good morning", "can you hear me", "hi there",
    "asdf", "aaaaa", "qwertyuiop", "bcdfg hjkl", "asdf asdf asdf",
    "what's the weather today", "what is the weather", "what is the time right now", "how are you doing today",
    "what the hell",
  ];
  it("Round 2 INITIAL", () => expectClass(nonAnswers, R2_INIT, "non_answer", "reask"));
  it("Round 2 FOLLOW_UPS", () => expectClass(nonAnswers, R2_FOLLOW, "non_answer", "reask"));
  it("Round 3 FOLLOW_UPS", () => expectClass(nonAnswers, R3_FOLLOW, "non_answer", "reask"));
  it("Round 3 DRAFTING", () => expectClass(nonAnswers, R3_DRAFT, "non_answer", "reask"));
});

describe("empty, invisible, emoji and punctuation-only text", () => {
  const empties = [
    "", "   ", "  ", "\u00A0", "\u00A0\u00A0 ", "\u200B", "\uFEFF", "\u200Bhello", "he\u200Bllo", "\uFEFFok",
    "\uD83D\uDC4B\uD83D\uDE00", "!!!???", "...", "?",
  ];
  it("are non-answers", () => expectClass(empties, R2_INIT, "non_answer", "reask"));
});

describe("clarification requests are free repeats, not answers", () => {
  const clar = [
    "what", "what?", "What??", "huh", "pardon", "repeat", "can you repeat", "rephrase",
    "I don't understand", "I didn\u2019t get that", "what do you mean", "can you explain the question",
  ];
  it("Round 2", () => expectClass(clar, R2_INIT, "clarification", "clarification"));
  it("Round 3", () => expectClass(clar, R3_FOLLOW, "clarification", "clarification"));
});

describe("overlap with the problem or question keeps short text an answer", () => {
  it("title overlap", () => {
    expect(
      classifyCandidateMessage("it is about rotation", { ...R2_INIT, problemTitle: "Rotate Array by rotation" }).classification
    ).toBe("answer");
  });
  it("question overlap", () => {
    expect(
      classifyCandidateMessage("the idea is memory pressure", { ...R2_FOLLOW, questionText: "How does memory pressure change your design?" }).classification
    ).toBe("answer");
  });
  it("unrelated chatter is still a non-answer even with context", () => {
    expect(
      classifyCandidateMessage("what's the weather today", { ...R2_FOLLOW, questionText: "Walk me through the complexity." }).classification
    ).toBe("non_answer");
  });
});

describe("Round 4 behavioral gate and Round 1 bypass", () => {
  const junk = ["hello", "what", "ok", "asdf", "thank you", ""];
  it("Round 1 always passes through", () => {
    for (const m of junk) expect(classifyCandidateMessage(m, { round: 1, phase: "INITIAL" })).toEqual({ classification: "answer", gate: "none" });
  });
  it("Round 4 gates junk and clarification but accepts concise behavioral answers", () => {
    expect(classifyCandidateMessage("asdf", { round: 4, phase: "BEHAVIORAL" })).toEqual({ classification: "non_answer", gate: "reask" });
    expect(classifyCandidateMessage("what?", { round: 4, phase: "BEHAVIORAL" })).toEqual({ classification: "clarification", gate: "clarification" });
    expect(classifyCandidateMessage("I would ask the team for evidence", { round: 4, phase: "BEHAVIORAL" }).classification).toBe("answer");
  });
  it("Round 4 force-advances after the warning limit", () => {
    expect(decideGate("asdf", { round: 4, phase: "BEHAVIORAL" }, { consecutiveNonAnswers: 3, clarificationsUsed: 0 }).action).toBe("force_advance");
  });
});

describe("feature flag and fail-open", () => {
  afterEach(() => {
    delete process.env.ANSWER_GATE_ENABLED;
    vi.restoreAllMocks();
  });

  it("ANSWER_GATE_ENABLED=false makes everything an answer", () => {
    process.env.ANSWER_GATE_ENABLED = "false";
    expect(classifyCandidateMessage("hello", R2_INIT)).toEqual({ classification: "answer", gate: "none" });
    expect(decideGate("hello", R2_INIT, { consecutiveNonAnswers: 0, clarificationsUsed: 0 }).action).toBe("proceed");
  });

  it("the flag is read on every call, not once at import", () => {
    process.env.ANSWER_GATE_ENABLED = "false";
    expect(classifyCandidateMessage("hello", R2_INIT).classification).toBe("answer");
    delete process.env.ANSWER_GATE_ENABLED;
    expect(classifyCandidateMessage("hello", R2_INIT).classification).toBe("non_answer");
  });

  it("a thrown error fails open as a normal answer", () => {
    vi.spyOn(console, "error").mockImplementation(() => undefined);
    vi.spyOn(String.prototype, "normalize").mockImplementation(() => {
      throw new Error("boom");
    });
    expect(classifyCandidateMessage("hello", R2_INIT)).toEqual({ classification: "answer", gate: "none" });
  });

  it("odd input never throws", () => {
    for (const w of ["\u0000", "\uD800", "a".repeat(20000), "$& $1 {question}", "\n\n\t"]) {
      expect(() => classifyCandidateMessage(w, R2_INIT)).not.toThrow();
    }
    const notAString = 42 as unknown as string;
    expect(classifyCandidateMessage(notAString, R2_INIT)).toEqual({ classification: "answer", gate: "none" });
  });
});

describe("decideGate: strikes, free clarifications, safety valve", () => {
  const fresh = { consecutiveNonAnswers: 0, clarificationsUsed: 0 };

  it("a real answer proceeds and resets strikes", () => {
    const d = decideGate("use a heap", R2_FOLLOW, { consecutiveNonAnswers: 2, clarificationsUsed: 1 });
    expect(d.action).toBe("proceed");
    expect(d.strike).toBe(0);
  });

  it("non-answers re-ask with rising strikes, then the safety valve fires on the 4th", () => {
    let c = { ...fresh };
    const seen: string[] = [];
    for (const msg of ["hello", "ok", "asdf", "thank you"]) {
      const d = decideGate(msg, R2_FOLLOW, c);
      seen.push(d.action + ":" + d.strike);
      c = { consecutiveNonAnswers: d.strike, clarificationsUsed: d.clarificationsUsed };
    }
    expect(seen).toEqual(["reask:1", "reask:2", "reask:3", "force_advance:4"]);
    expect(MAX_CONSECUTIVE_NON_ANSWERS).toBe(3);
  });

  it("clarifications are free twice, then count as strikes", () => {
    let c = { ...fresh };
    const seen: string[] = [];
    for (let i = 0; i < 4; i++) {
      const d = decideGate("what?", R3_FOLLOW, c);
      seen.push(d.action + ":" + d.strike + ":" + d.clarificationsUsed);
      c = { consecutiveNonAnswers: d.strike, clarificationsUsed: d.clarificationsUsed };
    }
    expect(seen).toEqual(["clarify:0:1", "clarify:0:2", "reask:1:2", "reask:2:2"]);
    expect(MAX_FREE_CLARIFICATIONS).toBe(2);
  });

  it("CODING and DRAFTING nudge finitely, then reach the safety valve", () => {
    const c = { consecutiveNonAnswers: 3, clarificationsUsed: 2 };
    expect(decideGate("hello", { round: 2, phase: "CODING" }, c).action).toBe("force_advance");
    expect(decideGate("hello", R3_DRAFT, c).action).toBe("force_advance");
    expect(decideGate("hello", R3_DRAFT, { consecutiveNonAnswers: 2, clarificationsUsed: 0 }).action).toBe("nudge");
  });

  it("a real answer after non-answers continues normally", () => {
    const d = decideGate("I would use a min heap of size k", R2_FOLLOW, { consecutiveNonAnswers: 3, clarificationsUsed: 0 });
    expect(d.action).toBe("proceed");
  });

  it("negative or fractional counters are tolerated", () => {
    const d = decideGate("hello", R2_FOLLOW, { consecutiveNonAnswers: -5, clarificationsUsed: 1.7 });
    expect(d.action).toBe("reask");
    expect(d.strike).toBe(1);
  });

  it("Round 4 is gated by decideGate too", () => {
    expect(decideGate("hello", { round: 4, phase: "BEHAVIORAL" }, { consecutiveNonAnswers: 0, clarificationsUsed: 0 }).action).toBe("reask");
  });
});

describe("deterministic wording", () => {
  const q = "What is the Big-O of your approach?";

  it("repeats the question verbatim and escalates", () => {
    const [s1, s2, s3] = [buildReaskReply(1, q), buildReaskReply(2, q), buildReaskReply(3, q)];
    for (const r of [s1, s2, s3]) expect(r).toContain(q);
    expect(new Set([s1, s2, s3]).size).toBe(3);
    expect(buildReaskReply(9, q)).toContain(q);
  });

  it("has at least 5 wordings per strike level", () => {
    for (const level of [1, 2, 3] as const) expect(REASK_TEMPLATES[level].length).toBeGreaterThanOrEqual(5);
  });

  it("is deterministic and rotates by index", () => {
    expect(buildReaskReply(1, q, 0)).toBe(buildReaskReply(1, q, 0));
    expect(buildReaskReply(1, q, 0)).not.toBe(buildReaskReply(1, q, 1));
    expect(buildReaskReply(1, q, 5)).toBe(buildReaskReply(1, q, 0));
  });

  it("keeps special replacement characters in the question intact", () => {
    const odd = "Cost is $& and $1 and $$?";
    expect(buildReaskReply(1, odd)).toContain(odd);
    expect(buildClarificationReply(odd)).toContain(odd);
  });

  it("clarification wording repeats the question and nudges are fixed text", () => {
    expect(buildClarificationReply(q)).toContain(q);
    expect(buildClarificationReply(q)).toBe("Sure, let me say it again, take your time: " + q);
    expect(NUDGE_REPLIES.CODING).toContain("Submit Solution");
    expect(NUDGE_REPLIES.DRAFTING).toContain("Submit Architecture Defense");
  });
});

describe("source files stay ASCII", () => {
  it("answerGate.ts has no non-ASCII characters", async () => {
    const { readFileSync } = await import("node:fs");
    const src = readFileSync(new URL("./answerGate.ts", import.meta.url), "utf8");
    expect(/[^\x00-\x7F]/.test(src)).toBe(false);
  });
});
