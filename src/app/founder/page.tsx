"use client";

import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { prettyCompany } from "@/lib/waitlist";

interface Overview {
  founder: boolean;
  users?: number;
  interviews?: number;
  activeSeconds?: number;
  userDetails?: Array<{
    id: string;
    name: string;
    email: string;
    provider: string;
    createdAt: string;
    activeSeconds: number;
    lastActiveAt: string | null;
  }>;
  votes?: Record<string, number>;
  waitlistContacts?: Array<{
    company: string;
    userId: string;
    userName: string;
    accountEmail: string;
    notificationEmail: string;
    votedAt: string;
  }>;
}

function formatDate(value: string | null | undefined): string {
  if (!value) return "—";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "—" : date.toLocaleString();
}

function formatDuration(totalSeconds: number): string {
  const seconds = Math.max(0, Math.floor(totalSeconds || 0));
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  if (hours) return `${hours}h ${minutes}m`;
  if (minutes) return `${minutes}m`;
  return `${seconds}s`;
}

export default function FounderPage() {
  const [data, setData] = useState<Overview | null>(null);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [isUnlocking, setIsUnlocking] = useState(false);

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
    const timer = setInterval(load, 15000);
    return () => clearInterval(timer);
  }, [load]);

  const unlock = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsUnlocking(true);
    try {
      const res = await fetch("/api/founder", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ code }) });
      if (res.ok) {
        setCode("");
        await load();
      } else {
        setError(((await res.json().catch(() => ({}))) as { error?: string }).error || "Wrong code.");
      }
    } catch {
      setError("Could not verify founder access. Please try again.");
    } finally {
      setIsUnlocking(false);
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
          <Button type="submit" variant="primary" size="md" className="w-full" disabled={isUnlocking}>{isUnlocking ? "Checking..." : "Unlock"}</Button>
          <Link href="/" className="block text-center text-sm font-semibold text-slate-600 hover:text-slate-950">Back to home</Link>
        </form>
      </main>
    );
  }

  const rows = Object.entries(data.votes ?? {}).sort((a, b) => b[1] - a[1]);
  const contacts = data.waitlistContacts ?? [];
  const users = data.userDetails ?? [];
  const card = "rounded-xl border border-slate-200 bg-white p-5 shadow-sm";

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
        <p className="text-sm text-slate-600">Private account, activity, and waitlist information. This browser stays unlocked for up to 7 days.</p>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <div className={card}><p className="text-xs font-bold uppercase text-slate-500">Accounts</p><p className="text-3xl font-extrabold">{data.users ?? 0}</p></div>
          <div className={card}><p className="text-xs font-bold uppercase text-slate-500">Interviews scored</p><p className="text-3xl font-extrabold">{data.interviews ?? 0}</p></div>
          <div className={card}><p className="text-xs font-bold uppercase text-slate-500">Tracked active time</p><p className="text-3xl font-extrabold">{formatDuration(data.activeSeconds ?? 0)}</p></div>
          <div className={card}><p className="text-xs font-bold uppercase text-slate-500">Launch contacts</p><p className="text-3xl font-extrabold">{contacts.length}</p></div>
        </div>

        <section className={card}>
          <div className="mb-4 flex items-end justify-between gap-3">
            <div>
              <h2 className="text-lg font-extrabold">User accounts</h2>
              <p className="mt-1 text-xs text-slate-500">Names, signup emails, provider, signup date, and visible-tab time.</p>
            </div>
            <span className="text-xs font-semibold text-slate-500">Newest first</span>
          </div>
          {users.length === 0 ? (
            <p className="text-sm text-slate-600">No accounts yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] text-left text-sm">
                <thead className="text-xs uppercase text-slate-500">
                  <tr><th className="py-2 pr-4">Name / email</th><th className="py-2 pr-4">Provider</th><th className="py-2 pr-4">Signed up</th><th className="py-2 pr-4">Active time</th><th className="py-2">Last active</th></tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-t border-slate-100 align-top">
                      <td className="py-3 pr-4"><p className="font-bold">{user.name || "—"}</p><p className="break-all text-xs text-slate-600">{user.email}</p></td>
                      <td className="py-3 pr-4 capitalize">{user.provider}</td>
                      <td className="py-3 pr-4 whitespace-nowrap">{formatDate(user.createdAt)}</td>
                      <td className="py-3 pr-4 whitespace-nowrap font-semibold">{formatDuration(user.activeSeconds)}</td>
                      <td className="py-3 whitespace-nowrap">{formatDate(user.lastActiveAt)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <section className={card}>
          <h2 className="mb-1 text-lg font-extrabold">Waitlist votes by company</h2>
          <p className="mb-3 text-xs text-slate-500">Counts include all votes. Contact emails appear only when a user opts in.</p>
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

        <section className={card}>
          <h2 className="text-lg font-extrabold">Opt-in launch contacts</h2>
          <p className="mb-3 mt-1 text-xs text-slate-500">Use these addresses only to send the launch update the user requested.</p>
          {contacts.length === 0 ? (
            <p className="text-sm text-slate-600">No users have opted in to launch updates yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[620px] text-left text-sm">
                <thead className="text-xs uppercase text-slate-500">
                  <tr><th className="py-2 pr-4">Company</th><th className="py-2 pr-4">Contact</th><th className="py-2 pr-4">Account email</th><th className="py-2">Voted</th></tr>
                </thead>
                <tbody>
                  {contacts.map((contact) => (
                    <tr key={`${contact.company}:${contact.userId}`} className="border-t border-slate-100">
                      <td className="py-3 pr-4 font-bold">{prettyCompany(contact.company)}</td>
                      <td className="break-all py-3 pr-4">{contact.notificationEmail}</td>
                      <td className="break-all py-3 pr-4 text-slate-600">{contact.accountEmail || contact.userName}</td>
                      <td className="py-3 whitespace-nowrap">{formatDate(contact.votedAt)}</td>
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
