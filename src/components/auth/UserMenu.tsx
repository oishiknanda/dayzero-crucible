"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/Button";
import { History, LogOut, User } from "lucide-react";

export function UserMenu() {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onOutside);
    return () => document.removeEventListener("mousedown", onOutside);
  }, []);

  if (status === "loading") return <div className="hidden sm:block h-9 w-9" aria-hidden="true" />;

  if (!session?.user) {
    return (
      <Link href="/login" className="hidden sm:inline-block">
        <Button variant="ghost" size="sm" className="font-semibold text-slate-700 text-sm hover:text-slate-950">
          Sign In
        </Button>
      </Link>
    );
  }

  const label = session.user.name || session.user.email || "Account";
  const initial = label.trim().charAt(0).toUpperCase();

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open profile menu"
        className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-slate-300 bg-primary text-sm font-bold text-white hover:border-slate-800 focus:outline-none"
      >
        {session.user.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={session.user.image} alt="" className="h-full w-full object-cover" referrerPolicy="no-referrer" />
        ) : (
          initial
        )}
      </button>
      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-60 rounded-xl border-2 border-slate-300 bg-white p-2 shadow-xl">
          <div className="border-b border-slate-200 px-3 pb-2 pt-1">
            <p className="truncate text-sm font-bold text-slate-950">{session.user.name || "Candidate"}</p>
            <p className="truncate text-xs text-slate-600">{session.user.email}</p>
          </div>
          <Link href="/profile" onClick={() => setOpen(false)} className="mt-1 flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100">
            <User className="h-4 w-4" /> Profile
          </Link>
          <Link href="/profile#history" onClick={() => setOpen(false)} className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100">
            <History className="h-4 w-4" /> Interview history
          </Link>
          <button onClick={() => signOut({ callbackUrl: "/" })} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-semibold text-red-600 hover:bg-red-50">
            <LogOut className="h-4 w-4" /> Sign out
          </button>
        </div>
      )}
    </div>
  );
}