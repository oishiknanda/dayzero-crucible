"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { LoaderCircle } from "lucide-react";

export default function NavigationProgress() {
  const pathname = usePathname();
  const [pending, setPending] = useState(false);
  const showTimerRef = useRef<number | null>(null);
  const pollTimerRef = useRef<number | null>(null);

  const clearPending = useCallback(() => {
    if (showTimerRef.current !== null) window.clearTimeout(showTimerRef.current);
    if (pollTimerRef.current !== null) window.clearInterval(pollTimerRef.current);
    showTimerRef.current = null;
    pollTimerRef.current = null;
    setPending(false);
  }, []);

  useEffect(() => {
    clearPending();
  }, [pathname, clearPending]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest<HTMLAnchorElement>("a[href]");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      let destination: URL;
      try { destination = new URL(anchor.href, window.location.href); }
      catch { return; }
      if (destination.origin !== window.location.origin) return;
      if (destination.pathname === window.location.pathname && destination.search === window.location.search) return;

      clearPending();
      const nextUrl = destination.pathname + destination.search;
      showTimerRef.current = window.setTimeout(() => setPending(true), 160);
      const startedAt = Date.now();
      pollTimerRef.current = window.setInterval(() => {
        if ((window.location.pathname + window.location.search) === nextUrl || Date.now() - startedAt > 12000) clearPending();
      }, 100);
    };

    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      if (showTimerRef.current !== null) window.clearTimeout(showTimerRef.current);
      if (pollTimerRef.current !== null) window.clearInterval(pollTimerRef.current);
    };
  }, [clearPending]);

  if (!pending) return null;
  return (
    <div role="status" aria-live="polite" aria-label="Loading page" className="fixed inset-0 z-[200] pointer-events-none">
      <div className="absolute inset-x-0 top-0 h-1 overflow-hidden bg-indigo-100">
        <div className="h-full w-1/3 animate-pulse bg-indigo-600" />
      </div>
      <div className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full border border-slate-200 bg-white/95 px-4 py-2.5 text-xs font-bold text-slate-700 shadow-xl backdrop-blur">
        <LoaderCircle className="h-4 w-4 animate-spin text-indigo-600" />
        Loading page…
      </div>
    </div>
  );
}
