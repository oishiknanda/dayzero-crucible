import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/landing/Navbar";
import { HiringAlertsFeed } from "@/components/landing/HiringAlertsFeed";

export const metadata: Metadata = {
  title: "India Hiring Alerts | DayZero.AI",
  description: "Recent software and engineering openings in India from official career sites of companies listed on DayZero.AI.",
};

export default function HiringAlertsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <Navbar />
      <HiringAlertsFeed />
      <footer className="border-t border-slate-200 bg-white px-5 py-7 text-center text-xs text-slate-500">
        <Link href="/" className="font-semibold text-indigo-700 hover:underline">Back to DayZero.AI</Link>
      </footer>
    </main>
  );
}
