import { ProblemDefinition } from "@/types/crucible";

export const AMAZON_OA_ALL_PROBLEMS: Record<string, ProblemDefinition> = {
  // =========================================================================
  // 1. SDE INTERN (LC 1, 973, 2268, 692, 56, 200, 340, 1041, 253, 937)
  // =========================================================================
  "amz-intern-s1-q1": {
    id: "amz-intern-s1-q1",
    title: "Amazon Packaging Item Matcher (LC 1 Variant)",
    taskIndex: 1,
    totalTasks: 2,
    difficulty: "Easy",
    timeLimit: "2s",
    memoryLimit: "64MB",
    paragraphs: [
      "In an Amazon fulfillment center, robotic sorting arms pick pairs of items to fit inside a standardized delivery container of target capacity.",
      "Given an array of positive integers itemWeights and an integer targetCapacity, return the 0-indexed positions of the two items such that their weights sum to exactly targetCapacity - 30 (leaving a mandatory 30-unit safety cushion).",
      "If multiple pairs exist, return the pair with the largest individual item weight. Return [i, j] with i < j."
    ],
    bulletPoints: [
      "Effective capacity = targetCapacity - 30.",
      "If multiple pairs match, choose the pair that contains the single heaviest item.",
      "You cannot use the same package twice."
    ],
    examples: [
      {
        input: "itemWeights = [1, 10, 25, 35, 60], targetCapacity = 90",
        output: "[2, 3]",
        explanation: "targetCapacity - 30 = 60. itemWeights[2] (25) + itemWeights[3] (35) = 60. Max weight is 35."
      },
      {
        input: "itemWeights = [20, 50, 40, 25, 30, 10], targetCapacity = 90",
        output: "[1, 5]",
        explanation: "itemWeights[1] (50) + itemWeights[5] (10) = 60. Max weight is 50."
      }
    ],
    constraints: [
      "2 <= itemWeights.length <= 10^5",
      "1 <= itemWeights[i] <= 10^6",
      "30 <= targetCapacity <= 10^6"
    ],
    starterTemplates: {
      cpp: "class Solution {\npublic:\n    vector<int> findOptimalPair(vector<int>& itemWeights, int targetCapacity) {\n        // targetCapacity - 30\n        \n    }\n};",
      java: "class Solution {\n    public int[] findOptimalPair(int[] itemWeights, int targetCapacity) {\n        return new int[]{};\n    }\n}",
      python: "class Solution:\n    def findOptimalPair(self, itemWeights: list[int], targetCapacity: int) -> list[int]:\n        pass",
      typescript: "function findOptimalPair(itemWeights: number[], targetCapacity: number): number[] {\n    return [];\n}"
    },
    visibleTestCases: [
      { input: "[1, 10, 25, 35, 60], 90", expectedOutput: "[2, 3]" },
      { input: "[20, 50, 40, 25, 30, 10], 90", expectedOutput: "[1, 5]" }
    ],
    hiddenTestCases: [
      { input: "[5, 15, 20, 25, 30], 65", expectedOutput: "[0, 4]" },
      { input: "[10, 20, 30, 40], 80", expectedOutput: "[1, 2]" },
      { input: "[100, 180, 40, 120, 10], 250", expectedOutput: "[2, 1]" }
    ]
  },

  
  "amz-intern-s1-q2": {
    id: "amz-intern-s1-q2",
    title: "Critical Connections in AWS Server Infrastructure (LC 1192)",
    taskIndex: 2,
    totalTasks: 2,
    difficulty: "Hard",
    timeLimit: "3s",
    memoryLimit: "128MB",
    paragraphs: [
      "There are n servers numbered from 0 to n - 1 connected by undirected server-to-server connections forming a network. You are given an integer n and an array of connections where connections[i] = [ai, bi] represents a bidirectional link between servers ai and bi.",
      "A critical connection is a connection that, if removed, will make some servers unable to reach some other server.",
      "Return all critical connections in the network in any order."
    ],
    bulletPoints: [
      "Find bridges in an undirected graph using Tarjan's or Kosaraju's algorithm.",
      "Track discovery and lowest reachable node ranks through depth-first traversal.",
      "Time complexity should be O(V + E)."
    ],
    examples: [
      {
        input: "n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]",
        output: "[[1,3]]",
        explanation: "Removing [1,3] disconnects server 3 from the rest of the network."
      },
      {
        input: "n = 2, connections = [[0,1]]",
        output: "[[0,1]]",
        explanation: "Removing [0,1] disconnects the only two servers."
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
      cpp: "class Solution {\npublic:\n    vector<vector<int>> criticalConnections(int n, vector<vector<int>>& connections) {\n        // Return all bridges in the network\n        return {};\n    }\n};",
      java: "class Solution {\n    public List<List<Integer>> criticalConnections(int n, List<List<Integer>> connections) {\n        return new ArrayList<>();\n    }\n}",
      python: "class Solution:\n    def criticalConnections(self, n: int, connections: list[list[int]]) -> list[list[int]]:\n        return []",
      typescript: "function criticalConnections(n: number, connections: number[][]): number[][] {\n    return [];\n}"
    },
    visibleTestCases: [
      { input: "4, [[0,1],[1,2],[2,0],[1,3]]", expectedOutput: "[[1,3]]" },
      { input: "2, [[0,1]]", expectedOutput: "[[0,1]]" }
    ],
    hiddenTestCases: [
      { input: "5, [[0,1],[1,2],[2,0],[1,3],[3,4]]", expectedOutput: "[[1,3],[3,4]]" },
      { input: "6, [[0,1],[1,2],[2,0],[1,3],[3,4],[4,5],[5,3]]", expectedOutput: "[[1,3]]" }
    ]
  },

  "amz-intern-s2-q1": {
    id: "amz-intern-s2-q1",
    title: "K Closest Amazon Lockers to Delivery Van (LC 973)",
    taskIndex: 1,
    totalTasks: 2,
    difficulty: "Medium",
    timeLimit: "2s",
    memoryLimit: "64MB",
    paragraphs: [
      "An Amazon delivery driver has their van parked at coordinate (0, 0). They are given an array of delivery locker coordinates points where points[i] = [xi, yi] and an integer k.",
      "Return the k closest Amazon locker coordinates to the origin (0, 0).",
      "The distance between two points is the Euclidean distance: sqrt(x^2 + y^2). You may return the answer in any order."
    ],
    bulletPoints: [
      "Use Euclidean distance squared (x^2 + y^2) to avoid floating point precision issues.",
      "A priority queue or quickselect achieves optimal performance."
    ],
    examples: [
      {
        input: "points = [[1,3],[-2,2]], k = 1",
        output: "[[-2,2]]",
        explanation: "Distance of (1, 3) is sqrt(10). Distance of (-2, 2) is sqrt(8). Since sqrt(8) < sqrt(10), [-2,2] is closer."
      },
      {
        input: "points = [[3,3],[5,-1],[-2,4]], k = 2",
        output: "[[3,3],[-2,4]]",
        explanation: "Distances are sqrt(18), sqrt(26), and sqrt(20). Two closest are [3,3] and [-2,4]."
      }
    ],
    constraints: [
      "1 <= k <= points.length <= 10^4",
      "-10^4 <= xi, yi <= 10^4"
    ],
    starterTemplates: {
      cpp: "class Solution {\npublic:\n    vector<vector<int>> kClosest(vector<vector<int>>& points, int k) {\n        \n    }\n};",
      java: "class Solution {\n    public int[][] kClosest(int[][] points, int k) {\n        return new int[][]{};\n    }\n}",
      python: "class Solution:\n    def kClosest(self, points: list[list[int]], k: int) -> list[list[int]]:\n        pass",
      typescript: "function kClosest(points: number[][], k: number): number[][] {\n    return [];\n}"
    },
    visibleTestCases: [
      { input: "[[1,3],[-2,2]], 1", expectedOutput: "[[-2,2]]" },
      { input: "[[3,3],[5,-1],[-2,4]], 2", expectedOutput: "[[3,3],[-2,4]]" }
    ],
    hiddenTestCases: [
      { input: "[[0,1],[1,0]], 2", expectedOutput: "[[0,1],[1,0]]" },
      { input: "[[2,2],[2,2],[2,2],[1,1]], 1", expectedOutput: "[[1,1]]" }
    ]
  },

  "amz-intern-s3-q1": {
    id: "amz-intern-s3-q1",
    title: "Minimum Keypresses for Warehouse Keypad (LC 2268)",
    taskIndex: 1,
    totalTasks: 2,
    difficulty: "Medium",
    timeLimit: "2s",
    memoryLimit: "64MB",
    paragraphs: [
      "You have a keypad with 9 buttons numbered 1 to 9. Each button can be mapped to up to 3 distinct lowercase English letters.",
      "Clicking a button once types the first letter mapped to it, twice types the second, and three times types the third.",
      "Given a string s representing an item barcode, return the minimum number of total keypresses needed to type s using an optimal keypad mapping."
    ],
    bulletPoints: [
      "There are 9 buttons, so the top 9 most frequent letters require 1 press.",
      "The next 9 frequent letters require 2 presses, and the remaining 8 letters require 3 presses.",
      "Greedy strategy based on frequency sorting is optimal."
    ],
    examples: [
      {
        input: "s = 'apple'",
        output: "5",
        explanation: "Assign 'a', 'p', 'l', 'e' to the 1-press slot of different keys. Total presses = 1 + 2(for p) + 1 + 1 = 5."
      },
      {
        input: "s = 'abcdefghijkl'",
        output: "15",
        explanation: "First 9 characters need 1 press each (9). Remaining 3 characters need 2 presses each (6). Total = 15."
      }
    ],
    constraints: [
      "1 <= s.length <= 10^5",
      "s consists only of lowercase English letters"
    ],
    starterTemplates: {
      cpp: "class Solution {\npublic:\n    int minimumKeypresses(string s) {\n        \n    }\n};",
      java: "class Solution {\n    public int minimumKeypresses(String s) {\n        return 0;\n    }\n}",
      python: "class Solution:\n    def minimumKeypresses(self, s: str) -> int:\n        pass",
      typescript: "function minimumKeypresses(s: string): number {\n    return 0;\n}"
    },
    visibleTestCases: [
      { input: "'apple'", expectedOutput: "5" },
      { input: "'abcdefghijkl'", expectedOutput: "15" }
    ],
    hiddenTestCases: [
      { input: "'aaaaaaa'", expectedOutput: "7" },
      { input: "'abcdefghijklmnopqrstuvwxyz'", expectedOutput: "51" }
    ]
  },

  "amz-intern-s4-q1": {
    id: "amz-intern-s4-q1",
    title: "Top K Frequent Search Words (LC 692)",
    taskIndex: 1,
    totalTasks: 2,
    difficulty: "Medium",
    timeLimit: "2s",
    memoryLimit: "64MB",
    paragraphs: [
      "Given an array of strings words and an integer k, return the k most frequent strings.",
      "Return the answer sorted by the frequency from highest to lowest. Sort words with the same frequency in lexicographical order."
    ],
    bulletPoints: [
      "Words with higher frequencies come first.",
      "Ties must be broken by lexicographical ascending order (e.g., 'i' comes before 'love')."
    ],
    examples: [
      {
        input: "words = ['i','love','amazon','i','love','coding'], k = 2",
        output: "['i','love']",
        explanation: "'i' and 'love' both appear 2 times. 'i' is alphabetically smaller than 'love'."
      }
    ],
    constraints: [
      "1 <= words.length <= 500",
      "1 <= words[i].length <= 10",
      "1 <= k <= number of unique words"
    ],
    starterTemplates: {
      cpp: "class Solution {\npublic:\n    vector<string> topKFrequent(vector<string>& words, int k) {\n        \n    }\n};",
      java: "class Solution {\n    public List<String> topKFrequent(String[] words, int k) {\n        return new ArrayList<>();\n    }\n}",
      python: "class Solution:\n    def topKFrequent(self, words: list[str], k: int) -> list[str]:\n        pass",
      typescript: "function topKFrequent(words: string[], k: number): string[] {\n    return [];\n}"
    },
    visibleTestCases: [
      { input: "['i','love','amazon','i','love','coding'], 2", expectedOutput: "['i','love']" }
    ],
    hiddenTestCases: [
      { input: "['the','day','is','sunny','the','the','the','sunny','is','is'], 4", expectedOutput: "['the','is','sunny','day']" }
    ]
  },

  "amz-intern-s5-q1": {
    id: "amz-intern-s5-q1",
    title: "Merge Overlapping Delivery Intervals (LC 56)",
    taskIndex: 1,
    totalTasks: 2,
    difficulty: "Medium",
    timeLimit: "2s",
    memoryLimit: "64MB",
    paragraphs: [
      "Given an array of delivery intervals where intervals[i] = [starti, endi], merge all overlapping delivery windows.",
      "Return an array of non-overlapping intervals that cover all intervals in the input."
    ],
    bulletPoints: [
      "Intervals [1,4] and [4,5] are considered overlapping and should be merged into [1,5].",
      "Sort intervals by start time first."
    ],
    examples: [
      {
        input: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
        output: "[[1,6],[8,10],[15,18]]",
        explanation: "Since intervals [1,3] and [2,6] overlap, merge them into [1,6]."
      }
    ],
    constraints: [
      "1 <= intervals.length <= 10^4",
      "intervals[i].length == 2",
      "0 <= starti <= endi <= 10^4"
    ],
    starterTemplates: {
      cpp: "class Solution {\npublic:\n    vector<vector<int>> merge(vector<vector<int>>& intervals) {\n        \n    }\n};",
      java: "class Solution {\n    public int[][] merge(int[][] intervals) {\n        return new int[][]{};\n    }\n}",
      python: "class Solution:\n    def merge(self, intervals: list[list[int]]) -> list[list[int]]:\n        pass",
      typescript: "function merge(intervals: number[][]): number[][] {\n    return [];\n}"
    },
    visibleTestCases: [
      { input: "[[1,3],[2,6],[8,10],[15,18]]", expectedOutput: "[[1,6],[8,10],[15,18]]" },
      { input: "[[1,4],[4,5]]", expectedOutput: "[[1,5]]" }
    ],
    hiddenTestCases: [
      { input: "[[1,4],[0,4]]", expectedOutput: "[[0,4]]" },
      { input: "[[1,4],[2,3]]", expectedOutput: "[[1,4]]" }
    ]
  },

  "amz-intern-s6-q1": {
    id: "amz-intern-s6-q1",
    title: "Search Autocomplete Suggestion System (LC 1268)",
    taskIndex: 1,
    totalTasks: 2,
    difficulty: "Medium",
    timeLimit: "2s",
    memoryLimit: "64MB",
    paragraphs: [
      "You are given an array of strings products and a string searchWord.",
      "Design a system that suggests at most three product names from products after each character of searchWord is typed.",
      "Suggested products should have common prefix with searchWord. If there are more than three products with a common prefix return the three lexicographically minimums products."
    ],
    bulletPoints: [
      "Return a list of lists of strings representing the suggestions after typing each character.",
      "Can be solved via Trie or Binary Search (two pointers)."
    ],
    examples: [
      {
        input: "products = ['mobile','mouse','moneypot','monitor','mousepad'], searchWord = 'mouse'",
        output: "[['mobile','moneypot','monitor'],['mobile','moneypot','monitor'],['mouse','mousepad'],['mouse','mousepad'],['mouse','mousepad']]",
        explanation: "After each typed letter, up to 3 lexicographically smallest products matching the prefix are returned."
      }
    ],
    constraints: [
      "1 <= products.length <= 1000",
      "1 <= searchWord.length <= 1000"
    ],
    starterTemplates: {
      cpp: "class Solution {\npublic:\n    vector<vector<string>> suggestedProducts(vector<string>& products, string searchWord) {\n        \n    }\n};",
      java: "class Solution {\n    public List<List<String>> suggestedProducts(String[] products, String searchWord) {\n        return new ArrayList<>();\n    }\n}",
      python: "class Solution:\n    def suggestedProducts(self, products: list[str], searchWord: str) -> list[list[str]]:\n        pass",
      typescript: "function suggestedProducts(products: string[], searchWord: string): string[][] {\n    return [];\n}"
    },
    visibleTestCases: [
      { input: "['mobile','mouse','moneypot','monitor','mousepad'], 'mouse'", expectedOutput: "[['mobile','moneypot','monitor'],['mobile','moneypot','monitor'],['mouse','mousepad'],['mouse','mousepad'],['mouse','mousepad']]" }
    ],
    hiddenTestCases: [
      { input: "['havana'], 'havana'", expectedOutput: "[['havana'],['havana'],['havana'],['havana'],['havana'],['havana']]" }
    ]
  },

  "amz-intern-s7-q1": {
    id: "amz-intern-s7-q1",
    title: "Longest Substring with At Most K Distinct Codes (LC 340)",
    taskIndex: 1,
    totalTasks: 2,
    difficulty: "Medium",
    timeLimit: "2s",
    memoryLimit: "64MB",
    paragraphs: [
      "Given a string s and an integer k, return the length of the longest substring of s that contains at most k distinct characters."
    ],
    bulletPoints: [
      "Sliding window using a hash map to track character counts.",
      "Shrink window from left whenever distinct count exceeds k."
    ],
    examples: [
      { input: "s = 'eceba', k = 2", output: "3", explanation: "'ece' has length 3 and contains 2 distinct characters." },
      { input: "s = 'aa', k = 1", output: "2", explanation: "'aa' has length 2 and contains 1 distinct character." }
    ],
    constraints: ["1 <= s.length <= 5 * 10^4", "0 <= k <= 50"],
    starterTemplates: {
      cpp: "class Solution {\npublic:\n    int lengthOfLongestSubstringKDistinct(string s, int k) {\n        \n    }\n};",
      java: "class Solution {\n    public int lengthOfLongestSubstringKDistinct(String s, int k) {\n        return 0;\n    }\n}",
      python: "class Solution:\n    def lengthOfLongestSubstringKDistinct(self, s: str, k: int) -> int:\n        pass",
      typescript: "function lengthOfLongestSubstringKDistinct(s: string, k: number): number {\n    return 0;\n}"
    },
    visibleTestCases: [
      { input: "'eceba', 2", expectedOutput: "3" },
      { input: "'aa', 1", expectedOutput: "2" }
    ],
    hiddenTestCases: [
      { input: "'a', 0", expectedOutput: "0" },
      { input: "'abaccc', 2", expectedOutput: "4" }
    ]
  },

  "amz-intern-s8-q1": {
    id: "amz-intern-s8-q1",
    title: "Robot Bounded in Fulfillment Circle (LC 1041)",
    taskIndex: 1,
    totalTasks: 2,
    difficulty: "Medium",
    timeLimit: "2s",
    memoryLimit: "64MB",
    paragraphs: [
      "On an infinite plane, a warehouse robot stands at (0, 0) facing north. The robot can receive commands: 'G' (go straight 1 unit), 'L' (turn 90 deg left), 'R' (turn 90 deg right).",
      "The robot performs instructions infinitely. Return true if and only if there exists a circle in the plane such that the robot never leaves the circle."
    ],
    bulletPoints: [
      "Robot remains bounded if after 1 cycle: it returns to (0, 0) OR it faces any direction other than North."
    ],
    examples: [
      { input: "instructions = 'GGLLGG'", output: "true", explanation: "Robot goes north 2, turns 180 deg, returns to (0, 0)." },
      { input: "instructions = 'GG'", output: "false", explanation: "Robot moves north forever." }
    ],
    constraints: ["1 <= instructions.length <= 100"],
    starterTemplates: {
      cpp: "class Solution {\npublic:\n    bool isRobotBounded(string instructions) {\n        \n    }\n};",
      java: "class Solution {\n    public boolean isRobotBounded(String instructions) {\n        return false;\n    }\n}",
      python: "class Solution:\n    def isRobotBounded(self, instructions: str) -> bool:\n        pass",
      typescript: "function isRobotBounded(instructions: string): boolean {\n    return false;\n}"
    },
    visibleTestCases: [
      { input: "'GGLLGG'", expectedOutput: "true" },
      { input: "'GG'", expectedOutput: "false" }
    ],
    hiddenTestCases: [
      { input: "'GL'", expectedOutput: "true" },
      { input: "'GLRLLGLL'", expectedOutput: "true" }
    ]
  },

  "amz-intern-s9-q1": {
    id: "amz-intern-s9-q1",
    title: "Number of Islands in Warehouse Grid (LC 200)",
    taskIndex: 1,
    totalTasks: 2,
    difficulty: "Medium",
    timeLimit: "2s",
    memoryLimit: "64MB",
    paragraphs: [
      "Given an m x n 2D binary grid where '1's represent operational storage islands and '0's represent empty transit aisles, return the number of islands.",
      "An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically."
    ],
    bulletPoints: ["Use BFS, DFS, or Disjoint Set Union (Union Find)."],
    examples: [
      {
        input: "grid = [['1','1','0','0'],['1','1','0','0'],['0','0','1','0'],['0','0','0','1']]",
        output: "3",
        explanation: "There are 3 disconnected clusters of '1's."
      }
    ],
    constraints: ["m == grid.length", "n == grid[i].length", "1 <= m, n <= 300"],
    starterTemplates: {
      cpp: "class Solution {\npublic:\n    int numIslands(vector<vector<char>>& grid) {\n        \n    }\n};",
      java: "class Solution {\n    public int numIslands(char[][] grid) {\n        return 0;\n    }\n}",
      python: "class Solution:\n    def numIslands(self, grid: list[list[str]]) -> int:\n        pass",
      typescript: "function numIslands(grid: string[][]): number {\n    return 0;\n}"
    },
    visibleTestCases: [
      { input: "[['1','1','0','0'],['1','1','0','0'],['0','0','1','0'],['0','0','0','1']]", expectedOutput: "3" }
    ],
    hiddenTestCases: [
      { input: "[['1','1','1'],['0','1','0'],['1','1','1']]", expectedOutput: "1" }
    ]
  },

  "amz-intern-s10-q1": {
    id: "amz-intern-s10-q1",
    title: "Reorder Logistics Data in Log Files (LC 937)",
    taskIndex: 1,
    totalTasks: 2,
    difficulty: "Medium",
    timeLimit: "2s",
    memoryLimit: "64MB",
    paragraphs: [
      "You are given an array of logs. Each log is a space-delimited string of words, where the first word is the identifier.",
      "There are two types of logs: letter-logs (consist of lowercase letters) and digit-logs (consist of digits).",
      "Reorder these logs so that all letter-logs come before any digit-log. Letter-logs are sorted lexicographically by their contents; if their contents are the same, sort them by their identifiers. Digit-logs maintain their relative order."
    ],
    bulletPoints: ["Custom comparator sort with stable sorting."],
    examples: [
      {
        input: "logs = ['dig1 8 1 5 1','let1 art can','dig2 3 6','let2 own kit dig','let3 art zero']",
        output: "['let1 art can','let3 art zero','let2 own kit dig','dig1 8 1 5 1','dig2 3 6']",
        explanation: "Letter-logs are sorted alphabetically; digit-logs keep original order."
      }
    ],
    constraints: ["1 <= logs.length <= 100", "3 <= logs[i].length <= 100"],
    starterTemplates: {
      cpp: "class Solution {\npublic:\n    vector<string> reorderLogFiles(vector<string>& logs) {\n        \n    }\n};",
      java: "class Solution {\n    public String[] reorderLogFiles(String[] logs) {\n        return new String[]{};\n    }\n}",
      python: "class Solution:\n    def reorderLogFiles(self, logs: list[str]) -> list[str]:\n        pass",
      typescript: "function reorderLogFiles(logs: string[]): string[] {\n    return [];\n}"
    },
    visibleTestCases: [
      { input: "['dig1 8 1 5 1','let1 art can','dig2 3 6','let2 own kit dig','let3 art zero']", expectedOutput: "['let1 art can','let3 art zero','let2 own kit dig','dig1 8 1 5 1','dig2 3 6']" }
    ],
    hiddenTestCases: [
      { input: "['a1 9 2 3 1','g1 act car','zo4 4 7','ab1 off key dog','a8 act zoo']", expectedOutput: "['g1 act car','a8 act zoo','ab1 off key dog','a1 9 2 3 1','zo4 4 7']" }
    ]
  },

  // =========================================================================
  // 2. SDE 1 (L4): LC 1192, 2104, 42, 210, 2281, 1152, 767, 1010, 907, 84
  // =========================================================================
  "amz-sde1-s1-q1": {
    id: "amz-sde1-s1-q1",
    title: "Critical Connections in AWS Server Infrastructure (LC 1192)",
    taskIndex: 1,
    totalTasks: 2,
    difficulty: "Hard",
    timeLimit: "2s",
    memoryLimit: "128MB",
    paragraphs: [
      "There are n servers numbered from 0 to n - 1 connected by undirected server-to-server connections forming a network.",
      "A critical connection is a connection that, if removed, makes some servers unable to communicate with other servers.",
      "Return all critical connections in the network in any order using Tarjan's bridge-finding algorithm."
    ],
    bulletPoints: [
      "A bridge in an undirected graph has low[v] > disc[u].",
      "Must run in O(V + E) time."
    ],
    examples: [
      {
        input: "n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]",
        output: "[[1,3]]",
        explanation: "Removing [1, 3] isolates server 3 from the rest of the cluster."
      }
    ],
    constraints: ["2 <= n <= 10^5", "n - 1 <= connections.length <= 10^5"],
    starterTemplates: {
      cpp: "class Solution {\npublic:\n    vector<vector<int>> criticalConnections(int n, vector<vector<int>>& connections) {\n        \n    }\n};",
      java: "class Solution {\n    public List<List<Integer>> criticalConnections(int n, List<List<Integer>> connections) {\n        return new ArrayList<>();\n    }\n}",
      python: "class Solution:\n    def criticalConnections(self, n: int, connections: list[list[int]]) -> list[list[int]]:\n        pass",
      typescript: "function criticalConnections(n: number, connections: number[][]): number[][] {\n    return [];\n}"
    },
    visibleTestCases: [
      { input: "4, [[0,1],[1,2],[2,0],[1,3]]", expectedOutput: "[[1,3]]" }
    ],
    hiddenTestCases: [
      { input: "2, [[0,1]]", expectedOutput: "[[0,1]]" }
    ]
  },

  "amz-sde1-s2-q1": {
    id: "amz-sde1-s2-q1",
    title: "Sum of Subarray Ranges in Telemetry (LC 2104)",
    taskIndex: 1,
    totalTasks: 2,
    difficulty: "Medium",
    timeLimit: "2s",
    memoryLimit: "64MB",
    paragraphs: [
      "You are given an integer array nums. The range of a subarray of nums is the difference between the largest and smallest element in the subarray.",
      "Return the sum of all subarray ranges of nums.",
      "An O(N) solution using monotonic stacks is expected for full score."
    ],
    bulletPoints: [
      "Sum of ranges = (Sum of all subarray maximums) - (Sum of all subarray minimums).",
      "Monotonic stack tracks previous/next smaller/greater elements in O(N)."
    ],
    examples: [
      {
        input: "nums = [1,2,3]",
        output: "4",
        explanation: "Subarrays: [1]->0, [2]->0, [3]->0, [1,2]->1, [2,3]->1, [1,2,3]->2. Total = 4."
      },
      {
        input: "nums = [1,3,3]",
        output: "4",
        explanation: "Subarrays: [1,3]->2, [3,3]->0, [1,3,3]->2. Total = 4."
      }
    ],
    constraints: ["1 <= nums.length <= 1000 (O(N^2) passes), up to 3*10^4 for O(N)"],
    starterTemplates: {
      cpp: "class Solution {\npublic:\n    long long subArrayRanges(vector<int>& nums) {\n        \n    }\n};",
      java: "class Solution {\n    public long subArrayRanges(int[] nums) {\n        return 0L;\n    }\n}",
      python: "class Solution:\n    def subArrayRanges(self, nums: list[int]) -> int:\n        pass",
      typescript: "function subArrayRanges(nums: number[]): number {\n    return 0;\n}"
    },
    visibleTestCases: [
      { input: "[1,2,3]", expectedOutput: "4" },
      { input: "[1,3,3]", expectedOutput: "4" }
    ],
    hiddenTestCases: [
      { input: "[4,-2,-3,4,1]", expectedOutput: "59" }
    ]
  },

  "amz-sde1-s3-q1": {
    id: "amz-sde1-s3-q1",
    title: "Trapping Rain Water in Yard (LC 42)",
    taskIndex: 1,
    totalTasks: 2,
    difficulty: "Hard",
    timeLimit: "2s",
    memoryLimit: "64MB",
    paragraphs: [
      "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining."
    ],
    bulletPoints: [
      "Two pointers approach with left_max and right_max solves this in O(N) time and O(1) extra space."
    ],
    examples: [
      { input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]", output: "6", explanation: "6 units of rain water are trapped." },
      { input: "height = [4,2,0,3,2,5]", output: "9", explanation: "9 units of rain water are trapped." }
    ],
    constraints: ["n == height.length", "1 <= n <= 2 * 10^4", "0 <= height[i] <= 10^5"],
    starterTemplates: {
      cpp: "class Solution {\npublic:\n    int trap(vector<int>& height) {\n        \n    }\n};",
      java: "class Solution {\n    public int trap(int[] height) {\n        return 0;\n    }\n}",
      python: "class Solution:\n    def trap(self, height: list[int]) -> int:\n        pass",
      typescript: "function trap(height: number[]): number {\n    return 0;\n}"
    },
    visibleTestCases: [
      { input: "[0,1,0,2,1,0,1,3,2,1,2,1]", expectedOutput: "6" },
      { input: "[4,2,0,3,2,5]", expectedOutput: "9" }
    ],
    hiddenTestCases: [
      { input: "[2,0,2]", expectedOutput: "2" },
      { input: "[3,0,0,2,0,4]", expectedOutput: "10" }
    ]
  },

  "amz-sde1-s4-q1": {
    id: "amz-sde1-s4-q1",
    title: "AWS Outage Island Isolation and Recovery (LC 200)",
    taskIndex: 1,
    totalTasks: 2,
    difficulty: "Medium",
    timeLimit: "2s",
    memoryLimit: "64MB",
    paragraphs: [
      "An AWS Availability Zone grid is represented by an m x n 2D binary grid where '1's represent operational servers and '0's represent offline servers.",
      "An active cluster is formed by connecting adjacent active servers horizontally or vertically. Return the total number of independent operational clusters."
    ],
    bulletPoints: ["BFS or DFS with in-place marking."],
    examples: [
      { input: "[['1','1','1','1','0'],['1','1','0','1','0'],['1','1','0','0','0'],['0','0','0','0','0']]", output: "1", explanation: "All 1s belong to one cluster." }
    ],
    constraints: ["1 <= m, n <= 300"],
    starterTemplates: {
      cpp: "class Solution {\npublic:\n    int numIslands(vector<vector<char>>& grid) {\n        \n    }\n};",
      java: "class Solution {\n    public int numIslands(char[][] grid) {\n        return 0;\n    }\n}",
      python: "class Solution:\n    def numIslands(self, grid: list[list[str]]) -> int:\n        pass",
      typescript: "function numIslands(grid: string[][]): number {\n    return 0;\n}"
    },
    visibleTestCases: [
      { input: "[['1','1','1','1','0'],['1','1','0','1','0'],['1','1','0','0','0'],['0','0','0','0','0']]", expectedOutput: "1" }
    ],
    hiddenTestCases: [
      { input: "[['1','1','0','0','0'],['1','1','0','0','0'],['0','0','1','0','0'],['0','0','0','1','1']]", expectedOutput: "3" }
    ]
  },

  "amz-sde1-s5-q1": {
    id: "amz-sde1-s5-q1",
    title: "Total Strength of Amazon Wizards (LC 2281)",
    taskIndex: 1,
    totalTasks: 2,
    difficulty: "Hard",
    timeLimit: "2s",
    memoryLimit: "128MB",
    paragraphs: [
      "As the manager of an Amazon engineering group, you are assessing team strength. You are given an array of integers strength.",
      "The strength of a team is defined as min(strength in team) * sum(strength in team).",
      "Return the sum of the total strength of all possible contiguous teams. Since the answer may be very large, return it modulo 10^9 + 7."
    ],
    bulletPoints: [
      "For each element, find left and right bounds where it is the strictly minimum value using a monotonic stack.",
      "Calculate prefix sum of prefix sums to find subarray sums in O(1)."
    ],
    examples: [
      {
        input: "strength = [1,3,1,2]",
        output: "44",
        explanation: "Sum of all min * sum over all contiguous subarrays modulo 10^9+7 is 44."
      }
    ],
    constraints: ["1 <= strength.length <= 10^5", "1 <= strength[i] <= 10^9"],
    starterTemplates: {
      cpp: "class Solution {\npublic:\n    int totalStrength(vector<int>& strength) {\n        \n    }\n};",
      java: "class Solution {\n    public int totalStrength(int[] strength) {\n        return 0;\n    }\n}",
      python: "class Solution:\n    def totalStrength(self, strength: list[int]) -> int:\n        pass",
      typescript: "function totalStrength(strength: number[]): number {\n    return 0;\n}"
    },
    visibleTestCases: [
      { input: "[1,3,1,2]", expectedOutput: "44" }
    ],
    hiddenTestCases: [
      { input: "[5,4,6]", expectedOutput: "213" }
    ]
  },

  "amz-sde1-s6-q1": {
    id: "amz-sde1-s6-q1",
    title: "Package Build Order & Dependency DAG (LC 210)",
    taskIndex: 1,
    totalTasks: 2,
    difficulty: "Medium",
    timeLimit: "2s",
    memoryLimit: "64MB",
    paragraphs: [
      "There are a total of numCourses packages you have to compile, labeled from 0 to numCourses - 1.",
      "You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must build bi before ai.",
      "Return the ordering of packages you should compile to finish all packages. If it is impossible, return an empty array."
    ],
    bulletPoints: ["Topological sort via Kahn's algorithm (in-degree array + BFS queue)."],
    examples: [
      { input: "numCourses = 2, prerequisites = [[1,0]]", output: "[0,1]", explanation: "To compile 1, compile 0 first." },
      { input: "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]", output: "[0,1,2,3]", explanation: "[0,2,1,3] is also valid." }
    ],
    constraints: ["1 <= numCourses <= 2000", "0 <= prerequisites.length <= numCourses * (numCourses - 1)"],
    starterTemplates: {
      cpp: "class Solution {\npublic:\n    vector<int> findOrder(int numCourses, vector<vector<int>>& prerequisites) {\n        \n    }\n};",
      java: "class Solution {\n    public int[] findOrder(int numCourses, int[][] prerequisites) {\n        return new int[]{};\n    }\n}",
      python: "class Solution:\n    def findOrder(self, numCourses: int, prerequisites: list[list[int]]) -> list[int]:\n        pass",
      typescript: "function findOrder(numCourses: number, prerequisites: number[][]): number[] {\n    return [];\n}"
    },
    visibleTestCases: [
      { input: "2, [[1,0]]", expectedOutput: "[0,1]" },
      { input: "4, [[1,0],[2,0],[3,1],[3,2]]", expectedOutput: "[0,1,2,3]" }
    ],
    hiddenTestCases: [
      { input: "2, [[1,0],[0,1]]", expectedOutput: "[]" }
    ]
  },

  "amz-sde1-s7-q1": {
    id: "amz-sde1-s7-q1",
    title: "Reorganize Warehouse Item Storage (LC 767)",
    taskIndex: 1,
    totalTasks: 2,
    difficulty: "Medium",
    timeLimit: "2s",
    memoryLimit: "64MB",
    paragraphs: [
      "Given a string s representing item bins, rearrange the characters of s so that any two adjacent characters are not the same.",
      "Return any possible rearrangement of s or return '' if not possible."
    ],
    bulletPoints: [
      "If the most frequent character appears more than (length + 1) / 2 times, rearrangement is impossible.",
      "Greedy priority queue or bucket filling at even/odd indices."
    ],
    examples: [
      { input: "s = 'aab'", output: "'aba'", explanation: "No adjacent identical characters." },
      { input: "s = 'aaab'", output: "''", explanation: "'a' count is 3, which exceeds (4+1)/2." }
    ],
    constraints: ["1 <= s.length <= 500", "s consists of lowercase English letters."],
    starterTemplates: {
      cpp: "class Solution {\npublic:\n    string reorganizeString(string s) {\n        \n    }\n};",
      java: "class Solution {\n    public String reorganizeString(String s) {\n        return \"\";\n    }\n}",
      python: "class Solution:\n    def reorganizeString(self, s: str) -> str:\n        pass",
      typescript: "function reorganizeString(s: string): string {\n    return \"\";\n}"
    },
    visibleTestCases: [
      { input: "'aab'", expectedOutput: "'aba'" },
      { input: "'aaab'", expectedOutput: "''" }
    ],
    hiddenTestCases: [
      { input: "'vvvlo'", expectedOutput: "'vlvov'" }
    ]
  },

  "amz-sde1-s8-q1": {
    id: "amz-sde1-s8-q1",
    title: "Optimal Delivery Fleet Aircraft Route Optimization",
    taskIndex: 1,
    totalTasks: 2,
    difficulty: "Medium",
    timeLimit: "2s",
    memoryLimit: "64MB",
    paragraphs: [
      "Given maxTravelDist and two arrays forwardRouteList and returnRouteList of pairs [id, distance].",
      "Find all pairs of [forward_id, return_id] such that total distance forward + return <= maxTravelDist and is as close to maxTravelDist as possible."
    ],
    bulletPoints: ["Sort one list and binary search, or two pointers."],
    examples: [
      {
        input: "maxTravelDist = 7000, forward = [[1,2000],[2,4000],[3,6000]], returnR = [[1,2000]]",
        output: "[[2,1]]",
        explanation: "Distance 4000 + 2000 = 6000 <= 7000 is optimal."
      }
    ],
    constraints: ["1 <= list lengths <= 10^4", "Distances >= 1"],
    starterTemplates: {
      cpp: "class Solution {\npublic:\n    vector<vector<int>> optimalAirRoutes(int maxTravelDist, vector<vector<int>>& forward, vector<vector<int>>& ret) {\n        \n    }\n};",
      java: "class Solution {\n    public List<List<Integer>> optimalAirRoutes(int maxTravelDist, List<List<Integer>> forward, List<List<Integer>> ret) {\n        return new ArrayList<>();\n    }\n}",
      python: "class Solution:\n    def optimalAirRoutes(self, maxTravelDist: int, forward: list[list[int]], ret: list[list[int]]) -> list[list[int]]:\n        pass",
      typescript: "function optimalAirRoutes(maxTravelDist: number, forward: number[][], ret: number[][]): number[][] {\n    return [];\n}"
    },
    visibleTestCases: [
      { input: "7000, [[1,2000],[2,4000],[3,6000]], [[1,2000]]", expectedOutput: "[[2,1]]" }
    ],
    hiddenTestCases: [
      { input: "10000, [[1,3000],[2,5000],[3,7000],[4,10000]], [[1,2000],[2,3000],[3,4000],[4,5000]]", expectedOutput: "[[2,4],[3,2]]" }
    ]
  },

  "amz-sde1-s9-q1": {
    id: "amz-sde1-s9-q1",
    title: "Pairs of Songs Divisible by 60 (LC 1010)",
    taskIndex: 1,
    totalTasks: 2,
    difficulty: "Medium",
    timeLimit: "2s",
    memoryLimit: "64MB",
    paragraphs: [
      "You are given a list of songs where the ith song has duration time[i] seconds.",
      "Return the number of pairs of songs (i, j) with i < j such that (time[i] + time[j]) % 60 == 0."
    ],
    bulletPoints: ["Use a frequency array of size 60 for remainders mod 60."],
    examples: [
      { input: "time = [30,20,150,100,40]", output: "3", explanation: "(30, 150) -> 180, (20, 100) -> 120, (20, 40) -> 60." },
      { input: "time = [60,60,60]", output: "3", explanation: "All 3 pairs sum to 120 % 60 == 0." }
    ],
    constraints: ["1 <= time.length <= 6 * 10^4", "1 <= time[i] <= 500"],
    starterTemplates: {
      cpp: "class Solution {\npublic:\n    int numPairsDivisibleBy60(vector<int>& time) {\n        \n    }\n};",
      java: "class Solution {\n    public int numPairsDivisibleBy60(int[] time) {\n        return 0;\n    }\n}",
      python: "class Solution:\n    def numPairsDivisibleBy60(self, time: list[int]) -> int:\n        pass",
      typescript: "function numPairsDivisibleBy60(time: number[]): number {\n    return 0;\n}"
    },
    visibleTestCases: [
      { input: "[30,20,150,100,40]", expectedOutput: "3" },
      { input: "[60,60,60]", expectedOutput: "3" }
    ],
    hiddenTestCases: [
      { input: "[10,20,30,40,50]", expectedOutput: "2" }
    ]
  },

  "amz-sde1-s10-q1": {
    id: "amz-sde1-s10-q1",
    title: "Analyze Amazon Web Traffic 3-Sequence Pattern (LC 1152)",
    taskIndex: 1,
    totalTasks: 2,
    difficulty: "Medium",
    timeLimit: "2s",
    memoryLimit: "64MB",
    paragraphs: [
      "You are given two string arrays username and website and an integer array timestamp.",
      "A 3-sequence is a list of three websites visited by the same user in increasing order of their timestamps.",
      "The score of a 3-sequence is the number of distinct users that visited those three websites in order. Return the 3-sequence with the highest score. If there is a tie, return the lexicographically smallest."
    ],
    bulletPoints: ["Sort logs by timestamp, find all 3-tuples per user, track unique users."],
    examples: [
      {
        input: "username = ['u1','u1','u1','u2','u2','u2'], timestamp = [1,2,3,4,5,6], website = ['a','b','c','a','b','c']",
        output: "['a','b','c']",
        explanation: "Both u1 and u2 visited ('a', 'b', 'c')."
      }
    ],
    constraints: ["3 <= username.length <= 100", "1 <= username[i].length <= 10"],
    starterTemplates: {
      cpp: "class Solution {\npublic:\n    vector<string> mostVisitedPattern(vector<string>& username, vector<int>& timestamp, vector<string>& website) {\n        \n    }\n};",
      java: "class Solution {\n    public List<String> mostVisitedPattern(String[] username, int[] timestamp, String[] website) {\n        return new ArrayList<>();\n    }\n}",
      python: "class Solution:\n    def mostVisitedPattern(self, username: list[str], timestamp: list[int], website: list[str]) -> list[str]:\n        pass",
      typescript: "function mostVisitedPattern(username: string[], timestamp: number[], website: string[]): string[] {\n    return [];\n}"
    },
    visibleTestCases: [
      { input: "['u1','u1','u1','u2','u2','u2'], [1,2,3,4,5,6], ['a','b','c','a','b','c']", expectedOutput: "['a','b','c']" }
    ],
    hiddenTestCases: [
      { input: "['a','a','a','a'], [1,2,3,4], ['x','y','z','w']", expectedOutput: "['x','y','z']" }
    ]
  },

  // =========================================================================
  // 3. SDE 2 (L5): LC 146, 295, 126, 815, 312, 212, 269, 480, 847, 472
  // =========================================================================
  "amz-sde2-s1-q1": {
    id: "amz-sde2-s1-q1",
    title: "High-Throughput LRU Cache Storage Driver (LC 146)",
    taskIndex: 1,
    totalTasks: 2,
    difficulty: "Medium",
    timeLimit: "2s",
    memoryLimit: "64MB",
    paragraphs: [
      "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
      "Implement the LRUCache class with capacity, get(int key), and put(int key, int value) in O(1) average time complexity."
    ],
    bulletPoints: [
      "get returns -1 if key does not exist.",
      "put evicts least recently accessed element if capacity is reached.",
      "Requires doubly linked list + hash map."
    ],
    examples: [
      {
        input: "capacity = 2, put(1,1), put(2,2), get(1), put(3,3), get(2)",
        output: "get(1)->1, get(2)->-1",
        explanation: "Key 2 was evicted because 1 was accessed and became most recently used."
      }
    ],
    constraints: ["1 <= capacity <= 3000", "0 <= key <= 10^4", "0 <= value <= 10^5"],
    starterTemplates: {
      cpp: "class LRUCache {\npublic:\n    LRUCache(int capacity) {\n        \n    }\n    int get(int key) {\n        return -1;\n    }\n    void put(int key, int value) {\n        \n    }\n};",
      java: "class LRUCache {\n    public LRUCache(int capacity) {}\n    public int get(int key) { return -1; }\n    public void put(int key, int value) {}\n}",
      python: "class LRUCache:\n    def __init__(self, capacity: int):\n        pass\n    def get(self, key: int) -> int:\n        return -1\n    def put(self, key: int, value: int) -> None:\n        pass",
      typescript: "class LRUCache {\n    constructor(capacity: number) {}\n    get(key: number): number { return -1; }\n    put(key: number, value: number): void {}\n}"
    },
    visibleTestCases: [
      { input: "LRUCache(2), put(1,1), put(2,2), get(1)", expectedOutput: "1" },
      { input: "put(3,3), get(2)", expectedOutput: "-1" }
    ],
    hiddenTestCases: [
      { input: "get(99)", expectedOutput: "-1" }
    ]
  },

  "amz-sde2-s2-q1": {
    id: "amz-sde2-s2-q1",
    title: "Find Median from AWS Telemetry Data Stream (LC 295)",
    taskIndex: 1,
    totalTasks: 2,
    difficulty: "Hard",
    timeLimit: "2s",
    memoryLimit: "128MB",
    paragraphs: [
      "The median is the middle value in an ordered integer list.",
      "Implement the MedianFinder class with addNum(int num) and findMedian() returning double in O(log N) and O(1) respectively."
    ],
    bulletPoints: ["Maintain two heaps: max-heap for lower half and min-heap for upper half."],
    examples: [
      { input: "addNum(1), addNum(2), findMedian(), addNum(3), findMedian()", output: "1.5, 2.0", explanation: "Median of [1,2] is 1.5; median of [1,2,3] is 2.0." }
    ],
    constraints: ["At most 5 * 10^4 calls will be made to addNum and findMedian."],
    starterTemplates: {
      cpp: "class MedianFinder {\npublic:\n    MedianFinder() {}\n    void addNum(int num) {}\n    double findMedian() { return 0.0; }\n};",
      java: "class MedianFinder {\n    public MedianFinder() {}\n    public void addNum(int num) {}\n    public double findMedian() { return 0.0; }\n}",
      python: "class MedianFinder:\n    def __init__(self):\n        pass\n    def addNum(self, num: int) -> None:\n        pass\n    def findMedian(self) -> float:\n        return 0.0",
      typescript: "class MedianFinder {\n    constructor() {}\n    addNum(num: number): void {}\n    findMedian(): number { return 0; }\n}"
    },
    visibleTestCases: [
      { input: "addNum(1), addNum(2), findMedian()", expectedOutput: "1.5" }
    ],
    hiddenTestCases: [
      { input: "addNum(5), findMedian()", expectedOutput: "5.0" }
    ]
  },

  "amz-sde2-s3-q1": {
    id: "amz-sde2-s3-q1",
    title: "Word Ladder II Shortest Cluster Migration (LC 126)",
    taskIndex: 1,
    totalTasks: 2,
    difficulty: "Hard",
    timeLimit: "2s",
    memoryLimit: "128MB",
    paragraphs: [
      "Given two words, beginWord and endWord, and a dictionary wordList, return all the shortest transformation sequences from beginWord to endWord.",
      "Every adjacent pair of words must differ by exactly one letter."
    ],
    bulletPoints: ["BFS to find shortest level distance, then DFS backtracking to reconstruct paths."],
    examples: [
      {
        input: "beginWord = 'hit', endWord = 'cog', wordList = ['hot','dot','dog','lot','log','cog']",
        output: "[['hit','hot','dot','dog','cog'],['hit','hot','lot','log','cog']]",
        explanation: "Two shortest transformation sequences of length 5."
      }
    ],
    constraints: ["1 <= beginWord.length <= 5", "1 <= wordList.length <= 500"],
    starterTemplates: {
      cpp: "class Solution {\npublic:\n    vector<vector<string>> findLadders(string beginWord, string endWord, vector<string>& wordList) {\n        \n    }\n};",
      java: "class Solution {\n    public List<List<String>> findLadders(String beginWord, String endWord, List<String> wordList) {\n        return new ArrayList<>();\n    }\n}",
      python: "class Solution:\n    def findLadders(self, beginWord: str, endWord: str, wordList: list[str]) -> list[list[str]]:\n        pass",
      typescript: "function findLadders(beginWord: string, endWord: string, wordList: string[]): string[][] {\n    return [];\n}"
    },
    visibleTestCases: [
      { input: "'hit', 'cog', ['hot','dot','dog','lot','log','cog']", expectedOutput: "[['hit','hot','dot','dog','cog'],['hit','hot','lot','log','cog']]" }
    ],
    hiddenTestCases: [
      { input: "'a', 'c', ['a','b','c']", expectedOutput: "[['a','c']]" }
    ]
  },

  "amz-sde2-s4-q1": {
    id: "amz-sde2-s4-q1",
    title: "Bus Routes Multi-Transit Graph (LC 815)",
    taskIndex: 1,
    totalTasks: 2,
    difficulty: "Hard",
    timeLimit: "2s",
    memoryLimit: "128MB",
    paragraphs: [
      "You are given an array routes representing bus routes where routes[i] is a bus route that the ith bus repeats forever.",
      "You start at bus stop source and want to go to target. Return the least number of buses you must take. Return -1 if impossible."
    ],
    bulletPoints: ["BFS on bus routes rather than stops to avoid TLE."],
    examples: [
      { input: "routes = [[1,2,7],[3,6,7]], source = 1, target = 6", output: "2", explanation: "Take bus 0 to stop 7, then bus 1 to stop 6." }
    ],
    constraints: ["1 <= routes.length <= 500", "1 <= routes[i].length <= 10^5"],
    starterTemplates: {
      cpp: "class Solution {\npublic:\n    int numBusesToDestination(vector<vector<int>>& routes, int source, int target) {\n        \n    }\n};",
      java: "class Solution {\n    public int numBusesToDestination(int[][] routes, int source, int target) {\n        return -1;\n    }\n}",
      python: "class Solution:\n    def numBusesToDestination(self, routes: list[list[int]], source: int, target: int) -> int:\n        pass",
      typescript: "function numBusesToDestination(routes: number[][], source: number, target: number): number {\n    return -1;\n}"
    },
    visibleTestCases: [
      { input: "[[1,2,7],[3,6,7]], 1, 6", expectedOutput: "2" }
    ],
    hiddenTestCases: [
      { input: "[[7,12],[4,5,15],[6],[15,19],[9,12,13]], 15, 12", expectedOutput: "-1" }
    ]
  },

  "amz-sde2-s5-q1": {
    id: "amz-sde2-s5-q1",
    title: "Burst Balloons Revenue Dynamic Programming (LC 312)",
    taskIndex: 1,
    totalTasks: 2,
    difficulty: "Hard",
    timeLimit: "2s",
    memoryLimit: "128MB",
    paragraphs: [
      "You are given n balloons, indexed from 0 to n - 1. Each balloon is painted with a number on it represented by an array nums.",
      "If you burst the ith balloon, you will get nums[i - 1] * nums[i] * nums[i + 1] coins.",
      "Return the maximum coins you can collect by bursting the balloons wisely."
    ],
    bulletPoints: ["Interval Dynamic Programming: choose which balloon to burst LAST in range [i, j]."],
    examples: [
      { input: "nums = [3,1,5,8]", output: "167", explanation: "nums = [3,1,5,8] -> [3,5,8] -> [3,8] -> [8] -> [] gives 167 coins." }
    ],
    constraints: ["n == nums.length", "1 <= n <= 300", "0 <= nums[i] <= 100"],
    starterTemplates: {
      cpp: "class Solution {\npublic:\n    int maxCoins(vector<int>& nums) {\n        \n    }\n};",
      java: "class Solution {\n    public int maxCoins(int[] nums) {\n        return 0;\n    }\n}",
      python: "class Solution:\n    def maxCoins(self, nums: list[int]) -> int:\n        pass",
      typescript: "function maxCoins(nums: number[]): number {\n    return 0;\n}"
    },
    visibleTestCases: [
      { input: "[3,1,5,8]", expectedOutput: "167" },
      { input: "[1,5]", expectedOutput: "10" }
    ],
    hiddenTestCases: [
      { input: "[7]", expectedOutput: "7" }
    ]
  },

  // =========================================================================
  // 4. SDE 3 / PRINCIPAL (High Scale, Concurrency, Distributed & Systems)
  // =========================================================================
  "amz-sde3-s1-q1": {
    id: "amz-sde3-s1-q1",
    title: "AWS DynamoDB Segment Tree with Lazy Range Updates",
    taskIndex: 1,
    totalTasks: 2,
    difficulty: "Hard",
    timeLimit: "2s",
    memoryLimit: "128MB",
    paragraphs: [
      "In a distributed AWS storage partition, read/write latency metrics are continuously recorded across N partition shards.",
      "Design a Segment Tree data structure that supports range updates (adding delta latency to shards in [L, R]) and range minimum queries in O(log N) time with lazy propagation."
    ],
    bulletPoints: [
      "Both updateRange(L, R, delta) and queryMin(L, R) must strictly run in O(log N).",
      "Lazy propagation tags postpone child updates until range intersection."
    ],
    examples: [
      { input: "nums = [5, 2, 8, 10, 1], updateRange(1, 3, +4), queryMin(0, 4)", output: "1", explanation: "Global minimum remains 1 at index 4." }
    ],
    constraints: ["1 <= N <= 2 * 10^5", "Total operations <= 10^5"],
    starterTemplates: {
      cpp: "class SegmentTree {\npublic:\n    SegmentTree(vector<long long>& nums) {\n        \n    }\n    void updateRange(int left, int right, long long delta) {\n        \n    }\n    long long queryMin(int left, int right) {\n        return 0;\n    }\n};",
      java: "class SegmentTree {\n    public SegmentTree(long[] nums) {}\n    public void updateRange(int left, int right, long delta) {}\n    public long queryMin(int left, int right) { return 0; }\n}",
      python: "class SegmentTree:\n    def __init__(self, nums: list[int]):\n        pass\n    def updateRange(self, left: int, right: int, delta: int) -> None:\n        pass\n    def queryMin(self, left: int, right: int) -> int:\n        return 0",
      typescript: "class SegmentTree {\n    constructor(nums: number[]) {}\n    updateRange(left: number, right: number, delta: number): void {}\n    queryMin(left: number, right: number): number { return 0; }\n}"
    },
    visibleTestCases: [
      { input: "nums = [5, 2, 8, 10, 1], queryMin(0, 4)", expectedOutput: "1" }
    ],
    hiddenTestCases: [
      { input: "nums = [10, 20, 30], updateRange(0, 1, -5), queryMin(0, 1)", expectedOutput: "5" }
    ]
  },

  "amz-sde3-s2-q1": {
    id: "amz-sde3-s2-q1",
    title: "High-Concurrency Sliding Window Rate Limiter",
    taskIndex: 1,
    totalTasks: 2,
    difficulty: "Hard",
    timeLimit: "2s",
    memoryLimit: "128MB",
    paragraphs: [
      "Implement a thread-safe sliding window log rate limiter that allows up to maxRequests within a rolling window of windowSizeMs milliseconds.",
      "The method allowRequest(userId, timestampMs) must return true if request is permitted or false if rate limit is exceeded."
    ],
    bulletPoints: [
      "Memory must not grow indefinitely; expired timestamps outside the rolling window must be pruned.",
      "O(log K) or O(1) amortized check per request."
    ],
    examples: [
      { input: "maxRequests = 3, windowSizeMs = 1000, allowRequest('user1', 100), allowRequest('user1', 200), allowRequest('user1', 500), allowRequest('user1', 800)", output: "true, true, true, false", explanation: "4th request at 800ms exceeds limit of 3 within 1000ms." }
    ],
    constraints: ["1 <= maxRequests <= 10^5", "Timestamps monotonically non-decreasing per user."],
    starterTemplates: {
      cpp: "class RateLimiter {\npublic:\n    RateLimiter(int maxRequests, long long windowSizeMs) {\n        \n    }\n    bool allowRequest(string userId, long long timestampMs) {\n        return true;\n    }\n};",
      java: "class RateLimiter {\n    public RateLimiter(int maxRequests, long windowSizeMs) {}\n    public boolean allowRequest(String userId, long timestampMs) { return true; }\n}",
      python: "class RateLimiter:\n    def __init__(self, maxRequests: int, windowSizeMs: int):\n        pass\n    def allowRequest(self, userId: str, timestampMs: int) -> bool:\n        return True",
      typescript: "class RateLimiter {\n    constructor(maxRequests: number, windowSizeMs: number) {}\n    allowRequest(userId: string, timestampMs: number): boolean { return true; }\n}"
    },
    visibleTestCases: [
      { input: "3, 1000, ['user1',100], ['user1',200], ['user1',500], ['user1',800]", expectedOutput: "true, true, true, false" }
    ],
    hiddenTestCases: [
      { input: "1, 500, ['userA', 10], ['userA', 100], ['userA', 600]", expectedOutput: "true, false, true" }
    ]
  }
};

// Mirror remaining indices up to 10 with distinct titles and proper cases
for (let i = 1; i <= 10; i++) {
  const internKey = `amz-intern-s${i}-q1`;
  if (!AMAZON_OA_ALL_PROBLEMS[internKey]) {
    AMAZON_OA_ALL_PROBLEMS[internKey] = {
      ...AMAZON_OA_ALL_PROBLEMS["amz-intern-s1-q1"],
      id: internKey,
      title: `Amazon Intern Technical Assessment (Set ${i})`
    };
  }

  const sde1Key = `amz-sde1-s${i}-q1`;
  if (!AMAZON_OA_ALL_PROBLEMS[sde1Key]) {
    AMAZON_OA_ALL_PROBLEMS[sde1Key] = {
      ...AMAZON_OA_ALL_PROBLEMS["amz-sde1-s1-q1"],
      id: sde1Key,
      title: `Amazon SDE I (L4) Online Assessment (Set ${i})`
    };
  }

  const sde2Key = `amz-sde2-s${i}-q1`;
  if (!AMAZON_OA_ALL_PROBLEMS[sde2Key]) {
    AMAZON_OA_ALL_PROBLEMS[sde2Key] = {
      ...AMAZON_OA_ALL_PROBLEMS["amz-sde2-s1-q1"],
      id: sde2Key,
      title: `Amazon SDE II (L5) Systems Calibration (Set ${i})`
    };
  }

  const sde3Key = `amz-sde3-s${i}-q1`;
  if (!AMAZON_OA_ALL_PROBLEMS[sde3Key]) {
    AMAZON_OA_ALL_PROBLEMS[sde3Key] = {
      ...AMAZON_OA_ALL_PROBLEMS["amz-sde3-s1-q1"],
      id: sde3Key,
      title: `Amazon SDE III (L6) Architecture Problem (Set ${i})`
    };
  }

  const princKey = `amz-principal-s${i}-q1`;
  if (!AMAZON_OA_ALL_PROBLEMS[princKey]) {
    AMAZON_OA_ALL_PROBLEMS[princKey] = {
      ...AMAZON_OA_ALL_PROBLEMS["amz-sde3-s2-q1"],
      id: princKey,
      title: `Amazon Principal (L7) Fault-Tolerance Defense (Set ${i})`
    };
  }
}
