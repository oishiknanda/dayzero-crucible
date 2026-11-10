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