import type { Alert } from "./types";
import { DAY, INDIA_LOCATION, MAX_AGE_MS, TECHNICAL_ROLE } from "./adapters";
import { buildMatcher } from "./match";

/**
 * Fallback tier for companies whose own career portal cannot be read directly
 * (TCS, Infosys, Wipro, Deloitte, EY, ...). Both providers are licensed job-data APIs and are
 * optional: set the env vars to switch them on.
 *
 *   ADZUNA_APP_ID, ADZUNA_APP_KEY      https://developer.adzuna.com  (free tier)
 *   JOOBLE_API_KEY                     https://in.jooble.org/api/about (free, 100 requests/day)
 *   JOOBLE_API_HOST (default in.jooble.org), HIRING_JOOBLE_MAX (default 20 companies per 6h)
 *   JSEARCH_API_KEY                    RapidAPI "JSearch"           (limited free plan)
 *   HIRING_ADZUNA_PAGES (default 8)    pages of 50 generic India software jobs
 *   HIRING_JSEARCH_MAX (default 20)    max companies queried on JSearch per refresh
 *
 * Results are cached for 6 hours so the free quotas last.
 */
const SIX_HOURS = 21_600;

export const aggregatorEnabled = () =>
  !!((process.env.ADZUNA_APP_ID && process.env.ADZUNA_APP_KEY) || process.env.JSEARCH_API_KEY || process.env.JOOBLE_API_KEY);

async function json(url: string, init?: RequestInit): Promise<Record<string, unknown>> {
  const res = await fetch(url, { ...init, signal: AbortSignal.timeout(12000), next: { revalidate: SIX_HOURS } } as RequestInit);
  if (!res.ok) throw new Error(`${url.split("?")[0]} returned ${res.status}`);
  return (await res.json()) as Record<string, unknown>;
}

const s = (v: unknown) => (typeof v === "string" ? v : "");
const o = (v: unknown): Record<string, unknown> => (v && typeof v === "object" ? (v as Record<string, unknown>) : {});
const list = (v: unknown): Array<Record<string, unknown>> => (Array.isArray(v) ? (v as Array<Record<string, unknown>>) : []);

function okHttps(u: string, hosts?: string[]): boolean {
  try {
    const x = new URL(u);
    if (x.protocol !== "https:") return false;
    return !hosts || hosts.some((h) => x.hostname === h || x.hostname.endsWith("." + h));
  } catch {
    return false;
  }
}

async function adzuna(names: string[], priority: string[], now: number): Promise<Alert[]> {
  const id = process.env.ADZUNA_APP_ID;
  const key = process.env.ADZUNA_APP_KEY;
  if (!id || !key) return [];
  const match = buildMatcher(names);
  const pages = Math.min(20, Math.max(1, parseInt(process.env.HIRING_ADZUNA_PAGES || "8", 10) || 8));
  const queries: string[] = ["software engineer"].concat(priority.map((n) => `${n} software`));
  const urls: string[] = [];
  queries.forEach((q, qi) => {
    for (let p = 1; p <= (qi === 0 ? pages : 1); p++) {
      urls.push(`https://api.adzuna.com/v1/api/jobs/in/search/${p}?app_id=${id}&app_key=${key}&results_per_page=50&max_days_old=30&sort_by=date&what=${encodeURIComponent(q)}`);
    }
  });
  const settled = await Promise.allSettled(urls.map((u) => json(u)));
  const out: Alert[] = [];
  for (const r of settled) {
    if (r.status !== "fulfilled") continue;
    for (const j of list(r.value.results)) {
      const company = match(s(o(j.company).display_name));
      const title = s(j.title);
      const location = s(o(j.location).display_name);
      const published = Date.parse(s(j.created));
      const url = s(j.redirect_url);
      if (!company || !title || !Number.isFinite(published) || published < now - MAX_AGE_MS) continue;
      if (!TECHNICAL_ROLE.test(title) || !okHttps(url, ["adzuna.in", "adzuna.com"])) continue;
      out.push({
        id: `az-${s(j.id)}`, company, title, department: s(o(j.category).label) || null,
        location: INDIA_LOCATION.test(location) ? location : location ? `${location}, India` : "India",
        employmentType: s(j.contract_time) || null, workplaceType: null,
        publishedAt: new Date(Math.min(published, now)).toISOString(), jobUrl: url, aggregated: true,
      });
    }
  }
  return out;
}

async function jsearch(wanted: string[], now: number): Promise<Alert[]> {
  const key = process.env.JSEARCH_API_KEY;
  if (!key || !wanted.length) return [];
  const max = Math.max(0, parseInt(process.env.HIRING_JSEARCH_MAX || "20", 10) || 20);
  const targets = wanted.slice(0, max);
  const match = buildMatcher(targets);
  const settled = await Promise.allSettled(targets.map((name) =>
    json(`https://jsearch.p.rapidapi.com/search?query=${encodeURIComponent(`software developer jobs at ${name} in India`)}&page=1&num_pages=1&country=in&date_posted=month`, {
      headers: { "X-RapidAPI-Key": key, "X-RapidAPI-Host": "jsearch.p.rapidapi.com" },
    })));
  const out: Alert[] = [];
  for (const r of settled) {
    if (r.status !== "fulfilled") continue;
    for (const j of list(r.value.data)) {
      const company = match(s(j.employer_name));
      const title = s(j.job_title);
      const location = [s(j.job_city), s(j.job_state), s(j.job_country) === "IN" ? "India" : s(j.job_country)].filter(Boolean).join(", ");
      const published = Date.parse(s(j.job_posted_at_datetime_utc));
      const url = s(j.job_apply_link);
      if (!company || !title || !Number.isFinite(published) || published < now - MAX_AGE_MS || published > now + DAY) continue;
      if (!TECHNICAL_ROLE.test(title) || !INDIA_LOCATION.test(location || "India") || !okHttps(url)) continue;
      out.push({
        id: `js-${s(j.job_id)}`, company, title, department: null, location: location || "India",
        employmentType: s(j.job_employment_type) || null, workplaceType: j.job_is_remote === true ? "Remote" : null,
        publishedAt: new Date(Math.min(published, now)).toISOString(), jobUrl: url, aggregated: true,
      });
    }
  }
  return out;
}

// Jooble's free key allows 100 calls/day, and POST responses are not reliably cached by Next,
// so keep our own 6-hour cache and rotate through the companies in small batches.
let joobleCache: { at: number; jobs: Alert[] } | null = null;

async function jooble(wanted: string[], now: number): Promise<Alert[]> {
  const key = process.env.JOOBLE_API_KEY;
  if (!key || !wanted.length) return [];
  if (joobleCache && now - joobleCache.at < SIX_HOURS * 1000) return joobleCache.jobs;
  const host = process.env.JOOBLE_API_HOST || "in.jooble.org";
  const max = Math.max(1, parseInt(process.env.HIRING_JOOBLE_MAX || "20", 10) || 20);
  const window = Math.floor(now / (SIX_HOURS * 1000));
  const start = (window * max) % wanted.length;
  const batch: string[] = [];
  for (let i = 0; i < Math.min(max, wanted.length); i++) batch.push(wanted[(start + i) % wanted.length]);
  const match = buildMatcher(batch);
  const settled = await Promise.allSettled(batch.map((name) =>
    fetch(`https://${host}/api/${key}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ keywords: `${name} software engineer`, location: "India", page: 1, companysearch: false }),
      signal: AbortSignal.timeout(12000),
      cache: "no-store",
    }).then(async (res) => {
      if (!res.ok) throw new Error(`jooble returned ${res.status}`);
      return (await res.json()) as Record<string, unknown>;
    })));
  const out: Alert[] = [];
  for (const r of settled) {
    if (r.status !== "fulfilled") continue;
    for (const j of list(r.value.jobs)) {
      const company = match(s(j.company));
      const title = s(j.title);
      const location = s(j.location);
      const published = Date.parse(s(j.updated));
      const url = s(j.link);
      if (!company || !title || !Number.isFinite(published) || published < now - MAX_AGE_MS || published > now + DAY) continue;
      if (!TECHNICAL_ROLE.test(title) || !INDIA_LOCATION.test(location || "India") || !okHttps(url, ["jooble.org"])) continue;
      const jid = `jb-${s(j.id) || url}`;
      if (out.some((x) => x.id === jid)) continue;
      out.push({
        id: jid, company, title, department: null, location: location || "India",
        employmentType: s(j.type) || null, workplaceType: null,
        publishedAt: new Date(Math.min(published, now)).toISOString(), jobUrl: url, aggregated: true,
      });
    }
  }
  // keep earlier batches' results too, so coverage grows across the day
  const merged = (joobleCache ? joobleCache.jobs.filter((x) => batch.indexOf(x.company) === -1) : []).concat(out);
  joobleCache = { at: now, jobs: merged };
  return merged;
}

/** names = every directory company without a working direct feed. */
export async function fetchAggregated(names: string[], now: number): Promise<Alert[]> {
  if (!aggregatorEnabled() || !names.length) return [];
  const priority = ["TCS", "Infosys", "Wipro", "Cognizant", "HCLTech", "Accenture", "Capgemini", "Tech Mahindra", "Deloitte", "PwC", "EY", "KPMG"]
    .filter((n) => names.indexOf(n) !== -1);
  const [a, j, b] = await Promise.allSettled([adzuna(names, priority, now), jsearch(names, now), jooble(names, now)]);
  return ([] as Alert[]).concat(
    a.status === "fulfilled" ? a.value : [],
    j.status === "fulfilled" ? j.value : [],
    b.status === "fulfilled" ? b.value : [],
  );
}
