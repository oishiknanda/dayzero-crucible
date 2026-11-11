// Companies whose interview tracks follow the generated "role x round x set" architecture
// (Google, Accenture, Zomato). Amazon keeps its own track file.
import { GOOGLE_ROLE_OPTIONS, normalizeGoogleRole, getGoogleQuestionSet } from "./googleTracks";
import { ACCENTURE_ROLE_OPTIONS, ACCENTURE_DEFAULT_ROLE, normalizeACCENTURERole, getACCENTUREQuestionSet } from "./accentureTracks";
import { ZOMATO_ROLE_OPTIONS, ZOMATO_DEFAULT_ROLE, normalizeZOMATORole, getZOMATOQuestionSet } from "./zomatoTracks";

export interface TrackCompany {
  slug: string;
  name: string;
  /** Prefix of generated problem ids, used by the chat API to pick the interviewer persona. */
  idPrefix: string;
  roleOptions: Array<{ value: string; label: string }>;
  defaultRole: string;
  normalizeRole: (role: string | null | undefined) => string;
  getQuestionSet: (role: string, roundId: string, setId: number) => { problemIds: string[] };
  r3Label: string;
  r4Label: string;
  r4Difficulty: string;
  greet: (round: 2 | 3 | 4, title: string) => string;
}

export const TRACK_COMPANIES: Record<string, TrackCompany> = {
  google: {
    slug: "google", name: "Google", idPrefix: "goog-",
    roleOptions: GOOGLE_ROLE_OPTIONS, defaultRole: "l3_swe",
    normalizeRole: normalizeGoogleRole, getQuestionSet: getGoogleQuestionSet,
    r3Label: "System Architecture & Algorithms", r4Label: "Googleyness & Leadership", r4Difficulty: "Googleyness Loop",
    greet: (r, t) => r === 2
      ? "Hello! I am your Google Technical Interviewer for this Data Structures & Algorithms Screen. We will be working on " + t + ". Before writing any code, walk me through your high-level algorithm, data structures and expected Big-O complexity."
      : r === 3
      ? "Welcome to your Google Round 3 Technical Loop: " + t + ". We are evaluating algorithmic rigor and optimal asymptotic scaling. Outline your approach and edge-case handling before writing code."
      : "Hello. I am your Googleyness & Leadership Evaluator for this session. We are assessing how you navigate ambiguity, collaborate effectively, take ownership, and approach real-world engineering challenges. Let's begin with: " + t + ".",
  },
  accenture: {
    slug: "accenture", name: "Accenture", idPrefix: "acc-",
    roleOptions: ACCENTURE_ROLE_OPTIONS, defaultRole: ACCENTURE_DEFAULT_ROLE,
    normalizeRole: normalizeACCENTURERole, getQuestionSet: getACCENTUREQuestionSet,
    r3Label: "Technical Deep Dive: Concepts, DBMS and Project", r4Label: "HR and Communication", r4Difficulty: "HR Round",
    greet: (r, t) => r === 2
      ? "Hello! I am your Accenture Technical Interviewer. We will work on " + t + ". Before writing code, explain your approach in simple terms, the data structures you will use and the time complexity."
      : r === 3
      ? "Welcome to your Accenture technical deep dive: " + t + ". Start with the fundamentals: explain the concept and give an example from your own project or studies."
      : "Hello, I am your Accenture HR and delivery lead for this session. I would like to understand how you communicate, adapt and work with clients and teams. Let's begin with: " + t + ".",
  },
  zomato: {
    slug: "zomato", name: "Zomato", idPrefix: "zom-",
    roleOptions: ZOMATO_ROLE_OPTIONS, defaultRole: ZOMATO_DEFAULT_ROLE,
    normalizeRole: normalizeZOMATORole, getQuestionSet: getZOMATOQuestionSet,
    r3Label: "Low-Level and High-Level Design", r4Label: "Hiring Manager and Culture", r4Difficulty: "Culture Round",
    greet: (r, t) => r === 2
      ? "Hey! I am your Zomato engineer for this problem-solving round. We will work on " + t + ". Walk me through your approach, data structures and complexity before you write code."
      : r === 3
      ? "Welcome to the Zomato design round: " + t + ". Start with requirements and expected scale, especially peak-hour load, then outline your design."
      : "Hi, I am your Zomato hiring manager for this conversation. I care about ownership, customer obsession and honesty about trade-offs. Let's begin with: " + t + ".",
  },
};

export function getTrackCompany(slug: string | null | undefined): TrackCompany | null {
  const k = (slug || "").toLowerCase();
  return TRACK_COMPANIES[k] || null;
}
