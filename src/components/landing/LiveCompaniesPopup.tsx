"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { LIVE_COMPANIES } from "@/data/liveCompanies";

// A small, dismissible "live now" card shown once per visitor. Changing the list in
// src/data/liveCompanies.ts shows it again, because the stored key includes the company slugs.
const STORAGE_KEY = "dz_live_popup:" + LIVE_COMPANIES.map((company) => company.slug).join(",");

export function LiveCompaniesPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (LIVE_COMPANIES.length === 0) return;
    try { if (window.localStorage.getItem(STORAGE_KEY)) return; } catch { /* storage unavailable: just show it */ }
    const timer = window.setTimeout(() => setOpen(true), 1500);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const close = () => {
    setOpen(false);
    try { window.localStorage.setItem(STORAGE_KEY, "1"); } catch { /* ignore */ }
  };

  if (!open) return null;

  return (
    <section role="dialog" aria-label="Companies live now" className="fixed right-3 top-20 z-[60] w-[min(20rem,calc(100vw-1.5rem))] rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:right-6">
      <button type="button" onClick={close} aria-label="Close" className="absolute right-2.5 top-2.5 flex h-7 w-7 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
      </button>
      <p className="flex items-center gap-2 pr-8 text-[11px] font-black uppercase tracking-widest text-emerald-700">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />Live now
      </p>
      <p className="mt-1 pr-6 text-sm font-semibold text-slate-800">Practice real interview rounds for these companies:</p>
      <ul className="mt-3 grid grid-cols-2 gap-2">
        {LIVE_COMPANIES.map((company) => (
          <li key={company.slug}>
            <Link href={"/tracks/" + company.slug} onClick={close} className="flex items-center gap-2 rounded-lg border border-slate-200 px-2.5 py-2 text-sm font-bold text-slate-900 hover:border-slate-800">
              {company.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={company.logo} alt="" className="h-5 w-5 shrink-0" />
              ) : (
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded text-[10px] font-extrabold text-white" style={{ backgroundColor: company.color }}>
                  {company.name.slice(0, 1).toUpperCase()}
                </span>
              )}
              <span className="truncate">{company.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
