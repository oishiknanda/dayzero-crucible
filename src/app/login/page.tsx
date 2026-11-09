"use client";

import React, { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { getProviders, signIn, useSession } from "next-auth/react";
import { Button } from "@/components/ui/Button";
import { Terminal } from "lucide-react";

const OAUTH_LABELS: Record<string, string> = { google: "Continue with Google", github: "Continue with GitHub" };

function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const { status } = useSession();
  const callbackUrl = params.get("callbackUrl") || "/";

  const [mode, setMode] = useState<"signin" | "signup">(params.get("mode") === "signup" ? "signup" : "signin");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [oauth, setOauth] = useState<string[]>([]);

  useEffect(() => {
    getProviders()
      .then((p) => setOauth(Object.keys(p ?? {}).filter((id) => id === "google" || id === "github")))
      .catch(() => setOauth([]));
  }, []);

  useEffect(() => {
    if (status === "authenticated") router.replace(callbackUrl);
  }, [status, router, callbackUrl]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      if (mode === "signup") {
        const res = await fetch("/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        });
        if (!res.ok) {
          const data = (await res.json().catch(() => ({}))) as { error?: string };
          setError(data.error || "Could not create your account.");
          return;
        }
      }
      const result = await signIn("credentials", { email, password, redirect: false });
      if (!result || result.error) {
        setError("Incorrect email or password.");
        return;
      }
      router.replace(callbackUrl);
    } finally {
      setBusy(false);
    }
  };

  const input = "w-full rounded-lg border-2 border-slate-300 px-3.5 py-2.5 text-sm font-medium focus:border-slate-800 focus:outline-none";

  return (
    <div className="w-full max-w-md rounded-2xl border-2 border-slate-300 bg-white p-8 shadow-xl">
      <Link href="/" className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
          <Terminal className="h-5 w-5" />
        </div>
        <span className="text-xl font-extrabold tracking-tight text-slate-950">
          DAY-ZERO<span className="text-primary">.AI</span>
        </span>
      </Link>

      <h1 className="text-2xl font-extrabold text-slate-950">{mode === "signin" ? "Welcome back" : "Create your account"}</h1>
      <p className="mt-1 text-sm text-slate-600">
        {mode === "signin" ? "Sign in to track your interview history." : "Save your scores and practice again."}
      </p>

      {oauth.length > 0 && (
        <div className="mt-6 space-y-2.5">
          {oauth.map((id) => (
            <Button key={id} type="button" variant="outline" size="md" className="w-full" onClick={() => signIn(id, { callbackUrl })}>
              {OAUTH_LABELS[id]}
            </Button>
          ))}
          <div className="flex items-center gap-3 py-1 text-xs font-semibold text-slate-500">
            <span className="h-px flex-1 bg-slate-200" /> OR <span className="h-px flex-1 bg-slate-200" />
          </div>
        </div>
      )}

      <form onSubmit={submit} className="mt-5 space-y-3">
        {mode === "signup" && (
          <input className={input} placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" required />
        )}
        <input className={input} type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required />
        <input
          className={input}
          type="password"
          placeholder={mode === "signup" ? "Password (8+ characters)" : "Password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete={mode === "signup" ? "new-password" : "current-password"}
          minLength={mode === "signup" ? 8 : undefined}
          required
        />
        {error && <p className="text-sm font-semibold text-red-600">{error}</p>}
        <Button type="submit" variant="primary" size="md" className="w-full" disabled={busy}>
          {busy ? "Please wait..." : mode === "signin" ? "Sign in" : "Create account"}
        </Button>
      </form>

      <p className="mt-5 text-center text-sm text-slate-600">
        {mode === "signin" ? "New here? " : "Already have an account? "}
        <button
          type="button"
          className="font-bold text-primary hover:underline"
          onClick={() => {
            setError("");
            setMode(mode === "signin" ? "signup" : "signin");
          }}
        >
          {mode === "signin" ? "Create an account" : "Sign in"}
        </button>
      </p>
    </div>
  );
}

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-10">
      <Suspense fallback={null}>
        <LoginForm />
      </Suspense>
    </main>
  );
}
