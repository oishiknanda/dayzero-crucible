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