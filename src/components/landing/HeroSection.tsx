import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Terminal, ShieldAlert, AlertCircle, CheckCircle2, MessageSquare } from "lucide-react";

export const HeroSection = () => {
  const hotKeywords = [
    "LEETCODE-STYLE DSA (COMPANY-WISE)",
    "CODEFORCES DIV 2/1",
    "TIMED OA ROUND CRUCIBLE",
    "SYSTEM DESIGN (LLD & HLD)",
    "WEB DEVELOPMENT & MERN",
    "CLOUD ARCHITECTURE",
    "GPU ACCELERATION & CUDA",
    "JAVA & C++ CONCURRENCY",
    "PYTHON HIGH-THROUGHPUT",
  ];

  return (
    <section className="relative overflow-hidden pt-16 pb-24 border-b border-slate-300 bg-[#F1F4F9]">
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        
        {/* Monospace System Pill */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white border border-slate-300 text-slate-900 text-xs font-mono font-bold tracking-wide shadow-sm">
          <ShieldAlert className="h-4 w-4 text-primary shrink-0" />
          <span>FULL-CYCLE INTERVIEW REHEARSAL INFRASTRUCTURE</span>
        </div>

        {/* Option C Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-950 font-sans leading-[1.1] max-w-5xl mx-auto">
          The All-in-One, End-to-End Platform for{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-600 to-sky-600">
            Real Tech Placements.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-7 text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto font-normal leading-relaxed">
          The flight simulator built to rehearse every round of top tech hiring loops—from timed algorithmic OAs and hidden test suites to high-pressure architecture and Bar Raiser screens.
        </p>

        {/* High-Impact Eye-Catching Keyword Badges */}
        <div className="mt-10 flex flex-wrap justify-center gap-3.5 max-w-5xl mx-auto">
          {hotKeywords.map((item, idx) => (
            <span
              key={idx}
              className="px-5 py-3 rounded-xl border-2 border-slate-900 bg-white text-slate-950 text-sm sm:text-base font-mono font-black tracking-wide shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] transition-all cursor-default"
            >
              {item}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/hub">
            <Button size="lg" className="w-full sm:w-auto px-9 py-6 gap-2 shadow-md text-base sm:text-lg font-bold bg-primary hover:bg-primary-hover text-white">
              Start Placement Simulation <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
          <a href="#tracks">
            <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 py-6 text-base sm:text-lg font-bold border-2 border-slate-900 bg-white hover:bg-slate-50 text-slate-950 shadow-sm">
              Explore 50+ Company Tracks
            </Button>
          </a>
        </div>

        {/* Technical Proctor & Viva Simulator Card */}
        <div className="mt-16 max-w-4xl mx-auto rounded-2xl border-2 border-slate-400 bg-white shadow-2xl overflow-hidden text-left">
          {/* Header Bar */}
          <div className="bg-[#0F172A] px-6 py-4 flex items-center justify-between border-b-2 border-slate-800">
            <div className="flex items-center gap-2.5">
              <span className="w-3.5 h-3.5 rounded-full bg-rose-500 inline-block" />
              <span className="w-3.5 h-3.5 rounded-full bg-amber-500 inline-block" />
              <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 inline-block" />
            </div>
            <div className="text-xs sm:text-sm font-mono font-bold text-slate-200 flex items-center gap-2">
              <Terminal className="h-4 w-4 text-primary-light" />
              <span>crucible_evaluator — Round 01: DSA & Complex Systems</span>
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
    </section>
  );
};
