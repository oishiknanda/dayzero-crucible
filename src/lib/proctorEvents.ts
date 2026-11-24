// Proctoring evidence log: one row per event so a human can review a session afterwards.
// Text only (no images or video). Rows older than the retention period are deleted. Needs DATABASE_URL; without it nothing is stored.
import { dbReady } from "./auth/pgStore";
import { strengthOf } from "./crucible/proctoringSignals";

export const RETENTION_DAYS = Number(process.env.PROCTOR_RETENTION_DAYS || 60);

let ready: Promise<void> | undefined;
async function pool() {
  const p = await dbReady();
  if (!ready) {
    ready = (async () => {
      const c = await p.connect();
      try {
        await c.query("BEGIN");
        await c.query("SELECT pg_advisory_xact_lock(727279)");
        await c.query(`CREATE TABLE IF NOT EXISTS dz_proctor_events (
          id bigserial PRIMARY KEY, session_id text NOT NULL, user_id text, company text, round text,
          code text NOT NULL, strength text NOT NULL, counted boolean NOT NULL DEFAULT false, detail text, at text NOT NULL)`);
        await c.query("CREATE INDEX IF NOT EXISTS dz_proctor_events_session ON dz_proctor_events (session_id, id)");
        await c.query("CREATE INDEX IF NOT EXISTS dz_proctor_events_at ON dz_proctor_events (at)");
        await c.query("COMMIT");
      } catch (e) {
        try { await c.query("ROLLBACK"); } catch { /* closing */ }
        throw e;
      } finally { c.release(); }
    })();
    ready.catch(() => { ready = undefined; });
  }
  await ready;
  return p;
}

export type EventIn = { code: string; detail?: string; counted?: boolean; at?: string };

export function cleanEvents(raw: unknown): EventIn[] {
  if (!Array.isArray(raw)) return [];
  return raw.slice(0, 50).flatMap((e) => {
    if (!e || typeof e !== "object") return [];
    const o = e as Record<string, unknown>;
    if (typeof o.code !== "string" || !/^[a-z0-9-]{2,40}$/.test(o.code)) return [];
    const t = typeof o.at === "string" ? new Date(o.at) : new Date();
    return [{ code: o.code, detail: typeof o.detail === "string" ? o.detail.slice(0, 300) : "", counted: o.counted === true, at: (isNaN(t.getTime()) ? new Date() : t).toISOString() }];
  });
}

export async function saveEvents(meta: { sessionId: string; userId?: string | null; company?: string; round?: string }, events: EventIn[]) {
  if (!process.env.DATABASE_URL || !events.length) return;
  const p = await pool();
  for (const e of events) {
    await p.query("INSERT INTO dz_proctor_events (session_id, user_id, company, round, code, strength, counted, detail, at) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)",
      [meta.sessionId, meta.userId || null, (meta.company || "").slice(0, 60), (meta.round || "").slice(0, 60), e.code, strengthOf(e.code), Boolean(e.counted), e.detail || "", e.at]);
  }
  if (Math.random() < 0.02) await p.query("DELETE FROM dz_proctor_events WHERE at < $1", [new Date(Date.now() - RETENTION_DAYS * 86_400_000).toISOString()]);
}

export type Verdict = "clean" | "review" | "flagged";
// Simple and explainable: any confirmed strong signal flags the session; several weak ones ask for a review.
export function verdictFor(strong: number, weak: number): Verdict {
  if (strong >= 2) return "flagged";
  if (strong >= 1 || weak >= 3) return "review";
  return "clean";
}

export type SessionRow = { sessionId: string; company: string; round: string; email: string | null; firstAt: string; lastAt: string; total: number; strong: number; weak: number; info: number; counted: number };

export async function listSessions() {
  const p = await pool();
  const r = await p.query(`SELECT e.session_id AS "sessionId", max(e.company) AS company, max(e.round) AS round, max(u.email) AS email, min(e.at) AS "firstAt", max(e.at) AS "lastAt",
      count(*)::int AS total, count(*) FILTER (WHERE e.strength='strong')::int AS strong, count(*) FILTER (WHERE e.strength='weak')::int AS weak,
      count(*) FILTER (WHERE e.strength='info')::int AS info, count(*) FILTER (WHERE e.counted)::int AS counted
    FROM dz_proctor_events e LEFT JOIN dz_users u ON u.id = e.user_id GROUP BY e.session_id ORDER BY max(e.at) DESC LIMIT 200`);
  return r.rows.map((x: SessionRow) => ({ ...x, verdict: verdictFor(x.strong, x.weak) }));
}

export async function sessionTimeline(sessionId: string) {
  const p = await pool();
  const r = await p.query("SELECT id, code, strength, counted, detail, at FROM dz_proctor_events WHERE session_id = $1 ORDER BY id", [sessionId]);
  return r.rows;
}
