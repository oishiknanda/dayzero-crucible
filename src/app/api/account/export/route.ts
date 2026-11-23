import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/options";
import { exportAccount } from "@/lib/auth/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Returns everything stored for the signed-in user as a JSON download.
export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  const data = await exportAccount(session.user.id);
  if (!data) return NextResponse.json({ error: "Account not found." }, { status: 404 });
  return new NextResponse(JSON.stringify(data, null, 2), {
    headers: {
      "Content-Type": "application/json",
      "Content-Disposition": 'attachment; filename="dayzero-my-data.json"',
      "Cache-Control": "no-store",
    },
  });
}
