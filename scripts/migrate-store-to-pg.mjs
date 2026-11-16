// One-time copy of .data/store.json into Postgres. Safe to run again: rows that already exist are skipped.
// It only READS the JSON file; the file is never changed or deleted.
//
//   node scripts/migrate-store-to-pg.mjs            (uses DATABASE_URL from the environment or .env.local)
//   node scripts/migrate-store-to-pg.mjs --dry-run  (only shows what it would copy)
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const root = process.cwd();
const dry = process.argv.includes("--dry-run");
let url = process.env.DATABASE_URL || "";
if (!url) {
  for (const f of [".env.local", ".env"]) {
    try { const m = fs.readFileSync(path.join(root, f), "utf8").match(/^\s*DATABASE_URL\s*=\s*"?([^"\r\n]+)"?/m); if (m) { url = m[1].trim(); break; } } catch { /* next */ }
  }
}
const file = path.join(root, ".data", "store.json");
if (!fs.existsSync(file)) { console.log("No .data/store.json here, nothing to copy."); process.exit(0); }
const db = JSON.parse(fs.readFileSync(file, "utf8"));
const users = db.users || [], history = db.history || [], votes = db.votes || [], activity = db.activity || [];
console.log("In the JSON file: " + users.length + " users, " + history.length + " interview records, " + votes.length + " votes, " + activity.length + " activity entries.");
if (dry) process.exit(0);
if (!url) { console.log("DATABASE_URL is not set (environment or .env.local)."); process.exit(1); }

const { Pool } = createRequire(path.join(root, "package.json"))("pg");
const pool = new Pool({ connectionString: url, max: 2 });
const SCHEMA = `
CREATE TABLE IF NOT EXISTS dz_users (id text PRIMARY KEY, email text NOT NULL UNIQUE, name text NOT NULL DEFAULT '', image text, password_hash text, provider text NOT NULL, created_at text NOT NULL);
CREATE TABLE IF NOT EXISTS dz_history (seq bigserial, id text PRIMARY KEY, user_id text NOT NULL, company text NOT NULL, role text NOT NULL, round text NOT NULL, set_id jsonb, score double precision, verdict text, at text NOT NULL);
CREATE INDEX IF NOT EXISTS dz_history_user ON dz_history (user_id);
CREATE TABLE IF NOT EXISTS dz_votes (company text NOT NULL, user_id text NOT NULL, at text NOT NULL, notification_email text, PRIMARY KEY (company, user_id));
CREATE TABLE IF NOT EXISTS dz_activity (id text PRIMARY KEY, user_id text NOT NULL, active_seconds double precision NOT NULL, at text NOT NULL);
CREATE INDEX IF NOT EXISTS dz_activity_user ON dz_activity (user_id);`;

const c = await pool.connect();
let n = { users: 0, history: 0, votes: 0, activity: 0 };
try {
  await c.query("BEGIN");
  await c.query("SELECT pg_advisory_xact_lock(727274)");
  await c.query(SCHEMA);
  for (const u of users) {
    const r = await c.query("INSERT INTO dz_users (id,email,name,image,password_hash,provider,created_at) VALUES ($1,$2,$3,$4,$5,$6,$7) ON CONFLICT DO NOTHING",
      [u.id, String(u.email).toLowerCase(), u.name || "", u.image || null, u.passwordHash || null, u.provider || "email", u.createdAt || new Date().toISOString()]);
    n.users += r.rowCount || 0;
  }
  for (const h of history) {
    const r = await c.query("INSERT INTO dz_history (id,user_id,company,role,round,set_id,score,verdict,at) VALUES ($1,$2,$3,$4,$5,$6::jsonb,$7,$8,$9) ON CONFLICT DO NOTHING",
      [h.id, h.userId, h.company, h.role, h.round, h.setId === null || h.setId === undefined ? null : JSON.stringify(h.setId), h.score ?? null, h.verdict ?? null, h.at]);
    n.history += r.rowCount || 0;
  }
  for (const v of votes) {
    const r = await c.query("INSERT INTO dz_votes (company,user_id,at,notification_email) VALUES ($1,$2,$3,$4) ON CONFLICT DO NOTHING", [v.company, v.userId, v.at, v.notificationEmail || null]);
    n.votes += r.rowCount || 0;
  }
  for (const a of activity) {
    const r = await c.query("INSERT INTO dz_activity (id,user_id,active_seconds,at) VALUES ($1,$2,$3,$4) ON CONFLICT DO NOTHING", [a.id, a.userId, a.activeSeconds, a.at]);
    n.activity += r.rowCount || 0;
  }
  await c.query("COMMIT");
} catch (e) {
  try { await c.query("ROLLBACK"); } catch { /* ignore */ }
  console.log("Failed, nothing was copied: " + e.message);
  process.exit(1);
} finally {
  c.release(); await pool.end();
}
console.log("Copied " + n.users + " users, " + n.history + " interview records, " + n.votes + " votes, " + n.activity + " activity entries (existing rows skipped).");
