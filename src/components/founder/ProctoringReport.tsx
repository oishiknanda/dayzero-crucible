"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

type S = { sessionId: string; company: string; round: string; email: string | null; firstAt: string; lastAt: string; total: number; strong: number; weak: number; info: number; counted: number; verdict: "clean" | "review" | "flagged" };
type E = { id: number; code: string; strength: string; counted: boolean; detail: string; at: string };
const box = "rounded-xl border border-slate-200 bg-white p-4 shadow-sm";
const tone: Record<string, string> = { clean: "bg-emerald-100 text-emerald-800", review: "bg-amber-100 text-amber-800", flagged: "bg-rose-100 text-rose-800" };

export default function ProctoringReport() {
  const [rows, setRows] = useState<S[] | null>(null);
  const [error, setError] = useState("");
  const [open, setOpen] = useState("");
  const [timeline, setTimeline] = useState<E[]>([]);

  useEffect(() => {
    fetch("/api/founder/proctoring").then(async (r) => { const j = await r.json(); if (!r.ok) throw new Error(j.error); setRows(j.sessions); }).catch((e) => { setError(e.message); setRows([]); });
  }, []);
  useEffect(() => {
    if (!open) return;
    fetch("/api/founder/proctoring?session=" + encodeURIComponent(open)).then((r) => r.json()).then((j) => setTimeline(j.timeline || [])).catch(() => setTimeline([]));
  }, [open]);

  return (
    <main className="min-h-screen bg-background px-4 py-6 text-slate-950">
      <div className="mx-auto max-w-5xl space-y-4">
        <div className="flex items-center justify-between"><h1 className="text-2xl font-extrabold">Proctoring review</h1><Link href="/founder" className="text-sm font-semibold text-slate-700">Back to dashboard</Link></div>
        <p className="text-sm text-slate-600">Events are evidence for a human to review, not proof. "Flagged" means two or more strong signals (phone, covered camera, second face, identity mismatch). Weak signals such as looking away or sound can have innocent causes.</p>
        {error && <p className={box + " text-sm text-red-700"}>{error}</p>}
        {rows === null && <p className="text-sm text-slate-500">Loading...</p>}
        {rows && rows.length === 0 && !error && <p className={box + " text-sm text-slate-500"}>No proctored sessions recorded yet.</p>}
        <div className="space-y-2">
          {(rows || []).map((s) => (
            <div key={s.sessionId} className={box}>
              <button className="flex w-full flex-wrap items-center justify-between gap-2 text-left" onClick={() => setOpen(open === s.sessionId ? "" : s.sessionId)}>
                <span className="text-sm"><b>{s.email || "Guest"}</b> · {s.company} · {s.round} · {new Date(s.lastAt).toLocaleString()}</span>
                <span className="flex items-center gap-2 text-xs"><span>{s.strong} strong</span><span>{s.weak} weak</span><span>{s.info} info</span><span>{s.counted} warnings</span><span className={"rounded-full px-2 py-0.5 font-bold " + tone[s.verdict]}>{s.verdict}</span></span>
              </button>
              {open === s.sessionId && (
                <ul className="mt-3 space-y-1 border-t border-slate-100 pt-3 text-xs">
                  {timeline.map((e) => <li key={e.id}><span className="text-slate-500">{new Date(e.at).toLocaleTimeString()}</span> <b>{e.code}</b> <span className="text-slate-500">({e.strength}{e.counted ? ", counted" : ""})</span> {e.detail}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
