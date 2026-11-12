import { DAY, MAX_AGE_MS } from "./adapters";
import type { Alert } from "./types";

/**
 * Jobs found by the career-page agent (scripts/crawl-careers.mjs, run by .github/workflows/crawl-careers.yml).
 * The agent publishes crawled-jobs.json; the site only reads it, so no browser runs on the web host.
 */
export type CrawledResult = { jobs: Alert[]; companies: Record<string, number> };

const STALE_AFTER_MS = 3 * DAY;

export function crawledUrl(): string {
  return process.env.CRAWLED_JOBS_URL ||
    "https://raw.githubusercontent.com/oishiknanda/dayzero-crucible/crawl-data/crawled-jobs.json";
}

export function parseCrawled(file: unknown, names: string[], now: number): CrawledResult {
  const empty: CrawledResult = { jobs: [], companies: {} };
  if (!file || typeof file !== "object") return empty;
  const f = file as { generatedAt?: unknown; companies?: Record<string, { ok?: boolean }>; jobs?: unknown };
  const generated = typeof f.generatedAt === "string" ? Date.parse(f.generatedAt) : NaN;
  if (!Number.isFinite(generated) || now - generated > STALE_AFTER_MS) return empty;
  const jobs: Alert[] = [];
  const companies: Record<string, number> = {};
  for (const raw of Array.isArray(f.jobs) ? f.jobs : []) {
    const j = raw as Record<string, unknown>;
    const company = typeof j.company === "string" ? j.company : "";
    const published = typeof j.publishedAt === "string" ? Date.parse(j.publishedAt) : NaN;
    const url = typeof j.jobUrl === "string" ? j.jobUrl : "";
    if (names.indexOf(company) === -1 || typeof j.title !== "string" || typeof j.id !== "string") continue;
    if (!Number.isFinite(published) || published < now - MAX_AGE_MS || published > now + DAY) continue;
    if (!/^https:\/\//i.test(url)) continue;
    jobs.push({
      id: j.id, company, title: j.title, department: null,
      location: typeof j.location === "string" && j.location ? j.location : "India",
      employmentType: null, workplaceType: null,
      publishedAt: new Date(published).toISOString(), jobUrl: url, viaAgent: true,
    });
    companies[company] = (companies[company] || 0) + 1;
  }
  return { jobs, companies };
}

export async function fetchCrawled(names: string[], now: number): Promise<CrawledResult> {
  const headers: Record<string, string> = { Accept: "application/json" };
  if (process.env.CRAWLED_JOBS_TOKEN) headers.Authorization = `token ${process.env.CRAWLED_JOBS_TOKEN}`;
  const res = await fetch(crawledUrl(), { headers, signal: AbortSignal.timeout(10000), next: { revalidate: 300 } } as RequestInit);
  if (!res.ok) throw new Error(`crawled jobs returned ${res.status}`);
  return parseCrawled(await res.json(), names, now);
}
