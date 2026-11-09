// Route-level checks for the answer gate backstop and history isolation (no AI keys needed).
import { describe, it, expect, beforeEach } from "vitest";
import { NextRequest } from "next/server";
import { POST } from "./route";

async function call(body: Record<string, unknown>) {
  const req = new NextRequest("http://localhost/api/crucible/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const res = await POST(req);
  return (await res.json()) as Record<string, unknown>;
}

const AI = (text: string, kind?: string) => ({ sender: "ai", text, ...(kind ? { kind } : {}) });
const ME = (text: string, kind?: string) => ({ sender: "candidate", text, ...(kind ? { kind } : {}) });

beforeEach(() => {
  delete process.env.GROQ_API_KEY;
  delete process.env.GEMINI_API_KEY;
  delete process.env.ANSWER_GATE_ENABLED;
});

describe("Round 2 server backstop", () => {
  it("re-asks instead of advancing on a non-answer", async () => {
    const data = await call({
      isRound2: true, roundSlug: "round-2", vivaPhase: "FOLLOW_UPS", problemTitle: "Top K",
      candidateMessage: "hello",
      dialogueHistory: [AI("Walk me through the time and space complexity of your solution.")],
    });
    expect(data.gate).toBe("reask");
    expect(data.accepted).toBe(false);
    expect(String(data.reply)).toContain("Walk me through the time and space complexity of your solution.");
    expect(data.turn).toBeUndefined();
  });

  it("a real answer follows the normal path and counts turns", async () => {
    const data = await call({
      isRound2: true, roundSlug: "round-2", vivaPhase: "FOLLOW_UPS", problemTitle: "Top K",
      candidateMessage: "It is O(n log k) time with a heap of size k",
      dialogueHistory: [AI("Q1"), ME("a heap"), AI("Q2")],
    });
    expect(data.gate).toBeUndefined();
    expect(data.turn).toBe(2);
  });

  it("tagged non-answers and re-asks never count as turns", async () => {
    const clean = await call({
      isRound2: true, roundSlug: "round-2", vivaPhase: "FOLLOW_UPS", problemTitle: "Top K",
      candidateMessage: "O(n) extra space for the hash map",
      dialogueHistory: [AI("Q1"), ME("a heap"), AI("Q2")],
    });
    const noisy = await call({
      isRound2: true, roundSlug: "round-2", vivaPhase: "FOLLOW_UPS", problemTitle: "Top K",
      candidateMessage: "O(n) extra space for the hash map",
      dialogueHistory: [
        AI("Q1"), ME("hello", "non_answer"), AI("Let me repeat", "reask"), ME("a heap"),
        ME("ok", "non_answer"), AI("again", "reask"), AI("Q2"),
      ],
    });
    expect(noisy).toEqual(clean);
  });

  it("the third answer still concludes the defense", async () => {
    const data = await call({
      isRound2: true, roundSlug: "round-2", vivaPhase: "FOLLOW_UPS", problemTitle: "Top K", questionIndex: 1,
      candidateMessage: "Use a streaming sketch with a heap",
      dialogueHistory: [AI("Q1"), ME("a heap"), AI("Q2"), ME("empty array handled"), ME("hello", "non_answer")],
    });
    expect(data.isCompleted).toBe(true);
  });

  it("gateForced and the feature flag bypass the backstop", async () => {
    const forced = await call({
      isRound2: true, roundSlug: "round-2", vivaPhase: "FOLLOW_UPS", problemTitle: "Top K",
      candidateMessage: "hello", gateForced: true, dialogueHistory: [AI("Q1")],
    });
    expect(forced.gate).toBeUndefined();
    process.env.ANSWER_GATE_ENABLED = "false";
    const off = await call({
      isRound2: true, roundSlug: "round-2", vivaPhase: "FOLLOW_UPS", problemTitle: "Top K",
      candidateMessage: "hello", dialogueHistory: [AI("Q1")],
    });
    expect(off.gate).toBeUndefined();
  });
});

describe("Round 3 server backstop", () => {
  it("nudges during drafting and re-asks during the interrogation", async () => {
    const drafting = await call({ isRound3: true, roundSlug: "round-3", vivaPhase: "INITIAL", problemTitle: "Pub/Sub", candidateMessage: "hi" });
    expect(String(drafting.reply)).toContain("Submit Architecture Defense");
    const grilling = await call({
      isRound3: true, roundSlug: "round-3", vivaPhase: "FOLLOW_UPS", problemTitle: "Pub/Sub", candidateMessage: "ok",
      dialogueHistory: [AI("How do you handle backpressure?")],
    });
    expect(grilling.gate).toBe("reask");
    expect(String(grilling.reply)).toContain("How do you handle backpressure?");
  });

  it("non-answers do not count toward the 3 turns", async () => {
    const data = await call({
      isRound3: true, roundSlug: "round-3", vivaPhase: "FOLLOW_UPS", problemTitle: "Pub/Sub",
      candidateMessage: "A mutex per topic keeps publishers from racing",
      dialogueHistory: [AI("Q1"), ME("hello", "non_answer"), AI("again", "reask"), ME("sharded locks"), AI("Q2")],
    });
    expect(data.turn).toBe(2);
    expect(data.isCompleted).toBeUndefined();
  });
});

describe("Round 4 is untouched", () => {
  it("never re-asks, even for 'hello'", async () => {
    const data = await call({
      isRound4: true, roundSlug: "round-4", problemTitle: "Ownership", candidateMessage: "hello",
      dialogueHistory: [AI("Tell me about a time you owned a failure.")],
    });
    expect(data.gate).toBeUndefined();
    expect(data.accepted).toBeUndefined();
  });
});
