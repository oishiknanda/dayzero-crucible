"use client";

import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { prettyCompany } from "@/lib/waitlist";
import { Rocket } from "lucide-react";

interface Status {
  count: number;
  voted: boolean;
  hasNotificationEmail?: boolean;
}

export function ComingSoon({ slug }: { slug: string }) {
  const [status, setStatus] = useState<Status | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [notificationEmail, setNotificationEmail] = useState("");
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
    if (!status.voted && notificationEmail.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(notificationEmail.trim())) {
      setError("Enter a valid email address, or leave it blank.");
      return;
    }
    setBusy(true);
    setError("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company: slug,
          action: status.voted ? "unvote" : "vote",
          ...(!status.voted ? { notificationEmail: notificationEmail.trim() } : {}),
        }),
      });
      if (res.ok) setStatus(await res.json());
      else setError(((await res.json().catch(() => ({}))) as { error?: string }).error || "Could not save your vote.");
    } catch {
      setError("Could not save your vote. Please try again.");
    } finally {
      setBusy(false);
    }
  };

  const saveNotificationEmail = async () => {
    if (!status?.voted || busy) return;
    const email = notificationEmail.trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email address, or leave it blank to remove the saved address.");
      return;
    }

    setBusy(true);
    setError("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ company: slug, action: "update-email", notificationEmail: email }),
      });
      if (res.ok) setStatus(await res.json());
      else setError(((await res.json().catch(() => ({}))) as { error?: string }).error || "Could not save your email.");
    } catch {
      setError("Could not save your email. Please try again.");
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

        <div className="mb-4 text-left">
          <label htmlFor="waitlist-notification-email" className="mb-1.5 block text-sm font-bold text-slate-800">
            Email for a launch update <span className="font-medium text-slate-500">(optional)</span>
          </label>
          <input
            id="waitlist-notification-email"
            type="email"
            autoComplete="email"
            maxLength={254}
            value={notificationEmail}
            onChange={(e) => setNotificationEmail(e.target.value)}
            placeholder={status?.hasNotificationEmail ? "Email saved; enter a new one to change it" : "you@example.com"}
            className="w-full rounded-lg border-2 border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-950 placeholder:text-slate-400 focus:border-slate-800 focus:outline-none"
          />
          <p className="mt-1.5 text-xs text-slate-500">
            Optional. It is visible only in the founder dashboard and can be used for a launch update.
          </p>
        </div>

        <Button variant={status?.voted ? "secondary" : "primary"} size="lg" className="w-full" onClick={toggle} disabled={!status || busy}>
          {status?.voted ? "You voted. Click to undo" : "I want this company"}
        </Button>
        {status?.voted && (
          <Button variant="outline" size="md" className="mt-2 w-full" onClick={saveNotificationEmail} disabled={busy}>
            Save notification email
          </Button>
        )}
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
