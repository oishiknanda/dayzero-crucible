// Copies a company's built-in questions into dz_problems. Existing question data is never overwritten.
// Usage: npx tsx scripts/seed-problems.ts <google|accenture|zomato|all>
import fs from "node:fs";
import path from "node:path";
import { GOOGLE_ALL_PROBLEMS } from "../src/data/problems/google/googleProblems";
import { GOOGLE_TRACKS } from "../src/data/googleTracks";
import { ACCENTURE_ALL_PROBLEMS } from "../src/data/problems/accenture/accentureProblems";
import { ACCENTURE_TRACKS } from "../src/data/accentureTracks";
import { ZOMATO_ALL_PROBLEMS } from "../src/data/problems/zomato/zomatoProblems";
import { ZOMATO_TRACKS } from "../src/data/zomatoTracks";
import { prepareProblemRows, type SeedTracks } from "../src/lib/problemSeed";
import { seedProblems } from "../src/lib/problemsDb";

const root = process.cwd();
if (!process.env.DATABASE_URL) {
  for (const file of [".env.local", ".env"]) {
    try {
      const match = fs.readFileSync(path.join(root, file), "utf8").match(/^\s*DATABASE_URL\s*=\s*"?([^"\r\n]+)"?/m);
      if (match) { process.env.DATABASE_URL = match[1].trim(); break; }
    } catch { /* try the next environment file */ }
  }
}

type Source = { name: string; data: Record<string, unknown>; tracks: SeedTracks };
const SOURCES: Record<string, Source> = {
  google: { name: "Google", data: GOOGLE_ALL_PROBLEMS, tracks: GOOGLE_TRACKS as unknown as SeedTracks },
  accenture: { name: "Accenture", data: ACCENTURE_ALL_PROBLEMS, tracks: ACCENTURE_TRACKS as unknown as SeedTracks },
  zomato: { name: "Zomato", data: ZOMATO_ALL_PROBLEMS, tracks: ZOMATO_TRACKS as unknown as SeedTracks },
};

function printIssues(key: string, check: ReturnType<typeof prepareProblemRows>) {
  const issues: Array<[string, string[]]> = [
    ["Track ids without definitions", check.missingDefinitionIds],
    ["Definitions failing isValidProblem", check.invalidDefinitionIds],
    ["Definitions absent from tracks", check.untrackedDefinitionIds],
    ["Ids referenced more than once", check.duplicateTrackIds],
  ];
  for (const [label, ids] of issues) if (ids.length) console.error(key + " — " + label + ": " + ids.join(", "));
}

async function main() {
  const key = (process.argv[2] || "").toLowerCase();
  const keys = key === "all" ? Object.keys(SOURCES) : [key];
  if (!keys.length || keys.some((name) => !SOURCES[name])) {
    console.error("Usage: npx tsx scripts/seed-problems.ts " + Object.keys(SOURCES).join("|") + "|all");
    process.exitCode = 1;
    return;
  }
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL is not set (environment or .env.local).");
    process.exitCode = 1;
    return;
  }

  // Validate every requested company before writing any company, so a bad batch is a no-op.
  const batches = keys.map((name) => ({ key: name, source: SOURCES[name], check: prepareProblemRows(SOURCES[name].name, SOURCES[name].data, SOURCES[name].tracks) }));
  let invalid = false;
  for (const batch of batches) {
    printIssues(batch.key, batch.check);
    if (batch.check.missingDefinitionIds.length || batch.check.invalidDefinitionIds.length || batch.check.untrackedDefinitionIds.length || batch.check.duplicateTrackIds.length) invalid = true;
  }
  if (invalid) {
    console.error("Nothing was copied.");
    process.exitCode = 1;
    return;
  }

  for (const batch of batches) {
    const result = await seedProblems(batch.check.rows);
    console.log(batch.source.name + ": " + batch.check.rows.length + " questions in code; copied " + result.inserted + ", already in the database " + result.skipped + " (blank hierarchy columns filled in).");
  }
}

main().catch((error: unknown) => {
  console.error("Failed:", error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
