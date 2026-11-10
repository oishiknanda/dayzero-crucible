"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ComingSoon } from "@/components/auth/ComingSoon";
import { isLiveCompany } from "@/lib/waitlist";

// Amazon, Google and Microsoft open straight away. Every other company shows "Coming soon"
// with a vote button, unless the founder has unlocked access.
export default function CompanyAccessLayout({ children }: { children: React.ReactNode }) {
  const params = useParams<{ companyId: string }>();
  const slug = String(params?.companyId ?? "").toLowerCase();
  const live = isLiveCompany(slug);
  const [founder, setFounder] = useState<boolean | null>(live ? true : null);

  useEffect(() => {
    if (live) return;
    fetch("/api/waitlist?company=" + encodeURIComponent(slug), { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : { founder: false }))
      .then((d: { founder?: boolean }) => setFounder(Boolean(d.founder)))
      .catch(() => setFounder(false));
  }, [live, slug]);

  if (live) return <>{children}</>;
  if (founder === null) {
    return <main className="flex min-h-screen items-center justify-center bg-background text-sm text-slate-600">Loading...</main>;
  }
  return founder ? <>{children}</> : <ComingSoon slug={slug} />;
}