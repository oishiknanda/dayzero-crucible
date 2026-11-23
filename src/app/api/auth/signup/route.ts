import { NextRequest, NextResponse } from "next/server";
import { createEmailUser } from "@/lib/auth/store";
import { guard, tooMany } from "../../../../lib/rateGuard";
import { checkRateLimit, envNumber } from "../../../../lib/rateLimit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const blocked = await guard(req, { scope: "signup", user: 5, anon: 5, windowSeconds: 3600, maxBytes: 20000 });
  if (blocked) return blocked;
  const body = (await req.json().catch(() => null)) as { name?: unknown; email?: unknown; password?: unknown } | null;
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const password = typeof body?.password === "string" ? body.password : "";
  if (email) {
    const er = await checkRateLimit({ key: "signup-email:" + email.toLowerCase(), limit: envNumber("RL_SIGNUP_EMAIL", 3), windowSeconds: 3600 });
    if (!er.allowed) return tooMany(er.retryAfterSeconds);
  }

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