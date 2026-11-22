import { NextRequest, NextResponse } from "next/server";
import { listProblemOverrides } from "../../../../lib/problemsDb";

export const dynamic = "force-dynamic";

// Returns the question rows that exist in the database. On any problem it returns an empty set,
// so the app falls back to the built-in questions.
const CACHE = { "Cache-Control": "public, s-maxage=30, stale-while-revalidate=120" };

export async function GET(req: NextRequest) {
  const company = req.nextUrl.searchParams.get("company") || "";
  const role = req.nextUrl.searchParams.get("role");
  if (!company.trim()) return NextResponse.json({ problems: {}, sets: {} }, { status: 400, headers: CACHE });
  try {
    const data = await listProblemOverrides(company, role);
    return NextResponse.json(data, { headers: CACHE });
  } catch {
    return NextResponse.json({ problems: {}, sets: {} }, { headers: CACHE });
  }
}
