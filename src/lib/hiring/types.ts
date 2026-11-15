export type Alert = {
  id: string;
  company: string;
  title: string;
  department: string | null;
  location: string;
  employmentType: string | null;
  workplaceType: string | null;
  publishedAt: string;
  jobUrl: string;
  /** true when the posting came from a job-data aggregator rather than the employer's own feed */
  aggregated?: boolean;
  /** true when found by the career-page agent scanning the employer's own careers page */
  viaAgent?: boolean;
};

export type SourceSpec =
  | { kind: "greenhouse"; slug: string }
  | { kind: "lever"; slug: string }
  | { kind: "ashby"; slug: string }
  | { kind: "workable"; slug: string }
  | { kind: "smartrecruiters"; slug: string }
  | { kind: "recruitee"; slug: string }
  | { kind: "workday"; host: string; tenant: string; site: string }
  | { kind: "microsoft" }
  | { kind: "google" };

/** live = official feed; aggregated = job-data partner; alerts = official email-alert sync; pending = careers page only */
export type CoverageStatus = "live" | "aggregated" | "alerts" | "pending";

export type CoverageRow = {
  company: string;
  status: CoverageStatus;
  /** human label, e.g. "Greenhouse", "Workday", "Job aggregator" */
  source: string;
  jobs: number;
  /** where a visitor can browse this company's openings directly */
  careersUrl: string;
  /** careers search already filtered to India engineering, when that URL format is known */
  directSearchUrl?: string;
};
