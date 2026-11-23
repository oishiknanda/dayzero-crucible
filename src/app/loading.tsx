import { LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <main role="status" aria-live="polite" className="flex min-h-screen items-center justify-center bg-background px-6 text-center">
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white px-8 py-7 shadow-lg">
        <LoaderCircle className="h-8 w-8 animate-spin text-primary" />
        <p className="text-sm font-semibold text-slate-700">Loading your next page…</p>
      </div>
    </main>
  );
}
