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
      "title": "Set 1: First Duplicate Order ID + Majority Cuisine Choice",
      "focus": "Hash Set",
      "problemIds": [
       "zom-intern-s1-r1-q1",
       "zom-intern-s1-r1-q2"
      ]
     },
     {
      "setId": 2,
      "title": "Set 2: Repeat Order Within K Minutes + Merge Two Sorted Menus",
      "focus": "Hash Table",
      "problemIds": [
       "zom-intern-s2-r1-q1",
       "zom-intern-s2-r1-q2"
      ]
     },
     {
      "setId": 3,
      "title": "Set 3: Customers Common to Two Cities + Largest Delivery Zone Area",
      "focus": "Hash Set",
      "problemIds": [
       "zom-intern-s3-r1-q1",
       "zom-intern-s3-r1-q2"
      ]
     },
     {
      "setId": 4,
      "title": "Set 4: Zero-Net Combo Triples + Sort Order Priorities 0-1-2",
      "focus": "Two Pointers",
      "problemIds": [
       "zom-intern-s4-r1-q1",
       "zom-intern-s4-r1-q2"
      ]
     },
     {
      "setId": 5,
      "title": "Set 5: Next Order Number + Valid Demand Mountain",
      "focus": "Array",
      "problemIds": [
       "zom-intern-s5-r1-q1",
       "zom-intern-s5-r1-q2"
      ]
     },
     {
      "setId": 6,
      "title": "Set 6: Sorted Squares of Offsets + First Rating Peak",
      "focus": "Two Pointers",
      "problemIds": [
       "zom-intern-s6-r1-q1",
       "zom-intern-s6-r1-q2"
      ]
     },
     {
      "setId": 7,
      "title": "Set 7: First Unique Dish Code + Count Ingredient Anagram Groups",
      "focus": "Hash Table",
      "problemIds": [
       "zom-intern-s7-r1-q1",
       "zom-intern-s7-r1-q2"
      ]
     },
     {
      "setId": 8,
      "title": "Set 8: Isomorphic Menu Codes + Longest Shared Order Pattern",
      "focus": "Hash Table",
      "problemIds": [
       "zom-intern-s8-r1-q1",
       "zom-intern-s8-r1-q2"
      ]
     },
     {
      "setId": 9,
      "title": "Set 9: The One Unpaired Delivery + Count Set Feature Flags",
      "focus": "Bit Manipulation",
      "problemIds": [
       "zom-intern-s9-r1-q1",
       "zom-intern-s9-r1-q2"
      ]
     },
     {
      "setId": 10,
      "title": "Set 10: Happy Coupon Number + Roman Table Number Parser",
      "focus": "Math",
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
      "title": "Set 1: Slowest Safe Packing Speed",
      "focus": "Binary Search on Answer",
      "problemIds": [
       "zom-intern-s1-r2-q1"
      ]
     },
     {
      "setId": 2,
      "title": "Set 2: Best Contiguous Profit Streak",
      "focus": "Dynamic Programming",
      "problemIds": [
       "zom-intern-s2-r2-q1"
      ]
     },
     {
      "setId": 3,
      "title": "Set 3: Search a Sorted Price Grid",
      "focus": "Binary Search",
      "problemIds": [
       "zom-intern-s3-r2-q1"
      ]
     },
     {
      "setId": 4,
      "title": "Set 4: Spiral Delivery Route",
      "focus": "Matrix",
      "problemIds": [
       "zom-intern-s4-r2-q1"
      ]
     },
     {
      "setId": 5,
      "title": "Set 5: Rotate a Seat Map 90 Degrees",
      "focus": "Matrix",
      "problemIds": [
       "zom-intern-s5-r2-q1"
      ]
     },
     {
      "setId": 6,
      "title": "Set 6: Clear Closed Rows and Columns",
      "focus": "Matrix",
      "problemIds": [
       "zom-intern-s6-r2-q1"
      ]
     },
     {
      "setId": 7,
      "title": "Set 7: All Delivery Orderings",
      "focus": "Backtracking",
      "problemIds": [
       "zom-intern-s7-r2-q1"
      ]
     },
     {
      "setId": 8,
      "title": "Set 8: All Add-On Combinations",
      "focus": "Backtracking",
      "problemIds": [
       "zom-intern-s8-r2-q1"
      ]
     },
     {
      "setId": 9,
      "title": "Set 9: Coupon Value Combinations",
      "focus": "Backtracking",
      "problemIds": [
       "zom-intern-s9-r2-q1"
      ]
     },
     {
      "setId": 10,
      "title": "Set 10: Next Larger Order Sequence",
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
      "title": "Set 1: Shortest Batch Reaching Target + Subarrays With Small Product",
      "focus": "Sliding Window",
      "problemIds": [
       "zom-sde1-s1-r1-q1",
       "zom-sde1-s1-r1-q2"
      ]
     },
     {
      "setId": 2,
      "title": "Set 2: Find Anagram Start Positions + Is a Permutation Inside",
      "focus": "Sliding Window",
      "problemIds": [
       "zom-sde1-s2-r1-q1",
       "zom-sde1-s2-r1-q2"
      ]
     },
     {
      "setId": 3,
      "title": "Set 3: Longest Demand Mountain + Best Multiplicative Streak",
      "focus": "Two Pointers",
      "problemIds": [
       "zom-sde1-s3-r1-q1",
       "zom-sde1-s3-r1-q2"
      ]
     },
     {
      "setId": 4,
      "title": "Set 4: Best Circular Shift Window + Starting Depot for a Loop",
      "focus": "Dynamic Programming",
      "problemIds": [
       "zom-sde1-s4-r1-q1",
       "zom-sde1-s4-r1-q2"
      ]
     },
     {
      "setId": 5,
      "title": "Set 5: Minimum Reward Points + Fewest Slots to Cancel",
      "focus": "Greedy",
      "problemIds": [
       "zom-sde1-s5-r1-q1",
       "zom-sde1-s5-r1-q2"
      ]
     },
     {
      "setId": 6,
      "title": "Set 6: Fewest Pins to Burst Banners + Partition Shifts by Zone Code",
      "focus": "Greedy",
      "problemIds": [
       "zom-sde1-s6-r1-q1",
       "zom-sde1-s6-r1-q2"
      ]
     },
     {
      "setId": 7,
      "title": "Set 7: Insert a New Delivery Window + Delivery Convoy Count",
      "focus": "Intervals",
      "problemIds": [
       "zom-sde1-s7-r1-q1",
       "zom-sde1-s7-r1-q2"
      ]
     },
     {
      "setId": 8,
      "title": "Set 8: Rating Span for Each Day + Next Higher Surge in a Cycle",
      "focus": "Monotonic Stack",
      "problemIds": [
       "zom-sde1-s8-r1-q1",
       "zom-sde1-s8-r1-q2"
      ]
     },
     {
      "setId": 9,
      "title": "Set 9: Cheapest Climb Through Tiers + Routes Around Blocked Streets",
      "focus": "Dynamic Programming",
      "problemIds": [
       "zom-sde1-s9-r1-q1",
       "zom-sde1-s9-r1-q2"
      ]
     },
     {
      "setId": 10,
      "title": "Set 10: Longest Palindromic Subsequence + Cheapest Rider Path in a Grid",
      "focus": "Dynamic Programming",
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
      "title": "Set 1: Connected Kitchen Networks",
      "focus": "Union Find",
      "problemIds": [
       "zom-sde1-s1-r2-q1"
      ]
     },
     {
      "setId": 2,
      "title": "Set 2: Redundant Delivery Link",
      "focus": "Union Find",
      "problemIds": [
       "zom-sde1-s2-r2-q1"
      ]
     },
     {
      "setId": 3,
      "title": "Set 3: Split Riders Into Two Teams",
      "focus": "Graph Coloring",
      "problemIds": [
       "zom-sde1-s3-r2-q1"
      ]
     },
     {
      "setId": 4,
      "title": "Set 4: Capture Enclosed Zones",
      "focus": "DFS / Matrix",
      "problemIds": [
       "zom-sde1-s4-r2-q1"
      ]
     },
     {
      "setId": 5,
      "title": "Set 5: Smoothest Delivery Route",
      "focus": "Dijkstra / Binary Search",
      "problemIds": [
       "zom-sde1-s5-r2-q1"
      ]
     },
     {
      "setId": 6,
      "title": "Set 6: Wait for the Flood to Subside",
      "focus": "Dijkstra / Heap",
      "problemIds": [
       "zom-sde1-s6-r2-q1"
      ]
     },
     {
      "setId": 7,
      "title": "Set 7: Top K Most Ordered Dishes",
      "focus": "Heap / Sorting",
      "problemIds": [
       "zom-sde1-s7-r2-q1"
      ]
     },
     {
      "setId": 8,
      "title": "Set 8: Can Items Be Rearranged Apart",
      "focus": "Greedy / Heap",
      "problemIds": [
       "zom-sde1-s8-r2-q1"
      ]
     },
     {
      "setId": 9,
      "title": "Set 9: Is the Hub Network a Tree",
      "focus": "Union Find",
      "problemIds": [
       "zom-sde1-s9-r2-q1"
      ]
     },
     {
      "setId": 10,
      "title": "Set 10: Quietest Delivery Hub",
      "focus": "Floyd-Warshall",
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
      "title": "Set 1: Median of Two City Feeds + Rolling Median Delivery Time",
      "focus": "Binary Search",
      "problemIds": [
       "zom-sde2-s1-r1-q1",
       "zom-sde2-s1-r1-q2"
      ]
     },
     {
      "setId": 2,
      "title": "Set 2: Largest Open Kitchen Floor + Nested Packaging Boxes",
      "focus": "Stack / DP",
      "problemIds": [
       "zom-sde2-s2-r1-q1",
       "zom-sde2-s2-r1-q2"
      ]
     },
     {
      "setId": 3,
      "title": "Set 3: Fewest Drop Tests for Fragile Packs + Pattern Match With Dots and Stars",
      "focus": "DP / Math",
      "problemIds": [
       "zom-sde2-s3-r1-q1",
       "zom-sde2-s3-r1-q2"
      ]
     },
     {
      "setId": 4,
      "title": "Set 4: Wildcard Coupon Matching + Count Distinct Order Subsequences",
      "focus": "DP",
      "problemIds": [
       "zom-sde2-s4-r1-q1",
       "zom-sde2-s4-r1-q2"
      ]
     },
     {
      "setId": 5,
      "title": "Set 5: Interleaved Delivery Logs + Minimum Window Toggles",
      "focus": "DP",
      "problemIds": [
       "zom-sde2-s5-r1-q1",
       "zom-sde2-s5-r1-q2"
      ]
     },
     {
      "setId": 6,
      "title": "Set 6: Two-Rider Pickup Round Trip + Count Important Reversals",
      "focus": "DP",
      "problemIds": [
       "zom-sde2-s6-r1-q1",
       "zom-sde2-s6-r1-q2"
      ]
     },
     {
      "setId": 7,
      "title": "Set 7: Longest Well-Formed Bracket Run + Largest Divisible Chain of Pack Sizes",
      "focus": "Stack / DP",
      "problemIds": [
       "zom-sde2-s7-r1-q1",
       "zom-sde2-s7-r1-q2"
      ]
     },
     {
      "setId": 8,
      "title": "Set 8: Cheapest Combine Tree of Leaves + Minimum Cost to Merge Crates",
      "focus": "Monotonic Stack",
      "problemIds": [
       "zom-sde2-s8-r1-q1",
       "zom-sde2-s8-r1-q2"
      ]
     },
     {
      "setId": 9,
      "title": "Set 9: Shortest Tour Through Every Hub + Fewest Moves for a Scooter Knight",
      "focus": "BFS + Bitmask",
      "problemIds": [
       "zom-sde2-s9-r1-q1",
       "zom-sde2-s9-r1-q2"
      ]
     },
     {
      "setId": 10,
      "title": "Set 10: Fewest Bus Changes Across Routes + Fewest Sprinklers to Cover a Lane",
      "focus": "BFS on Routes",
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
      "title": "Set 1: Metro-Style Average Travel Time",
      "focus": "Design / Hashing",
      "problemIds": [
       "zom-sde2-s1-r2-q1"
      ]
     },
     {
      "setId": 2,
      "title": "Set 2: Duplicate Notification Suppressor",
      "focus": "Design / Hashing",
      "problemIds": [
       "zom-sde2-s2-r2-q1"
      ]
     },
     {
      "setId": 3,
      "title": "Set 3: Order Page Navigation History",
      "focus": "Design / Stack",
      "problemIds": [
       "zom-sde2-s3-r2-q1"
      ]
     },
     {
      "setId": 4,
      "title": "Set 4: Dish Ratings by Cuisine",
      "focus": "Design / Heap",
      "problemIds": [
       "zom-sde2-s4-r2-q1"
      ]
     },
     {
      "setId": 5,
      "title": "Set 5: Moving Average of Delivery Times",
      "focus": "Design / Queue",
      "problemIds": [
       "zom-sde2-s5-r2-q1"
      ]
     },
     {
      "setId": 6,
      "title": "Set 6: Dish Name Prefix Counter",
      "focus": "Trie / Design",
      "problemIds": [
       "zom-sde2-s6-r2-q1"
      ]
     },
     {
      "setId": 7,
      "title": "Set 7: Wallet Transfer Validation",
      "focus": "Design / Simulation",
      "problemIds": [
       "zom-sde2-s7-r2-q1"
      ]
     },
     {
      "setId": 8,
      "title": "Set 8: Bid-Ask Order Matching Counter",
      "focus": "Heap / Design",
      "problemIds": [
       "zom-sde2-s8-r2-q1"
      ]
     },
     {
      "setId": 9,
      "title": "Set 9: Delivery Partner Leaderboard",
      "focus": "Design / Heap",
      "problemIds": [
       "zom-sde2-s9-r2-q1"
      ]
     },
     {
      "setId": 10,
      "title": "Set 10: Live Price Fluctuation Tracker",
      "focus": "Heap / Design",
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
