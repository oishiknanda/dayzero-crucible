"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Footer links plus a one-time notice that the site uses only a sign-in cookie.
export default function SiteFooter() {
  const pathname = usePathname() || "";
  const [show, setShow] = useState(false);
  useEffect(() => {
    try { if (!localStorage.getItem("dz_cookie_ok")) setShow(true); } catch { /* storage blocked */ }
  }, []);
  function dismiss() {
    try { localStorage.setItem("dz_cookie_ok", "1"); } catch { /* storage blocked */ }
    setShow(false);
  }
  // The live interview screens fill the whole window, so they get no footer.
  const inInterview = pathname.startsWith("/crucible");
  return (
    <>
      {!inInterview && <footer className="border-t border-slate-300 px-4 py-8 text-center text-xs text-slate-500">
        <p className="font-mono font-bold tracking-wide text-slate-700">DAY-ZERO.AI</p>
        <p className="mt-1">Free to use during launch.</p>
        <p className="mt-3">
          <Link href="/privacy" className="hover:underline">Privacy</Link>
          <span className="mx-2">·</span>
          <Link href="/terms" className="hover:underline">Terms</Link>
        </p>
      </footer>}
      {show && (
        <div className="fixed inset-x-3 bottom-3 z-50 mx-auto flex max-w-xl items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 text-xs text-slate-700 shadow-lg">
          <span className="flex-1">We use only the cookies needed to keep you signed in. See our <Link href="/privacy" className="underline">Privacy page</Link>.</span>
          <button type="button" onClick={dismiss} className="rounded-lg bg-slate-900 px-3 py-1.5 font-semibold text-white">OK</button>
        </div>
      )}
    </>
  );
}
