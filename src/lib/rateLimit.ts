// Fixed-window rate limiter. Counters live in Postgres when DATABASE_URL is set (shared by every server),
// otherwise in memory (local development). It FAILS OPEN: if the counter cannot be read for any reason the
// request is allowed, so a database hiccup can never block a live interview.
import { dbReady } from "./auth/pgStore";

export interface RateResult { allowed: boolean; remaining: number; retryAfterSeconds: number }
export interface RateInput { key: string; limit: number; windowSeconds: number }

const mem = new Map<string, { windowStart: number; count: number }>();
let tableReady: Promise<void> | undefined;
let warned = false;

async function pool() {
  const p = await dbReady();
  if (!tableReady) {
    tableReady = (async () => {
      const c = await p.connect();
      try {
        await c.query("BEGIN");
        await c.query("SELECT pg_advisory_xact_lock(727276)");
        await c.query("CREATE TABLE IF NOT EXISTS dz_rate_limits (key text NOT NULL, window_start bigint NOT NULL, count integer NOT NULL, PRIMARY KEY (key, window_start))");
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

export async function checkRateLimit(input: RateInput, nowMs?: number): Promise<RateResult> {
  const now = Math.floor((nowMs === undefined ? Date.now() : nowMs) / 1000);
  const windowStart = Math.floor(now / input.windowSeconds) * input.windowSeconds;
  const retry = Math.max(1, windowStart + input.windowSeconds - now);
  try {
    let count: number;
    if (process.env.DATABASE_URL) {
      const p = await pool();
      const r = await p.query(
        "INSERT INTO dz_rate_limits (key, window_start, count) VALUES ($1,$2,1) ON CONFLICT (key, window_start) DO UPDATE SET count = dz_rate_limits.count + 1 RETURNING count",
        [input.key, windowStart]
      );
      count = Number(r.rows[0].count);
      if (Math.random() < 0.005) p.query("DELETE FROM dz_rate_limits WHERE window_start < $1", [now - 86400]).catch(() => undefined);
    } else {
      const cur = mem.get(input.key);
      count = cur && cur.windowStart === windowStart ? cur.count + 1 : 1;
      mem.set(input.key, { windowStart, count });
      if (mem.size > 5000) mem.forEach((v, k) => { if (v.windowStart < windowStart - 86400) mem.delete(k); });
    }
    return { allowed: count <= input.limit, remaining: Math.max(0, input.limit - count), retryAfterSeconds: retry };
  } catch (e) {
    if (!warned) { warned = true; console.error("[rateLimit] failing open:", e); }
    return { allowed: true, remaining: input.limit, retryAfterSeconds: 0 };
  }
}

export function envNumber(name: string, fallback: number): number {
  const n = Number(process.env[name]);
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : fallback;
}

export function clientIp(h: { get(name: string): string | null }): string {
  const f = h.get("x-forwarded-for");
  const first = f ? f.split(",")[0].trim() : "";
  return first || (h.get("x-real-ip") || "").trim() || "local";
}

export function limitedBody(retryAfterSeconds: number) {
  const message = "You're sending messages too quickly. Please wait a moment and try again.";
  // error and reply both carry the message: the existing screens already show one of them.
  return { error: message, reply: message, code: "rate_limited", retryAfterSeconds };
}
