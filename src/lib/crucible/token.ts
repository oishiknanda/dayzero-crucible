import { createHmac, createHash, timingSafeEqual } from "node:crypto";
import type { SessionContext, SessionState } from "@/types/crucible";

/**
 * Signed session tokens.
 *
 * The server keeps no session store. Instead each response carries a token that
 * holds the interview state and an HMAC signature. The client can read it but
 * can not edit it: a tampered token fails verification, so a candidate can not
 * jump from INITIAL to VERDICT or reset their own turn counter.
 *
 * The secret is CRUCIBLE_SESSION_SECRET when set. Otherwise it is derived from
 * an existing API key so every server instance agrees on it without new setup.
 */

const TOKEN_TTL_MS = 6 * 60 * 60 * 1000;

function secret(): string {
  const configured = process.env.CRUCIBLE_SESSION_SECRET;
  if (configured && configured.trim().length >= 16) return configured.trim();
  const seed =
    process.env.GROQ_API_KEY ?? process.env.GEMINI_API_KEY ?? process.env.ANTHROPIC_API_KEY ?? "crucible-dev-only-secret";
  return createHash("sha256").update("crucible-session:" + seed).digest("hex");
}

function sign(payload: string): string {
  return createHmac("sha256", secret()).update(payload).digest("base64url");
}

export function signState(state: SessionState): string {
  const payload = Buffer.from(JSON.stringify(state), "utf8").toString("base64url");
  return payload + "." + sign(payload);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isFiniteNumber(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value);
}

/** Returns the verified state, or null for any malformed, forged or expired token. */
export function verifyToken(token: string, now: number = Date.now()): SessionState | null {
  const dot = token.indexOf(".");
  if (dot <= 0 || dot === token.length - 1) return null;

  const payload = token.slice(0, dot);
  const given = Buffer.from(token.slice(dot + 1), "utf8");
  const expected = Buffer.from(sign(payload), "utf8");
  if (given.length !== expected.length || !timingSafeEqual(given, expected)) return null;

  let parsed: unknown;
  try {
    parsed = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
  } catch {
    return null;
  }

  if (!isRecord(parsed) || parsed.v !== 1 || !isRecord(parsed.ctx)) return null;
  if (!isFiniteNumber(parsed.iat) || now - parsed.iat > TOKEN_TTL_MS || parsed.iat > now + 60_000) return null;

  // Signature is valid, so this is a state we issued. Re-check the shape anyway.
  const numeric = [
    "topicIndex",
    "turnsInTopic",
    "clarificationsInTopic",
    "pushbacksInTopic",
    "turnsInQuestion",
    "approachTurns",
    "codingChats"
  ];
  for (const key of numeric) {
    if (!isFiniteNumber(parsed[key])) return null;
  }
  if (typeof parsed.phase !== "string" || typeof parsed.completed !== "boolean" || typeof parsed.codePassed !== "boolean") {
    return null;
  }

  return parsed as unknown as SessionState;
}

export function contextMatches(a: SessionContext, b: SessionContext): boolean {
  return (
    a.company === b.company &&
    a.role === b.role &&
    a.roundId === b.roundId &&
    a.setId === b.setId &&
    a.problemId === b.problemId &&
    a.questionIndex === b.questionIndex
  );
}
