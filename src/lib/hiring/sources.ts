import seeds from "../../data/hiringSeeds.json";
import verified from "../../data/hiringSources.json";
import type { SourceSpec } from "./types";

/**
 * Companies already served by the original feed in api/hiring-alerts/route.ts.
 * The registry skips them so nothing is fetched or shown twice.
 */
export const LEGACY_COMPANIES = [
  "Amazon", "OpenAI", "Ramp", "Notion", "Plaid", "Stripe", "Databricks", "Coinbase", "GitLab", "Airbnb",
  "Twilio", "MongoDB", "Elastic", "Cloudflare", "Figma", "Dropbox", "Asana", "Instacart", "Robinhood",
  "Pinterest", "PayPal",
];

type VerifiedFile = { sources?: Record<string, SourceSpec[]>; dead?: string[] };

/**
 * Source resolution per company:
 *  1. entries proven by scripts/probe-hiring-sources.mjs (src/data/hiringSources.json)
 *  2. otherwise the best-guess seeds (src/data/hiringSeeds.json) unless the probe marked them dead
 */
export function sourcesFor(company: string): SourceSpec[] {
  const v = verified as VerifiedFile;
  if (v.sources && v.sources[company]) return v.sources[company];
  if (v.dead && v.dead.indexOf(company) !== -1) return [];
  return ((seeds as unknown as Record<string, SourceSpec[]>)[company]) || [];
}

export function sourceLabel(spec: SourceSpec): string {
  switch (spec.kind) {
    case "greenhouse": return "Greenhouse";
    case "lever": return "Lever";
    case "ashby": return "Ashby";
    case "workable": return "Workable";
    case "smartrecruiters": return "SmartRecruiters";
    case "recruitee": return "Recruitee";
    case "workday": return "Workday";
    case "microsoft": return "Microsoft Careers";
    case "google": return "Google Careers";
  }
}
