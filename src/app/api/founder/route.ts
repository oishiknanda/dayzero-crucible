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