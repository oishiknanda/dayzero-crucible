import { it, expect } from "vitest";
import { GOOGLE_TRACKS, getGoogleQuestionSet, normalizeGoogleRole } from "./googleTracks";
import { PROBLEMS_DATABASE } from "./problemsRegistry";
it("google matrix", () => {
  let n = 0;
  for (const role of Object.keys(GOOGLE_TRACKS)) {
    expect(GOOGLE_TRACKS[role].rounds.length).toBe(4);
    for (const rd of GOOGLE_TRACKS[role].rounds) {
      expect(rd.sets.length).toBe(10);
      for (const s of rd.sets) {
        expect(s.problemIds.length).toBe(rd.roundId === "round-1" ? 2 : 1);
        if (s.problemIds.length === 2) expect(s.problemIds[0]).not.toBe(s.problemIds[1]);
        for (const id of s.problemIds) {
          const p = PROBLEMS_DATABASE[id]; expect(p, id).toBeTruthy(); n++;
          expect(p.company).toBe("Google");
          if (rd.roundId <= "round-2") { expect(p.visibleTestCases.length).toBeGreaterThan(0); expect(p.hiddenTestCases.length).toBeGreaterThan(1); }
          const ids = [...p.visibleTestCases, ...p.hiddenTestCases].map(t => t.id); expect(new Set(ids).size).toBe(ids.length);
          expect(JSON.stringify(p)).not.toMatch(/Leadership Principle|Bar Raiser|Amazon/);
        }
      }
    }
  }
  expect(n).toBe(150);
  expect(getGoogleQuestionSet("l4_swe", "round-1", 7).problemIds[1]).toBe("goog-l4-s7-r1-q2");
  expect(normalizeGoogleRole("sde_2")).toBe("l4_swe");
});
