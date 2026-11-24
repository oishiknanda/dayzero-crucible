// Pure helpers for proctoring decisions. They hold no browser state so they can be unit-tested.

/** Remembers the last N yes/no samples so one good frame cannot hide a sustained problem. */
export class SampleWindow {
  private items: boolean[] = [];
  constructor(private size: number) {}
  push(value: boolean) { this.items.push(value); if (this.items.length > this.size) this.items.shift(); }
  hits() { return this.items.filter(Boolean).length; }
  count() { return this.items.length; }
  clear() { this.items = []; }
  /** True once the window has enough samples and at least `minHits` of them are positive. */
  reached(minHits: number, minSamples = minHits) { return this.items.length >= minSamples && this.hits() >= minHits; }
}

export interface HeadPose { yaw: number; pitch: number }
export interface NeutralPose { yaw: number; pitch: number }

// Radians. About 16 degrees up or down and about 28 degrees sideways away from the pose captured at setup.
export const PITCH_LIMIT = 0.28;
export const YAW_LIMIT = 0.5;

export type PoseVerdict = "ok" | "down-or-up" | "sideways";

export function classifyHeadPose(pose: HeadPose | undefined, neutral: NeutralPose): PoseVerdict {
  if (!pose) return "ok";
  if (Math.abs(pose.pitch - neutral.pitch) > PITCH_LIMIT) return "down-or-up";
  if (Math.abs(pose.yaw - neutral.yaw) > YAW_LIMIT) return "sideways";
  return "ok";
}

/** A hand or cover close to the lens leaves almost no detail, even in bright light. */
export function isLowDetailFrame(averageBrightness: number, brightnessVariance: number): boolean {
  return brightnessVariance < 260 || (averageBrightness < 28 && brightnessVariance < 500);
}

export interface DetectedObject { label: string; score: number }

const PHONE_LABELS = ["cell phone", "mobile phone", "phone"];
export const isPhoneObject = (o: DetectedObject, minScore = 0.45) => PHONE_LABELS.indexOf(o.label) >= 0 && o.score >= minScore;

export type EvidenceStrength = "strong" | "weak" | "info";

/** Strong signals are direct evidence; weak ones can have innocent causes (look away, noise, focus loss). */
export function strengthOf(code: string): EvidenceStrength {
  if (["phone-detected", "multiple-faces", "identity-mismatch", "camera-frame-blank", "camera-face-obscured", "camera-ended", "camera-muted", "lens-covered"].indexOf(code) >= 0) return "strong";
  if (["sound-detected", "face-monitor-unavailable", "spot-check-passed", "phone-check-off"].indexOf(code) >= 0) return "info";
  return "weak";
}

/** Level (0..1) of an audio frame from raw byte time-domain samples (128 is silence). */
export function audioLevel(bytes: ArrayLike<number>): number {
  let sum = 0;
  for (let i = 0; i < bytes.length; i++) { const v = (bytes[i] - 128) / 128; sum += v * v; }
  return bytes.length ? Math.sqrt(sum / bytes.length) : 0;
}
