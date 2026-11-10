export interface RoundConfig {
  round: string;
  title: string;
  desc: string;
  duration: string;
  focusArea: string;
  tags: string[];
}

export interface RoleConfig {
  roleTitle: string;
  level: string;
  rounds: RoundConfig[];
}

export interface CompanyTrackData {
  companyName: string;
  companySlug: string;
  brandColor: string;
  overview: string;
  recruiterNotes: string;
  roles: Record<string, RoleConfig>;
}

// Helper to generate tailored loop stages
export const COMPANY_PROFILES: Record<string, Partial<CompanyTrackData>> = {
  // 1. AMAZON
  "amazon": {
    companyName: "Amazon",
    brandColor: "#FF9900",
    overview: "Amazon evaluates candidates ruthlessly on algorithmic scalability and the 16 Leadership Principles (LPs). Every technical round embeds behavioral probing.",
    recruiterNotes: "Hidden tests heavily penalize O(N^2) space allocations. The Bar Raiser has absolute veto power.",
    roles: {
      intern: {
        roleTitle: "SDE Intern (Summer / Fall)",
        level: "L3 Intern",
        rounds: [
          {
            round: "ROUND 01",
            title: "Online Assessment (OA 1 & 2)",
            desc: "90-minute Hackerrank test: 2 algorithmic problems (Trees/DP/Greedy) + Amazon Work Style Simulation.",
            duration: "90 Mins",
            focusArea: "Data Structures & LP Alignment",
            tags: ["Hackerrank OA", "Work-Style Assessment", "O(N log N) Constraints"]
          },
          {
            round: "ROUND 02",
            title: "Technical Screen & Viva",
            desc: "Live coding on balanced trees / dynamic programming with aggressive edge case testing.",
            duration: "45 Mins",
            focusArea: "Recursion & Auxiliary Space",
            tags: ["Live DSA", "Big-O Defense", "Edge Case Probing"]
          },
          {
            round: "ROUND 03",
            title: "OOP & Basic Design Screen",
            desc: "Object-oriented design for real-world systems (e.g., Locker Management, Parking Lot) adhering to SOLID principles.",
            duration: "45 Mins",
            focusArea: "Modular Architecture",
            tags: ["LLD", "Design Patterns", "Clean Code AST"]
          },
          {
            round: "ROUND 04",
            title: "Leadership Principles Defense",
            desc: "Probing questions focused on Customer Obsession, Bias for Action, and Ownership using STAR format.",
            duration: "45 Mins",
            focusArea: "Amazon 16 LPs",
            tags: ["STAR Framework", "Failure Reflection", "Behavioral Bar"]
          }
        ]
      },
      sde1: {
        roleTitle: "Software Development Engineer I (L4)",
        level: "L4 New Grad / Junior",
        rounds: [
          {
            round: "ROUND 01",
            title: "Timed OA & Work-Simulation",
            desc: "Two LeetCode Medium/Hard algorithmic tasks + Amazon SDE Work Simulation debugging session.",
            duration: "90 Mins",
            focusArea: "Graph Traversal, HashMaps, Sliding Windows",
            tags: ["Proctored OA", "Work Simulation", "Memory Constraints"]
          },
          {
            round: "ROUND 02",
            title: "DSA Deep Dive & Code Hygiene",
            desc: "Complex data structures (Trie, Segment Trees, Heaps) + 15 min Amazon LP cross-examination.",
            duration: "60 Mins",
            focusArea: "Algorithmic Precision + LPs",
            tags: ["Customer Obsession", "Optimal Big-O", "Live Voice Viva"]
          },
          {
            round: "ROUND 03",
            title: "Logical & Object-Oriented Design (LLD)",
            desc: "Designing scalable object-oriented software (e.g., In-Memory Cache, Amazon Locker Service).",
            duration: "60 Mins",
            focusArea: "Extensibility & SOLID",
            tags: ["Concurrency Basics", "Design Patterns", "Clean APIs"]
          },
          {
            round: "ROUND 04",
            title: "Amazon Bar Raiser Screen",
            desc: "Independent evaluator cross-examining candidate against 'Earn Trust' and 'Have Backbone; Disagree & Commit'.",
            duration: "60 Mins",
            focusArea: "Bar Raiser Protocol",
            tags: ["Veto Authority", "High Cognitive Strain", "Uncompromised Standards"]
          }
        ]
      },
      sde2: {
        roleTitle: "Software Development Engineer II (L5)",
        level: "L5 Mid-Level / Experienced",
        rounds: [
          {
            round: "ROUND 01",
            title: "Architectural OA & Algorithmic Screen",
            desc: "Advanced dynamic programming, interval scheduling, and complex concurrency edge cases.",
            duration: "90 Mins",
            focusArea: "Algorithmic Optimizations",
            tags: ["LeetCode Hard", "Lockdown OA", "Memory Optimization"]
          },
          {
            round: "ROUND 02",
            title: "Data Structures & Resiliency",
            desc: "Live graph algorithms and distributed state reconciliation under network partition scenarios.",
            duration: "60 Mins",
            focusArea: "Failure Resilience",
            tags: ["Distributed DSA", "Voice Interrogation", "LPs Deep Dive"]
          },
          {
            round: "ROUND 03",
            title: "High-Level Distributed System Design (HLD)",
            desc: "Design Amazon Video streaming ingestion, AWS DynamoDB throttling, or global flash-sale ordering.",
            duration: "60 Mins",
            focusArea: "Scalability, CAP Theorem, Sharding",
            tags: ["HLD", "Kafka / Event-Driven", "Throughput Benchmarking"]
          },
          {
            round: "ROUND 04",
            title: "Senior Bar Raiser & Org Impact",
            desc: "Exhaustive evaluation of architectural trade-offs, technical debt stewardship, and 'Invent and Simplify'.",
            duration: "60 Mins",
            focusArea: "Leadership Principles at Scale",
            tags: ["Bar Raiser Veto", "Cross-Functional Conflicts", "System Tradeoffs"]
          }
        ]
      }
    }
  },

  // 2. GOOGLE
  "google": {
    companyName: "Google",
    brandColor: "#4285F4",
    overview: "Google focuses on pure mathematical and algorithmic problem-solving rigor. Clean abstractions and analytical clarity carry more weight than boilerplate frameworks.",
    recruiterNotes: "Google does not test framework trivia. Every question tests fundamental computer science and discrete mathematics.",
    roles: {
      intern: {
        roleTitle: "Software Engineering Intern (STEP / SWE Intern)",
        level: "L2 / L3 Intern",
        rounds: [
          {
            round: "ROUND 01",
            title: "Google Online Challenge (GOC)",
            desc: "2 algorithmic problems testing graphs, trees, combinatorics, or dynamic programming with hidden test suites.",
            duration: "60 Mins",
            focusArea: "Combinatorics & Graph Theory",
            tags: ["Automated Proctor", "Hidden Edge Cases", "Strict 60-Min Timer"]
          },
          {
            round: "ROUND 02",
            title: "Data Structures & Tree Algorithms",
            desc: "Interactive whiteboard session on N-ary trees, binary search on answer spaces, and bit manipulation.",
            duration: "45 Mins",
            focusArea: "Algorithmic Invariants",
            tags: ["Oral Proof of Correctness", "Big-O Bound", "Clean Code AST"]
          },
          {
            round: "ROUND 03",
            title: "Graph Traversal & Shortest Path",
            desc: "Live problem solving on topological sort, Dijkstra variations, or bipartite matching.",
            duration: "45 Mins",
            focusArea: "Graph Exploration",
            tags: ["Time Complexity Analysis", "Edge Cases", "Voice Interruption"]
          },
          {
            round: "ROUND 04",
            title: "Googleyness & Project Deep Dive",
            desc: "Discussion evaluating intellectual humility, ambiguity tolerance, collaborative problem solving, and ethics.",
            duration: "45 Mins",
            focusArea: "Googleyness & Culture",
            tags: ["Intellectual Humility", "Ambiguity Handling", "Collaborative Mindset"]
          }
        ]
      },
      sde1: {
        roleTitle: "Software Engineer I (L3)",
        level: "L3 Campus / New Grad",
        rounds: [
          {
            round: "ROUND 01",
            title: "Google Online Challenge (GOC)",
            desc: "Rigorous 90-minute algorithmic screen on Codeforces Div 2 level graph and tree DP challenges.",
            duration: "90 Mins",
            focusArea: "Dynamic Programming & Trees",
            tags: ["Lockdown OA", "Memory Limits", "Hidden Stress Tests"]
          },
          {
            round: "ROUND 02",
            title: "Algorithms & Mathematical Optimization",
            desc: "Live coding: Prefix trees, Segment trees, or state-space reductions with mathematical proofs.",
            duration: "45 Mins",
            focusArea: "Mathematical Rigor",
            tags: ["Live Voice Viva", "Proof of Optimality", "No External Libraries"]
          },
          {
            round: "ROUND 03",
            title: "Complex Systems & Concurrency",
            desc: "Thread synchronization, race conditions, memory allocators, and non-blocking queue primitives.",
            duration: "45 Mins",
            focusArea: "Low-Level Fundamentals",
            tags: ["Deadlock Prevention", "AST Code Inspection", "Clean Syntax"]
          },
          {
            round: "ROUND 04",
            title: "Googleyness & Behavioral Evaluation",
            desc: "Navigating ambiguous problem spaces, cross-team conflict resolution, and data-driven communication.",
            duration: "45 Mins",
            focusArea: "Googleyness Principles",
            tags: ["Ethical Coding", "Ambiguity Tolerance", "Data-First Mindset"]
          }
        ]
      },
      sde2: {
        roleTitle: "Software Engineer II (L4 / L5)",
        level: "L4 / L5 Experienced SWE",
        rounds: [
          {
            round: "ROUND 01",
            title: "Google Technical Screen",
            desc: "Complex algorithmic challenge: Dynamic graphs, flows, or 2D geometry algorithms.",
            duration: "45 Mins",
            focusArea: "Advanced Algorithms",
            tags: ["Hard DSA", "Sub-Millisecond Execution", "Voice Scrutiny"]
          },
          {
            round: "ROUND 02",
            title: "Advanced Data Structures Screen",
            desc: "Fenwick trees, LRU/LFU cache variants, and high-throughput thread-safe buffers.",
            duration: "45 Mins",
            focusArea: "Cache & Memory Geometry",
            tags: ["Cache Locality", "AST Auditing", "Live Oral Grilling"]
          },
          {
            round: "ROUND 03",
            title: "Google-Scale Systems Architecture (HLD)",
            desc: "Design Google Search autocomplete, Spanner distributed database, or YouTube transcode pipeline.",
            duration: "60 Mins",
            focusArea: "Global Consensus, Paxos, Multi-Region Sharding",
            tags: ["Distributed Systems", "Consensus Protocols", "Failure Recovery"]
          },
          {
            round: "ROUND 04",
            title: "Googleyness & Leadership at Scale",
            desc: "Mentoring junior engineers, championing diversity, and managing severe architectural disagreements.",
            duration: "45 Mins",
            focusArea: "System Stewardship",
            tags: ["Googleyness", "Constructive Dissent", "Executive Communication"]
          }
        ]
      }
    }
  },

  // 3. QUANT & HIGH FREQUENCY TRADING (Citadel, Jane Street, Optiver, Tower Research)
  "citadel": {
    companyName: "Citadel / Citadel Securities",
    brandColor: "#0F172A",
    overview: "Citadel tests ultra-low latency execution, kernel bypass (DPDK/Solarflare), microsecond C++ optimizations, and lock-free concurrency.",
    recruiterNotes: "Standard web architectures do not apply. Any heap allocation on the hot path results in instant rejection.",
    roles: {
      intern: {
        roleTitle: "Quantitative Trading / SWE Intern",
        level: "Quant Intern",
        rounds: [
          {
            round: "ROUND 01",
            title: "HackerRank OA (C++ / Python Speed)",
            desc: "Speed-oriented data structures, cache efficiency problems, and modular arithmetic.",
            duration: "75 Mins",
            focusArea: "Speed, Zero-Allocation Math",
            tags: ["Microsecond Constraints", "Cache Warmth", "Zero Heap Allocation"]
          },
          {
            round: "ROUND 02",
            title: "C++ Memory Model & Pointers",
            desc: "Deep inspection into move semantics, virtual tables (vtable overhead), and RAII lifetime guarantees.",
            duration: "60 Mins",
            focusArea: "C++ Memory Mechanics",
            tags: ["Vtable Elimination", "Cache Misses", "Voice Viva"]
          },
          {
            round: "ROUND 03",
            title: "Concurrency & Lock-Free Data Structures",
            desc: "Design a single-producer single-consumer ring buffer using atomic memory orders (std::memory_order_acquire/release).",
            duration: "60 Mins",
            focusArea: "Atomic Concurrency",
            tags: ["Lock-Free Ring Buffer", "False Sharing", "Memory Fences"]
          },
          {
            round: "ROUND 04",
            title: "System Telemetry & Technical Culture",
            desc: "Extreme mental math, probability puzzles, and handling high-stakes live production market anomalies.",
            duration: "45 Mins",
            focusArea: "Probability & Risk Tolerance",
            tags: ["Bayesian Updating", "Stress Calibration", "Zero-Tolerance Errors"]
          }
        ]
      },
      sde1: {
        roleTitle: "Software Engineer - Low Latency Execution",
        level: "Junior Quant Engineer",
        rounds: [
          {
            round: "ROUND 01",
            title: "Proctored C++20 Low-Latency OA",
            desc: "Extreme algorithmic optimization: Custom allocator design, bit manipulation, and SIMD vectorization.",
            duration: "90 Mins",
            focusArea: "SIMD, Cache Alignments",
            tags: ["AVX-512", "Branch Prediction", "Lockdown OA"]
          },
          {
            round: "ROUND 02",
            title: "Operating Systems, Kernels & Sockets",
            desc: "Inter-Process Communication (IPC), shared memory, TCP vs UDP multicasting, and OS context switch overhead.",
            duration: "60 Mins",
            focusArea: "Linux Kernel Internals",
            tags: ["Kernel Bypass", "Epoll vs io_uring", "Direct Memory Access"]
          },
          {
            round: "ROUND 03",
            title: "Order Book Matching Engine Design",
            desc: "Design an in-memory limit order book matching bids and asks under sub-microsecond latency SLAs.",
            duration: "60 Mins",
            focusArea: "L2/L3 Cache Optimization",
            tags: ["Order Book LLD", "O(1) Cancellation", "Memory Packing"]
          },
          {
            round: "ROUND 04",
            title: "Live Production Post-Mortem Defense",
            desc: "Defending execution decisions during market flash crashes, risk management, and rigorous trade-off clarity.",
            duration: "45 Mins",
            focusArea: "Quant Mental Toughness",
            tags: ["Risk Limits", "Live Fire Scenarios", "Real-Time Defense"]
          }
        ]
      }
    }
  },

  // 4. NVIDIA
  "nvidia": {
    companyName: "NVIDIA",
    brandColor: "#76B900",
    overview: "NVIDIA interviews focus on deep computer architecture, hardware-software co-design, GPU pipelines (CUDA, Tensor Cores), and parallel computing.",
    recruiterNotes: "Be ready to calculate PCIe bandwidth bottlenecks and GPU shared-memory bank conflicts.",
    roles: {
      intern: {
        roleTitle: "System Software / CUDA Intern",
        level: "Intern / Co-Op",
        rounds: [
          {
            round: "ROUND 01",
            title: "Timed Technical Assessment",
            desc: "C/C++ algorithms, pointer arithmetic, bitwise masking, and multi-threading primitives.",
            duration: "90 Mins",
            focusArea: "Pointers & Concurrency",
            tags: ["C Programming", "Bit Twiddling", "Thread Safety"]
          },
          {
            round: "ROUND 02",
            title: "Computer Architecture Fundamentals",
            desc: "CPU/GPU cache hierarchies (L1, L2, DRAM), pipelining, hazards, and memory addressing.",
            duration: "45 Mins",
            focusArea: "Hardware Architecture",
            tags: ["Cache Lines", "Branch Predictor", "Instruction Latency"]
          },
          {
            round: "ROUND 03",
            title: "Parallel Programming & CUDA Basics",
            desc: "Matrix multiplication optimization, thread warp divergence, and shared memory access patterns.",
            duration: "60 Mins",
            focusArea: "GPU Parallelization",
            tags: ["CUDA Kernels", "Warp Divergence", "Shared Memory"]
          },
          {
            round: "ROUND 04",
            title: "System Software Behavioral",
            desc: "Debugging grueling driver crashes, hardware errata handling, and cross-functional team collaboration.",
            duration: "45 Mins",
            focusArea: "Engineering Grit",
            tags: ["Root Cause Analysis", "Tenacity", "First-Principles Thinking"]
          }
        ]
      },
      sde1: {
        roleTitle: "Systems Software Engineer (GPU / AI Platform)",
        level: "IC-1 / IC-2",
        rounds: [
          {
            round: "ROUND 01",
            title: "System-Level Coding Assessment",
            desc: "Low-level C/C++ memory management, custom circular buffer, and SIMD algorithmic acceleration.",
            duration: "90 Mins",
            focusArea: "Systems C++ & Memory Alignment",
            tags: ["No Standard Libs", "Cache Line Aligned", "Proctored"]
          },
          {
            round: "ROUND 02",
            title: "Kernel & Device Driver Internals",
            desc: "Virtual memory mapping (MMU), DMA transfers, interrupt handlers, and PCIe protocol stack.",
            duration: "60 Mins",
            focusArea: "OS & Hardware Boundary",
            tags: ["Device Drivers", "DMA Contiguity", "Live Voice Viva"]
          },
          {
            round: "ROUND 03",
            title: "Distributed GPU Training Architecture",
            desc: "Design the networking topology (NVLink, InfiniBand, RDMA) for a 10,000-GPU LLM cluster.",
            duration: "60 Mins",
            focusArea: "High-Throughput Interconnects",
            tags: ["NVLink Bandwidth", "All-Reduce Bottlenecks", "NCCL Architecture"]
          },
          {
            round: "ROUND 04",
            title: "NVIDIA Culture & Innovation Drive",
            desc: "First-principles engineering defense, intellectual honesty, and rapid iteration under extreme market demands.",
            duration: "45 Mins",
            focusArea: "Jensen's First Principles",
            tags: ["Speed of Light Metric", "Intellectual Honesty", "High Agency"]
          }
        ]
      }
    }
  },

  // 5. META
  "meta": {
    companyName: "Meta",
    brandColor: "#0668E1",
    overview: "Meta prioritizes speed of execution and high-signal, bug-free coding. Candidates must solve 2 medium/hard algorithmic problems within a 45-minute window.",
    recruiterNotes: "Meta values clean code speed. Hesitating on standard graph or BFS/DFS patterns causes instant disqualification.",
    roles: {
      intern: {
        roleTitle: "Software Engineer Intern",
        level: "SWE Intern",
        rounds: [
          {
            round: "ROUND 01",
            title: "Meta Coding Screen (CodeSignal)",
            desc: "Speed-focused algorithmic screen: 4 problems in 70 minutes (Arrays, Trees, Strings, Matrix BFS).",
            duration: "70 Mins",
            focusArea: "Implementation Speed & Correctness",
            tags: ["CodeSignal OA", "Zero Bugs", "Speed Optimization"]
          },
          {
            round: "ROUND 02",
            title: "Technical Interview 1: Tree & Graph Traversal",
            desc: "Solve 2 distinct medium problems in 45 minutes: Topological sort, Tree LCA, and BFS shortest paths.",
            duration: "45 Mins",
            focusArea: "Two Problems in 45 Mins",
            tags: ["High Velocity", "Live Code Run", "Big-O Precision"]
          },
          {
            round: "ROUND 03",
            title: "Technical Interview 2: DP & String Matching",
            desc: "Dynamic programming on sequences, Trie search prefix, and interval merging.",
            duration: "45 Mins",
            focusArea: "Complex Logic & AST Quality",
            tags: ["Clean Code AST", "Memory Complexity", "Zero Syntax Errors"]
          },
          {
            round: "ROUND 04",
            title: "Meta Behavioral (Jedi Screen)",
            desc: "Meta's core values: 'Move Fast', 'Be Bold', resolving technical disagreements, and rapid self-directed learning.",
            duration: "45 Mins",
            focusArea: "Jedi Behavioral Framework",
            tags: ["Move Fast", "High Impact", "Direct Communication"]
          }
        ]
      },
      sde1: {
        roleTitle: "Software Engineer - Product / Systems (E3 / E4)",
        level: "E3 / E4 Engineer",
        rounds: [
          {
            round: "ROUND 01",
            title: "Proctored Speed Algorithm Screen",
            desc: "String manipulation, custom priority queues, and graph cycles under strict 70-minute cutoff.",
            duration: "70 Mins",
            focusArea: "Bug-Free Implementation",
            tags: ["Proctored OA", "Speed Metric", "Corner Case Tests"]
          },
          {
            round: "ROUND 02",
            title: "Ninja Coding Round 1",
            desc: "Two LeetCode Hard problems back-to-back: Monotonic stacks and bidirectional search.",
            duration: "45 Mins",
            focusArea: "Sub-20 Min Problem Velocity",
            tags: ["Live Voice Viva", "Sub-Millisecond Runtime", "Zero Stalling"]
          },
          {
            round: "ROUND 03",
            title: "Ninja Coding Round 2 & Architecture",
            desc: "Advanced segment tree queries and state synchronization with live AI interviewer interrupts.",
            duration: "45 Mins",
            focusArea: "AST Code Inspection",
            tags: ["AST Quality", "Memory Leaks", "Live Oral Defense"]
          },
          {
            round: "ROUND 04",
            title: "Systems Product Design & Jedi",
            desc: "Design Instagram Newsfeed, WhatsApp Live Location, or Messenger end-to-end encryption pipeline.",
            duration: "60 Mins",
            focusArea: "Product Architecture & Meta Values",
            tags: ["Move Fast", "Edge Caching", "Behavioral Jedi"]
          }
        ]
      }
    }
  }
};

import { EXTRA_COMPANY_PROFILES } from "./indianCompanies";

// Generic Fallback generator for remaining 90+ companies
export function getCompanyTrackData(companySlug: string): CompanyTrackData {
  const slug = companySlug.toLowerCase();
  const profile = COMPANY_PROFILES[slug] || EXTRA_COMPANY_PROFILES[slug];
  const formattedName = companySlug
    .split("-")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  if (profile) {
    return {
      companyName: profile.companyName || formattedName,
      companySlug: companySlug,
      brandColor: profile.brandColor || "#0F172A",
      overview: profile.overview || `${formattedName}'s recruitment loop evaluates algorithmic agility, systems thinking, and leadership readiness.`,
      recruiterNotes: profile.recruiterNotes || "Ensure optimal time complexity on hidden test cases and articulate architectural trade-offs clearly.",
      roles: profile.roles || generateDefaultRoles(formattedName)
    };
  }

  // Fallback for companies like Netflix, Uber, Stripe, Goldman Sachs, etc.
  return {
    companyName: formattedName,
    companySlug: companySlug,
    brandColor: "#0F172A",
    overview: `${formattedName} enforces rigorous technical screens focused on low-latency data structures, production system design, and cultural ownership.`,
    recruiterNotes: "Automated proctoring monitors all tab focus events. The oral cross-examination will challenge all naive assumptions.",
    roles: generateDefaultRoles(formattedName)
  };
}

function generateDefaultRoles(companyName: string): Record<string, RoleConfig> {
  return {
    intern: {
      roleTitle: `${companyName} Software Engineering Intern`,
      level: "Intern / Co-Op",
      rounds: [
        {
          round: "ROUND 01",
          title: "Timed Algorithmic Screen",
          desc: "Proctored HackerRank/CodeSignal test with 2 LeetCode Medium challenges on Arrays/Trees.",
          duration: "75 Mins",
          focusArea: "Data Structures & Time Complexity",
          tags: ["Automated Screen", "Hidden Tests", "Zero Tab Switches"]
        },
        {
          round: "ROUND 02",
          title: "Technical Coding & Big-O Viva",
          desc: "Interactive session on graphs, heaps, or dynamic programming with oral Big-O proofs.",
          duration: "45 Mins",
          focusArea: "Algorithmic Precision",
          tags: ["Live Voice Viva", "Optimal Time Complexity", "Clean Code AST"]
        },
        {
          round: "ROUND 03",
          title: "OOP & Object-Oriented Modeling",
          desc: "Modular class design, separation of concerns, and defensive exception handling.",
          duration: "45 Mins",
          focusArea: "Software Craftsmanship",
          tags: ["SOLID Principles", "Design Patterns", "AST Code Quality"]
        },
        {
          round: "ROUND 04",
          title: "Behavioral & Growth Mindset",
          desc: "Deep dive into past university or open-source projects, team conflicts, and ownership.",
          duration: "45 Mins",
          focusArea: "Culture & Teamwork",
          tags: ["STAR Framework", "Self-Reflection", "Ownership"]
        }
      ]
    },
    sde1: {
      roleTitle: `${companyName} SDE I / Associate Engineer`,
      level: "Entry-Level / L3",
      rounds: [
        {
          round: "ROUND 01",
          title: "Timed OA Crucible",
          desc: "Strictly proctored algorithmic screen with hidden edge cases and memory constraints.",
          duration: "90 Mins",
          focusArea: "DSA, String Matching, Graphs",
          tags: ["Browser Lockdown", "Memory Profiling", "Edge Case Testing"]
        },
        {
          round: "ROUND 02",
          title: "Data Structures & AST Inspection",
          desc: "Complex data structures with live interviewer oral interrupts testing auxiliary space trade-offs.",
          duration: "60 Mins",
          focusArea: "Memory Management & Big-O",
          tags: ["Live Voice Viva", "AST Sanitization", "No Heap Leaks"]
        },
        {
          round: "ROUND 03",
          title: "Low-Level Component Design (LLD)",
          desc: "Designing thread-safe in-memory caching or an extensible asynchronous job dispatcher.",
          duration: "60 Mins",
          focusArea: "Concurrency & Design Patterns",
          tags: ["Thread Safety", "Loose Coupling", "REST / gRPC Interfaces"]
        },
        {
          round: "ROUND 04",
          title: "Executive Behavioral Defense",
          desc: "Evaluating technical disagreements, cross-functional dependencies, and delivery discipline.",
          duration: "45 Mins",
          focusArea: "Executive Behavioral Assessment",
          tags: ["STAR Format", "Accountability", "Handling Ambiguity"]
        }
      ]
    },
    sde2: {
      roleTitle: `${companyName} SDE II / Senior Engineer`,
      level: "Mid-Level / L4-L5",
      rounds: [
        {
          round: "ROUND 01",
          title: "Advanced Algorithmic Gate",
          desc: "LeetCode Hard / Codeforces Div 1 algorithmic challenges under extreme time constraints.",
          duration: "90 Mins",
          focusArea: "Graph Theory, Dynamic Trees, Bitmaps",
          tags: ["Strict Proctoring", "Sub-Millisecond SLAs", "Memory Limits"]
        },
        {
          round: "ROUND 02",
          title: "Distributed Architecture & Systems",
          desc: "Live oral defense of microservice topologies, database replication lag, and sharding keys.",
          duration: "60 Mins",
          focusArea: "Distributed Systems & Consensus",
          tags: ["CAP Theorem", "Consensus Protocols", "Voice Interrogation"]
        },
        {
          round: "ROUND 03",
          title: "High-Level Distributed System Design (HLD)",
          desc: "Design a fault-tolerant multi-region event-streaming engine processing 1M events/sec.",
          duration: "60 Mins",
          focusArea: "Scalability, Fault Isolation, Partitioning",
          tags: ["Kafka / Raft", "Disaster Recovery", "Zero-Downtime Migration"]
        },
        {
          round: "ROUND 04",
          title: "Bar Raiser / Senior Cross-Exam",
          desc: "Evaluating system trade-offs, engineering mentorship, architectural stewardship, and strategic vision.",
          duration: "60 Mins",
          focusArea: "Bar Raiser Veto Evaluation",
          tags: ["Architectural Governance", "Constructive Dissent", "Executive Presence"]
        }
      ]
    }
  };
}