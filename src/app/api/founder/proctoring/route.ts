import { NextRequest, NextResponse } from "next/server";
import { isFounder } from "@/lib/auth/founder";
import { listSessions, sessionTimeline } from "@/lib/proctorEvents";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Founder only: list of proctored sessions, or one session's timeline (?session=ID).
export async function GET(req: NextRequest) {
  if (!isFounder()) return NextResponse.json({ error: "Founder access required." }, { status: 401 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: "Database not configured." }, { status: 503 });
  try {
    const id = req.nextUrl.searchParams.get("session");
    return NextResponse.json(id ? { timeline: await sessionTimeline(id) } : { sessions: await listSessions() });
  } catch (e) { console.error("[founder proctoring]", e); return NextResponse.json({ error: "Something went wrong." }, { status: 500 }); }
}
