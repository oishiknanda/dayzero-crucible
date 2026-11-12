import type { Alert, SourceSpec } from "./types";

export const DAY = 86_400_000;
export const MAX_AGE_MS = 30 * DAY;
export const INDIA_LOCATION = /\b(india|bengaluru|bangalore|hyderabad|pune|mumbai|gurugram|gurgaon|new delhi|delhi|chennai|noida|kolkata|ahmedabad|kochi|coimbatore|thiruvananthapuram|jaipur|chandigarh|indore|nagpur|mysuru|mysore)\b/i;
export const TECHNICAL_ROLE = /software|engineer|engineering|developer|development|frontend|front-end|back.?end|full.?stack|mobile|machine learning|\bml\b|\bai\b|data science|data scientist|data engineer|analyst|site reliability|\bsre\b|devops|cloud|security|\bqa\b|quality|programmer|technology|\bsde\b|intern|graduate|trainee|architect/i;

type Hit = {
  title: string;
  department?: string | null;
  location: string;
  published: number;
  url: string;
  id: string;
  employmentType?: string | null;
  workplaceType?: string | null;
};

function httpsOn(value: unknown, hosts: string[]): value is string {
  if (typeof value !== "string") return false;
  try {
    const u = new URL(value);
    if (u.protocol !== "https:") return false;
    return hosts.indexOf("*") !== -1 || hosts.some((h) => u.hostname === h || u.hostname.endsWith("." + h));
  } catch {
    return false;
  }
}

function str(v: unknown): string {
  return typeof v === "string" ? v : "";
}

function toAlerts(company: string, prefix: string, hits: Hit[], now: number, hosts: string[]): Alert[] {
  const cutoff = now - MAX_AGE_MS;
  const out: Alert[] = [];
  for (const h of hits) {
    if (!h.id || !h.title || !Number.isFinite(h.published)) continue;
    if (h.published < cutoff || h.published > now + DAY) continue;
    if (!TECHNICAL_ROLE.test(`${h.title} ${h.department || ""}`)) continue;
    if (!INDIA_LOCATION.test(h.location)) continue;
    if (!httpsOn(h.url, hosts)) continue;
    out.push({
      id: `${prefix}-${h.id}`,
      company,
      title: h.title,
      department: h.department || null,
      location: h.location,
      employmentType: h.employmentType || null,
      workplaceType: h.workplaceType || null,
      publishedAt: new Date(Math.min(h.published, now)).toISOString(),
      jobUrl: h.url,
    });
  }
  return out;
}

async function getJson(url: string, init?: RequestInit, revalidate = 300): Promise<unknown> {
  const res = await fetch(url, {
    ...init,
    headers: { Accept: "application/json", ...((init && init.headers) || {}) },
    signal: AbortSignal.timeout(9000),
    next: { revalidate },
  } as RequestInit);
  if (!res.ok) throw new Error(`${url} returned ${res.status}`);
  return res.json();
}

function arr(v: unknown): Array<Record<string, unknown>> {
  return Array.isArray(v) ? (v as Array<Record<string, unknown>>) : [];
}

function obj(v: unknown): Record<string, unknown> {
  return v && typeof v === "object" ? (v as Record<string, unknown>) : {};
}

/* ----------------------------- ATS adapters ----------------------------- */

async function greenhouse(company: string, slug: string, now: number): Promise<Alert[]> {
  const p = obj(await getJson(`https://boards-api.greenhouse.io/v1/boards/${slug}/jobs`));
  // updated_at is the only date in the list call; it is a good-enough proxy for freshness.
  const hits = arr(p.jobs).map((j): Hit => ({
    id: String(j.id ?? ""),
    title: str(j.title),
    location: str(obj(j.location).name),
    published: Date.parse(str(j.updated_at)),
    url: str(j.absolute_url),
  }));
  return toAlerts(company, `gh-${slug}`, hits, now, ["*"]);
}

async function lever(company: string, slug: string, now: number): Promise<Alert[]> {
  const list = arr(await getJson(`https://api.lever.co/v0/postings/${slug}?mode=json`));
  const hits = list.map((j): Hit => {
    const c = obj(j.categories);
    const all = Array.isArray(c.allLocations) ? (c.allLocations as unknown[]).map(str).join(", ") : "";
    return {
      id: str(j.id),
      title: str(j.text),
      department: str(c.team) || null,
      location: str(c.location) || all,
      published: typeof j.createdAt === "number" ? j.createdAt : NaN,
      url: str(j.hostedUrl),
      employmentType: str(c.commitment) || null,
      workplaceType: str(j.workplaceType) || null,
    };
  });
  return toAlerts(company, `lv-${slug}`, hits, now, ["lever.co"]);
}

async function ashby(company: string, slug: string, now: number): Promise<Alert[]> {
  const p = obj(await getJson(`https://api.ashbyhq.com/posting-api/job-board/${slug}`));
  const hits = arr(p.jobs).filter((j) => j.isListed !== false).map((j): Hit => ({
    id: str(j.id),
    title: str(j.title),
    department: str(j.department) || str(j.team) || null,
    location: str(j.location),
    published: Date.parse(str(j.publishedAt)),
    url: str(j.jobUrl),
    employmentType: str(j.employmentType) || null,
    workplaceType: str(j.workplaceType) || null,
  }));
  return toAlerts(company, `ab-${slug}`, hits, now, ["ashbyhq.com"]);
}

async function workable(company: string, slug: string, now: number): Promise<Alert[]> {
  const p = obj(await getJson(`https://apply.workable.com/api/v1/widget/accounts/${slug}?details=true`));
  const hits = arr(p.jobs).map((j): Hit => ({
    id: str(j.shortcode),
    title: str(j.title),
    department: str(j.department) || null,
    location: [str(j.city), str(j.state), str(j.country)].filter(Boolean).join(", "),
    published: Date.parse(str(j.published_on) || str(j.created_at)),
    url: str(j.url) || `https://apply.workable.com/${slug}/j/${str(j.shortcode)}/`,
    employmentType: str(j.employment_type) || null,
  }));
  return toAlerts(company, `wk-${slug}`, hits, now, ["workable.com"]);
}

async function smartrecruiters(company: string, slug: string, now: number): Promise<Alert[]> {
  const p = obj(await getJson(`https://api.smartrecruiters.com/v1/companies/${slug}/postings?limit=100&country=in`));
  const hits = arr(p.content).map((j): Hit => {
    const loc = obj(j.location);
    return {
      id: str(j.id),
      title: str(j.name),
      department: str(obj(j.department).label) || null,
      location: [str(loc.city), str(loc.region), str(loc.country) === "in" ? "India" : str(loc.country)].filter(Boolean).join(", "),
      published: Date.parse(str(j.releasedDate)),
      url: `https://jobs.smartrecruiters.com/${slug}/${str(j.id)}`,
      employmentType: str(obj(j.typeOfEmployment).label) || null,
    };
  });
  return toAlerts(company, `sr-${slug}`, hits, now, ["smartrecruiters.com"]);
}

async function recruitee(company: string, slug: string, now: number): Promise<Alert[]> {
  const p = obj(await getJson(`https://${slug}.recruitee.com/api/offers/`));
  const hits = arr(p.offers).map((j): Hit => ({
    id: String(j.id ?? ""),
    title: str(j.title),
    department: str(j.department) || null,
    location: str(j.location) || str(j.country),
    published: Date.parse(str(j.published_at) || str(j.created_at)),
    url: str(j.careers_url),
  }));
  return toAlerts(company, `rc-${slug}`, hits, now, ["recruitee.com"]);
}

/** "Posted Today", "Posted Yesterday", "Posted 5 Days Ago", "Posted 30+ Days Ago" -> days, or null. */
export function workdayAgeDays(text: string): number | null {
  const t = text.toLowerCase();
  if (t.indexOf("today") !== -1) return 0;
  if (t.indexOf("yesterday") !== -1) return 1;
  if (t.indexOf("30+") !== -1) return null;
  const m = /(\d+)\s+days?\s+ago/.exec(t);
  return m ? parseInt(m[1], 10) : null;
}

async function workday(company: string, spec: Extract<SourceSpec, { kind: "workday" }>, now: number): Promise<Alert[]> {
  const hits: Hit[] = [];
  for (let page = 0; page < 6; page++) {
    const p = obj(await getJson(`https://${spec.host}/wday/cxs/${spec.tenant}/${spec.site}/jobs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ appliedFacets: {}, limit: 20, offset: page * 20, searchText: "software engineer" }),
    }));
    const postings = arr(p.jobPostings);
    if (!postings.length) break;
    for (const j of postings) {
      const days = workdayAgeDays(str(j.postedOn));
      const path = str(j.externalPath);
      if (days === null || !path) continue;
      hits.push({
        id: path,
        title: str(j.title),
        // externalPath embeds the city, which helps when locationsText says "2 Locations".
        location: `${str(j.locationsText)} ${path}`.trim(),
        published: now - days * DAY,
        url: `https://${spec.host}/en-US/${spec.site}${path}`,
      });
    }
    if (postings.length < 20) break;
  }
  return toAlerts(company, `wd-${spec.tenant}`, hits, now, ["myworkdayjobs.com"]).map((a) => {
    const base = a.location.split("/job/")[0].trim();
    return { ...a, location: INDIA_LOCATION.test(base) ? base : "India" };
  });
}

/* ------------------------- Big-company own portals ------------------------ */

async function microsoft(company: string, now: number): Promise<Alert[]> {
  const url = "https://gcsservices.careers.microsoft.com/search/api/v1/search?lc=India&l=en_us&pg=1&pgSz=50&o=Recent&flt=true&q=software";
  const res = obj(obj(obj(await getJson(url)).operationResult).result);
  const hits = arr(res.jobs).map((j): Hit => {
    const props = obj(j.properties);
    const locs = Array.isArray(props.locations) ? (props.locations as unknown[]).map(str).join(", ") : "";
    return {
      id: str(j.jobId),
      title: str(j.title),
      location: locs || str(props.primaryLocation),
      published: Date.parse(str(j.postingDate)),
      url: `https://jobs.careers.microsoft.com/global/en/job/${str(j.jobId)}`,
    };
  });
  return toAlerts(company, "ms", hits, now, ["careers.microsoft.com", "microsoft.com"]);
}

async function google(company: string, now: number): Promise<Alert[]> {
  const url = "https://careers.google.com/api/v3/search/?location=India&q=software&page_size=100&hl=en_US";
  const p = obj(await getJson(url));
  const hits = arr(p.jobs).map((j): Hit => {
    const locs = arr(j.locations).map((l) => str(l.display)).filter(Boolean).join("; ");
    const idNum = str(j.id).replace(/\D+/g, "");
    return {
      id: idNum,
      title: str(j.title),
      location: locs,
      published: Date.parse(str(j.publish_date) || str(j.published)),
      url: `https://www.google.com/about/careers/applications/jobs/results/${idNum}`,
    };
  });
  return toAlerts(company, "gg", hits, now, ["google.com"]);
}

export function fetchFromSource(company: string, spec: SourceSpec, now: number): Promise<Alert[]> {
  switch (spec.kind) {
    case "greenhouse": return greenhouse(company, spec.slug, now);
    case "lever": return lever(company, spec.slug, now);
    case "ashby": return ashby(company, spec.slug, now);
    case "workable": return workable(company, spec.slug, now);
    case "smartrecruiters": return smartrecruiters(company, spec.slug, now);
    case "recruitee": return recruitee(company, spec.slug, now);
    case "workday": return workday(company, spec, now);
    case "microsoft": return microsoft(company, now);
    case "google": return google(company, now);
  }
}
