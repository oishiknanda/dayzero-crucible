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