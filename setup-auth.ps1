# DAY-ZERO.AI: sign up / sign in (email, Google, GitHub), profile and interview history.
# Run from the project root:   powershell -ExecutionPolicy Bypass -File .\setup-auth.ps1
$ErrorActionPreference = "Stop"
$root = (Get-Location).Path
if (-not (Test-Path (Join-Path $root "package.json")) -or -not (Test-Path (Join-Path $root "src\app"))) {
  Write-Host "Run this from the project root (the folder with package.json and src)." -ForegroundColor Red
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

Write-Host "1/5 Installing next-auth..." -ForegroundColor Cyan
npm install next-auth@4
if ($LASTEXITCODE -ne 0) { Write-Host "npm install failed." -ForegroundColor Red; exit 1 }

Write-Host "2/5 Writing new files..." -ForegroundColor Cyan
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

interface Db {
  users: StoredUser[];
  history: HistoryEntry[];
}

const FILE = path.join(process.cwd(), ".data", "store.json");
let queue: Promise<unknown> = Promise.resolve();

async function load(): Promise<Db> {
  try {
    const parsed = JSON.parse(await fs.readFile(FILE, "utf8")) as Partial<Db>;
    return { users: parsed.users ?? [], history: parsed.history ?? [] };
  } catch {
    return { users: [], history: [] };
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
      if (!user || !user.passwordHash || !verifyPassword(password, user.passwordHash)) return null;
      return { id: user.id, email: user.email, name: user.name, image: user.image ?? null };
    },
  }),
];

// Google and GitHub only appear when their keys are set in the environment.
if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  providers.push(GoogleProvider({ clientId: process.env.GOOGLE_CLIENT_ID, clientSecret: process.env.GOOGLE_CLIENT_SECRET }));
}
if (process.env.GITHUB_ID && process.env.GITHUB_SECRET) {
  providers.push(GithubProvider({ clientId: process.env.GITHUB_ID, clientSecret: process.env.GITHUB_SECRET }));
}

export const authOptions: NextAuthOptions = {
  providers,
  session: { strategy: "jwt", maxAge: 30 * 24 * 60 * 60 },
  pages: { signIn: "/login" },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account }) {
      if (!account || account.provider === "credentials") return true;
      if (!user.email) return false;
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
'@

Save-File 'src\types\next-auth.d.ts' @'
import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: { id: string; name?: string | null; email?: string | null; image?: string | null };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    uid?: string;
  }
}
'@

Save-File 'src\app\api\auth\[...nextauth]\route.ts' @'
import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth/options";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
'@

Save-File 'src\app\api\auth\signup\route.ts' @'
import { NextRequest, NextResponse } from "next/server";
import { createEmailUser } from "@/lib/auth/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const body = (await req.json().catch(() => null)) as { name?: unknown; email?: unknown; password?: unknown } | null;
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const password = typeof body?.password === "string" ? body.password : "";

  if (name.length < 1 || name.length > 60) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (password.length < 8 || password.length > 128) {
    return NextResponse.json({ error: "Password must be 8 to 128 characters." }, { status: 400 });
  }

  const user = await createEmailUser(name, email, password);
  if (!user) {
    return NextResponse.json(
      { error: "An account with this email already exists. Sign in instead, or use Google or GitHub." },
      { status: 409 }
    );
  }
  return NextResponse.json({ ok: true }, { status: 201 });
}
'@

Save-File 'src\app\api\history\route.ts' @'
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/options";
import { addHistory, getHistory } from "@/lib/auth/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const text = (value: unknown, max = 80) => (typeof value === "string" ? value.slice(0, max) : "");

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  return NextResponse.json({ history: await getHistory(session.user.id) });
}

// Called by the interview page when a scorecard is produced. Guests get 401 and are simply not recorded.
export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return NextResponse.json({ error: "Not signed in." }, { status: 401 });

  const body = (await req.json().catch(() => null)) as Record<string, unknown> | null;
  if (!body) return NextResponse.json({ error: "Bad request." }, { status: 400 });

  const rawScore = Number(body.score);
  const score = Number.isFinite(rawScore) ? Math.max(0, Math.min(100, Math.round(rawScore))) : null;
  const setId = typeof body.setId === "number" || typeof body.setId === "string" ? body.setId : null;

  const entry = await addHistory({
    userId: session.user.id,
    company: text(body.company),
    role: text(body.role),
    round: text(body.round),
    setId,
    score,
    verdict: text(body.verdict) || null,
  });
  return NextResponse.json({ ok: true, id: entry.id }, { status: 201 });
}
'@

Save-File 'src\components\auth\Providers.tsx' @'
"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
'@

Save-File 'src\components\auth\UserMenu.tsx' @'
"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/Button";
import { History, LogOut, User } from "lucide-react";

export function UserMenu() {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onOutside);
    return () => document.removeEventListener("mousedown", onOutside);
  }, []);

  if (status === "loading") return <div className="hidden sm:block h-9 w-9" aria-hidden="true" />;

  if (!session?.user) {
    return (
      <Link href="/login" className="hidden sm:inline-block">
        <Button variant="ghost" size="sm" className="font-semibold text-slate-700 text-sm hover:text-slate-950">
          Sign In
        </Button>
      </Link>
    );
  }

  const label = session.user.name || session.user.email || "Account";
  const initial = label.trim().charAt(0).toUpperCase();

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open profile menu"
        className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-slate-300 bg-primary text-sm font-bold text-white hover:border-slate-800 focus:outline-none"
      >
        {session.user.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={session.user.image} alt="" className="h-full w-full object-cover" referrerPolicy="no-referrer" />
        ) : (
          initial
        )}
      </button>
      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-60 rounded-xl border-2 border-slate-300 bg-white p-2 shadow-xl">
          <div className="border-b border-slate-200 px-3 pb-2 pt-1">
            <p className="truncate text-sm font-bold text-slate-950">{session.user.name || "Candidate"}</p>
            <p className="truncate text-xs text-slate-600">{session.user.email}</p>
          </div>
          <Link href="/profile" onClick={() => setOpen(false)} className="mt-1 flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100">
            <User className="h-4 w-4" /> Profile
          </Link>
          <Link href="/profile#history" onClick={() => setOpen(false)} className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100">
            <History className="h-4 w-4" /> Interview history
          </Link>
          <button onClick={() => signOut({ callbackUrl: "/" })} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-semibold text-red-600 hover:bg-red-50">
            <LogOut className="h-4 w-4" /> Sign out
          </button>
        </div>
      )}
    </div>
  );
}
'@

Save-File 'src\app\login\page.tsx' @'
"use client";

import React, { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { getProviders, signIn, useSession } from "next-auth/react";
import { Button } from "@/components/ui/Button";
import { Terminal } from "lucide-react";

const OAUTH_LABELS: Record<string, string> = { google: "Continue with Google", github: "Continue with GitHub" };

function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const { status } = useSession();
  const callbackUrl = params.get("callbackUrl") || "/";

  const [mode, setMode] = useState<"signin" | "signup">(params.get("mode") === "signup" ? "signup" : "signin");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [oauth, setOauth] = useState<string[]>([]);

  useEffect(() => {
    getProviders()
      .then((p) => setOauth(Object.keys(p ?? {}).filter((id) => id === "google" || id === "github")))
      .catch(() => setOauth([]));
  }, []);

  useEffect(() => {
    if (status === "authenticated") router.replace(callbackUrl);
  }, [status, router, callbackUrl]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      if (mode === "signup") {
        const res = await fetch("/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        });
        if (!res.ok) {
          const data = (await res.json().catch(() => ({}))) as { error?: string };
          setError(data.error || "Could not create your account.");
          return;
        }
      }
      const result = await signIn("credentials", { email, password, redirect: false });
      if (!result || result.error) {
        setError("Incorrect email or password.");
        return;
      }
      router.replace(callbackUrl);
    } finally {
      setBusy(false);
    }
  };

  const input = "w-full rounded-lg border-2 border-slate-300 px-3.5 py-2.5 text-sm font-medium focus:border-slate-800 focus:outline-none";

  return (
    <div className="w-full max-w-md rounded-2xl border-2 border-slate-300 bg-white p-8 shadow-xl">
      <Link href="/" className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
          <Terminal className="h-5 w-5" />
        </div>
        <span className="text-xl font-extrabold tracking-tight text-slate-950">
          DAY-ZERO<span className="text-primary">.AI</span>
        </span>
      </Link>

      <h1 className="text-2xl font-extrabold text-slate-950">{mode === "signin" ? "Welcome back" : "Create your account"}</h1>
      <p className="mt-1 text-sm text-slate-600">
        {mode === "signin" ? "Sign in to track your interview history." : "Save your scores and practice again."}
      </p>

      {oauth.length > 0 && (
        <div className="mt-6 space-y-2.5">
          {oauth.map((id) => (
            <Button key={id} type="button" variant="outline" size="md" className="w-full" onClick={() => signIn(id, { callbackUrl })}>
              {OAUTH_LABELS[id]}
            </Button>
          ))}
          <div className="flex items-center gap-3 py-1 text-xs font-semibold text-slate-500">
            <span className="h-px flex-1 bg-slate-200" /> OR <span className="h-px flex-1 bg-slate-200" />
          </div>
        </div>
      )}

      <form onSubmit={submit} className="mt-5 space-y-3">
        {mode === "signup" && (
          <input className={input} placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" required />
        )}
        <input className={input} type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required />
        <input
          className={input}
          type="password"
          placeholder={mode === "signup" ? "Password (8+ characters)" : "Password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete={mode === "signup" ? "new-password" : "current-password"}
          minLength={mode === "signup" ? 8 : undefined}
          required
        />
        {error && <p className="text-sm font-semibold text-red-600">{error}</p>}
        <Button type="submit" variant="primary" size="md" className="w-full" disabled={busy}>
          {busy ? "Please wait..." : mode === "signin" ? "Sign in" : "Create account"}
        </Button>
      </form>

      <p className="mt-5 text-center text-sm text-slate-600">
        {mode === "signin" ? "New here? " : "Already have an account? "}
        <button
          type="button"
          className="font-bold text-primary hover:underline"
          onClick={() => {
            setError("");
            setMode(mode === "signin" ? "signup" : "signin");
          }}
        >
          {mode === "signin" ? "Create an account" : "Sign in"}
        </button>
      </p>
    </div>
  );
}

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-10">
      <Suspense fallback={null}>
        <LoginForm />
      </Suspense>
    </main>
  );
}
'@

Save-File 'src\app\profile\page.tsx' @'
"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";

interface HistoryEntry {
  id: string;
  company: string;
  role: string;
  round: string;
  setId: string | number | null;
  score: number | null;
  verdict: string | null;
  at: string;
}

const ROUND_LABELS: Record<string, string> = {
  "round-1": "Round 1 - Online Assessment",
  "round-2": "Round 2 - Technical Viva",
  "round-3": "Round 3 - System Design",
  "round-4": "Round 4 - Bar Raiser",
};

const ROLE_LABELS: Record<string, string> = {
  sde_intern: "SDE Intern",
  sde_1: "SDE I",
  sde_2: "SDE II",
  sde_3: "SDE III",
  principal: "Principal",
};

const pretty = (slug: string) => slug.replace(/[-_]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

export default function ProfilePage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [history, setHistory] = useState<HistoryEntry[] | null>(null);

  useEffect(() => {
    if (status === "unauthenticated") router.replace("/login?callbackUrl=/profile");
  }, [status, router]);

  useEffect(() => {
    if (status !== "authenticated") return;
    fetch("/api/history")
      .then((r) => (r.ok ? r.json() : { history: [] }))
      .then((d: { history?: HistoryEntry[] }) => setHistory(d.history ?? []))
      .catch(() => setHistory([]));
  }, [status]);

  const stats = useMemo(() => {
    const list = history ?? [];
    const scored = list.filter((h) => typeof h.score === "number") as Array<HistoryEntry & { score: number }>;
    return {
      total: list.length,
      companies: new Set(list.map((h) => h.company)).size,
      average: scored.length ? Math.round(scored.reduce((s, h) => s + h.score, 0) / scored.length) : null,
      best: scored.length ? Math.max(...scored.map((h) => h.score)) : null,
    };
  }, [history]);

  if (status !== "authenticated" || !session?.user) {
    return <main className="flex min-h-screen items-center justify-center bg-background text-sm text-slate-600">Loading...</main>;
  }

  const name = session.user.name || "Candidate";
  const card = "rounded-xl border-2 border-slate-300 bg-white p-5";

  return (
    <main className="min-h-screen bg-background px-4 py-8 text-slate-950">
      <div className="mx-auto max-w-5xl space-y-6">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-950">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>

        <section className={card + " flex flex-wrap items-center justify-between gap-4"}>
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-primary text-2xl font-bold text-white">
              {session.user.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={session.user.image} alt="" className="h-full w-full object-cover" referrerPolicy="no-referrer" />
              ) : (
                name.charAt(0).toUpperCase()
              )}
            </div>
            <div>
              <h1 className="text-2xl font-extrabold">{name}</h1>
              <p className="text-sm text-slate-600">{session.user.email}</p>
            </div>
          </div>
          <Button variant="outline" size="sm" onClick={() => signOut({ callbackUrl: "/" })}>
            Sign out
          </Button>
        </section>

        <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            ["Interviews taken", stats.total],
            ["Companies", stats.companies],
            ["Average score", stats.average === null ? "-" : stats.average],
            ["Best score", stats.best === null ? "-" : stats.best],
          ].map(([label, value]) => (
            <div key={String(label)} className={card}>
              <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{label}</p>
              <p className="mt-1 text-3xl font-extrabold">{value}</p>
            </div>
          ))}
        </section>

        <section id="history" className={card}>
          <h2 className="mb-4 text-lg font-extrabold">Interview history</h2>
          {history === null ? (
            <p className="text-sm text-slate-600">Loading...</p>
          ) : history.length === 0 ? (
            <div className="py-8 text-center text-sm text-slate-600">
              No interviews yet. Finish a round and click Conclude &amp; Score, and it will show up here.
              <div className="mt-4">
                <Link href="/hub">
                  <Button variant="primary" size="md">Start an interview</Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-200 text-xs uppercase tracking-wide text-slate-500">
                    <th className="py-2 pr-4">Date</th>
                    <th className="py-2 pr-4">Company</th>
                    <th className="py-2 pr-4">Role</th>
                    <th className="py-2 pr-4">Round</th>
                    <th className="py-2 pr-4">Set</th>
                    <th className="py-2 pr-4">Score</th>
                    <th className="py-2">Verdict</th>
                  </tr>
                </thead>
                <tbody>
                  {history.map((h) => (
                    <tr key={h.id} className="border-b border-slate-100">
                      <td className="py-2.5 pr-4 text-slate-600">{new Date(h.at).toLocaleDateString()}</td>
                      <td className="py-2.5 pr-4 font-semibold">{pretty(h.company)}</td>
                      <td className="py-2.5 pr-4">{ROLE_LABELS[h.role] || pretty(h.role)}</td>
                      <td className="py-2.5 pr-4">{ROUND_LABELS[h.round] || pretty(h.round)}</td>
                      <td className="py-2.5 pr-4">{h.setId ?? "-"}</td>
                      <td className="py-2.5 pr-4 font-bold">{h.score === null ? "-" : h.score + "/100"}</td>
                      <td className="py-2.5">{h.verdict || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
'@

Write-Host "3/5 Updating existing files (small edits)..." -ForegroundColor Cyan

Edit-File "src\app\layout.tsx" {
  param($t, $nl)
  if ($t.Contains("auth/Providers")) { return $t }
  $t = $t.Replace('import "./globals.css";', 'import "./globals.css";' + $nl + 'import { Providers } from "@/components/auth/Providers";')
  return $t.Replace('{children}', '<Providers>{children}</Providers>')
}

Edit-File "src\components\landing\Navbar.tsx" {
  param($t, $nl)
  if ($t.Contains("auth/UserMenu")) { return $t }
  $t = $t.Replace('import { Button } from "@/components/ui/Button";', 'import { Button } from "@/components/ui/Button";' + $nl + 'import { UserMenu } from "@/components/auth/UserMenu";')
  $rx = New-Object Text.RegularExpressions.Regex('(?s)<Link href="/hub" className="hidden sm:inline-block">.*?</Link>')
  return $rx.Replace($t, '<UserMenu />', 1)
}

Edit-File "src\app\crucible\[sessionId]\page.tsx" {
  param($t, $nl)
  $anchor = 'setBehavioralScorecard(data.scorecard);'
  if ($t.Contains("/api/history")) { return $t }
  if (-not $t.Contains($anchor)) { Write-Host "  could not find the scorecard line; history will not be recorded" -ForegroundColor Yellow; return $t }
  $call = 'fetch("/api/history", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ company: companySlug, role: selectedRole, round: roundSlug, setId: selectedSetId, score: data.scorecard.score ?? null, verdict: data.scorecard.verdict ?? null }) }).catch(() => undefined);'
  return $t.Replace($anchor, $anchor + $nl + '        ' + $call)
}

Write-Host "4/5 Environment and gitignore..." -ForegroundColor Cyan
$gi = Join-Path $root ".gitignore"
if ((Test-Path $gi) -and -not ([IO.File]::ReadAllText($gi)).Contains(".data/")) {
  [IO.File]::AppendAllText($gi, "`n# local user/history store`n.data/`n", (New-Object Text.UTF8Encoding($false)))
}
$envFile = Join-Path $root ".env.local"
$envText = if (Test-Path $envFile) { [IO.File]::ReadAllText($envFile) } else { "" }
$add = ""
if ($envText -notmatch "(?m)^NEXTAUTH_URL=") { $add += "NEXTAUTH_URL=http://localhost:3000`n" }
if ($envText -notmatch "(?m)^NEXTAUTH_SECRET=") {
  $bytes = New-Object byte[] 32
  [void][Security.Cryptography.RandomNumberGenerator]::Create().GetBytes($bytes)
  $add += "NEXTAUTH_SECRET=" + [Convert]::ToBase64String($bytes) + "`n"
}
foreach ($k in "GOOGLE_CLIENT_ID", "GOOGLE_CLIENT_SECRET", "GITHUB_ID", "GITHUB_SECRET") {
  if ($envText -notmatch ("(?m)^" + $k + "=")) { $add += $k + "=`n" }
}
if ($add) {
  if ($envText -and -not $envText.EndsWith("`n")) { $add = "`n" + $add }
  [IO.File]::AppendAllText($envFile, $add, (New-Object Text.UTF8Encoding($false)))
  Write-Host "  updated .env.local"
}

Write-Host "5/5 Done." -ForegroundColor Green
Write-Host ""
Write-Host "Restart the dev server:  npm run dev"
Write-Host "Email sign up works immediately. To turn on the buttons, fill these in .env.local:"
Write-Host "  Google : GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET  (redirect URI: http://localhost:3000/api/auth/callback/google)"
Write-Host "  GitHub : GITHUB_ID / GITHUB_SECRET                (callback URL: http://localhost:3000/api/auth/callback/github)"
