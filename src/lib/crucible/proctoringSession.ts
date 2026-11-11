export type ProctoringMode = "strict" | "practice";

interface ProctoringGrant {
  sessionId: string;
  mode: ProctoringMode;
  issuedAt: number;
}

const MAX_GRANT_AGE_MS = 4 * 60 * 60 * 1000;

let activeSession: { sessionId: string; mode: ProctoringMode; stream: MediaStream | null; issuedAt: number } | null = null;

export function authorizeProctoringSession(
  sessionId: string,
  mode: ProctoringMode,
  stream: MediaStream | null
): void {
  const issuedAt = Date.now();
  activeSession = { sessionId, mode, stream, issuedAt };
}

export function readProctoringGrant(sessionId: string): ProctoringGrant | null {
  if (activeSession?.sessionId === sessionId && Date.now() - activeSession.issuedAt <= MAX_GRANT_AGE_MS) {
    return { sessionId, mode: activeSession.mode, issuedAt: activeSession.issuedAt };
  }
  return null;
}

export function getProctoringStream(sessionId: string): MediaStream | null {
  return activeSession?.sessionId === sessionId ? activeSession.stream : null;
}

export function clearProctoringSession(sessionId: string): void {
  if (activeSession?.sessionId === sessionId) {
    activeSession.stream?.getTracks().forEach((track) => track.stop());
    activeSession = null;
  }

}
