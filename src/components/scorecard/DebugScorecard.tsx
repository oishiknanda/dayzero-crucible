"use client";

import { CheckCircle2, Clock3, RotateCcw, XCircle } from "lucide-react";
import type { DebuggingScenario } from "@/data/problems/debuggingProblems";

export default function DebugScorecard({ scenario, results, elapsedSeconds, diagnosis, aiTurns, onReturn }: {
  scenario: DebuggingScenario; results: boolean[]; elapsedSeconds: number; diagnosis: string; aiTurns: number; onReturn: () => void;
}) {
  const passed = results.filter(Boolean).length;
  const passRate = results.length ? Math.round((passed / results.length) * 100) : 0;
  const diagnosisTerms = new Set(diagnosis.toLowerCase().match(/[a-z0-9-]{4,}/g) || []);
  const relevantTerms = Array.from(new Set((scenario.bugReport.toLowerCase().match(/[a-z0-9-]{4,}/g) || []).filter((term) => !["when", "where", "that", "this", "with", "from", "into", "they", "their", "after", "before", "under", "currently", "intermittently"].includes(term))));
  const causeScore = relevantTerms.length && diagnosis.trim()
    ? Math.round((relevantTerms.filter((term) => diagnosisTerms.has(term)).length / relevantTerms.length) * 100)
    : 0;
  const integrity = passRate;
  const aiLeverage = Math.min(100, 55 + aiTurns * 8 + (passRate === 100 ? 15 : 0));
  const overall = Math.round(causeScore * 0.3 + integrity * 0.5 + aiLeverage * 0.2);
  const verdict = overall >= 85 ? "Strong Hire" : overall >= 70 ? "Hire" : overall >= 55 ? "Lean Hire" : "No Hire";
  const minutes = Math.floor(elapsedSeconds / 60);
  const seconds = elapsedSeconds % 60;

  return <div className="fixed inset-0 z-[80] flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm">
    <section className="my-auto w-full max-w-2xl rounded-2xl border border-slate-700 bg-[#1F1F1F] p-5 text-slate-100 shadow-2xl sm:p-7">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-400">{scenario.company} · Debugging Round</p>
      <h2 className="mt-2 text-2xl font-black">Code Comprehension Scorecard</h2>
      <p className="mt-1 text-sm text-slate-400">{scenario.title}</p>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[["Root cause", `${causeScore}%`], ["Regression suite", `${passed}/${results.length}`], ["AI leverage", `${aiLeverage}%`], ["Resolution", `${minutes}:${String(seconds).padStart(2, "0")}`]].map(([label, value]) => <div key={label} className="rounded-xl border border-slate-700 bg-slate-900 p-3"><p className="text-[10px] font-bold uppercase text-slate-500">{label}</p><p className="mt-1 text-lg font-black text-amber-300">{value}</p></div>)}
      </div>
      <div className="mt-4 flex items-center justify-between rounded-xl border border-slate-700 bg-slate-900 p-4"><span className="text-sm font-bold text-slate-300">Interviewer verdict</span><span className={`rounded-full px-3 py-1 text-sm font-black ${overall >= 70 ? "bg-emerald-950 text-emerald-300" : "bg-rose-950 text-rose-300"}`}>{verdict} · {overall}%</span></div>
      <div className="mt-4 space-y-2 rounded-xl border border-slate-800 bg-[#171717] p-4 text-sm">
        <p className="font-bold">Review notes</p>
        <p className="text-slate-400">{causeScore >= 60 ? "Your written diagnosis gave the interviewer useful evidence of root-cause reasoning." : "Make the diagnosis more specific: name the broken invariant, triggering sequence, and observed impact."}</p>
        <p className="flex items-center gap-2 text-slate-300">{passRate === 100 ? <CheckCircle2 className="h-4 w-4 text-emerald-400" /> : <XCircle className="h-4 w-4 text-rose-400" />}{passRate === 100 ? "All regression checks passed." : `${results.length - passed} regression checks still fail; inspect edge cases before merging.`}</p>
        <p className="flex items-center gap-2 text-slate-400"><Clock3 className="h-4 w-4" />AI partner used for {aiTurns} candidate prompt{aiTurns === 1 ? "" : "s"}; verify suggestions against tests.</p>
      </div>
      <button onClick={onReturn} className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 font-black text-white hover:bg-indigo-500"><RotateCcw className="h-4 w-4" /> Return to pipeline</button>
    </section>
  </div>;
}
