export type AmazonRole = "sde_intern" | "sde_1" | "sde_2" | "sde_3" | "principal";

export interface QuestionSet {
  setId: number;
  setName: string;
  problemIds: string[];
  description: string;
}

export interface AmazonRoundDefinition {
  roundId: string;
  roundNumber: number;
  title: string;
  type: string;
  durationMinutes: number;
  sets: QuestionSet[];
}

export interface AmazonRoleTrack {
  roleId: AmazonRole;
  displayName: string;
  experienceLevel: string;
  rounds: AmazonRoundDefinition[];
}

export const AMAZON_ROLES: Record<AmazonRole, AmazonRoleTrack> = {
  "sde_intern": {
    "roleId": "sde_intern",
    "displayName": "Software Development Engineer - Intern",
    "experienceLevel": "College / Entry",
    "rounds": [
      {
        "roundId": "round-1",
        "roundNumber": 1,
        "title": "Amazon Online Assessment (OA)",
        "type": "oa",
        "durationMinutes": 90,
        "sets": [
          {
            "setId": 1,
            "setName": "Practice Set 1",
            "problemIds": [
              "amz-intern-s1-q1",
                "amz-intern-s1-q2"
            ],
            "description": "Amazon Online Assessment Practice Set 1"
          },
          {
            "setId": 2,
            "setName": "Practice Set 2",
            "problemIds": [
              "amz-intern-s2-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 2"
          },
          {
            "setId": 3,
            "setName": "Practice Set 3",
            "problemIds": [
              "amz-intern-s3-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 3"
          },
          {
            "setId": 4,
            "setName": "Practice Set 4",
            "problemIds": [
              "amz-intern-s4-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 4"
          },
          {
            "setId": 5,
            "setName": "Practice Set 5",
            "problemIds": [
              "amz-intern-s5-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 5"
          },
          {
            "setId": 6,
            "setName": "Practice Set 6",
            "problemIds": [
              "amz-intern-s6-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 6"
          },
          {
            "setId": 7,
            "setName": "Practice Set 7",
            "problemIds": [
              "amz-intern-s7-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 7"
          },
          {
            "setId": 8,
            "setName": "Practice Set 8",
            "problemIds": [
              "amz-intern-s8-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 8"
          },
          {
            "setId": 9,
            "setName": "Practice Set 9",
            "problemIds": [
              "amz-intern-s9-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 9"
          },
          {
            "setId": 10,
            "setName": "Practice Set 10",
            "problemIds": [
              "amz-intern-s10-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 10"
          }
        ]
      },
      {
        "roundId": "round-2",
        "roundNumber": 2,
        "title": "Virtual Technical Interview & Core LP",
        "type": "dsa_coding",
        "durationMinutes": 60,
        "sets": [
          {
            "setId": 1,
            "setName": "Technical Loop Set 1",
            "problemIds": ["amzn-tree-max-path", "amzn-word-break"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 1"
          },
          {
            "setId": 2,
            "setName": "Technical Loop Set 2",
            "problemIds": ["amzn-word-break", "amzn-trie-autocomplete"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 2"
          },
          {
            "setId": 3,
            "setName": "Technical Loop Set 3",
            "problemIds": ["amzn-trie-autocomplete", "amzn-top-k-frequent"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 3"
          },
          {
            "setId": 4,
            "setName": "Technical Loop Set 4",
            "problemIds": ["amzn-top-k-frequent", "amzn-network-delay"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 4"
          },
          {
            "setId": 5,
            "setName": "Technical Loop Set 5",
            "problemIds": ["amzn-network-delay", "amzn-critical-connections"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 5"
          },
          {
            "setId": 6,
            "setName": "Technical Loop Set 6",
            "problemIds": ["amzn-critical-connections", "amzn-sliding-rate-limiter"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 6"
          },
          {
            "setId": 7,
            "setName": "Technical Loop Set 7",
            "problemIds": ["amzn-sliding-rate-limiter", "amzn-segment-latency-monitor"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 7"
          },
          {
            "setId": 8,
            "setName": "Technical Loop Set 8",
            "problemIds": ["amzn-segment-latency-monitor", "amzn-tree-max-path"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 8"
          },
          {
            "setId": 9,
            "setName": "Technical Loop Set 9",
            "problemIds": ["amzn-tree-max-path", "amzn-trie-autocomplete"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 9"
          },
          {
            "setId": 10,
            "setName": "Technical Loop Set 10",
            "problemIds": ["amzn-word-break", "amzn-top-k-frequent"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 10"
          }
        ]
      },
      {
        "roundId": "round-3",
        "roundNumber": 3,
        "title": "Object-Oriented Design (OOD) & Systems Extensibility",
        "type": "lld",
        "durationMinutes": 45,
        "sets": [
          {
            "setId": 1,
            "setName": "Set 1: Amazon Smart Parcel Locker System",
            "problemIds": [
              "amz-intern-r3-s1-q1"
            ],
            "description": "Multi-size locker allocation, PIN verification, and timeout reclamation"
          },
          {
            "setId": 2,
            "setName": "Set 2: In-Memory File System",
            "problemIds": [
              "amz-intern-r3-s2-q1"
            ],
            "description": "Trie-based directory traversal, file metadata, and permission models"
          },
          {
            "setId": 3,
            "setName": "Set 3: Multi-Level Parking Garage",
            "problemIds": [
              "amz-intern-r3-s3-q1"
            ],
            "description": "Spot allocation strategy, vehicle sizing, and dynamic tariff calculation"
          },
          {
            "setId": 4,
            "setName": "Set 4: E-Commerce Shopping Cart & Coupon Engine",
            "problemIds": [
              "amz-intern-r3-s4-q1"
            ],
            "description": "Discount strategy patterns, coupon stacking rules, and cart state"
          },
          {
            "setId": 5,
            "setName": "Set 5: Prime Video Licensing & Access Gate",
            "problemIds": [
              "amz-intern-r3-s5-q1"
            ],
            "description": "Device limits, DRM entitlement checking, and concurrent stream control"
          },
          {
            "setId": 6,
            "setName": "Set 6: Multi-Floor Elevator Controller",
            "problemIds": [
              "amz-intern-r3-s6-q1"
            ],
            "description": "Dispatch algorithms (SCAN/LOOK), priority handling, and load sensing"
          },
          {
            "setId": 7,
            "setName": "Set 7: Blackjack & Deck Engine",
            "problemIds": [
              "amz-intern-r3-s7-q1"
            ],
            "description": "Card dealing mechanics, dealer rules, and hand score evaluation"
          },
          {
            "setId": 8,
            "setName": "Set 8: Splitwise Debt Simplification",
            "problemIds": [
              "amz-intern-r3-s8-q1"
            ],
            "description": "Expense graph modeling and greedy debt-settlement reduction"
          },
          {
            "setId": 9,
            "setName": "Set 9: ATM Terminal State Controller",
            "problemIds": [
              "amz-intern-r3-s9-q1"
            ],
            "description": "Cash cassette distribution invariants, transaction rollback, and card capture"
          },
          {
            "setId": 10,
            "setName": "Set 10: Hotel Room Reservation Inventory",
            "problemIds": [
              "amz-intern-r3-s10-q1"
            ],
            "description": "Date range indexing, double-booking prevention, and hold expiration"
          }
        ]
      },
      {
        "roundId": "round-4",
        "roundNumber": 4,
        "title": "Amazon Bar Raiser & Core Leadership Principles",
        "type": "behavioral_bar_raiser",
        "durationMinutes": 60,
        "sets": [
          {
            "setId": 1,
            "setName": "Bar Raiser Calibration Set 1",
            "problemIds": [
              "amz-intern-r4-s1-q1",
              "amz-intern-r4-s1-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 1"
          },
          {
            "setId": 2,
            "setName": "Bar Raiser Calibration Set 2",
            "problemIds": [
              "amz-intern-r4-s2-q1",
              "amz-intern-r4-s2-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 2"
          },
          {
            "setId": 3,
            "setName": "Bar Raiser Calibration Set 3",
            "problemIds": [
              "amz-intern-r4-s3-q1",
              "amz-intern-r4-s3-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 3"
          },
          {
            "setId": 4,
            "setName": "Bar Raiser Calibration Set 4",
            "problemIds": [
              "amz-intern-r4-s4-q1",
              "amz-intern-r4-s4-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 4"
          },
          {
            "setId": 5,
            "setName": "Bar Raiser Calibration Set 5",
            "problemIds": [
              "amz-intern-r4-s5-q1",
              "amz-intern-r4-s5-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 5"
          },
          {
            "setId": 6,
            "setName": "Bar Raiser Calibration Set 6",
            "problemIds": [
              "amz-intern-r4-s6-q1",
              "amz-intern-r4-s6-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 6"
          },
          {
            "setId": 7,
            "setName": "Bar Raiser Calibration Set 7",
            "problemIds": [
              "amz-intern-r4-s7-q1",
              "amz-intern-r4-s7-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 7"
          },
          {
            "setId": 8,
            "setName": "Bar Raiser Calibration Set 8",
            "problemIds": [
              "amz-intern-r4-s8-q1",
              "amz-intern-r4-s8-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 8"
          },
          {
            "setId": 9,
            "setName": "Bar Raiser Calibration Set 9",
            "problemIds": [
              "amz-intern-r4-s9-q1",
              "amz-intern-r4-s9-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 9"
          },
          {
            "setId": 10,
            "setName": "Bar Raiser Calibration Set 10",
            "problemIds": [
              "amz-intern-r4-s10-q1",
              "amz-intern-r4-s10-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 10"
          }
        ]
      }
    ]
  },
  "sde_1": {
    "roleId": "sde_1",
    "displayName": "Software Development Engineer I (L4)",
    "experienceLevel": "0 - 2 Years",
    "rounds": [
      {
        "roundId": "round-1",
        "roundNumber": 1,
        "title": "Amazon Online Assessment (OA)",
        "type": "oa",
        "durationMinutes": 90,
        "sets": [
          {
            "setId": 1,
            "setName": "Practice Set 1",
            "problemIds": [
              "amz-sde1-s1-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 1"
          },
          {
            "setId": 2,
            "setName": "Practice Set 2",
            "problemIds": [
              "amz-sde1-s2-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 2"
          },
          {
            "setId": 3,
            "setName": "Practice Set 3",
            "problemIds": [
              "amz-sde1-s3-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 3"
          },
          {
            "setId": 4,
            "setName": "Practice Set 4",
            "problemIds": [
              "amz-sde1-s4-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 4"
          },
          {
            "setId": 5,
            "setName": "Practice Set 5",
            "problemIds": [
              "amz-sde1-s5-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 5"
          },
          {
            "setId": 6,
            "setName": "Practice Set 6",
            "problemIds": [
              "amz-sde1-s6-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 6"
          },
          {
            "setId": 7,
            "setName": "Practice Set 7",
            "problemIds": [
              "amz-sde1-s7-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 7"
          },
          {
            "setId": 8,
            "setName": "Practice Set 8",
            "problemIds": [
              "amz-sde1-s8-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 8"
          },
          {
            "setId": 9,
            "setName": "Practice Set 9",
            "problemIds": [
              "amz-sde1-s9-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 9"
          },
          {
            "setId": 10,
            "setName": "Practice Set 10",
            "problemIds": [
              "amz-sde1-s10-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 10"
          }
        ]
      },
      {
        "roundId": "round-2",
        "roundNumber": 2,
        "title": "DSA Deep Dive & Code Hygiene",
        "type": "dsa_coding",
        "durationMinutes": 60,
        "sets": [
          {
            "setId": 1,
            "setName": "Technical Loop Set 1",
            "problemIds": ["amzn-trie-autocomplete", "amzn-top-k-frequent"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 1"
          },
          {
            "setId": 2,
            "setName": "Technical Loop Set 2",
            "problemIds": ["amzn-top-k-frequent", "amzn-network-delay"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 2"
          },
          {
            "setId": 3,
            "setName": "Technical Loop Set 3",
            "problemIds": ["amzn-network-delay", "amzn-critical-connections"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 3"
          },
          {
            "setId": 4,
            "setName": "Technical Loop Set 4",
            "problemIds": ["amzn-critical-connections", "amzn-sliding-rate-limiter"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 4"
          },
          {
            "setId": 5,
            "setName": "Technical Loop Set 5",
            "problemIds": ["amzn-sliding-rate-limiter", "amzn-segment-latency-monitor"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 5"
          },
          {
            "setId": 6,
            "setName": "Technical Loop Set 6",
            "problemIds": ["amzn-segment-latency-monitor", "amzn-tree-max-path"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 6"
          },
          {
            "setId": 7,
            "setName": "Technical Loop Set 7",
            "problemIds": ["amzn-tree-max-path", "amzn-word-break"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 7"
          },
          {
            "setId": 8,
            "setName": "Technical Loop Set 8",
            "problemIds": ["amzn-word-break", "amzn-trie-autocomplete"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 8"
          },
          {
            "setId": 9,
            "setName": "Technical Loop Set 9",
            "problemIds": ["amzn-trie-autocomplete", "amzn-network-delay"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 9"
          },
          {
            "setId": 10,
            "setName": "Technical Loop Set 10",
            "problemIds": ["amzn-top-k-frequent", "amzn-critical-connections"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 10"
          }
        ]
      },
      {
        "roundId": "round-3",
        "roundNumber": 3,
        "title": "Low-Level Design (LLD) & Concurrent Architecture",
        "type": "lld",
        "durationMinutes": 60,
        "sets": [
          {
            "setId": 1,
            "setName": "Set 1: Thread-Safe In-Memory Pub-Sub Bus",
            "problemIds": [
              "amz-sde1-r3-s1-q1"
            ],
            "description": "Topic subscriptions, fan-out dispatching, and consumer backpressure"
          },
          {
            "setId": 2,
            "setName": "Set 2: High-Throughput Token Bucket Rate Limiter",
            "problemIds": [
              "amz-sde1-r3-s2-q1"
            ],
            "description": "Atomic token replenishment, burst smoothing, and multi-tenant quotas"
          },
          {
            "setId": 3,
            "setName": "Set 3: In-Memory Key-Value Store with TTL",
            "problemIds": [
              "amz-sde1-r3-s3-q1"
            ],
            "description": "Write-ahead log simulation, lazy eviction, and concurrent segment locks"
          },
          {
            "setId": 4,
            "setName": "Set 4: Task Execution DAG Engine",
            "problemIds": [
              "amz-sde1-r3-s4-q1"
            ],
            "description": "Topological worker scheduling, failure retries, and cycle detection"
          },
          {
            "setId": 5,
            "setName": "Set 5: Fulfillment Robotics Dispatcher",
            "problemIds": [
              "amz-sde1-r3-s5-q1"
            ],
            "description": "Pod transportation routing, station assignment, and traffic contention"
          },
          {
            "setId": 6,
            "setName": "Set 6: Multi-Threaded Distributed LRU Cache",
            "problemIds": [
              "amz-sde1-r3-s6-q1"
            ],
            "description": "Read-write lock partitioning, doubly-linked lists, and eviction race prevention"
          },
          {
            "setId": 7,
            "setName": "Set 7: Multi-Channel Notification Gateway",
            "problemIds": [
              "amz-sde1-r3-s7-q1"
            ],
            "description": "SMS/Email/Push adapters, circuit breakers, and rate pacing"
          },
          {
            "setId": 8,
            "setName": "Set 8: Online Code Sandbox Job Queue",
            "problemIds": [
              "amz-sde1-r3-s8-q1"
            ],
            "description": "Worker thread pooling, memory limits, and timeout isolation"
          },
          {
            "setId": 9,
            "setName": "Set 9: Idempotent Payment Webhook Processor",
            "problemIds": [
              "amz-sde1-r3-s9-q1"
            ],
            "description": "Deduplication windows, status transitions, and dead-letter queue routing"
          },
          {
            "setId": 10,
            "setName": "Set 10: Review Moderation Rule Pipeline",
            "problemIds": [
              "amz-sde1-r3-s10-q1"
            ],
            "description": "Pluggable filter chain, regex scanning, and sentiment scoring"
          }
        ]
      },
      {
        "roundId": "round-4",
        "roundNumber": 4,
        "title": "Dedicated Bar Raiser & STAR Behavioral Evaluation",
        "type": "behavioral_bar_raiser",
        "durationMinutes": 60,
        "sets": [
          {
            "setId": 1,
            "setName": "Bar Raiser Calibration Set 1",
            "problemIds": [
              "amz-sde1-r4-s1-q1",
              "amz-sde1-r4-s1-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 1"
          },
          {
            "setId": 2,
            "setName": "Bar Raiser Calibration Set 2",
            "problemIds": [
              "amz-sde1-r4-s2-q1",
              "amz-sde1-r4-s2-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 2"
          },
          {
            "setId": 3,
            "setName": "Bar Raiser Calibration Set 3",
            "problemIds": [
              "amz-sde1-r4-s3-q1",
              "amz-sde1-r4-s3-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 3"
          },
          {
            "setId": 4,
            "setName": "Bar Raiser Calibration Set 4",
            "problemIds": [
              "amz-sde1-r4-s4-q1",
              "amz-sde1-r4-s4-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 4"
          },
          {
            "setId": 5,
            "setName": "Bar Raiser Calibration Set 5",
            "problemIds": [
              "amz-sde1-r4-s5-q1",
              "amz-sde1-r4-s5-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 5"
          },
          {
            "setId": 6,
            "setName": "Bar Raiser Calibration Set 6",
            "problemIds": [
              "amz-sde1-r4-s6-q1",
              "amz-sde1-r4-s6-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 6"
          },
          {
            "setId": 7,
            "setName": "Bar Raiser Calibration Set 7",
            "problemIds": [
              "amz-sde1-r4-s7-q1",
              "amz-sde1-r4-s7-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 7"
          },
          {
            "setId": 8,
            "setName": "Bar Raiser Calibration Set 8",
            "problemIds": [
              "amz-sde1-r4-s8-q1",
              "amz-sde1-r4-s8-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 8"
          },
          {
            "setId": 9,
            "setName": "Bar Raiser Calibration Set 9",
            "problemIds": [
              "amz-sde1-r4-s9-q1",
              "amz-sde1-r4-s9-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 9"
          },
          {
            "setId": 10,
            "setName": "Bar Raiser Calibration Set 10",
            "problemIds": [
              "amz-sde1-r4-s10-q1",
              "amz-sde1-r4-s10-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 10"
          }
        ]
      }
    ]
  },
  "sde_2": {
    "roleId": "sde_2",
    "displayName": "Software Development Engineer II (L5)",
    "experienceLevel": "3 - 5 Years",
    "rounds": [
      {
        "roundId": "round-1",
        "roundNumber": 1,
        "title": "Amazon Online Assessment (OA)",
        "type": "oa",
        "durationMinutes": 90,
        "sets": [
          {
            "setId": 1,
            "setName": "Practice Set 1",
            "problemIds": [
              "amz-sde2-s1-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 1"
          },
          {
            "setId": 2,
            "setName": "Practice Set 2",
            "problemIds": [
              "amz-sde2-s2-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 2"
          },
          {
            "setId": 3,
            "setName": "Practice Set 3",
            "problemIds": [
              "amz-sde2-s3-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 3"
          },
          {
            "setId": 4,
            "setName": "Practice Set 4",
            "problemIds": [
              "amz-sde2-s4-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 4"
          },
          {
            "setId": 5,
            "setName": "Practice Set 5",
            "problemIds": [
              "amz-sde2-s5-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 5"
          },
          {
            "setId": 6,
            "setName": "Practice Set 6",
            "problemIds": [
              "amz-sde2-s6-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 6"
          },
          {
            "setId": 7,
            "setName": "Practice Set 7",
            "problemIds": [
              "amz-sde2-s7-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 7"
          },
          {
            "setId": 8,
            "setName": "Practice Set 8",
            "problemIds": [
              "amz-sde2-s8-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 8"
          },
          {
            "setId": 9,
            "setName": "Practice Set 9",
            "problemIds": [
              "amz-sde2-s9-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 9"
          },
          {
            "setId": 10,
            "setName": "Practice Set 10",
            "problemIds": [
              "amz-sde2-s10-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 10"
          }
        ]
      },
      {
        "roundId": "round-2",
        "roundNumber": 2,
        "title": "Algorithmic Systems & Resiliency",
        "type": "dsa_coding",
        "durationMinutes": 60,
        "sets": [
          {
            "setId": 1,
            "setName": "Technical Loop Set 1",
            "problemIds": ["amzn-network-delay", "amzn-critical-connections"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 1"
          },
          {
            "setId": 2,
            "setName": "Technical Loop Set 2",
            "problemIds": ["amzn-critical-connections", "amzn-sliding-rate-limiter"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 2"
          },
          {
            "setId": 3,
            "setName": "Technical Loop Set 3",
            "problemIds": ["amzn-sliding-rate-limiter", "amzn-segment-latency-monitor"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 3"
          },
          {
            "setId": 4,
            "setName": "Technical Loop Set 4",
            "problemIds": ["amzn-segment-latency-monitor", "amzn-tree-max-path"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 4"
          },
          {
            "setId": 5,
            "setName": "Technical Loop Set 5",
            "problemIds": ["amzn-tree-max-path", "amzn-word-break"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 5"
          },
          {
            "setId": 6,
            "setName": "Technical Loop Set 6",
            "problemIds": ["amzn-word-break", "amzn-trie-autocomplete"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 6"
          },
          {
            "setId": 7,
            "setName": "Technical Loop Set 7",
            "problemIds": ["amzn-trie-autocomplete", "amzn-top-k-frequent"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 7"
          },
          {
            "setId": 8,
            "setName": "Technical Loop Set 8",
            "problemIds": ["amzn-top-k-frequent", "amzn-network-delay"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 8"
          },
          {
            "setId": 9,
            "setName": "Technical Loop Set 9",
            "problemIds": ["amzn-network-delay", "amzn-sliding-rate-limiter"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 9"
          },
          {
            "setId": 10,
            "setName": "Technical Loop Set 10",
            "problemIds": ["amzn-critical-connections", "amzn-segment-latency-monitor"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 10"
          }
        ]
      },
      {
        "roundId": "round-3",
        "roundNumber": 3,
        "title": "High-Level Distributed System Design (HLD)",
        "type": "hld",
        "durationMinutes": 60,
        "sets": [
          {
            "setId": 1,
            "setName": "Set 1: Planetary URL Shortener (TinyURL)",
            "problemIds": [
              "amz-sde2-r3-s1-q1"
            ],
            "description": "10B URLs, 100k writes/sec, base62 encoding, and cache tiering"
          },
          {
            "setId": 2,
            "setName": "Set 2: Flash-Sale Inventory Reservation Engine",
            "problemIds": [
              "amz-sde2-r3-s2-q1"
            ],
            "description": "Zero overselling under high concurrency, Redis Lua scripts, and DB locks"
          },
          {
            "setId": 3,
            "setName": "Set 3: Distributed Web Crawler",
            "problemIds": [
              "amz-sde2-r3-s3-q1"
            ],
            "description": "Frontier priority queues, robots.txt caching, and content deduplication"
          },
          {
            "setId": 4,
            "setName": "Set 4: Real-Time Driver-Rider Geospatial Matcher",
            "problemIds": [
              "amz-sde2-r3-s4-q1"
            ],
            "description": "QuadTree / H3 cell spatial indexing, WebSocket updates, and dispatch locks"
          },
          {
            "setId": 5,
            "setName": "Set 5: Video Streaming & Chunk Transcoding Platform",
            "problemIds": [
              "amz-sde2-r3-s5-q1"
            ],
            "description": "S3 storage, HLS segmented transcoding, and CloudFront edge delivery"
          },
          {
            "setId": 6,
            "setName": "Set 6: Distributed Chat & Messaging Cluster",
            "problemIds": [
              "amz-sde2-r3-s6-q1"
            ],
            "description": "WebSocket gateways, channel partitioning, and message ordering"
          },
          {
            "setId": 7,
            "setName": "Set 7: High-Volume Telemetry Ingestion Platform",
            "problemIds": [
              "amz-sde2-r3-s7-q1"
            ],
            "description": "Time-series logging, multi-region Kafka ingestion, and Cassandra aggregation"
          },
          {
            "setId": 8,
            "setName": "Set 8: Amazon S3 Blob Storage Architecture",
            "problemIds": [
              "amz-sde2-r3-s8-q1"
            ],
            "description": "Chunk placement, metadata stores, erasure coding, and garbage collection"
          },
          {
            "setId": 9,
            "setName": "Set 9: Global Search Autocomplete System",
            "problemIds": [
              "amz-sde2-r3-s9-q1"
            ],
            "description": "Trie sharding, frequent query caching, and async log aggregation"
          },
          {
            "setId": 10,
            "setName": "Set 10: E-Commerce Order Tracking Event Pipeline",
            "problemIds": [
              "amz-sde2-r3-s10-q1"
            ],
            "description": "State machine transitions, Kafka change-data capture, and real-time alerts"
          }
        ]
      },
      {
        "roundId": "round-4",
        "roundNumber": 4,
        "title": "Senior Bar Raiser: Ownership, Scaling & High Standards",
        "type": "behavioral_bar_raiser",
        "durationMinutes": 60,
        "sets": [
          {
            "setId": 1,
            "setName": "Bar Raiser Calibration Set 1",
            "problemIds": [
              "amz-sde2-r4-s1-q1",
              "amz-sde2-r4-s1-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 1"
          },
          {
            "setId": 2,
            "setName": "Bar Raiser Calibration Set 2",
            "problemIds": [
              "amz-sde2-r4-s2-q1",
              "amz-sde2-r4-s2-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 2"
          },
          {
            "setId": 3,
            "setName": "Bar Raiser Calibration Set 3",
            "problemIds": [
              "amz-sde2-r4-s3-q1",
              "amz-sde2-r4-s3-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 3"
          },
          {
            "setId": 4,
            "setName": "Bar Raiser Calibration Set 4",
            "problemIds": [
              "amz-sde2-r4-s4-q1",
              "amz-sde2-r4-s4-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 4"
          },
          {
            "setId": 5,
            "setName": "Bar Raiser Calibration Set 5",
            "problemIds": [
              "amz-sde2-r4-s5-q1",
              "amz-sde2-r4-s5-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 5"
          },
          {
            "setId": 6,
            "setName": "Bar Raiser Calibration Set 6",
            "problemIds": [
              "amz-sde2-r4-s6-q1",
              "amz-sde2-r4-s6-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 6"
          },
          {
            "setId": 7,
            "setName": "Bar Raiser Calibration Set 7",
            "problemIds": [
              "amz-sde2-r4-s7-q1",
              "amz-sde2-r4-s7-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 7"
          },
          {
            "setId": 8,
            "setName": "Bar Raiser Calibration Set 8",
            "problemIds": [
              "amz-sde2-r4-s8-q1",
              "amz-sde2-r4-s8-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 8"
          },
          {
            "setId": 9,
            "setName": "Bar Raiser Calibration Set 9",
            "problemIds": [
              "amz-sde2-r4-s9-q1",
              "amz-sde2-r4-s9-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 9"
          },
          {
            "setId": 10,
            "setName": "Bar Raiser Calibration Set 10",
            "problemIds": [
              "amz-sde2-r4-s10-q1",
              "amz-sde2-r4-s10-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 10"
          }
        ]
      }
    ]
  },
  "sde_3": {
    "roleId": "sde_3",
    "displayName": "Software Development Engineer III (L6)",
    "experienceLevel": "6 - 10 Years",
    "rounds": [
      {
        "roundId": "round-1",
        "roundNumber": 1,
        "title": "Amazon Online Assessment (OA)",
        "type": "oa",
        "durationMinutes": 90,
        "sets": [
          {
            "setId": 1,
            "setName": "Practice Set 1",
            "problemIds": [
              "amz-sde3-s1-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 1"
          },
          {
            "setId": 2,
            "setName": "Practice Set 2",
            "problemIds": [
              "amz-sde3-s2-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 2"
          },
          {
            "setId": 3,
            "setName": "Practice Set 3",
            "problemIds": [
              "amz-sde3-s3-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 3"
          },
          {
            "setId": 4,
            "setName": "Practice Set 4",
            "problemIds": [
              "amz-sde3-s4-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 4"
          },
          {
            "setId": 5,
            "setName": "Practice Set 5",
            "problemIds": [
              "amz-sde3-s5-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 5"
          },
          {
            "setId": 6,
            "setName": "Practice Set 6",
            "problemIds": [
              "amz-sde3-s6-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 6"
          },
          {
            "setId": 7,
            "setName": "Practice Set 7",
            "problemIds": [
              "amz-sde3-s7-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 7"
          },
          {
            "setId": 8,
            "setName": "Practice Set 8",
            "problemIds": [
              "amz-sde3-s8-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 8"
          },
          {
            "setId": 9,
            "setName": "Practice Set 9",
            "problemIds": [
              "amz-sde3-s9-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 9"
          },
          {
            "setId": 10,
            "setName": "Practice Set 10",
            "problemIds": [
              "amz-sde3-s10-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 10"
          }
        ]
      },
      {
        "roundId": "round-2",
        "roundNumber": 2,
        "title": "Systems Concurrency & Resilient Architecture",
        "type": "dsa_coding",
        "durationMinutes": 60,
        "sets": [
          {
            "setId": 1,
            "setName": "Technical Loop Set 1",
            "problemIds": ["amzn-sliding-rate-limiter", "amzn-segment-latency-monitor"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 1"
          },
          {
            "setId": 2,
            "setName": "Technical Loop Set 2",
            "problemIds": ["amzn-segment-latency-monitor", "amzn-tree-max-path"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 2"
          },
          {
            "setId": 3,
            "setName": "Technical Loop Set 3",
            "problemIds": ["amzn-tree-max-path", "amzn-word-break"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 3"
          },
          {
            "setId": 4,
            "setName": "Technical Loop Set 4",
            "problemIds": ["amzn-word-break", "amzn-trie-autocomplete"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 4"
          },
          {
            "setId": 5,
            "setName": "Technical Loop Set 5",
            "problemIds": ["amzn-trie-autocomplete", "amzn-top-k-frequent"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 5"
          },
          {
            "setId": 6,
            "setName": "Technical Loop Set 6",
            "problemIds": ["amzn-top-k-frequent", "amzn-network-delay"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 6"
          },
          {
            "setId": 7,
            "setName": "Technical Loop Set 7",
            "problemIds": ["amzn-network-delay", "amzn-critical-connections"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 7"
          },
          {
            "setId": 8,
            "setName": "Technical Loop Set 8",
            "problemIds": ["amzn-critical-connections", "amzn-sliding-rate-limiter"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 8"
          },
          {
            "setId": 9,
            "setName": "Technical Loop Set 9",
            "problemIds": ["amzn-sliding-rate-limiter", "amzn-tree-max-path"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 9"
          },
          {
            "setId": 10,
            "setName": "Technical Loop Set 10",
            "problemIds": ["amzn-segment-latency-monitor", "amzn-word-break"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 10"
          }
        ]
      },
      {
        "roundId": "round-3",
        "roundNumber": 3,
        "title": "Resilient Systems & Distributed Consensus",
        "type": "hld",
        "durationMinutes": 60,
        "sets": [
          {
            "setId": 1,
            "setName": "Set 1: Cross-Region Distributed Transaction Engine",
            "problemIds": [
              "amz-sde3-r3-s1-q1"
            ],
            "description": "Two-Phase Commit vs Saga orchestrators with compensation rollback"
          },
          {
            "setId": 2,
            "setName": "Set 2: High-Throughput Distributed Commit Log",
            "problemIds": [
              "amz-sde3-r3-s2-q1"
            ],
            "description": "Zero-copy socket transfer, append-only disk segments, and replica ISRs"
          },
          {
            "setId": 3,
            "setName": "Set 3: Multi-Region Distributed Key-Value Store",
            "problemIds": [
              "amz-sde3-r3-s3-q1"
            ],
            "description": "Tunable quorum consistency (W+R>N), anti-entropy, and vector clocks"
          },
          {
            "setId": 4,
            "setName": "Set 4: Disaster Recovery Active-Active Orchestrator",
            "problemIds": [
              "amz-sde3-r3-s4-q1"
            ],
            "description": "Split-brain mitigation, DNS failover, and asynchronous cross-region sync"
          },
          {
            "setId": 5,
            "setName": "Set 5: Planetary Financial Clearing & Double-Entry Ledger",
            "problemIds": [
              "amz-sde3-r3-s5-q1"
            ],
            "description": "Strict serializability, zero data loss, and cryptographic auditability"
          },
          {
            "setId": 6,
            "setName": "Set 6: Massive Distributed Graph Processing Engine",
            "problemIds": [
              "amz-sde3-r3-s6-q1"
            ],
            "description": "Pregel bulk synchronous parallel model for fraud detection graphs"
          },
          {
            "setId": 7,
            "setName": "Set 7: Real-Time Ad-Click Fraud Detection Engine",
            "problemIds": [
              "amz-sde3-r3-s7-q1"
            ],
            "description": "5 million events/sec stream processing, sliding window state, and Bloom filters"
          },
          {
            "setId": 8,
            "setName": "Set 8: Planetary Deployment Blast-Radius Controller",
            "problemIds": [
              "amz-sde3-r3-s8-q1"
            ],
            "description": "Progressive cell-based rollout, anomaly rollback triggers, and traffic shedding"
          },
          {
            "setId": 9,
            "setName": "Set 9: Edge Serverless Function Execution Runtime",
            "problemIds": [
              "amz-sde3-r3-s9-q1"
            ],
            "description": "Firecracker microVM isolation, sub-10ms warm starts, and memory sandboxes"
          },
          {
            "setId": 10,
            "setName": "Set 10: Distributed Leader Lease & Lock Manager",
            "problemIds": [
              "amz-sde3-r3-s10-q1"
            ],
            "description": "Raft consensus, fencing tokens, and clock drift resilience"
          }
        ]
      },
      {
        "roundId": "round-4",
        "roundNumber": 4,
        "title": "Principal Bar Raiser: Strategic Leadership & High Stakes",
        "type": "behavioral_bar_raiser",
        "durationMinutes": 60,
        "sets": [
          {
            "setId": 1,
            "setName": "Bar Raiser Calibration Set 1",
            "problemIds": [
              "amz-sde3-r4-s1-q1",
              "amz-sde3-r4-s1-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 1"
          },
          {
            "setId": 2,
            "setName": "Bar Raiser Calibration Set 2",
            "problemIds": [
              "amz-sde3-r4-s2-q1",
              "amz-sde3-r4-s2-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 2"
          },
          {
            "setId": 3,
            "setName": "Bar Raiser Calibration Set 3",
            "problemIds": [
              "amz-sde3-r4-s3-q1",
              "amz-sde3-r4-s3-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 3"
          },
          {
            "setId": 4,
            "setName": "Bar Raiser Calibration Set 4",
            "problemIds": [
              "amz-sde3-r4-s4-q1",
              "amz-sde3-r4-s4-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 4"
          },
          {
            "setId": 5,
            "setName": "Bar Raiser Calibration Set 5",
            "problemIds": [
              "amz-sde3-r4-s5-q1",
              "amz-sde3-r4-s5-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 5"
          },
          {
            "setId": 6,
            "setName": "Bar Raiser Calibration Set 6",
            "problemIds": [
              "amz-sde3-r4-s6-q1",
              "amz-sde3-r4-s6-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 6"
          },
          {
            "setId": 7,
            "setName": "Bar Raiser Calibration Set 7",
            "problemIds": [
              "amz-sde3-r4-s7-q1",
              "amz-sde3-r4-s7-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 7"
          },
          {
            "setId": 8,
            "setName": "Bar Raiser Calibration Set 8",
            "problemIds": [
              "amz-sde3-r4-s8-q1",
              "amz-sde3-r4-s8-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 8"
          },
          {
            "setId": 9,
            "setName": "Bar Raiser Calibration Set 9",
            "problemIds": [
              "amz-sde3-r4-s9-q1",
              "amz-sde3-r4-s9-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 9"
          },
          {
            "setId": 10,
            "setName": "Bar Raiser Calibration Set 10",
            "problemIds": [
              "amz-sde3-r4-s10-q1",
              "amz-sde3-r4-s10-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 10"
          }
        ]
      }
    ]
  },
  "principal": {
    "roleId": "principal",
    "displayName": "Principal Engineer (L7)",
    "experienceLevel": "10+ Years",
    "rounds": [
      {
        "roundId": "round-1",
        "roundNumber": 1,
        "title": "Amazon Online Assessment (OA)",
        "type": "oa",
        "durationMinutes": 90,
        "sets": [
          {
            "setId": 1,
            "setName": "Practice Set 1",
            "problemIds": [
              "amz-principal-s1-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 1"
          },
          {
            "setId": 2,
            "setName": "Practice Set 2",
            "problemIds": [
              "amz-principal-s2-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 2"
          },
          {
            "setId": 3,
            "setName": "Practice Set 3",
            "problemIds": [
              "amz-principal-s3-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 3"
          },
          {
            "setId": 4,
            "setName": "Practice Set 4",
            "problemIds": [
              "amz-principal-s4-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 4"
          },
          {
            "setId": 5,
            "setName": "Practice Set 5",
            "problemIds": [
              "amz-principal-s5-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 5"
          },
          {
            "setId": 6,
            "setName": "Practice Set 6",
            "problemIds": [
              "amz-principal-s6-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 6"
          },
          {
            "setId": 7,
            "setName": "Practice Set 7",
            "problemIds": [
              "amz-principal-s7-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 7"
          },
          {
            "setId": 8,
            "setName": "Practice Set 8",
            "problemIds": [
              "amz-principal-s8-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 8"
          },
          {
            "setId": 9,
            "setName": "Practice Set 9",
            "problemIds": [
              "amz-principal-s9-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 9"
          },
          {
            "setId": 10,
            "setName": "Practice Set 10",
            "problemIds": [
              "amz-principal-s10-q1"
            ],
            "description": "Amazon Online Assessment Practice Set 10"
          }
        ]
      },
      {
        "roundId": "round-2",
        "roundNumber": 2,
        "title": "Planetary-Scale Infrastructure & Architecture",
        "type": "dsa_coding",
        "durationMinutes": 60,
        "sets": [
          {
            "setId": 1,
            "setName": "Technical Loop Set 1",
            "problemIds": ["amzn-sliding-rate-limiter", "amzn-segment-latency-monitor"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 1"
          },
          {
            "setId": 2,
            "setName": "Technical Loop Set 2",
            "problemIds": ["amzn-segment-latency-monitor", "amzn-critical-connections"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 2"
          },
          {
            "setId": 3,
            "setName": "Technical Loop Set 3",
            "problemIds": ["amzn-critical-connections", "amzn-network-delay"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 3"
          },
          {
            "setId": 4,
            "setName": "Technical Loop Set 4",
            "problemIds": ["amzn-network-delay", "amzn-top-k-frequent"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 4"
          },
          {
            "setId": 5,
            "setName": "Technical Loop Set 5",
            "problemIds": ["amzn-top-k-frequent", "amzn-trie-autocomplete"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 5"
          },
          {
            "setId": 6,
            "setName": "Technical Loop Set 6",
            "problemIds": ["amzn-trie-autocomplete", "amzn-word-break"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 6"
          },
          {
            "setId": 7,
            "setName": "Technical Loop Set 7",
            "problemIds": ["amzn-word-break", "amzn-tree-max-path"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 7"
          },
          {
            "setId": 8,
            "setName": "Technical Loop Set 8",
            "problemIds": ["amzn-tree-max-path", "amzn-sliding-rate-limiter"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 8"
          },
          {
            "setId": 9,
            "setName": "Technical Loop Set 9",
            "problemIds": ["amzn-sliding-rate-limiter", "amzn-network-delay"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 9"
          },
          {
            "setId": 10,
            "setName": "Technical Loop Set 10",
            "problemIds": ["amzn-segment-latency-monitor", "amzn-critical-connections"],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 10"
          }
        ]
      },
      {
        "roundId": "round-3",
        "roundNumber": 3,
        "title": "Planetary Enterprise Architecture & Tenancy",
        "type": "hld",
        "durationMinutes": 75,
        "sets": [
          {
            "setId": 1,
            "setName": "Set 1: Global Multi-Tenant Retail Core Backbone",
            "problemIds": [
              "amz-principal-r3-s1-q1"
            ],
            "description": "Cell-based partitioning, multi-tenant noisy neighbor isolation, and zero-blast radius"
          },
          {
            "setId": 2,
            "setName": "Set 2: Byzantine-Resilient Global Cloud Control Plane",
            "problemIds": [
              "amz-principal-r3-s2-q1"
            ],
            "description": "Decentralized consensus, automated self-healing, and partition survivability"
          },
          {
            "setId": 3,
            "setName": "Set 3: Planetary Zero-Trust Cryptographic Data Fabric",
            "problemIds": [
              "amz-principal-r3-s3-q1"
            ],
            "description": "Cryptographic enclave data sharing, homomorphic verification, and tenancy governance"
          },
          {
            "setId": 4,
            "setName": "Set 4: Autonomous Global Backbone Traffic Optimizer",
            "problemIds": [
              "amz-principal-r3-s4-q1"
            ],
            "description": "BGP edge route steering, real-time fiber congestion avoidance, and bandwidth slicing"
          },
          {
            "setId": 5,
            "setName": "Set 5: Planetary Autonomous Fleet Sensor Mesh",
            "problemIds": [
              "amz-principal-r3-s5-q1"
            ],
            "description": "Edge vehicle telemetry compaction, eventual consistency synchronization, and geofence events"
          },
          {
            "setId": 6,
            "setName": "Set 6: Enterprise-Wide Privilege Verification Fabric",
            "problemIds": [
              "amz-principal-r3-s6-q1"
            ],
            "description": "Global policy evaluation under 2ms, distributed revocation lists, and ABAC proofs"
          },
          {
            "setId": 7,
            "setName": "Set 7: Zero-Downtime Heterogeneous Cloud Migrator",
            "problemIds": [
              "amz-principal-r3-s7-q1"
            ],
            "description": "Dual-write validation, real-time shadow traffic diffing, and live cutover"
          },
          {
            "setId": 8,
            "setName": "Set 8: Mission-Critical Global Settlement Engine",
            "problemIds": [
              "amz-principal-r3-s8-q1"
            ],
            "description": "Handling $100B daily settlement volume with zero balance deviation guarantees"
          },
          {
            "setId": 9,
            "setName": "Set 9: AI Hyper-Cluster Distributed Training Infrastructure",
            "problemIds": [
              "amz-principal-r3-s9-q1"
            ],
            "description": "RoCE v2 network fabric, tensor parallelism orchestration, and fast-checkpoint recovery"
          },
          {
            "setId": 10,
            "setName": "Set 10: Planetary Disruption Disaster Survival Architecture",
            "problemIds": [
              "amz-principal-r3-s10-q1"
            ],
            "description": "Autonomous survival during entire cloud provider blackout and multi-continental partitions"
          }
        ]
      },
      {
        "roundId": "round-4",
        "roundNumber": 4,
        "title": "Executive Bar Raiser: Planetary Impact & Corporate Stewardship",
        "type": "behavioral_bar_raiser",
        "durationMinutes": 60,
        "sets": [
          {
            "setId": 1,
            "setName": "Bar Raiser Calibration Set 1",
            "problemIds": [
              "amz-principal-r4-s1-q1",
              "amz-principal-r4-s1-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 1"
          },
          {
            "setId": 2,
            "setName": "Bar Raiser Calibration Set 2",
            "problemIds": [
              "amz-principal-r4-s2-q1",
              "amz-principal-r4-s2-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 2"
          },
          {
            "setId": 3,
            "setName": "Bar Raiser Calibration Set 3",
            "problemIds": [
              "amz-principal-r4-s3-q1",
              "amz-principal-r4-s3-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 3"
          },
          {
            "setId": 4,
            "setName": "Bar Raiser Calibration Set 4",
            "problemIds": [
              "amz-principal-r4-s4-q1",
              "amz-principal-r4-s4-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 4"
          },
          {
            "setId": 5,
            "setName": "Bar Raiser Calibration Set 5",
            "problemIds": [
              "amz-principal-r4-s5-q1",
              "amz-principal-r4-s5-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 5"
          },
          {
            "setId": 6,
            "setName": "Bar Raiser Calibration Set 6",
            "problemIds": [
              "amz-principal-r4-s6-q1",
              "amz-principal-r4-s6-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 6"
          },
          {
            "setId": 7,
            "setName": "Bar Raiser Calibration Set 7",
            "problemIds": [
              "amz-principal-r4-s7-q1",
              "amz-principal-r4-s7-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 7"
          },
          {
            "setId": 8,
            "setName": "Bar Raiser Calibration Set 8",
            "problemIds": [
              "amz-principal-r4-s8-q1",
              "amz-principal-r4-s8-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 8"
          },
          {
            "setId": 9,
            "setName": "Bar Raiser Calibration Set 9",
            "problemIds": [
              "amz-principal-r4-s9-q1",
              "amz-principal-r4-s9-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 9"
          },
          {
            "setId": 10,
            "setName": "Bar Raiser Calibration Set 10",
            "problemIds": [
              "amz-principal-r4-s10-q1",
              "amz-principal-r4-s10-q2"
            ],
            "description": "Authentic Amazon Round 4 Dedicated Bar Raiser Interrogation Set 10"
          }
        ]
      }
    ]
  }
};

export const AMAZON_TRACKS = AMAZON_ROLES;

export function getAmazonRoleTrack(roleId: AmazonRole): AmazonRoleTrack {
  return AMAZON_ROLES[roleId] || AMAZON_ROLES["sde_1"];
}

export function getAmazonQuestionSet(roleId: AmazonRole, roundId: string, setId: number): QuestionSet {
  const track = getAmazonRoleTrack(roleId);
  const round = track.rounds.find(r => r.roundId === roundId) || track.rounds[0];
  const targetSet = round.sets.find(s => s.setId === Number(setId));
  return targetSet || round.sets[0];
}
