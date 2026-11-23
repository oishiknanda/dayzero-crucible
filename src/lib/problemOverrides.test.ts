import { describe, expect, it } from "vitest";
import { buildSafeProblemSetOverrides, type OverrideTrackMap } from "./problemOverrides";

describe("applyProblemSetOverrides", () => {
  it("applies a non-empty, resolvable replacement in database order", () => {
    const tracks: OverrideTrackMap = { role: { rounds: [{ roundId: "round-1", sets: [{ setId: 1, problemIds: ["q1", "q2"] }] }] } };
    const safe = buildSafeProblemSetOverrides(tracks, "google", { "google|role|round-1|1": ["q2", "q1"] }, () => true);
    expect(safe["google|role|round-1|1"]).toEqual(["q2", "q1"]);
    expect(tracks.role.rounds[0].sets[0].problemIds).toEqual(["q1", "q2"]);
  });

  it("leaves a built-in set untouched when one built-in id is unresolved", () => {
    const tracks: OverrideTrackMap = { role: { rounds: [{ roundId: "round-1", sets: [{ setId: 1, problemIds: ["q1", "missing"] }] }] } };
    const safe = buildSafeProblemSetOverrides(tracks, "amazon", { "amazon|role|round-1|1": ["q1"] }, (id) => id !== "missing");
    expect(safe["amazon|role|round-1|1"]).toBeUndefined();
    expect(tracks.role.rounds[0].sets[0].problemIds).toEqual(["q1", "missing"]);
  });

  it("does not rewrite an Amazon set with an invalid built-in definition even when a DB row resolves it", () => {
    const tracks: OverrideTrackMap = { role: { rounds: [{ roundId: "round-1", sets: [{ setId: 1, problemIds: ["q1", "invalid"] }] }] } };
    const safe = buildSafeProblemSetOverrides(
      tracks, "amazon", { "amazon|role|round-1|1": ["q1"] }, () => true, (id) => id !== "invalid"
    );
    expect(safe["amazon|role|round-1|1"]).toBeUndefined();
    expect(tracks.role.rounds[0].sets[0].problemIds).toEqual(["q1", "invalid"]);
  });

  it("never empties a set when its database replacement has no resolvable ids", () => {
    const tracks: OverrideTrackMap = { role: { rounds: [{ roundId: "round-1", sets: [{ setId: 1, problemIds: ["q1"] }] }] } };
    const safe = buildSafeProblemSetOverrides(tracks, "google", { "google|role|round-1|1": ["missing"] }, () => false);
    expect(safe["google|role|round-1|1"]).toBeUndefined();
    expect(tracks.role.rounds[0].sets[0].problemIds).toEqual(["q1"]);
  });
});
