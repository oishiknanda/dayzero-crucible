"use client";

import { useEffect, useRef, useState } from "react";
import { Camera } from "lucide-react";
import { isCameraFrameObscured } from "@/lib/crucible/proctoringPolicy";

export interface ProctoringWarning {
  id: string;
  code: string;
  message: string;
  at: string;
}

interface ProctoringCameraTileProps {
  stream: MediaStream;
  onWarning: (code: string, message: string) => void;
}

export default function ProctoringCameraTile({ stream, onWarning }: ProctoringCameraTileProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const lastWarningRef = useRef<Record<string, number>>({});
  const [cameraReady, setCameraReady] = useState(false);
  const [cameraIssue, setCameraIssue] = useState("");

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.srcObject = stream;
    void video.play().catch(() => {
      setCameraIssue("Camera preview could not start. Check browser camera permissions.");
    });

    const warn = (code: string, message: string) => {
      const now = Date.now();
      if (now - (lastWarningRef.current[code] || 0) < 30_000) return;
      lastWarningRef.current[code] = now;
      onWarning(code, message);
    };

    const videoTrack = stream.getVideoTracks()[0];
    const audioTrack = stream.getAudioTracks()[0];
    if (!videoTrack || videoTrack.readyState !== "live") {
      setCameraIssue("Camera feed is unavailable.");
      warn("camera-ended", "Camera feed stopped. Reconnect or re-enable your camera to continue.");
    }

    const onVideoEnded = () => {
      setCameraReady(false);
      setCameraIssue("Camera feed stopped.");
      warn("camera-ended", "Camera feed stopped. Reconnect or re-enable your camera to continue.");
    };
    const onVideoMute = () => {
      setCameraReady(false);
      setCameraIssue("Camera feed was interrupted.");
      warn("camera-muted", "Camera feed was interrupted. Check that your camera is enabled.");
    };
    const onVideoUnmute = () => {
      delete lastWarningRef.current["camera-muted"];
      delete lastWarningRef.current["camera-ended"];
      delete lastWarningRef.current["camera-blank"];
      setCameraIssue("");
      setCameraReady(true);
    };
    const onAudioEnded = () => warn("microphone-ended", "Microphone access was interrupted. Voice answers may not work until it is restored.");
    const onAudioMute = () => warn("microphone-muted", "Microphone access was muted. Check your device and browser permissions.");
    const onAudioUnmute = () => {
      delete lastWarningRef.current["microphone-muted"];
      delete lastWarningRef.current["microphone-ended"];
    };

    videoTrack?.addEventListener("ended", onVideoEnded);
    videoTrack?.addEventListener("mute", onVideoMute);
    videoTrack?.addEventListener("unmute", onVideoUnmute);
    audioTrack?.addEventListener("ended", onAudioEnded);
    audioTrack?.addEventListener("mute", onAudioMute);
    audioTrack?.addEventListener("unmute", onAudioUnmute);

    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 18;
    const context = canvas.getContext("2d", { willReadFrequently: true });
    let blankSamples = 0;
    let obscuredSamples = 0;
    let movementSamples = 0;
    let previousPixels: Uint8ClampedArray | null = null;
    let wasReady = false;

    const sampleTimer = window.setInterval(() => {
      const currentVideo = videoRef.current;
      if (
        !videoTrack ||
        videoTrack.readyState !== "live" ||
        videoTrack.muted ||
        !currentVideo ||
        currentVideo.readyState < HTMLMediaElement.HAVE_CURRENT_DATA ||
        currentVideo.videoWidth === 0
      ) {
        blankSamples += 1;
        if (blankSamples >= 5) {
          setCameraReady(false);
          setCameraIssue("No camera frames are arriving.");
          warn("camera-blank", "Camera image went blank. Check the camera cover, device, or browser permission.");
        }
        return;
      }

      if (!context) return;
      try {
        context.drawImage(currentVideo, 0, 0, canvas.width, canvas.height);
        const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
        let brightnessSum = 0;
        let brightnessSquareSum = 0;
        let changedPixels = 0;
        const pixelCount = pixels.length / 4;

        for (let index = 0; index < pixels.length; index += 4) {
          const brightness = (pixels[index] * 0.299) + (pixels[index + 1] * 0.587) + (pixels[index + 2] * 0.114);
          brightnessSum += brightness;
          brightnessSquareSum += brightness * brightness;
          if (previousPixels) {
            const change = Math.abs(pixels[index] - previousPixels[index])
              + Math.abs(pixels[index + 1] - previousPixels[index + 1])
              + Math.abs(pixels[index + 2] - previousPixels[index + 2]);
            if (change > 72) changedPixels += 1;
          }
        }

        const averageBrightness = brightnessSum / pixelCount;
        const brightnessVariance = Math.max(0, (brightnessSquareSum / pixelCount) - (averageBrightness * averageBrightness));
        const changedRatio = previousPixels ? changedPixels / pixelCount : 0;
        const frameObscured = isCameraFrameObscured({
          averageBrightness,
          brightnessVariance,
          changedPixelRatio: changedRatio,
          hasPreviousFrame: previousPixels !== null,
          previousFrameWasObscured: obscuredSamples > 0,
        });
        blankSamples = averageBrightness < 20 && brightnessVariance < 220 ? blankSamples + 1 : 0;
        obscuredSamples = frameObscured ? obscuredSamples + 1 : 0;

        if (blankSamples >= 3 || obscuredSamples >= 3) {
          setCameraReady(false);
          setCameraIssue("Camera image appears blank or covered.");
          warn("camera-blank", "Camera image went dark or became obscured. Remove anything covering the lens and check the camera preview.");
        } else {
          setCameraReady(true);
          setCameraIssue("");
          if (blankSamples === 0 && obscuredSamples === 0) delete lastWarningRef.current["camera-blank"];
        }

        if (previousPixels && obscuredSamples === 0) {
          movementSamples = changedRatio > 0.16 ? movementSamples + 1 : Math.max(0, movementSamples - 1);
          if (movementSamples >= 5) {
            warn("camera-movement", "Large movement in the camera image was detected. Please steady the device and return to your interview position.");
            movementSamples = 0;
          }
        }
        previousPixels = new Uint8ClampedArray(pixels);
        if (!wasReady && averageBrightness >= 3) setCameraIssue("");
        wasReady = true;
      } catch {
        setCameraReady(false);
        setCameraIssue("Camera frames could not be analyzed in this browser.");
      }
    }, 1500);

    return () => {
      window.clearInterval(sampleTimer);
      videoTrack?.removeEventListener("ended", onVideoEnded);
      videoTrack?.removeEventListener("mute", onVideoMute);
      videoTrack?.removeEventListener("unmute", onVideoUnmute);
      audioTrack?.removeEventListener("ended", onAudioEnded);
      audioTrack?.removeEventListener("mute", onAudioMute);
      audioTrack?.removeEventListener("unmute", onAudioUnmute);
      if (video.srcObject === stream) video.srcObject = null;
    };
  }, [stream, onWarning]);

  return (
    <div className="sticky top-2 z-20 mt-4 w-52 max-w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-950 shadow-2xl">
      <div className="flex items-center justify-between border-b border-white/10 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-200">
        <span className="flex items-center gap-1.5"><Camera className="h-3 w-3 text-amber-400" /> Camera monitor</span>
        <span className={cameraReady ? "text-emerald-400" : "text-rose-400"}>{cameraReady ? "Live" : "Check"}</span>
      </div>
      <div className="relative aspect-video bg-black">
        <video ref={videoRef} autoPlay playsInline muted className="h-full w-full object-cover scale-x-[-1]" />
        {!cameraReady && <div className="absolute inset-0 flex items-center justify-center bg-slate-950/90 px-2 text-center text-[10px] font-semibold text-amber-200">{cameraIssue || "Waiting for camera frames…"}</div>}
      </div>
      <p className="px-2.5 py-1.5 text-[9px] leading-tight text-slate-400">Frames are analyzed locally and are not uploaded.</p>
    </div>
  );
}
