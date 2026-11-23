import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/options";
import { deleteAccount } from "@/lib/auth/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Permanently deletes the signed-in user's account and everything stored for it.
export async function DELETE() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  await deleteAccount(session.user.id);
  return NextResponse.json({ ok: true });
}
