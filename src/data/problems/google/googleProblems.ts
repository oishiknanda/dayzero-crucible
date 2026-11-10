import { ProblemDefinition } from "../../types";

export const GOOGLE_ALL_PROBLEMS: Record<string, ProblemDefinition> = {
  // --- GOOGLE ROUND 1: ONLINE CODING ASSESSMENT ---
  "goog-swe-r1-q1": {
    id: "goog-swe-r1-q1",
    title: "Google Network Shortest Path with Alternating Colors",
    difficulty: "Medium",
    company: "Google",
    category: "Graphs / BFS",
    tags: ["Graph", "BFS", "Shortest Path"],
    paragraphs: [
      "Given a directed multigraph representing Google Cloud edge nodes with n nodes numbered 0 to n - 1.",
      "Each edge is colored either red or blue. You are given an array redEdges where redEdges[i] = [ai, bi] indicates a directed red edge from ai to bi, and an array blueEdges where blueEdges[j] = [uj, vj] indicates a directed blue edge from uj to vj.",
      "Find the shortest path from node 0 to every node such that edge colors alternate on the path (i.e. red-blue-red or blue-red-blue).",
      "Return an array answer of length n where answer[x] is the length of the shortest alternating path from node 0 to node x, or -1 if no such path exists."
    ],
    examples: [
      {
        input: "n = 3, redEdges = [[0,1],[1,2]], blueEdges = []",
        output: "[0,1,-1]",
        explanation: "Node 0 has distance 0. Node 1 is reached via red edge [0,1]. Node 2 cannot be reached because [1,2] is red and we cannot traverse two consecutive red edges."
      },
      {
        input: "n = 3, redEdges = [[0,1]], blueEdges = [[2,1]]",
        output: "[0,1,-1]"
      }
    ],
    constraints: [
      "1 <= n <= 100",
      "0 <= redEdges.length, blueEdges.length <= 400",
      "redEdges[i].length == blueEdges[j].length == 2",
      "0 <= ai, bi, uj, vj < n"
    ],
    starterTemplates: {
      javascript: "/**\n * @param {number} n\n * @param {number[][]} redEdges\n * @param {number[][]} blueEdges\n * @return {number[]}\n */\nfunction shortestAlternatingPaths(n, redEdges, blueEdges) {\n  // Implement BFS tracking current node and incoming edge color\n  \n}",
      python: "class Solution:\n    def shortestAlternatingPaths(self, n: int, redEdges: list[list[int]], blueEdges: list[list[int]]) -> list[int]:\n        # Implement alternating BFS\n        pass\n",
      cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<int> shortestAlternatingPaths(int n, vector<vector<int>>& redEdges, vector<vector<int>>& blueEdges) {\n        // Implement BFS\n    }\n};"
    },
    visibleTestCases: [
      { id: "goog-r1-q1-v1", input: "3\n[[0,1],[1,2]]\n[]", expectedOutput: "[0,1,-1]" },
      { id: "goog-r1-q1-v2", input: "3\n[[0,1]]\n[[2,1]]", expectedOutput: "[0,1,-1]" }
    ],
    hiddenTestCases: [
      { id: "goog-r1-q1-h1", input: "3\n[[1,0]]\n[[2,1]]", expectedOutput: "[0,-1,-1]" },
      { id: "goog-r1-q1-h2", input: "3\n[[0,1],[0,2]]\n[[1,0]]", expectedOutput: "[0,1,1]" }
    ],
    optimalComplexity: {
      time: "O(V + E)",
      space: "O(V + E)"
    }
  },

  "goog-swe-r1-q2": {
    id: "goog-swe-r1-q2",
    title: "Google Search Longest Substring with At Most K Distinct Tokens",
    difficulty: "Medium",
    company: "Google",
    category: "Sliding Window / Hash Table",
    tags: ["Sliding Window", "Hash Table", "Two Pointers"],
    paragraphs: [
      "Given a query string s and an integer k, return the length of the longest substring of s that contains at most k distinct characters.",
      "If k is 0 or s is empty, return 0."
    ],
    examples: [
      {
        input: "s = \"eceba\", k = 2",
        output: "3",
        explanation: "The substring \"ece\" has length 3 and contains 2 distinct characters ('e' and 'c')."
      },
      {
        input: "s = \"aa\", k = 1",
        output: "2"
      }
    ],
    constraints: [
      "1 <= s.length <= 5 * 10^4",
      "0 <= k <= 50",
      "s consists of English letters and digits."
    ],
    starterTemplates: {
      javascript: "/**\n * @param {string} s\n * @param {number} k\n * @return {number}\n */\nfunction lengthOfLongestSubstringKDistinct(s, k) {\n  // Sliding window with character frequency map\n  \n}",
      python: "class Solution:\n    def lengthOfLongestSubstringKDistinct(self, s: str, k: int) -> int:\n        # Sliding window\n        pass\n",
      cpp: "#include <string>\n#include <unordered_map>\nusing namespace std;\n\nclass Solution {\npublic:\n    int lengthOfLongestSubstringKDistinct(string s, int k) {\n        // Sliding window\n    }\n};"
    },
    visibleTestCases: [
      { id: "goog-r1-q2-v1", input: "\"eceba\"\n2", expectedOutput: "3" },
      { id: "goog-r1-q2-v2", input: "\"aa\"\n1", expectedOutput: "2" }
    ],
    hiddenTestCases: [
      { id: "goog-r1-q2-h1", input: "\"a\"\n0", expectedOutput: "0" },
      { id: "goog-r1-q2-h2", input: "\"abaccc\"\n2", expectedOutput: "4" }
    ],
    optimalComplexity: {
      time: "O(N)",
      space: "O(K)"
    }
  },

  // --- GOOGLE ROUND 2: TECHNICAL VIVA 1 ---
  "goog-swe-r2-q1": {
    id: "goog-swe-r2-q1",
    title: "Google Autocomplete Trie with Frequency Ranking",
    difficulty: "Hard",
    company: "Google",
    category: "Trie / Design",
    tags: ["Trie", "Heap", "Design", "String"],
    paragraphs: [
      "Design a real-time search autocomplete system for Google Search.",
      "Given an initial set of queries and their historical search counts, construct a Trie. When a user types a prefix character by character, your system must return the top 3 historical sentences matching the prefix, sorted by frequency (highest first).",
      "If sentences tie in frequency, sort them by ASCII alphabetical order. When the end-of-query delimiter '#' is entered, the typed query is stored or its frequency count increments by 1."
    ],
    examples: [
      {
        input: "sentences = [\"i love you\",\"island\",\"ironman\"], times = [5,3,2], query prefix = \"i\"",
        output: "[\"i love you\",\"island\",\"ironman\"]",
        explanation: "All three phrases match prefix 'i', ordered by descending hit frequency (5, 3, 2)."
      }
    ],
    constraints: [
      "1 <= sentences.length <= 100",
      "1 <= sentences[i].length <= 100",
      "1 <= times[i] <= 50",
      "Sentences contain lowercase letters and spaces."
    ],
    starterTemplates: {
      javascript: "class AutocompleteSystem {\n  /**\n   * @param {string[]} sentences\n   * @param {number[]} times\n   */\n  constructor(sentences, times) {\n    // Initialize Trie\n  }\n\n  /**\n   * @param {character} c\n   * @return {string[]}\n   */\n  input(c) {\n    // Return top 3 suggestions\n  }\n}",
      python: "class AutocompleteSystem:\n    def __init__(self, sentences: list[str], times: list[int]):\n        # Initialize Trie with frequency nodes\n        pass\n\n    def input(self, c: str) -> list[str]:\n        # Return top 3 matches\n        pass\n",
      cpp: "#include <vector>\n#include <string>\nusing namespace std;\n\nclass AutocompleteSystem {\npublic:\n    AutocompleteSystem(vector<string>& sentences, vector<int>& times) {}\n    vector<string> input(char c) {}\n};"
    },
    visibleTestCases: [
      { id: "goog-r2-q1-v1", input: "[\"i love you\",\"island\",\"ironman\"]\n[5,3,2]\n\"i\"", expectedOutput: "[\"i love you\",\"island\",\"ironman\"]" }
    ],
    hiddenTestCases: [
      { id: "goog-r2-q1-h1", input: "[\"abc\",\"abb\",\"aba\"]\n[1,2,3]\n\"ab\"", expectedOutput: "[\"aba\",\"abb\",\"abc\"]" }
    ],
    optimalComplexity: {
      time: "O(P + M log 3) where P is prefix length",
      space: "O(Total characters in all sentences)"
    }
  },

  // --- GOOGLE ROUND 3: TECHNICAL VIVA 2 ---
  "goog-swe-r3-q1": {
    id: "goog-swe-r3-q1",
    title: "Google Ad Campaign Optimal Schedule (Weighted Interval Scheduling)",
    difficulty: "Hard",
    company: "Google",
    category: "Dynamic Programming / Binary Search",
    tags: ["Dynamic Programming", "Binary Search", "Sorting"],
    paragraphs: [
      "You are scheduling sponsored advertisement campaigns on Google's search result streams.",
      "There are n campaigns. The i-th campaign runs from startTime[i] to endTime[i] and produces profit[i].",
      "You can accept any subset of non-overlapping campaigns. If one campaign finishes at time t, another may begin at time t.",
      "Return the maximum total profit that can be achieved."
    ],
    examples: [
      {
        input: "startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]",
        output: "120",
        explanation: "Choose campaign 1 ([1,3], profit 50) and campaign 4 ([3,6], profit 70). Total profit = 120."
      },
      {
        input: "startTime = [1,2,3,4,6], endTime = [3,5,10,6,9], profit = [20,20,100,70,60]",
        output: "150",
        explanation: "Choose [1,3], [3,5], and [6,9] to yield 20 + 70 + 60 = 150."
      }
    ],
    constraints: [
      "1 <= startTime.length == endTime.length == profit.length <= 5 * 10^4",
      "1 <= startTime[i] < endTime[i] <= 10^9",
      "1 <= profit[i] <= 10^4"
    ],
    starterTemplates: {
      javascript: "/**\n * @param {number[]} startTime\n * @param {number[]} endTime\n * @param {number[]} profit\n * @return {number}\n */\nfunction jobScheduling(startTime, endTime, profit) {\n  // Sort by end time, then DP with binary search\n  \n}",
      python: "class Solution:\n    def jobScheduling(self, startTime: list[int], endTime: list[int], profit: list[int]) -> int:\n        # Sort and run DP + bisect\n        pass\n",
      cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int jobScheduling(vector<int>& startTime, vector<int>& endTime, vector<int>& profit) {\n        // DP + upper_bound\n    }\n};"
    },
    visibleTestCases: [
      { id: "goog-r3-q1-v1", input: "[1,2,3,3]\n[3,4,5,6]\n[50,10,40,70]", expectedOutput: "120" },
      { id: "goog-r3-q1-v2", input: "[1,2,3,4,6]\n[3,5,10,6,9]\n[20,20,100,70,60]", expectedOutput: "150" }
    ],
    hiddenTestCases: [
      { id: "goog-r3-q1-h1", input: "[1,1,1]\n[2,3,4]\n[5,6,4]", expectedOutput: "6" }
    ],
    optimalComplexity: {
      time: "O(N log N)",
      space: "O(N)"
    }
  },

  // --- GOOGLE ROUND 4: GOOGLE ARCHITECTURE & GOOGLYNESS ---
  "goog-swe-r4-q1": {
    id: "goog-swe-r4-q1",
    title: "Navigating Technical Ambiguity & Team Disagreement",
    difficulty: "Hard",
    company: "Google",
    category: "Googleyness & Leadership",
    tags: ["Googleyness", "Leadership", "Conflict Resolution", "Ambiguity"],
    paragraphs: [
      "At Google, engineers constantly work in ambiguous environments with conflicting stakeholder priorities, cross-functional dependencies, and non-consensus technical architectures.",
      "Scenario: You are leading the migration of a mission-critical internal telemetry service to a new multi-tenant streaming pipeline. Halfway through the project, a senior engineer on a partner team strongly objects to your design, arguing that an alternative architecture should be adopted instead. This objection threatens a 6-week project delay right before quarterly freeze.",
      "Explain how you would navigate this ambiguity, resolve the technical dispute objectively, achieve cross-team alignment, and maintain engineering velocity while upholding Google's core engineering values."
    ],
    examples: [
      {
        input: "Core Evaluation Pillars",
        output: "1. Thriving in Ambiguity | 2. Intellectual Humility | 3. Bias to Action | 4. Doing the Right Thing",
        explanation: "Provide a concrete response highlighting your personal actions ('I'), how you evaluated technical trade-offs objectively, and how you reached consensus without escalation friction."
      }
    ],
    constraints: [
      "Structure your verbal and written defense around concrete personal experience or structured decision principles.",
      "Address how you measure success and mitigate team friction.",
      "Demonstrate intellectual humility and willingness to adapt if presented with superior technical evidence."
    ],
    starterTemplates: {
      javascript: "// Round 4: Googleyness & Behavioral Defense\n// Outline your strategy, trade-offs, and communication plan here.\n",
      python: "# Round 4: Googleyness & Behavioral Defense\n# Outline your strategy, trade-offs, and communication plan here.\n",
      cpp: "// Round 4: Googleyness & Behavioral Defense\n// Outline your strategy, trade-offs, and communication plan here.\n"
    },
    visibleTestCases: [],
    hiddenTestCases: [],
    optimalComplexity: {
      time: "N/A (Googleyness Evaluation)",
      space: "N/A (Behavioral Loop)"
    }
  }
};
