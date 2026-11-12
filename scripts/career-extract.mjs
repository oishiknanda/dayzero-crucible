// Turns whatever a careers page loads (JSON responses, JobPosting markup, links) into job records.
// No AI and no guessing: a job is only returned when the page itself supplied a title and a link.

const TITLE = ["title", "jobTitle", "job_title", "jobName", "position", "name", "text"];
const URLK = ["absolute_url", "applyUrl", "apply_url", "jobUrl", "job_url", "hostedUrl", "careers_url", "canonicalPositionUrl", "jobPostingUrl", "detailsUrl", "url", "link", "externalPath", "path"];
const LOCK = ["location", "locations", "locationsText", "primaryLocation", "jobLocation", "locationName", "location_name", "city", "cities", "offices", "office", "country"];
const DATEK = ["postedDate", "datePosted", "posted_date", "postedOn", "posted", "publishedAt", "published_at", "publish_date", "published", "postingDate", "postDate", "createdAt", "created_at", "created", "releasedDate", "updated_at", "startDate", "date"];

export const INDIA = /\b(india|bengaluru|bangalore|hyderabad|pune|mumbai|gurugram|gurgaon|new delhi|delhi|chennai|noida|kolkata|ahmedabad|kochi|coimbatore|thiruvananthapuram|jaipur|chandigarh|indore|nagpur|mysuru|mysore)\b/i;
export const TECH = /software|engineer|engineering|developer|development|frontend|front-end|back.?end|full.?stack|mobile|machine learning|\bml\b|\bai\b|data science|data scientist|data engineer|analyst|site reliability|\bsre\b|devops|cloud|security|\bqa\b|quality|programmer|technology|\bsde\b|intern|graduate|trainee|architect/i;

const isObj = (v) => v && typeof v === "object" && !Array.isArray(v);

function pick(o, keys) {
  for (const k of keys) {
    const v = o[k];
    if (v !== undefined && v !== null && v !== "" && !(Array.isArray(v) && !v.length)) return v;
  }
  return undefined;
}

function text(v) {
  if (v == null) return "";
  if (typeof v === "string") return v.trim();
  if (typeof v === "number") return "";
  if (Array.isArray(v)) return v.map(text).filter(Boolean).join(", ");
  if (isObj(v)) {
    const parts = [v.display, v.name, v.city, v.addressLocality, v.region, v.addressRegion, v.state, v.country, v.addressCountry]
      .map((x) => (isObj(x) ? text(x) : typeof x === "string" ? x : "")).filter(Boolean);
    if (parts.length) return Array.from(new Set(parts)).join(", ");
    if (isObj(v.address)) return text(v.address);
  }
  return "";
}

export function parseDate(v, now = Date.now()) {
  if (v == null || v === "") return null;
  if (typeof v === "number") {
    const ms = v > 1e12 ? v : v > 1e9 ? v * 1000 : NaN;
    return Number.isFinite(ms) ? ms : null;
  }
  if (typeof v !== "string") return null;
  const t = v.toLowerCase();
  if (t.includes("today")) return now;
  if (t.includes("yesterday")) return now - 86400000;
  const ago = /(\d+)\s*\+?\s*(day|week|hour)s?\s+ago/.exec(t);
  if (ago) return now - parseInt(ago[1], 10) * (ago[2] === "week" ? 7 : ago[2] === "hour" ? 1 / 24 : 1) * 86400000;
  const ms = Date.parse(v);
  return Number.isFinite(ms) ? ms : null;
}

function absolute(u, base) {
  try {
    const x = new URL(u, base);
    return x.protocol === "https:" ? x.toString() : null;
  } catch {
    return null;
  }
}

function toJob(o, base, now) {
  const title = text(pick(o, TITLE));
  const rawUrl = pick(o, URLK);
  if (!title || title.length < 3 || title.length > 160 || typeof rawUrl !== "string") return null;
  const url = absolute(rawUrl, base);
  if (!url) return null;
  return { title, url, location: text(pick(o, LOCK)), publishedMs: parseDate(pick(o, DATEK), now) };
}

/** Finds arrays of job-like objects anywhere inside a JSON response. */
export function jobsFromJson(json, base, now = Date.now()) {
  const out = [];
  const seen = new Set();
  (function walk(node, depth) {
    if (depth > 9 || node == null || typeof node !== "object") return;
    if (Array.isArray(node)) {
      const objs = node.filter(isObj);
      if (objs.length >= 2) {
        const jobs = objs.map((o) => toJob(o, base, now)).filter(Boolean);
        if (jobs.length >= 2 && jobs.length >= objs.length * 0.6) {
          for (const j of jobs) if (!seen.has(j.url)) { seen.add(j.url); out.push(j); }
          return;
        }
      }
      for (const v of node) walk(v, depth + 1);
      return;
    }
    for (const k of Object.keys(node)) walk(node[k], depth + 1);
  })(json, 0);
  return out;
}

/** schema.org JobPosting markup (script type="application/ld+json"). */
export function jobsFromJsonLd(blocks, base, now = Date.now()) {
  const out = [];
  const visit = (n) => {
    if (Array.isArray(n)) return n.forEach(visit);
    if (!isObj(n)) return;
    if (n["@graph"]) visit(n["@graph"]);
    const type = n["@type"];
    if (type === "JobPosting" || (Array.isArray(type) && type.includes("JobPosting"))) {
      const url = absolute(typeof n.url === "string" ? n.url : typeof n.sameAs === "string" ? n.sameAs : base, base);
      const title = text(n.title);
      if (title && url) out.push({ title, url, location: text(n.jobLocation), publishedMs: parseDate(n.datePosted, now) });
    }
  };
  for (const b of blocks) { try { visit(JSON.parse(b)); } catch { /* ignore bad markup */ } }
  return out;
}

/** Last resort: links that look like individual job pages. Undated. */
export function jobsFromLinks(links, base) {
  const out = [];
  const seen = new Set();
  for (const l of links) {
    const url = absolute(l.href, base);
    const title = (l.text || "").replace(/\s+/g, " ").trim();
    if (!url || seen.has(url) || title.length < 6 || title.length > 120) continue;
    if (!/\/(job|jobs|position|positions|requisition|opening|openings|vacancy)\b|\/careers\/.+\d/i.test(new URL(url).pathname)) continue;
    seen.add(url);
    out.push({ title, url, location: "", publishedMs: null });
  }
  return out;
}

/** Keep technical roles in India; when a job has no location, trust a page that was searched for India. */
export function keepJob(j, pageUrl) {
  if (!TECH.test(j.title)) return false;
  if (j.location) return INDIA.test(j.location);
  return /india|en-in|in-en|\blc=in/i.test(pageUrl);
}
