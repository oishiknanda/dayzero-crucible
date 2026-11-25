// Runs once when the server starts. On the hosted site a missing required setting stops the deploy from serving traffic,
// instead of quietly running with a local JSON file or without sign-in security.
export async function register() {
  if (process.env.NEXT_RUNTIME !== "nodejs") return;
  const required = ["NEXTAUTH_SECRET", "DATABASE_URL"];
  const recommended = ["NEXTAUTH_URL", "GEMINI_API_KEY", "GROQ_API_KEY", "FOUNDER_CODE", "NEXT_PUBLIC_CONTACT_EMAIL"];
  const missing = required.filter((k) => !process.env[k]);
  const hosted = process.env.VERCEL === "1";
  if (missing.length && hosted) throw new Error("Missing required environment variables: " + missing.join(", ") + ". See docs/launch-checklist.md.");
  if (missing.length && process.env.NODE_ENV === "production") console.error("[startup] Missing environment variables: " + missing.join(", "));
  const soft = recommended.filter((k) => !process.env[k]);
  if (soft.length && process.env.NODE_ENV === "production") console.warn("[startup] Optional settings not set: " + soft.join(", "));
}
