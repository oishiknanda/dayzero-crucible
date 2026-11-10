// Companies that are open to everyone. Every other company shows "Coming soon" plus a vote button.
export const LIVE_COMPANIES: readonly string[] = ["amazon", "google", "microsoft"];

export const isLiveCompany = (slug: string) => LIVE_COMPANIES.includes(slug.toLowerCase());

export const isValidSlug = (slug: string) => /^[a-z0-9-]{1,60}$/.test(slug);

export const prettyCompany = (slug: string) => slug.replace(/[-_]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());