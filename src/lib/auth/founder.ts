// Founder access: a secret code (FOUNDER_CODE in .env.local) unlocks every company.
// The unlock is an httpOnly, signed, expiring cookie, so it cannot be forged from the browser.
import { createHash, createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

export const FOUNDER_COOKIE = "dz_founder";
const DAYS = 7;

const secret = () => process.env.NEXTAUTH_SECRET || "dev-only-secret";
const sign = (value: string) => createHmac("sha256", secret()).update(value).digest("hex");

export function makeFounderToken(): string {
  const value = "founder." + (Date.now() + DAYS * 86_400_000);
  return value + "." + sign(value);
}

export function verifyFounderToken(token: string | undefined): boolean {
  if (!token) return false;
  const parts = token.split(".");
  if (parts.length !== 3 || parts[0] !== "founder") return false;
  const expires = Number(parts[1]);
  if (!Number.isFinite(expires) || expires < Date.now()) return false;
  const expected = Buffer.from(sign(parts[0] + "." + parts[1]));
  const given = Buffer.from(parts[2]);
  return expected.length === given.length && timingSafeEqual(expected, given);
}

export function isFounder(): boolean {
  try {
    return verifyFounderToken(cookies().get(FOUNDER_COOKIE)?.value);
  } catch {
    return false;
  }
}

export function codeMatches(input: string): boolean {
  const code = process.env.FOUNDER_CODE;
  if (!code || code.length < 6) return false;
  const a = createHash("sha256").update(input).digest();
  const b = createHash("sha256").update(code).digest();
  return timingSafeEqual(a, b);
}

export const founderCookieOptions = {
  httpOnly: true,
  sameSite: "lax" as const,
  path: "/",
  maxAge: DAYS * 86_400,
  secure: process.env.NODE_ENV === "production",
};