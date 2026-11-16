// Tiny JSON-file store for users and interview history (MVP).
// Data lives in .data/store.json. On hosts with a temporary disk, swap this file for a real database.
import { promises as fs } from "fs";
import path from "path";
import { randomBytes, randomUUID, scryptSync, timingSafeEqual } from "crypto";
import * as pg from "./pgStore";

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
  notificationEmail?: string;
}

export interface SiteActivityEntry {
  id: string;
  userId: string;
  activeSeconds: number;
  at: string;
}

export interface FounderUserSummary {
  id: string;
  name: string;
  email: string;
  provider: string;
  createdAt: string;
  activeSeconds: number;
  lastActiveAt: string | null;
}

export interface FounderWaitlistContact {
  company: string;
  userId: string;
  userName: string;
  accountEmail: string;
  notificationEmail: string;
  votedAt: string;
}

interface Db {
  users: StoredUser[];
  history: HistoryEntry[];
  votes: VoteEntry[];
  activity: SiteActivityEntry[];
}

// When DATABASE_URL is set the accounts live in Postgres (pgStore.ts). Otherwise the JSON file below is used, as before.
const usePg = () => Boolean(process.env.DATABASE_URL);

const FILE = path.join(process.cwd(), ".data", "store.json");
let queue: Promise<unknown> = Promise.resolve();

async function load(): Promise<Db> {
  try {
    const parsed = JSON.parse(await fs.readFile(FILE, "utf8")) as Partial<Db>;
    return { users: parsed.users ?? [], history: parsed.history ?? [], votes: parsed.votes ?? [], activity: parsed.activity ?? [] };
  } catch {
    return { users: [], history: [], votes: [], activity: [] };
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
  if (usePg()) return pg.findUserByEmail(key);
  return withDb((db) => db.users.find((u) => u.email === key), false);
}

export function createEmailUser(name: string, email: string, password: string): Promise<StoredUser | null> {
  const key = normalizeEmail(email);
  if (usePg()) {
    return pg.createUser({
      id: randomUUID(),
      email: key,
      name: name.trim(),
      passwordHash: hashPassword(password),
      provider: "email",
      createdAt: new Date().toISOString(),
    });
  }
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
  if (usePg()) {
    return pg.upsertOAuthUser({
      id: randomUUID(),
      email: key,
      name: input.name,
      image: input.image,
      provider: input.provider,
      createdAt: new Date().toISOString(),
    });
  }
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
  if (usePg()) return pg.addHistory({ ...entry, id: randomUUID(), at: new Date().toISOString() });
  return withDb((db) => {
    const saved: HistoryEntry = { ...entry, id: randomUUID(), at: new Date().toISOString() };
    db.history.push(saved);
    return saved;
  }, true);
}

export function getHistory(userId: string): Promise<HistoryEntry[]> {
  if (usePg()) return pg.getHistory(userId);
  return withDb(
    (db) => db.history.filter((h) => h.userId === userId).sort((a, b) => b.at.localeCompare(a.at)),
    false
  );
}

// ---------- Company waitlist votes (one vote per account per company) ----------

export function addVote(company: string, userId: string, notificationEmail?: string): Promise<void> {
  if (usePg()) {
    return pg.addVote(company, userId, notificationEmail === undefined ? undefined : notificationEmail ? normalizeEmail(notificationEmail) : "", new Date().toISOString());
  }
  return withDb((db) => {
    const existing = db.votes.find((v) => v.company === company && v.userId === userId);
    if (existing) {
      if (notificationEmail !== undefined) {
        if (notificationEmail) existing.notificationEmail = normalizeEmail(notificationEmail);
        else delete existing.notificationEmail;
      }
    } else {
      db.votes.push({
        company,
        userId,
        at: new Date().toISOString(),
        ...(notificationEmail ? { notificationEmail: normalizeEmail(notificationEmail) } : {}),
      });
    }
  }, true);
}

export function updateVoteEmail(company: string, userId: string, notificationEmail: string): Promise<boolean> {
  if (usePg()) return pg.updateVoteEmail(company, userId, notificationEmail ? normalizeEmail(notificationEmail) : "");
  return withDb((db) => {
    const existing = db.votes.find((v) => v.company === company && v.userId === userId);
    if (!existing) return false;
    if (notificationEmail) existing.notificationEmail = normalizeEmail(notificationEmail);
    else delete existing.notificationEmail;
    return true;
  }, true);
}

export function removeVote(company: string, userId: string): Promise<void> {
  if (usePg()) return pg.removeVote(company, userId);
  return withDb((db) => {
    db.votes = db.votes.filter((v) => !(v.company === company && v.userId === userId));
  }, true);
}

export function getVoteState(company: string, userId?: string): Promise<{ count: number; voted: boolean; hasNotificationEmail: boolean }> {
  if (usePg()) return pg.getVoteState(company, userId);
  return withDb((db) => {
    const forCompany = db.votes.filter((v) => v.company === company);
    const userVote = userId ? forCompany.find((v) => v.userId === userId) : undefined;
    return {
      count: forCompany.length,
      voted: Boolean(userVote),
      hasNotificationEmail: Boolean(userVote?.notificationEmail),
    };
  }, false);
}

export function getAllVoteCounts(): Promise<Record<string, number>> {
  if (usePg()) return pg.getAllVoteCounts();
  return withDb((db) => {
    const counts: Record<string, number> = {};
    for (const v of db.votes) counts[v.company] = (counts[v.company] ?? 0) + 1;
    return counts;
  }, false);
}

export function recordActiveTime(userId: string, eventId: string, activeSeconds: number): Promise<void> {
  if (usePg()) return pg.recordActiveTime(userId, eventId, activeSeconds, new Date().toISOString());
  return withDb((db) => {
    if (db.activity.some((entry) => entry.id === eventId)) return;
    db.activity.push({ id: eventId, userId, activeSeconds, at: new Date().toISOString() });
  }, true);
}

export function getFounderWaitlistContacts(): Promise<FounderWaitlistContact[]> {
  if (usePg()) return pg.getFounderWaitlistContacts();
  return withDb((db) => {
    const usersById = new Map(db.users.map((user) => [user.id, user]));
    return db.votes
      .filter((vote) => Boolean(vote.notificationEmail))
      .map((vote) => {
        const user = usersById.get(vote.userId);
        return {
          company: vote.company,
          userId: vote.userId,
          userName: user?.name || "Account holder",
          accountEmail: user?.email || "",
          notificationEmail: vote.notificationEmail || "",
          votedAt: vote.at,
        };
      })
      .sort((a, b) => b.votedAt.localeCompare(a.votedAt));
  }, false);
}

export function getOverview(): Promise<{
  users: number;
  interviews: number;
  activeSeconds: number;
  userDetails: FounderUserSummary[];
}> {
  if (usePg()) return pg.getOverview();
  return withDb((db) => {
    const activityByUser = new Map<string, { activeSeconds: number; lastActiveAt: string | null }>();
    for (const entry of db.activity) {
      const summary = activityByUser.get(entry.userId) || { activeSeconds: 0, lastActiveAt: null };
      summary.activeSeconds += entry.activeSeconds;
      if (!summary.lastActiveAt || entry.at > summary.lastActiveAt) summary.lastActiveAt = entry.at;
      activityByUser.set(entry.userId, summary);
    }

    const userDetails = db.users
      .map((user) => {
        const activity = activityByUser.get(user.id);
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          provider: user.provider,
          createdAt: user.createdAt,
          activeSeconds: activity?.activeSeconds || 0,
          lastActiveAt: activity?.lastActiveAt || null,
        };
      })
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt));

    return {
      users: db.users.length,
      interviews: db.history.length,
      activeSeconds: userDetails.reduce((sum, user) => sum + user.activeSeconds, 0),
      userDetails,
    };
  }, false);
}
