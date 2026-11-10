// GENERATED. Google interview track: 3 roles x 4 rounds x 10 sets.
export type GoogleRole = "swe_intern" | "l3_swe" | "l4_swe";

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

export const GOOGLE_ROLE_OPTIONS: Array<{ value: GoogleRole; label: string }> = [
  { value: "swe_intern", label: "SWE Intern" },
  { value: "l3_swe", label: "L3 SWE (Entry Level / Full Stack)" },
  { value: "l4_swe", label: "L4 SWE (Systems & Backend)" },
];

/** Maps any role string (Amazon-style or Google-style) to a Google role id. */
export function normalizeGoogleRole(role: string | null | undefined): GoogleRole {
  const r = (role || "").toLowerCase();
  if (r === "swe_intern" || r === "sde_intern" || r === "intern") return "swe_intern";
  if (r === "l4_swe" || r === "l4" || r === "sde_2" || r === "sde2") return "l4_swe";
  return "l3_swe";
}

export const GOOGLE_TRACKS: Record<string, GoogleTrackRole> = {
 "swe_intern": {
  "roleId": "swe_intern",
  "roleName": "Google SWE Intern",
  "level": "Intern",
  "experience": "Current Student / New Grad",
  "rounds": [
   {
    "roundId": "round-1",
    "title": "Round 1: Online Assessment",
    "description": "2 algorithmic tasks per set, graded on correctness and complexity.",
    "timeLimitMinutes": 60,
    "sets": [
     {
      "setId": 1,
      "title": "Set 1: Validate Config Brackets + Longest Unique Query Fragment",
      "focus": "Stack",
      "problemIds": [
       "goog-intern-s1-r1-q1",
       "goog-intern-s1-r1-q2"
      ]
     },
     {
      "setId": 2,
      "title": "Set 2: Sorted Latency Pair + Peak Traffic Window",
      "focus": "Two Pointers",
      "problemIds": [
       "goog-intern-s2-r1-q1",
       "goog-intern-s2-r1-q2"
      ]
     },
     {
      "setId": 3,
      "title": "Set 3: Insert Position in Sorted Index + Merge Maintenance Windows",
      "focus": "Binary Search",
      "problemIds": [
       "goog-intern-s3-r1-q1",
       "goog-intern-s3-r1-q2"
      ]
     },
     {
      "setId": 4,
      "title": "Set 4: Reverse Command Tokens + Longest Repeated Run After Edits",
      "focus": "String",
      "problemIds": [
       "goog-intern-s4-r1-q1",
       "goog-intern-s4-r1-q2"
      ]
     },
     {
      "setId": 5,
      "title": "Set 5: Count Data Center Clusters + Corrupted Replica Spread",
      "focus": "Graph / DFS",
      "problemIds": [
       "goog-intern-s5-r1-q1",
       "goog-intern-s5-r1-q2"
      ]
     },
     {
      "setId": 6,
      "title": "Set 6: Best Single Trade + Product Without Self",
      "focus": "Array",
      "problemIds": [
       "goog-intern-s6-r1-q1",
       "goog-intern-s6-r1-q2"
      ]
     },
     {
      "setId": 7,
      "title": "Set 7: Climbing Release Stairs + Fewest Quota Units",
      "focus": "Dynamic Programming",
      "problemIds": [
       "goog-intern-s7-r1-q1",
       "goog-intern-s7-r1-q2"
      ]
     },
     {
      "setId": 8,
      "title": "Set 8: Flood Fill Canvas + Shortest Clear Route",
      "focus": "DFS",
      "problemIds": [
       "goog-intern-s8-r1-q1",
       "goog-intern-s8-r1-q2"
      ]
     },
     {
      "setId": 9,
      "title": "Set 9: Compact Active Slots + Matching Usage Totals",
      "focus": "Two Pointers",
      "problemIds": [
       "goog-intern-s9-r1-q1",
       "goog-intern-s9-r1-q2"
      ]
     },
     {
      "setId": 10,
      "title": "Set 10: Anagram Tag Check + Segment a Search Query",
      "focus": "Hash Table",
      "problemIds": [
       "goog-intern-s10-r1-q1",
       "goog-intern-s10-r1-q2"
      ]
     }
    ]
   },
   {
    "roundId": "round-2",
    "title": "Round 2: Technical Viva",
    "description": "Live coding with a Big-O and invariant defense.",
    "timeLimitMinutes": 45,
    "sets": [
     {
      "setId": 1,
      "title": "Set 1: Kth Largest Latency",
      "focus": "Heap",
      "problemIds": [
       "goog-intern-s1-r2-q1"
      ]
     },
     {
      "setId": 2,
      "title": "Set 2: Top K Search Terms",
      "focus": "Heap / Hashing",
      "problemIds": [
       "goog-intern-s2-r2-q1"
      ]
     },
     {
      "setId": 3,
      "title": "Set 3: Build Dependency Order",
      "focus": "Graph / Topological Sort",
      "problemIds": [
       "goog-intern-s3-r2-q1"
      ]
     },
     {
      "setId": 4,
      "title": "Set 4: Longest Palindromic Token",
      "focus": "Expand Around Center",
      "problemIds": [
       "goog-intern-s4-r2-q1"
      ]
     },
     {
      "setId": 5,
      "title": "Set 5: Generate Balanced Templates",
      "focus": "Backtracking",
      "problemIds": [
       "goog-intern-s5-r2-q1"
      ]
     },
     {
      "setId": 6,
      "title": "Set 6: Search a Rotated Log Index",
      "focus": "Binary Search",
      "problemIds": [
       "goog-intern-s6-r2-q1"
      ]
     },
     {
      "setId": 7,
      "title": "Set 7: Days Until Warmer",
      "focus": "Monotonic Stack",
      "problemIds": [
       "goog-intern-s7-r2-q1"
      ]
     },
     {
      "setId": 8,
      "title": "Set 8: Reach the Last Shard",
      "focus": "Greedy",
      "problemIds": [
       "goog-intern-s8-r2-q1"
      ]
     },
     {
      "setId": 9,
      "title": "Set 9: Keypad Suggestion Expansion",
      "focus": "Backtracking",
      "problemIds": [
       "goog-intern-s9-r2-q1"
      ]
     },
     {
      "setId": 10,
      "title": "Set 10: Capacity Between Peaks",
      "focus": "Two Pointers",
      "problemIds": [
       "goog-intern-s10-r2-q1"
      ]
     }
    ]
   },
   {
    "roundId": "round-3",
    "title": "Round 3: System Architecture & Algorithms",
    "description": "Architecture and scaled-algorithm discussion.",
    "timeLimitMinutes": 60,
    "sets": [
     {
      "setId": 1,
      "title": "Set 1: Top-K Trending Queries at Scale",
      "focus": "System Architecture & Algorithms",
      "problemIds": [
       "goog-intern-s1-r3-q1"
      ]
     },
     {
      "setId": 2,
      "title": "Set 2: Distributed Word Count Pipeline",
      "focus": "System Architecture & Algorithms",
      "problemIds": [
       "goog-intern-s2-r3-q1"
      ]
     },
     {
      "setId": 3,
      "title": "Set 3: Deduplicating Billions of URLs",
      "focus": "System Architecture & Algorithms",
      "problemIds": [
       "goog-intern-s3-r3-q1"
      ]
     },
     {
      "setId": 4,
      "title": "Set 4: Design a URL Shortener",
      "focus": "System Architecture & Algorithms",
      "problemIds": [
       "goog-intern-s4-r3-q1"
      ]
     },
     {
      "setId": 5,
      "title": "Set 5: Sorting a File Larger Than Memory",
      "focus": "System Architecture & Algorithms",
      "problemIds": [
       "goog-intern-s5-r3-q1"
      ]
     },
     {
      "setId": 6,
      "title": "Set 6: Spell Checker Over a Large Dictionary",
      "focus": "System Architecture & Algorithms",
      "problemIds": [
       "goog-intern-s6-r3-q1"
      ]
     },
     {
      "setId": 7,
      "title": "Set 7: Sliding-Window Metrics Aggregator",
      "focus": "System Architecture & Algorithms",
      "problemIds": [
       "goog-intern-s7-r3-q1"
      ]
     },
     {
      "setId": 8,
      "title": "Set 8: Parking Lot Object-Oriented Design",
      "focus": "System Architecture & Algorithms",
      "problemIds": [
       "goog-intern-s8-r3-q1"
      ]
     },
     {
      "setId": 9,
      "title": "Set 9: Global Website Hit Counter",
      "focus": "System Architecture & Algorithms",
      "problemIds": [
       "goog-intern-s9-r3-q1"
      ]
     },
     {
      "setId": 10,
      "title": "Set 10: Shortest Path Service for Campus Maps",
      "focus": "System Architecture & Algorithms",
      "problemIds": [
       "goog-intern-s10-r3-q1"
      ]
     }
    ]
   },
   {
    "roundId": "round-4",
    "title": "Round 4: Googleyness & Leadership",
    "description": "Googleyness and leadership scenario.",
    "timeLimitMinutes": 45,
    "sets": [
     {
      "setId": 1,
      "title": "Set 1: Resolving a Cross-Team Architecture Deadlock",
      "focus": "Googleyness & Leadership",
      "problemIds": [
       "goog-intern-s1-r4-q1"
      ]
     },
     {
      "setId": 2,
      "title": "Set 2: Telemetry Value vs User Privacy",
      "focus": "Googleyness & Leadership",
      "problemIds": [
       "goog-intern-s2-r4-q1"
      ]
     },
     {
      "setId": 3,
      "title": "Set 3: Dependency Failure Before the Quarterly Freeze",
      "focus": "Googleyness & Leadership",
      "problemIds": [
       "goog-intern-s3-r4-q1"
      ]
     },
     {
      "setId": 4,
      "title": "Set 4: 10x Velocity vs Zero-Downtime Reliability",
      "focus": "Googleyness & Leadership",
      "problemIds": [
       "goog-intern-s4-r4-q1"
      ]
     },
     {
      "setId": 5,
      "title": "Set 5: Being Proven Wrong in a Design Review",
      "focus": "Googleyness & Leadership",
      "problemIds": [
       "goog-intern-s5-r4-q1"
      ]
     },
     {
      "setId": 6,
      "title": "Set 6: A Vague Mandate With No Spec",
      "focus": "Googleyness & Leadership",
      "problemIds": [
       "goog-intern-s6-r4-q1"
      ]
     },
     {
      "setId": 7,
      "title": "Set 7: A Silent Data Inconsistency You Inherited",
      "focus": "Googleyness & Leadership",
      "problemIds": [
       "goog-intern-s7-r4-q1"
      ]
     },
     {
      "setId": 8,
      "title": "Set 8: A Blocked Teammate Who Has Not Asked for Help",
      "focus": "Googleyness & Leadership",
      "problemIds": [
       "goog-intern-s8-r4-q1"
      ]
     },
     {
      "setId": 9,
      "title": "Set 9: A Deadline Shortcut With Misleading Numbers",
      "focus": "Googleyness & Leadership",
      "problemIds": [
       "goog-intern-s9-r4-q1"
      ]
     },
     {
      "setId": 10,
      "title": "Set 10: Disagreeing With a Senior Decision",
      "focus": "Googleyness & Leadership",
      "problemIds": [
       "goog-intern-s10-r4-q1"
      ]
     }
    ]
   }
  ]
 },
 "l3_swe": {
  "roleId": "l3_swe",
  "roleName": "Google L3 SWE (Entry Level / Full Stack)",
  "level": "L3",
  "experience": "0-2 Years / Campus",
  "rounds": [
   {
    "roundId": "round-1",
    "title": "Round 1: Online Assessment",
    "description": "2 algorithmic tasks per set, graded on correctness and complexity.",
    "timeLimitMinutes": 60,
    "sets": [
     {
      "setId": 1,
      "title": "Set 1: Alternating Colour Shortest Paths + Longest Fragment With K Distinct Tokens",
      "focus": "Graph / BFS",
      "problemIds": [
       "goog-l3-s1-r1-q1",
       "goog-l3-s1-r1-q2"
      ]
     },
     {
      "setId": 2,
      "title": "Set 2: Distance to Nearest Cache Node + Maximum Batch Jobs by Deadline",
      "focus": "Multi-source BFS",
      "problemIds": [
       "goog-l3-s2-r1-q1",
       "goog-l3-s2-r1-q2"
      ]
     },
     {
      "setId": 3,
      "title": "Set 3: Rooms to Nearest Gateway + Rolling Maximum Over Metrics",
      "focus": "Multi-source BFS",
      "problemIds": [
       "goog-l3-s3-r1-q1",
       "goog-l3-s3-r1-q2"
      ]
     },
     {
      "setId": 4,
      "title": "Set 4: Shortest Route With Removable Blocks + Smallest Covering Log Window",
      "focus": "BFS with State",
      "problemIds": [
       "goog-l3-s4-r1-q1",
       "goog-l3-s4-r1-q2"
      ]
     },
     {
      "setId": 5,
      "title": "Set 5: Word Ladder Transformation Length + Longest Rising Trend",
      "focus": "Graph / BFS",
      "problemIds": [
       "goog-l3-s5-r1-q1",
       "goog-l3-s5-r1-q2"
      ]
     },
     {
      "setId": 6,
      "title": "Set 6: Farthest Zone From Any Node + Minimum Edits Between Configs",
      "focus": "Multi-source BFS",
      "problemIds": [
       "goog-l3-s6-r1-q1",
       "goog-l3-s6-r1-q2"
      ]
     },
     {
      "setId": 7,
      "title": "Set 7: Circular Server Rack Harvest + Largest Healthy Square",
      "focus": "DP",
      "problemIds": [
       "goog-l3-s7-r1-q1",
       "goog-l3-s7-r1-q2"
      ]
     },
     {
      "setId": 8,
      "title": "Set 8: Signal Propagation Time + Balanced Shard Split",
      "focus": "Dijkstra",
      "problemIds": [
       "goog-l3-s8-r1-q1",
       "goog-l3-s8-r1-q2"
      ]
     },
     {
      "setId": 9,
      "title": "Set 9: Cooldown Task Slots + Concurrent Booking Rooms",
      "focus": "Greedy",
      "problemIds": [
       "goog-l3-s9-r1-q1",
       "goog-l3-s9-r1-q2"
      ]
     },
     {
      "setId": 10,
      "title": "Set 10: Cheapest Route With Hop Limit + Longest Consecutive Id Run",
      "focus": "Bellman-Ford",
      "problemIds": [
       "goog-l3-s10-r1-q1",
       "goog-l3-s10-r1-q2"
      ]
     }
    ]
   },
   {
    "roundId": "round-2",
    "title": "Round 2: Technical Viva",
    "description": "Live coding with a Big-O and invariant defense.",
    "timeLimitMinutes": 45,
    "sets": [
     {
      "setId": 1,
      "title": "Set 1: Maximum Path Sum in a Service Tree",
      "focus": "Tree / DFS",
      "problemIds": [
       "goog-l3-s1-r2-q1"
      ]
     },
     {
      "setId": 2,
      "title": "Set 2: Multi-Word Grid Search With Trie Pruning",
      "focus": "Trie / Backtracking",
      "problemIds": [
       "goog-l3-s2-r2-q1"
      ]
     },
     {
      "setId": 3,
      "title": "Set 3: Kth Smallest in Sorted Matrix",
      "focus": "Heap / Binary Search",
      "problemIds": [
       "goog-l3-s3-r2-q1"
      ]
     },
     {
      "setId": 4,
      "title": "Set 4: Best Root Nodes for Latency",
      "focus": "Graph / Topological Peel",
      "problemIds": [
       "goog-l3-s4-r2-q1"
      ]
     },
     {
      "setId": 5,
      "title": "Set 5: Longest Increasing Path in Grid",
      "focus": "DFS + Memoization",
      "problemIds": [
       "goog-l3-s5-r2-q1"
      ]
     },
     {
      "setId": 6,
      "title": "Set 6: Decode Telemetry Codes",
      "focus": "DP",
      "problemIds": [
       "goog-l3-s6-r2-q1"
      ]
     },
     {
      "setId": 7,
      "title": "Set 7: Fewest Palindromic Splits",
      "focus": "DP",
      "problemIds": [
       "goog-l3-s7-r2-q1"
      ]
     },
     {
      "setId": 8,
      "title": "Set 8: Largest Dashboard Rectangle",
      "focus": "Monotonic Stack",
      "problemIds": [
       "goog-l3-s8-r2-q1"
      ]
     },
     {
      "setId": 9,
      "title": "Set 9: Count Smaller Events After",
      "focus": "BIT / Merge Sort",
      "problemIds": [
       "goog-l3-s9-r2-q1"
      ]
     },
     {
      "setId": 10,
      "title": "Set 10: Most Collinear Probe Points",
      "focus": "Hashing / Geometry",
      "problemIds": [
       "goog-l3-s10-r2-q1"
      ]
     }
    ]
   },
   {
    "roundId": "round-3",
    "title": "Round 3: System Architecture & Algorithms",
    "description": "Architecture and scaled-algorithm discussion.",
    "timeLimitMinutes": 60,
    "sets": [
     {
      "setId": 1,
      "title": "Set 1: Weighted Interval Scheduling for Ad Auctions",
      "focus": "System Architecture & Algorithms",
      "problemIds": [
       "goog-l3-s1-r3-q1"
      ]
     },
     {
      "setId": 2,
      "title": "Set 2: Consistent Hashing Ring for a Cache Tier",
      "focus": "System Architecture & Algorithms",
      "problemIds": [
       "goog-l3-s2-r3-q1"
      ]
     },
     {
      "setId": 3,
      "title": "Set 3: Distributed Snapshot of a Streaming Job",
      "focus": "System Architecture & Algorithms",
      "problemIds": [
       "goog-l3-s3-r3-q1"
      ]
     },
     {
      "setId": 4,
      "title": "Set 4: Multi-Stage Token Bucket Rate Limiter",
      "focus": "System Architecture & Algorithms",
      "problemIds": [
       "goog-l3-s4-r3-q1"
      ]
     },
     {
      "setId": 5,
      "title": "Set 5: Autocomplete Serving at Billion-Query Scale",
      "focus": "System Architecture & Algorithms",
      "problemIds": [
       "goog-l3-s5-r3-q1"
      ]
     },
     {
      "setId": 6,
      "title": "Set 6: Disk-Backed K-Way External Merge",
      "focus": "System Architecture & Algorithms",
      "problemIds": [
       "goog-l3-s6-r3-q1"
      ]
     },
     {
      "setId": 7,
      "title": "Set 7: Real-Time Deduplication Pipeline",
      "focus": "System Architecture & Algorithms",
      "problemIds": [
       "goog-l3-s7-r3-q1"
      ]
     },
     {
      "setId": 8,
      "title": "Set 8: Task Scheduler With Backpressure",
      "focus": "System Architecture & Algorithms",
      "problemIds": [
       "goog-l3-s8-r3-q1"
      ]
     },
     {
      "setId": 9,
      "title": "Set 9: Geo-Sharded Nearby Search",
      "focus": "System Architecture & Algorithms",
      "problemIds": [
       "goog-l3-s9-r3-q1"
      ]
     },
     {
      "setId": 10,
      "title": "Set 10: Collaborative Document Edit Merging",
      "focus": "System Architecture & Algorithms",
      "problemIds": [
       "goog-l3-s10-r3-q1"
      ]
     }
    ]
   },
   {
    "roundId": "round-4",
    "title": "Round 4: Googleyness & Leadership",
    "description": "Googleyness and leadership scenario.",
    "timeLimitMinutes": 45,
    "sets": [
     {
      "setId": 1,
      "title": "Set 1: Resolving a Cross-Team Architecture Deadlock",
      "focus": "Googleyness & Leadership",
      "problemIds": [
       "goog-l3-s1-r4-q1"
      ]
     },
     {
      "setId": 2,
      "title": "Set 2: Telemetry Value vs User Privacy",
      "focus": "Googleyness & Leadership",
      "problemIds": [
       "goog-l3-s2-r4-q1"
      ]
     },
     {
      "setId": 3,
      "title": "Set 3: Dependency Failure Before the Quarterly Freeze",
      "focus": "Googleyness & Leadership",
      "problemIds": [
       "goog-l3-s3-r4-q1"
      ]
     },
     {
      "setId": 4,
      "title": "Set 4: 10x Velocity vs Zero-Downtime Reliability",
      "focus": "Googleyness & Leadership",
      "problemIds": [
       "goog-l3-s4-r4-q1"
      ]
     },
     {
      "setId": 5,
      "title": "Set 5: Being Proven Wrong in a Design Review",
      "focus": "Googleyness & Leadership",
      "problemIds": [
       "goog-l3-s5-r4-q1"
      ]
     },
     {
      "setId": 6,
      "title": "Set 6: A Vague Mandate With No Spec",
      "focus": "Googleyness & Leadership",
      "problemIds": [
       "goog-l3-s6-r4-q1"
      ]
     },
     {
      "setId": 7,
      "title": "Set 7: A Silent Data Inconsistency You Inherited",
      "focus": "Googleyness & Leadership",
      "problemIds": [
       "goog-l3-s7-r4-q1"
      ]
     },
     {
      "setId": 8,
      "title": "Set 8: A Blocked Teammate Who Has Not Asked for Help",
      "focus": "Googleyness & Leadership",
      "problemIds": [
       "goog-l3-s8-r4-q1"
      ]
     },
     {
      "setId": 9,
      "title": "Set 9: A Deadline Shortcut With Misleading Numbers",
      "focus": "Googleyness & Leadership",
      "problemIds": [
       "goog-l3-s9-r4-q1"
      ]
     },
     {
      "setId": 10,
      "title": "Set 10: Disagreeing With a Senior Decision",
      "focus": "Googleyness & Leadership",
      "problemIds": [
       "goog-l3-s10-r4-q1"
      ]
     }
    ]
   }
  ]
 },
 "l4_swe": {
  "roleId": "l4_swe",
  "roleName": "Google L4 SWE (Systems & Backend)",
  "level": "L4",
  "experience": "2-6 Years",
  "rounds": [
   {
    "roundId": "round-1",
    "title": "Round 1: Online Assessment",
    "description": "2 algorithmic tasks per set, graded on correctness and complexity.",
    "timeLimitMinutes": 60,
    "sets": [
     {
      "setId": 1,
      "title": "Set 1: Sliding Window Rate Limiter + Merge Sorted Log Streams",
      "focus": "Queue / Rate Limiting",
      "problemIds": [
       "goog-l4-s1-r1-q1",
       "goog-l4-s1-r1-q2"
      ]
     },
     {
      "setId": 2,
      "title": "Set 2: LRU Cache Hit Counter + Optimal Ad Campaign Schedule",
      "focus": "Cache Eviction",
      "problemIds": [
       "goog-l4-s2-r1-q1",
       "goog-l4-s2-r1-q2"
      ]
     },
     {
      "setId": 3,
      "title": "Set 3: LFU Cache Hit Counter + Smallest Range Across Shards",
      "focus": "Cache Eviction",
      "problemIds": [
       "goog-l4-s3-r1-q1",
       "goog-l4-s3-r1-q2"
      ]
     },
     {
      "setId": 4,
      "title": "Set 4: Token Bucket Admission + Longest Stable Metric Window",
      "focus": "Rate Limiting",
      "problemIds": [
       "goog-l4-s4-r1-q1",
       "goog-l4-s4-r1-q2"
      ]
     },
     {
      "setId": 5,
      "title": "Set 5: K Cheapest Replica Pairs + Minimum Relay Refuels",
      "focus": "Heap",
      "problemIds": [
       "goog-l4-s5-r1-q1",
       "goog-l4-s5-r1-q2"
      ]
     },
     {
      "setId": 6,
      "title": "Set 6: Consistent Hash Ring Lookup + Cheapest Cluster Interconnect",
      "focus": "Distributed Systems",
      "problemIds": [
       "goog-l4-s6-r1-q1",
       "goog-l4-s6-r1-q2"
      ]
     },
     {
      "setId": 7,
      "title": "Set 7: Lock Wait-For Deadlock Check + Single Points of Link Failure",
      "focus": "Graph / Cycle Detection",
      "problemIds": [
       "goog-l4-s7-r1-q1",
       "goog-l4-s7-r1-q2"
      ]
     },
     {
      "setId": 8,
      "title": "Set 8: Round Robin Completion Times + Maximum Batch Consolidation Value",
      "focus": "Scheduling",
      "problemIds": [
       "goog-l4-s8-r1-q1",
       "goog-l4-s8-r1-q2"
      ]
     },
     {
      "setId": 9,
      "title": "Set 9: Recent Hits Counter + Skyline of Reserved Capacity",
      "focus": "Queue / Binary Search",
      "problemIds": [
       "goog-l4-s9-r1-q1",
       "goog-l4-s9-r1-q2"
      ]
     },
     {
      "setId": 10,
      "title": "Set 10: Idempotent Request Deduplication + Shortest Burst Over Threshold",
      "focus": "Hashing / Idempotency",
      "problemIds": [
       "goog-l4-s10-r1-q1",
       "goog-l4-s10-r1-q2"
      ]
     }
    ]
   },
   {
    "roundId": "round-2",
    "title": "Round 2: Technical Viva",
    "description": "Live coding with a Big-O and invariant defense.",
    "timeLimitMinutes": 45,
    "sets": [
     {
      "setId": 1,
      "title": "Set 1: LRU Cache Internals",
      "focus": "Design / Linked List",
      "problemIds": [
       "goog-l4-s1-r2-q1"
      ]
     },
     {
      "setId": 2,
      "title": "Set 2: LFU Cache Frequency Lists",
      "focus": "Design",
      "problemIds": [
       "goog-l4-s2-r2-q1"
      ]
     },
     {
      "setId": 3,
      "title": "Set 3: Insert Delete Constant-Time Set",
      "focus": "Design / Hashing",
      "problemIds": [
       "goog-l4-s3-r2-q1"
      ]
     },
     {
      "setId": 4,
      "title": "Set 4: Autocomplete Trie With Top-K Ranking",
      "focus": "Trie / Design",
      "problemIds": [
       "goog-l4-s4-r2-q1"
      ]
     },
     {
      "setId": 5,
      "title": "Set 5: Median From a Data Stream",
      "focus": "Two Heaps",
      "problemIds": [
       "goog-l4-s5-r2-q1"
      ]
     },
     {
      "setId": 6,
      "title": "Set 6: Maximum Frequency Stack",
      "focus": "Design / Stack",
      "problemIds": [
       "goog-l4-s6-r2-q1"
      ]
     },
     {
      "setId": 7,
      "title": "Set 7: Time-Versioned Key-Value Store",
      "focus": "Binary Search / Design",
      "problemIds": [
       "goog-l4-s7-r2-q1"
      ]
     },
     {
      "setId": 8,
      "title": "Set 8: Snapshot Array With Versioned Cells",
      "focus": "Binary Search / Design",
      "problemIds": [
       "goog-l4-s8-r2-q1"
      ]
     },
     {
      "setId": 9,
      "title": "Set 9: Mutable Range Sums With Fenwick Tree",
      "focus": "Binary Indexed Tree",
      "problemIds": [
       "goog-l4-s9-r2-q1"
      ]
     },
     {
      "setId": 10,
      "title": "Set 10: Min Stack With Constant-Time Minimum",
      "focus": "Design / Stack",
      "problemIds": [
       "goog-l4-s10-r2-q1"
      ]
     }
    ]
   },
   {
    "roundId": "round-3",
    "title": "Round 3: System Architecture & Algorithms",
    "description": "Architecture and scaled-algorithm discussion.",
    "timeLimitMinutes": 60,
    "sets": [
     {
      "setId": 1,
      "title": "Set 1: Global Rate Limiting Service",
      "focus": "System Architecture & Algorithms",
      "problemIds": [
       "goog-l4-s1-r3-q1"
      ]
     },
     {
      "setId": 2,
      "title": "Set 2: Distributed Cron and Task Scheduler",
      "focus": "System Architecture & Algorithms",
      "problemIds": [
       "goog-l4-s2-r3-q1"
      ]
     },
     {
      "setId": 3,
      "title": "Set 3: Multi-Region Key-Value Store",
      "focus": "System Architecture & Algorithms",
      "problemIds": [
       "goog-l4-s3-r3-q1"
      ]
     },
     {
      "setId": 4,
      "title": "Set 4: Stream Processing With Exactly-Once Semantics",
      "focus": "System Architecture & Algorithms",
      "problemIds": [
       "goog-l4-s4-r3-q1"
      ]
     },
     {
      "setId": 5,
      "title": "Set 5: Tiered Distributed Cache",
      "focus": "System Architecture & Algorithms",
      "problemIds": [
       "goog-l4-s5-r3-q1"
      ]
     },
     {
      "setId": 6,
      "title": "Set 6: Log Aggregation and Search Pipeline",
      "focus": "System Architecture & Algorithms",
      "problemIds": [
       "goog-l4-s6-r3-q1"
      ]
     },
     {
      "setId": 7,
      "title": "Set 7: Distributed Lock and Lease Service",
      "focus": "System Architecture & Algorithms",
      "problemIds": [
       "goog-l4-s7-r3-q1"
      ]
     },
     {
      "setId": 8,
      "title": "Set 8: Failure-Domain-Aware Replica Placement",
      "focus": "System Architecture & Algorithms",
      "problemIds": [
       "goog-l4-s8-r3-q1"
      ]
     },
     {
      "setId": 9,
      "title": "Set 9: Global Load Balancing and Overload Control",
      "focus": "System Architecture & Algorithms",
      "problemIds": [
       "goog-l4-s9-r3-q1"
      ]
     },
     {
      "setId": 10,
      "title": "Set 10: Large-Scale Sort and Shuffle Service",
      "focus": "System Architecture & Algorithms",
      "problemIds": [
       "goog-l4-s10-r3-q1"
      ]
     }
    ]
   },
   {
    "roundId": "round-4",
    "title": "Round 4: Googleyness & Leadership",
    "description": "Googleyness and leadership scenario.",
    "timeLimitMinutes": 45,
    "sets": [
     {
      "setId": 1,
      "title": "Set 1: Resolving a Cross-Team Architecture Deadlock",
      "focus": "Googleyness & Leadership",
      "problemIds": [
       "goog-l4-s1-r4-q1"
      ]
     },
     {
      "setId": 2,
      "title": "Set 2: Telemetry Value vs User Privacy",
      "focus": "Googleyness & Leadership",
      "problemIds": [
       "goog-l4-s2-r4-q1"
      ]
     },
     {
      "setId": 3,
      "title": "Set 3: Dependency Failure Before the Quarterly Freeze",
      "focus": "Googleyness & Leadership",
      "problemIds": [
       "goog-l4-s3-r4-q1"
      ]
     },
     {
      "setId": 4,
      "title": "Set 4: 10x Velocity vs Zero-Downtime Reliability",
      "focus": "Googleyness & Leadership",
      "problemIds": [
       "goog-l4-s4-r4-q1"
      ]
     },
     {
      "setId": 5,
      "title": "Set 5: Being Proven Wrong in a Design Review",
      "focus": "Googleyness & Leadership",
      "problemIds": [
       "goog-l4-s5-r4-q1"
      ]
     },
     {
      "setId": 6,
      "title": "Set 6: A Vague Mandate With No Spec",
      "focus": "Googleyness & Leadership",
      "problemIds": [
       "goog-l4-s6-r4-q1"
      ]
     },
     {
      "setId": 7,
      "title": "Set 7: A Silent Data Inconsistency You Inherited",
      "focus": "Googleyness & Leadership",
      "problemIds": [
       "goog-l4-s7-r4-q1"
      ]
     },
     {
      "setId": 8,
      "title": "Set 8: A Blocked Teammate Who Has Not Asked for Help",
      "focus": "Googleyness & Leadership",
      "problemIds": [
       "goog-l4-s8-r4-q1"
      ]
     },
     {
      "setId": 9,
      "title": "Set 9: A Deadline Shortcut With Misleading Numbers",
      "focus": "Googleyness & Leadership",
      "problemIds": [
       "goog-l4-s9-r4-q1"
      ]
     },
     {
      "setId": 10,
      "title": "Set 10: Disagreeing With a Senior Decision",
      "focus": "Googleyness & Leadership",
      "problemIds": [
       "goog-l4-s10-r4-q1"
      ]
     }
    ]
   }
  ]
 }
};

export function getGoogleQuestionSet(role: string, roundId: string, setId: number) {
  const track = GOOGLE_TRACKS[normalizeGoogleRole(role)];
  const round = track.rounds.find((r) => r.roundId === roundId) || track.rounds[0];
  return round.sets.find((s) => s.setId === Number(setId)) || round.sets[0];
}
