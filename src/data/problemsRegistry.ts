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
  }
};

export function getProblemById(id: string): ProblemDefinition | undefined {
  return PROBLEMS_DATABASE[id];
}

export function getProblemForRound(arg1: any, arg2?: any): ProblemDefinition | undefined {
  if (Array.isArray(arg1) && arg1.length > 0) return PROBLEMS_DATABASE[arg1[0]];
  if (Array.isArray(arg2) && arg2.length > 0) return PROBLEMS_DATABASE[arg2[0]];
  if (typeof arg1 === "string" && PROBLEMS_DATABASE[arg1]) return PROBLEMS_DATABASE[arg1];
  if (typeof arg2 === "string" && PROBLEMS_DATABASE[arg2]) return PROBLEMS_DATABASE[arg2];
  return Object.values(PROBLEMS_DATABASE)[0];
}
