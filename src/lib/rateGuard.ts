// Route helper: one call at the top of an API route applies the per-caller limit for that route.
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/options";
import { checkRateLimit, clientIp, envNumber, limitedBody } from "./rateLimit";

export interface GuardOptions {
  scope: string;
  user: number;          // limit for signed-in callers per window
  anon: number;          // limit for anonymous callers (per IP) per window
  windowSeconds?: number;
  ai?: boolean;          // counts toward REQUIRE_LOGIN_FOR_AI and AI_DAILY_CALL_CAP
  maxBytes?: number;     // reject bodies that declare a larger content-length
}

export async function guard(req: NextRequest, o: GuardOptions): Promise<NextResponse | null> {
  const declared = Number(req.headers.get("content-length") || 0);
  if (o.maxBytes && declared > o.maxBytes) return NextResponse.json({ error: "That request is too large." }, { status: 413 });

  let userId = "";
  try {
    const s = await getServerSession(authOptions);
    userId = s && s.user && (s.user as { id?: string }).id ? String((s.user as { id?: string }).id) : "";
  } catch { /* treat as anonymous */ }

  if (o.ai && process.env.REQUIRE_LOGIN_FOR_AI === "true" && !userId && o.scope !== "neo") {
    return NextResponse.json({ error: "Please sign in to continue.", reply: "Please sign in to continue." }, { status: 401 });
  }
  const upper = o.scope.toUpperCase();
  const windowSeconds = o.windowSeconds || 600;
  const limit = userId ? envNumber("RL_" + upper + "_USER", o.user) : envNumber("RL_" + upper + "_ANON", o.anon);
  const key = (userId ? "u:" + userId : "ip:" + clientIp(req.headers)) + ":" + o.scope;
  const r = await checkRateLimit({ key, limit, windowSeconds });
  if (!r.allowed) return tooMany(r.retryAfterSeconds);

  const cap = envNumber("AI_DAILY_CALL_CAP", 0);
  if (o.ai && cap > 0) {
    const day = new Date().toISOString().slice(0, 10);
    const g = await checkRateLimit({ key: "global:ai:" + day, limit: cap, windowSeconds: 86400 });
    if (!g.allowed) {
      const msg = "Our AI interviewer is at capacity for today. Please try again tomorrow.";
      return NextResponse.json({ error: msg, reply: msg, code: "daily_capacity_reached" }, { status: 503 });
    }
  }
  return null;
}

export function tooMany(retryAfterSeconds: number): NextResponse {
  const res = NextResponse.json(limitedBody(retryAfterSeconds), { status: 429 });
  res.headers.set("Retry-After", String(retryAfterSeconds));
  return res;
}
