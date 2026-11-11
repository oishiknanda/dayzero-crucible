"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Terminal } from "lucide-react";
import { AtsResumeScanner } from "@/components/AtsResumeScanner";

export default function ResumeScorePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans select-none">
      {/* Header Bar */}
      <header className="h-16 border-b border-slate-800 bg-slate-900/90 px-6 sm:px-10 flex items-center justify-between shrink-0">
        <Link href="/" className="flex items-center gap-2.5 text-sm font-semibold text-slate-400 hover:text-white transition">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-white">
            <Terminal className="h-4 w-4" />
          </div>
          <span className="font-bold tracking-tight text-white font-mono text-sm">DAY-ZERO.AI</span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-4xl space-y-6">
          <AtsResumeScanner />
        </div>
      </main>
    </div>
  );
}
