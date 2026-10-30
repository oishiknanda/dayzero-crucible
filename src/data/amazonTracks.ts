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
              "amz-intern-s1-q1"
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
            "problemIds": [
              "amzn-tree-max-path"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 1"
          },
          {
            "setId": 2,
            "setName": "Technical Loop Set 2",
            "problemIds": [
              "amzn-word-break"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 2"
          },
          {
            "setId": 3,
            "setName": "Technical Loop Set 3",
            "problemIds": [
              "amzn-tree-max-path"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 3"
          },
          {
            "setId": 4,
            "setName": "Technical Loop Set 4",
            "problemIds": [
              "amzn-word-break"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 4"
          },
          {
            "setId": 5,
            "setName": "Technical Loop Set 5",
            "problemIds": [
              "amzn-tree-max-path"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 5"
          },
          {
            "setId": 6,
            "setName": "Technical Loop Set 6",
            "problemIds": [
              "amzn-word-break"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 6"
          },
          {
            "setId": 7,
            "setName": "Technical Loop Set 7",
            "problemIds": [
              "amzn-tree-max-path"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 7"
          },
          {
            "setId": 8,
            "setName": "Technical Loop Set 8",
            "problemIds": [
              "amzn-word-break"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 8"
          },
          {
            "setId": 9,
            "setName": "Technical Loop Set 9",
            "problemIds": [
              "amzn-tree-max-path"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 9"
          },
          {
            "setId": 10,
            "setName": "Technical Loop Set 10",
            "problemIds": [
              "amzn-word-break"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 10"
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
            "problemIds": [
              "amzn-trie-autocomplete"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 1"
          },
          {
            "setId": 2,
            "setName": "Technical Loop Set 2",
            "problemIds": [
              "amzn-top-k-frequent"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 2"
          },
          {
            "setId": 3,
            "setName": "Technical Loop Set 3",
            "problemIds": [
              "amzn-trie-autocomplete"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 3"
          },
          {
            "setId": 4,
            "setName": "Technical Loop Set 4",
            "problemIds": [
              "amzn-top-k-frequent"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 4"
          },
          {
            "setId": 5,
            "setName": "Technical Loop Set 5",
            "problemIds": [
              "amzn-trie-autocomplete"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 5"
          },
          {
            "setId": 6,
            "setName": "Technical Loop Set 6",
            "problemIds": [
              "amzn-top-k-frequent"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 6"
          },
          {
            "setId": 7,
            "setName": "Technical Loop Set 7",
            "problemIds": [
              "amzn-trie-autocomplete"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 7"
          },
          {
            "setId": 8,
            "setName": "Technical Loop Set 8",
            "problemIds": [
              "amzn-top-k-frequent"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 8"
          },
          {
            "setId": 9,
            "setName": "Technical Loop Set 9",
            "problemIds": [
              "amzn-trie-autocomplete"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 9"
          },
          {
            "setId": 10,
            "setName": "Technical Loop Set 10",
            "problemIds": [
              "amzn-top-k-frequent"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 10"
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
            "problemIds": [
              "amzn-network-delay"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 1"
          },
          {
            "setId": 2,
            "setName": "Technical Loop Set 2",
            "problemIds": [
              "amzn-critical-connections"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 2"
          },
          {
            "setId": 3,
            "setName": "Technical Loop Set 3",
            "problemIds": [
              "amzn-network-delay"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 3"
          },
          {
            "setId": 4,
            "setName": "Technical Loop Set 4",
            "problemIds": [
              "amzn-critical-connections"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 4"
          },
          {
            "setId": 5,
            "setName": "Technical Loop Set 5",
            "problemIds": [
              "amzn-network-delay"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 5"
          },
          {
            "setId": 6,
            "setName": "Technical Loop Set 6",
            "problemIds": [
              "amzn-critical-connections"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 6"
          },
          {
            "setId": 7,
            "setName": "Technical Loop Set 7",
            "problemIds": [
              "amzn-network-delay"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 7"
          },
          {
            "setId": 8,
            "setName": "Technical Loop Set 8",
            "problemIds": [
              "amzn-critical-connections"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 8"
          },
          {
            "setId": 9,
            "setName": "Technical Loop Set 9",
            "problemIds": [
              "amzn-network-delay"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 9"
          },
          {
            "setId": 10,
            "setName": "Technical Loop Set 10",
            "problemIds": [
              "amzn-critical-connections"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 10"
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
            "problemIds": [
              "amzn-sliding-rate-limiter"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 1"
          },
          {
            "setId": 2,
            "setName": "Technical Loop Set 2",
            "problemIds": [
              "amzn-segment-latency-monitor"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 2"
          },
          {
            "setId": 3,
            "setName": "Technical Loop Set 3",
            "problemIds": [
              "amzn-sliding-rate-limiter"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 3"
          },
          {
            "setId": 4,
            "setName": "Technical Loop Set 4",
            "problemIds": [
              "amzn-segment-latency-monitor"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 4"
          },
          {
            "setId": 5,
            "setName": "Technical Loop Set 5",
            "problemIds": [
              "amzn-sliding-rate-limiter"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 5"
          },
          {
            "setId": 6,
            "setName": "Technical Loop Set 6",
            "problemIds": [
              "amzn-segment-latency-monitor"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 6"
          },
          {
            "setId": 7,
            "setName": "Technical Loop Set 7",
            "problemIds": [
              "amzn-sliding-rate-limiter"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 7"
          },
          {
            "setId": 8,
            "setName": "Technical Loop Set 8",
            "problemIds": [
              "amzn-segment-latency-monitor"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 8"
          },
          {
            "setId": 9,
            "setName": "Technical Loop Set 9",
            "problemIds": [
              "amzn-sliding-rate-limiter"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 9"
          },
          {
            "setId": 10,
            "setName": "Technical Loop Set 10",
            "problemIds": [
              "amzn-segment-latency-monitor"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 10"
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
            "problemIds": [
              "amzn-sliding-rate-limiter"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 1"
          },
          {
            "setId": 2,
            "setName": "Technical Loop Set 2",
            "problemIds": [
              "amzn-segment-latency-monitor"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 2"
          },
          {
            "setId": 3,
            "setName": "Technical Loop Set 3",
            "problemIds": [
              "amzn-sliding-rate-limiter"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 3"
          },
          {
            "setId": 4,
            "setName": "Technical Loop Set 4",
            "problemIds": [
              "amzn-segment-latency-monitor"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 4"
          },
          {
            "setId": 5,
            "setName": "Technical Loop Set 5",
            "problemIds": [
              "amzn-sliding-rate-limiter"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 5"
          },
          {
            "setId": 6,
            "setName": "Technical Loop Set 6",
            "problemIds": [
              "amzn-segment-latency-monitor"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 6"
          },
          {
            "setId": 7,
            "setName": "Technical Loop Set 7",
            "problemIds": [
              "amzn-sliding-rate-limiter"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 7"
          },
          {
            "setId": 8,
            "setName": "Technical Loop Set 8",
            "problemIds": [
              "amzn-segment-latency-monitor"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 8"
          },
          {
            "setId": 9,
            "setName": "Technical Loop Set 9",
            "problemIds": [
              "amzn-sliding-rate-limiter"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 9"
          },
          {
            "setId": 10,
            "setName": "Technical Loop Set 10",
            "problemIds": [
              "amzn-segment-latency-monitor"
            ],
            "description": "Authentic Amazon Round 2 Technical Assessment Set 10"
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
