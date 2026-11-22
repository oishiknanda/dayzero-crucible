"use client";
// Loads question edits from the database (if any) BEFORE the interview page renders, then puts them over the
// built-in questions. Fails open: on any error or a slow answer, the built-in questions are used unchanged.
import { useEffect, useState, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { PROBLEMS_DATABASE, type ProblemDefinition } from "../data/problemsRegistry";
import { ZOMATO_TRACKS } from "../data/zomatoTracks";
import { GOOGLE_TRACKS } from "../data/googleTracks";
import { buildSafeProblemSetOverrides, type OverrideTrackMap } from "../lib/problemOverrides";
import { ProblemOverrideContext, type ProblemOverrideData } from "../lib/problemOverrideContext";

// Companies whose question sets can be re-arranged from the database. Adding a company = one line here.
const TRACKS: Record<string, OverrideTrackMap> = {
  google: GOOGLE_TRACKS as unknown as OverrideTrackMap,
  zomato: ZOMATO_TRACKS as unknown as OverrideTrackMap,
};

export default function ProblemOverrides({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();
  const company = (searchParams.get("company") || "").toLowerCase();
  const [ready, setReady] = useState(false);
  const [loadedCompany, setLoadedCompany] = useState("");
  const [overrides, setOverrides] = useState<ProblemOverrideData>({ problems: {}, sets: {} });
  useEffect(() => {
    if (!TRACKS[company]) { setLoadedCompany(company); setReady(true); return; }
    setReady(false);
    let cancelled = false;
    const ctl = new AbortController();
    const timer = setTimeout(() => ctl.abort(), 2500);
    fetch("/api/problems/overrides?company=" + encodeURIComponent(company), { signal: ctl.signal, cache: "no-store" })
      .then((r) => (r.ok ? r.json() : { problems: {} }))
      .then((d: { problems?: Record<string, ProblemDefinition>; sets?: Record<string, string[]> }) => {
        const p = d && d.problems ? d.problems : {};
        // A set with an unresolved built-in id stays entirely on its built-in question list.
        const safeSets = buildSafeProblemSetOverrides(TRACKS[company], company, d && d.sets ? d.sets : {}, (id) => !!p[id] || !!PROBLEMS_DATABASE[id]);
        setOverrides({ problems: p, sets: safeSets });
      })
      .catch(() => undefined)
      .then(() => { clearTimeout(timer); if (!cancelled) { setLoadedCompany(company); setReady(true); } });
    return () => { cancelled = true; ctl.abort(); clearTimeout(timer); };
  }, [company]);
  return ready && loadedCompany === company
    ? <ProblemOverrideContext.Provider value={overrides}>{children}</ProblemOverrideContext.Provider>
    : null;
}
