"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import { SiteActivityTracker } from "@/components/auth/SiteActivityTracker";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <SiteActivityTracker />
      {children}
    </SessionProvider>
  );
}
