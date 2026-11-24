import { describe, expect, it } from "vitest";
import { readinessIssues } from "./proctoringReadiness";

describe("readiness check", () => {
  it("passes a well lit, centred, single face", () => {
    expect(readinessIssues({ brightness: 120, faceCount: 1, faceBox: [0.38, 0.25, 0.25, 0.35] })).toEqual([]);
  });
  it("explains each problem", () => {
    expect(readinessIssues({ brightness: 30, faceCount: 1, faceBox: [0.38, 0.25, 0.25, 0.35] })[0]).toMatch(/too dark/);
    expect(readinessIssues({ brightness: 120, faceCount: 0 })[0]).toMatch(/cannot see your face/);
    expect(readinessIssues({ brightness: 120, faceCount: 2 })[0]).toMatch(/More than one/);
    expect(readinessIssues({ brightness: 120, faceCount: 1, faceBox: [0.45, 0.4, 0.08, 0.1] })[0]).toMatch(/too far/);
    expect(readinessIssues({ brightness: 120, faceCount: 1, faceBox: [0.05, 0.3, 0.2, 0.3] }).join(" ")).toMatch(/Centre/);
  });
});
