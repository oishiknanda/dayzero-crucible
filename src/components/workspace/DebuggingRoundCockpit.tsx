"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowLeft, Camera, CheckCircle2, Clock3, Code2, Expand, Play, ShieldAlert, Sparkles } from "lucide-react";
import { DEBUGGING_SCENARIOS, type DebuggingScenario } from "@/data/problems/debuggingProblems";
import type { ProctoringWarning } from "@/components/crucible/ProctoringCameraTile";
import ProctoringCameraTile from "@/components/crucible/ProctoringCameraTile";
import AiDebugAssistant, { type DebugMessage } from "@/components/workspace/AiDebugAssistant";
import DebugScorecard from "@/components/scorecard/DebugScorecard";

const Editor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

async function runScenarioChecks(scenario: DebuggingScenario, code: string): Promise<boolean[]> {
  const sandboxModule = { exports: {} as Record<string, unknown> };
  try {
    new Function("module", "exports", `${code}\n//# sourceURL=dayzero-debug-candidate.js`)(sandboxModule, sandboxModule.exports);
  } catch { return scenario.testCases.map(() => false); }
  // The scenario modules are dynamic JavaScript authored in the in-browser editor.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const api = sandboxModule.exports as Record<string, (...args: any[]) => any>;
  const result: boolean[] = [];
  const timeout = (promise: Promise<unknown>, ms = 1200) => Promise.race([promise, new Promise((_, reject) => window.setTimeout(() => reject(new Error("timeout")), ms))]);
  try {
    if (scenario.id === "google-debug-01") {
      const deferred = () => { let resolve!: (value: string[]) => void; const promise = new Promise<string[]>((done) => { resolve = done; }); return { promise, resolve }; };
      for (let index = 0; index < scenario.testCases.length; index++) {
        try {
          if (index === 0) { const value = await api.search(" alpha ", async () => ["alpha"]); result.push(JSON.stringify(value) === '["alpha"]'); }
          else if (index === 1) {
            api.invalidate("race"); const first = deferred(); const second = deferred();
            const oldRequest = api.search("race", () => first.promise); await Promise.resolve();
            const newRequest = api.search("race", () => second.promise); await Promise.resolve(); second.resolve(["new"]); await newRequest; first.resolve(["old"]); await oldRequest;
            result.push(JSON.stringify(await api.search("race", async () => ["network"])) === '["new"]');
          } else if (index === 2) {
            let calls = 0; await api.search("cached", async () => { calls++; return ["ok"]; }); await api.search("cached", async () => { calls++; return ["miss"]; }); result.push(calls === 1);
          } else if (index === 3) {
            api.invalidate("stale"); const wait = deferred(); const request = api.search("stale", () => wait.promise); await Promise.resolve(); api.invalidate("stale"); wait.resolve(["stale"]); await request; result.push(api.diagnostics().cacheEntries === 0);
          } else if (index === 4) {
            let published = false; const wait = deferred(); const controller = api.createSearchController(() => { published = true; }); controller.query("dispose", () => wait.promise); await new Promise((resolve) => window.setTimeout(resolve, 180)); controller.dispose(); wait.resolve(["done"]); await new Promise((resolve) => window.setTimeout(resolve, 0)); result.push(!published);
          } else { await api.search("cleanup", async () => []); result.push(api.diagnostics().pending === 0); }
        } catch { result.push(false); }
      }
    } else if (scenario.id === "google-debug-02") {
      for (let index = 0; index < 6; index++) {
        api.reset();
        try {
          if (index === 0) { result.push(Array.from({ length: 5 }, (_, i) => api.takeToken("a", 1000 + i)).every(Boolean)); }
          else if (index === 1) { for (let i = 0; i < 5; i++) api.takeToken("a", 1000); result.push(api.takeToken("a", 1000) === false); }
          else if (index === 2) { for (let i = 0; i < 5; i++) api.takeToken("a", 1000); api.takeToken("a", 1250); result.push(api.takeToken("a", 1500) === true); }
          else if (index === 3) { for (let i = 0; i < 5; i++) api.takeToken("a", 1000); api.takeToken("a", 100000); result.push(api.snapshot("a").tokens <= 5); }
          else if (index === 4) { for (let i = 0; i < 5; i++) api.takeToken("a", 1000); api.takeToken("a", 1250); result.push(api.retryAfterMs("a", 1250) === 250); }
          else { const maxTimestamp = (api as unknown as { MAX_TIMESTAMP: number }).MAX_TIMESTAMP; api.takeToken("a", maxTimestamp - 1000); result.push(api.takeToken("a", maxTimestamp + 1000) === true && api.snapshot("a").tokens <= 5); }
        } catch { result.push(false); }
      }
    } else if (scenario.id === "amazon-debug-01") {
      for (let index = 0; index < 6; index++) {
        api.reset();
        try {
          if (index === 0) { let ran = false; await api.reserve(["A"], "one", () => { ran = true; }); result.push(ran && api.snapshot().held === 0); }
          else if (index === 1) {
            let completed = 0; await timeout(Promise.all([api.reserve(["A", "B"], "one", async () => { completed++; }), api.reserve(["B", "A"], "two", async () => { completed++; })])); result.push(completed === 2);
          } else if (index === 2) { await timeout(api.reserve(["A", "A"], "one", async () => undefined)); result.push(api.snapshot().held === 0); }
          else if (index === 3) { try { await api.reserve(["A", "B"], "one", () => { throw new Error("failure"); }); } catch {} result.push(api.snapshot().held === 0); }
          else if (index === 4) { await timeout(Promise.all([api.reserve(["A"], "one", async () => undefined), api.reserve(["A"], "two", async () => undefined)])); result.push(api.snapshot().held === 0 && api.snapshot().queued === 0); }
          else { const ownerCheck = await api.reserve(["A"], "one", async () => { try { api.release("A", "two"); return false; } catch { return true; } }); result.push(ownerCheck === true); }
        } catch { result.push(false); }
      }
    } else {
      for (let index = 0; index < 6; index++) {
        api.reset();
        try {
          if (index === 0) { api.createOrder("o"); await api.handlePayment({ id: "e1", orderId: "o", amount: 10 }, async () => "p1"); result.push(api.snapshot("o").order.state === "PAID"); }
          else if (index === 1) { api.createOrder("o"); let charges = 0; const charge = async () => `p${++charges}`; await api.handlePayment({ id: "e1", orderId: "o", amount: 10 }, charge); await api.handlePayment({ id: "e1", orderId: "o", amount: 10 }, charge); result.push(charges === 1); }
          else if (index === 2) { api.createOrder("o"); let charges = 0; const charge = async () => `p${++charges}`; await api.handlePayment({ id: "e1", orderId: "o", amount: 10 }, charge); await api.handlePayment({ id: "e2", orderId: "o", amount: 10 }, charge); result.push(charges === 2); }
          else if (index === 3) { api.createOrder("o"); api.cancel("o"); await api.handlePayment({ id: "e1", orderId: "o", amount: 10 }, async () => "p1"); result.push(api.snapshot("o").order.state === "CANCELLED"); }
          else if (index === 4) { api.createOrder("o"); await api.handlePayment({ id: "e1", orderId: "o", amount: 10 }, async () => "p1"); result.push(api.cancel("o") === false); }
          else { api.createOrder("o"); let charges = 0; const charge = async () => { charges++; await Promise.resolve(); return "p"; }; await Promise.all([api.handlePayment({ id: "e1", orderId: "o", amount: 10 }, charge), api.handlePayment({ id: "e1", orderId: "o", amount: 10 }, charge)]); result.push(charges === 1); }
        } catch { result.push(false); }
      }
    }
  } catch { return scenario.testCases.map(() => false); }
  return scenario.testCases.map((_, index) => result[index] === true);
}

function runChecks(scenario: DebuggingScenario, code: string): Promise<boolean[]> {
  return new Promise((resolve) => {
    const frame = document.createElement("iframe");
    frame.setAttribute("sandbox", "allow-scripts");
    frame.setAttribute("aria-hidden", "true");
    frame.style.cssText = "position:fixed;width:1px;height:1px;left:-10px;top:-10px;border:0;opacity:0;pointer-events:none";
    const nonce = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    let timeoutId = 0;
    const finish = (results: boolean[]) => {
      window.clearTimeout(timeoutId);
      window.removeEventListener("message", onMessage);
      frame.remove();
      resolve(results);
    };
    const onMessage = (event: MessageEvent) => {
      if (event.source !== frame.contentWindow || event.data?.nonce !== nonce || event.data?.type !== "debug-test-results") return;
      finish(Array.isArray(event.data.results) ? scenario.testCases.map((_, index) => event.data.results[index] === true) : scenario.testCases.map(() => false));
    };
    window.addEventListener("message", onMessage);
    timeoutId = window.setTimeout(() => finish(scenario.testCases.map(() => false)), 10_000);
    frame.srcdoc = `<!doctype html><meta charset="utf-8"><script>
      window.addEventListener("message", async function(event) {
        if (!event.data || event.data.type !== "run-debug-tests") return;
        try {
          const runner = new Function("return (" + event.data.runner + ")")();
          const results = await runner(event.data.scenario, event.data.code);
          parent.postMessage({ type: "debug-test-results", nonce: event.data.nonce, results: results }, "*");
        } catch (_) {
          parent.postMessage({ type: "debug-test-results", nonce: event.data.nonce, results: [] }, "*");
        }
      });
    <\/script>`;
    frame.addEventListener("load", () => {
      frame.contentWindow?.postMessage({ type: "run-debug-tests", nonce, scenario, code, runner: runScenarioChecks.toString() }, "*");
    }, { once: true });
    document.body.appendChild(frame);
  });
}

export default function DebuggingRoundCockpit({
  scenario: initialScenario, companyName, roleTitle, strict, stream, warnings, warningCount, warningLimit, failed, locked, timeLeftSeconds, onWarning,
}: {
  scenario: DebuggingScenario; companyName: string; roleTitle: string; strict: boolean; stream: MediaStream | null;
  warnings: ProctoringWarning[]; warningCount: number; warningLimit: number; failed: boolean; locked: boolean;
  timeLeftSeconds: number; onWarning: (code: string, message: string) => void;
}) {
  const [scenario, setScenario] = useState(initialScenario);
  const [code, setCode] = useState(scenario.starterCode);
  const [selectedSnippet, setSelectedSnippet] = useState("");
  const [history, setHistory] = useState<DebugMessage[]>([]);
  const [diagnosis, setDiagnosis] = useState("");
  const [results, setResults] = useState<boolean[] | null>(null);
  const [running, setRunning] = useState(false);
  const [showScorecard, setShowScorecard] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const startedAt = useRef(Date.now());
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const failures = useMemo(() => results?.flatMap((passed, index) => {
    if (passed) return [];
    const testCase = scenario.testCases[index];
    return [`${testCase.id}: ${testCase.isHidden ? "Hidden regression check failed." : testCase.explanation}`];
  }) || [], [results, scenario.testCases]);

  useEffect(() => { const timer = window.setInterval(() => setElapsedSeconds(Math.floor((Date.now() - startedAt.current) / 1000)), 1000); return () => window.clearInterval(timer); }, []);
  useEffect(() => {
    const updateFullscreen = () => setIsFullscreen(Boolean(document.fullscreenElement));
    updateFullscreen();
    document.addEventListener("fullscreenchange", updateFullscreen);
    return () => document.removeEventListener("fullscreenchange", updateFullscreen);
  }, []);
  useEffect(() => { if (locked || failed) setShowScorecard(true); }, [locked, failed]);

  const run = async () => { setRunning(true); setResults(await runChecks(scenario, code)); setRunning(false); };
  const submit = () => setShowScorecard(true);
  const toggleFullscreen = () => {
    if (document.fullscreenElement) void document.exitFullscreen().catch(() => undefined);
    else void document.documentElement.requestFullscreen?.().catch(() => onWarning("fullscreen-error", "Fullscreen could not start."));
  };

  const selectScenario = (id: string) => {
    const next = DEBUGGING_SCENARIOS[id];
    if (!next || next.company !== scenario.company) return;
    setScenario(next); setCode(next.starterCode); setResults(null); setDiagnosis(""); setHistory([]); setSelectedSnippet("");
  };

  return <main className="flex h-screen min-h-[650px] flex-col overflow-hidden bg-[#1A1A1A] text-slate-200">
    <header className="flex min-h-14 items-center justify-between gap-3 border-b border-black/50 bg-[#262626] px-4">
      <div className="flex min-w-0 items-center gap-3"><Link href={`/tracks/${scenario.company.toLowerCase()}`} aria-label="Return to company pipeline"><ArrowLeft className="h-4 w-4 text-slate-400" /></Link><span className="truncate text-xs font-black uppercase tracking-wide text-amber-400">{companyName} · {roleTitle}</span><span className="hidden rounded border border-indigo-500/30 bg-indigo-950/50 px-2 py-1 text-[10px] font-bold text-indigo-200 sm:inline">DEBUGGING ROUND</span><select aria-label="Select debugging scenario" value={scenario.id} onChange={(event) => selectScenario(event.target.value)} disabled={locked || failed} className="hidden max-w-[250px] rounded border border-slate-700 bg-slate-900 px-2 py-1 text-[10px] text-slate-200 md:block">{Object.values(DEBUGGING_SCENARIOS).filter((item) => item.company === scenario.company).map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}</select></div>
      <div className="flex shrink-0 items-center gap-3"><span className="flex items-center gap-1.5 font-mono text-xs font-bold text-amber-300"><Clock3 className="h-3.5 w-3.5" />{Math.floor(timeLeftSeconds / 60)}:{String(timeLeftSeconds % 60).padStart(2, "0")}</span><button onClick={toggleFullscreen} className="rounded border border-slate-700 p-2 text-slate-300 hover:border-amber-500"><Expand className="h-4 w-4" /></button>{strict && <span className="hidden items-center gap-1 text-[10px] font-black text-rose-300 sm:flex"><Camera className="h-3.5 w-3.5" /> STRICT</span>}</div>
    </header>
    {strict && warnings.length > 0 && <div role="alert" aria-live="assertive" className="fixed left-1/2 top-16 z-40 w-[min(92vw,38rem)] -translate-x-1/2 rounded-xl border border-amber-500/50 bg-amber-950/95 px-4 py-3 text-left shadow-2xl backdrop-blur-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[10px] font-black uppercase tracking-widest text-amber-300">Proctoring warning · {warningCount} recorded</p>
          <p className="mt-1 text-xs font-semibold leading-relaxed text-amber-100">{warnings[warnings.length - 1]?.message}</p>
          <p className="mt-1 text-[10px] text-amber-200/70">{warnings[warnings.length - 1]?.at}</p>
        </div>
        {!isFullscreen && <button type="button" onClick={toggleFullscreen} className="shrink-0 rounded-lg bg-amber-500 px-2.5 py-2 text-[10px] font-black text-slate-950 hover:bg-amber-400">Re-enter fullscreen</button>}
      </div>
    </div>}
    {strict && <div className="flex items-center justify-between gap-3 border-b border-slate-800 bg-slate-950/80 px-4 py-2 text-[11px]"><span className="text-slate-300">Proctor warnings: <b className={warningCount >= warningLimit - 1 ? "text-rose-300" : "text-amber-300"}>{warningCount}/{warningLimit}</b>{failed && <span className="ml-2 font-bold text-rose-300">Assessment ended: proctoring limit reached.</span>}</span><span className="hidden truncate text-slate-500 sm:inline">{warnings[warnings.length - 1]?.message || "Camera and microphone monitoring active"}</span></div>}
    <div className="grid min-h-0 flex-1 grid-cols-1 gap-3 overflow-y-auto p-3 lg:grid-cols-[minmax(0,1.6fr)_minmax(320px,0.8fr)] lg:overflow-hidden">
      <section className="flex min-h-[550px] min-w-0 flex-col overflow-hidden rounded-xl border border-slate-800 bg-[#202020] lg:min-h-0">
        <div className="flex items-start justify-between gap-3 border-b border-slate-800 p-4"><div><p className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-400">{scenario.company} · Service Incident</p><h1 className="mt-1 text-lg font-black text-white">{scenario.title}</h1><p className="mt-2 text-xs leading-relaxed text-slate-400">{scenario.bugReport}</p></div><Code2 className="hidden h-5 w-5 shrink-0 text-indigo-300 sm:block" /></div>
        <div className="max-h-36 overflow-y-auto border-b border-slate-800 bg-[#171717] px-4 py-3 text-xs leading-relaxed text-slate-300"><b className="text-indigo-300">Assignment:</b> {scenario.paragraphs[0]} <span className="text-slate-500">{scenario.paragraphs[1]}</span></div>
        <div className="border-b border-slate-800 bg-[#1b1b1b] px-4 py-2 md:hidden"><label className="text-[10px] font-bold uppercase tracking-wide text-slate-500">Scenario<select aria-label="Select debugging scenario" value={scenario.id} onChange={(event) => selectScenario(event.target.value)} disabled={locked || failed} className="ml-2 max-w-[80%] rounded border border-slate-700 bg-slate-900 px-2 py-1 text-[10px] normal-case text-slate-200">{Object.values(DEBUGGING_SCENARIOS).filter((item) => item.company === scenario.company).map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}</select></label></div>
        <div className="min-h-[300px] flex-1 overflow-hidden"><Editor height="100%" language="javascript" theme="vs-dark" value={code} onChange={(value) => { setCode(value || ""); setResults(null); }} onMount={(editor) => editor.onDidChangeCursorSelection(() => { const model = editor.getModel(); const selection = editor.getSelection(); setSelectedSnippet(model && selection && !selection.isEmpty() ? model.getValueInRange(selection) : ""); })} options={{ minimap: { enabled: false }, fontSize: 13, scrollBeyondLastLine: false, automaticLayout: true, readOnly: locked || failed, wordWrap: "on", padding: { top: 12 } }} /></div>
        <div className="grid gap-3 border-t border-slate-800 bg-[#1b1b1b] p-3 sm:grid-cols-[1fr_auto] sm:items-end"><label className="text-[10px] font-bold uppercase tracking-wide text-slate-400">Root-cause diagnosis<textarea value={diagnosis} onChange={(event) => setDiagnosis(event.target.value)} disabled={locked || failed} rows={2} placeholder="What invariant is broken? Describe the trigger and evidence before you patch." className="mt-1 w-full resize-y rounded-lg border border-slate-700 bg-[#111] p-2 text-xs normal-case text-slate-200 outline-none focus:border-amber-500" /></label><div className="flex gap-2"><button disabled={locked || failed || running} onClick={() => void run()} className="flex items-center gap-2 rounded-lg border border-indigo-500/50 px-4 py-2.5 text-xs font-black text-indigo-200 disabled:opacity-50"><Play className="h-3.5 w-3.5" />{running ? "Checking…" : "Run regression suite"}</button><button disabled={locked || failed || !results || running} onClick={submit} className="rounded-lg bg-amber-500 px-4 py-2.5 text-xs font-black text-slate-950 disabled:opacity-50">Conclude & Score</button></div></div>
        <div className="flex items-center gap-2 border-t border-slate-800 px-4 py-2 text-[11px]">{results ? <><CheckCircle2 className="h-4 w-4 text-emerald-400" /><span className="text-slate-300">{results.filter(Boolean).length}/{results.length} regression checks passed</span>{failures.length > 0 && <span className="text-rose-300">· {failures.length} failing (IDs hidden)</span>}</> : <><Sparkles className="h-4 w-4 text-indigo-300" /><span className="text-slate-500">Run tests after each focused change; hidden checks are included.</span></>}</div>
      </section>
      <div className="flex min-h-[500px] flex-col gap-3 lg:min-h-0">{strict && stream && <div className="relative h-44 shrink-0 overflow-hidden rounded-xl border border-rose-500/20 bg-black"><ProctoringCameraTile stream={stream} onWarning={onWarning} /><span className="absolute bottom-2 left-2 rounded bg-black/70 px-2 py-1 text-[10px] font-bold text-white"><Camera className="mr-1 inline h-3 w-3" />Proctor preview</span></div>}<div className="min-h-[350px] flex-1"><AiDebugAssistant problemId={scenario.id} currentCode={code} selectedSnippet={selectedSnippet} testFailures={failures} history={history} onHistoryChange={setHistory} disabled={locked || failed} /></div><div className="rounded-lg border border-slate-800 bg-slate-900/50 p-3 text-[10px] leading-relaxed text-slate-500"><ShieldAlert className="mr-1 inline h-3.5 w-3.5 text-amber-400" />Treat AI suggestions as hypotheses. Your regression tests and reasoning determine whether a patch is safe.</div></div>
    </div>
    {showScorecard && <DebugScorecard scenario={scenario} results={results || scenario.testCases.map(() => false)} elapsedSeconds={elapsedSeconds} diagnosis={diagnosis} aiTurns={history.filter((message) => message.role === "candidate").length} onReturn={() => { window.location.href = `/tracks/${scenario.company.toLowerCase()}`; }} />}
  </main>;
}
