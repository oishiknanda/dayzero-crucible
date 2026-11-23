"use client";

interface ProctorRecoveryNoticeProps {
  code: string;
  message: string;
  warningsLeft: number;
  onReenterFullscreen?: () => void;
}

export default function ProctorRecoveryNotice({ code, message, warningsLeft, onReenterFullscreen }: ProctorRecoveryNoticeProps) {
  const fullscreenIssue = code === "fullscreen-exit";
  const cameraIssue = code.startsWith("camera-") || code === "face-missing";
  const issueLabel = fullscreenIssue ? "Fullscreen required" : code === "face-missing" ? "Face check needed" : cameraIssue ? "Camera check needed" : "Return to assessment";
  return (
    <div role="alert" aria-live="polite" className="fixed left-1/2 top-14 z-[70] w-[min(92vw,40rem)] -translate-x-1/2 rounded-xl border border-amber-400/70 bg-amber-950/95 px-4 py-3 text-left shadow-2xl backdrop-blur-sm">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[10px] font-black uppercase tracking-widest text-amber-300">
            {issueLabel} · {warningsLeft} warning{warningsLeft === 1 ? "" : "s"} left
          </p>
          <p className="mt-1 text-xs font-semibold leading-relaxed text-amber-100">{message}</p>
          <p className="mt-1 text-[10px] font-bold text-rose-200">{fullscreenIssue ? "Re-enter fullscreen" : cameraIssue ? "Uncover the camera and return to the camera view" : "Return to the assessment window"}. The round ends at five warnings.</p>
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
