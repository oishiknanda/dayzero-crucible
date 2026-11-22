import { afterEach, describe, expect, it, vi } from "vitest";
import { fetchFromSource, workdayAgeDays } from "./adapters";
import { buildMatcher } from "./match";
import { dedupe } from "./index";

const NOW = Date.parse("2026-11-12T10:00:00Z");
const recent = "2026-11-10T08:00:00Z";

function mockFetch(payload: unknown) {
  vi.stubGlobal("fetch", vi.fn(async () => ({ ok: true, status: 200, json: async () => payload })));
}
afterEach(() => vi.unstubAllGlobals());

describe("matcher", () => {
  const m = buildMatcher(["TCS", "Visa", "Target", "HCLTech", "EY", "J.P. Morgan Chase"]);
  it("maps aliases and corporate suffixes", () => {
    expect(m("Tata Consultancy Services Limited")).toBe("TCS");
    expect(m("Visa Inc.")).toBe("Visa");
    expect(m("HCL Technologies")).toBe("HCLTech");
    expect(m("Ernst & Young LLP")).toBe("EY");
    expect(m("JPMorgan Chase & Co")).toBe("J.P. Morgan Chase");
  });
  it("does not match look-alikes", () => {
    expect(m("Visagio")).toBeNull();
    expect(m("Target Hospitality")).toBeNull();
    expect(m("")).toBeNull();
  });
});

describe("workday age", () => {
  it("parses posted text", () => {
    expect(workdayAgeDays("Posted Today")).toBe(0);
    expect(workdayAgeDays("Posted Yesterday")).toBe(1);
    expect(workdayAgeDays("Posted 5 Days Ago")).toBe(5);
    expect(workdayAgeDays("Posted 30+ Days Ago")).toBeNull();
  });
});

describe("adapters", () => {
  it("lever keeps recent India engineering roles only", async () => {
    mockFetch([
      { id: "1", text: "Backend Engineer", categories: { location: "Bengaluru, India", team: "Eng" }, hostedUrl: "https://jobs.lever.co/x/1", createdAt: NOW - 86400000 },
      { id: "2", text: "Backend Engineer", categories: { location: "London" }, hostedUrl: "https://jobs.lever.co/x/2", createdAt: NOW - 86400000 },
      { id: "3", text: "Sales Lead", categories: { location: "Pune" }, hostedUrl: "https://jobs.lever.co/x/3", createdAt: NOW - 86400000 },
      { id: "4", text: "SDE", categories: { location: "Pune" }, hostedUrl: "http://evil.example/4", createdAt: NOW - 86400000 },
      { id: "5", text: "SDE", categories: { location: "Pune" }, hostedUrl: "https://jobs.lever.co/x/5", createdAt: NOW - 90 * 86400000 },
    ]);
    const out = await fetchFromSource("Acme", { kind: "lever", slug: "x" }, NOW);
    expect(out.map((a) => a.id)).toEqual(["lv-x-1"]);
  });

  it("greenhouse, workable, smartrecruiters, recruitee normalise", async () => {
    mockFetch({ jobs: [{ id: 9, title: "Software Engineer", location: { name: "Hyderabad, India" }, updated_at: recent, absolute_url: "https://boards.greenhouse.io/x/jobs/9" }] });
    expect((await fetchFromSource("A", { kind: "greenhouse", slug: "x" }, NOW))).toHaveLength(1);
    mockFetch({ jobs: [{ shortcode: "AB1", title: "Data Engineer", city: "Pune", country: "India", published_on: "2026-11-09", url: "https://apply.workable.com/j/AB1" }] });
    expect((await fetchFromSource("A", { kind: "workable", slug: "x" }, NOW))).toHaveLength(1);
    mockFetch({ content: [{ id: "77", name: "Software Developer", releasedDate: recent, location: { city: "Chennai", country: "in" } }] });
    const sr = await fetchFromSource("A", { kind: "smartrecruiters", slug: "Visa" }, NOW);
    expect(sr[0].jobUrl).toBe("https://jobs.smartrecruiters.com/Visa/77");
    mockFetch({ offers: [{ id: 5, title: "Full Stack Developer", location: "Mumbai, India", published_at: recent, careers_url: "https://x.recruitee.com/o/5" }] });
    expect((await fetchFromSource("A", { kind: "recruitee", slug: "x" }, NOW))).toHaveLength(1);
  });

  it("workday uses the city in externalPath when locationsText is generic", async () => {
    mockFetch({ jobPostings: [
      { title: "Software Engineer II", externalPath: "/job/Bengaluru/Software-Engineer-II_R1", locationsText: "2 Locations", postedOn: "Posted 2 Days Ago" },
      { title: "Software Engineer II", externalPath: "/job/Austin/Software-Engineer-II_R2", locationsText: "Austin, TX", postedOn: "Posted 2 Days Ago" },
      { title: "Software Engineer III", externalPath: "/job/Pune/SE3_R3", locationsText: "Pune", postedOn: "Posted 30+ Days Ago" },
    ] });
    const out = await fetchFromSource("Adobe", { kind: "workday", host: "adobe.wd5.myworkdayjobs.com", tenant: "adobe", site: "external" }, NOW);
    expect(out).toHaveLength(1);
    expect(out[0].location).toBe("India");
    expect(out[0].jobUrl).toBe("https://adobe.wd5.myworkdayjobs.com/en-US/external/job/Bengaluru/Software-Engineer-II_R1");
  });

  it("microsoft normalises", async () => {
    mockFetch({ operationResult: { result: { jobs: [{ jobId: "123", title: "Software Engineer", postingDate: recent, properties: { locations: ["Hyderabad, Telangana, India"] } }] } } });
    const out = await fetchFromSource("Microsoft", { kind: "microsoft" }, NOW);
    expect(out[0].jobUrl).toBe("https://jobs.careers.microsoft.com/global/en/job/123");
  });
});

describe("dedupe", () => {
  it("drops identical company/title/location", () => {
    const a = { id: "1", company: "X", title: "SDE", department: null, location: "Pune", employmentType: null, workplaceType: null, publishedAt: recent, jobUrl: "https://a" };
    expect(dedupe([a, { ...a, id: "2" }, { ...a, id: "3", location: "Delhi" }])).toHaveLength(2);
  });
});

describe("jooble fallback", () => {
  it("returns matched India engineering jobs and ignores other employers", async () => {
    vi.stubEnv("JOOBLE_API_KEY", "k");
    const { fetchAggregated } = await import("./aggregator");
    const updated = new Date(NOW - 86400000).toISOString();
    mockFetch({ jobs: [
      { id: "1", title: "Software Engineer", company: "Tata Consultancy Services", location: "Pune", updated, link: "https://in.jooble.org/desc/1" },
      { id: "2", title: "Software Engineer", company: "Random Co", location: "Pune", updated, link: "https://in.jooble.org/desc/2" },
    ] });
    const out = await fetchAggregated(["TCS", "Infosys"], NOW);
    expect(out.map((a) => a.company)).toEqual(["TCS"]);
    expect(out[0].aggregated).toBe(true);
    vi.unstubAllEnvs();
  });
});

import { parseCrawled } from "./crawled";
import { jobsFromJson, jobsFromJsonLd, jobsFromLinks, keepJob, parseDate } from "../../../scripts/career-extract.mjs";

describe("career-page extractor", () => {
  const base = "https://careers.example.com/search";
  it("finds job arrays inside arbitrary JSON", () => {
    const json = { data: { result: { jobs: [
      { jobTitle: "Software Engineer II", locationsText: "Bengaluru, India", postedOn: "Posted 3 Days Ago", externalPath: "/job/blr/se2_R1" },
      { jobTitle: "Sales Manager", locationsText: "Mumbai", postedOn: "Posted Today", externalPath: "/job/mum/sm_R2" },
    ], facets: [{ name: "India" }, { name: "Pune" }] } } };
    const jobs = jobsFromJson(json, base, NOW);
    expect(jobs).toHaveLength(2);
    expect(jobs[0].url).toBe("https://careers.example.com/job/blr/se2_R1");
    expect(jobs[0].publishedMs).toBe(NOW - 3 * 86400000);
    expect(jobs.filter((j) => keepJob(j)).map((j) => j.title)).toEqual(["Software Engineer II"]);
  });
  it("reads JobPosting markup, including @graph", () => {
    const block = JSON.stringify({ "@graph": [{ "@type": "JobPosting", title: "Data Engineer", url: "https://x.com/j/1", datePosted: "2026-11-10", jobLocation: { address: { addressLocality: "Pune", addressCountry: "IN" } } }] });
    const jobs = jobsFromJsonLd([block, "not json"], base, NOW);
    expect(jobs).toHaveLength(1);
    expect(jobs[0].location).toContain("Pune");
  });
  it("uses links only for job-looking URLs and ignores non-https", () => {
    const jobs = jobsFromLinks([
      { href: "https://careers.example.com/jobs/12345", text: "Backend Developer" },
      { href: "https://careers.example.com/about", text: "About our company" },
      { href: "http://careers.example.com/jobs/9", text: "Insecure Engineer" },
    ], base);
    expect(jobs.map((j) => j.title)).toEqual(["Backend Developer"]);
  });
  it("keeps only technical jobs that name an India location", () => {
    const j = { title: "Software Engineer", url: "https://a.com/1", location: "", publishedMs: null };
    expect(keepJob(j)).toBe(false);                                   // no location: could be a menu link
    expect(keepJob({ ...j, location: "Pune, India" })).toBe(true);
    expect(keepJob({ ...j, location: "London, UK" })).toBe(false);
    expect(keepJob({ ...j, title: "Sales Manager", location: "Pune, India" })).toBe(false);
    expect(parseDate("garbage")).toBeNull();
  });
});

describe("crawled results", () => {
  const file = (generatedAt: string) => ({ generatedAt, companies: {}, jobs: [
    { id: "cr-1", company: "Google", title: "SWE", location: "Bengaluru", publishedAt: recent, jobUrl: "https://www.google.com/x/1" },
    { id: "cr-2", company: "Unknown Co", title: "SWE", publishedAt: recent, jobUrl: "https://a.com/2" },
    { id: "cr-3", company: "Google", title: "SWE", publishedAt: recent, jobUrl: "javascript:alert(1)" },
  ] });
  it("keeps valid jobs for known companies only", () => {
    const r = parseCrawled(file("2026-11-12T06:00:00Z"), ["Google"], NOW);
    expect(r.jobs.map((j) => j.id)).toEqual(["cr-1"]);
    expect(r.jobs[0].viaAgent).toBe(true);
    expect(r.companies).toEqual({ Google: 1 });
  });
  it("ignores a stale file", () => {
    expect(parseCrawled(file("2026-11-01T06:00:00Z"), ["Google"], NOW).jobs).toEqual([]);
  });
});
