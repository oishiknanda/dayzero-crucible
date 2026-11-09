import { NextRequest, NextResponse } from "next/server";
import { decideGate, buildReaskReply, buildClarificationReply, NUDGE_REPLIES } from "@/lib/crucible/answerGate";

const GATE_ONLY_KINDS = ["non_answer", "clarification", "reask", "nudge"];

// Drops on-screen-only messages (non-answers, re-asks, nudges). A no-op when nothing is tagged,
// so the history is identical to what it would be had the candidate never typed a non-answer.
function stripGateOnly(history: unknown): any[] {
  if (!Array.isArray(history)) return [];
  return history.filter((m: any) => !(m && typeof m.kind === "string" && GATE_ONLY_KINDS.includes(m.kind)));
}

// Server-side backstop for the answer gate. The page already blocks non-answers before calling us;
// this only catches a stale or modified client. Fails open: any problem returns null (normal flow).
function gateBackstop(round: 2 | 3, phase: string, message: string, history: any[], questionTitle: string): NextResponse | null {
  try {
    const gatePhase = round === 3 && phase === "INITIAL" ? "DRAFTING" : phase;
    if (gatePhase === "VERDICT") return null;
    const lastAi = [...history].reverse().find((m: any) => {
      const s = String(m?.sender || m?.speaker || m?.role || "").toLowerCase();
      return s !== "candidate" && s !== "user" && (m?.text || m?.content);
    });
    const question = lastAi ? String(lastAi.text || lastAi.content) : "Walk me through your approach for " + questionTitle + ".";
    const decision = decideGate(
      message,
      { round, phase: gatePhase as "INITIAL" | "FOLLOW_UPS" | "CODING" | "DRAFTING", questionText: question, problemTitle: questionTitle },
      { consecutiveNonAnswers: 0, clarificationsUsed: 0 }
    );
    if (decision.action === "proceed" || decision.action === "force_advance") return null;
    console.info("[answerGate:server]", { class: decision.classification, round, phase: gatePhase });
    if (decision.action === "nudge") {
      return NextResponse.json({ reply: gatePhase === "CODING" ? NUDGE_REPLIES.CODING : NUDGE_REPLIES.DRAFTING, accepted: false, gate: "reask" });
    }
    if (decision.action === "clarify") {
      return NextResponse.json({ reply: buildClarificationReply(question), accepted: false, gate: "clarification" });
    }
    return NextResponse.json({ reply: buildReaskReply(decision.strike, question), accepted: false, gate: "reask", reaskCount: decision.strike });
  } catch (error) {
    console.error("[answerGate:server] failed open:", error);
    return null;
  }
}

export async function POST(req: NextRequest) {
  try {
    const {
      code = "",
      isRound3 = false,
      isRound2 = false,
      isRound4 = false,
      roundSlug = "round-1",
      problemId = "amz-general",
      problemTitle = "Leadership Scenario",
      problemDescription = "",
      candidateMessage = "",
      dialogueHistory: rawDialogueHistory = [],
      gateForced = false,
      nonAnswerCount = 0,
      unansweredQuestions = [],
      vivaPhase = "INITIAL",
      questionIndex = 0,
      totalQuestions = 2,
      candidateTestScore = 0,
      evaluateScorecard = false
    } = await req.json();

    const dialogueHistory = stripGateOnly(rawDialogueHistory);

    const groqKey = process.env.GROQ_API_KEY;
    const geminiKey = process.env.GEMINI_API_KEY;

    const isSystemDesignRound = Boolean(
      isRound3 ||
      roundSlug === "round-3" ||
      roundSlug === "lld" ||
      roundSlug === "hld" ||
      (problemId && String(problemId).includes("-r3-"))
    );

    // ─────────────────────────────────────────────────────────────
    // 1. ROUND 3: ARCHITECTURE DEFENSE (STRICT 3-QUESTION LIMIT)
    // ─────────────────────────────────────────────────────────────
    if (isSystemDesignRound && !evaluateScorecard) {
      if (!gateForced && process.env.ANSWER_GATE_ENABLED !== "false") {
        const blocked = gateBackstop(3, String(vivaPhase), String(candidateMessage), dialogueHistory, String(problemTitle));
        if (blocked) return blocked;
      }
      // Calculate turns based on history plus current message if present
      const previousTurns = (dialogueHistory || []).filter((m: any) => {
        const s = String(m?.sender || m?.speaker || m?.role || "").toLowerCase();
        return s === "candidate" || s === "user";
      }).length;

      const currentTurnCount = previousTurns + (candidateMessage ? 1 : 0);

      // Conclude immediately if candidate has answered 3 follow-ups
      if (currentTurnCount >= 3) {
        return NextResponse.json({
          reply: "Thank you for the comprehensive architectural defense. You have concluded your Round 3 System Design assessment! Please click 'Conclude & Score' at the top right to finalize your round and review your technical scorecard.",
          isCompleted: true,
          turn: currentTurnCount
        });
      }

      const normalizedMessages = (dialogueHistory || [])
        .filter((m: any) => (m.text || m.content) && String(m.text || m.content).trim().length > 0)
        .slice(-4)
        .map((m: any) => ({
          role: (m.sender === "candidate" || m.role === "user") ? ("user" as const) : ("assistant" as const),
          content: String(m.text || m.content).trim()
        }));

      const archSystemPrompt = `You are an Amazon Bar Raiser conducting Round 3 (System Design / LLD).
TOPIC: ${problemTitle}
SYSTEM CONSTRAINTS: ${problemDescription}

CODE IN EDITOR:
${code || "No code written."}

CANDIDATE ANSWER: "${candidateMessage}"
CURRENT INTERROGATION TURN: ${currentTurnCount} of 3.

RULES:
1. BREVITY REQUIREMENT: Keep your question crisp, direct, and under 2 sentences (max 40 words). No long introductory preambles or lectures.
2. Directly challenge their last answer:
   - Question 1: Challenge concurrency, lock granularity, or race conditions.
   - Question 2: Challenge consumer backpressure or buffer exhaustion failure modes.
   - Question 3: Challenge worker pool starvation, crashes, or throughput vs latency trade-offs.
3. NEVER repeat earlier queries. Ask ONE single focused technical question.`;

      if (groqKey) {
        try {
          const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${groqKey}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              model: "openai/gpt-oss-120b",
              messages: [
                { role: "system", content: archSystemPrompt },
                ...normalizedMessages,
                { role: "user", content: candidateMessage || "Ready." }
              ],
              temperature: 0.3,
              max_tokens: 120
            })
          });

          if (groqRes.ok) {
            const groqData = await groqRes.json();
            const reply = groqData.choices?.[0]?.message?.content?.trim();
            if (reply) {
              return NextResponse.json({ reply, turn: currentTurnCount });
            }
          }
        } catch (err) {
          console.error("Groq R3 Chat Error:", err);
        }
      }

      // Turn-based short fallbacks
      const shortFallbacks = [
        "How do you prevent race conditions when subscribers unsubscribe while a publish is actively iterating through that topic's queue list?",
        "If a subscriber's ring buffer fills up under peak traffic, how do you enforce backpressure without blocking publisher threads?",
        "If a consumer callback hangs indefinitely, what mechanism prevents worker thread pool starvation across the remaining topics?"
      ];

      return NextResponse.json({
        reply: shortFallbacks[currentTurnCount - 1] || "Thank you for defending your architecture. Please click 'Conclude & Score' at the top right to view your evaluation scorecard.",
        turn: currentTurnCount
      });
    }

    const isDsaVivaRound = Boolean(
      isRound2 ||
      roundSlug === "round-2" ||
      roundSlug === "technical_viva" ||
      roundSlug === "dsa_deep_dive" ||
      roundSlug === "viva"
    );
    const isBehavioral = Boolean(isRound4 || roundSlug === "round-4" || roundSlug === "bar-raiser");

    // ─────────────────────────────────────────────────────────────
    // 2. ROUND 4: BEHAVIORAL HARD STOP (4-TURN LIMIT)
    // ─────────────────────────────────────────────────────────────
    if (isBehavioral && !evaluateScorecard) {
      const historyList = Array.isArray(dialogueHistory) ? dialogueHistory : [];
      const candidateTurns = historyList.filter((m) => {
        const s = String(m?.sender || m?.speaker || m?.role || "").toLowerCase();
        return s === "candidate" || s === "user";
      }).length + (candidateMessage ? 1 : 0);

      const qIdx = Number(questionIndex || 0);
      const totalQ = Number(totalQuestions || 2);
      const isLastQuestionOfSet = qIdx >= (totalQ - 1);

      if (candidateTurns >= 4) {
        if (!isLastQuestionOfSet) {
          return NextResponse.json({
            reply: "Thank you for the thorough walkthrough. We have completed Question 1 of this set! Please click 'Conclude & Score' at the top right to proceed to Question 2.",
            questionCompleted: true,
            isSetFinished: false,
            nextQuestionIndex: qIdx + 1
          });
        } else {
          return NextResponse.json({
            reply: "Thank you. You have successfully completed both scenarios of this Bar Raiser session! Please click 'Conclude & Score' at the top right to finalize your round and review your comprehensive evaluation.",
            questionCompleted: true,
            isSetFinished: true,
            nextQuestionIndex: qIdx
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
   - "I" vs "We": If the candidate uses passive phrasing ("we built", "the team decided", "we shipped"), challenge aggressively: "What was your specific individual ownership in this decision versus the team's? I need to hear what YOU personally did."
   - Quantifiable Metrics: If numbers are missing, demand metrics: "What was the baseline before your change, and what was the measured latency, throughput, or cost impact?"
   - If they gave clear metrics, probe deeper into trade-offs, discarded alternatives, or production failure modes.
4. Keep your response to 1 to 3 authoritative, spoken sentences maximum. Do not use bullet points or markdown fences.`;

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

        // ─────────────────────────────────────────────────────────────
    // 2.5 ROUND 2: TECHNICAL DSA VIVA (INITIAL -> FOLLOW-UPS)
    // ─────────────────────────────────────────────────────────────
    if (isDsaVivaRound && !evaluateScorecard) {
      if (!gateForced && process.env.ANSWER_GATE_ENABLED !== "false") {
        const blocked = gateBackstop(2, String(vivaPhase), String(candidateMessage), dialogueHistory, String(problemTitle));
        if (blocked) return blocked;
      }
      const candidateTurnCount = (dialogueHistory || []).filter(
        (m: any) => m.speaker === "CANDIDATE" || m.sender === "candidate" || m.role === "user"
      ).length + (candidateMessage ? 1 : 0);

      // Conclude defense when 3 follow-ups have been answered
      if (vivaPhase === "FOLLOW_UPS" && candidateTurnCount >= 3) {
        const isTask1 = questionIndex === 0;
        const conclusionReply = isTask1
          ? "Thank you for defending your implementation. We have successfully completed Question 1 of this Technical Viva! Please type 'next' or 'proceed' to load Question 2."
          : "Excellent defense. You have completed both technical problems and algorithmic grilling for this round! Please click 'Conclude & Score' at the top right to review your comprehensive evaluation.";

        return NextResponse.json({
          reply: conclusionReply,
          isCompleted: true,
          turn: candidateTurnCount
        });
      }

      const normalizedMessages = (dialogueHistory || [])
        .filter((m: any) => (m.text || m.content) && String(m.text || m.content).trim().length > 0)
        .slice(-4)
        .map((m: any) => ({
          role: (m.sender === "candidate" || m.speaker === "CANDIDATE" || m.role === "user") ? ("user" as const) : ("assistant" as const),
          content: String(m.text || m.content).trim()
        }));

      const dsaVivaPrompt = `You are an Amazon SDE-2 conducting Round 2 (Technical DSA Viva).
TOPIC: ${problemTitle}
PROBLEM DESCRIPTION: ${problemDescription}

CURRENT CODE IMPLEMENTED:
${code || "No code written yet."}

CURRENT PHASE: ${vivaPhase}
CANDIDATE MESSAGE: "${candidateMessage}"
CURRENT CANDIDATE TURN: ${candidateTurnCount} of 3.

BEHAVIOR DIRECTIVES:
1. PHASE = "INITIAL":
   - The candidate must articulate their algorithm, primary data structures, and expected Big-O complexity.
   - If they ask clarifying constraint questions (e.g., negative values, duplicates, size limits), answer directly and briefly as an interviewer without giving away the solution.
   - If their proposed algorithmic direction is viable, explicitly approve them with: "That algorithmic approach is sound. Please walk me through your planned algorithm, data structure, and expected Big-O complexity."
2. PHASE = "FOLLOW_UPS":
   - Turn 1: Challenge their exact Worst-Case Time and Space Complexity ($O(N)$ bounds and peak memory).
   - Turn 2: Probe critical boundary edge cases (collisions, duplicates, integer overflow, empty/single element inputs).
   - Turn 3: Probe high-throughput scalability (e.g., 50 million streaming elements, memory constraints).
3. STYLE:
   - Speak conversationally in 1 to 2 concise sentences (max 40 words). No bullet points, no markdown headers, no code dumps.`;

      if (groqKey) {
        try {
          const gRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${groqKey}` },
            body: JSON.stringify({
              model: "openai/gpt-oss-120b",
              messages: [
                { role: "system", content: dsaVivaPrompt },
                ...normalizedMessages,
                { role: "user", content: candidateMessage || "Ready." }
              ],
              max_tokens: 120,
              temperature: 0.35
            })
          });
          if (gRes.ok) {
            const data = await gRes.json();
            const reply = data?.choices?.[0]?.message?.content?.trim();
            if (reply) {
              return NextResponse.json({ reply, turn: candidateTurnCount });
            }
          }
        } catch (e) {
          console.warn("[Groq DSA Viva Failed]:", e);
        }
      }

      if (geminiKey) {
        try {
          const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${geminiKey}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [{ parts: [{ text: `${dsaVivaPrompt}\n\nCandidate: "${candidateMessage}"` }] }]
            })
          });
          if (res.ok) {
            const data = await res.json();
            const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
            if (reply) {
              return NextResponse.json({ reply, turn: candidateTurnCount });
            }
          }
        } catch (e) {
          console.warn("[Gemini DSA Viva Failed]:", e);
        }
      }

      const vivaFallbacks = [
        "What is the exact worst-case time and space complexity of your algorithm, and where does peak memory allocate?",
        "What critical edge cases or boundary conditions could break your implementation?",
        "How would your solution adapt if data arrived as an unindexed stream of 50 million records under limited memory?"
      ];

      return NextResponse.json({
        reply: vivaFallbacks[Math.min(candidateTurnCount - 1, 2)] || "Please walk me through your planned algorithmic approach.",
        turn: candidateTurnCount
      });
    }

    // ─────────────────────────────────────────────────────────────
    // 3. SCORECARD GENERATION
    // ─────────────────────────────────────────────────────────────
    if (evaluateScorecard) {
      const isRound2Eval = Boolean(
        isRound2 ||
        roundSlug === "round-2" ||
        roundSlug === "technical_viva" ||
        roundSlug === "dsa_deep_dive" ||
        roundSlug === "viva"
      );
      const isRound3Eval = Boolean(
        isRound3 ||
        roundSlug === "round-3" ||
        roundSlug === "lld" ||
        roundSlug === "hld" ||
        (problemId && String(problemId).includes("-r3-"))
      );

      const baseEvaluationPrompt = isRound2Eval
        ? `You are an Amazon Principal Bar Raiser evaluating a Round 2 (Technical DSA Viva) candidate.
The candidate was assigned 2 algorithmic problems with live test validation and a technical viva defense.

TRANSCRIPT & CODE SUBMISSION:
${JSON.stringify(dialogueHistory, null, 2)}

TEST SCORE (0-50): ${candidateTestScore}

EVALUATION RULES:
1. TEST EXECUTION (50% WEIGHT):
   - The testScore provided is ${candidateTestScore}.
2. VIVA DEFENSE (50% WEIGHT):
   - Evaluate the quality of technical defense in dialogueHistory.
   - If candidate skipped or failed tests (testScore = 0), vivaScore MUST be 0.
   - Otherwise, grade viva defense between 0-50 based on rigor, scalability, and edge case handling.
3. FINAL SCORE (0-100) = testScore + vivaScore.
4. VERDICT:
   - 0-45: "No Hire"
   - 46-65: "Leaning No Hire"
   - 66-84: "Hire"
   - 85-100: "Strong Hire"

Respond strictly in valid JSON format with NO markdown fences, no backticks, and no extra prose:
{
  "score": <totalScore between 0 and 100>,
  "testScore": ${candidateTestScore},
  "vivaScore": <vivaScore between 0 and 50>,
  "verdict": "<Strong Hire | Hire | Leaning No Hire | No Hire>",
  "starBreakdown": {
    "situationAndTask": "<1-2 sentences evaluating algorithmic understanding and problem decomposition>",
    "actionDepth": "<1-2 sentences assessing implementation correctness, test validation, and code structure>",
    "resultAndMetrics": "<1-2 sentences evaluating their viva defense on Big-O complexity, edge cases, and scale>"
  },
  "strengths": ["<strength1>", "<strength2>"],
  "areasForImprovement": ["<improvement1>", "<improvement2>"],
  "barRaiserDebriefNote": "<2-3 executive sentences summarizing whether the candidate clears the Amazon SDE bar>"
}`
        : isRound3Eval
        ? `You are an Amazon Principal Bar Raiser evaluating a Round 3 (System Design / LLD) candidate.
Evaluate the candidate's code architecture and oral defense against Amazon architectural standards.

CODE ARCHITECTURE:
${code || "No code submitted."}

ORAL DEFENSE TRANSCRIPT:
${JSON.stringify(dialogueHistory, null, 2)}

EVALUATION RULES:
1. CODE ARCHITECTURE (0-50 pts):
   - Clean interfaces, modularity, and separation of concerns (0-25 pts).
   - Concurrency primitives (mutex, CAS/atomics, etc.) (0-25 pts).
   - If code is empty/boilerplate/under 40 chars, codeScore = 0.
2. ORAL DEFENSE (0-50 pts):
   - Backpressure, failure modes, trade-off justification (0-50 pts).
   - If defense skipped/evasive, defenseScore = 0.
3. TOTAL SCORE (0-100) = codeScore + defenseScore.
4. VERDICT:
   - 0-45: "No Hire"
   - 46-65: "Leaning No Hire"
   - 66-84: "Hire"
   - 85-100: "Strong Hire"

Respond strictly in valid JSON format with NO markdown fences, no backticks, and no extra prose:
{
  "score": <totalScore>,
  "codeModelingScore": <0-25>,
  "concurrencyScore": <0-25>,
  "backpressureScore": <0-25>,
  "defenseScore": <0-25>,
  "verdict": "<Strong Hire | Hire | Leaning No Hire | No Hire>",
  "starBreakdown": {
    "situationAndTask": "<Class/Interface modularity assessment>",
    "actionDepth": "<Concurrency/Thread-safety assessment>",
    "resultAndMetrics": "<Resilience/Scale assessment>"
  },
  "strengths": ["<strength1>", "<strength2>"],
  "areasForImprovement": ["<improvement1>", "<improvement2>"],
  "barRaiserDebriefNote": "<2-3 executive sentences on whether they clear the bar>"
}`
        : `You are a Principal Amazon Bar Raiser completing the comprehensive hiring scorecard for an Executive Round.
Evaluate the candidate's complete dialogue transcript across all answered questions in this set against Amazon Leadership Principles (STAR method, "I" vs "We" ownership, concrete quantifiable metrics, and depth of technical/business trade-offs).

CRITICAL RULE: DO NOT GIVE A FAKE OR STATIC 100/100. Grade realistically between 35 and 92 based on their actual answers.
- Penalize vague statements, missing metrics, or taking credit without explaining specific individual actions.
- Reward clear metrics, decisive ownership, and systematic mitigation.

- SET CONTEXT: ${problemTitle}
${problemDescription}
FULL CANDIDATE TRANSCRIPT:
${JSON.stringify(dialogueHistory, null, 2)}

Respond strictly in valid JSON format with NO markdown fences, no backticks, and no extra prose:
{
  "score": <number between 35 and 92>,
  "verdict": "<Strong Hire | Hire | Leaning No Hire | No Hire>",
  "starBreakdown": {
    "situationAndTask": "<1-2 sentences critiquING context clarity and ownership framing across the set>",
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

      // Only when the candidate gave non-answers: one factual note. Otherwise the prompt is unchanged.
      const gateNote = Number(nonAnswerCount) > 0
        ? `\n\nNOTE: Candidate gave ${Number(nonAnswerCount)} non-answers that were re-asked.` +
          (Array.isArray(unansweredQuestions) && unansweredQuestions.length > 0
            ? `\nUNANSWERED QUESTIONS: ${JSON.stringify(unansweredQuestions)}`
            : "")
        : "";
      const evaluationPrompt = baseEvaluationPrompt + gateNote;

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
            if (isRound2Eval && parsed) {
              parsed.testScore = Math.min(50, Math.max(0, Math.round(candidateTestScore || 0)));
              if (parsed.testScore === 0) {
                parsed.vivaScore = 0;
                parsed.score = 0;
                parsed.verdict = "No Hire";
              } else {
                parsed.vivaScore = Math.min(50, Math.max(0, Number(parsed.vivaScore || 25)));
                parsed.score = Math.min(100, Math.max(0, parsed.testScore + parsed.vivaScore));
                if (parsed.score >= 85) parsed.verdict = "Strong Hire";
                else if (parsed.score >= 66) parsed.verdict = "Hire";
                else if (parsed.score >= 46) parsed.verdict = "Leaning No Hire";
                else parsed.verdict = "No Hire";
              }
            } else if (isRound3Eval && parsed) {
              const codeScore = Math.min(50, Math.max(0, Number(parsed.codeModelingScore || 0) + Number(parsed.concurrencyScore || 0)));
              const oralScore = Math.min(50, Math.max(0, Number(parsed.backpressureScore || 0) + Number(parsed.defenseScore || 0)));
              const codeEmpty = (!code || code.trim().length < 40);
              if (codeEmpty) {
                parsed.score = 0;
                parsed.verdict = "No Hire";
              } else {
                parsed.score = Math.min(100, Math.max(0, codeScore + oralScore));
                if (parsed.score >= 85) parsed.verdict = "Strong Hire";
                else if (parsed.score >= 66) parsed.verdict = "Hire";
                else if (parsed.score >= 46) parsed.verdict = "Leaning No Hire";
                else parsed.verdict = "No Hire";
              }
            } else if (parsed) {
              // ROUND 4: Enforce realistic 35-92 grading band and strict verdicts
              parsed.score = Math.min(92, Math.max(35, Number(parsed.score) || 70));
              if (parsed.score >= 85) parsed.verdict = "Strong Hire";
              else if (parsed.score >= 66) parsed.verdict = "Hire";
              else if (parsed.score >= 46) parsed.verdict = "Leaning No Hire";
              else parsed.verdict = "No Hire";
            }
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
            if (isRound2Eval && parsed) {
              parsed.testScore = Math.min(50, Math.max(0, Math.round(candidateTestScore || 0)));
              if (parsed.testScore === 0) {
                parsed.vivaScore = 0;
                parsed.score = 0;
                parsed.verdict = "No Hire";
              } else {
                parsed.vivaScore = Math.min(50, Math.max(0, Number(parsed.vivaScore || 25)));
                parsed.score = Math.min(100, Math.max(0, parsed.testScore + parsed.vivaScore));
                if (parsed.score >= 85) parsed.verdict = "Strong Hire";
                else if (parsed.score >= 66) parsed.verdict = "Hire";
                else if (parsed.score >= 46) parsed.verdict = "Leaning No Hire";
                else parsed.verdict = "No Hire";
              }
            } else if (isRound3Eval && parsed) {
              const codeScore = Math.min(50, Math.max(0, Number(parsed.codeModelingScore || 0) + Number(parsed.concurrencyScore || 0)));
              const oralScore = Math.min(50, Math.max(0, Number(parsed.backpressureScore || 0) + Number(parsed.defenseScore || 0)));
              const codeEmpty = (!code || code.trim().length < 40);
              if (codeEmpty) {
                parsed.score = 0;
                parsed.verdict = "No Hire";
              } else {
                parsed.score = Math.min(100, Math.max(0, codeScore + oralScore));
                if (parsed.score >= 85) parsed.verdict = "Strong Hire";
                else if (parsed.score >= 66) parsed.verdict = "Hire";
                else if (parsed.score >= 46) parsed.verdict = "Leaning No Hire";
                else parsed.verdict = "No Hire";
              }
            } else if (parsed) {
              // ROUND 4: Enforce realistic 35-92 grading band and strict verdicts
              parsed.score = Math.min(92, Math.max(35, Number(parsed.score) || 70));
              if (parsed.score >= 85) parsed.verdict = "Strong Hire";
              else if (parsed.score >= 66) parsed.verdict = "Hire";
              else if (parsed.score >= 46) parsed.verdict = "Leaning No Hire";
              else parsed.verdict = "No Hire";
            }
            return NextResponse.json({ scorecard: parsed });
          }
        } catch (e) {
          console.warn("[Gemini Scorecard Failed]:", e);
        }
      }

      // Fallback Scorecard
      if (isRound3Eval) {
        const cleanCode = (code || "").trim();
        const codeValid = cleanCode.length >= 40;
        const turnsAnswered = (dialogueHistory || []).filter((m: any) => {
          const s = String(m?.sender || m?.speaker || m?.role || "").toLowerCase();
          return s === "candidate" || s === "user";
        }).length;
        const defenseValid = turnsAnswered >= 1;

        if (!codeValid || !defenseValid) {
          return NextResponse.json({
            scorecard: {
              score: 0,
              codeModelingScore: 0,
              concurrencyScore: 0,
              backpressureScore: 0,
              defenseScore: 0,
              verdict: "No Hire",
              starBreakdown: {
                situationAndTask: "No substantive class interfaces or domain models provided in editor.",
                actionDepth: "Concurrency primitives, thread-safety, and buffer handling were absent.",
                resultAndMetrics: "Architectural defense was incomplete or skipped."
              },
              strengths: [],
              areasForImprovement: [
                "Must write complete class interfaces and data models before submission.",
                "Must participate in the 3-turn technical interrogation defense."
              ],
              barRaiserDebriefNote: "Candidate failed to submit substantive architecture code or complete technical defense. Automatic No Hire."
            }
          });
        }

        return NextResponse.json({
          scorecard: {
            score: 80,
            codeModelingScore: 20,
            concurrencyScore: 20,
            backpressureScore: 20,
            defenseScore: 20,
            verdict: "Hire",
            starBreakdown: {
              situationAndTask: "Solid class interfaces with clear separation of concerns and data models.",
              actionDepth: "Appropriate use of thread synchronization primitives and consumer backpressure policies.",
              resultAndMetrics: "Defended architecture against failure modes, network partitions, and thread pool starvation."
            },
            strengths: [
              "Clean modular interface design.",
              "Thoughtful handling of concurrent race conditions and subscriber queues."
            ],
            areasForImprovement: [
              "Provide concrete SLA memory bounds for extreme peak loads."
            ],
            barRaiserDebriefNote: "The candidate demonstrated solid LLD architectural design and clear technical defense, clearing the Amazon Round 3 bar."
          }
        });
      }

      if (isRound2Eval) {
        const testScore = Math.min(50, Math.max(0, Math.round(candidateTestScore || 0)));
        // If testScore is 0, strict zero guardrails apply
        const vivaScore = testScore === 0 ? 0 : 35;
        const totalScore = testScore + vivaScore;
        let verdict = "No Hire";
        if (totalScore >= 85) verdict = "Strong Hire";
        else if (totalScore >= 66) verdict = "Hire";
        else if (totalScore >= 46) verdict = "Leaning No Hire";

        return NextResponse.json({
          scorecard: {
            score: totalScore,
            testScore,
            vivaScore,
            verdict,
            starBreakdown: {
              situationAndTask: testScore > 0 ? "Clear breakdown of problem requirements and algorithmic constraints." : "Candidate failed to decompose problem constraints effectively.",
              actionDepth: testScore > 0 ? `Passed automated test suites earning ${testScore}/50 test execution points.` : "Code failed automated stress test suites or was omitted.",
              resultAndMetrics: vivaScore > 0 ? "Articulated Big-O asymptotic complexity bounds and edge case handling." : "No valid viva defense conducted on passing implementation."
            },
            strengths: testScore > 0 ? [
              "Validated solution against visible and hidden test vectors.",
              "Structured approach to algorithm selection and complexity."
            ] : [
              "Attempted problem initialization and initial discussion."
            ],
            areasForImprovement: [
              "Ensure all hidden edge cases (integer limits, null structures) are guarded against.",
              "Provide deeper analysis on peak memory allocations under streaming workloads."
            ],
            barRaiserDebriefNote: testScore > 0
              ? "Candidate demonstrated competent problem-solving and technical defense, clearing the technical viva bar."
              : "Candidate failed to produce a working implementation passing stress tests, resulting in a No Hire recommendation."
          }
        });
      }

      // ROUND 4: Derive a realistic fallback score from transcript evidence
      const transcriptText = (dialogueHistory || [])
        .map((m: any) => String(m?.text || m?.content || ""))
        .join(" ");
      const lowerText = transcriptText.toLowerCase();

      const hasMetrics = /\d+\s*(%|ms|seconds?|minutes?|x|\/sec|throughput|rps|latency|mb|gb|cost|reduction|improvement)/i.test(transcriptText);
      const hasIndividualOwnership = /\b(i\s+(designed|built|shipped|owned|led|implemented|wrote|created|drove|architected))\b/i.test(transcriptText);
      const hasWeVagueness = /\b(we\s+(built|decided|shipped|did|implemented))\b/i.test(lowerText);
      const hasStarStructure = /(situation|task|action|result)/i.test(transcriptText);
      const isSparse = transcriptText.trim().length < 120;

      let fallbackScore = 70;
      if (isSparse) {
        fallbackScore = 42;
      } else {
        if (hasMetrics) fallbackScore += 12;
        if (hasIndividualOwnership) fallbackScore += 8;
        if (hasWeVagueness) fallbackScore -= 12;
        if (hasStarStructure) fallbackScore += 5;
      }
      fallbackScore = Math.min(92, Math.max(35, fallbackScore));

      let fallbackVerdict = "Leaning No Hire";
      if (fallbackScore >= 85) fallbackVerdict = "Strong Hire";
      else if (fallbackScore >= 66) fallbackVerdict = "Hire";
      else if (fallbackScore >= 46) fallbackVerdict = "Leaning No Hire";
      else fallbackVerdict = "No Hire";

      return NextResponse.json({
        scorecard: {
          score: fallbackScore,
          verdict: fallbackVerdict,
          starBreakdown: {
            situationAndTask: hasStarStructure
              ? "Candidate framed context with explicit Situation/Task framing, though baseline problem scope could be more precisely bounded."
              : "Context and problem ownership were not clearly delineated in a STAR-compliant structure.",
            actionDepth: hasIndividualOwnership
              ? "Individual ownership was asserted with first-person technical decisions and concrete design actions."
              : "Technical steps were described in passive or collective terms without clear personal ownership.",
            resultAndMetrics: hasMetrics
              ? "Outcomes were anchored to quantifiable metrics, indicating measurement-driven resolution."
              : "Results were stated qualitatively without baseline comparisons or measured impact."
          },
          strengths: hasMetrics
            ? [
              "Anchored outcomes to measurable latency, throughput, or cost deltas.",
              "Demonstrated individual ownership of technical decisions."
            ]
            : [
              "Participated in the behavioral scenarios and attempted STAR alignment."
            ],
          areasForImprovement: [
            hasWeVagueness
              ? "Replace 'we built / we decided' phrasing with explicit first-person ownership of each decision."
              : "State explicit baseline metrics before describing the impact of each change.",
            "Quantify trade-offs and long-term guardrails rather than describing outcomes qualitatively."
          ],
          barRaiserDebriefNote: fallbackScore >= 66
            ? "Candidate demonstrated sufficient individual ownership and structured reasoning to clear the Amazon Bar Raiser, with measurable outcomes strengthening the recommendation."
            : "Candidate fell short of the Bar Raiser standard: responses lacked concrete metrics and first-person ownership, weakening the case for hire."
        }
      });
    }

    // Default Fallback
    return NextResponse.json({
      reply: "Please walk me through your planned algorithmic approach and data structures first.",
      nextQuestionIndex: questionIndex
    });

  } catch (err: any) {
    console.error("[CRUCIBLE ERROR]:", err);
    return NextResponse.json({ reply: "Please continue detailing your approach." }, { status: 500 });
  }
}