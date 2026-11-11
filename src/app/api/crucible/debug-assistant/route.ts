import { NextRequest, NextResponse } from "next/server";
import { getDebuggingScenario } from "@/data/problems/debuggingProblems";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const scenario = getDebuggingScenario(String(body?.problemId || ""));
    if (!scenario) return NextResponse.json({ error: "Unknown debugging scenario." }, { status: 400 });

    const currentCode = String(body?.currentCode || "").slice(0, 24_000);
    const userPrompt = String(body?.userPrompt || "").trim().slice(0, 2_000);
    const selectedSnippet = String(body?.selectedSnippet || "").slice(0, 8_000);
    const testFailures = Array.isArray(body?.testFailures) ? body.testFailures.slice(0, 12) : [];
    const history = Array.isArray(body?.history) ? body.history.slice(-8) : [];
    if (!userPrompt) return NextResponse.json({ error: "Ask a focused debugging question." }, { status: 400 });

    const systemPrompt = `You are an enterprise senior pair-programmer coaching a candidate in a timed code-comprehension interview. Do not pretend to execute code. Guide diagnosis before prescribing a patch; ask the candidate to state a hypothesis and evidence. If asked for a complete answer without reasoning, politely push back and offer a targeted hint. Explain why failures occur, cite the provided code, and review regression risk. Keep answers concise and practical.\nScenario: ${scenario.title}\nQA report: ${scenario.bugReport}\n`;
    const prompt = `${systemPrompt}\nCandidate question: ${userPrompt}\nSelected code:\n${selectedSnippet || "(No selection)"}\nCurrent code:\n${currentCode}\nTest failures:\n${JSON.stringify(testFailures)}\nRecent assistant history:\n${JSON.stringify(history)}`;

    const groqKey = process.env.GROQ_API_KEY;
    if (groqKey) {
      try {
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST", signal: AbortSignal.timeout(20_000),
          headers: { Authorization: `Bearer ${groqKey}`, "Content-Type": "application/json" },
          body: JSON.stringify({ model: "openai/gpt-oss-120b", messages: [{ role: "user", content: prompt }], temperature: 0.3, max_tokens: 350 }),
        });
        const data = response.ok ? await response.json() : null;
        const reply = data?.choices?.[0]?.message?.content?.trim();
        if (reply) return NextResponse.json({ reply, provider: "groq" });
      } catch (error) { console.warn("Debug assistant Groq request failed", error); }
    }

    const geminiKey = process.env.GEMINI_API_KEY;
    if (geminiKey) {
      try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${geminiKey}`, {
          method: "POST", signal: AbortSignal.timeout(20_000), headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }], generationConfig: { temperature: 0.3, maxOutputTokens: 350 } }),
        });
        const data = response.ok ? await response.json() : null;
        const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
        if (reply) return NextResponse.json({ reply, provider: "gemini" });
      } catch (error) { console.warn("Debug assistant Gemini request failed", error); }
    }

    return NextResponse.json({ reply: "Start by identifying the state invariant this code must preserve. Which exact line changes that state, and what ordering or boundary case could make the observed failure reproducible? Run one focused regression check before changing multiple things.", provider: "guided-fallback" });
  } catch (error) {
    console.error("Debug assistant request failed", error);
    return NextResponse.json({ error: "The debugging assistant could not process that request. Please retry." }, { status: 500 });
  }
}
