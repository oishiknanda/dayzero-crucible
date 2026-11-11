"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";

export function SiteActivityTracker() {
  const { data: session, status } = useSession();
  const userId = session?.user?.id;

  useEffect(() => {
    if (status !== "authenticated" || !userId) return;

    let previousTickAt = Date.now();
    let wasVisible = document.visibilityState === "visible";

    const report = (activeSeconds: number, keepalive = false) => {
      if (activeSeconds < 1) return;
      const eventId = window.crypto.randomUUID();
      fetch("/api/activity", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventId, activeSeconds }),
        keepalive,
      }).catch(() => undefined);
    };

    const tick = (keepalive = false) => {
      const now = Date.now();
      const elapsedSeconds = Math.floor((now - previousTickAt) / 1000);
      previousTickAt = now;
      if (wasVisible && elapsedSeconds > 0) report(Math.min(elapsedSeconds, 60), keepalive);
      wasVisible = document.visibilityState === "visible";
    };

    const onVisibilityChange = () => tick();
    const onPageHide = () => tick(true);
    const timer = window.setInterval(() => tick(), 30_000);

    document.addEventListener("visibilitychange", onVisibilityChange);
    window.addEventListener("pagehide", onPageHide);

    return () => {
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("pagehide", onPageHide);
      tick(true);
    };
  }, [status, userId]);

  return null;
}
