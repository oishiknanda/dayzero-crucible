import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Terminal, ShieldAlert, AlertCircle, CheckCircle2, MessageSquare } from "lucide-react";

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

  return (
    <section className="relative overflow-hidden pt-14 pb-20 border-b border-slate-200 bg-white">
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

          <p className="mt-6 text-base sm:text-lg text-slate-700 max-w-xl font-normal leading-relaxed">
            The flight simulator built to rehearse every round of top tech hiring loops, from timed algorithmic OAs and hidden test suites to high-pressure architecture and Bar Raiser screens.
          </p>

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

          <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <Link href="/login?next=/hub">
              <Button size="lg" className="w-full sm:w-auto px-8 py-6 gap-2 shadow-sm text-base font-semibold bg-primary hover:bg-primary-hover text-white">
                Start placement simulation <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <a href="/login?next=/tracks">
              <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 py-6 text-base font-semibold border border-slate-300 bg-white hover:bg-slate-50 text-slate-950">
                Explore 50+ company tracks
              </Button>
            </a>
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
