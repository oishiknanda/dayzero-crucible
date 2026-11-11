export const MAX_PROCTOR_WARNINGS = 6;

export interface CameraFrameSignals {
  averageBrightness: number;
  brightnessVariance: number;
  changedPixelRatio: number;
  hasPreviousFrame: boolean;
  previousFrameWasObscured: boolean;
}

/** Local, coarse signal for a black frame or a sudden, sustained lens obstruction. */
export function isCameraFrameObscured(signals: CameraFrameSignals): boolean {
  const { averageBrightness, brightnessVariance, changedPixelRatio, hasPreviousFrame, previousFrameWasObscured } = signals;
  const nearlyBlack = averageBrightness < 20 && brightnessVariance < 220;
  const lowDetail = brightnessVariance < 1000;
  const suddenOcclusion = hasPreviousFrame && changedPixelRatio > 0.55 && lowDetail;
  const continuingOcclusion = previousFrameWasObscured && lowDetail;
  return nearlyBlack || suddenOcclusion || continuingOcclusion;
}

export function shouldFailForWarningCount(warningCount: number): boolean {
  return warningCount > MAX_PROCTOR_WARNINGS;
}
