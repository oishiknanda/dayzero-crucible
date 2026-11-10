export interface GoogleTrackRound {
  roundId: string;
  title: string;
  description: string;
  timeLimitMinutes: number;
  sets: Array<{
    setId: number;
    title: string;
    focus: string;
    problemIds: string[];
  }>;
}

export interface GoogleTrackRole {
  roleId: string;
  roleName: string;
  level: string;
  experience: string;
  rounds: GoogleTrackRound[];
}

export const GOOGLE_TRACKS: Record<string, GoogleTrackRole> = {
  swe_intern: {
    roleId: "swe_intern",
    roleName: "Google SWE Intern",
    level: "Intern",
    experience: "Current Student / New Grad",
    rounds: [
      {
        roundId: "round-1",
        title: "Round 1: Google Coding Assessment",
        description: "2 algorithmic problems testing graphs, strings, and sliding window boundaries.",
        timeLimitMinutes: 60,
        sets: [
          {
            setId: 1,
            title: "Set 1: Graphs & Substrings",
            focus: "Shortest Path & Sliding Window",
            problemIds: ["goog-swe-r1-q1", "goog-swe-r1-q2"]
          }
        ]
      },
      {
        roundId: "round-2",
        title: "Round 2: Technical Interview & Live Viva",
        description: "Interactive coding session challenging time complexity and prefix trees.",
        timeLimitMinutes: 45,
        sets: [
          {
            setId: 1,
            title: "Set 1: Trie & Search Ranking",
            focus: "Prefix Trees & Frequency Heuristics",
            problemIds: ["goog-swe-r2-q1"]
          }
        ]
      },
      {
        roundId: "round-3",
        title: "Round 3: Advanced Problem Solving",
        description: "Dynamic programming and interval optimization.",
        timeLimitMinutes: 45,
        sets: [
          {
            setId: 1,
            title: "Set 1: Optimal Scheduling",
            focus: "Weighted Intervals & Memoization",
            problemIds: ["goog-swe-r3-q1"]
          }
        ]
      },
      {
        roundId: "round-4",
        title: "Round 4: Googleyness & System Design",
        description: "Core architectural trade-offs, web crawling, and behavioral scenarios.",
        timeLimitMinutes: 45,
        sets: [
          {
            setId: 1,
            title: "Set 1: Distributed Web Crawler",
            focus: "Scalability, Politeness & Deduplication",
            problemIds: ["goog-swe-r4-q1"]
          }
        ]
      }
    ]
  },
  sde_1: {
    roleId: "sde_1",
    roleName: "Google Software Engineer (L3)",
    level: "L3",
    experience: "0-2 Years",
    rounds: [
      {
        roundId: "round-1",
        title: "Round 1: Algorithmic OA Screen",
        description: "Strict graph pathing and string sliding window constraints.",
        timeLimitMinutes: 60,
        sets: [
          {
            setId: 1,
            title: "Set 1: Alternating Graphs & Substrings",
            focus: "Graph Traversal & Sliding Window",
            problemIds: ["goog-swe-r1-q1", "goog-swe-r1-q2"]
          }
        ]
      },
      {
        roundId: "round-2",
        title: "Round 2: Data Structures & Live Viva",
        description: "Data structure design under scale and real-time query load.",
        timeLimitMinutes: 45,
        sets: [
          {
            setId: 1,
            title: "Set 1: Autocomplete Architecture",
            focus: "Trie Invariants & Memory Layout",
            problemIds: ["goog-swe-r2-q1"]
          }
        ]
      },
      {
        roundId: "round-3",
        title: "Round 3: Algorithmic Rigor",
        description: "Non-overlapping intervals and schedule optimization.",
        timeLimitMinutes: 45,
        sets: [
          {
            setId: 1,
            title: "Set 1: Weighted Intervals",
            focus: "Dynamic Programming & Binary Search",
            problemIds: ["goog-swe-r3-q1"]
          }
        ]
      },
      {
        roundId: "round-4",
        title: "Round 4: Googleyness & Distributed Systems",
        description: "Distributed crawler architecture and ethical design judgments.",
        timeLimitMinutes: 45,
        sets: [
          {
            setId: 1,
            title: "Set 1: Web Scale Crawler",
            focus: "Frontier Queues & Fault Tolerance",
            problemIds: ["goog-swe-r4-q1"]
          }
        ]
      }
    ]
  }
};
