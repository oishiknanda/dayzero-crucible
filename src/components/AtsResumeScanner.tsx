"use client";

import React, { useState, useRef } from "react";
import { UploadCloud, ShieldCheck, RefreshCw, AlertTriangle, CheckCircle2, Loader2, ArrowRight } from "lucide-react";

interface AtsResult {
  score: number;
  rating: string;
  role: string;
  fileName: string;
  strengths: string[];
  improvements: string[];
  breakdown: {
    contactInfo: number;
    sectionStructure: number;
    quantifiedImpact: number;
    keywordVerbMatch: number;
  };
}

export function AtsResumeScanner() {
  const [file, setFile] = useState<File | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState<AtsResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setError(null);
    }
  };

  const handleAnalyze = async () => {
    if (!file) return;
    setIsScanning(true);
    setError(null);

    const formData = new FormData();
    formData.append("resume", file);
    formData.append("targetRole", "Software Engineer");

    try {
      const res = await fetch("/api/resume/analyze", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Unable to analyze resume. Please try again.");
      }

      const data = await res.json();
      setResult(data);
    } catch (err: any) {
      setError(err.message || "Failed to complete ATS diagnostic.");
    } finally {
      setIsScanning(false);
    }
  };

  return (
    <div className="w-full bg-[#1F1F1F] border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-4 mb-6 gap-2">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-amber-500 shrink-0" />
            ATS Resume Health & Benchmark Scorecard
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Industry ATS diagnostic checking structural parsing, quantification, and role relevance.
          </p>
        </div>
        {result && (
          <button
            onClick={() => {
              setResult(null);
              setFile(null);
            }}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition self-start sm:self-auto cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Re-scan Another
          </button>
        )}
      </div>

      {!result ? (
        <div className="space-y-6">
          <div
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-white/20 hover:border-amber-500/70 bg-[#161616] transition-all cursor-pointer rounded-xl p-8 flex flex-col items-center justify-center text-center group"
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.doc,.docx,.txt"
              className="hidden"
              onChange={handleFileSelect}
            />
            <div className="w-14 h-14 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-3 group-hover:scale-105 transition-transform">
              <UploadCloud className="w-7 h-7" />
            </div>
            <p className="text-sm font-semibold text-slate-200">
              {file ? file.name : "Click to select or drag and drop your Resume"}
            </p>
            <p className="text-xs text-slate-400 mt-1">PDF, DOCX, or TXT up to 5MB</p>
          </div>

          {error && <p className="text-sm font-semibold text-rose-400">{error}</p>}

          <button
            disabled={!file || isScanning}
            onClick={handleAnalyze}
            className="w-full py-3 px-4 bg-amber-500 hover:bg-amber-400 disabled:opacity-40 disabled:cursor-not-allowed text-slate-950 font-bold rounded-xl transition flex items-center justify-center gap-2 cursor-pointer"
          >
            {isScanning ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Evaluating ATS Invariants...
              </>
            ) : (
              <>
                Run ATS Benchmark Scan <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between bg-[#161616] border border-white/10 rounded-xl p-5 gap-4">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 shrink-0 rounded-full bg-[#1F1F1F] border-4 border-amber-500/40 flex items-center justify-center">
                <span className="text-2xl font-black text-amber-400">{result.score}</span>
              </div>
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold">
                  {result.rating}
                </div>
                <h3 className="text-lg font-bold text-white mt-0.5 break-all">{result.fileName}</h3>
                <p className="text-xs text-slate-400">Target Role: {result.role}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 w-full md:w-auto">
              <div className="bg-[#1F1F1F] border border-white/10 rounded-lg p-2.5 text-center min-w-[120px]">
                <div className="text-[11px] text-slate-400">Section Headers</div>
                <div className="text-sm font-bold text-slate-200 mt-0.5">{result.breakdown.sectionStructure}%</div>
              </div>
              <div className="bg-[#1F1F1F] border border-white/10 rounded-lg p-2.5 text-center min-w-[120px]">
                <div className="text-[11px] text-slate-400">Metrics & Impact</div>
                <div className="text-sm font-bold text-slate-200 mt-0.5">{result.breakdown.quantifiedImpact}%</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#161616] border border-rose-500/20 rounded-xl p-4 space-y-3">
              <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm">
                <AlertTriangle className="w-4 h-4 shrink-0" /> Priority Areas to Improve
              </div>
              <ul className="space-y-2">
                {result.improvements.map((item, idx) => (
                  <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                    <span className="text-rose-400 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#161616] border border-emerald-500/20 rounded-xl p-4 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                <CheckCircle2 className="w-4 h-4 shrink-0" /> Detected ATS Strengths
              </div>
              <ul className="space-y-2">
                {result.strengths.map((item, idx) => (
                  <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
