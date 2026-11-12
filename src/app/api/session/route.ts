import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/options";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    return NextResponse.json({
      authenticated: !!session?.user?.id,
      user: session?.user || null
    });
  } catch (e) {
    console.error('Session check error:', e);
    return NextResponse.json({
      authenticated: false,
      user: null
    }, { status: 500 });
  }
}