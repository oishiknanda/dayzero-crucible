import { NextRequest, NextResponse } from "next/server";
import { addQuestion, listQuestions, moveQuestion, resetQuestion, undoChange } from "@/lib/problemEditor";
import { fail, gate } from "./guard";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const g = await gate(req, false);
  if (g) return g;
  try { return NextResponse.json({ questions: await listQuestions() }); } catch (e) { return fail(e); }
}

// Actions: add (clone), move (reorder or change set), reset (back to built-in), undo.
export async function POST(req: NextRequest) {
  const g = await gate(req, true);
  if (g) return g;
  const b = (await req.json().catch(() => null)) as Record<string, unknown> | null;
  if (!b || typeof b.action !== "string") return NextResponse.json({ error: "Bad request." }, { status: 400 });
  try {
    if (b.action === "add") await addQuestion(String(b.fromId || ""), String(b.newId || "").trim());
    else if (b.action === "move") await moveQuestion(String(b.id || ""), Number(b.setId), Number(b.position));
    else if (b.action === "reset") await resetQuestion(String(b.id || ""));
    else if (b.action === "undo") await undoChange(Number(b.auditId));
    else return NextResponse.json({ error: "Unknown action." }, { status: 400 });
    return NextResponse.json({ ok: true, note: "Live on the site within about 2 minutes." });
  } catch (e) { return fail(e); }
}
