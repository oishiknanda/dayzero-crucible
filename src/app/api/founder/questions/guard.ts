import { NextRequest, NextResponse } from "next/server";
import { isFounder } from "@/lib/auth/founder";
import { EditorError } from "@/lib/problemEditor";

// Every question-editor route: founder cookie, database configured, and (for changes) JSON + same-origin.
export function gate(req: NextRequest, mutating: boolean): NextResponse | null {
  if (!isFounder()) return NextResponse.json({ error: "Founder access required." }, { status: 401 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: "Database not configured." }, { status: 503 });
  if (mutating) {
    const origin = req.headers.get("origin");
    if (origin) {
      let host = "";
      try { host = new URL(origin).host; } catch { /* invalid */ }
      if (host !== req.headers.get("host")) return NextResponse.json({ error: "Cross-site request refused." }, { status: 403 });
    }
    if (req.method !== "DELETE" && !(req.headers.get("content-type") || "").includes("application/json")) {
      return NextResponse.json({ error: "Send JSON." }, { status: 415 });
    }
  }
  return null;
}

export function fail(e: unknown): NextResponse {
  if (e instanceof EditorError) return NextResponse.json({ error: e.message }, { status: e.status });
  console.error("[question editor]", e);
  return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
}
