// Copies a company's built-in questions into the database (table dz_problems). Existing rows are never changed,
// so edits you made are safe when this is run again. The code files in src/data are not touched.
//
//   npx tsx scripts/seed-problems.ts zomato
import fs from "node:fs";
import path from "node:path";
import { ZOMATO_ALL_PROBLEMS } from "../src/data/problems/zomato/zomatoProblems";
import { ZOMATO_TRACKS } from "../src/data/zomatoTracks";
import { seedProblems, isValidProblem, type ProblemRow } from "../src/lib/problemsDb";

const root = process.cwd();
if (!process.env.DATABASE_URL) {
  for (const f of [".env.local", ".env"]) {
    try { const m = fs.readFileSync(path.join(root, f), "utf8").match(/^\s*DATABASE_URL\s*=\s*"?([^"\r\n]+)"?/m); if (m) { process.env.DATABASE_URL = m[1].trim(); break; } } catch { /* next */ }
  }
}
type Tracks = Record<string, { roleId: string; roleName: string; rounds: Array<{ roundId: string; title: string; sets: Array<{ setId: number; title: string; problemIds: string[] }> }> }>;
const SETS: Record<string, { name: string; data: Record<string, unknown>; tracks: Tracks }> = {
  zomato: { name: "Zomato", data: ZOMATO_ALL_PROBLEMS as unknown as Record<string, unknown>, tracks: ZOMATO_TRACKS as unknown as Tracks },
};
// Every question gets its place in the hierarchy: company > role > round > set > position.
function rowsFor(name: string, data: Record<string, unknown>, tracks: Tracks): ProblemRow[] {
  const rows: ProblemRow[] = [];
  for (const roleKey of Object.keys(tracks)) {
    const t = tracks[roleKey];
    for (const round of t.rounds) for (const set of round.sets) set.problemIds.forEach((id, i) => {
      rows.push({ id, company: name, data: data[id], role: t.roleId, roleName: t.roleName, roundId: round.roundId, roundTitle: round.title, setId: set.setId, setTitle: set.title, position: i + 1 });
    });
  }
  return rows;
}
async function main() {
  const key = (process.argv[2] || "").toLowerCase();
  const set = SETS[key];
  if (!set) { console.log("Usage: npx tsx scripts/seed-problems.ts " + Object.keys(SETS).join("|")); process.exit(1); }
  if (!process.env.DATABASE_URL) { console.log("DATABASE_URL is not set (environment or .env.local)."); process.exit(1); }
  const ids = Object.keys(set.data);
  const bad = ids.filter((id) => !isValidProblem(id, set.data[id]));
  if (bad.length) { console.log(bad.length + " built-in questions do not pass the shape check, e.g. " + bad.slice(0, 3).join(", ") + ". Nothing was copied."); process.exit(1); }
  const rows = rowsFor(set.name, set.data, set.tracks);
  if (rows.length !== ids.length) { console.log("Track file lists " + rows.length + " questions but the question file has " + ids.length + ". Nothing was copied."); process.exit(1); }
  const r = await seedProblems(rows);
  console.log(set.name + ": " + rows.length + " questions in code; copied " + r.inserted + ", already in the database " + r.skipped + " (blank hierarchy columns filled in).");
  process.exit(0);
}
main().catch((e) => { console.log("Failed: " + e.message); process.exit(1); });
