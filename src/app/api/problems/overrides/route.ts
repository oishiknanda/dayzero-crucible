import { NextResponse } from "next/server";
import { listProblemOverrides } from "../../../../lib/problemsDb";

export const dynamic = "force-dynamic";

// Returns the question rows that exist in the database. On any problem it returns an empty set,
// so the app falls back to the built-in questions.
export async function GET() {
  try {
    const data = await listProblemOverrides();
    return NextResponse.json(data, { headers: { "Cache-Control": "public, s-maxage=30, stale-while-revalidate=120" } });
  } catch {
    return NextResponse.json({ problems: {}, sets: {} });
  }
}
