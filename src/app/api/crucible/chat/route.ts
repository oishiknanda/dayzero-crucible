import { NextRequest, NextResponse } from "next/server";

interface FollowUpStage {
  stageNumber: number;
  focus: string;
  probeIntent: string;
}

const getAmazonFollowUpStages = (category: string, difficulty: string): FollowUpStage[] => [
  {
    stageNumber: 1,
    focus: "Complexity and Auxiliary Space Invariants",
    probeIntent: "Derive exact tight Big-O time and auxiliary memory boundaries. Challenge implicit allocations."
  },
  {
    stageNumber: 2,
    focus: "Data Scaling and Production Bottlenecks",
    probeIntent: "Probe how the algorithm behaves under 100x traffic volume or continuous data streaming."
  },
  {
    stageNumber: 3,
    focus: "Edge Case and Adversarial Inputs",
    probeIntent: "Test corner cases: empty inputs, single elements, duplicates, negative numbers, or overflow boundaries."
  },
  {
    stageNumber: 4,
    focus: "Amazon Trade-offs and Production Resiliency",
    probeIntent: "Explore architectural trade-offs: compute vs memory, latency vs consistency, and fault tolerance."
  }
];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      problemId = "amz-general",
      problemTitle = "Algorithmic Challenge",
      problemDescription = "",
      candidateMessage = "",
      dialogueHistory = [],
      vivaPhase = "INITIAL",
      code = "",
      questionIndex = 0,
      category = "Algorithms",
      difficulty = "Medium"
    } = body;

    const groqKey = process.env.GROQ_API_KEY;

    const followUpStages = getAmazonFollowUpStages(category, difficulty);
    const activeStage = followUpStages[Math.min(questionIndex, followUpStages.length - 1)];

    const systemPrompt = "You are an elite, highly authentic Amazon Senior SDE Bar Raiser conducting an interactive Round 2 interview.\n" +
      "Act like an intelligent, perceptive human engineer in an interview room—NOT a rigid robot or multiple-choice test script.\n\n" +
      "INTERVIEW CONTEXT:\n" +
      "- Problem: " + problemTitle + " (" + category + ", " + difficulty + ")\n" +
      "- Problem Context: " + problemDescription + "\n" +
      "- Current Viva Stage: " + vivaPhase + "\n" +
      "- Active Follow-Up Stage: " + activeStage.focus + " (" + activeStage.probeIntent + ")\n" +
      "- Current Code in Editor:\n" + (code ? code : "[Candidate has not written code yet]") + "\n\n" +
      "- Recent Dialogue:\n" + JSON.stringify(dialogueHistory.slice(-5)) + "\n\n" +
      "CANDIDATE JUST SAID:\n\"" + candidateMessage + "\"\n\n" +
      "HUMAN INTERVIEWER PROTOCOLS:\n" +
      "1. FULL AUTONOMY AND CONVERSATIONAL FLUIDITY:\n" +
      "   - If the candidate asks a procedural question (e.g., Should I explain approach first?, Are you there?, Can you hear me?), answer directly as a human would.\n" +
      "   - If the candidate presents an algorithmic approach:\n" +
      "     * If optimal: Validate it concisely and instruct: That approach works. Go ahead and implement it in the code editor, then run and submit your tests.\n" +
      "     * If suboptimal/incorrect: Point out the flaw or worst-case bottleneck directly and ask how they can optimize it.\n" +
      "2. STAGE 3 (FOLLOW-UP GRILLING):\n" +
      "   - When vivaPhase is FOLLOW_UPS, critique their previous answer in 1 sentence, then deliver the probe for: " + activeStage.focus + ".\n" +
      "3. STAGE 4 (FINAL VERDICT):\n" +
      "   - When vivaPhase is VERDICT, synthesize their technical performance, Big-O rigor, and communication in 2-3 decisive sentences.\n" +
      "4. FORMAT RULES:\n" +
      "   - Deliver 1 to 2 conversational spoken sentences maximum.\n" +
      "   - No markdown formatting, no bullet points, no asterisks, no robotic preamble.";

    if (groqKey) {
      const modelsToTry = ["qwen/qwen3.8-27b", "openai/gpt-oss-120b", "openai/gpt-oss-20b"];
      for (const model of modelsToTry) {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 6000);

          const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + groqKey
            },
            body: JSON.stringify({
              model,
              messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: candidateMessage || "I am ready." }
              ],
              max_tokens: 120,
              temperature: 0.6
            }),
            signal: controller.signal
          });
          clearTimeout(timeoutId);

          if (groqRes.ok) {
            const data = await groqRes.json();
            const reply = data?.choices?.[0]?.message?.content?.trim();
            if (reply) {
              const nextIdx = vivaPhase === "FOLLOW_UPS" ? questionIndex + 1 : questionIndex;
              return NextResponse.json({ reply, nextQuestionIndex: nextIdx });
            }
          }
        } catch (e) {
          console.warn("[Groq Attempt Failed]:", model, e);
        }
      }
    }

    // Dynamic fallback if upstream providers fail
    let fallback = "Yes, please walk me through your planned algorithmic approach and data structures first.";
    if (candidateMessage.toLowerCase().includes("should i") || candidateMessage.toLowerCase().includes("are you there")) {
      fallback = "Yes, I am here. Go ahead and explain your high-level approach and time complexity before writing code.";
    }

    return NextResponse.json({
      reply: fallback,
      nextQuestionIndex: questionIndex
    });
  } catch (err: any) {
    console.error("[CRUCIBLE CHAT ERROR]:", err);
    return NextResponse.json({
      reply: "I am listening. Walk me through your planned algorithmic approach.",
      nextQuestionIndex: 0
    });
  }
}
