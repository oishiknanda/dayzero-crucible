"use client";

import { useRouter, useSearchParams } from "next/navigation";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Navbar } from "@/components/landing/Navbar";
import { Button } from "@/components/ui/Button";
import { getCompanyTrackData } from "@/data/companyTracks";
import { getAmazonRoleTrack, AmazonRole } from "@/data/amazonTracks";
import { 
  Camera, 
  Mic, 
  Monitor, 
  Wifi, 
  ShieldAlert, 
  ShieldCheck, 
  Terminal, 
  ArrowRight, 
  AlertTriangle,
  Sliders,
  CheckCircle2
} from "lucide-react";

export default function PreFlightSetupPage({
  params,
}: {
  params: { companyId: string; roundId: string };
}) {
  const companyData = getCompanyTrackData(params.companyId);
  const formattedRound = params.roundId.replace("-", " ").toUpperCase();

  // Media streams & hardware refs
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const [hasCamera, setHasCamera] = useState<boolean | null>(null);
  const [hasMic, setHasMic] = useState<boolean | null>(null);
  const [micVolume, setMicVolume] = useState<number>(0);
  const [latencyMs, setLatencyMs] = useState<number>(24);
  const [screenResolution, setScreenResolution] = useState<string>("Detecting...");
  const [isInitializing, setIsInitializing] = useState<boolean>(true);

  // Proctor Mode Toggle (Default ON, with developer override)
  const [proctorStrictMode, setProctorStrictMode] = useState<boolean>(true);

  const router = useRouter();
  const searchParams = useSearchParams();

  const initialRole = (typeof window !== "undefined" 
    ? new URLSearchParams(window.location.search).get("role") 
    : searchParams.get("role")) || "sde_intern";
  const initialSet = parseInt(
    (typeof window !== "undefined" 
      ? new URLSearchParams(window.location.search).get("set") 
      : searchParams.get("set")) || "1", 
    10
  );

  const [selectedRole, setSelectedRole] = useState<string>(initialRole);
  const [selectedSet, setSelectedSet] = useState<number>(initialSet);

    // Immediate URL normalization on mount: preserves the exact role passed from track page
  useEffect(() => {
    if (typeof window === "undefined") return;
    const isAmz = params.companyId.toLowerCase() === "amazon";
    if (!isAmz) return;

    const url = new URL(window.location.href);
    const existingRole = url.searchParams.get("role");

    if (existingRole && existingRole !== selectedRole) {
      setSelectedRole(existingRole);
    }
  }, [params.companyId]);


  // Sync state changes back into URL so navigating back remembers the selection
      const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("role", role);
      // Keep set in URL only if set has been intentionally calibrated
      url.searchParams.set("set", String(selectedSet));
      window.history.replaceState({}, "", url.toString());
    }
  };

  const handleSetSelect = (setNum: number) => {
    setSelectedSet(setNum);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("role", selectedRole);
      url.searchParams.set("set", String(setNum));
      window.history.replaceState({}, "", url.toString());
    }
  };

  // Dedicated Hardware Teardown Function
  const stopAllMediaStreams = useCallback(() => {
    // 1. Stop video/audio stream tracks completely
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => {
        track.stop();
        track.enabled = false;
      });
      streamRef.current = null;
    }

    // 2. Clear video element source
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }

    // 3. Cancel audio analyser animation loop
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    // 4. Close Web Audio Context
    if (audioContextRef.current && audioContextRef.current.state !== "closed") {
      audioContextRef.current.close().catch(() => {});
      audioContextRef.current = null;
    }
  }, []);

  // Initialize Hardware Probes
  useEffect(() => {
    let isCancelled = false;

    if (typeof window !== "undefined") {
      setScreenResolution(`${window.screen.width} × ${window.screen.height}`);
    }

    async function initHardware() {
      setIsInitializing(true);
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { width: 1280, height: 720 },
          audio: true,
        });

        // If user already clicked back/left while permission prompt was resolving
        if (isCancelled) {
          stream.getTracks().forEach((t) => t.stop());
          return;
        }

        streamRef.current = stream;

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        setHasCamera(true);
        setHasMic(true);

        // Mic Volume Listener via Web Audio API
        const AudioContextClass =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const audioCtx = new AudioContextClass();
        const analyser = audioCtx.createAnalyser();
        const microphone = audioCtx.createMediaStreamSource(stream);

        analyser.fftSize = 256;
        microphone.connect(analyser);

        audioContextRef.current = audioCtx;
        analyserRef.current = analyser;

        const dataArray = new Uint8Array(analyser.frequencyBinCount);

        const checkVolume = () => {
          if (isCancelled || !analyserRef.current) return;
          analyserRef.current.getByteFrequencyData(dataArray);
          let sum = 0;
          for (let i = 0; i < dataArray.length; i++) {
            sum += dataArray[i];
          }
          const avg = sum / dataArray.length;
          setMicVolume(Math.min(100, Math.round(avg * 1.8)));
          animationFrameRef.current = requestAnimationFrame(checkVolume);
        };

        checkVolume();
      } catch (err) {
        console.warn("Hardware initialization error:", err);
        if (!isCancelled) {
          setHasCamera(false);
          setHasMic(false);
        }
      } finally {
        if (!isCancelled) {
          setIsInitializing(false);
        }
      }
    }

    initHardware();

    // Ping check simulation
    const pingStart = performance.now();
    fetch("/api/ping", { method: "HEAD", cache: "no-store" })
      .then(() => {
        if (!isCancelled) setLatencyMs(Math.round(performance.now() - pingStart));
      })
      .catch(() => {
        if (!isCancelled) setLatencyMs(32);
      });

    // Cleanup on window close or tab exit
    window.addEventListener("beforeunload", stopAllMediaStreams);

    return () => {
      isCancelled = true;
      window.removeEventListener("beforeunload", stopAllMediaStreams);
      stopAllMediaStreams();
    };
  }, [stopAllMediaStreams]);

  
  const handleStartAssessment = (e: React.MouseEvent) => {
    e.preventDefault();
    stopAllMediaStreams();
    const isAmz = params.companyId.toLowerCase() === "amazon";
    const targetUrl = `/crucible/${sessionId}?strict=${proctorStrictMode}&company=${params.companyId}&round=${params.roundId}${
      isAmz ? `&role=${selectedRole}&set=${selectedSet}` : ""
    }`;
    router.push(targetUrl);
  };

  
  const handleStartNow = (e: React.MouseEvent) => {
    e.preventDefault();
    stopAllMediaStreams();
    const isAmz = params.companyId.toLowerCase() === "amazon";
    const target = "/crucible/" + sessionId + "?strict=" + proctorStrictMode + "&company=" + params.companyId + "&round=" + params.roundId + (isAmz ? ("&role=" + selectedRole + "&set=" + selectedSet) : "");
    window.location.assign(target);
  };

  const sessionId = `${params.companyId}-${params.roundId}-${Date.now().toString(36)}`;
  const isAmazon = params.companyId.toLowerCase() === "amazon";
  const cockpitLaunchUrl = `/crucible/${sessionId}?strict=${proctorStrictMode}&company=${params.companyId}&round=${params.roundId}${
    isAmazon ? `&role=${selectedRole}&set=${selectedSet}` : ""
  }`;

  return (
    <main className="min-h-screen bg-[#F1F4F9] text-slate-950 font-sans selection:bg-primary selection:text-white pb-24">
      <Navbar />

      {/* Header telemetry banner */}
      <section className="pt-12 pb-10 border-b-2 border-slate-300 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-md bg-slate-100 border border-slate-300 text-slate-800 text-xs font-mono font-bold tracking-wider">
                <Terminal className="h-3.5 w-3.5 text-primary" />
                <span>PRE-FLIGHT DIAGNOSTICS & SYSTEM LOCKDOWN GATEWAY</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight font-sans">
                {companyData.companyName} — {formattedRound} Calibration
              </h1>
              <p className="mt-2 text-sm sm:text-base text-slate-600 font-medium">
                Verify audiovisual telemetry and proctoring parameters prior to entering the isolated test sandbox.
              </p>
            </div>

            <div className="flex items-center gap-3 self-start sm:self-auto">
              <span className="px-3.5 py-1.5 rounded-lg border-2 border-slate-300 bg-slate-50 text-xs font-mono font-bold text-slate-700">
                GATE ID: {sessionId.slice(0, 16)}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Diagnostic Workspace */}
      <section className="max-w-6xl mx-auto px-6 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Webcam & Microphone Visualizer */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Amazon Assessment Preset Selector */}
            {params.companyId.toLowerCase() === "amazon" && (
              <div className="rounded-2xl border-2 border-amber-500 bg-white shadow-[4px_4px_0px_0px_rgba(245,158,11,1)] overflow-hidden p-6 mb-2">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping" />
                    <h3 className="font-mono text-sm font-black text-slate-900 uppercase tracking-wider">
                      Amazon OA Calibration Profile
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded border border-amber-300">
                    LOCKED ON ENTRY
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {/* Role Selector */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1.5">
                      Target Role Level
                    </label>
                    <select
                      value={selectedRole}
                      onChange={(e) => handleRoleSelect(e.target.value)}
                      className="w-full bg-slate-50 border-2 border-slate-300 rounded-xl px-3 py-2 text-sm font-semibold text-slate-900 focus:outline-none focus:border-amber-500 cursor-pointer"
                    >
                      <option value="sde_intern">SDE Intern</option>
                      <option value="sde_1">SDE I (L4)</option>
                      <option value="sde_2">SDE II (L5)</option>
                      <option value="sde_3">SDE III (L6)</option>
                      <option value="principal">Principal Engineer (L7)</option>
                    </select>
                  </div>

                  {/* Practice Set Selector */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1.5">
                      Historical OA Practice Set
                    </label>
                    <select
                      value={selectedSet}
                      onChange={(e) => handleSetSelect(parseInt(e.target.value, 10))}
                      className="w-full bg-slate-50 border-2 border-slate-300 rounded-xl px-3 py-2 text-sm font-semibold text-emerald-700 focus:outline-none focus:border-emerald-500 cursor-pointer font-mono"
                    >
                      {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                        <option key={num} value={num}>
                          Practice Set {num}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <p className="mt-3 text-xs text-slate-500 font-medium leading-relaxed">
                  Notice: Once hardware calibration is validated and you enter the sandbox, your environment will be locked to this problem set.
                </p>
              </div>
            )}

            {/* Camera Viewfinder */}
            <div className="rounded-2xl border-2 border-slate-900 bg-white shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] overflow-hidden">
              <div className="bg-[#0F172A] px-5 py-3 flex items-center justify-between border-b-2 border-slate-800">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-200">
                  <Camera className="h-4 w-4 text-primary" />
                  <span>CANDIDATE SURVEILLANCE FEED</span>
                </div>
                <div className="flex items-center gap-2">
                  {hasCamera === true ? (
                    <span className="text-[11px] font-mono font-black text-emerald-400 bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-800 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      FEED LIVE
                    </span>
                  ) : (
                    <span className="text-[11px] font-mono font-black text-amber-400 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      SIMULATED FEED
                    </span>
                  )}
                </div>
              </div>

              {/* Viewport Box */}
              <div className="relative aspect-video bg-slate-950 flex items-center justify-center overflow-hidden">
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className={`w-full h-full object-cover transform scale-x-[-1] ${
                    hasCamera ? "opacity-100" : "opacity-0 absolute pointer-events-none"
                  }`}
                />

                {!hasCamera && (
                  <div className="flex flex-col items-center justify-center p-8 text-center">
                    <Camera className="h-12 w-12 text-slate-600 mb-3 animate-pulse" />
                    <p className="text-sm font-sans font-bold text-slate-300">
                      {isInitializing ? "Initializing Optical Sensor..." : "Optical Stream Idle or Blocked"}
                    </p>
                    <p className="text-xs font-mono text-slate-500 max-w-sm mt-1">
                      Grant browser camera permissions to enable AI face tracking and dual-screen deflection alerts.
                    </p>
                  </div>
                )}

                {/* Optical Overlay Target Grid */}
                <div className="absolute inset-0 pointer-events-none border-[1px] border-emerald-500/20 m-6 rounded-lg flex items-center justify-center">
                  <div className="w-16 h-16 border-t-2 border-l-2 border-emerald-500/60 absolute top-0 left-0" />
                  <div className="w-16 h-16 border-t-2 border-r-2 border-emerald-500/60 absolute top-0 right-0" />
                  <div className="w-16 h-16 border-b-2 border-l-2 border-emerald-500/60 absolute bottom-0 left-0" />
                  <div className="w-16 h-16 border-b-2 border-r-2 border-emerald-500/60 absolute bottom-0 right-0" />
                  <span className="text-[10px] font-mono font-bold text-emerald-400/80 bg-slate-950/70 px-2 py-0.5 rounded tracking-widest uppercase">
                    Face Calibration: Locked
                  </span>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border-t-2 border-slate-200 flex items-center justify-between text-xs font-mono font-semibold text-slate-700">
                <span>Resolution: {hasCamera ? "1280x720 (720p HD)" : "Default Standard"}</span>
                <span>Aspect: 16:9 Landscape</span>
              </div>
            </div>

            {/* Microphone Decibel Stream Visualizer */}
            <div className="p-5 rounded-2xl border-2 border-slate-900 bg-white shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Mic className="h-4 w-4 text-primary" />
                  <span className="text-xs font-mono font-black text-slate-900 uppercase tracking-wider">
                    Microphone Input & Viva Synthesis Stream
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-slate-600">
                  {micVolume}% Intensity
                </span>
              </div>

              <div className="w-full bg-slate-100 rounded-lg h-3 border border-slate-300 overflow-hidden p-0.5 flex items-center">
                <div
                  className={`h-full rounded transition-all duration-75 ${
                    micVolume > 70
                      ? "bg-rose-500"
                      : micVolume > 30
                      ? "bg-emerald-500"
                      : "bg-primary"
                  }`}
                  style={{ width: `${Math.max(5, micVolume)}%` }}
                />
              </div>

              <p className="mt-2 text-[11px] font-sans text-slate-500 font-medium">
                Speak normally to calibrate oral defense response levels. Live AI voice evaluators require clean audio for AST Big-O cross-examination.
              </p>
            </div>
          </div>

          {/* Right Column: Hardware Telemetry, Settings & Entry */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Checklist */}
            <div className="p-6 rounded-2xl border-2 border-slate-900 bg-white shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
              <h3 className="text-base font-black text-slate-950 font-sans tracking-tight mb-4 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                Hardware & Security Checklist
              </h3>

              <div className="space-y-3.5">
                <div className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-slate-50">
                  <div className="flex items-center gap-3">
                    <Camera className="h-4 w-4 text-slate-700" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">Optical Sensor</div>
                      <div className="text-[11px] font-mono text-slate-500">Live Face Presence</div>
                    </div>
                  </div>
                  {hasCamera ? (
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  ) : (
                    <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0" />
                  )}
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-slate-50">
                  <div className="flex items-center gap-3">
                    <Mic className="h-4 w-4 text-slate-700" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">Audio Ingestion</div>
                      <div className="text-[11px] font-mono text-slate-500">WebRTC Stream Active</div>
                    </div>
                  </div>
                  {hasMic ? (
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  ) : (
                    <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0" />
                  )}
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-slate-50">
                  <div className="flex items-center gap-3">
                    <Monitor className="h-4 w-4 text-slate-700" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">Display Workspace</div>
                      <div className="text-[11px] font-mono text-slate-500">{screenResolution}</div>
                    </div>
                  </div>
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-slate-50">
                  <div className="flex items-center gap-3">
                    <Wifi className="h-4 w-4 text-slate-700" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">Telemetry Latency</div>
                      <div className="text-[11px] font-mono text-slate-500">{latencyMs}ms Roundtrip</div>
                    </div>
                  </div>
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                </div>
              </div>
            </div>

            {/* Developer Override Switch */}
            <div className="p-6 rounded-2xl border-2 border-slate-900 bg-white shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Sliders className="h-4 w-4 text-primary" />
                  <span className="text-xs font-mono font-black text-slate-900 uppercase tracking-wider">
                    Proctor Strict Mode Configuration
                  </span>
                </div>
                <span
                  className={`px-2 py-0.5 rounded text-[10px] font-mono font-black ${
                    proctorStrictMode
                      ? "bg-rose-100 text-rose-900 border border-rose-300"
                      : "bg-amber-100 text-amber-900 border border-amber-300"
                  }`}
                >
                  {proctorStrictMode ? "ENTERPRISE ACTIVE" : "DEV BYPASS"}
                </span>
              </div>

              <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4">
                When enabled, leaving fullscreen, clipboard pasting, or switching tabs logs real-time assessment violations. Disable this toggle during development to prevent local browser lockouts.
              </p>

              <div
                onClick={() => setProctorStrictMode(!proctorStrictMode)}
                className="flex items-center justify-between p-3.5 rounded-xl border-2 border-slate-300 hover:border-slate-800 bg-slate-50 cursor-pointer transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <ShieldAlert
                    className={`h-4 w-4 ${
                      proctorStrictMode ? "text-rose-600" : "text-slate-400"
                    }`}
                  />
                  <span className="text-xs font-bold text-slate-950 font-sans">
                    {proctorStrictMode
                      ? "Lockdown Enabled (Enforce Fullscreen & Tab Guard)"
                      : "Developer Bypass (Allow Tab Switching & DevTools)"}
                  </span>
                </div>
                <div
                  className={`w-11 h-6 flex items-center rounded-full p-1 duration-200 cursor-pointer ${
                    proctorStrictMode ? "bg-primary" : "bg-slate-300"
                  }`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-200 ${
                      proctorStrictMode ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Launch Cockpit CTA */}
            <div className="p-6 rounded-2xl border-2 border-slate-900 bg-white shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
              <button type="button" onClick={handleStartNow} className="w-full py-5 rounded-xl font-black text-base bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer">
      Enter Assessment Sandbox &rarr;
   </button>
              <p className="mt-3 text-center text-[11px] font-mono text-slate-500 font-semibold">
                By entering, candidate acknowledges session recording and automated AST code telemetry.
              </p>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}