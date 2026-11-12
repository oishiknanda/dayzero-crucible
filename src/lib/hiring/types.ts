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

export type CoverageStatus = "live" | "aggregated" | "pending";

export type CoverageRow = {
  company: string;
  status: CoverageStatus;
  /** human label, e.g. "Greenhouse", "Workday", "Job aggregator" */
  source: string;
  jobs: number;
  /** where a visitor can browse this company's openings directly */
  careersUrl: string;
};
