export type RawJob = { title: string; url: string; location: string; publishedMs: number | null };
export const INDIA: RegExp;
export const TECH: RegExp;
export function parseDate(v: unknown, now?: number): number | null;
export function jobsFromJson(json: unknown, base: string, now?: number): RawJob[];
export function jobsFromJsonLd(blocks: string[], base: string, now?: number): RawJob[];
export function jobsFromLinks(links: Array<{ href: string; text: string }>, base: string): RawJob[];
export function keepJob(j: RawJob): boolean;
export function shapeOf(json: unknown): { path: string; len: number; sample: Record<string, unknown> } | null;
