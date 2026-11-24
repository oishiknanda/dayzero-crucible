import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/options";
import { guard } from "@/lib/rateGuard";
import { cleanEvents, saveEvents } from "@/lib/proctorEvents";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// The interview page sends proctoring events here in small batches. Failures never affect the interview.
export async function POST(req: NextRequest) {
  const blocked = await guard(req, { scope: "proctor", user: 600, anon: 300, maxBytes: 30000 });
  if (blocked) return blocked;
  const b = (await req.json().catch(() => null)) as { sessionId?: unknown; company?: unknown; round?: unknown; events?: unknown } | null;
  const sessionId = typeof b?.sessionId === "string" ? b.sessionId.slice(0, 80) : "";
  if (!sessionId) return NextResponse.json({ error: "Bad request." }, { status: 400 });
  try {
    const session = await getServerSession(authOptions);
    await saveEvents({ sessionId, userId: session?.user?.id, company: typeof b?.company === "string" ? b.company : "", round: typeof b?.round === "string" ? b.round : "" }, cleanEvents(b?.events));
  } catch (e) { console.error("[proctor events]", e); }
  return NextResponse.json({ ok: true });
}
