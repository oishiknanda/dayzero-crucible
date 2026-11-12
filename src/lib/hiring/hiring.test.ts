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
