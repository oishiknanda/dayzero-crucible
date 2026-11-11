import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/options";
import { isFounder } from "@/lib/auth/founder";
import { addVote, getAllVoteCounts, getVoteState, removeVote, updateVoteEmail } from "@/lib/auth/store";
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

const isValidEmail = (email: string) => email.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// POST { company, action, notificationEmail? } -> one vote per account per company
export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return NextResponse.json({ error: "Sign in to vote." }, { status: 401 });

  const body = (await req.json().catch(() => null)) as { company?: unknown; action?: unknown; notificationEmail?: unknown } | null;
  const company = typeof body?.company === "string" ? body.company.toLowerCase() : "";
  if (!isValidSlug(company)) return NextResponse.json({ error: "Unknown company." }, { status: 400 });
  if (isLiveCompany(company)) return NextResponse.json({ error: "This company is already open." }, { status: 400 });

  const notificationEmail = typeof body?.notificationEmail === "string" ? body.notificationEmail.trim() : "";
  if (notificationEmail && !isValidEmail(notificationEmail)) {
    return NextResponse.json({ error: "Enter a valid email address, or leave it blank." }, { status: 400 });
  }

  if (body?.action === "unvote") {
    await removeVote(company, session.user.id);
  } else if (body?.action === "update-email") {
    const updated = await updateVoteEmail(company, session.user.id, notificationEmail);
    if (!updated) return NextResponse.json({ error: "Vote for this company before saving a notification email." }, { status: 400 });
  } else if (body?.action === "vote") {
    await addVote(company, session.user.id, notificationEmail || undefined);
  } else {
    return NextResponse.json({ error: "Choose vote, update-email, or unvote." }, { status: 400 });
  }

  return NextResponse.json(await getVoteState(company, session.user.id));
}
