import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("resume") as File | null;
    const targetRole = (formData.get("targetRole") as string) || "Software Engineer";

    if (!file) {
      return NextResponse.json({ error: "No resume file uploaded." }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    let rawText = "";

    try {
      rawText = buffer.toString("utf-8").replace(/[^\x20-\x7E\n]/g, " ");
    } catch {
      rawText = "";
    }

    // 1. Contact & Identity Anchors
    const hasEmail = /[\w.-]+@[\w.-]+\.\w+/.test(rawText);
    const hasPhone = /(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/.test(rawText);
    const hasLinkedIn = /linkedin\.com\/in\//i.test(rawText);
    const hasGitHub = /github\.com\//i.test(rawText);

    // 2. Standard Industry ATS Section Headers
    const standardSections = ["experience", "education", "skills", "projects"];
    const foundSections = standardSections.filter((sec) =>
      new RegExp(`\\b${sec}\\b`, "i").test(rawText)
    );

    // 3. Quantification & Action Impact
    const actionVerbs = [
      "spearheaded", "architected", "engineered", "optimized",
      "developed", "reduced", "increased", "deployed", "scaled"
    ];
    const foundVerbs = actionVerbs.filter((v) => new RegExp(`\\b${v}\\b`, "i").test(rawText));
    const hasMetrics = /\d+([%kKmMbB]|\s*(ms|seconds|users|requests|qps|tb|gb))/g.test(rawText);

    let score = 50;
    const improvements: string[] = [];
    const strengths: string[] = [];

    // Contact Score
    if (hasEmail && hasPhone) {
      score += 10;
      strengths.push("Direct candidate contact details (email and telephone) successfully detected.");
    } else {
      improvements.push("Ensure your professional email and contact phone number are clearly positioned near the top.");
    }

    if (hasLinkedIn || hasGitHub) {
      score += 5;
      strengths.push("Professional technical footprints (GitHub / LinkedIn) identified.");
    } else {
      improvements.push("Add direct links to your GitHub profile and LinkedIn page for technical ATS filters.");
    }

    // Sections Score
    if (foundSections.length >= 3) {
      score += 15;
      strengths.push("Standard core ATS sections found (Experience, Education, Skills, Projects).");
    } else {
      improvements.push("Adopt standard section titles: 'Work Experience', 'Education', 'Technical Skills', 'Projects'.");
    }

    // Impact & Quantifiable Metrics
    if (hasMetrics) {
      score += 10;
      strengths.push("Quantified business impact and performance figures detected.");
    } else {
      improvements.push("Quantify achievements with concrete metrics (e.g., 'reduced API latency by 35%', 'scaled to 50k DAU').");
    }

    if (foundVerbs.length >= 3) {
      score += 10;
      strengths.push("Strong active verbs utilized across technical accomplishments.");
    } else {
      improvements.push("Begin each bullet point with strong active verbs (e.g., 'Architected', 'Engineered', 'Optimized').");
    }

    const finalScore = Math.min(100, Math.max(30, score));

    return NextResponse.json({
      score: finalScore,
      rating: finalScore >= 80 ? "ATS Ready" : finalScore >= 65 ? "Competitive" : "Needs Optimization",
      role: targetRole,
      fileName: file.name,
      strengths,
      improvements,
      breakdown: {
        contactInfo: hasEmail && hasPhone ? 100 : 50,
        sectionStructure: Math.round((foundSections.length / standardSections.length) * 100),
        quantifiedImpact: hasMetrics ? 95 : 45,
        keywordVerbMatch: Math.min(100, foundVerbs.length * 20),
      },
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to analyze resume." }, { status: 500 });
  }
}
