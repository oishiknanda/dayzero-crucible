import { ALL_COMPANY_NAMES } from "../../data/hiringCompanies";
import { careersUrlFor } from "../../data/careerLinks";
import { fetchFromSource } from "./adapters";
import { fetchCrawled } from "./crawled";
import { aggregatorEnabled, fetchAggregated } from "./aggregator";
import { LEGACY_COMPANIES, sourceLabel, sourcesFor } from "./sources";
import type { Alert, CoverageRow } from "./types";

export type { Alert, CoverageRow } from "./types";

/** Run async jobs with a small concurrency limit so ~100 boards do not exhaust sockets. */
async function pool<T, R>(items: T[], size: number, fn: (item: T) => Promise<R>): Promise<Array<PromiseSettledResult<R>>> {
  const out: Array<PromiseSettledResult<R>> = new Array(items.length);
  let next = 0;
  async function worker() {
    while (next < items.length) {
      const i = next++;
      try { out[i] = { status: "fulfilled", value: await fn(items[i]) }; }
      catch (reason) { out[i] = { status: "rejected", reason }; }
    }
  }
  const workers: Array<Promise<void>> = [];
  for (let w = 0; w < Math.min(size, items.length); w++) workers.push(worker());
  await Promise.all(workers);
  return out;
}

export function dedupe(jobs: Alert[]): Alert[] {
  const seen: Record<string, true> = {};
  const out: Alert[] = [];
  for (const j of jobs) {
    const key = `${j.company}|${j.title}|${j.location}`.toLowerCase().replace(/\s+/g, " ");
    if (seen[key] || seen[j.id]) continue;
    seen[key] = true; seen[j.id] = true;
    out.push(j);
  }
  return out;
}

/**
 * Everything beyond the original hand-wired feed:
 *  - direct feeds for every company that has a known source (registry / probe results)
 *  - aggregator fallback for the rest
 *  - a coverage row for every company in the directory.
 */
export async function collectAllCompanies(now: number, legacy: { name: string; ok: boolean }[], legacyJobs: Alert[]) {
  const legacyNames = LEGACY_COMPANIES;
  const todo = ALL_COMPANY_NAMES.filter((n) => legacyNames.indexOf(n) === -1)
    .map((name) => ({ name, specs: sourcesFor(name) }));
  const direct = todo.filter((t) => t.specs.length);

  const crawledP = fetchCrawled(ALL_COMPANY_NAMES, now).catch(() => ({ jobs: [] as Alert[], companies: {} as Record<string, number> }));
  const runs = await pool(direct, 12, async (t) => {
    let lastErr: unknown = null;
    for (const spec of t.specs) {
      try { return { spec, jobs: await fetchFromSource(t.name, spec, now) }; }
      catch (e) { lastErr = e; }
    }
    throw lastErr || new Error("no source");
  });

  const okDirect: Record<string, { label: string; jobs: Alert[] }> = {};
  runs.forEach((r, i) => {
    if (r.status === "fulfilled") okDirect[direct[i].name] = { label: sourceLabel(r.value.spec), jobs: r.value.jobs };
  });

  const crawled = await crawledP;
  // the career-page agent fills in companies that have no direct feed
  const crawledJobs = crawled.jobs.filter((j) => !okDirect[j.company] && legacyNames.indexOf(j.company) === -1);
  const crawledBy: Record<string, number> = {};
  crawledJobs.forEach((j) => { crawledBy[j.company] = (crawledBy[j.company] || 0) + 1; });

  const needAgg = todo.map((t) => t.name).filter((n) => !okDirect[n] && !crawledBy[n]);
  const aggJobs = await fetchAggregated(needAgg, now).catch(() => [] as Alert[]);
  const aggBy: Record<string, number> = {};
  aggJobs.forEach((j) => { aggBy[j.company] = (aggBy[j.company] || 0) + 1; });

  const directJobs = Object.keys(okDirect).reduce((acc, k) => acc.concat(okDirect[k].jobs), [] as Alert[]);
  const jobs = dedupe(legacyJobs.concat(directJobs, crawledJobs, aggJobs))
    .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));

  const agg = aggregatorEnabled();
  const coverage: CoverageRow[] = ALL_COMPANY_NAMES.map((name) => {
    const lg = legacy.find((l) => l.name === name);
    if (lg) return { company: name, status: lg.ok ? "live" : "pending", source: "Official career feed", jobs: legacyJobs.filter((j) => j.company === name).length, careersUrl: careersUrlFor(name) } as CoverageRow;
    if (okDirect[name]) return { company: name, status: "live", source: okDirect[name].label, jobs: okDirect[name].jobs.length, careersUrl: careersUrlFor(name) } as CoverageRow;
    if (crawledBy[name]) return { company: name, status: "live", source: "Career-page agent", jobs: crawledBy[name], careersUrl: careersUrlFor(name) } as CoverageRow;
    if (agg) return { company: name, status: "aggregated", source: "Job aggregator", jobs: aggBy[name] || 0, careersUrl: careersUrlFor(name) } as CoverageRow;
    return { company: name, status: "pending", source: "Connecting", jobs: 0, careersUrl: careersUrlFor(name) } as CoverageRow;
  });

  return { jobs, coverage, aggregatorEnabled: agg };
}
