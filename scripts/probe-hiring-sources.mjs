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
  eightfold: async (s) => {
    const q = `domain=${s.domain}&query=software&location=India&start=0`;
    const j = await get(s.api === "pcsx" ? `https://${s.host}/api/pcsx/search?${q}` : `https://${s.host}/api/apply/v2/jobs?${q}&num=5`);
    return arr(j.data?.positions).length + arr(j.positions).length > 0;
  },
  capgemini: async () => arr((await get("https://cg-jobstream-api.azurewebsites.net/api/job-search?page=1&size=3&country_code=in-en")).data).length > 0,
  "oracle-hcm": async (s) => {
    const j = await get(`https://${s.host}/hcmRestApi/resources/latest/recruitingCEJobRequisitions?onlyData=true&finder=findReqs;siteNumber=${s.site},limit=3,sortBy=POSTING_DATES_DESC`);
    return arr(arr(j.items)[0]?.requisitionList).length > 0;
  },
  microsoft: async () => arr(((await get("https://gcsservices.careers.microsoft.com/search/api/v1/search?lc=India&l=en_us&pg=1&pgSz=5&o=Recent&q=software")).operationResult || {}).result?.jobs).length > 0,
  google: async () => arr((await get("https://careers.google.com/api/v3/search/?location=India&q=software&page_size=5")).jobs).length > 0,
};
const ok = async (spec) => { try { return await tests[spec.kind](spec); } catch { return false; } };

// A feed existing at a guessed address does not prove it belongs to this company (a "meta" or "tcs" board can be
// an unrelated organisation). Where the platform returns the employer's name, it must match ours.
const STOP = new Set(["the", "inc", "ltd", "limited", "group", "technologies", "technology", "services", "global", "india", "pvt", "private", "corp", "llc", "software", "systems", "labs", "company"]);
const words = (s) => String(s).toLowerCase().replace(/\(.*?\)/g, " ").split(/[^a-z0-9]+/).filter((w) => w && !STOP.has(w));
const ALIAS = { TCS: ["tata", "consultancy"], "J.P. Morgan Chase": ["jpmorgan", "jpmorganchase"], "Walmart Global Tech": ["walmart"], EY: ["ernst"], HCLTech: ["hcl"], "Samsung R&D": ["samsung"], "Reliance Jio": ["jio"], "Bharti Airtel": ["airtel"], "Tech Mahindra": ["mahindra"] };
function sameCompany(directoryName, boardName) {
  // whole words only: "Meta" must not match "Metabase", "Canva" must not match "Canvas Medical"
  const board = words(boardName);
  return words(directoryName).concat(ALIAS[directoryName] || []).some((w) => board.includes(w));
}
const nameOf = {
  greenhouse: async (s) => (await get(`https://boards-api.greenhouse.io/v1/boards/${s.slug}`)).name,
  smartrecruiters: async (s) => (await get(`https://api.smartrecruiters.com/v1/companies/${s.slug}/postings?limit=1`)).content?.[0]?.company?.name,
  recruitee: async (s) => (await get(`https://${s.slug}.recruitee.com/api/offers/`)).offers?.[0]?.company_name,
  workable: async (s) => (await get(`https://apply.workable.com/api/v1/widget/accounts/${s.slug}`)).name,
};
// returns "yes" | "no" | "unknown" (platform gives no employer name: Lever, Ashby, Workday, ...)
async function identity(name, spec) {
  if (!nameOf[spec.kind]) return "unknown";
  try { const n = await nameOf[spec.kind](spec); return n ? (sameCompany(name, n) ? "yes" : "no:" + n) : "unknown"; } catch { return "unknown"; }
}

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
  const rejected = [];
  // 1. verify the hand-picked seeds (unknown identity is fine for these: a person chose the address)
  for (const spec of seeds[name] || []) {
    if (!(await ok(spec))) continue;
    const id = await identity(name, spec);
    if (id.startsWith("no:")) { rejected.push(`${spec.kind}/${spec.slug || spec.tenant || spec.host} is "${id.slice(3)}"`); continue; }
    return { name, spec, how: "seed" };
  }
  // 2. try the common ATS platforms with slug guesses; a guess must prove it is the same company
  for (const spec of candidates(name)) {
    if (!(await ok(spec))) continue;
    const id = await identity(name, spec);
    if (id === "yes") return { name, spec, how: "guess (name matched)" };
    if (id.startsWith("no:")) rejected.push(`${spec.kind}/${spec.slug} is "${id.slice(3)}"`);
    // "unknown" (Lever, Ashby): cannot be confirmed from a guess, so it is not accepted
  }
  // 3. optional Workday sweep (tenant name is not verifiable, so only run when asked)
  if (sweepWorkday) { const hit = await firstWorking(workdayGuesses(name)); if (hit) return { name, spec: hit, how: "workday-sweep (unverified)" }; }
  return { name, spec: null, how: "none", rejected };
});

const sources = {}; const dead = [];
for (const r of rows) { if (r.spec) sources[r.name] = [r.spec]; else dead.push(r.name); }
fs.writeFileSync(path.join(root, "src/data/hiringSources.json"), JSON.stringify({ verifiedAt: new Date().toISOString(), sources, dead }, null, 1) + "\n");

const report = [
  `Connected directly: ${Object.keys(sources).length} / ${todo.length}`,
  ...rows.filter((r) => r.spec).map((r) => `  OK   ${r.name}  ->  ${r.spec.kind} (${r.how})`),
  "",
  `No free direct feed found (will use the aggregator fallback): ${dead.length}`,
  ...rows.filter((r) => !r.spec).map((r) => `  --   ${r.name}${r.rejected && r.rejected.length ? "   (rejected: wrong company -> " + r.rejected.slice(0, 2).join("; ") + ")" : ""}`),
].join("\n");
fs.writeFileSync(path.join(root, "scripts/hiring-probe-report.txt"), report + "\n");
console.log("\n" + report);
