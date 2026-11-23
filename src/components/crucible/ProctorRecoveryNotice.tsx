"use client";

interface ProctorRecoveryNoticeProps {
  code: string;
  message: string;
  secondsLeft: number;
  onReenterFullscreen?: () => void;
}

export default function ProctorRecoveryNotice({ code, message, secondsLeft, onReenterFullscreen }: ProctorRecoveryNoticeProps) {
  const fullscreenIssue = code === "fullscreen-exit";
  const cameraIssue = code.startsWith("camera-");
  const issueLabel = fullscreenIssue ? "Fullscreen required" : cameraIssue ? "Camera check needed" : "Return to assessment";
  return (
    <div role="alert" aria-live="polite" className="fixed left-1/2 top-14 z-[70] w-[min(92vw,40rem)] -translate-x-1/2 rounded-xl border border-amber-400/70 bg-amber-950/95 px-4 py-3 text-left shadow-2xl backdrop-blur-sm">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[10px] font-black uppercase tracking-widest text-amber-300">
            {issueLabel} · {secondsLeft}s to recover
          </p>
          <p className="mt-1 text-xs font-semibold leading-relaxed text-amber-100">{message}</p>
          <p className="mt-1 text-[10px] font-bold text-rose-200">{fullscreenIssue ? "Re-enter fullscreen" : cameraIssue ? "Restore the camera preview" : "Return to the assessment window"} within {secondsLeft} seconds or your round will be terminated.</p>
        </div>
        {fullscreenIssue && onReenterFullscreen && (
          <button type="button" onClick={onReenterFullscreen} className="shrink-0 rounded-lg bg-amber-400 px-3 py-2 text-[10px] font-black text-slate-950 hover:bg-amber-300">
            Re-enter fullscreen
          </button>
        )}
      </div>
    </div>
  );
}
