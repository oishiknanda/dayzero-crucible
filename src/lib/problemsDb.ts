// Question overrides stored in Postgres. The built-in questions in src/data stay the default and the fallback:
// a question is replaced only when a valid, enabled row exists for it. With no DATABASE_URL, nothing changes.
import { dbReady } from "./auth/pgStore";

type Row = { id: string; data: unknown };

const SCHEMA = `
CREATE TABLE IF NOT EXISTS dz_problems (
  id text PRIMARY KEY,
  company text NOT NULL,
  data jsonb NOT NULL,
  enabled boolean NOT NULL DEFAULT true,
  source text NOT NULL DEFAULT 'seed',
  updated_at text NOT NULL
);
CREATE INDEX IF NOT EXISTS dz_problems_company_enabled ON dz_problems (company, enabled);
ALTER TABLE dz_problems ADD COLUMN IF NOT EXISTS role text;
ALTER TABLE dz_problems ADD COLUMN IF NOT EXISTS role_name text;
ALTER TABLE dz_problems ADD COLUMN IF NOT EXISTS round_id text;
ALTER TABLE dz_problems ADD COLUMN IF NOT EXISTS round_title text;
ALTER TABLE dz_problems ADD COLUMN IF NOT EXISTS set_id integer;
ALTER TABLE dz_problems ADD COLUMN IF NOT EXISTS set_title text;
ALTER TABLE dz_problems ADD COLUMN IF NOT EXISTS position integer;
ALTER TABLE dz_problems ADD COLUMN IF NOT EXISTS title text GENERATED ALWAYS AS (data->>'title') STORED;
ALTER TABLE dz_problems ADD COLUMN IF NOT EXISTS difficulty text GENERATED ALWAYS AS (data->>'difficulty') STORED;
CREATE OR REPLACE VIEW dz_problem_tree AS
  SELECT company, role_name AS role, round_title AS round, set_id AS set_no, set_title, position AS q_no, id, title, difficulty, enabled
  FROM dz_problems
  ORDER BY company, CASE role WHEN 'sde_intern' THEN 0 WHEN 'sde_1' THEN 1 WHEN 'sde_2' THEN 2 ELSE 3 END, role, round_id, set_id, position, id;`;

let tableReady: Promise<void> | undefined;
async function pool() {
  const p = await dbReady();
  if (!tableReady) {
    tableReady = (async () => {
      const c = await p.connect();
      try {
        await c.query("BEGIN");
        await c.query("SELECT pg_advisory_xact_lock(727275)");
        await c.query(SCHEMA);
        await c.query("COMMIT");
      } catch (e) {
        try { await c.query("ROLLBACK"); } catch { /* closing */ }
        throw e;
      } finally { c.release(); }
    })();
    tableReady.catch(() => { tableReady = undefined; });
  }
  await tableReady;
  return p;
}

const isStr = (v: unknown): v is string => typeof v === "string" && v.length > 0;
const isStrArr = (v: unknown) => Array.isArray(v) && v.every((x) => typeof x === "string");
const isCases = (v: unknown) => Array.isArray(v) && v.every((t) => t && typeof t === "object" && isStr((t as { id?: unknown }).id));

// A row is used only if it still looks like a complete question. A half-edited row is ignored, never served.
export function isValidProblem(id: string, d: unknown): boolean {
  if (!d || typeof d !== "object") return false;
  const o = d as Record<string, unknown>;
  const oc = o.optimalComplexity as Record<string, unknown> | undefined;
  return (
    o.id === id && isStr(o.title) && ["Easy", "Medium", "Hard"].indexOf(String(o.difficulty)) >= 0 && isStr(o.company) && isStr(o.category) &&
    isStrArr(o.tags) && isStrArr(o.paragraphs) && Array.isArray(o.examples) && isStrArr(o.constraints) &&
    isCases(o.visibleTestCases) && isCases(o.hiddenTestCases) && !!o.starterTemplates && typeof o.starterTemplates === "object" &&
    !!oc && typeof oc.time === "string" && typeof oc.space === "string"
  );
}

export type ProblemRow = {
  id: string; company: string; data: unknown;
  role: string; roleName: string; roundId: string; roundTitle: string; setId: number; setTitle: string; position: number;
};

// Returns the edited questions, and for each set that has rows in the database the ordered list of question ids
// that make it up (so removing, adding or re-ordering a question in the database changes the set).
// Key format: "company|role|roundId|setId" (company in lower case).
export async function listProblemOverrides(company: string, role?: string | null): Promise<{ problems: Record<string, unknown>; sets: Record<string, string[]> }> {
  if (!process.env.DATABASE_URL) return { problems: {}, sets: {} };
  const normalizedCompany = company.trim().toLowerCase();
  if (!normalizedCompany) return { problems: {}, sets: {} };
  const p = await pool();
  const normalizedRole = role && role.trim() ? role.trim() : null;
  const r = normalizedRole
    ? await p.query("SELECT id, data, company, role, round_id, set_id FROM dz_problems WHERE enabled = true AND lower(company) = $1 AND role = $2 ORDER BY position NULLS LAST, id", [normalizedCompany, normalizedRole])
    : await p.query("SELECT id, data, company, role, round_id, set_id FROM dz_problems WHERE enabled = true AND lower(company) = $1 ORDER BY position NULLS LAST, id", [normalizedCompany]);
  const problems: Record<string, unknown> = {};
  const sets: Record<string, string[]> = {};
  for (const row of r.rows as Array<Row & { company: string; role: string | null; round_id: string | null; set_id: number | null }>) {
    if (isValidProblem(row.id, row.data)) problems[row.id] = row.data;
    if (row.role && row.round_id && row.set_id != null) {
      const key = row.company.toLowerCase() + "|" + row.role + "|" + row.round_id + "|" + row.set_id;
      (sets[key] = sets[key] || []).push(row.id);
    }
  }
  return { problems, sets };
}

// Copies questions in. Rows that already exist are never overwritten, so your edits survive re-runs;
// only blank hierarchy columns are filled in.
export async function seedProblems(rows: ProblemRow[]): Promise<{ inserted: number; skipped: number }> {
  const p = await pool();
  let inserted = 0, skipped = 0;
  const now = new Date().toISOString();
  for (const x of rows) {
    const r = await p.query(
      `INSERT INTO dz_problems (id, company, data, source, updated_at, role, role_name, round_id, round_title, set_id, set_title, position)
       VALUES ($1,$2,$3::jsonb,'seed',$4,$5,$6,$7,$8,$9,$10,$11)
       ON CONFLICT (id) DO UPDATE SET
         role = COALESCE(dz_problems.role, EXCLUDED.role), role_name = COALESCE(dz_problems.role_name, EXCLUDED.role_name),
         round_id = COALESCE(dz_problems.round_id, EXCLUDED.round_id), round_title = COALESCE(dz_problems.round_title, EXCLUDED.round_title),
         set_id = COALESCE(dz_problems.set_id, EXCLUDED.set_id), set_title = COALESCE(dz_problems.set_title, EXCLUDED.set_title),
         position = COALESCE(dz_problems.position, EXCLUDED.position)
       RETURNING (xmax = 0) AS inserted`,
      [x.id, x.company, JSON.stringify(x.data), now, x.role, x.roleName, x.roundId, x.roundTitle, x.setId, x.setTitle, x.position]
    );
    if (r.rows[0] && r.rows[0].inserted) inserted++; else skipped++;
  }
  return { inserted, skipped };
}
