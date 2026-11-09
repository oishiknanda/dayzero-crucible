"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";

interface HistoryEntry {
  id: string;
  company: string;
  role: string;
  round: string;
  setId: string | number | null;
  score: number | null;
  verdict: string | null;
  at: string;
}

const ROUND_LABELS: Record<string, string> = {
  "round-1": "Round 1 - Online Assessment",
  "round-2": "Round 2 - Technical Viva",
  "round-3": "Round 3 - System Design",
  "round-4": "Round 4 - Bar Raiser",
};

const ROLE_LABELS: Record<string, string> = {
  sde_intern: "SDE Intern",
  sde_1: "SDE I",
  sde_2: "SDE II",
  sde_3: "SDE III",
  principal: "Principal",
};

const pretty = (slug: string) => slug.replace(/[-_]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

export default function ProfilePage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [history, setHistory] = useState<HistoryEntry[] | null>(null);

  useEffect(() => {
    if (status === "unauthenticated") router.replace("/login?callbackUrl=/profile");
  }, [status, router]);

  useEffect(() => {
    if (status !== "authenticated") return;
    fetch("/api/history")
      .then((r) => (r.ok ? r.json() : { history: [] }))
      .then((d: { history?: HistoryEntry[] }) => setHistory(d.history ?? []))
      .catch(() => setHistory([]));
  }, [status]);

  const stats = useMemo(() => {
    const list = history ?? [];
    const scored = list.filter((h) => typeof h.score === "number") as Array<HistoryEntry & { score: number }>;
    return {
      total: list.length,
      companies: new Set(list.map((h) => h.company)).size,
      average: scored.length ? Math.round(scored.reduce((s, h) => s + h.score, 0) / scored.length) : null,
      best: scored.length ? Math.max(...scored.map((h) => h.score)) : null,
    };
  }, [history]);

  if (status !== "authenticated" || !session?.user) {
    return <main className="flex min-h-screen items-center justify-center bg-background text-sm text-slate-600">Loading...</main>;
  }

  const name = session.user.name || "Candidate";
  const card = "rounded-xl border-2 border-slate-300 bg-white p-5";

  return (
    <main className="min-h-screen bg-background px-4 py-8 text-slate-950">
      <div className="mx-auto max-w-5xl space-y-6">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-950">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>

        <section className={card + " flex flex-wrap items-center justify-between gap-4"}>
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-primary text-2xl font-bold text-white">
              {session.user.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={session.user.image} alt="" className="h-full w-full object-cover" referrerPolicy="no-referrer" />
              ) : (
                name.charAt(0).toUpperCase()
              )}
            </div>
            <div>
              <h1 className="text-2xl font-extrabold">{name}</h1>
              <p className="text-sm text-slate-600">{session.user.email}</p>
            </div>
          </div>
          <Button variant="outline" size="sm" onClick={() => signOut({ callbackUrl: "/" })}>
            Sign out
          </Button>
        </section>

        <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            ["Interviews taken", stats.total],
            ["Companies", stats.companies],
            ["Average score", stats.average === null ? "-" : stats.average],
            ["Best score", stats.best === null ? "-" : stats.best],
          ].map(([label, value]) => (
            <div key={String(label)} className={card}>
              <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{label}</p>
              <p className="mt-1 text-3xl font-extrabold">{value}</p>
            </div>
          ))}
        </section>

        <section id="history" className={card}>
          <h2 className="mb-4 text-lg font-extrabold">Interview history</h2>
          {history === null ? (
            <p className="text-sm text-slate-600">Loading...</p>
          ) : history.length === 0 ? (
            <div className="py-8 text-center text-sm text-slate-600">
              No interviews yet. Finish a round and click Conclude &amp; Score, and it will show up here.
              <div className="mt-4">
                <Link href="/hub">
                  <Button variant="primary" size="md">Start an interview</Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-200 text-xs uppercase tracking-wide text-slate-500">
                    <th className="py-2 pr-4">Date</th>
                    <th className="py-2 pr-4">Company</th>
                    <th className="py-2 pr-4">Role</th>
                    <th className="py-2 pr-4">Round</th>
                    <th className="py-2 pr-4">Set</th>
                    <th className="py-2 pr-4">Score</th>
                    <th className="py-2">Verdict</th>
                  </tr>
                </thead>
                <tbody>
                  {history.map((h) => (
                    <tr key={h.id} className="border-b border-slate-100">
                      <td className="py-2.5 pr-4 text-slate-600">{new Date(h.at).toLocaleDateString()}</td>
                      <td className="py-2.5 pr-4 font-semibold">{pretty(h.company)}</td>
                      <td className="py-2.5 pr-4">{ROLE_LABELS[h.role] || pretty(h.role)}</td>
                      <td className="py-2.5 pr-4">{ROUND_LABELS[h.round] || pretty(h.round)}</td>
                      <td className="py-2.5 pr-4">{h.setId ?? "-"}</td>
                      <td className="py-2.5 pr-4 font-bold">{h.score === null ? "-" : h.score + "/100"}</td>
                      <td className="py-2.5">{h.verdict || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}