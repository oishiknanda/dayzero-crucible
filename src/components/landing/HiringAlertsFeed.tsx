"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { BadgeCheck, BriefcaseBusiness, ExternalLink, MapPin, RefreshCw, Search } from "lucide-react";

type HiringAlert = {
  id: string;
  company: string;
  title: string;
  department: string | null;
  location: string;
  employmentType: string | null;
  workplaceType: string | null;
  publishedAt: string;
  jobUrl: string;
  aggregated?: boolean;
  viaAgent?: boolean;
};

type CoverageRow = {
  company: string;
  status: "live" | "aggregated" | "alerts" | "pending";
  source: string;
  jobs: number;
  careersUrl: string;
  directSearchUrl?: string;
};

type FeedResponse = {
  jobs: HiringAlert[];
  companySources: string[];
  updatedAt: string;
  sourcesAvailable: number;
  sourcesChecked: number;
  coverage?: CoverageRow[];
  aggregatorEnabled?: boolean;
};

const SEEN_KEY = "dz_hiring_seen";

function loadSeen(): string[] {
  try {
    const raw = window.localStorage.getItem(SEEN_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function formatAge(date: string) {
  const days = Math.max(0, Math.floor((Date.now() - Date.parse(date)) / 86_400_000));
  if (days === 0) return "Posted today";
  if (days === 1) return "Posted yesterday";
  return `Posted ${days} days ago`;
}

function formatTime(date: string) {
  return new Intl.DateTimeFormat("en-IN", { dateStyle: "medium", timeStyle: "short" }).format(new Date(date));
}

export function HiringAlertsFeed() {
  const [data, setData] = useState<FeedResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("All companies");
  const [showCoverage, setShowCoverage] = useState(false);
  const [seen, setSeen] = useState<string[] | null>(null);

  const refresh = useCallback(async () => {
    try {
      const response = await fetch("/api/hiring-alerts", { cache: "no-store" });
      if (!response.ok) throw new Error("Hiring alerts are temporarily unavailable.");
      const result = (await response.json()) as FeedResponse;
      setData(result);
      setError("");
    } catch {
      setError("We couldn’t load hiring alerts right now. Please try again in a moment.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    setSeen(loadSeen());
  }, []);

  // Remember what the visitor has already been shown, so the next visit can flag NEW openings.
  useEffect(() => {
    if (!data || seen === null) return;
    const timer = window.setTimeout(() => {
      try {
        const ids = data.jobs.map((job) => job.id).concat(seen).slice(0, 3000);
        window.localStorage.setItem(SEEN_KEY, JSON.stringify(Array.from(new Set(ids))));
      } catch { /* storage unavailable */ }
    }, 4000);
    return () => window.clearTimeout(timer);
  }, [data, seen]);

  useEffect(() => {
    void refresh();
    const timer = window.setInterval(() => void refresh(), 5 * 60 * 1000);
    return () => window.clearInterval(timer);
  }, [refresh]);

  const monitoredCompanies = useMemo(() => Array.from(new Set([
    ...(data?.companySources ?? []),
    ...(data?.coverage?.map((row) => row.company) ?? []),
    ...(data?.jobs.map((job) => job.company) ?? []),
  ])).sort(), [data?.companySources, data?.coverage, data?.jobs]);

  const coverageSummary = useMemo(() => {
    const rows = data?.coverage ?? [];
    return {
      total: rows.length,
      live: rows.filter((row) => row.status === "live").length,
      aggregated: rows.filter((row) => row.status === "aggregated").length,
      alerts: rows.filter((row) => row.status === "alerts").length,
      pending: rows.filter((row) => row.status === "pending").length,
    };
  }, [data?.coverage]);

  const statusOf = useMemo(() => {
    const map: Record<string, CoverageRow> = {};
    (data?.coverage ?? []).forEach((row) => { map[row.company] = row; });
    return map;
  }, [data?.coverage]);

  const visibleJobs = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return (data?.jobs ?? []).filter((job) => {
      const matchesCompany = selectedCompany === "All companies" || job.company === selectedCompany;
      const searchable = `${job.title} ${job.company} ${job.department ?? ""} ${job.location}`.toLowerCase();
      return matchesCompany && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [data?.jobs, query, selectedCompany]);

  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
      <div className="mb-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-amber-800">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" /> India-first • Official career sources
            </div>
            <h1 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Hiring alerts</h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              Recent software and engineering openings from companies in the DayZero directory. Each alert links directly to the employer’s job post.
            </p>
          </div>
          <button
            type="button"
            onClick={() => { setLoading(true); void refresh(); }}
            disabled={loading}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-800 transition hover:border-slate-500 disabled:cursor-wait disabled:opacity-60"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} /> Refresh alerts
          </button>
        </div>

        <div className="mt-7 grid gap-3 border-t border-slate-100 pt-6 md:grid-cols-[1fr_230px]">
          <label className="relative block">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search role, company, or city"
              className="w-full rounded-xl border border-slate-300 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
            />
          </label>
          <select
            value={selectedCompany}
            onChange={(event) => setSelectedCompany(event.target.value)}
            aria-label="Filter by company"
            className="rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          >
            <option>All companies</option>
            <optgroup label="All companies">
              {monitoredCompanies.map((company) => {
                const count = data?.jobs.filter((job) => job.company === company).length ?? 0;
                const row = statusOf[company];
                const tag = count > 0 ? `${count} open` : row?.status === "pending" ? "careers page only" : "no India openings now";
                return <option key={company} value={company}>{company} · {tag}</option>;
              })}
            </optgroup>
          </select>
        </div>
      </div>

      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 px-1 text-xs font-medium text-slate-500">
        <span>{loading && !data ? "Checking official career feeds…" : `${visibleJobs.length} India-based opening${visibleJobs.length === 1 ? "" : "s"}`}</span>
        {data?.updatedAt && <span>Feed checked {formatTime(data.updatedAt)} · refreshes every 5 minutes</span>}
      </div>

      {coverageSummary.total > 0 && (
        <div className="mb-5 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-xs text-slate-600 sm:px-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span>
              <strong className="text-slate-900">{coverageSummary.live + coverageSummary.aggregated + coverageSummary.alerts}</strong> of {coverageSummary.total} companies have live alerts
              {" "}({coverageSummary.live} live feeds{coverageSummary.alerts ? `, ${coverageSummary.alerts} official alert sync` : ""}{coverageSummary.aggregated ? `, ${coverageSummary.aggregated} via job-data partners` : ""}).
              {coverageSummary.pending ? ` The other ${coverageSummary.pending} link straight to their careers page.` : ""}
            </span>
            <button type="button" onClick={() => setShowCoverage((v) => !v)} className="font-bold text-indigo-700 hover:underline">
              {showCoverage ? "Hide coverage" : "See coverage"}
            </button>
          </div>
          {showCoverage && (
            <div className="mt-3 border-t border-slate-100 pt-3">
              <div className="mb-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] font-semibold">
                <span className="text-emerald-700">● Live feed</span>
                <span className="text-amber-700">● Official alert sync</span>
                <span className="text-sky-700">● Via job-data partner</span>
                <span className="text-slate-500">● Careers page only</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
              {(data?.coverage ?? []).map((row) => (
                <button
                  key={row.company}
                  type="button"
                  onClick={() => setSelectedCompany(row.company)}
                  title={`${row.source} - ${row.jobs} India opening${row.jobs === 1 ? "" : "s"}`}
                  className={`rounded-full border px-2.5 py-1 font-semibold transition hover:border-indigo-400 ${
                    row.status === "live" ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                    : row.status === "aggregated" ? "border-sky-200 bg-sky-50 text-sky-800"
                    : row.status === "alerts" ? "border-amber-200 bg-amber-50 text-amber-800"
                    : "border-slate-200 bg-slate-50 text-slate-500"}`}
                >
                  {row.company}{row.jobs ? ` · ${row.jobs}` : ""}
                </button>
              ))}
              </div>
            </div>
          )}
        </div>
      )}

      {error && (
        <div role="status" className="mb-5 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800">
          {error} <button type="button" onClick={() => { setLoading(true); void refresh(); }} className="ml-1 font-bold underline">Retry</button>
        </div>
      )}

      {selectedCompany !== "All companies" && statusOf[selectedCompany] && (
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-indigo-100 bg-indigo-50 px-4 py-3 text-sm text-indigo-900">
          <span>
            {statusOf[selectedCompany].jobs > 0
              ? `${selectedCompany}: ${statusOf[selectedCompany].jobs} India opening${statusOf[selectedCompany].jobs === 1 ? "" : "s"} found.`
              : statusOf[selectedCompany].status === "pending"
                ? `${selectedCompany}: no live feed yet. Open its careers page to browse openings.`
                : `${selectedCompany}: no India openings found right now.`}
          </span>
          <a href={statusOf[selectedCompany].directSearchUrl || statusOf[selectedCompany].careersUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-bold text-indigo-700 hover:underline">
            {statusOf[selectedCompany].directSearchUrl ? `Search ${selectedCompany} India engineering jobs` : `Open ${selectedCompany} careers page`} <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      )}

      {!loading && !error && visibleJobs.length === 0 && (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
          <BriefcaseBusiness className="mx-auto h-8 w-8 text-slate-400" />
          <h2 className="mt-4 text-lg font-bold text-slate-900">No matching India roles right now</h2>
          <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-600">
            There are no current India openings matching this filter. Companies without a live feed link to their careers page instead.
          </p>
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        {visibleJobs.map((job) => (
          <article key={job.id} className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md sm:p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-indigo-700">
                  {job.company}
                  {seen !== null && seen.length > 0 && seen.indexOf(job.id) === -1 && (
                    <span className="rounded-md bg-amber-100 px-1.5 py-0.5 text-[10px] font-black text-amber-800">NEW</span>
                  )}
                </p>
                <h2 className="mt-2 text-lg font-bold leading-snug text-slate-950">{job.title}</h2>
              </div>
              <span title={job.aggregated ? "Found via a job-data partner" : job.viaAgent ? "Found by scanning the employer’s own careers page" : "Sourced from the employer’s official career board"} className={`mt-0.5 shrink-0 rounded-lg border p-2 ${job.aggregated ? "border-sky-200 bg-sky-50 text-sky-700" : "border-emerald-200 bg-emerald-50 text-emerald-700"}`}>
                <BadgeCheck className="h-4 w-4" />
              </span>
            </div>

            {job.department && <p className="mt-2 text-sm text-slate-600">{job.department}</p>}
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-slate-500">
              <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{job.location}</span>
              <span>{formatAge(job.publishedAt)}</span>
              {job.employmentType && <span>{job.employmentType.replace(/([a-z])([A-Z])/g, "$1 $2")}</span>}
            </div>
            <a
              href={job.jobUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
            >
              {job.aggregated ? "View job post" : "View official job post"} <ExternalLink className="h-4 w-4" />
            </a>
          </article>
        ))}
      </div>

      <p className="mt-8 rounded-xl bg-slate-100 px-4 py-3 text-xs leading-5 text-slate-600">
        Listings are checked every five minutes and automatically hidden 30 days after their original posting date. Always confirm the role is still open on the employer’s career site before applying.
      </p>
    </section>
  );
}
