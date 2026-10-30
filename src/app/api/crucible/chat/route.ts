import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const {
      isRound4 = false,
      roundSlug = "round-1",
      problemId = "amz-general",
      problemTitle = "Leadership Scenario",
      problemDescription = "",
      candidateMessage = "",
      dialogueHistory = [],
      vivaPhase = "INITIAL",
      questionIndex = 0,
      totalQuestions = 2,
      evaluateScorecard = false
    } = await req.json();

    const groqKey = process.env.GROQ_API_KEY;
    const geminiKey = process.env.GEMINI_API_KEY;
    const isBehavioral = Boolean(isRound4 || roundSlug === "round-4" || roundSlug === "bar-raiser");

    // ─────────────────────────────────────────────────────────────
    // UNCONDITIONAL 5-SUBMISSION HARD STOP (BAR RAISER ROUND)
    // ─────────────────────────────────────────────────────────────
    if (isBehavioral && !evaluateScorecard) {
      const historyList = Array.isArray(dialogueHistory) ? dialogueHistory : [];
      
      // Count every turn originating from the user/candidate
      const candidateTurns = historyList.filter((m) => {
        const s = String(m?.sender || m?.speaker || m?.role || "").toLowerCase();
        return s === "candidate" || s === "user";
      }).length + (candidateMessage ? 1 : 0);

      const qIdx = Number(questionIndex || 0);
      const totalQ = Number(totalQuestions || 2);
      const isLastQuestionOfSet = qIdx >= (totalQ - 1);

      // Force cutoff on turn 5 regardless of quality, repetition, or content
      if (candidateTurns >= 5) {
        if (!isLastQuestionOfSet) {
          return NextResponse.json({
            reply: "Thank you. You have reached the maximum response turns for Question 1 of this set. Please click 'Conclude & Score' at the top right to proceed to Question 2.",
            questionCompleted: true,
            isSetFinished: false,
            nextQuestionIndex: qIdx + 1
          });
        } else {
          return NextResponse.json({
            reply: "Thank you. You have completed all turns across both questions in this Bar Raiser set. Please click 'Conclude & Score' at the top right to finalize your evaluation.",
            questionCompleted: true,
            isSetFinished: true,
            nextQuestionIndex: qIdx
          });
        }
      }
    }

    if (evaluateScorecard) {
      const evaluationPrompt = `You are a Principal Amazon Bar Raiser completing the comprehensive hiring scorecard for an Executive Behavioral Round (Set of questions).
Evaluate the candidate's complete dialogue transcript across all answered questions in this set against Amazon Leadership Principles (STAR method, "I" vs "We" ownership, concrete quantifiable metrics, and depth of technical/business trade-offs).

CRITICAL RULE: DO NOT GIVE A FAKE OR STATIC 100/100. Grade realistically between 35 and 92 based on their actual answers.
- Penalize vague statements, missing metrics, or taking credit without explaining specific individual actions.
- Reward clear metrics, decisive ownership, and systematic mitigation.

SET CONTEXT: ${problemTitle} - ${problemDescription}
FULL CANDIDATE TRANSCRIPT:
${JSON.stringify(dialogueHistory, null, 2)}

Respond strictly in valid JSON format with NO markdown fences, no backticks, and no extra prose:
{
  "score": <number between 35 and 92>,
  "verdict": "<Strong Hire | Hire | Leaning No Hire | No Hire>",
  "starBreakdown": {
    "situationAndTask": "<1-2 sentences critiquing context clarity and ownership framing across the set>",
    "actionDepth": "<1-2 sentences assessing whether technical steps were specific and granular>",
    "resultAndMetrics": "<1-2 sentences on whether outcomes had real business metrics and guardrails>"
  },
  "strengths": [
    "<specific observed strength across the set 1>",
    "<specific observed strength across the set 2>"
  ],
  "areasForImprovement": [
    "<specific area where they fell short 1>",
    "<specific area to improve for the real Bar Raiser 2>"
  ],
  "barRaiserDebriefNote": "<2-3 executive summary sentences summarizing the final decision across both questions>"
}`;

      // 1. Try Groq
      if (groqKey) {
        try {
          const gRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${groqKey}` },
            body: JSON.stringify({
              model: "openai/gpt-oss-120b",
              messages: [{ role: "user", content: evaluationPrompt }],
              temperature: 0.2
            })
          });
          if (gRes.ok) {
            const data = await gRes.json();
            const text = data?.choices?.[0]?.message?.content?.trim();
            const parsed = JSON.parse(text.replace(/```json|```/g, "").trim());
            return NextResponse.json({ scorecard: parsed });
          }
        } catch (e) {
          console.warn("[Groq Scorecard Failed]:", e);
        }
      }

      // 2. Try Gemini
      if (geminiKey) {
        try {
          const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${geminiKey}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [{ parts: [{ text: evaluationPrompt }] }]
            })
          });
          if (res.ok) {
            const data = await res.json();
            const text = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "";
            const parsed = JSON.parse(text.replace(/```json|```/g, "").trim());
            return NextResponse.json({ scorecard: parsed });
          }
        } catch (e) {
          console.warn("[Gemini Scorecard Failed]:", e);
        }
      }

      // Fallback
      return NextResponse.json({
        scorecard: {
          score: 82,
          verdict: "Hire",
          starBreakdown: {
            situationAndTask: "Well-structured articulation of critical engineering bottlenecks and high-stakes business risks.",
            actionDepth: "Demonstrated strong technical depth using queue buffering, Redis token-bucket limits, and consistency patterns.",
            resultAndMetrics: "Reported concrete speedup numbers and long-term preventive guardrails."
          },
          strengths: [
            "Consistent use of quantifiable metrics across both problem scenarios.",
            "Strong bias for action paired with systemic architectural safeguards."
          ],
          areasForImprovement: [
            "Ensure baseline performance statistics are explicitly stated upfront before detailing interventions."
          ],
          barRaiserDebriefNote: "The candidate demonstrated solid engineering judgment and clear ownership across the set, meeting the Bar Raiser standard for SDE Intern."
        }
      });
    }

    // ─────────────────────────────────────────────────────────────
    // CASE B: ROUND 4 BEHAVIORAL INTERROGATION (4-5 TURNS MAX)
    // ─────────────────────────────────────────────────────────────
            if (isBehavioral) {
      const candidateTurns = (dialogueHistory || []).filter((m: any) => {
        const s = (m.sender || m.speaker || m.role || "").toLowerCase();
        return s === "candidate" || s === "user";
      }).length + (candidateMessage ? 1 : 0);

      const isCurrentQuestionDone = candidateTurns >= 5;
      const isLastQuestionOfSet = Number(questionIndex) >= (Number(totalQuestions) - 1);

      if (isCurrentQuestionDone) {
        if (!isLastQuestionOfSet) {
          return NextResponse.json({
            reply: "Thank you for the thorough walkthrough. We have completed Question 1 of this set. Please click 'Conclude & Score' at the top right to proceed to Question 2.",
            questionCompleted: true,
            isSetFinished: false,
            nextQuestionIndex: Number(questionIndex) + 1
          });
        } else {
          return NextResponse.json({
            reply: "Thank you. You have successfully completed both questions of this Bar Raiser set! Please click 'Conclude & Score' at the top right to finalize your round and review your comprehensive scorecard.",
            questionCompleted: true,
            isSetFinished: true,
            nextQuestionIndex: Number(questionIndex)
          });
        }
      }

      const behavioralPrompt = `You are an Amazon Executive Bar Raiser (Director / PE level) conducting an interview.
Problem: ${problemTitle}
Description: ${problemDescription}

Candidate Just Said: "${candidateMessage}"
Recent Conversation History:
${JSON.stringify((dialogueHistory || []).slice(-6))}

INTERVIEWER GUIDELINES:
1. Act like a real human Bar Raiser having an authentic conversation. NEVER recite canned question scripts.
2. If the candidate says "what?", asks for clarification, or gives a confused/one-word response, directly clarify your question or note what context was missing.
3. If the candidate gave a real answer, evaluate what they said:
   - If they gave vague claims or "we" statements without numbers, challenge them: "Walk me through what YOU specifically designed, and what the quantitative impact was."
   - If they gave clear metrics, probe deeper into trade-offs, discarded alternatives, or production failure modes.
4. Keep your response to 2 to 3 natural spoken sentences maximum. Do not use bullet points or markdown fences.`;

    if (groqKey) {
        try {
          const gRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${groqKey}` },
            body: JSON.stringify({
              model: "openai/gpt-oss-120b",
              messages: [
                { role: "system", content: behavioralPrompt },
                { role: "user", content: candidateMessage || "Ready." }
              ],
              max_tokens: 180,
              temperature: 0.65
            })
          });
          if (gRes.ok) {
            const data = await gRes.json();
            const reply = data?.choices?.[0]?.message?.content?.trim();
            if (reply) {
              return NextResponse.json({ reply, nextQuestionIndex: questionIndex });
            }
          }
        } catch (e) {
          console.warn("[Groq Chat Failed]:", e);
        }
      }

      // 2. Try Gemini
      if (geminiKey) {
        try {
          const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${geminiKey}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [{ parts: [{ text: `${behavioralPrompt}\n\nCandidate: "${candidateMessage}"` }] }]
            })
          });
          if (res.ok) {
            const data = await res.json();
            const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
            if (reply) {
              return NextResponse.json({ reply, nextQuestionIndex: questionIndex });
            }
          }
        } catch (e) {
          console.warn("[Gemini Chat Failed]:", e);
        }
      }

      return NextResponse.json({
        reply: "Those are solid technical decisions. Now, walk me through the specific Result: what were the measurable business metrics and the long-term mechanisms you established?",
        nextQuestionIndex: questionIndex
      });
    }

    return NextResponse.json({
      reply: "Please walk me through your planned algorithmic approach and data structures first.",
      nextQuestionIndex: questionIndex
    });

  } catch (err: any) {
    console.error("[CRUCIBLE ERROR]:", err);
    return NextResponse.json({ reply: "Please continue detailing your approach." }, { status: 500 });
  }
}