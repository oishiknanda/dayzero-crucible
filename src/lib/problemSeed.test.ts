import { describe, expect, it } from "vitest";
import { GOOGLE_TRACKS } from "../data/googleTracks";
import { GOOGLE_ALL_PROBLEMS } from "../data/problems/google/googleProblems";
import { prepareProblemRows, type SeedTracks } from "./problemSeed";

describe("prepareProblemRows", () => {
  it("maps all Google track questions into hierarchy rows", () => {
    const check = prepareProblemRows("Google", GOOGLE_ALL_PROBLEMS, GOOGLE_TRACKS);
    expect(check.rows).toHaveLength(150);
    expect(check.missingDefinitionIds).toEqual([]);
    expect(check.invalidDefinitionIds).toEqual([]);
    expect(check.untrackedDefinitionIds).toEqual([]);
    expect(check.duplicateTrackIds).toEqual([]);
    expect(check.rows[0]).toMatchObject({
      id: "goog-intern-s1-r1-q1", company: "Google", role: "swe_intern",
      roleName: "Google SWE Intern", roundId: "round-1", setId: 1, position: 1,
    });
  });

  it("reports missing, invalid, untracked, and duplicated ids before a write", () => {
    const validId = "goog-intern-s1-r1-q1";
    const invalidId = "goog-invalid";
    const tracks: SeedTracks = {
      intern: {
        roleId: "intern", roleName: "Test Intern", rounds: [{ roundId: "round-1", title: "Round 1", sets: [
          { setId: 1, title: "Set 1", problemIds: [validId, validId, "missing-id", invalidId] },
        ] }],
      },
    };
    const check = prepareProblemRows("Google", {
      [validId]: GOOGLE_ALL_PROBLEMS[validId],
      [invalidId]: { ...GOOGLE_ALL_PROBLEMS[validId], id: "wrong-id" },
      orphan: GOOGLE_ALL_PROBLEMS[validId],
    }, tracks);

    expect(check.missingDefinitionIds).toEqual(["missing-id"]);
    expect(check.invalidDefinitionIds).toEqual([invalidId]);
    expect(check.untrackedDefinitionIds).toEqual(["orphan"]);
    expect(check.duplicateTrackIds).toEqual([validId]);
  });
});
