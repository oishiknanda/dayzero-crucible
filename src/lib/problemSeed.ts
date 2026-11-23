import type { ProblemRow } from "./problemsDb";
import { isValidProblem } from "./problemDefinitionValidation";

type SeedSet = { setId: number; title?: string; setName?: string; problemIds: string[] };
type SeedRound = { roundId: string; title: string; sets: SeedSet[] };
type SeedTrack = { roleId: string; roleName?: string; displayName?: string; rounds: SeedRound[] };
export type SeedTracks = Record<string, SeedTrack>;

export type ProblemSeedCheck = {
  rows: ProblemRow[];
  missingDefinitionIds: string[];
  invalidDefinitionIds: string[];
  untrackedDefinitionIds: string[];
  duplicateTrackIds: string[];
};

// Build and validate the complete company batch before the caller writes any rows.
export function prepareProblemRows(
  company: string,
  data: Record<string, unknown>,
  tracks: SeedTracks,
  deduplicateRepeatedIds = false
): ProblemSeedCheck {
  const rows: ProblemRow[] = [];
  const seen: Record<string, number> = {};
  const missingDefinitionIds: string[] = [];
  const invalidDefinitionIds: string[] = [];

  for (const roleKey of Object.keys(tracks)) {
    const track = tracks[roleKey];
    for (const round of track.rounds) for (const set of round.sets) {
      set.problemIds.forEach((id, index) => {
        const occurrence = seen[id] || 0;
        seen[id] = occurrence + 1;
        const definition = data[id];
        if (!definition) {
          missingDefinitionIds.push(id);
          return;
        }
        if (!isValidProblem(id, definition)) invalidDefinitionIds.push(id);
        if (deduplicateRepeatedIds && occurrence > 0) return;
        rows.push({
          id, company, data: definition, role: track.roleId, roleName: track.roleName || track.displayName || track.roleId,
          roundId: round.roundId, roundTitle: round.title, setId: set.setId,
          setTitle: set.title || set.setName || `Set ${set.setId}`, position: index + 1,
        });
      });
    }
  }

  const untrackedDefinitionIds = Object.keys(data).filter((id) => !seen[id]);
  const duplicateTrackIds = Object.keys(seen).filter((id) => seen[id] > 1);
  return {
    rows, missingDefinitionIds: missingDefinitionIds.filter((id, index, ids) => ids.indexOf(id) === index), invalidDefinitionIds,
    untrackedDefinitionIds, duplicateTrackIds,
  };
}
