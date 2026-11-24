"use client";

import { useEffect, useRef, useState } from "react";
import { Camera } from "lucide-react";
import { isCameraFrameObscured } from "@/lib/crucible/proctoringPolicy";
import { compareFaceIdentity, detectFaces, detectFacesAndObjects, loadProctoringVision, type FaceIdentityReference } from "@/lib/crucible/proctoringVision";
import { SampleWindow, audioLevel, classifyHeadPose, isLowDetailFrame, isPhoneObject } from "@/lib/crucible/proctoringSignals";

export interface ProctoringWarning {
  id: string;
  code: string;
  message: string;
  at: string;
}

interface ProctoringCameraTileProps {
  stream: MediaStream;
  faceIdentity: FaceIdentityReference | null;
  onWarning: (code: string, message: string) => void;
  onRecovery?: (code: string) => void;
  /** Low-confidence signals that are logged for review but never counted as warnings. */
  onEvidence?: (code: string, detail: string) => void;
}

export default function ProctoringCameraTile({ stream, faceIdentity, onWarning, onRecovery, onEvidence }: ProctoringCameraTileProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const lastWarningRef = useRef<Record<string, number>>({});
  const [cameraReady, setCameraReady] = useState(false);
  const [cameraIssue, setCameraIssue] = useState("");
  const [faceMonitorStatus, setFaceMonitorStatus] = useState("Loading face monitor…");
  const [spotCheck, setSpotCheck] = useState(false);

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
      delete lastWarningRef.current["camera-frame-blank"];
      setCameraIssue("");
      setCameraReady(true);
      onRecovery?.("camera-ended");
      onRecovery?.("camera-muted");
    };
    const onAudioEnded = () => warn("microphone-ended", "Microphone access was interrupted. Voice answers may not work until it is restored.");
    const onAudioMute = () => warn("microphone-muted", "Microphone access was muted. Check your device and browser permissions.");
    const onAudioUnmute = () => {
      delete lastWarningRef.current["microphone-muted"];
      delete lastWarningRef.current["microphone-ended"];
      onRecovery?.("microphone-muted");
      onRecovery?.("microphone-ended");
    };

    videoTrack?.addEventListener("ended", onVideoEnded);
    videoTrack?.addEventListener("mute", onVideoMute);
    videoTrack?.addEventListener("unmute", onVideoUnmute);
    audioTrack?.addEventListener("ended", onAudioEnded);
    audioTrack?.addEventListener("mute", onAudioMute);
    audioTrack?.addEventListener("unmute", onAudioUnmute);

    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 36;
    const context = canvas.getContext("2d", { willReadFrequently: true });
    let blankSamples = 0;
    let obscuredSamples = 0;
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
        if (blankSamples >= 3) {
          setCameraReady(false);
          setCameraIssue("No camera frames are arriving.");
          warn("camera-frame-blank", "Camera image went blank. Check the camera cover, device, or browser permission.");
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
        blankSamples = isLowDetailFrame(averageBrightness, brightnessVariance) ? blankSamples + 1 : 0;
        obscuredSamples = frameObscured ? obscuredSamples + 1 : 0;

        if (blankSamples >= 3 || obscuredSamples >= 2) {
          setCameraReady(false);
          setCameraIssue("Camera image appears blank or covered.");
          warn("camera-frame-blank", "Camera image went dark or became obscured. Remove anything covering the lens and check the camera preview.");
        } else {
          setCameraReady(true);
          setCameraIssue("");
          if (blankSamples === 0 && obscuredSamples === 0) {
            delete lastWarningRef.current["camera-frame-blank"];
            onRecovery?.("camera-frame-blank");
          }
        }

        previousPixels = new Uint8ClampedArray(pixels);
        if (!wasReady && averageBrightness >= 3) setCameraIssue("");
        wasReady = true;
      } catch {
        setCameraReady(false);
        setCameraIssue("Camera frames could not be analyzed in this browser.");
      }
    }, 750);

    let cancelled = false;
    let scanRunning = false;
    let missingFaceSamples = 0;
    let lowFaceConfidenceSamples = 0;
    let multipleFaceSamples = 0;
    let mismatchSamples = 0;
    const headWindow = new SampleWindow(8);
    const phoneWindow = new SampleWindow(4);
    let scanTick = 0;
    let spotActive = false;
    let spotOk = false;
    let spotScans = 0;
    const runFaceCheck = async () => {
      if (cancelled || scanRunning || !videoRef.current || !faceIdentity) return;
      scanRunning = true;
      try {
        // Every third scan also looks for a phone; the other scans stay light so the editor never lags.
        scanTick += 1;
        let faces;
        if (scanTick % 3 === 0) {
          const scan = await detectFacesAndObjects(videoRef.current);
          faces = scan.faces;
          if (!cancelled) {
            phoneWindow.push(scan.objects.some((o) => isPhoneObject(o)));
            if (phoneWindow.reached(2, 2)) warn("phone-detected", "A phone appears to be in view. Put it away, out of sight, and continue.");
            else if (phoneWindow.count() >= 2 && phoneWindow.hits() === 0) { delete lastWarningRef.current["phone-detected"]; onRecovery?.("phone-detected"); }
          }
        } else {
          faces = await detectFaces(videoRef.current);
        }
        if (cancelled) return;
        if (spotActive) spotScans += 1;
        setFaceMonitorStatus("Face check active");
        missingFaceSamples = faces.length === 0 ? missingFaceSamples + 1 : 0;
        multipleFaceSamples = faces.length > 1 ? multipleFaceSamples + 1 : 0;
        if (missingFaceSamples >= 2) {
          setCameraReady(false);
          setCameraIssue("No face visible. Uncover the camera and return to the frame.");
          warn("camera-face-missing", "The camera view is covered or your face is out of frame. Uncover the lens and return to view.");
        } else if (faces.length > 0) {
          delete lastWarningRef.current["camera-face-missing"];
          onRecovery?.("camera-face-missing");
        }
        if (multipleFaceSamples >= 2) {
          warn("multiple-faces", "More than one face is visible. Keep the camera frame clear and continue alone.");
        } else if (faces.length <= 1) {
          delete lastWarningRef.current["multiple-faces"];
          onRecovery?.("multiple-faces");
        }

        if (faces.length === 1) {
          const face = faces[0];
          lowFaceConfidenceSamples = face.faceScore < 0.35 ? lowFaceConfidenceSamples + 1 : 0;
          if (lowFaceConfidenceSamples >= 3) {
            setCameraReady(false);
            setCameraIssue("Face is partly obscured. Uncover the camera and keep your face visible.");
            warn("camera-face-obscured", "The camera view appears partly covered. Uncover the lens and keep your face visible.");
          } else if (face.faceScore >= 0.45) {
            delete lastWarningRef.current["camera-face-missing"];
            delete lastWarningRef.current["camera-face-obscured"];
            setCameraIssue("");
            setCameraReady(true);
            onRecovery?.("camera-face-missing");
            onRecovery?.("camera-face-obscured");
          }
          const similarity = await compareFaceIdentity(faceIdentity, face);
          if (cancelled) return;
          if (spotActive && faces.length === 1 && similarity !== null && similarity >= 0.5) spotOk = true;
          mismatchSamples = similarity !== null && similarity < 0.5 ? mismatchSamples + 1 : 0;
          if (mismatchSamples >= 3) {
            warn("identity-mismatch", "The visible face does not match the face captured before this round. Re-center yourself in the camera.");
          } else if (similarity !== null && similarity >= 0.5) {
            delete lastWarningRef.current["identity-mismatch"];
            onRecovery?.("identity-mismatch");
          }

          const angle = face.rotation?.angle;
          const gaze = face.rotation?.gaze;
          const gazeBearingDelta = gaze ? Math.abs(gaze.bearing - faceIdentity.neutralGazeBearing) % Math.PI : 0;
          const gazeAway = Boolean(gaze && (Math.min(gazeBearingDelta, Math.PI - gazeBearingDelta) > 0.55 || Math.abs(gaze.strength - faceIdentity.neutralGazeStrength) > 0.18));
          const pose = classifyHeadPose(angle ? { yaw: angle.yaw, pitch: angle.pitch } : undefined, { yaw: faceIdentity.neutralYaw, pitch: faceIdentity.neutralPitch });
          // A sliding window: 5 of the last 8 checks (about 6 seconds), so one good frame cannot hide a long look-down.
          headWindow.push(pose !== "ok" || gazeAway);
          if (headWindow.reached(5, 6)) {
            warn("head-away", pose === "down-or-up"
              ? "You have been looking down or up for a while. Face the screen and keep your face in view."
              : "Your head or eyes have stayed turned away from the screen. Face the screen and keep your face in view.");
          } else if (headWindow.count() >= 4 && headWindow.hits() <= 1) {
            delete lastWarningRef.current["head-away"];
            onRecovery?.("head-away");
          }
        }
      } catch {
        if (!cancelled) {
          setFaceMonitorStatus("Face monitor unavailable");
          warn("face-monitor-unavailable", "The local face monitor could not run. Check browser compatibility and reload this round.");
        }
      } finally {
        scanRunning = false;
      }
    };
    void loadProctoringVision().then(() => {
      if (!cancelled) void runFaceCheck();
    }).catch(() => {
      if (!cancelled) {
        setFaceMonitorStatus("Face monitor unavailable");
        warn("face-monitor-unavailable", "The local face monitor could not load. Check your connection and reload this round.");
      }
    });
    const faceTimer = window.setInterval(() => void runFaceCheck(), 1200);

    // Random spot check (announced in the setup screen): the candidate is asked to look at the camera for a few seconds.
    let spotStart = 0, spotEnd = 0;
    const scheduleSpot = () => {
      spotStart = window.setTimeout(() => {
        if (cancelled) return;
        spotActive = true; spotOk = false; spotScans = 0; setSpotCheck(true);
        spotEnd = window.setTimeout(() => {
          spotActive = false; setSpotCheck(false);
          if (cancelled) return;
          if (spotScans === 0) { /* face monitor did not run: do not judge the candidate */ }
          else if (spotOk) onEvidence?.("spot-check-passed", "Identity spot check passed.");
          else warn("spot-check-failed", "The random identity check could not confirm you. When asked, look at the camera with your face clearly visible.");
          scheduleSpot();
        }, 10_000);
      }, (4 + Math.random() * 5) * 60_000);
    };
    scheduleSpot();

    // Sustained sound is logged for a human to review. It never counts as a warning: the candidate may be answering aloud.
    let audioCtx: AudioContext | null = null;
    let soundTimer = 0;
    try {
      if (audioTrack && audioTrack.readyState === "live" && typeof AudioContext !== "undefined") {
        audioCtx = new AudioContext();
        void audioCtx.resume().catch(() => undefined);
        const analyser = audioCtx.createAnalyser();
        analyser.fftSize = 512;
        audioCtx.createMediaStreamSource(new MediaStream([audioTrack])).connect(analyser);
        const buf = new Uint8Array(analyser.fftSize);
        const loud = new SampleWindow(12);
        let lastLogged = 0;
        soundTimer = window.setInterval(() => {
          analyser.getByteTimeDomainData(buf);
          loud.push(audioLevel(buf) > 0.06);
          if (loud.reached(9, 12) && Date.now() - lastLogged > 60_000) {
            lastLogged = Date.now();
            onEvidence?.("sound-detected", "Sustained sound was heard on the microphone for several seconds. It may be the candidate's own voice or the room.");
          }
        }, 500);
      }
    } catch { /* sound check unavailable: not essential */ }

    return () => {
      cancelled = true;
      window.clearTimeout(spotStart);
      window.clearTimeout(spotEnd);
      window.clearInterval(soundTimer);
      if (audioCtx) void audioCtx.close().catch(() => undefined);
      window.clearInterval(sampleTimer);
      window.clearInterval(faceTimer);
      videoTrack?.removeEventListener("ended", onVideoEnded);
      videoTrack?.removeEventListener("mute", onVideoMute);
      videoTrack?.removeEventListener("unmute", onVideoUnmute);
      audioTrack?.removeEventListener("ended", onAudioEnded);
      audioTrack?.removeEventListener("mute", onAudioMute);
      audioTrack?.removeEventListener("unmute", onAudioUnmute);
      if (video.srcObject === stream) video.srcObject = null;
    };
  }, [stream, faceIdentity, onWarning, onRecovery, onEvidence]);

  return (
    <div className="sticky top-2 z-20 mt-4 w-52 max-w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-950 shadow-2xl">
      <div className="flex items-center justify-between border-b border-white/10 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-200">
        <span className="flex items-center gap-1.5"><Camera className="h-3 w-3 text-amber-400" /> Camera monitor</span>
        <span className={cameraReady ? "text-emerald-400" : "text-rose-400"}>{cameraReady ? "Live" : "Check"}</span>
      </div>
      <div className="relative aspect-video bg-black">
        <video ref={videoRef} autoPlay playsInline muted className="h-full w-full object-cover scale-x-[-1]" />
        {spotCheck && <div className="absolute inset-x-0 top-0 bg-amber-400 px-2 py-1 text-center text-[10px] font-black text-slate-950">Spot check: look at the camera</div>}
        {!cameraReady && <div className="absolute inset-0 flex items-center justify-center bg-slate-950/90 px-2 text-center text-[10px] font-semibold text-amber-200">{cameraIssue || "Waiting for camera frames…"}</div>}
      </div>
      <p className="px-2.5 pt-1.5 text-[9px] font-bold text-slate-300" role="status">{faceMonitorStatus}</p>
      <p className="px-2.5 pb-1.5 text-[9px] leading-tight text-slate-400">Face frames and the temporary face reference are analyzed locally and are not uploaded.</p>
    </div>
  );
}
