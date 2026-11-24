import { describe, expect, it } from "vitest";
import { cleanEvents, listSessions, saveEvents, sessionTimeline, verdictFor } from "./proctorEvents";

describe("proctoring evidence log", () => {
  it("cleans incoming events and rejects junk", () => {
    const e = cleanEvents([{ code: "head-away", detail: "x".repeat(900), counted: true }, { code: "Bad Code!" }, null, { code: "phone-detected", at: "not a date" }]);
    expect(e.map((x) => x.code)).toEqual(["head-away", "phone-detected"]);
    expect(e[0].detail!.length).toBe(300);
  });
  it("verdicts are simple and explainable", () => {
    expect(verdictFor(0, 2)).toBe("clean");
    expect(verdictFor(0, 3)).toBe("review");
    expect(verdictFor(1, 0)).toBe("review");
    expect(verdictFor(2, 0)).toBe("flagged");
  });
});

// Needs a local Postgres: DATABASE_URL=... npx vitest run src/lib/proctorEvents.test.ts
(process.env.DATABASE_URL ? describe : describe.skip)("evidence log (database)", () => {
  it("stores events and shows them as a session timeline", async () => {
    const sid = "test-session-" + Date.now();
    await saveEvents({ sessionId: sid, company: "zomato", round: "round-1" }, cleanEvents([{ code: "phone-detected", counted: true }, { code: "sound-detected" }, { code: "head-away", counted: true }]));
    const t = await sessionTimeline(sid);
    expect(t.map((x: { strength: string }) => x.strength)).toEqual(["strong", "info", "weak"]);
    const s = (await listSessions()).find((x) => x.sessionId === sid)!;
    expect(s.strong).toBe(1); expect(s.counted).toBe(2); expect(s.verdict).toBe("review");
  });
});
