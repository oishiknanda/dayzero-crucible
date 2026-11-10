"use client";

import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { prettyCompany } from "@/lib/waitlist";
import { Rocket } from "lucide-react";

interface Status {
  count: number;
  voted: boolean;
}

export function ComingSoon({ slug }: { slug: string }) {
  const [status, setStatus] = useState<Status | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const name = prettyCompany(slug);

  const refresh = useCallback(async () => {
    try {
      const res = await fetch("/api/waitlist?company=" + encodeURIComponent(slug), { cache: "no-store" });
      if (res.ok) setStatus(await res.json());
    } catch {
      /* keep the last known numbers */
    }
  }, [slug]);

  // Live counter: refreshes every 4 seconds so everyone sees new votes arrive.
  useEffect(() => {
    refresh();
    const timer = setInterval(refresh, 4000);
    return () => clearInterval(timer);
  }, [refresh]);

  const toggle = async () => {
    if (!status || busy) return;
    setBusy(true);
    setError("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ company: slug, action: status.voted ? "unvote" : "vote" }),
      });
      if (res.ok) setStatus(await res.json());
      else setError(((await res.json().catch(() => ({}))) as { error?: string }).error || "Could not save your vote.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-10">
      <div className="w-full max-w-lg rounded-2xl border-2 border-slate-300 bg-white p-8 text-center shadow-xl">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white">
          <Rocket className="h-7 w-7" />
        </div>
        <h1 className="text-3xl font-extrabold text-slate-950">{name} is coming soon</h1>
        <p className="mt-2 text-sm text-slate-600">
          We are building the {name} interview track next, starting with the companies students ask for most. Vote to move it up the list.
        </p>

        <div className="my-6 rounded-xl border-2 border-slate-200 bg-slate-50 py-5">
          <p className="text-5xl font-extrabold text-slate-950">{status ? status.count : "-"}</p>
          <p className="mt-1 text-xs font-bold uppercase tracking-wide text-slate-500">
            {status && status.count === 1 ? "student wants" : "students want"} this track
          </p>
        </div>

        <Button variant={status?.voted ? "secondary" : "primary"} size="lg" className="w-full" onClick={toggle} disabled={!status || busy}>
          {status?.voted ? "You voted. Click to undo" : "I want this company"}
        </Button>
        {error && <p className="mt-3 text-sm font-semibold text-red-600">{error}</p>}
        <p className="mt-2 text-xs text-slate-500">One vote per account.</p>

        <div className="mt-6 flex items-center justify-center gap-5 text-sm font-semibold">
          <Link href="/" className="text-slate-700 hover:text-slate-950">Back to home</Link>
          <Link href="/founder" className="text-slate-400 hover:text-slate-700">Founder access</Link>
        </div>
      </div>
    </main>
  );
}