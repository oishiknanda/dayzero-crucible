// Pre-round readiness check: tells the candidate exactly what to fix before the strict round starts.
export interface ReadinessInput {
  brightness: number;            // 0..255 average of the camera frame
  faceCount: number;
  faceBox?: [number, number, number, number]; // x, y, width, height as fractions of the frame (0..1)
}

export function readinessIssues(input: ReadinessInput): string[] {
  const issues: string[] = [];
  if (input.brightness < 55) issues.push("The room is too dark. Turn on a light or face a window so your face is clearly lit.");
  else if (input.brightness > 215) issues.push("The image is too bright or washed out. Reduce direct light or avoid sitting with a bright window behind you.");
  if (input.faceCount === 0) { issues.push("We cannot see your face. Look at the camera and make sure nothing covers the lens."); return issues; }
  if (input.faceCount > 1) { issues.push("More than one face is visible. Make sure you are alone in the frame."); return issues; }
  const b = input.faceBox;
  if (b) {
    const cx = b[0] + b[2] / 2, cy = b[1] + b[3] / 2;
    if (b[2] < 0.14) issues.push("You are too far from the camera. Move closer so your face fills more of the frame.");
    else if (b[2] > 0.55) issues.push("You are too close to the camera. Move back a little.");
    if (Math.abs(cx - 0.5) > 0.22 || cy < 0.2 || cy > 0.72) issues.push("Centre your face in the frame, with your head and shoulders visible.");
  }
  return issues;
}
