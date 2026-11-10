import { ProblemDefinition } from "../../types";

// GENERATED. 3 roles x 10 sets x (R1: 2 tasks, R2/R3/R4: 1 problem each) = 150 problems.
export const GOOGLE_ALL_PROBLEMS: Record<string, ProblemDefinition> = {
 "goog-intern-s1-r1-q1": {
  "id": "goog-intern-s1-r1-q1",
  "title": "Validate Config Brackets",
  "difficulty": "Easy",
  "company": "Google",
  "category": "Stack",
  "tags": [
   "Google Round 1",
   "Stack",
   "String",
   "Set 1"
  ],
  "paragraphs": [
   "A Google config file uses (), [] and {}. Return true if every bracket is closed by the same type in the correct order."
  ],
  "examples": [
   {
    "input": "s = \"()[]{}\"",
    "output": "true"
   },
   {
    "input": "s = \"(]\"",
    "output": "false"
   }
  ],
  "constraints": [
   "Target O(N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-intern-s1-r1-q1-v1",
    "input": "\"()[]{}\"",
    "expectedOutput": "true"
   },
   {
    "id": "goog-intern-s1-r1-q1-v2",
    "input": "\"(]\"",
    "expectedOutput": "false"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-intern-s1-r1-q1-h1",
    "input": "\"\"",
    "expectedOutput": "true"
   },
   {
    "id": "goog-intern-s1-r1-q1-h2",
    "input": "\"([{}])\"",
    "expectedOutput": "true"
   },
   {
    "id": "goog-intern-s1-r1-q1-h3",
    "input": "\"(((\"",
    "expectedOutput": "false"
   },
   {
    "id": "goog-intern-s1-r1-q1-h4",
    "input": "\"{[}]\"",
    "expectedOutput": "false"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} s\n * @return {boolean}\n */\nfunction isValid(s) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def isValid(self, s: str) -> bool:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    bool isValid(string s) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "goog-intern-s1-r1-q2"
 },
 "goog-intern-s1-r1-q2": {
  "id": "goog-intern-s1-r1-q2",
  "title": "Longest Unique Query Fragment",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Sliding Window",
  "tags": [
   "Google Round 1",
   "Sliding Window",
   "Hash Table",
   "Set 1"
  ],
  "paragraphs": [
   "Given a search query string s, return the length of the longest substring without repeating characters."
  ],
  "examples": [
   {
    "input": "s = \"abcabcbb\"",
    "output": "3"
   },
   {
    "input": "s = \"bbbbb\"",
    "output": "1"
   }
  ],
  "constraints": [
   "Target O(N) time and O(min(N,A)) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-intern-s1-r1-q2-v1",
    "input": "\"abcabcbb\"",
    "expectedOutput": "3"
   },
   {
    "id": "goog-intern-s1-r1-q2-v2",
    "input": "\"bbbbb\"",
    "expectedOutput": "1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-intern-s1-r1-q2-h1",
    "input": "\"\"",
    "expectedOutput": "0"
   },
   {
    "id": "goog-intern-s1-r1-q2-h2",
    "input": "\"pwwkew\"",
    "expectedOutput": "3"
   },
   {
    "id": "goog-intern-s1-r1-q2-h3",
    "input": "\"abba\"",
    "expectedOutput": "2"
   },
   {
    "id": "goog-intern-s1-r1-q2-h4",
    "input": "\"dvdf\"",
    "expectedOutput": "3"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} s\n * @return {number}\n */\nfunction lengthOfLongestSubstring(s) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def lengthOfLongestSubstring(self, s: str) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int lengthOfLongestSubstring(string s) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(min(N,A))"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "goog-intern-s2-r1-q1": {
  "id": "goog-intern-s2-r1-q1",
  "title": "Sorted Latency Pair",
  "difficulty": "Easy",
  "company": "Google",
  "category": "Two Pointers",
  "tags": [
   "Google Round 1",
   "Two Pointers",
   "Array",
   "Set 2"
  ],
  "paragraphs": [
   "Given a sorted array of latencies and a target, return the 1-indexed positions of the two values that sum to target. Exactly one solution exists."
  ],
  "examples": [
   {
    "input": "numbers = [2,7,11,15], target = 9",
    "output": "[1,2]"
   },
   {
    "input": "numbers = [2,3,4], target = 6",
    "output": "[1,3]"
   }
  ],
  "constraints": [
   "Target O(N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-intern-s2-r1-q1-v1",
    "input": "[2,7,11,15]\n9",
    "expectedOutput": "[1,2]"
   },
   {
    "id": "goog-intern-s2-r1-q1-v2",
    "input": "[2,3,4]\n6",
    "expectedOutput": "[1,3]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-intern-s2-r1-q1-h1",
    "input": "[-1,0]\n-1",
    "expectedOutput": "[1,2]"
   },
   {
    "id": "goog-intern-s2-r1-q1-h2",
    "input": "[1,2,3,4,4,9,56,90]\n8",
    "expectedOutput": "[4,5]"
   },
   {
    "id": "goog-intern-s2-r1-q1-h3",
    "input": "[5,25,75]\n100",
    "expectedOutput": "[2,3]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} numbers\n * @param {number} target\n * @return {number[]}\n */\nfunction twoSum(numbers, target) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def twoSum(self, numbers: List[int], target: int) -> List[int]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<int> twoSum(vector<int>& numbers, int target) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "goog-intern-s2-r1-q2"
 },
 "goog-intern-s2-r1-q2": {
  "id": "goog-intern-s2-r1-q2",
  "title": "Peak Traffic Window",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Sliding Window",
  "tags": [
   "Google Round 1",
   "Sliding Window",
   "Array",
   "Set 2"
  ],
  "paragraphs": [
   "Given an array of per-minute request counts and an integer k, return the maximum sum of any k consecutive minutes."
  ],
  "examples": [
   {
    "input": "counts = [1,12,-5,-6,50,3], k = 4",
    "output": "51"
   },
   {
    "input": "counts = [5], k = 1",
    "output": "5"
   }
  ],
  "constraints": [
   "Target O(N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-intern-s2-r1-q2-v1",
    "input": "[1,12,-5,-6,50,3]\n4",
    "expectedOutput": "51"
   },
   {
    "id": "goog-intern-s2-r1-q2-v2",
    "input": "[5]\n1",
    "expectedOutput": "5"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-intern-s2-r1-q2-h1",
    "input": "[4,2,1,7,8,1,2,8,1,0]\n3",
    "expectedOutput": "16"
   },
   {
    "id": "goog-intern-s2-r1-q2-h2",
    "input": "[-3,-1,-2]\n2",
    "expectedOutput": "-3"
   },
   {
    "id": "goog-intern-s2-r1-q2-h3",
    "input": "[9,9,9,9]\n4",
    "expectedOutput": "36"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} counts\n * @param {number} k\n * @return {number}\n */\nfunction maxWindowSum(counts, k) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def maxWindowSum(self, counts: List[int], k: int) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int maxWindowSum(vector<int>& counts, int k) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "goog-intern-s3-r1-q1": {
  "id": "goog-intern-s3-r1-q1",
  "title": "Insert Position in Sorted Index",
  "difficulty": "Easy",
  "company": "Google",
  "category": "Binary Search",
  "tags": [
   "Google Round 1",
   "Binary Search",
   "Set 3"
  ],
  "paragraphs": [
   "Return the index of target in a sorted array of distinct integers, or the index where it would be inserted to keep the array sorted. Use O(log N) time."
  ],
  "examples": [
   {
    "input": "nums = [1,3,5,6], target = 5",
    "output": "2"
   },
   {
    "input": "nums = [1,3,5,6], target = 2",
    "output": "1"
   }
  ],
  "constraints": [
   "Target O(log N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-intern-s3-r1-q1-v1",
    "input": "[1,3,5,6]\n5",
    "expectedOutput": "2"
   },
   {
    "id": "goog-intern-s3-r1-q1-v2",
    "input": "[1,3,5,6]\n2",
    "expectedOutput": "1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-intern-s3-r1-q1-h1",
    "input": "[1,3,5,6]\n7",
    "expectedOutput": "4"
   },
   {
    "id": "goog-intern-s3-r1-q1-h2",
    "input": "[1,3,5,6]\n0",
    "expectedOutput": "0"
   },
   {
    "id": "goog-intern-s3-r1-q1-h3",
    "input": "[10]\n10",
    "expectedOutput": "0"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number}\n */\nfunction searchInsert(nums, target) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def searchInsert(self, nums: List[int], target: int) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int searchInsert(vector<int>& nums, int target) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(log N)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "goog-intern-s3-r1-q2"
 },
 "goog-intern-s3-r1-q2": {
  "id": "goog-intern-s3-r1-q2",
  "title": "Merge Maintenance Windows",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Sorting",
  "tags": [
   "Google Round 1",
   "Sorting",
   "Intervals",
   "Set 3"
  ],
  "paragraphs": [
   "Given maintenance windows [start, end], merge all overlapping windows and return the result sorted by start."
  ],
  "examples": [
   {
    "input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output": "[[1,6],[8,10],[15,18]]"
   },
   {
    "input": "intervals = [[1,4],[4,5]]",
    "output": "[[1,5]]"
   }
  ],
  "constraints": [
   "Target O(N log N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-intern-s3-r1-q2-v1",
    "input": "[[1,3],[2,6],[8,10],[15,18]]",
    "expectedOutput": "[[1,6],[8,10],[15,18]]"
   },
   {
    "id": "goog-intern-s3-r1-q2-v2",
    "input": "[[1,4],[4,5]]",
    "expectedOutput": "[[1,5]]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-intern-s3-r1-q2-h1",
    "input": "[[1,4],[0,4]]",
    "expectedOutput": "[[0,4]]"
   },
   {
    "id": "goog-intern-s3-r1-q2-h2",
    "input": "[[1,4],[2,3]]",
    "expectedOutput": "[[1,4]]"
   },
   {
    "id": "goog-intern-s3-r1-q2-h3",
    "input": "[[5,6]]",
    "expectedOutput": "[[5,6]]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[][]} intervals\n * @return {number[][]}\n */\nfunction merge(intervals) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def merge(self, intervals: List[List[int]]) -> List[List[int]]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<vector<int>> merge(vector<vector<int>>& intervals) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N log N)",
   "space": "O(N)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "goog-intern-s4-r1-q1": {
  "id": "goog-intern-s4-r1-q1",
  "title": "Reverse Command Tokens",
  "difficulty": "Easy",
  "company": "Google",
  "category": "String",
  "tags": [
   "Google Round 1",
   "String",
   "Parsing",
   "Set 4"
  ],
  "paragraphs": [
   "Reverse the order of the words in s. Words are separated by one or more spaces. The result must have single spaces and no leading or trailing spaces."
  ],
  "examples": [
   {
    "input": "s = \"the sky is blue\"",
    "output": "\"blue is sky the\""
   },
   {
    "input": "s = \"  hello world  \"",
    "output": "\"world hello\""
   }
  ],
  "constraints": [
   "Target O(N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-intern-s4-r1-q1-v1",
    "input": "\"the sky is blue\"",
    "expectedOutput": "\"blue is sky the\""
   },
   {
    "id": "goog-intern-s4-r1-q1-v2",
    "input": "\"  hello world  \"",
    "expectedOutput": "\"world hello\""
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-intern-s4-r1-q1-h1",
    "input": "\"a good   example\"",
    "expectedOutput": "\"example good a\""
   },
   {
    "id": "goog-intern-s4-r1-q1-h2",
    "input": "\"x\"",
    "expectedOutput": "\"x\""
   },
   {
    "id": "goog-intern-s4-r1-q1-h3",
    "input": "\"  one  two three \"",
    "expectedOutput": "\"three two one\""
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} s\n * @return {string}\n */\nfunction reverseWords(s) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def reverseWords(self, s: str) -> str:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    string reverseWords(string s) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "goog-intern-s4-r1-q2"
 },
 "goog-intern-s4-r1-q2": {
  "id": "goog-intern-s4-r1-q2",
  "title": "Longest Repeated Run After Edits",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Sliding Window",
  "tags": [
   "Google Round 1",
   "Sliding Window",
   "Hash Table",
   "Set 4"
  ],
  "paragraphs": [
   "You may change at most k characters of s to any uppercase letter. Return the length of the longest substring containing the same letter after the changes."
  ],
  "examples": [
   {
    "input": "s = \"ABAB\", k = 2",
    "output": "4"
   },
   {
    "input": "s = \"AABABBA\", k = 1",
    "output": "4"
   }
  ],
  "constraints": [
   "Target O(N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-intern-s4-r1-q2-v1",
    "input": "\"ABAB\"\n2",
    "expectedOutput": "4"
   },
   {
    "id": "goog-intern-s4-r1-q2-v2",
    "input": "\"AABABBA\"\n1",
    "expectedOutput": "4"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-intern-s4-r1-q2-h1",
    "input": "\"AAAA\"\n0",
    "expectedOutput": "4"
   },
   {
    "id": "goog-intern-s4-r1-q2-h2",
    "input": "\"ABCDE\"\n1",
    "expectedOutput": "2"
   },
   {
    "id": "goog-intern-s4-r1-q2-h3",
    "input": "\"ABBB\"\n2",
    "expectedOutput": "4"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} s\n * @param {number} k\n * @return {number}\n */\nfunction characterReplacement(s, k) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def characterReplacement(self, s: str, k: int) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int characterReplacement(string s, int k) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "goog-intern-s5-r1-q1": {
  "id": "goog-intern-s5-r1-q1",
  "title": "Count Data Center Clusters",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Graph / DFS",
  "tags": [
   "Google Round 1",
   "DFS",
   "Grid",
   "Graph",
   "Set 5"
  ],
  "paragraphs": [
   "Each row of grid is a string of '1' (server) and '0' (empty). Return the number of clusters, where a cluster is a group of servers connected horizontally or vertically."
  ],
  "examples": [
   {
    "input": "grid = [\"11000\",\"11000\",\"00100\",\"00011\"]",
    "output": "3"
   },
   {
    "input": "grid = [\"111\",\"010\",\"111\"]",
    "output": "1"
   }
  ],
  "constraints": [
   "Target O(M*N) time and O(M*N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-intern-s5-r1-q1-v1",
    "input": "[\"11000\",\"11000\",\"00100\",\"00011\"]",
    "expectedOutput": "3"
   },
   {
    "id": "goog-intern-s5-r1-q1-v2",
    "input": "[\"111\",\"010\",\"111\"]",
    "expectedOutput": "1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-intern-s5-r1-q1-h1",
    "input": "[\"000\"]",
    "expectedOutput": "0"
   },
   {
    "id": "goog-intern-s5-r1-q1-h2",
    "input": "[\"101\",\"010\",\"101\"]",
    "expectedOutput": "5"
   },
   {
    "id": "goog-intern-s5-r1-q1-h3",
    "input": "[\"1\"]",
    "expectedOutput": "1"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string[]} grid\n * @return {number}\n */\nfunction numClusters(grid) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def numClusters(self, grid: List[str]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int numClusters(vector<string>& grid) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(M*N)",
   "space": "O(M*N)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "goog-intern-s5-r1-q2"
 },
 "goog-intern-s5-r1-q2": {
  "id": "goog-intern-s5-r1-q2",
  "title": "Corrupted Replica Spread",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Graph / BFS",
  "tags": [
   "Google Round 1",
   "BFS",
   "Grid",
   "Multi-source",
   "Set 5"
  ],
  "paragraphs": [
   "In grid, 0 is empty, 1 is a healthy replica and 2 is a corrupted replica. Each minute corruption spreads to the 4-neighbours that are healthy. Return the minutes until none are healthy, or -1 if impossible."
  ],
  "examples": [
   {
    "input": "grid = [[2,1,1],[1,1,0],[0,1,1]]",
    "output": "4"
   },
   {
    "input": "grid = [[2,1,1],[0,1,1],[1,0,1]]",
    "output": "-1"
   }
  ],
  "constraints": [
   "Target O(M*N) time and O(M*N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-intern-s5-r1-q2-v1",
    "input": "[[2,1,1],[1,1,0],[0,1,1]]",
    "expectedOutput": "4"
   },
   {
    "id": "goog-intern-s5-r1-q2-v2",
    "input": "[[2,1,1],[0,1,1],[1,0,1]]",
    "expectedOutput": "-1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-intern-s5-r1-q2-h1",
    "input": "[[0,2]]",
    "expectedOutput": "0"
   },
   {
    "id": "goog-intern-s5-r1-q2-h2",
    "input": "[[1]]",
    "expectedOutput": "-1"
   },
   {
    "id": "goog-intern-s5-r1-q2-h3",
    "input": "[[2,2],[1,1]]",
    "expectedOutput": "1"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[][]} grid\n * @return {number}\n */\nfunction minutesToCorrupt(grid) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def minutesToCorrupt(self, grid: List[List[int]]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int minutesToCorrupt(vector<vector<int>>& grid) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(M*N)",
   "space": "O(M*N)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "goog-intern-s6-r1-q1": {
  "id": "goog-intern-s6-r1-q1",
  "title": "Best Single Trade",
  "difficulty": "Easy",
  "company": "Google",
  "category": "Array",
  "tags": [
   "Google Round 1",
   "Array",
   "Greedy",
   "Set 6"
  ],
  "paragraphs": [
   "Given daily prices, return the maximum profit from one buy followed by one later sell, or 0 if no profit is possible."
  ],
  "examples": [
   {
    "input": "prices = [7,1,5,3,6,4]",
    "output": "5"
   },
   {
    "input": "prices = [7,6,4,3,1]",
    "output": "0"
   }
  ],
  "constraints": [
   "Target O(N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-intern-s6-r1-q1-v1",
    "input": "[7,1,5,3,6,4]",
    "expectedOutput": "5"
   },
   {
    "id": "goog-intern-s6-r1-q1-v2",
    "input": "[7,6,4,3,1]",
    "expectedOutput": "0"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-intern-s6-r1-q1-h1",
    "input": "[1]",
    "expectedOutput": "0"
   },
   {
    "id": "goog-intern-s6-r1-q1-h2",
    "input": "[2,4,1]",
    "expectedOutput": "2"
   },
   {
    "id": "goog-intern-s6-r1-q1-h3",
    "input": "[3,3,5,0,0,3,1,4]",
    "expectedOutput": "4"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} prices\n * @return {number}\n */\nfunction maxProfit(prices) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def maxProfit(self, prices: List[int]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int maxProfit(vector<int>& prices) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "goog-intern-s6-r1-q2"
 },
 "goog-intern-s6-r1-q2": {
  "id": "goog-intern-s6-r1-q2",
  "title": "Product Without Self",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Prefix Products",
  "tags": [
   "Google Round 1",
   "Array",
   "Prefix Sum",
   "Set 6"
  ],
  "paragraphs": [
   "Return an array where out[i] is the product of all elements except nums[i]. Do not use division and run in O(N)."
  ],
  "examples": [
   {
    "input": "nums = [1,2,3,4]",
    "output": "[24,12,8,6]"
   },
   {
    "input": "nums = [-1,1,0,-3,3]",
    "output": "[0,0,9,0,0]"
   }
  ],
  "constraints": [
   "Target O(N) time and O(1) extra space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-intern-s6-r1-q2-v1",
    "input": "[1,2,3,4]",
    "expectedOutput": "[24,12,8,6]"
   },
   {
    "id": "goog-intern-s6-r1-q2-v2",
    "input": "[-1,1,0,-3,3]",
    "expectedOutput": "[0,0,9,0,0]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-intern-s6-r1-q2-h1",
    "input": "[2,3]",
    "expectedOutput": "[3,2]"
   },
   {
    "id": "goog-intern-s6-r1-q2-h2",
    "input": "[0,0]",
    "expectedOutput": "[0,0]"
   },
   {
    "id": "goog-intern-s6-r1-q2-h3",
    "input": "[5,1,1,2]",
    "expectedOutput": "[2,10,10,5]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @return {number[]}\n */\nfunction productExceptSelf(nums) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def productExceptSelf(self, nums: List[int]) -> List[int]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<int> productExceptSelf(vector<int>& nums) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1) extra"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "goog-intern-s7-r1-q1": {
  "id": "goog-intern-s7-r1-q1",
  "title": "Climbing Release Stairs",
  "difficulty": "Easy",
  "company": "Google",
  "category": "Dynamic Programming",
  "tags": [
   "Google Round 1",
   "DP",
   "Set 7"
  ],
  "paragraphs": [
   "You can climb 1 or 2 steps at a time. Return the number of distinct ways to reach step n."
  ],
  "examples": [
   {
    "input": "n = 2",
    "output": "2"
   },
   {
    "input": "n = 3",
    "output": "3"
   }
  ],
  "constraints": [
   "Target O(N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-intern-s7-r1-q1-v1",
    "input": "2",
    "expectedOutput": "2"
   },
   {
    "id": "goog-intern-s7-r1-q1-v2",
    "input": "3",
    "expectedOutput": "3"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-intern-s7-r1-q1-h1",
    "input": "1",
    "expectedOutput": "1"
   },
   {
    "id": "goog-intern-s7-r1-q1-h2",
    "input": "10",
    "expectedOutput": "89"
   },
   {
    "id": "goog-intern-s7-r1-q1-h3",
    "input": "30",
    "expectedOutput": "1346269"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number} n\n * @return {number}\n */\nfunction climbStairs(n) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def climbStairs(self, n: int) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int climbStairs(int n) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "goog-intern-s7-r1-q2"
 },
 "goog-intern-s7-r1-q2": {
  "id": "goog-intern-s7-r1-q2",
  "title": "Fewest Quota Units",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Dynamic Programming",
  "tags": [
   "Google Round 1",
   "DP",
   "Unbounded Knapsack",
   "Set 7"
  ],
  "paragraphs": [
   "Given unit sizes coins and a total amount, return the fewest units that sum to amount, or -1 if impossible. Units can be reused."
  ],
  "examples": [
   {
    "input": "coins = [1,2,5], amount = 11",
    "output": "3"
   },
   {
    "input": "coins = [2], amount = 3",
    "output": "-1"
   }
  ],
  "constraints": [
   "Target O(N*A) time and O(A) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-intern-s7-r1-q2-v1",
    "input": "[1,2,5]\n11",
    "expectedOutput": "3"
   },
   {
    "id": "goog-intern-s7-r1-q2-v2",
    "input": "[2]\n3",
    "expectedOutput": "-1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-intern-s7-r1-q2-h1",
    "input": "[1]\n0",
    "expectedOutput": "0"
   },
   {
    "id": "goog-intern-s7-r1-q2-h2",
    "input": "[186,419,83,408]\n6249",
    "expectedOutput": "20"
   },
   {
    "id": "goog-intern-s7-r1-q2-h3",
    "input": "[1,3,4]\n6",
    "expectedOutput": "2"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} coins\n * @param {number} amount\n * @return {number}\n */\nfunction coinChange(coins, amount) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def coinChange(self, coins: List[int], amount: int) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int coinChange(vector<int>& coins, int amount) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N*A)",
   "space": "O(A)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "goog-intern-s8-r1-q1": {
  "id": "goog-intern-s8-r1-q1",
  "title": "Flood Fill Canvas",
  "difficulty": "Easy",
  "company": "Google",
  "category": "DFS",
  "tags": [
   "Google Round 1",
   "DFS",
   "Grid",
   "Set 8"
  ],
  "paragraphs": [
   "Starting at pixel (sr, sc), replace its colour and every 4-connected pixel of the same original colour with newColor. Return the image."
  ],
  "examples": [
   {
    "input": "image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, newColor = 2",
    "output": "[[2,2,2],[2,2,0],[2,0,1]]"
   },
   {
    "input": "image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, newColor = 0",
    "output": "[[0,0,0],[0,0,0]]"
   }
  ],
  "constraints": [
   "Target O(M*N) time and O(M*N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-intern-s8-r1-q1-v1",
    "input": "[[1,1,1],[1,1,0],[1,0,1]]\n1\n1\n2",
    "expectedOutput": "[[2,2,2],[2,2,0],[2,0,1]]"
   },
   {
    "id": "goog-intern-s8-r1-q1-v2",
    "input": "[[0,0,0],[0,0,0]]\n0\n0\n0",
    "expectedOutput": "[[0,0,0],[0,0,0]]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-intern-s8-r1-q1-h1",
    "input": "[[0,0,0],[0,1,1]]\n1\n1\n1",
    "expectedOutput": "[[0,0,0],[0,1,1]]"
   },
   {
    "id": "goog-intern-s8-r1-q1-h2",
    "input": "[[1,2],[2,1]]\n0\n0\n3",
    "expectedOutput": "[[3,2],[2,1]]"
   },
   {
    "id": "goog-intern-s8-r1-q1-h3",
    "input": "[[5]]\n0\n0\n9",
    "expectedOutput": "[[9]]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[][]} image\n * @param {number} sr\n * @param {number} sc\n * @param {number} newColor\n * @return {number[][]}\n */\nfunction floodFill(image, sr, sc, newColor) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def floodFill(self, image: List[List[int]], sr: int, sc: int, newColor: int) -> List[List[int]]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<vector<int>> floodFill(vector<vector<int>>& image, int sr, int sc, int newColor) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(M*N)",
   "space": "O(M*N)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "goog-intern-s8-r1-q2"
 },
 "goog-intern-s8-r1-q2": {
  "id": "goog-intern-s8-r1-q2",
  "title": "Shortest Clear Route",
  "difficulty": "Medium",
  "company": "Google",
  "category": "BFS",
  "tags": [
   "Google Round 1",
   "BFS",
   "Matrix",
   "Set 8"
  ],
  "paragraphs": [
   "In an n x n binary matrix (0 = open, 1 = blocked), return the length of the shortest path from the top-left to the bottom-right moving in 8 directions, or -1 if none exists."
  ],
  "examples": [
   {
    "input": "grid = [[0,1],[1,0]]",
    "output": "2"
   },
   {
    "input": "grid = [[0,0,0],[1,1,0],[1,1,0]]",
    "output": "4"
   }
  ],
  "constraints": [
   "Target O(N^2) time and O(N^2) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-intern-s8-r1-q2-v1",
    "input": "[[0,1],[1,0]]",
    "expectedOutput": "2"
   },
   {
    "id": "goog-intern-s8-r1-q2-v2",
    "input": "[[0,0,0],[1,1,0],[1,1,0]]",
    "expectedOutput": "4"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-intern-s8-r1-q2-h1",
    "input": "[[1,0,0],[1,1,0],[1,1,0]]",
    "expectedOutput": "-1"
   },
   {
    "id": "goog-intern-s8-r1-q2-h2",
    "input": "[[0]]",
    "expectedOutput": "1"
   },
   {
    "id": "goog-intern-s8-r1-q2-h3",
    "input": "[[0,0],[0,0]]",
    "expectedOutput": "2"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[][]} grid\n * @return {number}\n */\nfunction shortestPathBinaryMatrix(grid) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def shortestPathBinaryMatrix(self, grid: List[List[int]]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int shortestPathBinaryMatrix(vector<vector<int>>& grid) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N^2)",
   "space": "O(N^2)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "goog-intern-s9-r1-q1": {
  "id": "goog-intern-s9-r1-q1",
  "title": "Compact Active Slots",
  "difficulty": "Easy",
  "company": "Google",
  "category": "Two Pointers",
  "tags": [
   "Google Round 1",
   "Two Pointers",
   "Array",
   "Set 9"
  ],
  "paragraphs": [
   "Move all zeros to the end of the array while keeping the order of the non-zero elements. Return the resulting array."
  ],
  "examples": [
   {
    "input": "nums = [0,1,0,3,12]",
    "output": "[1,3,12,0,0]"
   },
   {
    "input": "nums = [0]",
    "output": "[0]"
   }
  ],
  "constraints": [
   "Target O(N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-intern-s9-r1-q1-v1",
    "input": "[0,1,0,3,12]",
    "expectedOutput": "[1,3,12,0,0]"
   },
   {
    "id": "goog-intern-s9-r1-q1-v2",
    "input": "[0]",
    "expectedOutput": "[0]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-intern-s9-r1-q1-h1",
    "input": "[1,2,3]",
    "expectedOutput": "[1,2,3]"
   },
   {
    "id": "goog-intern-s9-r1-q1-h2",
    "input": "[0,0,1]",
    "expectedOutput": "[1,0,0]"
   },
   {
    "id": "goog-intern-s9-r1-q1-h3",
    "input": "[4,0,5,0,0,6]",
    "expectedOutput": "[4,5,6,0,0,0]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @return {number[]}\n */\nfunction moveZeroes(nums) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def moveZeroes(self, nums: List[int]) -> List[int]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<int> moveZeroes(vector<int>& nums) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "goog-intern-s9-r1-q2"
 },
 "goog-intern-s9-r1-q2": {
  "id": "goog-intern-s9-r1-q2",
  "title": "Matching Usage Totals",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Prefix Sum",
  "tags": [
   "Google Round 1",
   "Prefix Sum",
   "Hash Table",
   "Set 9"
  ],
  "paragraphs": [
   "Return the number of contiguous subarrays whose sum equals k."
  ],
  "examples": [
   {
    "input": "nums = [1,1,1], k = 2",
    "output": "2"
   },
   {
    "input": "nums = [1,2,3], k = 3",
    "output": "2"
   }
  ],
  "constraints": [
   "Target O(N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-intern-s9-r1-q2-v1",
    "input": "[1,1,1]\n2",
    "expectedOutput": "2"
   },
   {
    "id": "goog-intern-s9-r1-q2-v2",
    "input": "[1,2,3]\n3",
    "expectedOutput": "2"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-intern-s9-r1-q2-h1",
    "input": "[1,-1,0]\n0",
    "expectedOutput": "3"
   },
   {
    "id": "goog-intern-s9-r1-q2-h2",
    "input": "[3,4,7,2,-3,1,4,2]\n7",
    "expectedOutput": "4"
   },
   {
    "id": "goog-intern-s9-r1-q2-h3",
    "input": "[1]\n5",
    "expectedOutput": "0"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @param {number} k\n * @return {number}\n */\nfunction subarraySum(nums, k) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def subarraySum(self, nums: List[int], k: int) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int subarraySum(vector<int>& nums, int k) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(N)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "goog-intern-s10-r1-q1": {
  "id": "goog-intern-s10-r1-q1",
  "title": "Anagram Tag Check",
  "difficulty": "Easy",
  "company": "Google",
  "category": "Hash Table",
  "tags": [
   "Google Round 1",
   "Hash Table",
   "String",
   "Set 10"
  ],
  "paragraphs": [
   "Return true if t is an anagram of s (same letters with the same counts)."
  ],
  "examples": [
   {
    "input": "s = \"anagram\", t = \"nagaram\"",
    "output": "true"
   },
   {
    "input": "s = \"rat\", t = \"car\"",
    "output": "false"
   }
  ],
  "constraints": [
   "Target O(N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-intern-s10-r1-q1-v1",
    "input": "\"anagram\"\n\"nagaram\"",
    "expectedOutput": "true"
   },
   {
    "id": "goog-intern-s10-r1-q1-v2",
    "input": "\"rat\"\n\"car\"",
    "expectedOutput": "false"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-intern-s10-r1-q1-h1",
    "input": "\"a\"\n\"a\"",
    "expectedOutput": "true"
   },
   {
    "id": "goog-intern-s10-r1-q1-h2",
    "input": "\"ab\"\n\"a\"",
    "expectedOutput": "false"
   },
   {
    "id": "goog-intern-s10-r1-q1-h3",
    "input": "\"listen\"\n\"silent\"",
    "expectedOutput": "true"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} s\n * @param {string} t\n * @return {boolean}\n */\nfunction isAnagram(s, t) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def isAnagram(self, s: str, t: str) -> bool:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    bool isAnagram(string s, string t) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "goog-intern-s10-r1-q2"
 },
 "goog-intern-s10-r1-q2": {
  "id": "goog-intern-s10-r1-q2",
  "title": "Segment a Search Query",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Dynamic Programming",
  "tags": [
   "Google Round 1",
   "DP",
   "String",
   "Set 10"
  ],
  "paragraphs": [
   "Given a string s and a dictionary of words, return true if s can be segmented into a sequence of one or more dictionary words (words may repeat)."
  ],
  "examples": [
   {
    "input": "s = \"leetcode\", wordDict = [\"leet\",\"code\"]",
    "output": "true"
   },
   {
    "input": "s = \"applepenapple\", wordDict = [\"apple\",\"pen\"]",
    "output": "true"
   }
  ],
  "constraints": [
   "Target O(N^2) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-intern-s10-r1-q2-v1",
    "input": "\"leetcode\"\n[\"leet\",\"code\"]",
    "expectedOutput": "true"
   },
   {
    "id": "goog-intern-s10-r1-q2-v2",
    "input": "\"applepenapple\"\n[\"apple\",\"pen\"]",
    "expectedOutput": "true"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-intern-s10-r1-q2-h1",
    "input": "\"catsandog\"\n[\"cats\",\"dog\",\"sand\",\"and\",\"cat\"]",
    "expectedOutput": "false"
   },
   {
    "id": "goog-intern-s10-r1-q2-h2",
    "input": "\"a\"\n[\"b\"]",
    "expectedOutput": "false"
   },
   {
    "id": "goog-intern-s10-r1-q2-h3",
    "input": "\"aaaaaaa\"\n[\"aaaa\",\"aaa\"]",
    "expectedOutput": "true"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} s\n * @param {string[]} wordDict\n * @return {boolean}\n */\nfunction wordBreak(s, wordDict) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def wordBreak(self, s: str, wordDict: List[str]) -> bool:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    bool wordBreak(string s, vector<string>& wordDict) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N^2)",
   "space": "O(N)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "goog-intern-s1-r2-q1": {
  "id": "goog-intern-s1-r2-q1",
  "title": "Kth Largest Latency",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Heap",
  "tags": [
   "Google Round 2",
   "Heap",
   "Quickselect",
   "Set 1"
  ],
  "paragraphs": [
   "Return the kth largest element of an unsorted array (kth in sorted order, not distinct). Defend a heap versus quickselect trade-off.",
   "Round 2 is a live viva: after your code passes every test you will defend its invariants and Big-O bounds."
  ],
  "examples": [
   {
    "input": "nums = [3,2,1,5,6,4], k = 2",
    "output": "5"
   },
   {
    "input": "nums = [3,2,3,1,2,4,5,5,6], k = 4",
    "output": "4"
   }
  ],
  "constraints": [
   "Target O(N) avg time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-intern-s1-r2-q1-v1",
    "input": "[3,2,1,5,6,4]\n2",
    "expectedOutput": "5"
   },
   {
    "id": "goog-intern-s1-r2-q1-v2",
    "input": "[3,2,3,1,2,4,5,5,6]\n4",
    "expectedOutput": "4"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-intern-s1-r2-q1-h1",
    "input": "[1]\n1",
    "expectedOutput": "1"
   },
   {
    "id": "goog-intern-s1-r2-q1-h2",
    "input": "[7,7,7]\n2",
    "expectedOutput": "7"
   },
   {
    "id": "goog-intern-s1-r2-q1-h3",
    "input": "[-1,-5,3]\n3",
    "expectedOutput": "-5"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @param {number} k\n * @return {number}\n */\nfunction findKthLargest(nums, k) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def findKthLargest(self, nums: List[int], k: int) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int findKthLargest(vector<int>& nums, int k) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N) avg",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-intern-s2-r2-q1": {
  "id": "goog-intern-s2-r2-q1",
  "title": "Top K Search Terms",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Heap / Hashing",
  "tags": [
   "Google Round 2",
   "Heap",
   "Hash Table",
   "Bucket Sort",
   "Set 2"
  ],
  "paragraphs": [
   "Return the k most frequent elements, sorted ascending (frequency ties are broken by smaller value). Defend your complexity versus sorting.",
   "Round 2 is a live viva: after your code passes every test you will defend its invariants and Big-O bounds."
  ],
  "examples": [
   {
    "input": "nums = [1,1,1,2,2,3], k = 2",
    "output": "[1,2]"
   },
   {
    "input": "nums = [1], k = 1",
    "output": "[1]"
   }
  ],
  "constraints": [
   "Target O(N log K) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-intern-s2-r2-q1-v1",
    "input": "[1,1,1,2,2,3]\n2",
    "expectedOutput": "[1,2]"
   },
   {
    "id": "goog-intern-s2-r2-q1-v2",
    "input": "[1]\n1",
    "expectedOutput": "[1]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-intern-s2-r2-q1-h1",
    "input": "[4,4,5,5,6]\n2",
    "expectedOutput": "[4,5]"
   },
   {
    "id": "goog-intern-s2-r2-q1-h2",
    "input": "[3,0,1,0]\n1",
    "expectedOutput": "[0]"
   },
   {
    "id": "goog-intern-s2-r2-q1-h3",
    "input": "[9,8,8,9,7,7,7]\n2",
    "expectedOutput": "[7,8]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @param {number} k\n * @return {number[]}\n */\nfunction topKFrequent(nums, k) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def topKFrequent(self, nums: List[int], k: int) -> List[int]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<int> topKFrequent(vector<int>& nums, int k) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N log K)",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-intern-s3-r2-q1": {
  "id": "goog-intern-s3-r2-q1",
  "title": "Build Dependency Order",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Graph / Topological Sort",
  "tags": [
   "Google Round 2",
   "Graph",
   "Topological Sort",
   "Set 3"
  ],
  "paragraphs": [
   "There are numCourses build targets 0..n-1 and prerequisites [a, b] meaning b must be built before a. Return true if all targets can be built.",
   "Round 2 is a live viva: after your code passes every test you will defend its invariants and Big-O bounds."
  ],
  "examples": [
   {
    "input": "numCourses = 2, prerequisites = [[1,0]]",
    "output": "true"
   },
   {
    "input": "numCourses = 2, prerequisites = [[1,0],[0,1]]",
    "output": "false"
   }
  ],
  "constraints": [
   "Target O(V+E) time and O(V+E) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-intern-s3-r2-q1-v1",
    "input": "2\n[[1,0]]",
    "expectedOutput": "true"
   },
   {
    "id": "goog-intern-s3-r2-q1-v2",
    "input": "2\n[[1,0],[0,1]]",
    "expectedOutput": "false"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-intern-s3-r2-q1-h1",
    "input": "1\n[]",
    "expectedOutput": "true"
   },
   {
    "id": "goog-intern-s3-r2-q1-h2",
    "input": "4\n[[1,0],[2,1],[3,2]]",
    "expectedOutput": "true"
   },
   {
    "id": "goog-intern-s3-r2-q1-h3",
    "input": "3\n[[0,1],[1,2],[2,0]]",
    "expectedOutput": "false"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number} numCourses\n * @param {number[][]} prerequisites\n * @return {boolean}\n */\nfunction canFinish(numCourses, prerequisites) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(V+E)",
   "space": "O(V+E)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-intern-s4-r2-q1": {
  "id": "goog-intern-s4-r2-q1",
  "title": "Longest Palindromic Token",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Expand Around Center",
  "tags": [
   "Google Round 2",
   "String",
   "DP",
   "Set 4"
  ],
  "paragraphs": [
   "Return the length of the longest palindromic substring of s. Defend why expanding around centers beats brute force.",
   "Round 2 is a live viva: after your code passes every test you will defend its invariants and Big-O bounds."
  ],
  "examples": [
   {
    "input": "s = \"babad\"",
    "output": "3"
   },
   {
    "input": "s = \"cbbd\"",
    "output": "2"
   }
  ],
  "constraints": [
   "Target O(N^2) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-intern-s4-r2-q1-v1",
    "input": "\"babad\"",
    "expectedOutput": "3"
   },
   {
    "id": "goog-intern-s4-r2-q1-v2",
    "input": "\"cbbd\"",
    "expectedOutput": "2"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-intern-s4-r2-q1-h1",
    "input": "\"a\"",
    "expectedOutput": "1"
   },
   {
    "id": "goog-intern-s4-r2-q1-h2",
    "input": "\"forgeeksskeegfor\"",
    "expectedOutput": "10"
   },
   {
    "id": "goog-intern-s4-r2-q1-h3",
    "input": "\"abcde\"",
    "expectedOutput": "1"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} s\n * @return {number}\n */\nfunction longestPalindromeLength(s) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def longestPalindromeLength(self, s: str) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int longestPalindromeLength(string s) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N^2)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-intern-s5-r2-q1": {
  "id": "goog-intern-s5-r2-q1",
  "title": "Generate Balanced Templates",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Backtracking",
  "tags": [
   "Google Round 2",
   "Backtracking",
   "Recursion",
   "Set 5"
  ],
  "paragraphs": [
   "Given n pairs of brackets, return all well-formed combinations sorted in lexicographic order.",
   "Round 2 is a live viva: after your code passes every test you will defend its invariants and Big-O bounds."
  ],
  "examples": [
   {
    "input": "n = 1",
    "output": "[\"()\"]"
   },
   {
    "input": "n = 2",
    "output": "[\"(())\",\"()()\"]"
   }
  ],
  "constraints": [
   "Target O(4^N/sqrt(N)) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-intern-s5-r2-q1-v1",
    "input": "1",
    "expectedOutput": "[\"()\"]"
   },
   {
    "id": "goog-intern-s5-r2-q1-v2",
    "input": "2",
    "expectedOutput": "[\"(())\",\"()()\"]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-intern-s5-r2-q1-h1",
    "input": "3",
    "expectedOutput": "[\"((()))\",\"(()())\",\"(())()\",\"()(())\",\"()()()\"]"
   },
   {
    "id": "goog-intern-s5-r2-q1-h2",
    "input": "4",
    "expectedOutput": "[\"(((())))\",\"((()()))\",\"((())())\",\"((()))()\",\"(()(()))\",\"(()()())\",\"(()())()\",\"(())(())\",\"(())()()\",\"()((()))\",\"()(()())\",\"()(())()\",\"()()(())\",\"()()()()\"]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number} n\n * @return {string[]}\n */\nfunction generateParenthesis(n) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def generateParenthesis(self, n: int) -> List[str]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<string> generateParenthesis(int n) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(4^N/sqrt(N))",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-intern-s6-r2-q1": {
  "id": "goog-intern-s6-r2-q1",
  "title": "Search a Rotated Log Index",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Binary Search",
  "tags": [
   "Google Round 2",
   "Binary Search",
   "Array",
   "Set 6"
  ],
  "paragraphs": [
   "A sorted array of distinct values was rotated at an unknown pivot. Return the index of target or -1 in O(log N).",
   "Round 2 is a live viva: after your code passes every test you will defend its invariants and Big-O bounds."
  ],
  "examples": [
   {
    "input": "nums = [4,5,6,7,0,1,2], target = 0",
    "output": "4"
   },
   {
    "input": "nums = [4,5,6,7,0,1,2], target = 3",
    "output": "-1"
   }
  ],
  "constraints": [
   "Target O(log N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-intern-s6-r2-q1-v1",
    "input": "[4,5,6,7,0,1,2]\n0",
    "expectedOutput": "4"
   },
   {
    "id": "goog-intern-s6-r2-q1-v2",
    "input": "[4,5,6,7,0,1,2]\n3",
    "expectedOutput": "-1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-intern-s6-r2-q1-h1",
    "input": "[1]\n0",
    "expectedOutput": "-1"
   },
   {
    "id": "goog-intern-s6-r2-q1-h2",
    "input": "[3,1]\n1",
    "expectedOutput": "1"
   },
   {
    "id": "goog-intern-s6-r2-q1-h3",
    "input": "[5,1,3]\n5",
    "expectedOutput": "0"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number}\n */\nfunction search(nums, target) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def search(self, nums: List[int], target: int) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int search(vector<int>& nums, int target) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(log N)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-intern-s7-r2-q1": {
  "id": "goog-intern-s7-r2-q1",
  "title": "Days Until Warmer",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Monotonic Stack",
  "tags": [
   "Google Round 2",
   "Stack",
   "Monotonic Stack",
   "Set 7"
  ],
  "paragraphs": [
   "For each day, return how many days until a warmer temperature, or 0 if none. Defend the amortised O(N) bound.",
   "Round 2 is a live viva: after your code passes every test you will defend its invariants and Big-O bounds."
  ],
  "examples": [
   {
    "input": "temperatures = [73,74,75,71,69,72,76,73]",
    "output": "[1,1,4,2,1,1,0,0]"
   },
   {
    "input": "temperatures = [30,40,50,60]",
    "output": "[1,1,1,0]"
   }
  ],
  "constraints": [
   "Target O(N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-intern-s7-r2-q1-v1",
    "input": "[73,74,75,71,69,72,76,73]",
    "expectedOutput": "[1,1,4,2,1,1,0,0]"
   },
   {
    "id": "goog-intern-s7-r2-q1-v2",
    "input": "[30,40,50,60]",
    "expectedOutput": "[1,1,1,0]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-intern-s7-r2-q1-h1",
    "input": "[30,60,90]",
    "expectedOutput": "[1,1,0]"
   },
   {
    "id": "goog-intern-s7-r2-q1-h2",
    "input": "[90,80,70]",
    "expectedOutput": "[0,0,0]"
   },
   {
    "id": "goog-intern-s7-r2-q1-h3",
    "input": "[55]",
    "expectedOutput": "[0]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} temperatures\n * @return {number[]}\n */\nfunction dailyTemperatures(temperatures) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<int> dailyTemperatures(vector<int>& temperatures) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-intern-s8-r2-q1": {
  "id": "goog-intern-s8-r2-q1",
  "title": "Reach the Last Shard",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Greedy",
  "tags": [
   "Google Round 2",
   "Greedy",
   "Array",
   "Set 8"
  ],
  "paragraphs": [
   "Each value is the maximum jump length from that index. Return true if you can reach the last index from index 0. Prove the greedy invariant.",
   "Round 2 is a live viva: after your code passes every test you will defend its invariants and Big-O bounds."
  ],
  "examples": [
   {
    "input": "nums = [2,3,1,1,4]",
    "output": "true"
   },
   {
    "input": "nums = [3,2,1,0,4]",
    "output": "false"
   }
  ],
  "constraints": [
   "Target O(N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-intern-s8-r2-q1-v1",
    "input": "[2,3,1,1,4]",
    "expectedOutput": "true"
   },
   {
    "id": "goog-intern-s8-r2-q1-v2",
    "input": "[3,2,1,0,4]",
    "expectedOutput": "false"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-intern-s8-r2-q1-h1",
    "input": "[0]",
    "expectedOutput": "true"
   },
   {
    "id": "goog-intern-s8-r2-q1-h2",
    "input": "[2,0,0]",
    "expectedOutput": "true"
   },
   {
    "id": "goog-intern-s8-r2-q1-h3",
    "input": "[1,1,0,1]",
    "expectedOutput": "false"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @return {boolean}\n */\nfunction canJump(nums) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def canJump(self, nums: List[int]) -> bool:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    bool canJump(vector<int>& nums) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-intern-s9-r2-q1": {
  "id": "goog-intern-s9-r2-q1",
  "title": "Keypad Suggestion Expansion",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Backtracking",
  "tags": [
   "Google Round 2",
   "Backtracking",
   "String",
   "Set 9"
  ],
  "paragraphs": [
   "Given a string of digits 2-9, return every letter combination a phone keypad could spell, sorted lexicographically. Return [] for empty input.",
   "Round 2 is a live viva: after your code passes every test you will defend its invariants and Big-O bounds."
  ],
  "examples": [
   {
    "input": "digits = \"23\"",
    "output": "[\"ad\",\"ae\",\"af\",\"bd\",\"be\",\"bf\",\"cd\",\"ce\",\"cf\"]"
   },
   {
    "input": "digits = \"\"",
    "output": "[]"
   }
  ],
  "constraints": [
   "Target O(4^N * N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-intern-s9-r2-q1-v1",
    "input": "\"23\"",
    "expectedOutput": "[\"ad\",\"ae\",\"af\",\"bd\",\"be\",\"bf\",\"cd\",\"ce\",\"cf\"]"
   },
   {
    "id": "goog-intern-s9-r2-q1-v2",
    "input": "\"\"",
    "expectedOutput": "[]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-intern-s9-r2-q1-h1",
    "input": "\"2\"",
    "expectedOutput": "[\"a\",\"b\",\"c\"]"
   },
   {
    "id": "goog-intern-s9-r2-q1-h2",
    "input": "\"79\"",
    "expectedOutput": "[\"pw\",\"px\",\"py\",\"pz\",\"qw\",\"qx\",\"qy\",\"qz\",\"rw\",\"rx\",\"ry\",\"rz\",\"sw\",\"sx\",\"sy\",\"sz\"]"
   },
   {
    "id": "goog-intern-s9-r2-q1-h3",
    "input": "\"999\"",
    "expectedOutput": "[\"www\",\"wwx\",\"wwy\",\"wwz\",\"wxw\",\"wxx\",\"wxy\",\"wxz\",\"wyw\",\"wyx\",\"wyy\",\"wyz\",\"wzw\",\"wzx\",\"wzy\",\"wzz\",\"xww\",\"xwx\",\"xwy\",\"xwz\",\"xxw\",\"xxx\",\"xxy\",\"xxz\",\"xyw\",\"xyx\",\"xyy\",\"xyz\",\"xzw\",\"xzx\",\"xzy\",\"xzz\",\"yww\",\"ywx\",\"ywy\",\"ywz\",\"yxw\",\"yxx\",\"yxy\",\"yxz\",\"yyw\",\"yyx\",\"yyy\",\"yyz\",\"yzw\",\"yzx\",\"yzy\",\"yzz\",\"zww\",\"zwx\",\"zwy\",\"zwz\",\"zxw\",\"zxx\",\"zxy\",\"zxz\",\"zyw\",\"zyx\",\"zyy\",\"zyz\",\"zzw\",\"zzx\",\"zzy\",\"zzz\"]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} digits\n * @return {string[]}\n */\nfunction letterCombinations(digits) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def letterCombinations(self, digits: str) -> List[str]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<string> letterCombinations(string digits) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(4^N * N)",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-intern-s10-r2-q1": {
  "id": "goog-intern-s10-r2-q1",
  "title": "Capacity Between Peaks",
  "difficulty": "Hard",
  "company": "Google",
  "category": "Two Pointers",
  "tags": [
   "Google Round 2",
   "Two Pointers",
   "Stack",
   "Set 10"
  ],
  "paragraphs": [
   "Given elevation heights, compute how much water is trapped after raining. Defend the two-pointer invariant.",
   "Round 2 is a live viva: after your code passes every test you will defend its invariants and Big-O bounds."
  ],
  "examples": [
   {
    "input": "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
    "output": "6"
   },
   {
    "input": "height = [4,2,0,3,2,5]",
    "output": "9"
   }
  ],
  "constraints": [
   "Target O(N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-intern-s10-r2-q1-v1",
    "input": "[0,1,0,2,1,0,1,3,2,1,2,1]",
    "expectedOutput": "6"
   },
   {
    "id": "goog-intern-s10-r2-q1-v2",
    "input": "[4,2,0,3,2,5]",
    "expectedOutput": "9"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-intern-s10-r2-q1-h1",
    "input": "[1,2,3]",
    "expectedOutput": "0"
   },
   {
    "id": "goog-intern-s10-r2-q1-h2",
    "input": "[3,0,3]",
    "expectedOutput": "3"
   },
   {
    "id": "goog-intern-s10-r2-q1-h3",
    "input": "[2,0,2,0,2]",
    "expectedOutput": "4"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} height\n * @return {number}\n */\nfunction trap(height) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def trap(self, height: List[int]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int trap(vector<int>& height) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-intern-s1-r3-q1": {
  "id": "goog-intern-s1-r3-q1",
  "title": "Top-K Trending Queries at Scale",
  "difficulty": "Medium",
  "company": "Google",
  "category": "System Architecture & Algorithms",
  "tags": [
   "Google Round 3",
   "Architecture",
   "Scale",
   "Set 1"
  ],
  "paragraphs": [
   "Google Technical Loop Round 3: System Architecture & Scaled Algorithms.",
   "Design and defend: Top-K Trending Queries at Scale. Focus areas: Count-min sketch, heap of heavy hitters, windowed counts.",
   "Structure your answer as: Requirements and Assumptions, Core Algorithm and Data Model, Scaling and Bottlenecks, Failure Modes, and Trade-offs. State complexity bounds and invariants explicitly."
  ],
  "examples": [
   {
    "input": "Architecture and algorithm walkthrough",
    "output": "Data model, complexity bounds, scaling plan, failure analysis",
    "explanation": "Evaluated on algorithmic rigor, quantified capacity reasoning and honest trade-offs. No brain teasers."
   }
  ],
  "constraints": [
   "Quantify load: QPS, data size, memory and p99 latency targets.",
   "Justify each trade-off (consistency vs availability, memory vs disk, push vs pull).",
   "Cover failure domains: node loss, network partition, overload and retries."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Architecture notes, interfaces and complexity bounds\nclass Design:\n    def __init__(self):\n        pass\n",
   "javascript": "// Architecture notes, interfaces and complexity bounds\nclass Design {\n  constructor() {}\n}\n",
   "cpp": "// Architecture notes, interfaces and complexity bounds\nclass Design {\npublic:\n    Design();\n};\n"
  },
  "optimalComplexity": {
   "time": "Stated per component (target p99 latency)",
   "space": "Horizontally partitionable"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-intern-s2-r3-q1": {
  "id": "goog-intern-s2-r3-q1",
  "title": "Distributed Word Count Pipeline",
  "difficulty": "Medium",
  "company": "Google",
  "category": "System Architecture & Algorithms",
  "tags": [
   "Google Round 3",
   "Architecture",
   "Scale",
   "Set 2"
  ],
  "paragraphs": [
   "Google Technical Loop Round 3: System Architecture & Scaled Algorithms.",
   "Design and defend: Distributed Word Count Pipeline. Focus areas: MapReduce shuffle, combiners, data skew.",
   "Structure your answer as: Requirements and Assumptions, Core Algorithm and Data Model, Scaling and Bottlenecks, Failure Modes, and Trade-offs. State complexity bounds and invariants explicitly."
  ],
  "examples": [
   {
    "input": "Architecture and algorithm walkthrough",
    "output": "Data model, complexity bounds, scaling plan, failure analysis",
    "explanation": "Evaluated on algorithmic rigor, quantified capacity reasoning and honest trade-offs. No brain teasers."
   }
  ],
  "constraints": [
   "Quantify load: QPS, data size, memory and p99 latency targets.",
   "Justify each trade-off (consistency vs availability, memory vs disk, push vs pull).",
   "Cover failure domains: node loss, network partition, overload and retries."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Architecture notes, interfaces and complexity bounds\nclass Design:\n    def __init__(self):\n        pass\n",
   "javascript": "// Architecture notes, interfaces and complexity bounds\nclass Design {\n  constructor() {}\n}\n",
   "cpp": "// Architecture notes, interfaces and complexity bounds\nclass Design {\npublic:\n    Design();\n};\n"
  },
  "optimalComplexity": {
   "time": "Stated per component (target p99 latency)",
   "space": "Horizontally partitionable"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-intern-s3-r3-q1": {
  "id": "goog-intern-s3-r3-q1",
  "title": "Deduplicating Billions of URLs",
  "difficulty": "Medium",
  "company": "Google",
  "category": "System Architecture & Algorithms",
  "tags": [
   "Google Round 3",
   "Architecture",
   "Scale",
   "Set 3"
  ],
  "paragraphs": [
   "Google Technical Loop Round 3: System Architecture & Scaled Algorithms.",
   "Design and defend: Deduplicating Billions of URLs. Focus areas: Bloom filters, hash partitioning, false-positive cost.",
   "Structure your answer as: Requirements and Assumptions, Core Algorithm and Data Model, Scaling and Bottlenecks, Failure Modes, and Trade-offs. State complexity bounds and invariants explicitly."
  ],
  "examples": [
   {
    "input": "Architecture and algorithm walkthrough",
    "output": "Data model, complexity bounds, scaling plan, failure analysis",
    "explanation": "Evaluated on algorithmic rigor, quantified capacity reasoning and honest trade-offs. No brain teasers."
   }
  ],
  "constraints": [
   "Quantify load: QPS, data size, memory and p99 latency targets.",
   "Justify each trade-off (consistency vs availability, memory vs disk, push vs pull).",
   "Cover failure domains: node loss, network partition, overload and retries."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Architecture notes, interfaces and complexity bounds\nclass Design:\n    def __init__(self):\n        pass\n",
   "javascript": "// Architecture notes, interfaces and complexity bounds\nclass Design {\n  constructor() {}\n}\n",
   "cpp": "// Architecture notes, interfaces and complexity bounds\nclass Design {\npublic:\n    Design();\n};\n"
  },
  "optimalComplexity": {
   "time": "Stated per component (target p99 latency)",
   "space": "Horizontally partitionable"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-intern-s4-r3-q1": {
  "id": "goog-intern-s4-r3-q1",
  "title": "Design a URL Shortener",
  "difficulty": "Medium",
  "company": "Google",
  "category": "System Architecture & Algorithms",
  "tags": [
   "Google Round 3",
   "Architecture",
   "Scale",
   "Set 4"
  ],
  "paragraphs": [
   "Google Technical Loop Round 3: System Architecture & Scaled Algorithms.",
   "Design and defend: Design a URL Shortener. Focus areas: ID generation, base62, caching, redirect semantics.",
   "Structure your answer as: Requirements and Assumptions, Core Algorithm and Data Model, Scaling and Bottlenecks, Failure Modes, and Trade-offs. State complexity bounds and invariants explicitly."
  ],
  "examples": [
   {
    "input": "Architecture and algorithm walkthrough",
    "output": "Data model, complexity bounds, scaling plan, failure analysis",
    "explanation": "Evaluated on algorithmic rigor, quantified capacity reasoning and honest trade-offs. No brain teasers."
   }
  ],
  "constraints": [
   "Quantify load: QPS, data size, memory and p99 latency targets.",
   "Justify each trade-off (consistency vs availability, memory vs disk, push vs pull).",
   "Cover failure domains: node loss, network partition, overload and retries."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Architecture notes, interfaces and complexity bounds\nclass Design:\n    def __init__(self):\n        pass\n",
   "javascript": "// Architecture notes, interfaces and complexity bounds\nclass Design {\n  constructor() {}\n}\n",
   "cpp": "// Architecture notes, interfaces and complexity bounds\nclass Design {\npublic:\n    Design();\n};\n"
  },
  "optimalComplexity": {
   "time": "Stated per component (target p99 latency)",
   "space": "Horizontally partitionable"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-intern-s5-r3-q1": {
  "id": "goog-intern-s5-r3-q1",
  "title": "Sorting a File Larger Than Memory",
  "difficulty": "Medium",
  "company": "Google",
  "category": "System Architecture & Algorithms",
  "tags": [
   "Google Round 3",
   "Architecture",
   "Scale",
   "Set 5"
  ],
  "paragraphs": [
   "Google Technical Loop Round 3: System Architecture & Scaled Algorithms.",
   "Design and defend: Sorting a File Larger Than Memory. Focus areas: External merge sort, run formation, I/O passes.",
   "Structure your answer as: Requirements and Assumptions, Core Algorithm and Data Model, Scaling and Bottlenecks, Failure Modes, and Trade-offs. State complexity bounds and invariants explicitly."
  ],
  "examples": [
   {
    "input": "Architecture and algorithm walkthrough",
    "output": "Data model, complexity bounds, scaling plan, failure analysis",
    "explanation": "Evaluated on algorithmic rigor, quantified capacity reasoning and honest trade-offs. No brain teasers."
   }
  ],
  "constraints": [
   "Quantify load: QPS, data size, memory and p99 latency targets.",
   "Justify each trade-off (consistency vs availability, memory vs disk, push vs pull).",
   "Cover failure domains: node loss, network partition, overload and retries."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Architecture notes, interfaces and complexity bounds\nclass Design:\n    def __init__(self):\n        pass\n",
   "javascript": "// Architecture notes, interfaces and complexity bounds\nclass Design {\n  constructor() {}\n}\n",
   "cpp": "// Architecture notes, interfaces and complexity bounds\nclass Design {\npublic:\n    Design();\n};\n"
  },
  "optimalComplexity": {
   "time": "Stated per component (target p99 latency)",
   "space": "Horizontally partitionable"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-intern-s6-r3-q1": {
  "id": "goog-intern-s6-r3-q1",
  "title": "Spell Checker Over a Large Dictionary",
  "difficulty": "Medium",
  "company": "Google",
  "category": "System Architecture & Algorithms",
  "tags": [
   "Google Round 3",
   "Architecture",
   "Scale",
   "Set 6"
  ],
  "paragraphs": [
   "Google Technical Loop Round 3: System Architecture & Scaled Algorithms.",
   "Design and defend: Spell Checker Over a Large Dictionary. Focus areas: Trie vs BK-tree, edit distance, memory footprint.",
   "Structure your answer as: Requirements and Assumptions, Core Algorithm and Data Model, Scaling and Bottlenecks, Failure Modes, and Trade-offs. State complexity bounds and invariants explicitly."
  ],
  "examples": [
   {
    "input": "Architecture and algorithm walkthrough",
    "output": "Data model, complexity bounds, scaling plan, failure analysis",
    "explanation": "Evaluated on algorithmic rigor, quantified capacity reasoning and honest trade-offs. No brain teasers."
   }
  ],
  "constraints": [
   "Quantify load: QPS, data size, memory and p99 latency targets.",
   "Justify each trade-off (consistency vs availability, memory vs disk, push vs pull).",
   "Cover failure domains: node loss, network partition, overload and retries."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Architecture notes, interfaces and complexity bounds\nclass Design:\n    def __init__(self):\n        pass\n",
   "javascript": "// Architecture notes, interfaces and complexity bounds\nclass Design {\n  constructor() {}\n}\n",
   "cpp": "// Architecture notes, interfaces and complexity bounds\nclass Design {\npublic:\n    Design();\n};\n"
  },
  "optimalComplexity": {
   "time": "Stated per component (target p99 latency)",
   "space": "Horizontally partitionable"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-intern-s7-r3-q1": {
  "id": "goog-intern-s7-r3-q1",
  "title": "Sliding-Window Metrics Aggregator",
  "difficulty": "Medium",
  "company": "Google",
  "category": "System Architecture & Algorithms",
  "tags": [
   "Google Round 3",
   "Architecture",
   "Scale",
   "Set 7"
  ],
  "paragraphs": [
   "Google Technical Loop Round 3: System Architecture & Scaled Algorithms.",
   "Design and defend: Sliding-Window Metrics Aggregator. Focus areas: Ring buffers, monotonic deque, time buckets.",
   "Structure your answer as: Requirements and Assumptions, Core Algorithm and Data Model, Scaling and Bottlenecks, Failure Modes, and Trade-offs. State complexity bounds and invariants explicitly."
  ],
  "examples": [
   {
    "input": "Architecture and algorithm walkthrough",
    "output": "Data model, complexity bounds, scaling plan, failure analysis",
    "explanation": "Evaluated on algorithmic rigor, quantified capacity reasoning and honest trade-offs. No brain teasers."
   }
  ],
  "constraints": [
   "Quantify load: QPS, data size, memory and p99 latency targets.",
   "Justify each trade-off (consistency vs availability, memory vs disk, push vs pull).",
   "Cover failure domains: node loss, network partition, overload and retries."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Architecture notes, interfaces and complexity bounds\nclass Design:\n    def __init__(self):\n        pass\n",
   "javascript": "// Architecture notes, interfaces and complexity bounds\nclass Design {\n  constructor() {}\n}\n",
   "cpp": "// Architecture notes, interfaces and complexity bounds\nclass Design {\npublic:\n    Design();\n};\n"
  },
  "optimalComplexity": {
   "time": "Stated per component (target p99 latency)",
   "space": "Horizontally partitionable"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-intern-s8-r3-q1": {
  "id": "goog-intern-s8-r3-q1",
  "title": "Parking Lot Object-Oriented Design",
  "difficulty": "Medium",
  "company": "Google",
  "category": "System Architecture & Algorithms",
  "tags": [
   "Google Round 3",
   "Architecture",
   "Scale",
   "Set 8"
  ],
  "paragraphs": [
   "Google Technical Loop Round 3: System Architecture & Scaled Algorithms.",
   "Design and defend: Parking Lot Object-Oriented Design. Focus areas: Entities, allocation strategy, extensibility.",
   "Structure your answer as: Requirements and Assumptions, Core Algorithm and Data Model, Scaling and Bottlenecks, Failure Modes, and Trade-offs. State complexity bounds and invariants explicitly."
  ],
  "examples": [
   {
    "input": "Architecture and algorithm walkthrough",
    "output": "Data model, complexity bounds, scaling plan, failure analysis",
    "explanation": "Evaluated on algorithmic rigor, quantified capacity reasoning and honest trade-offs. No brain teasers."
   }
  ],
  "constraints": [
   "Quantify load: QPS, data size, memory and p99 latency targets.",
   "Justify each trade-off (consistency vs availability, memory vs disk, push vs pull).",
   "Cover failure domains: node loss, network partition, overload and retries."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Architecture notes, interfaces and complexity bounds\nclass Design:\n    def __init__(self):\n        pass\n",
   "javascript": "// Architecture notes, interfaces and complexity bounds\nclass Design {\n  constructor() {}\n}\n",
   "cpp": "// Architecture notes, interfaces and complexity bounds\nclass Design {\npublic:\n    Design();\n};\n"
  },
  "optimalComplexity": {
   "time": "Stated per component (target p99 latency)",
   "space": "Horizontally partitionable"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-intern-s9-r3-q1": {
  "id": "goog-intern-s9-r3-q1",
  "title": "Global Website Hit Counter",
  "difficulty": "Medium",
  "company": "Google",
  "category": "System Architecture & Algorithms",
  "tags": [
   "Google Round 3",
   "Architecture",
   "Scale",
   "Set 9"
  ],
  "paragraphs": [
   "Google Technical Loop Round 3: System Architecture & Scaled Algorithms.",
   "Design and defend: Global Website Hit Counter. Focus areas: Sharded counters, eventual consistency, rollups.",
   "Structure your answer as: Requirements and Assumptions, Core Algorithm and Data Model, Scaling and Bottlenecks, Failure Modes, and Trade-offs. State complexity bounds and invariants explicitly."
  ],
  "examples": [
   {
    "input": "Architecture and algorithm walkthrough",
    "output": "Data model, complexity bounds, scaling plan, failure analysis",
    "explanation": "Evaluated on algorithmic rigor, quantified capacity reasoning and honest trade-offs. No brain teasers."
   }
  ],
  "constraints": [
   "Quantify load: QPS, data size, memory and p99 latency targets.",
   "Justify each trade-off (consistency vs availability, memory vs disk, push vs pull).",
   "Cover failure domains: node loss, network partition, overload and retries."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Architecture notes, interfaces and complexity bounds\nclass Design:\n    def __init__(self):\n        pass\n",
   "javascript": "// Architecture notes, interfaces and complexity bounds\nclass Design {\n  constructor() {}\n}\n",
   "cpp": "// Architecture notes, interfaces and complexity bounds\nclass Design {\npublic:\n    Design();\n};\n"
  },
  "optimalComplexity": {
   "time": "Stated per component (target p99 latency)",
   "space": "Horizontally partitionable"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-intern-s10-r3-q1": {
  "id": "goog-intern-s10-r3-q1",
  "title": "Shortest Path Service for Campus Maps",
  "difficulty": "Medium",
  "company": "Google",
  "category": "System Architecture & Algorithms",
  "tags": [
   "Google Round 3",
   "Architecture",
   "Scale",
   "Set 10"
  ],
  "paragraphs": [
   "Google Technical Loop Round 3: System Architecture & Scaled Algorithms.",
   "Design and defend: Shortest Path Service for Campus Maps. Focus areas: Graph storage, A*, caching, precomputation.",
   "Structure your answer as: Requirements and Assumptions, Core Algorithm and Data Model, Scaling and Bottlenecks, Failure Modes, and Trade-offs. State complexity bounds and invariants explicitly."
  ],
  "examples": [
   {
    "input": "Architecture and algorithm walkthrough",
    "output": "Data model, complexity bounds, scaling plan, failure analysis",
    "explanation": "Evaluated on algorithmic rigor, quantified capacity reasoning and honest trade-offs. No brain teasers."
   }
  ],
  "constraints": [
   "Quantify load: QPS, data size, memory and p99 latency targets.",
   "Justify each trade-off (consistency vs availability, memory vs disk, push vs pull).",
   "Cover failure domains: node loss, network partition, overload and retries."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Architecture notes, interfaces and complexity bounds\nclass Design:\n    def __init__(self):\n        pass\n",
   "javascript": "// Architecture notes, interfaces and complexity bounds\nclass Design {\n  constructor() {}\n}\n",
   "cpp": "// Architecture notes, interfaces and complexity bounds\nclass Design {\npublic:\n    Design();\n};\n"
  },
  "optimalComplexity": {
   "time": "Stated per component (target p99 latency)",
   "space": "Horizontally partitionable"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-intern-s1-r4-q1": {
  "id": "goog-intern-s1-r4-q1",
  "title": "Resolving a Cross-Team Architecture Deadlock",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Googleyness & Leadership",
  "tags": [
   "Googleyness",
   "Leadership",
   "Thriving in Ambiguity / Intellectual Humility",
   "Set 1"
  ],
  "paragraphs": [
   "Google Googleyness & Leadership evaluation. Core pillars: Thriving in Ambiguity, Intellectual Humility, Bias to Action, Doing the Right Thing.",
   "Scenario: You are an intern on the host team and your mentor expects you to contribute a clear point of view. Two partner teams each insist on a different design for a shared pipeline interface. Neither will compromise and the launch review is two weeks away.",
   "Explain how you would handle it, what you would do first, how you would decide with incomplete information, and what you would do if you turned out to be wrong."
  ],
  "examples": [
   {
    "input": "Core Evaluation Pillars",
    "output": "Thriving in Ambiguity | Intellectual Humility | Bias to Action | Doing the Right Thing",
    "explanation": "Use concrete personal actions ('I'), show how you weighed evidence, and name the trade-offs honestly."
   }
  ],
  "constraints": [
   "Be specific about your own actions, not just the team's.",
   "Show intellectual humility and a willingness to change your mind.",
   "Describe how you would measure success and reduce team friction."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Googleyness & Leadership\n// Pillar focus: Thriving in Ambiguity / Intellectual Humility\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "javascript": "// Round 4: Googleyness & Leadership\n// Pillar focus: Thriving in Ambiguity / Intellectual Humility\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "python": "# Round 4: Googleyness & Leadership\n# Pillar focus: Thriving in Ambiguity / Intellectual Humility\n# Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "cpp": "// Round 4: Googleyness & Leadership\n// Pillar focus: Thriving in Ambiguity / Intellectual Humility\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n"
  },
  "optimalComplexity": {
   "time": "N/A (Googleyness evaluation)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-intern-s2-r4-q1": {
  "id": "goog-intern-s2-r4-q1",
  "title": "Telemetry Value vs User Privacy",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Googleyness & Leadership",
  "tags": [
   "Googleyness",
   "Leadership",
   "Doing the Right Thing",
   "Set 2"
  ],
  "paragraphs": [
   "Google Googleyness & Leadership evaluation. Core pillars: Thriving in Ambiguity, Intellectual Humility, Bias to Action, Doing the Right Thing.",
   "Scenario: You are an intern on the host team and your mentor expects you to contribute a clear point of view. A dashboard feature would be far more useful if per-user events were kept longer than the documented retention policy. Product wants to ship it.",
   "Explain how you would handle it, what you would do first, how you would decide with incomplete information, and what you would do if you turned out to be wrong."
  ],
  "examples": [
   {
    "input": "Core Evaluation Pillars",
    "output": "Thriving in Ambiguity | Intellectual Humility | Bias to Action | Doing the Right Thing",
    "explanation": "Use concrete personal actions ('I'), show how you weighed evidence, and name the trade-offs honestly."
   }
  ],
  "constraints": [
   "Be specific about your own actions, not just the team's.",
   "Show intellectual humility and a willingness to change your mind.",
   "Describe how you would measure success and reduce team friction."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Googleyness & Leadership\n// Pillar focus: Doing the Right Thing\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "javascript": "// Round 4: Googleyness & Leadership\n// Pillar focus: Doing the Right Thing\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "python": "# Round 4: Googleyness & Leadership\n# Pillar focus: Doing the Right Thing\n# Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "cpp": "// Round 4: Googleyness & Leadership\n// Pillar focus: Doing the Right Thing\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n"
  },
  "optimalComplexity": {
   "time": "N/A (Googleyness evaluation)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-intern-s3-r4-q1": {
  "id": "goog-intern-s3-r4-q1",
  "title": "Dependency Failure Before the Quarterly Freeze",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Googleyness & Leadership",
  "tags": [
   "Googleyness",
   "Leadership",
   "Bias to Action",
   "Set 3"
  ],
  "paragraphs": [
   "Google Googleyness & Leadership evaluation. Core pillars: Thriving in Ambiguity, Intellectual Humility, Bias to Action, Doing the Right Thing.",
   "Scenario: You are an intern on the host team and your mentor expects you to contribute a clear point of view. A multi-tenant dependency owned by another team starts failing intermittently three days before the code freeze, and its owners are unreachable.",
   "Explain how you would handle it, what you would do first, how you would decide with incomplete information, and what you would do if you turned out to be wrong."
  ],
  "examples": [
   {
    "input": "Core Evaluation Pillars",
    "output": "Thriving in Ambiguity | Intellectual Humility | Bias to Action | Doing the Right Thing",
    "explanation": "Use concrete personal actions ('I'), show how you weighed evidence, and name the trade-offs honestly."
   }
  ],
  "constraints": [
   "Be specific about your own actions, not just the team's.",
   "Show intellectual humility and a willingness to change your mind.",
   "Describe how you would measure success and reduce team friction."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Googleyness & Leadership\n// Pillar focus: Bias to Action\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "javascript": "// Round 4: Googleyness & Leadership\n// Pillar focus: Bias to Action\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "python": "# Round 4: Googleyness & Leadership\n# Pillar focus: Bias to Action\n# Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "cpp": "// Round 4: Googleyness & Leadership\n// Pillar focus: Bias to Action\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n"
  },
  "optimalComplexity": {
   "time": "N/A (Googleyness evaluation)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-intern-s4-r4-q1": {
  "id": "goog-intern-s4-r4-q1",
  "title": "10x Velocity vs Zero-Downtime Reliability",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Googleyness & Leadership",
  "tags": [
   "Googleyness",
   "Leadership",
   "Bias to Action / Doing the Right Thing",
   "Set 4"
  ],
  "paragraphs": [
   "Google Googleyness & Leadership evaluation. Core pillars: Thriving in Ambiguity, Intellectual Humility, Bias to Action, Doing the Right Thing.",
   "Scenario: You are an intern on the host team and your mentor expects you to contribute a clear point of view. Leadership wants to double shipping velocity, but the faster cadence is steadily burning your service's error budget.",
   "Explain how you would handle it, what you would do first, how you would decide with incomplete information, and what you would do if you turned out to be wrong."
  ],
  "examples": [
   {
    "input": "Core Evaluation Pillars",
    "output": "Thriving in Ambiguity | Intellectual Humility | Bias to Action | Doing the Right Thing",
    "explanation": "Use concrete personal actions ('I'), show how you weighed evidence, and name the trade-offs honestly."
   }
  ],
  "constraints": [
   "Be specific about your own actions, not just the team's.",
   "Show intellectual humility and a willingness to change your mind.",
   "Describe how you would measure success and reduce team friction."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Googleyness & Leadership\n// Pillar focus: Bias to Action / Doing the Right Thing\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "javascript": "// Round 4: Googleyness & Leadership\n// Pillar focus: Bias to Action / Doing the Right Thing\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "python": "# Round 4: Googleyness & Leadership\n# Pillar focus: Bias to Action / Doing the Right Thing\n# Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "cpp": "// Round 4: Googleyness & Leadership\n// Pillar focus: Bias to Action / Doing the Right Thing\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n"
  },
  "optimalComplexity": {
   "time": "N/A (Googleyness evaluation)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-intern-s5-r4-q1": {
  "id": "goog-intern-s5-r4-q1",
  "title": "Being Proven Wrong in a Design Review",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Googleyness & Leadership",
  "tags": [
   "Googleyness",
   "Leadership",
   "Intellectual Humility",
   "Set 5"
  ],
  "paragraphs": [
   "Google Googleyness & Leadership evaluation. Core pillars: Thriving in Ambiguity, Intellectual Humility, Bias to Action, Doing the Right Thing.",
   "Scenario: You are an intern on the host team and your mentor expects you to contribute a clear point of view. After you present a design, a colleague shows data suggesting your core assumption is wrong, in front of senior stakeholders.",
   "Explain how you would handle it, what you would do first, how you would decide with incomplete information, and what you would do if you turned out to be wrong."
  ],
  "examples": [
   {
    "input": "Core Evaluation Pillars",
    "output": "Thriving in Ambiguity | Intellectual Humility | Bias to Action | Doing the Right Thing",
    "explanation": "Use concrete personal actions ('I'), show how you weighed evidence, and name the trade-offs honestly."
   }
  ],
  "constraints": [
   "Be specific about your own actions, not just the team's.",
   "Show intellectual humility and a willingness to change your mind.",
   "Describe how you would measure success and reduce team friction."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Googleyness & Leadership\n// Pillar focus: Intellectual Humility\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "javascript": "// Round 4: Googleyness & Leadership\n// Pillar focus: Intellectual Humility\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "python": "# Round 4: Googleyness & Leadership\n# Pillar focus: Intellectual Humility\n# Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "cpp": "// Round 4: Googleyness & Leadership\n// Pillar focus: Intellectual Humility\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n"
  },
  "optimalComplexity": {
   "time": "N/A (Googleyness evaluation)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-intern-s6-r4-q1": {
  "id": "goog-intern-s6-r4-q1",
  "title": "A Vague Mandate With No Spec",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Googleyness & Leadership",
  "tags": [
   "Googleyness",
   "Leadership",
   "Thriving in Ambiguity",
   "Set 6"
  ],
  "paragraphs": [
   "Google Googleyness & Leadership evaluation. Core pillars: Thriving in Ambiguity, Intellectual Humility, Bias to Action, Doing the Right Thing.",
   "Scenario: You are an intern on the host team and your mentor expects you to contribute a clear point of view. You are handed the one-line goal 'make onboarding faster' with no metrics, no owner and no specification.",
   "Explain how you would handle it, what you would do first, how you would decide with incomplete information, and what you would do if you turned out to be wrong."
  ],
  "examples": [
   {
    "input": "Core Evaluation Pillars",
    "output": "Thriving in Ambiguity | Intellectual Humility | Bias to Action | Doing the Right Thing",
    "explanation": "Use concrete personal actions ('I'), show how you weighed evidence, and name the trade-offs honestly."
   }
  ],
  "constraints": [
   "Be specific about your own actions, not just the team's.",
   "Show intellectual humility and a willingness to change your mind.",
   "Describe how you would measure success and reduce team friction."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Googleyness & Leadership\n// Pillar focus: Thriving in Ambiguity\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "javascript": "// Round 4: Googleyness & Leadership\n// Pillar focus: Thriving in Ambiguity\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "python": "# Round 4: Googleyness & Leadership\n# Pillar focus: Thriving in Ambiguity\n# Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "cpp": "// Round 4: Googleyness & Leadership\n// Pillar focus: Thriving in Ambiguity\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n"
  },
  "optimalComplexity": {
   "time": "N/A (Googleyness evaluation)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-intern-s7-r4-q1": {
  "id": "goog-intern-s7-r4-q1",
  "title": "A Silent Data Inconsistency You Inherited",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Googleyness & Leadership",
  "tags": [
   "Googleyness",
   "Leadership",
   "Ownership / Doing the Right Thing",
   "Set 7"
  ],
  "paragraphs": [
   "Google Googleyness & Leadership evaluation. Core pillars: Thriving in Ambiguity, Intellectual Humility, Bias to Action, Doing the Right Thing.",
   "Scenario: You are an intern on the host team and your mentor expects you to contribute a clear point of view. You discover a long-standing silent data inconsistency in a system you just inherited. Fixing it will expose past errors to customers.",
   "Explain how you would handle it, what you would do first, how you would decide with incomplete information, and what you would do if you turned out to be wrong."
  ],
  "examples": [
   {
    "input": "Core Evaluation Pillars",
    "output": "Thriving in Ambiguity | Intellectual Humility | Bias to Action | Doing the Right Thing",
    "explanation": "Use concrete personal actions ('I'), show how you weighed evidence, and name the trade-offs honestly."
   }
  ],
  "constraints": [
   "Be specific about your own actions, not just the team's.",
   "Show intellectual humility and a willingness to change your mind.",
   "Describe how you would measure success and reduce team friction."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Googleyness & Leadership\n// Pillar focus: Ownership / Doing the Right Thing\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "javascript": "// Round 4: Googleyness & Leadership\n// Pillar focus: Ownership / Doing the Right Thing\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "python": "# Round 4: Googleyness & Leadership\n# Pillar focus: Ownership / Doing the Right Thing\n# Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "cpp": "// Round 4: Googleyness & Leadership\n// Pillar focus: Ownership / Doing the Right Thing\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n"
  },
  "optimalComplexity": {
   "time": "N/A (Googleyness evaluation)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-intern-s8-r4-q1": {
  "id": "goog-intern-s8-r4-q1",
  "title": "A Blocked Teammate Who Has Not Asked for Help",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Googleyness & Leadership",
  "tags": [
   "Googleyness",
   "Leadership",
   "Collaboration / Bias to Action",
   "Set 8"
  ],
  "paragraphs": [
   "Google Googleyness & Leadership evaluation. Core pillars: Thriving in Ambiguity, Intellectual Humility, Bias to Action, Doing the Right Thing.",
   "Scenario: You are an intern on the host team and your mentor expects you to contribute a clear point of view. A teammate's module is behind schedule and blocking others, and they have not raised the problem or asked for help.",
   "Explain how you would handle it, what you would do first, how you would decide with incomplete information, and what you would do if you turned out to be wrong."
  ],
  "examples": [
   {
    "input": "Core Evaluation Pillars",
    "output": "Thriving in Ambiguity | Intellectual Humility | Bias to Action | Doing the Right Thing",
    "explanation": "Use concrete personal actions ('I'), show how you weighed evidence, and name the trade-offs honestly."
   }
  ],
  "constraints": [
   "Be specific about your own actions, not just the team's.",
   "Show intellectual humility and a willingness to change your mind.",
   "Describe how you would measure success and reduce team friction."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Googleyness & Leadership\n// Pillar focus: Collaboration / Bias to Action\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "javascript": "// Round 4: Googleyness & Leadership\n// Pillar focus: Collaboration / Bias to Action\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "python": "# Round 4: Googleyness & Leadership\n# Pillar focus: Collaboration / Bias to Action\n# Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "cpp": "// Round 4: Googleyness & Leadership\n// Pillar focus: Collaboration / Bias to Action\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n"
  },
  "optimalComplexity": {
   "time": "N/A (Googleyness evaluation)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-intern-s9-r4-q1": {
  "id": "goog-intern-s9-r4-q1",
  "title": "A Deadline Shortcut With Misleading Numbers",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Googleyness & Leadership",
  "tags": [
   "Googleyness",
   "Leadership",
   "Doing the Right Thing",
   "Set 9"
  ],
  "paragraphs": [
   "Google Googleyness & Leadership evaluation. Core pillars: Thriving in Ambiguity, Intellectual Humility, Bias to Action, Doing the Right Thing.",
   "Scenario: You are an intern on the host team and your mentor expects you to contribute a clear point of view. A deadline-driven shortcut would ship a feature whose customer-visible numbers are misleading. Everyone is exhausted and the date is fixed.",
   "Explain how you would handle it, what you would do first, how you would decide with incomplete information, and what you would do if you turned out to be wrong."
  ],
  "examples": [
   {
    "input": "Core Evaluation Pillars",
    "output": "Thriving in Ambiguity | Intellectual Humility | Bias to Action | Doing the Right Thing",
    "explanation": "Use concrete personal actions ('I'), show how you weighed evidence, and name the trade-offs honestly."
   }
  ],
  "constraints": [
   "Be specific about your own actions, not just the team's.",
   "Show intellectual humility and a willingness to change your mind.",
   "Describe how you would measure success and reduce team friction."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Googleyness & Leadership\n// Pillar focus: Doing the Right Thing\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "javascript": "// Round 4: Googleyness & Leadership\n// Pillar focus: Doing the Right Thing\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "python": "# Round 4: Googleyness & Leadership\n# Pillar focus: Doing the Right Thing\n# Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "cpp": "// Round 4: Googleyness & Leadership\n// Pillar focus: Doing the Right Thing\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n"
  },
  "optimalComplexity": {
   "time": "N/A (Googleyness evaluation)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-intern-s10-r4-q1": {
  "id": "goog-intern-s10-r4-q1",
  "title": "Disagreeing With a Senior Decision",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Googleyness & Leadership",
  "tags": [
   "Googleyness",
   "Leadership",
   "Intellectual Humility / Courage",
   "Set 10"
  ],
  "paragraphs": [
   "Google Googleyness & Leadership evaluation. Core pillars: Thriving in Ambiguity, Intellectual Humility, Bias to Action, Doing the Right Thing.",
   "Scenario: You are an intern on the host team and your mentor expects you to contribute a clear point of view. A director picks a technical direction you believe is wrong for users, and the decision has already been announced.",
   "Explain how you would handle it, what you would do first, how you would decide with incomplete information, and what you would do if you turned out to be wrong."
  ],
  "examples": [
   {
    "input": "Core Evaluation Pillars",
    "output": "Thriving in Ambiguity | Intellectual Humility | Bias to Action | Doing the Right Thing",
    "explanation": "Use concrete personal actions ('I'), show how you weighed evidence, and name the trade-offs honestly."
   }
  ],
  "constraints": [
   "Be specific about your own actions, not just the team's.",
   "Show intellectual humility and a willingness to change your mind.",
   "Describe how you would measure success and reduce team friction."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Googleyness & Leadership\n// Pillar focus: Intellectual Humility / Courage\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "javascript": "// Round 4: Googleyness & Leadership\n// Pillar focus: Intellectual Humility / Courage\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "python": "# Round 4: Googleyness & Leadership\n# Pillar focus: Intellectual Humility / Courage\n# Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "cpp": "// Round 4: Googleyness & Leadership\n// Pillar focus: Intellectual Humility / Courage\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n"
  },
  "optimalComplexity": {
   "time": "N/A (Googleyness evaluation)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l3-s1-r1-q1": {
  "id": "goog-l3-s1-r1-q1",
  "title": "Alternating Colour Shortest Paths",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Graph / BFS",
  "tags": [
   "Google Round 1",
   "BFS",
   "Graph",
   "State Search",
   "Set 1"
  ],
  "paragraphs": [
   "A directed multigraph has n nodes with red and blue edges. Return, for every node, the shortest path length from node 0 whose edge colours strictly alternate, or -1."
  ],
  "examples": [
   {
    "input": "n = 3, redEdges = [[0,1],[1,2]], blueEdges = []",
    "output": "[0,1,-1]"
   },
   {
    "input": "n = 3, redEdges = [[0,1]], blueEdges = [[2,1]]",
    "output": "[0,1,-1]"
   }
  ],
  "constraints": [
   "Target O(V+E) time and O(V) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l3-s1-r1-q1-v1",
    "input": "3\n[[0,1],[1,2]]\n[]",
    "expectedOutput": "[0,1,-1]"
   },
   {
    "id": "goog-l3-s1-r1-q1-v2",
    "input": "3\n[[0,1]]\n[[2,1]]",
    "expectedOutput": "[0,1,-1]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l3-s1-r1-q1-h1",
    "input": "5\n[[0,1],[1,2],[2,3],[3,4]]\n[[1,2],[2,3],[3,1]]",
    "expectedOutput": "[0,1,2,3,7]"
   },
   {
    "id": "goog-l3-s1-r1-q1-h2",
    "input": "1\n[]\n[]",
    "expectedOutput": "[0]"
   },
   {
    "id": "goog-l3-s1-r1-q1-h3",
    "input": "4\n[[0,1]]\n[[1,2],[2,3]]",
    "expectedOutput": "[0,1,2,-1]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number} n\n * @param {number[][]} redEdges\n * @param {number[][]} blueEdges\n * @return {number[]}\n */\nfunction shortestAlternatingPaths(n, redEdges, blueEdges) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def shortestAlternatingPaths(self, n: int, redEdges: List[List[int]], blueEdges: List[List[int]]) -> List[int]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<int> shortestAlternatingPaths(int n, vector<vector<int>>& redEdges, vector<vector<int>>& blueEdges) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(V+E)",
   "space": "O(V)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "goog-l3-s1-r1-q2"
 },
 "goog-l3-s1-r1-q2": {
  "id": "goog-l3-s1-r1-q2",
  "title": "Longest Fragment With K Distinct Tokens",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Sliding Window",
  "tags": [
   "Google Round 1",
   "Sliding Window",
   "Hash Table",
   "Set 1"
  ],
  "paragraphs": [
   "Return the length of the longest substring of s containing at most k distinct characters. If k is 0, return 0."
  ],
  "examples": [
   {
    "input": "s = \"eceba\", k = 2",
    "output": "3"
   },
   {
    "input": "s = \"aa\", k = 1",
    "output": "2"
   }
  ],
  "constraints": [
   "Target O(N) time and O(K) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l3-s1-r1-q2-v1",
    "input": "\"eceba\"\n2",
    "expectedOutput": "3"
   },
   {
    "id": "goog-l3-s1-r1-q2-v2",
    "input": "\"aa\"\n1",
    "expectedOutput": "2"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l3-s1-r1-q2-h1",
    "input": "\"a\"\n0",
    "expectedOutput": "0"
   },
   {
    "id": "goog-l3-s1-r1-q2-h2",
    "input": "\"abaccc\"\n2",
    "expectedOutput": "4"
   },
   {
    "id": "goog-l3-s1-r1-q2-h3",
    "input": "\"abcabc\"\n3",
    "expectedOutput": "6"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} s\n * @param {number} k\n * @return {number}\n */\nfunction lengthOfLongestSubstringKDistinct(s, k) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def lengthOfLongestSubstringKDistinct(self, s: str, k: int) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int lengthOfLongestSubstringKDistinct(string s, int k) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(K)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "goog-l3-s2-r1-q1": {
  "id": "goog-l3-s2-r1-q1",
  "title": "Distance to Nearest Cache Node",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Multi-source BFS",
  "tags": [
   "Google Round 1",
   "BFS",
   "Matrix",
   "Multi-source",
   "Set 2"
  ],
  "paragraphs": [
   "In a binary matrix, return for every cell the distance to the nearest 0. Distances use 4-directional steps."
  ],
  "examples": [
   {
    "input": "mat = [[0,0,0],[0,1,0],[0,0,0]]",
    "output": "[[0,0,0],[0,1,0],[0,0,0]]"
   },
   {
    "input": "mat = [[0,0,0],[0,1,0],[1,1,1]]",
    "output": "[[0,0,0],[0,1,0],[1,2,1]]"
   }
  ],
  "constraints": [
   "Target O(M*N) time and O(M*N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l3-s2-r1-q1-v1",
    "input": "[[0,0,0],[0,1,0],[0,0,0]]",
    "expectedOutput": "[[0,0,0],[0,1,0],[0,0,0]]"
   },
   {
    "id": "goog-l3-s2-r1-q1-v2",
    "input": "[[0,0,0],[0,1,0],[1,1,1]]",
    "expectedOutput": "[[0,0,0],[0,1,0],[1,2,1]]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l3-s2-r1-q1-h1",
    "input": "[[0]]",
    "expectedOutput": "[[0]]"
   },
   {
    "id": "goog-l3-s2-r1-q1-h2",
    "input": "[[1,1],[1,0]]",
    "expectedOutput": "[[2,1],[1,0]]"
   },
   {
    "id": "goog-l3-s2-r1-q1-h3",
    "input": "[[1,0,1,1],[1,1,1,1]]",
    "expectedOutput": "[[1,0,1,2],[2,1,2,3]]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[][]} mat\n * @return {number[][]}\n */\nfunction updateMatrix(mat) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def updateMatrix(self, mat: List[List[int]]) -> List[List[int]]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<vector<int>> updateMatrix(vector<vector<int>>& mat) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(M*N)",
   "space": "O(M*N)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "goog-l3-s2-r1-q2"
 },
 "goog-l3-s2-r1-q2": {
  "id": "goog-l3-s2-r1-q2",
  "title": "Maximum Batch Jobs by Deadline",
  "difficulty": "Hard",
  "company": "Google",
  "category": "Greedy / Heap",
  "tags": [
   "Google Round 1",
   "Greedy",
   "Heap",
   "Scheduling",
   "Set 2"
  ],
  "paragraphs": [
   "Each job is [duration, deadline]. Jobs run one at a time and must finish by their deadline. Return the maximum number of jobs you can complete."
  ],
  "examples": [
   {
    "input": "jobs = [[100,200],[200,1300],[1000,1250],[2000,3200]]",
    "output": "3"
   },
   {
    "input": "jobs = [[1,2]]",
    "output": "1"
   }
  ],
  "constraints": [
   "Target O(N log N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l3-s2-r1-q2-v1",
    "input": "[[100,200],[200,1300],[1000,1250],[2000,3200]]",
    "expectedOutput": "3"
   },
   {
    "id": "goog-l3-s2-r1-q2-v2",
    "input": "[[1,2]]",
    "expectedOutput": "1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l3-s2-r1-q2-h1",
    "input": "[[3,2],[4,3]]",
    "expectedOutput": "0"
   },
   {
    "id": "goog-l3-s2-r1-q2-h2",
    "input": "[[5,5],[4,6],[2,6]]",
    "expectedOutput": "2"
   },
   {
    "id": "goog-l3-s2-r1-q2-h3",
    "input": "[[7,16],[2,3],[3,12],[3,14],[10,19],[10,16],[6,8],[6,11],[3,13],[6,16]]",
    "expectedOutput": "4"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[][]} jobs\n * @return {number}\n */\nfunction scheduleJobs(jobs) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def scheduleJobs(self, jobs: List[List[int]]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int scheduleJobs(vector<vector<int>>& jobs) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N log N)",
   "space": "O(N)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "goog-l3-s3-r1-q1": {
  "id": "goog-l3-s3-r1-q1",
  "title": "Rooms to Nearest Gateway",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Multi-source BFS",
  "tags": [
   "Google Round 1",
   "BFS",
   "Matrix",
   "Set 3"
  ],
  "paragraphs": [
   "In a grid, -1 is a wall, 0 is a gateway and 2147483647 is an empty room. Fill each empty room with the distance to its nearest gateway, leaving it at 2147483647 if unreachable."
  ],
  "examples": [
   {
    "input": "rooms = [[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]",
    "output": "[[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]"
   },
   {
    "input": "rooms = [[0]]",
    "output": "[[0]]"
   }
  ],
  "constraints": [
   "Target O(M*N) time and O(M*N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l3-s3-r1-q1-v1",
    "input": "[[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]",
    "expectedOutput": "[[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]"
   },
   {
    "id": "goog-l3-s3-r1-q1-v2",
    "input": "[[0]]",
    "expectedOutput": "[[0]]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l3-s3-r1-q1-h1",
    "input": "[[2147483647]]",
    "expectedOutput": "[[2147483647]]"
   },
   {
    "id": "goog-l3-s3-r1-q1-h2",
    "input": "[[2147483647,0],[-1,2147483647]]",
    "expectedOutput": "[[1,0],[-1,1]]"
   },
   {
    "id": "goog-l3-s3-r1-q1-h3",
    "input": "[[0,2147483647,2147483647]]",
    "expectedOutput": "[[0,1,2]]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[][]} rooms\n * @return {number[][]}\n */\nfunction wallsAndGates(rooms) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def wallsAndGates(self, rooms: List[List[int]]) -> List[List[int]]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<vector<int>> wallsAndGates(vector<vector<int>>& rooms) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(M*N)",
   "space": "O(M*N)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "goog-l3-s3-r1-q2"
 },
 "goog-l3-s3-r1-q2": {
  "id": "goog-l3-s3-r1-q2",
  "title": "Rolling Maximum Over Metrics",
  "difficulty": "Hard",
  "company": "Google",
  "category": "Monotonic Deque",
  "tags": [
   "Google Round 1",
   "Deque",
   "Sliding Window",
   "Set 3"
  ],
  "paragraphs": [
   "Return the maximum of every window of size k as it slides across nums."
  ],
  "examples": [
   {
    "input": "nums = [1,3,-1,-3,5,3,6,7], k = 3",
    "output": "[3,3,5,5,6,7]"
   },
   {
    "input": "nums = [1], k = 1",
    "output": "[1]"
   }
  ],
  "constraints": [
   "Target O(N) time and O(K) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l3-s3-r1-q2-v1",
    "input": "[1,3,-1,-3,5,3,6,7]\n3",
    "expectedOutput": "[3,3,5,5,6,7]"
   },
   {
    "id": "goog-l3-s3-r1-q2-v2",
    "input": "[1]\n1",
    "expectedOutput": "[1]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l3-s3-r1-q2-h1",
    "input": "[9,11]\n2",
    "expectedOutput": "[11]"
   },
   {
    "id": "goog-l3-s3-r1-q2-h2",
    "input": "[4,3,2,1]\n2",
    "expectedOutput": "[4,3,2]"
   },
   {
    "id": "goog-l3-s3-r1-q2-h3",
    "input": "[1,-1]\n1",
    "expectedOutput": "[1,-1]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @param {number} k\n * @return {number[]}\n */\nfunction maxSlidingWindow(nums, k) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<int> maxSlidingWindow(vector<int>& nums, int k) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(K)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "goog-l3-s4-r1-q1": {
  "id": "goog-l3-s4-r1-q1",
  "title": "Shortest Route With Removable Blocks",
  "difficulty": "Hard",
  "company": "Google",
  "category": "BFS with State",
  "tags": [
   "Google Round 1",
   "BFS",
   "Matrix",
   "State Search",
   "Set 4"
  ],
  "paragraphs": [
   "In a 0/1 grid (1 = obstacle), find the shortest path from top-left to bottom-right (4 directions) if you may remove at most k obstacles. Return -1 if impossible."
  ],
  "examples": [
   {
    "input": "grid = [[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]], k = 1",
    "output": "6"
   },
   {
    "input": "grid = [[0,1,1],[1,1,1],[1,0,0]], k = 1",
    "output": "-1"
   }
  ],
  "constraints": [
   "Target O(M*N*K) time and O(M*N*K) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l3-s4-r1-q1-v1",
    "input": "[[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]]\n1",
    "expectedOutput": "6"
   },
   {
    "id": "goog-l3-s4-r1-q1-v2",
    "input": "[[0,1,1],[1,1,1],[1,0,0]]\n1",
    "expectedOutput": "-1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l3-s4-r1-q1-h1",
    "input": "[[0]]\n0",
    "expectedOutput": "0"
   },
   {
    "id": "goog-l3-s4-r1-q1-h2",
    "input": "[[0,1],[1,0]]\n1",
    "expectedOutput": "2"
   },
   {
    "id": "goog-l3-s4-r1-q1-h3",
    "input": "[[0,0],[0,0]]\n0",
    "expectedOutput": "2"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[][]} grid\n * @param {number} k\n * @return {number}\n */\nfunction shortestPath(grid, k) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def shortestPath(self, grid: List[List[int]], k: int) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int shortestPath(vector<vector<int>>& grid, int k) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(M*N*K)",
   "space": "O(M*N*K)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "goog-l3-s4-r1-q2"
 },
 "goog-l3-s4-r1-q2": {
  "id": "goog-l3-s4-r1-q2",
  "title": "Smallest Covering Log Window",
  "difficulty": "Hard",
  "company": "Google",
  "category": "Sliding Window",
  "tags": [
   "Google Round 1",
   "Sliding Window",
   "Hash Table",
   "Set 4"
  ],
  "paragraphs": [
   "Return the smallest substring of s that contains every character of t (with multiplicity), or an empty string if none exists. The answer is unique in the tests."
  ],
  "examples": [
   {
    "input": "s = \"ADOBECODEBANC\", t = \"ABC\"",
    "output": "\"BANC\""
   },
   {
    "input": "s = \"a\", t = \"a\"",
    "output": "\"a\""
   }
  ],
  "constraints": [
   "Target O(N+M) time and O(A) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l3-s4-r1-q2-v1",
    "input": "\"ADOBECODEBANC\"\n\"ABC\"",
    "expectedOutput": "\"BANC\""
   },
   {
    "id": "goog-l3-s4-r1-q2-v2",
    "input": "\"a\"\n\"a\"",
    "expectedOutput": "\"a\""
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l3-s4-r1-q2-h1",
    "input": "\"a\"\n\"aa\"",
    "expectedOutput": "\"\""
   },
   {
    "id": "goog-l3-s4-r1-q2-h2",
    "input": "\"abc\"\n\"b\"",
    "expectedOutput": "\"b\""
   },
   {
    "id": "goog-l3-s4-r1-q2-h3",
    "input": "\"xyzzy\"\n\"zy\"",
    "expectedOutput": "\"yz\""
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} s\n * @param {string} t\n * @return {string}\n */\nfunction minWindow(s, t) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def minWindow(self, s: str, t: str) -> str:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    string minWindow(string s, string t) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N+M)",
   "space": "O(A)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "goog-l3-s5-r1-q1": {
  "id": "goog-l3-s5-r1-q1",
  "title": "Word Ladder Transformation Length",
  "difficulty": "Hard",
  "company": "Google",
  "category": "Graph / BFS",
  "tags": [
   "Google Round 1",
   "BFS",
   "String",
   "Graph",
   "Set 5"
  ],
  "paragraphs": [
   "Given beginWord, endWord and a word list, return the number of words in the shortest transformation sequence where each step changes one letter and every intermediate word is in the list. Return 0 if none exists."
  ],
  "examples": [
   {
    "input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
    "output": "5"
   },
   {
    "input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]",
    "output": "0"
   }
  ],
  "constraints": [
   "Target O(N*L*26) time and O(N*L) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l3-s5-r1-q1-v1",
    "input": "\"hit\"\n\"cog\"\n[\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
    "expectedOutput": "5"
   },
   {
    "id": "goog-l3-s5-r1-q1-v2",
    "input": "\"hit\"\n\"cog\"\n[\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]",
    "expectedOutput": "0"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l3-s5-r1-q1-h1",
    "input": "\"a\"\n\"c\"\n[\"a\",\"b\",\"c\"]",
    "expectedOutput": "2"
   },
   {
    "id": "goog-l3-s5-r1-q1-h2",
    "input": "\"lost\"\n\"cost\"\n[\"most\",\"fust\",\"lost\",\"cost\",\"cast\"]",
    "expectedOutput": "2"
   },
   {
    "id": "goog-l3-s5-r1-q1-h3",
    "input": "\"red\"\n\"tax\"\n[\"ted\",\"tex\",\"red\",\"tax\",\"tad\",\"den\",\"rex\",\"pee\"]",
    "expectedOutput": "4"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} beginWord\n * @param {string} endWord\n * @param {string[]} wordList\n * @return {number}\n */\nfunction ladderLength(beginWord, endWord, wordList) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int ladderLength(string beginWord, string endWord, vector<string>& wordList) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N*L*26)",
   "space": "O(N*L)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "goog-l3-s5-r1-q2"
 },
 "goog-l3-s5-r1-q2": {
  "id": "goog-l3-s5-r1-q2",
  "title": "Longest Rising Trend",
  "difficulty": "Medium",
  "company": "Google",
  "category": "DP / Binary Search",
  "tags": [
   "Google Round 1",
   "DP",
   "Binary Search",
   "Set 5"
  ],
  "paragraphs": [
   "Return the length of the longest strictly increasing subsequence of nums in O(N log N)."
  ],
  "examples": [
   {
    "input": "nums = [10,9,2,5,3,7,101,18]",
    "output": "4"
   },
   {
    "input": "nums = [0,1,0,3,2,3]",
    "output": "4"
   }
  ],
  "constraints": [
   "Target O(N log N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l3-s5-r1-q2-v1",
    "input": "[10,9,2,5,3,7,101,18]",
    "expectedOutput": "4"
   },
   {
    "id": "goog-l3-s5-r1-q2-v2",
    "input": "[0,1,0,3,2,3]",
    "expectedOutput": "4"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l3-s5-r1-q2-h1",
    "input": "[7,7,7,7]",
    "expectedOutput": "1"
   },
   {
    "id": "goog-l3-s5-r1-q2-h2",
    "input": "[1]",
    "expectedOutput": "1"
   },
   {
    "id": "goog-l3-s5-r1-q2-h3",
    "input": "[4,10,4,3,8,9]",
    "expectedOutput": "3"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @return {number}\n */\nfunction lengthOfLIS(nums) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def lengthOfLIS(self, nums: List[int]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int lengthOfLIS(vector<int>& nums) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N log N)",
   "space": "O(N)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "goog-l3-s6-r1-q1": {
  "id": "goog-l3-s6-r1-q1",
  "title": "Farthest Zone From Any Node",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Multi-source BFS",
  "tags": [
   "Google Round 1",
   "BFS",
   "Matrix",
   "Set 6"
  ],
  "paragraphs": [
   "In an n x n grid, 1 is a hosting zone and 0 is an empty zone. Return the maximum Manhattan distance from an empty zone to its nearest hosting zone, or -1 if the grid is all empty or all hosting."
  ],
  "examples": [
   {
    "input": "grid = [[1,0,1],[0,0,0],[1,0,1]]",
    "output": "2"
   },
   {
    "input": "grid = [[1,0,0],[0,0,0],[0,0,0]]",
    "output": "4"
   }
  ],
  "constraints": [
   "Target O(N^2) time and O(N^2) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l3-s6-r1-q1-v1",
    "input": "[[1,0,1],[0,0,0],[1,0,1]]",
    "expectedOutput": "2"
   },
   {
    "id": "goog-l3-s6-r1-q1-v2",
    "input": "[[1,0,0],[0,0,0],[0,0,0]]",
    "expectedOutput": "4"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l3-s6-r1-q1-h1",
    "input": "[[0,0],[0,0]]",
    "expectedOutput": "-1"
   },
   {
    "id": "goog-l3-s6-r1-q1-h2",
    "input": "[[1,1],[1,1]]",
    "expectedOutput": "-1"
   },
   {
    "id": "goog-l3-s6-r1-q1-h3",
    "input": "[[0,0,0],[0,0,0],[0,0,1]]",
    "expectedOutput": "4"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[][]} grid\n * @return {number}\n */\nfunction maxDistance(grid) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def maxDistance(self, grid: List[List[int]]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int maxDistance(vector<vector<int>>& grid) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N^2)",
   "space": "O(N^2)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "goog-l3-s6-r1-q2"
 },
 "goog-l3-s6-r1-q2": {
  "id": "goog-l3-s6-r1-q2",
  "title": "Minimum Edits Between Configs",
  "difficulty": "Hard",
  "company": "Google",
  "category": "DP (rolling row)",
  "tags": [
   "Google Round 1",
   "DP",
   "String",
   "Set 6"
  ],
  "paragraphs": [
   "Return the minimum number of insert, delete or replace operations to convert word1 into word2. Use O(min(M,N)) extra space."
  ],
  "examples": [
   {
    "input": "word1 = \"horse\", word2 = \"ros\"",
    "output": "3"
   },
   {
    "input": "word1 = \"intention\", word2 = \"execution\"",
    "output": "5"
   }
  ],
  "constraints": [
   "Target O(M*N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l3-s6-r1-q2-v1",
    "input": "\"horse\"\n\"ros\"",
    "expectedOutput": "3"
   },
   {
    "id": "goog-l3-s6-r1-q2-v2",
    "input": "\"intention\"\n\"execution\"",
    "expectedOutput": "5"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l3-s6-r1-q2-h1",
    "input": "\"\"\n\"\"",
    "expectedOutput": "0"
   },
   {
    "id": "goog-l3-s6-r1-q2-h2",
    "input": "\"abc\"\n\"\"",
    "expectedOutput": "3"
   },
   {
    "id": "goog-l3-s6-r1-q2-h3",
    "input": "\"kitten\"\n\"sitting\"",
    "expectedOutput": "3"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} word1\n * @param {string} word2\n * @return {number}\n */\nfunction minDistance(word1, word2) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def minDistance(self, word1: str, word2: str) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int minDistance(string word1, string word2) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(M*N)",
   "space": "O(N)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "goog-l3-s7-r1-q1": {
  "id": "goog-l3-s7-r1-q1",
  "title": "Circular Server Rack Harvest",
  "difficulty": "Medium",
  "company": "Google",
  "category": "DP",
  "tags": [
   "Google Round 1",
   "DP",
   "Set 7"
  ],
  "paragraphs": [
   "Servers sit on a circular rack with values nums. Adjacent servers cannot both be chosen. Return the maximum total value."
  ],
  "examples": [
   {
    "input": "nums = [2,3,2]",
    "output": "3"
   },
   {
    "input": "nums = [1,2,3,1]",
    "output": "4"
   }
  ],
  "constraints": [
   "Target O(N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l3-s7-r1-q1-v1",
    "input": "[2,3,2]",
    "expectedOutput": "3"
   },
   {
    "id": "goog-l3-s7-r1-q1-v2",
    "input": "[1,2,3,1]",
    "expectedOutput": "4"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l3-s7-r1-q1-h1",
    "input": "[1,2,3]",
    "expectedOutput": "3"
   },
   {
    "id": "goog-l3-s7-r1-q1-h2",
    "input": "[5]",
    "expectedOutput": "5"
   },
   {
    "id": "goog-l3-s7-r1-q1-h3",
    "input": "[2,7,9,3,1]",
    "expectedOutput": "11"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @return {number}\n */\nfunction rob(nums) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def rob(self, nums: List[int]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int rob(vector<int>& nums) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "goog-l3-s7-r1-q2"
 },
 "goog-l3-s7-r1-q2": {
  "id": "goog-l3-s7-r1-q2",
  "title": "Largest Healthy Square",
  "difficulty": "Medium",
  "company": "Google",
  "category": "DP",
  "tags": [
   "Google Round 1",
   "DP",
   "Matrix",
   "Set 7"
  ],
  "paragraphs": [
   "Rows of matrix are strings of '0' and '1'. Return the area of the largest square containing only '1'."
  ],
  "examples": [
   {
    "input": "matrix = [\"10100\",\"10111\",\"11111\",\"10010\"]",
    "output": "4"
   },
   {
    "input": "matrix = [\"01\",\"10\"]",
    "output": "1"
   }
  ],
  "constraints": [
   "Target O(M*N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l3-s7-r1-q2-v1",
    "input": "[\"10100\",\"10111\",\"11111\",\"10010\"]",
    "expectedOutput": "4"
   },
   {
    "id": "goog-l3-s7-r1-q2-v2",
    "input": "[\"01\",\"10\"]",
    "expectedOutput": "1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l3-s7-r1-q2-h1",
    "input": "[\"0\"]",
    "expectedOutput": "0"
   },
   {
    "id": "goog-l3-s7-r1-q2-h2",
    "input": "[\"11\",\"11\"]",
    "expectedOutput": "4"
   },
   {
    "id": "goog-l3-s7-r1-q2-h3",
    "input": "[\"111\",\"111\",\"111\"]",
    "expectedOutput": "9"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string[]} matrix\n * @return {number}\n */\nfunction maximalSquare(matrix) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def maximalSquare(self, matrix: List[str]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int maximalSquare(vector<string>& matrix) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(M*N)",
   "space": "O(N)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "goog-l3-s8-r1-q1": {
  "id": "goog-l3-s8-r1-q1",
  "title": "Signal Propagation Time",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Dijkstra",
  "tags": [
   "Google Round 1",
   "Dijkstra",
   "Graph",
   "Heap",
   "Set 8"
  ],
  "paragraphs": [
   "times[i] = [u, v, w] is a directed link taking w units. A signal starts at node k of n nodes. Return the time for all nodes to receive it, or -1."
  ],
  "examples": [
   {
    "input": "times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2",
    "output": "2"
   },
   {
    "input": "times = [[1,2,1]], n = 2, k = 1",
    "output": "1"
   }
  ],
  "constraints": [
   "Target O(E log V) time and O(V+E) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l3-s8-r1-q1-v1",
    "input": "[[2,1,1],[2,3,1],[3,4,1]]\n4\n2",
    "expectedOutput": "2"
   },
   {
    "id": "goog-l3-s8-r1-q1-v2",
    "input": "[[1,2,1]]\n2\n1",
    "expectedOutput": "1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l3-s8-r1-q1-h1",
    "input": "[[1,2,1]]\n2\n2",
    "expectedOutput": "-1"
   },
   {
    "id": "goog-l3-s8-r1-q1-h2",
    "input": "[[1,2,1],[2,3,2],[1,3,4]]\n3\n1",
    "expectedOutput": "3"
   },
   {
    "id": "goog-l3-s8-r1-q1-h3",
    "input": "[[1,2,5],[1,3,2],[3,2,1]]\n3\n1",
    "expectedOutput": "3"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[][]} times\n * @param {number} n\n * @param {number} k\n * @return {number}\n */\nfunction networkDelayTime(times, n, k) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int networkDelayTime(vector<vector<int>>& times, int n, int k) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(E log V)",
   "space": "O(V+E)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "goog-l3-s8-r1-q2"
 },
 "goog-l3-s8-r1-q2": {
  "id": "goog-l3-s8-r1-q2",
  "title": "Balanced Shard Split",
  "difficulty": "Medium",
  "company": "Google",
  "category": "DP (bitset)",
  "tags": [
   "Google Round 1",
   "DP",
   "Knapsack",
   "Set 8"
  ],
  "paragraphs": [
   "Return true if nums can be split into two subsets with equal sum."
  ],
  "examples": [
   {
    "input": "nums = [1,5,11,5]",
    "output": "true"
   },
   {
    "input": "nums = [1,2,3,5]",
    "output": "false"
   }
  ],
  "constraints": [
   "Target O(N*S) time and O(S) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l3-s8-r1-q2-v1",
    "input": "[1,5,11,5]",
    "expectedOutput": "true"
   },
   {
    "id": "goog-l3-s8-r1-q2-v2",
    "input": "[1,2,3,5]",
    "expectedOutput": "false"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l3-s8-r1-q2-h1",
    "input": "[2,2]",
    "expectedOutput": "true"
   },
   {
    "id": "goog-l3-s8-r1-q2-h2",
    "input": "[1]",
    "expectedOutput": "false"
   },
   {
    "id": "goog-l3-s8-r1-q2-h3",
    "input": "[3,3,3,4,5]",
    "expectedOutput": "true"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @return {boolean}\n */\nfunction canPartition(nums) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def canPartition(self, nums: List[int]) -> bool:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    bool canPartition(vector<int>& nums) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N*S)",
   "space": "O(S)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "goog-l3-s9-r1-q1": {
  "id": "goog-l3-s9-r1-q1",
  "title": "Cooldown Task Slots",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Greedy",
  "tags": [
   "Google Round 1",
   "Greedy",
   "Counting",
   "Set 9"
  ],
  "paragraphs": [
   "tasks is a string where each letter is a task type. The same type needs n idle slots between runs. Return the minimum number of slots to finish all tasks."
  ],
  "examples": [
   {
    "input": "tasks = \"AAABBB\", n = 2",
    "output": "8"
   },
   {
    "input": "tasks = \"AAABBB\", n = 0",
    "output": "6"
   }
  ],
  "constraints": [
   "Target O(N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l3-s9-r1-q1-v1",
    "input": "\"AAABBB\"\n2",
    "expectedOutput": "8"
   },
   {
    "id": "goog-l3-s9-r1-q1-v2",
    "input": "\"AAABBB\"\n0",
    "expectedOutput": "6"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l3-s9-r1-q1-h1",
    "input": "\"AAAAAABCDEFG\"\n2",
    "expectedOutput": "16"
   },
   {
    "id": "goog-l3-s9-r1-q1-h2",
    "input": "\"ABC\"\n5",
    "expectedOutput": "3"
   },
   {
    "id": "goog-l3-s9-r1-q1-h3",
    "input": "\"AABBCC\"\n1",
    "expectedOutput": "6"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} tasks\n * @param {number} n\n * @return {number}\n */\nfunction leastInterval(tasks, n) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def leastInterval(self, tasks: str, n: int) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int leastInterval(string tasks, int n) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "goog-l3-s9-r1-q2"
 },
 "goog-l3-s9-r1-q2": {
  "id": "goog-l3-s9-r1-q2",
  "title": "Concurrent Booking Rooms",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Sorting / Sweep",
  "tags": [
   "Google Round 1",
   "Sweep Line",
   "Heap",
   "Set 9"
  ],
  "paragraphs": [
   "Given meeting intervals [start, end], return the minimum number of rooms needed. A meeting ending at t does not conflict with one starting at t."
  ],
  "examples": [
   {
    "input": "intervals = [[0,30],[5,10],[15,20]]",
    "output": "2"
   },
   {
    "input": "intervals = [[7,10],[2,4]]",
    "output": "1"
   }
  ],
  "constraints": [
   "Target O(N log N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l3-s9-r1-q2-v1",
    "input": "[[0,30],[5,10],[15,20]]",
    "expectedOutput": "2"
   },
   {
    "id": "goog-l3-s9-r1-q2-v2",
    "input": "[[7,10],[2,4]]",
    "expectedOutput": "1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l3-s9-r1-q2-h1",
    "input": "[[1,5],[5,10]]",
    "expectedOutput": "1"
   },
   {
    "id": "goog-l3-s9-r1-q2-h2",
    "input": "[[1,10],[2,9],[3,8]]",
    "expectedOutput": "3"
   },
   {
    "id": "goog-l3-s9-r1-q2-h3",
    "input": "[[0,5],[1,2],[3,4],[6,7]]",
    "expectedOutput": "2"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[][]} intervals\n * @return {number}\n */\nfunction minMeetingRooms(intervals) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def minMeetingRooms(self, intervals: List[List[int]]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int minMeetingRooms(vector<vector<int>>& intervals) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N log N)",
   "space": "O(N)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "goog-l3-s10-r1-q1": {
  "id": "goog-l3-s10-r1-q1",
  "title": "Cheapest Route With Hop Limit",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Bellman-Ford",
  "tags": [
   "Google Round 1",
   "Graph",
   "DP",
   "Shortest Path",
   "Set 10"
  ],
  "paragraphs": [
   "Given flights [from, to, price], return the cheapest price from src to dst using at most k stops, or -1."
  ],
  "examples": [
   {
    "input": "n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1",
    "output": "700"
   },
   {
    "input": "n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1",
    "output": "200"
   }
  ],
  "constraints": [
   "Target O(K*E) time and O(V) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l3-s10-r1-q1-v1",
    "input": "4\n[[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]]\n0\n3\n1",
    "expectedOutput": "700"
   },
   {
    "id": "goog-l3-s10-r1-q1-v2",
    "input": "3\n[[0,1,100],[1,2,100],[0,2,500]]\n0\n2\n1",
    "expectedOutput": "200"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l3-s10-r1-q1-h1",
    "input": "3\n[[0,1,100],[1,2,100],[0,2,500]]\n0\n2\n0",
    "expectedOutput": "500"
   },
   {
    "id": "goog-l3-s10-r1-q1-h2",
    "input": "2\n[[0,1,5]]\n1\n0\n1",
    "expectedOutput": "-1"
   },
   {
    "id": "goog-l3-s10-r1-q1-h3",
    "input": "5\n[[0,1,1],[1,2,1],[2,3,1],[3,4,1]]\n0\n4\n2",
    "expectedOutput": "-1"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number} n\n * @param {number[][]} flights\n * @param {number} src\n * @param {number} dst\n * @param {number} k\n * @return {number}\n */\nfunction findCheapestPrice(n, flights, src, dst, k) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def findCheapestPrice(self, n: int, flights: List[List[int]], src: int, dst: int, k: int) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int findCheapestPrice(int n, vector<vector<int>>& flights, int src, int dst, int k) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(K*E)",
   "space": "O(V)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "goog-l3-s10-r1-q2"
 },
 "goog-l3-s10-r1-q2": {
  "id": "goog-l3-s10-r1-q2",
  "title": "Longest Consecutive Id Run",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Hash Set",
  "tags": [
   "Google Round 1",
   "Hash Table",
   "Union Find",
   "Set 10"
  ],
  "paragraphs": [
   "Return the length of the longest run of consecutive integers present in nums, in O(N) time."
  ],
  "examples": [
   {
    "input": "nums = [100,4,200,1,3,2]",
    "output": "4"
   },
   {
    "input": "nums = [0,3,7,2,5,8,4,6,0,1]",
    "output": "9"
   }
  ],
  "constraints": [
   "Target O(N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l3-s10-r1-q2-v1",
    "input": "[100,4,200,1,3,2]",
    "expectedOutput": "4"
   },
   {
    "id": "goog-l3-s10-r1-q2-v2",
    "input": "[0,3,7,2,5,8,4,6,0,1]",
    "expectedOutput": "9"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l3-s10-r1-q2-h1",
    "input": "[]",
    "expectedOutput": "0"
   },
   {
    "id": "goog-l3-s10-r1-q2-h2",
    "input": "[1,2,0,1]",
    "expectedOutput": "3"
   },
   {
    "id": "goog-l3-s10-r1-q2-h3",
    "input": "[9]",
    "expectedOutput": "1"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @return {number}\n */\nfunction longestConsecutive(nums) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def longestConsecutive(self, nums: List[int]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int longestConsecutive(vector<int>& nums) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(N)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "goog-l3-s1-r2-q1": {
  "id": "goog-l3-s1-r2-q1",
  "title": "Maximum Path Sum in a Service Tree",
  "difficulty": "Hard",
  "company": "Google",
  "category": "Tree / DFS",
  "tags": [
   "Google Round 2",
   "Tree",
   "DFS",
   "Recursion",
   "Set 1"
  ],
  "paragraphs": [
   "The tree is given as a level-order array where null marks a missing child. Return the maximum path sum of any non-empty path (it need not pass through the root). Defend your invariant.",
   "Round 2 is a live viva: after your code passes every test you will defend its invariants and Big-O bounds."
  ],
  "examples": [
   {
    "input": "root = [1,2,3]",
    "output": "6"
   },
   {
    "input": "root = [-10,9,20,null,null,15,7]",
    "output": "42"
   }
  ],
  "constraints": [
   "Target O(N) time and O(H) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l3-s1-r2-q1-v1",
    "input": "[1,2,3]",
    "expectedOutput": "6"
   },
   {
    "id": "goog-l3-s1-r2-q1-v2",
    "input": "[-10,9,20,null,null,15,7]",
    "expectedOutput": "42"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l3-s1-r2-q1-h1",
    "input": "[-3]",
    "expectedOutput": "-3"
   },
   {
    "id": "goog-l3-s1-r2-q1-h2",
    "input": "[2,-1]",
    "expectedOutput": "2"
   },
   {
    "id": "goog-l3-s1-r2-q1-h3",
    "input": "[5,4,8,11,null,13,4,7,2,null,null,null,1]",
    "expectedOutput": "48"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} root\n * @return {number}\n */\nfunction maxPathSum(root) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def maxPathSum(self, root: List[int]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int maxPathSum(vector<int>& root) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(H)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l3-s2-r2-q1": {
  "id": "goog-l3-s2-r2-q1",
  "title": "Multi-Word Grid Search With Trie Pruning",
  "difficulty": "Hard",
  "company": "Google",
  "category": "Trie / Backtracking",
  "tags": [
   "Google Round 2",
   "Trie",
   "Backtracking",
   "Matrix",
   "Set 2"
  ],
  "paragraphs": [
   "Each row of board is a string. Return, sorted, every word from words that can be traced through adjacent cells without reusing a cell in one word. Defend how Trie pruning cuts the search.",
   "Round 2 is a live viva: after your code passes every test you will defend its invariants and Big-O bounds."
  ],
  "examples": [
   {
    "input": "board = [\"oaan\",\"etae\",\"ihkr\",\"iflv\"], words = [\"oath\",\"pea\",\"eat\",\"rain\"]",
    "output": "[\"eat\",\"oath\"]"
   },
   {
    "input": "board = [\"ab\",\"cd\"], words = [\"abcb\"]",
    "output": "[]"
   }
  ],
  "constraints": [
   "Target O(M*N*4^L) time and O(W*L) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l3-s2-r2-q1-v1",
    "input": "[\"oaan\",\"etae\",\"ihkr\",\"iflv\"]\n[\"oath\",\"pea\",\"eat\",\"rain\"]",
    "expectedOutput": "[\"eat\",\"oath\"]"
   },
   {
    "id": "goog-l3-s2-r2-q1-v2",
    "input": "[\"ab\",\"cd\"]\n[\"abcb\"]",
    "expectedOutput": "[]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l3-s2-r2-q1-h1",
    "input": "[\"a\"]\n[\"a\"]",
    "expectedOutput": "[\"a\"]"
   },
   {
    "id": "goog-l3-s2-r2-q1-h2",
    "input": "[\"ab\",\"cd\"]\n[\"ab\",\"ac\",\"bd\",\"abdc\"]",
    "expectedOutput": "[\"ab\",\"abdc\",\"ac\",\"bd\"]"
   },
   {
    "id": "goog-l3-s2-r2-q1-h3",
    "input": "[\"aaa\",\"aaa\"]\n[\"aaaa\",\"aaaaaaa\"]",
    "expectedOutput": "[\"aaaa\"]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string[]} board\n * @param {string[]} words\n * @return {string[]}\n */\nfunction findWords(board, words) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def findWords(self, board: List[str], words: List[str]) -> List[str]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<string> findWords(vector<string>& board, vector<string>& words) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(M*N*4^L)",
   "space": "O(W*L)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l3-s3-r2-q1": {
  "id": "goog-l3-s3-r2-q1",
  "title": "Kth Smallest in Sorted Matrix",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Heap / Binary Search",
  "tags": [
   "Google Round 2",
   "Heap",
   "Binary Search",
   "Matrix",
   "Set 3"
  ],
  "paragraphs": [
   "Rows and columns are sorted ascending. Return the kth smallest element. Defend a heap or value-range binary search solution.",
   "Round 2 is a live viva: after your code passes every test you will defend its invariants and Big-O bounds."
  ],
  "examples": [
   {
    "input": "matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8",
    "output": "13"
   },
   {
    "input": "matrix = [[-5]], k = 1",
    "output": "-5"
   }
  ],
  "constraints": [
   "Target O(N log(max-min)) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l3-s3-r2-q1-v1",
    "input": "[[1,5,9],[10,11,13],[12,13,15]]\n8",
    "expectedOutput": "13"
   },
   {
    "id": "goog-l3-s3-r2-q1-v2",
    "input": "[[-5]]\n1",
    "expectedOutput": "-5"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l3-s3-r2-q1-h1",
    "input": "[[1,2],[1,3]]\n2",
    "expectedOutput": "1"
   },
   {
    "id": "goog-l3-s3-r2-q1-h2",
    "input": "[[1,3,5],[6,7,12],[11,14,14]]\n6",
    "expectedOutput": "11"
   },
   {
    "id": "goog-l3-s3-r2-q1-h3",
    "input": "[[2,2],[2,2]]\n3",
    "expectedOutput": "2"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[][]} matrix\n * @param {number} k\n * @return {number}\n */\nfunction kthSmallest(matrix, k) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def kthSmallest(self, matrix: List[List[int]], k: int) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int kthSmallest(vector<vector<int>>& matrix, int k) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N log(max-min))",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l3-s4-r2-q1": {
  "id": "goog-l3-s4-r2-q1",
  "title": "Best Root Nodes for Latency",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Graph / Topological Peel",
  "tags": [
   "Google Round 2",
   "Graph",
   "BFS",
   "Tree",
   "Set 4"
  ],
  "paragraphs": [
   "Given an undirected tree with n nodes and edges, return, sorted, every node that gives the minimum tree height when used as root.",
   "Round 2 is a live viva: after your code passes every test you will defend its invariants and Big-O bounds."
  ],
  "examples": [
   {
    "input": "n = 4, edges = [[1,0],[1,2],[1,3]]",
    "output": "[1]"
   },
   {
    "input": "n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]",
    "output": "[3,4]"
   }
  ],
  "constraints": [
   "Target O(N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l3-s4-r2-q1-v1",
    "input": "4\n[[1,0],[1,2],[1,3]]",
    "expectedOutput": "[1]"
   },
   {
    "id": "goog-l3-s4-r2-q1-v2",
    "input": "6\n[[3,0],[3,1],[3,2],[3,4],[5,4]]",
    "expectedOutput": "[3,4]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l3-s4-r2-q1-h1",
    "input": "1\n[]",
    "expectedOutput": "[0]"
   },
   {
    "id": "goog-l3-s4-r2-q1-h2",
    "input": "2\n[[0,1]]",
    "expectedOutput": "[0,1]"
   },
   {
    "id": "goog-l3-s4-r2-q1-h3",
    "input": "5\n[[0,1],[1,2],[2,3],[3,4]]",
    "expectedOutput": "[2]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number} n\n * @param {number[][]} edges\n * @return {number[]}\n */\nfunction findMinHeightTrees(n, edges) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def findMinHeightTrees(self, n: int, edges: List[List[int]]) -> List[int]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<int> findMinHeightTrees(int n, vector<vector<int>>& edges) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l3-s5-r2-q1": {
  "id": "goog-l3-s5-r2-q1",
  "title": "Longest Increasing Path in Grid",
  "difficulty": "Hard",
  "company": "Google",
  "category": "DFS + Memoization",
  "tags": [
   "Google Round 2",
   "DFS",
   "DP",
   "Matrix",
   "Set 5"
  ],
  "paragraphs": [
   "Return the length of the longest strictly increasing path in a matrix, moving in 4 directions. Defend why memoization gives O(M*N).",
   "Round 2 is a live viva: after your code passes every test you will defend its invariants and Big-O bounds."
  ],
  "examples": [
   {
    "input": "matrix = [[9,9,4],[6,6,8],[2,1,1]]",
    "output": "4"
   },
   {
    "input": "matrix = [[3,4,5],[3,2,6],[2,2,1]]",
    "output": "4"
   }
  ],
  "constraints": [
   "Target O(M*N) time and O(M*N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l3-s5-r2-q1-v1",
    "input": "[[9,9,4],[6,6,8],[2,1,1]]",
    "expectedOutput": "4"
   },
   {
    "id": "goog-l3-s5-r2-q1-v2",
    "input": "[[3,4,5],[3,2,6],[2,2,1]]",
    "expectedOutput": "4"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l3-s5-r2-q1-h1",
    "input": "[[1]]",
    "expectedOutput": "1"
   },
   {
    "id": "goog-l3-s5-r2-q1-h2",
    "input": "[[1,2],[4,3]]",
    "expectedOutput": "4"
   },
   {
    "id": "goog-l3-s5-r2-q1-h3",
    "input": "[[7,7],[7,7]]",
    "expectedOutput": "1"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[][]} matrix\n * @return {number}\n */\nfunction longestIncreasingPath(matrix) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def longestIncreasingPath(self, matrix: List[List[int]]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int longestIncreasingPath(vector<vector<int>>& matrix) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(M*N)",
   "space": "O(M*N)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l3-s6-r2-q1": {
  "id": "goog-l3-s6-r2-q1",
  "title": "Decode Telemetry Codes",
  "difficulty": "Medium",
  "company": "Google",
  "category": "DP",
  "tags": [
   "Google Round 2",
   "DP",
   "String",
   "Set 6"
  ],
  "paragraphs": [
   "A message of digits maps 1->A ... 26->Z. Return the number of ways to decode it.",
   "Round 2 is a live viva: after your code passes every test you will defend its invariants and Big-O bounds."
  ],
  "examples": [
   {
    "input": "s = \"12\"",
    "output": "2"
   },
   {
    "input": "s = \"226\"",
    "output": "3"
   }
  ],
  "constraints": [
   "Target O(N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l3-s6-r2-q1-v1",
    "input": "\"12\"",
    "expectedOutput": "2"
   },
   {
    "id": "goog-l3-s6-r2-q1-v2",
    "input": "\"226\"",
    "expectedOutput": "3"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l3-s6-r2-q1-h1",
    "input": "\"06\"",
    "expectedOutput": "0"
   },
   {
    "id": "goog-l3-s6-r2-q1-h2",
    "input": "\"10\"",
    "expectedOutput": "1"
   },
   {
    "id": "goog-l3-s6-r2-q1-h3",
    "input": "\"2101\"",
    "expectedOutput": "1"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} s\n * @return {number}\n */\nfunction numDecodings(s) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def numDecodings(self, s: str) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int numDecodings(string s) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l3-s7-r2-q1": {
  "id": "goog-l3-s7-r2-q1",
  "title": "Fewest Palindromic Splits",
  "difficulty": "Hard",
  "company": "Google",
  "category": "DP",
  "tags": [
   "Google Round 2",
   "DP",
   "String",
   "Set 7"
  ],
  "paragraphs": [
   "Return the minimum number of cuts needed to partition s so every part is a palindrome.",
   "Round 2 is a live viva: after your code passes every test you will defend its invariants and Big-O bounds."
  ],
  "examples": [
   {
    "input": "s = \"aab\"",
    "output": "1"
   },
   {
    "input": "s = \"a\"",
    "output": "0"
   }
  ],
  "constraints": [
   "Target O(N^2) time and O(N^2) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l3-s7-r2-q1-v1",
    "input": "\"aab\"",
    "expectedOutput": "1"
   },
   {
    "id": "goog-l3-s7-r2-q1-v2",
    "input": "\"a\"",
    "expectedOutput": "0"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l3-s7-r2-q1-h1",
    "input": "\"ab\"",
    "expectedOutput": "1"
   },
   {
    "id": "goog-l3-s7-r2-q1-h2",
    "input": "\"racecar\"",
    "expectedOutput": "0"
   },
   {
    "id": "goog-l3-s7-r2-q1-h3",
    "input": "\"abcbm\"",
    "expectedOutput": "2"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} s\n * @return {number}\n */\nfunction minCut(s) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def minCut(self, s: str) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int minCut(string s) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N^2)",
   "space": "O(N^2)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l3-s8-r2-q1": {
  "id": "goog-l3-s8-r2-q1",
  "title": "Largest Dashboard Rectangle",
  "difficulty": "Hard",
  "company": "Google",
  "category": "Monotonic Stack",
  "tags": [
   "Google Round 2",
   "Stack",
   "Array",
   "Set 8"
  ],
  "paragraphs": [
   "Given bar heights of width 1, return the area of the largest rectangle in the histogram. Defend the amortised O(N) stack argument.",
   "Round 2 is a live viva: after your code passes every test you will defend its invariants and Big-O bounds."
  ],
  "examples": [
   {
    "input": "heights = [2,1,5,6,2,3]",
    "output": "10"
   },
   {
    "input": "heights = [2,4]",
    "output": "4"
   }
  ],
  "constraints": [
   "Target O(N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l3-s8-r2-q1-v1",
    "input": "[2,1,5,6,2,3]",
    "expectedOutput": "10"
   },
   {
    "id": "goog-l3-s8-r2-q1-v2",
    "input": "[2,4]",
    "expectedOutput": "4"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l3-s8-r2-q1-h1",
    "input": "[1]",
    "expectedOutput": "1"
   },
   {
    "id": "goog-l3-s8-r2-q1-h2",
    "input": "[6,2,5,4,5,1,6]",
    "expectedOutput": "12"
   },
   {
    "id": "goog-l3-s8-r2-q1-h3",
    "input": "[3,3,3,3]",
    "expectedOutput": "12"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} heights\n * @return {number}\n */\nfunction largestRectangleArea(heights) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def largestRectangleArea(self, heights: List[int]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int largestRectangleArea(vector<int>& heights) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l3-s9-r2-q1": {
  "id": "goog-l3-s9-r2-q1",
  "title": "Count Smaller Events After",
  "difficulty": "Hard",
  "company": "Google",
  "category": "BIT / Merge Sort",
  "tags": [
   "Google Round 2",
   "Binary Indexed Tree",
   "Merge Sort",
   "Set 9"
  ],
  "paragraphs": [
   "For each index i, return how many elements to its right are strictly smaller than nums[i]. Defend a sub-quadratic approach.",
   "Round 2 is a live viva: after your code passes every test you will defend its invariants and Big-O bounds."
  ],
  "examples": [
   {
    "input": "nums = [5,2,6,1]",
    "output": "[2,1,1,0]"
   },
   {
    "input": "nums = [-1]",
    "output": "[0]"
   }
  ],
  "constraints": [
   "Target O(N log N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l3-s9-r2-q1-v1",
    "input": "[5,2,6,1]",
    "expectedOutput": "[2,1,1,0]"
   },
   {
    "id": "goog-l3-s9-r2-q1-v2",
    "input": "[-1]",
    "expectedOutput": "[0]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l3-s9-r2-q1-h1",
    "input": "[-1,-1]",
    "expectedOutput": "[0,0]"
   },
   {
    "id": "goog-l3-s9-r2-q1-h2",
    "input": "[3,2,1]",
    "expectedOutput": "[2,1,0]"
   },
   {
    "id": "goog-l3-s9-r2-q1-h3",
    "input": "[1,2,3]",
    "expectedOutput": "[0,0,0]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @return {number[]}\n */\nfunction countSmaller(nums) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def countSmaller(self, nums: List[int]) -> List[int]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<int> countSmaller(vector<int>& nums) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N log N)",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l3-s10-r2-q1": {
  "id": "goog-l3-s10-r2-q1",
  "title": "Most Collinear Probe Points",
  "difficulty": "Hard",
  "company": "Google",
  "category": "Hashing / Geometry",
  "tags": [
   "Google Round 2",
   "Hash Table",
   "Math",
   "Geometry",
   "Set 10"
  ],
  "paragraphs": [
   "Given points [x, y], return the maximum number of points lying on one straight line. Defend how you avoid floating-point slopes.",
   "Round 2 is a live viva: after your code passes every test you will defend its invariants and Big-O bounds."
  ],
  "examples": [
   {
    "input": "points = [[1,1],[2,2],[3,3]]",
    "output": "3"
   },
   {
    "input": "points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]",
    "output": "4"
   }
  ],
  "constraints": [
   "Target O(N^2) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l3-s10-r2-q1-v1",
    "input": "[[1,1],[2,2],[3,3]]",
    "expectedOutput": "3"
   },
   {
    "id": "goog-l3-s10-r2-q1-v2",
    "input": "[[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]",
    "expectedOutput": "4"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l3-s10-r2-q1-h1",
    "input": "[[0,0]]",
    "expectedOutput": "1"
   },
   {
    "id": "goog-l3-s10-r2-q1-h2",
    "input": "[[0,0],[1,1],[2,2],[3,0]]",
    "expectedOutput": "3"
   },
   {
    "id": "goog-l3-s10-r2-q1-h3",
    "input": "[[0,0],[0,1],[0,2],[1,5]]",
    "expectedOutput": "3"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[][]} points\n * @return {number}\n */\nfunction maxPoints(points) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def maxPoints(self, points: List[List[int]]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int maxPoints(vector<vector<int>>& points) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N^2)",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l3-s1-r3-q1": {
  "id": "goog-l3-s1-r3-q1",
  "title": "Weighted Interval Scheduling for Ad Auctions",
  "difficulty": "Hard",
  "company": "Google",
  "category": "System Architecture & Algorithms",
  "tags": [
   "Google Round 3",
   "Architecture",
   "Scale",
   "Set 1"
  ],
  "paragraphs": [
   "Google Technical Loop Round 3: System Architecture & Scaled Algorithms.",
   "Design and defend: Weighted Interval Scheduling for Ad Auctions. Focus areas: DP with binary search, scaling to streaming inputs.",
   "Structure your answer as: Requirements and Assumptions, Core Algorithm and Data Model, Scaling and Bottlenecks, Failure Modes, and Trade-offs. State complexity bounds and invariants explicitly."
  ],
  "examples": [
   {
    "input": "Architecture and algorithm walkthrough",
    "output": "Data model, complexity bounds, scaling plan, failure analysis",
    "explanation": "Evaluated on algorithmic rigor, quantified capacity reasoning and honest trade-offs. No brain teasers."
   }
  ],
  "constraints": [
   "Quantify load: QPS, data size, memory and p99 latency targets.",
   "Justify each trade-off (consistency vs availability, memory vs disk, push vs pull).",
   "Cover failure domains: node loss, network partition, overload and retries."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Architecture notes, interfaces and complexity bounds\nclass Design:\n    def __init__(self):\n        pass\n",
   "javascript": "// Architecture notes, interfaces and complexity bounds\nclass Design {\n  constructor() {}\n}\n",
   "cpp": "// Architecture notes, interfaces and complexity bounds\nclass Design {\npublic:\n    Design();\n};\n"
  },
  "optimalComplexity": {
   "time": "Stated per component (target p99 latency)",
   "space": "Horizontally partitionable"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l3-s2-r3-q1": {
  "id": "goog-l3-s2-r3-q1",
  "title": "Consistent Hashing Ring for a Cache Tier",
  "difficulty": "Hard",
  "company": "Google",
  "category": "System Architecture & Algorithms",
  "tags": [
   "Google Round 3",
   "Architecture",
   "Scale",
   "Set 2"
  ],
  "paragraphs": [
   "Google Technical Loop Round 3: System Architecture & Scaled Algorithms.",
   "Design and defend: Consistent Hashing Ring for a Cache Tier. Focus areas: Virtual nodes, rebalancing cost, hot keys.",
   "Structure your answer as: Requirements and Assumptions, Core Algorithm and Data Model, Scaling and Bottlenecks, Failure Modes, and Trade-offs. State complexity bounds and invariants explicitly."
  ],
  "examples": [
   {
    "input": "Architecture and algorithm walkthrough",
    "output": "Data model, complexity bounds, scaling plan, failure analysis",
    "explanation": "Evaluated on algorithmic rigor, quantified capacity reasoning and honest trade-offs. No brain teasers."
   }
  ],
  "constraints": [
   "Quantify load: QPS, data size, memory and p99 latency targets.",
   "Justify each trade-off (consistency vs availability, memory vs disk, push vs pull).",
   "Cover failure domains: node loss, network partition, overload and retries."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Architecture notes, interfaces and complexity bounds\nclass Design:\n    def __init__(self):\n        pass\n",
   "javascript": "// Architecture notes, interfaces and complexity bounds\nclass Design {\n  constructor() {}\n}\n",
   "cpp": "// Architecture notes, interfaces and complexity bounds\nclass Design {\npublic:\n    Design();\n};\n"
  },
  "optimalComplexity": {
   "time": "Stated per component (target p99 latency)",
   "space": "Horizontally partitionable"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l3-s3-r3-q1": {
  "id": "goog-l3-s3-r3-q1",
  "title": "Distributed Snapshot of a Streaming Job",
  "difficulty": "Hard",
  "company": "Google",
  "category": "System Architecture & Algorithms",
  "tags": [
   "Google Round 3",
   "Architecture",
   "Scale",
   "Set 3"
  ],
  "paragraphs": [
   "Google Technical Loop Round 3: System Architecture & Scaled Algorithms.",
   "Design and defend: Distributed Snapshot of a Streaming Job. Focus areas: Marker-based snapshots, checkpoint barriers, recovery.",
   "Structure your answer as: Requirements and Assumptions, Core Algorithm and Data Model, Scaling and Bottlenecks, Failure Modes, and Trade-offs. State complexity bounds and invariants explicitly."
  ],
  "examples": [
   {
    "input": "Architecture and algorithm walkthrough",
    "output": "Data model, complexity bounds, scaling plan, failure analysis",
    "explanation": "Evaluated on algorithmic rigor, quantified capacity reasoning and honest trade-offs. No brain teasers."
   }
  ],
  "constraints": [
   "Quantify load: QPS, data size, memory and p99 latency targets.",
   "Justify each trade-off (consistency vs availability, memory vs disk, push vs pull).",
   "Cover failure domains: node loss, network partition, overload and retries."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Architecture notes, interfaces and complexity bounds\nclass Design:\n    def __init__(self):\n        pass\n",
   "javascript": "// Architecture notes, interfaces and complexity bounds\nclass Design {\n  constructor() {}\n}\n",
   "cpp": "// Architecture notes, interfaces and complexity bounds\nclass Design {\npublic:\n    Design();\n};\n"
  },
  "optimalComplexity": {
   "time": "Stated per component (target p99 latency)",
   "space": "Horizontally partitionable"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l3-s4-r3-q1": {
  "id": "goog-l3-s4-r3-q1",
  "title": "Multi-Stage Token Bucket Rate Limiter",
  "difficulty": "Hard",
  "company": "Google",
  "category": "System Architecture & Algorithms",
  "tags": [
   "Google Round 3",
   "Architecture",
   "Scale",
   "Set 4"
  ],
  "paragraphs": [
   "Google Technical Loop Round 3: System Architecture & Scaled Algorithms.",
   "Design and defend: Multi-Stage Token Bucket Rate Limiter. Focus areas: Per-user and global buckets, atomic updates, clock skew.",
   "Structure your answer as: Requirements and Assumptions, Core Algorithm and Data Model, Scaling and Bottlenecks, Failure Modes, and Trade-offs. State complexity bounds and invariants explicitly."
  ],
  "examples": [
   {
    "input": "Architecture and algorithm walkthrough",
    "output": "Data model, complexity bounds, scaling plan, failure analysis",
    "explanation": "Evaluated on algorithmic rigor, quantified capacity reasoning and honest trade-offs. No brain teasers."
   }
  ],
  "constraints": [
   "Quantify load: QPS, data size, memory and p99 latency targets.",
   "Justify each trade-off (consistency vs availability, memory vs disk, push vs pull).",
   "Cover failure domains: node loss, network partition, overload and retries."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Architecture notes, interfaces and complexity bounds\nclass Design:\n    def __init__(self):\n        pass\n",
   "javascript": "// Architecture notes, interfaces and complexity bounds\nclass Design {\n  constructor() {}\n}\n",
   "cpp": "// Architecture notes, interfaces and complexity bounds\nclass Design {\npublic:\n    Design();\n};\n"
  },
  "optimalComplexity": {
   "time": "Stated per component (target p99 latency)",
   "space": "Horizontally partitionable"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l3-s5-r3-q1": {
  "id": "goog-l3-s5-r3-q1",
  "title": "Autocomplete Serving at Billion-Query Scale",
  "difficulty": "Hard",
  "company": "Google",
  "category": "System Architecture & Algorithms",
  "tags": [
   "Google Round 3",
   "Architecture",
   "Scale",
   "Set 5"
  ],
  "paragraphs": [
   "Google Technical Loop Round 3: System Architecture & Scaled Algorithms.",
   "Design and defend: Autocomplete Serving at Billion-Query Scale. Focus areas: Trie sharding, precomputed top-K, freshness.",
   "Structure your answer as: Requirements and Assumptions, Core Algorithm and Data Model, Scaling and Bottlenecks, Failure Modes, and Trade-offs. State complexity bounds and invariants explicitly."
  ],
  "examples": [
   {
    "input": "Architecture and algorithm walkthrough",
    "output": "Data model, complexity bounds, scaling plan, failure analysis",
    "explanation": "Evaluated on algorithmic rigor, quantified capacity reasoning and honest trade-offs. No brain teasers."
   }
  ],
  "constraints": [
   "Quantify load: QPS, data size, memory and p99 latency targets.",
   "Justify each trade-off (consistency vs availability, memory vs disk, push vs pull).",
   "Cover failure domains: node loss, network partition, overload and retries."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Architecture notes, interfaces and complexity bounds\nclass Design:\n    def __init__(self):\n        pass\n",
   "javascript": "// Architecture notes, interfaces and complexity bounds\nclass Design {\n  constructor() {}\n}\n",
   "cpp": "// Architecture notes, interfaces and complexity bounds\nclass Design {\npublic:\n    Design();\n};\n"
  },
  "optimalComplexity": {
   "time": "Stated per component (target p99 latency)",
   "space": "Horizontally partitionable"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l3-s6-r3-q1": {
  "id": "goog-l3-s6-r3-q1",
  "title": "Disk-Backed K-Way External Merge",
  "difficulty": "Hard",
  "company": "Google",
  "category": "System Architecture & Algorithms",
  "tags": [
   "Google Round 3",
   "Architecture",
   "Scale",
   "Set 6"
  ],
  "paragraphs": [
   "Google Technical Loop Round 3: System Architecture & Scaled Algorithms.",
   "Design and defend: Disk-Backed K-Way External Merge. Focus areas: Run files, loser tree, buffer sizing.",
   "Structure your answer as: Requirements and Assumptions, Core Algorithm and Data Model, Scaling and Bottlenecks, Failure Modes, and Trade-offs. State complexity bounds and invariants explicitly."
  ],
  "examples": [
   {
    "input": "Architecture and algorithm walkthrough",
    "output": "Data model, complexity bounds, scaling plan, failure analysis",
    "explanation": "Evaluated on algorithmic rigor, quantified capacity reasoning and honest trade-offs. No brain teasers."
   }
  ],
  "constraints": [
   "Quantify load: QPS, data size, memory and p99 latency targets.",
   "Justify each trade-off (consistency vs availability, memory vs disk, push vs pull).",
   "Cover failure domains: node loss, network partition, overload and retries."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Architecture notes, interfaces and complexity bounds\nclass Design:\n    def __init__(self):\n        pass\n",
   "javascript": "// Architecture notes, interfaces and complexity bounds\nclass Design {\n  constructor() {}\n}\n",
   "cpp": "// Architecture notes, interfaces and complexity bounds\nclass Design {\npublic:\n    Design();\n};\n"
  },
  "optimalComplexity": {
   "time": "Stated per component (target p99 latency)",
   "space": "Horizontally partitionable"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l3-s7-r3-q1": {
  "id": "goog-l3-s7-r3-q1",
  "title": "Real-Time Deduplication Pipeline",
  "difficulty": "Hard",
  "company": "Google",
  "category": "System Architecture & Algorithms",
  "tags": [
   "Google Round 3",
   "Architecture",
   "Scale",
   "Set 7"
  ],
  "paragraphs": [
   "Google Technical Loop Round 3: System Architecture & Scaled Algorithms.",
   "Design and defend: Real-Time Deduplication Pipeline. Focus areas: Idempotency keys, windowed state, exactly-once effects.",
   "Structure your answer as: Requirements and Assumptions, Core Algorithm and Data Model, Scaling and Bottlenecks, Failure Modes, and Trade-offs. State complexity bounds and invariants explicitly."
  ],
  "examples": [
   {
    "input": "Architecture and algorithm walkthrough",
    "output": "Data model, complexity bounds, scaling plan, failure analysis",
    "explanation": "Evaluated on algorithmic rigor, quantified capacity reasoning and honest trade-offs. No brain teasers."
   }
  ],
  "constraints": [
   "Quantify load: QPS, data size, memory and p99 latency targets.",
   "Justify each trade-off (consistency vs availability, memory vs disk, push vs pull).",
   "Cover failure domains: node loss, network partition, overload and retries."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Architecture notes, interfaces and complexity bounds\nclass Design:\n    def __init__(self):\n        pass\n",
   "javascript": "// Architecture notes, interfaces and complexity bounds\nclass Design {\n  constructor() {}\n}\n",
   "cpp": "// Architecture notes, interfaces and complexity bounds\nclass Design {\npublic:\n    Design();\n};\n"
  },
  "optimalComplexity": {
   "time": "Stated per component (target p99 latency)",
   "space": "Horizontally partitionable"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l3-s8-r3-q1": {
  "id": "goog-l3-s8-r3-q1",
  "title": "Task Scheduler With Backpressure",
  "difficulty": "Hard",
  "company": "Google",
  "category": "System Architecture & Algorithms",
  "tags": [
   "Google Round 3",
   "Architecture",
   "Scale",
   "Set 8"
  ],
  "paragraphs": [
   "Google Technical Loop Round 3: System Architecture & Scaled Algorithms.",
   "Design and defend: Task Scheduler With Backpressure. Focus areas: Queues, leases, retry budgets, load shedding.",
   "Structure your answer as: Requirements and Assumptions, Core Algorithm and Data Model, Scaling and Bottlenecks, Failure Modes, and Trade-offs. State complexity bounds and invariants explicitly."
  ],
  "examples": [
   {
    "input": "Architecture and algorithm walkthrough",
    "output": "Data model, complexity bounds, scaling plan, failure analysis",
    "explanation": "Evaluated on algorithmic rigor, quantified capacity reasoning and honest trade-offs. No brain teasers."
   }
  ],
  "constraints": [
   "Quantify load: QPS, data size, memory and p99 latency targets.",
   "Justify each trade-off (consistency vs availability, memory vs disk, push vs pull).",
   "Cover failure domains: node loss, network partition, overload and retries."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Architecture notes, interfaces and complexity bounds\nclass Design:\n    def __init__(self):\n        pass\n",
   "javascript": "// Architecture notes, interfaces and complexity bounds\nclass Design {\n  constructor() {}\n}\n",
   "cpp": "// Architecture notes, interfaces and complexity bounds\nclass Design {\npublic:\n    Design();\n};\n"
  },
  "optimalComplexity": {
   "time": "Stated per component (target p99 latency)",
   "space": "Horizontally partitionable"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l3-s9-r3-q1": {
  "id": "goog-l3-s9-r3-q1",
  "title": "Geo-Sharded Nearby Search",
  "difficulty": "Hard",
  "company": "Google",
  "category": "System Architecture & Algorithms",
  "tags": [
   "Google Round 3",
   "Architecture",
   "Scale",
   "Set 9"
  ],
  "paragraphs": [
   "Google Technical Loop Round 3: System Architecture & Scaled Algorithms.",
   "Design and defend: Geo-Sharded Nearby Search. Focus areas: Geohash vs quadtree, boundary cases, index updates.",
   "Structure your answer as: Requirements and Assumptions, Core Algorithm and Data Model, Scaling and Bottlenecks, Failure Modes, and Trade-offs. State complexity bounds and invariants explicitly."
  ],
  "examples": [
   {
    "input": "Architecture and algorithm walkthrough",
    "output": "Data model, complexity bounds, scaling plan, failure analysis",
    "explanation": "Evaluated on algorithmic rigor, quantified capacity reasoning and honest trade-offs. No brain teasers."
   }
  ],
  "constraints": [
   "Quantify load: QPS, data size, memory and p99 latency targets.",
   "Justify each trade-off (consistency vs availability, memory vs disk, push vs pull).",
   "Cover failure domains: node loss, network partition, overload and retries."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Architecture notes, interfaces and complexity bounds\nclass Design:\n    def __init__(self):\n        pass\n",
   "javascript": "// Architecture notes, interfaces and complexity bounds\nclass Design {\n  constructor() {}\n}\n",
   "cpp": "// Architecture notes, interfaces and complexity bounds\nclass Design {\npublic:\n    Design();\n};\n"
  },
  "optimalComplexity": {
   "time": "Stated per component (target p99 latency)",
   "space": "Horizontally partitionable"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l3-s10-r3-q1": {
  "id": "goog-l3-s10-r3-q1",
  "title": "Collaborative Document Edit Merging",
  "difficulty": "Hard",
  "company": "Google",
  "category": "System Architecture & Algorithms",
  "tags": [
   "Google Round 3",
   "Architecture",
   "Scale",
   "Set 10"
  ],
  "paragraphs": [
   "Google Technical Loop Round 3: System Architecture & Scaled Algorithms.",
   "Design and defend: Collaborative Document Edit Merging. Focus areas: OT vs CRDT, ordering, conflict semantics.",
   "Structure your answer as: Requirements and Assumptions, Core Algorithm and Data Model, Scaling and Bottlenecks, Failure Modes, and Trade-offs. State complexity bounds and invariants explicitly."
  ],
  "examples": [
   {
    "input": "Architecture and algorithm walkthrough",
    "output": "Data model, complexity bounds, scaling plan, failure analysis",
    "explanation": "Evaluated on algorithmic rigor, quantified capacity reasoning and honest trade-offs. No brain teasers."
   }
  ],
  "constraints": [
   "Quantify load: QPS, data size, memory and p99 latency targets.",
   "Justify each trade-off (consistency vs availability, memory vs disk, push vs pull).",
   "Cover failure domains: node loss, network partition, overload and retries."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Architecture notes, interfaces and complexity bounds\nclass Design:\n    def __init__(self):\n        pass\n",
   "javascript": "// Architecture notes, interfaces and complexity bounds\nclass Design {\n  constructor() {}\n}\n",
   "cpp": "// Architecture notes, interfaces and complexity bounds\nclass Design {\npublic:\n    Design();\n};\n"
  },
  "optimalComplexity": {
   "time": "Stated per component (target p99 latency)",
   "space": "Horizontally partitionable"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l3-s1-r4-q1": {
  "id": "goog-l3-s1-r4-q1",
  "title": "Resolving a Cross-Team Architecture Deadlock",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Googleyness & Leadership",
  "tags": [
   "Googleyness",
   "Leadership",
   "Thriving in Ambiguity / Intellectual Humility",
   "Set 1"
  ],
  "paragraphs": [
   "Google Googleyness & Leadership evaluation. Core pillars: Thriving in Ambiguity, Intellectual Humility, Bias to Action, Doing the Right Thing.",
   "Scenario: You are an engineer who owns this workstream day to day and the team relies on your judgment. Two partner teams each insist on a different design for a shared pipeline interface. Neither will compromise and the launch review is two weeks away.",
   "Explain how you would handle it, what you would do first, how you would decide with incomplete information, and what you would do if you turned out to be wrong."
  ],
  "examples": [
   {
    "input": "Core Evaluation Pillars",
    "output": "Thriving in Ambiguity | Intellectual Humility | Bias to Action | Doing the Right Thing",
    "explanation": "Use concrete personal actions ('I'), show how you weighed evidence, and name the trade-offs honestly."
   }
  ],
  "constraints": [
   "Be specific about your own actions, not just the team's.",
   "Show intellectual humility and a willingness to change your mind.",
   "Describe how you would measure success and reduce team friction."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Googleyness & Leadership\n// Pillar focus: Thriving in Ambiguity / Intellectual Humility\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "javascript": "// Round 4: Googleyness & Leadership\n// Pillar focus: Thriving in Ambiguity / Intellectual Humility\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "python": "# Round 4: Googleyness & Leadership\n# Pillar focus: Thriving in Ambiguity / Intellectual Humility\n# Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "cpp": "// Round 4: Googleyness & Leadership\n// Pillar focus: Thriving in Ambiguity / Intellectual Humility\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n"
  },
  "optimalComplexity": {
   "time": "N/A (Googleyness evaluation)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l3-s2-r4-q1": {
  "id": "goog-l3-s2-r4-q1",
  "title": "Telemetry Value vs User Privacy",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Googleyness & Leadership",
  "tags": [
   "Googleyness",
   "Leadership",
   "Doing the Right Thing",
   "Set 2"
  ],
  "paragraphs": [
   "Google Googleyness & Leadership evaluation. Core pillars: Thriving in Ambiguity, Intellectual Humility, Bias to Action, Doing the Right Thing.",
   "Scenario: You are an engineer who owns this workstream day to day and the team relies on your judgment. A dashboard feature would be far more useful if per-user events were kept longer than the documented retention policy. Product wants to ship it.",
   "Explain how you would handle it, what you would do first, how you would decide with incomplete information, and what you would do if you turned out to be wrong."
  ],
  "examples": [
   {
    "input": "Core Evaluation Pillars",
    "output": "Thriving in Ambiguity | Intellectual Humility | Bias to Action | Doing the Right Thing",
    "explanation": "Use concrete personal actions ('I'), show how you weighed evidence, and name the trade-offs honestly."
   }
  ],
  "constraints": [
   "Be specific about your own actions, not just the team's.",
   "Show intellectual humility and a willingness to change your mind.",
   "Describe how you would measure success and reduce team friction."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Googleyness & Leadership\n// Pillar focus: Doing the Right Thing\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "javascript": "// Round 4: Googleyness & Leadership\n// Pillar focus: Doing the Right Thing\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "python": "# Round 4: Googleyness & Leadership\n# Pillar focus: Doing the Right Thing\n# Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "cpp": "// Round 4: Googleyness & Leadership\n// Pillar focus: Doing the Right Thing\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n"
  },
  "optimalComplexity": {
   "time": "N/A (Googleyness evaluation)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l3-s3-r4-q1": {
  "id": "goog-l3-s3-r4-q1",
  "title": "Dependency Failure Before the Quarterly Freeze",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Googleyness & Leadership",
  "tags": [
   "Googleyness",
   "Leadership",
   "Bias to Action",
   "Set 3"
  ],
  "paragraphs": [
   "Google Googleyness & Leadership evaluation. Core pillars: Thriving in Ambiguity, Intellectual Humility, Bias to Action, Doing the Right Thing.",
   "Scenario: You are an engineer who owns this workstream day to day and the team relies on your judgment. A multi-tenant dependency owned by another team starts failing intermittently three days before the code freeze, and its owners are unreachable.",
   "Explain how you would handle it, what you would do first, how you would decide with incomplete information, and what you would do if you turned out to be wrong."
  ],
  "examples": [
   {
    "input": "Core Evaluation Pillars",
    "output": "Thriving in Ambiguity | Intellectual Humility | Bias to Action | Doing the Right Thing",
    "explanation": "Use concrete personal actions ('I'), show how you weighed evidence, and name the trade-offs honestly."
   }
  ],
  "constraints": [
   "Be specific about your own actions, not just the team's.",
   "Show intellectual humility and a willingness to change your mind.",
   "Describe how you would measure success and reduce team friction."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Googleyness & Leadership\n// Pillar focus: Bias to Action\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "javascript": "// Round 4: Googleyness & Leadership\n// Pillar focus: Bias to Action\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "python": "# Round 4: Googleyness & Leadership\n# Pillar focus: Bias to Action\n# Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "cpp": "// Round 4: Googleyness & Leadership\n// Pillar focus: Bias to Action\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n"
  },
  "optimalComplexity": {
   "time": "N/A (Googleyness evaluation)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l3-s4-r4-q1": {
  "id": "goog-l3-s4-r4-q1",
  "title": "10x Velocity vs Zero-Downtime Reliability",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Googleyness & Leadership",
  "tags": [
   "Googleyness",
   "Leadership",
   "Bias to Action / Doing the Right Thing",
   "Set 4"
  ],
  "paragraphs": [
   "Google Googleyness & Leadership evaluation. Core pillars: Thriving in Ambiguity, Intellectual Humility, Bias to Action, Doing the Right Thing.",
   "Scenario: You are an engineer who owns this workstream day to day and the team relies on your judgment. Leadership wants to double shipping velocity, but the faster cadence is steadily burning your service's error budget.",
   "Explain how you would handle it, what you would do first, how you would decide with incomplete information, and what you would do if you turned out to be wrong."
  ],
  "examples": [
   {
    "input": "Core Evaluation Pillars",
    "output": "Thriving in Ambiguity | Intellectual Humility | Bias to Action | Doing the Right Thing",
    "explanation": "Use concrete personal actions ('I'), show how you weighed evidence, and name the trade-offs honestly."
   }
  ],
  "constraints": [
   "Be specific about your own actions, not just the team's.",
   "Show intellectual humility and a willingness to change your mind.",
   "Describe how you would measure success and reduce team friction."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Googleyness & Leadership\n// Pillar focus: Bias to Action / Doing the Right Thing\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "javascript": "// Round 4: Googleyness & Leadership\n// Pillar focus: Bias to Action / Doing the Right Thing\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "python": "# Round 4: Googleyness & Leadership\n# Pillar focus: Bias to Action / Doing the Right Thing\n# Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "cpp": "// Round 4: Googleyness & Leadership\n// Pillar focus: Bias to Action / Doing the Right Thing\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n"
  },
  "optimalComplexity": {
   "time": "N/A (Googleyness evaluation)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l3-s5-r4-q1": {
  "id": "goog-l3-s5-r4-q1",
  "title": "Being Proven Wrong in a Design Review",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Googleyness & Leadership",
  "tags": [
   "Googleyness",
   "Leadership",
   "Intellectual Humility",
   "Set 5"
  ],
  "paragraphs": [
   "Google Googleyness & Leadership evaluation. Core pillars: Thriving in Ambiguity, Intellectual Humility, Bias to Action, Doing the Right Thing.",
   "Scenario: You are an engineer who owns this workstream day to day and the team relies on your judgment. After you present a design, a colleague shows data suggesting your core assumption is wrong, in front of senior stakeholders.",
   "Explain how you would handle it, what you would do first, how you would decide with incomplete information, and what you would do if you turned out to be wrong."
  ],
  "examples": [
   {
    "input": "Core Evaluation Pillars",
    "output": "Thriving in Ambiguity | Intellectual Humility | Bias to Action | Doing the Right Thing",
    "explanation": "Use concrete personal actions ('I'), show how you weighed evidence, and name the trade-offs honestly."
   }
  ],
  "constraints": [
   "Be specific about your own actions, not just the team's.",
   "Show intellectual humility and a willingness to change your mind.",
   "Describe how you would measure success and reduce team friction."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Googleyness & Leadership\n// Pillar focus: Intellectual Humility\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "javascript": "// Round 4: Googleyness & Leadership\n// Pillar focus: Intellectual Humility\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "python": "# Round 4: Googleyness & Leadership\n# Pillar focus: Intellectual Humility\n# Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "cpp": "// Round 4: Googleyness & Leadership\n// Pillar focus: Intellectual Humility\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n"
  },
  "optimalComplexity": {
   "time": "N/A (Googleyness evaluation)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l3-s6-r4-q1": {
  "id": "goog-l3-s6-r4-q1",
  "title": "A Vague Mandate With No Spec",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Googleyness & Leadership",
  "tags": [
   "Googleyness",
   "Leadership",
   "Thriving in Ambiguity",
   "Set 6"
  ],
  "paragraphs": [
   "Google Googleyness & Leadership evaluation. Core pillars: Thriving in Ambiguity, Intellectual Humility, Bias to Action, Doing the Right Thing.",
   "Scenario: You are an engineer who owns this workstream day to day and the team relies on your judgment. You are handed the one-line goal 'make onboarding faster' with no metrics, no owner and no specification.",
   "Explain how you would handle it, what you would do first, how you would decide with incomplete information, and what you would do if you turned out to be wrong."
  ],
  "examples": [
   {
    "input": "Core Evaluation Pillars",
    "output": "Thriving in Ambiguity | Intellectual Humility | Bias to Action | Doing the Right Thing",
    "explanation": "Use concrete personal actions ('I'), show how you weighed evidence, and name the trade-offs honestly."
   }
  ],
  "constraints": [
   "Be specific about your own actions, not just the team's.",
   "Show intellectual humility and a willingness to change your mind.",
   "Describe how you would measure success and reduce team friction."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Googleyness & Leadership\n// Pillar focus: Thriving in Ambiguity\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "javascript": "// Round 4: Googleyness & Leadership\n// Pillar focus: Thriving in Ambiguity\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "python": "# Round 4: Googleyness & Leadership\n# Pillar focus: Thriving in Ambiguity\n# Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "cpp": "// Round 4: Googleyness & Leadership\n// Pillar focus: Thriving in Ambiguity\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n"
  },
  "optimalComplexity": {
   "time": "N/A (Googleyness evaluation)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l3-s7-r4-q1": {
  "id": "goog-l3-s7-r4-q1",
  "title": "A Silent Data Inconsistency You Inherited",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Googleyness & Leadership",
  "tags": [
   "Googleyness",
   "Leadership",
   "Ownership / Doing the Right Thing",
   "Set 7"
  ],
  "paragraphs": [
   "Google Googleyness & Leadership evaluation. Core pillars: Thriving in Ambiguity, Intellectual Humility, Bias to Action, Doing the Right Thing.",
   "Scenario: You are an engineer who owns this workstream day to day and the team relies on your judgment. You discover a long-standing silent data inconsistency in a system you just inherited. Fixing it will expose past errors to customers.",
   "Explain how you would handle it, what you would do first, how you would decide with incomplete information, and what you would do if you turned out to be wrong."
  ],
  "examples": [
   {
    "input": "Core Evaluation Pillars",
    "output": "Thriving in Ambiguity | Intellectual Humility | Bias to Action | Doing the Right Thing",
    "explanation": "Use concrete personal actions ('I'), show how you weighed evidence, and name the trade-offs honestly."
   }
  ],
  "constraints": [
   "Be specific about your own actions, not just the team's.",
   "Show intellectual humility and a willingness to change your mind.",
   "Describe how you would measure success and reduce team friction."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Googleyness & Leadership\n// Pillar focus: Ownership / Doing the Right Thing\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "javascript": "// Round 4: Googleyness & Leadership\n// Pillar focus: Ownership / Doing the Right Thing\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "python": "# Round 4: Googleyness & Leadership\n# Pillar focus: Ownership / Doing the Right Thing\n# Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "cpp": "// Round 4: Googleyness & Leadership\n// Pillar focus: Ownership / Doing the Right Thing\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n"
  },
  "optimalComplexity": {
   "time": "N/A (Googleyness evaluation)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l3-s8-r4-q1": {
  "id": "goog-l3-s8-r4-q1",
  "title": "A Blocked Teammate Who Has Not Asked for Help",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Googleyness & Leadership",
  "tags": [
   "Googleyness",
   "Leadership",
   "Collaboration / Bias to Action",
   "Set 8"
  ],
  "paragraphs": [
   "Google Googleyness & Leadership evaluation. Core pillars: Thriving in Ambiguity, Intellectual Humility, Bias to Action, Doing the Right Thing.",
   "Scenario: You are an engineer who owns this workstream day to day and the team relies on your judgment. A teammate's module is behind schedule and blocking others, and they have not raised the problem or asked for help.",
   "Explain how you would handle it, what you would do first, how you would decide with incomplete information, and what you would do if you turned out to be wrong."
  ],
  "examples": [
   {
    "input": "Core Evaluation Pillars",
    "output": "Thriving in Ambiguity | Intellectual Humility | Bias to Action | Doing the Right Thing",
    "explanation": "Use concrete personal actions ('I'), show how you weighed evidence, and name the trade-offs honestly."
   }
  ],
  "constraints": [
   "Be specific about your own actions, not just the team's.",
   "Show intellectual humility and a willingness to change your mind.",
   "Describe how you would measure success and reduce team friction."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Googleyness & Leadership\n// Pillar focus: Collaboration / Bias to Action\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "javascript": "// Round 4: Googleyness & Leadership\n// Pillar focus: Collaboration / Bias to Action\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "python": "# Round 4: Googleyness & Leadership\n# Pillar focus: Collaboration / Bias to Action\n# Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "cpp": "// Round 4: Googleyness & Leadership\n// Pillar focus: Collaboration / Bias to Action\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n"
  },
  "optimalComplexity": {
   "time": "N/A (Googleyness evaluation)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l3-s9-r4-q1": {
  "id": "goog-l3-s9-r4-q1",
  "title": "A Deadline Shortcut With Misleading Numbers",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Googleyness & Leadership",
  "tags": [
   "Googleyness",
   "Leadership",
   "Doing the Right Thing",
   "Set 9"
  ],
  "paragraphs": [
   "Google Googleyness & Leadership evaluation. Core pillars: Thriving in Ambiguity, Intellectual Humility, Bias to Action, Doing the Right Thing.",
   "Scenario: You are an engineer who owns this workstream day to day and the team relies on your judgment. A deadline-driven shortcut would ship a feature whose customer-visible numbers are misleading. Everyone is exhausted and the date is fixed.",
   "Explain how you would handle it, what you would do first, how you would decide with incomplete information, and what you would do if you turned out to be wrong."
  ],
  "examples": [
   {
    "input": "Core Evaluation Pillars",
    "output": "Thriving in Ambiguity | Intellectual Humility | Bias to Action | Doing the Right Thing",
    "explanation": "Use concrete personal actions ('I'), show how you weighed evidence, and name the trade-offs honestly."
   }
  ],
  "constraints": [
   "Be specific about your own actions, not just the team's.",
   "Show intellectual humility and a willingness to change your mind.",
   "Describe how you would measure success and reduce team friction."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Googleyness & Leadership\n// Pillar focus: Doing the Right Thing\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "javascript": "// Round 4: Googleyness & Leadership\n// Pillar focus: Doing the Right Thing\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "python": "# Round 4: Googleyness & Leadership\n# Pillar focus: Doing the Right Thing\n# Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "cpp": "// Round 4: Googleyness & Leadership\n// Pillar focus: Doing the Right Thing\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n"
  },
  "optimalComplexity": {
   "time": "N/A (Googleyness evaluation)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l3-s10-r4-q1": {
  "id": "goog-l3-s10-r4-q1",
  "title": "Disagreeing With a Senior Decision",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Googleyness & Leadership",
  "tags": [
   "Googleyness",
   "Leadership",
   "Intellectual Humility / Courage",
   "Set 10"
  ],
  "paragraphs": [
   "Google Googleyness & Leadership evaluation. Core pillars: Thriving in Ambiguity, Intellectual Humility, Bias to Action, Doing the Right Thing.",
   "Scenario: You are an engineer who owns this workstream day to day and the team relies on your judgment. A director picks a technical direction you believe is wrong for users, and the decision has already been announced.",
   "Explain how you would handle it, what you would do first, how you would decide with incomplete information, and what you would do if you turned out to be wrong."
  ],
  "examples": [
   {
    "input": "Core Evaluation Pillars",
    "output": "Thriving in Ambiguity | Intellectual Humility | Bias to Action | Doing the Right Thing",
    "explanation": "Use concrete personal actions ('I'), show how you weighed evidence, and name the trade-offs honestly."
   }
  ],
  "constraints": [
   "Be specific about your own actions, not just the team's.",
   "Show intellectual humility and a willingness to change your mind.",
   "Describe how you would measure success and reduce team friction."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Googleyness & Leadership\n// Pillar focus: Intellectual Humility / Courage\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "javascript": "// Round 4: Googleyness & Leadership\n// Pillar focus: Intellectual Humility / Courage\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "python": "# Round 4: Googleyness & Leadership\n# Pillar focus: Intellectual Humility / Courage\n# Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "cpp": "// Round 4: Googleyness & Leadership\n// Pillar focus: Intellectual Humility / Courage\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n"
  },
  "optimalComplexity": {
   "time": "N/A (Googleyness evaluation)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l4-s1-r1-q1": {
  "id": "goog-l4-s1-r1-q1",
  "title": "Sliding Window Rate Limiter",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Queue / Rate Limiting",
  "tags": [
   "Google Round 1",
   "Queue",
   "Rate Limiting",
   "Simulation",
   "Set 1"
  ],
  "paragraphs": [
   "Requests arrive at non-decreasing timestamps. A request is allowed if fewer than limit requests were allowed in the half-open window (t - window, t]. Return an allow/deny flag for each request."
  ],
  "examples": [
   {
    "input": "timestamps = [1,1,2,3,11], limit = 2, window = 10",
    "output": "[true,true,false,false,true]"
   },
   {
    "input": "timestamps = [1,2,3], limit = 1, window = 1",
    "output": "[true,true,true]"
   }
  ],
  "constraints": [
   "Target O(N) time and O(L) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l4-s1-r1-q1-v1",
    "input": "[1,1,2,3,11]\n2\n10",
    "expectedOutput": "[true,true,false,false,true]"
   },
   {
    "id": "goog-l4-s1-r1-q1-v2",
    "input": "[1,2,3]\n1\n1",
    "expectedOutput": "[true,true,true]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l4-s1-r1-q1-h1",
    "input": "[0,0,0,0]\n3\n5",
    "expectedOutput": "[true,true,true,false]"
   },
   {
    "id": "goog-l4-s1-r1-q1-h2",
    "input": "[5,6,7,16,17]\n2\n10",
    "expectedOutput": "[true,true,false,true,true]"
   },
   {
    "id": "goog-l4-s1-r1-q1-h3",
    "input": "[]\n1\n1",
    "expectedOutput": "[]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} timestamps\n * @param {number} limit\n * @param {number} window\n * @return {boolean[]}\n */\nfunction rateLimit(timestamps, limit, window) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def rateLimit(self, timestamps: List[int], limit: int, window: int) -> List[bool]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<bool> rateLimit(vector<int>& timestamps, int limit, int window) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(L)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "goog-l4-s1-r1-q2"
 },
 "goog-l4-s1-r1-q2": {
  "id": "goog-l4-s1-r1-q2",
  "title": "Merge Sorted Log Streams",
  "difficulty": "Hard",
  "company": "Google",
  "category": "Heap / Streaming",
  "tags": [
   "Google Round 1",
   "Heap",
   "K-way Merge",
   "Streaming",
   "Set 1"
  ],
  "paragraphs": [
   "Merge k individually sorted event streams into one sorted output using a size-k heap, as a log aggregator would."
  ],
  "examples": [
   {
    "input": "streams = [[1,4,7],[2,5],[3,6,9]]",
    "output": "[1,2,3,4,5,6,7,9]"
   },
   {
    "input": "streams = [[],[1],[]]",
    "output": "[1]"
   }
  ],
  "constraints": [
   "Target O(N log K) time and O(K) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l4-s1-r1-q2-v1",
    "input": "[[1,4,7],[2,5],[3,6,9]]",
    "expectedOutput": "[1,2,3,4,5,6,7,9]"
   },
   {
    "id": "goog-l4-s1-r1-q2-v2",
    "input": "[[],[1],[]]",
    "expectedOutput": "[1]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l4-s1-r1-q2-h1",
    "input": "[[5,6],[1,2,3]]",
    "expectedOutput": "[1,2,3,5,6]"
   },
   {
    "id": "goog-l4-s1-r1-q2-h2",
    "input": "[[1,1],[1,1]]",
    "expectedOutput": "[1,1,1,1]"
   },
   {
    "id": "goog-l4-s1-r1-q2-h3",
    "input": "[[10],[9],[8],[7]]",
    "expectedOutput": "[7,8,9,10]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[][]} streams\n * @return {number[]}\n */\nfunction mergeStreams(streams) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def mergeStreams(self, streams: List[List[int]]) -> List[int]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<int> mergeStreams(vector<vector<int>>& streams) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N log K)",
   "space": "O(K)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "goog-l4-s2-r1-q1": {
  "id": "goog-l4-s2-r1-q1",
  "title": "LRU Cache Hit Counter",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Cache Eviction",
  "tags": [
   "Google Round 1",
   "Hash Table",
   "Linked List",
   "LRU",
   "Set 2"
  ],
  "paragraphs": [
   "Simulate an LRU cache of the given capacity over a sequence of key accesses. A miss inserts the key, evicting the least recently used key if full. Return the number of hits."
  ],
  "examples": [
   {
    "input": "capacity = 2, accesses = [1,2,1,3,2,1]",
    "output": "1"
   },
   {
    "input": "capacity = 1, accesses = [1,1,2,2]",
    "output": "2"
   }
  ],
  "constraints": [
   "Target O(N) time and O(C) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l4-s2-r1-q1-v1",
    "input": "2\n[1,2,1,3,2,1]",
    "expectedOutput": "1"
   },
   {
    "id": "goog-l4-s2-r1-q1-v2",
    "input": "1\n[1,1,2,2]",
    "expectedOutput": "2"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l4-s2-r1-q1-h1",
    "input": "3\n[1,2,3,4,1,2,5]",
    "expectedOutput": "0"
   },
   {
    "id": "goog-l4-s2-r1-q1-h2",
    "input": "2\n[]",
    "expectedOutput": "0"
   },
   {
    "id": "goog-l4-s2-r1-q1-h3",
    "input": "3\n[7,7,7]",
    "expectedOutput": "2"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number} capacity\n * @param {number[]} accesses\n * @return {number}\n */\nfunction lruHits(capacity, accesses) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def lruHits(self, capacity: int, accesses: List[int]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int lruHits(int capacity, vector<int>& accesses) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(C)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "goog-l4-s2-r1-q2"
 },
 "goog-l4-s2-r1-q2": {
  "id": "goog-l4-s2-r1-q2",
  "title": "Optimal Ad Campaign Schedule",
  "difficulty": "Hard",
  "company": "Google",
  "category": "DP / Binary Search",
  "tags": [
   "Google Round 1",
   "DP",
   "Binary Search",
   "Scheduling",
   "Set 2"
  ],
  "paragraphs": [
   "Each campaign is [start, end, profit]. Accept any non-overlapping subset (a campaign may start exactly when another ends). Return the maximum total profit."
  ],
  "examples": [
   {
    "input": "campaigns = [[1,3,50],[2,4,10],[3,5,40],[3,6,70]]",
    "output": "120"
   },
   {
    "input": "campaigns = [[1,2,50],[3,5,20],[6,19,100],[2,100,200]]",
    "output": "250"
   }
  ],
  "constraints": [
   "Target O(N log N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l4-s2-r1-q2-v1",
    "input": "[[1,3,50],[2,4,10],[3,5,40],[3,6,70]]",
    "expectedOutput": "120"
   },
   {
    "id": "goog-l4-s2-r1-q2-v2",
    "input": "[[1,2,50],[3,5,20],[6,19,100],[2,100,200]]",
    "expectedOutput": "250"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l4-s2-r1-q2-h1",
    "input": "[[1,5,10]]",
    "expectedOutput": "10"
   },
   {
    "id": "goog-l4-s2-r1-q2-h2",
    "input": "[[1,3,5],[1,3,6],[1,3,4]]",
    "expectedOutput": "6"
   },
   {
    "id": "goog-l4-s2-r1-q2-h3",
    "input": "[[1,2,3],[2,3,4],[3,4,5]]",
    "expectedOutput": "12"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[][]} campaigns\n * @return {number}\n */\nfunction maxProfit(campaigns) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def maxProfit(self, campaigns: List[List[int]]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int maxProfit(vector<vector<int>>& campaigns) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N log N)",
   "space": "O(N)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "goog-l4-s3-r1-q1": {
  "id": "goog-l4-s3-r1-q1",
  "title": "LFU Cache Hit Counter",
  "difficulty": "Hard",
  "company": "Google",
  "category": "Cache Eviction",
  "tags": [
   "Google Round 1",
   "Hash Table",
   "LFU",
   "Design",
   "Set 3"
  ],
  "paragraphs": [
   "Simulate an LFU cache. On a miss with a full cache, evict the least frequently used key, breaking ties by least recently used. Return the number of hits."
  ],
  "examples": [
   {
    "input": "capacity = 2, accesses = [1,2,1,3,1,2]",
    "output": "2"
   },
   {
    "input": "capacity = 1, accesses = [1,1,2,1]",
    "output": "1"
   }
  ],
  "constraints": [
   "Target O(N) time and O(C) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l4-s3-r1-q1-v1",
    "input": "2\n[1,2,1,3,1,2]",
    "expectedOutput": "2"
   },
   {
    "id": "goog-l4-s3-r1-q1-v2",
    "input": "1\n[1,1,2,1]",
    "expectedOutput": "1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l4-s3-r1-q1-h1",
    "input": "0\n[1,2]",
    "expectedOutput": "0"
   },
   {
    "id": "goog-l4-s3-r1-q1-h2",
    "input": "2\n[1,2,3,1,2,3]",
    "expectedOutput": "0"
   },
   {
    "id": "goog-l4-s3-r1-q1-h3",
    "input": "3\n[1,1,2,2,3,4,1,2]",
    "expectedOutput": "4"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number} capacity\n * @param {number[]} accesses\n * @return {number}\n */\nfunction lfuHits(capacity, accesses) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def lfuHits(self, capacity: int, accesses: List[int]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int lfuHits(int capacity, vector<int>& accesses) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(C)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "goog-l4-s3-r1-q2"
 },
 "goog-l4-s3-r1-q2": {
  "id": "goog-l4-s3-r1-q2",
  "title": "Smallest Range Across Shards",
  "difficulty": "Hard",
  "company": "Google",
  "category": "Heap / Sliding Window",
  "tags": [
   "Google Round 1",
   "Heap",
   "K Lists",
   "Set 3"
  ],
  "paragraphs": [
   "Given k sorted lists, return the smallest range [a, b] that includes at least one number from every list. Ties prefer the smaller a."
  ],
  "examples": [
   {
    "input": "nums = [[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]",
    "output": "[20,24]"
   },
   {
    "input": "nums = [[1,2,3],[1,2,3],[1,2,3]]",
    "output": "[1,1]"
   }
  ],
  "constraints": [
   "Target O(N log K) time and O(K) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l4-s3-r1-q2-v1",
    "input": "[[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]",
    "expectedOutput": "[20,24]"
   },
   {
    "id": "goog-l4-s3-r1-q2-v2",
    "input": "[[1,2,3],[1,2,3],[1,2,3]]",
    "expectedOutput": "[1,1]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l4-s3-r1-q2-h1",
    "input": "[[1],[2]]",
    "expectedOutput": "[1,2]"
   },
   {
    "id": "goog-l4-s3-r1-q2-h2",
    "input": "[[1,5],[3,7]]",
    "expectedOutput": "[1,3]"
   },
   {
    "id": "goog-l4-s3-r1-q2-h3",
    "input": "[[10,10],[11,11]]",
    "expectedOutput": "[10,11]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[][]} nums\n * @return {number[]}\n */\nfunction smallestRange(nums) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def smallestRange(self, nums: List[List[int]]) -> List[int]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<int> smallestRange(vector<vector<int>>& nums) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N log K)",
   "space": "O(K)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "goog-l4-s4-r1-q1": {
  "id": "goog-l4-s4-r1-q1",
  "title": "Token Bucket Admission",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Rate Limiting",
  "tags": [
   "Google Round 1",
   "Rate Limiting",
   "Simulation",
   "Set 4"
  ],
  "paragraphs": [
   "A bucket holds up to capacity tokens and starts full. It refills refill tokens per second (capped). Each request [time, tokens] is admitted only if enough tokens exist, which are then consumed. Return admit flags."
  ],
  "examples": [
   {
    "input": "capacity = 5, refill = 1, requests = [[0,3],[1,3],[2,3],[10,5]]",
    "output": "[true,true,false,true]"
   },
   {
    "input": "capacity = 2, refill = 2, requests = [[0,2],[0,1],[1,2]]",
    "output": "[true,false,true]"
   }
  ],
  "constraints": [
   "Target O(N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l4-s4-r1-q1-v1",
    "input": "5\n1\n[[0,3],[1,3],[2,3],[10,5]]",
    "expectedOutput": "[true,true,false,true]"
   },
   {
    "id": "goog-l4-s4-r1-q1-v2",
    "input": "2\n2\n[[0,2],[0,1],[1,2]]",
    "expectedOutput": "[true,false,true]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l4-s4-r1-q1-h1",
    "input": "1\n0\n[[0,1],[5,1]]",
    "expectedOutput": "[true,false]"
   },
   {
    "id": "goog-l4-s4-r1-q1-h2",
    "input": "10\n5\n[[1,10],[2,5],[3,6]]",
    "expectedOutput": "[true,true,false]"
   },
   {
    "id": "goog-l4-s4-r1-q1-h3",
    "input": "3\n1\n[]",
    "expectedOutput": "[]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number} capacity\n * @param {number} refill\n * @param {number[][]} requests\n * @return {boolean[]}\n */\nfunction tokenBucket(capacity, refill, requests) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def tokenBucket(self, capacity: int, refill: int, requests: List[List[int]]) -> List[bool]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<bool> tokenBucket(int capacity, int refill, vector<vector<int>>& requests) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "goog-l4-s4-r1-q2"
 },
 "goog-l4-s4-r1-q2": {
  "id": "goog-l4-s4-r1-q2",
  "title": "Longest Stable Metric Window",
  "difficulty": "Hard",
  "company": "Google",
  "category": "Monotonic Deques",
  "tags": [
   "Google Round 1",
   "Deque",
   "Sliding Window",
   "Set 4"
  ],
  "paragraphs": [
   "Return the length of the longest contiguous subarray in which the absolute difference between any two elements is at most limit."
  ],
  "examples": [
   {
    "input": "nums = [8,2,4,7], limit = 4",
    "output": "2"
   },
   {
    "input": "nums = [10,1,2,4,7,2], limit = 5",
    "output": "4"
   }
  ],
  "constraints": [
   "Target O(N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l4-s4-r1-q2-v1",
    "input": "[8,2,4,7]\n4",
    "expectedOutput": "2"
   },
   {
    "id": "goog-l4-s4-r1-q2-v2",
    "input": "[10,1,2,4,7,2]\n5",
    "expectedOutput": "4"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l4-s4-r1-q2-h1",
    "input": "[4,2,2,2,4,4,2,2]\n0",
    "expectedOutput": "3"
   },
   {
    "id": "goog-l4-s4-r1-q2-h2",
    "input": "[1]\n0",
    "expectedOutput": "1"
   },
   {
    "id": "goog-l4-s4-r1-q2-h3",
    "input": "[1,5,6,7,8,10,6,5,6]\n4",
    "expectedOutput": "5"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @param {number} limit\n * @return {number}\n */\nfunction longestSubarray(nums, limit) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def longestSubarray(self, nums: List[int], limit: int) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int longestSubarray(vector<int>& nums, int limit) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(N)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "goog-l4-s5-r1-q1": {
  "id": "goog-l4-s5-r1-q1",
  "title": "K Cheapest Replica Pairs",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Heap",
  "tags": [
   "Google Round 1",
   "Heap",
   "K-way Merge",
   "Set 5"
  ],
  "paragraphs": [
   "Given two sorted arrays and k, return the k pairs [u, v] (u from the first, v from the second) with the smallest sums, ordered by sum then by u."
  ],
  "examples": [
   {
    "input": "nums1 = [1,7,11], nums2 = [2,4,6], k = 3",
    "output": "[[1,2],[1,4],[1,6]]"
   },
   {
    "input": "nums1 = [1,1,2], nums2 = [1,2,3], k = 2",
    "output": "[[1,1],[1,1]]"
   }
  ],
  "constraints": [
   "Target O(K log K) time and O(K) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l4-s5-r1-q1-v1",
    "input": "[1,7,11]\n[2,4,6]\n3",
    "expectedOutput": "[[1,2],[1,4],[1,6]]"
   },
   {
    "id": "goog-l4-s5-r1-q1-v2",
    "input": "[1,1,2]\n[1,2,3]\n2",
    "expectedOutput": "[[1,1],[1,1]]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l4-s5-r1-q1-h1",
    "input": "[1,2]\n[3]\n3",
    "expectedOutput": "[[1,3],[2,3]]"
   },
   {
    "id": "goog-l4-s5-r1-q1-h2",
    "input": "[1]\n[1]\n1",
    "expectedOutput": "[[1,1]]"
   },
   {
    "id": "goog-l4-s5-r1-q1-h3",
    "input": "[1,2,3]\n[1,2,3]\n4",
    "expectedOutput": "[[1,1],[1,2],[2,1],[1,3]]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums1\n * @param {number[]} nums2\n * @param {number} k\n * @return {number[][]}\n */\nfunction kSmallestPairs(nums1, nums2, k) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def kSmallestPairs(self, nums1: List[int], nums2: List[int], k: int) -> List[List[int]]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<vector<int>> kSmallestPairs(vector<int>& nums1, vector<int>& nums2, int k) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(K log K)",
   "space": "O(K)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "goog-l4-s5-r1-q2"
 },
 "goog-l4-s5-r1-q2": {
  "id": "goog-l4-s5-r1-q2",
  "title": "Minimum Relay Refuels",
  "difficulty": "Hard",
  "company": "Google",
  "category": "Greedy / Heap",
  "tags": [
   "Google Round 1",
   "Greedy",
   "Heap",
   "Set 5"
  ],
  "paragraphs": [
   "A vehicle starts with startFuel and must travel target miles; stations are [position, fuel] and each mile uses one unit. Return the minimum number of stops to reach target, or -1."
  ],
  "examples": [
   {
    "input": "target = 1, startFuel = 1, stations = []",
    "output": "0"
   },
   {
    "input": "target = 100, startFuel = 1, stations = [[10,100]]",
    "output": "-1"
   }
  ],
  "constraints": [
   "Target O(N log N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l4-s5-r1-q2-v1",
    "input": "1\n1\n[]",
    "expectedOutput": "0"
   },
   {
    "id": "goog-l4-s5-r1-q2-v2",
    "input": "100\n1\n[[10,100]]",
    "expectedOutput": "-1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l4-s5-r1-q2-h1",
    "input": "100\n10\n[[10,60],[20,30],[30,30],[60,40]]",
    "expectedOutput": "2"
   },
   {
    "id": "goog-l4-s5-r1-q2-h2",
    "input": "100\n50\n[[25,30],[50,50]]",
    "expectedOutput": "1"
   },
   {
    "id": "goog-l4-s5-r1-q2-h3",
    "input": "50\n10\n[[5,5],[10,5],[15,5]]",
    "expectedOutput": "-1"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number} target\n * @param {number} startFuel\n * @param {number[][]} stations\n * @return {number}\n */\nfunction minRefuelStops(target, startFuel, stations) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def minRefuelStops(self, target: int, startFuel: int, stations: List[List[int]]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int minRefuelStops(int target, int startFuel, vector<vector<int>>& stations) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N log N)",
   "space": "O(N)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "goog-l4-s6-r1-q1": {
  "id": "goog-l4-s6-r1-q1",
  "title": "Consistent Hash Ring Lookup",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Distributed Systems",
  "tags": [
   "Google Round 1",
   "Binary Search",
   "Consistent Hashing",
   "Set 6"
  ],
  "paragraphs": [
   "Nodes sit at positions on a ring of size ringSize. Each key (taken modulo ringSize) belongs to the first node clockwise at or after its position, wrapping around. Return the owning node position for each key."
  ],
  "examples": [
   {
    "input": "ringSize = 100, nodes = [10,40,80], keys = [5,10,50,95,140]",
    "output": "[10,10,80,10,40]"
   },
   {
    "input": "ringSize = 16, nodes = [3], keys = [0,3,4,15]",
    "output": "[3,3,3,3]"
   }
  ],
  "constraints": [
   "Target O((N+K) log N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l4-s6-r1-q1-v1",
    "input": "100\n[10,40,80]\n[5,10,50,95,140]",
    "expectedOutput": "[10,10,80,10,40]"
   },
   {
    "id": "goog-l4-s6-r1-q1-v2",
    "input": "16\n[3]\n[0,3,4,15]",
    "expectedOutput": "[3,3,3,3]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l4-s6-r1-q1-h1",
    "input": "360\n[90,180,270]\n[0,91,359,450]",
    "expectedOutput": "[90,180,90,90]"
   },
   {
    "id": "goog-l4-s6-r1-q1-h2",
    "input": "10\n[2,5,8]\n[9,2,6,12]",
    "expectedOutput": "[2,2,8,2]"
   },
   {
    "id": "goog-l4-s6-r1-q1-h3",
    "input": "50\n[49,1]\n[0,1,2,48,49]",
    "expectedOutput": "[1,1,49,49,49]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number} ringSize\n * @param {number[]} nodes\n * @param {number[]} keys\n * @return {number[]}\n */\nfunction lookupOwners(ringSize, nodes, keys) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def lookupOwners(self, ringSize: int, nodes: List[int], keys: List[int]) -> List[int]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<int> lookupOwners(int ringSize, vector<int>& nodes, vector<int>& keys) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O((N+K) log N)",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "goog-l4-s6-r1-q2"
 },
 "goog-l4-s6-r1-q2": {
  "id": "goog-l4-s6-r1-q2",
  "title": "Cheapest Cluster Interconnect",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Union Find / MST",
  "tags": [
   "Google Round 1",
   "Union Find",
   "MST",
   "Graph",
   "Set 6"
  ],
  "paragraphs": [
   "Given n nodes and links [a, b, cost], return the minimum total cost to connect all nodes, or -1 if they cannot all be connected."
  ],
  "examples": [
   {
    "input": "n = 3, links = [[0,1,5],[1,2,3],[0,2,1]]",
    "output": "4"
   },
   {
    "input": "n = 4, links = [[0,1,1],[2,3,2]]",
    "output": "-1"
   }
  ],
  "constraints": [
   "Target O(E log E) time and O(V) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l4-s6-r1-q2-v1",
    "input": "3\n[[0,1,5],[1,2,3],[0,2,1]]",
    "expectedOutput": "4"
   },
   {
    "id": "goog-l4-s6-r1-q2-v2",
    "input": "4\n[[0,1,1],[2,3,2]]",
    "expectedOutput": "-1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l4-s6-r1-q2-h1",
    "input": "1\n[]",
    "expectedOutput": "0"
   },
   {
    "id": "goog-l4-s6-r1-q2-h2",
    "input": "4\n[[0,1,1],[1,2,2],[2,3,3],[0,3,10]]",
    "expectedOutput": "6"
   },
   {
    "id": "goog-l4-s6-r1-q2-h3",
    "input": "2\n[[0,1,7],[0,1,2]]",
    "expectedOutput": "2"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number} n\n * @param {number[][]} links\n * @return {number}\n */\nfunction minCostToConnect(n, links) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def minCostToConnect(self, n: int, links: List[List[int]]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int minCostToConnect(int n, vector<vector<int>>& links) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(E log E)",
   "space": "O(V)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "goog-l4-s7-r1-q1": {
  "id": "goog-l4-s7-r1-q1",
  "title": "Lock Wait-For Deadlock Check",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Graph / Cycle Detection",
  "tags": [
   "Google Round 1",
   "Graph",
   "DFS",
   "Concurrency",
   "Set 7"
  ],
  "paragraphs": [
   "waits[i] = [a, b] means transaction a waits for a lock held by b. Return true if the wait-for graph contains a deadlock (a directed cycle)."
  ],
  "examples": [
   {
    "input": "n = 3, waits = [[0,1],[1,2]]",
    "output": "false"
   },
   {
    "input": "n = 3, waits = [[0,1],[1,2],[2,0]]",
    "output": "true"
   }
  ],
  "constraints": [
   "Target O(V+E) time and O(V) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l4-s7-r1-q1-v1",
    "input": "3\n[[0,1],[1,2]]",
    "expectedOutput": "false"
   },
   {
    "id": "goog-l4-s7-r1-q1-v2",
    "input": "3\n[[0,1],[1,2],[2,0]]",
    "expectedOutput": "true"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l4-s7-r1-q1-h1",
    "input": "1\n[[0,0]]",
    "expectedOutput": "true"
   },
   {
    "id": "goog-l4-s7-r1-q1-h2",
    "input": "4\n[[0,1],[2,3]]",
    "expectedOutput": "false"
   },
   {
    "id": "goog-l4-s7-r1-q1-h3",
    "input": "4\n[[0,1],[1,2],[2,3],[3,1]]",
    "expectedOutput": "true"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number} n\n * @param {number[][]} waits\n * @return {boolean}\n */\nfunction hasDeadlock(n, waits) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def hasDeadlock(self, n: int, waits: List[List[int]]) -> bool:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    bool hasDeadlock(int n, vector<vector<int>>& waits) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(V+E)",
   "space": "O(V)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "goog-l4-s7-r1-q2"
 },
 "goog-l4-s7-r1-q2": {
  "id": "goog-l4-s7-r1-q2",
  "title": "Single Points of Link Failure",
  "difficulty": "Hard",
  "company": "Google",
  "category": "Tarjan Bridges",
  "tags": [
   "Google Round 1",
   "Graph",
   "DFS",
   "Bridges",
   "Set 7"
  ],
  "paragraphs": [
   "Given a connected network, return every link whose removal disconnects it. Each link is [a, b] with a < b, and the result is sorted."
  ],
  "examples": [
   {
    "input": "n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]",
    "output": "[[1,3]]"
   },
   {
    "input": "n = 2, connections = [[0,1]]",
    "output": "[[0,1]]"
   }
  ],
  "constraints": [
   "Target O(V+E) time and O(V+E) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l4-s7-r1-q2-v1",
    "input": "4\n[[0,1],[1,2],[2,0],[1,3]]",
    "expectedOutput": "[[1,3]]"
   },
   {
    "id": "goog-l4-s7-r1-q2-v2",
    "input": "2\n[[0,1]]",
    "expectedOutput": "[[0,1]]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l4-s7-r1-q2-h1",
    "input": "5\n[[0,1],[1,2],[2,3],[3,4]]",
    "expectedOutput": "[[0,1],[1,2],[2,3],[3,4]]"
   },
   {
    "id": "goog-l4-s7-r1-q2-h2",
    "input": "4\n[[0,1],[1,2],[2,3],[3,0]]",
    "expectedOutput": "[]"
   },
   {
    "id": "goog-l4-s7-r1-q2-h3",
    "input": "6\n[[0,1],[1,2],[2,0],[2,3],[3,4],[4,5],[5,3]]",
    "expectedOutput": "[[2,3]]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number} n\n * @param {number[][]} connections\n * @return {number[][]}\n */\nfunction criticalConnections(n, connections) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def criticalConnections(self, n: int, connections: List[List[int]]) -> List[List[int]]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<vector<int>> criticalConnections(int n, vector<vector<int>>& connections) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(V+E)",
   "space": "O(V+E)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "goog-l4-s8-r1-q1": {
  "id": "goog-l4-s8-r1-q1",
  "title": "Round Robin Completion Times",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Scheduling",
  "tags": [
   "Google Round 1",
   "Queue",
   "Simulation",
   "Scheduling",
   "Set 8"
  ],
  "paragraphs": [
   "All processes arrive at time 0 with the given burst times. A round-robin scheduler runs each for at most quantum units in turn. Return each process's completion time."
  ],
  "examples": [
   {
    "input": "burst = [5,3,8], quantum = 4",
    "output": "[12,7,16]"
   },
   {
    "input": "burst = [2,2,2], quantum = 1",
    "output": "[4,5,6]"
   }
  ],
  "constraints": [
   "Target O(T) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l4-s8-r1-q1-v1",
    "input": "[5,3,8]\n4",
    "expectedOutput": "[12,7,16]"
   },
   {
    "id": "goog-l4-s8-r1-q1-v2",
    "input": "[2,2,2]\n1",
    "expectedOutput": "[4,5,6]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l4-s8-r1-q1-h1",
    "input": "[10]\n3",
    "expectedOutput": "[10]"
   },
   {
    "id": "goog-l4-s8-r1-q1-h2",
    "input": "[1,1,1]\n5",
    "expectedOutput": "[1,2,3]"
   },
   {
    "id": "goog-l4-s8-r1-q1-h3",
    "input": "[6,1,4]\n2",
    "expectedOutput": "[11,3,9]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} burst\n * @param {number} quantum\n * @return {number[]}\n */\nfunction completionTimes(burst, quantum) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def completionTimes(self, burst: List[int], quantum: int) -> List[int]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<int> completionTimes(vector<int>& burst, int quantum) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(T)",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "goog-l4-s8-r1-q2"
 },
 "goog-l4-s8-r1-q2": {
  "id": "goog-l4-s8-r1-q2",
  "title": "Maximum Batch Consolidation Value",
  "difficulty": "Hard",
  "company": "Google",
  "category": "Interval DP",
  "tags": [
   "Google Round 1",
   "DP",
   "Interval DP",
   "Set 8"
  ],
  "paragraphs": [
   "Removing item i yields nums[i-1]*nums[i]*nums[i+1] points (out-of-range neighbours count as 1). Return the maximum total points from removing every item."
  ],
  "examples": [
   {
    "input": "nums = [3,1,5,8]",
    "output": "167"
   },
   {
    "input": "nums = [1,5]",
    "output": "10"
   }
  ],
  "constraints": [
   "Target O(N^3) time and O(N^2) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l4-s8-r1-q2-v1",
    "input": "[3,1,5,8]",
    "expectedOutput": "167"
   },
   {
    "id": "goog-l4-s8-r1-q2-v2",
    "input": "[1,5]",
    "expectedOutput": "10"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l4-s8-r1-q2-h1",
    "input": "[7]",
    "expectedOutput": "7"
   },
   {
    "id": "goog-l4-s8-r1-q2-h2",
    "input": "[2,2,2]",
    "expectedOutput": "14"
   },
   {
    "id": "goog-l4-s8-r1-q2-h3",
    "input": "[9,76,64,21]",
    "expectedOutput": "116718"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @return {number}\n */\nfunction maxCoins(nums) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def maxCoins(self, nums: List[int]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int maxCoins(vector<int>& nums) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N^3)",
   "space": "O(N^2)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "goog-l4-s9-r1-q1": {
  "id": "goog-l4-s9-r1-q1",
  "title": "Recent Hits Counter",
  "difficulty": "Easy",
  "company": "Google",
  "category": "Queue / Binary Search",
  "tags": [
   "Google Round 1",
   "Queue",
   "Design",
   "Set 9"
  ],
  "paragraphs": [
   "Timestamps (seconds, non-decreasing) record hits. Return how many hits fall in the last 300 seconds ending at queryTime, i.e. in (queryTime - 300, queryTime]."
  ],
  "examples": [
   {
    "input": "timestamps = [1,2,3,300], queryTime = 300",
    "output": "4"
   },
   {
    "input": "timestamps = [1,2,3,300], queryTime = 301",
    "output": "3"
   }
  ],
  "constraints": [
   "Target O(log N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l4-s9-r1-q1-v1",
    "input": "[1,2,3,300]\n300",
    "expectedOutput": "4"
   },
   {
    "id": "goog-l4-s9-r1-q1-v2",
    "input": "[1,2,3,300]\n301",
    "expectedOutput": "3"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l4-s9-r1-q1-h1",
    "input": "[1,2,3,300]\n600",
    "expectedOutput": "0"
   },
   {
    "id": "goog-l4-s9-r1-q1-h2",
    "input": "[]\n10",
    "expectedOutput": "0"
   },
   {
    "id": "goog-l4-s9-r1-q1-h3",
    "input": "[100,100,100]\n399",
    "expectedOutput": "3"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} timestamps\n * @param {number} queryTime\n * @return {number}\n */\nfunction hitsInWindow(timestamps, queryTime) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def hitsInWindow(self, timestamps: List[int], queryTime: int) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int hitsInWindow(vector<int>& timestamps, int queryTime) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(log N)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "goog-l4-s9-r1-q2"
 },
 "goog-l4-s9-r1-q2": {
  "id": "goog-l4-s9-r1-q2",
  "title": "Skyline of Reserved Capacity",
  "difficulty": "Hard",
  "company": "Google",
  "category": "Sweep Line / Heap",
  "tags": [
   "Google Round 1",
   "Heap",
   "Sweep Line",
   "Divide and Conquer",
   "Set 9"
  ],
  "paragraphs": [
   "Each reservation is [left, right, height]. Return the skyline: key points [x, height] where the maximum height changes, ending with a point of height 0."
  ],
  "examples": [
   {
    "input": "buildings = [[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]",
    "output": "[[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]"
   },
   {
    "input": "buildings = [[0,2,3],[2,5,3]]",
    "output": "[[0,3],[5,0]]"
   }
  ],
  "constraints": [
   "Target O(N log N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l4-s9-r1-q2-v1",
    "input": "[[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]",
    "expectedOutput": "[[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]"
   },
   {
    "id": "goog-l4-s9-r1-q2-v2",
    "input": "[[0,2,3],[2,5,3]]",
    "expectedOutput": "[[0,3],[5,0]]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l4-s9-r1-q2-h1",
    "input": "[[1,2,1]]",
    "expectedOutput": "[[1,1],[2,0]]"
   },
   {
    "id": "goog-l4-s9-r1-q2-h2",
    "input": "[[1,5,3],[2,4,5]]",
    "expectedOutput": "[[1,3],[2,5],[4,3],[5,0]]"
   },
   {
    "id": "goog-l4-s9-r1-q2-h3",
    "input": "[[1,3,2],[1,3,4]]",
    "expectedOutput": "[[1,4],[3,0]]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[][]} buildings\n * @return {number[][]}\n */\nfunction getSkyline(buildings) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def getSkyline(self, buildings: List[List[int]]) -> List[List[int]]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<vector<int>> getSkyline(vector<vector<int>>& buildings) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N log N)",
   "space": "O(N)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "goog-l4-s10-r1-q1": {
  "id": "goog-l4-s10-r1-q1",
  "title": "Idempotent Request Deduplication",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Hashing / Idempotency",
  "tags": [
   "Google Round 1",
   "Hash Table",
   "Idempotency",
   "Simulation",
   "Set 10"
  ],
  "paragraphs": [
   "Each request is [time, id]. A request is dropped as a duplicate if an accepted request with the same id was accepted less than ttl time units earlier. Return how many requests are accepted."
  ],
  "examples": [
   {
    "input": "requests = [[1,7],[2,7],[11,7],[12,8]], ttl = 10",
    "output": "3"
   },
   {
    "input": "requests = [[0,1],[0,1],[0,1]], ttl = 1",
    "output": "1"
   }
  ],
  "constraints": [
   "Target O(N) time and O(U) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l4-s10-r1-q1-v1",
    "input": "[[1,7],[2,7],[11,7],[12,8]]\n10",
    "expectedOutput": "3"
   },
   {
    "id": "goog-l4-s10-r1-q1-v2",
    "input": "[[0,1],[0,1],[0,1]]\n1",
    "expectedOutput": "1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l4-s10-r1-q1-h1",
    "input": "[[1,1],[5,1],[9,1]]\n4",
    "expectedOutput": "3"
   },
   {
    "id": "goog-l4-s10-r1-q1-h2",
    "input": "[]\n5",
    "expectedOutput": "0"
   },
   {
    "id": "goog-l4-s10-r1-q1-h3",
    "input": "[[3,2],[4,3],[5,2],[8,2]]\n3",
    "expectedOutput": "3"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[][]} requests\n * @param {number} ttl\n * @return {number}\n */\nfunction acceptedRequests(requests, ttl) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def acceptedRequests(self, requests: List[List[int]], ttl: int) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int acceptedRequests(vector<vector<int>>& requests, int ttl) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(U)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "goog-l4-s10-r1-q2"
 },
 "goog-l4-s10-r1-q2": {
  "id": "goog-l4-s10-r1-q2",
  "title": "Shortest Burst Over Threshold",
  "difficulty": "Hard",
  "company": "Google",
  "category": "Monotonic Deque",
  "tags": [
   "Google Round 1",
   "Deque",
   "Prefix Sum",
   "Set 10"
  ],
  "paragraphs": [
   "Return the length of the shortest non-empty contiguous subarray with sum at least k, or -1. Values may be negative."
  ],
  "examples": [
   {
    "input": "nums = [1], k = 1",
    "output": "1"
   },
   {
    "input": "nums = [1,2], k = 4",
    "output": "-1"
   }
  ],
  "constraints": [
   "Target O(N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l4-s10-r1-q2-v1",
    "input": "[1]\n1",
    "expectedOutput": "1"
   },
   {
    "id": "goog-l4-s10-r1-q2-v2",
    "input": "[1,2]\n4",
    "expectedOutput": "-1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l4-s10-r1-q2-h1",
    "input": "[2,-1,2]\n3",
    "expectedOutput": "3"
   },
   {
    "id": "goog-l4-s10-r1-q2-h2",
    "input": "[84,-37,32,40,95]\n167",
    "expectedOutput": "3"
   },
   {
    "id": "goog-l4-s10-r1-q2-h3",
    "input": "[-1,5,3]\n8",
    "expectedOutput": "2"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @param {number} k\n * @return {number}\n */\nfunction shortestSubarray(nums, k) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def shortestSubarray(self, nums: List[int], k: int) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int shortestSubarray(vector<int>& nums, int k) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(N)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "goog-l4-s1-r2-q1": {
  "id": "goog-l4-s1-r2-q1",
  "title": "LRU Cache Internals",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Design / Linked List",
  "tags": [
   "Google Round 2",
   "Design",
   "Hash Table",
   "Doubly Linked List",
   "Set 1"
  ],
  "paragraphs": [
   "Implement an LRU cache with O(1) get and put, then defend your hash map plus doubly linked list invariants. ops/args describe a call sequence; return each call's result (null for put and the constructor, -1 for a miss).",
   "Round 2 is a live viva: after your code passes every test you will defend its invariants and Big-O bounds."
  ],
  "examples": [
   {
    "input": "ops = [\"LRUCache\",\"put\",\"put\",\"get\",\"put\",\"get\",\"put\",\"get\",\"get\",\"get\"], args = [[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]",
    "output": "[null,null,null,1,null,-1,null,-1,3,4]"
   },
   {
    "input": "ops = [\"LRUCache\",\"put\",\"get\"], args = [[1],[5,50],[5]]",
    "output": "[null,null,50]"
   }
  ],
  "constraints": [
   "Target O(1) per op time and O(C) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l4-s1-r2-q1-v1",
    "input": "[\"LRUCache\",\"put\",\"put\",\"get\",\"put\",\"get\",\"put\",\"get\",\"get\",\"get\"]\n[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]",
    "expectedOutput": "[null,null,null,1,null,-1,null,-1,3,4]"
   },
   {
    "id": "goog-l4-s1-r2-q1-v2",
    "input": "[\"LRUCache\",\"put\",\"get\"]\n[[1],[5,50],[5]]",
    "expectedOutput": "[null,null,50]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l4-s1-r2-q1-h1",
    "input": "[\"LRUCache\",\"get\"]\n[[1],[9]]",
    "expectedOutput": "[null,-1]"
   },
   {
    "id": "goog-l4-s1-r2-q1-h2",
    "input": "[\"LRUCache\",\"put\",\"put\",\"put\",\"get\"]\n[[2],[1,1],[2,2],[1,10],[1]]",
    "expectedOutput": "[null,null,null,null,10]"
   },
   {
    "id": "goog-l4-s1-r2-q1-h3",
    "input": "[\"LRUCache\",\"put\",\"put\",\"get\",\"get\"]\n[[1],[1,1],[2,2],[1],[2]]",
    "expectedOutput": "[null,null,null,-1,2]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string[]} ops\n * @param {number[][]} args\n * @return {any[]}\n */\nfunction runLRU(ops, args) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def runLRU(self, ops: List[str], args: List[List[int]]) -> list:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version. Each element of an any[] value is passed as a JSON string in C++.\nclass Solution {\npublic:\n    vector<string> runLRU(vector<string>& ops, vector<vector<int>>& args) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(1) per op",
   "space": "O(C)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l4-s2-r2-q1": {
  "id": "goog-l4-s2-r2-q1",
  "title": "LFU Cache Frequency Lists",
  "difficulty": "Hard",
  "company": "Google",
  "category": "Design",
  "tags": [
   "Google Round 2",
   "Design",
   "LFU",
   "Hash Table",
   "Set 2"
  ],
  "paragraphs": [
   "Implement an LFU cache with O(1) operations. When full, evict the least frequently used key, breaking ties by least recently used. Return each call's result (null for put and the constructor, -1 for a miss).",
   "Round 2 is a live viva: after your code passes every test you will defend its invariants and Big-O bounds."
  ],
  "examples": [
   {
    "input": "ops = [\"LFUCache\",\"put\",\"put\",\"get\",\"put\",\"get\",\"get\",\"put\",\"get\",\"get\",\"get\"], args = [[2],[1,1],[2,2],[1],[3,3],[2],[3],[4,4],[1],[3],[4]]",
    "output": "[null,null,null,1,null,-1,3,null,-1,3,4]"
   },
   {
    "input": "ops = [\"LFUCache\",\"put\",\"get\"], args = [[0],[1,1],[1]]",
    "output": "[null,null,-1]"
   }
  ],
  "constraints": [
   "Target O(1) per op time and O(C) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l4-s2-r2-q1-v1",
    "input": "[\"LFUCache\",\"put\",\"put\",\"get\",\"put\",\"get\",\"get\",\"put\",\"get\",\"get\",\"get\"]\n[[2],[1,1],[2,2],[1],[3,3],[2],[3],[4,4],[1],[3],[4]]",
    "expectedOutput": "[null,null,null,1,null,-1,3,null,-1,3,4]"
   },
   {
    "id": "goog-l4-s2-r2-q1-v2",
    "input": "[\"LFUCache\",\"put\",\"get\"]\n[[0],[1,1],[1]]",
    "expectedOutput": "[null,null,-1]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l4-s2-r2-q1-h1",
    "input": "[\"LFUCache\",\"put\",\"put\",\"get\",\"put\",\"get\",\"get\"]\n[[1],[1,1],[2,2],[1],[3,3],[2],[3]]",
    "expectedOutput": "[null,null,null,-1,null,-1,3]"
   },
   {
    "id": "goog-l4-s2-r2-q1-h2",
    "input": "[\"LFUCache\",\"put\",\"put\",\"put\",\"get\",\"get\"]\n[[2],[1,1],[1,5],[2,2],[1],[2]]",
    "expectedOutput": "[null,null,null,null,5,2]"
   },
   {
    "id": "goog-l4-s2-r2-q1-h3",
    "input": "[\"LFUCache\",\"put\",\"put\",\"get\",\"get\",\"put\",\"get\"]\n[[2],[1,1],[2,2],[1],[1],[3,3],[2]]",
    "expectedOutput": "[null,null,null,1,1,null,-1]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string[]} ops\n * @param {number[][]} args\n * @return {any[]}\n */\nfunction runLFU(ops, args) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def runLFU(self, ops: List[str], args: List[List[int]]) -> list:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version. Each element of an any[] value is passed as a JSON string in C++.\nclass Solution {\npublic:\n    vector<string> runLFU(vector<string>& ops, vector<vector<int>>& args) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(1) per op",
   "space": "O(C)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l4-s3-r2-q1": {
  "id": "goog-l4-s3-r2-q1",
  "title": "Insert Delete Constant-Time Set",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Design / Hashing",
  "tags": [
   "Google Round 2",
   "Design",
   "Hash Table",
   "Array",
   "Set 3"
  ],
  "paragraphs": [
   "Implement a set supporting insert, remove and contains in O(1) (the swap-with-last trick that also makes getRandom O(1)), plus size. Return each call's result (null for the constructor).",
   "Round 2 is a live viva: after your code passes every test you will defend its invariants and Big-O bounds."
  ],
  "examples": [
   {
    "input": "ops = [\"RandomizedSet\",\"insert\",\"remove\",\"insert\",\"contains\",\"remove\",\"insert\",\"size\"], args = [[],[1],[2],[2],[2],[1],[2],[]]",
    "output": "[null,true,false,true,true,true,false,1]"
   },
   {
    "input": "ops = [\"RandomizedSet\",\"insert\",\"insert\",\"remove\",\"size\"], args = [[],[5],[5],[5],[]]",
    "output": "[null,true,false,true,0]"
   }
  ],
  "constraints": [
   "Target O(1) per op time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l4-s3-r2-q1-v1",
    "input": "[\"RandomizedSet\",\"insert\",\"remove\",\"insert\",\"contains\",\"remove\",\"insert\",\"size\"]\n[[],[1],[2],[2],[2],[1],[2],[]]",
    "expectedOutput": "[null,true,false,true,true,true,false,1]"
   },
   {
    "id": "goog-l4-s3-r2-q1-v2",
    "input": "[\"RandomizedSet\",\"insert\",\"insert\",\"remove\",\"size\"]\n[[],[5],[5],[5],[]]",
    "expectedOutput": "[null,true,false,true,0]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l4-s3-r2-q1-h1",
    "input": "[\"RandomizedSet\",\"remove\",\"size\"]\n[[],[3],[]]",
    "expectedOutput": "[null,false,0]"
   },
   {
    "id": "goog-l4-s3-r2-q1-h2",
    "input": "[\"RandomizedSet\",\"insert\",\"insert\",\"insert\",\"remove\",\"contains\",\"contains\"]\n[[],[1],[2],[3],[1],[3],[1]]",
    "expectedOutput": "[null,true,true,true,true,true,false]"
   },
   {
    "id": "goog-l4-s3-r2-q1-h3",
    "input": "[\"RandomizedSet\",\"insert\",\"remove\",\"insert\",\"size\"]\n[[],[7],[7],[7],[]]",
    "expectedOutput": "[null,true,true,true,1]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string[]} ops\n * @param {number[][]} args\n * @return {any[]}\n */\nfunction runSet(ops, args) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def runSet(self, ops: List[str], args: List[List[int]]) -> list:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version. Each element of an any[] value is passed as a JSON string in C++.\nclass Solution {\npublic:\n    vector<string> runSet(vector<string>& ops, vector<vector<int>>& args) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(1) per op",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l4-s4-r2-q1": {
  "id": "goog-l4-s4-r2-q1",
  "title": "Autocomplete Trie With Top-K Ranking",
  "difficulty": "Hard",
  "company": "Google",
  "category": "Trie / Design",
  "tags": [
   "Google Round 2",
   "Trie",
   "Heap",
   "Design",
   "Set 4"
  ],
  "paragraphs": [
   "Build an autocomplete system over (sentence, count) pairs. input(c) appends a character and returns the top 3 sentences by count (ties by ASCII order); '#' stores the typed sentence and returns []. args is a JSON array per call.",
   "Round 2 is a live viva: after your code passes every test you will defend its invariants and Big-O bounds."
  ],
  "examples": [
   {
    "input": "ops = [\"AutocompleteSystem\",\"input\",\"input\",\"input\",\"input\"], args = [[[\"i love you\",\"island\",\"iroman\",\"i love leetcode\"],[5,3,2,2]],[\"i\"],[\" \"],[\"a\"],[\"#\"]]",
    "output": "[null,[\"i love you\",\"island\",\"i love leetcode\"],[\"i love you\",\"i love leetcode\"],[],[]]"
   },
   {
    "input": "ops = [\"AutocompleteSystem\",\"input\",\"input\"], args = [[[\"ab\",\"abc\"],[1,2]],[\"a\"],[\"b\"]]",
    "output": "[null,[\"abc\",\"ab\"],[\"abc\",\"ab\"]]"
   }
  ],
  "constraints": [
   "Target O(P + K log K) time and O(S*L) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l4-s4-r2-q1-v1",
    "input": "[\"AutocompleteSystem\",\"input\",\"input\",\"input\",\"input\"]\n[[[\"i love you\",\"island\",\"iroman\",\"i love leetcode\"],[5,3,2,2]],[\"i\"],[\" \"],[\"a\"],[\"#\"]]",
    "expectedOutput": "[null,[\"i love you\",\"island\",\"i love leetcode\"],[\"i love you\",\"i love leetcode\"],[],[]]"
   },
   {
    "id": "goog-l4-s4-r2-q1-v2",
    "input": "[\"AutocompleteSystem\",\"input\",\"input\"]\n[[[\"ab\",\"abc\"],[1,2]],[\"a\"],[\"b\"]]",
    "expectedOutput": "[null,[\"abc\",\"ab\"],[\"abc\",\"ab\"]]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l4-s4-r2-q1-h1",
    "input": "[\"AutocompleteSystem\",\"input\",\"input\",\"input\"]\n[[[\"x\"],[1]],[\"#\"],[\"y\"],[\"#\"]]",
    "expectedOutput": "[null,[],[],[]]"
   },
   {
    "id": "goog-l4-s4-r2-q1-h2",
    "input": "[\"AutocompleteSystem\",\"input\"]\n[[[\"hello\",\"help\",\"helm\",\"held\"],[4,4,4,1]],[\"h\"]]",
    "expectedOutput": "[null,[\"hello\",\"helm\",\"help\"]]"
   },
   {
    "id": "goog-l4-s4-r2-q1-h3",
    "input": "[\"AutocompleteSystem\",\"input\",\"input\",\"input\"]\n[[[\"a b\",\"a c\"],[2,2]],[\"a\"],[\" \"],[\"b\"]]",
    "expectedOutput": "[null,[\"a b\",\"a c\"],[\"a b\",\"a c\"],[\"a b\"]]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string[]} ops\n * @param {any[]} args\n * @return {any[]}\n */\nfunction runAutocomplete(ops, args) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def runAutocomplete(self, ops: List[str], args: list) -> list:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version. Each element of an any[] value is passed as a JSON string in C++.\nclass Solution {\npublic:\n    vector<string> runAutocomplete(vector<string>& ops, vector<string>& args) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(P + K log K)",
   "space": "O(S*L)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l4-s5-r2-q1": {
  "id": "goog-l4-s5-r2-q1",
  "title": "Median From a Data Stream",
  "difficulty": "Hard",
  "company": "Google",
  "category": "Two Heaps",
  "tags": [
   "Google Round 2",
   "Heap",
   "Design",
   "Streaming",
   "Set 5"
  ],
  "paragraphs": [
   "Support addNum and findMedian over a stream using two heaps (O(log N) add, O(1) median). Return each call's result (null for the constructor and addNum).",
   "Round 2 is a live viva: after your code passes every test you will defend its invariants and Big-O bounds."
  ],
  "examples": [
   {
    "input": "ops = [\"MedianFinder\",\"addNum\",\"addNum\",\"findMedian\",\"addNum\",\"findMedian\"], args = [[],[1],[2],[],[3],[]]",
    "output": "[null,null,null,1.5,null,2.0]"
   },
   {
    "input": "ops = [\"MedianFinder\",\"addNum\",\"findMedian\"], args = [[],[5],[]]",
    "output": "[null,null,5.0]"
   }
  ],
  "constraints": [
   "Target O(log N) add, O(1) median time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l4-s5-r2-q1-v1",
    "input": "[\"MedianFinder\",\"addNum\",\"addNum\",\"findMedian\",\"addNum\",\"findMedian\"]\n[[],[1],[2],[],[3],[]]",
    "expectedOutput": "[null,null,null,1.5,null,2.0]"
   },
   {
    "id": "goog-l4-s5-r2-q1-v2",
    "input": "[\"MedianFinder\",\"addNum\",\"findMedian\"]\n[[],[5],[]]",
    "expectedOutput": "[null,null,5.0]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l4-s5-r2-q1-h1",
    "input": "[\"MedianFinder\",\"addNum\",\"addNum\",\"addNum\",\"addNum\",\"findMedian\"]\n[[],[6],[10],[2],[6],[]]",
    "expectedOutput": "[null,null,null,null,null,6.0]"
   },
   {
    "id": "goog-l4-s5-r2-q1-h2",
    "input": "[\"MedianFinder\",\"addNum\",\"addNum\",\"findMedian\"]\n[[],[-1],[-2],[]]",
    "expectedOutput": "[null,null,null,-1.5]"
   },
   {
    "id": "goog-l4-s5-r2-q1-h3",
    "input": "[\"MedianFinder\",\"addNum\",\"addNum\",\"addNum\",\"findMedian\",\"addNum\",\"findMedian\"]\n[[],[40],[12],[16],[],[14],[]]",
    "expectedOutput": "[null,null,null,null,16.0,null,15.0]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string[]} ops\n * @param {number[][]} args\n * @return {any[]}\n */\nfunction runMedian(ops, args) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def runMedian(self, ops: List[str], args: List[List[int]]) -> list:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version. Each element of an any[] value is passed as a JSON string in C++.\nclass Solution {\npublic:\n    vector<string> runMedian(vector<string>& ops, vector<vector<int>>& args) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(log N) add, O(1) median",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l4-s6-r2-q1": {
  "id": "goog-l4-s6-r2-q1",
  "title": "Maximum Frequency Stack",
  "difficulty": "Hard",
  "company": "Google",
  "category": "Design / Stack",
  "tags": [
   "Google Round 2",
   "Design",
   "Stack",
   "Hash Table",
   "Set 6"
  ],
  "paragraphs": [
   "Implement push(x) and pop(), where pop removes the most frequent element (ties: the one closest to the top). Return each call's result (null for push and the constructor).",
   "Round 2 is a live viva: after your code passes every test you will defend its invariants and Big-O bounds."
  ],
  "examples": [
   {
    "input": "ops = [\"FreqStack\",\"push\",\"push\",\"push\",\"push\",\"push\",\"push\",\"pop\",\"pop\",\"pop\",\"pop\"], args = [[],[5],[7],[5],[7],[4],[5],[],[],[],[]]",
    "output": "[null,null,null,null,null,null,null,5,7,5,4]"
   },
   {
    "input": "ops = [\"FreqStack\",\"push\",\"pop\"], args = [[],[1],[]]",
    "output": "[null,null,1]"
   }
  ],
  "constraints": [
   "Target O(1) per op time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l4-s6-r2-q1-v1",
    "input": "[\"FreqStack\",\"push\",\"push\",\"push\",\"push\",\"push\",\"push\",\"pop\",\"pop\",\"pop\",\"pop\"]\n[[],[5],[7],[5],[7],[4],[5],[],[],[],[]]",
    "expectedOutput": "[null,null,null,null,null,null,null,5,7,5,4]"
   },
   {
    "id": "goog-l4-s6-r2-q1-v2",
    "input": "[\"FreqStack\",\"push\",\"pop\"]\n[[],[1],[]]",
    "expectedOutput": "[null,null,1]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l4-s6-r2-q1-h1",
    "input": "[\"FreqStack\",\"push\",\"push\",\"pop\",\"pop\"]\n[[],[2],[2],[],[]]",
    "expectedOutput": "[null,null,null,2,2]"
   },
   {
    "id": "goog-l4-s6-r2-q1-h2",
    "input": "[\"FreqStack\",\"push\",\"push\",\"push\",\"pop\",\"pop\",\"pop\"]\n[[],[1],[2],[3],[],[],[]]",
    "expectedOutput": "[null,null,null,null,3,2,1]"
   },
   {
    "id": "goog-l4-s6-r2-q1-h3",
    "input": "[\"FreqStack\",\"push\",\"push\",\"push\",\"pop\",\"push\",\"pop\",\"pop\"]\n[[],[1],[1],[2],[],[2],[],[]]",
    "expectedOutput": "[null,null,null,null,1,null,2,2]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string[]} ops\n * @param {number[][]} args\n * @return {any[]}\n */\nfunction runFreqStack(ops, args) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def runFreqStack(self, ops: List[str], args: List[List[int]]) -> list:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version. Each element of an any[] value is passed as a JSON string in C++.\nclass Solution {\npublic:\n    vector<string> runFreqStack(vector<string>& ops, vector<vector<int>>& args) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(1) per op",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l4-s7-r2-q1": {
  "id": "goog-l4-s7-r2-q1",
  "title": "Time-Versioned Key-Value Store",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Binary Search / Design",
  "tags": [
   "Google Round 2",
   "Design",
   "Binary Search",
   "Hash Table",
   "Set 7"
  ],
  "paragraphs": [
   "set(key, value, timestamp) stores versions with increasing timestamps; get(key, timestamp) returns the value with the largest timestamp not exceeding the query, or an empty string. Return each call's result (null for set and the constructor).",
   "Round 2 is a live viva: after your code passes every test you will defend its invariants and Big-O bounds."
  ],
  "examples": [
   {
    "input": "ops = [\"TimeMap\",\"set\",\"get\",\"get\",\"set\",\"get\",\"get\"], args = [[],[\"foo\",\"bar\",1],[\"foo\",1],[\"foo\",3],[\"foo\",\"bar2\",4],[\"foo\",4],[\"foo\",5]]",
    "output": "[null,null,\"bar\",\"bar\",null,\"bar2\",\"bar2\"]"
   },
   {
    "input": "ops = [\"TimeMap\",\"get\"], args = [[],[\"x\",1]]",
    "output": "[null,\"\"]"
   }
  ],
  "constraints": [
   "Target O(log N) get time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l4-s7-r2-q1-v1",
    "input": "[\"TimeMap\",\"set\",\"get\",\"get\",\"set\",\"get\",\"get\"]\n[[],[\"foo\",\"bar\",1],[\"foo\",1],[\"foo\",3],[\"foo\",\"bar2\",4],[\"foo\",4],[\"foo\",5]]",
    "expectedOutput": "[null,null,\"bar\",\"bar\",null,\"bar2\",\"bar2\"]"
   },
   {
    "id": "goog-l4-s7-r2-q1-v2",
    "input": "[\"TimeMap\",\"get\"]\n[[],[\"x\",1]]",
    "expectedOutput": "[null,\"\"]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l4-s7-r2-q1-h1",
    "input": "[\"TimeMap\",\"set\",\"get\"]\n[[],[\"a\",\"v\",10],[\"a\",5]]",
    "expectedOutput": "[null,null,\"\"]"
   },
   {
    "id": "goog-l4-s7-r2-q1-h2",
    "input": "[\"TimeMap\",\"set\",\"set\",\"get\",\"get\"]\n[[],[\"k\",\"a\",1],[\"k\",\"b\",2],[\"k\",2],[\"k\",1]]",
    "expectedOutput": "[null,null,null,\"b\",\"a\"]"
   },
   {
    "id": "goog-l4-s7-r2-q1-h3",
    "input": "[\"TimeMap\",\"set\",\"get\",\"get\"]\n[[],[\"m\",\"z\",3],[\"m\",3],[\"n\",3]]",
    "expectedOutput": "[null,null,\"z\",\"\"]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string[]} ops\n * @param {any[]} args\n * @return {any[]}\n */\nfunction runTimeMap(ops, args) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def runTimeMap(self, ops: List[str], args: list) -> list:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version. Each element of an any[] value is passed as a JSON string in C++.\nclass Solution {\npublic:\n    vector<string> runTimeMap(vector<string>& ops, vector<string>& args) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(log N) get",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l4-s8-r2-q1": {
  "id": "goog-l4-s8-r2-q1",
  "title": "Snapshot Array With Versioned Cells",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Binary Search / Design",
  "tags": [
   "Google Round 2",
   "Design",
   "Binary Search",
   "Versioning",
   "Set 8"
  ],
  "paragraphs": [
   "Implement SnapshotArray(length): set(i, v), snap() returning the snapshot id, and get(i, snap_id). Store only changed cells per version. Return each call's result (null for set and the constructor).",
   "Round 2 is a live viva: after your code passes every test you will defend its invariants and Big-O bounds."
  ],
  "examples": [
   {
    "input": "ops = [\"SnapshotArray\",\"set\",\"snap\",\"set\",\"get\"], args = [[3],[0,5],[],[0,6],[0,0]]",
    "output": "[null,null,0,null,5]"
   },
   {
    "input": "ops = [\"SnapshotArray\",\"snap\",\"snap\",\"get\"], args = [[1],[],[],[0,1]]",
    "output": "[null,0,1,0]"
   }
  ],
  "constraints": [
   "Target O(log S) get time and O(changes) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l4-s8-r2-q1-v1",
    "input": "[\"SnapshotArray\",\"set\",\"snap\",\"set\",\"get\"]\n[[3],[0,5],[],[0,6],[0,0]]",
    "expectedOutput": "[null,null,0,null,5]"
   },
   {
    "id": "goog-l4-s8-r2-q1-v2",
    "input": "[\"SnapshotArray\",\"snap\",\"snap\",\"get\"]\n[[1],[],[],[0,1]]",
    "expectedOutput": "[null,0,1,0]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l4-s8-r2-q1-h1",
    "input": "[\"SnapshotArray\",\"set\",\"snap\",\"set\",\"snap\",\"get\",\"get\"]\n[[2],[1,9],[],[1,4],[],[1,0],[1,1]]",
    "expectedOutput": "[null,null,0,null,1,9,4]"
   },
   {
    "id": "goog-l4-s8-r2-q1-h2",
    "input": "[\"SnapshotArray\",\"snap\",\"get\"]\n[[2],[],[1,0]]",
    "expectedOutput": "[null,0,0]"
   },
   {
    "id": "goog-l4-s8-r2-q1-h3",
    "input": "[\"SnapshotArray\",\"set\",\"set\",\"snap\",\"get\"]\n[[2],[0,1],[0,2],[],[0,0]]",
    "expectedOutput": "[null,null,null,0,2]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string[]} ops\n * @param {number[][]} args\n * @return {any[]}\n */\nfunction runSnapshot(ops, args) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def runSnapshot(self, ops: List[str], args: List[List[int]]) -> list:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version. Each element of an any[] value is passed as a JSON string in C++.\nclass Solution {\npublic:\n    vector<string> runSnapshot(vector<string>& ops, vector<vector<int>>& args) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(log S) get",
   "space": "O(changes)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l4-s9-r2-q1": {
  "id": "goog-l4-s9-r2-q1",
  "title": "Mutable Range Sums With Fenwick Tree",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Binary Indexed Tree",
  "tags": [
   "Google Round 2",
   "Design",
   "Fenwick Tree",
   "Segment Tree",
   "Set 9"
  ],
  "paragraphs": [
   "Implement NumArray(nums), update(index, val) and sumRange(left, right) both in O(log N). Return each call's result (null for update and the constructor).",
   "Round 2 is a live viva: after your code passes every test you will defend its invariants and Big-O bounds."
  ],
  "examples": [
   {
    "input": "ops = [\"NumArray\",\"sumRange\",\"update\",\"sumRange\"], args = [[[1,3,5]],[0,2],[1,2],[0,2]]",
    "output": "[null,9,null,8]"
   },
   {
    "input": "ops = [\"NumArray\",\"sumRange\"], args = [[[7]],[0,0]]",
    "output": "[null,7]"
   }
  ],
  "constraints": [
   "Target O(log N) per op time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l4-s9-r2-q1-v1",
    "input": "[\"NumArray\",\"sumRange\",\"update\",\"sumRange\"]\n[[[1,3,5]],[0,2],[1,2],[0,2]]",
    "expectedOutput": "[null,9,null,8]"
   },
   {
    "id": "goog-l4-s9-r2-q1-v2",
    "input": "[\"NumArray\",\"sumRange\"]\n[[[7]],[0,0]]",
    "expectedOutput": "[null,7]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l4-s9-r2-q1-h1",
    "input": "[\"NumArray\",\"update\",\"sumRange\",\"sumRange\"]\n[[[1,2,3,4]],[0,10],[0,3],[1,2]]",
    "expectedOutput": "[null,null,19,5]"
   },
   {
    "id": "goog-l4-s9-r2-q1-h2",
    "input": "[\"NumArray\",\"sumRange\",\"sumRange\"]\n[[[-1,-2,-3]],[0,1],[1,2]]",
    "expectedOutput": "[null,-3,-5]"
   },
   {
    "id": "goog-l4-s9-r2-q1-h3",
    "input": "[\"NumArray\",\"update\",\"update\",\"sumRange\"]\n[[[0,0,0]],[1,5],[2,6],[0,2]]",
    "expectedOutput": "[null,null,null,11]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string[]} ops\n * @param {any[]} args\n * @return {any[]}\n */\nfunction runNumArray(ops, args) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def runNumArray(self, ops: List[str], args: list) -> list:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version. Each element of an any[] value is passed as a JSON string in C++.\nclass Solution {\npublic:\n    vector<string> runNumArray(vector<string>& ops, vector<string>& args) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(log N) per op",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l4-s10-r2-q1": {
  "id": "goog-l4-s10-r2-q1",
  "title": "Min Stack With Constant-Time Minimum",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Design / Stack",
  "tags": [
   "Google Round 2",
   "Design",
   "Stack",
   "Set 10"
  ],
  "paragraphs": [
   "Implement push, pop, top and getMin all in O(1). Return each call's result (null for push, pop and the constructor).",
   "Round 2 is a live viva: after your code passes every test you will defend its invariants and Big-O bounds."
  ],
  "examples": [
   {
    "input": "ops = [\"MinStack\",\"push\",\"push\",\"push\",\"getMin\",\"pop\",\"top\",\"getMin\"], args = [[],[-2],[0],[-3],[],[],[],[]]",
    "output": "[null,null,null,null,-3,null,0,-2]"
   },
   {
    "input": "ops = [\"MinStack\",\"push\",\"getMin\"], args = [[],[4],[]]",
    "output": "[null,null,4]"
   }
  ],
  "constraints": [
   "Target O(1) per op time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Code must be readable: clear names, small helpers, stated invariants."
  ],
  "visibleTestCases": [
   {
    "id": "goog-l4-s10-r2-q1-v1",
    "input": "[\"MinStack\",\"push\",\"push\",\"push\",\"getMin\",\"pop\",\"top\",\"getMin\"]\n[[],[-2],[0],[-3],[],[],[],[]]",
    "expectedOutput": "[null,null,null,null,-3,null,0,-2]"
   },
   {
    "id": "goog-l4-s10-r2-q1-v2",
    "input": "[\"MinStack\",\"push\",\"getMin\"]\n[[],[4],[]]",
    "expectedOutput": "[null,null,4]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "goog-l4-s10-r2-q1-h1",
    "input": "[\"MinStack\",\"push\",\"push\",\"getMin\",\"pop\",\"getMin\"]\n[[],[2],[1],[],[],[]]",
    "expectedOutput": "[null,null,null,1,null,2]"
   },
   {
    "id": "goog-l4-s10-r2-q1-h2",
    "input": "[\"MinStack\",\"push\",\"push\",\"pop\",\"top\"]\n[[],[3],[9],[],[]]",
    "expectedOutput": "[null,null,null,null,3]"
   },
   {
    "id": "goog-l4-s10-r2-q1-h3",
    "input": "[\"MinStack\",\"push\",\"push\",\"push\",\"getMin\"]\n[[],[5],[5],[5],[]]",
    "expectedOutput": "[null,null,null,null,5]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string[]} ops\n * @param {number[][]} args\n * @return {any[]}\n */\nfunction runMinStack(ops, args) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def runMinStack(self, ops: List[str], args: List[List[int]]) -> list:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version. Each element of an any[] value is passed as a JSON string in C++.\nclass Solution {\npublic:\n    vector<string> runMinStack(vector<string>& ops, vector<vector<int>>& args) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(1) per op",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l4-s1-r3-q1": {
  "id": "goog-l4-s1-r3-q1",
  "title": "Global Rate Limiting Service",
  "difficulty": "Hard",
  "company": "Google",
  "category": "System Architecture & Algorithms",
  "tags": [
   "Google Round 3",
   "Architecture",
   "Scale",
   "Set 1"
  ],
  "paragraphs": [
   "Google Technical Loop Round 3: System Architecture & Scaled Algorithms.",
   "Design and defend: Global Rate Limiting Service. Focus areas: Hierarchical quotas, sliding-window counters, regional failover.",
   "Structure your answer as: Requirements and Assumptions, Core Algorithm and Data Model, Scaling and Bottlenecks, Failure Modes, and Trade-offs. State complexity bounds and invariants explicitly."
  ],
  "examples": [
   {
    "input": "Architecture and algorithm walkthrough",
    "output": "Data model, complexity bounds, scaling plan, failure analysis",
    "explanation": "Evaluated on algorithmic rigor, quantified capacity reasoning and honest trade-offs. No brain teasers."
   }
  ],
  "constraints": [
   "Quantify load: QPS, data size, memory and p99 latency targets.",
   "Justify each trade-off (consistency vs availability, memory vs disk, push vs pull).",
   "Cover failure domains: node loss, network partition, overload and retries."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Architecture notes, interfaces and complexity bounds\nclass Design:\n    def __init__(self):\n        pass\n",
   "javascript": "// Architecture notes, interfaces and complexity bounds\nclass Design {\n  constructor() {}\n}\n",
   "cpp": "// Architecture notes, interfaces and complexity bounds\nclass Design {\npublic:\n    Design();\n};\n"
  },
  "optimalComplexity": {
   "time": "Stated per component (target p99 latency)",
   "space": "Horizontally partitionable"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l4-s2-r3-q1": {
  "id": "goog-l4-s2-r3-q1",
  "title": "Distributed Cron and Task Scheduler",
  "difficulty": "Hard",
  "company": "Google",
  "category": "System Architecture & Algorithms",
  "tags": [
   "Google Round 3",
   "Architecture",
   "Scale",
   "Set 2"
  ],
  "paragraphs": [
   "Google Technical Loop Round 3: System Architecture & Scaled Algorithms.",
   "Design and defend: Distributed Cron and Task Scheduler. Focus areas: Leader election, partitioned timers, at-least-once delivery.",
   "Structure your answer as: Requirements and Assumptions, Core Algorithm and Data Model, Scaling and Bottlenecks, Failure Modes, and Trade-offs. State complexity bounds and invariants explicitly."
  ],
  "examples": [
   {
    "input": "Architecture and algorithm walkthrough",
    "output": "Data model, complexity bounds, scaling plan, failure analysis",
    "explanation": "Evaluated on algorithmic rigor, quantified capacity reasoning and honest trade-offs. No brain teasers."
   }
  ],
  "constraints": [
   "Quantify load: QPS, data size, memory and p99 latency targets.",
   "Justify each trade-off (consistency vs availability, memory vs disk, push vs pull).",
   "Cover failure domains: node loss, network partition, overload and retries."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Architecture notes, interfaces and complexity bounds\nclass Design:\n    def __init__(self):\n        pass\n",
   "javascript": "// Architecture notes, interfaces and complexity bounds\nclass Design {\n  constructor() {}\n}\n",
   "cpp": "// Architecture notes, interfaces and complexity bounds\nclass Design {\npublic:\n    Design();\n};\n"
  },
  "optimalComplexity": {
   "time": "Stated per component (target p99 latency)",
   "space": "Horizontally partitionable"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l4-s3-r3-q1": {
  "id": "goog-l4-s3-r3-q1",
  "title": "Multi-Region Key-Value Store",
  "difficulty": "Hard",
  "company": "Google",
  "category": "System Architecture & Algorithms",
  "tags": [
   "Google Round 3",
   "Architecture",
   "Scale",
   "Set 3"
  ],
  "paragraphs": [
   "Google Technical Loop Round 3: System Architecture & Scaled Algorithms.",
   "Design and defend: Multi-Region Key-Value Store. Focus areas: Quorums, version vectors, anti-entropy, tunable consistency.",
   "Structure your answer as: Requirements and Assumptions, Core Algorithm and Data Model, Scaling and Bottlenecks, Failure Modes, and Trade-offs. State complexity bounds and invariants explicitly."
  ],
  "examples": [
   {
    "input": "Architecture and algorithm walkthrough",
    "output": "Data model, complexity bounds, scaling plan, failure analysis",
    "explanation": "Evaluated on algorithmic rigor, quantified capacity reasoning and honest trade-offs. No brain teasers."
   }
  ],
  "constraints": [
   "Quantify load: QPS, data size, memory and p99 latency targets.",
   "Justify each trade-off (consistency vs availability, memory vs disk, push vs pull).",
   "Cover failure domains: node loss, network partition, overload and retries."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Architecture notes, interfaces and complexity bounds\nclass Design:\n    def __init__(self):\n        pass\n",
   "javascript": "// Architecture notes, interfaces and complexity bounds\nclass Design {\n  constructor() {}\n}\n",
   "cpp": "// Architecture notes, interfaces and complexity bounds\nclass Design {\npublic:\n    Design();\n};\n"
  },
  "optimalComplexity": {
   "time": "Stated per component (target p99 latency)",
   "space": "Horizontally partitionable"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l4-s4-r3-q1": {
  "id": "goog-l4-s4-r3-q1",
  "title": "Stream Processing With Exactly-Once Semantics",
  "difficulty": "Hard",
  "company": "Google",
  "category": "System Architecture & Algorithms",
  "tags": [
   "Google Round 3",
   "Architecture",
   "Scale",
   "Set 4"
  ],
  "paragraphs": [
   "Google Technical Loop Round 3: System Architecture & Scaled Algorithms.",
   "Design and defend: Stream Processing With Exactly-Once Semantics. Focus areas: Watermarks, state stores, checkpoint recovery.",
   "Structure your answer as: Requirements and Assumptions, Core Algorithm and Data Model, Scaling and Bottlenecks, Failure Modes, and Trade-offs. State complexity bounds and invariants explicitly."
  ],
  "examples": [
   {
    "input": "Architecture and algorithm walkthrough",
    "output": "Data model, complexity bounds, scaling plan, failure analysis",
    "explanation": "Evaluated on algorithmic rigor, quantified capacity reasoning and honest trade-offs. No brain teasers."
   }
  ],
  "constraints": [
   "Quantify load: QPS, data size, memory and p99 latency targets.",
   "Justify each trade-off (consistency vs availability, memory vs disk, push vs pull).",
   "Cover failure domains: node loss, network partition, overload and retries."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Architecture notes, interfaces and complexity bounds\nclass Design:\n    def __init__(self):\n        pass\n",
   "javascript": "// Architecture notes, interfaces and complexity bounds\nclass Design {\n  constructor() {}\n}\n",
   "cpp": "// Architecture notes, interfaces and complexity bounds\nclass Design {\npublic:\n    Design();\n};\n"
  },
  "optimalComplexity": {
   "time": "Stated per component (target p99 latency)",
   "space": "Horizontally partitionable"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l4-s5-r3-q1": {
  "id": "goog-l4-s5-r3-q1",
  "title": "Tiered Distributed Cache",
  "difficulty": "Hard",
  "company": "Google",
  "category": "System Architecture & Algorithms",
  "tags": [
   "Google Round 3",
   "Architecture",
   "Scale",
   "Set 5"
  ],
  "paragraphs": [
   "Google Technical Loop Round 3: System Architecture & Scaled Algorithms.",
   "Design and defend: Tiered Distributed Cache. Focus areas: LRU/LFU hybrids, memory vs disk tiers, stampede protection.",
   "Structure your answer as: Requirements and Assumptions, Core Algorithm and Data Model, Scaling and Bottlenecks, Failure Modes, and Trade-offs. State complexity bounds and invariants explicitly."
  ],
  "examples": [
   {
    "input": "Architecture and algorithm walkthrough",
    "output": "Data model, complexity bounds, scaling plan, failure analysis",
    "explanation": "Evaluated on algorithmic rigor, quantified capacity reasoning and honest trade-offs. No brain teasers."
   }
  ],
  "constraints": [
   "Quantify load: QPS, data size, memory and p99 latency targets.",
   "Justify each trade-off (consistency vs availability, memory vs disk, push vs pull).",
   "Cover failure domains: node loss, network partition, overload and retries."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Architecture notes, interfaces and complexity bounds\nclass Design:\n    def __init__(self):\n        pass\n",
   "javascript": "// Architecture notes, interfaces and complexity bounds\nclass Design {\n  constructor() {}\n}\n",
   "cpp": "// Architecture notes, interfaces and complexity bounds\nclass Design {\npublic:\n    Design();\n};\n"
  },
  "optimalComplexity": {
   "time": "Stated per component (target p99 latency)",
   "space": "Horizontally partitionable"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l4-s6-r3-q1": {
  "id": "goog-l4-s6-r3-q1",
  "title": "Log Aggregation and Search Pipeline",
  "difficulty": "Hard",
  "company": "Google",
  "category": "System Architecture & Algorithms",
  "tags": [
   "Google Round 3",
   "Architecture",
   "Scale",
   "Set 6"
  ],
  "paragraphs": [
   "Google Technical Loop Round 3: System Architecture & Scaled Algorithms.",
   "Design and defend: Log Aggregation and Search Pipeline. Focus areas: Ingest backpressure, sharded index, hot and cold retention.",
   "Structure your answer as: Requirements and Assumptions, Core Algorithm and Data Model, Scaling and Bottlenecks, Failure Modes, and Trade-offs. State complexity bounds and invariants explicitly."
  ],
  "examples": [
   {
    "input": "Architecture and algorithm walkthrough",
    "output": "Data model, complexity bounds, scaling plan, failure analysis",
    "explanation": "Evaluated on algorithmic rigor, quantified capacity reasoning and honest trade-offs. No brain teasers."
   }
  ],
  "constraints": [
   "Quantify load: QPS, data size, memory and p99 latency targets.",
   "Justify each trade-off (consistency vs availability, memory vs disk, push vs pull).",
   "Cover failure domains: node loss, network partition, overload and retries."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Architecture notes, interfaces and complexity bounds\nclass Design:\n    def __init__(self):\n        pass\n",
   "javascript": "// Architecture notes, interfaces and complexity bounds\nclass Design {\n  constructor() {}\n}\n",
   "cpp": "// Architecture notes, interfaces and complexity bounds\nclass Design {\npublic:\n    Design();\n};\n"
  },
  "optimalComplexity": {
   "time": "Stated per component (target p99 latency)",
   "space": "Horizontally partitionable"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l4-s7-r3-q1": {
  "id": "goog-l4-s7-r3-q1",
  "title": "Distributed Lock and Lease Service",
  "difficulty": "Hard",
  "company": "Google",
  "category": "System Architecture & Algorithms",
  "tags": [
   "Google Round 3",
   "Architecture",
   "Scale",
   "Set 7"
  ],
  "paragraphs": [
   "Google Technical Loop Round 3: System Architecture & Scaled Algorithms.",
   "Design and defend: Distributed Lock and Lease Service. Focus areas: Fencing tokens, clock assumptions, split brain.",
   "Structure your answer as: Requirements and Assumptions, Core Algorithm and Data Model, Scaling and Bottlenecks, Failure Modes, and Trade-offs. State complexity bounds and invariants explicitly."
  ],
  "examples": [
   {
    "input": "Architecture and algorithm walkthrough",
    "output": "Data model, complexity bounds, scaling plan, failure analysis",
    "explanation": "Evaluated on algorithmic rigor, quantified capacity reasoning and honest trade-offs. No brain teasers."
   }
  ],
  "constraints": [
   "Quantify load: QPS, data size, memory and p99 latency targets.",
   "Justify each trade-off (consistency vs availability, memory vs disk, push vs pull).",
   "Cover failure domains: node loss, network partition, overload and retries."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Architecture notes, interfaces and complexity bounds\nclass Design:\n    def __init__(self):\n        pass\n",
   "javascript": "// Architecture notes, interfaces and complexity bounds\nclass Design {\n  constructor() {}\n}\n",
   "cpp": "// Architecture notes, interfaces and complexity bounds\nclass Design {\npublic:\n    Design();\n};\n"
  },
  "optimalComplexity": {
   "time": "Stated per component (target p99 latency)",
   "space": "Horizontally partitionable"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l4-s8-r3-q1": {
  "id": "goog-l4-s8-r3-q1",
  "title": "Failure-Domain-Aware Replica Placement",
  "difficulty": "Hard",
  "company": "Google",
  "category": "System Architecture & Algorithms",
  "tags": [
   "Google Round 3",
   "Architecture",
   "Scale",
   "Set 8"
  ],
  "paragraphs": [
   "Google Technical Loop Round 3: System Architecture & Scaled Algorithms.",
   "Design and defend: Failure-Domain-Aware Replica Placement. Focus areas: Rack and zone spread, rebalancing cost, correlated failures.",
   "Structure your answer as: Requirements and Assumptions, Core Algorithm and Data Model, Scaling and Bottlenecks, Failure Modes, and Trade-offs. State complexity bounds and invariants explicitly."
  ],
  "examples": [
   {
    "input": "Architecture and algorithm walkthrough",
    "output": "Data model, complexity bounds, scaling plan, failure analysis",
    "explanation": "Evaluated on algorithmic rigor, quantified capacity reasoning and honest trade-offs. No brain teasers."
   }
  ],
  "constraints": [
   "Quantify load: QPS, data size, memory and p99 latency targets.",
   "Justify each trade-off (consistency vs availability, memory vs disk, push vs pull).",
   "Cover failure domains: node loss, network partition, overload and retries."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Architecture notes, interfaces and complexity bounds\nclass Design:\n    def __init__(self):\n        pass\n",
   "javascript": "// Architecture notes, interfaces and complexity bounds\nclass Design {\n  constructor() {}\n}\n",
   "cpp": "// Architecture notes, interfaces and complexity bounds\nclass Design {\npublic:\n    Design();\n};\n"
  },
  "optimalComplexity": {
   "time": "Stated per component (target p99 latency)",
   "space": "Horizontally partitionable"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l4-s9-r3-q1": {
  "id": "goog-l4-s9-r3-q1",
  "title": "Global Load Balancing and Overload Control",
  "difficulty": "Hard",
  "company": "Google",
  "category": "System Architecture & Algorithms",
  "tags": [
   "Google Round 3",
   "Architecture",
   "Scale",
   "Set 9"
  ],
  "paragraphs": [
   "Google Technical Loop Round 3: System Architecture & Scaled Algorithms.",
   "Design and defend: Global Load Balancing and Overload Control. Focus areas: Health checks, gradual rollout, load shedding, retries.",
   "Structure your answer as: Requirements and Assumptions, Core Algorithm and Data Model, Scaling and Bottlenecks, Failure Modes, and Trade-offs. State complexity bounds and invariants explicitly."
  ],
  "examples": [
   {
    "input": "Architecture and algorithm walkthrough",
    "output": "Data model, complexity bounds, scaling plan, failure analysis",
    "explanation": "Evaluated on algorithmic rigor, quantified capacity reasoning and honest trade-offs. No brain teasers."
   }
  ],
  "constraints": [
   "Quantify load: QPS, data size, memory and p99 latency targets.",
   "Justify each trade-off (consistency vs availability, memory vs disk, push vs pull).",
   "Cover failure domains: node loss, network partition, overload and retries."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Architecture notes, interfaces and complexity bounds\nclass Design:\n    def __init__(self):\n        pass\n",
   "javascript": "// Architecture notes, interfaces and complexity bounds\nclass Design {\n  constructor() {}\n}\n",
   "cpp": "// Architecture notes, interfaces and complexity bounds\nclass Design {\npublic:\n    Design();\n};\n"
  },
  "optimalComplexity": {
   "time": "Stated per component (target p99 latency)",
   "space": "Horizontally partitionable"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l4-s10-r3-q1": {
  "id": "goog-l4-s10-r3-q1",
  "title": "Large-Scale Sort and Shuffle Service",
  "difficulty": "Hard",
  "company": "Google",
  "category": "System Architecture & Algorithms",
  "tags": [
   "Google Round 3",
   "Architecture",
   "Scale",
   "Set 10"
  ],
  "paragraphs": [
   "Google Technical Loop Round 3: System Architecture & Scaled Algorithms.",
   "Design and defend: Large-Scale Sort and Shuffle Service. Focus areas: Spill to disk, partition skew, stragglers, speculation.",
   "Structure your answer as: Requirements and Assumptions, Core Algorithm and Data Model, Scaling and Bottlenecks, Failure Modes, and Trade-offs. State complexity bounds and invariants explicitly."
  ],
  "examples": [
   {
    "input": "Architecture and algorithm walkthrough",
    "output": "Data model, complexity bounds, scaling plan, failure analysis",
    "explanation": "Evaluated on algorithmic rigor, quantified capacity reasoning and honest trade-offs. No brain teasers."
   }
  ],
  "constraints": [
   "Quantify load: QPS, data size, memory and p99 latency targets.",
   "Justify each trade-off (consistency vs availability, memory vs disk, push vs pull).",
   "Cover failure domains: node loss, network partition, overload and retries."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Architecture notes, interfaces and complexity bounds\nclass Design:\n    def __init__(self):\n        pass\n",
   "javascript": "// Architecture notes, interfaces and complexity bounds\nclass Design {\n  constructor() {}\n}\n",
   "cpp": "// Architecture notes, interfaces and complexity bounds\nclass Design {\npublic:\n    Design();\n};\n"
  },
  "optimalComplexity": {
   "time": "Stated per component (target p99 latency)",
   "space": "Horizontally partitionable"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l4-s1-r4-q1": {
  "id": "goog-l4-s1-r4-q1",
  "title": "Resolving a Cross-Team Architecture Deadlock",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Googleyness & Leadership",
  "tags": [
   "Googleyness",
   "Leadership",
   "Thriving in Ambiguity / Intellectual Humility",
   "Set 1"
  ],
  "paragraphs": [
   "Google Googleyness & Leadership evaluation. Core pillars: Thriving in Ambiguity, Intellectual Humility, Bias to Action, Doing the Right Thing.",
   "Scenario: You are the tech lead for this area and the team and partner teams expect you to drive the decision. Two partner teams each insist on a different design for a shared pipeline interface. Neither will compromise and the launch review is two weeks away.",
   "Explain how you would handle it, what you would do first, how you would decide with incomplete information, and what you would do if you turned out to be wrong."
  ],
  "examples": [
   {
    "input": "Core Evaluation Pillars",
    "output": "Thriving in Ambiguity | Intellectual Humility | Bias to Action | Doing the Right Thing",
    "explanation": "Use concrete personal actions ('I'), show how you weighed evidence, and name the trade-offs honestly."
   }
  ],
  "constraints": [
   "Be specific about your own actions, not just the team's.",
   "Show intellectual humility and a willingness to change your mind.",
   "Describe how you would measure success and reduce team friction."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Googleyness & Leadership\n// Pillar focus: Thriving in Ambiguity / Intellectual Humility\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "javascript": "// Round 4: Googleyness & Leadership\n// Pillar focus: Thriving in Ambiguity / Intellectual Humility\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "python": "# Round 4: Googleyness & Leadership\n# Pillar focus: Thriving in Ambiguity / Intellectual Humility\n# Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "cpp": "// Round 4: Googleyness & Leadership\n// Pillar focus: Thriving in Ambiguity / Intellectual Humility\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n"
  },
  "optimalComplexity": {
   "time": "N/A (Googleyness evaluation)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l4-s2-r4-q1": {
  "id": "goog-l4-s2-r4-q1",
  "title": "Telemetry Value vs User Privacy",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Googleyness & Leadership",
  "tags": [
   "Googleyness",
   "Leadership",
   "Doing the Right Thing",
   "Set 2"
  ],
  "paragraphs": [
   "Google Googleyness & Leadership evaluation. Core pillars: Thriving in Ambiguity, Intellectual Humility, Bias to Action, Doing the Right Thing.",
   "Scenario: You are the tech lead for this area and the team and partner teams expect you to drive the decision. A dashboard feature would be far more useful if per-user events were kept longer than the documented retention policy. Product wants to ship it.",
   "Explain how you would handle it, what you would do first, how you would decide with incomplete information, and what you would do if you turned out to be wrong."
  ],
  "examples": [
   {
    "input": "Core Evaluation Pillars",
    "output": "Thriving in Ambiguity | Intellectual Humility | Bias to Action | Doing the Right Thing",
    "explanation": "Use concrete personal actions ('I'), show how you weighed evidence, and name the trade-offs honestly."
   }
  ],
  "constraints": [
   "Be specific about your own actions, not just the team's.",
   "Show intellectual humility and a willingness to change your mind.",
   "Describe how you would measure success and reduce team friction."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Googleyness & Leadership\n// Pillar focus: Doing the Right Thing\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "javascript": "// Round 4: Googleyness & Leadership\n// Pillar focus: Doing the Right Thing\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "python": "# Round 4: Googleyness & Leadership\n# Pillar focus: Doing the Right Thing\n# Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "cpp": "// Round 4: Googleyness & Leadership\n// Pillar focus: Doing the Right Thing\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n"
  },
  "optimalComplexity": {
   "time": "N/A (Googleyness evaluation)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l4-s3-r4-q1": {
  "id": "goog-l4-s3-r4-q1",
  "title": "Dependency Failure Before the Quarterly Freeze",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Googleyness & Leadership",
  "tags": [
   "Googleyness",
   "Leadership",
   "Bias to Action",
   "Set 3"
  ],
  "paragraphs": [
   "Google Googleyness & Leadership evaluation. Core pillars: Thriving in Ambiguity, Intellectual Humility, Bias to Action, Doing the Right Thing.",
   "Scenario: You are the tech lead for this area and the team and partner teams expect you to drive the decision. A multi-tenant dependency owned by another team starts failing intermittently three days before the code freeze, and its owners are unreachable.",
   "Explain how you would handle it, what you would do first, how you would decide with incomplete information, and what you would do if you turned out to be wrong."
  ],
  "examples": [
   {
    "input": "Core Evaluation Pillars",
    "output": "Thriving in Ambiguity | Intellectual Humility | Bias to Action | Doing the Right Thing",
    "explanation": "Use concrete personal actions ('I'), show how you weighed evidence, and name the trade-offs honestly."
   }
  ],
  "constraints": [
   "Be specific about your own actions, not just the team's.",
   "Show intellectual humility and a willingness to change your mind.",
   "Describe how you would measure success and reduce team friction."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Googleyness & Leadership\n// Pillar focus: Bias to Action\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "javascript": "// Round 4: Googleyness & Leadership\n// Pillar focus: Bias to Action\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "python": "# Round 4: Googleyness & Leadership\n# Pillar focus: Bias to Action\n# Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "cpp": "// Round 4: Googleyness & Leadership\n// Pillar focus: Bias to Action\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n"
  },
  "optimalComplexity": {
   "time": "N/A (Googleyness evaluation)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l4-s4-r4-q1": {
  "id": "goog-l4-s4-r4-q1",
  "title": "10x Velocity vs Zero-Downtime Reliability",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Googleyness & Leadership",
  "tags": [
   "Googleyness",
   "Leadership",
   "Bias to Action / Doing the Right Thing",
   "Set 4"
  ],
  "paragraphs": [
   "Google Googleyness & Leadership evaluation. Core pillars: Thriving in Ambiguity, Intellectual Humility, Bias to Action, Doing the Right Thing.",
   "Scenario: You are the tech lead for this area and the team and partner teams expect you to drive the decision. Leadership wants to double shipping velocity, but the faster cadence is steadily burning your service's error budget.",
   "Explain how you would handle it, what you would do first, how you would decide with incomplete information, and what you would do if you turned out to be wrong."
  ],
  "examples": [
   {
    "input": "Core Evaluation Pillars",
    "output": "Thriving in Ambiguity | Intellectual Humility | Bias to Action | Doing the Right Thing",
    "explanation": "Use concrete personal actions ('I'), show how you weighed evidence, and name the trade-offs honestly."
   }
  ],
  "constraints": [
   "Be specific about your own actions, not just the team's.",
   "Show intellectual humility and a willingness to change your mind.",
   "Describe how you would measure success and reduce team friction."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Googleyness & Leadership\n// Pillar focus: Bias to Action / Doing the Right Thing\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "javascript": "// Round 4: Googleyness & Leadership\n// Pillar focus: Bias to Action / Doing the Right Thing\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "python": "# Round 4: Googleyness & Leadership\n# Pillar focus: Bias to Action / Doing the Right Thing\n# Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "cpp": "// Round 4: Googleyness & Leadership\n// Pillar focus: Bias to Action / Doing the Right Thing\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n"
  },
  "optimalComplexity": {
   "time": "N/A (Googleyness evaluation)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l4-s5-r4-q1": {
  "id": "goog-l4-s5-r4-q1",
  "title": "Being Proven Wrong in a Design Review",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Googleyness & Leadership",
  "tags": [
   "Googleyness",
   "Leadership",
   "Intellectual Humility",
   "Set 5"
  ],
  "paragraphs": [
   "Google Googleyness & Leadership evaluation. Core pillars: Thriving in Ambiguity, Intellectual Humility, Bias to Action, Doing the Right Thing.",
   "Scenario: You are the tech lead for this area and the team and partner teams expect you to drive the decision. After you present a design, a colleague shows data suggesting your core assumption is wrong, in front of senior stakeholders.",
   "Explain how you would handle it, what you would do first, how you would decide with incomplete information, and what you would do if you turned out to be wrong."
  ],
  "examples": [
   {
    "input": "Core Evaluation Pillars",
    "output": "Thriving in Ambiguity | Intellectual Humility | Bias to Action | Doing the Right Thing",
    "explanation": "Use concrete personal actions ('I'), show how you weighed evidence, and name the trade-offs honestly."
   }
  ],
  "constraints": [
   "Be specific about your own actions, not just the team's.",
   "Show intellectual humility and a willingness to change your mind.",
   "Describe how you would measure success and reduce team friction."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Googleyness & Leadership\n// Pillar focus: Intellectual Humility\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "javascript": "// Round 4: Googleyness & Leadership\n// Pillar focus: Intellectual Humility\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "python": "# Round 4: Googleyness & Leadership\n# Pillar focus: Intellectual Humility\n# Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "cpp": "// Round 4: Googleyness & Leadership\n// Pillar focus: Intellectual Humility\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n"
  },
  "optimalComplexity": {
   "time": "N/A (Googleyness evaluation)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l4-s6-r4-q1": {
  "id": "goog-l4-s6-r4-q1",
  "title": "A Vague Mandate With No Spec",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Googleyness & Leadership",
  "tags": [
   "Googleyness",
   "Leadership",
   "Thriving in Ambiguity",
   "Set 6"
  ],
  "paragraphs": [
   "Google Googleyness & Leadership evaluation. Core pillars: Thriving in Ambiguity, Intellectual Humility, Bias to Action, Doing the Right Thing.",
   "Scenario: You are the tech lead for this area and the team and partner teams expect you to drive the decision. You are handed the one-line goal 'make onboarding faster' with no metrics, no owner and no specification.",
   "Explain how you would handle it, what you would do first, how you would decide with incomplete information, and what you would do if you turned out to be wrong."
  ],
  "examples": [
   {
    "input": "Core Evaluation Pillars",
    "output": "Thriving in Ambiguity | Intellectual Humility | Bias to Action | Doing the Right Thing",
    "explanation": "Use concrete personal actions ('I'), show how you weighed evidence, and name the trade-offs honestly."
   }
  ],
  "constraints": [
   "Be specific about your own actions, not just the team's.",
   "Show intellectual humility and a willingness to change your mind.",
   "Describe how you would measure success and reduce team friction."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Googleyness & Leadership\n// Pillar focus: Thriving in Ambiguity\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "javascript": "// Round 4: Googleyness & Leadership\n// Pillar focus: Thriving in Ambiguity\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "python": "# Round 4: Googleyness & Leadership\n# Pillar focus: Thriving in Ambiguity\n# Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "cpp": "// Round 4: Googleyness & Leadership\n// Pillar focus: Thriving in Ambiguity\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n"
  },
  "optimalComplexity": {
   "time": "N/A (Googleyness evaluation)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l4-s7-r4-q1": {
  "id": "goog-l4-s7-r4-q1",
  "title": "A Silent Data Inconsistency You Inherited",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Googleyness & Leadership",
  "tags": [
   "Googleyness",
   "Leadership",
   "Ownership / Doing the Right Thing",
   "Set 7"
  ],
  "paragraphs": [
   "Google Googleyness & Leadership evaluation. Core pillars: Thriving in Ambiguity, Intellectual Humility, Bias to Action, Doing the Right Thing.",
   "Scenario: You are the tech lead for this area and the team and partner teams expect you to drive the decision. You discover a long-standing silent data inconsistency in a system you just inherited. Fixing it will expose past errors to customers.",
   "Explain how you would handle it, what you would do first, how you would decide with incomplete information, and what you would do if you turned out to be wrong."
  ],
  "examples": [
   {
    "input": "Core Evaluation Pillars",
    "output": "Thriving in Ambiguity | Intellectual Humility | Bias to Action | Doing the Right Thing",
    "explanation": "Use concrete personal actions ('I'), show how you weighed evidence, and name the trade-offs honestly."
   }
  ],
  "constraints": [
   "Be specific about your own actions, not just the team's.",
   "Show intellectual humility and a willingness to change your mind.",
   "Describe how you would measure success and reduce team friction."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Googleyness & Leadership\n// Pillar focus: Ownership / Doing the Right Thing\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "javascript": "// Round 4: Googleyness & Leadership\n// Pillar focus: Ownership / Doing the Right Thing\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "python": "# Round 4: Googleyness & Leadership\n# Pillar focus: Ownership / Doing the Right Thing\n# Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "cpp": "// Round 4: Googleyness & Leadership\n// Pillar focus: Ownership / Doing the Right Thing\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n"
  },
  "optimalComplexity": {
   "time": "N/A (Googleyness evaluation)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l4-s8-r4-q1": {
  "id": "goog-l4-s8-r4-q1",
  "title": "A Blocked Teammate Who Has Not Asked for Help",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Googleyness & Leadership",
  "tags": [
   "Googleyness",
   "Leadership",
   "Collaboration / Bias to Action",
   "Set 8"
  ],
  "paragraphs": [
   "Google Googleyness & Leadership evaluation. Core pillars: Thriving in Ambiguity, Intellectual Humility, Bias to Action, Doing the Right Thing.",
   "Scenario: You are the tech lead for this area and the team and partner teams expect you to drive the decision. A teammate's module is behind schedule and blocking others, and they have not raised the problem or asked for help.",
   "Explain how you would handle it, what you would do first, how you would decide with incomplete information, and what you would do if you turned out to be wrong."
  ],
  "examples": [
   {
    "input": "Core Evaluation Pillars",
    "output": "Thriving in Ambiguity | Intellectual Humility | Bias to Action | Doing the Right Thing",
    "explanation": "Use concrete personal actions ('I'), show how you weighed evidence, and name the trade-offs honestly."
   }
  ],
  "constraints": [
   "Be specific about your own actions, not just the team's.",
   "Show intellectual humility and a willingness to change your mind.",
   "Describe how you would measure success and reduce team friction."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Googleyness & Leadership\n// Pillar focus: Collaboration / Bias to Action\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "javascript": "// Round 4: Googleyness & Leadership\n// Pillar focus: Collaboration / Bias to Action\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "python": "# Round 4: Googleyness & Leadership\n# Pillar focus: Collaboration / Bias to Action\n# Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "cpp": "// Round 4: Googleyness & Leadership\n// Pillar focus: Collaboration / Bias to Action\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n"
  },
  "optimalComplexity": {
   "time": "N/A (Googleyness evaluation)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l4-s9-r4-q1": {
  "id": "goog-l4-s9-r4-q1",
  "title": "A Deadline Shortcut With Misleading Numbers",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Googleyness & Leadership",
  "tags": [
   "Googleyness",
   "Leadership",
   "Doing the Right Thing",
   "Set 9"
  ],
  "paragraphs": [
   "Google Googleyness & Leadership evaluation. Core pillars: Thriving in Ambiguity, Intellectual Humility, Bias to Action, Doing the Right Thing.",
   "Scenario: You are the tech lead for this area and the team and partner teams expect you to drive the decision. A deadline-driven shortcut would ship a feature whose customer-visible numbers are misleading. Everyone is exhausted and the date is fixed.",
   "Explain how you would handle it, what you would do first, how you would decide with incomplete information, and what you would do if you turned out to be wrong."
  ],
  "examples": [
   {
    "input": "Core Evaluation Pillars",
    "output": "Thriving in Ambiguity | Intellectual Humility | Bias to Action | Doing the Right Thing",
    "explanation": "Use concrete personal actions ('I'), show how you weighed evidence, and name the trade-offs honestly."
   }
  ],
  "constraints": [
   "Be specific about your own actions, not just the team's.",
   "Show intellectual humility and a willingness to change your mind.",
   "Describe how you would measure success and reduce team friction."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Googleyness & Leadership\n// Pillar focus: Doing the Right Thing\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "javascript": "// Round 4: Googleyness & Leadership\n// Pillar focus: Doing the Right Thing\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "python": "# Round 4: Googleyness & Leadership\n# Pillar focus: Doing the Right Thing\n# Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "cpp": "// Round 4: Googleyness & Leadership\n// Pillar focus: Doing the Right Thing\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n"
  },
  "optimalComplexity": {
   "time": "N/A (Googleyness evaluation)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "goog-l4-s10-r4-q1": {
  "id": "goog-l4-s10-r4-q1",
  "title": "Disagreeing With a Senior Decision",
  "difficulty": "Medium",
  "company": "Google",
  "category": "Googleyness & Leadership",
  "tags": [
   "Googleyness",
   "Leadership",
   "Intellectual Humility / Courage",
   "Set 10"
  ],
  "paragraphs": [
   "Google Googleyness & Leadership evaluation. Core pillars: Thriving in Ambiguity, Intellectual Humility, Bias to Action, Doing the Right Thing.",
   "Scenario: You are the tech lead for this area and the team and partner teams expect you to drive the decision. A director picks a technical direction you believe is wrong for users, and the decision has already been announced.",
   "Explain how you would handle it, what you would do first, how you would decide with incomplete information, and what you would do if you turned out to be wrong."
  ],
  "examples": [
   {
    "input": "Core Evaluation Pillars",
    "output": "Thriving in Ambiguity | Intellectual Humility | Bias to Action | Doing the Right Thing",
    "explanation": "Use concrete personal actions ('I'), show how you weighed evidence, and name the trade-offs honestly."
   }
  ],
  "constraints": [
   "Be specific about your own actions, not just the team's.",
   "Show intellectual humility and a willingness to change your mind.",
   "Describe how you would measure success and reduce team friction."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Googleyness & Leadership\n// Pillar focus: Intellectual Humility / Courage\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "javascript": "// Round 4: Googleyness & Leadership\n// Pillar focus: Intellectual Humility / Courage\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "python": "# Round 4: Googleyness & Leadership\n# Pillar focus: Intellectual Humility / Courage\n# Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n",
   "cpp": "// Round 4: Googleyness & Leadership\n// Pillar focus: Intellectual Humility / Courage\n// Answer verbally or in structured notes (situation, your actions, trade-offs, result, what you learned).\n"
  },
  "optimalComplexity": {
   "time": "N/A (Googleyness evaluation)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 }
};
