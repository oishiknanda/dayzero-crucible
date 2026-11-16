// FEASIBILITY TEST ONLY: what does The Muse's public jobs API return for India, and which of your companies are in it?
// Writes nothing to the site. No key needed (set MUSE_API_KEY to raise the rate limit if you have one).
//
//   node scripts/muse-test.mjs [--pages 5]
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const arg = (n, d) => { const i = process.argv.indexOf(n); return i > -1 ? process.argv[i + 1] : d; };
const PAGES = Math.max(1, Number(arg("--pages", "5")));
const KEY = process.env.MUSE_API_KEY || "";
const LOCATIONS = ["India", "Bangalore, India", "Hyderabad, India", "Pune, India", "Mumbai, India", "Gurugram, India", "Chennai, India", "New Delhi, India", "Noida, India"];
const CATEGORIES = ["Software Engineering", "Data and Analytics", "Data Science", "IT", "Product", "Design and UX"];
const norm = (s) => String(s || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
const names = JSON.parse(fs.readFileSync(path.join(root, "scripts/hiring-company-names.json"), "utf8"));
const byNorm = new Map(names.map((n) => [norm(n), n]));

async function page(location, p) {
  const q = new URLSearchParams({ page: String(p) });
  q.append("location", location);
  for (const c of CATEGORIES) q.append("category", c);
  if (KEY) q.set("api_key", KEY);
  const res = await fetch("https://www.themuse.com/api/public/jobs?" + q, { headers: { "User-Agent": "DayZeroHiringBot/1.0 (+https://github.com/oishiknanda/dayzero-crucible)" }, signal: AbortSignal.timeout(20000) });
  if (!res.ok) throw new Error("HTTP " + res.status);
  return res.json();
}

const seen = new Map();   // landing page -> job
for (const loc of LOCATIONS) {
  let got = 0, total = "?";
  try {
    for (let p = 0; p < PAGES; p++) {
      const d = await page(loc, p);
      total = d.page_count;
      for (const j of d.results || []) {
        const url = (j.refs || {}).landing_page || "";
        if (!url || seen.has(url)) continue;
        got++;
        seen.set(url, { title: j.name, company: (j.company || {}).name || "", locations: (j.locations || []).map((l) => l.name).join(" / "), date: j.publication_date, url });
      }
      if (p + 1 >= (d.page_count || 0)) break;
      await new Promise((r) => setTimeout(r, 400));
    }
    console.log(loc + ": " + got + " new jobs (api reports " + total + " pages)");
  } catch (e) { console.log(loc + ": failed (" + e.message + ")"); }
}

const jobs = Array.from(seen.values());
const india = jobs.filter((j) => /india|bengaluru|bangalore|hyderabad|pune|mumbai|gurugram|gurgaon|delhi|chennai|noida/i.test(j.locations));
const per = new Map();
for (const j of india) { const c = j.company; if (!per.has(c)) per.set(c, []); per.get(c).push(j); }
console.log("\nTotal distinct jobs: " + jobs.length + "; with an India location: " + india.length + "; companies: " + per.size);
const mine = [], other = [];
for (const [c, list] of per) (byNorm.has(norm(c)) ? mine : other).push([c, list]);
mine.sort((a, b) => b[1].length - a[1].length);
console.log("\nCompanies from YOUR site list (" + mine.length + "):");
for (const [c, l] of mine) console.log("  " + c + " (" + l.length + ")  e.g. " + l[0].title + " | " + l[0].locations + " | " + (l[0].date || "").slice(0, 10));
console.log("\nOther companies the API returned (" + other.length + "), top 25 by jobs:");
for (const [c, l] of other.sort((a, b) => b[1].length - a[1].length).slice(0, 25)) console.log("  " + c + " (" + l.length + ")");
