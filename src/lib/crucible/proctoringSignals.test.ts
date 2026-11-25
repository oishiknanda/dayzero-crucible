import { describe, expect, it } from "vitest";
import { SampleWindow, audioLevel, classifyHeadPose, isLowDetailFrame, isPhoneObject, strengthOf } from "./proctoringSignals";

describe("proctoring signals", () => {
  it("a sustained look-down is caught even when single frames look normal", () => {
    const w = new SampleWindow(8);
    [true, true, false, true, true, false, true, true].forEach((v) => w.push(v));
    expect(w.reached(5, 6)).toBe(true);
    const calm = new SampleWindow(8);
    [true, false, false, true, false, false, false, false].forEach((v) => calm.push(v));
    expect(calm.reached(5, 6)).toBe(false);
  });
  it("classifies head pose against the setup pose", () => {
    const n = { yaw: 0, pitch: 0.05 };
    expect(classifyHeadPose({ yaw: 0.05, pitch: 0.12 }, n)).toBe("ok");
    expect(classifyHeadPose({ yaw: 0, pitch: 0.4 }, n)).toBe("down-or-up");
    expect(classifyHeadPose({ yaw: 0.6, pitch: 0.05 }, n)).toBe("sideways");
    expect(classifyHeadPose(undefined, n)).toBe("ok");
  });
  it("a bright but featureless frame (hand over lens) is low detail; a normal frame is not", () => {
    expect(isLowDetailFrame(140, 120)).toBe(true);
    expect(isLowDetailFrame(110, 1800)).toBe(false);
  });
  it("only a confident phone counts", () => {
    expect(isPhoneObject({ label: "cell phone", score: 0.6 })).toBe(true);
    expect(isPhoneObject({ label: "cell phone", score: 0.3 })).toBe(false);
    expect(isPhoneObject({ label: "book", score: 0.9 })).toBe(false);
  });
  it("weights evidence", () => {
    expect(strengthOf("phone-detected")).toBe("strong");
    expect(strengthOf("head-away")).toBe("weak");
    expect(strengthOf("sound-detected")).toBe("info");
  });
  it("measures audio level", () => {
    expect(audioLevel([128, 128, 128])).toBe(0);
    expect(audioLevel([255, 0, 255, 0])).toBeGreaterThan(0.9);
  });
});
