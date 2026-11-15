// Shared helpers for reading public sitemaps and job pages politely.
// Honest user agent, robots.txt respected, no retries against blocks (a 403/429 means "stop", not "try harder").
import zlib from "node:zlib";

export const UA = "DayZeroHiringBot/1.0 (+https://github.com/oishiknanda/dayzero-crucible)";
export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export async function fetchText(url, timeout = 12000) {
  const res = await fetch(url, {
    headers: { "User-Agent": UA, Accept: "text/html,application/xml,text/xml,application/xhtml+xml,*/*;q=0.8" },
    signal: AbortSignal.timeout(timeout),
    redirect: "follow",
  });
  if (!res.ok) { const e = new Error(String(res.status)); e.status = res.status; throw e; }
  const buf = Buffer.from(await res.arrayBuffer());
  const gz = url.split("?")[0].endsWith(".gz") || (buf[0] === 0x1f && buf[1] === 0x8b);
  return (gz ? zlib.gunzipSync(buf) : buf).toString("utf8");
}

/** Sitemap lines and the Disallow rules that apply to every crawler ("User-agent: *"). */
export function parseRobots(text) {
  const sitemaps = [];
  const disallow = [];
  let applies = false;
  let sawRule = false;
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.replace(/#.*/, "").trim();
    const m = /^([A-Za-z-]+)\s*:\s*(.*)$/.exec(line);
    if (!m) continue;
    const key = m[1].toLowerCase();
    const val = m[2].trim();
    if (key === "sitemap" && val) sitemaps.push(val);
    else if (key === "user-agent") { if (sawRule) { applies = false; sawRule = false; } if (val === "*") applies = true; }
    else if (key === "disallow") { sawRule = true; if (applies && val) disallow.push(val); }
    else if (key === "allow") sawRule = true;
  }
  return { sitemaps, disallow };
}

export function allowedByRobots(robots, url) {
  let path;
  try { const u = new URL(url); path = u.pathname + u.search; } catch { return false; }
  return !robots.disallow.some((rule) => {
    if (rule.includes("*") || rule.endsWith("$")) {
      const re = new RegExp("^" + rule.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\\\$$/, "$").replace(/\*/g, ".*"));
      return re.test(path);
    }
    return path.startsWith(rule);
  });
}

const decode = (s) => s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&apos;/g, "'").trim();

export function parseSitemap(xml) {
  const sitemaps = [];
  const urls = [];
  for (const m of xml.matchAll(/<sitemap>([\s\S]*?)<\/sitemap>/gi)) {
    const loc = /<loc>([\s\S]*?)<\/loc>/i.exec(m[1]);
    if (loc) sitemaps.push(decode(loc[1]));
  }
  for (const m of xml.matchAll(/<url>([\s\S]*?)<\/url>/gi)) {
    const loc = /<loc>([\s\S]*?)<\/loc>/i.exec(m[1]);
    const mod = /<lastmod>([\s\S]*?)<\/lastmod>/i.exec(m[1]);
    if (loc) urls.push({ loc: decode(loc[1]), lastmod: mod ? Date.parse(decode(mod[1])) : NaN });
  }
  return { sitemaps, urls };
}

// URLs that look like one job page (a slug after /jobs/, /careers/, /position/ ...), not a category page or blog post.
export const JOB_PATH = /\/(?:jobs?|careers?|positions?|openings?|vacanc(?:y|ies)|roles?|job-details?|job-openings?|requisitions?)\/[^/?#]{4,}/i;
export const NOT_JOB = /\/(?:blog|news|press|events?|about|life|teams?|locations?|students?|university|benefits|culture|stories|story|insights?|podcasts?|categor(?:y|ies)|search|alerts?)\b/i;

/** Walks a sitemap (and a sitemap index, one or two levels) and returns job-looking URLs with their lastmod. */
export async function jobUrlsFromSitemap(startUrl, { pattern = JOB_PATH, maxSitemaps = 10, delay = 250 } = {}) {
  const queue = [startUrl];
  const seen = new Set();
  const out = [];
  let fetched = 0;
  while (queue.length && fetched < maxSitemaps) {
    const url = queue.shift();
    if (seen.has(url)) continue;
    seen.add(url);
    let xml;
    try { xml = await fetchText(url, 20000); } catch (e) { if (!fetched) throw e; continue; }
    fetched++;
    const { sitemaps, urls } = parseSitemap(xml);
    // children that mention jobs/careers go first
    sitemaps.sort((a, b) => Number(/job|career|position|opening|vacanc|role/i.test(b)) - Number(/job|career|position|opening|vacanc|role/i.test(a)));
    for (const s of sitemaps) if (!seen.has(s)) queue.push(s);
    for (const u of urls) if (pattern.test(u.loc) && !NOT_JOB.test(new URL(u.loc).pathname)) out.push(u);
    await sleep(delay);
  }
  return out;
}

export function ldBlocks(html) {
  return Array.from(html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)).map((m) => m[1]);
}
