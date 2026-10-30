import { ProblemDefinition } from "./types";

export const AMAZON_ROUND3_PROBLEMS: Record<string, ProblemDefinition> = {
  "amz-intern-r3-s1-q1": {
    "id": "amz-intern-r3-s1-q1",
    "title": "Amazon Smart Parcel Locker System",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Object-Oriented Design",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "Object-Oriented Design",
      "Medium",
      "Set 1"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: Object-Oriented Design.",
      "You are tasked with designing: Amazon Smart Parcel Locker System. Focus areas: Locker allocation by parcel size, PIN verification, 48h timeout reclamation.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-intern-r3-s2-q1": {
    "id": "amz-intern-r3-s2-q1",
    "title": "In-Memory File System with Trie Paths",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Object-Oriented Design",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "Object-Oriented Design",
      "Medium",
      "Set 2"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: Object-Oriented Design.",
      "You are tasked with designing: In-Memory File System with Trie Paths. Focus areas: Hierarchical directory traversal, file metadata, permission models.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-intern-r3-s3-q1": {
    "id": "amz-intern-r3-s3-q1",
    "title": "Multi-Level Parking Garage Allocator",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Object-Oriented Design",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "Object-Oriented Design",
      "Medium",
      "Set 3"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: Object-Oriented Design.",
      "You are tasked with designing: Multi-Level Parking Garage Allocator. Focus areas: Vehicle sizing spots, nearest-entry allocation, dynamic hourly tariffs.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-intern-r3-s4-q1": {
    "id": "amz-intern-r3-s4-q1",
    "title": "E-Commerce Shopping Cart & Coupon Engine",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Object-Oriented Design",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "Object-Oriented Design",
      "Medium",
      "Set 4"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: Object-Oriented Design.",
      "You are tasked with designing: E-Commerce Shopping Cart & Coupon Engine. Focus areas: Strategy pattern for discounts, coupon stacking rules, persistent cart state.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-intern-r3-s5-q1": {
    "id": "amz-intern-r3-s5-q1",
    "title": "Prime Video Licensing & Access Gate",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Object-Oriented Design",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "Object-Oriented Design",
      "Medium",
      "Set 5"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: Object-Oriented Design.",
      "You are tasked with designing: Prime Video Licensing & Access Gate. Focus areas: Concurrent stream limits, DRM entitlement checks, device registration.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-intern-r3-s6-q1": {
    "id": "amz-intern-r3-s6-q1",
    "title": "Multi-Floor Elevator Controller",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Object-Oriented Design",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "Object-Oriented Design",
      "Medium",
      "Set 6"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: Object-Oriented Design.",
      "You are tasked with designing: Multi-Floor Elevator Controller. Focus areas: SCAN/LOOK dispatch optimization, energy efficiency, emergency holds.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-intern-r3-s7-q1": {
    "id": "amz-intern-r3-s7-q1",
    "title": "Deck of Cards & Blackjack Game State",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Object-Oriented Design",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "Object-Oriented Design",
      "Medium",
      "Set 7"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: Object-Oriented Design.",
      "You are tasked with designing: Deck of Cards & Blackjack Game State. Focus areas: Shoe shuffling mechanics, dealer house rules, hand score evaluation.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-intern-r3-s8-q1": {
    "id": "amz-intern-r3-s8-q1",
    "title": "Splitwise Debt Simplification Engine",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Object-Oriented Design",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "Object-Oriented Design",
      "Medium",
      "Set 8"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: Object-Oriented Design.",
      "You are tasked with designing: Splitwise Debt Simplification Engine. Focus areas: Directed expense graph, greedy debt-settlement reduction algorithm.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-intern-r3-s9-q1": {
    "id": "amz-intern-r3-s9-q1",
    "title": "ATM Banking Terminal State Controller",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Object-Oriented Design",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "Object-Oriented Design",
      "Medium",
      "Set 9"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: Object-Oriented Design.",
      "You are tasked with designing: ATM Banking Terminal State Controller. Focus areas: Cash cassette balance invariants, hardware rollback, card capture.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-intern-r3-s10-q1": {
    "id": "amz-intern-r3-s10-q1",
    "title": "Hotel Room Reservation Inventory Manager",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Object-Oriented Design",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "Object-Oriented Design",
      "Medium",
      "Set 10"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: Object-Oriented Design.",
      "You are tasked with designing: Hotel Room Reservation Inventory Manager. Focus areas: Date-range occupancy indexing, double-booking prevention, hold expiration.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-sde1-r3-s1-q1": {
    "id": "amz-sde1-r3-s1-q1",
    "title": "Thread-Safe In-Memory Pub-Sub Bus",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Low-Level Design",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "Low-Level Design",
      "Medium",
      "Set 1"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: Low-Level Design.",
      "You are tasked with designing: Thread-Safe In-Memory Pub-Sub Bus. Focus areas: Topic fan-out dispatching, thread-safe queues, consumer backpressure.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-sde1-r3-s2-q1": {
    "id": "amz-sde1-r3-s2-q1",
    "title": "High-Throughput Token Bucket Rate Limiter",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Low-Level Design",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "Low-Level Design",
      "Medium",
      "Set 2"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: Low-Level Design.",
      "You are tasked with designing: High-Throughput Token Bucket Rate Limiter. Focus areas: Atomic token refill, burst traffic smoothing, multi-tenant rate quotas.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-sde1-r3-s3-q1": {
    "id": "amz-sde1-r3-s3-q1",
    "title": "In-Memory Key-Value Store with TTL & WAL",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Low-Level Design",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "Low-Level Design",
      "Medium",
      "Set 3"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: Low-Level Design.",
      "You are tasked with designing: In-Memory Key-Value Store with TTL & WAL. Focus areas: Segmented locks, lazy eviction, crash recovery write-ahead log.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-sde1-r3-s4-q1": {
    "id": "amz-sde1-r3-s4-q1",
    "title": "Task Execution Directed Acyclic Graph (DAG) Engine",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Low-Level Design",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "Low-Level Design",
      "Medium",
      "Set 4"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: Low-Level Design.",
      "You are tasked with designing: Task Execution Directed Acyclic Graph (DAG) Engine. Focus areas: Topological worker scheduling, dependency tracking, failure retry policies.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-sde1-r3-s5-q1": {
    "id": "amz-sde1-r3-s5-q1",
    "title": "Fulfillment Center Robotics Dispatcher",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Low-Level Design",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "Low-Level Design",
      "Medium",
      "Set 5"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: Low-Level Design.",
      "You are tasked with designing: Fulfillment Center Robotics Dispatcher. Focus areas: Pod transit routing, station assignment locks, collision mitigation.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-sde1-r3-s6-q1": {
    "id": "amz-sde1-r3-s6-q1",
    "title": "Concurrent Distributed LRU Cache with Multi-Locks",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Low-Level Design",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "Low-Level Design",
      "Medium",
      "Set 6"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: Low-Level Design.",
      "You are tasked with designing: Concurrent Distributed LRU Cache with Multi-Locks. Focus areas: Partitioned read-write locks, O(1) doubly-linked list eviction races.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-sde1-r3-s7-q1": {
    "id": "amz-sde1-r3-s7-q1",
    "title": "Multi-Channel Notification Gateway with Circuit Breaker",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Low-Level Design",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "Low-Level Design",
      "Medium",
      "Set 7"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: Low-Level Design.",
      "You are tasked with designing: Multi-Channel Notification Gateway with Circuit Breaker. Focus areas: SMS/Email/Push adapters, fallback providers, rate-pacing queues.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-sde1-r3-s8-q1": {
    "id": "amz-sde1-r3-s8-q1",
    "title": "Sandboxed Online Code Judge Evaluation Queue",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Low-Level Design",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "Low-Level Design",
      "Medium",
      "Set 8"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: Low-Level Design.",
      "You are tasked with designing: Sandboxed Online Code Judge Evaluation Queue. Focus areas: Worker thread pooling, memory threshold fences, timeout enforcement.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-sde1-r3-s9-q1": {
    "id": "amz-sde1-r3-s9-q1",
    "title": "Idempotent Payment Webhook Ingestion Engine",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Low-Level Design",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "Low-Level Design",
      "Medium",
      "Set 9"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: Low-Level Design.",
      "You are tasked with designing: Idempotent Payment Webhook Ingestion Engine. Focus areas: Deduplication windows, distributed lock leases, dead-letter routing.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-sde1-r3-s10-q1": {
    "id": "amz-sde1-r3-s10-q1",
    "title": "Review Moderation Pluggable Rule Pipeline",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Low-Level Design",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "Low-Level Design",
      "Medium",
      "Set 10"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: Low-Level Design.",
      "You are tasked with designing: Review Moderation Pluggable Rule Pipeline. Focus areas: Chain of responsibility filters, regex profiling, sentiment analysis.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-sde2-r3-s1-q1": {
    "id": "amz-sde2-r3-s1-q1",
    "title": "Planetary URL Shortener (TinyURL)",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "System Design",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "System Design",
      "Hard",
      "Set 1"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: System Design.",
      "You are tasked with designing: Planetary URL Shortener (TinyURL). Focus areas: 10B URLs, 100k writes/sec, base62 encoding, Redis caching tiers.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-sde2-r3-s2-q1": {
    "id": "amz-sde2-r3-s2-q1",
    "title": "Flash-Sale Inventory Reservation Engine",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "System Design",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "System Design",
      "Hard",
      "Set 2"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: System Design.",
      "You are tasked with designing: Flash-Sale Inventory Reservation Engine. Focus areas: Zero overselling under high concurrency, Redis Lua scripts, distributed locks.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-sde2-r3-s3-q1": {
    "id": "amz-sde2-r3-s3-q1",
    "title": "Distributed Web Crawler with Politeness Fences",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "System Design",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "System Design",
      "Hard",
      "Set 3"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: System Design.",
      "You are tasked with designing: Distributed Web Crawler with Politeness Fences. Focus areas: Frontier priority queues, robots.txt caching, document deduplication.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-sde2-r3-s4-q1": {
    "id": "amz-sde2-r3-s4-q1",
    "title": "Real-Time Driver-Rider Geospatial Matcher",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "System Design",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "System Design",
      "Hard",
      "Set 4"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: System Design.",
      "You are tasked with designing: Real-Time Driver-Rider Geospatial Matcher. Focus areas: QuadTree / Uber H3 spatial index, WebSocket connection gateways, match locks.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-sde2-r3-s5-q1": {
    "id": "amz-sde2-r3-s5-q1",
    "title": "Video Transcoding & HLS Streaming Engine",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "System Design",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "System Design",
      "Hard",
      "Set 5"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: System Design.",
      "You are tasked with designing: Video Transcoding & HLS Streaming Engine. Focus areas: Chunked S3 ingestion, asynchronous worker transcoding, CloudFront CDN.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-sde2-r3-s6-q1": {
    "id": "amz-sde2-r3-s6-q1",
    "title": "Distributed Multi-Tenant Chat Service",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "System Design",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "System Design",
      "Hard",
      "Set 6"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: System Design.",
      "You are tasked with designing: Distributed Multi-Tenant Chat Service. Focus areas: WebSocket session gateways, message ordering, Cassandra message persistence.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-sde2-r3-s7-q1": {
    "id": "amz-sde2-r3-s7-q1",
    "title": "High-Volume Metrics Telemetry Ingestion Platform",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "System Design",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "System Design",
      "Hard",
      "Set 7"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: System Design.",
      "You are tasked with designing: High-Volume Metrics Telemetry Ingestion Platform. Focus areas: Time-series logging, multi-region Kafka ingestion, rollup aggregations.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-sde2-r3-s8-q1": {
    "id": "amz-sde2-r3-s8-q1",
    "title": "Amazon S3 Blob Storage Architecture",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "System Design",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "System Design",
      "Hard",
      "Set 8"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: System Design.",
      "You are tasked with designing: Amazon S3 Blob Storage Architecture. Focus areas: Chunk placement engines, metadata indexes, erasure coding, garbage collection.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-sde2-r3-s9-q1": {
    "id": "amz-sde2-r3-s9-q1",
    "title": "Global Search Autocomplete System",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "System Design",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "System Design",
      "Hard",
      "Set 9"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: System Design.",
      "You are tasked with designing: Global Search Autocomplete System. Focus areas: Trie sharding, frequent query caching, asynchronous log aggregation.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-sde2-r3-s10-q1": {
    "id": "amz-sde2-r3-s10-q1",
    "title": "E-Commerce Order Tracking Event Pipeline",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "System Design",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "System Design",
      "Hard",
      "Set 10"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: System Design.",
      "You are tasked with designing: E-Commerce Order Tracking Event Pipeline. Focus areas: Kafka change-data capture, distributed state machine, push notifications.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-sde3-r3-s1-q1": {
    "id": "amz-sde3-r3-s1-q1",
    "title": "Cross-Region Distributed Transaction Engine",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Distributed Architecture",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "Distributed Architecture",
      "Hard",
      "Set 1"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: Distributed Architecture.",
      "You are tasked with designing: Cross-Region Distributed Transaction Engine. Focus areas: Two-Phase Commit vs Saga orchestrators with compensation rollback.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-sde3-r3-s2-q1": {
    "id": "amz-sde3-r3-s2-q1",
    "title": "High-Throughput Distributed Commit Log",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Distributed Architecture",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "Distributed Architecture",
      "Hard",
      "Set 2"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: Distributed Architecture.",
      "You are tasked with designing: High-Throughput Distributed Commit Log. Focus areas: Zero-copy socket transfer, append-only disk segments, replica ISR management.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-sde3-r3-s3-q1": {
    "id": "amz-sde3-r3-s3-q1",
    "title": "Multi-Region Distributed Key-Value Store",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Distributed Architecture",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "Distributed Architecture",
      "Hard",
      "Set 3"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: Distributed Architecture.",
      "You are tasked with designing: Multi-Region Distributed Key-Value Store. Focus areas: Tunable quorum consistency (W+R>N), anti-entropy, and vector clocks.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-sde3-r3-s4-q1": {
    "id": "amz-sde3-r3-s4-q1",
    "title": "Disaster Recovery Active-Active Orchestrator",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Distributed Architecture",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "Distributed Architecture",
      "Hard",
      "Set 4"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: Distributed Architecture.",
      "You are tasked with designing: Disaster Recovery Active-Active Orchestrator. Focus areas: Split-brain mitigation, DNS failover, and asynchronous cross-region sync.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-sde3-r3-s5-q1": {
    "id": "amz-sde3-r3-s5-q1",
    "title": "Planetary Financial Clearing & Double-Entry Ledger",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Distributed Architecture",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "Distributed Architecture",
      "Hard",
      "Set 5"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: Distributed Architecture.",
      "You are tasked with designing: Planetary Financial Clearing & Double-Entry Ledger. Focus areas: Strict serializability, zero data loss, and cryptographic auditability.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-sde3-r3-s6-q1": {
    "id": "amz-sde3-r3-s6-q1",
    "title": "Massive Distributed Graph Processing Engine",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Distributed Architecture",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "Distributed Architecture",
      "Hard",
      "Set 6"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: Distributed Architecture.",
      "You are tasked with designing: Massive Distributed Graph Processing Engine. Focus areas: Pregel bulk synchronous parallel model for fraud detection graphs.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-sde3-r3-s7-q1": {
    "id": "amz-sde3-r3-s7-q1",
    "title": "Real-Time Ad-Click Fraud Detection Engine",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Distributed Architecture",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "Distributed Architecture",
      "Hard",
      "Set 7"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: Distributed Architecture.",
      "You are tasked with designing: Real-Time Ad-Click Fraud Detection Engine. Focus areas: 5 million events/sec stream processing, sliding window state, and Bloom filters.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-sde3-r3-s8-q1": {
    "id": "amz-sde3-r3-s8-q1",
    "title": "Planetary Deployment Blast-Radius Controller",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Distributed Architecture",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "Distributed Architecture",
      "Hard",
      "Set 8"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: Distributed Architecture.",
      "You are tasked with designing: Planetary Deployment Blast-Radius Controller. Focus areas: Progressive cell-based rollout, anomaly rollback triggers, and traffic shedding.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-sde3-r3-s9-q1": {
    "id": "amz-sde3-r3-s9-q1",
    "title": "Edge Serverless Function Execution Runtime",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Distributed Architecture",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "Distributed Architecture",
      "Hard",
      "Set 9"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: Distributed Architecture.",
      "You are tasked with designing: Edge Serverless Function Execution Runtime. Focus areas: Firecracker microVM isolation, sub-10ms warm starts, and memory sandboxes.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-sde3-r3-s10-q1": {
    "id": "amz-sde3-r3-s10-q1",
    "title": "Distributed Leader Lease & Lock Manager",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Distributed Architecture",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "Distributed Architecture",
      "Hard",
      "Set 10"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: Distributed Architecture.",
      "You are tasked with designing: Distributed Leader Lease & Lock Manager. Focus areas: Raft consensus, fencing tokens, and clock drift resilience.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-principal-r3-s1-q1": {
    "id": "amz-principal-r3-s1-q1",
    "title": "Global Multi-Tenant Retail Core Backbone",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Planetary Systems",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "Planetary Systems",
      "Hard",
      "Set 1"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: Planetary Systems.",
      "You are tasked with designing: Global Multi-Tenant Retail Core Backbone. Focus areas: Cell-based partitioning, multi-tenant noisy neighbor isolation, and zero-blast radius.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-principal-r3-s2-q1": {
    "id": "amz-principal-r3-s2-q1",
    "title": "Byzantine-Resilient Global Cloud Control Plane",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Planetary Systems",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "Planetary Systems",
      "Hard",
      "Set 2"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: Planetary Systems.",
      "You are tasked with designing: Byzantine-Resilient Global Cloud Control Plane. Focus areas: Decentralized consensus, automated self-healing, and partition survivability.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-principal-r3-s3-q1": {
    "id": "amz-principal-r3-s3-q1",
    "title": "Planetary Zero-Trust Cryptographic Data Fabric",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Planetary Systems",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "Planetary Systems",
      "Hard",
      "Set 3"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: Planetary Systems.",
      "You are tasked with designing: Planetary Zero-Trust Cryptographic Data Fabric. Focus areas: Cryptographic enclave data sharing, homomorphic verification, and tenancy governance.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-principal-r3-s4-q1": {
    "id": "amz-principal-r3-s4-q1",
    "title": "Autonomous Global Backbone Traffic Optimizer",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Planetary Systems",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "Planetary Systems",
      "Hard",
      "Set 4"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: Planetary Systems.",
      "You are tasked with designing: Autonomous Global Backbone Traffic Optimizer. Focus areas: BGP edge route steering, real-time fiber congestion avoidance, and bandwidth slicing.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-principal-r3-s5-q1": {
    "id": "amz-principal-r3-s5-q1",
    "title": "Planetary Autonomous Fleet Sensor Mesh",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Planetary Systems",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "Planetary Systems",
      "Hard",
      "Set 5"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: Planetary Systems.",
      "You are tasked with designing: Planetary Autonomous Fleet Sensor Mesh. Focus areas: Edge vehicle telemetry compaction, eventual consistency synchronization, and geofence events.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-principal-r3-s6-q1": {
    "id": "amz-principal-r3-s6-q1",
    "title": "Enterprise-Wide Privilege Verification Fabric",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Planetary Systems",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "Planetary Systems",
      "Hard",
      "Set 6"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: Planetary Systems.",
      "You are tasked with designing: Enterprise-Wide Privilege Verification Fabric. Focus areas: Global policy evaluation under 2ms, distributed revocation lists, and ABAC proofs.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-principal-r3-s7-q1": {
    "id": "amz-principal-r3-s7-q1",
    "title": "Zero-Downtime Heterogeneous Cloud Migrator",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Planetary Systems",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "Planetary Systems",
      "Hard",
      "Set 7"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: Planetary Systems.",
      "You are tasked with designing: Zero-Downtime Heterogeneous Cloud Migrator. Focus areas: Dual-write validation, real-time shadow traffic diffing, and live cutover.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-principal-r3-s8-q1": {
    "id": "amz-principal-r3-s8-q1",
    "title": "Mission-Critical Global Settlement Engine",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Planetary Systems",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "Planetary Systems",
      "Hard",
      "Set 8"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: Planetary Systems.",
      "You are tasked with designing: Mission-Critical Global Settlement Engine. Focus areas: Handling $100B daily settlement volume with zero balance deviation guarantees.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-principal-r3-s9-q1": {
    "id": "amz-principal-r3-s9-q1",
    "title": "AI Hyper-Cluster Distributed Training Infrastructure",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Planetary Systems",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "Planetary Systems",
      "Hard",
      "Set 9"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: Planetary Systems.",
      "You are tasked with designing: AI Hyper-Cluster Distributed Training Infrastructure. Focus areas: RoCE v2 network fabric, tensor parallelism orchestration, and fast-checkpoint recovery.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  },
  "amz-principal-r3-s10-q1": {
    "id": "amz-principal-r3-s10-q1",
    "title": "Planetary Disruption Disaster Survival Architecture",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Planetary Systems",
    "taskIndex": 1,
    "totalTasks": 1,
    "tags": [
      "Amazon Round 3",
      "Planetary Systems",
      "Hard",
      "Set 10"
    ],
    "paragraphs": [
      "Amazon Technical Loop Round 3: Planetary Systems.",
      "You are tasked with designing: Planetary Disruption Disaster Survival Architecture. Focus areas: Autonomous survival during entire cloud provider blackout and multi-continental partitions.",
      "Structure your response into concrete architectural layers: Requirements & Assumptions, Component Architecture & Data Models, Scalability & Concurrency Bottlenecks, and Fault Tolerance / Failure Modes."
    ],
    "examples": [
      {
        "input": "Architectural Specification & Requirements Walkthrough",
        "output": "Component Schemas, Thread Models, Data Flow, and Failure Blast Radii",
        "explanation": "Evaluated on architectural depth, trade-off justification, non-functional latency/throughput SLAs, and Amazon operational rigor."
      }
    ],
    "constraints": [
      "Explicitly identify functional vs non-functional requirements (throughput, p99 latency SLAs, availability).",
      "Diagram or enumerate clear interfaces, data schemas, and API contracts.",
      "Justify architectural trade-offs (e.g., consistency vs availability, synchronous vs asynchronous, push vs pull).",
      "Account for failure modes: network partitions, node crashes, data corruption, and cascading failures."
    ],
    "starterTemplates": {
      "python": "# Architectural Notes & Interface Signatures\nclass SystemArchitecture:\n    def __init__(self):\n        pass",
      "javascript": "// Architectural Notes & Interface Signatures\nclass SystemArchitecture {\n  constructor() {}\n}",
      "cpp": "// Architectural Notes & Class Interfaces\nclass SystemArchitecture {\npublic:\n    SystemArchitecture();\n};",
      "java": "// Architectural Notes & Class Interfaces\npublic class SystemArchitecture {\n    public SystemArchitecture() {}\n}"
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
      "time": "p99 < 50ms read / < 100ms write",
      "space": "Horizontally partitionable storage"
    }
  }
};
