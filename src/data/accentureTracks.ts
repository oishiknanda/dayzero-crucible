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
      "title": "Set 10: Convert Number to Binary + Count Pairs With a Fixed Difference",
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
      "title": "Set 1: Reverse a Customer Number",
      "focus": "Math",
      "problemIds": [
       "acc-ase-s1-r2-q1"
      ]
     },
     {
      "setId": 2,
      "title": "Set 2: Palindromic Account Number",
      "focus": "Math",
      "problemIds": [
       "acc-ase-s2-r2-q1"
      ]
     },
     {
      "setId": 3,
      "title": "Set 3: Power of Two Capacity Check",
      "focus": "Bit Manipulation",
      "problemIds": [
       "acc-ase-s3-r2-q1"
      ]
     },
     {
      "setId": 4,
      "title": "Set 4: Length of the Last Word",
      "focus": "String",
      "problemIds": [
       "acc-ase-s4-r2-q1"
      ]
     },
     {
      "setId": 5,
      "title": "Set 5: Add Two Binary Strings",
      "focus": "String",
      "problemIds": [
       "acc-ase-s5-r2-q1"
      ]
     },
     {
      "setId": 6,
      "title": "Set 6: Pangram Check for a Sentence",
      "focus": "String",
      "problemIds": [
       "acc-ase-s6-r2-q1"
      ]
     },
     {
      "setId": 7,
      "title": "Set 7: FizzBuzz Report",
      "focus": "Math",
      "problemIds": [
       "acc-ase-s7-r2-q1"
      ]
     },
     {
      "setId": 8,
      "title": "Set 8: Reverse the Vowels",
      "focus": "String",
      "problemIds": [
       "acc-ase-s8-r2-q1"
      ]
     },
     {
      "setId": 9,
      "title": "Set 9: Count Leap Years in a Range",
      "focus": "Math",
      "problemIds": [
       "acc-ase-s9-r2-q1"
      ]
     },
     {
      "setId": 10,
      "title": "Set 10: Perfect Square Check",
      "focus": "Math",
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
      "title": "Set 1: Spreadsheet Column Title + Spreadsheet Column Number",
      "focus": "Math",
      "problemIds": [
       "acc-adv-s1-r1-q1",
       "acc-adv-s1-r1-q2"
      ]
     },
     {
      "setId": 2,
      "title": "Set 2: Look-and-Say Sequence Term + Multiply Two Large Numbers",
      "focus": "String",
      "problemIds": [
       "acc-adv-s2-r1-q1",
       "acc-adv-s2-r1-q2"
      ]
     },
     {
      "setId": 3,
      "title": "Set 3: Zigzag Display Reading + Parse a Numeric Field",
      "focus": "String",
      "problemIds": [
       "acc-adv-s3-r1-q1",
       "acc-adv-s3-r1-q2"
      ]
     },
     {
      "setId": 4,
      "title": "Set 4: Integer to Roman Numeral + Longest Shared Substring",
      "focus": "Math",
      "problemIds": [
       "acc-adv-s4-r1-q1",
       "acc-adv-s4-r1-q2"
      ]
     },
     {
      "setId": 5,
      "title": "Set 5: Integer Square Root + Nth Ugly Number",
      "focus": "Binary Search",
      "problemIds": [
       "acc-adv-s5-r1-q1",
       "acc-adv-s5-r1-q2"
      ]
     },
     {
      "setId": 6,
      "title": "Set 6: Guess Score for a Code + Smallest Rotation of a Code",
      "focus": "Hash Table",
      "problemIds": [
       "acc-adv-s6-r1-q1",
       "acc-adv-s6-r1-q2"
      ]
     },
     {
      "setId": 7,
      "title": "Set 7: Validate an IPv4 Address + Longest Run After Skipping Failures",
      "focus": "String",
      "problemIds": [
       "acc-adv-s7-r1-q1",
       "acc-adv-s7-r1-q2"
      ]
     },
     {
      "setId": 8,
      "title": "Set 8: Balanced Load Pivot + Even Numbers First",
      "focus": "Prefix Sum",
      "problemIds": [
       "acc-adv-s8-r1-q1",
       "acc-adv-s8-r1-q2"
      ]
     },
     {
      "setId": 9,
      "title": "Set 9: Was the Log Sorted Then Rotated + Alternate Credits and Debits",
      "focus": "Array",
      "problemIds": [
       "acc-adv-s9-r1-q1",
       "acc-adv-s9-r1-q2"
      ]
     },
     {
      "setId": 10,
      "title": "Set 10: Find the Duplicate and Missing Id + Total Alert Active Time",
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
      "title": "Set 1: Reverse the Bits of a Flag Word",
      "focus": "Bit Manipulation",
      "problemIds": [
       "acc-adv-s1-r2-q1"
      ]
     },
     {
      "setId": 2,
      "title": "Set 2: Is One String a Rotation of Another",
      "focus": "String",
      "problemIds": [
       "acc-adv-s2-r2-q1"
      ]
     },
     {
      "setId": 3,
      "title": "Set 3: Count Lit Bulbs After Rounds",
      "focus": "Math",
      "problemIds": [
       "acc-adv-s3-r2-q1"
      ]
     },
     {
      "setId": 4,
      "title": "Set 4: Total Bit Differences Across Pairs",
      "focus": "Bit Manipulation",
      "problemIds": [
       "acc-adv-s4-r2-q1"
      ]
     },
     {
      "setId": 5,
      "title": "Set 5: Items Ordered More Than a Third",
      "focus": "Voting Algorithm",
      "problemIds": [
       "acc-adv-s5-r2-q1"
      ]
     },
     {
      "setId": 6,
      "title": "Set 6: Find All Repeated Ids",
      "focus": "Array",
      "problemIds": [
       "acc-adv-s6-r2-q1"
      ]
     },
     {
      "setId": 7,
      "title": "Set 7: Smallest Missing Positive Ticket",
      "focus": "Array",
      "problemIds": [
       "acc-adv-s7-r2-q1"
      ]
     },
     {
      "setId": 8,
      "title": "Set 8: Largest Gap in Sorted Timestamps",
      "focus": "Bucket Sort",
      "problemIds": [
       "acc-adv-s8-r2-q1"
      ]
     },
     {
      "setId": 9,
      "title": "Set 9: H-Index of Engineer Impact",
      "focus": "Sorting",
      "problemIds": [
       "acc-adv-s9-r2-q1"
      ]
     },
     {
      "setId": 10,
      "title": "Set 10: Minimum Platforms for a Schedule",
      "focus": "Sorting / Sweep",
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
      "title": "Set 1: Strip Invalid Brackets From a Query + Evaluate a Billing Expression",
      "focus": "Stack",
      "problemIds": [
       "acc-sse-s1-r1-q1",
       "acc-sse-s1-r1-q2"
      ]
     },
     {
      "setId": 2,
      "title": "Set 2: Expand a Compressed Template + Normalize a File Path",
      "focus": "Stack",
      "problemIds": [
       "acc-sse-s2-r1-q1",
       "acc-sse-s2-r1-q2"
      ]
     },
     {
      "setId": 3,
      "title": "Set 3: Earliest Common Meeting Slot + Shared Availability Windows",
      "focus": "Two Pointers",
      "problemIds": [
       "acc-sse-s3-r1-q1",
       "acc-sse-s3-r1-q2"
      ]
     },
     {
      "setId": 4,
      "title": "Set 4: Batches Divisible by K + Continuous Multiple Window",
      "focus": "Prefix Sum",
      "problemIds": [
       "acc-sse-s4-r1-q1",
       "acc-sse-s4-r1-q2"
      ]
     },
     {
      "setId": 5,
      "title": "Set 5: Longest Window Hitting a Target Sum + Windows With K Odd Events",
      "focus": "Prefix Sum",
      "problemIds": [
       "acc-sse-s5-r1-q1",
       "acc-sse-s5-r1-q2"
      ]
     },
     {
      "setId": 6,
      "title": "Set 6: Best Pair of Landmarks + Minimum Card Flips for Uniform Face",
      "focus": "Dynamic Programming",
      "problemIds": [
       "acc-sse-s6-r1-q1",
       "acc-sse-s6-r1-q2"
      ]
     },
     {
      "setId": 7,
      "title": "Set 7: Fewest Shuttles for Passengers + Minimum Brackets to Insert",
      "focus": "Greedy",
      "problemIds": [
       "acc-sse-s7-r1-q1",
       "acc-sse-s7-r1-q2"
      ]
     },
     {
      "setId": 8,
      "title": "Set 8: Longest Zigzag Metric Run + Longest Shared Event Sequence",
      "focus": "Dynamic Programming",
      "problemIds": [
       "acc-sse-s8-r1-q1",
       "acc-sse-s8-r1-q2"
      ]
     },
     {
      "setId": 9,
      "title": "Set 9: Fewest Square-Sized Batches + Count Longest Rising Trends",
      "focus": "Dynamic Programming",
      "problemIds": [
       "acc-sse-s9-r1-q1",
       "acc-sse-s9-r1-q2"
      ]
     },
     {
      "setId": 10,
      "title": "Set 10: Cheapest Top-to-Bottom Path in a Triangle + Windows Using At Most K Services",
      "focus": "Dynamic Programming",
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
      "title": "Set 1: Circular Task Queue",
      "focus": "Design",
      "problemIds": [
       "acc-sse-s1-r2-q1"
      ]
     },
     {
      "setId": 2,
      "title": "Set 2: Stack With Bulk Increment",
      "focus": "Design",
      "problemIds": [
       "acc-sse-s2-r2-q1"
      ]
     },
     {
      "setId": 3,
      "title": "Set 3: Build a HashMap From Scratch",
      "focus": "Design",
      "problemIds": [
       "acc-sse-s3-r2-q1"
      ]
     },
     {
      "setId": 4,
      "title": "Set 4: Number Pool Allocator",
      "focus": "Design",
      "problemIds": [
       "acc-sse-s4-r2-q1"
      ]
     },
     {
      "setId": 5,
      "title": "Set 5: Session Token Expiry Manager",
      "focus": "Design",
      "problemIds": [
       "acc-sse-s5-r2-q1"
      ]
     },
     {
      "setId": 6,
      "title": "Set 6: Parking Slot Reservation System",
      "focus": "Design",
      "problemIds": [
       "acc-sse-s6-r2-q1"
      ]
     },
     {
      "setId": 7,
      "title": "Set 7: Product of the Last K Readings",
      "focus": "Design / Prefix Product",
      "problemIds": [
       "acc-sse-s7-r2-q1"
      ]
     },
     {
      "setId": 8,
      "title": "Set 8: Ordered Event Stream Release",
      "focus": "Design",
      "problemIds": [
       "acc-sse-s8-r2-q1"
      ]
     },
     {
      "setId": 9,
      "title": "Set 9: Slot Number Lookup",
      "focus": "Design / Heap",
      "problemIds": [
       "acc-sse-s9-r2-q1"
      ]
     },
     {
      "setId": 10,
      "title": "Set 10: Room Booking Calendar",
      "focus": "Design / Intervals",
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
