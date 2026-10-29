import React from "react";
import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { CompanyMarquee } from "@/components/landing/CompanyMarquee";
import { FeatureCards } from "@/components/landing/FeatureCards";
import { TrackPreview } from "@/components/landing/TrackPreview";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-slate-950 flex flex-col selection:bg-primary selection:text-white">
      <Navbar />
      <HeroSection />
      <CompanyMarquee />
      <FeatureCards />
      <TrackPreview />

      {/* Enterprise SaaS Footer */}
      <footer className="py-14 border-t-2 border-slate-300 bg-white text-xs text-slate-600">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <span className="font-black text-slate-950 tracking-tight text-base font-sans">
              DAY-ZERO<span className="text-primary">.AI</span>
            </span>
            <span className="text-slate-400">|</span>
            <span className="font-semibold text-slate-700">Autonomous Placement Readiness Infrastructure</span>
          </div>

          <div className="flex flex-wrap items-center gap-7 font-bold text-slate-800">
            <a href="#pipeline" className="hover:text-primary transition-colors">Pipeline</a>
            <a href="#tracks" className="hover:text-primary transition-colors">50+ Tracks</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
            <span className="hover:text-primary cursor-pointer transition-colors">Proctoring Terms</span>
            <span className="hover:text-primary cursor-pointer transition-colors">Institutional Access</span>
          </div>

          <p className="text-slate-500 font-medium">
            © 2026 DAY-ZERO.AI. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
