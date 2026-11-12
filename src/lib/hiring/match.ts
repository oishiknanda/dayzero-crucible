/** Matching free-text employer names (from aggregators) to directory companies. */

const FILLER = ["inc", "ltd", "limited", "pvt", "private", "llc", "llp", "corp", "corporation", "india", "technologies",
  "technology", "services", "solutions", "software", "global", "group", "systems", "labs", "consulting", "the", "co", "company", "and"];

const ALIASES: Record<string, string[]> = {
  "TCS": ["tata consultancy services", "tcs"],
  "HCLTech": ["hcl", "hcltech", "hcl technologies", "hcl tech"],
  "J.P. Morgan Chase": ["jpmorgan", "jp morgan", "jpmorgan chase", "j p morgan"],
  "EY": ["ey", "ernst young", "ernst and young"],
  "PwC": ["pwc", "pricewaterhousecoopers"],
  "KPMG": ["kpmg"],
  "Deloitte": ["deloitte", "deloitte touche tohmatsu"],
  "Tech Mahindra": ["tech mahindra", "techm"],
  "LTIMindtree": ["ltimindtree", "lti mindtree", "larsen toubro infotech"],
  "Walmart Global Tech": ["walmart", "walmart global tech"],
  "Samsung R&D": ["samsung", "samsung r d"],
  "Citi": ["citi", "citibank", "citigroup"],
  "BNY": ["bny", "bny mellon", "bank of new york mellon"],
  "Square / Block": ["block", "square"],
  "ByteDance / TikTok": ["bytedance", "tiktok"],
  "Tesla (Autopilot)": ["tesla"],
  "Reliance Jio": ["reliance jio", "jio platforms", "jio"],
  "JioHotstar": ["jiohotstar", "jio star", "hotstar"],
  "Bharti Airtel": ["bharti airtel", "airtel"],
  "Meta": ["meta", "meta platforms", "facebook"],
  "Standard Chartered": ["standard chartered", "standard chartered bank"],
  "Fidelity Investments": ["fidelity investments", "fidelity"],
  "Amazon": ["amazon", "amazon development centre", "amazon web services", "aws"],
  "Google": ["google", "google llc"],
  "Microsoft": ["microsoft", "microsoft corporation"],
};

function tokens(s: string): string[] {
  return s.toLowerCase().replace(/&/g, " and ").replace(/[^a-z0-9]+/g, " ").trim().split(" ").filter(Boolean);
}

function startsWithTokens(hay: string[], needle: string[]): boolean {
  if (!needle.length || needle.length > hay.length) return false;
  for (let i = 0; i < needle.length; i++) if (hay[i] !== needle[i]) return false;
  // anything after the name must be corporate filler ("Visa Inc" ok, "Visagio" / "Target Hospitality" not)
  for (let i = needle.length; i < hay.length; i++) if (FILLER.indexOf(hay[i]) === -1) return false;
  return true;
}

export function buildMatcher(names: string[]): (employer: string) => string | null {
  const keys = names.map((name) => ({
    name,
    variants: (ALIASES[name] || [name]).concat(ALIASES[name] ? [] : []).map(tokens).filter((t) => t.length),
  }));
  return (employer: string) => {
    const hay = tokens(employer);
    if (!hay.length) return null;
    for (const k of keys) for (const v of k.variants) if (startsWithTokens(hay, v)) return k.name;
    return null;
  };
}
