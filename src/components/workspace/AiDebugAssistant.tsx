"use client";

import { useState } from "react";
import { Bot, ChevronDown, ChevronUp, Loader2, Send } from "lucide-react";

export interface DebugMessage { role: "assistant" | "candidate"; text: string; }

export default function AiDebugAssistant({
  problemId, currentCode, selectedSnippet, testFailures, history, onHistoryChange, disabled = false,
}: {
  problemId: string; currentCode: string; selectedSnippet: string; testFailures: string[];
  history: DebugMessage[]; onHistoryChange: (history: DebugMessage[]) => void; disabled?: boolean;
}) {
  const [open, setOpen] = useState(true);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const ask = async (suggestedQuestion?: string) => {
    const question = (suggestedQuestion || prompt).trim();
    if (!question || loading || disabled) return;
    if (!suggestedQuestion) setPrompt("");
    const updated = [...history, { role: "candidate" as const, text: question }];
    onHistoryChange(updated);
    setLoading(true);
    try {
      const response = await fetch("/api/crucible/debug-assistant", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ problemId, currentCode, userPrompt: question, selectedSnippet, testFailures, history: updated }),
      });
      const data = await response.json();
      onHistoryChange([...updated, { role: "assistant", text: data.reply || data.error || "I could not generate a response. Try a more specific question." }]);
    } catch {
      onHistoryChange([...updated, { role: "assistant", text: "The assistant is temporarily unavailable. Continue by tracing the failing state transition and rerunning a focused check." }]);
    } finally { setLoading(false); }
  };

  return (
    <aside className="flex min-h-0 flex-col rounded-xl border border-slate-700 bg-slate-900/90">
      <button type="button" onClick={() => setOpen(!open)} className="flex items-center justify-between border-b border-slate-800 px-4 py-3 text-left">
        <span className="flex items-center gap-2 text-sm font-bold text-slate-100"><Bot className="h-4 w-4 text-amber-400" /> AI Debug Partner</span>
        {open ? <ChevronDown className="h-4 w-4 text-slate-400" /> : <ChevronUp className="h-4 w-4 text-slate-400" />}
      </button>
      {open && <>
        <div className="flex flex-wrap gap-1.5 border-b border-slate-800 p-2">
          <button type="button" disabled={disabled || loading || !selectedSnippet} onClick={() => void ask("Explain the selected code path and identify what invariant it should preserve. Ask me for my hypothesis before giving a patch.")} className="rounded border border-slate-700 px-2 py-1 text-[10px] font-bold text-slate-300 disabled:opacity-40">Explain selected code</button>
          <button type="button" disabled={disabled || loading || !testFailures.length} onClick={() => void ask("Inspect the failing regression checks. What is one likely root-cause hypothesis and what focused experiment should I run to verify it?")} className="rounded border border-slate-700 px-2 py-1 text-[10px] font-bold text-slate-300 disabled:opacity-40">Inspect test failures</button>
          <button type="button" disabled={disabled || loading} onClick={() => void ask("Review my current patch for regressions. Point to one risky state transition or missing edge case and explain how I can test it.")} className="rounded border border-slate-700 px-2 py-1 text-[10px] font-bold text-slate-300 disabled:opacity-40">Review my patch</button>
        </div>
        <div className="min-h-40 flex-1 space-y-3 overflow-y-auto p-3 text-xs">
          {history.length === 0 && <p className="rounded-lg border border-indigo-500/20 bg-indigo-500/10 p-3 leading-relaxed text-slate-300">I’ll help you reason through the defect. Share your hypothesis and the evidence you see before asking for a patch.</p>}
          {history.map((message, index) => <div key={index} className={`rounded-lg p-3 leading-relaxed ${message.role === "assistant" ? "bg-slate-800 text-slate-200" : "ml-4 bg-indigo-950/70 text-indigo-100"}`}><span className="mb-1 block text-[10px] font-bold uppercase tracking-wide text-slate-400">{message.role === "assistant" ? "Pair programmer" : "You"}</span>{message.text}</div>)}
          {loading && <Loader2 className="h-4 w-4 animate-spin text-amber-400" />}
        </div>
        <div className="border-t border-slate-800 p-3">
          <textarea value={prompt} onChange={(event) => setPrompt(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); void ask(); } }} disabled={disabled || loading} rows={3} placeholder={selectedSnippet ? "Ask about your selected code…" : "State your hypothesis or ask for a focused hint…"} className="w-full resize-none rounded-lg border border-slate-700 bg-[#1F1F1F] p-2.5 text-xs text-slate-100 outline-none placeholder:text-slate-500 focus:border-amber-500" />
          <button type="button" onClick={() => void ask()} disabled={disabled || loading || !prompt.trim()} className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-amber-500 px-3 py-2 text-xs font-black text-slate-950 disabled:opacity-50"><Send className="h-3.5 w-3.5" /> Ask debugging partner</button>
        </div>
      </>}
    </aside>
  );
}
