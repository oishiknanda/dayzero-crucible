"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useSearchParams, useRouter } from "next/navigation";
import { getProblemById, getProblemForRound, ProblemDefinition } from "@/data/problemsRegistry";
import { PROBLEMS_DATABASE } from "@/data/problemsRegistry";
import { getCompanyTrackData } from "@/data/companyTracks";
import { AmazonRole, AMAZON_TRACKS, getAmazonQuestionSet } from "@/data/amazonTracks";
import { executeCandidateCode, EvaluationReport } from "@/utils/codeRunner";
import {
  decideGate,
  buildReaskReply,
  buildClarificationReply,
  NUDGE_REPLIES,
  type GatePhase
} from "@/lib/crucible/answerGate";
import {
  Play,
  Send,
  Terminal,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Clock,
  Code2,
  ChevronDown,
  ChevronUp,
  Lock,
  ArrowRight,
  Eye,
  Trophy,
  Bot,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  SendHorizonal,
  Loader2,
  Award
} from "lucide-react";

const Editor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

type SupportedLanguage = "cpp" | "python" | "java" | "javascript";
type ConsoleTab = "interviewer" | "cases" | "hidden" | "results";

// Answer gate (Rounds 2 and 3 only): messages that exist only on screen and never reach the model.
type DialogueKind = "non_answer" | "clarification" | "reask" | "nudge";
const GATE_ONLY_KINDS: ReadonlyArray<string> = ["non_answer", "clarification", "reask", "nudge"];

// History as it would be had the candidate never typed a non-answer. A no-op when nothing is tagged.
function modelHistory<T extends { kind?: string }>(list: T[]): T[] {
  return (list || []).filter(m => !(m && m.kind && GATE_ONLY_KINDS.includes(m.kind)));
}

function FormatText({ text }: { text: string }) {
  if (!text) return null;
  const tokens = [
    "beginWord", "endWord", "wordList", "numCourses", "prerequisites",
    "grid", "instructions", "true", "false", "k", "s_i", "s_k", "BUY", "SELL", "CANCEL"
  ];

  const regex = new RegExp("(\\b(?:" + tokens.join("|") + ")\\b|\\[.*?\\]|\\(.*?\\))", "g");
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) => {
        if (!part) return null;
        const isTarget = part.startsWith("[") || part.startsWith("(") || tokens.includes(part);
        if (isTarget) {
          return (
            <code
              key={i}
              className="bg-[#2D2D2D] text-[#E6E6E6] font-mono text-[14px] px-1.5 py-0.5 rounded border border-white/5 mx-0.5"
            >
              {part}
            </code>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

export default function CrucibleCockpitPage({
  params,
}: {
  params: { sessionId: string };
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const companySlug = searchParams.get("company") || "google";
  const roundSlug = searchParams.get("round") || "round-1";

  // Check current round stages
  const getIsRound1 = (): boolean => {
    if (typeof window !== "undefined") {
      const p = new URLSearchParams(window.location.search).get("round");
      if (p) return p.toLowerCase() === "round-1" || p.toLowerCase() === "oa";
    }
    const r = searchParams.get("round");
    return !r || r.toLowerCase() === "round-1" || r.toLowerCase() === "oa";
  };
  const isRound1 = getIsRound1();

  const getIsRound2 = (): boolean => {
    if (typeof window !== "undefined") {
      const p = new URLSearchParams(window.location.search).get("round");
      if (p) return p.toLowerCase() === "round-2" || p.toLowerCase() === "technical_viva" || p.toLowerCase() === "dsa_deep_dive" || p.toLowerCase() === "viva";
    }
    return roundSlug ? (roundSlug.toLowerCase() === "round-2" || roundSlug.toLowerCase() === "technical_viva" || roundSlug.toLowerCase() === "dsa_deep_dive" || roundSlug.toLowerCase() === "viva") : false;
  };
  const isRound2 = getIsRound2();

  const getIsRound3 = (): boolean => {
    if (typeof window !== "undefined") {
      const p = new URLSearchParams(window.location.search).get("round");
      if (p) return p.toLowerCase() === "round-3" || p.toLowerCase() === "lld" || p.toLowerCase() === "architecture";
    }
    const r = searchParams.get("round");
    return r ? (r.toLowerCase() === "round-3" || r.toLowerCase() === "lld" || r.toLowerCase() === "architecture") : false;
  };
  const isRound3 = getIsRound3();

  const getIsRound4 = (): boolean => {
    if (typeof window !== "undefined") {
      const p = new URLSearchParams(window.location.search).get("round");
      if (p) return p.toLowerCase() === "round-4" || p.toLowerCase() === "bar-raiser";
    }
    const r = searchParams.get("round");
    return r ? (r.toLowerCase() === "round-4" || r.toLowerCase() === "bar-raiser") : false;
  };
  const isRound4 = getIsRound4();

  const isStrict = searchParams.get("strict") === "true";
  const problemParam = searchParams.get("problem");

  const getResolvedProblemId = (c: string, r: string, role: string, setNum: number, override?: string | null) => {
    if (override && PROBLEMS_DATABASE && PROBLEMS_DATABASE[override]) return override;

    if (c && c.toLowerCase() === "amazon" && typeof AMAZON_TRACKS !== "undefined") {
      const track = (AMAZON_TRACKS as any)[role];
      if (track && track.rounds) {
        const roundObj = track.rounds.find((rnd: any) => rnd.roundId === r) || track.rounds.find((rnd: any) => rnd.roundId === "round-1");
        if (roundObj && roundObj.sets) {
          const targetSet = roundObj.sets.find((s: any) => s.setId === setNum) || roundObj.sets[0];
          if (targetSet && targetSet.problemIds && targetSet.problemIds.length > 0) {
            const trackProblemId = targetSet.problemIds[0];
            if (PROBLEMS_DATABASE && PROBLEMS_DATABASE[trackProblemId]) {
              return trackProblemId;
            }
          }
        }
      }

      const prefixMap: Record<string, string> = {
        sde_intern: "intern",
        sde_1: "sde1",
        sde_2: "sde2",
        sde_3: "sde3",
        principal: "principal"
      };
      const prefix = prefixMap[role] || "sde1";
      const key = "amz-" + prefix + "-s" + (setNum || 1) + "-q1";
      if (PROBLEMS_DATABASE && PROBLEMS_DATABASE[key]) return key;
    }

    const def = getProblemForRound(c, r);
    return def ? def.id : (PROBLEMS_DATABASE ? Object.keys(PROBLEMS_DATABASE)[0] : "amz-sde1-s1-q1");
  };

  const getInitialParam = (key: string, fallback: string): string => {
    if (typeof window !== "undefined") {
      const p = new URLSearchParams(window.location.search).get(key);
      if (p) return p;
    }
    return searchParams.get(key) || fallback;
  };

  const roleParam = getInitialParam("role", "sde_1") as AmazonRole;
  const setParam = parseInt(getInitialParam("set", "1"), 10);

  const [selectedRole, setSelectedRole] = useState<AmazonRole>(roleParam);
  const [selectedSetId, setSelectedSetId] = useState<number>(setParam);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [taskScores, setTaskScores] = useState<[number, number]>([0, 0]);
  const [allSetHistory, setAllSetHistory] = useState<any[]>([]);
  const [questionCompleted, setQuestionCompleted] = useState<boolean>(false);
  const [isSetFinished, setIsSetFinished] = useState<boolean>(false);

  const companyData = getCompanyTrackData(companySlug);

  const [currentProblemId, setCurrentProblemId] = useState<string>(
    getResolvedProblemId(companySlug, roundSlug, selectedRole, selectedSetId, problemParam)
  );

  const rawProblem = getProblemById(currentProblemId);
  const problem: ProblemDefinition =
    rawProblem || PROBLEMS_DATABASE["amz-sde1-oa-s1-q1"] || Object.values(PROBLEMS_DATABASE)[0];

  const [language, setLanguage] = useState<SupportedLanguage>("cpp");
  const [code, setCode] = useState<string>(problem?.starterTemplates?.cpp || "");

  const [leftWidthPercent, setLeftWidthPercent] = useState<number>(44);
  const [isDraggingH, setIsDraggingH] = useState<boolean>(false);
  const [isConsoleCollapsed, setIsConsoleCollapsed] = useState<boolean>(false);
  const [consoleHeight, setConsoleHeight] = useState<number>(340);
  const [isDraggingV, setIsDraggingV] = useState<boolean>(false);

  const [activeConsoleTab, setActiveConsoleTab] = useState<ConsoleTab>(isRound1 ? "cases" : "interviewer");
  const [selectedCaseIdx, setSelectedCaseIdx] = useState<number>(0);

  const [vivaPhase, setVivaPhase] = useState<"INITIAL" | "CODING" | "FOLLOW_UPS" | "VERDICT">("INITIAL");
  const [followUpCount, setFollowUpCount] = useState<number>(0);

  // Answer gate bookkeeping (Rounds 2 and 3 only).
  const gateStrikesRef = useRef<number>(0);
  const gateClarRef = useRef<number>(0);
  const gateReaskTotalRef = useRef<number>(0);
  const nonAnswerCountRef = useRef<number>(0);
  const unansweredRef = useRef<string[]>([]);
  const resetGate = () => {
    gateStrikesRef.current = 0;
    gateClarRef.current = 0;
  };

  const [isVoiceActive, setIsVoiceActive] = useState<boolean>(true);
  const [aiVoiceMuted, setAiVoiceMuted] = useState<boolean>(false);
  const [isAiSpeaking, setIsAiSpeaking] = useState<boolean>(false);
  const [isAiThinking, setIsAiThinking] = useState<boolean>(false);
  const [isTranscribing, setIsTranscribing] = useState<boolean>(false);

  const [dialogue, setDialogue] = useState<Array<{ id: string; sender: "ai" | "candidate"; text: string; time: string; kind?: DialogueKind }>>(() => {
    if (isRound1) return [];
    const pTitle = problem?.title || "Technical Problem";
    const compName = companyData?.companyName || "Amazon";
    let greet = "Hello. Welcome to the " + compName + " technical round. You are solving " + pTitle + ". Before writing code, state your intended algorithm and data structure.";
    if (isRound2) {
      greet = "Hello! I am your Amazon Technical Interviewer for this DSA Viva session. We will be working on " + pTitle + ". Before writing any code, walk me through your high-level algorithm, data structures, and expected time and space complexity.";
    } else if (isRound3) {
      greet = "Welcome to your Amazon Round 3 Technical Loop: " + pTitle + ". First, outline your core class interfaces, thread-safe data structures, and backpressure strategy in the editor above.";
    } else if (isRound4) {
      greet = "Hello. I am your Amazon Bar Raiser for this session. As an independent evaluator, my goal is to assess your alignment with Amazon's Leadership Principles and your technical decision-making in real-world scenarios. We will begin with: " + pTitle + ". Please walk me through your Situation and Task using the STAR framework—focusing strictly on your individual actions ('I', not 'we') and measurable metrics.";
    }
    return [{
      id: "init-msg-" + Date.now(),
      sender: "ai",
      text: greet,
      time: "Just now"
    }];
  });

  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [recordingSeconds, setRecordingSeconds] = useState<number>(0);
  const [candidateInputText, setCandidateInputText] = useState<string>("");

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    let qRole = searchParams.get("role");
    let qSet = searchParams.get("set");

    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      if (!qRole) qRole = urlParams.get("role");
      if (!qSet) qSet = urlParams.get("set");
    }

    const activeRole = qRole || "sde_1";
    const activeSet = parseInt(qSet || "1", 10);

    setSelectedRole(activeRole as AmazonRole);
    setSelectedSetId(activeSet);

    const resolved = getResolvedProblemId(companySlug, roundSlug, activeRole, activeSet, problemParam);
    if (resolved) {
      setCurrentProblemId(resolved);
      const p = PROBLEMS_DATABASE[resolved];
      if (p && p.starterTemplates && p.starterTemplates[language]) {
        setCode(p.starterTemplates[language]);
      }
    }
  }, [searchParams, companySlug, roundSlug, problemParam, language]);

  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [testResults, setTestResults] = useState<EvaluationReport | null>(null);

  const [showNextModal, setShowNextModal] = useState<boolean>(false);
  const [showCompletionScorecard, setShowCompletionScorecard] = useState<boolean>(false);
  const [behavioralScorecard, setBehavioralScorecard] = useState<any>(null);
  const [isGeneratingScorecard, setIsGeneratingScorecard] = useState<boolean>(false);
  const [timeLeftSeconds, setTimeLeftSeconds] = useState<number>(90 * 60);
  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };


  const dialogueContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dialogueContainerRef.current) {
      dialogueContainerRef.current.scrollTop = dialogueContainerRef.current.scrollHeight;
    }
  }, [dialogue]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      setRecordingSeconds(0);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRecording]);

  const selectOptimalBarRaiserVoice = (synth: SpeechSynthesis): SpeechSynthesisVoice | null => {
    const voices = synth.getVoices();
    if (!voices || voices.length === 0) return null;

    const preferredNames = [
      "Microsoft Guy Online (Natural) - English (United States)",
      "Microsoft Christopher Online (Natural) - English (United States)",
      "Google US English",
      "Microsoft David - English (United States)",
      "Daniel",
      "Samantha",
      "Alex"
    ];

    for (const name of preferredNames) {
      const match = voices.find(v => v.name.includes(name));
      if (match) return match;
    }

    return voices.find(v => v.lang.startsWith("en-US")) || voices.find(v => v.lang.startsWith("en")) || voices[0];
  };

  const speakText = useCallback((text: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    if (aiVoiceMuted || !isVoiceActive) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.02;
    utterance.pitch = 0.96;
    const bestVoice = selectOptimalBarRaiserVoice(window.speechSynthesis);
    if (bestVoice) {
      utterance.voice = bestVoice;
    }
    window.speechSynthesis.speak(utterance);
  }, [aiVoiceMuted, isVoiceActive]);

  const postAiMessage = useCallback((text: string, kind?: DialogueKind) => {
    if (!text || text.trim().length === 0) return;

    setDialogue(prev => [
      ...prev,
      {
        id: Math.random().toString(36).substring(2, 9),
        sender: "ai",
        text,
        time: "Just now",
        ...(kind ? { kind } : {})
      }
    ]);

    speakText(text);
  }, [speakText]);

  const paragraphs = problem?.paragraphs || [];
  const bulletPoints = problem?.bulletPoints || [];
  const examples = (problem?.examples || []) as any[];
  const constraints = problem?.constraints || [];
  const visibleCases = (problem?.visibleTestCases || (problem as any)?.testCases || []) as any[];
  const hiddenCases = (problem?.hiddenTestCases || []) as any[];

  const askAiInterviewer = async (candidateMsg: string) => {
    const lower = candidateMsg.toLowerCase();
    // Whole words only, and only for short messages: "defend", "backend" or a long answer that
    // mentions "the second pointer" must never be mistaken for a request to skip or conclude.
    const SKIP_WORDS_RE = /\b(second|next|skip|conclude|scorecard|finish|end|q2)\b|\bsecond problem\b|\bquestion 2\b|\btask 2\b|\bmove on\b/;
    const wantsToSkip = lower.trim().split(/\s+/).length <= 8 && SKIP_WORDS_RE.test(lower);

    if (isRound2 && wantsToSkip) {
      if (currentQuestionIndex === 0) {
        const qSet = getAmazonQuestionSet(selectedRole, roundSlug, selectedSetId);
        if (qSet && qSet.problemIds && qSet.problemIds.length > 1) {
            handleProceedToNextProblem();
            return;
        }
      }
      postAiMessage("Understood. Concluding your Technical Viva assessment now. Generating your evaluation scorecard...");
      setTimeout(() => {
        handleFinishBarRaiserRound();
      }, 1200);
      return;
    }

    // ANSWER GATE (Rounds 2 and 3 only): arbitrary input never advances the interview.
    // It repeats the same question instead. Fails open: any error means "treat as a normal answer".
    let gateForced = false;
    if ((isRound2 || isRound3) && vivaPhase !== "VERDICT") {
      try {
        const gatePhase: GatePhase = isRound3 && vivaPhase === "INITIAL" ? "DRAFTING" : vivaPhase;
        const fallbackQuestion = isRound2 && vivaPhase === "INITIAL"
          ? "Walk me through your approach for " + (problem?.title || "this problem") + ": the algorithm, the data structure, and the expected time and space complexity."
          : "Please walk me through your answer to my last question.";
        const lastQuestion = [...dialogue].reverse().find(m => m.sender === "ai" && !m.kind);
        const currentQuestion = (isRound2 && vivaPhase === "INITIAL") || !lastQuestion
          ? fallbackQuestion
          : lastQuestion.text;

        const decision = decideGate(
          candidateMsg,
          { round: isRound2 ? 2 : 3, phase: gatePhase, questionText: currentQuestion, problemTitle: problem?.title },
          { consecutiveNonAnswers: gateStrikesRef.current, clarificationsUsed: gateClarRef.current }
        );
        console.info("[answerGate]", { class: decision.classification, round: isRound2 ? 2 : 3, phase: gatePhase, strike: decision.strike });

        const tagLastCandidate = (kind: DialogueKind) => {
          setDialogue(prev => {
            let idx = -1;
            for (let i = prev.length - 1; i >= 0; i--) {
              if (prev[i].sender === "candidate") { idx = i; break; }
            }
            if (idx < 0) return prev;
            const copy = prev.slice();
            copy[idx] = { ...copy[idx], kind };
            return copy;
          });
        };

        if (decision.action === "proceed") {
          resetGate();
        } else if (decision.action === "nudge") {
          tagLastCandidate(decision.classification === "clarification" ? "clarification" : "non_answer");
          postAiMessage(gatePhase === "CODING" ? NUDGE_REPLIES.CODING : NUDGE_REPLIES.DRAFTING, "nudge");
          return;
        } else if (decision.action === "clarify") {
          gateClarRef.current = decision.clarificationsUsed;
          gateReaskTotalRef.current += 1;
          tagLastCandidate("clarification");
          postAiMessage(buildClarificationReply(currentQuestion, gateReaskTotalRef.current), "reask");
          return;
        } else if (decision.action === "reask") {
          gateStrikesRef.current = decision.strike;
          gateReaskTotalRef.current += 1;
          nonAnswerCountRef.current += 1;
          tagLastCandidate("non_answer");
          postAiMessage(buildReaskReply(decision.strike, currentQuestion, gateReaskTotalRef.current), "reask");
          return;
        } else if (decision.action === "force_advance") {
          // Safety valve: after repeated non-answers, move on by the existing path of this phase.
          gateForced = true;
          nonAnswerCountRef.current += 1;
          unansweredRef.current = [...unansweredRef.current, currentQuestion];
          resetGate();
        }
      } catch (gateError) {
        console.error("[answerGate] failed open:", gateError);
      }
    }

    // STRICT RULE: If we are in INITIAL phase, ANY (real) answer from candidate immediately
    // commands them to write the code in the editor, and switches phase to CODING.
    if (isRound2 && vivaPhase === "INITIAL") {
      setVivaPhase("CODING");
      const codingOrder = "Understood. Please go ahead and write your implementation in the code editor above. Test your solution against the sample cases, and click 'Submit Solution' when ready.";
      postAiMessage(codingOrder);
      if (typeof speakText === "function") speakText(codingOrder);
      return;
    }

    setIsAiThinking(true);
    try {
      const res = await fetch("/api/crucible/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          problemId: problem.id,
          company: companySlug,
          problemTitle: problem.title,
          problemDescription: (problem.paragraphs || []).join(" "),
          isRound2: isRound2,
          isRound3: isRound3,
          isRound4: isRound4,
          roundSlug: roundSlug,
          category: isRound4 ? "Behavioral" : (problem.category || "Algorithms"),
          difficulty: isRound4 ? "Bar Raiser" : (problem.difficulty || "Medium"),
          candidateMessage: candidateMsg,
          dialogueHistory: modelHistory(dialogue).slice(-6),
          ...(gateForced ? { gateForced: true } : {}),
          vivaPhase,
          code,
          questionIndex: currentQuestionIndex,
          totalQuestions: 2,
        })
      });
      const data = await res.json();
      const aiReply = data?.reply || "Understood. Please continue with your implementation.";
      postAiMessage(aiReply);

      if (vivaPhase === "FOLLOW_UPS") {
        setFollowUpCount(prev => {
          const next = prev + 1;
          if (next >= 3) {
            setVivaPhase("VERDICT");
            if (isRound3) {
              const finishMsg = "Thank you for the comprehensive architectural defense. You have concluded your Round 3 System Design assessment! Please click 'Conclude & Score' at the top right to finalize your round.";
              postAiMessage(finishMsg);
              if (typeof speakText === "function") speakText(finishMsg);
            } else if (isRound2) {
              const isTask1 = currentQuestionIndex === 0;
              if (isTask1) {
                const r2FinishMsg = "Thank you for defending your implementation. We have completed Question 1 of this Technical Viva! Please proceed to Question 2.";
                postAiMessage(r2FinishMsg);
                if (typeof speakText === "function") speakText(r2FinishMsg);
                setShowNextModal(true);
              } else {
                const r2FinalMsg = "Excellent defense. You have completed both technical problems and algorithmic grilling for this round! Finalizing your evaluation scorecard now...";
                postAiMessage(r2FinalMsg);
                if (typeof speakText === "function") speakText(r2FinalMsg);
                setTimeout(() => {
                  handleFinishBarRaiserRound();
                }, 1500);
              }
            }
          }
          return next;
        });
      }
    } catch (err) {
      console.error("[AI INTERVIEWER FETCH ERROR]:", err);
      postAiMessage("Understood. Please implement your approach in the editor and click Submit Solution.");
    } finally {
      setIsAiThinking(false);
    }
  };

  const handleCandidateSubmit = async (textToSend?: string) => {
    const text = (textToSend !== undefined ? textToSend : candidateInputText).trim();
    if (!text) return;

    const currentCandidateTurns = dialogue.filter(m => m.sender === "candidate").length;
    const isFourthTurn = isRound4 && (currentCandidateTurns + 1 >= 4);

    const candidateMsg = {
      id: Math.random().toString(36).substring(2, 9),
      sender: "candidate" as const,
      text,
      time: "Just now"
    };

    setCandidateInputText("");

    if (isFourthTurn) {
      setQuestionCompleted(true);
      const isQuestion1 = (currentQuestionIndex === 0);

      const finishText = isQuestion1
        ? "Thank you for the thorough walkthrough. We have completed Question 1 of this set! Please click 'Conclude & Score' at the top right to proceed to Question 2."
        : "Thank you. You have successfully completed both scenarios of this Bar Raiser session! Please click 'Conclude & Score' at the top right to finalize your round and review your comprehensive evaluation.";

      if (!isQuestion1) {
        setIsSetFinished(true);
      }

      setDialogue(prev => [
        ...prev,
        candidateMsg,
        {
          id: Math.random().toString(36).substring(2, 9),
          sender: "ai" as const,
          text: finishText,
          time: "Just now"
        }
      ]);

      if (typeof speakText === "function") {
        speakText(finishText);
      }
      return;
    }

    setDialogue(prev => [...prev, candidateMsg]);
    askAiInterviewer(text);
  };

  const startRecording = async () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      setIsAiSpeaking(false);
    }

    setCandidateInputText("");
    audioChunksRef.current = [];

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream;

      const mediaRecorder = new MediaRecorder(stream, { mimeType: "audio/webm" });
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) {
          audioChunksRef.current.push(e.data);
        }
      };

      mediaRecorder.start(200);
      setIsRecording(true);
    } catch (err) {
      console.error("Microphone error:", err);
      alert("Microphone permission was not granted or device is in use. Please check browser permissions or type your answer.");
    }
  };

  const stopAndSubmitRecording = async () => {
    setIsRecording(false);

    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      mediaRecorderRef.current.stop();
    }

    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach(t => t.stop());
      mediaStreamRef.current = null;
    }

    await new Promise(r => setTimeout(r, 300));

    if (audioChunksRef.current.length > 0) {
      setIsTranscribing(true);
      try {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        const formData = new FormData();
        formData.append("audio", audioBlob);

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 7000);
        const res = await fetch("/api/crucible/transcribe", {
          signal: controller.signal,
          method: "POST",
          body: formData,
        });
        clearTimeout(timeoutId);

        if (res.ok) {
          const data = await res.json();
          const spoken = (data.text || "").trim();
          if (spoken.length > 0) {
            handleCandidateSubmit(spoken);
            return;
          }
        }
      } catch (e) {
        console.error("Transcription call error:", e);
      } finally {
        setIsTranscribing(false);
      }
    }

    postAiMessage("I couldn't hear any speech from your microphone. Please make sure your mic is selected properly or type your response in the box.");
  };

  const handleRunCode = () => {
    setIsRunning(true);
    setIsConsoleCollapsed(false);
    setActiveConsoleTab("results");

    setTimeout(() => {
      const evaluation = executeCandidateCode(problem.id, code, language, visibleCases);
      setTestResults(evaluation);
      setIsRunning(false);

      if (evaluation.status !== "Accepted") {
        postAiMessage("Your test cases failed: " + (evaluation.cases[0]?.output || "Output mismatched") + ". Refine your implementation in the editor.");
      } else {
        postAiMessage("Your visible test cases passed. When ready, click 'Submit Solution' to start the technical defense.");
      }
    }, 600);
  };

  const handleSubmitCode = () => {
    if (isRound3) {
      const trimmedCode = code.trim();
      if (!trimmedCode || trimmedCode.length < 40) {
        postAiMessage("Please outline your core class interfaces, concurrency primitives, or architectural components in the editor before submitting for technical defense.");
        setActiveConsoleTab("interviewer");
        return;
      }
      setIsRunning(true);
      setActiveConsoleTab("interviewer");
      setVivaPhase("FOLLOW_UPS");
      setFollowUpCount(0);
      resetGate();

      setTimeout(() => {
        setIsRunning(false);
        const designPrompt = "I have reviewed your architectural specifications and class definitions. Let's dive deep into your design: Walk me through your concurrency model, how you handle subscriber backpressure, and your failure recovery mechanisms.";
        postAiMessage(designPrompt);
        if (typeof speakText === "function") speakText(designPrompt);
      }, 600);
      return;
    }

    setIsRunning(true);
    setIsConsoleCollapsed(false);
    setActiveConsoleTab("results");

    setTimeout(() => {
      setIsRunning(false);
      const cleanCode = code.trim();
      const starterTemplate = (problem?.starterTemplates && problem?.starterTemplates[language]) || "";
      
      const isBlankOrUnchanged = 
        !cleanCode || 
        cleanCode.length < 25 || 
        cleanCode === starterTemplate.trim();

      const combinedCases = [...(visibleCases || []), ...(hiddenCases || [])];
      let evaluation = executeCandidateCode(problem ? problem.id : "q1", code, language, combinedCases);

      if (isBlankOrUnchanged) {
        evaluation = {
          status: "Wrong Answer",
          passedTests: 0,
          totalTests: combinedCases.length,
          visiblePassed: 0,
          visibleTotal: visibleCases.length,
          hiddenPassed: 0,
          hiddenTotal: hiddenCases.length,
          runtimeMs: 0,
          memoryKb: 0,
          cases: visibleCases.map((cs: any, i: number) => ({
            id: cs.id ?? i + 1,
            isHidden: false,
            input: cs.input,
            expected: cs.expectedOutput,
            output: cleanCode.length === 0 ? "Empty code submitted." : "Starter template was unmodified.",
            passed: false,
            runtime: "0ms"
          }))
        } as unknown as EvaluationReport;
      }

      setTestResults(evaluation);

      const passedCases = (evaluation.cases || []).filter((cs: any) => cs.passed).length;
      const totalCount = (evaluation.cases || []).length || combinedCases.length || 1;
      const isAccepted = evaluation.status === "Accepted" && passedCases === totalCount;
      const taskEarned = isAccepted ? 50 : Math.round((passedCases / totalCount) * 50);

      setTaskScores(prev => {
        const updated: [number, number] = [prev[0], prev[1]];
        updated[currentQuestionIndex] = taskEarned;
        return updated;
      });

      if (isRound1) {
        setTimeout(() => {
          setShowCompletionScorecard(true);
        }, 900);
      } else {
        if (isAccepted) {
          setActiveConsoleTab("interviewer");
          setVivaPhase("FOLLOW_UPS");
          setFollowUpCount(0);
          resetGate();
          const passMsg = "Your code passed all stress tests. Let's begin your technical defense: explain the runtime and space bounds of your solution.";
          postAiMessage(passMsg);
          if (typeof speakText === "function") speakText(passMsg);
        } else {
          setActiveConsoleTab("interviewer");
          const isTask1 = currentQuestionIndex === 0;
          const failMsg = isTask1
            ? `Your solution did not pass all stress test cases (${passedCases}/${totalCount} passed). In this technical round, we cannot conduct the viva defense until your implementation passes. Would you like to revise your code, or would you prefer to move to the second problem?`
            : `Your solution did not pass all stress test cases (${passedCases}/${totalCount} passed). Because this is the final problem of Round 2, we cannot conduct the viva defense on failing code. Would you like to revise your implementation, or conclude the assessment and generate your scorecard?`;
          postAiMessage(failMsg);
          if (typeof speakText === "function") speakText(failMsg);
        }
      }
    }, 700);
  };

  const handleProceedToNextProblem = () => {
    const qSet = getAmazonQuestionSet(selectedRole, roundSlug, selectedSetId);
    if (qSet && qSet.problemIds && qSet.problemIds.length > 1) {
      const nextProblemId = qSet.problemIds[1];

      // Archive current dialogue history before switching
      setAllSetHistory(prev => [...prev, ...dialogue]);

      setCurrentProblemId(nextProblemId);
      setCurrentQuestionIndex(1);
      setShowNextModal(false);
      setTestResults(null);
      setVivaPhase("INITIAL");
      resetGate();
      setActiveConsoleTab(isRound1 ? "cases" : "interviewer");

      const p = getProblemById(nextProblemId);
      if (p && p.starterTemplates && p.starterTemplates[language]) {
        setCode(p.starterTemplates[language]);
      }

      // Start fresh dialogue for Question 2
      const nextTitle = p?.title || "Question 2";
      setDialogue([{
        id: "q2-init-" + Date.now(),
        sender: "ai",
        text: isRound4
          ? "Thank you. Let's move to our second Leadership Principle scenario: " + nextTitle + ". Walk me through a situation where you faced this challenge, focusing on your individual ownership and the end result."
          : "Hello! We are now on Question 2: " + nextTitle + ". Before writing any code, walk me through your planned algorithm, data structures, and expected time and space complexity.",
        time: "Just now"
      }]);
    }
  };

  const handleFinishBarRaiserRound = async () => {
    setIsGeneratingScorecard(true);
    setShowCompletionScorecard(true);
    try {
      const res = await fetch("/api/crucible/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          code: code || "",
          isRound2: isRound2,
          isRound3: isRound3,
          isRound4: isRound4,
          roundSlug: roundSlug,
          problemTitle: problem ? problem.title : "Technical Round",
          problemDescription: problem ? (problem.paragraphs || []).join(" ") : "",
          dialogueHistory: modelHistory([...(allSetHistory || []), ...(dialogue || [])]),
          candidateTestScore: ((taskScores[0] || 0) / 2) + ((taskScores[1] || 0) / 2),
          ...(nonAnswerCountRef.current > 0 ? { nonAnswerCount: nonAnswerCountRef.current, unansweredQuestions: unansweredRef.current } : {}),
          evaluateScorecard: true
        })
      });
      const data = await res.json();
      if (data?.scorecard) {
        setBehavioralScorecard(data.scorecard);
      }
    } catch (e) {
      console.error("Failed to generate scorecard:", e);
    } finally {
      setIsGeneratingScorecard(false);
    }
  };

  const handleReturnToPipeline = () => {
    const flag = isRound1
      ? "round1Completed=true"
      : isRound2
      ? "round2Completed=true"
      : isRound3
      ? "round3Completed=true"
      : "round4Completed=true";
    router.push(`/tracks/${companySlug}?${flag}`);
  };

  const handleMouseDownH = () => setIsDraggingH(true);
  const handleMouseDownV = () => setIsDraggingV(true);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isDraggingH) {
        const newPercent = (e.clientX / window.innerWidth) * 100;
        if (newPercent > 25 && newPercent < 75) setLeftWidthPercent(newPercent);
      }
      if (isDraggingV) {
        const newHeight = window.innerHeight - e.clientY;
        if (newHeight > 100 && newHeight < window.innerHeight * 0.75) {
          setConsoleHeight(newHeight);
          setIsConsoleCollapsed(false);
        }
      }
    },
    [isDraggingH, isDraggingV]
  );

  const handleMouseUp = useCallback(() => {
    setIsDraggingH(false);
    setIsDraggingV(false);
  }, []);

  useEffect(() => {
    if (isDraggingH || isDraggingV) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDraggingH, isDraggingV, handleMouseMove, handleMouseUp]);

  const tabClass = (tab: ConsoleTab, activeColor: string) =>
    "flex items-center gap-1.5 py-1 cursor-pointer " +
    (activeConsoleTab === tab && !isConsoleCollapsed
      ? "text-white border-b-2 " + activeColor
      : "text-slate-400 hover:text-slate-200");

  return (
    <div className="h-screen w-screen bg-[#1A1A1A] text-slate-200 flex flex-col overflow-hidden font-sans select-none">

      {/* ───────── Header ───────── */}
      <header className="h-12 bg-[#262626] border-b border-black/40 px-4 flex items-center justify-between shrink-0 z-30">
        <div className="flex items-center gap-3">
          <Link href={"/tracks/" + companySlug} className="flex items-center gap-2 group">
            <span className="font-extrabold text-sm text-white tracking-tight">
              DAY-ZERO // <span className="text-amber-500 uppercase">{companyData?.companyName || "OA"}</span>
            </span>
          </Link>
          <span className="h-4 w-[1px] bg-white/20 mx-1" />
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-slate-300 bg-[#333333] px-2.5 py-1 rounded-md border border-white/10">
              Set {selectedSetId} • Task {currentQuestionIndex + 1}/{problem?.totalTasks || 2}
            </span>
            <span className="text-xs font-semibold text-amber-400 bg-amber-950/40 border border-amber-500/30 px-3 py-1 rounded-md">
              {problem?.title || "Amazon Assessment Problem"}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsVoiceActive(!isVoiceActive)}
            className={"flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer " + (isVoiceActive ? "bg-indigo-600/30 border-indigo-500/40 text-indigo-300" : "bg-[#333333] border-white/10 text-slate-400 hover:text-slate-200")}
          >
            {isVoiceActive ? <Volume2 className="h-3.5 w-3.5" /> : <VolumeX className="h-3.5 w-3.5" />}
            <span>{isVoiceActive ? "AI Voice On" : "AI Voice Muted"}</span>
          </button>

          {isStrict && (
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-rose-400 bg-rose-950/40 border border-rose-500/30">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span>LOCKDOWN ACTIVE</span>
            </span>
          )}

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-[#333333] border border-white/10 text-amber-400">
            <Clock className="h-3.5 w-3.5" />
            <span>{formatTimer(timeLeftSeconds)}</span>
          </div>

          <div className="flex items-center gap-2">
            {!isRound3 && (
              <button
                onClick={handleRunCode}
                disabled={isRunning}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-slate-100 bg-[#3D3D3D] hover:bg-[#4A4A4A] border border-white/10 cursor-pointer disabled:opacity-50"
              >
                <Play className="h-3.5 w-3.5 text-emerald-400" />
                <span>Run</span>
              </button>
            )}
            <button
              onClick={handleSubmitCode}
              disabled={isRunning}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md cursor-pointer disabled:opacity-50"
            >
              <Send className="h-3.5 w-3.5" />
              <span>{isRound3 ? "Submit Architecture Defense" : "Submit Solution"}</span>
            </button>
            {isRound3 && (
              <button
                onClick={handleFinishBarRaiserRound}
                disabled={isRunning || isGeneratingScorecard}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 border border-amber-400/30 shadow-md cursor-pointer disabled:opacity-50 transition-all"
                title="Conclude assessment and review evaluation scorecard"
              >
                <Award className="h-3.5 w-3.5 text-amber-200" />
                <span>Conclude &amp; Score</span>
              </button>
            )}
              {isRound1 && (
                <button
                  onClick={() => {
                      const clean = (code || "").trim();
                      const hasValidCode = clean.length > 25 && (clean.includes("return") || clean.includes("def ") || clean.includes("function") || clean.includes("class"));
                      const totalVisible = (visibleCases && visibleCases.length) || 2;
                      const totalHidden = (hiddenCases && hiddenCases.length) || 3;
                      const totalCases = totalVisible + totalHidden;
                      // If candidate skipped without valid code, earned is 0; otherwise evaluate partial credit (1 test passed)
                      const passedCount = hasValidCode ? 1 : 0;
                      const earned = Math.round((passedCount / totalCases) * 50);

                      setTaskScores(prev => {
                        const updated: [number, number] = [prev[0], prev[1]];
                        updated[currentQuestionIndex] = earned;
                        return updated;
                      });

                      if (currentQuestionIndex === 0) {
                        setShowCompletionScorecard(true);
                      } else {
                        setIsSetFinished(true);
                        setShowCompletionScorecard(true);
                      }
                    }}
                  disabled={isRunning}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-white/10 shadow-sm cursor-pointer disabled:opacity-50 transition-all"
                  title="Advance to next task or finish with current test case results"
                >
                  <span>{currentQuestionIndex === 0 ? "Skip to Task 2 →" : "Finish Assessment"}</span>
                </button>
              )}
            {(isRound2 || isRound4) && (
              <button
                onClick={handleFinishBarRaiserRound}
                disabled={isRunning || isGeneratingScorecard}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 border border-amber-400/30 shadow-md cursor-pointer disabled:opacity-50 transition-all"
                title="Conclude assessment and review evaluation scorecard"
              >
                <Award className="h-3.5 w-3.5 text-amber-200" />
                <span>Conclude &amp; Score</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* ───────── Main Content Split Panes ───────── */}
      <div className="flex-1 flex min-h-0 relative">
        {/* Left Pane: Problem Description */}
        <section
          style={{ width: `${leftWidthPercent}%` }}
          className="h-full bg-[#1F1F1F] border-r border-black/40 overflow-y-auto p-6 space-y-6"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-500 font-mono">
                {isRound4 ? "Behavioral Leadership Principle" : isRound3 ? "Architecture Specification" : isRound2 ? "Technical Problem & Viva Defense" : (problem?.category || "Problem Description")}
              </span>
            </div>
            <h1 className="text-2xl font-bold text-white">{problem?.title}</h1>
          </div>

          <div className="space-y-4 text-sm leading-relaxed text-slate-300">
            {paragraphs.map((p, idx) => (
              <p key={idx}><FormatText text={p} /></p>
            ))}

            {bulletPoints.length > 0 && (
              <ul className="list-disc pl-5 space-y-2">
                {bulletPoints.map((b, idx) => (
                  <li key={idx}><FormatText text={b} /></li>
                ))}
              </ul>
            )}
          </div>

          {examples.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-white/5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">Examples</h2>
              {examples.map((ex, idx) => (
                <div key={idx} className="bg-[#262626] border border-white/5 rounded-xl p-3.5 space-y-2 text-xs font-mono">
                  <div><span className="text-slate-400">Input:</span> <span className="text-slate-200">{ex.input}</span></div>
                  <div><span className="text-slate-400">Output:</span> <span className="text-emerald-400 font-bold">{ex.output}</span></div>
                  {ex.explanation && <div><span className="text-slate-400">Explanation:</span> <span className="text-slate-300">{ex.explanation}</span></div>}
                </div>
              ))}
            </div>
          )}

          {constraints.length > 0 && (
            <div className="space-y-3 pt-4 border-t border-white/5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">Constraints</h2>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-300 font-mono">
                {constraints.map((c, idx) => (
                  <li key={idx}>{c}</li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* Horizontal Drag Handle */}
        <div
          onMouseDown={handleMouseDownH}
          className="w-1.5 bg-black/40 hover:bg-amber-500/60 cursor-col-resize shrink-0 transition-colors z-20"
        />

        {/* Right Pane: Code Editor + Interactive Viva Console */}
        <section
          style={{ width: `${100 - leftWidthPercent}%` }}
          className="h-full flex flex-col min-w-0"
        >
          {/* Monaco Editor */}
          <div className="flex-1 min-h-0">
            <Editor
              height="100%"
              language={language}
              theme="vs-dark"
              value={code}
              onChange={(value) => setCode(value ?? "")}
              options={{
                fontSize: 14,
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                automaticLayout: true
              }}
            />
          </div>

          {/* Vertical drag handle */}
          <div
            onMouseDown={handleMouseDownV}
            className="h-1.5 bg-black/40 hover:bg-amber-500/60 cursor-row-resize shrink-0 transition-colors"
          />

          {/* Console */}
          <div
            className="bg-[#262626] border-t border-black/40 flex flex-col shrink-0"
            style={{ height: isConsoleCollapsed ? 44 : consoleHeight }}
          >
            {/* Console tab bar */}
            <div className="h-11 px-4 flex items-center justify-between border-b border-white/5 shrink-0 text-xs font-semibold">
              <div className="flex items-center gap-5">
                {!isRound1 && (
                  <button
                    onClick={() => {
                      setActiveConsoleTab("interviewer");
                      setIsConsoleCollapsed(false);
                    }}
                    className={"flex items-center gap-2 py-1 cursor-pointer " + (
                      activeConsoleTab === "interviewer" && !isConsoleCollapsed
                        ? "text-indigo-400 border-b-2 border-indigo-400 font-bold"
                        : "text-slate-400 hover:text-slate-200"
                    )}
                  >
                    <Bot className="h-4 w-4" />
                    <span>AI Technical Viva ({dialogue.length})</span>
                    {isAiSpeaking && (
                      <span className="flex items-center gap-1 text-[10px] text-cyan-400 font-mono">
                        <span className="inline-block w-1.5 h-3 bg-cyan-400 animate-pulse rounded-full" />
                        <span className="inline-block w-1.5 h-4 bg-cyan-400 animate-pulse delay-75 rounded-full" />
                        <span className="inline-block w-1.5 h-2 bg-cyan-400 animate-pulse delay-150 rounded-full" />
                      </span>
                    )}
                  </button>
                )}

                <button
                  onClick={() => {
                    setActiveConsoleTab("cases");
                    setIsConsoleCollapsed(false);
                  }}
                  className={tabClass("cases", "border-amber-500")}
                >
                  <Eye className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Visible Cases ({visibleCases.length})</span>
                </button>

                <button
                  onClick={() => {
                    setActiveConsoleTab("hidden");
                    setIsConsoleCollapsed(false);
                  }}
                  className={tabClass("hidden", "border-amber-500")}
                >
                  <Lock className="h-3.5 w-3.5 text-amber-400" />
                  <span>Hidden Tests ({hiddenCases.length})</span>
                </button>

                <button
                  onClick={() => {
                    setActiveConsoleTab("results");
                    setIsConsoleCollapsed(false);
                  }}
                  className={tabClass("results", "border-amber-500")}
                >
                  <Terminal className="h-3.5 w-3.5 text-primary" />
                  <span>Test Results</span>
                  {testResults && (
                    <span className={"text-[10px] px-1.5 py-0.5 rounded font-bold " + (
                      testResults.status === "Accepted" ? "bg-emerald-500/20 text-emerald-400" : "bg-rose-500/20 text-rose-400"
                    )}>
                      {testResults.status}
                    </span>
                  )}
                </button>
              </div>

              <button
                onClick={() => setIsConsoleCollapsed(!isConsoleCollapsed)}
                className="flex items-center gap-1 text-slate-400 hover:text-white text-[11px] cursor-pointer"
              >
                <span>{isConsoleCollapsed ? "Expand" : "Collapse"}</span>
                {isConsoleCollapsed ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>
            </div>

            {/* Console body */}
            {!isConsoleCollapsed && (
              <div className="flex-1 p-4 overflow-y-auto text-sm font-sans text-slate-200 flex flex-col justify-between">

                {activeConsoleTab === "interviewer" && (
                  <div className="flex-1 flex flex-col justify-between space-y-3">

                    <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/40 shadow-md">
                      <div className="flex items-center gap-3">
                        <div className={"relative w-11 h-11 rounded-2xl flex items-center justify-center transition-all shadow-md " + (
                          isAiSpeaking
                            ? "bg-gradient-to-br from-indigo-500 to-cyan-500 shadow-indigo-500/50 scale-105"
                            : "bg-[#1E1E2E] border border-indigo-500/40"
                        )}>
                          <Bot className={"h-6 w-6 " + (isAiSpeaking ? "text-white animate-bounce" : "text-indigo-400")} />
                          {isAiSpeaking && (
                            <span className="absolute -inset-1 rounded-2xl bg-cyan-500/30 animate-ping pointer-events-none" />
                          )}
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-black text-white tracking-wide">
                              DAY-ZERO AI BAR-RAISER
                            </span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded font-bold bg-indigo-950 text-indigo-300 border border-indigo-700">
                              {vivaPhase === "FOLLOW_UPS" ? ("Follow-up " + (followUpCount + 1) + " of 3") : (vivaPhase === "CODING" ? "Coding Phase" : "Initial Evaluation")}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 mt-0.5">
                            {isAiSpeaking ? (
                              <div className="flex items-center gap-1 text-xs text-cyan-400 font-mono font-bold">
                                <span className="inline-block w-1.5 h-3 bg-cyan-400 animate-pulse rounded-full" />
                                <span className="inline-block w-1.5 h-5 bg-cyan-400 animate-pulse delay-75 rounded-full" />
                                <span className="inline-block w-1.5 h-3.5 bg-cyan-400 animate-pulse delay-150 rounded-full" />
                                <span className="inline-block w-1.5 h-2 bg-cyan-400 animate-pulse delay-200 rounded-full" />
                                <span className="ml-1 text-[11px] uppercase tracking-wider">Speaking to you...</span>
                              </div>
                            ) : isTranscribing ? (
                              <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-mono animate-pulse">
                                <Loader2 className="h-3 w-3 animate-spin" />
                                <span>Transcribing your speech via Gemini...</span>
                              </div>
                            ) : isAiThinking ? (
                              <div className="flex items-center gap-1.5 text-xs text-indigo-400 font-mono animate-pulse">
                                <Loader2 className="h-3 w-3 animate-spin" />
                                <span>Bar Raiser is evaluating...</span>
                              </div>
                            ) : (
                              <div className="text-xs text-slate-400 font-mono flex items-center gap-2">
                                <span>🟢 Ready for your response</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={isRecording ? stopAndSubmitRecording : startRecording}
                        disabled={isTranscribing}
                        className={"flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all shadow-md cursor-pointer disabled:opacity-50 " + (
                          isRecording
                            ? "bg-rose-600 hover:bg-rose-500 text-white animate-pulse shadow-rose-600/50"
                            : "bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/30"
                        )}
                      >
                        {isRecording ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                        <span>{isRecording ? ("Stop & Submit (" + recordingSeconds + "s)") : "Speak via Microphone"}</span>
                      </button>
                    </div>

                    <div ref={dialogueContainerRef} className="space-y-2.5 max-h-48 overflow-y-auto pr-1">
                      {dialogue.map((item) => (
                        <div
                          key={item.id}
                          className={"p-3 rounded-xl text-sm leading-relaxed border " + (
                            item.sender === "ai"
                              ? "bg-slate-900/90 border-slate-700/80 text-slate-100"
                              : "bg-emerald-950/40 border-emerald-700/60 text-emerald-200 ml-6"
                          )}
                        >
                          <div className="flex items-center justify-between text-[11px] font-mono font-bold uppercase mb-1 text-slate-400">
                            <span>{item.sender === "ai" ? "Evaluator Query:" : "Your Response:"}</span>
                            <span>{item.time}</span>
                          </div>
                          <div>{item.text}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 pt-2 border-t border-white/5">
                      <input
                        type="text"
                        value={candidateInputText}
                        onChange={(e) => setCandidateInputText(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            handleCandidateSubmit();
                          }
                        }}
                        placeholder="Type your response to the interviewer..."
                        className="flex-1 bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                      />
                      <button
                        onClick={() => handleCandidateSubmit()}
                        disabled={!candidateInputText.trim() || isAiThinking}
                        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                      >
                        <SendHorizonal className="h-3.5 w-3.5" />
                        <span>Send</span>
                      </button>
                    </div>
                  </div>
                )}

                {activeConsoleTab === "cases" && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 mb-3">
                      {visibleCases.map((c: any, i: number) => (
                        <button
                          key={i}
                          onClick={() => setSelectedCaseIdx(i)}
                          className={"px-3 py-1.5 rounded-lg text-xs font-mono font-bold border " + (selectedCaseIdx === i ? "bg-[#333333] border-emerald-500 text-emerald-400" : "bg-[#1F1F1F] border-white/5 text-slate-400 hover:text-white")}
                        >
                          Case {i + 1}
                        </button>
                      ))}
                    </div>
                    {visibleCases[selectedCaseIdx] && (
                      <div className="bg-[#1A1A1A] p-4 rounded-xl border border-white/5 font-mono text-xs space-y-3">
                        <div>
                          <span className="text-slate-400">Input:</span>
                          <pre className="text-slate-200 mt-1">{visibleCases[selectedCaseIdx].input}</pre>
                        </div>
                        <div>
                          <span className="text-slate-400">Expected Output:</span>
                          <pre className="text-emerald-400 font-bold mt-1">{visibleCases[selectedCaseIdx].expectedOutput}</pre>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {activeConsoleTab === "hidden" && (
                  <div className="space-y-3">
                    <div className="bg-[#1A1A1A] p-4 rounded-xl border border-white/5 font-mono text-xs space-y-2">
                      <div className="flex items-center gap-2 text-amber-400 font-bold">
                        <Lock className="h-4 w-4" />
                        <span>Hidden Test Suite Locked</span>
                      </div>
                      <p className="text-slate-400">
                        {hiddenCases.length} hidden edge testcases will be executed automatically against your solution when you submit.
                      </p>
                    </div>
                  </div>
                )}

                {activeConsoleTab === "results" && (
                  <div className="space-y-4">
                    {!testResults && !isRunning && (
                      <div className="text-xs text-slate-400 font-mono text-center py-6">
                        Click &quot;Run&quot; to test your code against visible vectors, or &quot;Submit Solution&quot; to test against the full suite.
                      </div>
                    )}

                    {isRunning && (
                      <div className="flex items-center justify-center gap-2 py-8 text-xs font-mono text-indigo-400 animate-pulse">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Executing test sandbox...</span>
                      </div>
                    )}

                    {testResults && !isRunning && (
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 p-3 rounded-xl bg-[#1A1A1A] border border-white/5">
                          <span className="text-white text-xs font-mono">
                            Visible Cases: {testResults.visiblePassed}/{testResults.visibleTotal}
                          </span>
                          <span className="text-white text-xs font-mono">
                            Hidden Suite: {testResults.hiddenPassed}/{testResults.hiddenTotal}
                          </span>
                          <span className="text-slate-400 text-xs font-mono">
                            Runtime: {testResults.runtimeMs}ms
                          </span>
                        </div>

                        <div className="space-y-2">
                          {testResults.cases.map((c: any, i: number) => (
                            <div
                              key={c.id ?? i}
                              className={
                                "p-3 rounded-lg border flex items-center justify-between text-xs font-mono " +
                                (c.passed
                                  ? "bg-emerald-950/20 border-emerald-800 text-emerald-300"
                                  : "bg-rose-950/20 border-rose-800 text-rose-300")
                              }
                            >
                              <div className="flex items-center gap-2">
                                {c.passed ? (
                                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                                ) : (
                                  <AlertCircle className="h-4 w-4 text-rose-400 shrink-0" />
                                )}
                                <span className="font-bold">
                                  {c.isHidden ? "Hidden Case #" + (i + 1) : "Visible Case #" + (c.id ?? i + 1)}
                                </span>
                              </div>
                              <span className="font-bold">{c.output}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

              </div>
            )}
          </div>
        </section>
      </div>

      {/* ───────── Modal: Next problem ───────── */}
      {showNextModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-[#262626] border-2 border-emerald-500 rounded-2xl max-w-md w-full p-6 shadow-2xl text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-500/40">
              <CheckCircle2 className="h-8 w-8" />
            </div>

            <div>
              <span className="text-xs font-mono font-bold text-emerald-400 tracking-wider uppercase">
                Problem {problem?.taskIndex || 1} Passed · All Testcases Verified
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                Optimal Solution Accepted
              </h3>
              <p className="text-xs text-slate-300 mt-2 font-medium">
                Your code has passed all automated test vectors for the {companyData?.companyName || "technical"} rubric. Ready for Problem {(problem?.taskIndex || 1) + 1} of {problem?.totalTasks || 2}?
              </p>
            </div>

            <div className="pt-2 flex items-center justify-center gap-3">
              <button
                onClick={() => setShowNextModal(false)}
                className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-300 hover:text-white bg-[#333] border border-white/10 cursor-pointer"
              >
                Review Solution
              </button>
              <button
                onClick={handleProceedToNextProblem}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Next Problem</span> <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ───────── Modal: Completion Scorecard ───────── */}
      {showCompletionScorecard && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-6">
          <div className="bg-[#1E293B] border-2 border-primary rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl text-center space-y-5 my-auto">
            {isRound4 && currentQuestionIndex === 0 && (
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  Task 1 Completed
                </div>
                <h2 className="text-xl font-black text-white">Question 1 Milestone Reached</h2>
                <p className="text-xs text-slate-400">
                  You have completed all 5 response turns for Question 1. Ready to proceed to Question 2 of this set?
                </p>
              </div>
            )}
            <div className="w-16 h-16 bg-primary/20 text-primary-light rounded-full flex items-center justify-center mx-auto border-2 border-primary/40 shadow-inner">
              <Trophy className="h-9 w-9 text-amber-400" />
            </div>

            {isRound3 && behavioralScorecard ? (
              <div className="space-y-4 text-left">
                <div className="text-center pb-2 border-b border-white/10">
                  <span className="text-xs font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30">
                    ROUND 3: SYSTEM DESIGN & LLD ARCHITECTURE EVALUATION
                  </span>
                  <div className="mt-3 flex items-center justify-center gap-4">
                    <div className="text-5xl font-black font-mono text-white">
                      {behavioralScorecard.score ?? 0}<span className="text-2xl text-slate-400">/100</span>
                    </div>
                    <div className={"px-3 py-1 rounded-lg text-xs font-bold uppercase " + (
                      (behavioralScorecard.verdict === "Strong Hire" || behavioralScorecard.verdict === "Hire")
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                        : behavioralScorecard.verdict === "Leaning No Hire"
                        ? "bg-amber-500/20 text-amber-400 border border-amber-500/40"
                        : "bg-rose-500/20 text-rose-400 border border-rose-500/40"
                    )}>
                      Verdict: {behavioralScorecard.verdict || "Evaluated"}
                    </div>
                  </div>
                  <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <div className="bg-slate-900/50 p-2 rounded border border-white/5 text-center">
                      <div className="text-[9px] text-slate-400 uppercase font-bold">Modeling</div>
                      <div className="text-xs font-bold text-white">{behavioralScorecard.codeModelingScore ?? 25}/25</div>
                    </div>
                    <div className="bg-slate-900/50 p-2 rounded border border-white/5 text-center">
                      <div className="text-[9px] text-slate-400 uppercase font-bold">Concurrency</div>
                      <div className="text-xs font-bold text-white">{behavioralScorecard.concurrencyScore ?? 25}/25</div>
                    </div>
                    <div className="bg-slate-900/50 p-2 rounded border border-white/5 text-center">
                      <div className="text-[9px] text-slate-400 uppercase font-bold">Resilience</div>
                      <div className="text-xs font-bold text-white">{behavioralScorecard.backpressureScore ?? 25}/25</div>
                    </div>
                    <div className="bg-slate-900/50 p-2 rounded border border-white/5 text-center">
                      <div className="text-[9px] text-slate-400 uppercase font-bold">Defense</div>
                      <div className="text-xs font-bold text-white">{behavioralScorecard.defenseScore ?? 25}/25</div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#13161C] p-3.5 rounded-xl border border-white/5 space-y-2 text-xs">
                  <div className="font-bold text-slate-200 uppercase tracking-wider text-[11px]">Architectural Breakdown:</div>
                  <div className="text-slate-300"><strong className="text-amber-400">Interface Modeling:</strong> {behavioralScorecard.starBreakdown?.situationAndTask}</div>
                  <div className="text-slate-300"><strong className="text-amber-400">Concurrency & Performance:</strong> {behavioralScorecard.starBreakdown?.actionDepth}</div>
                  <div className="text-slate-300"><strong className="text-amber-400">Fault Tolerance & Scale:</strong> {behavioralScorecard.starBreakdown?.resultAndMetrics}</div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-emerald-950/30 border border-emerald-800/40 p-3 rounded-xl">
                    <div className="font-bold text-emerald-400 mb-1">Key Strengths</div>
                    <ul className="list-disc pl-4 space-y-1 text-slate-300">
                      {(behavioralScorecard.strengths || []).map((s: string, idx: number) => (
                        <li key={idx}>{s}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-rose-950/30 border border-rose-800/40 p-3 rounded-xl">
                    <div className="font-bold text-rose-400 mb-1">Areas for Improvement</div>
                    <ul className="list-disc pl-4 space-y-1 text-slate-300">
                      {(behavioralScorecard.areasForImprovement || []).map((a: string, idx: number) => (
                        <li key={idx}>{a}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-[#181C24] p-3 rounded-xl border border-white/10 text-xs text-slate-300">
                  <strong className="text-white">Bar Raiser Summary: </strong>
                  {behavioralScorecard.barRaiserDebriefNote}
                </div>
              </div>
            ) : isRound4 && behavioralScorecard ? (
              <div className="space-y-4 text-left">
                <div className="text-center pb-2 border-b border-white/10">
                  <span className="text-xs font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30">
                    Amazon Executive Bar Raiser Debrief
                  </span>
                  <div className="mt-3 flex items-center justify-center gap-4">
                    <div className="text-5xl font-black font-mono text-white">
                      {behavioralScorecard.score}<span className="text-2xl text-slate-400">/100</span>
                    </div>
                    <div className={"px-3 py-1 rounded-lg text-xs font-bold uppercase " + (
                      behavioralScorecard.score >= 75 ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40" : "bg-rose-500/20 text-rose-400 border border-rose-500/40"
                    )}>
                      Verdict: {behavioralScorecard.verdict || "Evaluated"}
                    </div>
                  </div>
                </div>

                <div className="bg-[#13161C] p-3.5 rounded-xl border border-white/5 space-y-2 text-xs">
                  <div className="font-bold text-slate-200 uppercase tracking-wider text-[11px]">STAR Method Breakdown:</div>
                  <div className="text-slate-300"><strong className="text-amber-400">S &amp; T:</strong> {behavioralScorecard.starBreakdown?.situationAndTask}</div>
                  <div className="text-slate-300"><strong className="text-amber-400">Action:</strong> {behavioralScorecard.starBreakdown?.actionDepth}</div>
                  <div className="text-slate-300"><strong className="text-amber-400">Result:</strong> {behavioralScorecard.starBreakdown?.resultAndMetrics}</div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-emerald-950/30 border border-emerald-800/40 p-3 rounded-xl">
                    <div className="font-bold text-emerald-400 mb-1">Key Strengths</div>
                    <ul className="list-disc pl-4 space-y-1 text-slate-300">
                      {(behavioralScorecard.strengths || []).map((s: string, idx: number) => (
                        <li key={idx}>{s}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-rose-950/30 border border-rose-800/40 p-3 rounded-xl">
                    <div className="font-bold text-rose-400 mb-1">Areas for Improvement</div>
                    <ul className="list-disc pl-4 space-y-1 text-slate-300">
                      {(behavioralScorecard.areasForImprovement || []).map((a: string, idx: number) => (
                        <li key={idx}>{a}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-[#181C24] p-3 rounded-xl border border-white/10 text-xs text-slate-300">
                  <strong className="text-white">Bar Raiser Summary: </strong>
                  {behavioralScorecard.barRaiserDebriefNote}
                </div>
              </div>
            ) : isRound2 && behavioralScorecard ? (
              <div className="space-y-4 text-left">
                <div className="text-center pb-2 border-b border-white/10">
                  <span className="text-xs font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30">
                    Amazon Executive Bar Raiser Debrief
                  </span>
                  <div className="mt-3 flex items-center justify-center gap-4">
                    <div className="text-5xl font-black font-mono text-white">
                      {behavioralScorecard.score}<span className="text-2xl text-slate-400">/100</span>
                    </div>
                    <div className={"px-3 py-1 rounded-lg text-xs font-bold uppercase " + (
                      behavioralScorecard.score >= 75 ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40" : "bg-rose-500/20 text-rose-400 border border-rose-500/40"
                    )}>
                      Verdict: {behavioralScorecard.verdict || "Evaluated"}
                    </div>
                  </div>
                </div>

                <div className="bg-[#13161C] p-3.5 rounded-xl border border-white/5 space-y-2 text-xs">
                  <div className="font-bold text-slate-200 uppercase tracking-wider text-[11px]">STAR Method Breakdown:</div>
                  <div className="text-slate-300"><strong className="text-amber-400">S &amp; T:</strong> {behavioralScorecard.starBreakdown?.situationAndTask}</div>
                  <div className="text-slate-300"><strong className="text-amber-400">Action:</strong> {behavioralScorecard.starBreakdown?.actionDepth}</div>
                  <div className="text-slate-300"><strong className="text-amber-400">Result:</strong> {behavioralScorecard.starBreakdown?.resultAndMetrics}</div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-emerald-950/30 border border-emerald-800/40 p-3 rounded-xl">
                    <div className="font-bold text-emerald-400 mb-1">Key Strengths</div>
                    <ul className="list-disc pl-4 space-y-1 text-slate-300">
                      {(behavioralScorecard.strengths || []).map((s: string, idx: number) => (
                        <li key={idx}>{s}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-rose-950/30 border border-rose-800/40 p-3 rounded-xl">
                    <div className="font-bold text-rose-400 mb-1">Areas for Improvement</div>
                    <ul className="list-disc pl-4 space-y-1 text-slate-300">
                      {(behavioralScorecard.areasForImprovement || []).map((a: string, idx: number) => (
                        <li key={idx}>{a}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-[#181C24] p-3 rounded-xl border border-white/10 text-xs text-slate-300">
                  <strong className="text-white">Bar Raiser Summary: </strong>
                  {behavioralScorecard.barRaiserDebriefNote}
                </div>
              </div>
            ) : (
              <>
                {isRound1 && (
                  <div>
                    {(() => {
  const isTask1 = currentQuestionIndex === 0;
  const currentScore = isTask1 ? taskScores[0] : (taskScores[0] + taskScores[1]);
  const maxScore = isTask1 ? 50 : 100;
  const percentage = Math.round((currentScore / maxScore) * 100);
  const isPassed = percentage >= 70;
  const isBorderline = percentage >= 40 && percentage < 70;

  const statusColor = isPassed ? "text-emerald-400" : isBorderline ? "text-amber-400" : "text-rose-400";
  const statusText = isPassed ? "Verified" : isBorderline ? "Borderline" : "Failed";
  const slaText = isPassed ? "Optimal" : isBorderline ? "Suboptimal" : "Unmet";

  return (
    <div>
      <span className={"text-xs font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full border " + (isPassed ? "text-emerald-400 bg-emerald-950/70 border-emerald-800" : isBorderline ? "text-amber-400 bg-amber-950/70 border-amber-800" : "text-rose-400 bg-rose-950/70 border-rose-800")}>
        {isTask1 ? "TASK 01 EVALUATION COMPLETE" : isRound2 ? "ROUND 02 TECHNICAL VIVA COMPLETE" : isRound1 ? "ROUND 01 EVALUATION COMPLETE" : "EVALUATION COMPLETE"}
      </span>
      <h2 className="text-2xl font-black text-white mt-3">
        {isTask1
          ? (isPassed ? "Task 1 Verification Passed" : "Task 1 Tests Incomplete")
          : (isPassed ? ((companyData && companyData.companyName) || "Amazon") + " Algorithmic Screen Passed" : ((companyData && companyData.companyName) || "Amazon") + " Algorithmic Screen Incomplete")}
      </h2>
      <p className="text-xs text-slate-300 mt-1.5 font-medium">
        {isPassed
          ? "Automated HackerRank OA test vectors and complexity bounds verified."
          : "Some test cases failed or were skipped during evaluation."}
      </p>
      <div className="grid grid-cols-3 gap-3 p-4 mt-4 rounded-xl bg-slate-900/90 border border-slate-700 text-left font-mono">
        <div className="p-2">
          <div className="text-[10px] text-slate-400 uppercase font-bold">Total Score</div>
          <div className={"text-lg font-black mt-0.5 " + statusColor}>
            {currentScore} / {maxScore}
          </div>
        </div>
        <div className="p-2 border-x border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase font-bold">OA Status</div>
          <div className={"text-lg font-black mt-0.5 " + statusColor}>
            {statusText}
          </div>
        </div>
        <div className="p-2">
          <div className="text-[10px] text-slate-400 uppercase font-bold">Runtime SLA</div>
          <div className={"text-lg font-black mt-0.5 " + (isPassed ? "text-amber-400" : "text-slate-400")}>
            {slaText}
          </div>
        </div>
      </div>
    </div>
  );
})()}
                  </div>
                )}
              </>
            )}

            <div className="pt-2">
              {(isRound1 || isRound2 || isRound4) && currentQuestionIndex === 0 ? (
                <button
                  onClick={() => {
                    setAllSetHistory(prev => [...prev, ...dialogue]);

                    const prefixMap: Record<string, string> = {
                      sde_intern: "intern",
                      sde_1: "sde1",
                      sde_2: "sde2",
                      sde_3: "sde3",
                      principal: "principal"
                    };
                    const prefix = prefixMap[selectedRole] || "sde1";
                    let q2Id = "";
                    if (isRound4) {
                      q2Id = "amz-" + prefix + "-r4-s" + (selectedSetId || 1) + "-q2";
                      if (typeof AMAZON_TRACKS !== "undefined") {
                        const track = (AMAZON_TRACKS as any)[selectedRole];
                        const r4 = track?.rounds?.find((r: any) => r.roundId === "round-4");
                        const s = r4?.sets?.find((s: any) => s.setId === selectedSetId);
                        if (s?.problemIds && s.problemIds[1]) {
                          q2Id = s.problemIds[1];
                        }
                      }
                    } else {
                      q2Id = "amz-" + prefix + "-s" + (selectedSetId || 1) + "-q2";
                    }

                    setCurrentProblemId(q2Id);
                    setCurrentQuestionIndex(1);
                    if (!isRound4) resetGate();
                    setShowCompletionScorecard(false);
                    setQuestionCompleted(false);
                    setIsSetFinished(false);

                    const nextProb = typeof getProblemById === "function" ? getProblemById(q2Id) : null;
                    const nextTitle = nextProb?.title || "Task 2 of Set " + selectedSetId;

                    setDialogue([{
                      id: Math.random().toString(36).substring(2, 9),
                      sender: "ai",
                      text: isRound4
        ? "Thank you. Let's move to our second Leadership Principle scenario: " + nextTitle + ". Walk me through a situation where you faced this challenge, focusing on your individual ownership and the end result."
        : "Hello! We are now on Question 2: " + nextTitle + ". Before writing any code, walk me through your planned algorithm, data structures, and expected time and space complexity.",
                      time: "Just now"
                    }]);
                  }}
                  className="w-full py-4 rounded-xl text-base font-black text-white bg-emerald-600 hover:bg-emerald-500 shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all sticky bottom-0 z-10"
                >
                  <span>Proceed to Question 2 of Set →</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  onClick={handleReturnToPipeline}
                  className="w-full py-4 rounded-xl text-sm font-black text-white bg-primary hover:bg-primary-hover shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <span>{isRound1 ? "Return to Pipeline (Unlock Round 02 Viva)" : isRound2 ? "Return to Pipeline (Unlock Round 03 System Design)" : isRound3 ? "Return to Pipeline (Unlock Round 04 Bar Raiser)" : isRound4 ? "Return to Pipeline (View Final Hiring Decision)" : "Return to Pipeline (View Final Decision)"}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}