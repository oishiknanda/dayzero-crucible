import React from "react";
import { Terminal, ShieldAlert, AlertCircle, CheckCircle2, MessageSquare, CircleCheck } from "lucide-react";

export const HeroSection = () => {
  const hotKeywords = [
    "LeetCode-style DSA (company-wise)",
    "Codeforces Div 2/1",
    "Timed OA round crucible",
    "System design (LLD & HLD)",
    "Web development & MERN",
    "Cloud architecture",
    "GPU acceleration & CUDA",
    "Java & C++ concurrency",
    "Python high-throughput",
  ];

  const rounds = [
    { title: "Round 1 · Online assessment", text: "Solve problems against hidden test cases under a timer." },
    { title: "Round 2 · Technical viva", text: "Explain your approach out loud while the AI interviewer questions it." },
    { title: "Round 3 · System design", text: "Design the system, or write the low-level design, and defend your choices in conversation." },
    { title: "Round 4 · Behavioral", text: "Answer with specific stories while the interviewer follows up, Bar Raiser style." },
    { title: "AI-assisted coding round", text: "Work on unfamiliar code with an AI assistant on hand, and practise reading before you edit.", bonus: true },
  ];

  return (
    <section className="relative overflow-hidden pt-8 pb-16 border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-14 items-center">

        {/* Left: message */}
        <div className="text-left">
          <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full bg-white border border-slate-300 text-slate-800 text-[13px] font-medium shadow-sm">
            <ShieldAlert className="h-4 w-4 text-primary shrink-0" />
            <span>Full-cycle interview rehearsal infrastructure</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-950 font-sans leading-[1.1] text-balance">
            The all-in-one, <span className="whitespace-nowrap">end-to-end</span> platform for{" "}
            <span className="text-primary">real tech placements.</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-800 max-w-xl font-medium leading-relaxed">
            The flight simulator built to rehearse every round of top tech hiring loops, from timed algorithmic OAs and hidden test suites to high-pressure architecture and Bar Raiser screens.
          </p>

          <ul className="mt-7 grid gap-3.5 max-w-xl">
            {rounds.map((item) => (
              <li key={item.title} className="grid grid-cols-[24px_minmax(0,1fr)] gap-3">
                <CircleCheck className="h-[22px] w-[22px] text-primary mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-[15.5px] font-bold text-slate-900">
                    {item.title}
                    {item.bonus && <span className="ml-2 align-[2px] rounded-full bg-primary-light px-2 py-0.5 text-[11px] font-semibold text-primary">Bonus</span>}
                  </p>
                  <p className="text-[15px] font-medium leading-relaxed text-slate-700">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-2">
            {hotKeywords.map((item, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-md border border-slate-300 bg-white text-slate-800 text-[13px] font-medium cursor-default"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-9 space-y-1.5 max-w-xl">
            <p className="text-base font-semibold text-slate-900">Every round is timed and ends with a scorecard.</p>
            <p className="text-base font-medium text-slate-700">Pick a company from the 50+ tech tracks menu above to begin.</p>
          </div>
        </div>

        {/* Right: live interview snapshot (unchanged content and colours) */}
        <div className="min-w-0">
        {/* Technical Proctor & Viva Simulator Card */}
        <div className="w-full rounded-xl border border-slate-300 bg-white shadow-lg overflow-hidden text-left">
          {/* Header Bar */}
          <div className="bg-[#0F172A] px-6 py-4 flex items-center justify-between border-b-2 border-slate-800">
            <span className="hidden sm:block w-10" aria-hidden="true" />
            <div className="text-xs sm:text-sm font-mono font-bold text-slate-200 flex items-center gap-2">
              <Terminal className="h-4 w-4 text-primary-light" />
              <span>crucible_evaluator · Round 01: DSA & Complex Systems</span>
            </div>
            <div className="text-xs font-mono font-bold text-rose-400 flex items-center gap-2 bg-rose-950/80 px-3 py-1 rounded-md border border-rose-700">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              PROCTOR ACTIVE
            </div>
          </div>

          {/* Test Case & Problem Banner */}
          <div className="p-7 bg-[#F8FAFC] border-b border-slate-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b-2 border-slate-200">
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="px-2.5 py-1 rounded-md bg-rose-100 text-rose-900 text-xs font-mono font-extrabold border-2 border-rose-300">HARD</span>
                  <h4 className="text-lg font-black text-slate-950 font-sans tracking-tight">Problem #654: Maximum Subarray Segment Tree Query</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 font-mono font-semibold mt-1.5">Constraint: N ≤ 2×10⁵, Queries ≤ 10⁵, Time Limit: 2.0s</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-mono font-bold text-emerald-900 bg-emerald-100 px-3 py-1.5 rounded-lg border-2 border-emerald-300">
                  <CheckCircle2 className="h-4 w-4 text-emerald-700" />
                  15 Passed
                </div>
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-mono font-bold text-rose-900 bg-rose-100 px-3 py-1.5 rounded-lg border-2 border-rose-300">
                  <AlertCircle className="h-4 w-4 text-rose-700" />
                  5 Failed (TLE)
                </div>
              </div>
            </div>

            {/* Back-to-Back Spaced AI Cross-Examination Prompts */}
            <div className="mt-6 space-y-3.5">
              <div className="text-xs font-mono font-black text-slate-700 uppercase tracking-wider flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-primary" />
                Live Interviewer Voice Interrupts
              </div>

              {/* Prompt 1 */}
              <div className="p-4 rounded-xl bg-white border-2 border-slate-300 shadow-sm flex items-start gap-3.5 hover:border-slate-500 transition-colors">
                <span className="text-xs font-mono font-black bg-amber-100 text-amber-950 px-2.5 py-1 rounded-md border border-amber-300 shrink-0 mt-0.5">VIVA 01</span>
                <p className="text-xs sm:text-sm text-slate-900 font-semibold leading-relaxed">
                  &ldquo;You are getting TLE on test cases 16–20. Your current push-up logic recomputes prefix sums redundantly. Can you optimize this to <span className="font-mono text-indigo-700 font-extrabold underline decoration-indigo-300">O(log N)</span> per query using tree-node caching?&rdquo;
                </p>
              </div>

              {/* Prompt 2 */}
              <div className="p-4 rounded-xl bg-white border-2 border-slate-300 shadow-sm flex items-start gap-3.5 hover:border-slate-500 transition-colors">
                <span className="text-xs font-mono font-black bg-indigo-100 text-indigo-950 px-2.5 py-1 rounded-md border border-indigo-300 shrink-0 mt-0.5">VIVA 02</span>
                <p className="text-xs sm:text-sm text-slate-900 font-semibold leading-relaxed">
                  &ldquo;Defend your auxiliary space complexity. If memory is restricted to 64MB on the proctored runtime, will your recursive stack cause a segmentation fault on skewed inputs?&rdquo;
                </p>
              </div>

              {/* Prompt 3 */}
              <div className="p-4 rounded-xl bg-white border-2 border-slate-300 shadow-sm flex items-start gap-3.5 hover:border-slate-500 transition-colors">
                <span className="text-xs font-mono font-black bg-emerald-100 text-emerald-950 px-2.5 py-1 rounded-md border border-emerald-300 shrink-0 mt-0.5">VIVA 03</span>
                <p className="text-xs sm:text-sm text-slate-900 font-semibold leading-relaxed">
                  &ldquo;Suppose this query engine serves 10,000 concurrent requests in production. How would you redesign this in memory using read-write locks or lock-free atomics?&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

        </div>

      </div>
    </section>
  );
};
