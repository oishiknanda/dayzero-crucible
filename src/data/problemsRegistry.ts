import { GOOGLE_ALL_PROBLEMS } from './problems/google/googleProblems';
import { ACCENTURE_ALL_PROBLEMS } from './problems/accenture/accentureProblems';
import { ZOMATO_ALL_PROBLEMS } from './problems/zomato/zomatoProblems';
import { AMAZON_ROUND3_PROBLEMS } from "./amazonRound3Registry";
import { AMAZON_ROUND2_PROBLEMS } from "./amazonRound2Registry";
import { AMAZON_OA_ALL_PROBLEMS } from "./problems/amazon/oaSets";
import { ProblemDefinition } from "./types";
export type { ProblemDefinition };

const BASE_REGISTRY: Record<string, ProblemDefinition> = {
  "google-q1": {
    id: "google-q1",
    title: "Word Ladder",
    difficulty: "Hard",
    company: "Google",
    category: "Breadth-First Search / Graph Traversal",
    tags: ["BFS", "Hash Table", "String"],
    paragraphs: [
      "A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:",
      "Every adjacent pair of words differs by exactly one letter.",
      "Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.",
      "sk == endWord.",
      "Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists."
    ],
    examples: [
      {
        input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]',
        output: "5",
        explanation: 'One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> "cog", which is 5 words long.'
      }
    ],
    constraints: [
      "1 <= beginWord.length <= 10",
      "endWord.length == beginWord.length",
      "1 <= wordList.length <= 5000",
      "wordList[i].length == beginWord.length",
      "beginWord, endWord, and wordList[i] consist of lowercase English letters.",
      "beginWord != endWord",
      "All the words in wordList are unique."
    ],
    visibleTestCases: [
      {
        id: "tc-v-1",
        input: 'hit\ncog\n["hot","dot","dog","lot","log","cog"]',
        expectedOutput: "5"
      }
    ],
    hiddenTestCases: [
      {
        id: "tc-h-1",
        input: 'hit\ncog\n["hot","dot","dog","lot","log"]',
        expectedOutput: "0",
        isHidden: true
      }
    ],
    starterTemplates: {
      python: "def ladderLength(beginWord: str, endWord: str, wordList: list[str]) -> int:\n    # Enter your optimal BFS logic here\n    pass",
      javascript: "function ladderLength(beginWord, endWord, wordList) {\n    // Enter your optimal BFS logic here\n}",
      cpp: "int ladderLength(string beginWord, string endWord, vector<string>& wordList) {\n    // Enter your optimal BFS logic here\n}",
      java: "class Solution {\n    public int ladderLength(String beginWord, String endWord, List<String> wordList) {\n        // Enter your optimal BFS logic here\n        return 0;\n    }\n}"
    },
    optimalComplexity: {
      time: "O(M^2 * N)",
      space: "O(M^2 * N)"
    }
  },
  "google-q2": {
    id: "google-q2",
    title: "Course Schedule II",
    difficulty: "Medium",
    company: "Google",
    category: "Topological Sort / Directed Graph",
    tags: ["Graph", "Topological Sort", "BFS", "DFS"],
    paragraphs: [
      "There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.",
      "You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.",
      "Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array."
    ],
    examples: [
      {
        input: "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]",
        output: "[0,2,1,3]",
        explanation: "There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after course 0. So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3]."
      }
    ],
    constraints: [
      "1 <= numCourses <= 2000",
      "0 <= prerequisites.length <= numCourses * (numCourses - 1)",
      "prerequisites[i].length == 2",
      "0 <= ai, bi < numCourses",
      "ai != bi",
      "All the pairs [ai, bi] are distinct."
    ],
    visibleTestCases: [
      {
        id: "tc-v-1",
        input: "4\n[[1,0],[2,0],[3,1],[3,2]]",
        expectedOutput: "[0,1,2,3]"
      }
    ],
    hiddenTestCases: [
      {
        id: "tc-h-1",
        input: "2\n[[1,0],[0,1]]",
        expectedOutput: "[]",
        isHidden: true
      }
    ],
    starterTemplates: {
      python: "def findOrder(numCourses: int, prerequisites: list[list[int]]) -> list[int]:\n    # Enter your topological sort logic here\n    pass",
      javascript: "function findOrder(numCourses, prerequisites) {\n    // Enter your topological sort logic here\n}",
      cpp: "vector<int> findOrder(int numCourses, vector<vector<int>>& prerequisites) {\n    // Enter your topological sort logic here\n}",
      java: "class Solution {\n    public int[] findOrder(int numCourses, int[][] prerequisites) {\n        // Enter your topological sort logic here\n        return new int[0];\n    }\n}"
    },
    optimalComplexity: {
      time: "O(V + E)",
      space: "O(V + E)"
    }
  }
};

export const PROBLEMS_DATABASE: Record<string, ProblemDefinition> = {
  ...GOOGLE_ALL_PROBLEMS,
  ...ACCENTURE_ALL_PROBLEMS,
  ...ZOMATO_ALL_PROBLEMS,
  ...AMAZON_ROUND2_PROBLEMS,
  ...AMAZON_OA_ALL_PROBLEMS,
  ...BASE_REGISTRY,

  // ==========================================
  // AMAZON ROUND 02: EXCLUSIVE PROBLEM SUITE
  // ==========================================

  // SDE Intern: Set 1
  "amzn-tree-max-path": {
    id: "amzn-tree-max-path",
    title: "Binary Tree Maximum Path Sum",
    difficulty: "Hard",
    company: "Amazon",
    category: "Trees",
    tags: ["Tree", "Depth-First Search", "Dynamic Programming", "Binary Tree"],
    paragraphs: [
      "A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.",
      "The path sum of a path is the sum of the node values in the path.",
      "Given the root of a binary tree, return the maximum path sum of any non-empty path."
    ],
    examples: [
      {
        input: "root = [1,2,3]",
        output: "6",
        explanation: "The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6."
      },
      {
        input: "root = [-10,9,20,null,null,15,7]",
        output: "42",
        explanation: "The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42."
      }
    ],
    constraints: [
      "The number of nodes in the tree is in the range [1, 3 * 10^4].",
      "-1000 <= Node.val <= 1000"
    ],
    starterTemplates: {
      python: "def maxPathSum(tree_list):\n    # Write your solution here\n    pass",
      javascript: "function maxPathSum(treeList) {\n    // Write your solution here\n}",
      cpp: "#include <vector>\nusing namespace std;\n\nint maxPathSum(vector<int> treeList) {\n    return 0;\n}",
      java: "public class Solution {\n    public int maxPathSum(int[] treeList) {\n        return 0;\n    }\n}"
    },
    visibleTestCases: [
      { id: "v-1", input: "[1, 2, 3]", expectedOutput: "6", isHidden: false },
      { id: "v-2", input: "[-10, 9, 20, null, null, 15, 7]", expectedOutput: "42", isHidden: false },
      { id: "v-3", input: "[-3]", expectedOutput: "-3", isHidden: false }
    ],
    hiddenTestCases: [
      { id: "h-1", input: "[-3]", expectedOutput: "-3", isHidden: true, explanation: "Single negative root" },
      { id: "h-2", input: "[2, -1]", expectedOutput: "2", isHidden: true, explanation: "Negative branches prune" }
    ],
    optimalComplexity: {
      time: "O(N)",
      space: "O(H)"
    }
  },

  "amzn-word-break": {
    id: "amzn-word-break",
    title: "Catalog Word Break",
    difficulty: "Medium",
    company: "Amazon",
    category: "Dynamic Programming",
    tags: ["Dynamic Programming", "Trie", "Memoization", "String"],
    paragraphs: [
      "Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.",
      "Note that the same word in the dictionary may be reused multiple times in the segmentation."
    ],
    examples: [
      {
        input: "s = 'leetcode', wordDict = ['leet','code']",
        output: "true",
        explanation: "Return true because 'leetcode' can be segmented as 'leet code'."
      }
    ],
    constraints: [
      "1 <= s.length <= 300",
      "1 <= wordDict.length <= 1000",
      "1 <= wordDict[i].length <= 20"
    ],
    starterTemplates: {
      python: "def wordBreak(s, wordDict):\n    pass",
      javascript: "function wordBreak(s, wordDict) {\n}",
      cpp: "#include <string>\n#include <vector>\nusing namespace std;\n\nbool wordBreak(string s, vector<string>& wordDict) {\n    return false;\n}",
      java: "import java.util.List;\n\npublic class Solution {\n    public boolean wordBreak(String s, List<String> wordDict) {\n        return false;\n    }\n}"
    },
    visibleTestCases: [
      { id: "v-1", input: "'leetcode', ['leet', 'code']", expectedOutput: "true", isHidden: false },
      { id: "v-2", input: "'applepenapple', ['apple', 'pen']", expectedOutput: "true", isHidden: false },
      { id: "v-3", input: "'catsandog', ['cats', 'dog', 'sand', 'and', 'cat']", expectedOutput: "false", isHidden: false }
    ],
    hiddenTestCases: [
      { id: "h-1", input: "'catsandog', ['cats','dog','sand','and','cat']", expectedOutput: "false", isHidden: true }
    ],
    optimalComplexity: {
      time: "O(N^2)",
      space: "O(N)"
    }
  },

  "amzn-trie-autocomplete": {
    id: "amzn-trie-autocomplete",
    title: "Prefix Trees & Search Autocomplete",
    difficulty: "Medium",
    company: "Amazon",
    category: "Tries",
    tags: ["Trie", "Design", "String"],
    paragraphs: [
      "Design a search autocomplete system that stores queries and retrieves words matching a given prefix."
    ],
    examples: [
      {
        input: "prefix = 'app', words = ['apple', 'app', 'application']",
        output: "['app', 'apple', 'application']"
      }
    ],
    constraints: [
      "1 <= prefix.length <= 100",
      "All words consist of lowercase English letters."
    ],
    starterTemplates: {
      python: "def autocomplete(prefix, words):\n    pass",
      javascript: "function autocomplete(prefix, words) {\n}",
      cpp: "#include <vector>\n#include <string>\nusing namespace std;\n\nvector<string> autocomplete(string prefix, vector<string>& words) {\n    return {};\n}",
      java: "import java.util.List;\n\npublic class Solution {\n    public List<String> autocomplete(String prefix, List<String> words) {\n        return null;\n    }\n}"
    },
    visibleTestCases: [
      { id: "v-1", input: "'app', ['apple', 'app']", expectedOutput: "['app', 'apple']", isHidden: false },
      { id: "v-2", input: "'th', ['the', 'their', 'there', 'cat']", expectedOutput: "['the', 'their', 'there']", isHidden: false },
      { id: "v-3", input: "'z', ['apple', 'banana']", expectedOutput: "[]", isHidden: false }
    ],
    hiddenTestCases: [
      { id: "h-1", input: "'bat', ['cat', 'ball']", expectedOutput: "[]", isHidden: true }
    ],
    optimalComplexity: {
      time: "O(L)",
      space: "O(Total Characters)"
    }
  },

  "amzn-top-k-frequent": {
    id: "amzn-top-k-frequent",
    title: "Top K Frequent Elements in Streaming Logs",
    difficulty: "Medium",
    company: "Amazon",
    category: "Heaps",
    tags: ["Heap", "Hash Table", "Bucket Sort"],
    paragraphs: [
      "Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order."
    ],
    examples: [
      {
        input: "nums = [1,1,1,2,2,3], k = 2",
        output: "[1,2]"
      }
    ],
    constraints: [
      "1 <= nums.length <= 10^5",
      "k is in the range [1, the number of unique elements in the array]."
    ],
    starterTemplates: {
      python: "def topKFrequent(nums, k):\n    pass",
      javascript: "function topKFrequent(nums, k) {\n}",
      cpp: "#include <vector>\nusing namespace std;\n\nvector<int> topKFrequent(vector<int>& nums, int k) {\n    return {};\n}",
      java: "public class Solution {\n    public int[] topKFrequent(int[] nums, int k) {\n        return new int[0];\n    }\n}"
    },
    visibleTestCases: [
      { id: "v-1", input: "[1, 1, 1, 2, 2, 3], 2", expectedOutput: "[1, 2]", isHidden: false },
      { id: "v-2", input: "[3, 3, 3, 7, 7, 9], 1", expectedOutput: "[3]", isHidden: false },
      { id: "v-3", input: "[5, 5, 8, 8, 8], 1", expectedOutput: "[8]", isHidden: false }
    ],
    hiddenTestCases: [
      { id: "h-1", input: "[1], 1", expectedOutput: "[1]", isHidden: true }
    ],
    optimalComplexity: {
      time: "O(N log K)",
      space: "O(N)"
    }
  },

  "amzn-network-delay": {
    id: "amzn-network-delay",
    title: "Network Delay Time & Availability Zone Routing",
    difficulty: "Medium",
    company: "Amazon",
    category: "Graphs",
    tags: ["Graph", "Dijkstra", "Shortest Path", "Heap"],
    paragraphs: [
      "You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target.",
      "We will send a signal from a given node k. Return the minimum time it takes for all the n nodes to receive the signal. If it is impossible for all the n nodes to receive the signal, return -1."
    ],
    examples: [
      {
        input: "times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2",
        output: "2"
      }
    ],
    constraints: [
      "1 <= k <= n <= 100",
      "1 <= times.length <= 6000",
      "times[i].length == 3",
      "0 <= wi <= 100"
    ],
    starterTemplates: {
      python: "def networkDelayTime(times, n, k):\n    pass",
      javascript: "function networkDelayTime(times, n, k) {\n}",
      cpp: "#include <vector>\nusing namespace std;\n\nint networkDelayTime(vector<vector<int>>& times, int n, int k) {\n    return -1;\n}",
      java: "public class Solution {\n    public int networkDelayTime(int[][] times, int n, int k) {\n        return -1;\n    }\n}"
    },
    visibleTestCases: [
      { id: "v-1", input: "[[2,1,1],[2,3,1],[3,4,1]], 4, 2", expectedOutput: "2", isHidden: false },
      { id: "v-2", input: "[[1,2,1]], 2, 1", expectedOutput: "1", isHidden: false },
      { id: "v-3", input: "[[1,2,1]], 2, 2", expectedOutput: "-1", isHidden: false }
    ],
    hiddenTestCases: [
      { id: "h-1", input: "[[1,2,1]], 2, 2", expectedOutput: "-1", isHidden: true }
    ],
    optimalComplexity: {
      time: "O(E log V)",
      space: "O(V + E)"
    }
  },

  "amzn-critical-connections": {
    id: "amzn-critical-connections",
    title: "Critical Connections in a Network (Tarjan's Bridge)",
    difficulty: "Hard",
    company: "Amazon",
    category: "Graphs",
    tags: ["Graph", "Tarjan", "DFS", "Bridges"],
    paragraphs: [
      "There are n servers numbered from 0 to n - 1 connected by undirected server-to-server connections forming a network where connections[i] = [ai, bi] represents a connection between servers ai and bi. Any server can reach other servers directly or indirectly through the network.",
      "A critical connection is a connection that, if removed, will make some servers unable to reach some other server.",
      "Return all critical connections in the network in any order."
    ],
    examples: [
      {
        input: "n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]",
        output: "[[1,3]]"
      }
    ],
    constraints: [
      "2 <= n <= 10^5",
      "n - 1 <= connections.length <= 10^5",
      "0 <= ai, bi <= n - 1",
      "ai != bi",
      "There are no repeated connections."
    ],
    starterTemplates: {
      python: "def criticalConnections(n, connections):\n    pass",
      javascript: "function criticalConnections(n, connections) {\n}",
      cpp: "#include <vector>\nusing namespace std;\n\nvector<vector<int>> criticalConnections(int n, vector<vector<int>>& connections) {\n    return {};\n}",
      java: "import java.util.List;\n\npublic class Solution {\n    public List<List<Integer>> criticalConnections(int n, List<List<Integer>> connections) {\n        return null;\n    }\n}"
    },
    visibleTestCases: [
      { id: "v-1", input: "4, [[0,1],[1,2],[2,0],[1,3]]", expectedOutput: "[[1,3]]", isHidden: false },
      { id: "v-2", input: "2, [[0,1]]", expectedOutput: "[[0,1]]", isHidden: false },
      { id: "v-3", input: "5, [[0,1],[1,2],[2,0],[1,3],[3,4]]", expectedOutput: "[[1,3],[3,4]]", isHidden: false }
    ],
    hiddenTestCases: [
      { id: "h-1", input: "2, [[0,1]]", expectedOutput: "[[0, 1]]", isHidden: true }
    ],
    optimalComplexity: {
      time: "O(V + E)",
      space: "O(V + E)"
    }
  },

  "amzn-sliding-rate-limiter": {
    id: "amzn-sliding-rate-limiter",
    title: "High-Throughput Sliding Window Rate Limiter",
    difficulty: "Hard",
    company: "Amazon",
    category: "System Data Structures",
    tags: ["Design", "Sliding Window", "Queue", "Concurrency"],
    paragraphs: [
      "Implement a high-throughput sliding window rate limiter for AWS API Gateway.",
      "The rate limiter must allow at most maxRequests within any rolling timeWindowMillis window. Requests arrive with timestamps in strictly non-decreasing order.",
      "Return true if the request is permitted, or false if it violates the rate threshold."
    ],
    examples: [
      {
        input: "window = 100, maxRequests = 2, requests = [10, 50, 111, 120]",
        output: "[true, true, true, false]",
        explanation: "At t=111 the request at t=10 has left the window, leaving only t=50, so 111 is permitted. At t=120 the window holds 50 and 111, so a third request exceeds the limit of 2."
      }
    ],
    constraints: [
      "1 <= maxRequests <= 10^5",
      "1 <= timeWindowMillis <= 10^9",
      "1 <= requests.length <= 2 * 10^5"
    ],
    starterTemplates: {
      python: "class RateLimiter:\n    def __init__(self, maxRequests: int, timeWindowMillis: int):\n        pass\n\n    def allowRequest(self, timestamp: int) -> bool:\n        pass",
      javascript: "class RateLimiter {\n  constructor(maxRequests, timeWindowMillis) {}\n  allowRequest(timestamp) {\n    return true;\n  }\n}",
      cpp: "#include <queue>\nusing namespace std;\n\nclass RateLimiter {\npublic:\n    RateLimiter(int maxRequests, int timeWindowMillis) {}\n    bool allowRequest(int timestamp) { return true; }\n};",
      java: "public class RateLimiter {\n    public RateLimiter(int maxRequests, int timeWindowMillis) {}\n    public boolean allowRequest(int timestamp) { return true; }\n}"
    },
    visibleTestCases: [
      { id: "v-1", input: "max=2, win=100, reqs=[10, 50, 111, 120]", expectedOutput: "[true, true, true, false]", isHidden: false },
      { id: "v-2", input: "max=1, win=5, reqs=[1, 2, 6]", expectedOutput: "[true, false, true]", isHidden: false },
      { id: "v-3", input: "max=3, win=10, reqs=[10, 20, 30]", expectedOutput: "[true, true, true]", isHidden: false }
    ],
    hiddenTestCases: [
      { id: "h-1", input: "max=1, win=50, reqs=[1, 2, 51]", expectedOutput: "[true, false, true]", isHidden: true }
    ],
    optimalComplexity: {
      time: "O(1) amortized",
      space: "O(K) where K is maxRequests"
    }
  },

  "amzn-segment-latency-monitor": {
    id: "amzn-segment-latency-monitor",
    title: "Distributed Segment Tree P99 Telemetry",
    difficulty: "Hard",
    company: "Amazon",
    category: "Segment Trees",
    tags: ["Segment Tree", "Range Query", "Binary Indexed Tree"],
    paragraphs: [
      "Design an in-memory telemetry index for AWS CloudWatch metrics using a Segment Tree.",
      "The system must handle frequent single-point latency updates at metric timestamp indices and support real-time range maximum queries across any interval [L, R] in logarithmic time."
    ],
    examples: [
      {
        input: "size = 5, updates = [[0, 10], [2, 35]], query = [0, 4]",
        output: "35"
      }
    ],
    constraints: [
      "1 <= n <= 10^5",
      "Total update and query operations <= 2 * 10^5"
    ],
    starterTemplates: {
      python: "class LatencyMonitor:\n    def __init__(self, n: int):\n        pass\n    def update(self, idx: int, latency: int):\n        pass\n    def queryMax(self, left: int, right: int) -> int:\n        pass",
      javascript: "class LatencyMonitor {\n  constructor(n) {}\n  update(idx, latency) {}\n  queryMax(left, right) { return 0; }\n}",
      cpp: "#include <vector>\nusing namespace std;\nclass LatencyMonitor {\npublic:\n    LatencyMonitor(int n) {}\n    void update(int idx, int latency) {}\n    int queryMax(int left, int right) { return 0; }\n};",
      java: "public class LatencyMonitor {\n    public LatencyMonitor(int n) {}\n    public void update(int idx, int latency) {}\n    public int queryMax(int left, int right) { return 0; }\n}"
    },
    visibleTestCases: [
      { id: "v-1", input: "[100, 200, 300, 400], [[0, 2], [1, 3]]", expectedOutput: "[300, 400]", isHidden: false },
      { id: "v-2", input: "[50, 20, 80, 10, 90], [[1, 3], [0, 4]]", expectedOutput: "[80, 90]", isHidden: false },
      { id: "v-3", input: "[500], [[0, 0]]", expectedOutput: "[500]", isHidden: false }
    ],
    hiddenTestCases: [
      { id: "h-1", input: "n=3, ops=[['update',1,99],['query',0,1]]", expectedOutput: "99", isHidden: true }
    ],
    optimalComplexity: {
      time: "O(log N) per update/query",
      space: "O(N)"
    }
  },

  "amz-intern-r4-s1-q1": {
    "id": "amz-intern-r4-s1-q1",
    "title": "Customer Obsession: Balancing Feature Scope vs User Need",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Customer Obsession",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Customer Obsession.",
        "Tell me about a time you had to decide between adding more features or refining the core user experience based on direct feedback.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Customer Obsession\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-intern-r4-s1-q2": {
    "id": "amz-intern-r4-s1-q2",
    "title": "Learn and Be Curious: Mastering an Unfamiliar Framework Under Pressure",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Learn and Be Curious",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Learn and Be Curious.",
        "Describe a situation where a project required a tech stack or tool you had never used before. How did you ramp up quickly?",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Learn and Be Curious\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-intern-r4-s2-q1": {
    "id": "amz-intern-r4-s2-q1",
    "title": "Ownership: Stepping Beyond Project Requirements",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Ownership",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Ownership.",
        "Describe a scenario where you noticed an unassigned bug or neglected requirement in a group project and took responsibility for fixing it.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Ownership\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-intern-r4-s2-q2": {
    "id": "amz-intern-r4-s2-q2",
    "title": "Bias for Action: Delivering with Incomplete Specifications",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Bias for Action",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Bias for Action.",
        "Tell me about a time you had to build a prototype or complete an assignment without clear guidelines. How did you proceed?",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Bias for Action\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-intern-r4-s3-q1": {
    "id": "amz-intern-r4-s3-q1",
    "title": "Deliver Results: Overcoming Critical Project Bottlenecks",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Deliver Results",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Deliver Results.",
        "Describe a time when unexpected technical hurdles threatened your submission deadline. What did you prioritize to deliver on time?",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Deliver Results\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-intern-r4-s3-q2": {
    "id": "amz-intern-r4-s3-q2",
    "title": "Earn Trust: Handling a Technical Mistake Transparently",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Earn Trust",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Earn Trust.",
        "Give an example of a mistake you made that impacted teammates or users. How did you communicate it and remediate the issue?",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Earn Trust\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-intern-r4-s4-q1": {
    "id": "amz-intern-r4-s4-q1",
    "title": "Dive Deep: Debugging a Complex Elusive Bug",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Dive Deep",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Dive Deep.",
        "Tell me about a bug that took days to locate. How did you isolate root causes instead of applying temporary patches?",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Dive Deep\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-intern-r4-s4-q2": {
    "id": "amz-intern-r4-s4-q2",
    "title": "Invent and Simplify: Simplifying a Convoluted Workflow",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Invent and Simplify",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Invent and Simplify.",
        "Describe a time you simplified a repetitive or manual task for yourself or your peers through automation or scripting.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Invent and Simplify\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-intern-r4-s5-q1": {
    "id": "amz-intern-r4-s5-q1",
    "title": "Customer Obsession: Advocating for Accessibility and Usability",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Customer Obsession",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Customer Obsession.",
        "Tell me about a time you pushed back against a team decision to protect end-user experience or performance.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Customer Obsession\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-intern-r4-s5-q2": {
    "id": "amz-intern-r4-s5-q2",
    "title": "Ownership: Sacrificing Short-term Ease for Long-term Quality",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Ownership",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Ownership.",
        "Give an example where you took on extra refactoring work to ensure long-term code maintainability for future developers.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Ownership\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-intern-r4-s6-q1": {
    "id": "amz-intern-r4-s6-q1",
    "title": "Learn and Be Curious: Investigating Novel Engineering Approaches",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Learn and Be Curious",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Learn and Be Curious.",
        "Describe a time you explored an emerging paradigm or algorithm and convinced your team to adopt it.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Learn and Be Curious\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-intern-r4-s6-q2": {
    "id": "amz-intern-r4-s6-q2",
    "title": "Bias for Action: Deploying a Minimal Viable Solution",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Bias for Action",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Bias for Action.",
        "Tell me about a time you had to launch an MVP quickly rather than waiting for a complete, polished architecture.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Bias for Action\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-intern-r4-s7-q1": {
    "id": "amz-intern-r4-s7-q1",
    "title": "Earn Trust: Navigating Conflict in a Team Setting",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Earn Trust",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Earn Trust.",
        "Describe a disagreement with a peer or mentor regarding technical direction. How did you resolve it objectively?",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Earn Trust\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-intern-r4-s7-q2": {
    "id": "amz-intern-r4-s7-q2",
    "title": "Deliver Results: Managing Competing Coursework and Project Deadlines",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Deliver Results",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Deliver Results.",
        "Tell me about a period of high cognitive strain where you had multiple conflicting deliverables. How did you prioritize?",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Deliver Results\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-intern-r4-s8-q1": {
    "id": "amz-intern-r4-s8-q1",
    "title": "Dive Deep: Analyzing Performance Metrics Beyond Surface Level",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Dive Deep",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Dive Deep.",
        "Describe an instance where surface-level logs failed to explain an outage or slowdown, and how you tracked down the underlying cause.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Dive Deep\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-intern-r4-s8-q2": {
    "id": "amz-intern-r4-s8-q2",
    "title": "Invent and Simplify: Building a Reusable Utility Component",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Invent and Simplify",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Invent and Simplify.",
        "Give an example of an abstraction, library, or script you built that saved time for multiple project members.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Invent and Simplify\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-intern-r4-s9-q1": {
    "id": "amz-intern-r4-s9-q1",
    "title": "Customer Obsession: Handling Direct Critical Feedback",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Customer Obsession",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Customer Obsession.",
        "Tell me about a time a stakeholder or user criticized your delivered work. How did you evaluate the feedback and respond?",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Customer Obsession\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-intern-r4-s9-q2": {
    "id": "amz-intern-r4-s9-q2",
    "title": "Ownership: Filling an Unassigned Operational Gap",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Ownership",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Ownership.",
        "Describe an incident where testing, deployment, or documentation was completely missing, and you proactively stepped in to build it.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Ownership\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-intern-r4-s10-q1": {
    "id": "amz-intern-r4-s10-q1",
    "title": "Bias for Action: Making a Decision with Two-Way Doors",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Bias for Action",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Bias for Action.",
        "Describe a technical decision where waiting for more data was more dangerous than taking calculated immediate action.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Bias for Action\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-intern-r4-s10-q2": {
    "id": "amz-intern-r4-s10-q2",
    "title": "Earn Trust: Admitting Knowledge Gaps to Leadership",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Earn Trust",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Earn Trust.",
        "Tell me about a situation where an evaluator or manager asked you a question you did not know the answer to. How did you handle it?",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Earn Trust\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde1-r4-s1-q1": {
    "id": "amz-sde1-r4-s1-q1",
    "title": "Customer Obsession: Resolving High-Severity Customer Latency Spikes",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Customer Obsession",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Customer Obsession.",
        "Give an example of a production latency regression that affected end users. How did you prioritize resolution over feature work?",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Customer Obsession\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde1-r4-s1-q2": {
    "id": "amz-sde1-r4-s1-q2",
    "title": "Ownership: Refactoring Legacy Code with Zero Test Coverage",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Ownership",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Ownership.",
        "Tell me about a time you inherited an unmaintained microservice and took full ownership of modernizing its test coverage and CI/CD.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Ownership\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde1-r4-s2-q1": {
    "id": "amz-sde1-r4-s2-q1",
    "title": "Bias for Action: Mitigating a Sev-2 Outage Under Uncertainty",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Bias for Action",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Bias for Action.",
        "Describe a production incident where you had to act with incomplete telemetry. What immediate mitigations did you apply?",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Bias for Action\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde1-r4-s2-q2": {
    "id": "amz-sde1-r4-s2-q2",
    "title": "Deliver Results: Hitting a Hard Launch Date Despite Scope Creep",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Deliver Results",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Deliver Results.",
        "Tell me about a product release where new requirements were introduced late. How did you negotiate scope to meet your deadline?",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Deliver Results\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde1-r4-s3-q1": {
    "id": "amz-sde1-r4-s3-q1",
    "title": "Dive Deep: Root Cause Analysis of Intermittent Race Conditions",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Dive Deep",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Dive Deep.",
        "Describe a concurrency bug or memory leak that only manifested under peak traffic. How did you isolate the race condition?",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Dive Deep\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde1-r4-s3-q2": {
    "id": "amz-sde1-r4-s3-q2",
    "title": "Invent and Simplify: Consolidating Redundant Internal Services",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Invent and Simplify",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Invent and Simplify.",
        "Give an example of redundant logic across microservices that you refactored into a shared high-performance package.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Invent and Simplify\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde1-r4-s4-q1": {
    "id": "amz-sde1-r4-s4-q1",
    "title": "Earn Trust: Conducting Rigorous Code Reviews with Seniors",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Earn Trust",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Earn Trust.",
        "Tell me about a time you disagreed with a senior engineer during a pull request review. How did you substantiate your feedback with benchmarks?",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Earn Trust\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde1-r4-s4-q2": {
    "id": "amz-sde1-r4-s4-q2",
    "title": "Have Backbone; Disagree and Commit: Disagreeing with an Architectural Decision",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Have Backbone; Disagree and Commit",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Have Backbone; Disagree and Commit.",
        "Describe an architectural direction you strongly opposed. Once the consensus was reached, how did you commit fully to execution?",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Have Backbone; Disagree and Commit\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde1-r4-s5-q1": {
    "id": "amz-sde1-r4-s5-q1",
    "title": "Customer Obsession: Instrumenting Telemetry for Silent Customer Failures",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Customer Obsession",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Customer Obsession.",
        "Tell me about an issue that customers experienced but was not triggering system alarms. How did you discover and remediate it?",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Customer Obsession\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde1-r4-s5-q2": {
    "id": "amz-sde1-r4-s5-q2",
    "title": "Frugality: Reducing Cloud Infrastructure Compute Waste",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Frugality",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Frugality.",
        "Describe a project where you optimized queries, batch processing, or cache hit rates to measurably slash monthly AWS compute bills.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Frugality\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde1-r4-s6-q1": {
    "id": "amz-sde1-r4-s6-q1",
    "title": "Insist on the Highest Standards: Preventing Substandard Code from Shipping",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Insist on the Highest Standards",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Insist on the Highest Standards.",
        "Tell me about a time deadline pressure tempted the team to bypass integration tests. How did you defend code hygiene?",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Insist on the Highest Standards\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde1-r4-s6-q2": {
    "id": "amz-sde1-r4-s6-q2",
    "title": "Learn and Be Curious: Introducing a New Distributed Tooling Pattern",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Learn and Be Curious",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Learn and Be Curious.",
        "Describe a situation where learning an external distributed design pattern helped solve a persistent internal reliability issue.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Learn and Be Curious\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde1-r4-s7-q1": {
    "id": "amz-sde1-r4-s7-q1",
    "title": "Ownership: Managing On-Call Runbooks and Flapping Alarms",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Ownership",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Ownership.",
        "Describe a recurring on-call alert that disrupted shifts. How did you address the root cause to permanently silence the false positives?",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Ownership\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde1-r4-s7-q2": {
    "id": "amz-sde1-r4-s7-q2",
    "title": "Deliver Results: Rescuing an Overdue Operational Deliverable",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Deliver Results",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Deliver Results.",
        "Tell me about an overdue technical task assigned to you. What blockers did you eliminate to get it to production?",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Deliver Results\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde1-r4-s8-q1": {
    "id": "amz-sde1-r4-s8-q1",
    "title": "Dive Deep: Auditing Upstream API Contract Violations",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Dive Deep",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Dive Deep.",
        "Describe a failure caused by unexpected payload changes from an upstream third-party service. How did you defend the boundary?",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Dive Deep\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde1-r4-s8-q2": {
    "id": "amz-sde1-r4-s8-q2",
    "title": "Invent and Simplify: Designing an Automated Migration Script",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Invent and Simplify",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Invent and Simplify.",
        "Tell me about a manual data-backfill or schema migration you automated to minimize service downtime.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Invent and Simplify\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde1-r4-s9-q1": {
    "id": "amz-sde1-r4-s9-q1",
    "title": "Earn Trust: Writing a Transparent Post-Mortem (COE)",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Earn Trust",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Earn Trust.",
        "Describe a post-mortem or Correction of Errors (COE) you authored after a service interruption. How did you address systemic root causes?",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Earn Trust\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde1-r4-s9-q2": {
    "id": "amz-sde1-r4-s9-q2",
    "title": "Bias for Action: Rolling Back a Risky Deployment Immediately",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Bias for Action",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Bias for Action.",
        "Tell me about a canary deployment that showed abnormal metric trends. How did you decide to pull the plug before widespread impact?",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Bias for Action\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde1-r4-s10-q1": {
    "id": "amz-sde1-r4-s10-q1",
    "title": "Customer Obsession: Designing Defensive Fallbacks for Degraded States",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Customer Obsession",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Customer Obsession.",
        "Describe how you built graceful degradation into an API so that core customer journeys continued during backend timeouts.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Customer Obsession\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde1-r4-s10-q2": {
    "id": "amz-sde1-r4-s10-q2",
    "title": "Have Backbone; Disagree and Commit: Defending Asynchronous Processing over Synchronous Calls",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Have Backbone; Disagree and Commit",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Have Backbone; Disagree and Commit.",
        "Tell me about a debate over synchronous RPC vs event-driven messaging. How did you present your trade-off analysis?",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Have Backbone; Disagree and Commit\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde2-r4-s1-q1": {
    "id": "amz-sde2-r4-s1-q1",
    "title": "Dive Deep: Diagnosing Distributed Deadlocks at Scale",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Dive Deep",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Dive Deep.",
        "Describe a complex distributed deadlock across multiple microservices. How did you analyze lock wait graphs and thread dumps?",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Dive Deep\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde2-r4-s1-q2": {
    "id": "amz-sde2-r4-s1-q2",
    "title": "Deliver Results: Executing a High-Stakes Database Migration Without Downtime",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Deliver Results",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Deliver Results.",
        "Tell me about a dual-write zero-downtime database migration you led. How did you guarantee data consistency and rollback capability?",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Deliver Results\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde2-r4-s2-q1": {
    "id": "amz-sde2-r4-s2-q1",
    "title": "Have Backbone; Disagree and Commit: Challenging Technical Debt in Quarterly Roadmaps",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Have Backbone; Disagree and Commit",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Have Backbone; Disagree and Commit.",
        "Describe a scenario where you fought product management to prioritize architectural refactoring over revenue features.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Have Backbone; Disagree and Commit\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde2-r4-s2-q2": {
    "id": "amz-sde2-r4-s2-q2",
    "title": "Earn Trust: Rebuilding Stakeholder Confidence After an SLA Breach",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Earn Trust",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Earn Trust.",
        "Tell me about an instance where your team breached an enterprise SLA. How did you restore trust through architectural guarantees?",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Earn Trust\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde2-r4-s3-q1": {
    "id": "amz-sde2-r4-s3-q1",
    "title": "Customer Obsession: Architecting Multi-Region Active-Active Fallback",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Customer Obsession",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Customer Obsession.",
        "How did you design a service to protect customer transactions during an entire AWS availability zone outage?",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Customer Obsession\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde2-r4-s3-q2": {
    "id": "amz-sde2-r4-s3-q2",
    "title": "Invent and Simplify: Replacing Monolithic Bottlenecks with Event-Driven Pipelines",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Invent and Simplify",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Invent and Simplify.",
        "Describe an overburdened monolithic bottleneck you decoupled using Kafka/SQS streams with idempotent consumers.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Invent and Simplify\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde2-r4-s4-q1": {
    "id": "amz-sde2-r4-s4-q1",
    "title": "Are Right, A Lot: Anticipating a High-Impact Architectural Vulnerability",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Are Right, A Lot",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Are Right, A Lot.",
        "Tell me about an architectural decision where your contrarian technical assessment proved correct over time.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Are Right, A Lot\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde2-r4-s4-q2": {
    "id": "amz-sde2-r4-s4-q2",
    "title": "Ownership: Driving Cross-Team Standards Across Autonomous Pods",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Ownership",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Ownership.",
        "Describe how you aligned 3+ disparate engineering squads around a common API contract and deprecation policy.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Ownership\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde2-r4-s5-q1": {
    "id": "amz-sde2-r4-s5-q1",
    "title": "Insist on the Highest Standards: Enforcing Strict Contract Testing Across Boundaries",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Insist on the Highest Standards",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Insist on the Highest Standards.",
        "Tell me about a time you halted a cross-team release due to missing end-to-end resilience verification.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Insist on the Highest Standards\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde2-r4-s5-q2": {
    "id": "amz-sde2-r4-s5-q2",
    "title": "Frugality: Slashing DynamoDB / Cache Provisioning Overhead",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Frugality",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Frugality.",
        "Give an example of restructuring partition keys and caching strategies to reduce IOPS costs without degrading p99 latency.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Frugality\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde2-r4-s6-q1": {
    "id": "amz-sde2-r4-s6-q1",
    "title": "Bias for Action: Triaging Data Poisoning During Live Ingestion",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Bias for Action",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Bias for Action.",
        "Describe an incident where corrupt data was polluting downstream search indices. How quickly did you stop the bleed and replay logs?",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Bias for Action\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde2-r4-s6-q2": {
    "id": "amz-sde2-r4-s6-q2",
    "title": "Learn and Be Curious: Evaluating Serverless vs Container Orchestration",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Learn and Be Curious",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Learn and Be Curious.",
        "Tell me about a comprehensive technical evaluation you conducted to determine whether to migrate workloads to ECS/EKS.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Learn and Be Curious\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde2-r4-s7-q1": {
    "id": "amz-sde2-r4-s7-q1",
    "title": "Earn Trust: Mentoring Underperforming Engineers to High Velocity",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Earn Trust",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Earn Trust.",
        "Describe how you supported a struggling junior engineer without taking over their coding deliverables.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Earn Trust\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde2-r4-s7-q2": {
    "id": "amz-sde2-r4-s7-q2",
    "title": "Dive Deep: Investigating Out-of-Memory Leaks in High-Throughput Daemons",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Dive Deep",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Dive Deep.",
        "Tell me about an elusive memory leak you analyzed via heap profilers and GC telemetry to prevent pod crashes.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Dive Deep\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde2-r4-s8-q1": {
    "id": "amz-sde2-r4-s8-q1",
    "title": "Deliver Results: De-risking Prime Day / Flash Sale Peak Traffic Readiness",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Deliver Results",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Deliver Results.",
        "How did you prepare your distributed services for a 10x traffic spike during a major shopping holiday?",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Deliver Results\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde2-r4-s8-q2": {
    "id": "amz-sde2-r4-s8-q2",
    "title": "Invent and Simplify: Designing Self-Healing Auto-Remediation Workflows",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Invent and Simplify",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Invent and Simplify.",
        "Describe an operational playbook you converted into a fully automated, self-healing remediation daemon.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Invent and Simplify\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde2-r4-s9-q1": {
    "id": "amz-sde2-r4-s9-q1",
    "title": "Customer Obsession: Instrumenting End-to-End Tracing for Frictionless Checkout",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Customer Obsession",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Customer Obsession.",
        "Tell me about using distributed tracing (X-Ray / OpenTelemetry) to eliminate tail latency in customer payment funnels.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Customer Obsession\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde2-r4-s9-q2": {
    "id": "amz-sde2-r4-s9-q2",
    "title": "Ownership: Refusing to Let an Unowned Critical Outage Sits Between Teams",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Ownership",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Ownership.",
        "Describe an outage where multiple teams claimed the failure was outside their service boundary, and how you drove resolution.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Ownership\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde2-r4-s10-q1": {
    "id": "amz-sde2-r4-s10-q1",
    "title": "Have Backbone; Disagree and Commit: Defending Consistency Models Against Performance Shortcuts",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Have Backbone; Disagree and Commit",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Have Backbone; Disagree and Commit.",
        "Tell me about a time colleagues wanted eventual consistency for speed, but you proved strong consistency was mandatory.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Have Backbone; Disagree and Commit\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde2-r4-s10-q2": {
    "id": "amz-sde2-r4-s10-q2",
    "title": "Are Right, A Lot: Accurately Sizing Database Sharding Boundaries",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Are Right, A Lot",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Are Right, A Lot.",
        "Describe how you accurately forecasted capacity and sharded a rapidly expanding data store before write saturation occurred.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Are Right, A Lot\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde3-r4-s1-q1": {
    "id": "amz-sde3-r4-s1-q1",
    "title": "Think Big: Designing Multi-Year Strategic Systems Roadmaps",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Think Big",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Think Big.",
        "Describe how you conceptualized and secured executive buy-in for a multi-year architectural overhaul affecting entire business units.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Think Big\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde3-r4-s1-q2": {
    "id": "amz-sde3-r4-s1-q2",
    "title": "Have Backbone; Disagree and Commit: Rejecting Flawed Executive Directives with Concrete Benchmarks",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Have Backbone; Disagree and Commit",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Have Backbone; Disagree and Commit.",
        "Tell me about a time you opposed a VP or Director's technical strategy. How did you present data-driven counter-proposals?",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Have Backbone; Disagree and Commit\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde3-r4-s2-q1": {
    "id": "amz-sde3-r4-s2-q1",
    "title": "Are Right, A Lot: Selecting Storage Engines for Exabyte-Scale Systems",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Are Right, A Lot",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Are Right, A Lot.",
        "Describe an architectural decision between NoSQL, Columnar, or Relational engines where your risk analysis was validated in production.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Are Right, A Lot\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde3-r4-s2-q2": {
    "id": "amz-sde3-r4-s2-q2",
    "title": "Earn Trust: Aligning Conflicting Principal Engineers Across Organizations",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Earn Trust",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Earn Trust.",
        "Tell me about bridging deep philosophical divides between senior technical leaders with competing priorities.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Earn Trust\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde3-r4-s3-q1": {
    "id": "amz-sde3-r4-s3-q1",
    "title": "Hire and Develop the Best: Promoting Senior Engineers to Staff and Principal Ranks",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Hire and Develop the Best",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Hire and Develop the Best.",
        "How do you cultivate senior engineering talent, establish technical evaluation standards, and sponsor promotions?",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Hire and Develop the Best\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde3-r4-s3-q2": {
    "id": "amz-sde3-r4-s3-q2",
    "title": "Insist on the Highest Standards: Establishing Organization-Wide Resilience & Chaos Engineering",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Insist on the Highest Standards",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Insist on the Highest Standards.",
        "Tell me about mandating Chaos Engineering and Game Day drills across dozens of services to eliminate hidden cascading failures.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Insist on the Highest Standards\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde3-r4-s4-q1": {
    "id": "amz-sde3-r4-s4-q1",
    "title": "Customer Obsession: Pivoting Architecture to Meet Unmet Enterprise SLA Guarantees",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Customer Obsession",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Customer Obsession.",
        "Describe redesigning a core platform because enterprise customer workloads exposed systemic throughput bottlenecks.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Customer Obsession\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde3-r4-s4-q2": {
    "id": "amz-sde3-r4-s4-q2",
    "title": "Dive Deep: Auditing Kernel / Hardware Level Network Bottlenecks",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Dive Deep",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Dive Deep.",
        "Tell me about troubleshooting packet drop rates or network saturation that spanned across hypervisors and custom silicon.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Dive Deep\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde3-r4-s5-q1": {
    "id": "amz-sde3-r4-s5-q1",
    "title": "Invent and Simplify: Consolidating Disparate Multi-Team Data Platforms",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Invent and Simplify",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Invent and Simplify.",
        "How did you eliminate architectural redundancies across separate teams by creating a unified distributed platform?",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Invent and Simplify\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde3-r4-s5-q2": {
    "id": "amz-sde3-r4-s5-q2",
    "title": "Deliver Results: Executing Mission-Critical Platform Migrations Under Live Traffic",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Deliver Results",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Deliver Results.",
        "Describe migrating billions of live database records without customer disruption or latency degradation.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Deliver Results\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde3-r4-s6-q1": {
    "id": "amz-sde3-r4-s6-q1",
    "title": "Frugality: Slashing Millions in Multi-Cluster Cloud Expenditure",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Frugality",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Frugality.",
        "Tell me about an architectural initiative that dramatically reduced compute, memory, and bandwidth costs without degrading throughput.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Frugality\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde3-r4-s6-q2": {
    "id": "amz-sde3-r4-s6-q2",
    "title": "Bias for Action: Authorizing High-Risk Production Workarounds During Black Swan Events",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Bias for Action",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Bias for Action.",
        "Describe a crisis where standard procedures were failing, and you authorized an unorthodox solution to restore platform health.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Bias for Action\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde3-r4-s7-q1": {
    "id": "amz-sde3-r4-s7-q1",
    "title": "Are Right, A Lot: Forecasting Technology Shifts Ahead of the Industry",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Are Right, A Lot",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Are Right, A Lot.",
        "Describe a contrarian bet on a technology stack or design pattern that gave your organization a durable competitive edge.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Are Right, A Lot\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde3-r4-s7-q2": {
    "id": "amz-sde3-r4-s7-q2",
    "title": "Earn Trust: Navigating Organizational Restructuring and Technical Continuity",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Earn Trust",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Earn Trust.",
        "How did you maintain technical continuity, morale, and platform velocity during an organizational upheaval?",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Earn Trust\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde3-r4-s8-q1": {
    "id": "amz-sde3-r4-s8-q1",
    "title": "Think Big: Architecting Globally Distributed Edge Compute Fabrics",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Think Big",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Think Big.",
        "Tell me about designing an edge computing or real-time event pipeline spanning multiple continents.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Think Big\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde3-r4-s8-q2": {
    "id": "amz-sde3-r4-s8-q2",
    "title": "Ownership: Assuming Accountability for an Organization-Wide Outage",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Ownership",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Ownership.",
        "Describe a catastrophic failure under your architectural purview. How did you accept accountability and systematically ensure it could never reoccur?",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Ownership\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde3-r4-s9-q1": {
    "id": "amz-sde3-r4-s9-q1",
    "title": "Hire and Develop the Best: Remediating Toxic Technical Culture in Large Orgs",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Hire and Develop the Best",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Hire and Develop the Best.",
        "Tell me about intervening to fix toxic code-review cultures or siloed knowledge within an engineering organization.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Hire and Develop the Best\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde3-r4-s9-q2": {
    "id": "amz-sde3-r4-s9-q2",
    "title": "Insist on the Highest Standards: Defining Tier-1 Service Criticality Criteria",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Insist on the Highest Standards",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Insist on the Highest Standards.",
        "How did you define the non-negotiable operational bar for what qualifies as a Tier-1 Amazon service?",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Insist on the Highest Standards\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde3-r4-s10-q1": {
    "id": "amz-sde3-r4-s10-q1",
    "title": "Customer Obsession: Anticipating Future Customer Security and Privacy Regulations",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Customer Obsession",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Customer Obsession.",
        "Describe how you proactively redesigned data pipelines to anticipate future global privacy and cryptographic mandates.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Customer Obsession\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-sde3-r4-s10-q2": {
    "id": "amz-sde3-r4-s10-q2",
    "title": "Have Backbone; Disagree and Commit: Killing an Underperforming Multi-Million Dollar Project",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Have Backbone; Disagree and Commit",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Have Backbone; Disagree and Commit.",
        "Tell me about advocating to terminate a heavily funded project because technical invariants no longer justified the investment.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Have Backbone; Disagree and Commit\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-principal-r4-s1-q1": {
    "id": "amz-principal-r4-s1-q1",
    "title": "Think Big: Planetary-Scale Architecture and Generational Strategy",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Think Big",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Think Big.",
        "How do you construct architectural blueprints designed to endure 100x traffic scaling over a 5-to-10 year horizon?",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Think Big\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-principal-r4-s1-q2": {
    "id": "amz-principal-r4-s1-q2",
    "title": "Are Right, A Lot: Arbitrating Complex Multi-Organization Distributed Consensus",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Are Right, A Lot",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Are Right, A Lot.",
        "Describe arbitrating an intractable debate among senior architects on distributed consensus and CAP theorem trade-offs.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Are Right, A Lot\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-principal-r4-s2-q1": {
    "id": "amz-principal-r4-s2-q1",
    "title": "Have Backbone; Disagree and Commit: Advising the Executive Board Against Risky Strategic Shifts",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Have Backbone; Disagree and Commit",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Have Backbone; Disagree and Commit.",
        "Tell me about presenting counter-arguments to C-suite leadership regarding fundamental technical feasibility and business risk.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Have Backbone; Disagree and Commit\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-principal-r4-s2-q2": {
    "id": "amz-principal-r4-s2-q2",
    "title": "Earn Trust: Influencing Global Technical Communities Across Amazon",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Earn Trust",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Earn Trust.",
        "How do you lead, inspire, and drive technical consensus across thousands of engineers who do not report to you?",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Earn Trust\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-principal-r4-s3-q1": {
    "id": "amz-principal-r4-s3-q1",
    "title": "Customer Obsession: Pioneering Paradigms for Billion-User Digital Ecosystems",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Customer Obsession",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Customer Obsession.",
        "Describe designing a platform paradigm that redefined how millions of external developers or businesses build on Amazon.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Customer Obsession\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-principal-r4-s3-q2": {
    "id": "amz-principal-r4-s3-q2",
    "title": "Invent and Simplify: Deconstructing Enterprise Complexity into Elegant Abstractions",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Invent and Simplify",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Invent and Simplify.",
        "Tell me about distilling a massive, convoluted multi-decade enterprise architecture into clean, simple foundational primitives.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Invent and Simplify\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-principal-r4-s4-q1": {
    "id": "amz-principal-r4-s4-q1",
    "title": "Insist on the Highest Standards: Governing Corporate-Wide Security & Cryptographic Postures",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Insist on the Highest Standards",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Insist on the Highest Standards.",
        "Describe how you established and enforced zero-trust security invariants across the entire corporate technology footprint.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Insist on the Highest Standards\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-principal-r4-s4-q2": {
    "id": "amz-principal-r4-s4-q2",
    "title": "Hire and Develop the Best: Mentoring the Next Generation of Principal and Distinguished Engineers",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Hire and Develop the Best",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Hire and Develop the Best.",
        "How do you identify, mentor, and sponsor senior engineering staff to reach Principal and Distinguished levels?",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Hire and Develop the Best\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-principal-r4-s5-q1": {
    "id": "amz-principal-r4-s5-q1",
    "title": "Deliver Results: Rescuing Multi-Year Enterprise Deliverables on the Brink of Collapse",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Deliver Results",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Deliver Results.",
        "Tell me about intervening in a stalled enterprise program and restructuring its execution model to deliver business value.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Deliver Results\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-principal-r4-s5-q2": {
    "id": "amz-principal-r4-s5-q2",
    "title": "Frugality: Eliminating Multi-Tenancy Inefficiencies at Data Center Scale",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Frugality",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Frugality.",
        "Describe how you rearchitected fleet management or hardware utilization to save tens of millions of dollars annually.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Frugality\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-principal-r4-s6-q1": {
    "id": "amz-principal-r4-s6-q1",
    "title": "Are Right, A Lot: Predicting System Bottlenecks Under Unprecedented Global Demand",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Are Right, A Lot",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Are Right, A Lot.",
        "Describe anticipating a failure mode during unprecedented global events that no standard load test could simulate.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Are Right, A Lot\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-principal-r4-s6-q2": {
    "id": "amz-principal-r4-s6-q2",
    "title": "Dive Deep: Decentering Abstractions to Audit Hypervisor and Network Asymptotics",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Dive Deep",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Dive Deep.",
        "Tell me about bypassing application layers to analyze raw hardware, PCIe bus, or kernel scheduler constraints.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Dive Deep\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-principal-r4-s7-q1": {
    "id": "amz-principal-r4-s7-q1",
    "title": "Think Big: Establishing Autonomous Self-Healing Cloud Infrastructures",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Think Big",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Think Big.",
        "Describe conceptualizing an autonomous, zero-human-touch infrastructure fabric capable of surviving multi-region partitions.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Think Big\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-principal-r4-s7-q2": {
    "id": "amz-principal-r4-s7-q2",
    "title": "Earn Trust: Guiding Teams Through Public High-Visibility Outages",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Earn Trust",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Earn Trust.",
        "How do you maintain organizational composure, technical objectivity, and stakeholder trust during a public P0 incident?",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Earn Trust\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-principal-r4-s8-q1": {
    "id": "amz-principal-r4-s8-q1",
    "title": "Have Backbone; Disagree and Commit: Challenging Flawed Industry Standards",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Have Backbone; Disagree and Commit",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Have Backbone; Disagree and Commit.",
        "Tell me about diverging from standard industry consensus because you identified critical edge cases that made it unsuitable for Amazon.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Have Backbone; Disagree and Commit\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-principal-r4-s8-q2": {
    "id": "amz-principal-r4-s8-q2",
    "title": "Ownership: Assuming Guardianship for the Entire Company's Tech Debt",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Ownership",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Ownership.",
        "How do you continuously audit and remediate long-term technical debt across disparate global engineering organizations?",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Ownership\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-principal-r4-s9-q1": {
    "id": "amz-principal-r4-s9-q1",
    "title": "Customer Obsession: Safeguarding User Privacy and Trust Above Commercial Expediency",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Customer Obsession",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Customer Obsession.",
        "Describe an instance where you blocked a lucrative commercial initiative because it compromised core customer trust or data integrity.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Customer Obsession\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-principal-r4-s9-q2": {
    "id": "amz-principal-r4-s9-q2",
    "title": "Invent and Simplify: Designing Novel Distributed Primitives",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Invent and Simplify",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Invent and Simplify.",
        "Tell me about inventing a new algorithmic primitive, caching protocol, or consensus mechanism tailored to Amazon's scale.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Invent and Simplify\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-principal-r4-s10-q1": {
    "id": "amz-principal-r4-s10-q1",
    "title": "Strive to be Earth's Best Employer: Fostering Psychological Safety in High-Stress Technical Reviews",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Strive to be Earth's Best Employer",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Strive to be Earth's Best Employer.",
        "How do you conduct unforgiving, rigorous architectural reviews while ensuring complete psychological safety for team members?",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Strive to be Earth's Best Employer\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
},

  "amz-principal-r4-s10-q2": {
    "id": "amz-principal-r4-s10-q2",
    "title": "Are Right, A Lot: Validating Unprovable Architectural Hypotheses",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Behavioral & Bar Raiser",
    "tags": [
        "Leadership Principles",
        "Are Right, A Lot",
        "STAR Method",
        "Bar Raiser"
    ],
    "paragraphs": [
        "Amazon Leadership Principle: Are Right, A Lot.",
        "Describe making a multi-million dollar architectural commitment when mathematical models and empirical tests were inconclusive.",
        "Structure your response strictly using the STAR methodology (Situation, Task, Action, Result). State specific metrics, individual contributions, and lessons learned."
    ],
    "examples": [
        {
            "input": "Candidate Narrative",
            "output": "STAR Compliant Analysis with Quantifiable Business Impact",
            "explanation": "Evaluated on ownership, quantifiable metric improvements, and clarity under Socratic pushback."
        }
    ],
    "constraints": [
        "Focus on 'I', not 'We' (individual ownership)",
        "Include quantifiable metrics (latency %, SLA, downtime, cost)",
        "Prepared for 3 to 4 sequential Bar Raiser pushback probes"
    ],
    "starterTemplates": {
        "behavioral": "// Round 4: Dedicated Amazon Bar Raiser Session\n// Focus LP: Are Right, A Lot\n// State your response verbally or via structured notes."
    },
    "visibleTestCases": [],
    "hiddenTestCases": [],
    "optimalComplexity": {
        "time": "STAR Method",
        "space": "High Ownership & Quantifiable Metrics"
    }
}
,
  ...AMAZON_ROUND3_PROBLEMS
};

export function getProblemById(id: string): ProblemDefinition | undefined {
  if (!id) return undefined;
  return PROBLEMS_DATABASE[id];
}

export function getProblemForRound(arg1: any, arg2?: any): ProblemDefinition | undefined {
  if (Array.isArray(arg1) && arg1.length > 0) return PROBLEMS_DATABASE[arg1[0]];
  if (Array.isArray(arg2) && arg2.length > 0) return PROBLEMS_DATABASE[arg2[0]];
  if (typeof arg1 === "string" && PROBLEMS_DATABASE[arg1]) return PROBLEMS_DATABASE[arg1];
  if (typeof arg2 === "string" && PROBLEMS_DATABASE[arg2]) return PROBLEMS_DATABASE[arg2];
  return Object.values(PROBLEMS_DATABASE)[0];
}
