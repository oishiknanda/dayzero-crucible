import { ProblemDefinition } from "../../types";

// GENERATED. 3 roles x 10 sets x (R1: 2 tasks, R2/R3/R4: 1 problem each).
export const ZOMATO_ALL_PROBLEMS: Record<string, ProblemDefinition> = {
 "zom-intern-s1-r1-q1": {
  "id": "zom-intern-s1-r1-q1",
  "title": "First Duplicate Order ID",
  "difficulty": "Easy",
  "company": "Zomato",
  "category": "Hash Set",
  "tags": [
   "Zomato Round 1",
   "Hash Table",
   "Set 1"
  ],
  "paragraphs": [
   "Return the first order id that appears a second time while scanning left to right, or -1 if all ids are unique."
  ],
  "examples": [
   {
    "input": "orderIds = [4,2,7,2,4]",
    "output": "2"
   },
   {
    "input": "orderIds = [1,2,3]",
    "output": "-1"
   }
  ],
  "constraints": [
   "Target O(N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-intern-s1-r1-q1-v1",
    "input": "[4,2,7,2,4]",
    "expectedOutput": "2"
   },
   {
    "id": "zom-intern-s1-r1-q1-v2",
    "input": "[1,2,3]",
    "expectedOutput": "-1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-intern-s1-r1-q1-h1",
    "input": "[]",
    "expectedOutput": "-1"
   },
   {
    "id": "zom-intern-s1-r1-q1-h2",
    "input": "[9,9]",
    "expectedOutput": "9"
   },
   {
    "id": "zom-intern-s1-r1-q1-h3",
    "input": "[5,6,7,8,6,5]",
    "expectedOutput": "6"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} orderIds\n * @return {number}\n */\nfunction firstDuplicate(orderIds) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def firstDuplicate(self, orderIds: List[int]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int firstDuplicate(vector<int>& orderIds) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "zom-intern-s1-r1-q2"
 },
 "zom-intern-s1-r1-q2": {
  "id": "zom-intern-s1-r1-q2",
  "title": "Majority Cuisine Choice",
  "difficulty": "Easy",
  "company": "Zomato",
  "category": "Boyer-Moore",
  "tags": [
   "Zomato Round 1",
   "Array",
   "Counting",
   "Set 1"
  ],
  "paragraphs": [
   "Return the value that appears more than N/2 times, or -1 if no such value exists. Aim for O(1) extra space."
  ],
  "examples": [
   {
    "input": "nums = [3,2,3]",
    "output": "3"
   },
   {
    "input": "nums = [2,2,1,1,1,2,2]",
    "output": "2"
   }
  ],
  "constraints": [
   "Target O(N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-intern-s1-r1-q2-v1",
    "input": "[3,2,3]",
    "expectedOutput": "3"
   },
   {
    "id": "zom-intern-s1-r1-q2-v2",
    "input": "[2,2,1,1,1,2,2]",
    "expectedOutput": "2"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-intern-s1-r1-q2-h1",
    "input": "[1,2,3]",
    "expectedOutput": "-1"
   },
   {
    "id": "zom-intern-s1-r1-q2-h2",
    "input": "[7]",
    "expectedOutput": "7"
   },
   {
    "id": "zom-intern-s1-r1-q2-h3",
    "input": "[1,1,2,2]",
    "expectedOutput": "-1"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @return {number}\n */\nfunction majorityElement(nums) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def majorityElement(self, nums: List[int]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int majorityElement(vector<int>& nums) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "zom-intern-s2-r1-q1": {
  "id": "zom-intern-s2-r1-q1",
  "title": "Repeat Order Within K Minutes",
  "difficulty": "Easy",
  "company": "Zomato",
  "category": "Hash Table",
  "tags": [
   "Zomato Round 1",
   "Hash Table",
   "Sliding Window",
   "Set 2"
  ],
  "paragraphs": [
   "Return true if some value appears twice with the two positions at most k apart."
  ],
  "examples": [
   {
    "input": "nums = [1,2,3,1], k = 3",
    "output": "true"
   },
   {
    "input": "nums = [1,0,1,1], k = 1",
    "output": "true"
   }
  ],
  "constraints": [
   "Target O(N) time and O(K) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-intern-s2-r1-q1-v1",
    "input": "[1,2,3,1]\n3",
    "expectedOutput": "true"
   },
   {
    "id": "zom-intern-s2-r1-q1-v2",
    "input": "[1,0,1,1]\n1",
    "expectedOutput": "true"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-intern-s2-r1-q1-h1",
    "input": "[1,2,3,1,2,3]\n2",
    "expectedOutput": "false"
   },
   {
    "id": "zom-intern-s2-r1-q1-h2",
    "input": "[]\n5",
    "expectedOutput": "false"
   },
   {
    "id": "zom-intern-s2-r1-q1-h3",
    "input": "[7,7]\n0",
    "expectedOutput": "false"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @param {number} k\n * @return {boolean}\n */\nfunction containsNearbyDuplicate(nums, k) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    bool containsNearbyDuplicate(vector<int>& nums, int k) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(K)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "zom-intern-s2-r1-q2"
 },
 "zom-intern-s2-r1-q2": {
  "id": "zom-intern-s2-r1-q2",
  "title": "Merge Two Sorted Menus",
  "difficulty": "Easy",
  "company": "Zomato",
  "category": "Two Pointers",
  "tags": [
   "Zomato Round 1",
   "Two Pointers",
   "Merge",
   "Set 2"
  ],
  "paragraphs": [
   "Merge two sorted price arrays into one sorted array using a two-pointer merge."
  ],
  "examples": [
   {
    "input": "a = [1,3,5], b = [2,4,6]",
    "output": "[1,2,3,4,5,6]"
   },
   {
    "input": "a = [], b = [1]",
    "output": "[1]"
   }
  ],
  "constraints": [
   "Target O(N+M) time and O(N+M) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-intern-s2-r1-q2-v1",
    "input": "[1,3,5]\n[2,4,6]",
    "expectedOutput": "[1,2,3,4,5,6]"
   },
   {
    "id": "zom-intern-s2-r1-q2-v2",
    "input": "[]\n[1]",
    "expectedOutput": "[1]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-intern-s2-r1-q2-h1",
    "input": "[1,1]\n[1]",
    "expectedOutput": "[1,1,1]"
   },
   {
    "id": "zom-intern-s2-r1-q2-h2",
    "input": "[5,6]\n[1,2]",
    "expectedOutput": "[1,2,5,6]"
   },
   {
    "id": "zom-intern-s2-r1-q2-h3",
    "input": "[0]\n[]",
    "expectedOutput": "[0]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} a\n * @param {number[]} b\n * @return {number[]}\n */\nfunction mergeSorted(a, b) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def mergeSorted(self, a: List[int], b: List[int]) -> List[int]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<int> mergeSorted(vector<int>& a, vector<int>& b) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N+M)",
   "space": "O(N+M)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "zom-intern-s3-r1-q1": {
  "id": "zom-intern-s3-r1-q1",
  "title": "Customers Common to Two Cities",
  "difficulty": "Easy",
  "company": "Zomato",
  "category": "Hash Set",
  "tags": [
   "Zomato Round 1",
   "Hash Table",
   "Sorting",
   "Set 3"
  ],
  "paragraphs": [
   "Return the sorted distinct values present in both arrays."
  ],
  "examples": [
   {
    "input": "a = [1,2,2,1], b = [2,2]",
    "output": "[2]"
   },
   {
    "input": "a = [4,9,5], b = [9,4,9,8,4]",
    "output": "[4,9]"
   }
  ],
  "constraints": [
   "Target O(N+M) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-intern-s3-r1-q1-v1",
    "input": "[1,2,2,1]\n[2,2]",
    "expectedOutput": "[2]"
   },
   {
    "id": "zom-intern-s3-r1-q1-v2",
    "input": "[4,9,5]\n[9,4,9,8,4]",
    "expectedOutput": "[4,9]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-intern-s3-r1-q1-h1",
    "input": "[1]\n[2]",
    "expectedOutput": "[]"
   },
   {
    "id": "zom-intern-s3-r1-q1-h2",
    "input": "[]\n[1]",
    "expectedOutput": "[]"
   },
   {
    "id": "zom-intern-s3-r1-q1-h3",
    "input": "[3,3,3]\n[3]",
    "expectedOutput": "[3]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} a\n * @param {number[]} b\n * @return {number[]}\n */\nfunction intersection(a, b) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def intersection(self, a: List[int], b: List[int]) -> List[int]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<int> intersection(vector<int>& a, vector<int>& b) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N+M)",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "zom-intern-s3-r1-q2"
 },
 "zom-intern-s3-r1-q2": {
  "id": "zom-intern-s3-r1-q2",
  "title": "Largest Delivery Zone Area",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Two Pointers",
  "tags": [
   "Zomato Round 1",
   "Two Pointers",
   "Greedy",
   "Set 3"
  ],
  "paragraphs": [
   "Each value is a wall height at position i. Return the largest area (width times the shorter wall) between any two walls."
  ],
  "examples": [
   {
    "input": "height = [1,8,6,2,5,4,8,3,7]",
    "output": "49"
   },
   {
    "input": "height = [1,1]",
    "output": "1"
   }
  ],
  "constraints": [
   "Target O(N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-intern-s3-r1-q2-v1",
    "input": "[1,8,6,2,5,4,8,3,7]",
    "expectedOutput": "49"
   },
   {
    "id": "zom-intern-s3-r1-q2-v2",
    "input": "[1,1]",
    "expectedOutput": "1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-intern-s3-r1-q2-h1",
    "input": "[4,3,2,1,4]",
    "expectedOutput": "16"
   },
   {
    "id": "zom-intern-s3-r1-q2-h2",
    "input": "[1,2,1]",
    "expectedOutput": "2"
   },
   {
    "id": "zom-intern-s3-r1-q2-h3",
    "input": "[2,3,4,5,18,17,6]",
    "expectedOutput": "17"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} height\n * @return {number}\n */\nfunction maxArea(height) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def maxArea(self, height: List[int]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int maxArea(vector<int>& height) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "zom-intern-s4-r1-q1": {
  "id": "zom-intern-s4-r1-q1",
  "title": "Zero-Net Combo Triples",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Two Pointers",
  "tags": [
   "Zomato Round 1",
   "Two Pointers",
   "Sorting",
   "Set 4"
  ],
  "paragraphs": [
   "Return all unique triplets [a, b, c] with a + b + c = 0, each triplet sorted ascending and the list sorted."
  ],
  "examples": [
   {
    "input": "nums = [-1,0,1,2,-1,-4]",
    "output": "[[-1,-1,2],[-1,0,1]]"
   },
   {
    "input": "nums = [0,1,1]",
    "output": "[]"
   }
  ],
  "constraints": [
   "Target O(N^2) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-intern-s4-r1-q1-v1",
    "input": "[-1,0,1,2,-1,-4]",
    "expectedOutput": "[[-1,-1,2],[-1,0,1]]"
   },
   {
    "id": "zom-intern-s4-r1-q1-v2",
    "input": "[0,1,1]",
    "expectedOutput": "[]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-intern-s4-r1-q1-h1",
    "input": "[0,0,0]",
    "expectedOutput": "[[0,0,0]]"
   },
   {
    "id": "zom-intern-s4-r1-q1-h2",
    "input": "[-2,0,1,1,2]",
    "expectedOutput": "[[-2,0,2],[-2,1,1]]"
   },
   {
    "id": "zom-intern-s4-r1-q1-h3",
    "input": "[]",
    "expectedOutput": "[]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @return {number[][]}\n */\nfunction threeSum(nums) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def threeSum(self, nums: List[int]) -> List[List[int]]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<vector<int>> threeSum(vector<int>& nums) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N^2)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "zom-intern-s4-r1-q2"
 },
 "zom-intern-s4-r1-q2": {
  "id": "zom-intern-s4-r1-q2",
  "title": "Sort Order Priorities 0-1-2",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Two Pointers",
  "tags": [
   "Zomato Round 1",
   "Array",
   "Sorting",
   "Set 4"
  ],
  "paragraphs": [
   "Values are 0, 1 or 2. Sort the array in place order (all 0s, then 1s, then 2s) in one pass and return it."
  ],
  "examples": [
   {
    "input": "nums = [2,0,2,1,1,0]",
    "output": "[0,0,1,1,2,2]"
   },
   {
    "input": "nums = [2,0,1]",
    "output": "[0,1,2]"
   }
  ],
  "constraints": [
   "Target O(N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-intern-s4-r1-q2-v1",
    "input": "[2,0,2,1,1,0]",
    "expectedOutput": "[0,0,1,1,2,2]"
   },
   {
    "id": "zom-intern-s4-r1-q2-v2",
    "input": "[2,0,1]",
    "expectedOutput": "[0,1,2]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-intern-s4-r1-q2-h1",
    "input": "[0]",
    "expectedOutput": "[0]"
   },
   {
    "id": "zom-intern-s4-r1-q2-h2",
    "input": "[1,1,0,2,2,1]",
    "expectedOutput": "[0,1,1,1,2,2]"
   },
   {
    "id": "zom-intern-s4-r1-q2-h3",
    "input": "[2,2,2]",
    "expectedOutput": "[2,2,2]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @return {number[]}\n */\nfunction sortPriorities(nums) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def sortPriorities(self, nums: List[int]) -> List[int]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<int> sortPriorities(vector<int>& nums) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "zom-intern-s5-r1-q1": {
  "id": "zom-intern-s5-r1-q1",
  "title": "Next Order Number",
  "difficulty": "Easy",
  "company": "Zomato",
  "category": "Array",
  "tags": [
   "Zomato Round 1",
   "Array",
   "Math",
   "Set 5"
  ],
  "paragraphs": [
   "The array holds the decimal digits of a non-negative number (most significant first). Return the digits of that number plus one."
  ],
  "examples": [
   {
    "input": "digits = [1,2,3]",
    "output": "[1,2,4]"
   },
   {
    "input": "digits = [9,9]",
    "output": "[1,0,0]"
   }
  ],
  "constraints": [
   "Target O(N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-intern-s5-r1-q1-v1",
    "input": "[1,2,3]",
    "expectedOutput": "[1,2,4]"
   },
   {
    "id": "zom-intern-s5-r1-q1-v2",
    "input": "[9,9]",
    "expectedOutput": "[1,0,0]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-intern-s5-r1-q1-h1",
    "input": "[0]",
    "expectedOutput": "[1]"
   },
   {
    "id": "zom-intern-s5-r1-q1-h2",
    "input": "[4,3,2,9]",
    "expectedOutput": "[4,3,3,0]"
   },
   {
    "id": "zom-intern-s5-r1-q1-h3",
    "input": "[1,9,9]",
    "expectedOutput": "[2,0,0]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} digits\n * @return {number[]}\n */\nfunction plusOne(digits) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def plusOne(self, digits: List[int]) -> List[int]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<int> plusOne(vector<int>& digits) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "zom-intern-s5-r1-q2"
 },
 "zom-intern-s5-r1-q2": {
  "id": "zom-intern-s5-r1-q2",
  "title": "Valid Demand Mountain",
  "difficulty": "Easy",
  "company": "Zomato",
  "category": "Array",
  "tags": [
   "Zomato Round 1",
   "Array",
   "Set 5"
  ],
  "paragraphs": [
   "Return true if the array strictly increases to a peak and then strictly decreases (both sides non-empty)."
  ],
  "examples": [
   {
    "input": "arr = [2,1]",
    "output": "false"
   },
   {
    "input": "arr = [3,5,5]",
    "output": "false"
   }
  ],
  "constraints": [
   "Target O(N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-intern-s5-r1-q2-v1",
    "input": "[2,1]",
    "expectedOutput": "false"
   },
   {
    "id": "zom-intern-s5-r1-q2-v2",
    "input": "[3,5,5]",
    "expectedOutput": "false"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-intern-s5-r1-q2-h1",
    "input": "[0,3,2,1]",
    "expectedOutput": "true"
   },
   {
    "id": "zom-intern-s5-r1-q2-h2",
    "input": "[1,2,3]",
    "expectedOutput": "false"
   },
   {
    "id": "zom-intern-s5-r1-q2-h3",
    "input": "[1,3,2]",
    "expectedOutput": "true"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} arr\n * @return {boolean}\n */\nfunction validMountain(arr) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def validMountain(self, arr: List[int]) -> bool:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    bool validMountain(vector<int>& arr) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "zom-intern-s6-r1-q1": {
  "id": "zom-intern-s6-r1-q1",
  "title": "Sorted Squares of Offsets",
  "difficulty": "Easy",
  "company": "Zomato",
  "category": "Two Pointers",
  "tags": [
   "Zomato Round 1",
   "Two Pointers",
   "Set 6"
  ],
  "paragraphs": [
   "Given a sorted array of integers, return the sorted array of their squares."
  ],
  "examples": [
   {
    "input": "nums = [-4,-1,0,3,10]",
    "output": "[0,1,9,16,100]"
   },
   {
    "input": "nums = [-7,-3,2,3,11]",
    "output": "[4,9,9,49,121]"
   }
  ],
  "constraints": [
   "Target O(N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-intern-s6-r1-q1-v1",
    "input": "[-4,-1,0,3,10]",
    "expectedOutput": "[0,1,9,16,100]"
   },
   {
    "id": "zom-intern-s6-r1-q1-v2",
    "input": "[-7,-3,2,3,11]",
    "expectedOutput": "[4,9,9,49,121]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-intern-s6-r1-q1-h1",
    "input": "[0]",
    "expectedOutput": "[0]"
   },
   {
    "id": "zom-intern-s6-r1-q1-h2",
    "input": "[-5,-4]",
    "expectedOutput": "[16,25]"
   },
   {
    "id": "zom-intern-s6-r1-q1-h3",
    "input": "[1,2,3]",
    "expectedOutput": "[1,4,9]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @return {number[]}\n */\nfunction sortedSquares(nums) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def sortedSquares(self, nums: List[int]) -> List[int]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<int> sortedSquares(vector<int>& nums) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "zom-intern-s6-r1-q2"
 },
 "zom-intern-s6-r1-q2": {
  "id": "zom-intern-s6-r1-q2",
  "title": "First Rating Peak",
  "difficulty": "Easy",
  "company": "Zomato",
  "category": "Array",
  "tags": [
   "Zomato Round 1",
   "Array",
   "Set 6"
  ],
  "paragraphs": [
   "Return the smallest index i whose rating is strictly greater than each existing neighbour."
  ],
  "examples": [
   {
    "input": "ratings = [1,2,3,1]",
    "output": "2"
   },
   {
    "input": "ratings = [1,2,1,3,5,6,4]",
    "output": "1"
   }
  ],
  "constraints": [
   "Target O(N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-intern-s6-r1-q2-v1",
    "input": "[1,2,3,1]",
    "expectedOutput": "2"
   },
   {
    "id": "zom-intern-s6-r1-q2-v2",
    "input": "[1,2,1,3,5,6,4]",
    "expectedOutput": "1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-intern-s6-r1-q2-h1",
    "input": "[5]",
    "expectedOutput": "0"
   },
   {
    "id": "zom-intern-s6-r1-q2-h2",
    "input": "[3,2,1]",
    "expectedOutput": "0"
   },
   {
    "id": "zom-intern-s6-r1-q2-h3",
    "input": "[1,1,1]",
    "expectedOutput": "-1"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} ratings\n * @return {number}\n */\nfunction firstPeak(ratings) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def firstPeak(self, ratings: List[int]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int firstPeak(vector<int>& ratings) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "zom-intern-s7-r1-q1": {
  "id": "zom-intern-s7-r1-q1",
  "title": "First Unique Dish Code",
  "difficulty": "Easy",
  "company": "Zomato",
  "category": "Hash Table",
  "tags": [
   "Zomato Round 1",
   "String",
   "Hash Table",
   "Set 7"
  ],
  "paragraphs": [
   "Return the index of the first character that appears exactly once in s, or -1."
  ],
  "examples": [
   {
    "input": "s = \"leetcode\"",
    "output": "0"
   },
   {
    "input": "s = \"loveleetcode\"",
    "output": "2"
   }
  ],
  "constraints": [
   "Target O(N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-intern-s7-r1-q1-v1",
    "input": "\"leetcode\"",
    "expectedOutput": "0"
   },
   {
    "id": "zom-intern-s7-r1-q1-v2",
    "input": "\"loveleetcode\"",
    "expectedOutput": "2"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-intern-s7-r1-q1-h1",
    "input": "\"aabb\"",
    "expectedOutput": "-1"
   },
   {
    "id": "zom-intern-s7-r1-q1-h2",
    "input": "\"\"",
    "expectedOutput": "-1"
   },
   {
    "id": "zom-intern-s7-r1-q1-h3",
    "input": "\"z\"",
    "expectedOutput": "0"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} s\n * @return {number}\n */\nfunction firstUniqChar(s) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def firstUniqChar(self, s: str) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int firstUniqChar(string s) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "zom-intern-s7-r1-q2"
 },
 "zom-intern-s7-r1-q2": {
  "id": "zom-intern-s7-r1-q2",
  "title": "Count Ingredient Anagram Groups",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Hashing",
  "tags": [
   "Zomato Round 1",
   "Hash Table",
   "String",
   "Set 7"
  ],
  "paragraphs": [
   "Return the number of groups when the words are grouped by being anagrams of each other."
  ],
  "examples": [
   {
    "input": "words = [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]",
    "output": "3"
   },
   {
    "input": "words = [\"\"]",
    "output": "1"
   }
  ],
  "constraints": [
   "Target O(N*L log L) time and O(N*L) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-intern-s7-r1-q2-v1",
    "input": "[\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]",
    "expectedOutput": "3"
   },
   {
    "id": "zom-intern-s7-r1-q2-v2",
    "input": "[\"\"]",
    "expectedOutput": "1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-intern-s7-r1-q2-h1",
    "input": "[\"a\"]",
    "expectedOutput": "1"
   },
   {
    "id": "zom-intern-s7-r1-q2-h2",
    "input": "[\"abc\",\"bca\",\"cab\",\"xyz\"]",
    "expectedOutput": "2"
   },
   {
    "id": "zom-intern-s7-r1-q2-h3",
    "input": "[\"ab\",\"ba\",\"ab\"]",
    "expectedOutput": "1"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string[]} words\n * @return {number}\n */\nfunction countAnagramGroups(words) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def countAnagramGroups(self, words: List[str]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int countAnagramGroups(vector<string>& words) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N*L log L)",
   "space": "O(N*L)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "zom-intern-s8-r1-q1": {
  "id": "zom-intern-s8-r1-q1",
  "title": "Isomorphic Menu Codes",
  "difficulty": "Easy",
  "company": "Zomato",
  "category": "Hash Table",
  "tags": [
   "Zomato Round 1",
   "Hash Table",
   "String",
   "Set 8"
  ],
  "paragraphs": [
   "Two strings are isomorphic if characters of the first can be consistently replaced one-to-one to get the second. Return true or false."
  ],
  "examples": [
   {
    "input": "s = \"egg\", t = \"add\"",
    "output": "true"
   },
   {
    "input": "s = \"foo\", t = \"bar\"",
    "output": "false"
   }
  ],
  "constraints": [
   "Target O(N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-intern-s8-r1-q1-v1",
    "input": "\"egg\"\n\"add\"",
    "expectedOutput": "true"
   },
   {
    "id": "zom-intern-s8-r1-q1-v2",
    "input": "\"foo\"\n\"bar\"",
    "expectedOutput": "false"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-intern-s8-r1-q1-h1",
    "input": "\"paper\"\n\"title\"",
    "expectedOutput": "true"
   },
   {
    "id": "zom-intern-s8-r1-q1-h2",
    "input": "\"ab\"\n\"aa\"",
    "expectedOutput": "false"
   },
   {
    "id": "zom-intern-s8-r1-q1-h3",
    "input": "\"a\"\n\"a\"",
    "expectedOutput": "true"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} s\n * @param {string} t\n * @return {boolean}\n */\nfunction isIsomorphic(s, t) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def isIsomorphic(self, s: str, t: str) -> bool:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    bool isIsomorphic(string s, string t) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "zom-intern-s8-r1-q2"
 },
 "zom-intern-s8-r1-q2": {
  "id": "zom-intern-s8-r1-q2",
  "title": "Longest Shared Order Pattern",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Dynamic Programming",
  "tags": [
   "Zomato Round 1",
   "DP",
   "String",
   "Set 8"
  ],
  "paragraphs": [
   "Return the length of the longest common subsequence of two strings."
  ],
  "examples": [
   {
    "input": "a = \"abcde\", b = \"ace\"",
    "output": "3"
   },
   {
    "input": "a = \"abc\", b = \"abc\"",
    "output": "3"
   }
  ],
  "constraints": [
   "Target O(M*N) time and O(M*N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-intern-s8-r1-q2-v1",
    "input": "\"abcde\"\n\"ace\"",
    "expectedOutput": "3"
   },
   {
    "id": "zom-intern-s8-r1-q2-v2",
    "input": "\"abc\"\n\"abc\"",
    "expectedOutput": "3"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-intern-s8-r1-q2-h1",
    "input": "\"abc\"\n\"def\"",
    "expectedOutput": "0"
   },
   {
    "id": "zom-intern-s8-r1-q2-h2",
    "input": "\"bl\"\n\"yby\"",
    "expectedOutput": "1"
   },
   {
    "id": "zom-intern-s8-r1-q2-h3",
    "input": "\"AGGTAB\"\n\"GXTXAYB\"",
    "expectedOutput": "4"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} a\n * @param {string} b\n * @return {number}\n */\nfunction longestCommonSubsequence(a, b) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def longestCommonSubsequence(self, a: str, b: str) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int longestCommonSubsequence(string a, string b) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(M*N)",
   "space": "O(M*N)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "zom-intern-s9-r1-q1": {
  "id": "zom-intern-s9-r1-q1",
  "title": "The One Unpaired Delivery",
  "difficulty": "Easy",
  "company": "Zomato",
  "category": "Bit Manipulation",
  "tags": [
   "Zomato Round 1",
   "Bit Manipulation",
   "Set 9"
  ],
  "paragraphs": [
   "Every value appears twice except one. Return the value that appears once, using O(1) extra space."
  ],
  "examples": [
   {
    "input": "nums = [2,2,1]",
    "output": "1"
   },
   {
    "input": "nums = [4,1,2,1,2]",
    "output": "4"
   }
  ],
  "constraints": [
   "Target O(N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-intern-s9-r1-q1-v1",
    "input": "[2,2,1]",
    "expectedOutput": "1"
   },
   {
    "id": "zom-intern-s9-r1-q1-v2",
    "input": "[4,1,2,1,2]",
    "expectedOutput": "4"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-intern-s9-r1-q1-h1",
    "input": "[1]",
    "expectedOutput": "1"
   },
   {
    "id": "zom-intern-s9-r1-q1-h2",
    "input": "[7,3,7]",
    "expectedOutput": "3"
   },
   {
    "id": "zom-intern-s9-r1-q1-h3",
    "input": "[5,5,9,9,11]",
    "expectedOutput": "11"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @return {number}\n */\nfunction singleNumber(nums) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def singleNumber(self, nums: List[int]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int singleNumber(vector<int>& nums) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "zom-intern-s9-r1-q2"
 },
 "zom-intern-s9-r1-q2": {
  "id": "zom-intern-s9-r1-q2",
  "title": "Count Set Feature Flags",
  "difficulty": "Easy",
  "company": "Zomato",
  "category": "Bit Manipulation",
  "tags": [
   "Zomato Round 1",
   "Bit Manipulation",
   "Set 9"
  ],
  "paragraphs": [
   "Return how many 1 bits are in the binary representation of the non-negative integer n."
  ],
  "examples": [
   {
    "input": "n = 11",
    "output": "3"
   },
   {
    "input": "n = 128",
    "output": "1"
   }
  ],
  "constraints": [
   "Target O(log N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-intern-s9-r1-q2-v1",
    "input": "11",
    "expectedOutput": "3"
   },
   {
    "id": "zom-intern-s9-r1-q2-v2",
    "input": "128",
    "expectedOutput": "1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-intern-s9-r1-q2-h1",
    "input": "2147483645",
    "expectedOutput": "30"
   },
   {
    "id": "zom-intern-s9-r1-q2-h2",
    "input": "0",
    "expectedOutput": "0"
   },
   {
    "id": "zom-intern-s9-r1-q2-h3",
    "input": "255",
    "expectedOutput": "8"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number} n\n * @return {number}\n */\nfunction hammingWeight(n) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def hammingWeight(self, n: int) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int hammingWeight(int n) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(log N)",
   "space": "O(1)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "zom-intern-s10-r1-q1": {
  "id": "zom-intern-s10-r1-q1",
  "title": "Happy Coupon Number",
  "difficulty": "Easy",
  "company": "Zomato",
  "category": "Math",
  "tags": [
   "Zomato Round 1",
   "Math",
   "Hash Table",
   "Set 10"
  ],
  "paragraphs": [
   "Repeatedly replace n by the sum of the squares of its digits. Return true if this reaches 1, false if it loops forever."
  ],
  "examples": [
   {
    "input": "n = 19",
    "output": "true"
   },
   {
    "input": "n = 2",
    "output": "false"
   }
  ],
  "constraints": [
   "Target O(log N) time and O(log N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-intern-s10-r1-q1-v1",
    "input": "19",
    "expectedOutput": "true"
   },
   {
    "id": "zom-intern-s10-r1-q1-v2",
    "input": "2",
    "expectedOutput": "false"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-intern-s10-r1-q1-h1",
    "input": "1",
    "expectedOutput": "true"
   },
   {
    "id": "zom-intern-s10-r1-q1-h2",
    "input": "7",
    "expectedOutput": "true"
   },
   {
    "id": "zom-intern-s10-r1-q1-h3",
    "input": "116",
    "expectedOutput": "false"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number} n\n * @return {boolean}\n */\nfunction isHappy(n) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def isHappy(self, n: int) -> bool:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    bool isHappy(int n) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(log N)",
   "space": "O(log N)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "zom-intern-s10-r1-q2"
 },
 "zom-intern-s10-r1-q2": {
  "id": "zom-intern-s10-r1-q2",
  "title": "Roman Table Number Parser",
  "difficulty": "Easy",
  "company": "Zomato",
  "category": "String",
  "tags": [
   "Zomato Round 1",
   "String",
   "Math",
   "Set 10"
  ],
  "paragraphs": [
   "Convert a Roman numeral string to its integer value."
  ],
  "examples": [
   {
    "input": "s = \"III\"",
    "output": "3"
   },
   {
    "input": "s = \"LVIII\"",
    "output": "58"
   }
  ],
  "constraints": [
   "Target O(N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-intern-s10-r1-q2-v1",
    "input": "\"III\"",
    "expectedOutput": "3"
   },
   {
    "id": "zom-intern-s10-r1-q2-v2",
    "input": "\"LVIII\"",
    "expectedOutput": "58"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-intern-s10-r1-q2-h1",
    "input": "\"MCMXCIV\"",
    "expectedOutput": "1994"
   },
   {
    "id": "zom-intern-s10-r1-q2-h2",
    "input": "\"IX\"",
    "expectedOutput": "9"
   },
   {
    "id": "zom-intern-s10-r1-q2-h3",
    "input": "\"XL\"",
    "expectedOutput": "40"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} s\n * @return {number}\n */\nfunction romanToInt(s) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def romanToInt(self, s: str) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int romanToInt(string s) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "zom-intern-s1-r2-q1": {
  "id": "zom-intern-s1-r2-q1",
  "title": "Slowest Safe Packing Speed",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Binary Search on Answer",
  "tags": [
   "Zomato Round 2",
   "Binary Search",
   "Set 1"
  ],
  "paragraphs": [
   "Piles of orders must all be packed within h hours, one pile per hour at most, at a speed of k orders per hour. Return the minimum integer k.",
   "Round 2 is a live problem-solving round: after your code works you will defend the approach, complexity and edge cases."
  ],
  "examples": [
   {
    "input": "piles = [3,6,7,11], h = 8",
    "output": "4"
   },
   {
    "input": "piles = [30,11,23,4,20], h = 5",
    "output": "30"
   }
  ],
  "constraints": [
   "Target O(N log M) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-intern-s1-r2-q1-v1",
    "input": "[3,6,7,11]\n8",
    "expectedOutput": "4"
   },
   {
    "id": "zom-intern-s1-r2-q1-v2",
    "input": "[30,11,23,4,20]\n5",
    "expectedOutput": "30"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-intern-s1-r2-q1-h1",
    "input": "[30,11,23,4,20]\n6",
    "expectedOutput": "23"
   },
   {
    "id": "zom-intern-s1-r2-q1-h2",
    "input": "[1]\n1",
    "expectedOutput": "1"
   },
   {
    "id": "zom-intern-s1-r2-q1-h3",
    "input": "[10,10,10]\n6",
    "expectedOutput": "5"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} piles\n * @param {number} h\n * @return {number}\n */\nfunction minSpeed(piles, h) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def minSpeed(self, piles: List[int], h: int) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int minSpeed(vector<int>& piles, int h) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N log M)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-intern-s2-r2-q1": {
  "id": "zom-intern-s2-r2-q1",
  "title": "Best Contiguous Profit Streak",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Dynamic Programming",
  "tags": [
   "Zomato Round 2",
   "DP",
   "Array",
   "Set 2"
  ],
  "paragraphs": [
   "Return the largest sum of any non-empty contiguous subarray. Defend your invariant.",
   "Round 2 is a live problem-solving round: after your code works you will defend the approach, complexity and edge cases."
  ],
  "examples": [
   {
    "input": "nums = [-2,1,-3,4,-1,2,1,-5,4]",
    "output": "6"
   },
   {
    "input": "nums = [1]",
    "output": "1"
   }
  ],
  "constraints": [
   "Target O(N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-intern-s2-r2-q1-v1",
    "input": "[-2,1,-3,4,-1,2,1,-5,4]",
    "expectedOutput": "6"
   },
   {
    "id": "zom-intern-s2-r2-q1-v2",
    "input": "[1]",
    "expectedOutput": "1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-intern-s2-r2-q1-h1",
    "input": "[5,4,-1,7,8]",
    "expectedOutput": "23"
   },
   {
    "id": "zom-intern-s2-r2-q1-h2",
    "input": "[-3,-1,-2]",
    "expectedOutput": "-1"
   },
   {
    "id": "zom-intern-s2-r2-q1-h3",
    "input": "[0,0]",
    "expectedOutput": "0"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @return {number}\n */\nfunction maxSubArray(nums) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int maxSubArray(vector<int>& nums) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-intern-s3-r2-q1": {
  "id": "zom-intern-s3-r2-q1",
  "title": "Search a Sorted Price Grid",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Binary Search",
  "tags": [
   "Zomato Round 2",
   "Binary Search",
   "Matrix",
   "Set 3"
  ],
  "paragraphs": [
   "Each row is sorted and each row starts above the previous row's last value. Return true if target exists. Defend an O(log MN) approach.",
   "Round 2 is a live problem-solving round: after your code works you will defend the approach, complexity and edge cases."
  ],
  "examples": [
   {
    "input": "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3",
    "output": "true"
   },
   {
    "input": "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13",
    "output": "false"
   }
  ],
  "constraints": [
   "Target O(log MN) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-intern-s3-r2-q1-v1",
    "input": "[[1,3,5,7],[10,11,16,20],[23,30,34,60]]\n3",
    "expectedOutput": "true"
   },
   {
    "id": "zom-intern-s3-r2-q1-v2",
    "input": "[[1,3,5,7],[10,11,16,20],[23,30,34,60]]\n13",
    "expectedOutput": "false"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-intern-s3-r2-q1-h1",
    "input": "[[1]]\n1",
    "expectedOutput": "true"
   },
   {
    "id": "zom-intern-s3-r2-q1-h2",
    "input": "[[1],[3]]\n3",
    "expectedOutput": "true"
   },
   {
    "id": "zom-intern-s3-r2-q1-h3",
    "input": "[[1,2]]\n5",
    "expectedOutput": "false"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[][]} matrix\n * @param {number} target\n * @return {boolean}\n */\nfunction searchMatrix(matrix, target) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    bool searchMatrix(vector<vector<int>>& matrix, int target) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(log MN)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-intern-s4-r2-q1": {
  "id": "zom-intern-s4-r2-q1",
  "title": "Spiral Delivery Route",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Matrix",
  "tags": [
   "Zomato Round 2",
   "Matrix",
   "Simulation",
   "Set 4"
  ],
  "paragraphs": [
   "Return all elements of the matrix in clockwise spiral order.",
   "Round 2 is a live problem-solving round: after your code works you will defend the approach, complexity and edge cases."
  ],
  "examples": [
   {
    "input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "output": "[1,2,3,6,9,8,7,4,5]"
   },
   {
    "input": "matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]",
    "output": "[1,2,3,4,8,12,11,10,9,5,6,7]"
   }
  ],
  "constraints": [
   "Target O(M*N) time and O(1) extra space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-intern-s4-r2-q1-v1",
    "input": "[[1,2,3],[4,5,6],[7,8,9]]",
    "expectedOutput": "[1,2,3,6,9,8,7,4,5]"
   },
   {
    "id": "zom-intern-s4-r2-q1-v2",
    "input": "[[1,2,3,4],[5,6,7,8],[9,10,11,12]]",
    "expectedOutput": "[1,2,3,4,8,12,11,10,9,5,6,7]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-intern-s4-r2-q1-h1",
    "input": "[[1]]",
    "expectedOutput": "[1]"
   },
   {
    "id": "zom-intern-s4-r2-q1-h2",
    "input": "[[1],[2],[3]]",
    "expectedOutput": "[1,2,3]"
   },
   {
    "id": "zom-intern-s4-r2-q1-h3",
    "input": "[[1,2],[3,4]]",
    "expectedOutput": "[1,2,4,3]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[][]} matrix\n * @return {number[]}\n */\nfunction spiralOrder(matrix) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<int> spiralOrder(vector<vector<int>>& matrix) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(M*N)",
   "space": "O(1) extra"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-intern-s5-r2-q1": {
  "id": "zom-intern-s5-r2-q1",
  "title": "Rotate a Seat Map 90 Degrees",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Matrix",
  "tags": [
   "Zomato Round 2",
   "Matrix",
   "Set 5"
  ],
  "paragraphs": [
   "Rotate the square matrix 90 degrees clockwise and return it.",
   "Round 2 is a live problem-solving round: after your code works you will defend the approach, complexity and edge cases."
  ],
  "examples": [
   {
    "input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "output": "[[7,4,1],[8,5,2],[9,6,3]]"
   },
   {
    "input": "matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]",
    "output": "[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]"
   }
  ],
  "constraints": [
   "Target O(N^2) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-intern-s5-r2-q1-v1",
    "input": "[[1,2,3],[4,5,6],[7,8,9]]",
    "expectedOutput": "[[7,4,1],[8,5,2],[9,6,3]]"
   },
   {
    "id": "zom-intern-s5-r2-q1-v2",
    "input": "[[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]",
    "expectedOutput": "[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-intern-s5-r2-q1-h1",
    "input": "[[1]]",
    "expectedOutput": "[[1]]"
   },
   {
    "id": "zom-intern-s5-r2-q1-h2",
    "input": "[[1,2],[3,4]]",
    "expectedOutput": "[[3,1],[4,2]]"
   },
   {
    "id": "zom-intern-s5-r2-q1-h3",
    "input": "[[0,1],[1,0]]",
    "expectedOutput": "[[1,0],[0,1]]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[][]} matrix\n * @return {number[][]}\n */\nfunction rotate(matrix) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def rotate(self, matrix: List[List[int]]) -> List[List[int]]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<vector<int>> rotate(vector<vector<int>>& matrix) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N^2)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-intern-s6-r2-q1": {
  "id": "zom-intern-s6-r2-q1",
  "title": "Clear Closed Rows and Columns",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Matrix",
  "tags": [
   "Zomato Round 2",
   "Matrix",
   "Set 6"
  ],
  "paragraphs": [
   "If a cell is 0, set its entire row and column to 0. Return the matrix.",
   "Round 2 is a live problem-solving round: after your code works you will defend the approach, complexity and edge cases."
  ],
  "examples": [
   {
    "input": "matrix = [[1,1,1],[1,0,1],[1,1,1]]",
    "output": "[[1,0,1],[0,0,0],[1,0,1]]"
   },
   {
    "input": "matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]",
    "output": "[[0,0,0,0],[0,4,5,0],[0,3,1,0]]"
   }
  ],
  "constraints": [
   "Target O(M*N) time and O(M+N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-intern-s6-r2-q1-v1",
    "input": "[[1,1,1],[1,0,1],[1,1,1]]",
    "expectedOutput": "[[1,0,1],[0,0,0],[1,0,1]]"
   },
   {
    "id": "zom-intern-s6-r2-q1-v2",
    "input": "[[0,1,2,0],[3,4,5,2],[1,3,1,5]]",
    "expectedOutput": "[[0,0,0,0],[0,4,5,0],[0,3,1,0]]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-intern-s6-r2-q1-h1",
    "input": "[[1]]",
    "expectedOutput": "[[1]]"
   },
   {
    "id": "zom-intern-s6-r2-q1-h2",
    "input": "[[0]]",
    "expectedOutput": "[[0]]"
   },
   {
    "id": "zom-intern-s6-r2-q1-h3",
    "input": "[[1,2],[3,4]]",
    "expectedOutput": "[[1,2],[3,4]]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[][]} matrix\n * @return {number[][]}\n */\nfunction setZeroes(matrix) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def setZeroes(self, matrix: List[List[int]]) -> List[List[int]]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<vector<int>> setZeroes(vector<vector<int>>& matrix) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(M*N)",
   "space": "O(M+N)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-intern-s7-r2-q1": {
  "id": "zom-intern-s7-r2-q1",
  "title": "All Delivery Orderings",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Backtracking",
  "tags": [
   "Zomato Round 2",
   "Backtracking",
   "Set 7"
  ],
  "paragraphs": [
   "Return all permutations of distinct integers, sorted lexicographically.",
   "Round 2 is a live problem-solving round: after your code works you will defend the approach, complexity and edge cases."
  ],
  "examples": [
   {
    "input": "nums = [1,2,3]",
    "output": "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]"
   },
   {
    "input": "nums = [0,1]",
    "output": "[[0,1],[1,0]]"
   }
  ],
  "constraints": [
   "Target O(N*N!) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-intern-s7-r2-q1-v1",
    "input": "[1,2,3]",
    "expectedOutput": "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]"
   },
   {
    "id": "zom-intern-s7-r2-q1-v2",
    "input": "[0,1]",
    "expectedOutput": "[[0,1],[1,0]]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-intern-s7-r2-q1-h1",
    "input": "[1]",
    "expectedOutput": "[[1]]"
   },
   {
    "id": "zom-intern-s7-r2-q1-h2",
    "input": "[3,1,2]",
    "expectedOutput": "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]"
   },
   {
    "id": "zom-intern-s7-r2-q1-h3",
    "input": "[1,2,3,4]",
    "expectedOutput": "[[1,2,3,4],[1,2,4,3],[1,3,2,4],[1,3,4,2],[1,4,2,3],[1,4,3,2],[2,1,3,4],[2,1,4,3],[2,3,1,4],[2,3,4,1],[2,4,1,3],[2,4,3,1],[3,1,2,4],[3,1,4,2],[3,2,1,4],[3,2,4,1],[3,4,1,2],[3,4,2,1],[4,1,2,3],[4,1,3,2],[4,2,1,3],[4,2,3,1],[4,3,1,2],[4,3,2,1]]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @return {number[][]}\n */\nfunction permute(nums) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def permute(self, nums: List[int]) -> List[List[int]]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<vector<int>> permute(vector<int>& nums) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N*N!)",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-intern-s8-r2-q1": {
  "id": "zom-intern-s8-r2-q1",
  "title": "All Add-On Combinations",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Backtracking",
  "tags": [
   "Zomato Round 2",
   "Backtracking",
   "Bit Manipulation",
   "Set 8"
  ],
  "paragraphs": [
   "Return every subset of distinct integers (each subset ascending), with the list sorted lexicographically.",
   "Round 2 is a live problem-solving round: after your code works you will defend the approach, complexity and edge cases."
  ],
  "examples": [
   {
    "input": "nums = [1,2,3]",
    "output": "[[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]"
   },
   {
    "input": "nums = [0]",
    "output": "[[],[0]]"
   }
  ],
  "constraints": [
   "Target O(N*2^N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-intern-s8-r2-q1-v1",
    "input": "[1,2,3]",
    "expectedOutput": "[[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]"
   },
   {
    "id": "zom-intern-s8-r2-q1-v2",
    "input": "[0]",
    "expectedOutput": "[[],[0]]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-intern-s8-r2-q1-h1",
    "input": "[3,1]",
    "expectedOutput": "[[],[1],[1,3],[3]]"
   },
   {
    "id": "zom-intern-s8-r2-q1-h2",
    "input": "[]",
    "expectedOutput": "[[]]"
   },
   {
    "id": "zom-intern-s8-r2-q1-h3",
    "input": "[1,2,3,4]",
    "expectedOutput": "[[],[1],[1,2],[1,2,3],[1,2,3,4],[1,2,4],[1,3],[1,3,4],[1,4],[2],[2,3],[2,3,4],[2,4],[3],[3,4],[4]]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @return {number[][]}\n */\nfunction subsets(nums) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def subsets(self, nums: List[int]) -> List[List[int]]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<vector<int>> subsets(vector<int>& nums) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N*2^N)",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-intern-s9-r2-q1": {
  "id": "zom-intern-s9-r2-q1",
  "title": "Coupon Value Combinations",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Backtracking",
  "tags": [
   "Zomato Round 2",
   "Backtracking",
   "Set 9"
  ],
  "paragraphs": [
   "Return all unique combinations of candidates (reusable) that sum to target, each combination ascending and the list sorted.",
   "Round 2 is a live problem-solving round: after your code works you will defend the approach, complexity and edge cases."
  ],
  "examples": [
   {
    "input": "candidates = [2,3,6,7], target = 7",
    "output": "[[2,2,3],[7]]"
   },
   {
    "input": "candidates = [2,3,5], target = 8",
    "output": "[[2,2,2,2],[2,3,3],[3,5]]"
   }
  ],
  "constraints": [
   "Target O(2^T) time and O(T) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-intern-s9-r2-q1-v1",
    "input": "[2,3,6,7]\n7",
    "expectedOutput": "[[2,2,3],[7]]"
   },
   {
    "id": "zom-intern-s9-r2-q1-v2",
    "input": "[2,3,5]\n8",
    "expectedOutput": "[[2,2,2,2],[2,3,3],[3,5]]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-intern-s9-r2-q1-h1",
    "input": "[2]\n1",
    "expectedOutput": "[]"
   },
   {
    "id": "zom-intern-s9-r2-q1-h2",
    "input": "[1]\n2",
    "expectedOutput": "[[1,1]]"
   },
   {
    "id": "zom-intern-s9-r2-q1-h3",
    "input": "[3,5,8]\n11",
    "expectedOutput": "[[3,3,5],[3,8]]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} candidates\n * @param {number} target\n * @return {number[][]}\n */\nfunction combinationSum(candidates, target) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(2^T)",
   "space": "O(T)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-intern-s10-r2-q1": {
  "id": "zom-intern-s10-r2-q1",
  "title": "Next Larger Order Sequence",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Two Pointers",
  "tags": [
   "Zomato Round 2",
   "Array",
   "Math",
   "Set 10"
  ],
  "paragraphs": [
   "Return the next lexicographically greater permutation of the array, or the smallest permutation if none exists.",
   "Round 2 is a live problem-solving round: after your code works you will defend the approach, complexity and edge cases."
  ],
  "examples": [
   {
    "input": "nums = [1,2,3]",
    "output": "[1,3,2]"
   },
   {
    "input": "nums = [3,2,1]",
    "output": "[1,2,3]"
   }
  ],
  "constraints": [
   "Target O(N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-intern-s10-r2-q1-v1",
    "input": "[1,2,3]",
    "expectedOutput": "[1,3,2]"
   },
   {
    "id": "zom-intern-s10-r2-q1-v2",
    "input": "[3,2,1]",
    "expectedOutput": "[1,2,3]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-intern-s10-r2-q1-h1",
    "input": "[1,1,5]",
    "expectedOutput": "[1,5,1]"
   },
   {
    "id": "zom-intern-s10-r2-q1-h2",
    "input": "[1,3,2]",
    "expectedOutput": "[2,1,3]"
   },
   {
    "id": "zom-intern-s10-r2-q1-h3",
    "input": "[2,3,1]",
    "expectedOutput": "[3,1,2]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @return {number[]}\n */\nfunction nextPermutation(nums) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def nextPermutation(self, nums: List[int]) -> List[int]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<int> nextPermutation(vector<int>& nums) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-intern-s1-r3-q1": {
  "id": "zom-intern-s1-r3-q1",
  "title": "Restaurant and Menu Class Model",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Low-Level and High-Level Design",
  "tags": [
   "Zomato Round 3",
   "Set 1"
  ],
  "paragraphs": [
   "Zomato design round: model and scale a food-delivery system component.",
   "Topic: Restaurant and Menu Class Model. Focus areas: Entities, relationships, extensibility.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clean modelling, realistic scale numbers, failure handling and trade-offs for peak load."
   }
  ],
  "constraints": [
   "State assumptions: orders per second, peak factor, data size.",
   "Cover failure modes: retries, duplicates, partial failure, peak load.",
   "Justify each trade-off."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Notes, definitions, schema or class sketch\n",
   "javascript": "// Notes, definitions, schema or class sketch\n",
   "cpp": "// Notes, definitions, schema or class sketch\n"
  },
  "optimalComplexity": {
   "time": "N/A (discussion)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-intern-s2-r3-q1": {
  "id": "zom-intern-s2-r3-q1",
  "title": "Cart and Pricing Rules",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Low-Level and High-Level Design",
  "tags": [
   "Zomato Round 3",
   "Set 2"
  ],
  "paragraphs": [
   "Zomato design round: model and scale a food-delivery system component.",
   "Topic: Cart and Pricing Rules. Focus areas: Taxes, packaging, discounts, rounding.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clean modelling, realistic scale numbers, failure handling and trade-offs for peak load."
   }
  ],
  "constraints": [
   "State assumptions: orders per second, peak factor, data size.",
   "Cover failure modes: retries, duplicates, partial failure, peak load.",
   "Justify each trade-off."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Notes, definitions, schema or class sketch\n",
   "javascript": "// Notes, definitions, schema or class sketch\n",
   "cpp": "// Notes, definitions, schema or class sketch\n"
  },
  "optimalComplexity": {
   "time": "N/A (discussion)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-intern-s3-r3-q1": {
  "id": "zom-intern-s3-r3-q1",
  "title": "Rating and Review System",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Low-Level and High-Level Design",
  "tags": [
   "Zomato Round 3",
   "Set 3"
  ],
  "paragraphs": [
   "Zomato design round: model and scale a food-delivery system component.",
   "Topic: Rating and Review System. Focus areas: Aggregation, edits, abuse handling.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clean modelling, realistic scale numbers, failure handling and trade-offs for peak load."
   }
  ],
  "constraints": [
   "State assumptions: orders per second, peak factor, data size.",
   "Cover failure modes: retries, duplicates, partial failure, peak load.",
   "Justify each trade-off."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Notes, definitions, schema or class sketch\n",
   "javascript": "// Notes, definitions, schema or class sketch\n",
   "cpp": "// Notes, definitions, schema or class sketch\n"
  },
  "optimalComplexity": {
   "time": "N/A (discussion)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-intern-s4-r3-q1": {
  "id": "zom-intern-s4-r3-q1",
  "title": "Coupon and Discount Engine",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Low-Level and High-Level Design",
  "tags": [
   "Zomato Round 3",
   "Set 4"
  ],
  "paragraphs": [
   "Zomato design round: model and scale a food-delivery system component.",
   "Topic: Coupon and Discount Engine. Focus areas: Rule composition, stacking, expiry.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clean modelling, realistic scale numbers, failure handling and trade-offs for peak load."
   }
  ],
  "constraints": [
   "State assumptions: orders per second, peak factor, data size.",
   "Cover failure modes: retries, duplicates, partial failure, peak load.",
   "Justify each trade-off."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Notes, definitions, schema or class sketch\n",
   "javascript": "// Notes, definitions, schema or class sketch\n",
   "cpp": "// Notes, definitions, schema or class sketch\n"
  },
  "optimalComplexity": {
   "time": "N/A (discussion)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-intern-s5-r3-q1": {
  "id": "zom-intern-s5-r3-q1",
  "title": "Order Status State Machine",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Low-Level and High-Level Design",
  "tags": [
   "Zomato Round 3",
   "Set 5"
  ],
  "paragraphs": [
   "Zomato design round: model and scale a food-delivery system component.",
   "Topic: Order Status State Machine. Focus areas: States, transitions, invalid moves.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clean modelling, realistic scale numbers, failure handling and trade-offs for peak load."
   }
  ],
  "constraints": [
   "State assumptions: orders per second, peak factor, data size.",
   "Cover failure modes: retries, duplicates, partial failure, peak load.",
   "Justify each trade-off."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Notes, definitions, schema or class sketch\n",
   "javascript": "// Notes, definitions, schema or class sketch\n",
   "cpp": "// Notes, definitions, schema or class sketch\n"
  },
  "optimalComplexity": {
   "time": "N/A (discussion)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-intern-s6-r3-q1": {
  "id": "zom-intern-s6-r3-q1",
  "title": "Restaurant Search by Cuisine",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Low-Level and High-Level Design",
  "tags": [
   "Zomato Round 3",
   "Set 6"
  ],
  "paragraphs": [
   "Zomato design round: model and scale a food-delivery system component.",
   "Topic: Restaurant Search by Cuisine. Focus areas: Inverted index, filters, sorting.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clean modelling, realistic scale numbers, failure handling and trade-offs for peak load."
   }
  ],
  "constraints": [
   "State assumptions: orders per second, peak factor, data size.",
   "Cover failure modes: retries, duplicates, partial failure, peak load.",
   "Justify each trade-off."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Notes, definitions, schema or class sketch\n",
   "javascript": "// Notes, definitions, schema or class sketch\n",
   "cpp": "// Notes, definitions, schema or class sketch\n"
  },
  "optimalComplexity": {
   "time": "N/A (discussion)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-intern-s7-r3-q1": {
  "id": "zom-intern-s7-r3-q1",
  "title": "Delivery Fee Calculator",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Low-Level and High-Level Design",
  "tags": [
   "Zomato Round 3",
   "Set 7"
  ],
  "paragraphs": [
   "Zomato design round: model and scale a food-delivery system component.",
   "Topic: Delivery Fee Calculator. Focus areas: Distance slabs, surge, free-delivery thresholds.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clean modelling, realistic scale numbers, failure handling and trade-offs for peak load."
   }
  ],
  "constraints": [
   "State assumptions: orders per second, peak factor, data size.",
   "Cover failure modes: retries, duplicates, partial failure, peak load.",
   "Justify each trade-off."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Notes, definitions, schema or class sketch\n",
   "javascript": "// Notes, definitions, schema or class sketch\n",
   "cpp": "// Notes, definitions, schema or class sketch\n"
  },
  "optimalComplexity": {
   "time": "N/A (discussion)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-intern-s8-r3-q1": {
  "id": "zom-intern-s8-r3-q1",
  "title": "Table Booking System",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Low-Level and High-Level Design",
  "tags": [
   "Zomato Round 3",
   "Set 8"
  ],
  "paragraphs": [
   "Zomato design round: model and scale a food-delivery system component.",
   "Topic: Table Booking System. Focus areas: Slots, capacity, conflicts, cancellations.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clean modelling, realistic scale numbers, failure handling and trade-offs for peak load."
   }
  ],
  "constraints": [
   "State assumptions: orders per second, peak factor, data size.",
   "Cover failure modes: retries, duplicates, partial failure, peak load.",
   "Justify each trade-off."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Notes, definitions, schema or class sketch\n",
   "javascript": "// Notes, definitions, schema or class sketch\n",
   "cpp": "// Notes, definitions, schema or class sketch\n"
  },
  "optimalComplexity": {
   "time": "N/A (discussion)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-intern-s9-r3-q1": {
  "id": "zom-intern-s9-r3-q1",
  "title": "Notification Preferences",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Low-Level and High-Level Design",
  "tags": [
   "Zomato Round 3",
   "Set 9"
  ],
  "paragraphs": [
   "Zomato design round: model and scale a food-delivery system component.",
   "Topic: Notification Preferences. Focus areas: Channels, opt-outs, templates.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clean modelling, realistic scale numbers, failure handling and trade-offs for peak load."
   }
  ],
  "constraints": [
   "State assumptions: orders per second, peak factor, data size.",
   "Cover failure modes: retries, duplicates, partial failure, peak load.",
   "Justify each trade-off."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Notes, definitions, schema or class sketch\n",
   "javascript": "// Notes, definitions, schema or class sketch\n",
   "cpp": "// Notes, definitions, schema or class sketch\n"
  },
  "optimalComplexity": {
   "time": "N/A (discussion)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-intern-s10-r3-q1": {
  "id": "zom-intern-s10-r3-q1",
  "title": "Favorites and Recently Viewed",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Low-Level and High-Level Design",
  "tags": [
   "Zomato Round 3",
   "Set 10"
  ],
  "paragraphs": [
   "Zomato design round: model and scale a food-delivery system component.",
   "Topic: Favorites and Recently Viewed. Focus areas: LRU, per-user storage, sync.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clean modelling, realistic scale numbers, failure handling and trade-offs for peak load."
   }
  ],
  "constraints": [
   "State assumptions: orders per second, peak factor, data size.",
   "Cover failure modes: retries, duplicates, partial failure, peak load.",
   "Justify each trade-off."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Notes, definitions, schema or class sketch\n",
   "javascript": "// Notes, definitions, schema or class sketch\n",
   "cpp": "// Notes, definitions, schema or class sketch\n"
  },
  "optimalComplexity": {
   "time": "N/A (discussion)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-intern-s1-r4-q1": {
  "id": "zom-intern-s1-r4-q1",
  "title": "Customer Escalation on a Failed Order",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Hiring Manager and Culture",
  "tags": [
   "Zomato",
   "Hiring Manager and Culture",
   "Customer Obsession",
   "Set 1"
  ],
  "paragraphs": [
   "Zomato hiring-manager round: ownership, customer obsession, speed, honesty and teamwork.",
   "Scenario: You are an SDE intern embedded with a squad. A customer with a repeatedly failed order escalates publicly, and the fix needs another team's help.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Customer Obsession",
    "explanation": "Use concrete first-person examples with the customer impact and what you learned."
   }
  ],
  "constraints": [
   "Be specific about what you personally did.",
   "Put the customer first.",
   "Be honest about mistakes and trade-offs."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Hiring Manager and Culture\n// Focus: Customer Obsession\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: Hiring Manager and Culture\n// Focus: Customer Obsession\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: Hiring Manager and Culture\n# Focus: Customer Obsession\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: Hiring Manager and Culture\n// Focus: Customer Obsession\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-intern-s2-r4-q1": {
  "id": "zom-intern-s2-r4-q1",
  "title": "Ownership During a Peak-Night Outage",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Hiring Manager and Culture",
  "tags": [
   "Zomato",
   "Hiring Manager and Culture",
   "Ownership / Bias for Action",
   "Set 2"
  ],
  "paragraphs": [
   "Zomato hiring-manager round: ownership, customer obsession, speed, honesty and teamwork.",
   "Scenario: You are an SDE intern embedded with a squad. Ordering degrades during the busiest night of the year and the on-call owner is unreachable.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Ownership / Bias for Action",
    "explanation": "Use concrete first-person examples with the customer impact and what you learned."
   }
  ],
  "constraints": [
   "Be specific about what you personally did.",
   "Put the customer first.",
   "Be honest about mistakes and trade-offs."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Hiring Manager and Culture\n// Focus: Ownership / Bias for Action\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: Hiring Manager and Culture\n// Focus: Ownership / Bias for Action\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: Hiring Manager and Culture\n# Focus: Ownership / Bias for Action\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: Hiring Manager and Culture\n// Focus: Ownership / Bias for Action\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-intern-s3-r4-q1": {
  "id": "zom-intern-s3-r4-q1",
  "title": "Disagreeing With a Product Manager",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Hiring Manager and Culture",
  "tags": [
   "Zomato",
   "Hiring Manager and Culture",
   "Intellectual Honesty",
   "Set 3"
  ],
  "paragraphs": [
   "Zomato hiring-manager round: ownership, customer obsession, speed, honesty and teamwork.",
   "Scenario: You are an SDE intern embedded with a squad. A PM wants a feature shipped this week that you think will hurt delivery reliability.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Intellectual Honesty",
    "explanation": "Use concrete first-person examples with the customer impact and what you learned."
   }
  ],
  "constraints": [
   "Be specific about what you personally did.",
   "Put the customer first.",
   "Be honest about mistakes and trade-offs."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Hiring Manager and Culture\n// Focus: Intellectual Honesty\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: Hiring Manager and Culture\n// Focus: Intellectual Honesty\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: Hiring Manager and Culture\n# Focus: Intellectual Honesty\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: Hiring Manager and Culture\n// Focus: Intellectual Honesty\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-intern-s4-r4-q1": {
  "id": "zom-intern-s4-r4-q1",
  "title": "Shipping Fast vs Quality",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Hiring Manager and Culture",
  "tags": [
   "Zomato",
   "Hiring Manager and Culture",
   "Judgment / Trade-offs",
   "Set 4"
  ],
  "paragraphs": [
   "Zomato hiring-manager round: ownership, customer obsession, speed, honesty and teamwork.",
   "Scenario: You are an SDE intern embedded with a squad. Growth wants a launch in three days, but testing shows an edge case that affects a small share of orders.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Judgment / Trade-offs",
    "explanation": "Use concrete first-person examples with the customer impact and what you learned."
   }
  ],
  "constraints": [
   "Be specific about what you personally did.",
   "Put the customer first.",
   "Be honest about mistakes and trade-offs."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Hiring Manager and Culture\n// Focus: Judgment / Trade-offs\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: Hiring Manager and Culture\n// Focus: Judgment / Trade-offs\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: Hiring Manager and Culture\n# Focus: Judgment / Trade-offs\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: Hiring Manager and Culture\n// Focus: Judgment / Trade-offs\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-intern-s5-r4-q1": {
  "id": "zom-intern-s5-r4-q1",
  "title": "A New Vertical With No Playbook",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Hiring Manager and Culture",
  "tags": [
   "Zomato",
   "Hiring Manager and Culture",
   "Ambiguity",
   "Set 5"
  ],
  "paragraphs": [
   "Zomato hiring-manager round: ownership, customer obsession, speed, honesty and teamwork.",
   "Scenario: You are an SDE intern embedded with a squad. You are asked to help launch a new quick-delivery vertical with unclear requirements and tight timelines.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Ambiguity",
    "explanation": "Use concrete first-person examples with the customer impact and what you learned."
   }
  ],
  "constraints": [
   "Be specific about what you personally did.",
   "Put the customer first.",
   "Be honest about mistakes and trade-offs."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Hiring Manager and Culture\n// Focus: Ambiguity\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: Hiring Manager and Culture\n// Focus: Ambiguity\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: Hiring Manager and Culture\n# Focus: Ambiguity\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: Hiring Manager and Culture\n// Focus: Ambiguity\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-intern-s6-r4-q1": {
  "id": "zom-intern-s6-r4-q1",
  "title": "An Experiment That Failed",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Hiring Manager and Culture",
  "tags": [
   "Zomato",
   "Hiring Manager and Culture",
   "Accountability / Learning",
   "Set 6"
  ],
  "paragraphs": [
   "Zomato hiring-manager round: ownership, customer obsession, speed, honesty and teamwork.",
   "Scenario: You are an SDE intern embedded with a squad. An A/B test you championed made conversion worse, and leadership asks what happened.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Accountability / Learning",
    "explanation": "Use concrete first-person examples with the customer impact and what you learned."
   }
  ],
  "constraints": [
   "Be specific about what you personally did.",
   "Put the customer first.",
   "Be honest about mistakes and trade-offs."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Hiring Manager and Culture\n// Focus: Accountability / Learning\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: Hiring Manager and Culture\n// Focus: Accountability / Learning\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: Hiring Manager and Culture\n# Focus: Accountability / Learning\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: Hiring Manager and Culture\n// Focus: Accountability / Learning\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-intern-s7-r4-q1": {
  "id": "zom-intern-s7-r4-q1",
  "title": "Conflict With the Operations Team",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Hiring Manager and Culture",
  "tags": [
   "Zomato",
   "Hiring Manager and Culture",
   "Collaboration",
   "Set 7"
  ],
  "paragraphs": [
   "Zomato hiring-manager round: ownership, customer obsession, speed, honesty and teamwork.",
   "Scenario: You are an SDE intern embedded with a squad. Ops blames your system for late deliveries while your data points to rider supply issues.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Collaboration",
    "explanation": "Use concrete first-person examples with the customer impact and what you learned."
   }
  ],
  "constraints": [
   "Be specific about what you personally did.",
   "Put the customer first.",
   "Be honest about mistakes and trade-offs."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Hiring Manager and Culture\n// Focus: Collaboration\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: Hiring Manager and Culture\n// Focus: Collaboration\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: Hiring Manager and Culture\n# Focus: Collaboration\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: Hiring Manager and Culture\n// Focus: Collaboration\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-intern-s8-r4-q1": {
  "id": "zom-intern-s8-r4-q1",
  "title": "Helping Someone Outside Your Scope",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Hiring Manager and Culture",
  "tags": [
   "Zomato",
   "Hiring Manager and Culture",
   "Teamwork / Giving",
   "Set 8"
  ],
  "paragraphs": [
   "Zomato hiring-manager round: ownership, customer obsession, speed, honesty and teamwork.",
   "Scenario: You are an SDE intern embedded with a squad. A teammate on another squad is stuck on a critical bug while you have your own deadlines.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Teamwork / Giving",
    "explanation": "Use concrete first-person examples with the customer impact and what you learned."
   }
  ],
  "constraints": [
   "Be specific about what you personally did.",
   "Put the customer first.",
   "Be honest about mistakes and trade-offs."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Hiring Manager and Culture\n// Focus: Teamwork / Giving\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: Hiring Manager and Culture\n// Focus: Teamwork / Giving\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: Hiring Manager and Culture\n# Focus: Teamwork / Giving\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: Hiring Manager and Culture\n// Focus: Teamwork / Giving\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-intern-s9-r4-q1": {
  "id": "zom-intern-s9-r4-q1",
  "title": "Surge Pricing Fairness",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Hiring Manager and Culture",
  "tags": [
   "Zomato",
   "Hiring Manager and Culture",
   "Doing the Right Thing",
   "Set 9"
  ],
  "paragraphs": [
   "Zomato hiring-manager round: ownership, customer obsession, speed, honesty and teamwork.",
   "Scenario: You are an SDE intern embedded with a squad. Data shows a surge rule increases revenue but disproportionately hurts customers in certain areas.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Doing the Right Thing",
    "explanation": "Use concrete first-person examples with the customer impact and what you learned."
   }
  ],
  "constraints": [
   "Be specific about what you personally did.",
   "Put the customer first.",
   "Be honest about mistakes and trade-offs."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Hiring Manager and Culture\n// Focus: Doing the Right Thing\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: Hiring Manager and Culture\n// Focus: Doing the Right Thing\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: Hiring Manager and Culture\n# Focus: Doing the Right Thing\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: Hiring Manager and Culture\n// Focus: Doing the Right Thing\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-intern-s10-r4-q1": {
  "id": "zom-intern-s10-r4-q1",
  "title": "Transparency in a Postmortem",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Hiring Manager and Culture",
  "tags": [
   "Zomato",
   "Hiring Manager and Culture",
   "Transparency",
   "Set 10"
  ],
  "paragraphs": [
   "Zomato hiring-manager round: ownership, customer obsession, speed, honesty and teamwork.",
   "Scenario: You are an SDE intern embedded with a squad. You discover your change contributed to an outage, and nobody else has noticed yet.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Transparency",
    "explanation": "Use concrete first-person examples with the customer impact and what you learned."
   }
  ],
  "constraints": [
   "Be specific about what you personally did.",
   "Put the customer first.",
   "Be honest about mistakes and trade-offs."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Hiring Manager and Culture\n// Focus: Transparency\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: Hiring Manager and Culture\n// Focus: Transparency\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: Hiring Manager and Culture\n# Focus: Transparency\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: Hiring Manager and Culture\n// Focus: Transparency\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde1-s1-r1-q1": {
  "id": "zom-sde1-s1-r1-q1",
  "title": "Shortest Batch Reaching Target",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Sliding Window",
  "tags": [
   "Zomato Round 1",
   "Sliding Window",
   "Set 1"
  ],
  "paragraphs": [
   "Return the minimal length of a contiguous subarray of positive integers whose sum is at least target, or 0."
  ],
  "examples": [
   {
    "input": "target = 7, nums = [2,3,1,2,4,3]",
    "output": "2"
   },
   {
    "input": "target = 4, nums = [1,4,4]",
    "output": "1"
   }
  ],
  "constraints": [
   "Target O(N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde1-s1-r1-q1-v1",
    "input": "7\n[2,3,1,2,4,3]",
    "expectedOutput": "2"
   },
   {
    "id": "zom-sde1-s1-r1-q1-v2",
    "input": "4\n[1,4,4]",
    "expectedOutput": "1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde1-s1-r1-q1-h1",
    "input": "11\n[1,1,1,1]",
    "expectedOutput": "0"
   },
   {
    "id": "zom-sde1-s1-r1-q1-h2",
    "input": "3\n[1,1,1]",
    "expectedOutput": "3"
   },
   {
    "id": "zom-sde1-s1-r1-q1-h3",
    "input": "15\n[5,1,3,5,10,7,4,9,2,8]",
    "expectedOutput": "2"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number} target\n * @param {number[]} nums\n * @return {number}\n */\nfunction minSubArrayLen(target, nums) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def minSubArrayLen(self, target: int, nums: List[int]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int minSubArrayLen(int target, vector<int>& nums) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "zom-sde1-s1-r1-q2"
 },
 "zom-sde1-s1-r1-q2": {
  "id": "zom-sde1-s1-r1-q2",
  "title": "Subarrays With Small Product",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Sliding Window",
  "tags": [
   "Zomato Round 1",
   "Sliding Window",
   "Set 1"
  ],
  "paragraphs": [
   "Count contiguous subarrays of positive integers whose product is strictly less than k."
  ],
  "examples": [
   {
    "input": "nums = [10,5,2,6], k = 100",
    "output": "8"
   },
   {
    "input": "nums = [1,2,3], k = 0",
    "output": "0"
   }
  ],
  "constraints": [
   "Target O(N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde1-s1-r1-q2-v1",
    "input": "[10,5,2,6]\n100",
    "expectedOutput": "8"
   },
   {
    "id": "zom-sde1-s1-r1-q2-v2",
    "input": "[1,2,3]\n0",
    "expectedOutput": "0"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde1-s1-r1-q2-h1",
    "input": "[1,1,1]\n2",
    "expectedOutput": "6"
   },
   {
    "id": "zom-sde1-s1-r1-q2-h2",
    "input": "[5]\n5",
    "expectedOutput": "0"
   },
   {
    "id": "zom-sde1-s1-r1-q2-h3",
    "input": "[2,3,4]\n25",
    "expectedOutput": "6"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @param {number} k\n * @return {number}\n */\nfunction numSubarrayProductLessThanK(nums, k) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int numSubarrayProductLessThanK(vector<int>& nums, int k) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "zom-sde1-s2-r1-q1": {
  "id": "zom-sde1-s2-r1-q1",
  "title": "Find Anagram Start Positions",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Sliding Window",
  "tags": [
   "Zomato Round 1",
   "Sliding Window",
   "Hash Table",
   "Set 2"
  ],
  "paragraphs": [
   "Return all start indices of substrings of s that are anagrams of p."
  ],
  "examples": [
   {
    "input": "s = \"cbaebabacd\", p = \"abc\"",
    "output": "[0,6]"
   },
   {
    "input": "s = \"abab\", p = \"ab\"",
    "output": "[0,1,2]"
   }
  ],
  "constraints": [
   "Target O(N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde1-s2-r1-q1-v1",
    "input": "\"cbaebabacd\"\n\"abc\"",
    "expectedOutput": "[0,6]"
   },
   {
    "id": "zom-sde1-s2-r1-q1-v2",
    "input": "\"abab\"\n\"ab\"",
    "expectedOutput": "[0,1,2]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde1-s2-r1-q1-h1",
    "input": "\"a\"\n\"ab\"",
    "expectedOutput": "[]"
   },
   {
    "id": "zom-sde1-s2-r1-q1-h2",
    "input": "\"aaaa\"\n\"aa\"",
    "expectedOutput": "[0,1,2]"
   },
   {
    "id": "zom-sde1-s2-r1-q1-h3",
    "input": "\"baa\"\n\"aa\"",
    "expectedOutput": "[1]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} s\n * @param {string} p\n * @return {number[]}\n */\nfunction findAnagrams(s, p) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def findAnagrams(self, s: str, p: str) -> List[int]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<int> findAnagrams(string s, string p) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "zom-sde1-s2-r1-q2"
 },
 "zom-sde1-s2-r1-q2": {
  "id": "zom-sde1-s2-r1-q2",
  "title": "Is a Permutation Inside",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Sliding Window",
  "tags": [
   "Zomato Round 1",
   "Sliding Window",
   "Set 2"
  ],
  "paragraphs": [
   "Return true if some permutation of s1 is a substring of s2."
  ],
  "examples": [
   {
    "input": "s1 = \"ab\", s2 = \"eidbaooo\"",
    "output": "true"
   },
   {
    "input": "s1 = \"ab\", s2 = \"eidboaoo\"",
    "output": "false"
   }
  ],
  "constraints": [
   "Target O(N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde1-s2-r1-q2-v1",
    "input": "\"ab\"\n\"eidbaooo\"",
    "expectedOutput": "true"
   },
   {
    "id": "zom-sde1-s2-r1-q2-v2",
    "input": "\"ab\"\n\"eidboaoo\"",
    "expectedOutput": "false"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde1-s2-r1-q2-h1",
    "input": "\"a\"\n\"a\"",
    "expectedOutput": "true"
   },
   {
    "id": "zom-sde1-s2-r1-q2-h2",
    "input": "\"abc\"\n\"ab\"",
    "expectedOutput": "false"
   },
   {
    "id": "zom-sde1-s2-r1-q2-h3",
    "input": "\"adc\"\n\"dcda\"",
    "expectedOutput": "true"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} s1\n * @param {string} s2\n * @return {boolean}\n */\nfunction checkInclusion(s1, s2) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def checkInclusion(self, s1: str, s2: str) -> bool:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    bool checkInclusion(string s1, string s2) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "zom-sde1-s3-r1-q1": {
  "id": "zom-sde1-s3-r1-q1",
  "title": "Longest Demand Mountain",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Two Pointers",
  "tags": [
   "Zomato Round 1",
   "Array",
   "Two Pointers",
   "Set 3"
  ],
  "paragraphs": [
   "Return the length of the longest contiguous mountain (strictly up then strictly down, length at least 3), or 0."
  ],
  "examples": [
   {
    "input": "arr = [2,1,4,7,3,2,5]",
    "output": "5"
   },
   {
    "input": "arr = [2,2,2]",
    "output": "0"
   }
  ],
  "constraints": [
   "Target O(N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde1-s3-r1-q1-v1",
    "input": "[2,1,4,7,3,2,5]",
    "expectedOutput": "5"
   },
   {
    "id": "zom-sde1-s3-r1-q1-v2",
    "input": "[2,2,2]",
    "expectedOutput": "0"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde1-s3-r1-q1-h1",
    "input": "[1,2,3,2,1,0]",
    "expectedOutput": "6"
   },
   {
    "id": "zom-sde1-s3-r1-q1-h2",
    "input": "[1,2]",
    "expectedOutput": "0"
   },
   {
    "id": "zom-sde1-s3-r1-q1-h3",
    "input": "[0,1,0,1,0]",
    "expectedOutput": "3"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} arr\n * @return {number}\n */\nfunction longestMountain(arr) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def longestMountain(self, arr: List[int]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int longestMountain(vector<int>& arr) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "zom-sde1-s3-r1-q2"
 },
 "zom-sde1-s3-r1-q2": {
  "id": "zom-sde1-s3-r1-q2",
  "title": "Best Multiplicative Streak",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Dynamic Programming",
  "tags": [
   "Zomato Round 1",
   "DP",
   "Array",
   "Set 3"
  ],
  "paragraphs": [
   "Return the largest product of any non-empty contiguous subarray."
  ],
  "examples": [
   {
    "input": "nums = [2,3,-2,4]",
    "output": "6"
   },
   {
    "input": "nums = [-2,0,-1]",
    "output": "0"
   }
  ],
  "constraints": [
   "Target O(N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde1-s3-r1-q2-v1",
    "input": "[2,3,-2,4]",
    "expectedOutput": "6"
   },
   {
    "id": "zom-sde1-s3-r1-q2-v2",
    "input": "[-2,0,-1]",
    "expectedOutput": "0"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde1-s3-r1-q2-h1",
    "input": "[-2,3,-4]",
    "expectedOutput": "24"
   },
   {
    "id": "zom-sde1-s3-r1-q2-h2",
    "input": "[0,2]",
    "expectedOutput": "2"
   },
   {
    "id": "zom-sde1-s3-r1-q2-h3",
    "input": "[-1]",
    "expectedOutput": "-1"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @return {number}\n */\nfunction maxProduct(nums) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def maxProduct(self, nums: List[int]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int maxProduct(vector<int>& nums) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "zom-sde1-s4-r1-q1": {
  "id": "zom-sde1-s4-r1-q1",
  "title": "Best Circular Shift Window",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Dynamic Programming",
  "tags": [
   "Zomato Round 1",
   "DP",
   "Array",
   "Set 4"
  ],
  "paragraphs": [
   "The array is circular. Return the maximum sum of a non-empty subarray that may wrap around the end."
  ],
  "examples": [
   {
    "input": "nums = [1,-2,3,-2]",
    "output": "3"
   },
   {
    "input": "nums = [5,-3,5]",
    "output": "10"
   }
  ],
  "constraints": [
   "Target O(N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde1-s4-r1-q1-v1",
    "input": "[1,-2,3,-2]",
    "expectedOutput": "3"
   },
   {
    "id": "zom-sde1-s4-r1-q1-v2",
    "input": "[5,-3,5]",
    "expectedOutput": "10"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde1-s4-r1-q1-h1",
    "input": "[-3,-2,-3]",
    "expectedOutput": "-2"
   },
   {
    "id": "zom-sde1-s4-r1-q1-h2",
    "input": "[3,1,3,2,6]",
    "expectedOutput": "15"
   },
   {
    "id": "zom-sde1-s4-r1-q1-h3",
    "input": "[2,-2,2,7,8,0]",
    "expectedOutput": "19"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @return {number}\n */\nfunction maxSubarraySumCircular(nums) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def maxSubarraySumCircular(self, nums: List[int]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int maxSubarraySumCircular(vector<int>& nums) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "zom-sde1-s4-r1-q2"
 },
 "zom-sde1-s4-r1-q2": {
  "id": "zom-sde1-s4-r1-q2",
  "title": "Starting Depot for a Loop",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Greedy",
  "tags": [
   "Zomato Round 1",
   "Greedy",
   "Array",
   "Set 4"
  ],
  "paragraphs": [
   "Stations on a circle give gas[i] and cost cost[i] to reach the next. Return the starting station index that completes the loop, or -1."
  ],
  "examples": [
   {
    "input": "gas = [1,2,3,4,5], cost = [3,4,5,1,2]",
    "output": "3"
   },
   {
    "input": "gas = [2,3,4], cost = [3,4,3]",
    "output": "-1"
   }
  ],
  "constraints": [
   "Target O(N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde1-s4-r1-q2-v1",
    "input": "[1,2,3,4,5]\n[3,4,5,1,2]",
    "expectedOutput": "3"
   },
   {
    "id": "zom-sde1-s4-r1-q2-v2",
    "input": "[2,3,4]\n[3,4,3]",
    "expectedOutput": "-1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde1-s4-r1-q2-h1",
    "input": "[5]\n[4]",
    "expectedOutput": "0"
   },
   {
    "id": "zom-sde1-s4-r1-q2-h2",
    "input": "[3,1,1]\n[1,2,2]",
    "expectedOutput": "0"
   },
   {
    "id": "zom-sde1-s4-r1-q2-h3",
    "input": "[4,5,2,6,5,3]\n[3,2,7,3,2,9]",
    "expectedOutput": "-1"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} gas\n * @param {number[]} cost\n * @return {number}\n */\nfunction canCompleteCircuit(gas, cost) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int canCompleteCircuit(vector<int>& gas, vector<int>& cost) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "zom-sde1-s5-r1-q1": {
  "id": "zom-sde1-s5-r1-q1",
  "title": "Minimum Reward Points",
  "difficulty": "Hard",
  "company": "Zomato",
  "category": "Greedy",
  "tags": [
   "Zomato Round 1",
   "Greedy",
   "Array",
   "Set 5"
  ],
  "paragraphs": [
   "Each delivery partner gets at least 1 point, and a partner with a higher rating than an adjacent neighbour must get more points than that neighbour. Return the minimum total points."
  ],
  "examples": [
   {
    "input": "ratings = [1,0,2]",
    "output": "5"
   },
   {
    "input": "ratings = [1,2,2]",
    "output": "4"
   }
  ],
  "constraints": [
   "Target O(N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde1-s5-r1-q1-v1",
    "input": "[1,0,2]",
    "expectedOutput": "5"
   },
   {
    "id": "zom-sde1-s5-r1-q1-v2",
    "input": "[1,2,2]",
    "expectedOutput": "4"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde1-s5-r1-q1-h1",
    "input": "[1]",
    "expectedOutput": "1"
   },
   {
    "id": "zom-sde1-s5-r1-q1-h2",
    "input": "[1,3,2,2,1]",
    "expectedOutput": "7"
   },
   {
    "id": "zom-sde1-s5-r1-q1-h3",
    "input": "[5,4,3,2,1]",
    "expectedOutput": "15"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} ratings\n * @return {number}\n */\nfunction minRewards(ratings) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def minRewards(self, ratings: List[int]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int minRewards(vector<int>& ratings) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "zom-sde1-s5-r1-q2"
 },
 "zom-sde1-s5-r1-q2": {
  "id": "zom-sde1-s5-r1-q2",
  "title": "Fewest Slots to Cancel",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Greedy",
  "tags": [
   "Zomato Round 1",
   "Greedy",
   "Intervals",
   "Set 5"
  ],
  "paragraphs": [
   "Return the minimum number of intervals to remove so the rest do not overlap (touching endpoints are fine)."
  ],
  "examples": [
   {
    "input": "intervals = [[1,2],[2,3],[3,4],[1,3]]",
    "output": "1"
   },
   {
    "input": "intervals = [[1,2],[1,2],[1,2]]",
    "output": "2"
   }
  ],
  "constraints": [
   "Target O(N log N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde1-s5-r1-q2-v1",
    "input": "[[1,2],[2,3],[3,4],[1,3]]",
    "expectedOutput": "1"
   },
   {
    "id": "zom-sde1-s5-r1-q2-v2",
    "input": "[[1,2],[1,2],[1,2]]",
    "expectedOutput": "2"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde1-s5-r1-q2-h1",
    "input": "[[1,2],[2,3]]",
    "expectedOutput": "0"
   },
   {
    "id": "zom-sde1-s5-r1-q2-h2",
    "input": "[[1,100],[11,22],[1,11],[2,12]]",
    "expectedOutput": "2"
   },
   {
    "id": "zom-sde1-s5-r1-q2-h3",
    "input": "[[0,2],[1,3],[2,4],[3,5],[4,6]]",
    "expectedOutput": "2"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[][]} intervals\n * @return {number}\n */\nfunction eraseOverlapIntervals(intervals) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int eraseOverlapIntervals(vector<vector<int>>& intervals) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N log N)",
   "space": "O(1)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "zom-sde1-s6-r1-q1": {
  "id": "zom-sde1-s6-r1-q1",
  "title": "Fewest Pins to Burst Banners",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Greedy",
  "tags": [
   "Zomato Round 1",
   "Greedy",
   "Intervals",
   "Set 6"
  ],
  "paragraphs": [
   "Banners cover x-ranges [start, end]. One vertical pin bursts every banner it touches. Return the minimum number of pins."
  ],
  "examples": [
   {
    "input": "points = [[10,16],[2,8],[1,6],[7,12]]",
    "output": "2"
   },
   {
    "input": "points = [[1,2],[3,4],[5,6],[7,8]]",
    "output": "4"
   }
  ],
  "constraints": [
   "Target O(N log N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde1-s6-r1-q1-v1",
    "input": "[[10,16],[2,8],[1,6],[7,12]]",
    "expectedOutput": "2"
   },
   {
    "id": "zom-sde1-s6-r1-q1-v2",
    "input": "[[1,2],[3,4],[5,6],[7,8]]",
    "expectedOutput": "4"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde1-s6-r1-q1-h1",
    "input": "[[1,2],[2,3],[3,4],[4,5]]",
    "expectedOutput": "2"
   },
   {
    "id": "zom-sde1-s6-r1-q1-h2",
    "input": "[[1,5]]",
    "expectedOutput": "1"
   },
   {
    "id": "zom-sde1-s6-r1-q1-h3",
    "input": "[[2,3],[2,3]]",
    "expectedOutput": "1"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[][]} points\n * @return {number}\n */\nfunction findMinPins(points) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def findMinPins(self, points: List[List[int]]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int findMinPins(vector<vector<int>>& points) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N log N)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "zom-sde1-s6-r1-q2"
 },
 "zom-sde1-s6-r1-q2": {
  "id": "zom-sde1-s6-r1-q2",
  "title": "Partition Shifts by Zone Code",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Greedy",
  "tags": [
   "Zomato Round 1",
   "Greedy",
   "Two Pointers",
   "Set 6"
  ],
  "paragraphs": [
   "Split s into as many parts as possible so that each letter appears in at most one part. Return the sizes of the parts."
  ],
  "examples": [
   {
    "input": "s = \"ababcbacadefegdehijhklij\"",
    "output": "[9,7,8]"
   },
   {
    "input": "s = \"eccbbbbdec\"",
    "output": "[10]"
   }
  ],
  "constraints": [
   "Target O(N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde1-s6-r1-q2-v1",
    "input": "\"ababcbacadefegdehijhklij\"",
    "expectedOutput": "[9,7,8]"
   },
   {
    "id": "zom-sde1-s6-r1-q2-v2",
    "input": "\"eccbbbbdec\"",
    "expectedOutput": "[10]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde1-s6-r1-q2-h1",
    "input": "\"a\"",
    "expectedOutput": "[1]"
   },
   {
    "id": "zom-sde1-s6-r1-q2-h2",
    "input": "\"abc\"",
    "expectedOutput": "[1,1,1]"
   },
   {
    "id": "zom-sde1-s6-r1-q2-h3",
    "input": "\"aaabbb\"",
    "expectedOutput": "[3,3]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} s\n * @return {number[]}\n */\nfunction partitionLabels(s) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def partitionLabels(self, s: str) -> List[int]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<int> partitionLabels(string s) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "zom-sde1-s7-r1-q1": {
  "id": "zom-sde1-s7-r1-q1",
  "title": "Insert a New Delivery Window",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Intervals",
  "tags": [
   "Zomato Round 1",
   "Intervals",
   "Array",
   "Set 7"
  ],
  "paragraphs": [
   "Given non-overlapping sorted intervals and a new interval, insert it and merge overlaps. Return the result."
  ],
  "examples": [
   {
    "input": "intervals = [[1,3],[6,9]], newInterval = [2,5]",
    "output": "[[1,5],[6,9]]"
   },
   {
    "input": "intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]",
    "output": "[[1,2],[3,10],[12,16]]"
   }
  ],
  "constraints": [
   "Target O(N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde1-s7-r1-q1-v1",
    "input": "[[1,3],[6,9]]\n[2,5]",
    "expectedOutput": "[[1,5],[6,9]]"
   },
   {
    "id": "zom-sde1-s7-r1-q1-v2",
    "input": "[[1,2],[3,5],[6,7],[8,10],[12,16]]\n[4,8]",
    "expectedOutput": "[[1,2],[3,10],[12,16]]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde1-s7-r1-q1-h1",
    "input": "[]\n[5,7]",
    "expectedOutput": "[[5,7]]"
   },
   {
    "id": "zom-sde1-s7-r1-q1-h2",
    "input": "[[1,5]]\n[2,3]",
    "expectedOutput": "[[1,5]]"
   },
   {
    "id": "zom-sde1-s7-r1-q1-h3",
    "input": "[[1,5]]\n[6,8]",
    "expectedOutput": "[[1,5],[6,8]]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[][]} intervals\n * @param {number[]} newInterval\n * @return {number[][]}\n */\nfunction insertInterval(intervals, newInterval) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def insertInterval(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<vector<int>> insertInterval(vector<vector<int>>& intervals, vector<int>& newInterval) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "zom-sde1-s7-r1-q2"
 },
 "zom-sde1-s7-r1-q2": {
  "id": "zom-sde1-s7-r1-q2",
  "title": "Delivery Convoy Count",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Sorting / Stack",
  "tags": [
   "Zomato Round 1",
   "Stack",
   "Sorting",
   "Set 7"
  ],
  "paragraphs": [
   "Cars drive toward a target on a single lane and cannot pass; a faster car catches up and then travels at the slower car's speed, forming a fleet. Return the number of fleets that arrive."
  ],
  "examples": [
   {
    "input": "target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]",
    "output": "3"
   },
   {
    "input": "target = 10, position = [3], speed = [3]",
    "output": "1"
   }
  ],
  "constraints": [
   "Target O(N log N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde1-s7-r1-q2-v1",
    "input": "12\n[10,8,0,5,3]\n[2,4,1,1,3]",
    "expectedOutput": "3"
   },
   {
    "id": "zom-sde1-s7-r1-q2-v2",
    "input": "10\n[3]\n[3]",
    "expectedOutput": "1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde1-s7-r1-q2-h1",
    "input": "100\n[0,2,4]\n[4,2,1]",
    "expectedOutput": "1"
   },
   {
    "id": "zom-sde1-s7-r1-q2-h2",
    "input": "10\n[6,8]\n[3,2]",
    "expectedOutput": "2"
   },
   {
    "id": "zom-sde1-s7-r1-q2-h3",
    "input": "20\n[4,8,12]\n[1,1,1]",
    "expectedOutput": "3"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number} target\n * @param {number[]} position\n * @param {number[]} speed\n * @return {number}\n */\nfunction carFleet(target, position, speed) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int carFleet(int target, vector<int>& position, vector<int>& speed) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N log N)",
   "space": "O(N)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "zom-sde1-s8-r1-q1": {
  "id": "zom-sde1-s8-r1-q1",
  "title": "Rating Span for Each Day",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Monotonic Stack",
  "tags": [
   "Zomato Round 1",
   "Stack",
   "Set 8"
  ],
  "paragraphs": [
   "For each day, return how many consecutive days up to and including it had a rating less than or equal to that day's rating."
  ],
  "examples": [
   {
    "input": "ratings = [100,80,60,70,60,75,85]",
    "output": "[1,1,1,2,1,4,6]"
   },
   {
    "input": "ratings = [1]",
    "output": "[1]"
   }
  ],
  "constraints": [
   "Target O(N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde1-s8-r1-q1-v1",
    "input": "[100,80,60,70,60,75,85]",
    "expectedOutput": "[1,1,1,2,1,4,6]"
   },
   {
    "id": "zom-sde1-s8-r1-q1-v2",
    "input": "[1]",
    "expectedOutput": "[1]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde1-s8-r1-q1-h1",
    "input": "[3,3,3]",
    "expectedOutput": "[1,2,3]"
   },
   {
    "id": "zom-sde1-s8-r1-q1-h2",
    "input": "[5,4,3]",
    "expectedOutput": "[1,1,1]"
   },
   {
    "id": "zom-sde1-s8-r1-q1-h3",
    "input": "[1,2,3]",
    "expectedOutput": "[1,2,3]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} ratings\n * @return {number[]}\n */\nfunction ratingSpans(ratings) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def ratingSpans(self, ratings: List[int]) -> List[int]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<int> ratingSpans(vector<int>& ratings) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "zom-sde1-s8-r1-q2"
 },
 "zom-sde1-s8-r1-q2": {
  "id": "zom-sde1-s8-r1-q2",
  "title": "Next Higher Surge in a Cycle",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Monotonic Stack",
  "tags": [
   "Zomato Round 1",
   "Stack",
   "Array",
   "Set 8"
  ],
  "paragraphs": [
   "The array is circular. For each element, return the next strictly greater element looking forward (wrapping around), or -1."
  ],
  "examples": [
   {
    "input": "nums = [1,2,1]",
    "output": "[2,-1,2]"
   },
   {
    "input": "nums = [1,2,3,4,3]",
    "output": "[2,3,4,-1,4]"
   }
  ],
  "constraints": [
   "Target O(N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde1-s8-r1-q2-v1",
    "input": "[1,2,1]",
    "expectedOutput": "[2,-1,2]"
   },
   {
    "id": "zom-sde1-s8-r1-q2-v2",
    "input": "[1,2,3,4,3]",
    "expectedOutput": "[2,3,4,-1,4]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde1-s8-r1-q2-h1",
    "input": "[5,4,3]",
    "expectedOutput": "[-1,5,5]"
   },
   {
    "id": "zom-sde1-s8-r1-q2-h2",
    "input": "[1]",
    "expectedOutput": "[-1]"
   },
   {
    "id": "zom-sde1-s8-r1-q2-h3",
    "input": "[2,2,2]",
    "expectedOutput": "[-1,-1,-1]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @return {number[]}\n */\nfunction nextGreaterCircular(nums) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def nextGreaterCircular(self, nums: List[int]) -> List[int]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<int> nextGreaterCircular(vector<int>& nums) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(N)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "zom-sde1-s9-r1-q1": {
  "id": "zom-sde1-s9-r1-q1",
  "title": "Cheapest Climb Through Tiers",
  "difficulty": "Easy",
  "company": "Zomato",
  "category": "Dynamic Programming",
  "tags": [
   "Zomato Round 1",
   "DP",
   "Set 9"
  ],
  "paragraphs": [
   "Each tier has a cost to step on; you may start at tier 0 or 1 and climb 1 or 2 tiers at a time. Return the minimum cost to pass the last tier."
  ],
  "examples": [
   {
    "input": "cost = [10,15,20]",
    "output": "15"
   },
   {
    "input": "cost = [1,100,1,1,1,100,1,1,100,1]",
    "output": "6"
   }
  ],
  "constraints": [
   "Target O(N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde1-s9-r1-q1-v1",
    "input": "[10,15,20]",
    "expectedOutput": "15"
   },
   {
    "id": "zom-sde1-s9-r1-q1-v2",
    "input": "[1,100,1,1,1,100,1,1,100,1]",
    "expectedOutput": "6"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde1-s9-r1-q1-h1",
    "input": "[0,0]",
    "expectedOutput": "0"
   },
   {
    "id": "zom-sde1-s9-r1-q1-h2",
    "input": "[5,5,5,5]",
    "expectedOutput": "10"
   },
   {
    "id": "zom-sde1-s9-r1-q1-h3",
    "input": "[1,2]",
    "expectedOutput": "1"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} cost\n * @return {number}\n */\nfunction minCostClimbing(cost) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def minCostClimbing(self, cost: List[int]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int minCostClimbing(vector<int>& cost) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "zom-sde1-s9-r1-q2"
 },
 "zom-sde1-s9-r1-q2": {
  "id": "zom-sde1-s9-r1-q2",
  "title": "Routes Around Blocked Streets",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Dynamic Programming",
  "tags": [
   "Zomato Round 1",
   "DP",
   "Matrix",
   "Set 9"
  ],
  "paragraphs": [
   "Count the routes from the top-left to the bottom-right moving only right or down, where 1 marks a blocked cell."
  ],
  "examples": [
   {
    "input": "grid = [[0,0,0],[0,1,0],[0,0,0]]",
    "output": "2"
   },
   {
    "input": "grid = [[0,1],[0,0]]",
    "output": "1"
   }
  ],
  "constraints": [
   "Target O(M*N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde1-s9-r1-q2-v1",
    "input": "[[0,0,0],[0,1,0],[0,0,0]]",
    "expectedOutput": "2"
   },
   {
    "id": "zom-sde1-s9-r1-q2-v2",
    "input": "[[0,1],[0,0]]",
    "expectedOutput": "1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde1-s9-r1-q2-h1",
    "input": "[[1]]",
    "expectedOutput": "0"
   },
   {
    "id": "zom-sde1-s9-r1-q2-h2",
    "input": "[[0,0],[0,0]]",
    "expectedOutput": "2"
   },
   {
    "id": "zom-sde1-s9-r1-q2-h3",
    "input": "[[0,0,0,0],[0,0,1,0],[0,0,0,0]]",
    "expectedOutput": "4"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[][]} grid\n * @return {number}\n */\nfunction uniquePathsBlocked(grid) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def uniquePathsBlocked(self, grid: List[List[int]]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int uniquePathsBlocked(vector<vector<int>>& grid) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(M*N)",
   "space": "O(N)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "zom-sde1-s10-r1-q1": {
  "id": "zom-sde1-s10-r1-q1",
  "title": "Longest Palindromic Subsequence",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Dynamic Programming",
  "tags": [
   "Zomato Round 1",
   "DP",
   "String",
   "Set 10"
  ],
  "paragraphs": [
   "Return the length of the longest palindromic subsequence (not necessarily contiguous) of s."
  ],
  "examples": [
   {
    "input": "s = \"bbbab\"",
    "output": "4"
   },
   {
    "input": "s = \"cbbd\"",
    "output": "2"
   }
  ],
  "constraints": [
   "Target O(N^2) time and O(N^2) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde1-s10-r1-q1-v1",
    "input": "\"bbbab\"",
    "expectedOutput": "4"
   },
   {
    "id": "zom-sde1-s10-r1-q1-v2",
    "input": "\"cbbd\"",
    "expectedOutput": "2"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde1-s10-r1-q1-h1",
    "input": "\"a\"",
    "expectedOutput": "1"
   },
   {
    "id": "zom-sde1-s10-r1-q1-h2",
    "input": "\"abcde\"",
    "expectedOutput": "1"
   },
   {
    "id": "zom-sde1-s10-r1-q1-h3",
    "input": "\"agbdba\"",
    "expectedOutput": "5"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} s\n * @return {number}\n */\nfunction longestPalindromeSubseq(s) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def longestPalindromeSubseq(self, s: str) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int longestPalindromeSubseq(string s) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N^2)",
   "space": "O(N^2)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "zom-sde1-s10-r1-q2"
 },
 "zom-sde1-s10-r1-q2": {
  "id": "zom-sde1-s10-r1-q2",
  "title": "Cheapest Rider Path in a Grid",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Dynamic Programming",
  "tags": [
   "Zomato Round 1",
   "DP",
   "Matrix",
   "Set 10"
  ],
  "paragraphs": [
   "Each cell has a cost. Moving only right or down, return the minimum total cost from the top-left to the bottom-right."
  ],
  "examples": [
   {
    "input": "grid = [[1,3,1],[1,5,1],[4,2,1]]",
    "output": "7"
   },
   {
    "input": "grid = [[1,2,3],[4,5,6]]",
    "output": "12"
   }
  ],
  "constraints": [
   "Target O(M*N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde1-s10-r1-q2-v1",
    "input": "[[1,3,1],[1,5,1],[4,2,1]]",
    "expectedOutput": "7"
   },
   {
    "id": "zom-sde1-s10-r1-q2-v2",
    "input": "[[1,2,3],[4,5,6]]",
    "expectedOutput": "12"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde1-s10-r1-q2-h1",
    "input": "[[5]]",
    "expectedOutput": "5"
   },
   {
    "id": "zom-sde1-s10-r1-q2-h2",
    "input": "[[1,2],[1,1]]",
    "expectedOutput": "3"
   },
   {
    "id": "zom-sde1-s10-r1-q2-h3",
    "input": "[[2,1],[1,1],[3,1]]",
    "expectedOutput": "5"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[][]} grid\n * @return {number}\n */\nfunction minPathSum(grid) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def minPathSum(self, grid: List[List[int]]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int minPathSum(vector<vector<int>>& grid) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(M*N)",
   "space": "O(N)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "zom-sde1-s1-r2-q1": {
  "id": "zom-sde1-s1-r2-q1",
  "title": "Connected Kitchen Networks",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Union Find",
  "tags": [
   "Zomato Round 2",
   "Union Find",
   "Graph",
   "Set 1"
  ],
  "paragraphs": [
   "isConnected[i][j] = 1 means kitchens i and j are directly connected. Return the number of groups of directly or indirectly connected kitchens.",
   "Round 2 is a live problem-solving round: after your code works you will defend the approach, complexity and edge cases."
  ],
  "examples": [
   {
    "input": "isConnected = [[1,1,0],[1,1,0],[0,0,1]]",
    "output": "2"
   },
   {
    "input": "isConnected = [[1,0,0],[0,1,0],[0,0,1]]",
    "output": "3"
   }
  ],
  "constraints": [
   "Target O(N^2 a(N)) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde1-s1-r2-q1-v1",
    "input": "[[1,1,0],[1,1,0],[0,0,1]]",
    "expectedOutput": "2"
   },
   {
    "id": "zom-sde1-s1-r2-q1-v2",
    "input": "[[1,0,0],[0,1,0],[0,0,1]]",
    "expectedOutput": "3"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde1-s1-r2-q1-h1",
    "input": "[[1]]",
    "expectedOutput": "1"
   },
   {
    "id": "zom-sde1-s1-r2-q1-h2",
    "input": "[[1,1,1],[1,1,1],[1,1,1]]",
    "expectedOutput": "1"
   },
   {
    "id": "zom-sde1-s1-r2-q1-h3",
    "input": "[[1,0,0,1],[0,1,1,0],[0,1,1,1],[1,0,1,1]]",
    "expectedOutput": "1"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[][]} isConnected\n * @return {number}\n */\nfunction findCircleNum(isConnected) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def findCircleNum(self, isConnected: List[List[int]]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int findCircleNum(vector<vector<int>>& isConnected) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N^2 a(N))",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde1-s2-r2-q1": {
  "id": "zom-sde1-s2-r2-q1",
  "title": "Redundant Delivery Link",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Union Find",
  "tags": [
   "Zomato Round 2",
   "Union Find",
   "Graph",
   "Set 2"
  ],
  "paragraphs": [
   "A tree of n nodes had one extra edge added. Return the last edge in the input that can be removed so the result is a tree.",
   "Round 2 is a live problem-solving round: after your code works you will defend the approach, complexity and edge cases."
  ],
  "examples": [
   {
    "input": "edges = [[1,2],[1,3],[2,3]]",
    "output": "[2,3]"
   },
   {
    "input": "edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]",
    "output": "[1,4]"
   }
  ],
  "constraints": [
   "Target O(N a(N)) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde1-s2-r2-q1-v1",
    "input": "[[1,2],[1,3],[2,3]]",
    "expectedOutput": "[2,3]"
   },
   {
    "id": "zom-sde1-s2-r2-q1-v2",
    "input": "[[1,2],[2,3],[3,4],[1,4],[1,5]]",
    "expectedOutput": "[1,4]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde1-s2-r2-q1-h1",
    "input": "[[1,2],[2,3],[1,3]]",
    "expectedOutput": "[1,3]"
   },
   {
    "id": "zom-sde1-s2-r2-q1-h2",
    "input": "[[1,4],[3,4],[1,3],[1,2],[4,5]]",
    "expectedOutput": "[1,3]"
   },
   {
    "id": "zom-sde1-s2-r2-q1-h3",
    "input": "[[2,3],[1,2],[1,3]]",
    "expectedOutput": "[1,3]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[][]} edges\n * @return {number[]}\n */\nfunction findRedundantConnection(edges) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<int> findRedundantConnection(vector<vector<int>>& edges) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N a(N))",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde1-s3-r2-q1": {
  "id": "zom-sde1-s3-r2-q1",
  "title": "Split Riders Into Two Teams",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Graph Coloring",
  "tags": [
   "Zomato Round 2",
   "BFS",
   "Graph",
   "Set 3"
  ],
  "paragraphs": [
   "graph[i] lists the riders that conflict with rider i. Return true if the riders can be split into two teams with no conflict inside a team.",
   "Round 2 is a live problem-solving round: after your code works you will defend the approach, complexity and edge cases."
  ],
  "examples": [
   {
    "input": "graph = [[1,2,3],[0,2],[0,1,3],[0,2]]",
    "output": "false"
   },
   {
    "input": "graph = [[1,3],[0,2],[1,3],[0,2]]",
    "output": "true"
   }
  ],
  "constraints": [
   "Target O(V+E) time and O(V) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde1-s3-r2-q1-v1",
    "input": "[[1,2,3],[0,2],[0,1,3],[0,2]]",
    "expectedOutput": "false"
   },
   {
    "id": "zom-sde1-s3-r2-q1-v2",
    "input": "[[1,3],[0,2],[1,3],[0,2]]",
    "expectedOutput": "true"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde1-s3-r2-q1-h1",
    "input": "[[]]",
    "expectedOutput": "true"
   },
   {
    "id": "zom-sde1-s3-r2-q1-h2",
    "input": "[[1],[0]]",
    "expectedOutput": "true"
   },
   {
    "id": "zom-sde1-s3-r2-q1-h3",
    "input": "[[1,2],[0,2],[0,1]]",
    "expectedOutput": "false"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[][]} graph\n * @return {boolean}\n */\nfunction isBipartite(graph) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def isBipartite(self, graph: List[List[int]]) -> bool:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    bool isBipartite(vector<vector<int>>& graph) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(V+E)",
   "space": "O(V)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde1-s4-r2-q1": {
  "id": "zom-sde1-s4-r2-q1",
  "title": "Capture Enclosed Zones",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "DFS / Matrix",
  "tags": [
   "Zomato Round 2",
   "DFS",
   "Matrix",
   "Set 4"
  ],
  "paragraphs": [
   "Rows are strings of 'X' and 'O'. Flip every 'O' region that is completely surrounded by 'X' (not touching the border) into 'X'. Return the rows.",
   "Round 2 is a live problem-solving round: after your code works you will defend the approach, complexity and edge cases."
  ],
  "examples": [
   {
    "input": "board = [\"XXXX\",\"XOOX\",\"XXOX\",\"XOXX\"]",
    "output": "[\"XXXX\",\"XXXX\",\"XXXX\",\"XOXX\"]"
   },
   {
    "input": "board = [\"X\"]",
    "output": "[\"X\"]"
   }
  ],
  "constraints": [
   "Target O(M*N) time and O(M*N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde1-s4-r2-q1-v1",
    "input": "[\"XXXX\",\"XOOX\",\"XXOX\",\"XOXX\"]",
    "expectedOutput": "[\"XXXX\",\"XXXX\",\"XXXX\",\"XOXX\"]"
   },
   {
    "id": "zom-sde1-s4-r2-q1-v2",
    "input": "[\"X\"]",
    "expectedOutput": "[\"X\"]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde1-s4-r2-q1-h1",
    "input": "[\"OOO\",\"OXO\",\"OOO\"]",
    "expectedOutput": "[\"OOO\",\"OXO\",\"OOO\"]"
   },
   {
    "id": "zom-sde1-s4-r2-q1-h2",
    "input": "[\"XOX\",\"OXO\",\"XOX\"]",
    "expectedOutput": "[\"XOX\",\"OXO\",\"XOX\"]"
   },
   {
    "id": "zom-sde1-s4-r2-q1-h3",
    "input": "[\"XXX\",\"XOX\",\"XXX\"]",
    "expectedOutput": "[\"XXX\",\"XXX\",\"XXX\"]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string[]} board\n * @return {string[]}\n */\nfunction captureRegions(board) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def captureRegions(self, board: List[str]) -> List[str]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<string> captureRegions(vector<string>& board) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(M*N)",
   "space": "O(M*N)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde1-s5-r2-q1": {
  "id": "zom-sde1-s5-r2-q1",
  "title": "Smoothest Delivery Route",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Dijkstra / Binary Search",
  "tags": [
   "Zomato Round 2",
   "Dijkstra",
   "Matrix",
   "Heap",
   "Set 5"
  ],
  "paragraphs": [
   "Moving between 4-adjacent cells costs the absolute height difference; a route's effort is its largest single step. Return the minimum effort from top-left to bottom-right.",
   "Round 2 is a live problem-solving round: after your code works you will defend the approach, complexity and edge cases."
  ],
  "examples": [
   {
    "input": "heights = [[1,2,2],[3,8,2],[5,3,5]]",
    "output": "2"
   },
   {
    "input": "heights = [[1,2,3],[3,8,4],[5,3,5]]",
    "output": "1"
   }
  ],
  "constraints": [
   "Target O(MN log MN) time and O(MN) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde1-s5-r2-q1-v1",
    "input": "[[1,2,2],[3,8,2],[5,3,5]]",
    "expectedOutput": "2"
   },
   {
    "id": "zom-sde1-s5-r2-q1-v2",
    "input": "[[1,2,3],[3,8,4],[5,3,5]]",
    "expectedOutput": "1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde1-s5-r2-q1-h1",
    "input": "[[1]]",
    "expectedOutput": "0"
   },
   {
    "id": "zom-sde1-s5-r2-q1-h2",
    "input": "[[1,10,6,7,9,10,4,9]]",
    "expectedOutput": "9"
   },
   {
    "id": "zom-sde1-s5-r2-q1-h3",
    "input": "[[4,3],[2,1]]",
    "expectedOutput": "2"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[][]} heights\n * @return {number}\n */\nfunction minimumEffortPath(heights) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def minimumEffortPath(self, heights: List[List[int]]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int minimumEffortPath(vector<vector<int>>& heights) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(MN log MN)",
   "space": "O(MN)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde1-s6-r2-q1": {
  "id": "zom-sde1-s6-r2-q1",
  "title": "Wait for the Flood to Subside",
  "difficulty": "Hard",
  "company": "Zomato",
  "category": "Dijkstra / Heap",
  "tags": [
   "Zomato Round 2",
   "Heap",
   "Matrix",
   "Set 6"
  ],
  "paragraphs": [
   "At time t the water depth everywhere is t, and you can move between adjacent cells only if both heights are at most t. Return the least time to reach the bottom-right from the top-left.",
   "Round 2 is a live problem-solving round: after your code works you will defend the approach, complexity and edge cases."
  ],
  "examples": [
   {
    "input": "grid = [[0,2],[1,3]]",
    "output": "3"
   },
   {
    "input": "grid = [[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]",
    "output": "16"
   }
  ],
  "constraints": [
   "Target O(N^2 log N) time and O(N^2) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde1-s6-r2-q1-v1",
    "input": "[[0,2],[1,3]]",
    "expectedOutput": "3"
   },
   {
    "id": "zom-sde1-s6-r2-q1-v2",
    "input": "[[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]",
    "expectedOutput": "16"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde1-s6-r2-q1-h1",
    "input": "[[0]]",
    "expectedOutput": "0"
   },
   {
    "id": "zom-sde1-s6-r2-q1-h2",
    "input": "[[3,2],[0,1]]",
    "expectedOutput": "3"
   },
   {
    "id": "zom-sde1-s6-r2-q1-h3",
    "input": "[[0,3],[2,1]]",
    "expectedOutput": "2"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[][]} grid\n * @return {number}\n */\nfunction swimInWater(grid) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def swimInWater(self, grid: List[List[int]]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int swimInWater(vector<vector<int>>& grid) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N^2 log N)",
   "space": "O(N^2)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde1-s7-r2-q1": {
  "id": "zom-sde1-s7-r2-q1",
  "title": "Top K Most Ordered Dishes",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Heap / Sorting",
  "tags": [
   "Zomato Round 2",
   "Heap",
   "Hash Table",
   "Set 7"
  ],
  "paragraphs": [
   "Return the k most frequent words, ordered by frequency descending and then alphabetically.",
   "Round 2 is a live problem-solving round: after your code works you will defend the approach, complexity and edge cases."
  ],
  "examples": [
   {
    "input": "words = [\"i\",\"love\",\"leetcode\",\"i\",\"love\",\"coding\"], k = 2",
    "output": "[\"i\",\"love\"]"
   },
   {
    "input": "words = [\"the\",\"day\",\"is\",\"sunny\",\"the\",\"the\",\"the\",\"sunny\",\"is\",\"is\"], k = 4",
    "output": "[\"the\",\"is\",\"sunny\",\"day\"]"
   }
  ],
  "constraints": [
   "Target O(N log K) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde1-s7-r2-q1-v1",
    "input": "[\"i\",\"love\",\"leetcode\",\"i\",\"love\",\"coding\"]\n2",
    "expectedOutput": "[\"i\",\"love\"]"
   },
   {
    "id": "zom-sde1-s7-r2-q1-v2",
    "input": "[\"the\",\"day\",\"is\",\"sunny\",\"the\",\"the\",\"the\",\"sunny\",\"is\",\"is\"]\n4",
    "expectedOutput": "[\"the\",\"is\",\"sunny\",\"day\"]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde1-s7-r2-q1-h1",
    "input": "[\"a\"]\n1",
    "expectedOutput": "[\"a\"]"
   },
   {
    "id": "zom-sde1-s7-r2-q1-h2",
    "input": "[\"b\",\"a\"]\n2",
    "expectedOutput": "[\"a\",\"b\"]"
   },
   {
    "id": "zom-sde1-s7-r2-q1-h3",
    "input": "[\"x\",\"y\",\"x\",\"y\",\"z\"]\n1",
    "expectedOutput": "[\"x\"]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string[]} words\n * @param {number} k\n * @return {string[]}\n */\nfunction topKFrequentWords(words, k) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def topKFrequentWords(self, words: List[str], k: int) -> List[str]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<string> topKFrequentWords(vector<string>& words, int k) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N log K)",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde1-s8-r2-q1": {
  "id": "zom-sde1-s8-r2-q1",
  "title": "Can Items Be Rearranged Apart",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Greedy / Heap",
  "tags": [
   "Zomato Round 2",
   "Greedy",
   "Heap",
   "Set 8"
  ],
  "paragraphs": [
   "Return true if the characters of s can be rearranged so that no two adjacent characters are equal.",
   "Round 2 is a live problem-solving round: after your code works you will defend the approach, complexity and edge cases."
  ],
  "examples": [
   {
    "input": "s = \"aab\"",
    "output": "true"
   },
   {
    "input": "s = \"aaab\"",
    "output": "false"
   }
  ],
  "constraints": [
   "Target O(N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde1-s8-r2-q1-v1",
    "input": "\"aab\"",
    "expectedOutput": "true"
   },
   {
    "id": "zom-sde1-s8-r2-q1-v2",
    "input": "\"aaab\"",
    "expectedOutput": "false"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde1-s8-r2-q1-h1",
    "input": "\"a\"",
    "expectedOutput": "true"
   },
   {
    "id": "zom-sde1-s8-r2-q1-h2",
    "input": "\"aabbcc\"",
    "expectedOutput": "true"
   },
   {
    "id": "zom-sde1-s8-r2-q1-h3",
    "input": "\"aaaabc\"",
    "expectedOutput": "false"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} s\n * @return {boolean}\n */\nfunction canReorganize(s) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def canReorganize(self, s: str) -> bool:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    bool canReorganize(string s) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde1-s9-r2-q1": {
  "id": "zom-sde1-s9-r2-q1",
  "title": "Is the Hub Network a Tree",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Union Find",
  "tags": [
   "Zomato Round 2",
   "Union Find",
   "Graph",
   "Set 9"
  ],
  "paragraphs": [
   "Return true if the n hubs and the undirected edges form a single connected acyclic network (a tree).",
   "Round 2 is a live problem-solving round: after your code works you will defend the approach, complexity and edge cases."
  ],
  "examples": [
   {
    "input": "n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]",
    "output": "true"
   },
   {
    "input": "n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]",
    "output": "false"
   }
  ],
  "constraints": [
   "Target O(N a(N)) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde1-s9-r2-q1-v1",
    "input": "5\n[[0,1],[0,2],[0,3],[1,4]]",
    "expectedOutput": "true"
   },
   {
    "id": "zom-sde1-s9-r2-q1-v2",
    "input": "5\n[[0,1],[1,2],[2,3],[1,3],[1,4]]",
    "expectedOutput": "false"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde1-s9-r2-q1-h1",
    "input": "1\n[]",
    "expectedOutput": "true"
   },
   {
    "id": "zom-sde1-s9-r2-q1-h2",
    "input": "4\n[[0,1],[2,3]]",
    "expectedOutput": "false"
   },
   {
    "id": "zom-sde1-s9-r2-q1-h3",
    "input": "3\n[[0,1],[1,2]]",
    "expectedOutput": "true"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number} n\n * @param {number[][]} edges\n * @return {boolean}\n */\nfunction validTree(n, edges) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def validTree(self, n: int, edges: List[List[int]]) -> bool:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    bool validTree(int n, vector<vector<int>>& edges) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N a(N))",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde1-s10-r2-q1": {
  "id": "zom-sde1-s10-r2-q1",
  "title": "Quietest Delivery Hub",
  "difficulty": "Hard",
  "company": "Zomato",
  "category": "Floyd-Warshall",
  "tags": [
   "Zomato Round 2",
   "Graph",
   "Shortest Path",
   "Set 10"
  ],
  "paragraphs": [
   "Return the city with the fewest cities reachable within distanceThreshold; ties go to the largest city number.",
   "Round 2 is a live problem-solving round: after your code works you will defend the approach, complexity and edge cases."
  ],
  "examples": [
   {
    "input": "n = 4, edges = [[0,1,3],[1,2,1],[1,3,4],[2,3,1]], distanceThreshold = 4",
    "output": "3"
   },
   {
    "input": "n = 5, edges = [[0,1,2],[0,4,8],[1,2,3],[1,4,2],[2,3,1],[3,4,1]], distanceThreshold = 2",
    "output": "0"
   }
  ],
  "constraints": [
   "Target O(N^3) time and O(N^2) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde1-s10-r2-q1-v1",
    "input": "4\n[[0,1,3],[1,2,1],[1,3,4],[2,3,1]]\n4",
    "expectedOutput": "3"
   },
   {
    "id": "zom-sde1-s10-r2-q1-v2",
    "input": "5\n[[0,1,2],[0,4,8],[1,2,3],[1,4,2],[2,3,1],[3,4,1]]\n2",
    "expectedOutput": "0"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde1-s10-r2-q1-h1",
    "input": "2\n[[0,1,5]]\n3",
    "expectedOutput": "1"
   },
   {
    "id": "zom-sde1-s10-r2-q1-h2",
    "input": "3\n[[0,1,1],[1,2,1]]\n1",
    "expectedOutput": "2"
   },
   {
    "id": "zom-sde1-s10-r2-q1-h3",
    "input": "4\n[[0,1,1],[1,2,1],[2,3,1]]\n10",
    "expectedOutput": "3"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number} n\n * @param {number[][]} edges\n * @param {number} distanceThreshold\n * @return {number}\n */\nfunction findTheCity(n, edges, distanceThreshold) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def findTheCity(self, n: int, edges: List[List[int]], distanceThreshold: int) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int findTheCity(int n, vector<vector<int>>& edges, int distanceThreshold) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N^3)",
   "space": "O(N^2)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde1-s1-r3-q1": {
  "id": "zom-sde1-s1-r3-q1",
  "title": "Design Order Tracking Service",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Low-Level and High-Level Design",
  "tags": [
   "Zomato Round 3",
   "Set 1"
  ],
  "paragraphs": [
   "Zomato design round: model and scale a food-delivery system component.",
   "Topic: Design Order Tracking Service. Focus areas: Status events, polling vs push, idempotent updates.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clean modelling, realistic scale numbers, failure handling and trade-offs for peak load."
   }
  ],
  "constraints": [
   "State assumptions: orders per second, peak factor, data size.",
   "Cover failure modes: retries, duplicates, partial failure, peak load.",
   "Justify each trade-off."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Notes, definitions, schema or class sketch\n",
   "javascript": "// Notes, definitions, schema or class sketch\n",
   "cpp": "// Notes, definitions, schema or class sketch\n"
  },
  "optimalComplexity": {
   "time": "N/A (discussion)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde1-s2-r3-q1": {
  "id": "zom-sde1-s2-r3-q1",
  "title": "Restaurant Search and Filters",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Low-Level and High-Level Design",
  "tags": [
   "Zomato Round 3",
   "Set 2"
  ],
  "paragraphs": [
   "Zomato design round: model and scale a food-delivery system component.",
   "Topic: Restaurant Search and Filters. Focus areas: Index design, ranking signals, pagination.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clean modelling, realistic scale numbers, failure handling and trade-offs for peak load."
   }
  ],
  "constraints": [
   "State assumptions: orders per second, peak factor, data size.",
   "Cover failure modes: retries, duplicates, partial failure, peak load.",
   "Justify each trade-off."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Notes, definitions, schema or class sketch\n",
   "javascript": "// Notes, definitions, schema or class sketch\n",
   "cpp": "// Notes, definitions, schema or class sketch\n"
  },
  "optimalComplexity": {
   "time": "N/A (discussion)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde1-s3-r3-q1": {
  "id": "zom-sde1-s3-r3-q1",
  "title": "Delivery Partner Assignment",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Low-Level and High-Level Design",
  "tags": [
   "Zomato Round 3",
   "Set 3"
  ],
  "paragraphs": [
   "Zomato design round: model and scale a food-delivery system component.",
   "Topic: Delivery Partner Assignment. Focus areas: Nearest vs batched matching, fairness, timeouts.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clean modelling, realistic scale numbers, failure handling and trade-offs for peak load."
   }
  ],
  "constraints": [
   "State assumptions: orders per second, peak factor, data size.",
   "Cover failure modes: retries, duplicates, partial failure, peak load.",
   "Justify each trade-off."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Notes, definitions, schema or class sketch\n",
   "javascript": "// Notes, definitions, schema or class sketch\n",
   "cpp": "// Notes, definitions, schema or class sketch\n"
  },
  "optimalComplexity": {
   "time": "N/A (discussion)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde1-s4-r3-q1": {
  "id": "zom-sde1-s4-r3-q1",
  "title": "Cart Service With Offers",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Low-Level and High-Level Design",
  "tags": [
   "Zomato Round 3",
   "Set 4"
  ],
  "paragraphs": [
   "Zomato design round: model and scale a food-delivery system component.",
   "Topic: Cart Service With Offers. Focus areas: Consistency, price changes, offer validation.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clean modelling, realistic scale numbers, failure handling and trade-offs for peak load."
   }
  ],
  "constraints": [
   "State assumptions: orders per second, peak factor, data size.",
   "Cover failure modes: retries, duplicates, partial failure, peak load.",
   "Justify each trade-off."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Notes, definitions, schema or class sketch\n",
   "javascript": "// Notes, definitions, schema or class sketch\n",
   "cpp": "// Notes, definitions, schema or class sketch\n"
  },
  "optimalComplexity": {
   "time": "N/A (discussion)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde1-s5-r3-q1": {
  "id": "zom-sde1-s5-r3-q1",
  "title": "Rating Aggregation at Scale",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Low-Level and High-Level Design",
  "tags": [
   "Zomato Round 3",
   "Set 5"
  ],
  "paragraphs": [
   "Zomato design round: model and scale a food-delivery system component.",
   "Topic: Rating Aggregation at Scale. Focus areas: Write amplification, approximate counts, caching.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clean modelling, realistic scale numbers, failure handling and trade-offs for peak load."
   }
  ],
  "constraints": [
   "State assumptions: orders per second, peak factor, data size.",
   "Cover failure modes: retries, duplicates, partial failure, peak load.",
   "Justify each trade-off."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Notes, definitions, schema or class sketch\n",
   "javascript": "// Notes, definitions, schema or class sketch\n",
   "cpp": "// Notes, definitions, schema or class sketch\n"
  },
  "optimalComplexity": {
   "time": "N/A (discussion)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde1-s6-r3-q1": {
  "id": "zom-sde1-s6-r3-q1",
  "title": "Notification Fan-out",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Low-Level and High-Level Design",
  "tags": [
   "Zomato Round 3",
   "Set 6"
  ],
  "paragraphs": [
   "Zomato design round: model and scale a food-delivery system component.",
   "Topic: Notification Fan-out. Focus areas: Queues, retries, rate limits, deduplication.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clean modelling, realistic scale numbers, failure handling and trade-offs for peak load."
   }
  ],
  "constraints": [
   "State assumptions: orders per second, peak factor, data size.",
   "Cover failure modes: retries, duplicates, partial failure, peak load.",
   "Justify each trade-off."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Notes, definitions, schema or class sketch\n",
   "javascript": "// Notes, definitions, schema or class sketch\n",
   "cpp": "// Notes, definitions, schema or class sketch\n"
  },
  "optimalComplexity": {
   "time": "N/A (discussion)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde1-s7-r3-q1": {
  "id": "zom-sde1-s7-r3-q1",
  "title": "Menu Service With Caching",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Low-Level and High-Level Design",
  "tags": [
   "Zomato Round 3",
   "Set 7"
  ],
  "paragraphs": [
   "Zomato design round: model and scale a food-delivery system component.",
   "Topic: Menu Service With Caching. Focus areas: Cache invalidation, availability flags, TTLs.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clean modelling, realistic scale numbers, failure handling and trade-offs for peak load."
   }
  ],
  "constraints": [
   "State assumptions: orders per second, peak factor, data size.",
   "Cover failure modes: retries, duplicates, partial failure, peak load.",
   "Justify each trade-off."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Notes, definitions, schema or class sketch\n",
   "javascript": "// Notes, definitions, schema or class sketch\n",
   "cpp": "// Notes, definitions, schema or class sketch\n"
  },
  "optimalComplexity": {
   "time": "N/A (discussion)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde1-s8-r3-q1": {
  "id": "zom-sde1-s8-r3-q1",
  "title": "Payments Retry and Idempotency",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Low-Level and High-Level Design",
  "tags": [
   "Zomato Round 3",
   "Set 8"
  ],
  "paragraphs": [
   "Zomato design round: model and scale a food-delivery system component.",
   "Topic: Payments Retry and Idempotency. Focus areas: Idempotency keys, webhooks, reconciliation.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clean modelling, realistic scale numbers, failure handling and trade-offs for peak load."
   }
  ],
  "constraints": [
   "State assumptions: orders per second, peak factor, data size.",
   "Cover failure modes: retries, duplicates, partial failure, peak load.",
   "Justify each trade-off."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Notes, definitions, schema or class sketch\n",
   "javascript": "// Notes, definitions, schema or class sketch\n",
   "cpp": "// Notes, definitions, schema or class sketch\n"
  },
  "optimalComplexity": {
   "time": "N/A (discussion)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde1-s9-r3-q1": {
  "id": "zom-sde1-s9-r3-q1",
  "title": "Real-Time Delivery ETA",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Low-Level and High-Level Design",
  "tags": [
   "Zomato Round 3",
   "Set 9"
  ],
  "paragraphs": [
   "Zomato design round: model and scale a food-delivery system component.",
   "Topic: Real-Time Delivery ETA. Focus areas: Features, fallbacks, freshness, error bounds.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clean modelling, realistic scale numbers, failure handling and trade-offs for peak load."
   }
  ],
  "constraints": [
   "State assumptions: orders per second, peak factor, data size.",
   "Cover failure modes: retries, duplicates, partial failure, peak load.",
   "Justify each trade-off."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Notes, definitions, schema or class sketch\n",
   "javascript": "// Notes, definitions, schema or class sketch\n",
   "cpp": "// Notes, definitions, schema or class sketch\n"
  },
  "optimalComplexity": {
   "time": "N/A (discussion)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde1-s10-r3-q1": {
  "id": "zom-sde1-s10-r3-q1",
  "title": "Coupons and Promotions Engine",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Low-Level and High-Level Design",
  "tags": [
   "Zomato Round 3",
   "Set 10"
  ],
  "paragraphs": [
   "Zomato design round: model and scale a food-delivery system component.",
   "Topic: Coupons and Promotions Engine. Focus areas: Budgets, abuse limits, targeting.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clean modelling, realistic scale numbers, failure handling and trade-offs for peak load."
   }
  ],
  "constraints": [
   "State assumptions: orders per second, peak factor, data size.",
   "Cover failure modes: retries, duplicates, partial failure, peak load.",
   "Justify each trade-off."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Notes, definitions, schema or class sketch\n",
   "javascript": "// Notes, definitions, schema or class sketch\n",
   "cpp": "// Notes, definitions, schema or class sketch\n"
  },
  "optimalComplexity": {
   "time": "N/A (discussion)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde1-s1-r4-q1": {
  "id": "zom-sde1-s1-r4-q1",
  "title": "Customer Escalation on a Failed Order",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Hiring Manager and Culture",
  "tags": [
   "Zomato",
   "Hiring Manager and Culture",
   "Customer Obsession",
   "Set 1"
  ],
  "paragraphs": [
   "Zomato hiring-manager round: ownership, customer obsession, speed, honesty and teamwork.",
   "Scenario: You are an SDE-1 owning a feature in your squad. A customer with a repeatedly failed order escalates publicly, and the fix needs another team's help.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Customer Obsession",
    "explanation": "Use concrete first-person examples with the customer impact and what you learned."
   }
  ],
  "constraints": [
   "Be specific about what you personally did.",
   "Put the customer first.",
   "Be honest about mistakes and trade-offs."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Hiring Manager and Culture\n// Focus: Customer Obsession\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: Hiring Manager and Culture\n// Focus: Customer Obsession\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: Hiring Manager and Culture\n# Focus: Customer Obsession\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: Hiring Manager and Culture\n// Focus: Customer Obsession\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde1-s2-r4-q1": {
  "id": "zom-sde1-s2-r4-q1",
  "title": "Ownership During a Peak-Night Outage",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Hiring Manager and Culture",
  "tags": [
   "Zomato",
   "Hiring Manager and Culture",
   "Ownership / Bias for Action",
   "Set 2"
  ],
  "paragraphs": [
   "Zomato hiring-manager round: ownership, customer obsession, speed, honesty and teamwork.",
   "Scenario: You are an SDE-1 owning a feature in your squad. Ordering degrades during the busiest night of the year and the on-call owner is unreachable.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Ownership / Bias for Action",
    "explanation": "Use concrete first-person examples with the customer impact and what you learned."
   }
  ],
  "constraints": [
   "Be specific about what you personally did.",
   "Put the customer first.",
   "Be honest about mistakes and trade-offs."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Hiring Manager and Culture\n// Focus: Ownership / Bias for Action\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: Hiring Manager and Culture\n// Focus: Ownership / Bias for Action\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: Hiring Manager and Culture\n# Focus: Ownership / Bias for Action\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: Hiring Manager and Culture\n// Focus: Ownership / Bias for Action\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde1-s3-r4-q1": {
  "id": "zom-sde1-s3-r4-q1",
  "title": "Disagreeing With a Product Manager",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Hiring Manager and Culture",
  "tags": [
   "Zomato",
   "Hiring Manager and Culture",
   "Intellectual Honesty",
   "Set 3"
  ],
  "paragraphs": [
   "Zomato hiring-manager round: ownership, customer obsession, speed, honesty and teamwork.",
   "Scenario: You are an SDE-1 owning a feature in your squad. A PM wants a feature shipped this week that you think will hurt delivery reliability.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Intellectual Honesty",
    "explanation": "Use concrete first-person examples with the customer impact and what you learned."
   }
  ],
  "constraints": [
   "Be specific about what you personally did.",
   "Put the customer first.",
   "Be honest about mistakes and trade-offs."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Hiring Manager and Culture\n// Focus: Intellectual Honesty\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: Hiring Manager and Culture\n// Focus: Intellectual Honesty\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: Hiring Manager and Culture\n# Focus: Intellectual Honesty\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: Hiring Manager and Culture\n// Focus: Intellectual Honesty\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde1-s4-r4-q1": {
  "id": "zom-sde1-s4-r4-q1",
  "title": "Shipping Fast vs Quality",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Hiring Manager and Culture",
  "tags": [
   "Zomato",
   "Hiring Manager and Culture",
   "Judgment / Trade-offs",
   "Set 4"
  ],
  "paragraphs": [
   "Zomato hiring-manager round: ownership, customer obsession, speed, honesty and teamwork.",
   "Scenario: You are an SDE-1 owning a feature in your squad. Growth wants a launch in three days, but testing shows an edge case that affects a small share of orders.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Judgment / Trade-offs",
    "explanation": "Use concrete first-person examples with the customer impact and what you learned."
   }
  ],
  "constraints": [
   "Be specific about what you personally did.",
   "Put the customer first.",
   "Be honest about mistakes and trade-offs."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Hiring Manager and Culture\n// Focus: Judgment / Trade-offs\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: Hiring Manager and Culture\n// Focus: Judgment / Trade-offs\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: Hiring Manager and Culture\n# Focus: Judgment / Trade-offs\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: Hiring Manager and Culture\n// Focus: Judgment / Trade-offs\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde1-s5-r4-q1": {
  "id": "zom-sde1-s5-r4-q1",
  "title": "A New Vertical With No Playbook",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Hiring Manager and Culture",
  "tags": [
   "Zomato",
   "Hiring Manager and Culture",
   "Ambiguity",
   "Set 5"
  ],
  "paragraphs": [
   "Zomato hiring-manager round: ownership, customer obsession, speed, honesty and teamwork.",
   "Scenario: You are an SDE-1 owning a feature in your squad. You are asked to help launch a new quick-delivery vertical with unclear requirements and tight timelines.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Ambiguity",
    "explanation": "Use concrete first-person examples with the customer impact and what you learned."
   }
  ],
  "constraints": [
   "Be specific about what you personally did.",
   "Put the customer first.",
   "Be honest about mistakes and trade-offs."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Hiring Manager and Culture\n// Focus: Ambiguity\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: Hiring Manager and Culture\n// Focus: Ambiguity\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: Hiring Manager and Culture\n# Focus: Ambiguity\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: Hiring Manager and Culture\n// Focus: Ambiguity\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde1-s6-r4-q1": {
  "id": "zom-sde1-s6-r4-q1",
  "title": "An Experiment That Failed",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Hiring Manager and Culture",
  "tags": [
   "Zomato",
   "Hiring Manager and Culture",
   "Accountability / Learning",
   "Set 6"
  ],
  "paragraphs": [
   "Zomato hiring-manager round: ownership, customer obsession, speed, honesty and teamwork.",
   "Scenario: You are an SDE-1 owning a feature in your squad. An A/B test you championed made conversion worse, and leadership asks what happened.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Accountability / Learning",
    "explanation": "Use concrete first-person examples with the customer impact and what you learned."
   }
  ],
  "constraints": [
   "Be specific about what you personally did.",
   "Put the customer first.",
   "Be honest about mistakes and trade-offs."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Hiring Manager and Culture\n// Focus: Accountability / Learning\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: Hiring Manager and Culture\n// Focus: Accountability / Learning\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: Hiring Manager and Culture\n# Focus: Accountability / Learning\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: Hiring Manager and Culture\n// Focus: Accountability / Learning\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde1-s7-r4-q1": {
  "id": "zom-sde1-s7-r4-q1",
  "title": "Conflict With the Operations Team",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Hiring Manager and Culture",
  "tags": [
   "Zomato",
   "Hiring Manager and Culture",
   "Collaboration",
   "Set 7"
  ],
  "paragraphs": [
   "Zomato hiring-manager round: ownership, customer obsession, speed, honesty and teamwork.",
   "Scenario: You are an SDE-1 owning a feature in your squad. Ops blames your system for late deliveries while your data points to rider supply issues.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Collaboration",
    "explanation": "Use concrete first-person examples with the customer impact and what you learned."
   }
  ],
  "constraints": [
   "Be specific about what you personally did.",
   "Put the customer first.",
   "Be honest about mistakes and trade-offs."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Hiring Manager and Culture\n// Focus: Collaboration\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: Hiring Manager and Culture\n// Focus: Collaboration\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: Hiring Manager and Culture\n# Focus: Collaboration\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: Hiring Manager and Culture\n// Focus: Collaboration\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde1-s8-r4-q1": {
  "id": "zom-sde1-s8-r4-q1",
  "title": "Helping Someone Outside Your Scope",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Hiring Manager and Culture",
  "tags": [
   "Zomato",
   "Hiring Manager and Culture",
   "Teamwork / Giving",
   "Set 8"
  ],
  "paragraphs": [
   "Zomato hiring-manager round: ownership, customer obsession, speed, honesty and teamwork.",
   "Scenario: You are an SDE-1 owning a feature in your squad. A teammate on another squad is stuck on a critical bug while you have your own deadlines.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Teamwork / Giving",
    "explanation": "Use concrete first-person examples with the customer impact and what you learned."
   }
  ],
  "constraints": [
   "Be specific about what you personally did.",
   "Put the customer first.",
   "Be honest about mistakes and trade-offs."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Hiring Manager and Culture\n// Focus: Teamwork / Giving\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: Hiring Manager and Culture\n// Focus: Teamwork / Giving\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: Hiring Manager and Culture\n# Focus: Teamwork / Giving\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: Hiring Manager and Culture\n// Focus: Teamwork / Giving\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde1-s9-r4-q1": {
  "id": "zom-sde1-s9-r4-q1",
  "title": "Surge Pricing Fairness",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Hiring Manager and Culture",
  "tags": [
   "Zomato",
   "Hiring Manager and Culture",
   "Doing the Right Thing",
   "Set 9"
  ],
  "paragraphs": [
   "Zomato hiring-manager round: ownership, customer obsession, speed, honesty and teamwork.",
   "Scenario: You are an SDE-1 owning a feature in your squad. Data shows a surge rule increases revenue but disproportionately hurts customers in certain areas.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Doing the Right Thing",
    "explanation": "Use concrete first-person examples with the customer impact and what you learned."
   }
  ],
  "constraints": [
   "Be specific about what you personally did.",
   "Put the customer first.",
   "Be honest about mistakes and trade-offs."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Hiring Manager and Culture\n// Focus: Doing the Right Thing\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: Hiring Manager and Culture\n// Focus: Doing the Right Thing\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: Hiring Manager and Culture\n# Focus: Doing the Right Thing\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: Hiring Manager and Culture\n// Focus: Doing the Right Thing\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde1-s10-r4-q1": {
  "id": "zom-sde1-s10-r4-q1",
  "title": "Transparency in a Postmortem",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Hiring Manager and Culture",
  "tags": [
   "Zomato",
   "Hiring Manager and Culture",
   "Transparency",
   "Set 10"
  ],
  "paragraphs": [
   "Zomato hiring-manager round: ownership, customer obsession, speed, honesty and teamwork.",
   "Scenario: You are an SDE-1 owning a feature in your squad. You discover your change contributed to an outage, and nobody else has noticed yet.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Transparency",
    "explanation": "Use concrete first-person examples with the customer impact and what you learned."
   }
  ],
  "constraints": [
   "Be specific about what you personally did.",
   "Put the customer first.",
   "Be honest about mistakes and trade-offs."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Hiring Manager and Culture\n// Focus: Transparency\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: Hiring Manager and Culture\n// Focus: Transparency\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: Hiring Manager and Culture\n# Focus: Transparency\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: Hiring Manager and Culture\n// Focus: Transparency\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde2-s1-r1-q1": {
  "id": "zom-sde2-s1-r1-q1",
  "title": "Median of Two City Feeds",
  "difficulty": "Hard",
  "company": "Zomato",
  "category": "Binary Search",
  "tags": [
   "Zomato Round 1",
   "Binary Search",
   "Divide and Conquer",
   "Set 1"
  ],
  "paragraphs": [
   "Given two sorted arrays, return the median of all their elements. Target O(log(min(M,N)))."
  ],
  "examples": [
   {
    "input": "a = [1,3], b = [2]",
    "output": "2.0"
   },
   {
    "input": "a = [1,2], b = [3,4]",
    "output": "2.5"
   }
  ],
  "constraints": [
   "Target O(log min(M,N)) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde2-s1-r1-q1-v1",
    "input": "[1,3]\n[2]",
    "expectedOutput": "2.0"
   },
   {
    "id": "zom-sde2-s1-r1-q1-v2",
    "input": "[1,2]\n[3,4]",
    "expectedOutput": "2.5"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde2-s1-r1-q1-h1",
    "input": "[]\n[1]",
    "expectedOutput": "1.0"
   },
   {
    "id": "zom-sde2-s1-r1-q1-h2",
    "input": "[0,0]\n[0,0]",
    "expectedOutput": "0.0"
   },
   {
    "id": "zom-sde2-s1-r1-q1-h3",
    "input": "[2]\n[]",
    "expectedOutput": "2.0"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} a\n * @param {number[]} b\n * @return {number}\n */\nfunction findMedianSortedArrays(a, b) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def findMedianSortedArrays(self, a: List[int], b: List[int]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int findMedianSortedArrays(vector<int>& a, vector<int>& b) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(log min(M,N))",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "zom-sde2-s1-r1-q2"
 },
 "zom-sde2-s1-r1-q2": {
  "id": "zom-sde2-s1-r1-q2",
  "title": "Rolling Median Delivery Time",
  "difficulty": "Hard",
  "company": "Zomato",
  "category": "Heaps / Order Statistics",
  "tags": [
   "Zomato Round 1",
   "Heap",
   "Sliding Window",
   "Set 1"
  ],
  "paragraphs": [
   "Return the median of every window of size k as it slides across the array."
  ],
  "examples": [
   {
    "input": "nums = [1,3,-1,-3,5,3,6,7], k = 3",
    "output": "[1.0,-1.0,-1.0,3.0,5.0,6.0]"
   },
   {
    "input": "nums = [1,2,3,4,2,3,1,4,2], k = 3",
    "output": "[2.0,3.0,3.0,3.0,2.0,3.0,2.0]"
   }
  ],
  "constraints": [
   "Target O(N log K) time and O(K) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde2-s1-r1-q2-v1",
    "input": "[1,3,-1,-3,5,3,6,7]\n3",
    "expectedOutput": "[1.0,-1.0,-1.0,3.0,5.0,6.0]"
   },
   {
    "id": "zom-sde2-s1-r1-q2-v2",
    "input": "[1,2,3,4,2,3,1,4,2]\n3",
    "expectedOutput": "[2.0,3.0,3.0,3.0,2.0,3.0,2.0]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde2-s1-r1-q2-h1",
    "input": "[5]\n1",
    "expectedOutput": "[5.0]"
   },
   {
    "id": "zom-sde2-s1-r1-q2-h2",
    "input": "[1,4,2,3]\n4",
    "expectedOutput": "[2.5]"
   },
   {
    "id": "zom-sde2-s1-r1-q2-h3",
    "input": "[2,2,2]\n2",
    "expectedOutput": "[2.0,2.0]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @param {number} k\n * @return {number}\n */\nfunction medianSlidingWindow(nums, k) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def medianSlidingWindow(self, nums: List[int], k: int) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int medianSlidingWindow(vector<int>& nums, int k) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N log K)",
   "space": "O(K)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "zom-sde2-s2-r1-q1": {
  "id": "zom-sde2-s2-r1-q1",
  "title": "Largest Open Kitchen Floor",
  "difficulty": "Hard",
  "company": "Zomato",
  "category": "Stack / DP",
  "tags": [
   "Zomato Round 1",
   "Stack",
   "Matrix",
   "Set 2"
  ],
  "paragraphs": [
   "Rows are strings of '0' and '1'. Return the area of the largest rectangle containing only '1'."
  ],
  "examples": [
   {
    "input": "matrix = [\"10100\",\"10111\",\"11111\",\"10010\"]",
    "output": "6"
   },
   {
    "input": "matrix = [\"0\"]",
    "output": "0"
   }
  ],
  "constraints": [
   "Target O(M*N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde2-s2-r1-q1-v1",
    "input": "[\"10100\",\"10111\",\"11111\",\"10010\"]",
    "expectedOutput": "6"
   },
   {
    "id": "zom-sde2-s2-r1-q1-v2",
    "input": "[\"0\"]",
    "expectedOutput": "0"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde2-s2-r1-q1-h1",
    "input": "[\"1\"]",
    "expectedOutput": "1"
   },
   {
    "id": "zom-sde2-s2-r1-q1-h2",
    "input": "[\"11\",\"11\"]",
    "expectedOutput": "4"
   },
   {
    "id": "zom-sde2-s2-r1-q1-h3",
    "input": "[\"01\",\"10\"]",
    "expectedOutput": "1"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string[]} matrix\n * @return {number}\n */\nfunction maximalRectangle(matrix) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def maximalRectangle(self, matrix: List[str]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int maximalRectangle(vector<string>& matrix) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(M*N)",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "zom-sde2-s2-r1-q2"
 },
 "zom-sde2-s2-r1-q2": {
  "id": "zom-sde2-s2-r1-q2",
  "title": "Nested Packaging Boxes",
  "difficulty": "Hard",
  "company": "Zomato",
  "category": "LIS / Binary Search",
  "tags": [
   "Zomato Round 1",
   "DP",
   "Binary Search",
   "Sorting",
   "Set 2"
  ],
  "paragraphs": [
   "Boxes [w, h] nest when both dimensions are strictly smaller. Return the maximum nesting depth."
  ],
  "examples": [
   {
    "input": "envelopes = [[5,4],[6,4],[6,7],[2,3]]",
    "output": "3"
   },
   {
    "input": "envelopes = [[1,1],[1,1],[1,1]]",
    "output": "1"
   }
  ],
  "constraints": [
   "Target O(N log N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde2-s2-r1-q2-v1",
    "input": "[[5,4],[6,4],[6,7],[2,3]]",
    "expectedOutput": "3"
   },
   {
    "id": "zom-sde2-s2-r1-q2-v2",
    "input": "[[1,1],[1,1],[1,1]]",
    "expectedOutput": "1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde2-s2-r1-q2-h1",
    "input": "[[1,2],[2,3],[3,4]]",
    "expectedOutput": "3"
   },
   {
    "id": "zom-sde2-s2-r1-q2-h2",
    "input": "[[4,5],[4,6],[6,7],[2,3],[1,1]]",
    "expectedOutput": "4"
   },
   {
    "id": "zom-sde2-s2-r1-q2-h3",
    "input": "[[1,3],[3,5],[6,7],[6,8],[8,4],[9,5]]",
    "expectedOutput": "3"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[][]} envelopes\n * @return {number}\n */\nfunction maxEnvelopes(envelopes) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def maxEnvelopes(self, envelopes: List[List[int]]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int maxEnvelopes(vector<vector<int>>& envelopes) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N log N)",
   "space": "O(N)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "zom-sde2-s3-r1-q1": {
  "id": "zom-sde2-s3-r1-q1",
  "title": "Fewest Drop Tests for Fragile Packs",
  "difficulty": "Hard",
  "company": "Zomato",
  "category": "DP / Math",
  "tags": [
   "Zomato Round 1",
   "DP",
   "Math",
   "Set 3"
  ],
  "paragraphs": [
   "With k identical test packs and a building of n floors, return the minimum number of drops that guarantees finding the critical floor in the worst case."
  ],
  "examples": [
   {
    "input": "k = 1, n = 2",
    "output": "2"
   },
   {
    "input": "k = 2, n = 6",
    "output": "3"
   }
  ],
  "constraints": [
   "Target O(K log N) time and O(K) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde2-s3-r1-q1-v1",
    "input": "1\n2",
    "expectedOutput": "2"
   },
   {
    "id": "zom-sde2-s3-r1-q1-v2",
    "input": "2\n6",
    "expectedOutput": "3"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde2-s3-r1-q1-h1",
    "input": "3\n14",
    "expectedOutput": "4"
   },
   {
    "id": "zom-sde2-s3-r1-q1-h2",
    "input": "2\n100",
    "expectedOutput": "14"
   },
   {
    "id": "zom-sde2-s3-r1-q1-h3",
    "input": "4\n5000",
    "expectedOutput": "19"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number} k\n * @param {number} n\n * @return {number}\n */\nfunction superEggDrop(k, n) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def superEggDrop(self, k: int, n: int) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int superEggDrop(int k, int n) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(K log N)",
   "space": "O(K)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "zom-sde2-s3-r1-q2"
 },
 "zom-sde2-s3-r1-q2": {
  "id": "zom-sde2-s3-r1-q2",
  "title": "Pattern Match With Dots and Stars",
  "difficulty": "Hard",
  "company": "Zomato",
  "category": "DP",
  "tags": [
   "Zomato Round 1",
   "DP",
   "String",
   "Recursion",
   "Set 3"
  ],
  "paragraphs": [
   "Implement matching of s against pattern p where '.' matches any single character and '*' matches zero or more of the preceding element. The whole string must match."
  ],
  "examples": [
   {
    "input": "s = \"aa\", p = \"a\"",
    "output": "false"
   },
   {
    "input": "s = \"aa\", p = \"a*\"",
    "output": "true"
   }
  ],
  "constraints": [
   "Target O(M*N) time and O(M*N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde2-s3-r1-q2-v1",
    "input": "\"aa\"\n\"a\"",
    "expectedOutput": "false"
   },
   {
    "id": "zom-sde2-s3-r1-q2-v2",
    "input": "\"aa\"\n\"a*\"",
    "expectedOutput": "true"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde2-s3-r1-q2-h1",
    "input": "\"ab\"\n\".*\"",
    "expectedOutput": "true"
   },
   {
    "id": "zom-sde2-s3-r1-q2-h2",
    "input": "\"mississippi\"\n\"mis*is*p*.\"",
    "expectedOutput": "false"
   },
   {
    "id": "zom-sde2-s3-r1-q2-h3",
    "input": "\"aab\"\n\"c*a*b\"",
    "expectedOutput": "true"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} s\n * @param {string} p\n * @return {boolean}\n */\nfunction isMatch(s, p) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def isMatch(self, s: str, p: str) -> bool:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    bool isMatch(string s, string p) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(M*N)",
   "space": "O(M*N)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "zom-sde2-s4-r1-q1": {
  "id": "zom-sde2-s4-r1-q1",
  "title": "Wildcard Coupon Matching",
  "difficulty": "Hard",
  "company": "Zomato",
  "category": "DP",
  "tags": [
   "Zomato Round 1",
   "DP",
   "String",
   "Greedy",
   "Set 4"
  ],
  "paragraphs": [
   "Match s against pattern p where '?' matches one character and '*' matches any sequence (including empty). The whole string must match."
  ],
  "examples": [
   {
    "input": "s = \"aa\", p = \"a\"",
    "output": "false"
   },
   {
    "input": "s = \"aa\", p = \"*\"",
    "output": "true"
   }
  ],
  "constraints": [
   "Target O(M*N) time and O(M*N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde2-s4-r1-q1-v1",
    "input": "\"aa\"\n\"a\"",
    "expectedOutput": "false"
   },
   {
    "id": "zom-sde2-s4-r1-q1-v2",
    "input": "\"aa\"\n\"*\"",
    "expectedOutput": "true"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde2-s4-r1-q1-h1",
    "input": "\"cb\"\n\"?a\"",
    "expectedOutput": "false"
   },
   {
    "id": "zom-sde2-s4-r1-q1-h2",
    "input": "\"adceb\"\n\"*a*b\"",
    "expectedOutput": "true"
   },
   {
    "id": "zom-sde2-s4-r1-q1-h3",
    "input": "\"acdcb\"\n\"a*c?b\"",
    "expectedOutput": "false"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} s\n * @param {string} p\n * @return {boolean}\n */\nfunction isWildcardMatch(s, p) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def isWildcardMatch(self, s: str, p: str) -> bool:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    bool isWildcardMatch(string s, string p) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(M*N)",
   "space": "O(M*N)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "zom-sde2-s4-r1-q2"
 },
 "zom-sde2-s4-r1-q2": {
  "id": "zom-sde2-s4-r1-q2",
  "title": "Count Distinct Order Subsequences",
  "difficulty": "Hard",
  "company": "Zomato",
  "category": "DP",
  "tags": [
   "Zomato Round 1",
   "DP",
   "String",
   "Set 4"
  ],
  "paragraphs": [
   "Return how many distinct subsequences of s equal t."
  ],
  "examples": [
   {
    "input": "s = \"rabbbit\", t = \"rabbit\"",
    "output": "3"
   },
   {
    "input": "s = \"babgbag\", t = \"bag\"",
    "output": "5"
   }
  ],
  "constraints": [
   "Target O(M*N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde2-s4-r1-q2-v1",
    "input": "\"rabbbit\"\n\"rabbit\"",
    "expectedOutput": "3"
   },
   {
    "id": "zom-sde2-s4-r1-q2-v2",
    "input": "\"babgbag\"\n\"bag\"",
    "expectedOutput": "5"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde2-s4-r1-q2-h1",
    "input": "\"a\"\n\"a\"",
    "expectedOutput": "1"
   },
   {
    "id": "zom-sde2-s4-r1-q2-h2",
    "input": "\"abc\"\n\"d\"",
    "expectedOutput": "0"
   },
   {
    "id": "zom-sde2-s4-r1-q2-h3",
    "input": "\"aaa\"\n\"aa\"",
    "expectedOutput": "3"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} s\n * @param {string} t\n * @return {number}\n */\nfunction numDistinct(s, t) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def numDistinct(self, s: str, t: str) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int numDistinct(string s, string t) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(M*N)",
   "space": "O(N)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "zom-sde2-s5-r1-q1": {
  "id": "zom-sde2-s5-r1-q1",
  "title": "Interleaved Delivery Logs",
  "difficulty": "Hard",
  "company": "Zomato",
  "category": "DP",
  "tags": [
   "Zomato Round 1",
   "DP",
   "String",
   "Set 5"
  ],
  "paragraphs": [
   "Return true if c is formed by interleaving a and b while preserving the order within each."
  ],
  "examples": [
   {
    "input": "a = \"aabcc\", b = \"dbbca\", c = \"aadbbcbcac\"",
    "output": "true"
   },
   {
    "input": "a = \"aabcc\", b = \"dbbca\", c = \"aadbbbaccc\"",
    "output": "false"
   }
  ],
  "constraints": [
   "Target O(M*N) time and O(M*N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde2-s5-r1-q1-v1",
    "input": "\"aabcc\"\n\"dbbca\"\n\"aadbbcbcac\"",
    "expectedOutput": "true"
   },
   {
    "id": "zom-sde2-s5-r1-q1-v2",
    "input": "\"aabcc\"\n\"dbbca\"\n\"aadbbbaccc\"",
    "expectedOutput": "false"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde2-s5-r1-q1-h1",
    "input": "\"\"\n\"\"\n\"\"",
    "expectedOutput": "true"
   },
   {
    "id": "zom-sde2-s5-r1-q1-h2",
    "input": "\"a\"\n\"\"\n\"a\"",
    "expectedOutput": "true"
   },
   {
    "id": "zom-sde2-s5-r1-q1-h3",
    "input": "\"ab\"\n\"cd\"\n\"acbd\"",
    "expectedOutput": "true"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} a\n * @param {string} b\n * @param {string} c\n * @return {boolean}\n */\nfunction isInterleave(a, b, c) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def isInterleave(self, a: str, b: str, c: str) -> bool:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    bool isInterleave(string a, string b, string c) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(M*N)",
   "space": "O(M*N)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "zom-sde2-s5-r1-q2"
 },
 "zom-sde2-s5-r1-q2": {
  "id": "zom-sde2-s5-r1-q2",
  "title": "Minimum Window Toggles",
  "difficulty": "Hard",
  "company": "Zomato",
  "category": "Greedy / Sliding Window",
  "tags": [
   "Zomato Round 1",
   "Greedy",
   "Bit Manipulation",
   "Set 5"
  ],
  "paragraphs": [
   "A toggle flips k consecutive bits. Return the minimum number of toggles to make every bit 1, or -1 if impossible."
  ],
  "examples": [
   {
    "input": "nums = [0,1,0], k = 1",
    "output": "2"
   },
   {
    "input": "nums = [1,1,0], k = 2",
    "output": "-1"
   }
  ],
  "constraints": [
   "Target O(N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde2-s5-r1-q2-v1",
    "input": "[0,1,0]\n1",
    "expectedOutput": "2"
   },
   {
    "id": "zom-sde2-s5-r1-q2-v2",
    "input": "[1,1,0]\n2",
    "expectedOutput": "-1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde2-s5-r1-q2-h1",
    "input": "[0,0,0,1,0,1,1,0]\n3",
    "expectedOutput": "3"
   },
   {
    "id": "zom-sde2-s5-r1-q2-h2",
    "input": "[1,1,1]\n2",
    "expectedOutput": "0"
   },
   {
    "id": "zom-sde2-s5-r1-q2-h3",
    "input": "[0,0,0]\n3",
    "expectedOutput": "1"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @param {number} k\n * @return {number}\n */\nfunction minKBitFlips(nums, k) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def minKBitFlips(self, nums: List[int], k: int) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int minKBitFlips(vector<int>& nums, int k) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(N)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "zom-sde2-s6-r1-q1": {
  "id": "zom-sde2-s6-r1-q1",
  "title": "Two-Rider Pickup Round Trip",
  "difficulty": "Hard",
  "company": "Zomato",
  "category": "DP",
  "tags": [
   "Zomato Round 1",
   "DP",
   "Matrix",
   "Set 6"
  ],
  "paragraphs": [
   "Cells hold orders (0 empty, -1 blocked). A rider goes top-left to bottom-right (right or down) and back (left or up), collecting each order once. Return the maximum orders, or 0 if no route."
  ],
  "examples": [
   {
    "input": "grid = [[0,1,-1],[1,0,-1],[1,1,1]]",
    "output": "5"
   },
   {
    "input": "grid = [[1,1,-1],[1,-1,1],[-1,1,1]]",
    "output": "0"
   }
  ],
  "constraints": [
   "Target O(N^3) time and O(N^3) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde2-s6-r1-q1-v1",
    "input": "[[0,1,-1],[1,0,-1],[1,1,1]]",
    "expectedOutput": "5"
   },
   {
    "id": "zom-sde2-s6-r1-q1-v2",
    "input": "[[1,1,-1],[1,-1,1],[-1,1,1]]",
    "expectedOutput": "0"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde2-s6-r1-q1-h1",
    "input": "[[1]]",
    "expectedOutput": "1"
   },
   {
    "id": "zom-sde2-s6-r1-q1-h2",
    "input": "[[1,1],[1,1]]",
    "expectedOutput": "4"
   },
   {
    "id": "zom-sde2-s6-r1-q1-h3",
    "input": "[[0,0],[0,0]]",
    "expectedOutput": "0"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[][]} grid\n * @return {number}\n */\nfunction cherryPickup(grid) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def cherryPickup(self, grid: List[List[int]]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int cherryPickup(vector<vector<int>>& grid) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N^3)",
   "space": "O(N^3)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "zom-sde2-s6-r1-q2"
 },
 "zom-sde2-s6-r1-q2": {
  "id": "zom-sde2-s6-r1-q2",
  "title": "Count Important Reversals",
  "difficulty": "Hard",
  "company": "Zomato",
  "category": "Merge Sort / BIT",
  "tags": [
   "Zomato Round 1",
   "Merge Sort",
   "Binary Indexed Tree",
   "Set 6"
  ],
  "paragraphs": [
   "Count pairs (i, j) with i < j and nums[i] > 2 * nums[j]. Aim for O(N log N)."
  ],
  "examples": [
   {
    "input": "nums = [1,3,2,3,1]",
    "output": "2"
   },
   {
    "input": "nums = [2,4,3,5,1]",
    "output": "3"
   }
  ],
  "constraints": [
   "Target O(N log N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde2-s6-r1-q2-v1",
    "input": "[1,3,2,3,1]",
    "expectedOutput": "2"
   },
   {
    "id": "zom-sde2-s6-r1-q2-v2",
    "input": "[2,4,3,5,1]",
    "expectedOutput": "3"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde2-s6-r1-q2-h1",
    "input": "[1]",
    "expectedOutput": "0"
   },
   {
    "id": "zom-sde2-s6-r1-q2-h2",
    "input": "[5,4,3,2,1]",
    "expectedOutput": "4"
   },
   {
    "id": "zom-sde2-s6-r1-q2-h3",
    "input": "[2147483647,2147483647,2147483647]",
    "expectedOutput": "0"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @return {number}\n */\nfunction reversePairs(nums) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def reversePairs(self, nums: List[int]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int reversePairs(vector<int>& nums) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N log N)",
   "space": "O(N)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "zom-sde2-s7-r1-q1": {
  "id": "zom-sde2-s7-r1-q1",
  "title": "Longest Well-Formed Bracket Run",
  "difficulty": "Hard",
  "company": "Zomato",
  "category": "Stack / DP",
  "tags": [
   "Zomato Round 1",
   "Stack",
   "DP",
   "String",
   "Set 7"
  ],
  "paragraphs": [
   "Return the length of the longest valid (well-formed) parentheses substring."
  ],
  "examples": [
   {
    "input": "s = \"(()\"",
    "output": "2"
   },
   {
    "input": "s = \")()())\"",
    "output": "4"
   }
  ],
  "constraints": [
   "Target O(N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde2-s7-r1-q1-v1",
    "input": "\"(()\"",
    "expectedOutput": "2"
   },
   {
    "id": "zom-sde2-s7-r1-q1-v2",
    "input": "\")()())\"",
    "expectedOutput": "4"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde2-s7-r1-q1-h1",
    "input": "\"\"",
    "expectedOutput": "0"
   },
   {
    "id": "zom-sde2-s7-r1-q1-h2",
    "input": "\"()(()\"",
    "expectedOutput": "2"
   },
   {
    "id": "zom-sde2-s7-r1-q1-h3",
    "input": "\"(()())\"",
    "expectedOutput": "6"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} s\n * @return {number}\n */\nfunction longestValidParentheses(s) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def longestValidParentheses(self, s: str) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int longestValidParentheses(string s) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "zom-sde2-s7-r1-q2"
 },
 "zom-sde2-s7-r1-q2": {
  "id": "zom-sde2-s7-r1-q2",
  "title": "Largest Divisible Chain of Pack Sizes",
  "difficulty": "Hard",
  "company": "Zomato",
  "category": "DP",
  "tags": [
   "Zomato Round 1",
   "DP",
   "Math",
   "Set 7"
  ],
  "paragraphs": [
   "Return the size of the largest subset in which every pair satisfies one dividing the other."
  ],
  "examples": [
   {
    "input": "nums = [1,2,3]",
    "output": "2"
   },
   {
    "input": "nums = [1,2,4,8]",
    "output": "4"
   }
  ],
  "constraints": [
   "Target O(N^2) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde2-s7-r1-q2-v1",
    "input": "[1,2,3]",
    "expectedOutput": "2"
   },
   {
    "id": "zom-sde2-s7-r1-q2-v2",
    "input": "[1,2,4,8]",
    "expectedOutput": "4"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde2-s7-r1-q2-h1",
    "input": "[]",
    "expectedOutput": "0"
   },
   {
    "id": "zom-sde2-s7-r1-q2-h2",
    "input": "[3,5,7]",
    "expectedOutput": "1"
   },
   {
    "id": "zom-sde2-s7-r1-q2-h3",
    "input": "[2,4,7,8,16,32]",
    "expectedOutput": "5"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @return {number}\n */\nfunction largestDivisibleSubset(nums) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def largestDivisibleSubset(self, nums: List[int]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int largestDivisibleSubset(vector<int>& nums) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N^2)",
   "space": "O(N)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "zom-sde2-s8-r1-q1": {
  "id": "zom-sde2-s8-r1-q1",
  "title": "Cheapest Combine Tree of Leaves",
  "difficulty": "Hard",
  "company": "Zomato",
  "category": "Monotonic Stack",
  "tags": [
   "Zomato Round 1",
   "Stack",
   "Greedy",
   "DP",
   "Set 8"
  ],
  "paragraphs": [
   "Leaf values are in order; each internal node's value is the product of the largest leaf in its left and right subtrees. Return the minimum sum of internal node values."
  ],
  "examples": [
   {
    "input": "arr = [6,2,4]",
    "output": "32"
   },
   {
    "input": "arr = [4,11]",
    "output": "44"
   }
  ],
  "constraints": [
   "Target O(N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde2-s8-r1-q1-v1",
    "input": "[6,2,4]",
    "expectedOutput": "32"
   },
   {
    "id": "zom-sde2-s8-r1-q1-v2",
    "input": "[4,11]",
    "expectedOutput": "44"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde2-s8-r1-q1-h1",
    "input": "[15,13,5,3,15]",
    "expectedOutput": "500"
   },
   {
    "id": "zom-sde2-s8-r1-q1-h2",
    "input": "[1,2,3,4]",
    "expectedOutput": "20"
   },
   {
    "id": "zom-sde2-s8-r1-q1-h3",
    "input": "[7,12,8,10]",
    "expectedOutput": "284"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} arr\n * @return {number}\n */\nfunction mctFromLeafValues(arr) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def mctFromLeafValues(self, arr: List[int]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int mctFromLeafValues(vector<int>& arr) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "zom-sde2-s8-r1-q2"
 },
 "zom-sde2-s8-r1-q2": {
  "id": "zom-sde2-s8-r1-q2",
  "title": "Minimum Cost to Merge Crates",
  "difficulty": "Hard",
  "company": "Zomato",
  "category": "Interval DP",
  "tags": [
   "Zomato Round 1",
   "DP",
   "Interval DP",
   "Set 8"
  ],
  "paragraphs": [
   "Exactly k consecutive piles can be merged at a cost equal to their total. Return the minimum cost to merge everything into one pile, or -1 if impossible."
  ],
  "examples": [
   {
    "input": "stones = [3,2,4,1], k = 2",
    "output": "20"
   },
   {
    "input": "stones = [3,2,4,1], k = 3",
    "output": "-1"
   }
  ],
  "constraints": [
   "Target O(N^3/K) time and O(N^2) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde2-s8-r1-q2-v1",
    "input": "[3,2,4,1]\n2",
    "expectedOutput": "20"
   },
   {
    "id": "zom-sde2-s8-r1-q2-v2",
    "input": "[3,2,4,1]\n3",
    "expectedOutput": "-1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde2-s8-r1-q2-h1",
    "input": "[3,5,1,2,6]\n3",
    "expectedOutput": "25"
   },
   {
    "id": "zom-sde2-s8-r1-q2-h2",
    "input": "[1]\n2",
    "expectedOutput": "0"
   },
   {
    "id": "zom-sde2-s8-r1-q2-h3",
    "input": "[4,6,5,2]\n2",
    "expectedOutput": "34"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} stones\n * @param {number} k\n * @return {number}\n */\nfunction mergeStones(stones, k) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def mergeStones(self, stones: List[int], k: int) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int mergeStones(vector<int>& stones, int k) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N^3/K)",
   "space": "O(N^2)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "zom-sde2-s9-r1-q1": {
  "id": "zom-sde2-s9-r1-q1",
  "title": "Shortest Tour Through Every Hub",
  "difficulty": "Hard",
  "company": "Zomato",
  "category": "BFS + Bitmask",
  "tags": [
   "Zomato Round 1",
   "BFS",
   "Bitmask",
   "Graph",
   "Set 9"
  ],
  "paragraphs": [
   "graph[i] lists the neighbours of hub i. Return the length of the shortest walk that visits every hub (start anywhere, nodes and edges may repeat)."
  ],
  "examples": [
   {
    "input": "graph = [[1,2,3],[0],[0],[0]]",
    "output": "4"
   },
   {
    "input": "graph = [[1],[0,2,4],[1,3,4],[2],[1,2]]",
    "output": "4"
   }
  ],
  "constraints": [
   "Target O(2^N * N) time and O(2^N * N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde2-s9-r1-q1-v1",
    "input": "[[1,2,3],[0],[0],[0]]",
    "expectedOutput": "4"
   },
   {
    "id": "zom-sde2-s9-r1-q1-v2",
    "input": "[[1],[0,2,4],[1,3,4],[2],[1,2]]",
    "expectedOutput": "4"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde2-s9-r1-q1-h1",
    "input": "[[]]",
    "expectedOutput": "0"
   },
   {
    "id": "zom-sde2-s9-r1-q1-h2",
    "input": "[[1],[0]]",
    "expectedOutput": "1"
   },
   {
    "id": "zom-sde2-s9-r1-q1-h3",
    "input": "[[1,2],[0,2],[0,1]]",
    "expectedOutput": "2"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[][]} graph\n * @return {number}\n */\nfunction shortestPathAllNodes(graph) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def shortestPathAllNodes(self, graph: List[List[int]]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int shortestPathAllNodes(vector<vector<int>>& graph) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(2^N * N)",
   "space": "O(2^N * N)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "zom-sde2-s9-r1-q2"
 },
 "zom-sde2-s9-r1-q2": {
  "id": "zom-sde2-s9-r1-q2",
  "title": "Fewest Moves for a Scooter Knight",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "BFS",
  "tags": [
   "Zomato Round 1",
   "BFS",
   "Math",
   "Set 9"
  ],
  "paragraphs": [
   "On an infinite board a piece moves like a chess knight from (0, 0). Return the minimum number of moves to reach (x, y)."
  ],
  "examples": [
   {
    "input": "x = 2, y = 1",
    "output": "1"
   },
   {
    "input": "x = 5, y = 5",
    "output": "4"
   }
  ],
  "constraints": [
   "Target O(x*y) time and O(x*y) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde2-s9-r1-q2-v1",
    "input": "2\n1",
    "expectedOutput": "1"
   },
   {
    "id": "zom-sde2-s9-r1-q2-v2",
    "input": "5\n5",
    "expectedOutput": "4"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde2-s9-r1-q2-h1",
    "input": "0\n0",
    "expectedOutput": "0"
   },
   {
    "id": "zom-sde2-s9-r1-q2-h2",
    "input": "1\n1",
    "expectedOutput": "2"
   },
   {
    "id": "zom-sde2-s9-r1-q2-h3",
    "input": "-3\n4",
    "expectedOutput": "3"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number} x\n * @param {number} y\n * @return {number}\n */\nfunction minKnightMoves(x, y) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def minKnightMoves(self, x: int, y: int) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int minKnightMoves(int x, int y) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(x*y)",
   "space": "O(x*y)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "zom-sde2-s10-r1-q1": {
  "id": "zom-sde2-s10-r1-q1",
  "title": "Fewest Bus Changes Across Routes",
  "difficulty": "Hard",
  "company": "Zomato",
  "category": "BFS on Routes",
  "tags": [
   "Zomato Round 1",
   "BFS",
   "Graph",
   "Set 10"
  ],
  "paragraphs": [
   "routes[i] lists the stops of bus i, which loops forever. Return the fewest buses needed to get from stop s to stop t, or -1."
  ],
  "examples": [
   {
    "input": "routes = [[1,2,7],[3,6,7]], source = 1, target = 6",
    "output": "2"
   },
   {
    "input": "routes = [[7,12],[4,5,15],[6],[15,19],[9,12,13]], source = 15, target = 12",
    "output": "-1"
   }
  ],
  "constraints": [
   "Target O(R*S) time and O(R*S) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde2-s10-r1-q1-v1",
    "input": "[[1,2,7],[3,6,7]]\n1\n6",
    "expectedOutput": "2"
   },
   {
    "id": "zom-sde2-s10-r1-q1-v2",
    "input": "[[7,12],[4,5,15],[6],[15,19],[9,12,13]]\n15\n12",
    "expectedOutput": "-1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde2-s10-r1-q1-h1",
    "input": "[[1,2]]\n1\n1",
    "expectedOutput": "0"
   },
   {
    "id": "zom-sde2-s10-r1-q1-h2",
    "input": "[[1,2],[2,3],[3,4]]\n1\n4",
    "expectedOutput": "3"
   },
   {
    "id": "zom-sde2-s10-r1-q1-h3",
    "input": "[[1,2],[3,4]]\n1\n4",
    "expectedOutput": "-1"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[][]} routes\n * @param {number} source\n * @param {number} target\n * @return {number}\n */\nfunction numBusesToDestination(routes, source, target) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def numBusesToDestination(self, routes: List[List[int]], source: int, target: int) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int numBusesToDestination(vector<vector<int>>& routes, int source, int target) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(R*S)",
   "space": "O(R*S)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "zom-sde2-s10-r1-q2"
 },
 "zom-sde2-s10-r1-q2": {
  "id": "zom-sde2-s10-r1-q2",
  "title": "Fewest Sprinklers to Cover a Lane",
  "difficulty": "Hard",
  "company": "Zomato",
  "category": "Greedy / Intervals",
  "tags": [
   "Zomato Round 1",
   "Greedy",
   "Intervals",
   "Set 10"
  ],
  "paragraphs": [
   "A lane spans [0, n]; tap i at position i waters [i - ranges[i], i + ranges[i]]. Return the minimum number of taps that cover the whole lane, or -1."
  ],
  "examples": [
   {
    "input": "n = 5, ranges = [3,4,1,1,0,0]",
    "output": "1"
   },
   {
    "input": "n = 3, ranges = [0,0,0,0]",
    "output": "-1"
   }
  ],
  "constraints": [
   "Target O(N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde2-s10-r1-q2-v1",
    "input": "5\n[3,4,1,1,0,0]",
    "expectedOutput": "1"
   },
   {
    "id": "zom-sde2-s10-r1-q2-v2",
    "input": "3\n[0,0,0,0]",
    "expectedOutput": "-1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde2-s10-r1-q2-h1",
    "input": "7\n[1,2,1,0,2,1,0,1]",
    "expectedOutput": "3"
   },
   {
    "id": "zom-sde2-s10-r1-q2-h2",
    "input": "8\n[4,0,0,0,0,0,0,0,4]",
    "expectedOutput": "2"
   },
   {
    "id": "zom-sde2-s10-r1-q2-h3",
    "input": "0\n[0]",
    "expectedOutput": "0"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number} n\n * @param {number[]} ranges\n * @return {number}\n */\nfunction minTaps(n, ranges) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def minTaps(self, n: int, ranges: List[int]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int minTaps(int n, vector<int>& ranges) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(N)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "zom-sde2-s1-r2-q1": {
  "id": "zom-sde2-s1-r2-q1",
  "title": "Metro-Style Average Travel Time",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Design / Hashing",
  "tags": [
   "Zomato Round 2",
   "Design",
   "Hash Table",
   "Set 1"
  ],
  "paragraphs": [
   "Track check-ins and check-outs between stations (station ids are integers) and return the average travel time between two stations. Return each call's result (null for check-in, check-out and the constructor).",
   "Round 2 is a live problem-solving round: after your code works you will defend the approach, complexity and edge cases."
  ],
  "examples": [
   {
    "input": "ops = [\"UndergroundSystem\",\"checkIn\",\"checkIn\",\"checkOut\",\"checkOut\",\"getAverageTime\"], args = [[],[1,1,3],[2,1,8],[1,2,10],[2,2,20],[1,2]]",
    "output": "[null,null,null,null,null,9.5]"
   },
   {
    "input": "ops = [\"UndergroundSystem\",\"checkIn\",\"checkOut\",\"getAverageTime\"], args = [[],[5,1,0],[5,2,9],[1,2]]",
    "output": "[null,null,null,9.0]"
   }
  ],
  "constraints": [
   "Target O(1) per op time and O(P) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde2-s1-r2-q1-v1",
    "input": "[\"UndergroundSystem\",\"checkIn\",\"checkIn\",\"checkOut\",\"checkOut\",\"getAverageTime\"]\n[[],[1,1,3],[2,1,8],[1,2,10],[2,2,20],[1,2]]",
    "expectedOutput": "[null,null,null,null,null,9.5]"
   },
   {
    "id": "zom-sde2-s1-r2-q1-v2",
    "input": "[\"UndergroundSystem\",\"checkIn\",\"checkOut\",\"getAverageTime\"]\n[[],[5,1,0],[5,2,9],[1,2]]",
    "expectedOutput": "[null,null,null,9.0]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde2-s1-r2-q1-h1",
    "input": "[\"UndergroundSystem\",\"checkIn\",\"checkOut\",\"checkIn\",\"checkOut\",\"getAverageTime\"]\n[[],[1,1,0],[1,2,4],[2,1,10],[2,2,20],[1,2]]",
    "expectedOutput": "[null,null,null,null,null,7.0]"
   },
   {
    "id": "zom-sde2-s1-r2-q1-h2",
    "input": "[\"UndergroundSystem\",\"checkIn\",\"checkOut\",\"checkIn\",\"checkOut\",\"getAverageTime\",\"getAverageTime\"]\n[[],[1,1,0],[1,2,5],[2,2,6],[2,1,12],[1,2],[2,1]]",
    "expectedOutput": "[null,null,null,null,null,5.0,6.0]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string[]} ops\n * @param {number[][]} args\n * @return {any[]}\n */\nfunction runTransit(ops, args) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def runTransit(self, ops: List[str], args: List[List[int]]) -> list:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version. Each element of an any[] value is passed as a JSON string in C++.\nclass Solution {\npublic:\n    vector<string> runTransit(vector<string>& ops, vector<vector<int>>& args) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(1) per op",
   "space": "O(P)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde2-s2-r2-q1": {
  "id": "zom-sde2-s2-r2-q1",
  "title": "Duplicate Notification Suppressor",
  "difficulty": "Easy",
  "company": "Zomato",
  "category": "Design / Hashing",
  "tags": [
   "Zomato Round 2",
   "Design",
   "Hash Table",
   "Set 2"
  ],
  "paragraphs": [
   "shouldPrint(timestamp, messageId) returns true only if the message was not printed in the last 10 seconds. Return each call's result (null for the constructor).",
   "Round 2 is a live problem-solving round: after your code works you will defend the approach, complexity and edge cases."
  ],
  "examples": [
   {
    "input": "ops = [\"Logger\",\"shouldPrint\",\"shouldPrint\",\"shouldPrint\",\"shouldPrint\",\"shouldPrint\"], args = [[],[1,1],[2,2],[3,1],[8,2],[11,1]]",
    "output": "[null,true,true,false,false,true]"
   },
   {
    "input": "ops = [\"Logger\",\"shouldPrint\",\"shouldPrint\"], args = [[],[0,7],[10,7]]",
    "output": "[null,true,true]"
   }
  ],
  "constraints": [
   "Target O(1) per op time and O(M) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde2-s2-r2-q1-v1",
    "input": "[\"Logger\",\"shouldPrint\",\"shouldPrint\",\"shouldPrint\",\"shouldPrint\",\"shouldPrint\"]\n[[],[1,1],[2,2],[3,1],[8,2],[11,1]]",
    "expectedOutput": "[null,true,true,false,false,true]"
   },
   {
    "id": "zom-sde2-s2-r2-q1-v2",
    "input": "[\"Logger\",\"shouldPrint\",\"shouldPrint\"]\n[[],[0,7],[10,7]]",
    "expectedOutput": "[null,true,true]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde2-s2-r2-q1-h1",
    "input": "[\"Logger\",\"shouldPrint\",\"shouldPrint\",\"shouldPrint\"]\n[[],[5,1],[14,1],[15,1]]",
    "expectedOutput": "[null,true,false,true]"
   },
   {
    "id": "zom-sde2-s2-r2-q1-h2",
    "input": "[\"Logger\",\"shouldPrint\"]\n[[],[100,3]]",
    "expectedOutput": "[null,true]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string[]} ops\n * @param {number[][]} args\n * @return {any[]}\n */\nfunction runLogger(ops, args) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def runLogger(self, ops: List[str], args: List[List[int]]) -> list:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version. Each element of an any[] value is passed as a JSON string in C++.\nclass Solution {\npublic:\n    vector<string> runLogger(vector<string>& ops, vector<vector<int>>& args) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(1) per op",
   "space": "O(M)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde2-s3-r2-q1": {
  "id": "zom-sde2-s3-r2-q1",
  "title": "Order Page Navigation History",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Design / Stack",
  "tags": [
   "Zomato Round 2",
   "Design",
   "Array",
   "Set 3"
  ],
  "paragraphs": [
   "Implement visit(page), back(steps) and forward(steps) with page ids as integers; visiting clears forward history. Return each call's result (null for visit and the constructor; back and forward return the current page).",
   "Round 2 is a live problem-solving round: after your code works you will defend the approach, complexity and edge cases."
  ],
  "examples": [
   {
    "input": "ops = [\"BrowserHistory\",\"visit\",\"visit\",\"visit\",\"back\",\"back\",\"forward\",\"visit\",\"forward\",\"back\",\"back\"], args = [[1],[2],[3],[4],[1],[1],[1],[5],[2],[2],[7]]",
    "output": "[null,null,null,null,3,2,3,null,5,2,1]"
   },
   {
    "input": "ops = [\"BrowserHistory\",\"back\",\"forward\"], args = [[9],[3],[3]]",
    "output": "[null,9,9]"
   }
  ],
  "constraints": [
   "Target O(1) per op time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde2-s3-r2-q1-v1",
    "input": "[\"BrowserHistory\",\"visit\",\"visit\",\"visit\",\"back\",\"back\",\"forward\",\"visit\",\"forward\",\"back\",\"back\"]\n[[1],[2],[3],[4],[1],[1],[1],[5],[2],[2],[7]]",
    "expectedOutput": "[null,null,null,null,3,2,3,null,5,2,1]"
   },
   {
    "id": "zom-sde2-s3-r2-q1-v2",
    "input": "[\"BrowserHistory\",\"back\",\"forward\"]\n[[9],[3],[3]]",
    "expectedOutput": "[null,9,9]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde2-s3-r2-q1-h1",
    "input": "[\"BrowserHistory\",\"visit\",\"visit\",\"back\",\"visit\",\"forward\"]\n[[1],[2],[3],[1],[4],[1]]",
    "expectedOutput": "[null,null,null,2,null,4]"
   },
   {
    "id": "zom-sde2-s3-r2-q1-h2",
    "input": "[\"BrowserHistory\",\"visit\",\"back\",\"back\",\"forward\",\"forward\"]\n[[5],[6],[1],[1],[1],[1]]",
    "expectedOutput": "[null,null,5,5,6,6]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string[]} ops\n * @param {number[][]} args\n * @return {any[]}\n */\nfunction runBrowser(ops, args) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def runBrowser(self, ops: List[str], args: List[List[int]]) -> list:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version. Each element of an any[] value is passed as a JSON string in C++.\nclass Solution {\npublic:\n    vector<string> runBrowser(vector<string>& ops, vector<vector<int>>& args) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(1) per op",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde2-s4-r2-q1": {
  "id": "zom-sde2-s4-r2-q1",
  "title": "Dish Ratings by Cuisine",
  "difficulty": "Hard",
  "company": "Zomato",
  "category": "Design / Heap",
  "tags": [
   "Zomato Round 2",
   "Design",
   "Heap",
   "Hash Table",
   "Set 4"
  ],
  "paragraphs": [
   "Implement a system with changeRating(food, newRating) and highestRated(cuisine) (ties broken alphabetically). args is a JSON array per call. Return each call's result (null for changeRating and the constructor).",
   "Round 2 is a live problem-solving round: after your code works you will defend the approach, complexity and edge cases."
  ],
  "examples": [
   {
    "input": "ops = [\"FoodRatings\",\"highestRated\",\"highestRated\",\"changeRating\",\"highestRated\",\"changeRating\",\"highestRated\"], args = [[[\"kimchi\",\"miso\",\"sushi\",\"moussaka\",\"ramen\",\"bulgogi\"],[\"korean\",\"japanese\",\"japanese\",\"greek\",\"japanese\",\"korean\"],[9,12,8,15,14,7]],[\"korean\"],[\"japanese\"],[\"sushi\",16],[\"japanese\"],[\"ramen\",16],[\"japanese\"]]",
    "output": "[null,\"kimchi\",\"ramen\",null,\"sushi\",null,\"ramen\"]"
   },
   {
    "input": "ops = [\"FoodRatings\",\"highestRated\"], args = [[[\"a\",\"b\"],[\"x\",\"x\"],[1,1]],[\"x\"]]",
    "output": "[null,\"a\"]"
   }
  ],
  "constraints": [
   "Target O(log N) per op time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde2-s4-r2-q1-v1",
    "input": "[\"FoodRatings\",\"highestRated\",\"highestRated\",\"changeRating\",\"highestRated\",\"changeRating\",\"highestRated\"]\n[[[\"kimchi\",\"miso\",\"sushi\",\"moussaka\",\"ramen\",\"bulgogi\"],[\"korean\",\"japanese\",\"japanese\",\"greek\",\"japanese\",\"korean\"],[9,12,8,15,14,7]],[\"korean\"],[\"japanese\"],[\"sushi\",16],[\"japanese\"],[\"ramen\",16],[\"japanese\"]]",
    "expectedOutput": "[null,\"kimchi\",\"ramen\",null,\"sushi\",null,\"ramen\"]"
   },
   {
    "id": "zom-sde2-s4-r2-q1-v2",
    "input": "[\"FoodRatings\",\"highestRated\"]\n[[[\"a\",\"b\"],[\"x\",\"x\"],[1,1]],[\"x\"]]",
    "expectedOutput": "[null,\"a\"]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde2-s4-r2-q1-h1",
    "input": "[\"FoodRatings\",\"changeRating\",\"highestRated\"]\n[[[\"a\",\"b\"],[\"x\",\"x\"],[1,2]],[\"a\",5],[\"x\"]]",
    "expectedOutput": "[null,null,\"a\"]"
   },
   {
    "id": "zom-sde2-s4-r2-q1-h2",
    "input": "[\"FoodRatings\",\"highestRated\",\"changeRating\",\"highestRated\"]\n[[[\"p\",\"q\",\"r\"],[\"c\",\"c\",\"c\"],[3,3,2]],[\"c\"],[\"r\",9],[\"c\"]]",
    "expectedOutput": "[null,\"p\",null,\"r\"]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string[]} ops\n * @param {any[]} args\n * @return {any[]}\n */\nfunction runFoodRatings(ops, args) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def runFoodRatings(self, ops: List[str], args: list) -> list:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version. Each element of an any[] value is passed as a JSON string in C++.\nclass Solution {\npublic:\n    vector<string> runFoodRatings(vector<string>& ops, vector<string>& args) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(log N) per op",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde2-s5-r2-q1": {
  "id": "zom-sde2-s5-r2-q1",
  "title": "Moving Average of Delivery Times",
  "difficulty": "Easy",
  "company": "Zomato",
  "category": "Design / Queue",
  "tags": [
   "Zomato Round 2",
   "Design",
   "Queue",
   "Sliding Window",
   "Set 5"
  ],
  "paragraphs": [
   "Implement next(val) returning the moving average of the last size values. Return each call's result (null for the constructor).",
   "Round 2 is a live problem-solving round: after your code works you will defend the approach, complexity and edge cases."
  ],
  "examples": [
   {
    "input": "ops = [\"MovingAverage\",\"next\",\"next\",\"next\",\"next\"], args = [[3],[1],[10],[3],[5]]",
    "output": "[null,1.0,5.5,4.666666666666667,6.0]"
   },
   {
    "input": "ops = [\"MovingAverage\",\"next\",\"next\"], args = [[1],[4],[7]]",
    "output": "[null,4.0,7.0]"
   }
  ],
  "constraints": [
   "Target O(1) per op time and O(K) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde2-s5-r2-q1-v1",
    "input": "[\"MovingAverage\",\"next\",\"next\",\"next\",\"next\"]\n[[3],[1],[10],[3],[5]]",
    "expectedOutput": "[null,1.0,5.5,4.666666666666667,6.0]"
   },
   {
    "id": "zom-sde2-s5-r2-q1-v2",
    "input": "[\"MovingAverage\",\"next\",\"next\"]\n[[1],[4],[7]]",
    "expectedOutput": "[null,4.0,7.0]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde2-s5-r2-q1-h1",
    "input": "[\"MovingAverage\",\"next\",\"next\",\"next\"]\n[[2],[2],[4],[6]]",
    "expectedOutput": "[null,2.0,3.0,5.0]"
   },
   {
    "id": "zom-sde2-s5-r2-q1-h2",
    "input": "[\"MovingAverage\",\"next\"]\n[[5],[9]]",
    "expectedOutput": "[null,9.0]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string[]} ops\n * @param {number[][]} args\n * @return {any[]}\n */\nfunction runMovingAverage(ops, args) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def runMovingAverage(self, ops: List[str], args: List[List[int]]) -> list:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version. Each element of an any[] value is passed as a JSON string in C++.\nclass Solution {\npublic:\n    vector<string> runMovingAverage(vector<string>& ops, vector<vector<int>>& args) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(1) per op",
   "space": "O(K)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde2-s6-r2-q1": {
  "id": "zom-sde2-s6-r2-q1",
  "title": "Dish Name Prefix Counter",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Trie / Design",
  "tags": [
   "Zomato Round 2",
   "Trie",
   "Design",
   "Set 6"
  ],
  "paragraphs": [
   "Implement insert(word) and countPrefix(prefix) returning how many inserted words start with the prefix. args is a JSON array per call. Return each call's result (null for insert and the constructor).",
   "Round 2 is a live problem-solving round: after your code works you will defend the approach, complexity and edge cases."
  ],
  "examples": [
   {
    "input": "ops = [\"PrefixCounter\",\"insert\",\"insert\",\"countPrefix\",\"countPrefix\",\"insert\",\"countPrefix\"], args = [[],[\"pizza\"],[\"pita\"],[\"pi\"],[\"piz\"],[\"pie\"],[\"pi\"]]",
    "output": "[null,null,null,2,1,null,3]"
   },
   {
    "input": "ops = [\"PrefixCounter\",\"countPrefix\"], args = [[],[\"a\"]]",
    "output": "[null,0]"
   }
  ],
  "constraints": [
   "Target O(L) per op time and O(total chars) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde2-s6-r2-q1-v1",
    "input": "[\"PrefixCounter\",\"insert\",\"insert\",\"countPrefix\",\"countPrefix\",\"insert\",\"countPrefix\"]\n[[],[\"pizza\"],[\"pita\"],[\"pi\"],[\"piz\"],[\"pie\"],[\"pi\"]]",
    "expectedOutput": "[null,null,null,2,1,null,3]"
   },
   {
    "id": "zom-sde2-s6-r2-q1-v2",
    "input": "[\"PrefixCounter\",\"countPrefix\"]\n[[],[\"a\"]]",
    "expectedOutput": "[null,0]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde2-s6-r2-q1-h1",
    "input": "[\"PrefixCounter\",\"insert\",\"insert\",\"countPrefix\"]\n[[],[\"ab\"],[\"ab\"],[\"ab\"]]",
    "expectedOutput": "[null,null,null,2]"
   },
   {
    "id": "zom-sde2-s6-r2-q1-h2",
    "input": "[\"PrefixCounter\",\"insert\",\"countPrefix\",\"countPrefix\"]\n[[],[\"burger\"],[\"bu\"],[\"bx\"]]",
    "expectedOutput": "[null,null,1,0]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string[]} ops\n * @param {any[]} args\n * @return {any[]}\n */\nfunction runPrefixCounter(ops, args) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def runPrefixCounter(self, ops: List[str], args: list) -> list:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version. Each element of an any[] value is passed as a JSON string in C++.\nclass Solution {\npublic:\n    vector<string> runPrefixCounter(vector<string>& ops, vector<string>& args) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(L) per op",
   "space": "O(total chars)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde2-s7-r2-q1": {
  "id": "zom-sde2-s7-r2-q1",
  "title": "Wallet Transfer Validation",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Design / Simulation",
  "tags": [
   "Zomato Round 2",
   "Design",
   "Simulation",
   "Set 7"
  ],
  "paragraphs": [
   "Implement a wallet bank over accounts 1..n with transfer(a, b, amount), deposit(a, amount) and withdraw(a, amount). Invalid accounts or insufficient funds return false. args is a JSON array per call. Return each call's result (null for the constructor).",
   "Round 2 is a live problem-solving round: after your code works you will defend the approach, complexity and edge cases."
  ],
  "examples": [
   {
    "input": "ops = [\"Bank\",\"withdraw\",\"transfer\",\"deposit\",\"transfer\",\"withdraw\"], args = [[[10,100,20,50,30]],[3,10],[5,1,20],[5,20],[3,4,15],[10,50]]",
    "output": "[null,true,true,true,false,false]"
   },
   {
    "input": "ops = [\"Bank\",\"deposit\",\"withdraw\"], args = [[[5]],[1,5],[1,10]]",
    "output": "[null,true,true]"
   }
  ],
  "constraints": [
   "Target O(1) per op time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde2-s7-r2-q1-v1",
    "input": "[\"Bank\",\"withdraw\",\"transfer\",\"deposit\",\"transfer\",\"withdraw\"]\n[[[10,100,20,50,30]],[3,10],[5,1,20],[5,20],[3,4,15],[10,50]]",
    "expectedOutput": "[null,true,true,true,false,false]"
   },
   {
    "id": "zom-sde2-s7-r2-q1-v2",
    "input": "[\"Bank\",\"deposit\",\"withdraw\"]\n[[[5]],[1,5],[1,10]]",
    "expectedOutput": "[null,true,true]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde2-s7-r2-q1-h1",
    "input": "[\"Bank\",\"transfer\",\"transfer\"]\n[[[5,5]],[1,2,5],[2,1,11]]",
    "expectedOutput": "[null,true,false]"
   },
   {
    "id": "zom-sde2-s7-r2-q1-h2",
    "input": "[\"Bank\",\"withdraw\",\"deposit\"]\n[[[1]],[2,1],[0,1]]",
    "expectedOutput": "[null,false,false]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string[]} ops\n * @param {any[]} args\n * @return {any[]}\n */\nfunction runWallets(ops, args) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def runWallets(self, ops: List[str], args: list) -> list:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version. Each element of an any[] value is passed as a JSON string in C++.\nclass Solution {\npublic:\n    vector<string> runWallets(vector<string>& ops, vector<string>& args) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(1) per op",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde2-s8-r2-q1": {
  "id": "zom-sde2-s8-r2-q1",
  "title": "Bid-Ask Order Matching Counter",
  "difficulty": "Hard",
  "company": "Zomato",
  "category": "Heap / Design",
  "tags": [
   "Zomato Round 2",
   "Heap",
   "Design",
   "Set 8"
  ],
  "paragraphs": [
   "Buy and sell orders carry a price. A new buy matches the lowest open sell at or below its price; a new sell matches the highest open buy at or above its price; matched orders disappear. matches() returns the total matches so far. Return each call's result (null for adds and the constructor).",
   "Round 2 is a live problem-solving round: after your code works you will defend the approach, complexity and edge cases."
  ],
  "examples": [
   {
    "input": "ops = [\"OrderBook\",\"addSell\",\"addBuy\",\"addBuy\",\"addSell\",\"matches\"], args = [[],[10],[9],[11],[8],[]]",
    "output": "[null,null,null,null,null,2]"
   },
   {
    "input": "ops = [\"OrderBook\",\"addBuy\",\"addSell\",\"matches\"], args = [[],[5],[5],[]]",
    "output": "[null,null,null,1]"
   }
  ],
  "constraints": [
   "Target O(log N) per op time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde2-s8-r2-q1-v1",
    "input": "[\"OrderBook\",\"addSell\",\"addBuy\",\"addBuy\",\"addSell\",\"matches\"]\n[[],[10],[9],[11],[8],[]]",
    "expectedOutput": "[null,null,null,null,null,2]"
   },
   {
    "id": "zom-sde2-s8-r2-q1-v2",
    "input": "[\"OrderBook\",\"addBuy\",\"addSell\",\"matches\"]\n[[],[5],[5],[]]",
    "expectedOutput": "[null,null,null,1]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde2-s8-r2-q1-h1",
    "input": "[\"OrderBook\",\"addSell\",\"addSell\",\"addBuy\",\"addBuy\",\"matches\"]\n[[],[7],[6],[7],[7],[]]",
    "expectedOutput": "[null,null,null,null,null,2]"
   },
   {
    "id": "zom-sde2-s8-r2-q1-h2",
    "input": "[\"OrderBook\",\"matches\"]\n[[],[]]",
    "expectedOutput": "[null,0]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string[]} ops\n * @param {number[][]} args\n * @return {any[]}\n */\nfunction runOrderBook(ops, args) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def runOrderBook(self, ops: List[str], args: List[List[int]]) -> list:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version. Each element of an any[] value is passed as a JSON string in C++.\nclass Solution {\npublic:\n    vector<string> runOrderBook(vector<string>& ops, vector<vector<int>>& args) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(log N) per op",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde2-s9-r2-q1": {
  "id": "zom-sde2-s9-r2-q1",
  "title": "Delivery Partner Leaderboard",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Design / Heap",
  "tags": [
   "Zomato Round 2",
   "Design",
   "Heap",
   "Hash Table",
   "Set 9"
  ],
  "paragraphs": [
   "Implement addScore(partner, score), top(k) returning the sum of the k highest totals, and reset(partner). Return each call's result (null for add, reset and the constructor).",
   "Round 2 is a live problem-solving round: after your code works you will defend the approach, complexity and edge cases."
  ],
  "examples": [
   {
    "input": "ops = [\"Leaderboard\",\"addScore\",\"addScore\",\"addScore\",\"addScore\",\"addScore\",\"top\",\"reset\",\"reset\",\"addScore\",\"top\"], args = [[],[1,73],[2,56],[3,39],[4,51],[5,4],[1],[1],[2],[2,51],[3]]",
    "output": "[null,null,null,null,null,null,73,null,null,null,141]"
   },
   {
    "input": "ops = [\"Leaderboard\",\"addScore\",\"top\"], args = [[],[1,5],[3]]",
    "output": "[null,null,5]"
   }
  ],
  "constraints": [
   "Target O(log N) per op time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde2-s9-r2-q1-v1",
    "input": "[\"Leaderboard\",\"addScore\",\"addScore\",\"addScore\",\"addScore\",\"addScore\",\"top\",\"reset\",\"reset\",\"addScore\",\"top\"]\n[[],[1,73],[2,56],[3,39],[4,51],[5,4],[1],[1],[2],[2,51],[3]]",
    "expectedOutput": "[null,null,null,null,null,null,73,null,null,null,141]"
   },
   {
    "id": "zom-sde2-s9-r2-q1-v2",
    "input": "[\"Leaderboard\",\"addScore\",\"top\"]\n[[],[1,5],[3]]",
    "expectedOutput": "[null,null,5]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde2-s9-r2-q1-h1",
    "input": "[\"Leaderboard\",\"addScore\",\"addScore\",\"reset\",\"top\"]\n[[],[1,9],[2,3],[1],[1]]",
    "expectedOutput": "[null,null,null,null,3]"
   },
   {
    "id": "zom-sde2-s9-r2-q1-h2",
    "input": "[\"Leaderboard\",\"top\"]\n[[],[2]]",
    "expectedOutput": "[null,0]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string[]} ops\n * @param {number[][]} args\n * @return {any[]}\n */\nfunction runLeaderboard(ops, args) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def runLeaderboard(self, ops: List[str], args: List[List[int]]) -> list:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version. Each element of an any[] value is passed as a JSON string in C++.\nclass Solution {\npublic:\n    vector<string> runLeaderboard(vector<string>& ops, vector<vector<int>>& args) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(log N) per op",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde2-s10-r2-q1": {
  "id": "zom-sde2-s10-r2-q1",
  "title": "Live Price Fluctuation Tracker",
  "difficulty": "Hard",
  "company": "Zomato",
  "category": "Heap / Design",
  "tags": [
   "Zomato Round 2",
   "Design",
   "Heap",
   "Hash Table",
   "Set 10"
  ],
  "paragraphs": [
   "Records can arrive out of order and correct earlier timestamps. Implement update(timestamp, price), current(), maximum() and minimum() (over the latest price at each timestamp). Return each call's result (null for update and the constructor).",
   "Round 2 is a live problem-solving round: after your code works you will defend the approach, complexity and edge cases."
  ],
  "examples": [
   {
    "input": "ops = [\"StockPrice\",\"update\",\"update\",\"current\",\"maximum\",\"update\",\"maximum\",\"update\",\"minimum\"], args = [[],[1,10],[2,5],[],[],[1,3],[],[4,2],[]]",
    "output": "[null,null,null,5,10,null,5,null,2]"
   },
   {
    "input": "ops = [\"StockPrice\",\"update\",\"current\"], args = [[],[5,7],[]]",
    "output": "[null,null,7]"
   }
  ],
  "constraints": [
   "Target O(log N) per op time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "zom-sde2-s10-r2-q1-v1",
    "input": "[\"StockPrice\",\"update\",\"update\",\"current\",\"maximum\",\"update\",\"maximum\",\"update\",\"minimum\"]\n[[],[1,10],[2,5],[],[],[1,3],[],[4,2],[]]",
    "expectedOutput": "[null,null,null,5,10,null,5,null,2]"
   },
   {
    "id": "zom-sde2-s10-r2-q1-v2",
    "input": "[\"StockPrice\",\"update\",\"current\"]\n[[],[5,7],[]]",
    "expectedOutput": "[null,null,7]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "zom-sde2-s10-r2-q1-h1",
    "input": "[\"StockPrice\",\"update\",\"update\",\"maximum\",\"update\",\"maximum\"]\n[[],[1,4],[2,9],[],[2,1],[]]",
    "expectedOutput": "[null,null,null,9,null,4]"
   },
   {
    "id": "zom-sde2-s10-r2-q1-h2",
    "input": "[\"StockPrice\",\"update\",\"minimum\",\"update\",\"minimum\"]\n[[],[3,8],[],[3,2],[]]",
    "expectedOutput": "[null,null,8,null,2]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string[]} ops\n * @param {number[][]} args\n * @return {any[]}\n */\nfunction runPriceTracker(ops, args) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def runPriceTracker(self, ops: List[str], args: List[List[int]]) -> list:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version. Each element of an any[] value is passed as a JSON string in C++.\nclass Solution {\npublic:\n    vector<string> runPriceTracker(vector<string>& ops, vector<vector<int>>& args) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(log N) per op",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde2-s1-r3-q1": {
  "id": "zom-sde2-s1-r3-q1",
  "title": "Hyperlocal Delivery Dispatch System",
  "difficulty": "Hard",
  "company": "Zomato",
  "category": "Low-Level and High-Level Design",
  "tags": [
   "Zomato Round 3",
   "Set 1"
  ],
  "paragraphs": [
   "Zomato design round: model and scale a food-delivery system component.",
   "Topic: Hyperlocal Delivery Dispatch System. Focus areas: Geo-sharding, batching, rider supply, SLAs.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clean modelling, realistic scale numbers, failure handling and trade-offs for peak load."
   }
  ],
  "constraints": [
   "State assumptions: orders per second, peak factor, data size.",
   "Cover failure modes: retries, duplicates, partial failure, peak load.",
   "Justify each trade-off."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Notes, definitions, schema or class sketch\n",
   "javascript": "// Notes, definitions, schema or class sketch\n",
   "cpp": "// Notes, definitions, schema or class sketch\n"
  },
  "optimalComplexity": {
   "time": "N/A (discussion)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde2-s2-r3-q1": {
  "id": "zom-sde2-s2-r3-q1",
  "title": "Surge Pricing and Demand Pipeline",
  "difficulty": "Hard",
  "company": "Zomato",
  "category": "Low-Level and High-Level Design",
  "tags": [
   "Zomato Round 3",
   "Set 2"
  ],
  "paragraphs": [
   "Zomato design round: model and scale a food-delivery system component.",
   "Topic: Surge Pricing and Demand Pipeline. Focus areas: Streaming aggregates, forecasts, fairness.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clean modelling, realistic scale numbers, failure handling and trade-offs for peak load."
   }
  ],
  "constraints": [
   "State assumptions: orders per second, peak factor, data size.",
   "Cover failure modes: retries, duplicates, partial failure, peak load.",
   "Justify each trade-off."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Notes, definitions, schema or class sketch\n",
   "javascript": "// Notes, definitions, schema or class sketch\n",
   "cpp": "// Notes, definitions, schema or class sketch\n"
  },
  "optimalComplexity": {
   "time": "N/A (discussion)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde2-s3-r3-q1": {
  "id": "zom-sde2-s3-r3-q1",
  "title": "Search and Ranking at Scale",
  "difficulty": "Hard",
  "company": "Zomato",
  "category": "Low-Level and High-Level Design",
  "tags": [
   "Zomato Round 3",
   "Set 3"
  ],
  "paragraphs": [
   "Zomato design round: model and scale a food-delivery system component.",
   "Topic: Search and Ranking at Scale. Focus areas: Retrieval, ranking, freshness, experimentation.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clean modelling, realistic scale numbers, failure handling and trade-offs for peak load."
   }
  ],
  "constraints": [
   "State assumptions: orders per second, peak factor, data size.",
   "Cover failure modes: retries, duplicates, partial failure, peak load.",
   "Justify each trade-off."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Notes, definitions, schema or class sketch\n",
   "javascript": "// Notes, definitions, schema or class sketch\n",
   "cpp": "// Notes, definitions, schema or class sketch\n"
  },
  "optimalComplexity": {
   "time": "N/A (discussion)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde2-s4-r3-q1": {
  "id": "zom-sde2-s4-r3-q1",
  "title": "Geo-Indexed Restaurant Discovery",
  "difficulty": "Hard",
  "company": "Zomato",
  "category": "Low-Level and High-Level Design",
  "tags": [
   "Zomato Round 3",
   "Set 4"
  ],
  "paragraphs": [
   "Zomato design round: model and scale a food-delivery system component.",
   "Topic: Geo-Indexed Restaurant Discovery. Focus areas: Geohash/S2, hot cells, index updates.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clean modelling, realistic scale numbers, failure handling and trade-offs for peak load."
   }
  ],
  "constraints": [
   "State assumptions: orders per second, peak factor, data size.",
   "Cover failure modes: retries, duplicates, partial failure, peak load.",
   "Justify each trade-off."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Notes, definitions, schema or class sketch\n",
   "javascript": "// Notes, definitions, schema or class sketch\n",
   "cpp": "// Notes, definitions, schema or class sketch\n"
  },
  "optimalComplexity": {
   "time": "N/A (discussion)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde2-s5-r3-q1": {
  "id": "zom-sde2-s5-r3-q1",
  "title": "Real-Time Tracking at Peak Load",
  "difficulty": "Hard",
  "company": "Zomato",
  "category": "Low-Level and High-Level Design",
  "tags": [
   "Zomato Round 3",
   "Set 5"
  ],
  "paragraphs": [
   "Zomato design round: model and scale a food-delivery system component.",
   "Topic: Real-Time Tracking at Peak Load. Focus areas: WebSockets, fan-out, backpressure, degradation.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clean modelling, realistic scale numbers, failure handling and trade-offs for peak load."
   }
  ],
  "constraints": [
   "State assumptions: orders per second, peak factor, data size.",
   "Cover failure modes: retries, duplicates, partial failure, peak load.",
   "Justify each trade-off."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Notes, definitions, schema or class sketch\n",
   "javascript": "// Notes, definitions, schema or class sketch\n",
   "cpp": "// Notes, definitions, schema or class sketch\n"
  },
  "optimalComplexity": {
   "time": "N/A (discussion)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde2-s6-r3-q1": {
  "id": "zom-sde2-s6-r3-q1",
  "title": "Menu and Inventory Availability Sync",
  "difficulty": "Hard",
  "company": "Zomato",
  "category": "Low-Level and High-Level Design",
  "tags": [
   "Zomato Round 3",
   "Set 6"
  ],
  "paragraphs": [
   "Zomato design round: model and scale a food-delivery system component.",
   "Topic: Menu and Inventory Availability Sync. Focus areas: Partner APIs, eventual consistency, stale data.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clean modelling, realistic scale numbers, failure handling and trade-offs for peak load."
   }
  ],
  "constraints": [
   "State assumptions: orders per second, peak factor, data size.",
   "Cover failure modes: retries, duplicates, partial failure, peak load.",
   "Justify each trade-off."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Notes, definitions, schema or class sketch\n",
   "javascript": "// Notes, definitions, schema or class sketch\n",
   "cpp": "// Notes, definitions, schema or class sketch\n"
  },
  "optimalComplexity": {
   "time": "N/A (discussion)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde2-s7-r3-q1": {
  "id": "zom-sde2-s7-r3-q1",
  "title": "Payments and Refund Ledger",
  "difficulty": "Hard",
  "company": "Zomato",
  "category": "Low-Level and High-Level Design",
  "tags": [
   "Zomato Round 3",
   "Set 7"
  ],
  "paragraphs": [
   "Zomato design round: model and scale a food-delivery system component.",
   "Topic: Payments and Refund Ledger. Focus areas: Double-entry, idempotency, reconciliation.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clean modelling, realistic scale numbers, failure handling and trade-offs for peak load."
   }
  ],
  "constraints": [
   "State assumptions: orders per second, peak factor, data size.",
   "Cover failure modes: retries, duplicates, partial failure, peak load.",
   "Justify each trade-off."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Notes, definitions, schema or class sketch\n",
   "javascript": "// Notes, definitions, schema or class sketch\n",
   "cpp": "// Notes, definitions, schema or class sketch\n"
  },
  "optimalComplexity": {
   "time": "N/A (discussion)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde2-s8-r3-q1": {
  "id": "zom-sde2-s8-r3-q1",
  "title": "New Year's Eve Load Handling",
  "difficulty": "Hard",
  "company": "Zomato",
  "category": "Low-Level and High-Level Design",
  "tags": [
   "Zomato Round 3",
   "Set 8"
  ],
  "paragraphs": [
   "Zomato design round: model and scale a food-delivery system component.",
   "Topic: New Year's Eve Load Handling. Focus areas: Capacity planning, load shedding, queueing.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clean modelling, realistic scale numbers, failure handling and trade-offs for peak load."
   }
  ],
  "constraints": [
   "State assumptions: orders per second, peak factor, data size.",
   "Cover failure modes: retries, duplicates, partial failure, peak load.",
   "Justify each trade-off."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Notes, definitions, schema or class sketch\n",
   "javascript": "// Notes, definitions, schema or class sketch\n",
   "cpp": "// Notes, definitions, schema or class sketch\n"
  },
  "optimalComplexity": {
   "time": "N/A (discussion)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde2-s9-r3-q1": {
  "id": "zom-sde2-s9-r3-q1",
  "title": "Personalized Feed and Recommendations",
  "difficulty": "Hard",
  "company": "Zomato",
  "category": "Low-Level and High-Level Design",
  "tags": [
   "Zomato Round 3",
   "Set 9"
  ],
  "paragraphs": [
   "Zomato design round: model and scale a food-delivery system component.",
   "Topic: Personalized Feed and Recommendations. Focus areas: Candidate generation, features, cold start.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clean modelling, realistic scale numbers, failure handling and trade-offs for peak load."
   }
  ],
  "constraints": [
   "State assumptions: orders per second, peak factor, data size.",
   "Cover failure modes: retries, duplicates, partial failure, peak load.",
   "Justify each trade-off."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Notes, definitions, schema or class sketch\n",
   "javascript": "// Notes, definitions, schema or class sketch\n",
   "cpp": "// Notes, definitions, schema or class sketch\n"
  },
  "optimalComplexity": {
   "time": "N/A (discussion)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde2-s10-r3-q1": {
  "id": "zom-sde2-s10-r3-q1",
  "title": "Notification and Communication Platform",
  "difficulty": "Hard",
  "company": "Zomato",
  "category": "Low-Level and High-Level Design",
  "tags": [
   "Zomato Round 3",
   "Set 10"
  ],
  "paragraphs": [
   "Zomato design round: model and scale a food-delivery system component.",
   "Topic: Notification and Communication Platform. Focus areas: Multi-channel, priorities, compliance.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clean modelling, realistic scale numbers, failure handling and trade-offs for peak load."
   }
  ],
  "constraints": [
   "State assumptions: orders per second, peak factor, data size.",
   "Cover failure modes: retries, duplicates, partial failure, peak load.",
   "Justify each trade-off."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "python": "# Notes, definitions, schema or class sketch\n",
   "javascript": "// Notes, definitions, schema or class sketch\n",
   "cpp": "// Notes, definitions, schema or class sketch\n"
  },
  "optimalComplexity": {
   "time": "N/A (discussion)",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde2-s1-r4-q1": {
  "id": "zom-sde2-s1-r4-q1",
  "title": "Customer Escalation on a Failed Order",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Hiring Manager and Culture",
  "tags": [
   "Zomato",
   "Hiring Manager and Culture",
   "Customer Obsession",
   "Set 1"
  ],
  "paragraphs": [
   "Zomato hiring-manager round: ownership, customer obsession, speed, honesty and teamwork.",
   "Scenario: You are an SDE-2 and the technical owner for this area. A customer with a repeatedly failed order escalates publicly, and the fix needs another team's help.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Customer Obsession",
    "explanation": "Use concrete first-person examples with the customer impact and what you learned."
   }
  ],
  "constraints": [
   "Be specific about what you personally did.",
   "Put the customer first.",
   "Be honest about mistakes and trade-offs."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Hiring Manager and Culture\n// Focus: Customer Obsession\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: Hiring Manager and Culture\n// Focus: Customer Obsession\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: Hiring Manager and Culture\n# Focus: Customer Obsession\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: Hiring Manager and Culture\n// Focus: Customer Obsession\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde2-s2-r4-q1": {
  "id": "zom-sde2-s2-r4-q1",
  "title": "Ownership During a Peak-Night Outage",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Hiring Manager and Culture",
  "tags": [
   "Zomato",
   "Hiring Manager and Culture",
   "Ownership / Bias for Action",
   "Set 2"
  ],
  "paragraphs": [
   "Zomato hiring-manager round: ownership, customer obsession, speed, honesty and teamwork.",
   "Scenario: You are an SDE-2 and the technical owner for this area. Ordering degrades during the busiest night of the year and the on-call owner is unreachable.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Ownership / Bias for Action",
    "explanation": "Use concrete first-person examples with the customer impact and what you learned."
   }
  ],
  "constraints": [
   "Be specific about what you personally did.",
   "Put the customer first.",
   "Be honest about mistakes and trade-offs."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Hiring Manager and Culture\n// Focus: Ownership / Bias for Action\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: Hiring Manager and Culture\n// Focus: Ownership / Bias for Action\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: Hiring Manager and Culture\n# Focus: Ownership / Bias for Action\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: Hiring Manager and Culture\n// Focus: Ownership / Bias for Action\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde2-s3-r4-q1": {
  "id": "zom-sde2-s3-r4-q1",
  "title": "Disagreeing With a Product Manager",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Hiring Manager and Culture",
  "tags": [
   "Zomato",
   "Hiring Manager and Culture",
   "Intellectual Honesty",
   "Set 3"
  ],
  "paragraphs": [
   "Zomato hiring-manager round: ownership, customer obsession, speed, honesty and teamwork.",
   "Scenario: You are an SDE-2 and the technical owner for this area. A PM wants a feature shipped this week that you think will hurt delivery reliability.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Intellectual Honesty",
    "explanation": "Use concrete first-person examples with the customer impact and what you learned."
   }
  ],
  "constraints": [
   "Be specific about what you personally did.",
   "Put the customer first.",
   "Be honest about mistakes and trade-offs."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Hiring Manager and Culture\n// Focus: Intellectual Honesty\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: Hiring Manager and Culture\n// Focus: Intellectual Honesty\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: Hiring Manager and Culture\n# Focus: Intellectual Honesty\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: Hiring Manager and Culture\n// Focus: Intellectual Honesty\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde2-s4-r4-q1": {
  "id": "zom-sde2-s4-r4-q1",
  "title": "Shipping Fast vs Quality",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Hiring Manager and Culture",
  "tags": [
   "Zomato",
   "Hiring Manager and Culture",
   "Judgment / Trade-offs",
   "Set 4"
  ],
  "paragraphs": [
   "Zomato hiring-manager round: ownership, customer obsession, speed, honesty and teamwork.",
   "Scenario: You are an SDE-2 and the technical owner for this area. Growth wants a launch in three days, but testing shows an edge case that affects a small share of orders.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Judgment / Trade-offs",
    "explanation": "Use concrete first-person examples with the customer impact and what you learned."
   }
  ],
  "constraints": [
   "Be specific about what you personally did.",
   "Put the customer first.",
   "Be honest about mistakes and trade-offs."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Hiring Manager and Culture\n// Focus: Judgment / Trade-offs\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: Hiring Manager and Culture\n// Focus: Judgment / Trade-offs\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: Hiring Manager and Culture\n# Focus: Judgment / Trade-offs\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: Hiring Manager and Culture\n// Focus: Judgment / Trade-offs\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde2-s5-r4-q1": {
  "id": "zom-sde2-s5-r4-q1",
  "title": "A New Vertical With No Playbook",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Hiring Manager and Culture",
  "tags": [
   "Zomato",
   "Hiring Manager and Culture",
   "Ambiguity",
   "Set 5"
  ],
  "paragraphs": [
   "Zomato hiring-manager round: ownership, customer obsession, speed, honesty and teamwork.",
   "Scenario: You are an SDE-2 and the technical owner for this area. You are asked to help launch a new quick-delivery vertical with unclear requirements and tight timelines.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Ambiguity",
    "explanation": "Use concrete first-person examples with the customer impact and what you learned."
   }
  ],
  "constraints": [
   "Be specific about what you personally did.",
   "Put the customer first.",
   "Be honest about mistakes and trade-offs."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Hiring Manager and Culture\n// Focus: Ambiguity\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: Hiring Manager and Culture\n// Focus: Ambiguity\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: Hiring Manager and Culture\n# Focus: Ambiguity\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: Hiring Manager and Culture\n// Focus: Ambiguity\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde2-s6-r4-q1": {
  "id": "zom-sde2-s6-r4-q1",
  "title": "An Experiment That Failed",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Hiring Manager and Culture",
  "tags": [
   "Zomato",
   "Hiring Manager and Culture",
   "Accountability / Learning",
   "Set 6"
  ],
  "paragraphs": [
   "Zomato hiring-manager round: ownership, customer obsession, speed, honesty and teamwork.",
   "Scenario: You are an SDE-2 and the technical owner for this area. An A/B test you championed made conversion worse, and leadership asks what happened.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Accountability / Learning",
    "explanation": "Use concrete first-person examples with the customer impact and what you learned."
   }
  ],
  "constraints": [
   "Be specific about what you personally did.",
   "Put the customer first.",
   "Be honest about mistakes and trade-offs."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Hiring Manager and Culture\n// Focus: Accountability / Learning\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: Hiring Manager and Culture\n// Focus: Accountability / Learning\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: Hiring Manager and Culture\n# Focus: Accountability / Learning\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: Hiring Manager and Culture\n// Focus: Accountability / Learning\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde2-s7-r4-q1": {
  "id": "zom-sde2-s7-r4-q1",
  "title": "Conflict With the Operations Team",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Hiring Manager and Culture",
  "tags": [
   "Zomato",
   "Hiring Manager and Culture",
   "Collaboration",
   "Set 7"
  ],
  "paragraphs": [
   "Zomato hiring-manager round: ownership, customer obsession, speed, honesty and teamwork.",
   "Scenario: You are an SDE-2 and the technical owner for this area. Ops blames your system for late deliveries while your data points to rider supply issues.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Collaboration",
    "explanation": "Use concrete first-person examples with the customer impact and what you learned."
   }
  ],
  "constraints": [
   "Be specific about what you personally did.",
   "Put the customer first.",
   "Be honest about mistakes and trade-offs."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Hiring Manager and Culture\n// Focus: Collaboration\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: Hiring Manager and Culture\n// Focus: Collaboration\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: Hiring Manager and Culture\n# Focus: Collaboration\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: Hiring Manager and Culture\n// Focus: Collaboration\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde2-s8-r4-q1": {
  "id": "zom-sde2-s8-r4-q1",
  "title": "Helping Someone Outside Your Scope",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Hiring Manager and Culture",
  "tags": [
   "Zomato",
   "Hiring Manager and Culture",
   "Teamwork / Giving",
   "Set 8"
  ],
  "paragraphs": [
   "Zomato hiring-manager round: ownership, customer obsession, speed, honesty and teamwork.",
   "Scenario: You are an SDE-2 and the technical owner for this area. A teammate on another squad is stuck on a critical bug while you have your own deadlines.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Teamwork / Giving",
    "explanation": "Use concrete first-person examples with the customer impact and what you learned."
   }
  ],
  "constraints": [
   "Be specific about what you personally did.",
   "Put the customer first.",
   "Be honest about mistakes and trade-offs."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Hiring Manager and Culture\n// Focus: Teamwork / Giving\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: Hiring Manager and Culture\n// Focus: Teamwork / Giving\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: Hiring Manager and Culture\n# Focus: Teamwork / Giving\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: Hiring Manager and Culture\n// Focus: Teamwork / Giving\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde2-s9-r4-q1": {
  "id": "zom-sde2-s9-r4-q1",
  "title": "Surge Pricing Fairness",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Hiring Manager and Culture",
  "tags": [
   "Zomato",
   "Hiring Manager and Culture",
   "Doing the Right Thing",
   "Set 9"
  ],
  "paragraphs": [
   "Zomato hiring-manager round: ownership, customer obsession, speed, honesty and teamwork.",
   "Scenario: You are an SDE-2 and the technical owner for this area. Data shows a surge rule increases revenue but disproportionately hurts customers in certain areas.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Doing the Right Thing",
    "explanation": "Use concrete first-person examples with the customer impact and what you learned."
   }
  ],
  "constraints": [
   "Be specific about what you personally did.",
   "Put the customer first.",
   "Be honest about mistakes and trade-offs."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Hiring Manager and Culture\n// Focus: Doing the Right Thing\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: Hiring Manager and Culture\n// Focus: Doing the Right Thing\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: Hiring Manager and Culture\n# Focus: Doing the Right Thing\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: Hiring Manager and Culture\n// Focus: Doing the Right Thing\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "zom-sde2-s10-r4-q1": {
  "id": "zom-sde2-s10-r4-q1",
  "title": "Transparency in a Postmortem",
  "difficulty": "Medium",
  "company": "Zomato",
  "category": "Hiring Manager and Culture",
  "tags": [
   "Zomato",
   "Hiring Manager and Culture",
   "Transparency",
   "Set 10"
  ],
  "paragraphs": [
   "Zomato hiring-manager round: ownership, customer obsession, speed, honesty and teamwork.",
   "Scenario: You are an SDE-2 and the technical owner for this area. You discover your change contributed to an outage, and nobody else has noticed yet.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Transparency",
    "explanation": "Use concrete first-person examples with the customer impact and what you learned."
   }
  ],
  "constraints": [
   "Be specific about what you personally did.",
   "Put the customer first.",
   "Be honest about mistakes and trade-offs."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: Hiring Manager and Culture\n// Focus: Transparency\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: Hiring Manager and Culture\n// Focus: Transparency\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: Hiring Manager and Culture\n# Focus: Transparency\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: Hiring Manager and Culture\n// Focus: Transparency\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 }
};
