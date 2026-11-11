import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/options";
import { recordActiveTime } from "@/lib/auth/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return NextResponse.json({ error: "Not signed in." }, { status: 401 });

  const body = (await req.json().catch(() => null)) as { eventId?: unknown; activeSeconds?: unknown } | null;
  const eventId = typeof body?.eventId === "string" ? body.eventId : "";
  const activeSeconds = Number(body?.activeSeconds);

  if (!/^[a-f0-9-]{36}$/i.test(eventId)) {
    return NextResponse.json({ error: "Invalid activity event." }, { status: 400 });
  }
  if (!Number.isInteger(activeSeconds) || activeSeconds < 1 || activeSeconds > 60) {
    return NextResponse.json({ error: "Activity interval must be between 1 and 60 seconds." }, { status: 400 });
  }

  await recordActiveTime(session.user.id, eventId, activeSeconds);
  return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
}
