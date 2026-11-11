import { it, expect } from "vitest";
import { TRACK_COMPANIES } from "./companyTrackRegistry";
import { ACCENTURE_TRACKS } from "./accentureTracks";
import { ZOMATO_TRACKS } from "./zomatoTracks";
import { GOOGLE_TRACKS } from "./googleTracks";
import { PROBLEMS_DATABASE } from "./problemsRegistry";

const ALL: Record<string, Record<string, any>> = { google: GOOGLE_TRACKS, accenture: ACCENTURE_TRACKS, zomato: ZOMATO_TRACKS };

it("every generated track has 3 roles x 4 rounds x 10 sets with real, distinct problems", () => {
  for (const co of Object.keys(ALL)) {
    let n = 0;
    const tc = TRACK_COMPANIES[co];
    expect(Object.keys(ALL[co]).length).toBe(3);
    for (const role of Object.keys(ALL[co])) {
      expect(tc.normalizeRole(role)).toBe(role);
      for (const rd of ALL[co][role].rounds) {
        expect(rd.sets.length).toBe(10);
        for (const s of rd.sets) {
          expect(s.problemIds.length).toBe(rd.roundId === "round-1" ? 2 : 1);
          if (s.problemIds.length === 2) expect(s.problemIds[0]).not.toBe(s.problemIds[1]);
          expect(tc.getQuestionSet(role, rd.roundId, s.setId).problemIds).toEqual(s.problemIds);
          for (const id of s.problemIds) {
            const p = PROBLEMS_DATABASE[id]; expect(p, id).toBeTruthy(); n++;
            if (rd.roundId <= "round-2") { expect(p.visibleTestCases.length).toBeGreaterThan(0); expect(p.hiddenTestCases.length).toBeGreaterThan(1); }
            const ids = [...p.visibleTestCases, ...p.hiddenTestCases].map((t: any) => t.id); expect(new Set(ids).size).toBe(ids.length);
            expect(JSON.stringify(p)).not.toMatch(/Leadership Principle|Bar Raiser|Amazon/);
          }
        }
      }
    }
    expect(n).toBe(150);
  }
});
