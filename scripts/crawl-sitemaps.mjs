// Reads each company's public job sitemap, opens only the NEW job pages, and takes title/location/date from their
// schema.org JobPosting data. No browser needed. Merges its jobs into out/crawled-jobs.json (written by crawl-careers.mjs).
//
//   node scripts/crawl-sitemaps.mjs [--prev prev.json] [--out out/crawled-jobs.json] [--only Zoho,Postman]
//
// Companies come from scripts/sitemap-sources.json, which scripts/discover-sitemaps.mjs writes.
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import { JOB_PATH, allowedByRobots, fetchText, jobUrlsFromSitemap, ldBlocks, parseRobots, sleep } from "./sitemap-lib.mjs";
import { jobsFromJsonLd, keepJob } from "./career-extract.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const arg = (n, d) => { const i = process.argv.indexOf(n); return i > -1 ? process.argv[i + 1] : d; };
const outPath = path.resolve(arg("--out", path.join(root, "out/crawled-jobs.json")));
const prevPath = arg("--prev", "");
const sourcesPath = arg("--sources", path.join(root, "scripts/sitemap-sources.json"));
const only = (arg("--only", "") || "").split(",").map((s) => s.trim()).filter(Boolean);

if (!fs.existsSync(sourcesPath)) { console.log("No sitemap-sources.json yet: run scripts/discover-sitemaps.mjs first. Nothing to do."); process.exit(0); }
const sources = JSON.parse(fs.readFileSync(sourcesPath, "utf8")).sources || {};

const read = (p, d) => { try { return JSON.parse(fs.readFileSync(p, "utf8")); } catch { return d; } };
const prev = read(prevPath, { jobs: [] });
// known pages are matched by the sitemap URL they came from (the job link itself can differ)
const prevByUrl = new Map((prev.jobs || []).map((j) => [j.sourceUrl || j.jobUrl, j]));
const now = Date.now();
// pages already read (kept or not): never fetched again for 45 days, so repeat runs stay light on the company's site
const checked = new Map((prev.checked || []).filter((c) => c.t >= Date.now() - 45 * 86400000).map((c) => [c.u, c.t]));
const DAY = 86400000;
const MAX_NEW_PER_COMPANY = 40;
const newJobs = [];
const status = {};

for (const [company, cfg] of Object.entries(sources)) {
  if (only.length && !only.includes(company)) continue;
  const pattern = cfg.pattern ? new RegExp(cfg.pattern, "i") : JOB_PATH;
  let robots = { sitemaps: [], disallow: [] };
  try { robots = parseRobots(await fetchText(new URL("/robots.txt", cfg.sitemaps[0]).toString(), 8000)); } catch { /* no robots.txt */ }
  let urls = [];
  let error = "";
  try {
    for (const sm of cfg.sitemaps) urls = urls.concat(await jobUrlsFromSitemap(sm, { pattern }));
  } catch (e) { error = "sitemap " + (e.status || e.message); }

  const seen = new Set();
  const recent = urls
    .filter((u) => !seen.has(u.loc) && seen.add(u.loc) && allowedByRobots(robots, u.loc))
    .filter((u) => !Number.isFinite(u.lastmod) || u.lastmod >= now - 45 * DAY)
    .sort((a, b) => (Number.isFinite(b.lastmod) ? b.lastmod : 0) - (Number.isFinite(a.lastmod) ? a.lastmod : 0));

  const jobs = [];
  // pages we already read: keep them (no new request) while they are still in the sitemap and still fresh
  for (const u of recent) {
    const old = prevByUrl.get(u.loc);
    if (old && old.company === company && (!old.dateKnown || Date.parse(old.publishedAt) >= now - 30 * DAY)) jobs.push(old);
  }
  const todo = recent.filter((u) => !prevByUrl.has(u.loc) && !checked.has(u.loc)).slice(0, MAX_NEW_PER_COMPANY);
  let blocked = "";
  for (const u of todo) {
    try {
      checked.set(u.loc, now);
      const html = await fetchText(u.loc, 15000);
      const found = jobsFromJsonLd(ldBlocks(html), u.loc, now)[0];
      if (!found || !keepJob(found)) { await sleep(300); continue; }
      const publishedMs = found.publishedMs ?? (Number.isFinite(u.lastmod) ? u.lastmod : null);
      const dateKnown = publishedMs != null && publishedMs <= now + DAY;
      if (dateKnown && publishedMs < now - 30 * DAY) { await sleep(300); continue; }
      const jobUrl = u.loc.startsWith("https://") ? u.loc : found.url;
      jobs.push({
        id: "sm-" + crypto.createHash("sha1").update(jobUrl).digest("hex").slice(0, 12),
        company, title: found.title, department: null, location: found.location || "India", employmentType: null, workplaceType: null,
        publishedAt: new Date(dateKnown ? Math.min(publishedMs, now) : now).toISOString(),
        firstSeen: new Date(now).toISOString(), dateKnown, jobUrl, sourceUrl: u.loc, viaAgent: true,
      });
    } catch (e) {
      if ([403, 429, 503].includes(e.status)) { blocked = String(e.status); checked.delete(u.loc); break; } // blocked: stop, do not push
    }
    await sleep(400);
  }
  newJobs.push(...jobs);
  status[company] = { ok: jobs.length > 0, count: jobs.length, method: "sitemap", ...(blocked ? { error: "blocked " + blocked } : error ? { error } : {}) };
  console.log(`${jobs.length ? "OK  " : "--  "} ${company}: ${jobs.length} jobs (sitemap) urls=${urls.length} recent=${recent.length} fetched=${todo.length}${blocked ? " BLOCKED " + blocked : ""}${error ? " " + error : ""}`);
}

// merge into the file the browser crawler wrote
const out = read(outPath, { generatedAt: new Date(now).toISOString(), companies: {}, jobs: [] });
const have = new Set(out.jobs.map((j) => j.jobUrl));
for (const j of newJobs) if (!have.has(j.jobUrl)) { out.jobs.push(j); have.add(j.jobUrl); }
for (const [c, s] of Object.entries(status)) if (s.ok || !(out.companies[c] && out.companies[c].ok)) out.companies[c] = s;
out.checked = Array.from(checked, ([u, t]) => ({ u, t })).slice(-6000);
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(out, null, 1));
console.log(`\nSitemaps added ${newJobs.length} jobs -> ${outPath}`);
