// Founder question editor: reads and edits rows of dz_problems, keeps an audit trail so any change can be undone.
import { isDeepStrictEqual } from "node:util";
import { isValidProblem, problemsPool } from "./problemsDb";
import { builtinProblem } from "./builtinProblems";

export type Snap = {
  id: string; company: string; data: unknown; enabled: boolean; source: string;
  role: string | null; role_name: string | null; round_id: string | null; round_title: string | null;
  set_id: number | null; set_title: string | null; position: number | null;
};
export class EditorError extends Error { constructor(message: string, public status = 400) { super(message); } }

const COLS = "id, company, data, enabled, source, role, role_name, round_id, round_title, set_id, set_title, position";
let auditReady: Promise<void> | undefined;
async function pool() {
  const p = await problemsPool();
  if (!auditReady) {
    auditReady = (async () => {
      const c = await p.connect();
      try {
        await c.query("BEGIN");
        await c.query("SELECT pg_advisory_xact_lock(727277)");
        await c.query("CREATE TABLE IF NOT EXISTS dz_problem_audit (id bigserial PRIMARY KEY, problem_id text NOT NULL, action text NOT NULL, before jsonb NOT NULL DEFAULT '[]', after jsonb NOT NULL DEFAULT '[]', at text NOT NULL)");
        await c.query("CREATE INDEX IF NOT EXISTS dz_problem_audit_pid ON dz_problem_audit (problem_id, id DESC)");
        await c.query("COMMIT");
      } catch (e) {
        try { await c.query("ROLLBACK"); } catch { /* closing */ }
        throw e;
      } finally { c.release(); }
    })();
    auditReady.catch(() => { auditReady = undefined; });
  }
  await auditReady;
  return p;
}

type Q = { query: (sql: string, params?: unknown[]) => Promise<{ rows: any[]; rowCount: number | null }> };

async function snap(q: Q, id: string): Promise<Snap | undefined> {
  const r = await q.query(`SELECT ${COLS} FROM dz_problems WHERE id = $1`, [id]);
  return r.rows[0];
}
async function snapMany(q: Q, ids: string[]): Promise<Snap[]> {
  if (!ids.length) return [];
  const r = await q.query(`SELECT ${COLS} FROM dz_problems WHERE id = ANY($1::text[])`, [ids]);
  return r.rows;
}
async function upsert(q: Q, s: Snap) {
  await q.query(
    `INSERT INTO dz_problems (id, company, data, enabled, source, updated_at, role, role_name, round_id, round_title, set_id, set_title, position)
     VALUES ($1,$2,$3::jsonb,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)
     ON CONFLICT (id) DO UPDATE SET company=EXCLUDED.company, data=EXCLUDED.data, enabled=EXCLUDED.enabled, source=EXCLUDED.source, updated_at=EXCLUDED.updated_at,
       role=EXCLUDED.role, role_name=EXCLUDED.role_name, round_id=EXCLUDED.round_id, round_title=EXCLUDED.round_title, set_id=EXCLUDED.set_id, set_title=EXCLUDED.set_title, position=EXCLUDED.position`,
    [s.id, s.company, JSON.stringify(s.data), s.enabled, s.source, new Date().toISOString(), s.role, s.role_name, s.round_id, s.round_title, s.set_id, s.set_title, s.position]
  );
}

// Runs fn in one transaction; fn returns the list of ids it touched plus the "before" snapshots, then the audit row is written.
async function change(problemId: string, action: string, fn: (q: Q) => Promise<{ touched: string[]; before: Snap[] }>) {
  const p = await pool();
  const c = await p.connect();
  try {
    await c.query("BEGIN");
    await c.query("SELECT pg_advisory_xact_lock(727278)");
    const { touched, before } = await fn(c as unknown as Q);
    if (!touched.length && !before.length) { await c.query("COMMIT"); return; } // nothing changed: no history entry
    const after = await snapMany(c as unknown as Q, touched);
    await c.query("INSERT INTO dz_problem_audit (problem_id, action, before, after, at) VALUES ($1,$2,$3::jsonb,$4::jsonb,$5)",
      [problemId, action, JSON.stringify(before), JSON.stringify(after), new Date().toISOString()]);
    await c.query("COMMIT");
  } catch (e) {
    try { await c.query("ROLLBACK"); } catch { /* closing */ }
    throw e;
  } finally { c.release(); }
}

export async function listQuestions() {
  const p = await pool();
  const r = await p.query(
    `SELECT id, company, role, role_name AS "roleName", round_id AS "roundId", round_title AS "roundTitle", set_id AS "setId", set_title AS "setTitle",
            position, title, difficulty, enabled
     FROM dz_problems ORDER BY company, role, round_id, set_id, position NULLS LAST, id`);
  return r.rows;
}

export async function getQuestion(id: string) {
  const p = await pool();
  const row = await snap(p as unknown as Q, id);
  if (!row) throw new EditorError("Question not found.", 404);
  const h = await p.query("SELECT id, action, at FROM dz_problem_audit WHERE problem_id = $1 ORDER BY id DESC LIMIT 30", [id]);
  return { row, history: h.rows, hasBuiltin: builtinProblem(id) !== undefined };
}

function checkData(id: string, data: unknown) {
  if (!isValidProblem(id, data)) {
    const d = (data && typeof data === "object" ? data : {}) as Record<string, unknown>;
    const missing = ["id", "title", "difficulty", "company", "category", "tags", "paragraphs", "examples", "constraints", "visibleTestCases", "hiddenTestCases", "starterTemplates", "optimalComplexity"]
      .filter((k) => d[k] === undefined || d[k] === null);
    throw new EditorError("Invalid question: " + (d.id !== id ? "id must stay \"" + id + "\". " : "") +
      (missing.length ? "Missing: " + missing.join(", ") + ". " : "") + "Difficulty must be Easy, Medium or Hard; tags, paragraphs and constraints must be lists of text; test cases need an id; optimalComplexity needs time and space.");
  }
}

export async function updateQuestion(id: string, patch: { data?: unknown; enabled?: boolean }) {
  await change(id, "update", async (q) => {
    const cur = await snap(q, id);
    if (!cur) throw new EditorError("Question not found.", 404);
    const next: Snap = { ...cur };
    if (patch.data !== undefined) {
      checkData(id, patch.data);
      if (!isDeepStrictEqual(JSON.parse(JSON.stringify(patch.data)), cur.data)) next.data = patch.data;
    }
    if (typeof patch.enabled === "boolean") next.enabled = patch.enabled;
    if (isDeepStrictEqual(next, cur)) return { touched: [], before: [] };
    next.source = "edited";
    await upsert(q, next);
    return { touched: [id], before: [cur] };
  });
}

export async function resetQuestion(id: string) {
  const def = builtinProblem(id);
  if (!def || !isValidProblem(id, def)) throw new EditorError("No built-in version of this question exists in the code.", 404);
  await updateQuestion(id, { data: def });
}

export async function addQuestion(fromId: string, newId: string) {
  if (!/^[A-Za-z0-9_.-]{2,80}$/.test(newId)) throw new EditorError("New id may use letters, numbers, - _ . (2 to 80 characters).");
  await change(newId, "add", async (q) => {
    if (await snap(q, newId)) throw new EditorError("A question with that id already exists.", 409);
    const src = await snap(q, fromId);
    if (!src) throw new EditorError("Source question not found.", 404);
    const last = await q.query("SELECT coalesce(max(position),0) AS m FROM dz_problems WHERE company=$1 AND role IS NOT DISTINCT FROM $2 AND round_id IS NOT DISTINCT FROM $3 AND set_id IS NOT DISTINCT FROM $4", [src.company, src.role, src.round_id, src.set_id]);
    const data = { ...(src.data as Record<string, unknown>), id: newId, title: String((src.data as Record<string, unknown>).title) + " (copy)" };
    checkData(newId, data);
    await upsert(q, { ...src, id: newId, data, source: "edited", position: Number(last.rows[0].m) + 1 });
    return { touched: [newId], before: [] };
  });
}

export async function deleteQuestion(id: string) {
  await change(id, "delete", async (q) => {
    const cur = await snap(q, id);
    if (!cur) throw new EditorError("Question not found.", 404);
    await q.query("DELETE FROM dz_problems WHERE id = $1", [id]);
    return { touched: [], before: [cur] };
  });
}

// Moves a question to a position (1-based) in a set of the same company, role and round, then renumbers both sets 1..n.
export async function moveQuestion(id: string, toSetId: number, toPosition: number) {
  await change(id, "move", async (q) => {
    const cur = await snap(q, id);
    if (!cur) throw new EditorError("Question not found.", 404);
    if (cur.set_id == null) throw new EditorError("This question is not in a set.");
    const siblings = (await q.query("SELECT id, set_title FROM dz_problems WHERE company=$1 AND role IS NOT DISTINCT FROM $2 AND round_id IS NOT DISTINCT FROM $3 AND set_id=$4 AND id<>$5 ORDER BY position NULLS LAST, id", [cur.company, cur.role, cur.round_id, toSetId, id])).rows;
    let setTitle = cur.set_title;
    if (toSetId !== cur.set_id) {
      if (!siblings.length) throw new EditorError("Target set does not exist for this role and round.");
      setTitle = siblings[0].set_title;
    }
    const oldIds = toSetId === cur.set_id ? [] : (await q.query("SELECT id FROM dz_problems WHERE company=$1 AND role IS NOT DISTINCT FROM $2 AND round_id IS NOT DISTINCT FROM $3 AND set_id=$4 AND id<>$5 ORDER BY position NULLS LAST, id", [cur.company, cur.role, cur.round_id, cur.set_id, id])).rows.map((r: { id: string }) => r.id);
    const order: string[] = siblings.map((r: { id: string }) => r.id);
    order.splice(Math.max(0, Math.min(order.length, Math.floor(toPosition) - 1)), 0, id);
    const affected = Array.from(new Set(order.concat(oldIds)));
    const before = await snapMany(q, affected);
    await q.query("UPDATE dz_problems SET set_id=$1, set_title=$2, updated_at=$3 WHERE id=$4", [toSetId, setTitle, new Date().toISOString(), id]);
    for (let i = 0; i < order.length; i++) await q.query("UPDATE dz_problems SET position=$1 WHERE id=$2", [i + 1, order[i]]);
    for (let i = 0; i < oldIds.length; i++) await q.query("UPDATE dz_problems SET position=$1 WHERE id=$2", [i + 1, oldIds[i]]);
    return { touched: affected, before };
  });
}

// Puts rows back as they were before the audited change.
export async function undoChange(auditId: number) {
  const p = await pool();
  const a = await p.query("SELECT problem_id, before, after FROM dz_problem_audit WHERE id = $1", [auditId]);
  if (!a.rows[0]) throw new EditorError("History entry not found.", 404);
  const before = a.rows[0].before as Snap[], after = a.rows[0].after as Snap[];
  await change(a.rows[0].problem_id, "undo", async (q) => {
    const ids = Array.from(new Set(before.map((s) => s.id).concat(after.map((s) => s.id))));
    const now = await snapMany(q, ids);
    for (const s of after) if (!before.some((b) => b.id === s.id)) await q.query("DELETE FROM dz_problems WHERE id = $1", [s.id]);
    for (const s of before) await upsert(q, s);
    return { touched: before.map((s) => s.id), before: now };
  });
}
