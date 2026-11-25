import { NextRequest, NextResponse } from "next/server";
import { deleteQuestion, getQuestion, updateQuestion } from "@/lib/problemEditor";
import { fail, gate } from "../guard";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const g = await gate(req, false);
  if (g) return g;
  try { return NextResponse.json(await getQuestion((await ctx.params).id)); } catch (e) { return fail(e); }
}

export async function PATCH(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const g = await gate(req, true);
  if (g) return g;
  const b = (await req.json().catch(() => null)) as { data?: unknown; enabled?: unknown } | null;
  if (!b) return NextResponse.json({ error: "Bad request." }, { status: 400 });
  try {
    await updateQuestion((await ctx.params).id, { data: b.data, enabled: typeof b.enabled === "boolean" ? b.enabled : undefined });
    return NextResponse.json({ ok: true, note: "Live on the site within about 2 minutes." });
  } catch (e) { return fail(e); }
}

// Deleting needs ?confirm=<the question id>. Disabling is safer; deleting a set's last row brings the built-in set back.
export async function DELETE(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const g = await gate(req, true);
  if (g) return g;
  const { id } = await ctx.params;
  if (req.nextUrl.searchParams.get("confirm") !== id) return NextResponse.json({ error: "Type the question id to confirm." }, { status: 400 });
  try { await deleteQuestion(id); return NextResponse.json({ ok: true, note: "Live on the site within about 2 minutes." }); } catch (e) { return fail(e); }
}
