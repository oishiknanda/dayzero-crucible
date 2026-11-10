import NextAuth from "next-auth";
import { NextRequest } from "next/server";
import { buildAuthOptions } from "@/lib/auth/options";

type RouteContext = { params: { nextauth: string[] } };

// The login page sets the dz_intent cookie ("signin" or "signup") before starting Google or GitHub.
async function handler(req: NextRequest, ctx: RouteContext) {
  const intent = req.cookies.get("dz_intent")?.value === "signup" ? "signup" : "signin";
  return NextAuth(req, ctx, buildAuthOptions(intent));
}

export { handler as GET, handler as POST };