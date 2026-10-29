import { NextResponse } from "next/server";

export async function HEAD() {
  return new NextResponse(null, {
    status: 200,
    headers: { "Cache-Control": "no-store, max-age=0" },
  });
}

export async function GET() {
  return NextResponse.json({ status: "ready", timestamp: Date.now() });
}