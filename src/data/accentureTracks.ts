// GENERATED. Accenture interview track: 3 roles x 4 rounds x 10 sets.
export type ACCENTURERole = "ase" | "adv_ase" | "sse";

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

export const ACCENTURE_ROLE_OPTIONS: Array<{ value: ACCENTURERole; label: string }> = [
  { value: "ase", label: "Associate Software Engineer (ASE)" },
  { value: "adv_ase", label: "Advanced ASE" },
  { value: "sse", label: "Senior Software Engineer" },
];

export const ACCENTURE_DEFAULT_ROLE: ACCENTURERole = "ase";

/** Maps any role string to this company's role id. */
export function normalizeACCENTURERole(role: string | null | undefined): ACCENTURERole {
  const r = (role || "").toLowerCase();
  if (r === "ase" || r === "intern" || r === "sde_intern" || r === "sde1_intern") return "ase";
  if (r === "sse" || r === "sde_2" || r === "sde2" || r === "l4") return "sse";
  if (r === "adv_ase" || r === "sde_1" || r === "sde1" || r === "adv") return "adv_ase";
  return ACCENTURE_DEFAULT_ROLE;
}

export const ACCENTURE_TRACKS: Record<string, TrackRole> = {
 "ase": {
  "roleId": "ase",
  "roleName": "Accenture Associate Software Engineer (ASE)",
  "level": "ASE",
  "experience": "Fresher / Campus",
  "rounds": [
   {
    "roundId": "round-1",
    "title": "Round 1: Coding Assessment",
    "description": "2 coding tasks per set, graded on correctness.",
    "timeLimitMinutes": 60,
    "sets": [
     {
      "setId": 1,
      "title": "Set 1: Validate Employee ID Palindrome + Second Highest Billing Amount",
      "focus": "String",
      "problemIds": [
       "acc-ase-s1-r1-q1",
       "acc-ase-s1-r1-q2"
      ]
     },
     {
      "setId": 2,
      "title": "Set 2: Nth Fibonacci Invoice Number + Count Prime Server Ids",
      "focus": "Math",
      "problemIds": [
       "acc-ase-s2-r1-q1",
       "acc-ase-s2-r1-q2"
      ]
     },
     {
      "setId": 3,
      "title": "Set 3: Reverse Each Word in a Sentence + Find the Missing Ticket Number",
      "focus": "String",
      "problemIds": [
       "acc-ase-s3-r1-q1",
       "acc-ase-s3-r1-q2"
      ]
     },
     {
      "setId": 4,
      "title": "Set 4: Reduce a Number to a Single Digit + Count Vowels and Consonants",
      "focus": "Math",
      "problemIds": [
       "acc-ase-s4-r1-q1",
       "acc-ase-s4-r1-q2"
      ]
     },
     {
      "setId": 5,
      "title": "Set 5: Rotate Shift Schedule + Case-Insensitive Anagram Check",
      "focus": "Array",
      "problemIds": [
       "acc-ase-s5-r1-q1",
       "acc-ase-s5-r1-q2"
      ]
     },
     {
      "setId": 6,
      "title": "Set 6: Trailing Zeros in a Factorial + Remove Duplicates From Sorted Records",
      "focus": "Math",
      "problemIds": [
       "acc-ase-s6-r1-q1",
       "acc-ase-s6-r1-q2"
      ]
     },
     {
      "setId": 7,
      "title": "Set 7: Compress a Repeated-Character String + Armstrong Numbers in a Range",
      "focus": "String",
      "problemIds": [
       "acc-ase-s7-r1-q1",
       "acc-ase-s7-r1-q2"
      ]
     },
     {
      "setId": 8,
      "title": "Set 8: Pascal Triangle Row + Transpose a Report Matrix",
      "focus": "Array",
      "problemIds": [
       "acc-ase-s8-r1-q1",
       "acc-ase-s8-r1-q2"
      ]
     },
     {
      "setId": 9,
      "title": "Set 9: GCD and LCM of Two Batch Sizes + Longest Common Prefix of Project Codes",
      "focus": "Math",
      "problemIds": [
       "acc-ase-s9-r1-q1",
       "acc-ase-s9-r1-q2"
      ]
     },
     {
      "setId": 10,
      "title": "Set 10: Convert Number to Binary + Pair Summing to a Target",
      "focus": "Math",
      "problemIds": [
       "acc-ase-s10-r1-q1",
       "acc-ase-s10-r1-q2"
      ]
     }
    ]
   },
   {
    "roundId": "round-2",
    "title": "Round 2: Technical Interview",
    "description": "Coding plus a verbal explanation of logic and complexity.",
    "timeLimitMinutes": 45,
    "sets": [
     {
      "setId": 1,
      "title": "Set 1: Kth Largest Latency",
      "focus": "Heap",
      "problemIds": [
       "acc-ase-s1-r2-q1"
      ]
     },
     {
      "setId": 2,
      "title": "Set 2: Top K Search Terms",
      "focus": "Heap / Hashing",
      "problemIds": [
       "acc-ase-s2-r2-q1"
      ]
     },
     {
      "setId": 3,
      "title": "Set 3: Build Dependency Order",
      "focus": "Graph / Topological Sort",
      "problemIds": [
       "acc-ase-s3-r2-q1"
      ]
     },
     {
      "setId": 4,
      "title": "Set 4: Longest Palindromic Token",
      "focus": "Expand Around Center",
      "problemIds": [
       "acc-ase-s4-r2-q1"
      ]
     },
     {
      "setId": 5,
      "title": "Set 5: Generate Balanced Templates",
      "focus": "Backtracking",
      "problemIds": [
       "acc-ase-s5-r2-q1"
      ]
     },
     {
      "setId": 6,
      "title": "Set 6: Search a Rotated Log Index",
      "focus": "Binary Search",
      "problemIds": [
       "acc-ase-s6-r2-q1"
      ]
     },
     {
      "setId": 7,
      "title": "Set 7: Days Until Warmer",
      "focus": "Monotonic Stack",
      "problemIds": [
       "acc-ase-s7-r2-q1"
      ]
     },
     {
      "setId": 8,
      "title": "Set 8: Reach the Last Shard",
      "focus": "Greedy",
      "problemIds": [
       "acc-ase-s8-r2-q1"
      ]
     },
     {
      "setId": 9,
      "title": "Set 9: Keypad Suggestion Expansion",
      "focus": "Backtracking",
      "problemIds": [
       "acc-ase-s9-r2-q1"
      ]
     },
     {
      "setId": 10,
      "title": "Set 10: Capacity Between Peaks",
      "focus": "Two Pointers",
      "problemIds": [
       "acc-ase-s10-r2-q1"
      ]
     }
    ]
   },
   {
    "roundId": "round-3",
    "title": "Round 3: Technical Deep Dive",
    "description": "Concept, DBMS, OOP and project discussion.",
    "timeLimitMinutes": 45,
    "sets": [
     {
      "setId": 1,
      "title": "Set 1: OOP Pillars With Real Examples",
      "focus": "Technical Deep Dive: Concepts, DBMS and Project",
      "problemIds": [
       "acc-ase-s1-r3-q1"
      ]
     },
     {
      "setId": 2,
      "title": "Set 2: DBMS Normalization and Keys",
      "focus": "Technical Deep Dive: Concepts, DBMS and Project",
      "problemIds": [
       "acc-ase-s2-r3-q1"
      ]
     },
     {
      "setId": 3,
      "title": "Set 3: SQL Query Round",
      "focus": "Technical Deep Dive: Concepts, DBMS and Project",
      "problemIds": [
       "acc-ase-s3-r3-q1"
      ]
     },
     {
      "setId": 4,
      "title": "Set 4: Operating System Basics",
      "focus": "Technical Deep Dive: Concepts, DBMS and Project",
      "problemIds": [
       "acc-ase-s4-r3-q1"
      ]
     },
     {
      "setId": 5,
      "title": "Set 5: Computer Networks Basics",
      "focus": "Technical Deep Dive: Concepts, DBMS and Project",
      "problemIds": [
       "acc-ase-s5-r3-q1"
      ]
     },
     {
      "setId": 6,
      "title": "Set 6: SDLC, Agile and Scrum",
      "focus": "Technical Deep Dive: Concepts, DBMS and Project",
      "problemIds": [
       "acc-ase-s6-r3-q1"
      ]
     },
     {
      "setId": 7,
      "title": "Set 7: Your Final-Year Project",
      "focus": "Technical Deep Dive: Concepts, DBMS and Project",
      "problemIds": [
       "acc-ase-s7-r3-q1"
      ]
     },
     {
      "setId": 8,
      "title": "Set 8: Arrays vs Linked Lists and Complexity",
      "focus": "Technical Deep Dive: Concepts, DBMS and Project",
      "problemIds": [
       "acc-ase-s8-r3-q1"
      ]
     },
     {
      "setId": 9,
      "title": "Set 9: Exception Handling and Collections",
      "focus": "Technical Deep Dive: Concepts, DBMS and Project",
      "problemIds": [
       "acc-ase-s9-r3-q1"
      ]
     },
     {
      "setId": 10,
      "title": "Set 10: Version Control and Testing Basics",
      "focus": "Technical Deep Dive: Concepts, DBMS and Project",
      "problemIds": [
       "acc-ase-s10-r3-q1"
      ]
     }
    ]
   },
   {
    "roundId": "round-4",
    "title": "Round 4: HR and Communication",
    "description": "HR, communication and client-readiness scenario.",
    "timeLimitMinutes": 30,
    "sets": [
     {
      "setId": 1,
      "title": "Set 1: Tell Me About Yourself and Why Accenture",
      "focus": "HR and Communication",
      "problemIds": [
       "acc-ase-s1-r4-q1"
      ]
     },
     {
      "setId": 2,
      "title": "Set 2: Relocation and Shift Flexibility",
      "focus": "HR and Communication",
      "problemIds": [
       "acc-ase-s2-r4-q1"
      ]
     },
     {
      "setId": 3,
      "title": "Set 3: Handling a Difficult Teammate",
      "focus": "HR and Communication",
      "problemIds": [
       "acc-ase-s3-r4-q1"
      ]
     },
     {
      "setId": 4,
      "title": "Set 4: Client Deadline Pressure",
      "focus": "HR and Communication",
      "problemIds": [
       "acc-ase-s4-r4-q1"
      ]
     },
     {
      "setId": 5,
      "title": "Set 5: Learning a New Technology Quickly",
      "focus": "HR and Communication",
      "problemIds": [
       "acc-ase-s5-r4-q1"
      ]
     },
     {
      "setId": 6,
      "title": "Set 6: Strengths and Weaknesses",
      "focus": "HR and Communication",
      "problemIds": [
       "acc-ase-s6-r4-q1"
      ]
     },
     {
      "setId": 7,
      "title": "Set 7: Where Do You See Yourself in Five Years",
      "focus": "HR and Communication",
      "problemIds": [
       "acc-ase-s7-r4-q1"
      ]
     },
     {
      "setId": 8,
      "title": "Set 8: Handling a Failure",
      "focus": "HR and Communication",
      "problemIds": [
       "acc-ase-s8-r4-q1"
      ]
     },
     {
      "setId": 9,
      "title": "Set 9: Unclear Client Requirements",
      "focus": "HR and Communication",
      "problemIds": [
       "acc-ase-s9-r4-q1"
      ]
     },
     {
      "setId": 10,
      "title": "Set 10: Confidentiality and Ethics",
      "focus": "HR and Communication",
      "problemIds": [
       "acc-ase-s10-r4-q1"
      ]
     }
    ]
   }
  ]
 },
 "adv_ase": {
  "roleId": "adv_ase",
  "roleName": "Accenture Advanced ASE",
  "level": "Advanced ASE",
  "experience": "Fresher (higher band)",
  "rounds": [
   {
    "roundId": "round-1",
    "title": "Round 1: Coding Assessment",
    "description": "2 coding tasks per set, graded on correctness.",
    "timeLimitMinutes": 60,
    "sets": [
     {
      "setId": 1,
      "title": "Set 1: Validate Config Brackets + Longest Unique Query Fragment",
      "focus": "Stack",
      "problemIds": [
       "acc-adv-s1-r1-q1",
       "acc-adv-s1-r1-q2"
      ]
     },
     {
      "setId": 2,
      "title": "Set 2: Sorted Latency Pair + Peak Traffic Window",
      "focus": "Two Pointers",
      "problemIds": [
       "acc-adv-s2-r1-q1",
       "acc-adv-s2-r1-q2"
      ]
     },
     {
      "setId": 3,
      "title": "Set 3: Insert Position in Sorted Index + Merge Maintenance Windows",
      "focus": "Binary Search",
      "problemIds": [
       "acc-adv-s3-r1-q1",
       "acc-adv-s3-r1-q2"
      ]
     },
     {
      "setId": 4,
      "title": "Set 4: Reverse Command Tokens + Longest Repeated Run After Edits",
      "focus": "String",
      "problemIds": [
       "acc-adv-s4-r1-q1",
       "acc-adv-s4-r1-q2"
      ]
     },
     {
      "setId": 5,
      "title": "Set 5: Count Data Center Clusters + Corrupted Replica Spread",
      "focus": "Graph / DFS",
      "problemIds": [
       "acc-adv-s5-r1-q1",
       "acc-adv-s5-r1-q2"
      ]
     },
     {
      "setId": 6,
      "title": "Set 6: Best Single Trade + Product Without Self",
      "focus": "Array",
      "problemIds": [
       "acc-adv-s6-r1-q1",
       "acc-adv-s6-r1-q2"
      ]
     },
     {
      "setId": 7,
      "title": "Set 7: Climbing Release Stairs + Fewest Quota Units",
      "focus": "Dynamic Programming",
      "problemIds": [
       "acc-adv-s7-r1-q1",
       "acc-adv-s7-r1-q2"
      ]
     },
     {
      "setId": 8,
      "title": "Set 8: Flood Fill Canvas + Shortest Clear Route",
      "focus": "DFS",
      "problemIds": [
       "acc-adv-s8-r1-q1",
       "acc-adv-s8-r1-q2"
      ]
     },
     {
      "setId": 9,
      "title": "Set 9: Compact Active Slots + Matching Usage Totals",
      "focus": "Two Pointers",
      "problemIds": [
       "acc-adv-s9-r1-q1",
       "acc-adv-s9-r1-q2"
      ]
     },
     {
      "setId": 10,
      "title": "Set 10: Anagram Tag Check + Segment a Search Query",
      "focus": "Hash Table",
      "problemIds": [
       "acc-adv-s10-r1-q1",
       "acc-adv-s10-r1-q2"
      ]
     }
    ]
   },
   {
    "roundId": "round-2",
    "title": "Round 2: Technical Interview",
    "description": "Coding plus a verbal explanation of logic and complexity.",
    "timeLimitMinutes": 45,
    "sets": [
     {
      "setId": 1,
      "title": "Set 1: Maximum Path Sum in a Service Tree",
      "focus": "Tree / DFS",
      "problemIds": [
       "acc-adv-s1-r2-q1"
      ]
     },
     {
      "setId": 2,
      "title": "Set 2: Multi-Word Grid Search With Trie Pruning",
      "focus": "Trie / Backtracking",
      "problemIds": [
       "acc-adv-s2-r2-q1"
      ]
     },
     {
      "setId": 3,
      "title": "Set 3: Kth Smallest in Sorted Matrix",
      "focus": "Heap / Binary Search",
      "problemIds": [
       "acc-adv-s3-r2-q1"
      ]
     },
     {
      "setId": 4,
      "title": "Set 4: Best Root Nodes for Latency",
      "focus": "Graph / Topological Peel",
      "problemIds": [
       "acc-adv-s4-r2-q1"
      ]
     },
     {
      "setId": 5,
      "title": "Set 5: Longest Increasing Path in Grid",
      "focus": "DFS + Memoization",
      "problemIds": [
       "acc-adv-s5-r2-q1"
      ]
     },
     {
      "setId": 6,
      "title": "Set 6: Decode Telemetry Codes",
      "focus": "DP",
      "problemIds": [
       "acc-adv-s6-r2-q1"
      ]
     },
     {
      "setId": 7,
      "title": "Set 7: Fewest Palindromic Splits",
      "focus": "DP",
      "problemIds": [
       "acc-adv-s7-r2-q1"
      ]
     },
     {
      "setId": 8,
      "title": "Set 8: Largest Dashboard Rectangle",
      "focus": "Monotonic Stack",
      "problemIds": [
       "acc-adv-s8-r2-q1"
      ]
     },
     {
      "setId": 9,
      "title": "Set 9: Count Smaller Events After",
      "focus": "BIT / Merge Sort",
      "problemIds": [
       "acc-adv-s9-r2-q1"
      ]
     },
     {
      "setId": 10,
      "title": "Set 10: Most Collinear Probe Points",
      "focus": "Hashing / Geometry",
      "problemIds": [
       "acc-adv-s10-r2-q1"
      ]
     }
    ]
   },
   {
    "roundId": "round-3",
    "title": "Round 3: Technical Deep Dive",
    "description": "Concept, DBMS, OOP and project discussion.",
    "timeLimitMinutes": 45,
    "sets": [
     {
      "setId": 1,
      "title": "Set 1: Design a Library Management System",
      "focus": "Technical Deep Dive: Concepts, DBMS and Project",
      "problemIds": [
       "acc-adv-s1-r3-q1"
      ]
     },
     {
      "setId": 2,
      "title": "Set 2: Indexing and Query Performance",
      "focus": "Technical Deep Dive: Concepts, DBMS and Project",
      "problemIds": [
       "acc-adv-s2-r3-q1"
      ]
     },
     {
      "setId": 3,
      "title": "Set 3: Design a REST API for Order Management",
      "focus": "Technical Deep Dive: Concepts, DBMS and Project",
      "problemIds": [
       "acc-adv-s3-r3-q1"
      ]
     },
     {
      "setId": 4,
      "title": "Set 4: Multithreading and Synchronization",
      "focus": "Technical Deep Dive: Concepts, DBMS and Project",
      "problemIds": [
       "acc-adv-s4-r3-q1"
      ]
     },
     {
      "setId": 5,
      "title": "Set 5: Cloud Basics and Microservices vs Monolith",
      "focus": "Technical Deep Dive: Concepts, DBMS and Project",
      "problemIds": [
       "acc-adv-s5-r3-q1"
      ]
     },
     {
      "setId": 6,
      "title": "Set 6: SQL Tuning and Transactions",
      "focus": "Technical Deep Dive: Concepts, DBMS and Project",
      "problemIds": [
       "acc-adv-s6-r3-q1"
      ]
     },
     {
      "setId": 7,
      "title": "Set 7: Design Patterns in Practice",
      "focus": "Technical Deep Dive: Concepts, DBMS and Project",
      "problemIds": [
       "acc-adv-s7-r3-q1"
      ]
     },
     {
      "setId": 8,
      "title": "Set 8: Caching and Session Management",
      "focus": "Technical Deep Dive: Concepts, DBMS and Project",
      "problemIds": [
       "acc-adv-s8-r3-q1"
      ]
     },
     {
      "setId": 9,
      "title": "Set 9: CI/CD and DevOps Basics",
      "focus": "Technical Deep Dive: Concepts, DBMS and Project",
      "problemIds": [
       "acc-adv-s9-r3-q1"
      ]
     },
     {
      "setId": 10,
      "title": "Set 10: Project Architecture Defense",
      "focus": "Technical Deep Dive: Concepts, DBMS and Project",
      "problemIds": [
       "acc-adv-s10-r3-q1"
      ]
     }
    ]
   },
   {
    "roundId": "round-4",
    "title": "Round 4: HR and Communication",
    "description": "HR, communication and client-readiness scenario.",
    "timeLimitMinutes": 30,
    "sets": [
     {
      "setId": 1,
      "title": "Set 1: Tell Me About Yourself and Why Accenture",
      "focus": "HR and Communication",
      "problemIds": [
       "acc-adv-s1-r4-q1"
      ]
     },
     {
      "setId": 2,
      "title": "Set 2: Relocation and Shift Flexibility",
      "focus": "HR and Communication",
      "problemIds": [
       "acc-adv-s2-r4-q1"
      ]
     },
     {
      "setId": 3,
      "title": "Set 3: Handling a Difficult Teammate",
      "focus": "HR and Communication",
      "problemIds": [
       "acc-adv-s3-r4-q1"
      ]
     },
     {
      "setId": 4,
      "title": "Set 4: Client Deadline Pressure",
      "focus": "HR and Communication",
      "problemIds": [
       "acc-adv-s4-r4-q1"
      ]
     },
     {
      "setId": 5,
      "title": "Set 5: Learning a New Technology Quickly",
      "focus": "HR and Communication",
      "problemIds": [
       "acc-adv-s5-r4-q1"
      ]
     },
     {
      "setId": 6,
      "title": "Set 6: Strengths and Weaknesses",
      "focus": "HR and Communication",
      "problemIds": [
       "acc-adv-s6-r4-q1"
      ]
     },
     {
      "setId": 7,
      "title": "Set 7: Where Do You See Yourself in Five Years",
      "focus": "HR and Communication",
      "problemIds": [
       "acc-adv-s7-r4-q1"
      ]
     },
     {
      "setId": 8,
      "title": "Set 8: Handling a Failure",
      "focus": "HR and Communication",
      "problemIds": [
       "acc-adv-s8-r4-q1"
      ]
     },
     {
      "setId": 9,
      "title": "Set 9: Unclear Client Requirements",
      "focus": "HR and Communication",
      "problemIds": [
       "acc-adv-s9-r4-q1"
      ]
     },
     {
      "setId": 10,
      "title": "Set 10: Confidentiality and Ethics",
      "focus": "HR and Communication",
      "problemIds": [
       "acc-adv-s10-r4-q1"
      ]
     }
    ]
   }
  ]
 },
 "sse": {
  "roleId": "sse",
  "roleName": "Accenture Senior Software Engineer",
  "level": "SSE",
  "experience": "3-7 Years",
  "rounds": [
   {
    "roundId": "round-1",
    "title": "Round 1: Coding Assessment",
    "description": "2 coding tasks per set, graded on correctness.",
    "timeLimitMinutes": 60,
    "sets": [
     {
      "setId": 1,
      "title": "Set 1: Alternating Colour Shortest Paths + Longest Fragment With K Distinct Tokens",
      "focus": "Graph / BFS",
      "problemIds": [
       "acc-sse-s1-r1-q1",
       "acc-sse-s1-r1-q2"
      ]
     },
     {
      "setId": 2,
      "title": "Set 2: Distance to Nearest Cache Node + Maximum Batch Jobs by Deadline",
      "focus": "Multi-source BFS",
      "problemIds": [
       "acc-sse-s2-r1-q1",
       "acc-sse-s2-r1-q2"
      ]
     },
     {
      "setId": 3,
      "title": "Set 3: Rooms to Nearest Gateway + Rolling Maximum Over Metrics",
      "focus": "Multi-source BFS",
      "problemIds": [
       "acc-sse-s3-r1-q1",
       "acc-sse-s3-r1-q2"
      ]
     },
     {
      "setId": 4,
      "title": "Set 4: Shortest Route With Removable Blocks + Smallest Covering Log Window",
      "focus": "BFS with State",
      "problemIds": [
       "acc-sse-s4-r1-q1",
       "acc-sse-s4-r1-q2"
      ]
     },
     {
      "setId": 5,
      "title": "Set 5: Word Ladder Transformation Length + Longest Rising Trend",
      "focus": "Graph / BFS",
      "problemIds": [
       "acc-sse-s5-r1-q1",
       "acc-sse-s5-r1-q2"
      ]
     },
     {
      "setId": 6,
      "title": "Set 6: Farthest Zone From Any Node + Minimum Edits Between Configs",
      "focus": "Multi-source BFS",
      "problemIds": [
       "acc-sse-s6-r1-q1",
       "acc-sse-s6-r1-q2"
      ]
     },
     {
      "setId": 7,
      "title": "Set 7: Circular Server Rack Harvest + Largest Healthy Square",
      "focus": "DP",
      "problemIds": [
       "acc-sse-s7-r1-q1",
       "acc-sse-s7-r1-q2"
      ]
     },
     {
      "setId": 8,
      "title": "Set 8: Signal Propagation Time + Balanced Shard Split",
      "focus": "Dijkstra",
      "problemIds": [
       "acc-sse-s8-r1-q1",
       "acc-sse-s8-r1-q2"
      ]
     },
     {
      "setId": 9,
      "title": "Set 9: Cooldown Task Slots + Concurrent Booking Rooms",
      "focus": "Greedy",
      "problemIds": [
       "acc-sse-s9-r1-q1",
       "acc-sse-s9-r1-q2"
      ]
     },
     {
      "setId": 10,
      "title": "Set 10: Cheapest Route With Hop Limit + Longest Consecutive Id Run",
      "focus": "Bellman-Ford",
      "problemIds": [
       "acc-sse-s10-r1-q1",
       "acc-sse-s10-r1-q2"
      ]
     }
    ]
   },
   {
    "roundId": "round-2",
    "title": "Round 2: Technical Interview",
    "description": "Coding plus a verbal explanation of logic and complexity.",
    "timeLimitMinutes": 45,
    "sets": [
     {
      "setId": 1,
      "title": "Set 1: LRU Cache Internals",
      "focus": "Design / Linked List",
      "problemIds": [
       "acc-sse-s1-r2-q1"
      ]
     },
     {
      "setId": 2,
      "title": "Set 2: LFU Cache Frequency Lists",
      "focus": "Design",
      "problemIds": [
       "acc-sse-s2-r2-q1"
      ]
     },
     {
      "setId": 3,
      "title": "Set 3: Insert Delete Constant-Time Set",
      "focus": "Design / Hashing",
      "problemIds": [
       "acc-sse-s3-r2-q1"
      ]
     },
     {
      "setId": 4,
      "title": "Set 4: Autocomplete Trie With Top-K Ranking",
      "focus": "Trie / Design",
      "problemIds": [
       "acc-sse-s4-r2-q1"
      ]
     },
     {
      "setId": 5,
      "title": "Set 5: Median From a Data Stream",
      "focus": "Two Heaps",
      "problemIds": [
       "acc-sse-s5-r2-q1"
      ]
     },
     {
      "setId": 6,
      "title": "Set 6: Maximum Frequency Stack",
      "focus": "Design / Stack",
      "problemIds": [
       "acc-sse-s6-r2-q1"
      ]
     },
     {
      "setId": 7,
      "title": "Set 7: Time-Versioned Key-Value Store",
      "focus": "Binary Search / Design",
      "problemIds": [
       "acc-sse-s7-r2-q1"
      ]
     },
     {
      "setId": 8,
      "title": "Set 8: Snapshot Array With Versioned Cells",
      "focus": "Binary Search / Design",
      "problemIds": [
       "acc-sse-s8-r2-q1"
      ]
     },
     {
      "setId": 9,
      "title": "Set 9: Mutable Range Sums With Fenwick Tree",
      "focus": "Binary Indexed Tree",
      "problemIds": [
       "acc-sse-s9-r2-q1"
      ]
     },
     {
      "setId": 10,
      "title": "Set 10: Min Stack With Constant-Time Minimum",
      "focus": "Design / Stack",
      "problemIds": [
       "acc-sse-s10-r2-q1"
      ]
     }
    ]
   },
   {
    "roundId": "round-3",
    "title": "Round 3: Technical Deep Dive",
    "description": "Concept, DBMS, OOP and project discussion.",
    "timeLimitMinutes": 45,
    "sets": [
     {
      "setId": 1,
      "title": "Set 1: Microservices Decomposition for a Client Migration",
      "focus": "Technical Deep Dive: Concepts, DBMS and Project",
      "problemIds": [
       "acc-sse-s1-r3-q1"
      ]
     },
     {
      "setId": 2,
      "title": "Set 2: Database Sharding and Replication for a Client App",
      "focus": "Technical Deep Dive: Concepts, DBMS and Project",
      "problemIds": [
       "acc-sse-s2-r3-q1"
      ]
     },
     {
      "setId": 3,
      "title": "Set 3: Cloud Migration Strategy",
      "focus": "Technical Deep Dive: Concepts, DBMS and Project",
      "problemIds": [
       "acc-sse-s3-r3-q1"
      ]
     },
     {
      "setId": 4,
      "title": "Set 4: API Gateway, AuthN and AuthZ Design",
      "focus": "Technical Deep Dive: Concepts, DBMS and Project",
      "problemIds": [
       "acc-sse-s4-r3-q1"
      ]
     },
     {
      "setId": 5,
      "title": "Set 5: Event-Driven Architecture With Queues",
      "focus": "Technical Deep Dive: Concepts, DBMS and Project",
      "problemIds": [
       "acc-sse-s5-r3-q1"
      ]
     },
     {
      "setId": 6,
      "title": "Set 6: Investigating a Performance Bottleneck",
      "focus": "Technical Deep Dive: Concepts, DBMS and Project",
      "problemIds": [
       "acc-sse-s6-r3-q1"
      ]
     },
     {
      "setId": 7,
      "title": "Set 7: High Availability and Disaster Recovery",
      "focus": "Technical Deep Dive: Concepts, DBMS and Project",
      "problemIds": [
       "acc-sse-s7-r3-q1"
      ]
     },
     {
      "setId": 8,
      "title": "Set 8: Legacy Modernization Plan",
      "focus": "Technical Deep Dive: Concepts, DBMS and Project",
      "problemIds": [
       "acc-sse-s8-r3-q1"
      ]
     },
     {
      "setId": 9,
      "title": "Set 9: Observability and Logging Design",
      "focus": "Technical Deep Dive: Concepts, DBMS and Project",
      "problemIds": [
       "acc-sse-s9-r3-q1"
      ]
     },
     {
      "setId": 10,
      "title": "Set 10: Estimating and De-Risking a Client Delivery",
      "focus": "Technical Deep Dive: Concepts, DBMS and Project",
      "problemIds": [
       "acc-sse-s10-r3-q1"
      ]
     }
    ]
   },
   {
    "roundId": "round-4",
    "title": "Round 4: HR and Communication",
    "description": "HR, communication and client-readiness scenario.",
    "timeLimitMinutes": 30,
    "sets": [
     {
      "setId": 1,
      "title": "Set 1: Tell Me About Yourself and Why Accenture",
      "focus": "HR and Communication",
      "problemIds": [
       "acc-sse-s1-r4-q1"
      ]
     },
     {
      "setId": 2,
      "title": "Set 2: Relocation and Shift Flexibility",
      "focus": "HR and Communication",
      "problemIds": [
       "acc-sse-s2-r4-q1"
      ]
     },
     {
      "setId": 3,
      "title": "Set 3: Handling a Difficult Teammate",
      "focus": "HR and Communication",
      "problemIds": [
       "acc-sse-s3-r4-q1"
      ]
     },
     {
      "setId": 4,
      "title": "Set 4: Client Deadline Pressure",
      "focus": "HR and Communication",
      "problemIds": [
       "acc-sse-s4-r4-q1"
      ]
     },
     {
      "setId": 5,
      "title": "Set 5: Learning a New Technology Quickly",
      "focus": "HR and Communication",
      "problemIds": [
       "acc-sse-s5-r4-q1"
      ]
     },
     {
      "setId": 6,
      "title": "Set 6: Strengths and Weaknesses",
      "focus": "HR and Communication",
      "problemIds": [
       "acc-sse-s6-r4-q1"
      ]
     },
     {
      "setId": 7,
      "title": "Set 7: Where Do You See Yourself in Five Years",
      "focus": "HR and Communication",
      "problemIds": [
       "acc-sse-s7-r4-q1"
      ]
     },
     {
      "setId": 8,
      "title": "Set 8: Handling a Failure",
      "focus": "HR and Communication",
      "problemIds": [
       "acc-sse-s8-r4-q1"
      ]
     },
     {
      "setId": 9,
      "title": "Set 9: Unclear Client Requirements",
      "focus": "HR and Communication",
      "problemIds": [
       "acc-sse-s9-r4-q1"
      ]
     },
     {
      "setId": 10,
      "title": "Set 10: Confidentiality and Ethics",
      "focus": "HR and Communication",
      "problemIds": [
       "acc-sse-s10-r4-q1"
      ]
     }
    ]
   }
  ]
 }
};

export function getACCENTUREQuestionSet(role: string, roundId: string, setId: number) {
  const track = ACCENTURE_TRACKS[normalizeACCENTURERole(role)];
  const round = track.rounds.find((r) => r.roundId === roundId) || track.rounds[0];
  return round.sets.find((s) => s.setId === Number(setId)) || round.sets[0];
}
