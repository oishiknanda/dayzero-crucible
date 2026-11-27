// Companies that are LIVE right now. This ONE list drives the landing popup, which tracks open to everyone
// (src/lib/waitlist.ts) and what the Neo assistant tells users.
//
// To announce a new company: add ONE object below.
//   - slug:  the track slug used in /tracks/<slug>
//   - name:  display name
//   - color: brand colour (used for the letter badge when there is no logo file)
//   - logo:  OPTIONAL. Drop an SVG/PNG in /public/logos and set "/logos/<file>". Without it a coloured letter badge is shown.
// A company must also have its tracks/questions in place before you add it here.
export interface LiveCompany {
  slug: string;
  name: string;
  color: string;
  logo?: string;
}

export const LIVE_COMPANIES: LiveCompany[] = [
  { slug: "google", name: "Google", color: "#4285F4", logo: "/logos/google.svg" },
  { slug: "amazon", name: "Amazon", color: "#FF9900", logo: "/logos/amazon.svg" },
  { slug: "accenture", name: "Accenture", color: "#A100FF" },
  { slug: "zomato", name: "Zomato", color: "#E23744" },
];
