export type OverrideTrackMap = Record<string, {
  rounds: Array<{ roundId: string; sets: Array<{ setId: number; problemIds: string[] }> }>;
}>;

// Apply only complete, resolvable set replacements. Missing built-in definitions keep the
// original set intact, and an empty database result can never empty a set.
export function buildSafeProblemSetOverrides(
  trackMap: OverrideTrackMap,
  company: string,
  sets: Record<string, string[]>,
  canResolve: (id: string) => boolean
): Record<string, string[]> {
  const safeSets: Record<string, string[]> = {};
  for (const key of Object.keys(sets)) {
    const [setCompany, role, roundId, setNo] = key.split("|");
    if (setCompany !== company) continue;
    const track = trackMap[role];
    const round = track && track.rounds.find((item) => item.roundId === roundId);
    const set = round && round.sets.find((item) => item.setId === Number(setNo));
    if (!set || set.problemIds.some((id) => !canResolve(id))) continue;
    const ids = sets[key].filter(canResolve);
    if (ids.length > 0) safeSets[key] = ids;
  }
  return safeSets;
}
