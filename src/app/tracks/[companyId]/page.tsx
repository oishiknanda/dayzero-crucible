"use client";

import { getTrackCompany } from "@/data/companyTrackRegistry";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/landing/Navbar";
import { Button } from "@/components/ui/Button";
import { getCompanyTrackData } from "@/data/companyTracks";
import { Terminal, PlayCircle, ShieldAlert, Cpu, CheckCircle2, Award, Info, Sparkles } from "lucide-react";

export default function CompanyTrackPage({ params }: { params: { companyId: string } }) {
  const searchParams = useSearchParams();
  const [selectedRole, setSelectedRole] = useState<string>("sde1");

  const round1Completed = searchParams.get("round1Completed") === "true";
  const round2Completed = searchParams.get("round2Completed") === "true";
  const round3Completed = searchParams.get("round3Completed") === "true";

  const companyData = getCompanyTrackData(params.companyId);
  const currentRole = companyData.roles[selectedRole] || companyData.roles["sde1"];

  const roundIcons = [Terminal, Cpu, ShieldAlert, CheckCircle2];

  // Normalize track selection to canonical AmazonRole format
  const canonicalRoleMap: Record<string, string> = {
    intern: "sde_intern",
    sde_intern: "sde_intern",
    sde1: "sde_1",
    sde_1: "sde_1",
    sde2: "sde_2",
    sde_2: "sde_2",
    sde3: "sde_3",
    sde_3: "sde_3",
    principal: "principal"
  };
  const activeCanonicalRole = canonicalRoleMap[selectedRole] || "sde_1";


  return (
    <main className="min-h-screen bg-[#F1F4F9] text-slate-950 font-sans selection:bg-primary selection:text-white pb-24">
      <Navbar />

      {/* Header Section */}
      <section className="pt-16 pb-12 border-b-2 border-slate-300 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Completion Banners */}
          {round1Completed && (
            <div className="mb-8 bg-emerald-50 border-2 border-emerald-500 rounded-2xl p-4 flex items-center gap-4 shadow-sm animate-in fade-in slide-in-from-top-4 duration-500">
              <div className="bg-emerald-500 text-white rounded-full p-2">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-black text-slate-950 text-sm">Round 1 OA Complete!</h4>
                <p className="text-xs text-slate-700 font-medium">Your automated test vectors have been verified. <span className="font-bold text-emerald-700 underline">Round 2: Technical DSA Viva</span> is now actively unlocked.</p>
              </div>
            </div>
          )}
          {round2Completed && (
            <div className="mb-8 bg-emerald-50 border-2 border-emerald-500 rounded-2xl p-4 flex items-center gap-4 shadow-sm animate-in fade-in slide-in-from-top-4 duration-500">
              <div className="bg-emerald-500 text-white rounded-full p-2">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-black text-slate-950 text-sm">Round 2 Technical Viva Complete!</h4>
                <p className="text-xs text-slate-700 font-medium">Your algorithmic performance has been verified. <span className="font-bold text-emerald-700 underline">Round 3: System Design / LLD</span> is now actively unlocked in your pipeline.</p>
              </div>
            </div>
          )}
          {round3Completed && (
            <div className="mb-8 bg-emerald-50 border-2 border-emerald-500 rounded-2xl p-4 flex items-center gap-4 shadow-sm animate-in fade-in slide-in-from-top-4 duration-500">
              <div className="bg-emerald-500 text-white rounded-full p-2">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-black text-slate-950 text-sm">Round 3 Architecture Complete!</h4>
                <p className="text-xs text-slate-700 font-medium">Your system design and concurrency model have been verified. <span className="font-bold text-emerald-700 underline">Round 4: Bar Raiser Behavioral</span> is now actively unlocked.</p>
              </div>
            </div>
          )}

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-slate-100 border-2 border-slate-300 text-slate-800 text-xs font-mono font-bold tracking-wider">
                <Terminal className="h-3.5 w-3.5 text-primary" />
                <span>OFFICIAL RECRUITMENT BLUEPRINT · 2026 CALIBRATION</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight font-sans">
                {companyData.companyName} <span className="text-primary font-black">Hiring Loop</span>
              </h1>
              <p className="mt-3.5 text-base sm:text-lg text-slate-700 font-medium max-w-3xl leading-relaxed">
                {companyData.overview}
              </p>

              {/* Recruiter Intel Box */}
              <div className="mt-5 p-4 rounded-xl bg-slate-50 border-2 border-slate-300 flex items-start gap-3 max-w-3xl">
                <Info className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-800 font-medium">
                  <span className="font-bold text-slate-950">Recruiter Directive: </span>
                  {companyData.recruiterNotes}
                </div>
              </div>
            </div>

            {/* Target Role Selector */}
            <div className="shrink-0 flex flex-col gap-2 min-w-[280px]">
              <label className="text-xs font-mono font-black text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <Award className="h-4 w-4 text-primary" />
                Select Engineering Track
              </label>
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-900 bg-white text-slate-950 font-black text-sm shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] focus:outline-none cursor-pointer"
              >
                <option value="intern">Software Engineering Intern (Summer / Co-Op)</option>
                <option value="sde1">SDE I / Junior Engineer (L3)</option>
                {companyData.roles["sde2"] && (
                  <option value="sde2">SDE II / Senior Engineer (L4 / L5)</option>
                )}
              </select>
              <span className="text-[11px] font-mono text-slate-500 font-semibold">
                Calibrated for: <strong className="text-slate-900">{currentRole.level}</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Multi-Round Pipeline Grid (All Unlocked) */}
      <section className="max-w-6xl mx-auto px-6 mt-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b-2 border-slate-300">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight font-sans">
              {currentRole.roleTitle} — Simulation Pipeline
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
              All rounds are actively unlocked for developer diagnostics. Choose any stage to rehearse.
            </p>
          </div>
          <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-emerald-100 text-emerald-950 border-2 border-emerald-300 shrink-0 flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-emerald-700" /> FULL ACCESS UNLOCKED
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {currentRole.rounds.map((stage, idx) => {
            const Icon = roundIcons[idx] || Terminal;
            // Generate clean URL for round setup
            const roundSlug = `round-${idx + 1}`;
            const roundHref = `/tracks/${params.companyId}/${roundSlug}/setup${
                params.companyId.toLowerCase() === "amazon" ? `?role=${activeCanonicalRole}` : getTrackCompany(params.companyId) ? `?role=${getTrackCompany(params.companyId)!.normalizeRole(activeCanonicalRole)}` : ""
              }`;

            return (
              <div
                key={idx}
                className="relative p-7 rounded-2xl border-2 border-slate-900 bg-white shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-lg text-xs font-mono font-black border-2 border-primary/30 bg-primary/10 text-primary">
                      {stage.round}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded border border-slate-300">
                      ⏱ {stage.duration}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-black text-slate-950 tracking-tight mb-2.5 flex items-center gap-2">
                    <Icon className="h-5 w-5 text-primary shrink-0" />
                    <span>{stage.title}</span>
                  </h3>
                  <p className="text-sm font-medium text-slate-700 leading-relaxed">
                    {stage.desc}
                  </p>

                  {/* Focus Area Pill */}
                  <div className="mt-4 text-xs font-mono font-bold text-indigo-950 bg-indigo-50 px-3 py-1.5 rounded-md border border-indigo-200">
                    FOCUS: {stage.focusArea}
                  </div>

                  {/* Tags */}
                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {stage.tags.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-slate-100 text-slate-800 border border-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Unlocked Initialization CTA */}
                <div className="mt-8 pt-4 border-t-2 border-slate-200">
                  <Link href={roundHref} className="w-full block">
                    <Button className="w-full py-6 font-black text-sm bg-primary hover:bg-primary-hover text-white shadow-md flex items-center justify-center gap-2">
                      <PlayCircle className="h-4 w-4" /> Initialize {stage.round} Rehearsal
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}