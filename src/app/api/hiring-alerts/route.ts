import { NextResponse } from "next/server";

export const revalidate = 300;

const MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000;
const INDIA_LOCATION = /\b(india|bengaluru|bangalore|hyderabad|pune|mumbai|gurugram|gurgaon|new delhi|delhi|chennai|noida|kolkata)\b/i;
const TECHNICAL_ROLE = /software|engineer|engineering|developer|development|frontend|front-end|back.?end|full.?stack|mobile|machine learning|\bml\b|\bai\b|data science|data engineer|site reliability|\bsre\b|devops|cloud|security engineer|qa engineer|quality engineer|intern/i;

// These employers are already represented in the site's company directory.
// Ashby exposes a public feed with a publishedAt date and direct job/apply URLs.
const ASHBY_BOARDS = [
  { name: "OpenAI", slug: "openai" },
  { name: "Ramp", slug: "ramp" },
  { name: "Notion", slug: "notion" },
  { name: "Plaid", slug: "plaid" },
] as const;

const GREENHOUSE_BOARDS = [
  { name: "Stripe", slug: "stripe", allowedHost: "stripe.com" },
  { name: "Databricks", slug: "databricks", allowedHost: "databricks.com" },
  { name: "Coinbase", slug: "coinbase", allowedHost: "coinbase.com" },
  { name: "GitLab", slug: "gitlab", allowedHost: "gitlab.com" },
  { name: "Airbnb", slug: "airbnb", allowedHost: "airbnb.com" },
  { name: "Twilio", slug: "twilio", allowedHost: "twilio.com" },
  { name: "MongoDB", slug: "mongodb", allowedHost: "mongodb.com" },
  { name: "Elastic", slug: "elastic", allowedHost: "elastic.co" },
  { name: "Cloudflare", slug: "cloudflare", allowedHost: "cloudflare.com" },
  { name: "Figma", slug: "figma", allowedHost: "figma.com" },
  { name: "Dropbox", slug: "dropbox", allowedHost: "dropbox.com" },
  { name: "Asana", slug: "asana", allowedHost: "asana.com" },
  { name: "Instacart", slug: "instacart", allowedHost: "instacart.com" },
  { name: "Robinhood", slug: "robinhood", allowedHost: "robinhood.com" },
  { name: "Pinterest", slug: "pinterest", allowedHost: "pinterest.com" },
] as const;

const WORKDAY_BOARDS = [
  {
    name: "PayPal",
    tenant: "paypal",
    site: "jobs",
    hostname: "paypal.wd1.myworkdayjobs.com",
  },
] as const;

const COMPANY_SOURCES = [
  "Amazon",
  ...ASHBY_BOARDS.map((board) => board.name),
  ...GREENHOUSE_BOARDS.map((board) => board.name),
  ...WORKDAY_BOARDS.map((board) => board.name),
];

type Alert = {
  id: string;
  company: string;
  title: string;
  department: string | null;
  location: string;
  employmentType: string | null;
  workplaceType: string | null;
  publishedAt: string;
  jobUrl: string;
};

function isIndiaRole(location: unknown, country?: unknown) {
  return (typeof location === "string" && INDIA_LOCATION.test(location)) ||
    country === "India" || country === "IN" || country === "IND";
}

function isSafeHttpsUrl(value: unknown, hostname: string): value is string {
  if (typeof value !== "string") return false;
  try {
    const url = new URL(value);
    return url.protocol === "https:" && (url.hostname === hostname || url.hostname.endsWith(`.${hostname}`));
  } catch {
    return false;
  }
}

function isGreenhouseJobUrl(value: unknown, board: (typeof GREENHOUSE_BOARDS)[number]): value is string {
  if (isSafeHttpsUrl(value, board.allowedHost)) return true;
  if (typeof value !== "string") return false;
  try {
    const url = new URL(value);
    return url.protocol === "https:" &&
      (url.hostname === "job-boards.greenhouse.io" || url.hostname === "boards.greenhouse.io") &&
      url.pathname.toLowerCase().startsWith(`/${board.slug}/jobs/`);
  } catch {
    return false;
  }
}

function isAshbyUrl(value: unknown, slug: string): value is string {
  if (typeof value !== "string") return false;
  try {
    const url = new URL(value);
    return url.protocol === "https:" && url.hostname === "jobs.ashbyhq.com" &&
      url.pathname.toLowerCase().startsWith(`/${slug}/`);
  } catch {
    return false;
  }
}

async function fetchAshby(board: (typeof ASHBY_BOARDS)[number], now: number): Promise<Alert[]> {
  const response = await fetch(`https://api.ashbyhq.com/posting-api/job-board/${board.slug}`, {
    headers: { Accept: "application/json" },
    next: { revalidate: 300 },
  });
  if (!response.ok) throw new Error(`Ashby board returned ${response.status}`);
  const payload: { jobs?: Array<Record<string, unknown>> } = await response.json();
  const cutoff = now - MAX_AGE_MS;

  return (Array.isArray(payload.jobs) ? payload.jobs : []).flatMap((job): Alert[] => {
    const title = typeof job.title === "string" ? job.title : "";
    const department = typeof job.department === "string" ? job.department :
      typeof job.team === "string" ? job.team : "";
    const location = typeof job.location === "string" ? job.location : "";
    const publishedTime = typeof job.publishedAt === "string" ? Date.parse(job.publishedAt) : NaN;
    const postal = job.address && typeof job.address === "object"
      ? (job.address as { postalAddress?: { addressCountry?: unknown } }).postalAddress
      : undefined;

    if (!job.id || !title || !Number.isFinite(publishedTime) || publishedTime < cutoff ||
      publishedTime > now || job.isListed === false || !TECHNICAL_ROLE.test(`${title} ${department}`) ||
      !isIndiaRole(location, postal?.addressCountry) || !isAshbyUrl(job.jobUrl, board.slug)) return [];

    return [{
      id: `${board.slug}-${String(job.id)}`,
      company: board.name,
      title,
      department: department || null,
      location: location || "India",
      employmentType: typeof job.employmentType === "string" ? job.employmentType : null,
      workplaceType: typeof job.workplaceType === "string" ? job.workplaceType : null,
      publishedAt: new Date(publishedTime).toISOString(),
      jobUrl: job.jobUrl,
    }];
  });
}

type GreenhouseJob = {
  id?: number;
  title?: string;
  updated_at?: string;
  absolute_url?: string;
  location?: { name?: string };
  departments?: Array<{ name?: string }>;
};

async function fetchGreenhouse(board: (typeof GREENHOUSE_BOARDS)[number], now: number): Promise<Alert[]> {
  const response = await fetch(`https://boards-api.greenhouse.io/v1/boards/${board.slug}/jobs`, {
    headers: { Accept: "application/json" },
    next: { revalidate: 300 },
  });
  if (!response.ok) throw new Error(`Greenhouse board returned ${response.status}`);
  const payload: { jobs?: GreenhouseJob[] } = await response.json();
  const coarseCutoff = now - MAX_AGE_MS - 10 * 24 * 60 * 60 * 1000;
  const candidates = (Array.isArray(payload.jobs) ? payload.jobs : [])
    .filter((job) => job.id && job.title && job.updated_at && job.location?.name &&
      INDIA_LOCATION.test(job.location.name) && TECHNICAL_ROLE.test(job.title) &&
      Date.parse(job.updated_at) >= coarseCutoff &&
      isGreenhouseJobUrl(job.absolute_url, board))
    .sort((a, b) => Date.parse(b.updated_at || "") - Date.parse(a.updated_at || ""))
    .slice(0, 25);

  const details = await Promise.allSettled(candidates.map(async (candidate): Promise<Alert | null> => {
    const detailResponse = await fetch(
      `https://boards-api.greenhouse.io/v1/boards/${board.slug}/jobs/${candidate.id}`,
      { headers: { Accept: "application/json" }, next: { revalidate: 1800 } },
    );
    if (!detailResponse.ok) return null;
    const detail: GreenhouseJob & { first_published?: string } = await detailResponse.json();
    const publishedTime = detail.first_published ? Date.parse(detail.first_published) : NaN;
    if (!Number.isFinite(publishedTime) || publishedTime < now - MAX_AGE_MS || publishedTime > now ||
      !detail.title || !isGreenhouseJobUrl(detail.absolute_url, board)) return null;

    return {
      id: `${board.slug}-${candidate.id}`,
      company: board.name,
      title: detail.title,
      department: candidate.departments?.map((item) => item.name).filter(Boolean).join(", ") || null,
      location: candidate.location?.name || "India",
      employmentType: null,
      workplaceType: null,
      publishedAt: new Date(publishedTime).toISOString(),
      jobUrl: detail.absolute_url,
    };
  }));

  return details.flatMap((item) => item.status === "fulfilled" && item.value ? [item.value] : []);
}

type AmazonJob = {
  id?: string;
  title?: string;
  job_path?: string;
  posted_date?: string;
  job_category?: string;
  job_family?: string;
  location?: string;
  country_code?: string;
};

async function fetchAmazon(now: number): Promise<Alert[]> {
  const params = new URLSearchParams({ base_query: "software", country: "IND", result_limit: "100", sort: "recent" });
  const response = await fetch(`https://www.amazon.jobs/en/search.json?${params.toString()}`, {
    headers: { Accept: "application/json" },
    next: { revalidate: 300 },
  });
  if (!response.ok) throw new Error(`Amazon jobs returned ${response.status}`);
  const payload: { jobs?: AmazonJob[] } = await response.json();
  const cutoff = now - MAX_AGE_MS;

  return (Array.isArray(payload.jobs) ? payload.jobs : []).flatMap((job): Alert[] => {
    const title = typeof job.title === "string" ? job.title.trim() : "";
    const category = `${job.job_category ?? ""} ${job.job_family ?? ""}`;
    const publishedTime = typeof job.posted_date === "string" ? Date.parse(job.posted_date) : NaN;
    if (!job.id || !title || !Number.isFinite(publishedTime) || publishedTime < cutoff ||
      publishedTime > now || !TECHNICAL_ROLE.test(`${title} ${category}`) ||
      !isIndiaRole(job.location, job.country_code) ||
      typeof job.job_path !== "string" || !/^\/en\/jobs\/\d+\/[a-z0-9-]+$/i.test(job.job_path)) return [];

    return [{
      id: `amazon-${job.id}`,
      company: "Amazon",
      title,
      department: job.job_category || job.job_family || null,
      location: job.location || "India",
      employmentType: null,
      workplaceType: null,
      publishedAt: new Date(publishedTime).toISOString(),
      jobUrl: `https://www.amazon.jobs${job.job_path}`,
    }];
  });
}

type WorkdayPosting = {
  title?: string;
  externalPath?: string;
  locationsText?: string;
  postedOn?: string;
};

async function fetchWorkday(board: (typeof WORKDAY_BOARDS)[number], now: number): Promise<Alert[]> {
  const cxsBase = `https://${board.hostname}/wday/cxs/${board.tenant}/${board.site}`;
  const requestPage = async (offset: number) => {
    const response = await fetch(`${cxsBase}/jobs`, {
      method: "POST",
      headers: { Accept: "application/json", "Accept-Language": "en-US", "Content-Type": "application/json" },
      body: JSON.stringify({ appliedFacets: {}, limit: 20, offset, searchText: "software" }),
      next: { revalidate: 300 },
    });
    if (!response.ok) throw new Error(`${board.name} career search returned ${response.status}`);
    return response.json() as Promise<{ total?: number; jobPostings?: WorkdayPosting[] }>;
  };

  const firstPage = await requestPage(0);
  const pageCount = Math.min(10, Math.ceil((firstPage.total ?? 0) / 20));
  const remainingPages = await Promise.all(Array.from({ length: Math.max(0, pageCount - 1) }, (_, index) =>
    requestPage((index + 1) * 20).catch(() => ({ jobPostings: [] as WorkdayPosting[] })),
  ));
  const cutoff = now - MAX_AGE_MS;
  const candidates = [firstPage, ...remainingPages]
    .flatMap((page) => Array.isArray(page.jobPostings) ? page.jobPostings : [])
    .filter((posting) => posting.title && posting.externalPath &&
      isIndiaRole(posting.locationsText) && TECHNICAL_ROLE.test(posting.title) &&
      !/30\+\s*days ago/i.test(posting.postedOn ?? "") &&
      /^\/job\/[a-z0-9-]+\/[a-z0-9_-]+$/i.test(posting.externalPath));

  const details = await Promise.allSettled(candidates.map(async (posting): Promise<Alert | null> => {
    const detailResponse = await fetch(`${cxsBase}${posting.externalPath}`, {
      headers: { Accept: "application/json", "Accept-Language": "en-US" },
      next: { revalidate: 1800 },
    });
    if (!detailResponse.ok) return null;
    const detail: { jobPostingInfo?: { title?: string; startDate?: string; postedOn?: string; externalUrl?: string } } = await detailResponse.json();
    const info = detail.jobPostingInfo;
    const publishedTime = info?.startDate ? Date.parse(`${info.startDate}T00:00:00Z`) : NaN;
    if (!info?.title || !Number.isFinite(publishedTime) || publishedTime < cutoff || publishedTime > now) return null;

    const postingPath = new URL(`/en-US/${board.site}${posting.externalPath}`, `https://${board.hostname}`);
    if (postingPath.hostname !== board.hostname || postingPath.protocol !== "https:") return null;
    return {
      id: `paypal-${posting.externalPath}`,
      company: board.name,
      title: info.title,
      department: null,
      location: posting.locationsText || "India",
      employmentType: null,
      workplaceType: null,
      publishedAt: new Date(publishedTime).toISOString(),
      jobUrl: postingPath.toString(),
    };
  }));

  return details.flatMap((item) => item.status === "fulfilled" && item.value ? [item.value] : []);
}

export async function GET() {
  const now = Date.now();
  const results = await Promise.allSettled([
    fetchAmazon(now),
    ...ASHBY_BOARDS.map((board) => fetchAshby(board, now)),
    ...GREENHOUSE_BOARDS.map((board) => fetchGreenhouse(board, now)),
    ...WORKDAY_BOARDS.map((board) => fetchWorkday(board, now)),
  ]);
  const jobs = results.flatMap((result) => result.status === "fulfilled" ? result.value : []);
  jobs.sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));

  return NextResponse.json({
    jobs,
    companySources: COMPANY_SOURCES,
    updatedAt: new Date(now).toISOString(),
    sourcesAvailable: results.filter((result) => result.status === "fulfilled").length,
    sourcesChecked: results.length,
  }, {
    headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=60" },
  });
}
