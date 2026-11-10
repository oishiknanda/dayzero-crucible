# DAY-ZERO.AI: (1) Google/GitHub "Create account" fix, (2) coming-soon waitlist with live votes, founder access.
# Run from the project root:   powershell -ExecutionPolicy Bypass -File .\setup-waitlist.ps1
$ErrorActionPreference = "Stop"
$root = (Get-Location).Path
if (-not (Test-Path (Join-Path $root "package.json")) -or -not (Test-Path (Join-Path $root "src\lib\auth"))) {
  Write-Host "Run this from the project root (the folder with package.json), with the auth setup already in place." -ForegroundColor Red
  exit 1
}

function Save-File([string]$rel, [string]$content) {
  $full = Join-Path $root $rel
  [void][IO.Directory]::CreateDirectory([IO.Path]::GetDirectoryName($full))
  [IO.File]::WriteAllText($full, $content.Replace("`r`n", "`n"), (New-Object Text.UTF8Encoding($false)))
  Write-Host ("  wrote " + $rel)
}

function Edit-File([string]$rel, [scriptblock]$edit) {
  $full = Join-Path $root $rel
  if (-not (Test-Path -LiteralPath $full)) { Write-Host ("  skipped (missing) " + $rel) -ForegroundColor Yellow; return }
  $text = [IO.File]::ReadAllText($full)
  $nl = if ($text.Contains("`r`n")) { "`r`n" } else { "`n" }
  $new = & $edit $text $nl
  if ($new -eq $text) { Write-Host ("  unchanged " + $rel) -ForegroundColor Yellow; return }
  [IO.File]::WriteAllText($full, $new, (New-Object Text.UTF8Encoding($true)))
  Write-Host ("  patched " + $rel)
}

Write-Host "1/3 Writing files..." -ForegroundColor Cyan
Save-File 'src\lib\waitlist.ts' @'
// Companies that are open to everyone. Every other company shows "Coming soon" plus a vote button.
export const LIVE_COMPANIES: readonly string[] = ["amazon", "google", "microsoft"];

export const isLiveCompany = (slug: string) => LIVE_COMPANIES.includes(slug.toLowerCase());

export const isValidSlug = (slug: string) => /^[a-z0-9-]{1,60}$/.test(slug);

export const prettyCompany = (slug: string) => slug.replace(/[-_]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
'@

Save-File 'src\lib\auth\founder.ts' @'
// Founder access: a secret code (FOUNDER_CODE in .env.local) unlocks every company.
// The unlock is an httpOnly, signed, expiring cookie, so it cannot be forged from the browser.
import { createHash, createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

export const FOUNDER_COOKIE = "dz_founder";
const DAYS = 7;

const secret = () => process.env.NEXTAUTH_SECRET || "dev-only-secret";
const sign = (value: string) => createHmac("sha256", secret()).update(value).digest("hex");

export function makeFounderToken(): string {
  const value = "founder." + (Date.now() + DAYS * 86_400_000);
  return value + "." + sign(value);
}

export function verifyFounderToken(token: string | undefined): boolean {
  if (!token) return false;
  const parts = token.split(".");
  if (parts.length !== 3 || parts[0] !== "founder") return false;
  const expires = Number(parts[1]);
  if (!Number.isFinite(expires) || expires < Date.now()) return false;
  const expected = Buffer.from(sign(parts[0] + "." + parts[1]));
  const given = Buffer.from(parts[2]);
  return expected.length === given.length && timingSafeEqual(expected, given);
}

export function isFounder(): boolean {
  try {
    return verifyFounderToken(cookies().get(FOUNDER_COOKIE)?.value);
  } catch {
    return false;
  }
}

export function codeMatches(input: string): boolean {
  const code = process.env.FOUNDER_CODE;
  if (!code || code.length < 6) return false;
  const a = createHash("sha256").update(input).digest();
  const b = createHash("sha256").update(code).digest();
  return timingSafeEqual(a, b);
}

export const founderCookieOptions = {
  httpOnly: true,
  sameSite: "lax" as const,
  path: "/",
  maxAge: DAYS * 86_400,
  secure: process.env.NODE_ENV === "production",
};
'@

Save-File 'src\lib\auth\store.ts' @'
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
'@

Save-File 'src\lib\auth\options.ts' @'
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { findUserByEmail, upsertOAuthUser, verifyPassword } from "./store";

const providers: NextAuthOptions["providers"] = [
  CredentialsProvider({
    name: "Email",
    credentials: { email: { label: "Email", type: "email" }, password: { label: "Password", type: "password" } },
    async authorize(credentials) {
      const email = String(credentials?.email ?? "");
      const password = String(credentials?.password ?? "");
      const user = await findUserByEmail(email);
      if (!user) {
        throw new Error("NO_ACCOUNT_FOUND");
      }
      if (!user.passwordHash || !verifyPassword(password, user.passwordHash)) {
        throw new Error("INVALID_CREDENTIALS");
      }
      return { id: user.id, email: user.email, name: user.name, image: user.image ?? null };
    },
  }),
];

if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  providers.push(
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "select_account",
          access_type: "offline",
          response_type: "code",
        },
      },
    })
  );
}

if (process.env.GITHUB_ID && process.env.GITHUB_SECRET) {
  providers.push(
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      authorization: {
        params: {
          prompt: "login",
        },
      },
    })
  );
}

// "signup" is set by the login page (cookie dz_intent) when the person clicked Google or GitHub
// from the Create account tab. Only then may a brand new social account be created.
export function buildAuthOptions(intent: "signin" | "signup" = "signin"): NextAuthOptions {
  return {
    providers,
    session: { strategy: "jwt", maxAge: 30 * 24 * 60 * 60 },
    pages: { signIn: "/login", error: "/login" },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
      async signIn({ user, account }) {
        if (!account || account.provider === "credentials") return true;
        if (!user.email) return false;

        const existing = await findUserByEmail(user.email);

        // Signing in with a social account that has no account yet: ask them to create one first.
        if (!existing && intent !== "signup") {
          return "/login?error=OAuthAccountNotFound&mode=signup";
        }

        // Create account (signup tab) or refresh the profile picture (existing account).
        await upsertOAuthUser({
          email: user.email,
          name: user.name ?? user.email,
          image: user.image ?? undefined,
          provider: account.provider,
        });

        return true;
      },
      async jwt({ token, user }) {
        if (user?.email) {
          const stored = await findUserByEmail(user.email);
          if (stored) token.uid = stored.id;
        }
        return token;
      },
      async session({ session, token }) {
        if (session.user && token.uid) session.user.id = String(token.uid);
        return session;
      },
    },
  };
}

// Used by getServerSession(). Sign-in rules do not matter there, so the default is fine.
export const authOptions: NextAuthOptions = buildAuthOptions("signin");
'@

Save-File 'src\app\api\auth\[...nextauth]\route.ts' @'
import NextAuth from "next-auth";
import { NextRequest } from "next/server";
import { buildAuthOptions } from "@/lib/auth/options";

type RouteContext = { params: { nextauth: string[] } };

// The login page sets the dz_intent cookie ("signin" or "signup") before starting Google or GitHub.
async function handler(req: NextRequest, ctx: RouteContext) {
  const intent = req.cookies.get("dz_intent")?.value === "signup" ? "signup" : "signin";
  return NextAuth(req, ctx, buildAuthOptions(intent));
}

export { handler as GET, handler as POST };
'@

Save-File 'src\app\api\waitlist\route.ts' @'
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/options";
import { isFounder } from "@/lib/auth/founder";
import { addVote, getAllVoteCounts, getVoteState, removeVote } from "@/lib/auth/store";
import { isLiveCompany, isValidSlug } from "@/lib/waitlist";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// GET /api/waitlist?company=slug  -> live status, vote count, whether this account voted, founder flag
// GET /api/waitlist               -> vote counts for every company (public)
export async function GET(req: NextRequest) {
  const company = (req.nextUrl.searchParams.get("company") || "").toLowerCase();
  if (!company) return NextResponse.json({ counts: await getAllVoteCounts() });
  if (!isValidSlug(company)) return NextResponse.json({ error: "Unknown company." }, { status: 400 });

  const session = await getServerSession(authOptions);
  const state = await getVoteState(company, session?.user?.id);
  return NextResponse.json({
    live: isLiveCompany(company),
    founder: isFounder(),
    signedIn: Boolean(session?.user?.id),
    ...state,
  });
}

// POST { company, action: "vote" | "unvote" }  -> one vote per account per company
export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return NextResponse.json({ error: "Sign in to vote." }, { status: 401 });

  const body = (await req.json().catch(() => null)) as { company?: unknown; action?: unknown } | null;
  const company = typeof body?.company === "string" ? body.company.toLowerCase() : "";
  if (!isValidSlug(company)) return NextResponse.json({ error: "Unknown company." }, { status: 400 });
  if (isLiveCompany(company)) return NextResponse.json({ error: "This company is already open." }, { status: 400 });

  if (body?.action === "unvote") await removeVote(company, session.user.id);
  else await addVote(company, session.user.id);

  return NextResponse.json(await getVoteState(company, session.user.id));
}
'@

Save-File 'src\app\api\founder\route.ts' @'
import { NextRequest, NextResponse } from "next/server";
import { FOUNDER_COOKIE, codeMatches, founderCookieOptions, isFounder, makeFounderToken } from "@/lib/auth/founder";
import { getAllVoteCounts, getOverview } from "@/lib/auth/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Simple brute-force guard: 5 wrong codes per 10 minutes per IP.
const attempts = new Map<string, { count: number; resetAt: number }>();

export async function GET() {
  if (!isFounder()) return NextResponse.json({ founder: false });
  const [overview, votes] = await Promise.all([getOverview(), getAllVoteCounts()]);
  return NextResponse.json({ founder: true, ...overview, votes });
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  const now = Date.now();
  const entry = attempts.get(ip);
  if (entry && entry.resetAt > now && entry.count >= 5) {
    return NextResponse.json({ error: "Too many attempts. Try again later." }, { status: 429 });
  }

  const body = (await req.json().catch(() => null)) as { code?: unknown } | null;
  const code = typeof body?.code === "string" ? body.code : "";
  if (!codeMatches(code)) {
    attempts.set(ip, { count: (entry && entry.resetAt > now ? entry.count : 0) + 1, resetAt: entry && entry.resetAt > now ? entry.resetAt : now + 600_000 });
    return NextResponse.json({ error: "Wrong code." }, { status: 401 });
  }

  attempts.delete(ip);
  const res = NextResponse.json({ ok: true });
  res.cookies.set(FOUNDER_COOKIE, makeFounderToken(), founderCookieOptions);
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(FOUNDER_COOKIE, "", { ...founderCookieOptions, maxAge: 0 });
  return res;
}
'@

Save-File 'src\components\auth\ComingSoon.tsx' @'
"use client";

import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { prettyCompany } from "@/lib/waitlist";
import { Rocket } from "lucide-react";

interface Status {
  count: number;
  voted: boolean;
}

export function ComingSoon({ slug }: { slug: string }) {
  const [status, setStatus] = useState<Status | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const name = prettyCompany(slug);

  const refresh = useCallback(async () => {
    try {
      const res = await fetch("/api/waitlist?company=" + encodeURIComponent(slug), { cache: "no-store" });
      if (res.ok) setStatus(await res.json());
    } catch {
      /* keep the last known numbers */
    }
  }, [slug]);

  // Live counter: refreshes every 4 seconds so everyone sees new votes arrive.
  useEffect(() => {
    refresh();
    const timer = setInterval(refresh, 4000);
    return () => clearInterval(timer);
  }, [refresh]);

  const toggle = async () => {
    if (!status || busy) return;
    setBusy(true);
    setError("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ company: slug, action: status.voted ? "unvote" : "vote" }),
      });
      if (res.ok) setStatus(await res.json());
      else setError(((await res.json().catch(() => ({}))) as { error?: string }).error || "Could not save your vote.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-10">
      <div className="w-full max-w-lg rounded-2xl border-2 border-slate-300 bg-white p-8 text-center shadow-xl">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white">
          <Rocket className="h-7 w-7" />
        </div>
        <h1 className="text-3xl font-extrabold text-slate-950">{name} is coming soon</h1>
        <p className="mt-2 text-sm text-slate-600">
          We are building the {name} interview track next, starting with the companies students ask for most. Vote to move it up the list.
        </p>

        <div className="my-6 rounded-xl border-2 border-slate-200 bg-slate-50 py-5">
          <p className="text-5xl font-extrabold text-slate-950">{status ? status.count : "-"}</p>
          <p className="mt-1 text-xs font-bold uppercase tracking-wide text-slate-500">
            {status && status.count === 1 ? "student wants" : "students want"} this track
          </p>
        </div>

        <Button variant={status?.voted ? "secondary" : "primary"} size="lg" className="w-full" onClick={toggle} disabled={!status || busy}>
          {status?.voted ? "You voted. Click to undo" : "I want this company"}
        </Button>
        {error && <p className="mt-3 text-sm font-semibold text-red-600">{error}</p>}
        <p className="mt-2 text-xs text-slate-500">One vote per account.</p>

        <div className="mt-6 flex items-center justify-center gap-5 text-sm font-semibold">
          <Link href="/" className="text-slate-700 hover:text-slate-950">Back to home</Link>
          <Link href="/founder" className="text-slate-400 hover:text-slate-700">Founder access</Link>
        </div>
      </div>
    </main>
  );
}
'@

Save-File 'src\app\tracks\[companyId]\layout.tsx' @'
"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ComingSoon } from "@/components/auth/ComingSoon";
import { isLiveCompany } from "@/lib/waitlist";

// Amazon, Google and Microsoft open straight away. Every other company shows "Coming soon"
// with a vote button, unless the founder has unlocked access.
export default function CompanyAccessLayout({ children }: { children: React.ReactNode }) {
  const params = useParams<{ companyId: string }>();
  const slug = String(params?.companyId ?? "").toLowerCase();
  const live = isLiveCompany(slug);
  const [founder, setFounder] = useState<boolean | null>(live ? true : null);

  useEffect(() => {
    if (live) return;
    fetch("/api/waitlist?company=" + encodeURIComponent(slug), { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : { founder: false }))
      .then((d: { founder?: boolean }) => setFounder(Boolean(d.founder)))
      .catch(() => setFounder(false));
  }, [live, slug]);

  if (live) return <>{children}</>;
  if (founder === null) {
    return <main className="flex min-h-screen items-center justify-center bg-background text-sm text-slate-600">Loading...</main>;
  }
  return founder ? <>{children}</> : <ComingSoon slug={slug} />;
}
'@

Save-File 'src\app\founder\page.tsx' @'
"use client";

import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { prettyCompany } from "@/lib/waitlist";

interface Overview {
  founder: boolean;
  users?: number;
  interviews?: number;
  votes?: Record<string, number>;
}

export default function FounderPage() {
  const [data, setData] = useState<Overview | null>(null);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    try {
      const res = await fetch("/api/founder", { cache: "no-store" });
      setData(res.ok ? await res.json() : { founder: false });
    } catch {
      setData({ founder: false });
    }
  }, []);

  useEffect(() => {
    load();
    const timer = setInterval(load, 5000);
    return () => clearInterval(timer);
  }, [load]);

  const unlock = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/founder", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ code }) });
    if (res.ok) {
      setCode("");
      load();
    } else {
      setError(((await res.json().catch(() => ({}))) as { error?: string }).error || "Wrong code.");
    }
  };

  const lock = async () => {
    await fetch("/api/founder", { method: "DELETE" });
    load();
  };

  if (!data) return <main className="flex min-h-screen items-center justify-center bg-background text-sm text-slate-600">Loading...</main>;

  if (!data.founder) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background px-4">
        <form onSubmit={unlock} className="w-full max-w-sm space-y-3 rounded-2xl border-2 border-slate-300 bg-white p-8 shadow-xl">
          <h1 className="text-xl font-extrabold text-slate-950">Founder access</h1>
          <input
            type="password"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Founder code"
            autoComplete="off"
            className="w-full rounded-lg border-2 border-slate-300 px-3.5 py-2.5 text-sm font-medium focus:border-slate-800 focus:outline-none"
          />
          {error && <p className="text-sm font-semibold text-red-600">{error}</p>}
          <Button type="submit" variant="primary" size="md" className="w-full">Unlock</Button>
          <Link href="/" className="block text-center text-sm font-semibold text-slate-600 hover:text-slate-950">Back to home</Link>
        </form>
      </main>
    );
  }

  const rows = Object.entries(data.votes ?? {}).sort((a, b) => b[1] - a[1]);
  const card = "rounded-xl border-2 border-slate-300 bg-white p-5";

  return (
    <main className="min-h-screen bg-background px-4 py-8 text-slate-950">
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-extrabold">Founder dashboard</h1>
          <div className="flex items-center gap-3">
            <Link href="/" className="text-sm font-semibold text-slate-700 hover:text-slate-950">Home</Link>
            <Button variant="outline" size="sm" onClick={lock}>Lock</Button>
          </div>
        </div>
        <p className="text-sm text-slate-600">You can open every company while unlocked (7 days on this browser).</p>

        <div className="grid grid-cols-2 gap-4">
          <div className={card}><p className="text-xs font-bold uppercase text-slate-500">Accounts</p><p className="text-3xl font-extrabold">{data.users ?? 0}</p></div>
          <div className={card}><p className="text-xs font-bold uppercase text-slate-500">Interviews scored</p><p className="text-3xl font-extrabold">{data.interviews ?? 0}</p></div>
        </div>

        <section className={card}>
          <h2 className="mb-3 text-lg font-extrabold">Votes by company (live)</h2>
          {rows.length === 0 ? (
            <p className="text-sm text-slate-600">No votes yet.</p>
          ) : (
            <table className="w-full text-left text-sm">
              <tbody>
                {rows.map(([slug, count]) => (
                  <tr key={slug} className="border-b border-slate-100">
                    <td className="py-2 font-semibold">{prettyCompany(slug)}</td>
                    <td className="py-2 font-bold">{count}</td>
                    <td className="py-2 text-right"><Link href={"/tracks/" + slug} className="font-bold text-primary hover:underline">Open</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      </div>
    </main>
  );
}
'@

Write-Host "2/3 Login page: tell the server whether this is Create account or Sign in..." -ForegroundColor Cyan
Edit-File "src\app\login\page.tsx" {
  param($t, $nl)
  if ($t.Contains("dz_intent")) { return $t }
  $anchor = 'const handleOAuthClick = async (providerId: string) => {'
  if (-not $t.Contains($anchor)) { Write-Host "  could not find handleOAuthClick; Google/GitHub signup fix NOT applied" -ForegroundColor Yellow; return $t }
  $add = '    // Tells the server whether this is "Create account" or "Sign in" (new social accounts are only created from signup).' + $nl +
         '    document.cookie = "dz_intent=" + mode + "; path=/; max-age=600; SameSite=Lax";'
  return $t.Replace($anchor, $anchor + $nl + $add)
}

Write-Host "3/3 Founder code..." -ForegroundColor Cyan
$envFile = Join-Path $root ".env.local"
$envText = if (Test-Path $envFile) { [IO.File]::ReadAllText($envFile) } else { "" }
if ($envText -notmatch "(?m)^FOUNDER_CODE=\S") {
  $chars = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789".ToCharArray()
  $rng = [Security.Cryptography.RandomNumberGenerator]::Create()
  $bytes = New-Object byte[] 14
  $rng.GetBytes($bytes)
  $code = -join ($bytes | ForEach-Object { $chars[$_ % $chars.Length] })
  $prefix = ""
  if ($envText -and -not $envText.EndsWith("`n")) { $prefix = "`n" }
  if ($envText -match "(?m)^FOUNDER_CODE=\s*$") {
    $envText = [regex]::Replace($envText, "(?m)^FOUNDER_CODE=\s*$", "FOUNDER_CODE=" + $code)
    [IO.File]::WriteAllText($envFile, $envText, (New-Object Text.UTF8Encoding($false)))
  } else {
    [IO.File]::AppendAllText($envFile, $prefix + "FOUNDER_CODE=" + $code + "`n", (New-Object Text.UTF8Encoding($false)))
  }
  Write-Host ""
  Write-Host ("  YOUR FOUNDER CODE: " + $code) -ForegroundColor Green
  Write-Host "  (saved in .env.local as FOUNDER_CODE - change it there any time, and keep it secret)"
} else {
  Write-Host "  FOUNDER_CODE already set in .env.local"
}

Write-Host ""
Write-Host "Done. Restart the dev server:  npm run dev" -ForegroundColor Green
Write-Host "Founder page: http://localhost:3000/founder"
