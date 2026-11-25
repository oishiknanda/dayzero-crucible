import { NextRequest, NextResponse } from "next/server";
import { FOUNDER_COOKIE, codeMatches, founderCookieOptions, isFounder, makeFounderToken } from "@/lib/auth/founder";
import { getAllVoteCounts, getFounderWaitlistContacts, getOverview } from "@/lib/auth/store";
import { COMPANY_PROFILES } from "@/data/companyTracks";
import { EXTRA_COMPANY_PROFILES } from "@/data/indianCompanies";
import { isLiveCompany } from "@/lib/waitlist";
import { checkRateLimit, clientIp } from "@/lib/rateLimit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Brute-force guard: 10 unlock attempts per 10 minutes per IP (kept in the database, so it holds across server instances).
const ATTEMPT_LIMIT = 10;

export async function GET() {
  if (!(await isFounder())) return NextResponse.json({ founder: false });
  const [overview, voteCounts, waitlistContacts] = await Promise.all([
    getOverview(),
    getAllVoteCounts(),
    getFounderWaitlistContacts(),
  ]);
  const waitlistCompanies = new Set([
    ...Object.keys(COMPANY_PROFILES),
    ...Object.keys(EXTRA_COMPANY_PROFILES),
    ...Object.keys(voteCounts),
  ]);
  const votes = Object.fromEntries(
    Array.from(waitlistCompanies)
      .filter((company) => !isLiveCompany(company))
      .map((company) => [company, voteCounts[company] || 0])
  );
  return NextResponse.json(
    { founder: true, ...overview, votes, waitlistContacts },
    { headers: { "Cache-Control": "no-store, max-age=0" } }
  );
}

export async function POST(req: NextRequest) {
  if (!process.env.FOUNDER_CODE || !process.env.NEXTAUTH_SECRET) {
    return NextResponse.json({ error: "Founder access is not configured on this server." }, { status: 503 });
  }
  const ip = clientIp(req.headers);
  const rl = await checkRateLimit({ key: "founder-unlock:" + ip, limit: ATTEMPT_LIMIT, windowSeconds: 600 });
  if (!rl.allowed) {
    return NextResponse.json({ error: "Too many attempts. Try again later." }, { status: 429, headers: { "Retry-After": String(rl.retryAfterSeconds) } });
  }

  const body = (await req.json().catch(() => null)) as { code?: unknown } | null;
  const code = typeof body?.code === "string" ? body.code : "";
  if (!codeMatches(code)) {
    return NextResponse.json({ error: "Wrong code." }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(FOUNDER_COOKIE, makeFounderToken(), founderCookieOptions);
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(FOUNDER_COOKIE, "", { ...founderCookieOptions, maxAge: 0 });
  return res;
}
