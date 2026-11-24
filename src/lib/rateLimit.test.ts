import { describe, expect, it } from "vitest";
import { checkRateLimit, clientIp, envNumber, limitedBody } from "./rateLimit";

// These tests check the in-memory mode, so they must not use a database even if DATABASE_URL is set.
delete process.env.DATABASE_URL;

describe("rate limiter (in-memory mode)", () => {
  it("allows up to the limit then blocks, and resets in the next window", async () => {
    const t0 = 1_800_000_000_000;
    const r = [] as boolean[];
    for (let i = 0; i < 4; i++) r.push((await checkRateLimit({ key: "k1", limit: 3, windowSeconds: 600 }, t0)).allowed);
    expect(r).toEqual([true, true, true, false]);
    const later = await checkRateLimit({ key: "k1", limit: 3, windowSeconds: 600 }, t0 + 601_000);
    expect(later.allowed).toBe(true);
    const blocked = await checkRateLimit({ key: "k2", limit: 0, windowSeconds: 60 }, t0);
    expect(blocked.allowed).toBe(false);
    expect(blocked.retryAfterSeconds).toBeGreaterThan(0);
  });
  it("keeps callers separate", async () => {
    const t0 = 1_800_000_000_000;
    await checkRateLimit({ key: "a", limit: 1, windowSeconds: 60 }, t0);
    expect((await checkRateLimit({ key: "a", limit: 1, windowSeconds: 60 }, t0)).allowed).toBe(false);
    expect((await checkRateLimit({ key: "b", limit: 1, windowSeconds: 60 }, t0)).allowed).toBe(true);
  });
  it("reads the client ip and env numbers", () => {
    expect(clientIp({ get: (n: string) => (n === "x-forwarded-for" ? "1.2.3.4, 5.6.7.8" : null) })).toBe("1.2.3.4");
    expect(clientIp({ get: () => null })).toBe("local");
    process.env.RL_TEST_X = "7"; expect(envNumber("RL_TEST_X", 3)).toBe(7);
    process.env.RL_TEST_X = "abc"; expect(envNumber("RL_TEST_X", 3)).toBe(3);
  });
  it("429 body carries the message in error and reply", () => {
    const b = limitedBody(30);
    expect(b.error).toBe(b.reply); expect(b.code).toBe("rate_limited"); expect(b.retryAfterSeconds).toBe(30);
  });
});
