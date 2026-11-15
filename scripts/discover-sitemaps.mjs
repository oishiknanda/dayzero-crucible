// Finds which companies publish a job sitemap whose job pages carry schema.org JobPosting data.
// Run on YOUR machine:   node scripts/discover-sitemaps.mjs [--only "Zoho,Postman"]
// Output: scripts/sitemap-sources.json (used by scripts/crawl-sitemaps.mjs) and scripts/sitemap-report.txt
// Only public files are read (robots.txt, sitemaps, job pages), with an honest user agent. A 403/429 is recorded
// as "blocked" and left alone.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ldBlocks, fetchText, jobUrlsFromSitemap, parseRobots, sleep } from "./sitemap-lib.mjs";
import { jobsFromJsonLd } from "./career-extract.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const domains = JSON.parse(fs.readFileSync(path.join(root, "scripts/company-domains.json"), "utf8"));
const arg = (n, d) => { const i = process.argv.indexOf(n); return i > -1 ? process.argv[i + 1] : d; };
const only = (arg("--only", "") || "").split(",").map((s) => s.trim()).filter(Boolean);

const COMMON = ["/sitemap.xml", "/sitemap_index.xml", "/sitemap-index.xml", "/careers/sitemap.xml", "/jobs/sitemap.xml", "/sitemap-jobs.xml", "/sitemap_jobs.xml"];

async function candidatesFor(domain) {
  const hosts = Array.from(new Set([domain, "www." + domain, "careers." + domain, "jobs." + domain].map((h) => h.replace(/^www\.www\./, "www."))));
  const found = [];
  let blocked = null;
  for (const host of hosts) {
    try {
      const robots = parseRobots(await fetchText(`https://${host}/robots.txt`, 8000));
      for (const s of robots.sitemaps) found.push(s);
    } catch (e) { if ([403, 429, 503].includes(e.status)) blocked = e.status; }
    for (const p of COMMON) found.push(`https://${host}${p}`);
  }
  return { urls: Array.from(new Set(found)), blocked };
}

async function probeCompany(name, doms) {
  let blocked = null;
  let best = null;
  for (const domain of doms) {
    const { urls, blocked: b } = await candidatesFor(domain);
    blocked = blocked || b;
    for (const url of urls.slice(0, 14)) {
      let jobs;
      try { jobs = await jobUrlsFromSitemap(url); } catch (e) { if ([403, 429, 503].includes(e.status)) blocked = e.status; continue; }
      if (jobs.length >= 3 && (!best || jobs.length > best.jobs.length)) best = { url, jobs };
      if (best && best.jobs.length >= 20) break;
    }
    if (best && best.jobs.length >= 20) break;
  }
  if (!best) return { name, status: blocked ? `blocked (${blocked})` : "no job sitemap" };
  // do the job pages carry JobPosting data? check the freshest few
  const sample = best.jobs.sort((a, b) => (b.lastmod || 0) - (a.lastmod || 0)).slice(0, 4);
  let withLd = 0;
  let india = 0;
  for (const s of sample) {
    try {
      const html = await fetchText(s.loc, 15000);
      const jobs = jobsFromJsonLd(ldBlocks(html), s.loc);
      if (jobs.length) { withLd++; if (/india|bengaluru|bangalore|hyderabad|pune|mumbai|gurugram|gurgaon|chennai|noida|delhi/i.test(jobs[0].location)) india++; }
    } catch (e) { if ([403, 429].includes(e.status)) blocked = e.status; }
    await sleep(400);
  }
  if (!withLd) return { name, status: blocked ? `blocked (${blocked})` : "job sitemap found, but pages have no JobPosting data", sitemap: best.url, jobUrls: best.jobs.length };
  return { name, status: "ok", sitemap: best.url, jobUrls: best.jobs.length, ldSample: `${withLd}/${sample.length}`, indiaSample: india };
}

const names = Object.keys(domains).filter((n) => !only.length || only.includes(n));
console.log(`Checking ${names.length} companies for job sitemaps...`);
const rows = [];
let i = 0;
await Promise.all(Array.from({ length: 4 }, async () => {
  while (i < names.length) {
    const name = names[i++];
    let row;
    try { row = await probeCompany(name, domains[name]); } catch (e) { row = { name, status: "error: " + String(e.message).slice(0, 60) }; }
    rows.push(row);
    process.stdout.write(row.status === "ok" ? "+" : ".");
  }
}));

const ok = rows.filter((r) => r.status === "ok").sort((a, b) => a.name.localeCompare(b.name));
const sources = {};
for (const r of ok) sources[r.name] = { sitemaps: [r.sitemap] };
fs.writeFileSync(path.join(root, "scripts/sitemap-sources.json"), JSON.stringify({ discoveredAt: new Date().toISOString(), sources }, null, 1) + "\n");
const report = [
  `Usable job sitemaps: ${ok.length} / ${names.length}`,
  ...ok.map((r) => `  OK   ${r.name}  ${r.jobUrls} job URLs, JobPosting on ${r.ldSample} sampled pages (${r.indiaSample} in India)  ${r.sitemap}`),
  "",
  "Not usable:",
  ...rows.filter((r) => r.status !== "ok").sort((a, b) => a.name.localeCompare(b.name)).map((r) => `  --   ${r.name}: ${r.status}`),
].join("\n");
fs.writeFileSync(path.join(root, "scripts/sitemap-report.txt"), report + "\n");
console.log("\n" + report);
