"use client";
// Loads question edits from the database (if any) BEFORE the interview page renders, then puts them over the
// built-in questions. Fails open: on any error or a slow answer, the built-in questions are used unchanged.
import { useEffect, useState, type ReactNode } from "react";
import { PROBLEMS_DATABASE, type ProblemDefinition } from "../data/problemsRegistry";
import { ZOMATO_TRACKS } from "../data/zomatoTracks";

// Companies whose question sets can be re-arranged from the database. Adding a company = one line here.
type TrackSet = { setId: number; problemIds: string[] };
type TrackMap = Record<string, { rounds: Array<{ roundId: string; sets: TrackSet[] }> }>;
const TRACKS: Record<string, TrackMap> = { zomato: ZOMATO_TRACKS as unknown as TrackMap };

let loaded = false;

export default function ProblemOverrides({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(loaded);
  useEffect(() => {
    if (loaded) return;
    let cancelled = false;
    const ctl = new AbortController();
    const timer = setTimeout(() => ctl.abort(), 2500);
    fetch("/api/problems/overrides", { signal: ctl.signal })
      .then((r) => (r.ok ? r.json() : { problems: {} }))
      .then((d: { problems?: Record<string, ProblemDefinition>; sets?: Record<string, string[]> }) => {
        const p = d && d.problems ? d.problems : {};
        for (const id of Object.keys(p)) PROBLEMS_DATABASE[id] = p[id];
        // A set that has rows in the database is made of exactly those questions, in that order.
        // Only questions we can actually show are used, and a set never ends up empty.
        const sets = d && d.sets ? d.sets : {};
        for (const key of Object.keys(sets)) {
          const [company, role, roundId, setNo] = key.split("|");
          const track = TRACKS[company] && TRACKS[company][role];
          const round = track && track.rounds.find((r) => r.roundId === roundId);
          const set = round && round.sets.find((s) => s.setId === Number(setNo));
          const ids = sets[key].filter((id) => PROBLEMS_DATABASE[id]);
          if (set && ids.length > 0) set.problemIds = ids;
        }
        loaded = true;
      })
      .catch(() => undefined)
      .then(() => { clearTimeout(timer); if (!cancelled) setReady(true); });
    return () => { cancelled = true; ctl.abort(); clearTimeout(timer); };
  }, []);
  return ready ? <>{children}</> : null;
}
