// Tiny JSON-file store for users and interview history (MVP).
// Data lives in .data/store.json. On hosts with a temporary disk, swap this file for a real database.
import { promises as fs } from "fs";
import path from "path";
import { randomBytes, randomUUID, scryptSync, timingSafeEqual } from "crypto";

export interface StoredUser {
  id: string;
  email: string;
  name: string;
  image?: string;
  passwordHash?: string;
  provider: string;
  createdAt: string;
}

export interface HistoryEntry {
  id: string;
  userId: string;
  company: string;
  role: string;
  round: string;
  setId: string | number | null;
  score: number | null;
  verdict: string | null;
  at: string;
}

export interface VoteEntry {
  company: string;
  userId: string;
  at: string;
}

interface Db {
  users: StoredUser[];
  history: HistoryEntry[];
  votes: VoteEntry[];
}

const FILE = path.join(process.cwd(), ".data", "store.json");
let queue: Promise<unknown> = Promise.resolve();

async function load(): Promise<Db> {
  try {
    const parsed = JSON.parse(await fs.readFile(FILE, "utf8")) as Partial<Db>;
    return { users: parsed.users ?? [], history: parsed.history ?? [], votes: parsed.votes ?? [] };
  } catch {
    return { users: [], history: [], votes: [] };
  }
}

// Runs one operation at a time so concurrent requests cannot overwrite each other.
function withDb<T>(fn: (db: Db) => T | Promise<T>, write: boolean): Promise<T> {
  const run = queue.then(async () => {
    const db = await load();
    const result = await fn(db);
    if (write) {
      await fs.mkdir(path.dirname(FILE), { recursive: true });
      await fs.writeFile(FILE, JSON.stringify(db, null, 2), "utf8");
    }
    return result;
  });
  queue = run.catch(() => undefined);
  return run;
}

export function hashPassword(password: string): string {
  const salt = randomBytes(16);
  return salt.toString("hex") + ":" + scryptSync(password, salt, 64).toString("hex");
}

export function verifyPassword(password: string, stored: string): boolean {
  const [saltHex, hashHex] = stored.split(":");
  if (!saltHex || !hashHex) return false;
  const expected = Buffer.from(hashHex, "hex");
  const actual = scryptSync(password, Buffer.from(saltHex, "hex"), 64);
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

export const normalizeEmail = (email: string) => email.trim().toLowerCase();

export function findUserByEmail(email: string): Promise<StoredUser | undefined> {
  const key = normalizeEmail(email);
  return withDb((db) => db.users.find((u) => u.email === key), false);
}

export function createEmailUser(name: string, email: string, password: string): Promise<StoredUser | null> {
  const key = normalizeEmail(email);
  return withDb((db) => {
    if (db.users.some((u) => u.email === key)) return null;
    const user: StoredUser = {
      id: randomUUID(),
      email: key,
      name: name.trim(),
      passwordHash: hashPassword(password),
      provider: "email",
      createdAt: new Date().toISOString(),
    };
    db.users.push(user);
    return user;
  }, true);
}

export function upsertOAuthUser(input: { email: string; name: string; image?: string; provider: string }): Promise<StoredUser> {
  const key = normalizeEmail(input.email);
  return withDb((db) => {
    const existing = db.users.find((u) => u.email === key);
    if (existing) {
      if (!existing.image && input.image) existing.image = input.image;
      return existing;
    }
    const user: StoredUser = {
      id: randomUUID(),
      email: key,
      name: input.name,
      image: input.image,
      provider: input.provider,
      createdAt: new Date().toISOString(),
    };
    db.users.push(user);
    return user;
  }, true);
}

export function addHistory(entry: Omit<HistoryEntry, "id" | "at">): Promise<HistoryEntry> {
  return withDb((db) => {
    const saved: HistoryEntry = { ...entry, id: randomUUID(), at: new Date().toISOString() };
    db.history.push(saved);
    return saved;
  }, true);
}

export function getHistory(userId: string): Promise<HistoryEntry[]> {
  return withDb(
    (db) => db.history.filter((h) => h.userId === userId).sort((a, b) => b.at.localeCompare(a.at)),
    false
  );
}

// ---------- Company waitlist votes (one vote per account per company) ----------

export function addVote(company: string, userId: string): Promise<void> {
  return withDb((db) => {
    if (!db.votes.some((v) => v.company === company && v.userId === userId)) {
      db.votes.push({ company, userId, at: new Date().toISOString() });
    }
  }, true);
}

export function removeVote(company: string, userId: string): Promise<void> {
  return withDb((db) => {
    db.votes = db.votes.filter((v) => !(v.company === company && v.userId === userId));
  }, true);
}

export function getVoteState(company: string, userId?: string): Promise<{ count: number; voted: boolean }> {
  return withDb((db) => {
    const forCompany = db.votes.filter((v) => v.company === company);
    return { count: forCompany.length, voted: userId ? forCompany.some((v) => v.userId === userId) : false };
  }, false);
}

export function getAllVoteCounts(): Promise<Record<string, number>> {
  return withDb((db) => {
    const counts: Record<string, number> = {};
    for (const v of db.votes) counts[v.company] = (counts[v.company] ?? 0) + 1;
    return counts;
  }, false);
}

export function getOverview(): Promise<{ users: number; interviews: number }> {
  return withDb((db) => ({ users: db.users.length, interviews: db.history.length }), false);
}