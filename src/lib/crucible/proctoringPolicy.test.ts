import { describe, expect, it } from "vitest";
import { isCameraFrameObscured, MAX_PROCTOR_WARNINGS, shouldFailForWarningCount } from "./proctoringPolicy";

describe("strict proctoring policy", () => {
  it("flags a black frame and a sudden hand-like lens obstruction", () => {
    expect(isCameraFrameObscured({
      averageBrightness: 4,
      brightnessVariance: 20,
      changedPixelRatio: 0,
      hasPreviousFrame: true,
      previousFrameWasObscured: false,
    })).toBe(true);

    expect(isCameraFrameObscured({
      averageBrightness: 75,
      brightnessVariance: 500,
      changedPixelRatio: 0.8,
      hasPreviousFrame: true,
      previousFrameWasObscured: false,
    })).toBe(true);
  });

  it("does not call an ordinary detailed frame an obstruction and preserves a cover signal", () => {
    expect(isCameraFrameObscured({
      averageBrightness: 110,
      brightnessVariance: 1800,
      changedPixelRatio: 0.1,
      hasPreviousFrame: true,
      previousFrameWasObscured: false,
    })).toBe(false);

    expect(isCameraFrameObscured({
      averageBrightness: 80,
      brightnessVariance: 300,
      changedPixelRatio: 0,
      hasPreviousFrame: true,
      previousFrameWasObscured: true,
    })).toBe(true);
  });

  it("allows six warnings and ends the attempt on the seventh", () => {
    expect(MAX_PROCTOR_WARNINGS).toBe(6);
    expect(shouldFailForWarningCount(6)).toBe(false);
    expect(shouldFailForWarningCount(7)).toBe(true);
  });
});
