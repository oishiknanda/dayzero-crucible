// Postgres backend for the account store. It is used ONLY when DATABASE_URL is set; without it the original
// .data/store.json file in store.ts is used exactly as before. Works with Neon, Supabase, or any Postgres.
// Every function here takes values that store.ts has already normalised (emails lower-cased, passwords hashed).
import type { Pool } from "pg";
import type { FounderUserSummary, FounderWaitlistContact, HistoryEntry, StoredUser } from "./store";

type G = typeof globalThis & { __dzPool?: Pool; __dzSchema?: Promise<void> };
const g = globalThis as G;

async function pool(): Promise<Pool> {
  if (!g.__dzPool) {
    const { Pool: P } = await import("pg");
    // A small pool: serverless hosts open many short-lived instances, each with its own pool.
    g.__dzPool = new P({ connectionString: process.env.DATABASE_URL, max: 5, idleTimeoutMillis: 20000, connectionTimeoutMillis: 10000 });
    g.__dzPool.on("error", () => undefined);
  }
  return g.__dzPool;
}

const SCHEMA = `
CREATE TABLE IF NOT EXISTS dz_users (
  id text PRIMARY KEY,
  email text NOT NULL UNIQUE,
  name text NOT NULL DEFAULT '',
  image text,
  password_hash text,
  provider text NOT NULL,
  created_at text NOT NULL
);
CREATE TABLE IF NOT EXISTS dz_history (
  seq bigserial,
  id text PRIMARY KEY,
  user_id text NOT NULL,
  company text NOT NULL,
  role text NOT NULL,
  round text NOT NULL,
  set_id jsonb,
  score double precision,
  verdict text,
  at text NOT NULL
);
CREATE INDEX IF NOT EXISTS dz_history_user ON dz_history (user_id);
CREATE TABLE IF NOT EXISTS dz_votes (
  company text NOT NULL,
  user_id text NOT NULL,
  at text NOT NULL,
  notification_email text,
  PRIMARY KEY (company, user_id)
);
CREATE TABLE IF NOT EXISTS dz_activity (
  id text PRIMARY KEY,
  user_id text NOT NULL,
  active_seconds double precision NOT NULL,
  at text NOT NULL
);
CREATE INDEX IF NOT EXISTS dz_activity_user ON dz_activity (user_id);
`;

// Creates the tables the first time (safe to repeat, and safe if several servers start at once).
function ready(): Promise<Pool> {
  if (!g.__dzSchema) {
    g.__dzSchema = (async () => {
      const p = await pool();
      const c = await p.connect();
      try {
        // A lock that lasts only for this transaction: it also works through pooled connections (Neon, Supabase).
        await c.query("BEGIN");
        await c.query("SELECT pg_advisory_xact_lock(727274)");
        await c.query(SCHEMA);
        await c.query("COMMIT");
      } catch (e) {
        try { await c.query("ROLLBACK"); } catch { /* connection closing */ }
        throw e;
      } finally {
        c.release();
      }
    })();
    g.__dzSchema.catch(() => { g.__dzSchema = undefined; });
  }
  return g.__dzSchema.then(pool);
}

// Shared with other database features (problem overrides): one pool, tables created once.
export const dbReady = ready;

/* eslint-disable @typescript-eslint/no-explicit-any */
const toUser = (r: any): StoredUser => ({
  id: r.id,
  email: r.email,
  name: r.name,
  ...(r.image ? { image: r.image } : {}),
  ...(r.password_hash ? { passwordHash: r.password_hash } : {}),
  provider: r.provider,
  createdAt: r.created_at,
});
const toHistory = (r: any): HistoryEntry => ({
  id: r.id, userId: r.user_id, company: r.company, role: r.role, round: r.round,
  setId: r.set_id === undefined ? null : r.set_id, score: r.score === undefined ? null : r.score, verdict: r.verdict ?? null, at: r.at,
});

export async function findUserByEmail(email: string): Promise<StoredUser | undefined> {
  const p = await ready();
  const r = await p.query("SELECT * FROM dz_users WHERE email = $1", [email]);
  return r.rows[0] ? toUser(r.rows[0]) : undefined;
}

export async function createUser(u: StoredUser): Promise<StoredUser | null> {
  const p = await ready();
  const r = await p.query(
    "INSERT INTO dz_users (id, email, name, image, password_hash, provider, created_at) VALUES ($1,$2,$3,$4,$5,$6,$7) ON CONFLICT (email) DO NOTHING RETURNING *",
    [u.id, u.email, u.name, u.image ?? null, u.passwordHash ?? null, u.provider, u.createdAt]
  );
  return r.rows[0] ? toUser(r.rows[0]) : null;
}

export async function upsertOAuthUser(u: StoredUser): Promise<StoredUser> {
  const p = await ready();
  const r = await p.query(
    `INSERT INTO dz_users (id, email, name, image, password_hash, provider, created_at) VALUES ($1,$2,$3,$4,NULL,$5,$6)
     ON CONFLICT (email) DO UPDATE SET image = COALESCE(NULLIF(dz_users.image, ''), EXCLUDED.image) RETURNING *`,
    [u.id, u.email, u.name, u.image ?? null, u.provider, u.createdAt]
  );
  return toUser(r.rows[0]);
}

export async function addHistory(h: HistoryEntry): Promise<HistoryEntry> {
  const p = await ready();
  await p.query(
    "INSERT INTO dz_history (id, user_id, company, role, round, set_id, score, verdict, at) VALUES ($1,$2,$3,$4,$5,$6::jsonb,$7,$8,$9)",
    [h.id, h.userId, h.company, h.role, h.round, h.setId === null || h.setId === undefined ? null : JSON.stringify(h.setId), h.score ?? null, h.verdict ?? null, h.at]
  );
  return h;
}

export async function getHistory(userId: string): Promise<HistoryEntry[]> {
  const p = await ready();
  const r = await p.query("SELECT * FROM dz_history WHERE user_id = $1 ORDER BY at DESC, seq DESC", [userId]);
  return r.rows.map(toHistory);
}

// notificationEmail: undefined = leave as is, "" = clear, otherwise the (normalised) address.
export async function addVote(company: string, userId: string, notificationEmail: string | undefined, at: string): Promise<void> {
  const p = await ready();
  if (notificationEmail === undefined) {
    await p.query("INSERT INTO dz_votes (company, user_id, at) VALUES ($1,$2,$3) ON CONFLICT (company, user_id) DO NOTHING", [company, userId, at]);
  } else {
    await p.query(
      "INSERT INTO dz_votes (company, user_id, at, notification_email) VALUES ($1,$2,$3,$4) ON CONFLICT (company, user_id) DO UPDATE SET notification_email = EXCLUDED.notification_email",
      [company, userId, at, notificationEmail || null]
    );
  }
}

export async function updateVoteEmail(company: string, userId: string, notificationEmail: string): Promise<boolean> {
  const p = await ready();
  const r = await p.query("UPDATE dz_votes SET notification_email = $3 WHERE company = $1 AND user_id = $2", [company, userId, notificationEmail || null]);
  return (r.rowCount ?? 0) > 0;
}

export async function removeVote(company: string, userId: string): Promise<void> {
  const p = await ready();
  await p.query("DELETE FROM dz_votes WHERE company = $1 AND user_id = $2", [company, userId]);
}

export async function getVoteState(company: string, userId?: string): Promise<{ count: number; voted: boolean; hasNotificationEmail: boolean }> {
  const p = await ready();
  const c = await p.query("SELECT count(*)::int AS n FROM dz_votes WHERE company = $1", [company]);
  let voted = false, has = false;
  if (userId) {
    const r = await p.query("SELECT notification_email FROM dz_votes WHERE company = $1 AND user_id = $2", [company, userId]);
    if (r.rows[0]) { voted = true; has = Boolean(r.rows[0].notification_email); }
  }
  return { count: c.rows[0].n, voted, hasNotificationEmail: has };
}

export async function getAllVoteCounts(): Promise<Record<string, number>> {
  const p = await ready();
  const r = await p.query("SELECT company, count(*)::int AS n FROM dz_votes GROUP BY company");
  const out: Record<string, number> = {};
  for (const row of r.rows) out[row.company] = row.n;
  return out;
}

export async function recordActiveTime(userId: string, eventId: string, activeSeconds: number, at: string): Promise<void> {
  const p = await ready();
  await p.query("INSERT INTO dz_activity (id, user_id, active_seconds, at) VALUES ($1,$2,$3,$4) ON CONFLICT (id) DO NOTHING", [eventId, userId, activeSeconds, at]);
}

export async function getFounderWaitlistContacts(): Promise<FounderWaitlistContact[]> {
  const p = await ready();
  const r = await p.query(
    `SELECT v.company, v.user_id, v.at, v.notification_email, u.name, u.email
     FROM dz_votes v LEFT JOIN dz_users u ON u.id = v.user_id
     WHERE v.notification_email IS NOT NULL AND v.notification_email <> '' ORDER BY v.at DESC`
  );
  return r.rows.map((x: any) => ({
    company: x.company, userId: x.user_id, userName: x.name || "Account holder", accountEmail: x.email || "",
    notificationEmail: x.notification_email || "", votedAt: x.at,
  }));
}

export async function getOverview(): Promise<{ users: number; interviews: number; activeSeconds: number; userDetails: FounderUserSummary[] }> {
  const p = await ready();
  const u = await p.query(
    `SELECT u.id, u.name, u.email, u.provider, u.created_at,
            COALESCE(a.secs, 0) AS secs, a.last_at
     FROM dz_users u
     LEFT JOIN (SELECT user_id, SUM(active_seconds) AS secs, MAX(at) AS last_at FROM dz_activity GROUP BY user_id) a ON a.user_id = u.id
     ORDER BY u.created_at DESC`
  );
  const h = await p.query("SELECT count(*)::int AS n FROM dz_history");
  const userDetails = u.rows.map((x: any) => ({
    id: x.id, name: x.name, email: x.email, provider: x.provider, createdAt: x.created_at,
    activeSeconds: Number(x.secs) || 0, lastActiveAt: x.last_at ?? null,
  }));
  return { users: userDetails.length, interviews: h.rows[0].n, activeSeconds: userDetails.reduce((s: number, x: FounderUserSummary) => s + x.activeSeconds, 0), userDetails };
}
