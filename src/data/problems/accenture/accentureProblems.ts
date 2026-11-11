import { ProblemDefinition } from "../../types";

// GENERATED. 3 roles x 10 sets x (R1: 2 tasks, R2/R3/R4: 1 problem each).
export const ACCENTURE_ALL_PROBLEMS: Record<string, ProblemDefinition> = {
 "acc-ase-s1-r1-q1": {
  "id": "acc-ase-s1-r1-q1",
  "title": "Validate Employee ID Palindrome",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "String",
  "tags": [
   "Accenture Round 1",
   "String",
   "Two Pointers",
   "Set 1"
  ],
  "paragraphs": [
   "Return true if s reads the same forwards and backwards after ignoring case and non-alphanumeric characters."
  ],
  "examples": [
   {
    "input": "s = \"A man, a plan, a canal: Panama\"",
    "output": "true"
   },
   {
    "input": "s = \"race a car\"",
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
    "id": "acc-ase-s1-r1-q1-v1",
    "input": "\"A man, a plan, a canal: Panama\"",
    "expectedOutput": "true"
   },
   {
    "id": "acc-ase-s1-r1-q1-v2",
    "input": "\"race a car\"",
    "expectedOutput": "false"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-ase-s1-r1-q1-h1",
    "input": "\"\"",
    "expectedOutput": "true"
   },
   {
    "id": "acc-ase-s1-r1-q1-h2",
    "input": "\"No lemon, no melon\"",
    "expectedOutput": "true"
   },
   {
    "id": "acc-ase-s1-r1-q1-h3",
    "input": "\"ab\"",
    "expectedOutput": "false"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} s\n * @return {boolean}\n */\nfunction isPalindrome(s) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def isPalindrome(self, s: str) -> bool:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    bool isPalindrome(string s) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "acc-ase-s1-r1-q2"
 },
 "acc-ase-s1-r1-q2": {
  "id": "acc-ase-s1-r1-q2",
  "title": "Second Highest Billing Amount",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "Array",
  "tags": [
   "Accenture Round 1",
   "Array",
   "Set 1"
  ],
  "paragraphs": [
   "Return the second largest distinct value in the array, or -1 if there is none."
  ],
  "examples": [
   {
    "input": "nums = [12,35,1,10,34,1]",
    "output": "34"
   },
   {
    "input": "nums = [10,10,10]",
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
    "id": "acc-ase-s1-r1-q2-v1",
    "input": "[12,35,1,10,34,1]",
    "expectedOutput": "34"
   },
   {
    "id": "acc-ase-s1-r1-q2-v2",
    "input": "[10,10,10]",
    "expectedOutput": "-1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-ase-s1-r1-q2-h1",
    "input": "[5]",
    "expectedOutput": "-1"
   },
   {
    "id": "acc-ase-s1-r1-q2-h2",
    "input": "[1,2]",
    "expectedOutput": "1"
   },
   {
    "id": "acc-ase-s1-r1-q2-h3",
    "input": "[-3,-1,-2]",
    "expectedOutput": "-2"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @return {number}\n */\nfunction secondLargest(nums) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def secondLargest(self, nums: List[int]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int secondLargest(vector<int>& nums) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "acc-ase-s2-r1-q1": {
  "id": "acc-ase-s2-r1-q1",
  "title": "Nth Fibonacci Invoice Number",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "Math",
  "tags": [
   "Accenture Round 1",
   "Math",
   "Iteration",
   "Set 2"
  ],
  "paragraphs": [
   "Return the nth Fibonacci number where F(0)=0 and F(1)=1."
  ],
  "examples": [
   {
    "input": "n = 0",
    "output": "0"
   },
   {
    "input": "n = 1",
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
    "id": "acc-ase-s2-r1-q1-v1",
    "input": "0",
    "expectedOutput": "0"
   },
   {
    "id": "acc-ase-s2-r1-q1-v2",
    "input": "1",
    "expectedOutput": "1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-ase-s2-r1-q1-h1",
    "input": "10",
    "expectedOutput": "55"
   },
   {
    "id": "acc-ase-s2-r1-q1-h2",
    "input": "20",
    "expectedOutput": "6765"
   },
   {
    "id": "acc-ase-s2-r1-q1-h3",
    "input": "30",
    "expectedOutput": "832040"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number} n\n * @return {number}\n */\nfunction fibonacci(n) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def fibonacci(self, n: int) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int fibonacci(int n) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "acc-ase-s2-r1-q2"
 },
 "acc-ase-s2-r1-q2": {
  "id": "acc-ase-s2-r1-q2",
  "title": "Count Prime Server Ids",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "Math",
  "tags": [
   "Accenture Round 1",
   "Math",
   "Sieve",
   "Set 2"
  ],
  "paragraphs": [
   "Return how many prime numbers are less than or equal to n."
  ],
  "examples": [
   {
    "input": "n = 10",
    "output": "4"
   },
   {
    "input": "n = 1",
    "output": "0"
   }
  ],
  "constraints": [
   "Target O(N log log N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-ase-s2-r1-q2-v1",
    "input": "10",
    "expectedOutput": "4"
   },
   {
    "id": "acc-ase-s2-r1-q2-v2",
    "input": "1",
    "expectedOutput": "0"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-ase-s2-r1-q2-h1",
    "input": "2",
    "expectedOutput": "1"
   },
   {
    "id": "acc-ase-s2-r1-q2-h2",
    "input": "100",
    "expectedOutput": "25"
   },
   {
    "id": "acc-ase-s2-r1-q2-h3",
    "input": "30",
    "expectedOutput": "10"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number} n\n * @return {number}\n */\nfunction countPrimes(n) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def countPrimes(self, n: int) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int countPrimes(int n) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N log log N)",
   "space": "O(N)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "acc-ase-s3-r1-q1": {
  "id": "acc-ase-s3-r1-q1",
  "title": "Reverse Each Word in a Sentence",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "String",
  "tags": [
   "Accenture Round 1",
   "String",
   "Set 3"
  ],
  "paragraphs": [
   "Reverse the characters of every word in s while keeping the word order and spacing."
  ],
  "examples": [
   {
    "input": "s = \"Let's take contest\"",
    "output": "\"s'teL ekat tsetnoc\""
   },
   {
    "input": "s = \"God Ding\"",
    "output": "\"doG gniD\""
   }
  ],
  "constraints": [
   "Target O(N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-ase-s3-r1-q1-v1",
    "input": "\"Let's take contest\"",
    "expectedOutput": "\"s'teL ekat tsetnoc\""
   },
   {
    "id": "acc-ase-s3-r1-q1-v2",
    "input": "\"God Ding\"",
    "expectedOutput": "\"doG gniD\""
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-ase-s3-r1-q1-h1",
    "input": "\"a\"",
    "expectedOutput": "\"a\""
   },
   {
    "id": "acc-ase-s3-r1-q1-h2",
    "input": "\"hello world\"",
    "expectedOutput": "\"olleh dlrow\""
   },
   {
    "id": "acc-ase-s3-r1-q1-h3",
    "input": "\"abc def ghi\"",
    "expectedOutput": "\"cba fed ihg\""
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} s\n * @return {string}\n */\nfunction reverseEachWord(s) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def reverseEachWord(self, s: str) -> str:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    string reverseEachWord(string s) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "acc-ase-s3-r1-q2"
 },
 "acc-ase-s3-r1-q2": {
  "id": "acc-ase-s3-r1-q2",
  "title": "Find the Missing Ticket Number",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "Math",
  "tags": [
   "Accenture Round 1",
   "Array",
   "Math",
   "Set 3"
  ],
  "paragraphs": [
   "The array holds n distinct numbers taken from 0..n. Return the one number missing from the range."
  ],
  "examples": [
   {
    "input": "nums = [3,0,1]",
    "output": "2"
   },
   {
    "input": "nums = [0,1]",
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
    "id": "acc-ase-s3-r1-q2-v1",
    "input": "[3,0,1]",
    "expectedOutput": "2"
   },
   {
    "id": "acc-ase-s3-r1-q2-v2",
    "input": "[0,1]",
    "expectedOutput": "2"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-ase-s3-r1-q2-h1",
    "input": "[9,6,4,2,3,5,7,0,1]",
    "expectedOutput": "8"
   },
   {
    "id": "acc-ase-s3-r1-q2-h2",
    "input": "[0]",
    "expectedOutput": "1"
   },
   {
    "id": "acc-ase-s3-r1-q2-h3",
    "input": "[1]",
    "expectedOutput": "0"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @return {number}\n */\nfunction missingNumber(nums) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def missingNumber(self, nums: List[int]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int missingNumber(vector<int>& nums) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "acc-ase-s4-r1-q1": {
  "id": "acc-ase-s4-r1-q1",
  "title": "Reduce a Number to a Single Digit",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "Math",
  "tags": [
   "Accenture Round 1",
   "Math",
   "Set 4"
  ],
  "paragraphs": [
   "Repeatedly add the digits of n until a single digit remains, and return it."
  ],
  "examples": [
   {
    "input": "n = 38",
    "output": "2"
   },
   {
    "input": "n = 0",
    "output": "0"
   }
  ],
  "constraints": [
   "Target O(log N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-ase-s4-r1-q1-v1",
    "input": "38",
    "expectedOutput": "2"
   },
   {
    "id": "acc-ase-s4-r1-q1-v2",
    "input": "0",
    "expectedOutput": "0"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-ase-s4-r1-q1-h1",
    "input": "9",
    "expectedOutput": "9"
   },
   {
    "id": "acc-ase-s4-r1-q1-h2",
    "input": "99999",
    "expectedOutput": "9"
   },
   {
    "id": "acc-ase-s4-r1-q1-h3",
    "input": "12345",
    "expectedOutput": "6"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number} n\n * @return {number}\n */\nfunction singleDigit(n) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def singleDigit(self, n: int) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int singleDigit(int n) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(log N)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "acc-ase-s4-r1-q2"
 },
 "acc-ase-s4-r1-q2": {
  "id": "acc-ase-s4-r1-q2",
  "title": "Count Vowels and Consonants",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "String",
  "tags": [
   "Accenture Round 1",
   "String",
   "Counting",
   "Set 4"
  ],
  "paragraphs": [
   "Return [vowels, consonants] counting only English letters (case-insensitive)."
  ],
  "examples": [
   {
    "input": "s = \"Hello World\"",
    "output": "[3,7]"
   },
   {
    "input": "s = \"aeiou\"",
    "output": "[5,0]"
   }
  ],
  "constraints": [
   "Target O(N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-ase-s4-r1-q2-v1",
    "input": "\"Hello World\"",
    "expectedOutput": "[3,7]"
   },
   {
    "id": "acc-ase-s4-r1-q2-v2",
    "input": "\"aeiou\"",
    "expectedOutput": "[5,0]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-ase-s4-r1-q2-h1",
    "input": "\"xyz\"",
    "expectedOutput": "[0,3]"
   },
   {
    "id": "acc-ase-s4-r1-q2-h2",
    "input": "\"Accenture 2026\"",
    "expectedOutput": "[4,5]"
   },
   {
    "id": "acc-ase-s4-r1-q2-h3",
    "input": "\"\"",
    "expectedOutput": "[0,0]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} s\n * @return {number[]}\n */\nfunction countVowelsConsonants(s) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def countVowelsConsonants(self, s: str) -> List[int]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<int> countVowelsConsonants(string s) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "acc-ase-s5-r1-q1": {
  "id": "acc-ase-s5-r1-q1",
  "title": "Rotate Shift Schedule",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "Array",
  "tags": [
   "Accenture Round 1",
   "Array",
   "Set 5"
  ],
  "paragraphs": [
   "Rotate the array to the right by k positions and return it."
  ],
  "examples": [
   {
    "input": "nums = [1,2,3,4,5,6,7], k = 3",
    "output": "[5,6,7,1,2,3,4]"
   },
   {
    "input": "nums = [-1,-100,3,99], k = 2",
    "output": "[3,99,-1,-100]"
   }
  ],
  "constraints": [
   "Target O(N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-ase-s5-r1-q1-v1",
    "input": "[1,2,3,4,5,6,7]\n3",
    "expectedOutput": "[5,6,7,1,2,3,4]"
   },
   {
    "id": "acc-ase-s5-r1-q1-v2",
    "input": "[-1,-100,3,99]\n2",
    "expectedOutput": "[3,99,-1,-100]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-ase-s5-r1-q1-h1",
    "input": "[1]\n5",
    "expectedOutput": "[1]"
   },
   {
    "id": "acc-ase-s5-r1-q1-h2",
    "input": "[1,2]\n0",
    "expectedOutput": "[1,2]"
   },
   {
    "id": "acc-ase-s5-r1-q1-h3",
    "input": "[1,2,3]\n3",
    "expectedOutput": "[1,2,3]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @param {number} k\n * @return {number[]}\n */\nfunction rotate(nums, k) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def rotate(self, nums: List[int], k: int) -> List[int]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<int> rotate(vector<int>& nums, int k) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "acc-ase-s5-r1-q2"
 },
 "acc-ase-s5-r1-q2": {
  "id": "acc-ase-s5-r1-q2",
  "title": "Case-Insensitive Anagram Check",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "String",
  "tags": [
   "Accenture Round 1",
   "String",
   "Sorting",
   "Set 5"
  ],
  "paragraphs": [
   "Return true if the two strings are anagrams of each other, ignoring case."
  ],
  "examples": [
   {
    "input": "a = \"Listen\", b = \"Silent\"",
    "output": "true"
   },
   {
    "input": "a = \"abc\", b = \"abd\"",
    "output": "false"
   }
  ],
  "constraints": [
   "Target O(N log N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-ase-s5-r1-q2-v1",
    "input": "\"Listen\"\n\"Silent\"",
    "expectedOutput": "true"
   },
   {
    "id": "acc-ase-s5-r1-q2-v2",
    "input": "\"abc\"\n\"abd\"",
    "expectedOutput": "false"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-ase-s5-r1-q2-h1",
    "input": "\"Dormitory\"\n\"DirtyRoom\"",
    "expectedOutput": "true"
   },
   {
    "id": "acc-ase-s5-r1-q2-h2",
    "input": "\"a\"\n\"A\"",
    "expectedOutput": "true"
   },
   {
    "id": "acc-ase-s5-r1-q2-h3",
    "input": "\"ab\"\n\"a\"",
    "expectedOutput": "false"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} a\n * @param {string} b\n * @return {boolean}\n */\nfunction areAnagrams(a, b) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def areAnagrams(self, a: str, b: str) -> bool:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    bool areAnagrams(string a, string b) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N log N)",
   "space": "O(N)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "acc-ase-s6-r1-q1": {
  "id": "acc-ase-s6-r1-q1",
  "title": "Trailing Zeros in a Factorial",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Math",
  "tags": [
   "Accenture Round 1",
   "Math",
   "Set 6"
  ],
  "paragraphs": [
   "Return the number of trailing zeros in n!."
  ],
  "examples": [
   {
    "input": "n = 3",
    "output": "0"
   },
   {
    "input": "n = 5",
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
    "id": "acc-ase-s6-r1-q1-v1",
    "input": "3",
    "expectedOutput": "0"
   },
   {
    "id": "acc-ase-s6-r1-q1-v2",
    "input": "5",
    "expectedOutput": "1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-ase-s6-r1-q1-h1",
    "input": "0",
    "expectedOutput": "0"
   },
   {
    "id": "acc-ase-s6-r1-q1-h2",
    "input": "100",
    "expectedOutput": "24"
   },
   {
    "id": "acc-ase-s6-r1-q1-h3",
    "input": "25",
    "expectedOutput": "6"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number} n\n * @return {number}\n */\nfunction trailingZeroes(n) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def trailingZeroes(self, n: int) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int trailingZeroes(int n) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(log N)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "acc-ase-s6-r1-q2"
 },
 "acc-ase-s6-r1-q2": {
  "id": "acc-ase-s6-r1-q2",
  "title": "Remove Duplicates From Sorted Records",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "Two Pointers",
  "tags": [
   "Accenture Round 1",
   "Array",
   "Two Pointers",
   "Set 6"
  ],
  "paragraphs": [
   "Given a sorted array, return it with duplicate values removed (each value appears once)."
  ],
  "examples": [
   {
    "input": "nums = [1,1,2]",
    "output": "[1,2]"
   },
   {
    "input": "nums = [0,0,1,1,1,2,2,3,3,4]",
    "output": "[0,1,2,3,4]"
   }
  ],
  "constraints": [
   "Target O(N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-ase-s6-r1-q2-v1",
    "input": "[1,1,2]",
    "expectedOutput": "[1,2]"
   },
   {
    "id": "acc-ase-s6-r1-q2-v2",
    "input": "[0,0,1,1,1,2,2,3,3,4]",
    "expectedOutput": "[0,1,2,3,4]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-ase-s6-r1-q2-h1",
    "input": "[]",
    "expectedOutput": "[]"
   },
   {
    "id": "acc-ase-s6-r1-q2-h2",
    "input": "[5]",
    "expectedOutput": "[5]"
   },
   {
    "id": "acc-ase-s6-r1-q2-h3",
    "input": "[2,2,2]",
    "expectedOutput": "[2]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @return {number[]}\n */\nfunction removeDuplicates(nums) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def removeDuplicates(self, nums: List[int]) -> List[int]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<int> removeDuplicates(vector<int>& nums) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "acc-ase-s7-r1-q1": {
  "id": "acc-ase-s7-r1-q1",
  "title": "Compress a Repeated-Character String",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "String",
  "tags": [
   "Accenture Round 1",
   "String",
   "Set 7"
  ],
  "paragraphs": [
   "Compress s by replacing each run of a repeated character with the character followed by the run length (omit the 1 for single characters)."
  ],
  "examples": [
   {
    "input": "s = \"aabcccccaaa\"",
    "output": "\"a2bc5a3\""
   },
   {
    "input": "s = \"abc\"",
    "output": "\"abc\""
   }
  ],
  "constraints": [
   "Target O(N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-ase-s7-r1-q1-v1",
    "input": "\"aabcccccaaa\"",
    "expectedOutput": "\"a2bc5a3\""
   },
   {
    "id": "acc-ase-s7-r1-q1-v2",
    "input": "\"abc\"",
    "expectedOutput": "\"abc\""
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-ase-s7-r1-q1-h1",
    "input": "\"aaaaaaaaaaaa\"",
    "expectedOutput": "\"a12\""
   },
   {
    "id": "acc-ase-s7-r1-q1-h2",
    "input": "\"\"",
    "expectedOutput": "\"\""
   },
   {
    "id": "acc-ase-s7-r1-q1-h3",
    "input": "\"aabb\"",
    "expectedOutput": "\"a2b2\""
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} s\n * @return {string}\n */\nfunction compressString(s) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def compressString(self, s: str) -> str:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    string compressString(string s) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "acc-ase-s7-r1-q2"
 },
 "acc-ase-s7-r1-q2": {
  "id": "acc-ase-s7-r1-q2",
  "title": "Armstrong Numbers in a Range",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "Math",
  "tags": [
   "Accenture Round 1",
   "Math",
   "Set 7"
  ],
  "paragraphs": [
   "Return every Armstrong number between lo and hi inclusive, in ascending order."
  ],
  "examples": [
   {
    "input": "lo = 1, hi = 200",
    "output": "[1,2,3,4,5,6,7,8,9,153]"
   },
   {
    "input": "lo = 100, hi = 999",
    "output": "[153,370,371,407]"
   }
  ],
  "constraints": [
   "Target O(N*D) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-ase-s7-r1-q2-v1",
    "input": "1\n200",
    "expectedOutput": "[1,2,3,4,5,6,7,8,9,153]"
   },
   {
    "id": "acc-ase-s7-r1-q2-v2",
    "input": "100\n999",
    "expectedOutput": "[153,370,371,407]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-ase-s7-r1-q2-h1",
    "input": "0\n9",
    "expectedOutput": "[0,1,2,3,4,5,6,7,8,9]"
   },
   {
    "id": "acc-ase-s7-r1-q2-h2",
    "input": "150\n160",
    "expectedOutput": "[153]"
   },
   {
    "id": "acc-ase-s7-r1-q2-h3",
    "input": "370\n371",
    "expectedOutput": "[370,371]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number} lo\n * @param {number} hi\n * @return {number[]}\n */\nfunction armstrongNumbers(lo, hi) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def armstrongNumbers(self, lo: int, hi: int) -> List[int]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<int> armstrongNumbers(int lo, int hi) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N*D)",
   "space": "O(1)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "acc-ase-s8-r1-q1": {
  "id": "acc-ase-s8-r1-q1",
  "title": "Pascal Triangle Row",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "Array",
  "tags": [
   "Accenture Round 1",
   "Array",
   "Math",
   "Set 8"
  ],
  "paragraphs": [
   "Return row number n (0-indexed) of Pascal's triangle."
  ],
  "examples": [
   {
    "input": "n = 0",
    "output": "[1]"
   },
   {
    "input": "n = 1",
    "output": "[1,1]"
   }
  ],
  "constraints": [
   "Target O(N^2) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-ase-s8-r1-q1-v1",
    "input": "0",
    "expectedOutput": "[1]"
   },
   {
    "id": "acc-ase-s8-r1-q1-v2",
    "input": "1",
    "expectedOutput": "[1,1]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-ase-s8-r1-q1-h1",
    "input": "3",
    "expectedOutput": "[1,3,3,1]"
   },
   {
    "id": "acc-ase-s8-r1-q1-h2",
    "input": "5",
    "expectedOutput": "[1,5,10,10,5,1]"
   },
   {
    "id": "acc-ase-s8-r1-q1-h3",
    "input": "10",
    "expectedOutput": "[1,10,45,120,210,252,210,120,45,10,1]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number} n\n * @return {number[]}\n */\nfunction getRow(n) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def getRow(self, n: int) -> List[int]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<int> getRow(int n) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N^2)",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "acc-ase-s8-r1-q2"
 },
 "acc-ase-s8-r1-q2": {
  "id": "acc-ase-s8-r1-q2",
  "title": "Transpose a Report Matrix",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "Matrix",
  "tags": [
   "Accenture Round 1",
   "Matrix",
   "Set 8"
  ],
  "paragraphs": [
   "Return the transpose of the matrix (rows become columns)."
  ],
  "examples": [
   {
    "input": "matrix = [[1,2,3],[4,5,6]]",
    "output": "[[1,4],[2,5],[3,6]]"
   },
   {
    "input": "matrix = [[1,2],[3,4],[5,6]]",
    "output": "[[1,3,5],[2,4,6]]"
   }
  ],
  "constraints": [
   "Target O(M*N) time and O(M*N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-ase-s8-r1-q2-v1",
    "input": "[[1,2,3],[4,5,6]]",
    "expectedOutput": "[[1,4],[2,5],[3,6]]"
   },
   {
    "id": "acc-ase-s8-r1-q2-v2",
    "input": "[[1,2],[3,4],[5,6]]",
    "expectedOutput": "[[1,3,5],[2,4,6]]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-ase-s8-r1-q2-h1",
    "input": "[[7]]",
    "expectedOutput": "[[7]]"
   },
   {
    "id": "acc-ase-s8-r1-q2-h2",
    "input": "[[1,2,3]]",
    "expectedOutput": "[[1],[2],[3]]"
   },
   {
    "id": "acc-ase-s8-r1-q2-h3",
    "input": "[[1],[2],[3]]",
    "expectedOutput": "[[1,2,3]]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[][]} matrix\n * @return {number[][]}\n */\nfunction transpose(matrix) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def transpose(self, matrix: List[List[int]]) -> List[List[int]]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<vector<int>> transpose(vector<vector<int>>& matrix) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(M*N)",
   "space": "O(M*N)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "acc-ase-s9-r1-q1": {
  "id": "acc-ase-s9-r1-q1",
  "title": "GCD and LCM of Two Batch Sizes",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "Math",
  "tags": [
   "Accenture Round 1",
   "Math",
   "Set 9"
  ],
  "paragraphs": [
   "Return [gcd, lcm] of two positive integers."
  ],
  "examples": [
   {
    "input": "a = 12, b = 18",
    "output": "[6,36]"
   },
   {
    "input": "a = 7, b = 13",
    "output": "[1,91]"
   }
  ],
  "constraints": [
   "Target O(log N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-ase-s9-r1-q1-v1",
    "input": "12\n18",
    "expectedOutput": "[6,36]"
   },
   {
    "id": "acc-ase-s9-r1-q1-v2",
    "input": "7\n13",
    "expectedOutput": "[1,91]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-ase-s9-r1-q1-h1",
    "input": "5\n5",
    "expectedOutput": "[5,5]"
   },
   {
    "id": "acc-ase-s9-r1-q1-h2",
    "input": "100\n75",
    "expectedOutput": "[25,300]"
   },
   {
    "id": "acc-ase-s9-r1-q1-h3",
    "input": "1\n9",
    "expectedOutput": "[1,9]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number} a\n * @param {number} b\n * @return {number[]}\n */\nfunction gcdAndLcm(a, b) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def gcdAndLcm(self, a: int, b: int) -> List[int]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<int> gcdAndLcm(int a, int b) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(log N)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "acc-ase-s9-r1-q2"
 },
 "acc-ase-s9-r1-q2": {
  "id": "acc-ase-s9-r1-q2",
  "title": "Longest Common Prefix of Project Codes",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "String",
  "tags": [
   "Accenture Round 1",
   "String",
   "Set 9"
  ],
  "paragraphs": [
   "Return the longest common prefix of all strings, or an empty string if there is none."
  ],
  "examples": [
   {
    "input": "strs = [\"flower\",\"flow\",\"flight\"]",
    "output": "\"fl\""
   },
   {
    "input": "strs = [\"dog\",\"racecar\",\"car\"]",
    "output": "\"\""
   }
  ],
  "constraints": [
   "Target O(S) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-ase-s9-r1-q2-v1",
    "input": "[\"flower\",\"flow\",\"flight\"]",
    "expectedOutput": "\"fl\""
   },
   {
    "id": "acc-ase-s9-r1-q2-v2",
    "input": "[\"dog\",\"racecar\",\"car\"]",
    "expectedOutput": "\"\""
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-ase-s9-r1-q2-h1",
    "input": "[\"a\"]",
    "expectedOutput": "\"a\""
   },
   {
    "id": "acc-ase-s9-r1-q2-h2",
    "input": "[\"ab\",\"ab\"]",
    "expectedOutput": "\"ab\""
   },
   {
    "id": "acc-ase-s9-r1-q2-h3",
    "input": "[\"interview\",\"internet\",\"internal\"]",
    "expectedOutput": "\"inter\""
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string[]} strs\n * @return {string}\n */\nfunction longestCommonPrefix(strs) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def longestCommonPrefix(self, strs: List[str]) -> str:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    string longestCommonPrefix(vector<string>& strs) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(S)",
   "space": "O(1)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "acc-ase-s10-r1-q1": {
  "id": "acc-ase-s10-r1-q1",
  "title": "Convert Number to Binary",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "Math",
  "tags": [
   "Accenture Round 1",
   "Math",
   "Bit Manipulation",
   "Set 10"
  ],
  "paragraphs": [
   "Return the binary representation of a non-negative integer as a string without leading zeros."
  ],
  "examples": [
   {
    "input": "n = 5",
    "output": "\"101\""
   },
   {
    "input": "n = 0",
    "output": "\"0\""
   }
  ],
  "constraints": [
   "Target O(log N) time and O(log N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-ase-s10-r1-q1-v1",
    "input": "5",
    "expectedOutput": "\"101\""
   },
   {
    "id": "acc-ase-s10-r1-q1-v2",
    "input": "0",
    "expectedOutput": "\"0\""
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-ase-s10-r1-q1-h1",
    "input": "255",
    "expectedOutput": "\"11111111\""
   },
   {
    "id": "acc-ase-s10-r1-q1-h2",
    "input": "1024",
    "expectedOutput": "\"10000000000\""
   },
   {
    "id": "acc-ase-s10-r1-q1-h3",
    "input": "10",
    "expectedOutput": "\"1010\""
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number} n\n * @return {string}\n */\nfunction toBinary(n) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def toBinary(self, n: int) -> str:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    string toBinary(int n) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(log N)",
   "space": "O(log N)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "acc-ase-s10-r1-q2"
 },
 "acc-ase-s10-r1-q2": {
  "id": "acc-ase-s10-r1-q2",
  "title": "Pair Summing to a Target",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "Hash Table",
  "tags": [
   "Accenture Round 1",
   "Hash Table",
   "Array",
   "Set 10"
  ],
  "paragraphs": [
   "Return the indices of the two numbers that add up to target. Exactly one solution exists."
  ],
  "examples": [
   {
    "input": "nums = [2,7,11,15], target = 9",
    "output": "[0,1]"
   },
   {
    "input": "nums = [3,2,4], target = 6",
    "output": "[1,2]"
   }
  ],
  "constraints": [
   "Target O(N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-ase-s10-r1-q2-v1",
    "input": "[2,7,11,15]\n9",
    "expectedOutput": "[0,1]"
   },
   {
    "id": "acc-ase-s10-r1-q2-v2",
    "input": "[3,2,4]\n6",
    "expectedOutput": "[1,2]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-ase-s10-r1-q2-h1",
    "input": "[3,3]\n6",
    "expectedOutput": "[0,1]"
   },
   {
    "id": "acc-ase-s10-r1-q2-h2",
    "input": "[1,5,3,8]\n11",
    "expectedOutput": "[2,3]"
   },
   {
    "id": "acc-ase-s10-r1-q2-h3",
    "input": "[-1,-2,-3,-4,-5]\n-8",
    "expectedOutput": "[2,4]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number[]}\n */\nfunction twoSum(nums, target) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(N)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "acc-ase-s1-r2-q1": {
  "id": "acc-ase-s1-r2-q1",
  "title": "Kth Largest Latency",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Heap",
  "tags": [
   "Accenture Round 2",
   "Heap",
   "Quickselect",
   "Set 1"
  ],
  "paragraphs": [
   "Return the kth largest element of an unsorted array (kth in sorted order, not distinct). Defend a heap versus quickselect trade-off.",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-ase-s1-r2-q1-v1",
    "input": "[3,2,1,5,6,4]\n2",
    "expectedOutput": "5"
   },
   {
    "id": "acc-ase-s1-r2-q1-v2",
    "input": "[3,2,3,1,2,4,5,5,6]\n4",
    "expectedOutput": "4"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-ase-s1-r2-q1-h1",
    "input": "[1]\n1",
    "expectedOutput": "1"
   },
   {
    "id": "acc-ase-s1-r2-q1-h2",
    "input": "[7,7,7]\n2",
    "expectedOutput": "7"
   },
   {
    "id": "acc-ase-s1-r2-q1-h3",
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
 "acc-ase-s2-r2-q1": {
  "id": "acc-ase-s2-r2-q1",
  "title": "Top K Search Terms",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Heap / Hashing",
  "tags": [
   "Accenture Round 2",
   "Heap",
   "Hash Table",
   "Bucket Sort",
   "Set 2"
  ],
  "paragraphs": [
   "Return the k most frequent elements, sorted ascending (frequency ties are broken by smaller value). Defend your complexity versus sorting.",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-ase-s2-r2-q1-v1",
    "input": "[1,1,1,2,2,3]\n2",
    "expectedOutput": "[1,2]"
   },
   {
    "id": "acc-ase-s2-r2-q1-v2",
    "input": "[1]\n1",
    "expectedOutput": "[1]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-ase-s2-r2-q1-h1",
    "input": "[4,4,5,5,6]\n2",
    "expectedOutput": "[4,5]"
   },
   {
    "id": "acc-ase-s2-r2-q1-h2",
    "input": "[3,0,1,0]\n1",
    "expectedOutput": "[0]"
   },
   {
    "id": "acc-ase-s2-r2-q1-h3",
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
 "acc-ase-s3-r2-q1": {
  "id": "acc-ase-s3-r2-q1",
  "title": "Build Dependency Order",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Graph / Topological Sort",
  "tags": [
   "Accenture Round 2",
   "Graph",
   "Topological Sort",
   "Set 3"
  ],
  "paragraphs": [
   "There are numCourses build targets 0..n-1 and prerequisites [a, b] meaning b must be built before a. Return true if all targets can be built.",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-ase-s3-r2-q1-v1",
    "input": "2\n[[1,0]]",
    "expectedOutput": "true"
   },
   {
    "id": "acc-ase-s3-r2-q1-v2",
    "input": "2\n[[1,0],[0,1]]",
    "expectedOutput": "false"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-ase-s3-r2-q1-h1",
    "input": "1\n[]",
    "expectedOutput": "true"
   },
   {
    "id": "acc-ase-s3-r2-q1-h2",
    "input": "4\n[[1,0],[2,1],[3,2]]",
    "expectedOutput": "true"
   },
   {
    "id": "acc-ase-s3-r2-q1-h3",
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
 "acc-ase-s4-r2-q1": {
  "id": "acc-ase-s4-r2-q1",
  "title": "Longest Palindromic Token",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Expand Around Center",
  "tags": [
   "Accenture Round 2",
   "String",
   "DP",
   "Set 4"
  ],
  "paragraphs": [
   "Return the length of the longest palindromic substring of s. Defend why expanding around centers beats brute force.",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-ase-s4-r2-q1-v1",
    "input": "\"babad\"",
    "expectedOutput": "3"
   },
   {
    "id": "acc-ase-s4-r2-q1-v2",
    "input": "\"cbbd\"",
    "expectedOutput": "2"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-ase-s4-r2-q1-h1",
    "input": "\"a\"",
    "expectedOutput": "1"
   },
   {
    "id": "acc-ase-s4-r2-q1-h2",
    "input": "\"forgeeksskeegfor\"",
    "expectedOutput": "10"
   },
   {
    "id": "acc-ase-s4-r2-q1-h3",
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
 "acc-ase-s5-r2-q1": {
  "id": "acc-ase-s5-r2-q1",
  "title": "Generate Balanced Templates",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Backtracking",
  "tags": [
   "Accenture Round 2",
   "Backtracking",
   "Recursion",
   "Set 5"
  ],
  "paragraphs": [
   "Given n pairs of brackets, return all well-formed combinations sorted in lexicographic order.",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-ase-s5-r2-q1-v1",
    "input": "1",
    "expectedOutput": "[\"()\"]"
   },
   {
    "id": "acc-ase-s5-r2-q1-v2",
    "input": "2",
    "expectedOutput": "[\"(())\",\"()()\"]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-ase-s5-r2-q1-h1",
    "input": "3",
    "expectedOutput": "[\"((()))\",\"(()())\",\"(())()\",\"()(())\",\"()()()\"]"
   },
   {
    "id": "acc-ase-s5-r2-q1-h2",
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
 "acc-ase-s6-r2-q1": {
  "id": "acc-ase-s6-r2-q1",
  "title": "Search a Rotated Log Index",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Binary Search",
  "tags": [
   "Accenture Round 2",
   "Binary Search",
   "Array",
   "Set 6"
  ],
  "paragraphs": [
   "A sorted array of distinct values was rotated at an unknown pivot. Return the index of target or -1 in O(log N).",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-ase-s6-r2-q1-v1",
    "input": "[4,5,6,7,0,1,2]\n0",
    "expectedOutput": "4"
   },
   {
    "id": "acc-ase-s6-r2-q1-v2",
    "input": "[4,5,6,7,0,1,2]\n3",
    "expectedOutput": "-1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-ase-s6-r2-q1-h1",
    "input": "[1]\n0",
    "expectedOutput": "-1"
   },
   {
    "id": "acc-ase-s6-r2-q1-h2",
    "input": "[3,1]\n1",
    "expectedOutput": "1"
   },
   {
    "id": "acc-ase-s6-r2-q1-h3",
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
 "acc-ase-s7-r2-q1": {
  "id": "acc-ase-s7-r2-q1",
  "title": "Days Until Warmer",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Monotonic Stack",
  "tags": [
   "Accenture Round 2",
   "Stack",
   "Monotonic Stack",
   "Set 7"
  ],
  "paragraphs": [
   "For each day, return how many days until a warmer temperature, or 0 if none. Defend the amortised O(N) bound.",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-ase-s7-r2-q1-v1",
    "input": "[73,74,75,71,69,72,76,73]",
    "expectedOutput": "[1,1,4,2,1,1,0,0]"
   },
   {
    "id": "acc-ase-s7-r2-q1-v2",
    "input": "[30,40,50,60]",
    "expectedOutput": "[1,1,1,0]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-ase-s7-r2-q1-h1",
    "input": "[30,60,90]",
    "expectedOutput": "[1,1,0]"
   },
   {
    "id": "acc-ase-s7-r2-q1-h2",
    "input": "[90,80,70]",
    "expectedOutput": "[0,0,0]"
   },
   {
    "id": "acc-ase-s7-r2-q1-h3",
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
 "acc-ase-s8-r2-q1": {
  "id": "acc-ase-s8-r2-q1",
  "title": "Reach the Last Shard",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Greedy",
  "tags": [
   "Accenture Round 2",
   "Greedy",
   "Array",
   "Set 8"
  ],
  "paragraphs": [
   "Each value is the maximum jump length from that index. Return true if you can reach the last index from index 0. Prove the greedy invariant.",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-ase-s8-r2-q1-v1",
    "input": "[2,3,1,1,4]",
    "expectedOutput": "true"
   },
   {
    "id": "acc-ase-s8-r2-q1-v2",
    "input": "[3,2,1,0,4]",
    "expectedOutput": "false"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-ase-s8-r2-q1-h1",
    "input": "[0]",
    "expectedOutput": "true"
   },
   {
    "id": "acc-ase-s8-r2-q1-h2",
    "input": "[2,0,0]",
    "expectedOutput": "true"
   },
   {
    "id": "acc-ase-s8-r2-q1-h3",
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
 "acc-ase-s9-r2-q1": {
  "id": "acc-ase-s9-r2-q1",
  "title": "Keypad Suggestion Expansion",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Backtracking",
  "tags": [
   "Accenture Round 2",
   "Backtracking",
   "String",
   "Set 9"
  ],
  "paragraphs": [
   "Given a string of digits 2-9, return every letter combination a phone keypad could spell, sorted lexicographically. Return [] for empty input.",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-ase-s9-r2-q1-v1",
    "input": "\"23\"",
    "expectedOutput": "[\"ad\",\"ae\",\"af\",\"bd\",\"be\",\"bf\",\"cd\",\"ce\",\"cf\"]"
   },
   {
    "id": "acc-ase-s9-r2-q1-v2",
    "input": "\"\"",
    "expectedOutput": "[]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-ase-s9-r2-q1-h1",
    "input": "\"2\"",
    "expectedOutput": "[\"a\",\"b\",\"c\"]"
   },
   {
    "id": "acc-ase-s9-r2-q1-h2",
    "input": "\"79\"",
    "expectedOutput": "[\"pw\",\"px\",\"py\",\"pz\",\"qw\",\"qx\",\"qy\",\"qz\",\"rw\",\"rx\",\"ry\",\"rz\",\"sw\",\"sx\",\"sy\",\"sz\"]"
   },
   {
    "id": "acc-ase-s9-r2-q1-h3",
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
 "acc-ase-s10-r2-q1": {
  "id": "acc-ase-s10-r2-q1",
  "title": "Capacity Between Peaks",
  "difficulty": "Hard",
  "company": "Accenture",
  "category": "Two Pointers",
  "tags": [
   "Accenture Round 2",
   "Two Pointers",
   "Stack",
   "Set 10"
  ],
  "paragraphs": [
   "Given elevation heights, compute how much water is trapped after raining. Defend the two-pointer invariant.",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-ase-s10-r2-q1-v1",
    "input": "[0,1,0,2,1,0,1,3,2,1,2,1]",
    "expectedOutput": "6"
   },
   {
    "id": "acc-ase-s10-r2-q1-v2",
    "input": "[4,2,0,3,2,5]",
    "expectedOutput": "9"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-ase-s10-r2-q1-h1",
    "input": "[1,2,3]",
    "expectedOutput": "0"
   },
   {
    "id": "acc-ase-s10-r2-q1-h2",
    "input": "[3,0,3]",
    "expectedOutput": "3"
   },
   {
    "id": "acc-ase-s10-r2-q1-h3",
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
 "acc-ase-s1-r3-q1": {
  "id": "acc-ase-s1-r3-q1",
  "title": "OOP Pillars With Real Examples",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "Technical Deep Dive: Concepts, DBMS and Project",
  "tags": [
   "Accenture Round 3",
   "Set 1"
  ],
  "paragraphs": [
   "Accenture technical interview: CS fundamentals, databases, OOP and your project.",
   "Topic: OOP Pillars With Real Examples. Focus areas: Encapsulation, inheritance, polymorphism, abstraction, overriding vs overloading.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clarity of fundamentals, correct terminology and the ability to connect concepts to a real project."
   }
  ],
  "constraints": [
   "Define terms precisely and give a concrete example.",
   "State trade-offs and when you would choose each option.",
   "Link the concept to something you have actually built or studied."
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
 "acc-ase-s2-r3-q1": {
  "id": "acc-ase-s2-r3-q1",
  "title": "DBMS Normalization and Keys",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "Technical Deep Dive: Concepts, DBMS and Project",
  "tags": [
   "Accenture Round 3",
   "Set 2"
  ],
  "paragraphs": [
   "Accenture technical interview: CS fundamentals, databases, OOP and your project.",
   "Topic: DBMS Normalization and Keys. Focus areas: 1NF-3NF, primary vs foreign key, anomalies, ACID.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clarity of fundamentals, correct terminology and the ability to connect concepts to a real project."
   }
  ],
  "constraints": [
   "Define terms precisely and give a concrete example.",
   "State trade-offs and when you would choose each option.",
   "Link the concept to something you have actually built or studied."
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
 "acc-ase-s3-r3-q1": {
  "id": "acc-ase-s3-r3-q1",
  "title": "SQL Query Round",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "Technical Deep Dive: Concepts, DBMS and Project",
  "tags": [
   "Accenture Round 3",
   "Set 3"
  ],
  "paragraphs": [
   "Accenture technical interview: CS fundamentals, databases, OOP and your project.",
   "Topic: SQL Query Round. Focus areas: Joins, GROUP BY, second highest salary, duplicates, subqueries.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clarity of fundamentals, correct terminology and the ability to connect concepts to a real project."
   }
  ],
  "constraints": [
   "Define terms precisely and give a concrete example.",
   "State trade-offs and when you would choose each option.",
   "Link the concept to something you have actually built or studied."
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
 "acc-ase-s4-r3-q1": {
  "id": "acc-ase-s4-r3-q1",
  "title": "Operating System Basics",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "Technical Deep Dive: Concepts, DBMS and Project",
  "tags": [
   "Accenture Round 3",
   "Set 4"
  ],
  "paragraphs": [
   "Accenture technical interview: CS fundamentals, databases, OOP and your project.",
   "Topic: Operating System Basics. Focus areas: Process vs thread, scheduling, deadlock, paging.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clarity of fundamentals, correct terminology and the ability to connect concepts to a real project."
   }
  ],
  "constraints": [
   "Define terms precisely and give a concrete example.",
   "State trade-offs and when you would choose each option.",
   "Link the concept to something you have actually built or studied."
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
 "acc-ase-s5-r3-q1": {
  "id": "acc-ase-s5-r3-q1",
  "title": "Computer Networks Basics",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "Technical Deep Dive: Concepts, DBMS and Project",
  "tags": [
   "Accenture Round 3",
   "Set 5"
  ],
  "paragraphs": [
   "Accenture technical interview: CS fundamentals, databases, OOP and your project.",
   "Topic: Computer Networks Basics. Focus areas: OSI vs TCP/IP, HTTP vs HTTPS, DNS, IP addressing.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clarity of fundamentals, correct terminology and the ability to connect concepts to a real project."
   }
  ],
  "constraints": [
   "Define terms precisely and give a concrete example.",
   "State trade-offs and when you would choose each option.",
   "Link the concept to something you have actually built or studied."
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
 "acc-ase-s6-r3-q1": {
  "id": "acc-ase-s6-r3-q1",
  "title": "SDLC, Agile and Scrum",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "Technical Deep Dive: Concepts, DBMS and Project",
  "tags": [
   "Accenture Round 3",
   "Set 6"
  ],
  "paragraphs": [
   "Accenture technical interview: CS fundamentals, databases, OOP and your project.",
   "Topic: SDLC, Agile and Scrum. Focus areas: Phases, sprints, roles, Agile vs Waterfall.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clarity of fundamentals, correct terminology and the ability to connect concepts to a real project."
   }
  ],
  "constraints": [
   "Define terms precisely and give a concrete example.",
   "State trade-offs and when you would choose each option.",
   "Link the concept to something you have actually built or studied."
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
 "acc-ase-s7-r3-q1": {
  "id": "acc-ase-s7-r3-q1",
  "title": "Your Final-Year Project",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "Technical Deep Dive: Concepts, DBMS and Project",
  "tags": [
   "Accenture Round 3",
   "Set 7"
  ],
  "paragraphs": [
   "Accenture technical interview: CS fundamentals, databases, OOP and your project.",
   "Topic: Your Final-Year Project. Focus areas: Problem, your role, stack, challenges, what you would improve.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clarity of fundamentals, correct terminology and the ability to connect concepts to a real project."
   }
  ],
  "constraints": [
   "Define terms precisely and give a concrete example.",
   "State trade-offs and when you would choose each option.",
   "Link the concept to something you have actually built or studied."
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
 "acc-ase-s8-r3-q1": {
  "id": "acc-ase-s8-r3-q1",
  "title": "Arrays vs Linked Lists and Complexity",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "Technical Deep Dive: Concepts, DBMS and Project",
  "tags": [
   "Accenture Round 3",
   "Set 8"
  ],
  "paragraphs": [
   "Accenture technical interview: CS fundamentals, databases, OOP and your project.",
   "Topic: Arrays vs Linked Lists and Complexity. Focus areas: Memory layout, insertion cost, Big-O of common operations.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clarity of fundamentals, correct terminology and the ability to connect concepts to a real project."
   }
  ],
  "constraints": [
   "Define terms precisely and give a concrete example.",
   "State trade-offs and when you would choose each option.",
   "Link the concept to something you have actually built or studied."
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
 "acc-ase-s9-r3-q1": {
  "id": "acc-ase-s9-r3-q1",
  "title": "Exception Handling and Collections",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "Technical Deep Dive: Concepts, DBMS and Project",
  "tags": [
   "Accenture Round 3",
   "Set 9"
  ],
  "paragraphs": [
   "Accenture technical interview: CS fundamentals, databases, OOP and your project.",
   "Topic: Exception Handling and Collections. Focus areas: try/catch/finally, checked vs unchecked, list vs set vs map.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clarity of fundamentals, correct terminology and the ability to connect concepts to a real project."
   }
  ],
  "constraints": [
   "Define terms precisely and give a concrete example.",
   "State trade-offs and when you would choose each option.",
   "Link the concept to something you have actually built or studied."
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
 "acc-ase-s10-r3-q1": {
  "id": "acc-ase-s10-r3-q1",
  "title": "Version Control and Testing Basics",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "Technical Deep Dive: Concepts, DBMS and Project",
  "tags": [
   "Accenture Round 3",
   "Set 10"
  ],
  "paragraphs": [
   "Accenture technical interview: CS fundamentals, databases, OOP and your project.",
   "Topic: Version Control and Testing Basics. Focus areas: Git branching, merge conflicts, unit vs integration tests.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clarity of fundamentals, correct terminology and the ability to connect concepts to a real project."
   }
  ],
  "constraints": [
   "Define terms precisely and give a concrete example.",
   "State trade-offs and when you would choose each option.",
   "Link the concept to something you have actually built or studied."
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
 "acc-ase-s1-r4-q1": {
  "id": "acc-ase-s1-r4-q1",
  "title": "Tell Me About Yourself and Why Accenture",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "HR and Communication",
  "tags": [
   "Accenture",
   "HR and Communication",
   "Communication / Motivation",
   "Set 1"
  ],
  "paragraphs": [
   "Accenture HR and delivery-lead round: communication, adaptability, client focus, teamwork and integrity.",
   "Scenario: You are a fresher joining as an Associate Software Engineer. You are asked to introduce yourself and explain why you want to join Accenture and this role.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Communication / Motivation",
    "explanation": "Use concrete first-person examples and a calm, structured answer: situation, action, result, learning."
   }
  ],
  "constraints": [
   "Be specific about your own actions.",
   "Show adaptability and a client-first attitude.",
   "Be honest and concise."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: HR and Communication\n// Focus: Communication / Motivation\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: HR and Communication\n// Focus: Communication / Motivation\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: HR and Communication\n# Focus: Communication / Motivation\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: HR and Communication\n// Focus: Communication / Motivation\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-ase-s2-r4-q1": {
  "id": "acc-ase-s2-r4-q1",
  "title": "Relocation and Shift Flexibility",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "HR and Communication",
  "tags": [
   "Accenture",
   "HR and Communication",
   "Adaptability",
   "Set 2"
  ],
  "paragraphs": [
   "Accenture HR and delivery-lead round: communication, adaptability, client focus, teamwork and integrity.",
   "Scenario: You are a fresher joining as an Associate Software Engineer. You are told the project may require relocation to another city and rotating shifts, and you have personal commitments.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Adaptability",
    "explanation": "Use concrete first-person examples and a calm, structured answer: situation, action, result, learning."
   }
  ],
  "constraints": [
   "Be specific about your own actions.",
   "Show adaptability and a client-first attitude.",
   "Be honest and concise."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: HR and Communication\n// Focus: Adaptability\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: HR and Communication\n// Focus: Adaptability\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: HR and Communication\n# Focus: Adaptability\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: HR and Communication\n// Focus: Adaptability\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-ase-s3-r4-q1": {
  "id": "acc-ase-s3-r4-q1",
  "title": "Handling a Difficult Teammate",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "HR and Communication",
  "tags": [
   "Accenture",
   "HR and Communication",
   "Teamwork",
   "Set 3"
  ],
  "paragraphs": [
   "Accenture HR and delivery-lead round: communication, adaptability, client focus, teamwork and integrity.",
   "Scenario: You are a fresher joining as an Associate Software Engineer. A teammate repeatedly misses handoffs and the rest of the team is getting frustrated.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Teamwork",
    "explanation": "Use concrete first-person examples and a calm, structured answer: situation, action, result, learning."
   }
  ],
  "constraints": [
   "Be specific about your own actions.",
   "Show adaptability and a client-first attitude.",
   "Be honest and concise."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: HR and Communication\n// Focus: Teamwork\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: HR and Communication\n// Focus: Teamwork\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: HR and Communication\n# Focus: Teamwork\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: HR and Communication\n// Focus: Teamwork\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-ase-s4-r4-q1": {
  "id": "acc-ase-s4-r4-q1",
  "title": "Client Deadline Pressure",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "HR and Communication",
  "tags": [
   "Accenture",
   "HR and Communication",
   "Client Focus / Ownership",
   "Set 4"
  ],
  "paragraphs": [
   "Accenture HR and delivery-lead round: communication, adaptability, client focus, teamwork and integrity.",
   "Scenario: You are a fresher joining as an Associate Software Engineer. A client moves a delivery date forward by a week with no extra resources.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Client Focus / Ownership",
    "explanation": "Use concrete first-person examples and a calm, structured answer: situation, action, result, learning."
   }
  ],
  "constraints": [
   "Be specific about your own actions.",
   "Show adaptability and a client-first attitude.",
   "Be honest and concise."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: HR and Communication\n// Focus: Client Focus / Ownership\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: HR and Communication\n// Focus: Client Focus / Ownership\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: HR and Communication\n# Focus: Client Focus / Ownership\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: HR and Communication\n// Focus: Client Focus / Ownership\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-ase-s5-r4-q1": {
  "id": "acc-ase-s5-r4-q1",
  "title": "Learning a New Technology Quickly",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "HR and Communication",
  "tags": [
   "Accenture",
   "HR and Communication",
   "Learning Agility",
   "Set 5"
  ],
  "paragraphs": [
   "Accenture HR and delivery-lead round: communication, adaptability, client focus, teamwork and integrity.",
   "Scenario: You are a fresher joining as an Associate Software Engineer. You are assigned to a project in a technology you have never used, starting Monday.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Learning Agility",
    "explanation": "Use concrete first-person examples and a calm, structured answer: situation, action, result, learning."
   }
  ],
  "constraints": [
   "Be specific about your own actions.",
   "Show adaptability and a client-first attitude.",
   "Be honest and concise."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: HR and Communication\n// Focus: Learning Agility\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: HR and Communication\n// Focus: Learning Agility\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: HR and Communication\n# Focus: Learning Agility\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: HR and Communication\n// Focus: Learning Agility\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-ase-s6-r4-q1": {
  "id": "acc-ase-s6-r4-q1",
  "title": "Strengths and Weaknesses",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "HR and Communication",
  "tags": [
   "Accenture",
   "HR and Communication",
   "Self-Awareness",
   "Set 6"
  ],
  "paragraphs": [
   "Accenture HR and delivery-lead round: communication, adaptability, client focus, teamwork and integrity.",
   "Scenario: You are a fresher joining as an Associate Software Engineer. You are asked for your real strengths and weaknesses and examples of each.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Self-Awareness",
    "explanation": "Use concrete first-person examples and a calm, structured answer: situation, action, result, learning."
   }
  ],
  "constraints": [
   "Be specific about your own actions.",
   "Show adaptability and a client-first attitude.",
   "Be honest and concise."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: HR and Communication\n// Focus: Self-Awareness\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: HR and Communication\n// Focus: Self-Awareness\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: HR and Communication\n# Focus: Self-Awareness\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: HR and Communication\n// Focus: Self-Awareness\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-ase-s7-r4-q1": {
  "id": "acc-ase-s7-r4-q1",
  "title": "Where Do You See Yourself in Five Years",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "HR and Communication",
  "tags": [
   "Accenture",
   "HR and Communication",
   "Career Goals",
   "Set 7"
  ],
  "paragraphs": [
   "Accenture HR and delivery-lead round: communication, adaptability, client focus, teamwork and integrity.",
   "Scenario: You are a fresher joining as an Associate Software Engineer. You are asked about your five-year plan and how this role fits it.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Career Goals",
    "explanation": "Use concrete first-person examples and a calm, structured answer: situation, action, result, learning."
   }
  ],
  "constraints": [
   "Be specific about your own actions.",
   "Show adaptability and a client-first attitude.",
   "Be honest and concise."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: HR and Communication\n// Focus: Career Goals\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: HR and Communication\n// Focus: Career Goals\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: HR and Communication\n# Focus: Career Goals\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: HR and Communication\n// Focus: Career Goals\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-ase-s8-r4-q1": {
  "id": "acc-ase-s8-r4-q1",
  "title": "Handling a Failure",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "HR and Communication",
  "tags": [
   "Accenture",
   "HR and Communication",
   "Accountability",
   "Set 8"
  ],
  "paragraphs": [
   "Accenture HR and delivery-lead round: communication, adaptability, client focus, teamwork and integrity.",
   "Scenario: You are a fresher joining as an Associate Software Engineer. Describe a time a piece of your work failed or was rejected and what you did next.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Accountability",
    "explanation": "Use concrete first-person examples and a calm, structured answer: situation, action, result, learning."
   }
  ],
  "constraints": [
   "Be specific about your own actions.",
   "Show adaptability and a client-first attitude.",
   "Be honest and concise."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: HR and Communication\n// Focus: Accountability\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: HR and Communication\n// Focus: Accountability\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: HR and Communication\n# Focus: Accountability\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: HR and Communication\n// Focus: Accountability\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-ase-s9-r4-q1": {
  "id": "acc-ase-s9-r4-q1",
  "title": "Unclear Client Requirements",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "HR and Communication",
  "tags": [
   "Accenture",
   "HR and Communication",
   "Ambiguity / Communication",
   "Set 9"
  ],
  "paragraphs": [
   "Accenture HR and delivery-lead round: communication, adaptability, client focus, teamwork and integrity.",
   "Scenario: You are a fresher joining as an Associate Software Engineer. The client's requirements are vague and keep changing, and the team is unsure what to build.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Ambiguity / Communication",
    "explanation": "Use concrete first-person examples and a calm, structured answer: situation, action, result, learning."
   }
  ],
  "constraints": [
   "Be specific about your own actions.",
   "Show adaptability and a client-first attitude.",
   "Be honest and concise."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: HR and Communication\n// Focus: Ambiguity / Communication\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: HR and Communication\n// Focus: Ambiguity / Communication\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: HR and Communication\n# Focus: Ambiguity / Communication\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: HR and Communication\n// Focus: Ambiguity / Communication\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-ase-s10-r4-q1": {
  "id": "acc-ase-s10-r4-q1",
  "title": "Confidentiality and Ethics",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "HR and Communication",
  "tags": [
   "Accenture",
   "HR and Communication",
   "Integrity",
   "Set 10"
  ],
  "paragraphs": [
   "Accenture HR and delivery-lead round: communication, adaptability, client focus, teamwork and integrity.",
   "Scenario: You are a fresher joining as an Associate Software Engineer. You notice a colleague sharing client data over a personal channel to meet a deadline.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Integrity",
    "explanation": "Use concrete first-person examples and a calm, structured answer: situation, action, result, learning."
   }
  ],
  "constraints": [
   "Be specific about your own actions.",
   "Show adaptability and a client-first attitude.",
   "Be honest and concise."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: HR and Communication\n// Focus: Integrity\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: HR and Communication\n// Focus: Integrity\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: HR and Communication\n# Focus: Integrity\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: HR and Communication\n// Focus: Integrity\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-adv-s1-r1-q1": {
  "id": "acc-adv-s1-r1-q1",
  "title": "Validate Config Brackets",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "Stack",
  "tags": [
   "Accenture Round 1",
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-adv-s1-r1-q1-v1",
    "input": "\"()[]{}\"",
    "expectedOutput": "true"
   },
   {
    "id": "acc-adv-s1-r1-q1-v2",
    "input": "\"(]\"",
    "expectedOutput": "false"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s1-r1-q1-h1",
    "input": "\"\"",
    "expectedOutput": "true"
   },
   {
    "id": "acc-adv-s1-r1-q1-h2",
    "input": "\"([{}])\"",
    "expectedOutput": "true"
   },
   {
    "id": "acc-adv-s1-r1-q1-h3",
    "input": "\"(((\"",
    "expectedOutput": "false"
   },
   {
    "id": "acc-adv-s1-r1-q1-h4",
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
  "nextProblemId": "acc-adv-s1-r1-q2"
 },
 "acc-adv-s1-r1-q2": {
  "id": "acc-adv-s1-r1-q2",
  "title": "Longest Unique Query Fragment",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Sliding Window",
  "tags": [
   "Accenture Round 1",
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-adv-s1-r1-q2-v1",
    "input": "\"abcabcbb\"",
    "expectedOutput": "3"
   },
   {
    "id": "acc-adv-s1-r1-q2-v2",
    "input": "\"bbbbb\"",
    "expectedOutput": "1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s1-r1-q2-h1",
    "input": "\"\"",
    "expectedOutput": "0"
   },
   {
    "id": "acc-adv-s1-r1-q2-h2",
    "input": "\"pwwkew\"",
    "expectedOutput": "3"
   },
   {
    "id": "acc-adv-s1-r1-q2-h3",
    "input": "\"abba\"",
    "expectedOutput": "2"
   },
   {
    "id": "acc-adv-s1-r1-q2-h4",
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
 "acc-adv-s2-r1-q1": {
  "id": "acc-adv-s2-r1-q1",
  "title": "Sorted Latency Pair",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "Two Pointers",
  "tags": [
   "Accenture Round 1",
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-adv-s2-r1-q1-v1",
    "input": "[2,7,11,15]\n9",
    "expectedOutput": "[1,2]"
   },
   {
    "id": "acc-adv-s2-r1-q1-v2",
    "input": "[2,3,4]\n6",
    "expectedOutput": "[1,3]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s2-r1-q1-h1",
    "input": "[-1,0]\n-1",
    "expectedOutput": "[1,2]"
   },
   {
    "id": "acc-adv-s2-r1-q1-h2",
    "input": "[1,2,3,4,4,9,56,90]\n8",
    "expectedOutput": "[4,5]"
   },
   {
    "id": "acc-adv-s2-r1-q1-h3",
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
  "nextProblemId": "acc-adv-s2-r1-q2"
 },
 "acc-adv-s2-r1-q2": {
  "id": "acc-adv-s2-r1-q2",
  "title": "Peak Traffic Window",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Sliding Window",
  "tags": [
   "Accenture Round 1",
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-adv-s2-r1-q2-v1",
    "input": "[1,12,-5,-6,50,3]\n4",
    "expectedOutput": "51"
   },
   {
    "id": "acc-adv-s2-r1-q2-v2",
    "input": "[5]\n1",
    "expectedOutput": "5"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s2-r1-q2-h1",
    "input": "[4,2,1,7,8,1,2,8,1,0]\n3",
    "expectedOutput": "16"
   },
   {
    "id": "acc-adv-s2-r1-q2-h2",
    "input": "[-3,-1,-2]\n2",
    "expectedOutput": "-3"
   },
   {
    "id": "acc-adv-s2-r1-q2-h3",
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
 "acc-adv-s3-r1-q1": {
  "id": "acc-adv-s3-r1-q1",
  "title": "Insert Position in Sorted Index",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "Binary Search",
  "tags": [
   "Accenture Round 1",
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-adv-s3-r1-q1-v1",
    "input": "[1,3,5,6]\n5",
    "expectedOutput": "2"
   },
   {
    "id": "acc-adv-s3-r1-q1-v2",
    "input": "[1,3,5,6]\n2",
    "expectedOutput": "1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s3-r1-q1-h1",
    "input": "[1,3,5,6]\n7",
    "expectedOutput": "4"
   },
   {
    "id": "acc-adv-s3-r1-q1-h2",
    "input": "[1,3,5,6]\n0",
    "expectedOutput": "0"
   },
   {
    "id": "acc-adv-s3-r1-q1-h3",
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
  "nextProblemId": "acc-adv-s3-r1-q2"
 },
 "acc-adv-s3-r1-q2": {
  "id": "acc-adv-s3-r1-q2",
  "title": "Merge Maintenance Windows",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Sorting",
  "tags": [
   "Accenture Round 1",
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-adv-s3-r1-q2-v1",
    "input": "[[1,3],[2,6],[8,10],[15,18]]",
    "expectedOutput": "[[1,6],[8,10],[15,18]]"
   },
   {
    "id": "acc-adv-s3-r1-q2-v2",
    "input": "[[1,4],[4,5]]",
    "expectedOutput": "[[1,5]]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s3-r1-q2-h1",
    "input": "[[1,4],[0,4]]",
    "expectedOutput": "[[0,4]]"
   },
   {
    "id": "acc-adv-s3-r1-q2-h2",
    "input": "[[1,4],[2,3]]",
    "expectedOutput": "[[1,4]]"
   },
   {
    "id": "acc-adv-s3-r1-q2-h3",
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
 "acc-adv-s4-r1-q1": {
  "id": "acc-adv-s4-r1-q1",
  "title": "Reverse Command Tokens",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "String",
  "tags": [
   "Accenture Round 1",
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-adv-s4-r1-q1-v1",
    "input": "\"the sky is blue\"",
    "expectedOutput": "\"blue is sky the\""
   },
   {
    "id": "acc-adv-s4-r1-q1-v2",
    "input": "\"  hello world  \"",
    "expectedOutput": "\"world hello\""
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s4-r1-q1-h1",
    "input": "\"a good   example\"",
    "expectedOutput": "\"example good a\""
   },
   {
    "id": "acc-adv-s4-r1-q1-h2",
    "input": "\"x\"",
    "expectedOutput": "\"x\""
   },
   {
    "id": "acc-adv-s4-r1-q1-h3",
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
  "nextProblemId": "acc-adv-s4-r1-q2"
 },
 "acc-adv-s4-r1-q2": {
  "id": "acc-adv-s4-r1-q2",
  "title": "Longest Repeated Run After Edits",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Sliding Window",
  "tags": [
   "Accenture Round 1",
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-adv-s4-r1-q2-v1",
    "input": "\"ABAB\"\n2",
    "expectedOutput": "4"
   },
   {
    "id": "acc-adv-s4-r1-q2-v2",
    "input": "\"AABABBA\"\n1",
    "expectedOutput": "4"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s4-r1-q2-h1",
    "input": "\"AAAA\"\n0",
    "expectedOutput": "4"
   },
   {
    "id": "acc-adv-s4-r1-q2-h2",
    "input": "\"ABCDE\"\n1",
    "expectedOutput": "2"
   },
   {
    "id": "acc-adv-s4-r1-q2-h3",
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
 "acc-adv-s5-r1-q1": {
  "id": "acc-adv-s5-r1-q1",
  "title": "Count Data Center Clusters",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Graph / DFS",
  "tags": [
   "Accenture Round 1",
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-adv-s5-r1-q1-v1",
    "input": "[\"11000\",\"11000\",\"00100\",\"00011\"]",
    "expectedOutput": "3"
   },
   {
    "id": "acc-adv-s5-r1-q1-v2",
    "input": "[\"111\",\"010\",\"111\"]",
    "expectedOutput": "1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s5-r1-q1-h1",
    "input": "[\"000\"]",
    "expectedOutput": "0"
   },
   {
    "id": "acc-adv-s5-r1-q1-h2",
    "input": "[\"101\",\"010\",\"101\"]",
    "expectedOutput": "5"
   },
   {
    "id": "acc-adv-s5-r1-q1-h3",
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
  "nextProblemId": "acc-adv-s5-r1-q2"
 },
 "acc-adv-s5-r1-q2": {
  "id": "acc-adv-s5-r1-q2",
  "title": "Corrupted Replica Spread",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Graph / BFS",
  "tags": [
   "Accenture Round 1",
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-adv-s5-r1-q2-v1",
    "input": "[[2,1,1],[1,1,0],[0,1,1]]",
    "expectedOutput": "4"
   },
   {
    "id": "acc-adv-s5-r1-q2-v2",
    "input": "[[2,1,1],[0,1,1],[1,0,1]]",
    "expectedOutput": "-1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s5-r1-q2-h1",
    "input": "[[0,2]]",
    "expectedOutput": "0"
   },
   {
    "id": "acc-adv-s5-r1-q2-h2",
    "input": "[[1]]",
    "expectedOutput": "-1"
   },
   {
    "id": "acc-adv-s5-r1-q2-h3",
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
 "acc-adv-s6-r1-q1": {
  "id": "acc-adv-s6-r1-q1",
  "title": "Best Single Trade",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "Array",
  "tags": [
   "Accenture Round 1",
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-adv-s6-r1-q1-v1",
    "input": "[7,1,5,3,6,4]",
    "expectedOutput": "5"
   },
   {
    "id": "acc-adv-s6-r1-q1-v2",
    "input": "[7,6,4,3,1]",
    "expectedOutput": "0"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s6-r1-q1-h1",
    "input": "[1]",
    "expectedOutput": "0"
   },
   {
    "id": "acc-adv-s6-r1-q1-h2",
    "input": "[2,4,1]",
    "expectedOutput": "2"
   },
   {
    "id": "acc-adv-s6-r1-q1-h3",
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
  "nextProblemId": "acc-adv-s6-r1-q2"
 },
 "acc-adv-s6-r1-q2": {
  "id": "acc-adv-s6-r1-q2",
  "title": "Product Without Self",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Prefix Products",
  "tags": [
   "Accenture Round 1",
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-adv-s6-r1-q2-v1",
    "input": "[1,2,3,4]",
    "expectedOutput": "[24,12,8,6]"
   },
   {
    "id": "acc-adv-s6-r1-q2-v2",
    "input": "[-1,1,0,-3,3]",
    "expectedOutput": "[0,0,9,0,0]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s6-r1-q2-h1",
    "input": "[2,3]",
    "expectedOutput": "[3,2]"
   },
   {
    "id": "acc-adv-s6-r1-q2-h2",
    "input": "[0,0]",
    "expectedOutput": "[0,0]"
   },
   {
    "id": "acc-adv-s6-r1-q2-h3",
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
 "acc-adv-s7-r1-q1": {
  "id": "acc-adv-s7-r1-q1",
  "title": "Climbing Release Stairs",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "Dynamic Programming",
  "tags": [
   "Accenture Round 1",
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-adv-s7-r1-q1-v1",
    "input": "2",
    "expectedOutput": "2"
   },
   {
    "id": "acc-adv-s7-r1-q1-v2",
    "input": "3",
    "expectedOutput": "3"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s7-r1-q1-h1",
    "input": "1",
    "expectedOutput": "1"
   },
   {
    "id": "acc-adv-s7-r1-q1-h2",
    "input": "10",
    "expectedOutput": "89"
   },
   {
    "id": "acc-adv-s7-r1-q1-h3",
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
  "nextProblemId": "acc-adv-s7-r1-q2"
 },
 "acc-adv-s7-r1-q2": {
  "id": "acc-adv-s7-r1-q2",
  "title": "Fewest Quota Units",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Dynamic Programming",
  "tags": [
   "Accenture Round 1",
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-adv-s7-r1-q2-v1",
    "input": "[1,2,5]\n11",
    "expectedOutput": "3"
   },
   {
    "id": "acc-adv-s7-r1-q2-v2",
    "input": "[2]\n3",
    "expectedOutput": "-1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s7-r1-q2-h1",
    "input": "[1]\n0",
    "expectedOutput": "0"
   },
   {
    "id": "acc-adv-s7-r1-q2-h2",
    "input": "[186,419,83,408]\n6249",
    "expectedOutput": "20"
   },
   {
    "id": "acc-adv-s7-r1-q2-h3",
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
 "acc-adv-s8-r1-q1": {
  "id": "acc-adv-s8-r1-q1",
  "title": "Flood Fill Canvas",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "DFS",
  "tags": [
   "Accenture Round 1",
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-adv-s8-r1-q1-v1",
    "input": "[[1,1,1],[1,1,0],[1,0,1]]\n1\n1\n2",
    "expectedOutput": "[[2,2,2],[2,2,0],[2,0,1]]"
   },
   {
    "id": "acc-adv-s8-r1-q1-v2",
    "input": "[[0,0,0],[0,0,0]]\n0\n0\n0",
    "expectedOutput": "[[0,0,0],[0,0,0]]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s8-r1-q1-h1",
    "input": "[[0,0,0],[0,1,1]]\n1\n1\n1",
    "expectedOutput": "[[0,0,0],[0,1,1]]"
   },
   {
    "id": "acc-adv-s8-r1-q1-h2",
    "input": "[[1,2],[2,1]]\n0\n0\n3",
    "expectedOutput": "[[3,2],[2,1]]"
   },
   {
    "id": "acc-adv-s8-r1-q1-h3",
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
  "nextProblemId": "acc-adv-s8-r1-q2"
 },
 "acc-adv-s8-r1-q2": {
  "id": "acc-adv-s8-r1-q2",
  "title": "Shortest Clear Route",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "BFS",
  "tags": [
   "Accenture Round 1",
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-adv-s8-r1-q2-v1",
    "input": "[[0,1],[1,0]]",
    "expectedOutput": "2"
   },
   {
    "id": "acc-adv-s8-r1-q2-v2",
    "input": "[[0,0,0],[1,1,0],[1,1,0]]",
    "expectedOutput": "4"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s8-r1-q2-h1",
    "input": "[[1,0,0],[1,1,0],[1,1,0]]",
    "expectedOutput": "-1"
   },
   {
    "id": "acc-adv-s8-r1-q2-h2",
    "input": "[[0]]",
    "expectedOutput": "1"
   },
   {
    "id": "acc-adv-s8-r1-q2-h3",
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
 "acc-adv-s9-r1-q1": {
  "id": "acc-adv-s9-r1-q1",
  "title": "Compact Active Slots",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "Two Pointers",
  "tags": [
   "Accenture Round 1",
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-adv-s9-r1-q1-v1",
    "input": "[0,1,0,3,12]",
    "expectedOutput": "[1,3,12,0,0]"
   },
   {
    "id": "acc-adv-s9-r1-q1-v2",
    "input": "[0]",
    "expectedOutput": "[0]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s9-r1-q1-h1",
    "input": "[1,2,3]",
    "expectedOutput": "[1,2,3]"
   },
   {
    "id": "acc-adv-s9-r1-q1-h2",
    "input": "[0,0,1]",
    "expectedOutput": "[1,0,0]"
   },
   {
    "id": "acc-adv-s9-r1-q1-h3",
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
  "nextProblemId": "acc-adv-s9-r1-q2"
 },
 "acc-adv-s9-r1-q2": {
  "id": "acc-adv-s9-r1-q2",
  "title": "Matching Usage Totals",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Prefix Sum",
  "tags": [
   "Accenture Round 1",
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-adv-s9-r1-q2-v1",
    "input": "[1,1,1]\n2",
    "expectedOutput": "2"
   },
   {
    "id": "acc-adv-s9-r1-q2-v2",
    "input": "[1,2,3]\n3",
    "expectedOutput": "2"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s9-r1-q2-h1",
    "input": "[1,-1,0]\n0",
    "expectedOutput": "3"
   },
   {
    "id": "acc-adv-s9-r1-q2-h2",
    "input": "[3,4,7,2,-3,1,4,2]\n7",
    "expectedOutput": "4"
   },
   {
    "id": "acc-adv-s9-r1-q2-h3",
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
 "acc-adv-s10-r1-q1": {
  "id": "acc-adv-s10-r1-q1",
  "title": "Anagram Tag Check",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "Hash Table",
  "tags": [
   "Accenture Round 1",
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-adv-s10-r1-q1-v1",
    "input": "\"anagram\"\n\"nagaram\"",
    "expectedOutput": "true"
   },
   {
    "id": "acc-adv-s10-r1-q1-v2",
    "input": "\"rat\"\n\"car\"",
    "expectedOutput": "false"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s10-r1-q1-h1",
    "input": "\"a\"\n\"a\"",
    "expectedOutput": "true"
   },
   {
    "id": "acc-adv-s10-r1-q1-h2",
    "input": "\"ab\"\n\"a\"",
    "expectedOutput": "false"
   },
   {
    "id": "acc-adv-s10-r1-q1-h3",
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
  "nextProblemId": "acc-adv-s10-r1-q2"
 },
 "acc-adv-s10-r1-q2": {
  "id": "acc-adv-s10-r1-q2",
  "title": "Segment a Search Query",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Dynamic Programming",
  "tags": [
   "Accenture Round 1",
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-adv-s10-r1-q2-v1",
    "input": "\"leetcode\"\n[\"leet\",\"code\"]",
    "expectedOutput": "true"
   },
   {
    "id": "acc-adv-s10-r1-q2-v2",
    "input": "\"applepenapple\"\n[\"apple\",\"pen\"]",
    "expectedOutput": "true"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s10-r1-q2-h1",
    "input": "\"catsandog\"\n[\"cats\",\"dog\",\"sand\",\"and\",\"cat\"]",
    "expectedOutput": "false"
   },
   {
    "id": "acc-adv-s10-r1-q2-h2",
    "input": "\"a\"\n[\"b\"]",
    "expectedOutput": "false"
   },
   {
    "id": "acc-adv-s10-r1-q2-h3",
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
 "acc-adv-s1-r2-q1": {
  "id": "acc-adv-s1-r2-q1",
  "title": "Maximum Path Sum in a Service Tree",
  "difficulty": "Hard",
  "company": "Accenture",
  "category": "Tree / DFS",
  "tags": [
   "Accenture Round 2",
   "Tree",
   "DFS",
   "Recursion",
   "Set 1"
  ],
  "paragraphs": [
   "The tree is given as a level-order array where null marks a missing child. Return the maximum path sum of any non-empty path (it need not pass through the root). Defend your invariant.",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-adv-s1-r2-q1-v1",
    "input": "[1,2,3]",
    "expectedOutput": "6"
   },
   {
    "id": "acc-adv-s1-r2-q1-v2",
    "input": "[-10,9,20,null,null,15,7]",
    "expectedOutput": "42"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s1-r2-q1-h1",
    "input": "[-3]",
    "expectedOutput": "-3"
   },
   {
    "id": "acc-adv-s1-r2-q1-h2",
    "input": "[2,-1]",
    "expectedOutput": "2"
   },
   {
    "id": "acc-adv-s1-r2-q1-h3",
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
 "acc-adv-s2-r2-q1": {
  "id": "acc-adv-s2-r2-q1",
  "title": "Multi-Word Grid Search With Trie Pruning",
  "difficulty": "Hard",
  "company": "Accenture",
  "category": "Trie / Backtracking",
  "tags": [
   "Accenture Round 2",
   "Trie",
   "Backtracking",
   "Matrix",
   "Set 2"
  ],
  "paragraphs": [
   "Each row of board is a string. Return, sorted, every word from words that can be traced through adjacent cells without reusing a cell in one word. Defend how Trie pruning cuts the search.",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-adv-s2-r2-q1-v1",
    "input": "[\"oaan\",\"etae\",\"ihkr\",\"iflv\"]\n[\"oath\",\"pea\",\"eat\",\"rain\"]",
    "expectedOutput": "[\"eat\",\"oath\"]"
   },
   {
    "id": "acc-adv-s2-r2-q1-v2",
    "input": "[\"ab\",\"cd\"]\n[\"abcb\"]",
    "expectedOutput": "[]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s2-r2-q1-h1",
    "input": "[\"a\"]\n[\"a\"]",
    "expectedOutput": "[\"a\"]"
   },
   {
    "id": "acc-adv-s2-r2-q1-h2",
    "input": "[\"ab\",\"cd\"]\n[\"ab\",\"ac\",\"bd\",\"abdc\"]",
    "expectedOutput": "[\"ab\",\"abdc\",\"ac\",\"bd\"]"
   },
   {
    "id": "acc-adv-s2-r2-q1-h3",
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
 "acc-adv-s3-r2-q1": {
  "id": "acc-adv-s3-r2-q1",
  "title": "Kth Smallest in Sorted Matrix",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Heap / Binary Search",
  "tags": [
   "Accenture Round 2",
   "Heap",
   "Binary Search",
   "Matrix",
   "Set 3"
  ],
  "paragraphs": [
   "Rows and columns are sorted ascending. Return the kth smallest element. Defend a heap or value-range binary search solution.",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-adv-s3-r2-q1-v1",
    "input": "[[1,5,9],[10,11,13],[12,13,15]]\n8",
    "expectedOutput": "13"
   },
   {
    "id": "acc-adv-s3-r2-q1-v2",
    "input": "[[-5]]\n1",
    "expectedOutput": "-5"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s3-r2-q1-h1",
    "input": "[[1,2],[1,3]]\n2",
    "expectedOutput": "1"
   },
   {
    "id": "acc-adv-s3-r2-q1-h2",
    "input": "[[1,3,5],[6,7,12],[11,14,14]]\n6",
    "expectedOutput": "11"
   },
   {
    "id": "acc-adv-s3-r2-q1-h3",
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
 "acc-adv-s4-r2-q1": {
  "id": "acc-adv-s4-r2-q1",
  "title": "Best Root Nodes for Latency",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Graph / Topological Peel",
  "tags": [
   "Accenture Round 2",
   "Graph",
   "BFS",
   "Tree",
   "Set 4"
  ],
  "paragraphs": [
   "Given an undirected tree with n nodes and edges, return, sorted, every node that gives the minimum tree height when used as root.",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-adv-s4-r2-q1-v1",
    "input": "4\n[[1,0],[1,2],[1,3]]",
    "expectedOutput": "[1]"
   },
   {
    "id": "acc-adv-s4-r2-q1-v2",
    "input": "6\n[[3,0],[3,1],[3,2],[3,4],[5,4]]",
    "expectedOutput": "[3,4]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s4-r2-q1-h1",
    "input": "1\n[]",
    "expectedOutput": "[0]"
   },
   {
    "id": "acc-adv-s4-r2-q1-h2",
    "input": "2\n[[0,1]]",
    "expectedOutput": "[0,1]"
   },
   {
    "id": "acc-adv-s4-r2-q1-h3",
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
 "acc-adv-s5-r2-q1": {
  "id": "acc-adv-s5-r2-q1",
  "title": "Longest Increasing Path in Grid",
  "difficulty": "Hard",
  "company": "Accenture",
  "category": "DFS + Memoization",
  "tags": [
   "Accenture Round 2",
   "DFS",
   "DP",
   "Matrix",
   "Set 5"
  ],
  "paragraphs": [
   "Return the length of the longest strictly increasing path in a matrix, moving in 4 directions. Defend why memoization gives O(M*N).",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-adv-s5-r2-q1-v1",
    "input": "[[9,9,4],[6,6,8],[2,1,1]]",
    "expectedOutput": "4"
   },
   {
    "id": "acc-adv-s5-r2-q1-v2",
    "input": "[[3,4,5],[3,2,6],[2,2,1]]",
    "expectedOutput": "4"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s5-r2-q1-h1",
    "input": "[[1]]",
    "expectedOutput": "1"
   },
   {
    "id": "acc-adv-s5-r2-q1-h2",
    "input": "[[1,2],[4,3]]",
    "expectedOutput": "4"
   },
   {
    "id": "acc-adv-s5-r2-q1-h3",
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
 "acc-adv-s6-r2-q1": {
  "id": "acc-adv-s6-r2-q1",
  "title": "Decode Telemetry Codes",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "DP",
  "tags": [
   "Accenture Round 2",
   "DP",
   "String",
   "Set 6"
  ],
  "paragraphs": [
   "A message of digits maps 1->A ... 26->Z. Return the number of ways to decode it.",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-adv-s6-r2-q1-v1",
    "input": "\"12\"",
    "expectedOutput": "2"
   },
   {
    "id": "acc-adv-s6-r2-q1-v2",
    "input": "\"226\"",
    "expectedOutput": "3"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s6-r2-q1-h1",
    "input": "\"06\"",
    "expectedOutput": "0"
   },
   {
    "id": "acc-adv-s6-r2-q1-h2",
    "input": "\"10\"",
    "expectedOutput": "1"
   },
   {
    "id": "acc-adv-s6-r2-q1-h3",
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
 "acc-adv-s7-r2-q1": {
  "id": "acc-adv-s7-r2-q1",
  "title": "Fewest Palindromic Splits",
  "difficulty": "Hard",
  "company": "Accenture",
  "category": "DP",
  "tags": [
   "Accenture Round 2",
   "DP",
   "String",
   "Set 7"
  ],
  "paragraphs": [
   "Return the minimum number of cuts needed to partition s so every part is a palindrome.",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-adv-s7-r2-q1-v1",
    "input": "\"aab\"",
    "expectedOutput": "1"
   },
   {
    "id": "acc-adv-s7-r2-q1-v2",
    "input": "\"a\"",
    "expectedOutput": "0"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s7-r2-q1-h1",
    "input": "\"ab\"",
    "expectedOutput": "1"
   },
   {
    "id": "acc-adv-s7-r2-q1-h2",
    "input": "\"racecar\"",
    "expectedOutput": "0"
   },
   {
    "id": "acc-adv-s7-r2-q1-h3",
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
 "acc-adv-s8-r2-q1": {
  "id": "acc-adv-s8-r2-q1",
  "title": "Largest Dashboard Rectangle",
  "difficulty": "Hard",
  "company": "Accenture",
  "category": "Monotonic Stack",
  "tags": [
   "Accenture Round 2",
   "Stack",
   "Array",
   "Set 8"
  ],
  "paragraphs": [
   "Given bar heights of width 1, return the area of the largest rectangle in the histogram. Defend the amortised O(N) stack argument.",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-adv-s8-r2-q1-v1",
    "input": "[2,1,5,6,2,3]",
    "expectedOutput": "10"
   },
   {
    "id": "acc-adv-s8-r2-q1-v2",
    "input": "[2,4]",
    "expectedOutput": "4"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s8-r2-q1-h1",
    "input": "[1]",
    "expectedOutput": "1"
   },
   {
    "id": "acc-adv-s8-r2-q1-h2",
    "input": "[6,2,5,4,5,1,6]",
    "expectedOutput": "12"
   },
   {
    "id": "acc-adv-s8-r2-q1-h3",
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
 "acc-adv-s9-r2-q1": {
  "id": "acc-adv-s9-r2-q1",
  "title": "Count Smaller Events After",
  "difficulty": "Hard",
  "company": "Accenture",
  "category": "BIT / Merge Sort",
  "tags": [
   "Accenture Round 2",
   "Binary Indexed Tree",
   "Merge Sort",
   "Set 9"
  ],
  "paragraphs": [
   "For each index i, return how many elements to its right are strictly smaller than nums[i]. Defend a sub-quadratic approach.",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-adv-s9-r2-q1-v1",
    "input": "[5,2,6,1]",
    "expectedOutput": "[2,1,1,0]"
   },
   {
    "id": "acc-adv-s9-r2-q1-v2",
    "input": "[-1]",
    "expectedOutput": "[0]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s9-r2-q1-h1",
    "input": "[-1,-1]",
    "expectedOutput": "[0,0]"
   },
   {
    "id": "acc-adv-s9-r2-q1-h2",
    "input": "[3,2,1]",
    "expectedOutput": "[2,1,0]"
   },
   {
    "id": "acc-adv-s9-r2-q1-h3",
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
 "acc-adv-s10-r2-q1": {
  "id": "acc-adv-s10-r2-q1",
  "title": "Most Collinear Probe Points",
  "difficulty": "Hard",
  "company": "Accenture",
  "category": "Hashing / Geometry",
  "tags": [
   "Accenture Round 2",
   "Hash Table",
   "Math",
   "Geometry",
   "Set 10"
  ],
  "paragraphs": [
   "Given points [x, y], return the maximum number of points lying on one straight line. Defend how you avoid floating-point slopes.",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-adv-s10-r2-q1-v1",
    "input": "[[1,1],[2,2],[3,3]]",
    "expectedOutput": "3"
   },
   {
    "id": "acc-adv-s10-r2-q1-v2",
    "input": "[[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]",
    "expectedOutput": "4"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s10-r2-q1-h1",
    "input": "[[0,0]]",
    "expectedOutput": "1"
   },
   {
    "id": "acc-adv-s10-r2-q1-h2",
    "input": "[[0,0],[1,1],[2,2],[3,0]]",
    "expectedOutput": "3"
   },
   {
    "id": "acc-adv-s10-r2-q1-h3",
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
 "acc-adv-s1-r3-q1": {
  "id": "acc-adv-s1-r3-q1",
  "title": "Design a Library Management System",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Technical Deep Dive: Concepts, DBMS and Project",
  "tags": [
   "Accenture Round 3",
   "Set 1"
  ],
  "paragraphs": [
   "Accenture technical interview: CS fundamentals, databases, OOP and your project.",
   "Topic: Design a Library Management System. Focus areas: Classes, relationships, borrowing rules, extensibility.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clarity of fundamentals, correct terminology and the ability to connect concepts to a real project."
   }
  ],
  "constraints": [
   "Define terms precisely and give a concrete example.",
   "State trade-offs and when you would choose each option.",
   "Link the concept to something you have actually built or studied."
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
 "acc-adv-s2-r3-q1": {
  "id": "acc-adv-s2-r3-q1",
  "title": "Indexing and Query Performance",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Technical Deep Dive: Concepts, DBMS and Project",
  "tags": [
   "Accenture Round 3",
   "Set 2"
  ],
  "paragraphs": [
   "Accenture technical interview: CS fundamentals, databases, OOP and your project.",
   "Topic: Indexing and Query Performance. Focus areas: B-tree indexes, execution plans, slow query diagnosis.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clarity of fundamentals, correct terminology and the ability to connect concepts to a real project."
   }
  ],
  "constraints": [
   "Define terms precisely and give a concrete example.",
   "State trade-offs and when you would choose each option.",
   "Link the concept to something you have actually built or studied."
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
 "acc-adv-s3-r3-q1": {
  "id": "acc-adv-s3-r3-q1",
  "title": "Design a REST API for Order Management",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Technical Deep Dive: Concepts, DBMS and Project",
  "tags": [
   "Accenture Round 3",
   "Set 3"
  ],
  "paragraphs": [
   "Accenture technical interview: CS fundamentals, databases, OOP and your project.",
   "Topic: Design a REST API for Order Management. Focus areas: Resources, verbs, status codes, pagination, idempotency.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clarity of fundamentals, correct terminology and the ability to connect concepts to a real project."
   }
  ],
  "constraints": [
   "Define terms precisely and give a concrete example.",
   "State trade-offs and when you would choose each option.",
   "Link the concept to something you have actually built or studied."
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
 "acc-adv-s4-r3-q1": {
  "id": "acc-adv-s4-r3-q1",
  "title": "Multithreading and Synchronization",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Technical Deep Dive: Concepts, DBMS and Project",
  "tags": [
   "Accenture Round 3",
   "Set 4"
  ],
  "paragraphs": [
   "Accenture technical interview: CS fundamentals, databases, OOP and your project.",
   "Topic: Multithreading and Synchronization. Focus areas: Race conditions, locks, thread pools, producer-consumer.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clarity of fundamentals, correct terminology and the ability to connect concepts to a real project."
   }
  ],
  "constraints": [
   "Define terms precisely and give a concrete example.",
   "State trade-offs and when you would choose each option.",
   "Link the concept to something you have actually built or studied."
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
 "acc-adv-s5-r3-q1": {
  "id": "acc-adv-s5-r3-q1",
  "title": "Cloud Basics and Microservices vs Monolith",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Technical Deep Dive: Concepts, DBMS and Project",
  "tags": [
   "Accenture Round 3",
   "Set 5"
  ],
  "paragraphs": [
   "Accenture technical interview: CS fundamentals, databases, OOP and your project.",
   "Topic: Cloud Basics and Microservices vs Monolith. Focus areas: IaaS/PaaS/SaaS, containers, when to split services.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clarity of fundamentals, correct terminology and the ability to connect concepts to a real project."
   }
  ],
  "constraints": [
   "Define terms precisely and give a concrete example.",
   "State trade-offs and when you would choose each option.",
   "Link the concept to something you have actually built or studied."
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
 "acc-adv-s6-r3-q1": {
  "id": "acc-adv-s6-r3-q1",
  "title": "SQL Tuning and Transactions",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Technical Deep Dive: Concepts, DBMS and Project",
  "tags": [
   "Accenture Round 3",
   "Set 6"
  ],
  "paragraphs": [
   "Accenture technical interview: CS fundamentals, databases, OOP and your project.",
   "Topic: SQL Tuning and Transactions. Focus areas: Isolation levels, deadlocks, joins vs subqueries.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clarity of fundamentals, correct terminology and the ability to connect concepts to a real project."
   }
  ],
  "constraints": [
   "Define terms precisely and give a concrete example.",
   "State trade-offs and when you would choose each option.",
   "Link the concept to something you have actually built or studied."
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
 "acc-adv-s7-r3-q1": {
  "id": "acc-adv-s7-r3-q1",
  "title": "Design Patterns in Practice",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Technical Deep Dive: Concepts, DBMS and Project",
  "tags": [
   "Accenture Round 3",
   "Set 7"
  ],
  "paragraphs": [
   "Accenture technical interview: CS fundamentals, databases, OOP and your project.",
   "Topic: Design Patterns in Practice. Focus areas: Singleton, factory, observer, strategy with project examples.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clarity of fundamentals, correct terminology and the ability to connect concepts to a real project."
   }
  ],
  "constraints": [
   "Define terms precisely and give a concrete example.",
   "State trade-offs and when you would choose each option.",
   "Link the concept to something you have actually built or studied."
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
 "acc-adv-s8-r3-q1": {
  "id": "acc-adv-s8-r3-q1",
  "title": "Caching and Session Management",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Technical Deep Dive: Concepts, DBMS and Project",
  "tags": [
   "Accenture Round 3",
   "Set 8"
  ],
  "paragraphs": [
   "Accenture technical interview: CS fundamentals, databases, OOP and your project.",
   "Topic: Caching and Session Management. Focus areas: Cache layers, expiry, JWT vs server sessions.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clarity of fundamentals, correct terminology and the ability to connect concepts to a real project."
   }
  ],
  "constraints": [
   "Define terms precisely and give a concrete example.",
   "State trade-offs and when you would choose each option.",
   "Link the concept to something you have actually built or studied."
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
 "acc-adv-s9-r3-q1": {
  "id": "acc-adv-s9-r3-q1",
  "title": "CI/CD and DevOps Basics",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Technical Deep Dive: Concepts, DBMS and Project",
  "tags": [
   "Accenture Round 3",
   "Set 9"
  ],
  "paragraphs": [
   "Accenture technical interview: CS fundamentals, databases, OOP and your project.",
   "Topic: CI/CD and DevOps Basics. Focus areas: Pipelines, Docker, environments, rollback.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clarity of fundamentals, correct terminology and the ability to connect concepts to a real project."
   }
  ],
  "constraints": [
   "Define terms precisely and give a concrete example.",
   "State trade-offs and when you would choose each option.",
   "Link the concept to something you have actually built or studied."
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
 "acc-adv-s10-r3-q1": {
  "id": "acc-adv-s10-r3-q1",
  "title": "Project Architecture Defense",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Technical Deep Dive: Concepts, DBMS and Project",
  "tags": [
   "Accenture Round 3",
   "Set 10"
  ],
  "paragraphs": [
   "Accenture technical interview: CS fundamentals, databases, OOP and your project.",
   "Topic: Project Architecture Defense. Focus areas: Components, data flow, decisions, what you would redesign.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clarity of fundamentals, correct terminology and the ability to connect concepts to a real project."
   }
  ],
  "constraints": [
   "Define terms precisely and give a concrete example.",
   "State trade-offs and when you would choose each option.",
   "Link the concept to something you have actually built or studied."
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
 "acc-adv-s1-r4-q1": {
  "id": "acc-adv-s1-r4-q1",
  "title": "Tell Me About Yourself and Why Accenture",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "HR and Communication",
  "tags": [
   "Accenture",
   "HR and Communication",
   "Communication / Motivation",
   "Set 1"
  ],
  "paragraphs": [
   "Accenture HR and delivery-lead round: communication, adaptability, client focus, teamwork and integrity.",
   "Scenario: You are an Advanced Associate Software Engineer on a client project team. You are asked to introduce yourself and explain why you want to join Accenture and this role.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Communication / Motivation",
    "explanation": "Use concrete first-person examples and a calm, structured answer: situation, action, result, learning."
   }
  ],
  "constraints": [
   "Be specific about your own actions.",
   "Show adaptability and a client-first attitude.",
   "Be honest and concise."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: HR and Communication\n// Focus: Communication / Motivation\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: HR and Communication\n// Focus: Communication / Motivation\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: HR and Communication\n# Focus: Communication / Motivation\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: HR and Communication\n// Focus: Communication / Motivation\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-adv-s2-r4-q1": {
  "id": "acc-adv-s2-r4-q1",
  "title": "Relocation and Shift Flexibility",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "HR and Communication",
  "tags": [
   "Accenture",
   "HR and Communication",
   "Adaptability",
   "Set 2"
  ],
  "paragraphs": [
   "Accenture HR and delivery-lead round: communication, adaptability, client focus, teamwork and integrity.",
   "Scenario: You are an Advanced Associate Software Engineer on a client project team. You are told the project may require relocation to another city and rotating shifts, and you have personal commitments.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Adaptability",
    "explanation": "Use concrete first-person examples and a calm, structured answer: situation, action, result, learning."
   }
  ],
  "constraints": [
   "Be specific about your own actions.",
   "Show adaptability and a client-first attitude.",
   "Be honest and concise."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: HR and Communication\n// Focus: Adaptability\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: HR and Communication\n// Focus: Adaptability\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: HR and Communication\n# Focus: Adaptability\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: HR and Communication\n// Focus: Adaptability\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-adv-s3-r4-q1": {
  "id": "acc-adv-s3-r4-q1",
  "title": "Handling a Difficult Teammate",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "HR and Communication",
  "tags": [
   "Accenture",
   "HR and Communication",
   "Teamwork",
   "Set 3"
  ],
  "paragraphs": [
   "Accenture HR and delivery-lead round: communication, adaptability, client focus, teamwork and integrity.",
   "Scenario: You are an Advanced Associate Software Engineer on a client project team. A teammate repeatedly misses handoffs and the rest of the team is getting frustrated.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Teamwork",
    "explanation": "Use concrete first-person examples and a calm, structured answer: situation, action, result, learning."
   }
  ],
  "constraints": [
   "Be specific about your own actions.",
   "Show adaptability and a client-first attitude.",
   "Be honest and concise."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: HR and Communication\n// Focus: Teamwork\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: HR and Communication\n// Focus: Teamwork\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: HR and Communication\n# Focus: Teamwork\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: HR and Communication\n// Focus: Teamwork\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-adv-s4-r4-q1": {
  "id": "acc-adv-s4-r4-q1",
  "title": "Client Deadline Pressure",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "HR and Communication",
  "tags": [
   "Accenture",
   "HR and Communication",
   "Client Focus / Ownership",
   "Set 4"
  ],
  "paragraphs": [
   "Accenture HR and delivery-lead round: communication, adaptability, client focus, teamwork and integrity.",
   "Scenario: You are an Advanced Associate Software Engineer on a client project team. A client moves a delivery date forward by a week with no extra resources.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Client Focus / Ownership",
    "explanation": "Use concrete first-person examples and a calm, structured answer: situation, action, result, learning."
   }
  ],
  "constraints": [
   "Be specific about your own actions.",
   "Show adaptability and a client-first attitude.",
   "Be honest and concise."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: HR and Communication\n// Focus: Client Focus / Ownership\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: HR and Communication\n// Focus: Client Focus / Ownership\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: HR and Communication\n# Focus: Client Focus / Ownership\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: HR and Communication\n// Focus: Client Focus / Ownership\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-adv-s5-r4-q1": {
  "id": "acc-adv-s5-r4-q1",
  "title": "Learning a New Technology Quickly",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "HR and Communication",
  "tags": [
   "Accenture",
   "HR and Communication",
   "Learning Agility",
   "Set 5"
  ],
  "paragraphs": [
   "Accenture HR and delivery-lead round: communication, adaptability, client focus, teamwork and integrity.",
   "Scenario: You are an Advanced Associate Software Engineer on a client project team. You are assigned to a project in a technology you have never used, starting Monday.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Learning Agility",
    "explanation": "Use concrete first-person examples and a calm, structured answer: situation, action, result, learning."
   }
  ],
  "constraints": [
   "Be specific about your own actions.",
   "Show adaptability and a client-first attitude.",
   "Be honest and concise."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: HR and Communication\n// Focus: Learning Agility\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: HR and Communication\n// Focus: Learning Agility\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: HR and Communication\n# Focus: Learning Agility\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: HR and Communication\n// Focus: Learning Agility\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-adv-s6-r4-q1": {
  "id": "acc-adv-s6-r4-q1",
  "title": "Strengths and Weaknesses",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "HR and Communication",
  "tags": [
   "Accenture",
   "HR and Communication",
   "Self-Awareness",
   "Set 6"
  ],
  "paragraphs": [
   "Accenture HR and delivery-lead round: communication, adaptability, client focus, teamwork and integrity.",
   "Scenario: You are an Advanced Associate Software Engineer on a client project team. You are asked for your real strengths and weaknesses and examples of each.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Self-Awareness",
    "explanation": "Use concrete first-person examples and a calm, structured answer: situation, action, result, learning."
   }
  ],
  "constraints": [
   "Be specific about your own actions.",
   "Show adaptability and a client-first attitude.",
   "Be honest and concise."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: HR and Communication\n// Focus: Self-Awareness\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: HR and Communication\n// Focus: Self-Awareness\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: HR and Communication\n# Focus: Self-Awareness\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: HR and Communication\n// Focus: Self-Awareness\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-adv-s7-r4-q1": {
  "id": "acc-adv-s7-r4-q1",
  "title": "Where Do You See Yourself in Five Years",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "HR and Communication",
  "tags": [
   "Accenture",
   "HR and Communication",
   "Career Goals",
   "Set 7"
  ],
  "paragraphs": [
   "Accenture HR and delivery-lead round: communication, adaptability, client focus, teamwork and integrity.",
   "Scenario: You are an Advanced Associate Software Engineer on a client project team. You are asked about your five-year plan and how this role fits it.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Career Goals",
    "explanation": "Use concrete first-person examples and a calm, structured answer: situation, action, result, learning."
   }
  ],
  "constraints": [
   "Be specific about your own actions.",
   "Show adaptability and a client-first attitude.",
   "Be honest and concise."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: HR and Communication\n// Focus: Career Goals\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: HR and Communication\n// Focus: Career Goals\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: HR and Communication\n# Focus: Career Goals\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: HR and Communication\n// Focus: Career Goals\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-adv-s8-r4-q1": {
  "id": "acc-adv-s8-r4-q1",
  "title": "Handling a Failure",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "HR and Communication",
  "tags": [
   "Accenture",
   "HR and Communication",
   "Accountability",
   "Set 8"
  ],
  "paragraphs": [
   "Accenture HR and delivery-lead round: communication, adaptability, client focus, teamwork and integrity.",
   "Scenario: You are an Advanced Associate Software Engineer on a client project team. Describe a time a piece of your work failed or was rejected and what you did next.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Accountability",
    "explanation": "Use concrete first-person examples and a calm, structured answer: situation, action, result, learning."
   }
  ],
  "constraints": [
   "Be specific about your own actions.",
   "Show adaptability and a client-first attitude.",
   "Be honest and concise."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: HR and Communication\n// Focus: Accountability\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: HR and Communication\n// Focus: Accountability\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: HR and Communication\n# Focus: Accountability\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: HR and Communication\n// Focus: Accountability\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-adv-s9-r4-q1": {
  "id": "acc-adv-s9-r4-q1",
  "title": "Unclear Client Requirements",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "HR and Communication",
  "tags": [
   "Accenture",
   "HR and Communication",
   "Ambiguity / Communication",
   "Set 9"
  ],
  "paragraphs": [
   "Accenture HR and delivery-lead round: communication, adaptability, client focus, teamwork and integrity.",
   "Scenario: You are an Advanced Associate Software Engineer on a client project team. The client's requirements are vague and keep changing, and the team is unsure what to build.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Ambiguity / Communication",
    "explanation": "Use concrete first-person examples and a calm, structured answer: situation, action, result, learning."
   }
  ],
  "constraints": [
   "Be specific about your own actions.",
   "Show adaptability and a client-first attitude.",
   "Be honest and concise."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: HR and Communication\n// Focus: Ambiguity / Communication\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: HR and Communication\n// Focus: Ambiguity / Communication\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: HR and Communication\n# Focus: Ambiguity / Communication\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: HR and Communication\n// Focus: Ambiguity / Communication\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-adv-s10-r4-q1": {
  "id": "acc-adv-s10-r4-q1",
  "title": "Confidentiality and Ethics",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "HR and Communication",
  "tags": [
   "Accenture",
   "HR and Communication",
   "Integrity",
   "Set 10"
  ],
  "paragraphs": [
   "Accenture HR and delivery-lead round: communication, adaptability, client focus, teamwork and integrity.",
   "Scenario: You are an Advanced Associate Software Engineer on a client project team. You notice a colleague sharing client data over a personal channel to meet a deadline.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Integrity",
    "explanation": "Use concrete first-person examples and a calm, structured answer: situation, action, result, learning."
   }
  ],
  "constraints": [
   "Be specific about your own actions.",
   "Show adaptability and a client-first attitude.",
   "Be honest and concise."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: HR and Communication\n// Focus: Integrity\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: HR and Communication\n// Focus: Integrity\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: HR and Communication\n# Focus: Integrity\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: HR and Communication\n// Focus: Integrity\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-sse-s1-r1-q1": {
  "id": "acc-sse-s1-r1-q1",
  "title": "Alternating Colour Shortest Paths",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Graph / BFS",
  "tags": [
   "Accenture Round 1",
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s1-r1-q1-v1",
    "input": "3\n[[0,1],[1,2]]\n[]",
    "expectedOutput": "[0,1,-1]"
   },
   {
    "id": "acc-sse-s1-r1-q1-v2",
    "input": "3\n[[0,1]]\n[[2,1]]",
    "expectedOutput": "[0,1,-1]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s1-r1-q1-h1",
    "input": "5\n[[0,1],[1,2],[2,3],[3,4]]\n[[1,2],[2,3],[3,1]]",
    "expectedOutput": "[0,1,2,3,7]"
   },
   {
    "id": "acc-sse-s1-r1-q1-h2",
    "input": "1\n[]\n[]",
    "expectedOutput": "[0]"
   },
   {
    "id": "acc-sse-s1-r1-q1-h3",
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
  "nextProblemId": "acc-sse-s1-r1-q2"
 },
 "acc-sse-s1-r1-q2": {
  "id": "acc-sse-s1-r1-q2",
  "title": "Longest Fragment With K Distinct Tokens",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Sliding Window",
  "tags": [
   "Accenture Round 1",
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s1-r1-q2-v1",
    "input": "\"eceba\"\n2",
    "expectedOutput": "3"
   },
   {
    "id": "acc-sse-s1-r1-q2-v2",
    "input": "\"aa\"\n1",
    "expectedOutput": "2"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s1-r1-q2-h1",
    "input": "\"a\"\n0",
    "expectedOutput": "0"
   },
   {
    "id": "acc-sse-s1-r1-q2-h2",
    "input": "\"abaccc\"\n2",
    "expectedOutput": "4"
   },
   {
    "id": "acc-sse-s1-r1-q2-h3",
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
 "acc-sse-s2-r1-q1": {
  "id": "acc-sse-s2-r1-q1",
  "title": "Distance to Nearest Cache Node",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Multi-source BFS",
  "tags": [
   "Accenture Round 1",
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s2-r1-q1-v1",
    "input": "[[0,0,0],[0,1,0],[0,0,0]]",
    "expectedOutput": "[[0,0,0],[0,1,0],[0,0,0]]"
   },
   {
    "id": "acc-sse-s2-r1-q1-v2",
    "input": "[[0,0,0],[0,1,0],[1,1,1]]",
    "expectedOutput": "[[0,0,0],[0,1,0],[1,2,1]]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s2-r1-q1-h1",
    "input": "[[0]]",
    "expectedOutput": "[[0]]"
   },
   {
    "id": "acc-sse-s2-r1-q1-h2",
    "input": "[[1,1],[1,0]]",
    "expectedOutput": "[[2,1],[1,0]]"
   },
   {
    "id": "acc-sse-s2-r1-q1-h3",
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
  "nextProblemId": "acc-sse-s2-r1-q2"
 },
 "acc-sse-s2-r1-q2": {
  "id": "acc-sse-s2-r1-q2",
  "title": "Maximum Batch Jobs by Deadline",
  "difficulty": "Hard",
  "company": "Accenture",
  "category": "Greedy / Heap",
  "tags": [
   "Accenture Round 1",
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s2-r1-q2-v1",
    "input": "[[100,200],[200,1300],[1000,1250],[2000,3200]]",
    "expectedOutput": "3"
   },
   {
    "id": "acc-sse-s2-r1-q2-v2",
    "input": "[[1,2]]",
    "expectedOutput": "1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s2-r1-q2-h1",
    "input": "[[3,2],[4,3]]",
    "expectedOutput": "0"
   },
   {
    "id": "acc-sse-s2-r1-q2-h2",
    "input": "[[5,5],[4,6],[2,6]]",
    "expectedOutput": "2"
   },
   {
    "id": "acc-sse-s2-r1-q2-h3",
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
 "acc-sse-s3-r1-q1": {
  "id": "acc-sse-s3-r1-q1",
  "title": "Rooms to Nearest Gateway",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Multi-source BFS",
  "tags": [
   "Accenture Round 1",
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s3-r1-q1-v1",
    "input": "[[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]",
    "expectedOutput": "[[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]"
   },
   {
    "id": "acc-sse-s3-r1-q1-v2",
    "input": "[[0]]",
    "expectedOutput": "[[0]]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s3-r1-q1-h1",
    "input": "[[2147483647]]",
    "expectedOutput": "[[2147483647]]"
   },
   {
    "id": "acc-sse-s3-r1-q1-h2",
    "input": "[[2147483647,0],[-1,2147483647]]",
    "expectedOutput": "[[1,0],[-1,1]]"
   },
   {
    "id": "acc-sse-s3-r1-q1-h3",
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
  "nextProblemId": "acc-sse-s3-r1-q2"
 },
 "acc-sse-s3-r1-q2": {
  "id": "acc-sse-s3-r1-q2",
  "title": "Rolling Maximum Over Metrics",
  "difficulty": "Hard",
  "company": "Accenture",
  "category": "Monotonic Deque",
  "tags": [
   "Accenture Round 1",
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s3-r1-q2-v1",
    "input": "[1,3,-1,-3,5,3,6,7]\n3",
    "expectedOutput": "[3,3,5,5,6,7]"
   },
   {
    "id": "acc-sse-s3-r1-q2-v2",
    "input": "[1]\n1",
    "expectedOutput": "[1]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s3-r1-q2-h1",
    "input": "[9,11]\n2",
    "expectedOutput": "[11]"
   },
   {
    "id": "acc-sse-s3-r1-q2-h2",
    "input": "[4,3,2,1]\n2",
    "expectedOutput": "[4,3,2]"
   },
   {
    "id": "acc-sse-s3-r1-q2-h3",
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
 "acc-sse-s4-r1-q1": {
  "id": "acc-sse-s4-r1-q1",
  "title": "Shortest Route With Removable Blocks",
  "difficulty": "Hard",
  "company": "Accenture",
  "category": "BFS with State",
  "tags": [
   "Accenture Round 1",
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s4-r1-q1-v1",
    "input": "[[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]]\n1",
    "expectedOutput": "6"
   },
   {
    "id": "acc-sse-s4-r1-q1-v2",
    "input": "[[0,1,1],[1,1,1],[1,0,0]]\n1",
    "expectedOutput": "-1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s4-r1-q1-h1",
    "input": "[[0]]\n0",
    "expectedOutput": "0"
   },
   {
    "id": "acc-sse-s4-r1-q1-h2",
    "input": "[[0,1],[1,0]]\n1",
    "expectedOutput": "2"
   },
   {
    "id": "acc-sse-s4-r1-q1-h3",
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
  "nextProblemId": "acc-sse-s4-r1-q2"
 },
 "acc-sse-s4-r1-q2": {
  "id": "acc-sse-s4-r1-q2",
  "title": "Smallest Covering Log Window",
  "difficulty": "Hard",
  "company": "Accenture",
  "category": "Sliding Window",
  "tags": [
   "Accenture Round 1",
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s4-r1-q2-v1",
    "input": "\"ADOBECODEBANC\"\n\"ABC\"",
    "expectedOutput": "\"BANC\""
   },
   {
    "id": "acc-sse-s4-r1-q2-v2",
    "input": "\"a\"\n\"a\"",
    "expectedOutput": "\"a\""
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s4-r1-q2-h1",
    "input": "\"a\"\n\"aa\"",
    "expectedOutput": "\"\""
   },
   {
    "id": "acc-sse-s4-r1-q2-h2",
    "input": "\"abc\"\n\"b\"",
    "expectedOutput": "\"b\""
   },
   {
    "id": "acc-sse-s4-r1-q2-h3",
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
 "acc-sse-s5-r1-q1": {
  "id": "acc-sse-s5-r1-q1",
  "title": "Word Ladder Transformation Length",
  "difficulty": "Hard",
  "company": "Accenture",
  "category": "Graph / BFS",
  "tags": [
   "Accenture Round 1",
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s5-r1-q1-v1",
    "input": "\"hit\"\n\"cog\"\n[\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
    "expectedOutput": "5"
   },
   {
    "id": "acc-sse-s5-r1-q1-v2",
    "input": "\"hit\"\n\"cog\"\n[\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]",
    "expectedOutput": "0"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s5-r1-q1-h1",
    "input": "\"a\"\n\"c\"\n[\"a\",\"b\",\"c\"]",
    "expectedOutput": "2"
   },
   {
    "id": "acc-sse-s5-r1-q1-h2",
    "input": "\"lost\"\n\"cost\"\n[\"most\",\"fust\",\"lost\",\"cost\",\"cast\"]",
    "expectedOutput": "2"
   },
   {
    "id": "acc-sse-s5-r1-q1-h3",
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
  "nextProblemId": "acc-sse-s5-r1-q2"
 },
 "acc-sse-s5-r1-q2": {
  "id": "acc-sse-s5-r1-q2",
  "title": "Longest Rising Trend",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "DP / Binary Search",
  "tags": [
   "Accenture Round 1",
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s5-r1-q2-v1",
    "input": "[10,9,2,5,3,7,101,18]",
    "expectedOutput": "4"
   },
   {
    "id": "acc-sse-s5-r1-q2-v2",
    "input": "[0,1,0,3,2,3]",
    "expectedOutput": "4"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s5-r1-q2-h1",
    "input": "[7,7,7,7]",
    "expectedOutput": "1"
   },
   {
    "id": "acc-sse-s5-r1-q2-h2",
    "input": "[1]",
    "expectedOutput": "1"
   },
   {
    "id": "acc-sse-s5-r1-q2-h3",
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
 "acc-sse-s6-r1-q1": {
  "id": "acc-sse-s6-r1-q1",
  "title": "Farthest Zone From Any Node",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Multi-source BFS",
  "tags": [
   "Accenture Round 1",
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s6-r1-q1-v1",
    "input": "[[1,0,1],[0,0,0],[1,0,1]]",
    "expectedOutput": "2"
   },
   {
    "id": "acc-sse-s6-r1-q1-v2",
    "input": "[[1,0,0],[0,0,0],[0,0,0]]",
    "expectedOutput": "4"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s6-r1-q1-h1",
    "input": "[[0,0],[0,0]]",
    "expectedOutput": "-1"
   },
   {
    "id": "acc-sse-s6-r1-q1-h2",
    "input": "[[1,1],[1,1]]",
    "expectedOutput": "-1"
   },
   {
    "id": "acc-sse-s6-r1-q1-h3",
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
  "nextProblemId": "acc-sse-s6-r1-q2"
 },
 "acc-sse-s6-r1-q2": {
  "id": "acc-sse-s6-r1-q2",
  "title": "Minimum Edits Between Configs",
  "difficulty": "Hard",
  "company": "Accenture",
  "category": "DP (rolling row)",
  "tags": [
   "Accenture Round 1",
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s6-r1-q2-v1",
    "input": "\"horse\"\n\"ros\"",
    "expectedOutput": "3"
   },
   {
    "id": "acc-sse-s6-r1-q2-v2",
    "input": "\"intention\"\n\"execution\"",
    "expectedOutput": "5"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s6-r1-q2-h1",
    "input": "\"\"\n\"\"",
    "expectedOutput": "0"
   },
   {
    "id": "acc-sse-s6-r1-q2-h2",
    "input": "\"abc\"\n\"\"",
    "expectedOutput": "3"
   },
   {
    "id": "acc-sse-s6-r1-q2-h3",
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
 "acc-sse-s7-r1-q1": {
  "id": "acc-sse-s7-r1-q1",
  "title": "Circular Server Rack Harvest",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "DP",
  "tags": [
   "Accenture Round 1",
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s7-r1-q1-v1",
    "input": "[2,3,2]",
    "expectedOutput": "3"
   },
   {
    "id": "acc-sse-s7-r1-q1-v2",
    "input": "[1,2,3,1]",
    "expectedOutput": "4"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s7-r1-q1-h1",
    "input": "[1,2,3]",
    "expectedOutput": "3"
   },
   {
    "id": "acc-sse-s7-r1-q1-h2",
    "input": "[5]",
    "expectedOutput": "5"
   },
   {
    "id": "acc-sse-s7-r1-q1-h3",
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
  "nextProblemId": "acc-sse-s7-r1-q2"
 },
 "acc-sse-s7-r1-q2": {
  "id": "acc-sse-s7-r1-q2",
  "title": "Largest Healthy Square",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "DP",
  "tags": [
   "Accenture Round 1",
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s7-r1-q2-v1",
    "input": "[\"10100\",\"10111\",\"11111\",\"10010\"]",
    "expectedOutput": "4"
   },
   {
    "id": "acc-sse-s7-r1-q2-v2",
    "input": "[\"01\",\"10\"]",
    "expectedOutput": "1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s7-r1-q2-h1",
    "input": "[\"0\"]",
    "expectedOutput": "0"
   },
   {
    "id": "acc-sse-s7-r1-q2-h2",
    "input": "[\"11\",\"11\"]",
    "expectedOutput": "4"
   },
   {
    "id": "acc-sse-s7-r1-q2-h3",
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
 "acc-sse-s8-r1-q1": {
  "id": "acc-sse-s8-r1-q1",
  "title": "Signal Propagation Time",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Dijkstra",
  "tags": [
   "Accenture Round 1",
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s8-r1-q1-v1",
    "input": "[[2,1,1],[2,3,1],[3,4,1]]\n4\n2",
    "expectedOutput": "2"
   },
   {
    "id": "acc-sse-s8-r1-q1-v2",
    "input": "[[1,2,1]]\n2\n1",
    "expectedOutput": "1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s8-r1-q1-h1",
    "input": "[[1,2,1]]\n2\n2",
    "expectedOutput": "-1"
   },
   {
    "id": "acc-sse-s8-r1-q1-h2",
    "input": "[[1,2,1],[2,3,2],[1,3,4]]\n3\n1",
    "expectedOutput": "3"
   },
   {
    "id": "acc-sse-s8-r1-q1-h3",
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
  "nextProblemId": "acc-sse-s8-r1-q2"
 },
 "acc-sse-s8-r1-q2": {
  "id": "acc-sse-s8-r1-q2",
  "title": "Balanced Shard Split",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "DP (bitset)",
  "tags": [
   "Accenture Round 1",
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s8-r1-q2-v1",
    "input": "[1,5,11,5]",
    "expectedOutput": "true"
   },
   {
    "id": "acc-sse-s8-r1-q2-v2",
    "input": "[1,2,3,5]",
    "expectedOutput": "false"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s8-r1-q2-h1",
    "input": "[2,2]",
    "expectedOutput": "true"
   },
   {
    "id": "acc-sse-s8-r1-q2-h2",
    "input": "[1]",
    "expectedOutput": "false"
   },
   {
    "id": "acc-sse-s8-r1-q2-h3",
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
 "acc-sse-s9-r1-q1": {
  "id": "acc-sse-s9-r1-q1",
  "title": "Cooldown Task Slots",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Greedy",
  "tags": [
   "Accenture Round 1",
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s9-r1-q1-v1",
    "input": "\"AAABBB\"\n2",
    "expectedOutput": "8"
   },
   {
    "id": "acc-sse-s9-r1-q1-v2",
    "input": "\"AAABBB\"\n0",
    "expectedOutput": "6"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s9-r1-q1-h1",
    "input": "\"AAAAAABCDEFG\"\n2",
    "expectedOutput": "16"
   },
   {
    "id": "acc-sse-s9-r1-q1-h2",
    "input": "\"ABC\"\n5",
    "expectedOutput": "3"
   },
   {
    "id": "acc-sse-s9-r1-q1-h3",
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
  "nextProblemId": "acc-sse-s9-r1-q2"
 },
 "acc-sse-s9-r1-q2": {
  "id": "acc-sse-s9-r1-q2",
  "title": "Concurrent Booking Rooms",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Sorting / Sweep",
  "tags": [
   "Accenture Round 1",
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s9-r1-q2-v1",
    "input": "[[0,30],[5,10],[15,20]]",
    "expectedOutput": "2"
   },
   {
    "id": "acc-sse-s9-r1-q2-v2",
    "input": "[[7,10],[2,4]]",
    "expectedOutput": "1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s9-r1-q2-h1",
    "input": "[[1,5],[5,10]]",
    "expectedOutput": "1"
   },
   {
    "id": "acc-sse-s9-r1-q2-h2",
    "input": "[[1,10],[2,9],[3,8]]",
    "expectedOutput": "3"
   },
   {
    "id": "acc-sse-s9-r1-q2-h3",
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
 "acc-sse-s10-r1-q1": {
  "id": "acc-sse-s10-r1-q1",
  "title": "Cheapest Route With Hop Limit",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Bellman-Ford",
  "tags": [
   "Accenture Round 1",
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s10-r1-q1-v1",
    "input": "4\n[[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]]\n0\n3\n1",
    "expectedOutput": "700"
   },
   {
    "id": "acc-sse-s10-r1-q1-v2",
    "input": "3\n[[0,1,100],[1,2,100],[0,2,500]]\n0\n2\n1",
    "expectedOutput": "200"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s10-r1-q1-h1",
    "input": "3\n[[0,1,100],[1,2,100],[0,2,500]]\n0\n2\n0",
    "expectedOutput": "500"
   },
   {
    "id": "acc-sse-s10-r1-q1-h2",
    "input": "2\n[[0,1,5]]\n1\n0\n1",
    "expectedOutput": "-1"
   },
   {
    "id": "acc-sse-s10-r1-q1-h3",
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
  "nextProblemId": "acc-sse-s10-r1-q2"
 },
 "acc-sse-s10-r1-q2": {
  "id": "acc-sse-s10-r1-q2",
  "title": "Longest Consecutive Id Run",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Hash Set",
  "tags": [
   "Accenture Round 1",
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s10-r1-q2-v1",
    "input": "[100,4,200,1,3,2]",
    "expectedOutput": "4"
   },
   {
    "id": "acc-sse-s10-r1-q2-v2",
    "input": "[0,3,7,2,5,8,4,6,0,1]",
    "expectedOutput": "9"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s10-r1-q2-h1",
    "input": "[]",
    "expectedOutput": "0"
   },
   {
    "id": "acc-sse-s10-r1-q2-h2",
    "input": "[1,2,0,1]",
    "expectedOutput": "3"
   },
   {
    "id": "acc-sse-s10-r1-q2-h3",
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
 "acc-sse-s1-r2-q1": {
  "id": "acc-sse-s1-r2-q1",
  "title": "LRU Cache Internals",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Design / Linked List",
  "tags": [
   "Accenture Round 2",
   "Design",
   "Hash Table",
   "Doubly Linked List",
   "Set 1"
  ],
  "paragraphs": [
   "Implement an LRU cache with O(1) get and put, then defend your hash map plus doubly linked list invariants. ops/args describe a call sequence; return each call's result (null for put and the constructor, -1 for a miss).",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s1-r2-q1-v1",
    "input": "[\"LRUCache\",\"put\",\"put\",\"get\",\"put\",\"get\",\"put\",\"get\",\"get\",\"get\"]\n[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]",
    "expectedOutput": "[null,null,null,1,null,-1,null,-1,3,4]"
   },
   {
    "id": "acc-sse-s1-r2-q1-v2",
    "input": "[\"LRUCache\",\"put\",\"get\"]\n[[1],[5,50],[5]]",
    "expectedOutput": "[null,null,50]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s1-r2-q1-h1",
    "input": "[\"LRUCache\",\"get\"]\n[[1],[9]]",
    "expectedOutput": "[null,-1]"
   },
   {
    "id": "acc-sse-s1-r2-q1-h2",
    "input": "[\"LRUCache\",\"put\",\"put\",\"put\",\"get\"]\n[[2],[1,1],[2,2],[1,10],[1]]",
    "expectedOutput": "[null,null,null,null,10]"
   },
   {
    "id": "acc-sse-s1-r2-q1-h3",
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
 "acc-sse-s2-r2-q1": {
  "id": "acc-sse-s2-r2-q1",
  "title": "LFU Cache Frequency Lists",
  "difficulty": "Hard",
  "company": "Accenture",
  "category": "Design",
  "tags": [
   "Accenture Round 2",
   "Design",
   "LFU",
   "Hash Table",
   "Set 2"
  ],
  "paragraphs": [
   "Implement an LFU cache with O(1) operations. When full, evict the least frequently used key, breaking ties by least recently used. Return each call's result (null for put and the constructor, -1 for a miss).",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s2-r2-q1-v1",
    "input": "[\"LFUCache\",\"put\",\"put\",\"get\",\"put\",\"get\",\"get\",\"put\",\"get\",\"get\",\"get\"]\n[[2],[1,1],[2,2],[1],[3,3],[2],[3],[4,4],[1],[3],[4]]",
    "expectedOutput": "[null,null,null,1,null,-1,3,null,-1,3,4]"
   },
   {
    "id": "acc-sse-s2-r2-q1-v2",
    "input": "[\"LFUCache\",\"put\",\"get\"]\n[[0],[1,1],[1]]",
    "expectedOutput": "[null,null,-1]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s2-r2-q1-h1",
    "input": "[\"LFUCache\",\"put\",\"put\",\"get\",\"put\",\"get\",\"get\"]\n[[1],[1,1],[2,2],[1],[3,3],[2],[3]]",
    "expectedOutput": "[null,null,null,-1,null,-1,3]"
   },
   {
    "id": "acc-sse-s2-r2-q1-h2",
    "input": "[\"LFUCache\",\"put\",\"put\",\"put\",\"get\",\"get\"]\n[[2],[1,1],[1,5],[2,2],[1],[2]]",
    "expectedOutput": "[null,null,null,null,5,2]"
   },
   {
    "id": "acc-sse-s2-r2-q1-h3",
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
 "acc-sse-s3-r2-q1": {
  "id": "acc-sse-s3-r2-q1",
  "title": "Insert Delete Constant-Time Set",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Design / Hashing",
  "tags": [
   "Accenture Round 2",
   "Design",
   "Hash Table",
   "Array",
   "Set 3"
  ],
  "paragraphs": [
   "Implement a set supporting insert, remove and contains in O(1) (the swap-with-last trick that also makes getRandom O(1)), plus size. Return each call's result (null for the constructor).",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s3-r2-q1-v1",
    "input": "[\"RandomizedSet\",\"insert\",\"remove\",\"insert\",\"contains\",\"remove\",\"insert\",\"size\"]\n[[],[1],[2],[2],[2],[1],[2],[]]",
    "expectedOutput": "[null,true,false,true,true,true,false,1]"
   },
   {
    "id": "acc-sse-s3-r2-q1-v2",
    "input": "[\"RandomizedSet\",\"insert\",\"insert\",\"remove\",\"size\"]\n[[],[5],[5],[5],[]]",
    "expectedOutput": "[null,true,false,true,0]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s3-r2-q1-h1",
    "input": "[\"RandomizedSet\",\"remove\",\"size\"]\n[[],[3],[]]",
    "expectedOutput": "[null,false,0]"
   },
   {
    "id": "acc-sse-s3-r2-q1-h2",
    "input": "[\"RandomizedSet\",\"insert\",\"insert\",\"insert\",\"remove\",\"contains\",\"contains\"]\n[[],[1],[2],[3],[1],[3],[1]]",
    "expectedOutput": "[null,true,true,true,true,true,false]"
   },
   {
    "id": "acc-sse-s3-r2-q1-h3",
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
 "acc-sse-s4-r2-q1": {
  "id": "acc-sse-s4-r2-q1",
  "title": "Autocomplete Trie With Top-K Ranking",
  "difficulty": "Hard",
  "company": "Accenture",
  "category": "Trie / Design",
  "tags": [
   "Accenture Round 2",
   "Trie",
   "Heap",
   "Design",
   "Set 4"
  ],
  "paragraphs": [
   "Build an autocomplete system over (sentence, count) pairs. input(c) appends a character and returns the top 3 sentences by count (ties by ASCII order); '#' stores the typed sentence and returns []. args is a JSON array per call.",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s4-r2-q1-v1",
    "input": "[\"AutocompleteSystem\",\"input\",\"input\",\"input\",\"input\"]\n[[[\"i love you\",\"island\",\"iroman\",\"i love leetcode\"],[5,3,2,2]],[\"i\"],[\" \"],[\"a\"],[\"#\"]]",
    "expectedOutput": "[null,[\"i love you\",\"island\",\"i love leetcode\"],[\"i love you\",\"i love leetcode\"],[],[]]"
   },
   {
    "id": "acc-sse-s4-r2-q1-v2",
    "input": "[\"AutocompleteSystem\",\"input\",\"input\"]\n[[[\"ab\",\"abc\"],[1,2]],[\"a\"],[\"b\"]]",
    "expectedOutput": "[null,[\"abc\",\"ab\"],[\"abc\",\"ab\"]]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s4-r2-q1-h1",
    "input": "[\"AutocompleteSystem\",\"input\",\"input\",\"input\"]\n[[[\"x\"],[1]],[\"#\"],[\"y\"],[\"#\"]]",
    "expectedOutput": "[null,[],[],[]]"
   },
   {
    "id": "acc-sse-s4-r2-q1-h2",
    "input": "[\"AutocompleteSystem\",\"input\"]\n[[[\"hello\",\"help\",\"helm\",\"held\"],[4,4,4,1]],[\"h\"]]",
    "expectedOutput": "[null,[\"hello\",\"helm\",\"help\"]]"
   },
   {
    "id": "acc-sse-s4-r2-q1-h3",
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
 "acc-sse-s5-r2-q1": {
  "id": "acc-sse-s5-r2-q1",
  "title": "Median From a Data Stream",
  "difficulty": "Hard",
  "company": "Accenture",
  "category": "Two Heaps",
  "tags": [
   "Accenture Round 2",
   "Heap",
   "Design",
   "Streaming",
   "Set 5"
  ],
  "paragraphs": [
   "Support addNum and findMedian over a stream using two heaps (O(log N) add, O(1) median). Return each call's result (null for the constructor and addNum).",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s5-r2-q1-v1",
    "input": "[\"MedianFinder\",\"addNum\",\"addNum\",\"findMedian\",\"addNum\",\"findMedian\"]\n[[],[1],[2],[],[3],[]]",
    "expectedOutput": "[null,null,null,1.5,null,2.0]"
   },
   {
    "id": "acc-sse-s5-r2-q1-v2",
    "input": "[\"MedianFinder\",\"addNum\",\"findMedian\"]\n[[],[5],[]]",
    "expectedOutput": "[null,null,5.0]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s5-r2-q1-h1",
    "input": "[\"MedianFinder\",\"addNum\",\"addNum\",\"addNum\",\"addNum\",\"findMedian\"]\n[[],[6],[10],[2],[6],[]]",
    "expectedOutput": "[null,null,null,null,null,6.0]"
   },
   {
    "id": "acc-sse-s5-r2-q1-h2",
    "input": "[\"MedianFinder\",\"addNum\",\"addNum\",\"findMedian\"]\n[[],[-1],[-2],[]]",
    "expectedOutput": "[null,null,null,-1.5]"
   },
   {
    "id": "acc-sse-s5-r2-q1-h3",
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
 "acc-sse-s6-r2-q1": {
  "id": "acc-sse-s6-r2-q1",
  "title": "Maximum Frequency Stack",
  "difficulty": "Hard",
  "company": "Accenture",
  "category": "Design / Stack",
  "tags": [
   "Accenture Round 2",
   "Design",
   "Stack",
   "Hash Table",
   "Set 6"
  ],
  "paragraphs": [
   "Implement push(x) and pop(), where pop removes the most frequent element (ties: the one closest to the top). Return each call's result (null for push and the constructor).",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s6-r2-q1-v1",
    "input": "[\"FreqStack\",\"push\",\"push\",\"push\",\"push\",\"push\",\"push\",\"pop\",\"pop\",\"pop\",\"pop\"]\n[[],[5],[7],[5],[7],[4],[5],[],[],[],[]]",
    "expectedOutput": "[null,null,null,null,null,null,null,5,7,5,4]"
   },
   {
    "id": "acc-sse-s6-r2-q1-v2",
    "input": "[\"FreqStack\",\"push\",\"pop\"]\n[[],[1],[]]",
    "expectedOutput": "[null,null,1]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s6-r2-q1-h1",
    "input": "[\"FreqStack\",\"push\",\"push\",\"pop\",\"pop\"]\n[[],[2],[2],[],[]]",
    "expectedOutput": "[null,null,null,2,2]"
   },
   {
    "id": "acc-sse-s6-r2-q1-h2",
    "input": "[\"FreqStack\",\"push\",\"push\",\"push\",\"pop\",\"pop\",\"pop\"]\n[[],[1],[2],[3],[],[],[]]",
    "expectedOutput": "[null,null,null,null,3,2,1]"
   },
   {
    "id": "acc-sse-s6-r2-q1-h3",
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
 "acc-sse-s7-r2-q1": {
  "id": "acc-sse-s7-r2-q1",
  "title": "Time-Versioned Key-Value Store",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Binary Search / Design",
  "tags": [
   "Accenture Round 2",
   "Design",
   "Binary Search",
   "Hash Table",
   "Set 7"
  ],
  "paragraphs": [
   "set(key, value, timestamp) stores versions with increasing timestamps; get(key, timestamp) returns the value with the largest timestamp not exceeding the query, or an empty string. Return each call's result (null for set and the constructor).",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s7-r2-q1-v1",
    "input": "[\"TimeMap\",\"set\",\"get\",\"get\",\"set\",\"get\",\"get\"]\n[[],[\"foo\",\"bar\",1],[\"foo\",1],[\"foo\",3],[\"foo\",\"bar2\",4],[\"foo\",4],[\"foo\",5]]",
    "expectedOutput": "[null,null,\"bar\",\"bar\",null,\"bar2\",\"bar2\"]"
   },
   {
    "id": "acc-sse-s7-r2-q1-v2",
    "input": "[\"TimeMap\",\"get\"]\n[[],[\"x\",1]]",
    "expectedOutput": "[null,\"\"]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s7-r2-q1-h1",
    "input": "[\"TimeMap\",\"set\",\"get\"]\n[[],[\"a\",\"v\",10],[\"a\",5]]",
    "expectedOutput": "[null,null,\"\"]"
   },
   {
    "id": "acc-sse-s7-r2-q1-h2",
    "input": "[\"TimeMap\",\"set\",\"set\",\"get\",\"get\"]\n[[],[\"k\",\"a\",1],[\"k\",\"b\",2],[\"k\",2],[\"k\",1]]",
    "expectedOutput": "[null,null,null,\"b\",\"a\"]"
   },
   {
    "id": "acc-sse-s7-r2-q1-h3",
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
 "acc-sse-s8-r2-q1": {
  "id": "acc-sse-s8-r2-q1",
  "title": "Snapshot Array With Versioned Cells",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Binary Search / Design",
  "tags": [
   "Accenture Round 2",
   "Design",
   "Binary Search",
   "Versioning",
   "Set 8"
  ],
  "paragraphs": [
   "Implement SnapshotArray(length): set(i, v), snap() returning the snapshot id, and get(i, snap_id). Store only changed cells per version. Return each call's result (null for set and the constructor).",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s8-r2-q1-v1",
    "input": "[\"SnapshotArray\",\"set\",\"snap\",\"set\",\"get\"]\n[[3],[0,5],[],[0,6],[0,0]]",
    "expectedOutput": "[null,null,0,null,5]"
   },
   {
    "id": "acc-sse-s8-r2-q1-v2",
    "input": "[\"SnapshotArray\",\"snap\",\"snap\",\"get\"]\n[[1],[],[],[0,1]]",
    "expectedOutput": "[null,0,1,0]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s8-r2-q1-h1",
    "input": "[\"SnapshotArray\",\"set\",\"snap\",\"set\",\"snap\",\"get\",\"get\"]\n[[2],[1,9],[],[1,4],[],[1,0],[1,1]]",
    "expectedOutput": "[null,null,0,null,1,9,4]"
   },
   {
    "id": "acc-sse-s8-r2-q1-h2",
    "input": "[\"SnapshotArray\",\"snap\",\"get\"]\n[[2],[],[1,0]]",
    "expectedOutput": "[null,0,0]"
   },
   {
    "id": "acc-sse-s8-r2-q1-h3",
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
 "acc-sse-s9-r2-q1": {
  "id": "acc-sse-s9-r2-q1",
  "title": "Mutable Range Sums With Fenwick Tree",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Binary Indexed Tree",
  "tags": [
   "Accenture Round 2",
   "Design",
   "Fenwick Tree",
   "Segment Tree",
   "Set 9"
  ],
  "paragraphs": [
   "Implement NumArray(nums), update(index, val) and sumRange(left, right) both in O(log N). Return each call's result (null for update and the constructor).",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s9-r2-q1-v1",
    "input": "[\"NumArray\",\"sumRange\",\"update\",\"sumRange\"]\n[[[1,3,5]],[0,2],[1,2],[0,2]]",
    "expectedOutput": "[null,9,null,8]"
   },
   {
    "id": "acc-sse-s9-r2-q1-v2",
    "input": "[\"NumArray\",\"sumRange\"]\n[[[7]],[0,0]]",
    "expectedOutput": "[null,7]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s9-r2-q1-h1",
    "input": "[\"NumArray\",\"update\",\"sumRange\",\"sumRange\"]\n[[[1,2,3,4]],[0,10],[0,3],[1,2]]",
    "expectedOutput": "[null,null,19,5]"
   },
   {
    "id": "acc-sse-s9-r2-q1-h2",
    "input": "[\"NumArray\",\"sumRange\",\"sumRange\"]\n[[[-1,-2,-3]],[0,1],[1,2]]",
    "expectedOutput": "[null,-3,-5]"
   },
   {
    "id": "acc-sse-s9-r2-q1-h3",
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
 "acc-sse-s10-r2-q1": {
  "id": "acc-sse-s10-r2-q1",
  "title": "Min Stack With Constant-Time Minimum",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Design / Stack",
  "tags": [
   "Accenture Round 2",
   "Design",
   "Stack",
   "Set 10"
  ],
  "paragraphs": [
   "Implement push, pop, top and getMin all in O(1). Return each call's result (null for push, pop and the constructor).",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
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
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s10-r2-q1-v1",
    "input": "[\"MinStack\",\"push\",\"push\",\"push\",\"getMin\",\"pop\",\"top\",\"getMin\"]\n[[],[-2],[0],[-3],[],[],[],[]]",
    "expectedOutput": "[null,null,null,null,-3,null,0,-2]"
   },
   {
    "id": "acc-sse-s10-r2-q1-v2",
    "input": "[\"MinStack\",\"push\",\"getMin\"]\n[[],[4],[]]",
    "expectedOutput": "[null,null,4]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s10-r2-q1-h1",
    "input": "[\"MinStack\",\"push\",\"push\",\"getMin\",\"pop\",\"getMin\"]\n[[],[2],[1],[],[],[]]",
    "expectedOutput": "[null,null,null,1,null,2]"
   },
   {
    "id": "acc-sse-s10-r2-q1-h2",
    "input": "[\"MinStack\",\"push\",\"push\",\"pop\",\"top\"]\n[[],[3],[9],[],[]]",
    "expectedOutput": "[null,null,null,null,3]"
   },
   {
    "id": "acc-sse-s10-r2-q1-h3",
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
 "acc-sse-s1-r3-q1": {
  "id": "acc-sse-s1-r3-q1",
  "title": "Microservices Decomposition for a Client Migration",
  "difficulty": "Hard",
  "company": "Accenture",
  "category": "Technical Deep Dive: Concepts, DBMS and Project",
  "tags": [
   "Accenture Round 3",
   "Set 1"
  ],
  "paragraphs": [
   "Accenture technical interview: CS fundamentals, databases, OOP and your project.",
   "Topic: Microservices Decomposition for a Client Migration. Focus areas: Bounded contexts, data ownership, strangler pattern.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clarity of fundamentals, correct terminology and the ability to connect concepts to a real project."
   }
  ],
  "constraints": [
   "Define terms precisely and give a concrete example.",
   "State trade-offs and when you would choose each option.",
   "Link the concept to something you have actually built or studied."
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
 "acc-sse-s2-r3-q1": {
  "id": "acc-sse-s2-r3-q1",
  "title": "Database Sharding and Replication for a Client App",
  "difficulty": "Hard",
  "company": "Accenture",
  "category": "Technical Deep Dive: Concepts, DBMS and Project",
  "tags": [
   "Accenture Round 3",
   "Set 2"
  ],
  "paragraphs": [
   "Accenture technical interview: CS fundamentals, databases, OOP and your project.",
   "Topic: Database Sharding and Replication for a Client App. Focus areas: Shard keys, read replicas, failover, consistency.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clarity of fundamentals, correct terminology and the ability to connect concepts to a real project."
   }
  ],
  "constraints": [
   "Define terms precisely and give a concrete example.",
   "State trade-offs and when you would choose each option.",
   "Link the concept to something you have actually built or studied."
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
 "acc-sse-s3-r3-q1": {
  "id": "acc-sse-s3-r3-q1",
  "title": "Cloud Migration Strategy",
  "difficulty": "Hard",
  "company": "Accenture",
  "category": "Technical Deep Dive: Concepts, DBMS and Project",
  "tags": [
   "Accenture Round 3",
   "Set 3"
  ],
  "paragraphs": [
   "Accenture technical interview: CS fundamentals, databases, OOP and your project.",
   "Topic: Cloud Migration Strategy. Focus areas: Lift-and-shift vs re-platform vs re-architect, cost and risk.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clarity of fundamentals, correct terminology and the ability to connect concepts to a real project."
   }
  ],
  "constraints": [
   "Define terms precisely and give a concrete example.",
   "State trade-offs and when you would choose each option.",
   "Link the concept to something you have actually built or studied."
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
 "acc-sse-s4-r3-q1": {
  "id": "acc-sse-s4-r3-q1",
  "title": "API Gateway, AuthN and AuthZ Design",
  "difficulty": "Hard",
  "company": "Accenture",
  "category": "Technical Deep Dive: Concepts, DBMS and Project",
  "tags": [
   "Accenture Round 3",
   "Set 4"
  ],
  "paragraphs": [
   "Accenture technical interview: CS fundamentals, databases, OOP and your project.",
   "Topic: API Gateway, AuthN and AuthZ Design. Focus areas: OAuth2, JWT, rate limits, zero-trust basics.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clarity of fundamentals, correct terminology and the ability to connect concepts to a real project."
   }
  ],
  "constraints": [
   "Define terms precisely and give a concrete example.",
   "State trade-offs and when you would choose each option.",
   "Link the concept to something you have actually built or studied."
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
 "acc-sse-s5-r3-q1": {
  "id": "acc-sse-s5-r3-q1",
  "title": "Event-Driven Architecture With Queues",
  "difficulty": "Hard",
  "company": "Accenture",
  "category": "Technical Deep Dive: Concepts, DBMS and Project",
  "tags": [
   "Accenture Round 3",
   "Set 5"
  ],
  "paragraphs": [
   "Accenture technical interview: CS fundamentals, databases, OOP and your project.",
   "Topic: Event-Driven Architecture With Queues. Focus areas: Kafka/SQS, ordering, retries, dead-letter queues.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clarity of fundamentals, correct terminology and the ability to connect concepts to a real project."
   }
  ],
  "constraints": [
   "Define terms precisely and give a concrete example.",
   "State trade-offs and when you would choose each option.",
   "Link the concept to something you have actually built or studied."
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
 "acc-sse-s6-r3-q1": {
  "id": "acc-sse-s6-r3-q1",
  "title": "Investigating a Performance Bottleneck",
  "difficulty": "Hard",
  "company": "Accenture",
  "category": "Technical Deep Dive: Concepts, DBMS and Project",
  "tags": [
   "Accenture Round 3",
   "Set 6"
  ],
  "paragraphs": [
   "Accenture technical interview: CS fundamentals, databases, OOP and your project.",
   "Topic: Investigating a Performance Bottleneck. Focus areas: Profiling, metrics, DB vs app vs network, fixes.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clarity of fundamentals, correct terminology and the ability to connect concepts to a real project."
   }
  ],
  "constraints": [
   "Define terms precisely and give a concrete example.",
   "State trade-offs and when you would choose each option.",
   "Link the concept to something you have actually built or studied."
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
 "acc-sse-s7-r3-q1": {
  "id": "acc-sse-s7-r3-q1",
  "title": "High Availability and Disaster Recovery",
  "difficulty": "Hard",
  "company": "Accenture",
  "category": "Technical Deep Dive: Concepts, DBMS and Project",
  "tags": [
   "Accenture Round 3",
   "Set 7"
  ],
  "paragraphs": [
   "Accenture technical interview: CS fundamentals, databases, OOP and your project.",
   "Topic: High Availability and Disaster Recovery. Focus areas: RTO/RPO, multi-AZ, backups, failover drills.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clarity of fundamentals, correct terminology and the ability to connect concepts to a real project."
   }
  ],
  "constraints": [
   "Define terms precisely and give a concrete example.",
   "State trade-offs and when you would choose each option.",
   "Link the concept to something you have actually built or studied."
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
 "acc-sse-s8-r3-q1": {
  "id": "acc-sse-s8-r3-q1",
  "title": "Legacy Modernization Plan",
  "difficulty": "Hard",
  "company": "Accenture",
  "category": "Technical Deep Dive: Concepts, DBMS and Project",
  "tags": [
   "Accenture Round 3",
   "Set 8"
  ],
  "paragraphs": [
   "Accenture technical interview: CS fundamentals, databases, OOP and your project.",
   "Topic: Legacy Modernization Plan. Focus areas: Incremental rewrite, anti-corruption layer, test safety net.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clarity of fundamentals, correct terminology and the ability to connect concepts to a real project."
   }
  ],
  "constraints": [
   "Define terms precisely and give a concrete example.",
   "State trade-offs and when you would choose each option.",
   "Link the concept to something you have actually built or studied."
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
 "acc-sse-s9-r3-q1": {
  "id": "acc-sse-s9-r3-q1",
  "title": "Observability and Logging Design",
  "difficulty": "Hard",
  "company": "Accenture",
  "category": "Technical Deep Dive: Concepts, DBMS and Project",
  "tags": [
   "Accenture Round 3",
   "Set 9"
  ],
  "paragraphs": [
   "Accenture technical interview: CS fundamentals, databases, OOP and your project.",
   "Topic: Observability and Logging Design. Focus areas: Structured logs, tracing, SLIs, alerting.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clarity of fundamentals, correct terminology and the ability to connect concepts to a real project."
   }
  ],
  "constraints": [
   "Define terms precisely and give a concrete example.",
   "State trade-offs and when you would choose each option.",
   "Link the concept to something you have actually built or studied."
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
 "acc-sse-s10-r3-q1": {
  "id": "acc-sse-s10-r3-q1",
  "title": "Estimating and De-Risking a Client Delivery",
  "difficulty": "Hard",
  "company": "Accenture",
  "category": "Technical Deep Dive: Concepts, DBMS and Project",
  "tags": [
   "Accenture Round 3",
   "Set 10"
  ],
  "paragraphs": [
   "Accenture technical interview: CS fundamentals, databases, OOP and your project.",
   "Topic: Estimating and De-Risking a Client Delivery. Focus areas: Estimation, dependencies, risk register, communication.",
   "Structure your answer: concept, concrete example, trade-offs, and how you would apply it on a real project."
  ],
  "examples": [
   {
    "input": "Technical discussion",
    "output": "Clear explanation, example, trade-offs",
    "explanation": "Evaluated on clarity of fundamentals, correct terminology and the ability to connect concepts to a real project."
   }
  ],
  "constraints": [
   "Define terms precisely and give a concrete example.",
   "State trade-offs and when you would choose each option.",
   "Link the concept to something you have actually built or studied."
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
 "acc-sse-s1-r4-q1": {
  "id": "acc-sse-s1-r4-q1",
  "title": "Tell Me About Yourself and Why Accenture",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "HR and Communication",
  "tags": [
   "Accenture",
   "HR and Communication",
   "Communication / Motivation",
   "Set 1"
  ],
  "paragraphs": [
   "Accenture HR and delivery-lead round: communication, adaptability, client focus, teamwork and integrity.",
   "Scenario: You are a Senior Software Engineer guiding a small team on a client account. You are asked to introduce yourself and explain why you want to join Accenture and this role.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Communication / Motivation",
    "explanation": "Use concrete first-person examples and a calm, structured answer: situation, action, result, learning."
   }
  ],
  "constraints": [
   "Be specific about your own actions.",
   "Show adaptability and a client-first attitude.",
   "Be honest and concise."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: HR and Communication\n// Focus: Communication / Motivation\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: HR and Communication\n// Focus: Communication / Motivation\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: HR and Communication\n# Focus: Communication / Motivation\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: HR and Communication\n// Focus: Communication / Motivation\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-sse-s2-r4-q1": {
  "id": "acc-sse-s2-r4-q1",
  "title": "Relocation and Shift Flexibility",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "HR and Communication",
  "tags": [
   "Accenture",
   "HR and Communication",
   "Adaptability",
   "Set 2"
  ],
  "paragraphs": [
   "Accenture HR and delivery-lead round: communication, adaptability, client focus, teamwork and integrity.",
   "Scenario: You are a Senior Software Engineer guiding a small team on a client account. You are told the project may require relocation to another city and rotating shifts, and you have personal commitments.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Adaptability",
    "explanation": "Use concrete first-person examples and a calm, structured answer: situation, action, result, learning."
   }
  ],
  "constraints": [
   "Be specific about your own actions.",
   "Show adaptability and a client-first attitude.",
   "Be honest and concise."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: HR and Communication\n// Focus: Adaptability\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: HR and Communication\n// Focus: Adaptability\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: HR and Communication\n# Focus: Adaptability\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: HR and Communication\n// Focus: Adaptability\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-sse-s3-r4-q1": {
  "id": "acc-sse-s3-r4-q1",
  "title": "Handling a Difficult Teammate",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "HR and Communication",
  "tags": [
   "Accenture",
   "HR and Communication",
   "Teamwork",
   "Set 3"
  ],
  "paragraphs": [
   "Accenture HR and delivery-lead round: communication, adaptability, client focus, teamwork and integrity.",
   "Scenario: You are a Senior Software Engineer guiding a small team on a client account. A teammate repeatedly misses handoffs and the rest of the team is getting frustrated.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Teamwork",
    "explanation": "Use concrete first-person examples and a calm, structured answer: situation, action, result, learning."
   }
  ],
  "constraints": [
   "Be specific about your own actions.",
   "Show adaptability and a client-first attitude.",
   "Be honest and concise."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: HR and Communication\n// Focus: Teamwork\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: HR and Communication\n// Focus: Teamwork\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: HR and Communication\n# Focus: Teamwork\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: HR and Communication\n// Focus: Teamwork\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-sse-s4-r4-q1": {
  "id": "acc-sse-s4-r4-q1",
  "title": "Client Deadline Pressure",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "HR and Communication",
  "tags": [
   "Accenture",
   "HR and Communication",
   "Client Focus / Ownership",
   "Set 4"
  ],
  "paragraphs": [
   "Accenture HR and delivery-lead round: communication, adaptability, client focus, teamwork and integrity.",
   "Scenario: You are a Senior Software Engineer guiding a small team on a client account. A client moves a delivery date forward by a week with no extra resources.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Client Focus / Ownership",
    "explanation": "Use concrete first-person examples and a calm, structured answer: situation, action, result, learning."
   }
  ],
  "constraints": [
   "Be specific about your own actions.",
   "Show adaptability and a client-first attitude.",
   "Be honest and concise."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: HR and Communication\n// Focus: Client Focus / Ownership\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: HR and Communication\n// Focus: Client Focus / Ownership\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: HR and Communication\n# Focus: Client Focus / Ownership\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: HR and Communication\n// Focus: Client Focus / Ownership\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-sse-s5-r4-q1": {
  "id": "acc-sse-s5-r4-q1",
  "title": "Learning a New Technology Quickly",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "HR and Communication",
  "tags": [
   "Accenture",
   "HR and Communication",
   "Learning Agility",
   "Set 5"
  ],
  "paragraphs": [
   "Accenture HR and delivery-lead round: communication, adaptability, client focus, teamwork and integrity.",
   "Scenario: You are a Senior Software Engineer guiding a small team on a client account. You are assigned to a project in a technology you have never used, starting Monday.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Learning Agility",
    "explanation": "Use concrete first-person examples and a calm, structured answer: situation, action, result, learning."
   }
  ],
  "constraints": [
   "Be specific about your own actions.",
   "Show adaptability and a client-first attitude.",
   "Be honest and concise."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: HR and Communication\n// Focus: Learning Agility\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: HR and Communication\n// Focus: Learning Agility\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: HR and Communication\n# Focus: Learning Agility\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: HR and Communication\n// Focus: Learning Agility\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-sse-s6-r4-q1": {
  "id": "acc-sse-s6-r4-q1",
  "title": "Strengths and Weaknesses",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "HR and Communication",
  "tags": [
   "Accenture",
   "HR and Communication",
   "Self-Awareness",
   "Set 6"
  ],
  "paragraphs": [
   "Accenture HR and delivery-lead round: communication, adaptability, client focus, teamwork and integrity.",
   "Scenario: You are a Senior Software Engineer guiding a small team on a client account. You are asked for your real strengths and weaknesses and examples of each.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Self-Awareness",
    "explanation": "Use concrete first-person examples and a calm, structured answer: situation, action, result, learning."
   }
  ],
  "constraints": [
   "Be specific about your own actions.",
   "Show adaptability and a client-first attitude.",
   "Be honest and concise."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: HR and Communication\n// Focus: Self-Awareness\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: HR and Communication\n// Focus: Self-Awareness\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: HR and Communication\n# Focus: Self-Awareness\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: HR and Communication\n// Focus: Self-Awareness\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-sse-s7-r4-q1": {
  "id": "acc-sse-s7-r4-q1",
  "title": "Where Do You See Yourself in Five Years",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "HR and Communication",
  "tags": [
   "Accenture",
   "HR and Communication",
   "Career Goals",
   "Set 7"
  ],
  "paragraphs": [
   "Accenture HR and delivery-lead round: communication, adaptability, client focus, teamwork and integrity.",
   "Scenario: You are a Senior Software Engineer guiding a small team on a client account. You are asked about your five-year plan and how this role fits it.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Career Goals",
    "explanation": "Use concrete first-person examples and a calm, structured answer: situation, action, result, learning."
   }
  ],
  "constraints": [
   "Be specific about your own actions.",
   "Show adaptability and a client-first attitude.",
   "Be honest and concise."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: HR and Communication\n// Focus: Career Goals\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: HR and Communication\n// Focus: Career Goals\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: HR and Communication\n# Focus: Career Goals\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: HR and Communication\n// Focus: Career Goals\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-sse-s8-r4-q1": {
  "id": "acc-sse-s8-r4-q1",
  "title": "Handling a Failure",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "HR and Communication",
  "tags": [
   "Accenture",
   "HR and Communication",
   "Accountability",
   "Set 8"
  ],
  "paragraphs": [
   "Accenture HR and delivery-lead round: communication, adaptability, client focus, teamwork and integrity.",
   "Scenario: You are a Senior Software Engineer guiding a small team on a client account. Describe a time a piece of your work failed or was rejected and what you did next.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Accountability",
    "explanation": "Use concrete first-person examples and a calm, structured answer: situation, action, result, learning."
   }
  ],
  "constraints": [
   "Be specific about your own actions.",
   "Show adaptability and a client-first attitude.",
   "Be honest and concise."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: HR and Communication\n// Focus: Accountability\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: HR and Communication\n// Focus: Accountability\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: HR and Communication\n# Focus: Accountability\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: HR and Communication\n// Focus: Accountability\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-sse-s9-r4-q1": {
  "id": "acc-sse-s9-r4-q1",
  "title": "Unclear Client Requirements",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "HR and Communication",
  "tags": [
   "Accenture",
   "HR and Communication",
   "Ambiguity / Communication",
   "Set 9"
  ],
  "paragraphs": [
   "Accenture HR and delivery-lead round: communication, adaptability, client focus, teamwork and integrity.",
   "Scenario: You are a Senior Software Engineer guiding a small team on a client account. The client's requirements are vague and keep changing, and the team is unsure what to build.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Ambiguity / Communication",
    "explanation": "Use concrete first-person examples and a calm, structured answer: situation, action, result, learning."
   }
  ],
  "constraints": [
   "Be specific about your own actions.",
   "Show adaptability and a client-first attitude.",
   "Be honest and concise."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: HR and Communication\n// Focus: Ambiguity / Communication\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: HR and Communication\n// Focus: Ambiguity / Communication\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: HR and Communication\n# Focus: Ambiguity / Communication\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: HR and Communication\n// Focus: Ambiguity / Communication\n// Answer in structured notes: situation, your actions, result, learning.\n"
  },
  "optimalComplexity": {
   "time": "N/A",
   "space": "N/A"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-sse-s10-r4-q1": {
  "id": "acc-sse-s10-r4-q1",
  "title": "Confidentiality and Ethics",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "HR and Communication",
  "tags": [
   "Accenture",
   "HR and Communication",
   "Integrity",
   "Set 10"
  ],
  "paragraphs": [
   "Accenture HR and delivery-lead round: communication, adaptability, client focus, teamwork and integrity.",
   "Scenario: You are a Senior Software Engineer guiding a small team on a client account. You notice a colleague sharing client data over a personal channel to meet a deadline.",
   "Explain what you would do, why, and how you would communicate it."
  ],
  "examples": [
   {
    "input": "Evaluation focus",
    "output": "Integrity",
    "explanation": "Use concrete first-person examples and a calm, structured answer: situation, action, result, learning."
   }
  ],
  "constraints": [
   "Be specific about your own actions.",
   "Show adaptability and a client-first attitude.",
   "Be honest and concise."
  ],
  "visibleTestCases": [],
  "hiddenTestCases": [],
  "starterTemplates": {
   "behavioral": "// Round 4: HR and Communication\n// Focus: Integrity\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "javascript": "// Round 4: HR and Communication\n// Focus: Integrity\n// Answer in structured notes: situation, your actions, result, learning.\n",
   "python": "# Round 4: HR and Communication\n# Focus: Integrity\n# Answer in structured notes: situation, your actions, result, learning.\n",
   "cpp": "// Round 4: HR and Communication\n// Focus: Integrity\n// Answer in structured notes: situation, your actions, result, learning.\n"
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
