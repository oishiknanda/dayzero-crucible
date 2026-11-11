import { describe, expect, it } from "vitest";
import { getRoundDurationSeconds, getRoundNumber, parseDurationSeconds } from "./roundTiming";
import { getCompanyTrackData } from "../../data/companyTracks";

describe("round timing helpers", () => {
  it("resolves the route aliases used for all four rounds", () => {
    expect(getRoundNumber("oa")).toBe(1);
    expect(getRoundNumber("technical_viva")).toBe(2);
    expect(getRoundNumber("architecture")).toBe(3);
    expect(getRoundNumber("bar-raiser")).toBe(4);
  });

  it("parses minute and hour duration labels", () => {
    expect(parseDurationSeconds("45 Mins")).toBe(45 * 60);
    expect(parseDurationSeconds("1 hour 30 minutes")).toBe(90 * 60);
    expect(parseDurationSeconds("Not configured")).toBeNull();
  });

  it("uses the selected round duration and a safe fallback", () => {
    expect(getRoundDurationSeconds("amazon", "sde_1", "round-2")).toBe(60 * 60);
    expect(getRoundDurationSeconds("google", "l3_swe", "round-4")).toBeGreaterThan(0);
    expect(getRoundDurationSeconds("unlisted-company", "unknown-role", "round-1")).toBeGreaterThan(0);
  });

  it("provides a positive duration for all round numbers across supported shared tracks", () => {
    const companies = ["amazon", "google", "zomato", "accenture", "microsoft"];
    for (const company of companies) {
      const roles = company === "amazon"
        ? ["sde_intern", "sde_1", "sde_2", "sde_3", "principal"]
        : Object.keys(getCompanyTrackData(company).roles);
      for (const role of roles) {
        for (const round of ["round-1", "round-2", "round-3", "round-4"]) {
          expect(getRoundDurationSeconds(company, role, round)).toBeGreaterThan(0);
        }
      }
    }
  });
});
