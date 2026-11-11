"use client";

import { useEffect, useState } from "react";
import { Check, Copy, Share2, X } from "lucide-react";

type ScorecardShareModalProps = {
  companyName: string;
  role: string;
  roundTitle: string;
  score: number;
  verdict: string;
  sessionId: string;
};

function BrandIcon({ name }: { name: "linkedin" | "whatsapp" | "x" }) {
  if (name === "linkedin") {
    return <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8.03 18.34H5.06V9.01h2.97v9.33ZM6.55 7.74a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.4 10.6h-2.96v-4.54c0-1.08-.02-2.48-1.51-2.48-1.52 0-1.75 1.18-1.75 2.4v4.62H9.77V9.01h2.84v1.28h.04c.4-.74 1.36-1.52 2.8-1.52 3 0 3.55 1.98 3.55 4.55v5.02Z" /></svg>;
  }
  if (name === "whatsapp") {
    return <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M20.52 3.48A11.83 11.83 0 0 0 12.1 0C5.55 0 .22 5.32.22 11.87c0 2.09.55 4.13 1.6 5.93L.12 24l6.35-1.66a11.9 11.9 0 0 0 5.62 1.43h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.23-6.15-3.46-8.4ZM12.1 21.75h-.01a9.88 9.88 0 0 1-5.03-1.37l-.36-.21-3.77.99 1.01-3.68-.23-.38a9.85 9.85 0 0 1-1.51-5.23c0-5.45 4.44-9.89 9.9-9.89a9.82 9.82 0 0 1 7 2.9 9.82 9.82 0 0 1 2.9 7c0 5.45-4.44 9.88-9.9 9.88Zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.8-1.49-1.78-1.66-2.08-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.66-.51h-.57c-.2 0-.52.08-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.09 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.88.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.18-1.42-.08-.12-.28-.2-.58-.35Z" /></svg>;
  }
  return <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M18.9 2H22l-6.78 7.75L23.2 22h-6.25l-4.9-7.42L5.56 22H2.44l7.25-8.29L1.8 2h6.4l4.43 6.77L18.9 2Zm-1.1 18h1.73L7.28 3.9H5.43L17.8 20Z" /></svg>;
}

export default function ScorecardShareModal({
  companyName,
  role,
  roundTitle,
  score,
  verdict,
  sessionId,
}: ScorecardShareModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const safeScore = Number.isFinite(score) ? Math.round(score) : 0;
  const shareUrl = typeof window === "undefined"
    ? ""
    : (() => {
        const url = new URL(window.location.href);
        url.pathname = `/crucible/${encodeURIComponent(sessionId)}`;
        url.searchParams.set("scorecard", "true");
        return url.toString();
      })();
  const postText = `Just completed the ${companyName} (${role}) ${roundTitle} simulation on @DayZero.AI! Scored ${safeScore}% with a '${verdict}' rating under full browser lockdown and AI voice cross-examination. #TechPlacements #SoftwareEngineering #DayZeroAI`;
  const whatsappText = `🚀 Just cleared the ${companyName} ${role} (${roundTitle}) interview simulation on DayZero.AI with a score of ${safeScore}% (${verdict})! Check out my scorecard: ${shareUrl}`;
  const tweetText = `Completed the ${companyName} ${role} ${roundTitle} simulation on DayZero.AI: ${safeScore}% (${verdict}). #CodingInterview #TechHiring`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(whatsappText)}`;
  const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}&url=${encodeURIComponent(shareUrl)}`;

  useEffect(() => {
    if (!copied) return;
    const timeout = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const copyLink = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareUrl);
      } else {
        throw new Error("Clipboard API unavailable");
      }
    } catch {
      const input = document.createElement("textarea");
      input.value = shareUrl;
      input.setAttribute("readonly", "");
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.appendChild(input);
      input.select();
      const copiedSuccessfully = document.execCommand("copy");
      document.body.removeChild(input);
      if (!copiedSuccessfully) return;
    }
    setCopied(true);
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
                <h2 id="share-scorecard-title" className="text-lg font-black text-white">Share your scorecard</h2>
                <p className="mt-1 text-sm text-slate-400">Let your network know how you did.</p>
              </div>
              <button type="button" aria-label="Close share dialog" onClick={() => setIsOpen(false)} className="rounded-lg p-2 text-slate-400 hover:bg-white/10 hover:text-white"><X className="h-4 w-4" /></button>
            </div>

            <div className="mt-5 grid gap-2">
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-3 text-sm font-semibold text-white hover:border-sky-500/50 hover:bg-slate-800">
                <span className="text-sky-400"><BrandIcon name="linkedin" /></span> Share on LinkedIn
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-3 text-sm font-semibold text-white hover:border-emerald-500/50 hover:bg-slate-800">
                <span className="text-emerald-400"><BrandIcon name="whatsapp" /></span> Share on WhatsApp
              </a>
              <a href={xUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-3 text-sm font-semibold text-white hover:border-white/30 hover:bg-slate-800">
                <span className="text-white"><BrandIcon name="x" /></span> Share on X
              </a>
              <button type="button" onClick={copyLink} className="flex items-center justify-between gap-3 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm font-semibold text-amber-200 hover:bg-amber-500/15">
                <span className="flex items-center gap-3">{copied ? <Check className="h-5 w-5 text-emerald-400" /> : <Copy className="h-5 w-5" />}{copied ? "Copied to Clipboard! ✓" : "Copy Scorecard Link"}</span>
                {copied && <span className="text-xs text-emerald-400">Copied!</span>}
              </button>
            </div>
            <p className="mt-4 break-all rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2 text-xs text-slate-500">{shareUrl}</p>
          </section>
        </div>
      )}
    </>
  );
}
