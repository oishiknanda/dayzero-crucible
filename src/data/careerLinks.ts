import pages from "./careerPages.json";

/**
 * Official careers pages. Used for the "Open careers page" button and as the start pages the
 * career-page agent (scripts/crawl-careers.mjs) scans. Add a company to careerPages.json to include it.
 * Any company not listed gets a web-search link instead, so every company has a working link.
 */
export function careersUrlFor(company: string): string {
  const url = (pages as Record<string, string>)[company];
  return url || `https://www.google.com/search?q=${encodeURIComponent(`${company} careers software engineer jobs India`)}`;
}
