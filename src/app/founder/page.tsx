"use client";

import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { prettyCompany } from "@/lib/waitlist";
import { EXTRA_COMPANIES, slugOf } from "@/data/indianCompanies";

interface Overview {
  founder: boolean;
  users?: number;
  interviews?: number;
  votes?: Record<string, number>;
}

export default function FounderPage() {
  const [data, setData] = useState<Overview | null>(null);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    try {
      const res = await fetch("/api/founder", { cache: "no-store" });
      setData(res.ok ? await res.json() : { founder: false });
    } catch {
      setData({ founder: false });
    }
  }, []);

  useEffect(() => {
    load();
    const timer = setInterval(load, 5000);
    return () => clearInterval(timer);
  }, [load]);

  const unlock = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/founder", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ code }) });
    if (res.ok) {
      setCode("");
      const next = new URLSearchParams(window.location.search).get("next") || "";
      if (/^\/tracks\/[a-z0-9-]+$/.test(next)) {
        window.location.href = next;
        return;
      }
      load();
    } else {
      setError(((await res.json().catch(() => ({}))) as { error?: string }).error || "Wrong code.");
    }
  };

  const lock = async () => {
    await fetch("/api/founder", { method: "DELETE" });
    load();
  };

  if (!data) return <main className="flex min-h-screen items-center justify-center bg-background text-sm text-slate-600">Loading...</main>;

  if (!data.founder) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background px-4">
        <form onSubmit={unlock} className="w-full max-w-sm space-y-3 rounded-2xl border-2 border-slate-300 bg-white p-8 shadow-xl">
          <h1 className="text-xl font-extrabold text-slate-950">Founder access</h1>
          <input
            type="password"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Founder code"
            autoComplete="off"
            className="w-full rounded-lg border-2 border-slate-300 px-3.5 py-2.5 text-sm font-medium focus:border-slate-800 focus:outline-none"
          />
          {error && <p className="text-sm font-semibold text-red-600">{error}</p>}
          <Button type="submit" variant="primary" size="md" className="w-full">Unlock</Button>
          <Link href="/" className="block text-center text-sm font-semibold text-slate-600 hover:text-slate-950">Back to home</Link>
        </form>
      </main>
    );
  }

  const rows = Object.entries(data.votes ?? {}).sort((a, b) => b[1] - a[1]);
  const card = "rounded-xl border-2 border-slate-300 bg-white p-5";

  return (
    <main className="min-h-screen bg-background px-4 py-8 text-slate-950">
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-extrabold">Founder dashboard</h1>
          <div className="flex items-center gap-3">
            <Link href="/" className="text-sm font-semibold text-slate-700 hover:text-slate-950">Home</Link>
            <Button variant="outline" size="sm" onClick={lock}>Lock</Button>
          </div>
        </div>
        <p className="text-sm text-slate-600">You can open every company while unlocked (7 days on this browser).</p>

        <div className="grid grid-cols-2 gap-4">
          <div className={card}><p className="text-xs font-bold uppercase text-slate-500">Accounts</p><p className="text-3xl font-extrabold">{data.users ?? 0}</p></div>
          <div className={card}><p className="text-xs font-bold uppercase text-slate-500">Interviews scored</p><p className="text-3xl font-extrabold">{data.interviews ?? 0}</p></div>
        </div>

        <section className={card}>
          <h2 className="mb-3 text-lg font-extrabold">Open a company</h2>
          <div className="flex flex-wrap gap-2">
            {EXTRA_COMPANIES.map((c) => (
              <Link key={c.name} href={"/tracks/" + slugOf(c.name)} className="rounded-lg border-2 border-slate-300 px-3 py-1.5 text-sm font-bold hover:border-slate-800">{c.name}</Link>
            ))}
          </div>
        </section>

        <section className={card}>
          <h2 className="mb-3 text-lg font-extrabold">Votes by company (live)</h2>
          {rows.length === 0 ? (
            <p className="text-sm text-slate-600">No votes yet.</p>
          ) : (
            <table className="w-full text-left text-sm">
              <tbody>
                {rows.map(([slug, count]) => (
                  <tr key={slug} className="border-b border-slate-100">
                    <td className="py-2 font-semibold">{prettyCompany(slug)}</td>
                    <td className="py-2 font-bold">{count}</td>
                    <td className="py-2 text-right"><Link href={"/tracks/" + slug} className="font-bold text-primary hover:underline">Open</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      </div>
    </main>
  );
}
