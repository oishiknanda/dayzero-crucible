// GENERATED. Zomato interview track: 3 roles x 4 rounds x 10 sets.
export type ZOMATORole = "sde_intern" | "sde_1" | "sde_2";

export interface TrackRound {
  roundId: string;
  title: string;
  description: string;
  timeLimitMinutes: number;
  sets: Array<{ setId: number; title: string; focus: string; problemIds: string[] }>;
}

export interface TrackRole {
  roleId: string;
  roleName: string;
  level: string;
  experience: string;
  rounds: TrackRound[];
}

export const ZOMATO_ROLE_OPTIONS: Array<{ value: ZOMATORole; label: string }> = [
  { value: "sde_intern", label: "SDE Intern" },
  { value: "sde_1", label: "SDE-1" },
  { value: "sde_2", label: "SDE-2" },
];

export const ZOMATO_DEFAULT_ROLE: ZOMATORole = "sde_1";

/** Maps any role string to this company's role id. */
export function normalizeZOMATORole(role: string | null | undefined): ZOMATORole {
  const r = (role || "").toLowerCase();
  if (r === "sde_intern" || r === "intern") return "sde_intern";
  if (r === "sde_2" || r === "sde2" || r === "l4") return "sde_2";
  return ZOMATO_DEFAULT_ROLE;
}

export const ZOMATO_TRACKS: Record<string, TrackRole> = {
 "sde_intern": {
  "roleId": "sde_intern",
  "roleName": "Zomato SDE Intern",
  "level": "Intern",
  "experience": "Student / New Grad",
  "rounds": [
   {
    "roundId": "round-1",
    "title": "Round 1: Online Coding Assessment",
    "description": "2 DSA problems per set, graded on correctness and complexity.",
    "timeLimitMinutes": 90,
    "sets": [
     {
      "setId": 1,
      "title": "Set 1: Validate Config Brackets + Longest Unique Query Fragment",
      "focus": "Stack",
      "problemIds": [
       "zom-intern-s1-r1-q1",
       "zom-intern-s1-r1-q2"
      ]
     },
     {
      "setId": 2,
      "title": "Set 2: Sorted Latency Pair + Peak Traffic Window",
      "focus": "Two Pointers",
      "problemIds": [
       "zom-intern-s2-r1-q1",
       "zom-intern-s2-r1-q2"
      ]
     },
     {
      "setId": 3,
      "title": "Set 3: Insert Position in Sorted Index + Merge Maintenance Windows",
      "focus": "Binary Search",
      "problemIds": [
       "zom-intern-s3-r1-q1",
       "zom-intern-s3-r1-q2"
      ]
     },
     {
      "setId": 4,
      "title": "Set 4: Reverse Command Tokens + Longest Repeated Run After Edits",
      "focus": "String",
      "problemIds": [
       "zom-intern-s4-r1-q1",
       "zom-intern-s4-r1-q2"
      ]
     },
     {
      "setId": 5,
      "title": "Set 5: Count Data Center Clusters + Corrupted Replica Spread",
      "focus": "Graph / DFS",
      "problemIds": [
       "zom-intern-s5-r1-q1",
       "zom-intern-s5-r1-q2"
      ]
     },
     {
      "setId": 6,
      "title": "Set 6: Best Single Trade + Product Without Self",
      "focus": "Array",
      "problemIds": [
       "zom-intern-s6-r1-q1",
       "zom-intern-s6-r1-q2"
      ]
     },
     {
      "setId": 7,
      "title": "Set 7: Climbing Release Stairs + Fewest Quota Units",
      "focus": "Dynamic Programming",
      "problemIds": [
       "zom-intern-s7-r1-q1",
       "zom-intern-s7-r1-q2"
      ]
     },
     {
      "setId": 8,
      "title": "Set 8: Flood Fill Canvas + Shortest Clear Route",
      "focus": "DFS",
      "problemIds": [
       "zom-intern-s8-r1-q1",
       "zom-intern-s8-r1-q2"
      ]
     },
     {
      "setId": 9,
      "title": "Set 9: Compact Active Slots + Matching Usage Totals",
      "focus": "Two Pointers",
      "problemIds": [
       "zom-intern-s9-r1-q1",
       "zom-intern-s9-r1-q2"
      ]
     },
     {
      "setId": 10,
      "title": "Set 10: Anagram Tag Check + Segment a Search Query",
      "focus": "Hash Table",
      "problemIds": [
       "zom-intern-s10-r1-q1",
       "zom-intern-s10-r1-q2"
      ]
     }
    ]
   },
   {
    "roundId": "round-2",
    "title": "Round 2: DSA and Problem Solving",
    "description": "Live problem solving with a defense of approach.",
    "timeLimitMinutes": 60,
    "sets": [
     {
      "setId": 1,
      "title": "Set 1: Kth Largest Latency",
      "focus": "Heap",
      "problemIds": [
       "zom-intern-s1-r2-q1"
      ]
     },
     {
      "setId": 2,
      "title": "Set 2: Top K Search Terms",
      "focus": "Heap / Hashing",
      "problemIds": [
       "zom-intern-s2-r2-q1"
      ]
     },
     {
      "setId": 3,
      "title": "Set 3: Build Dependency Order",
      "focus": "Graph / Topological Sort",
      "problemIds": [
       "zom-intern-s3-r2-q1"
      ]
     },
     {
      "setId": 4,
      "title": "Set 4: Longest Palindromic Token",
      "focus": "Expand Around Center",
      "problemIds": [
       "zom-intern-s4-r2-q1"
      ]
     },
     {
      "setId": 5,
      "title": "Set 5: Generate Balanced Templates",
      "focus": "Backtracking",
      "problemIds": [
       "zom-intern-s5-r2-q1"
      ]
     },
     {
      "setId": 6,
      "title": "Set 6: Search a Rotated Log Index",
      "focus": "Binary Search",
      "problemIds": [
       "zom-intern-s6-r2-q1"
      ]
     },
     {
      "setId": 7,
      "title": "Set 7: Days Until Warmer",
      "focus": "Monotonic Stack",
      "problemIds": [
       "zom-intern-s7-r2-q1"
      ]
     },
     {
      "setId": 8,
      "title": "Set 8: Reach the Last Shard",
      "focus": "Greedy",
      "problemIds": [
       "zom-intern-s8-r2-q1"
      ]
     },
     {
      "setId": 9,
      "title": "Set 9: Keypad Suggestion Expansion",
      "focus": "Backtracking",
      "problemIds": [
       "zom-intern-s9-r2-q1"
      ]
     },
     {
      "setId": 10,
      "title": "Set 10: Capacity Between Peaks",
      "focus": "Two Pointers",
      "problemIds": [
       "zom-intern-s10-r2-q1"
      ]
     }
    ]
   },
   {
    "roundId": "round-3",
    "title": "Round 3: Design Round",
    "description": "Low-level and high-level design of a delivery-platform component.",
    "timeLimitMinutes": 60,
    "sets": [
     {
      "setId": 1,
      "title": "Set 1: Restaurant and Menu Class Model",
      "focus": "Low-Level and High-Level Design",
      "problemIds": [
       "zom-intern-s1-r3-q1"
      ]
     },
     {
      "setId": 2,
      "title": "Set 2: Cart and Pricing Rules",
      "focus": "Low-Level and High-Level Design",
      "problemIds": [
       "zom-intern-s2-r3-q1"
      ]
     },
     {
      "setId": 3,
      "title": "Set 3: Rating and Review System",
      "focus": "Low-Level and High-Level Design",
      "problemIds": [
       "zom-intern-s3-r3-q1"
      ]
     },
     {
      "setId": 4,
      "title": "Set 4: Coupon and Discount Engine",
      "focus": "Low-Level and High-Level Design",
      "problemIds": [
       "zom-intern-s4-r3-q1"
      ]
     },
     {
      "setId": 5,
      "title": "Set 5: Order Status State Machine",
      "focus": "Low-Level and High-Level Design",
      "problemIds": [
       "zom-intern-s5-r3-q1"
      ]
     },
     {
      "setId": 6,
      "title": "Set 6: Restaurant Search by Cuisine",
      "focus": "Low-Level and High-Level Design",
      "problemIds": [
       "zom-intern-s6-r3-q1"
      ]
     },
     {
      "setId": 7,
      "title": "Set 7: Delivery Fee Calculator",
      "focus": "Low-Level and High-Level Design",
      "problemIds": [
       "zom-intern-s7-r3-q1"
      ]
     },
     {
      "setId": 8,
      "title": "Set 8: Table Booking System",
      "focus": "Low-Level and High-Level Design",
      "problemIds": [
       "zom-intern-s8-r3-q1"
      ]
     },
     {
      "setId": 9,
      "title": "Set 9: Notification Preferences",
      "focus": "Low-Level and High-Level Design",
      "problemIds": [
       "zom-intern-s9-r3-q1"
      ]
     },
     {
      "setId": 10,
      "title": "Set 10: Favorites and Recently Viewed",
      "focus": "Low-Level and High-Level Design",
      "problemIds": [
       "zom-intern-s10-r3-q1"
      ]
     }
    ]
   },
   {
    "roundId": "round-4",
    "title": "Round 4: Hiring Manager and Culture",
    "description": "Ownership and culture conversation with a hiring manager.",
    "timeLimitMinutes": 45,
    "sets": [
     {
      "setId": 1,
      "title": "Set 1: Customer Escalation on a Failed Order",
      "focus": "Hiring Manager and Culture",
      "problemIds": [
       "zom-intern-s1-r4-q1"
      ]
     },
     {
      "setId": 2,
      "title": "Set 2: Ownership During a Peak-Night Outage",
      "focus": "Hiring Manager and Culture",
      "problemIds": [
       "zom-intern-s2-r4-q1"
      ]
     },
     {
      "setId": 3,
      "title": "Set 3: Disagreeing With a Product Manager",
      "focus": "Hiring Manager and Culture",
      "problemIds": [
       "zom-intern-s3-r4-q1"
      ]
     },
     {
      "setId": 4,
      "title": "Set 4: Shipping Fast vs Quality",
      "focus": "Hiring Manager and Culture",
      "problemIds": [
       "zom-intern-s4-r4-q1"
      ]
     },
     {
      "setId": 5,
      "title": "Set 5: A New Vertical With No Playbook",
      "focus": "Hiring Manager and Culture",
      "problemIds": [
       "zom-intern-s5-r4-q1"
      ]
     },
     {
      "setId": 6,
      "title": "Set 6: An Experiment That Failed",
      "focus": "Hiring Manager and Culture",
      "problemIds": [
       "zom-intern-s6-r4-q1"
      ]
     },
     {
      "setId": 7,
      "title": "Set 7: Conflict With the Operations Team",
      "focus": "Hiring Manager and Culture",
      "problemIds": [
       "zom-intern-s7-r4-q1"
      ]
     },
     {
      "setId": 8,
      "title": "Set 8: Helping Someone Outside Your Scope",
      "focus": "Hiring Manager and Culture",
      "problemIds": [
       "zom-intern-s8-r4-q1"
      ]
     },
     {
      "setId": 9,
      "title": "Set 9: Surge Pricing Fairness",
      "focus": "Hiring Manager and Culture",
      "problemIds": [
       "zom-intern-s9-r4-q1"
      ]
     },
     {
      "setId": 10,
      "title": "Set 10: Transparency in a Postmortem",
      "focus": "Hiring Manager and Culture",
      "problemIds": [
       "zom-intern-s10-r4-q1"
      ]
     }
    ]
   }
  ]
 },
 "sde_1": {
  "roleId": "sde_1",
  "roleName": "Zomato SDE-1",
  "level": "SDE-1",
  "experience": "0-2 Years",
  "rounds": [
   {
    "roundId": "round-1",
    "title": "Round 1: Online Coding Assessment",
    "description": "2 DSA problems per set, graded on correctness and complexity.",
    "timeLimitMinutes": 90,
    "sets": [
     {
      "setId": 1,
      "title": "Set 1: Alternating Colour Shortest Paths + Longest Fragment With K Distinct Tokens",
      "focus": "Graph / BFS",
      "problemIds": [
       "zom-sde1-s1-r1-q1",
       "zom-sde1-s1-r1-q2"
      ]
     },
     {
      "setId": 2,
      "title": "Set 2: Distance to Nearest Cache Node + Maximum Batch Jobs by Deadline",
      "focus": "Multi-source BFS",
      "problemIds": [
       "zom-sde1-s2-r1-q1",
       "zom-sde1-s2-r1-q2"
      ]
     },
     {
      "setId": 3,
      "title": "Set 3: Rooms to Nearest Gateway + Rolling Maximum Over Metrics",
      "focus": "Multi-source BFS",
      "problemIds": [
       "zom-sde1-s3-r1-q1",
       "zom-sde1-s3-r1-q2"
      ]
     },
     {
      "setId": 4,
      "title": "Set 4: Shortest Route With Removable Blocks + Smallest Covering Log Window",
      "focus": "BFS with State",
      "problemIds": [
       "zom-sde1-s4-r1-q1",
       "zom-sde1-s4-r1-q2"
      ]
     },
     {
      "setId": 5,
      "title": "Set 5: Word Ladder Transformation Length + Longest Rising Trend",
      "focus": "Graph / BFS",
      "problemIds": [
       "zom-sde1-s5-r1-q1",
       "zom-sde1-s5-r1-q2"
      ]
     },
     {
      "setId": 6,
      "title": "Set 6: Farthest Zone From Any Node + Minimum Edits Between Configs",
      "focus": "Multi-source BFS",
      "problemIds": [
       "zom-sde1-s6-r1-q1",
       "zom-sde1-s6-r1-q2"
      ]
     },
     {
      "setId": 7,
      "title": "Set 7: Circular Server Rack Harvest + Largest Healthy Square",
      "focus": "DP",
      "problemIds": [
       "zom-sde1-s7-r1-q1",
       "zom-sde1-s7-r1-q2"
      ]
     },
     {
      "setId": 8,
      "title": "Set 8: Signal Propagation Time + Balanced Shard Split",
      "focus": "Dijkstra",
      "problemIds": [
       "zom-sde1-s8-r1-q1",
       "zom-sde1-s8-r1-q2"
      ]
     },
     {
      "setId": 9,
      "title": "Set 9: Cooldown Task Slots + Concurrent Booking Rooms",
      "focus": "Greedy",
      "problemIds": [
       "zom-sde1-s9-r1-q1",
       "zom-sde1-s9-r1-q2"
      ]
     },
     {
      "setId": 10,
      "title": "Set 10: Cheapest Route With Hop Limit + Longest Consecutive Id Run",
      "focus": "Bellman-Ford",
      "problemIds": [
       "zom-sde1-s10-r1-q1",
       "zom-sde1-s10-r1-q2"
      ]
     }
    ]
   },
   {
    "roundId": "round-2",
    "title": "Round 2: DSA and Problem Solving",
    "description": "Live problem solving with a defense of approach.",
    "timeLimitMinutes": 60,
    "sets": [
     {
      "setId": 1,
      "title": "Set 1: Maximum Path Sum in a Service Tree",
      "focus": "Tree / DFS",
      "problemIds": [
       "zom-sde1-s1-r2-q1"
      ]
     },
     {
      "setId": 2,
      "title": "Set 2: Multi-Word Grid Search With Trie Pruning",
      "focus": "Trie / Backtracking",
      "problemIds": [
       "zom-sde1-s2-r2-q1"
      ]
     },
     {
      "setId": 3,
      "title": "Set 3: Kth Smallest in Sorted Matrix",
      "focus": "Heap / Binary Search",
      "problemIds": [
       "zom-sde1-s3-r2-q1"
      ]
     },
     {
      "setId": 4,
      "title": "Set 4: Best Root Nodes for Latency",
      "focus": "Graph / Topological Peel",
      "problemIds": [
       "zom-sde1-s4-r2-q1"
      ]
     },
     {
      "setId": 5,
      "title": "Set 5: Longest Increasing Path in Grid",
      "focus": "DFS + Memoization",
      "problemIds": [
       "zom-sde1-s5-r2-q1"
      ]
     },
     {
      "setId": 6,
      "title": "Set 6: Decode Telemetry Codes",
      "focus": "DP",
      "problemIds": [
       "zom-sde1-s6-r2-q1"
      ]
     },
     {
      "setId": 7,
      "title": "Set 7: Fewest Palindromic Splits",
      "focus": "DP",
      "problemIds": [
       "zom-sde1-s7-r2-q1"
      ]
     },
     {
      "setId": 8,
      "title": "Set 8: Largest Dashboard Rectangle",
      "focus": "Monotonic Stack",
      "problemIds": [
       "zom-sde1-s8-r2-q1"
      ]
     },
     {
      "setId": 9,
      "title": "Set 9: Count Smaller Events After",
      "focus": "BIT / Merge Sort",
      "problemIds": [
       "zom-sde1-s9-r2-q1"
      ]
     },
     {
      "setId": 10,
      "title": "Set 10: Most Collinear Probe Points",
      "focus": "Hashing / Geometry",
      "problemIds": [
       "zom-sde1-s10-r2-q1"
      ]
     }
    ]
   },
   {
    "roundId": "round-3",
    "title": "Round 3: Design Round",
    "description": "Low-level and high-level design of a delivery-platform component.",
    "timeLimitMinutes": 60,
    "sets": [
     {
      "setId": 1,
      "title": "Set 1: Design Order Tracking Service",
      "focus": "Low-Level and High-Level Design",
      "problemIds": [
       "zom-sde1-s1-r3-q1"
      ]
     },
     {
      "setId": 2,
      "title": "Set 2: Restaurant Search and Filters",
      "focus": "Low-Level and High-Level Design",
      "problemIds": [
       "zom-sde1-s2-r3-q1"
      ]
     },
     {
      "setId": 3,
      "title": "Set 3: Delivery Partner Assignment",
      "focus": "Low-Level and High-Level Design",
      "problemIds": [
       "zom-sde1-s3-r3-q1"
      ]
     },
     {
      "setId": 4,
      "title": "Set 4: Cart Service With Offers",
      "focus": "Low-Level and High-Level Design",
      "problemIds": [
       "zom-sde1-s4-r3-q1"
      ]
     },
     {
      "setId": 5,
      "title": "Set 5: Rating Aggregation at Scale",
      "focus": "Low-Level and High-Level Design",
      "problemIds": [
       "zom-sde1-s5-r3-q1"
      ]
     },
     {
      "setId": 6,
      "title": "Set 6: Notification Fan-out",
      "focus": "Low-Level and High-Level Design",
      "problemIds": [
       "zom-sde1-s6-r3-q1"
      ]
     },
     {
      "setId": 7,
      "title": "Set 7: Menu Service With Caching",
      "focus": "Low-Level and High-Level Design",
      "problemIds": [
       "zom-sde1-s7-r3-q1"
      ]
     },
     {
      "setId": 8,
      "title": "Set 8: Payments Retry and Idempotency",
      "focus": "Low-Level and High-Level Design",
      "problemIds": [
       "zom-sde1-s8-r3-q1"
      ]
     },
     {
      "setId": 9,
      "title": "Set 9: Real-Time Delivery ETA",
      "focus": "Low-Level and High-Level Design",
      "problemIds": [
       "zom-sde1-s9-r3-q1"
      ]
     },
     {
      "setId": 10,
      "title": "Set 10: Coupons and Promotions Engine",
      "focus": "Low-Level and High-Level Design",
      "problemIds": [
       "zom-sde1-s10-r3-q1"
      ]
     }
    ]
   },
   {
    "roundId": "round-4",
    "title": "Round 4: Hiring Manager and Culture",
    "description": "Ownership and culture conversation with a hiring manager.",
    "timeLimitMinutes": 45,
    "sets": [
     {
      "setId": 1,
      "title": "Set 1: Customer Escalation on a Failed Order",
      "focus": "Hiring Manager and Culture",
      "problemIds": [
       "zom-sde1-s1-r4-q1"
      ]
     },
     {
      "setId": 2,
      "title": "Set 2: Ownership During a Peak-Night Outage",
      "focus": "Hiring Manager and Culture",
      "problemIds": [
       "zom-sde1-s2-r4-q1"
      ]
     },
     {
      "setId": 3,
      "title": "Set 3: Disagreeing With a Product Manager",
      "focus": "Hiring Manager and Culture",
      "problemIds": [
       "zom-sde1-s3-r4-q1"
      ]
     },
     {
      "setId": 4,
      "title": "Set 4: Shipping Fast vs Quality",
      "focus": "Hiring Manager and Culture",
      "problemIds": [
       "zom-sde1-s4-r4-q1"
      ]
     },
     {
      "setId": 5,
      "title": "Set 5: A New Vertical With No Playbook",
      "focus": "Hiring Manager and Culture",
      "problemIds": [
       "zom-sde1-s5-r4-q1"
      ]
     },
     {
      "setId": 6,
      "title": "Set 6: An Experiment That Failed",
      "focus": "Hiring Manager and Culture",
      "problemIds": [
       "zom-sde1-s6-r4-q1"
      ]
     },
     {
      "setId": 7,
      "title": "Set 7: Conflict With the Operations Team",
      "focus": "Hiring Manager and Culture",
      "problemIds": [
       "zom-sde1-s7-r4-q1"
      ]
     },
     {
      "setId": 8,
      "title": "Set 8: Helping Someone Outside Your Scope",
      "focus": "Hiring Manager and Culture",
      "problemIds": [
       "zom-sde1-s8-r4-q1"
      ]
     },
     {
      "setId": 9,
      "title": "Set 9: Surge Pricing Fairness",
      "focus": "Hiring Manager and Culture",
      "problemIds": [
       "zom-sde1-s9-r4-q1"
      ]
     },
     {
      "setId": 10,
      "title": "Set 10: Transparency in a Postmortem",
      "focus": "Hiring Manager and Culture",
      "problemIds": [
       "zom-sde1-s10-r4-q1"
      ]
     }
    ]
   }
  ]
 },
 "sde_2": {
  "roleId": "sde_2",
  "roleName": "Zomato SDE-2",
  "level": "SDE-2",
  "experience": "2-5 Years",
  "rounds": [
   {
    "roundId": "round-1",
    "title": "Round 1: Online Coding Assessment",
    "description": "2 DSA problems per set, graded on correctness and complexity.",
    "timeLimitMinutes": 90,
    "sets": [
     {
      "setId": 1,
      "title": "Set 1: Sliding Window Rate Limiter + Merge Sorted Log Streams",
      "focus": "Queue / Rate Limiting",
      "problemIds": [
       "zom-sde2-s1-r1-q1",
       "zom-sde2-s1-r1-q2"
      ]
     },
     {
      "setId": 2,
      "title": "Set 2: LRU Cache Hit Counter + Optimal Ad Campaign Schedule",
      "focus": "Cache Eviction",
      "problemIds": [
       "zom-sde2-s2-r1-q1",
       "zom-sde2-s2-r1-q2"
      ]
     },
     {
      "setId": 3,
      "title": "Set 3: LFU Cache Hit Counter + Smallest Range Across Shards",
      "focus": "Cache Eviction",
      "problemIds": [
       "zom-sde2-s3-r1-q1",
       "zom-sde2-s3-r1-q2"
      ]
     },
     {
      "setId": 4,
      "title": "Set 4: Token Bucket Admission + Longest Stable Metric Window",
      "focus": "Rate Limiting",
      "problemIds": [
       "zom-sde2-s4-r1-q1",
       "zom-sde2-s4-r1-q2"
      ]
     },
     {
      "setId": 5,
      "title": "Set 5: K Cheapest Replica Pairs + Minimum Relay Refuels",
      "focus": "Heap",
      "problemIds": [
       "zom-sde2-s5-r1-q1",
       "zom-sde2-s5-r1-q2"
      ]
     },
     {
      "setId": 6,
      "title": "Set 6: Consistent Hash Ring Lookup + Cheapest Cluster Interconnect",
      "focus": "Distributed Systems",
      "problemIds": [
       "zom-sde2-s6-r1-q1",
       "zom-sde2-s6-r1-q2"
      ]
     },
     {
      "setId": 7,
      "title": "Set 7: Lock Wait-For Deadlock Check + Single Points of Link Failure",
      "focus": "Graph / Cycle Detection",
      "problemIds": [
       "zom-sde2-s7-r1-q1",
       "zom-sde2-s7-r1-q2"
      ]
     },
     {
      "setId": 8,
      "title": "Set 8: Round Robin Completion Times + Maximum Batch Consolidation Value",
      "focus": "Scheduling",
      "problemIds": [
       "zom-sde2-s8-r1-q1",
       "zom-sde2-s8-r1-q2"
      ]
     },
     {
      "setId": 9,
      "title": "Set 9: Recent Hits Counter + Skyline of Reserved Capacity",
      "focus": "Queue / Binary Search",
      "problemIds": [
       "zom-sde2-s9-r1-q1",
       "zom-sde2-s9-r1-q2"
      ]
     },
     {
      "setId": 10,
      "title": "Set 10: Idempotent Request Deduplication + Shortest Burst Over Threshold",
      "focus": "Hashing / Idempotency",
      "problemIds": [
       "zom-sde2-s10-r1-q1",
       "zom-sde2-s10-r1-q2"
      ]
     }
    ]
   },
   {
    "roundId": "round-2",
    "title": "Round 2: DSA and Problem Solving",
    "description": "Live problem solving with a defense of approach.",
    "timeLimitMinutes": 60,
    "sets": [
     {
      "setId": 1,
      "title": "Set 1: LRU Cache Internals",
      "focus": "Design / Linked List",
      "problemIds": [
       "zom-sde2-s1-r2-q1"
      ]
     },
     {
      "setId": 2,
      "title": "Set 2: LFU Cache Frequency Lists",
      "focus": "Design",
      "problemIds": [
       "zom-sde2-s2-r2-q1"
      ]
     },
     {
      "setId": 3,
      "title": "Set 3: Insert Delete Constant-Time Set",
      "focus": "Design / Hashing",
      "problemIds": [
       "zom-sde2-s3-r2-q1"
      ]
     },
     {
      "setId": 4,
      "title": "Set 4: Autocomplete Trie With Top-K Ranking",
      "focus": "Trie / Design",
      "problemIds": [
       "zom-sde2-s4-r2-q1"
      ]
     },
     {
      "setId": 5,
      "title": "Set 5: Median From a Data Stream",
      "focus": "Two Heaps",
      "problemIds": [
       "zom-sde2-s5-r2-q1"
      ]
     },
     {
      "setId": 6,
      "title": "Set 6: Maximum Frequency Stack",
      "focus": "Design / Stack",
      "problemIds": [
       "zom-sde2-s6-r2-q1"
      ]
     },
     {
      "setId": 7,
      "title": "Set 7: Time-Versioned Key-Value Store",
      "focus": "Binary Search / Design",
      "problemIds": [
       "zom-sde2-s7-r2-q1"
      ]
     },
     {
      "setId": 8,
      "title": "Set 8: Snapshot Array With Versioned Cells",
      "focus": "Binary Search / Design",
      "problemIds": [
       "zom-sde2-s8-r2-q1"
      ]
     },
     {
      "setId": 9,
      "title": "Set 9: Mutable Range Sums With Fenwick Tree",
      "focus": "Binary Indexed Tree",
      "problemIds": [
       "zom-sde2-s9-r2-q1"
      ]
     },
     {
      "setId": 10,
      "title": "Set 10: Min Stack With Constant-Time Minimum",
      "focus": "Design / Stack",
      "problemIds": [
       "zom-sde2-s10-r2-q1"
      ]
     }
    ]
   },
   {
    "roundId": "round-3",
    "title": "Round 3: Design Round",
    "description": "Low-level and high-level design of a delivery-platform component.",
    "timeLimitMinutes": 60,
    "sets": [
     {
      "setId": 1,
      "title": "Set 1: Hyperlocal Delivery Dispatch System",
      "focus": "Low-Level and High-Level Design",
      "problemIds": [
       "zom-sde2-s1-r3-q1"
      ]
     },
     {
      "setId": 2,
      "title": "Set 2: Surge Pricing and Demand Pipeline",
      "focus": "Low-Level and High-Level Design",
      "problemIds": [
       "zom-sde2-s2-r3-q1"
      ]
     },
     {
      "setId": 3,
      "title": "Set 3: Search and Ranking at Scale",
      "focus": "Low-Level and High-Level Design",
      "problemIds": [
       "zom-sde2-s3-r3-q1"
      ]
     },
     {
      "setId": 4,
      "title": "Set 4: Geo-Indexed Restaurant Discovery",
      "focus": "Low-Level and High-Level Design",
      "problemIds": [
       "zom-sde2-s4-r3-q1"
      ]
     },
     {
      "setId": 5,
      "title": "Set 5: Real-Time Tracking at Peak Load",
      "focus": "Low-Level and High-Level Design",
      "problemIds": [
       "zom-sde2-s5-r3-q1"
      ]
     },
     {
      "setId": 6,
      "title": "Set 6: Menu and Inventory Availability Sync",
      "focus": "Low-Level and High-Level Design",
      "problemIds": [
       "zom-sde2-s6-r3-q1"
      ]
     },
     {
      "setId": 7,
      "title": "Set 7: Payments and Refund Ledger",
      "focus": "Low-Level and High-Level Design",
      "problemIds": [
       "zom-sde2-s7-r3-q1"
      ]
     },
     {
      "setId": 8,
      "title": "Set 8: New Year's Eve Load Handling",
      "focus": "Low-Level and High-Level Design",
      "problemIds": [
       "zom-sde2-s8-r3-q1"
      ]
     },
     {
      "setId": 9,
      "title": "Set 9: Personalized Feed and Recommendations",
      "focus": "Low-Level and High-Level Design",
      "problemIds": [
       "zom-sde2-s9-r3-q1"
      ]
     },
     {
      "setId": 10,
      "title": "Set 10: Notification and Communication Platform",
      "focus": "Low-Level and High-Level Design",
      "problemIds": [
       "zom-sde2-s10-r3-q1"
      ]
     }
    ]
   },
   {
    "roundId": "round-4",
    "title": "Round 4: Hiring Manager and Culture",
    "description": "Ownership and culture conversation with a hiring manager.",
    "timeLimitMinutes": 45,
    "sets": [
     {
      "setId": 1,
      "title": "Set 1: Customer Escalation on a Failed Order",
      "focus": "Hiring Manager and Culture",
      "problemIds": [
       "zom-sde2-s1-r4-q1"
      ]
     },
     {
      "setId": 2,
      "title": "Set 2: Ownership During a Peak-Night Outage",
      "focus": "Hiring Manager and Culture",
      "problemIds": [
       "zom-sde2-s2-r4-q1"
      ]
     },
     {
      "setId": 3,
      "title": "Set 3: Disagreeing With a Product Manager",
      "focus": "Hiring Manager and Culture",
      "problemIds": [
       "zom-sde2-s3-r4-q1"
      ]
     },
     {
      "setId": 4,
      "title": "Set 4: Shipping Fast vs Quality",
      "focus": "Hiring Manager and Culture",
      "problemIds": [
       "zom-sde2-s4-r4-q1"
      ]
     },
     {
      "setId": 5,
      "title": "Set 5: A New Vertical With No Playbook",
      "focus": "Hiring Manager and Culture",
      "problemIds": [
       "zom-sde2-s5-r4-q1"
      ]
     },
     {
      "setId": 6,
      "title": "Set 6: An Experiment That Failed",
      "focus": "Hiring Manager and Culture",
      "problemIds": [
       "zom-sde2-s6-r4-q1"
      ]
     },
     {
      "setId": 7,
      "title": "Set 7: Conflict With the Operations Team",
      "focus": "Hiring Manager and Culture",
      "problemIds": [
       "zom-sde2-s7-r4-q1"
      ]
     },
     {
      "setId": 8,
      "title": "Set 8: Helping Someone Outside Your Scope",
      "focus": "Hiring Manager and Culture",
      "problemIds": [
       "zom-sde2-s8-r4-q1"
      ]
     },
     {
      "setId": 9,
      "title": "Set 9: Surge Pricing Fairness",
      "focus": "Hiring Manager and Culture",
      "problemIds": [
       "zom-sde2-s9-r4-q1"
      ]
     },
     {
      "setId": 10,
      "title": "Set 10: Transparency in a Postmortem",
      "focus": "Hiring Manager and Culture",
      "problemIds": [
       "zom-sde2-s10-r4-q1"
      ]
     }
    ]
   }
  ]
 }
};

export function getZOMATOQuestionSet(role: string, roundId: string, setId: number) {
  const track = ZOMATO_TRACKS[normalizeZOMATORole(role)];
  const round = track.rounds.find((r) => r.roundId === roundId) || track.rounds[0];
  return round.sets.find((s) => s.setId === Number(setId)) || round.sets[0];
}
