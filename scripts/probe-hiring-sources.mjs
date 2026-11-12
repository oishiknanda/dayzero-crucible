// Finds a working job feed for every company on the site.
// Run on YOUR machine (needs internet):   node scripts/probe-hiring-sources.mjs
// Optional:  --workday   also sweep Workday hosts/sites for companies with no other match (slow)
// Output:    src/data/hiringSources.json  (+ scripts/hiring-probe-report.txt)
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const names = JSON.parse(fs.readFileSync(path.join(root, "scripts/hiring-company-names.json"), "utf8"));
const seeds = JSON.parse(fs.readFileSync(path.join(root, "src/data/hiringSeeds.json"), "utf8"));
const LEGACY = new Set(["Amazon","OpenAI","Ramp","Notion","Plaid","Stripe","Databricks","Coinbase","GitLab","Airbnb","Twilio","MongoDB","Elastic","Cloudflare","Figma","Dropbox","Asana","Instacart","Robinhood","Pinterest","PayPal"]);
const sweepWorkday = process.argv.includes("--workday");

const get = async (url, init) => {
  const r = await fetch(url, { ...init, signal: AbortSignal.timeout(10000), headers: { Accept: "application/json", ...(init?.headers || {}) } });
  if (!r.ok) throw new Error(String(r.status));
  return r.json();
};
const arr = (v) => (Array.isArray(v) ? v : []);

const tests = {
  greenhouse: async (s) => arr((await get(`https://boards-api.greenhouse.io/v1/boards/${s.slug}/jobs`)).jobs).length > 0,
  lever: async (s) => arr(await get(`https://api.lever.co/v0/postings/${s.slug}?mode=json`)).length > 0,
  ashby: async (s) => arr((await get(`https://api.ashbyhq.com/posting-api/job-board/${s.slug}`)).jobs).length > 0,
  workable: async (s) => arr((await get(`https://apply.workable.com/api/v1/widget/accounts/${s.slug}`)).jobs).length > 0,
  smartrecruiters: async (s) => (await get(`https://api.smartrecruiters.com/v1/companies/${s.slug}/postings?limit=1`)).totalFound > 0,
  recruitee: async (s) => arr((await get(`https://${s.slug}.recruitee.com/api/offers/`)).offers).length > 0,
  workday: async (s) => arr((await get(`https://${s.host}/wday/cxs/${s.tenant}/${s.site}/jobs`, {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ appliedFacets: {}, limit: 1, offset: 0, searchText: "software" }),
  })).jobPostings).length > 0,
  microsoft: async () => arr(((await get("https://gcsservices.careers.microsoft.com/search/api/v1/search?lc=India&l=en_us&pg=1&pgSz=5&o=Recent&q=software")).operationResult || {}).result?.jobs).length > 0,
  google: async () => arr((await get("https://careers.google.com/api/v3/search/?location=India&q=software&page_size=5")).jobs).length > 0,
};
const ok = async (spec) => { try { return await tests[spec.kind](spec); } catch { return false; } };

const compact = (n) => n.toLowerCase().replace(/\(.*?\)/g, "").replace(/[^a-z0-9]+/g, "");
const dashed = (n) => n.toLowerCase().replace(/\(.*?\)/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const kinds = ["greenhouse", "lever", "ashby", "workable", "smartrecruiters", "recruitee"];

function candidates(name) {
  const slugs = Array.from(new Set([compact(name), dashed(name), compact(name.split(/[ /(]/)[0]), compact(name) + "inc", compact(name) + "careers"].filter((x) => x.length > 1)));
  const out = [];
  for (const k of kinds) for (const s of slugs) out.push({ kind: k, slug: k === "smartrecruiters" ? s.charAt(0).toUpperCase() + s.slice(1) : s });
  return out;
}

function workdayGuesses(name) {
  const t = compact(name);
  const hosts = ["wd1", "wd3", "wd5", "wd12", "wd501"];
  const sites = ["External", "Careers", "careers", "jobs", "ExternalCareerSite", "External_Career_Site", t, t + "careers", t + "Careers"];
  const out = [];
  for (const h of hosts) for (const s of sites) out.push({ kind: "workday", host: `${t}.${h}.myworkdayjobs.com`, tenant: t, site: s });
  return out;
}

async function firstWorking(list) {
  for (const spec of list) if (await ok(spec)) return spec;
  return null;
}

async function pool(items, size, fn) {
  const results = new Array(items.length);
  let i = 0;
  await Promise.all(Array.from({ length: size }, async () => {
    while (i < items.length) { const k = i++; results[k] = await fn(items[k], k); process.stdout.write("."); }
  }));
  return results;
}

const todo = names.filter((n) => !LEGACY.has(n));
console.log(`Probing ${todo.length} companies (legacy ${LEGACY.size} skipped)...`);

const rows = await pool(todo, 6, async (name) => {
  // 1. verify the seed guesses
  for (const spec of seeds[name] || []) if (await ok(spec)) return { name, spec, how: "seed" };
  // 2. try the common ATS platforms with slug guesses
  let hit = await firstWorking(candidates(name));
  if (hit) return { name, spec: hit, how: "guess" };
  // 3. optional Workday sweep
  if (sweepWorkday) { hit = await firstWorking(workdayGuesses(name)); if (hit) return { name, spec: hit, how: "workday-sweep" }; }
  return { name, spec: null, how: "none" };
});

const sources = {}; const dead = [];
for (const r of rows) { if (r.spec) sources[r.name] = [r.spec]; else dead.push(r.name); }
fs.writeFileSync(path.join(root, "src/data/hiringSources.json"), JSON.stringify({ verifiedAt: new Date().toISOString(), sources, dead }, null, 1) + "\n");

const report = [
  `Connected directly: ${Object.keys(sources).length} / ${todo.length}`,
  ...rows.filter((r) => r.spec).map((r) => `  OK   ${r.name}  ->  ${r.spec.kind} (${r.how})`),
  "",
  `No free direct feed found (will use the aggregator fallback): ${dead.length}`,
  ...dead.map((n) => `  --   ${n}`),
].join("\n");
fs.writeFileSync(path.join(root, "scripts/hiring-probe-report.txt"), report + "\n");
console.log("\n" + report);
