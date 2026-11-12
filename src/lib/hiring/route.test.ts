import { afterEach, expect, it, vi } from "vitest";
import { GET } from "../../app/api/hiring-alerts/route";
import { ALL_COMPANY_NAMES } from "../../data/hiringCompanies";

afterEach(() => vi.unstubAllGlobals());

it("returns a coverage row for every directory company even when every source is down", async () => {
  vi.stubGlobal("fetch", vi.fn(async () => { throw new Error("offline"); }));
  const body = await (await GET()).json();
  expect(body.coverage).toHaveLength(ALL_COMPANY_NAMES.length);
  expect(body.jobs).toEqual([]);
  expect(body.coverage.every((r: { status: string }) => r.status === "pending")).toBe(true);
});

it("shows a live company and keeps the others pending", async () => {
  const recent = new Date(Date.now() - 86400000).toISOString();
  vi.stubGlobal("fetch", vi.fn(async (url: string) => {
    if (String(url).includes("api.smartrecruiters.com/v1/companies/Visa")) {
      return { ok: true, status: 200, json: async () => ({ content: [{ id: "1", name: "Software Engineer", releasedDate: recent, location: { city: "Bengaluru", country: "in" } }] }) };
    }
    throw new Error("offline");
  }));
  const body = await (await GET()).json();
  const visa = body.coverage.find((r: { company: string }) => r.company === "Visa");
  expect(visa).toMatchObject({ status: "live", source: "SmartRecruiters", jobs: 1 });
  expect(body.jobs[0].company).toBe("Visa");
});
