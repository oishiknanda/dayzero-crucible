import React from "react";
import { Badge } from "@/components/ui/Badge";
import { Zap } from "lucide-react";

export const FeatureCards = () => {
  const features = [
    {
      badgeText: "Strict browser isolation",
      badgeVariant: "purple" as const,
      num: "01.",
      title: "Anti-cheat & full-screen lockdown",
      desc: "Casual practice creates false confidence. DAY-ZERO enforces genuine online assessment constraints: secondary monitor blackouts, tab-switch penalties, clipboard suppression, and automated session forfeiture on threshold violations.",
      highlight: "Eliminates tab-switching habits and conditions candidates under authentic enterprise proctoring."
    },
    {
      badgeText: "Real-time speech synthesis",
      badgeVariant: "purple" as const,
      num: "02.",
      title: "Active AI voice viva interruption",
      desc: "Top companies reject silent coders. As you outline algorithms or type data structures, an aggressive AI evaluator intervenes via audio to challenge your edge cases, force oral Big-O dry runs, and test trade-off decisions.",
      highlight: "Forces engineers to articulate technical tradeoffs verbally under real-time cognitive pressure."
    },
    {
      badgeText: "L4 / L5 code quality standards",
      badgeVariant: "purple" as const,
      num: "03.",
      title: "Clean code & static AST analysis",
      desc: "Passing tests is only table stakes. Our engine inspects your Abstract Syntax Tree to identify memory leaks, unnecessary allocations, poor variable semantics, and missing modular architecture before you submit.",
      highlight: "Ensures code meets enterprise engineering standards, beyond basic competitive programming tricks."
    },
    {
      badgeText: "STAR reasoning framework",
      badgeVariant: "purple" as const,
      num: "04.",
      title: "Bar Raiser behavioral cross-examination",
      desc: "Vague stories get candidates rejected immediately. The behavioral module enforces strict Amazon Leadership Principles and Microsoft Growth Mindset standards, probing timeline specifics and challenging unverified resume claims.",
      highlight: "Deconstructs vague claims to ensure behavioral answers survive senior interviewer skepticism."
    }
  ];

  return (
    <section id="features" className="py-24 border-b border-slate-200 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight font-sans text-balance">
            Why top candidates can&apos;t resist this
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
            Mock quizzes don&apos;t prepare you for live interview tension. DAY-ZERO simulates the genuine cognitive load, proctoring penalties, and spontaneous verbal scrutiny of top tech hiring loops.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-slate-400 transition-colors duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="mb-4">
                  <Badge variant={item.badgeVariant} className="font-sans text-xs normal-case tracking-normal font-medium">{item.badgeText}</Badge>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight mb-3">
                  <span className="text-primary mr-2">{item.num}</span>
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 p-4 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-3">
                <Zap className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-slate-800 font-medium leading-snug">
                  {item.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
