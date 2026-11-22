// Career-page agent: opens each company's careers page in a real (headless) browser, captures the job data
// the page loads, and writes the recent India tech openings to a JSON file the site reads.
//
//   node scripts/crawl-careers.mjs [--out out/crawled-jobs.json] [--prev prev.json] [--only Google,Microsoft]
//
// Needs Playwright:  cd scripts && npm init -y && npm i playwright && npx playwright install chromium
// No AI, no paid services. It only visits public careers pages, once per run, one company at a time,
// and does not try to get around logins, CAPTCHAs or blocks: a blocked page is simply recorded as not ok.
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import { INDIA, TECH, jobsFromJson, jobsFromJsonLd, jobsFromLinks, keepJob, shapeOf } from "./career-extract.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const arg = (name, dflt) => { const i = process.argv.indexOf(name); return i > -1 ? process.argv[i + 1] : dflt; };
const outPath = path.resolve(arg("--out", path.join(root, "out/crawled-jobs.json")));
const prevPath = arg("--prev", "");
const only = (arg("--only", "") || "").split(",").map((s) => s.trim()).filter(Boolean);

const pages = JSON.parse(fs.readFileSync(arg("--pages", path.join(root, "src/data/careerPages.json")), "utf8"));
let prev = { jobs: [] };
try { if (prevPath) prev = JSON.parse(fs.readFileSync(prevPath, "utf8")); } catch { /* first run */ }
const firstSeen = new Map((prev.jobs || []).map((j) => [j.id, j.firstSeen || j.publishedAt]));

const { chromium } = await import("playwright");
const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
  locale: "en-IN", viewport: { width: 1366, height: 900 },
});

const now = Date.now();
const MAX_AGE = 30 * 86400000;
const companies = {};
const jobs = [];
const discovery = {}; // what each page loads, so per-company readers can be written from real data

for (const [company, url] of Object.entries(pages)) {
  if (only.length && !only.includes(company)) continue;
  const page = await context.newPage();
  const payloads = [];
  page.on("response", async (res) => {
    try {
      if (!(res.headers()["content-type"] || "").includes("json")) return;
      const body = await res.text();
      if (body.length > 3_000_000) return;
      const json = JSON.parse(body);
      payloads.push({ json, base: res.url() });
      const shape = shapeOf(json);
      if (shape) (discovery[company] = discovery[company] || []).push({ url: res.url().slice(0, 300), method: res.request().method(), post: (res.request().postData() || "").slice(0, 300), bytes: body.length, list: shape });
    } catch { /* not json / already closed */ }
  });
  let method = "none";
  let error = "";
  let found = [];
  let status = 0;
  let title = "";
  let jsonCount = 0;
  try {
    const resp = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45000 });
    status = resp ? resp.status() : 0;
    await page.waitForLoadState("networkidle", { timeout: 15000 }).catch(() => {});
    for (let i = 0; i < 3; i++) { await page.mouse.wheel(0, 2500); await page.waitForTimeout(1500); }

    title = (await page.title().catch(() => "")).slice(0, 60);
    jsonCount = payloads.length;
    const fromJson = payloads.flatMap((p) => jobsFromJson(p.json, new URL(url).origin, now));
    const ld = await page.$$eval('script[type="application/ld+json"]', (els) => els.map((e) => e.textContent || ""));
    const fromLd = jobsFromJsonLd(ld, url, now);
    found = fromJson.concat(fromLd);
    method = fromJson.length ? "network-json" : fromLd.length ? "json-ld" : "none";
    if (!found.length) {
      const links = await page.$$eval("a[href]", (els) => els.map((a) => ({ href: a.href, text: a.textContent || "" })));
      found = jobsFromLinks(links, url);
      if (found.length) method = "links";
    }
  } catch (e) {
    error = String(e && e.message ? e.message : e).split("\n")[0].slice(0, 160);
    // keep a picture of pages that gave nothing, so the cause (block page, cookie wall, empty search) is visible
  } finally {
    try {
      if (!found.length) {
        fs.mkdirSync(path.join(path.dirname(outPath), "shots"), { recursive: true });
        await page.screenshot({ path: path.join(path.dirname(outPath), "shots", company.replace(/[^a-z0-9]+/gi, "_") + ".png") });
      }
    } catch { /* ignore */ }
    await page.close().catch(() => {});
  }

  const seen = new Set();
  const kept = found.filter((j) => keepJob(j) && !seen.has(j.url) && seen.add(j.url)).slice(0, 60);
  let count = 0;
  for (const j of kept) {
    const id = "cr-" + crypto.createHash("sha1").update(j.url).digest("hex").slice(0, 12);
    const seenAt = firstSeen.get(id) || new Date(now).toISOString();
    const dateKnown = j.publishedMs != null && j.publishedMs <= now + 86400000;
    if (dateKnown && j.publishedMs < now - MAX_AGE) continue;
    jobs.push({
      id, company, title: j.title, department: null, location: j.location || "India", employmentType: null, workplaceType: null,
      publishedAt: dateKnown ? new Date(Math.min(j.publishedMs, now)).toISOString() : seenAt,
      firstSeen: seenAt, dateKnown, jobUrl: j.url, viaAgent: true,
    });
    count++;
  }
  companies[company] = { ok: count > 0, count, method, ...(error ? { error } : {}) };
  const tech = found.filter((j) => TECH.test(j.title)).length;
  const india = found.filter((j) => TECH.test(j.title) && (j.location ? INDIA.test(j.location) : false)).length;
  const sample = found.slice(0, 2).map((j) => `${j.title.slice(0, 30)} @ ${j.location || "?"}`).join(" ; ");
  console.log(`${count > 0 ? "OK  " : "--  "} ${company}: ${count} jobs (${method}) http=${status} json=${jsonCount} raw=${found.length} tech=${tech} india=${india} title="${title}"${sample ? " e.g. " + sample : ""}${error ? " - " + error : ""}`);
}

await browser.close();
fs.mkdirSync(path.dirname(outPath), { recursive: true });
for (const c of Object.keys(discovery)) discovery[c] = discovery[c].sort((a, b) => b.list.len - a.list.len).slice(0, 8);
fs.writeFileSync(path.join(path.dirname(outPath), "discovery.json"), JSON.stringify({ generatedAt: new Date(now).toISOString(), discovery }, null, 1));
fs.writeFileSync(outPath, JSON.stringify({ generatedAt: new Date(now).toISOString(), companies, jobs }, null, 1));
console.log(`\nWrote ${jobs.length} jobs for ${Object.values(companies).filter((c) => c.ok).length}/${Object.keys(companies).length} companies -> ${outPath}`);
