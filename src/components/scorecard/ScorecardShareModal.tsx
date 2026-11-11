"use client";

import { useEffect, useState } from "react";
import { Check, Clipboard, Download, Share2, X } from "lucide-react";

type ScorecardShareModalProps = {
  companyName: string;
  role: string;
  roundTitle: string;
  score: number;
  verdict: string;
};

function createScorecardImage({
  companyName,
  role,
  roundTitle,
  score,
  verdict,
}: ScorecardShareModalProps): Promise<File> {
  const canvas = document.createElement("canvas");
  canvas.width = 1200;
  canvas.height = 630;

  const context = canvas.getContext("2d");
  if (!context) return Promise.reject(new Error("Could not create scorecard image."));

  context.fillStyle = "#0b1120";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#1e293b";
  context.fillRect(48, 42, 1104, 546);
  context.strokeStyle = "#475569";
  context.lineWidth = 2;
  context.strokeRect(49, 43, 1102, 544);
  context.fillStyle = "#f59e0b";
  context.fillRect(48, 42, 1104, 10);

  context.fillStyle = "#fbbf24";
  context.font = "700 20px Arial, sans-serif";
  context.fillText("DAYZERO AI  /  INTERVIEW SCORECARD", 96, 112);

  context.fillStyle = "#ffffff";
  context.font = "700 44px Arial, sans-serif";
  context.fillText(companyName.slice(0, 34), 96, 184);

  context.fillStyle = "#cbd5e1";
  context.font = "500 25px Arial, sans-serif";
  context.fillText(roundTitle.slice(0, 58), 96, 228);
  context.fillText(role.slice(0, 58), 96, 270);

  context.strokeStyle = "#475569";
  context.lineWidth = 1;
  context.beginPath();
  context.moveTo(96, 306);
  context.lineTo(1104, 306);
  context.stroke();

  context.fillStyle = "#ffffff";
  context.font = "700 112px Arial, sans-serif";
  context.fillText(`${Math.round(score)}%`, 96, 452);

  const verdictColor = /hire|verified|pass/i.test(verdict) ? "#34d399" : "#fbbf24";
  context.fillStyle = verdictColor;
  context.font = "700 26px Arial, sans-serif";
  context.fillText(verdict.toUpperCase().slice(0, 24), 408, 400);

  context.fillStyle = "#94a3b8";
  context.font = "500 18px Arial, sans-serif";
  context.fillText("Practice simulation result · No profile or session link", 96, 540);
  context.fillStyle = "#64748b";
  context.textAlign = "right";
  context.fillText("DAYZERO.AI", 1104, 540);
  context.textAlign = "left";

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error("Could not export the scorecard image."));
        return;
      }
      const fileCompany = companyName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "company";
      resolve(new File([blob], `dayzero-${fileCompany}-scorecard.png`, { type: "image/png" }));
    }, "image/png");
  });
}

export default function ScorecardShareModal({
  companyName,
  role,
  roundTitle,
  score,
  verdict,
}: ScorecardShareModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isWorking, setIsWorking] = useState(false);
  const [feedback, setFeedback] = useState("");
  const safeScore = Number.isFinite(score) ? Math.round(score) : 0;
  const caption = `Just completed the ${companyName} ${role} ${roundTitle} simulation on DayZero AI: ${safeScore}% (${verdict}). #TechPlacements #SoftwareEngineering #CodingInterview`;

  useEffect(() => {
    if (!feedback) return;
    const timeout = window.setTimeout(() => setFeedback(""), 3000);
    return () => window.clearTimeout(timeout);
  }, [feedback]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const downloadImage = async () => {
    const image = await createScorecardImage({ companyName, role, roundTitle, score: safeScore, verdict });
    const imageUrl = URL.createObjectURL(image);
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = image.name;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(imageUrl), 1000);
  };

  const shareImage = async () => {
    setIsWorking(true);
    try {
      const image = await createScorecardImage({ companyName, role, roundTitle, score: safeScore, verdict });
      const shareData: ShareData = {
        files: [image],
        title: `${companyName} interview scorecard`,
        text: caption,
      };

      if (typeof navigator.share === "function" && navigator.canShare?.({ files: [image] })) {
        await navigator.share(shareData);
        setFeedback("Scorecard image shared.");
      } else {
        const imageUrl = URL.createObjectURL(image);
        const link = document.createElement("a");
        link.href = imageUrl;
        link.download = image.name;
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.setTimeout(() => URL.revokeObjectURL(imageUrl), 1000);
        setFeedback("PNG downloaded. Attach it to your post.");
      }
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") return;
      setFeedback("Could not share the image. Try downloading the PNG instead.");
    } finally {
      setIsWorking(false);
    }
  };

  const copyCaption = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(caption);
      } else {
        throw new Error("Clipboard API unavailable");
      }
      setFeedback("Caption copied.");
    } catch {
      const input = document.createElement("textarea");
      input.value = caption;
      input.setAttribute("readonly", "");
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.appendChild(input);
      input.select();
      const copied = document.execCommand("copy");
      input.remove();
      setFeedback(copied ? "Caption copied." : "Could not copy the caption.");
    }
  };

  const handleDownload = async () => {
    try {
      await downloadImage();
      setFeedback("Scorecard PNG downloaded.");
    } catch {
      setFeedback("Could not create the scorecard image.");
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="w-full sm:w-auto px-5 py-3 rounded-xl text-sm font-bold text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 flex items-center justify-center gap-2 transition-colors"
      >
        <Share2 className="h-4 w-4" /> Share Scorecard
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/75 backdrop-blur-sm p-4"
          onMouseDown={(event) => { if (event.target === event.currentTarget) setIsOpen(false); }}
        >
          <section role="dialog" aria-modal="true" aria-labelledby="share-scorecard-title" className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 id="share-scorecard-title" className="text-lg font-black text-white">Share your scorecard image</h2>
                <p className="mt-1 text-sm text-slate-400">The image contains no session URL or profile link.</p>
              </div>
              <button type="button" aria-label="Close share dialog" onClick={() => setIsOpen(false)} className="rounded-lg p-2 text-slate-400 hover:bg-white/10 hover:text-white"><X className="h-4 w-4" /></button>
            </div>

            <div className="mt-5 grid gap-2">
              <button type="button" disabled={isWorking} onClick={shareImage} className="flex items-center justify-center gap-3 rounded-xl border border-amber-500/40 bg-amber-500/15 px-4 py-3 text-sm font-bold text-amber-200 hover:bg-amber-500/20 disabled:cursor-wait disabled:opacity-60">
                <Share2 className="h-5 w-5" /> {isWorking ? "Preparing image…" : "Share image…"}
              </button>
              <button type="button" onClick={handleDownload} className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800">
                <Download className="h-5 w-5 text-slate-300" /> Download PNG
              </button>
              <button type="button" onClick={copyCaption} className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800">
                <Clipboard className="h-5 w-5 text-slate-300" /> Copy social caption
              </button>
            </div>
            <p className="mt-4 text-xs text-slate-500">On supported phones, choose WhatsApp, LinkedIn, or X from the share sheet. Otherwise, download the image and attach it to your post.</p>
            {feedback && <p role="status" aria-live="polite" className="mt-3 flex items-center gap-2 text-sm font-semibold text-emerald-400"><Check className="h-4 w-4" />{feedback}</p>}
          </section>
        </div>
      )}
    </>
  );
}
