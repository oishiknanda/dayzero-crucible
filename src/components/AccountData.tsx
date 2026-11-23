"use client";

import React, { useState } from "react";
import { signOut } from "next-auth/react";

// Download or permanently delete the signed-in user's data.
export default function AccountData() {
  const [confirming, setConfirming] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function remove() {
    setBusy(true);
    setError("");
    try {
      const r = await fetch("/api/account", { method: "DELETE" });
      if (!r.ok) throw new Error();
      await signOut({ callbackUrl: "/" });
    } catch {
      setError("Could not delete your account. Please try again.");
      setBusy(false);
    }
  }

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6">
      <h2 className="text-lg font-extrabold">Your data</h2>
      <p className="mt-1 text-sm text-slate-600">Download a copy of everything we store about you, or delete your account permanently.</p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <a href="/api/account/export" className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold hover:bg-slate-50">Download my data</a>
        {!confirming ? (
          <button type="button" onClick={() => setConfirming(true)} className="rounded-lg border border-red-300 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-50">Delete my account</button>
        ) : (
          <>
            <span className="text-sm text-slate-700">This cannot be undone.</span>
            <button type="button" disabled={busy} onClick={remove} className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white disabled:opacity-60">{busy ? "Deleting..." : "Yes, delete everything"}</button>
            <button type="button" disabled={busy} onClick={() => setConfirming(false)} className="text-sm font-semibold text-slate-600">Cancel</button>
          </>
        )}
      </div>
      {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
    </section>
  );
}
