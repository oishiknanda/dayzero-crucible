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

type VerifiedFile = { sources?: Record<string, SourceSpec[]> };

/**
 * Source resolution per company:
 *  1. entries proven by scripts/probe-hiring-sources.mjs (src/data/hiringSources.json)
 *  2. otherwise the hand-picked seeds (src/data/hiringSeeds.json).
 *
 * A probe run that missed a seed (one timeout is enough) must not switch that company off, so the probe's
 * "dead" list is not used here. A wrong seed simply fails and the company shows as "Connecting".
 * Wrong guesses never get in: the probe only records a guessed feed when the board's company name matches.
 */
export function sourcesFor(company: string): SourceSpec[] {
  const v = verified as VerifiedFile;
  if (v.sources && v.sources[company]) return v.sources[company];
  return ((seeds as unknown as Record<string, SourceSpec[]>)[company]) || [];
}

const LABELS: Record<string, string> = {
  greenhouse: "Greenhouse",
  lever: "Lever",
  ashby: "Ashby",
  workable: "Workable",
  smartrecruiters: "SmartRecruiters",
  recruitee: "Recruitee",
  workday: "Workday",
  microsoft: "Microsoft Careers",
  google: "Google Careers",
  eightfold: "Eightfold",
  capgemini: "Capgemini Careers",
  "oracle-hcm": "Oracle Recruiting",
};

export function sourceLabel(spec: SourceSpec): string {
  return LABELS[spec.kind as string] || "Direct feed";
}
