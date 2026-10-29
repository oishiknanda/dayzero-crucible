import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";

export const TrackPreview = () => {
  const steps = [
    {
      num: "01",
      title: "Select Difficulty & Target Loop",
      desc: "Pick your desired technical difficulty level (SDE-1, SDE-2, or Specialist). The platform dynamically seeds past-year company problem sets and evaluation criteria."
    },
    {
      num: "02",
      title: "Undergo Proctor Lockdown",
      desc: "Enter full-screen isolated mode with dual-monitor surveillance, tab monitoring, and live voice evaluation active in the background."
    },
    {
      num: "03",
      title: "Receive Exhaustive Diagnostic",
      desc: "Get an AST code-quality analysis, STAR behavioral breakdown, and a clear Pass/Bar-Raiser decision before you face the real hiring panel."
    }
  ];

  const pricingTiers = [
    {
      title: "Diagnostic Sandbox",
      subtitle: "For independent coders auditing assessment readiness",
      price: "$0",
      period: "/forever",
      badge: null,
      features: [
        "1 full proctored OA simulation loop",
        "Dual-screen & tab switch monitoring",
        "Automated hidden test suite grading",
        "AST code quality & Big-O analyzer",
        "Basic performance score breakdown"
      ],
      buttonText: "Launch Free Sandbox",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      title: "Pro Candidate Pass",
      subtitle: "For engineers actively interviewing at top tech",
      price: "$29",
      period: "/month",
      badge: "MOST POPULAR",
      features: [
        "15 Full Proctored Loops per month",
        "Real-Time AI Voice Viva Interruption",
        "LeetCode Hard & Codeforces Div 2/1 pools",
        "Timed OA code lock & anti-cheat kernel",
        "Detailed memory leak & clean code feedback",
        "Audio transcript with verbal answer critiques"
      ],
      buttonText: "Get Pro Candidate Pass",
      buttonVariant: "primary" as const,
      popular: true
    },
    {
      title: "Full Placement Crucible",
      subtitle: "Uncompromising end-to-end recruitment preparation",
      price: "$69",
      period: "/month",
      badge: "UNLIMITED ACCESS",
      features: [
        "Unlimited Full-Loop Simulations",
        "System Design (LLD & HLD) Voice Grilling",
        "Bar Raiser STAR Behavioral Defense",
        "Full AST architecture audits & refactoring tips",
        "Priority AI voice inference (sub-30ms latency)",
        "Direct exportable candidate readiness scorecard"
      ],
      buttonText: "Unlock Full Crucible",
      buttonVariant: "outline" as const,
      popular: false
    }
  ];

  return (
    <div id="pipeline" className="border-b-2 border-slate-300 bg-white">
      {/* 3-Step Pipeline */}
      <section className="py-24 border-b-2 border-slate-300 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight font-sans">
            Simulation Pipeline in Three Direct Steps
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 max-w-2xl mx-auto font-medium">
            Experience the complete placement loop end-to-end under genuine test conditions.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-slate-50 border-2 border-slate-300 shadow-md text-center flex flex-col items-center hover:border-slate-800 transition-all duration-200"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center font-mono font-black text-xl shadow-md shadow-primary/20 mb-6">
                  {s.num}
                </div>
                <h3 className="text-xl font-black text-slate-950 mb-3">{s.title}</h3>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Generalized SaaS Pricing Matrix */}
      <section id="pricing" className="py-24 bg-[#EAEFF6]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight font-sans">
              Simple, Value-Backed Access
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              Pays for itself the first time you pass an OA and advance to the final interview loop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {pricingTiers.map((t, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl bg-white border-2 p-8 flex flex-col justify-between transition-all duration-200 ${
                  t.popular
                    ? "border-primary shadow-2xl ring-2 ring-primary/30"
                    : "border-slate-300 shadow-md hover:border-slate-800 hover:shadow-xl"
                }`}
              >
                {t.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-white text-[11px] font-mono font-black tracking-wider px-3.5 py-1 rounded-full uppercase shadow-md">
                      {t.badge}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-black text-slate-950">{t.title}</h3>
                  <p className="text-xs text-slate-600 mt-1 min-h-[32px] font-medium">{t.subtitle}</p>

                  <div className="mt-6 pb-6 border-b-2 border-slate-200 flex items-baseline gap-1">
                    <span className="text-5xl font-black text-slate-950 tracking-tight">{t.price}</span>
                    <span className="text-sm font-bold text-slate-500">{t.period}</span>
                  </div>

                  <ul className="mt-6 space-y-3.5">
                    {t.features.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-xs sm:text-[13px] text-slate-800 font-semibold">
                        <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5 stroke-[3]" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <Link href="/hub">
                    <Button
                      variant={t.buttonVariant}
                      size="md"
                      className={`w-full font-black text-sm py-5 ${
                        t.popular ? "bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/25" : "border-2 border-slate-300 hover:border-slate-900 text-slate-950"
                      }`}
                    >
                      {t.buttonText}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
