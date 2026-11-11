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
  "title": "Count Pairs With a Fixed Difference",
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
   "Return the number of index pairs (i < j) whose values differ by exactly k."
  ],
  "examples": [
   {
    "input": "nums = [1,2,2,1], k = 1",
    "output": "4"
   },
   {
    "input": "nums = [1,3], k = 3",
    "output": "0"
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
    "input": "[1,2,2,1]\n1",
    "expectedOutput": "4"
   },
   {
    "id": "acc-ase-s10-r1-q2-v2",
    "input": "[1,3]\n3",
    "expectedOutput": "0"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-ase-s10-r1-q2-h1",
    "input": "[3,2,1,5,4]\n2",
    "expectedOutput": "3"
   },
   {
    "id": "acc-ase-s10-r1-q2-h2",
    "input": "[1,1,1]\n0",
    "expectedOutput": "3"
   },
   {
    "id": "acc-ase-s10-r1-q2-h3",
    "input": "[5,5]\n1",
    "expectedOutput": "0"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @param {number} k\n * @return {number}\n */\nfunction countPairsWithDiff(nums, k) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def countPairsWithDiff(self, nums: List[int], k: int) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int countPairsWithDiff(vector<int>& nums, int k) {\n        // Write your solution here\n    }\n};\n"
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
  "title": "Reverse a Customer Number",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "Math",
  "tags": [
   "Accenture Round 2",
   "Math",
   "Set 1"
  ],
  "paragraphs": [
   "Reverse the digits of an integer, keeping its sign. Return 0 if the result leaves the 32-bit signed range.",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
  ],
  "examples": [
   {
    "input": "x = 123",
    "output": "321"
   },
   {
    "input": "x = -120",
    "output": "-21"
   }
  ],
  "constraints": [
   "Target O(log N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-ase-s1-r2-q1-v1",
    "input": "123",
    "expectedOutput": "321"
   },
   {
    "id": "acc-ase-s1-r2-q1-v2",
    "input": "-120",
    "expectedOutput": "-21"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-ase-s1-r2-q1-h1",
    "input": "0",
    "expectedOutput": "0"
   },
   {
    "id": "acc-ase-s1-r2-q1-h2",
    "input": "1534236469",
    "expectedOutput": "0"
   },
   {
    "id": "acc-ase-s1-r2-q1-h3",
    "input": "907",
    "expectedOutput": "709"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number} x\n * @return {number}\n */\nfunction reverseInteger(x) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def reverseInteger(self, x: int) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int reverseInteger(int x) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(log N)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-ase-s2-r2-q1": {
  "id": "acc-ase-s2-r2-q1",
  "title": "Palindromic Account Number",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "Math",
  "tags": [
   "Accenture Round 2",
   "Math",
   "Set 2"
  ],
  "paragraphs": [
   "Return true if the integer reads the same forwards and backwards (negative numbers are not palindromes).",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
  ],
  "examples": [
   {
    "input": "x = 121",
    "output": "true"
   },
   {
    "input": "x = -121",
    "output": "false"
   }
  ],
  "constraints": [
   "Target O(log N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-ase-s2-r2-q1-v1",
    "input": "121",
    "expectedOutput": "true"
   },
   {
    "id": "acc-ase-s2-r2-q1-v2",
    "input": "-121",
    "expectedOutput": "false"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-ase-s2-r2-q1-h1",
    "input": "10",
    "expectedOutput": "false"
   },
   {
    "id": "acc-ase-s2-r2-q1-h2",
    "input": "0",
    "expectedOutput": "true"
   },
   {
    "id": "acc-ase-s2-r2-q1-h3",
    "input": "12321",
    "expectedOutput": "true"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number} x\n * @return {boolean}\n */\nfunction isPalindromeNumber(x) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def isPalindromeNumber(self, x: int) -> bool:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    bool isPalindromeNumber(int x) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(log N)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-ase-s3-r2-q1": {
  "id": "acc-ase-s3-r2-q1",
  "title": "Power of Two Capacity Check",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "Bit Manipulation",
  "tags": [
   "Accenture Round 2",
   "Bit Manipulation",
   "Set 3"
  ],
  "paragraphs": [
   "Return true if n is a positive power of two. Explain why n & (n - 1) works.",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
  ],
  "examples": [
   {
    "input": "n = 1",
    "output": "true"
   },
   {
    "input": "n = 16",
    "output": "true"
   }
  ],
  "constraints": [
   "Target O(1) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-ase-s3-r2-q1-v1",
    "input": "1",
    "expectedOutput": "true"
   },
   {
    "id": "acc-ase-s3-r2-q1-v2",
    "input": "16",
    "expectedOutput": "true"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-ase-s3-r2-q1-h1",
    "input": "3",
    "expectedOutput": "false"
   },
   {
    "id": "acc-ase-s3-r2-q1-h2",
    "input": "0",
    "expectedOutput": "false"
   },
   {
    "id": "acc-ase-s3-r2-q1-h3",
    "input": "1024",
    "expectedOutput": "true"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number} n\n * @return {boolean}\n */\nfunction isPowerOfTwo(n) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def isPowerOfTwo(self, n: int) -> bool:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    bool isPowerOfTwo(int n) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(1)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-ase-s4-r2-q1": {
  "id": "acc-ase-s4-r2-q1",
  "title": "Length of the Last Word",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "String",
  "tags": [
   "Accenture Round 2",
   "String",
   "Set 4"
  ],
  "paragraphs": [
   "Return the length of the last word in a string of letters and spaces.",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
  ],
  "examples": [
   {
    "input": "s = \"Hello World\"",
    "output": "5"
   },
   {
    "input": "s = \"   fly me   to   the moon  \"",
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
    "id": "acc-ase-s4-r2-q1-v1",
    "input": "\"Hello World\"",
    "expectedOutput": "5"
   },
   {
    "id": "acc-ase-s4-r2-q1-v2",
    "input": "\"   fly me   to   the moon  \"",
    "expectedOutput": "4"
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
    "input": "\"\"",
    "expectedOutput": "0"
   },
   {
    "id": "acc-ase-s4-r2-q1-h3",
    "input": "\"luffy is still joyboy\"",
    "expectedOutput": "6"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} s\n * @return {number}\n */\nfunction lengthOfLastWord(s) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def lengthOfLastWord(self, s: str) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int lengthOfLastWord(string s) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-ase-s5-r2-q1": {
  "id": "acc-ase-s5-r2-q1",
  "title": "Add Two Binary Strings",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "String",
  "tags": [
   "Accenture Round 2",
   "String",
   "Set 5"
  ],
  "paragraphs": [
   "Return the sum of two binary strings as a binary string.",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
  ],
  "examples": [
   {
    "input": "a = \"11\", b = \"1\"",
    "output": "\"100\""
   },
   {
    "input": "a = \"1010\", b = \"1011\"",
    "output": "\"10101\""
   }
  ],
  "constraints": [
   "Target O(N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-ase-s5-r2-q1-v1",
    "input": "\"11\"\n\"1\"",
    "expectedOutput": "\"100\""
   },
   {
    "id": "acc-ase-s5-r2-q1-v2",
    "input": "\"1010\"\n\"1011\"",
    "expectedOutput": "\"10101\""
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-ase-s5-r2-q1-h1",
    "input": "\"0\"\n\"0\"",
    "expectedOutput": "\"0\""
   },
   {
    "id": "acc-ase-s5-r2-q1-h2",
    "input": "\"1111\"\n\"1111\"",
    "expectedOutput": "\"11110\""
   },
   {
    "id": "acc-ase-s5-r2-q1-h3",
    "input": "\"100\"\n\"110010\"",
    "expectedOutput": "\"110110\""
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} a\n * @param {string} b\n * @return {string}\n */\nfunction addBinary(a, b) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def addBinary(self, a: str, b: str) -> str:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    string addBinary(string a, string b) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-ase-s6-r2-q1": {
  "id": "acc-ase-s6-r2-q1",
  "title": "Pangram Check for a Sentence",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "String",
  "tags": [
   "Accenture Round 2",
   "String",
   "Set 6"
  ],
  "paragraphs": [
   "Return true if the sentence uses every letter of the English alphabet at least once (case-insensitive).",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
  ],
  "examples": [
   {
    "input": "s = \"The quick brown fox jumps over the lazy dog\"",
    "output": "true"
   },
   {
    "input": "s = \"hello world\"",
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
    "id": "acc-ase-s6-r2-q1-v1",
    "input": "\"The quick brown fox jumps over the lazy dog\"",
    "expectedOutput": "true"
   },
   {
    "id": "acc-ase-s6-r2-q1-v2",
    "input": "\"hello world\"",
    "expectedOutput": "false"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-ase-s6-r2-q1-h1",
    "input": "\"\"",
    "expectedOutput": "false"
   },
   {
    "id": "acc-ase-s6-r2-q1-h2",
    "input": "\"abcdefghijklmnopqrstuvwxyz\"",
    "expectedOutput": "true"
   },
   {
    "id": "acc-ase-s6-r2-q1-h3",
    "input": "\"Pack my box with five dozen liquor jugs\"",
    "expectedOutput": "true"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} s\n * @return {boolean}\n */\nfunction isPangram(s) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def isPangram(self, s: str) -> bool:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    bool isPangram(string s) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-ase-s7-r2-q1": {
  "id": "acc-ase-s7-r2-q1",
  "title": "FizzBuzz Report",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "Math",
  "tags": [
   "Accenture Round 2",
   "Math",
   "Set 7"
  ],
  "paragraphs": [
   "For 1..n return 'Fizz' for multiples of 3, 'Buzz' for multiples of 5, 'FizzBuzz' for both, otherwise the number as a string.",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
  ],
  "examples": [
   {
    "input": "n = 3",
    "output": "[\"1\",\"2\",\"Fizz\"]"
   },
   {
    "input": "n = 5",
    "output": "[\"1\",\"2\",\"Fizz\",\"4\",\"Buzz\"]"
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
    "input": "3",
    "expectedOutput": "[\"1\",\"2\",\"Fizz\"]"
   },
   {
    "id": "acc-ase-s7-r2-q1-v2",
    "input": "5",
    "expectedOutput": "[\"1\",\"2\",\"Fizz\",\"4\",\"Buzz\"]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-ase-s7-r2-q1-h1",
    "input": "15",
    "expectedOutput": "[\"1\",\"2\",\"Fizz\",\"4\",\"Buzz\",\"Fizz\",\"7\",\"8\",\"Fizz\",\"Buzz\",\"11\",\"Fizz\",\"13\",\"14\",\"FizzBuzz\"]"
   },
   {
    "id": "acc-ase-s7-r2-q1-h2",
    "input": "1",
    "expectedOutput": "[\"1\"]"
   },
   {
    "id": "acc-ase-s7-r2-q1-h3",
    "input": "10",
    "expectedOutput": "[\"1\",\"2\",\"Fizz\",\"4\",\"Buzz\",\"Fizz\",\"7\",\"8\",\"Fizz\",\"Buzz\"]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number} n\n * @return {string[]}\n */\nfunction fizzBuzz(n) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def fizzBuzz(self, n: int) -> List[str]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<string> fizzBuzz(int n) {\n        // Write your solution here\n    }\n};\n"
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
  "title": "Reverse the Vowels",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "String",
  "tags": [
   "Accenture Round 2",
   "String",
   "Set 8"
  ],
  "paragraphs": [
   "Reverse only the vowels of the string (a, e, i, o, u in either case), leaving other characters in place.",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
  ],
  "examples": [
   {
    "input": "s = \"hello\"",
    "output": "\"holle\""
   },
   {
    "input": "s = \"leetcode\"",
    "output": "\"leotcede\""
   }
  ],
  "constraints": [
   "Target O(N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-ase-s8-r2-q1-v1",
    "input": "\"hello\"",
    "expectedOutput": "\"holle\""
   },
   {
    "id": "acc-ase-s8-r2-q1-v2",
    "input": "\"leetcode\"",
    "expectedOutput": "\"leotcede\""
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-ase-s8-r2-q1-h1",
    "input": "\"xyz\"",
    "expectedOutput": "\"xyz\""
   },
   {
    "id": "acc-ase-s8-r2-q1-h2",
    "input": "\"aA\"",
    "expectedOutput": "\"Aa\""
   },
   {
    "id": "acc-ase-s8-r2-q1-h3",
    "input": "\"Accenture\"",
    "expectedOutput": "\"eccunterA\""
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} s\n * @return {string}\n */\nfunction reverseVowels(s) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def reverseVowels(self, s: str) -> str:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    string reverseVowels(string s) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-ase-s9-r2-q1": {
  "id": "acc-ase-s9-r2-q1",
  "title": "Count Leap Years in a Range",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "Math",
  "tags": [
   "Accenture Round 2",
   "Math",
   "Set 9"
  ],
  "paragraphs": [
   "Return how many leap years lie between two years, inclusive.",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
  ],
  "examples": [
   {
    "input": "start = 2000, end = 2020",
    "output": "6"
   },
   {
    "input": "start = 1900, end = 1900",
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
    "id": "acc-ase-s9-r2-q1-v1",
    "input": "2000\n2020",
    "expectedOutput": "6"
   },
   {
    "id": "acc-ase-s9-r2-q1-v2",
    "input": "1900\n1900",
    "expectedOutput": "0"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-ase-s9-r2-q1-h1",
    "input": "1996\n2004",
    "expectedOutput": "3"
   },
   {
    "id": "acc-ase-s9-r2-q1-h2",
    "input": "2024\n2024",
    "expectedOutput": "1"
   },
   {
    "id": "acc-ase-s9-r2-q1-h3",
    "input": "1\n100",
    "expectedOutput": "24"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number} start\n * @param {number} end\n * @return {number}\n */\nfunction countLeapYears(start, end) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def countLeapYears(self, start: int, end: int) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int countLeapYears(int start, int end) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-ase-s10-r2-q1": {
  "id": "acc-ase-s10-r2-q1",
  "title": "Perfect Square Check",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "Math",
  "tags": [
   "Accenture Round 2",
   "Math",
   "Set 10"
  ],
  "paragraphs": [
   "Return true if n is a perfect square without using a library square-root function.",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
  ],
  "examples": [
   {
    "input": "n = 16",
    "output": "true"
   },
   {
    "input": "n = 14",
    "output": "false"
   }
  ],
  "constraints": [
   "Target O(log N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-ase-s10-r2-q1-v1",
    "input": "16",
    "expectedOutput": "true"
   },
   {
    "id": "acc-ase-s10-r2-q1-v2",
    "input": "14",
    "expectedOutput": "false"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-ase-s10-r2-q1-h1",
    "input": "1",
    "expectedOutput": "true"
   },
   {
    "id": "acc-ase-s10-r2-q1-h2",
    "input": "0",
    "expectedOutput": "true"
   },
   {
    "id": "acc-ase-s10-r2-q1-h3",
    "input": "808201",
    "expectedOutput": "true"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number} n\n * @return {boolean}\n */\nfunction isPerfectSquare(n) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def isPerfectSquare(self, n: int) -> bool:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    bool isPerfectSquare(int n) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(log N)",
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
  "title": "Spreadsheet Column Title",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Math",
  "tags": [
   "Accenture Round 1",
   "Math",
   "Set 1"
  ],
  "paragraphs": [
   "Convert a positive column number to its spreadsheet title (1 -> A, 27 -> AA)."
  ],
  "examples": [
   {
    "input": "n = 1",
    "output": "\"A\""
   },
   {
    "input": "n = 28",
    "output": "\"AB\""
   }
  ],
  "constraints": [
   "Target O(log N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-adv-s1-r1-q1-v1",
    "input": "1",
    "expectedOutput": "\"A\""
   },
   {
    "id": "acc-adv-s1-r1-q1-v2",
    "input": "28",
    "expectedOutput": "\"AB\""
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s1-r1-q1-h1",
    "input": "701",
    "expectedOutput": "\"ZY\""
   },
   {
    "id": "acc-adv-s1-r1-q1-h2",
    "input": "52",
    "expectedOutput": "\"AZ\""
   },
   {
    "id": "acc-adv-s1-r1-q1-h3",
    "input": "2147483647",
    "expectedOutput": "\"FXSHRXW\""
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number} n\n * @return {string}\n */\nfunction columnTitle(n) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def columnTitle(self, n: int) -> str:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    string columnTitle(int n) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(log N)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "acc-adv-s1-r1-q2"
 },
 "acc-adv-s1-r1-q2": {
  "id": "acc-adv-s1-r1-q2",
  "title": "Spreadsheet Column Number",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Math",
  "tags": [
   "Accenture Round 1",
   "Math",
   "Set 1"
  ],
  "paragraphs": [
   "Convert a spreadsheet column title to its column number."
  ],
  "examples": [
   {
    "input": "title = \"A\"",
    "output": "1"
   },
   {
    "input": "title = \"AB\"",
    "output": "28"
   }
  ],
  "constraints": [
   "Target O(N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-adv-s1-r1-q2-v1",
    "input": "\"A\"",
    "expectedOutput": "1"
   },
   {
    "id": "acc-adv-s1-r1-q2-v2",
    "input": "\"AB\"",
    "expectedOutput": "28"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s1-r1-q2-h1",
    "input": "\"ZY\"",
    "expectedOutput": "701"
   },
   {
    "id": "acc-adv-s1-r1-q2-h2",
    "input": "\"AAA\"",
    "expectedOutput": "703"
   },
   {
    "id": "acc-adv-s1-r1-q2-h3",
    "input": "\"FXSHRXW\"",
    "expectedOutput": "2147483647"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} title\n * @return {number}\n */\nfunction columnNumber(title) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def columnNumber(self, title: str) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int columnNumber(string title) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "acc-adv-s2-r1-q1": {
  "id": "acc-adv-s2-r1-q1",
  "title": "Look-and-Say Sequence Term",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "String",
  "tags": [
   "Accenture Round 1",
   "String",
   "Set 2"
  ],
  "paragraphs": [
   "Term 1 is '1'; each next term describes the previous one by counting runs of digits. Return term n."
  ],
  "examples": [
   {
    "input": "n = 1",
    "output": "\"1\""
   },
   {
    "input": "n = 4",
    "output": "\"1211\""
   }
  ],
  "constraints": [
   "Target O(N * L) time and O(L) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-adv-s2-r1-q1-v1",
    "input": "1",
    "expectedOutput": "\"1\""
   },
   {
    "id": "acc-adv-s2-r1-q1-v2",
    "input": "4",
    "expectedOutput": "\"1211\""
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s2-r1-q1-h1",
    "input": "5",
    "expectedOutput": "\"111221\""
   },
   {
    "id": "acc-adv-s2-r1-q1-h2",
    "input": "6",
    "expectedOutput": "\"312211\""
   },
   {
    "id": "acc-adv-s2-r1-q1-h3",
    "input": "8",
    "expectedOutput": "\"1113213211\""
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number} n\n * @return {string}\n */\nfunction countAndSay(n) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def countAndSay(self, n: int) -> str:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    string countAndSay(int n) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N * L)",
   "space": "O(L)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "acc-adv-s2-r1-q2"
 },
 "acc-adv-s2-r1-q2": {
  "id": "acc-adv-s2-r1-q2",
  "title": "Multiply Two Large Numbers",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Math",
  "tags": [
   "Accenture Round 1",
   "Math",
   "Set 2"
  ],
  "paragraphs": [
   "Multiply two non-negative integers given as strings and return the product as a string, without converting them to integers."
  ],
  "examples": [
   {
    "input": "a = \"2\", b = \"3\"",
    "output": "\"6\""
   },
   {
    "input": "a = \"123\", b = \"456\"",
    "output": "\"56088\""
   }
  ],
  "constraints": [
   "Target O(M*N) time and O(M+N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-adv-s2-r1-q2-v1",
    "input": "\"2\"\n\"3\"",
    "expectedOutput": "\"6\""
   },
   {
    "id": "acc-adv-s2-r1-q2-v2",
    "input": "\"123\"\n\"456\"",
    "expectedOutput": "\"56088\""
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s2-r1-q2-h1",
    "input": "\"0\"\n\"999\"",
    "expectedOutput": "\"0\""
   },
   {
    "id": "acc-adv-s2-r1-q2-h2",
    "input": "\"99\"\n\"99\"",
    "expectedOutput": "\"9801\""
   },
   {
    "id": "acc-adv-s2-r1-q2-h3",
    "input": "\"1000000007\"\n\"1000000009\"",
    "expectedOutput": "\"1000000016000000063\""
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} a\n * @param {string} b\n * @return {string}\n */\nfunction multiplyStrings(a, b) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def multiplyStrings(self, a: str, b: str) -> str:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    string multiplyStrings(string a, string b) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(M*N)",
   "space": "O(M+N)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "acc-adv-s3-r1-q1": {
  "id": "acc-adv-s3-r1-q1",
  "title": "Zigzag Display Reading",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "String",
  "tags": [
   "Accenture Round 1",
   "String",
   "Set 3"
  ],
  "paragraphs": [
   "Write s in a zigzag over numRows rows, then read it row by row. Return the result."
  ],
  "examples": [
   {
    "input": "s = \"PAYPALISHIRING\", numRows = 3",
    "output": "\"PAHNAPLSIIGYIR\""
   },
   {
    "input": "s = \"PAYPALISHIRING\", numRows = 4",
    "output": "\"PINALSIGYAHRPI\""
   }
  ],
  "constraints": [
   "Target O(N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-adv-s3-r1-q1-v1",
    "input": "\"PAYPALISHIRING\"\n3",
    "expectedOutput": "\"PAHNAPLSIIGYIR\""
   },
   {
    "id": "acc-adv-s3-r1-q1-v2",
    "input": "\"PAYPALISHIRING\"\n4",
    "expectedOutput": "\"PINALSIGYAHRPI\""
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s3-r1-q1-h1",
    "input": "\"A\"\n1",
    "expectedOutput": "\"A\""
   },
   {
    "id": "acc-adv-s3-r1-q1-h2",
    "input": "\"AB\"\n1",
    "expectedOutput": "\"AB\""
   },
   {
    "id": "acc-adv-s3-r1-q1-h3",
    "input": "\"ABCDE\"\n2",
    "expectedOutput": "\"ACEBD\""
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} s\n * @param {number} numRows\n * @return {string}\n */\nfunction convertZigzag(s, numRows) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def convertZigzag(self, s: str, numRows: int) -> str:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    string convertZigzag(string s, int numRows) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "acc-adv-s3-r1-q2"
 },
 "acc-adv-s3-r1-q2": {
  "id": "acc-adv-s3-r1-q2",
  "title": "Parse a Numeric Field",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "String",
  "tags": [
   "Accenture Round 1",
   "String",
   "Set 3"
  ],
  "paragraphs": [
   "Implement atoi: skip leading spaces, read an optional sign and digits until a non-digit, clamp to the 32-bit signed range."
  ],
  "examples": [
   {
    "input": "s = \"42\"",
    "output": "42"
   },
   {
    "input": "s = \"   -42\"",
    "output": "-42"
   }
  ],
  "constraints": [
   "Target O(N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-adv-s3-r1-q2-v1",
    "input": "\"42\"",
    "expectedOutput": "42"
   },
   {
    "id": "acc-adv-s3-r1-q2-v2",
    "input": "\"   -42\"",
    "expectedOutput": "-42"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s3-r1-q2-h1",
    "input": "\"4193 with words\"",
    "expectedOutput": "4193"
   },
   {
    "id": "acc-adv-s3-r1-q2-h2",
    "input": "\"words and 987\"",
    "expectedOutput": "0"
   },
   {
    "id": "acc-adv-s3-r1-q2-h3",
    "input": "\"-91283472332\"",
    "expectedOutput": "-2147483648"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} s\n * @return {number}\n */\nfunction myAtoi(s) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def myAtoi(self, s: str) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int myAtoi(string s) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "acc-adv-s4-r1-q1": {
  "id": "acc-adv-s4-r1-q1",
  "title": "Integer to Roman Numeral",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Math",
  "tags": [
   "Accenture Round 1",
   "Math",
   "Set 4"
  ],
  "paragraphs": [
   "Convert an integer from 1 to 3999 to a Roman numeral."
  ],
  "examples": [
   {
    "input": "num = 3",
    "output": "\"III\""
   },
   {
    "input": "num = 58",
    "output": "\"LVIII\""
   }
  ],
  "constraints": [
   "Target O(1) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-adv-s4-r1-q1-v1",
    "input": "3",
    "expectedOutput": "\"III\""
   },
   {
    "id": "acc-adv-s4-r1-q1-v2",
    "input": "58",
    "expectedOutput": "\"LVIII\""
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s4-r1-q1-h1",
    "input": "1994",
    "expectedOutput": "\"MCMXCIV\""
   },
   {
    "id": "acc-adv-s4-r1-q1-h2",
    "input": "4",
    "expectedOutput": "\"IV\""
   },
   {
    "id": "acc-adv-s4-r1-q1-h3",
    "input": "3999",
    "expectedOutput": "\"MMMCMXCIX\""
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number} num\n * @return {string}\n */\nfunction intToRoman(num) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def intToRoman(self, num: int) -> str:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    string intToRoman(int num) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(1)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "acc-adv-s4-r1-q2"
 },
 "acc-adv-s4-r1-q2": {
  "id": "acc-adv-s4-r1-q2",
  "title": "Longest Shared Substring",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Dynamic Programming",
  "tags": [
   "Accenture Round 1",
   "Dynamic Programming",
   "Set 4"
  ],
  "paragraphs": [
   "Return the length of the longest contiguous substring common to both strings."
  ],
  "examples": [
   {
    "input": "a = \"abcdxyz\", b = \"xyzabcd\"",
    "output": "4"
   },
   {
    "input": "a = \"abc\", b = \"def\"",
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
    "id": "acc-adv-s4-r1-q2-v1",
    "input": "\"abcdxyz\"\n\"xyzabcd\"",
    "expectedOutput": "4"
   },
   {
    "id": "acc-adv-s4-r1-q2-v2",
    "input": "\"abc\"\n\"def\"",
    "expectedOutput": "0"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s4-r1-q2-h1",
    "input": "\"zxabcdezy\"\n\"yzabcdezx\"",
    "expectedOutput": "6"
   },
   {
    "id": "acc-adv-s4-r1-q2-h2",
    "input": "\"a\"\n\"a\"",
    "expectedOutput": "1"
   },
   {
    "id": "acc-adv-s4-r1-q2-h3",
    "input": "\"hello\"\n\"yellow\"",
    "expectedOutput": "4"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} a\n * @param {string} b\n * @return {number}\n */\nfunction longestCommonSubstring(a, b) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def longestCommonSubstring(self, a: str, b: str) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int longestCommonSubstring(string a, string b) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(M*N)",
   "space": "O(N)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "acc-adv-s5-r1-q1": {
  "id": "acc-adv-s5-r1-q1",
  "title": "Integer Square Root",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Binary Search",
  "tags": [
   "Accenture Round 1",
   "Binary Search",
   "Set 5"
  ],
  "paragraphs": [
   "Return floor(sqrt(n)) using binary search."
  ],
  "examples": [
   {
    "input": "x = 4",
    "output": "2"
   },
   {
    "input": "x = 8",
    "output": "2"
   }
  ],
  "constraints": [
   "Target O(log N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-adv-s5-r1-q1-v1",
    "input": "4",
    "expectedOutput": "2"
   },
   {
    "id": "acc-adv-s5-r1-q1-v2",
    "input": "8",
    "expectedOutput": "2"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s5-r1-q1-h1",
    "input": "0",
    "expectedOutput": "0"
   },
   {
    "id": "acc-adv-s5-r1-q1-h2",
    "input": "1",
    "expectedOutput": "1"
   },
   {
    "id": "acc-adv-s5-r1-q1-h3",
    "input": "2147395599",
    "expectedOutput": "46339"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number} x\n * @return {number}\n */\nfunction mySqrt(x) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def mySqrt(self, x: int) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int mySqrt(int x) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(log N)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "acc-adv-s5-r1-q2"
 },
 "acc-adv-s5-r1-q2": {
  "id": "acc-adv-s5-r1-q2",
  "title": "Nth Ugly Number",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Dynamic Programming",
  "tags": [
   "Accenture Round 1",
   "Dynamic Programming",
   "Set 5"
  ],
  "paragraphs": [
   "An ugly number has only prime factors 2, 3 and 5 (1 counts). Return the nth ugly number."
  ],
  "examples": [
   {
    "input": "n = 10",
    "output": "12"
   },
   {
    "input": "n = 1",
    "output": "1"
   }
  ],
  "constraints": [
   "Target O(N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-adv-s5-r1-q2-v1",
    "input": "10",
    "expectedOutput": "12"
   },
   {
    "id": "acc-adv-s5-r1-q2-v2",
    "input": "1",
    "expectedOutput": "1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s5-r1-q2-h1",
    "input": "15",
    "expectedOutput": "24"
   },
   {
    "id": "acc-adv-s5-r1-q2-h2",
    "input": "50",
    "expectedOutput": "243"
   },
   {
    "id": "acc-adv-s5-r1-q2-h3",
    "input": "1690",
    "expectedOutput": "2123366400"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number} n\n * @return {number}\n */\nfunction nthUglyNumber(n) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def nthUglyNumber(self, n: int) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int nthUglyNumber(int n) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(N)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "acc-adv-s6-r1-q1": {
  "id": "acc-adv-s6-r1-q1",
  "title": "Guess Score for a Code",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Hash Table",
  "tags": [
   "Accenture Round 1",
   "Hash Table",
   "Set 6"
  ],
  "paragraphs": [
   "Return '<bulls>A<cows>B' where bulls are digits right in value and place, and cows are right digits in the wrong place."
  ],
  "examples": [
   {
    "input": "secret = \"1807\", guess = \"7810\"",
    "output": "\"1A3B\""
   },
   {
    "input": "secret = \"1123\", guess = \"0111\"",
    "output": "\"1A1B\""
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
    "input": "\"1807\"\n\"7810\"",
    "expectedOutput": "\"1A3B\""
   },
   {
    "id": "acc-adv-s6-r1-q1-v2",
    "input": "\"1123\"\n\"0111\"",
    "expectedOutput": "\"1A1B\""
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s6-r1-q1-h1",
    "input": "\"1\"\n\"1\"",
    "expectedOutput": "\"1A0B\""
   },
   {
    "id": "acc-adv-s6-r1-q1-h2",
    "input": "\"1234\"\n\"4321\"",
    "expectedOutput": "\"0A4B\""
   },
   {
    "id": "acc-adv-s6-r1-q1-h3",
    "input": "\"0000\"\n\"1111\"",
    "expectedOutput": "\"0A0B\""
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} secret\n * @param {string} guess\n * @return {string}\n */\nfunction getHint(secret, guess) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def getHint(self, secret: str, guess: str) -> str:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    string getHint(string secret, string guess) {\n        // Write your solution here\n    }\n};\n"
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
  "title": "Smallest Rotation of a Code",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "String",
  "tags": [
   "Accenture Round 1",
   "String",
   "Set 6"
  ],
  "paragraphs": [
   "Return the lexicographically smallest rotation of the string."
  ],
  "examples": [
   {
    "input": "s = \"cba\"",
    "output": "\"acb\""
   },
   {
    "input": "s = \"abab\"",
    "output": "\"abab\""
   }
  ],
  "constraints": [
   "Target O(N^2) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-adv-s6-r1-q2-v1",
    "input": "\"cba\"",
    "expectedOutput": "\"acb\""
   },
   {
    "id": "acc-adv-s6-r1-q2-v2",
    "input": "\"abab\"",
    "expectedOutput": "\"abab\""
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s6-r1-q2-h1",
    "input": "\"a\"",
    "expectedOutput": "\"a\""
   },
   {
    "id": "acc-adv-s6-r1-q2-h2",
    "input": "\"dcab\"",
    "expectedOutput": "\"abdc\""
   },
   {
    "id": "acc-adv-s6-r1-q2-h3",
    "input": "\"bbaa\"",
    "expectedOutput": "\"aabb\""
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} s\n * @return {string}\n */\nfunction smallestRotation(s) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def smallestRotation(self, s: str) -> str:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    string smallestRotation(string s) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N^2)",
   "space": "O(N)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "acc-adv-s7-r1-q1": {
  "id": "acc-adv-s7-r1-q1",
  "title": "Validate an IPv4 Address",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "String",
  "tags": [
   "Accenture Round 1",
   "String",
   "Set 7"
  ],
  "paragraphs": [
   "Return true if s is a valid IPv4 address: four numbers 0-255 separated by dots, without leading zeros."
  ],
  "examples": [
   {
    "input": "s = \"192.168.1.1\"",
    "output": "true"
   },
   {
    "input": "s = \"256.1.1.1\"",
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
    "id": "acc-adv-s7-r1-q1-v1",
    "input": "\"192.168.1.1\"",
    "expectedOutput": "true"
   },
   {
    "id": "acc-adv-s7-r1-q1-v2",
    "input": "\"256.1.1.1\"",
    "expectedOutput": "false"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s7-r1-q1-h1",
    "input": "\"01.2.3.4\"",
    "expectedOutput": "false"
   },
   {
    "id": "acc-adv-s7-r1-q1-h2",
    "input": "\"1.2.3\"",
    "expectedOutput": "false"
   },
   {
    "id": "acc-adv-s7-r1-q1-h3",
    "input": "\"0.0.0.0\"",
    "expectedOutput": "true"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} s\n * @return {boolean}\n */\nfunction validIPv4(s) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def validIPv4(self, s: str) -> bool:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    bool validIPv4(string s) {\n        // Write your solution here\n    }\n};\n"
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
  "title": "Longest Run After Skipping Failures",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Sliding Window",
  "tags": [
   "Accenture Round 1",
   "Sliding Window",
   "Set 7"
  ],
  "paragraphs": [
   "Return the longest run of 1s if you may flip at most k zeros to 1."
  ],
  "examples": [
   {
    "input": "nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2",
    "output": "6"
   },
   {
    "input": "nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3",
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
    "id": "acc-adv-s7-r1-q2-v1",
    "input": "[1,1,1,0,0,0,1,1,1,1,0]\n2",
    "expectedOutput": "6"
   },
   {
    "id": "acc-adv-s7-r1-q2-v2",
    "input": "[0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1]\n3",
    "expectedOutput": "10"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s7-r1-q2-h1",
    "input": "[0,0]\n0",
    "expectedOutput": "0"
   },
   {
    "id": "acc-adv-s7-r1-q2-h2",
    "input": "[1,1]\n0",
    "expectedOutput": "2"
   },
   {
    "id": "acc-adv-s7-r1-q2-h3",
    "input": "[0,1,0]\n1",
    "expectedOutput": "2"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @param {number} k\n * @return {number}\n */\nfunction longestOnes(nums, k) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def longestOnes(self, nums: List[int], k: int) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int longestOnes(vector<int>& nums, int k) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "acc-adv-s8-r1-q1": {
  "id": "acc-adv-s8-r1-q1",
  "title": "Balanced Load Pivot",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "Prefix Sum",
  "tags": [
   "Accenture Round 1",
   "Prefix Sum",
   "Set 8"
  ],
  "paragraphs": [
   "Return the leftmost index where the sum on its left equals the sum on its right, or -1."
  ],
  "examples": [
   {
    "input": "nums = [1,7,3,6,5,6]",
    "output": "3"
   },
   {
    "input": "nums = [1,2,3]",
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
    "id": "acc-adv-s8-r1-q1-v1",
    "input": "[1,7,3,6,5,6]",
    "expectedOutput": "3"
   },
   {
    "id": "acc-adv-s8-r1-q1-v2",
    "input": "[1,2,3]",
    "expectedOutput": "-1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s8-r1-q1-h1",
    "input": "[2,1,-1]",
    "expectedOutput": "0"
   },
   {
    "id": "acc-adv-s8-r1-q1-h2",
    "input": "[0]",
    "expectedOutput": "0"
   },
   {
    "id": "acc-adv-s8-r1-q1-h3",
    "input": "[-1,-1,0,1,1,0]",
    "expectedOutput": "5"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @return {number}\n */\nfunction pivotIndex(nums) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def pivotIndex(self, nums: List[int]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int pivotIndex(vector<int>& nums) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "acc-adv-s8-r1-q2"
 },
 "acc-adv-s8-r1-q2": {
  "id": "acc-adv-s8-r1-q2",
  "title": "Even Numbers First",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "Two Pointers",
  "tags": [
   "Accenture Round 1",
   "Two Pointers",
   "Set 8"
  ],
  "paragraphs": [
   "Return the array with all even numbers first (original relative order kept), followed by the odd numbers."
  ],
  "examples": [
   {
    "input": "nums = [3,1,2,4]",
    "output": "[2,4,3,1]"
   },
   {
    "input": "nums = [0]",
    "output": "[0]"
   }
  ],
  "constraints": [
   "Target O(N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-adv-s8-r1-q2-v1",
    "input": "[3,1,2,4]",
    "expectedOutput": "[2,4,3,1]"
   },
   {
    "id": "acc-adv-s8-r1-q2-v2",
    "input": "[0]",
    "expectedOutput": "[0]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s8-r1-q2-h1",
    "input": "[1,3,5]",
    "expectedOutput": "[1,3,5]"
   },
   {
    "id": "acc-adv-s8-r1-q2-h2",
    "input": "[2,4,6]",
    "expectedOutput": "[2,4,6]"
   },
   {
    "id": "acc-adv-s8-r1-q2-h3",
    "input": "[5,2,7,8,9,4]",
    "expectedOutput": "[2,8,4,5,7,9]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @return {number[]}\n */\nfunction sortByParity(nums) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def sortByParity(self, nums: List[int]) -> List[int]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<int> sortByParity(vector<int>& nums) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(N)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "acc-adv-s9-r1-q1": {
  "id": "acc-adv-s9-r1-q1",
  "title": "Was the Log Sorted Then Rotated",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "Array",
  "tags": [
   "Accenture Round 1",
   "Array",
   "Set 9"
  ],
  "paragraphs": [
   "Return true if the array was originally non-decreasing and then rotated some number of positions (possibly zero)."
  ],
  "examples": [
   {
    "input": "nums = [3,4,5,1,2]",
    "output": "true"
   },
   {
    "input": "nums = [2,1,3,4]",
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
    "id": "acc-adv-s9-r1-q1-v1",
    "input": "[3,4,5,1,2]",
    "expectedOutput": "true"
   },
   {
    "id": "acc-adv-s9-r1-q1-v2",
    "input": "[2,1,3,4]",
    "expectedOutput": "false"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s9-r1-q1-h1",
    "input": "[1,2,3]",
    "expectedOutput": "true"
   },
   {
    "id": "acc-adv-s9-r1-q1-h2",
    "input": "[1,1,1]",
    "expectedOutput": "true"
   },
   {
    "id": "acc-adv-s9-r1-q1-h3",
    "input": "[5,1,2,3,4,0]",
    "expectedOutput": "false"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @return {boolean}\n */\nfunction isSortedRotated(nums) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def isSortedRotated(self, nums: List[int]) -> bool:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    bool isSortedRotated(vector<int>& nums) {\n        // Write your solution here\n    }\n};\n"
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
  "title": "Alternate Credits and Debits",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Array",
  "tags": [
   "Accenture Round 1",
   "Array",
   "Set 9"
  ],
  "paragraphs": [
   "Rearrange so positives and negatives alternate starting with a positive, keeping each group's order; extras go at the end."
  ],
  "examples": [
   {
    "input": "nums = [3,1,-2,-5,2,-4]",
    "output": "[3,-2,1,-5,2,-4]"
   },
   {
    "input": "nums = [1,2,3]",
    "output": "[1,2,3]"
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
    "input": "[3,1,-2,-5,2,-4]",
    "expectedOutput": "[3,-2,1,-5,2,-4]"
   },
   {
    "id": "acc-adv-s9-r1-q2-v2",
    "input": "[1,2,3]",
    "expectedOutput": "[1,2,3]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s9-r1-q2-h1",
    "input": "[-1,-2,1]",
    "expectedOutput": "[1,-1,-2]"
   },
   {
    "id": "acc-adv-s9-r1-q2-h2",
    "input": "[1,-1]",
    "expectedOutput": "[1,-1]"
   },
   {
    "id": "acc-adv-s9-r1-q2-h3",
    "input": "[5,-1,-2,-3,4]",
    "expectedOutput": "[5,-1,4,-2,-3]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @return {number[]}\n */\nfunction rearrangeAlternating(nums) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def rearrangeAlternating(self, nums: List[int]) -> List[int]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<int> rearrangeAlternating(vector<int>& nums) {\n        // Write your solution here\n    }\n};\n"
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
  "title": "Find the Duplicate and Missing Id",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Hash Table",
  "tags": [
   "Accenture Round 1",
   "Hash Table",
   "Set 10"
  ],
  "paragraphs": [
   "An array should hold 1..n once each, but one id is duplicated and another is missing. Return [duplicate, missing]."
  ],
  "examples": [
   {
    "input": "nums = [1,2,2,4]",
    "output": "[2,3]"
   },
   {
    "input": "nums = [1,1]",
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
    "id": "acc-adv-s10-r1-q1-v1",
    "input": "[1,2,2,4]",
    "expectedOutput": "[2,3]"
   },
   {
    "id": "acc-adv-s10-r1-q1-v2",
    "input": "[1,1]",
    "expectedOutput": "[1,2]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s10-r1-q1-h1",
    "input": "[3,2,3,4,6,5]",
    "expectedOutput": "[3,1]"
   },
   {
    "id": "acc-adv-s10-r1-q1-h2",
    "input": "[2,2]",
    "expectedOutput": "[2,1]"
   },
   {
    "id": "acc-adv-s10-r1-q1-h3",
    "input": "[1,5,3,2,2,7,6,4,8,9]",
    "expectedOutput": "[2,10]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @return {number[]}\n */\nfunction findErrorNums(nums) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def findErrorNums(self, nums: List[int]) -> List[int]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<int> findErrorNums(vector<int>& nums) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "acc-adv-s10-r1-q2"
 },
 "acc-adv-s10-r1-q2": {
  "id": "acc-adv-s10-r1-q2",
  "title": "Total Alert Active Time",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Intervals",
  "tags": [
   "Accenture Round 1",
   "Intervals",
   "Set 10"
  ],
  "paragraphs": [
   "Each alert at time t[i] stays active for d seconds, and a new alert restarts the timer. Return the total active seconds."
  ],
  "examples": [
   {
    "input": "timeSeries = [1,4], duration = 2",
    "output": "4"
   },
   {
    "input": "timeSeries = [1,2], duration = 2",
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
    "id": "acc-adv-s10-r1-q2-v1",
    "input": "[1,4]\n2",
    "expectedOutput": "4"
   },
   {
    "id": "acc-adv-s10-r1-q2-v2",
    "input": "[1,2]\n2",
    "expectedOutput": "3"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s10-r1-q2-h1",
    "input": "[1]\n5",
    "expectedOutput": "5"
   },
   {
    "id": "acc-adv-s10-r1-q2-h2",
    "input": "[1,2,3,4,5]\n1",
    "expectedOutput": "5"
   },
   {
    "id": "acc-adv-s10-r1-q2-h3",
    "input": "[0,10,20]\n5",
    "expectedOutput": "15"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} timeSeries\n * @param {number} duration\n * @return {number}\n */\nfunction findPoisonedDuration(timeSeries, duration) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def findPoisonedDuration(self, timeSeries: List[int], duration: int) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int findPoisonedDuration(vector<int>& timeSeries, int duration) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "acc-adv-s1-r2-q1": {
  "id": "acc-adv-s1-r2-q1",
  "title": "Reverse the Bits of a Flag Word",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Bit Manipulation",
  "tags": [
   "Accenture Round 2",
   "Bit Manipulation",
   "Set 1"
  ],
  "paragraphs": [
   "Reverse the bits of a 32-bit unsigned integer and return the result.",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
  ],
  "examples": [
   {
    "input": "n = 43261596",
    "output": "964176192"
   },
   {
    "input": "n = 4294967293",
    "output": "3221225471"
   }
  ],
  "constraints": [
   "Target O(1) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-adv-s1-r2-q1-v1",
    "input": "43261596",
    "expectedOutput": "964176192"
   },
   {
    "id": "acc-adv-s1-r2-q1-v2",
    "input": "4294967293",
    "expectedOutput": "3221225471"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s1-r2-q1-h1",
    "input": "0",
    "expectedOutput": "0"
   },
   {
    "id": "acc-adv-s1-r2-q1-h2",
    "input": "1",
    "expectedOutput": "2147483648"
   },
   {
    "id": "acc-adv-s1-r2-q1-h3",
    "input": "2147483648",
    "expectedOutput": "1"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number} n\n * @return {number}\n */\nfunction reverseBits(n) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def reverseBits(self, n: int) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int reverseBits(int n) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(1)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-adv-s2-r2-q1": {
  "id": "acc-adv-s2-r2-q1",
  "title": "Is One String a Rotation of Another",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "String",
  "tags": [
   "Accenture Round 2",
   "String",
   "Set 2"
  ],
  "paragraphs": [
   "Return true if b can be obtained by rotating a some number of positions.",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
  ],
  "examples": [
   {
    "input": "a = \"abcde\", b = \"cdeab\"",
    "output": "true"
   },
   {
    "input": "a = \"abcde\", b = \"abced\"",
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
    "id": "acc-adv-s2-r2-q1-v1",
    "input": "\"abcde\"\n\"cdeab\"",
    "expectedOutput": "true"
   },
   {
    "id": "acc-adv-s2-r2-q1-v2",
    "input": "\"abcde\"\n\"abced\"",
    "expectedOutput": "false"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s2-r2-q1-h1",
    "input": "\"a\"\n\"a\"",
    "expectedOutput": "true"
   },
   {
    "id": "acc-adv-s2-r2-q1-h2",
    "input": "\"ab\"\n\"ba\"",
    "expectedOutput": "true"
   },
   {
    "id": "acc-adv-s2-r2-q1-h3",
    "input": "\"abc\"\n\"abcd\"",
    "expectedOutput": "false"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} a\n * @param {string} b\n * @return {boolean}\n */\nfunction isRotation(a, b) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def isRotation(self, a: str, b: str) -> bool:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    bool isRotation(string a, string b) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-adv-s3-r2-q1": {
  "id": "acc-adv-s3-r2-q1",
  "title": "Count Lit Bulbs After Rounds",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Math",
  "tags": [
   "Accenture Round 2",
   "Math",
   "Set 3"
  ],
  "paragraphs": [
   "n bulbs start off; round k toggles every k-th bulb. Return how many are on after n rounds.",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
  ],
  "examples": [
   {
    "input": "n = 3",
    "output": "1"
   },
   {
    "input": "n = 0",
    "output": "0"
   }
  ],
  "constraints": [
   "Target O(1) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-adv-s3-r2-q1-v1",
    "input": "3",
    "expectedOutput": "1"
   },
   {
    "id": "acc-adv-s3-r2-q1-v2",
    "input": "0",
    "expectedOutput": "0"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s3-r2-q1-h1",
    "input": "1",
    "expectedOutput": "1"
   },
   {
    "id": "acc-adv-s3-r2-q1-h2",
    "input": "16",
    "expectedOutput": "4"
   },
   {
    "id": "acc-adv-s3-r2-q1-h3",
    "input": "99999",
    "expectedOutput": "316"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number} n\n * @return {number}\n */\nfunction bulbSwitch(n) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def bulbSwitch(self, n: int) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int bulbSwitch(int n) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(1)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-adv-s4-r2-q1": {
  "id": "acc-adv-s4-r2-q1",
  "title": "Total Bit Differences Across Pairs",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Bit Manipulation",
  "tags": [
   "Accenture Round 2",
   "Bit Manipulation",
   "Set 4"
  ],
  "paragraphs": [
   "Return the sum of Hamming distances over all pairs of numbers. Defend an O(32 N) approach.",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
  ],
  "examples": [
   {
    "input": "nums = [4,14,2]",
    "output": "6"
   },
   {
    "input": "nums = [4,14,4]",
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
    "id": "acc-adv-s4-r2-q1-v1",
    "input": "[4,14,2]",
    "expectedOutput": "6"
   },
   {
    "id": "acc-adv-s4-r2-q1-v2",
    "input": "[4,14,4]",
    "expectedOutput": "4"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s4-r2-q1-h1",
    "input": "[1]",
    "expectedOutput": "0"
   },
   {
    "id": "acc-adv-s4-r2-q1-h2",
    "input": "[0,0]",
    "expectedOutput": "0"
   },
   {
    "id": "acc-adv-s4-r2-q1-h3",
    "input": "[1,2,4,8]",
    "expectedOutput": "12"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @return {number}\n */\nfunction totalHammingDistance(nums) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def totalHammingDistance(self, nums: List[int]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int totalHammingDistance(vector<int>& nums) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-adv-s5-r2-q1": {
  "id": "acc-adv-s5-r2-q1",
  "title": "Items Ordered More Than a Third",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Voting Algorithm",
  "tags": [
   "Accenture Round 2",
   "Voting Algorithm",
   "Set 5"
  ],
  "paragraphs": [
   "Return, sorted, all values appearing more than N/3 times. Defend an O(1)-space approach.",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
  ],
  "examples": [
   {
    "input": "nums = [3,2,3]",
    "output": "[3]"
   },
   {
    "input": "nums = [1]",
    "output": "[1]"
   }
  ],
  "constraints": [
   "Target O(N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-adv-s5-r2-q1-v1",
    "input": "[3,2,3]",
    "expectedOutput": "[3]"
   },
   {
    "id": "acc-adv-s5-r2-q1-v2",
    "input": "[1]",
    "expectedOutput": "[1]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s5-r2-q1-h1",
    "input": "[1,2]",
    "expectedOutput": "[1,2]"
   },
   {
    "id": "acc-adv-s5-r2-q1-h2",
    "input": "[1,1,1,3,3,2,2,2]",
    "expectedOutput": "[1,2]"
   },
   {
    "id": "acc-adv-s5-r2-q1-h3",
    "input": "[1,2,3,4]",
    "expectedOutput": "[]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @return {number[]}\n */\nfunction majorityElementII(nums) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def majorityElementII(self, nums: List[int]) -> List[int]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<int> majorityElementII(vector<int>& nums) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-adv-s6-r2-q1": {
  "id": "acc-adv-s6-r2-q1",
  "title": "Find All Repeated Ids",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Array",
  "tags": [
   "Accenture Round 2",
   "Array",
   "Set 6"
  ],
  "paragraphs": [
   "Values are in 1..n and each appears once or twice. Return, sorted, those appearing twice, in O(N) time and O(1) extra space.",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
  ],
  "examples": [
   {
    "input": "nums = [4,3,2,7,8,2,3,1]",
    "output": "[2,3]"
   },
   {
    "input": "nums = [1,1,2]",
    "output": "[1]"
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
    "input": "[4,3,2,7,8,2,3,1]",
    "expectedOutput": "[2,3]"
   },
   {
    "id": "acc-adv-s6-r2-q1-v2",
    "input": "[1,1,2]",
    "expectedOutput": "[1]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s6-r2-q1-h1",
    "input": "[1]",
    "expectedOutput": "[]"
   },
   {
    "id": "acc-adv-s6-r2-q1-h2",
    "input": "[2,2,3,3]",
    "expectedOutput": "[2,3]"
   },
   {
    "id": "acc-adv-s6-r2-q1-h3",
    "input": "[1,2,3]",
    "expectedOutput": "[]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @return {number[]}\n */\nfunction findDuplicates(nums) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def findDuplicates(self, nums: List[int]) -> List[int]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<int> findDuplicates(vector<int>& nums) {\n        // Write your solution here\n    }\n};\n"
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
  "title": "Smallest Missing Positive Ticket",
  "difficulty": "Hard",
  "company": "Accenture",
  "category": "Array",
  "tags": [
   "Accenture Round 2",
   "Array",
   "Set 7"
  ],
  "paragraphs": [
   "Return the smallest missing positive integer in O(N) time and O(1) extra space.",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
  ],
  "examples": [
   {
    "input": "nums = [1,2,0]",
    "output": "3"
   },
   {
    "input": "nums = [3,4,-1,1]",
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
    "id": "acc-adv-s7-r2-q1-v1",
    "input": "[1,2,0]",
    "expectedOutput": "3"
   },
   {
    "id": "acc-adv-s7-r2-q1-v2",
    "input": "[3,4,-1,1]",
    "expectedOutput": "2"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s7-r2-q1-h1",
    "input": "[7,8,9,11,12]",
    "expectedOutput": "1"
   },
   {
    "id": "acc-adv-s7-r2-q1-h2",
    "input": "[1]",
    "expectedOutput": "2"
   },
   {
    "id": "acc-adv-s7-r2-q1-h3",
    "input": "[2,1]",
    "expectedOutput": "3"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @return {number}\n */\nfunction firstMissingPositive(nums) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def firstMissingPositive(self, nums: List[int]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int firstMissingPositive(vector<int>& nums) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-adv-s8-r2-q1": {
  "id": "acc-adv-s8-r2-q1",
  "title": "Largest Gap in Sorted Timestamps",
  "difficulty": "Hard",
  "company": "Accenture",
  "category": "Bucket Sort",
  "tags": [
   "Accenture Round 2",
   "Bucket Sort",
   "Set 8"
  ],
  "paragraphs": [
   "Return the maximum difference between successive elements in the sorted form of the array, or 0 if it has fewer than 2 elements. Defend a linear-time bucket approach.",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
  ],
  "examples": [
   {
    "input": "nums = [3,6,9,1]",
    "output": "3"
   },
   {
    "input": "nums = [10]",
    "output": "0"
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
    "input": "[3,6,9,1]",
    "expectedOutput": "3"
   },
   {
    "id": "acc-adv-s8-r2-q1-v2",
    "input": "[10]",
    "expectedOutput": "0"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s8-r2-q1-h1",
    "input": "[1,1,1,1]",
    "expectedOutput": "0"
   },
   {
    "id": "acc-adv-s8-r2-q1-h2",
    "input": "[100,3,2,1]",
    "expectedOutput": "97"
   },
   {
    "id": "acc-adv-s8-r2-q1-h3",
    "input": "[1,10000000]",
    "expectedOutput": "9999999"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @return {number}\n */\nfunction maximumGap(nums) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def maximumGap(self, nums: List[int]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int maximumGap(vector<int>& nums) {\n        // Write your solution here\n    }\n};\n"
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
  "title": "H-Index of Engineer Impact",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Sorting",
  "tags": [
   "Accenture Round 2",
   "Sorting",
   "Set 9"
  ],
  "paragraphs": [
   "h is the largest number such that h items have at least h citations each. Return the h-index.",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
  ],
  "examples": [
   {
    "input": "citations = [3,0,6,1,5]",
    "output": "3"
   },
   {
    "input": "citations = [1,3,1]",
    "output": "1"
   }
  ],
  "constraints": [
   "Target O(N log N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-adv-s9-r2-q1-v1",
    "input": "[3,0,6,1,5]",
    "expectedOutput": "3"
   },
   {
    "id": "acc-adv-s9-r2-q1-v2",
    "input": "[1,3,1]",
    "expectedOutput": "1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s9-r2-q1-h1",
    "input": "[0]",
    "expectedOutput": "0"
   },
   {
    "id": "acc-adv-s9-r2-q1-h2",
    "input": "[10,8,5,4,3]",
    "expectedOutput": "4"
   },
   {
    "id": "acc-adv-s9-r2-q1-h3",
    "input": "[100]",
    "expectedOutput": "1"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} citations\n * @return {number}\n */\nfunction hIndex(citations) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def hIndex(self, citations: List[int]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int hIndex(vector<int>& citations) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N log N)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-adv-s10-r2-q1": {
  "id": "acc-adv-s10-r2-q1",
  "title": "Minimum Platforms for a Schedule",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Sorting / Sweep",
  "tags": [
   "Accenture Round 2",
   "Sorting / Sweep",
   "Set 10"
  ],
  "paragraphs": [
   "Given arrival and departure times (a train leaving at t frees the platform for one arriving at t), return the minimum platforms needed.",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
  ],
  "examples": [
   {
    "input": "arrival = [900,940,950,1100,1500,1800], departure = [910,1200,1120,1130,1900,2000]",
    "output": "3"
   },
   {
    "input": "arrival = [100,200], departure = [150,250]",
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
    "id": "acc-adv-s10-r2-q1-v1",
    "input": "[900,940,950,1100,1500,1800]\n[910,1200,1120,1130,1900,2000]",
    "expectedOutput": "3"
   },
   {
    "id": "acc-adv-s10-r2-q1-v2",
    "input": "[100,200]\n[150,250]",
    "expectedOutput": "1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-adv-s10-r2-q1-h1",
    "input": "[100]\n[200]",
    "expectedOutput": "1"
   },
   {
    "id": "acc-adv-s10-r2-q1-h2",
    "input": "[100,100,100]\n[200,200,200]",
    "expectedOutput": "3"
   },
   {
    "id": "acc-adv-s10-r2-q1-h3",
    "input": "[100,200,300]\n[200,300,400]",
    "expectedOutput": "1"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} arrival\n * @param {number[]} departure\n * @return {number}\n */\nfunction minPlatforms(arrival, departure) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def minPlatforms(self, arrival: List[int], departure: List[int]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int minPlatforms(vector<int>& arrival, vector<int>& departure) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N log N)",
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
  "title": "Strip Invalid Brackets From a Query",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Stack",
  "tags": [
   "Accenture Round 1",
   "Stack",
   "Set 1"
  ],
  "paragraphs": [
   "Remove the fewest parentheses so the string is valid; return the string (tests have a unique answer)."
  ],
  "examples": [
   {
    "input": "s = \"lee(t(c)o)de)\"",
    "output": "\"lee(t(c)o)de\""
   },
   {
    "input": "s = \"a)b(c)d\"",
    "output": "\"ab(c)d\""
   }
  ],
  "constraints": [
   "Target O(N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s1-r1-q1-v1",
    "input": "\"lee(t(c)o)de)\"",
    "expectedOutput": "\"lee(t(c)o)de\""
   },
   {
    "id": "acc-sse-s1-r1-q1-v2",
    "input": "\"a)b(c)d\"",
    "expectedOutput": "\"ab(c)d\""
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s1-r1-q1-h1",
    "input": "\"))((\"",
    "expectedOutput": "\"\""
   },
   {
    "id": "acc-sse-s1-r1-q1-h2",
    "input": "\"abc\"",
    "expectedOutput": "\"abc\""
   },
   {
    "id": "acc-sse-s1-r1-q1-h3",
    "input": "\"(a(b(c)d)\"",
    "expectedOutput": "\"a(b(c)d)\""
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} s\n * @return {string}\n */\nfunction minRemoveToMakeValid(s) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def minRemoveToMakeValid(self, s: str) -> str:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    string minRemoveToMakeValid(string s) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "acc-sse-s1-r1-q2"
 },
 "acc-sse-s1-r1-q2": {
  "id": "acc-sse-s1-r1-q2",
  "title": "Evaluate a Billing Expression",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Stack",
  "tags": [
   "Accenture Round 1",
   "Stack",
   "Set 1"
  ],
  "paragraphs": [
   "Evaluate an expression of non-negative integers with + - * / (integer division truncating toward zero) and spaces, no parentheses."
  ],
  "examples": [
   {
    "input": "s = \"3+2*2\"",
    "output": "7"
   },
   {
    "input": "s = \" 3/2 \"",
    "output": "1"
   }
  ],
  "constraints": [
   "Target O(N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s1-r1-q2-v1",
    "input": "\"3+2*2\"",
    "expectedOutput": "7"
   },
   {
    "id": "acc-sse-s1-r1-q2-v2",
    "input": "\" 3/2 \"",
    "expectedOutput": "1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s1-r1-q2-h1",
    "input": "\" 3+5 / 2 \"",
    "expectedOutput": "5"
   },
   {
    "id": "acc-sse-s1-r1-q2-h2",
    "input": "\"14-3/2\"",
    "expectedOutput": "13"
   },
   {
    "id": "acc-sse-s1-r1-q2-h3",
    "input": "\"100*2-50/5\"",
    "expectedOutput": "190"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} s\n * @return {number}\n */\nfunction calculate(s) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def calculate(self, s: str) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int calculate(string s) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(N)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "acc-sse-s2-r1-q1": {
  "id": "acc-sse-s2-r1-q1",
  "title": "Expand a Compressed Template",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Stack",
  "tags": [
   "Accenture Round 1",
   "Stack",
   "Set 2"
  ],
  "paragraphs": [
   "Expand an encoded string where k[text] means text repeated k times (nesting allowed)."
  ],
  "examples": [
   {
    "input": "s = \"3[a]2[bc]\"",
    "output": "\"aaabcbc\""
   },
   {
    "input": "s = \"3[a2[c]]\"",
    "output": "\"accaccacc\""
   }
  ],
  "constraints": [
   "Target O(output) time and O(output) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s2-r1-q1-v1",
    "input": "\"3[a]2[bc]\"",
    "expectedOutput": "\"aaabcbc\""
   },
   {
    "id": "acc-sse-s2-r1-q1-v2",
    "input": "\"3[a2[c]]\"",
    "expectedOutput": "\"accaccacc\""
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s2-r1-q1-h1",
    "input": "\"2[abc]3[cd]ef\"",
    "expectedOutput": "\"abcabccdcdcdef\""
   },
   {
    "id": "acc-sse-s2-r1-q1-h2",
    "input": "\"abc\"",
    "expectedOutput": "\"abc\""
   },
   {
    "id": "acc-sse-s2-r1-q1-h3",
    "input": "\"10[x]\"",
    "expectedOutput": "\"xxxxxxxxxx\""
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} s\n * @return {string}\n */\nfunction decodeString(s) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def decodeString(self, s: str) -> str:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    string decodeString(string s) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(output)",
   "space": "O(output)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "acc-sse-s2-r1-q2"
 },
 "acc-sse-s2-r1-q2": {
  "id": "acc-sse-s2-r1-q2",
  "title": "Normalize a File Path",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Stack",
  "tags": [
   "Accenture Round 1",
   "Stack",
   "Set 2"
  ],
  "paragraphs": [
   "Simplify an absolute Unix-style path ('.' is current, '..' is parent, repeated slashes collapse)."
  ],
  "examples": [
   {
    "input": "path = \"/home/\"",
    "output": "\"/home\""
   },
   {
    "input": "path = \"/../\"",
    "output": "\"/\""
   }
  ],
  "constraints": [
   "Target O(N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s2-r1-q2-v1",
    "input": "\"/home/\"",
    "expectedOutput": "\"/home\""
   },
   {
    "id": "acc-sse-s2-r1-q2-v2",
    "input": "\"/../\"",
    "expectedOutput": "\"/\""
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s2-r1-q2-h1",
    "input": "\"/home//foo/\"",
    "expectedOutput": "\"/home/foo\""
   },
   {
    "id": "acc-sse-s2-r1-q2-h2",
    "input": "\"/a/./b/../../c/\"",
    "expectedOutput": "\"/c\""
   },
   {
    "id": "acc-sse-s2-r1-q2-h3",
    "input": "\"/a//b////c/d//././/..\"",
    "expectedOutput": "\"/a/b/c\""
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} path\n * @return {string}\n */\nfunction simplifyPath(path) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def simplifyPath(self, path: str) -> str:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    string simplifyPath(string path) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(N)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "acc-sse-s3-r1-q1": {
  "id": "acc-sse-s3-r1-q1",
  "title": "Earliest Common Meeting Slot",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Two Pointers",
  "tags": [
   "Accenture Round 1",
   "Two Pointers",
   "Set 3"
  ],
  "paragraphs": [
   "Given two people's free slots [start, end] and a duration, return the earliest [start, start+duration] that fits both, or []."
  ],
  "examples": [
   {
    "input": "slots1 = [[10,50],[60,120],[140,210]], slots2 = [[0,15],[60,70]], duration = 8",
    "output": "[60,68]"
   },
   {
    "input": "slots1 = [[10,50],[60,120],[140,210]], slots2 = [[0,15],[60,70]], duration = 12",
    "output": "[]"
   }
  ],
  "constraints": [
   "Target O(N+M) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s3-r1-q1-v1",
    "input": "[[10,50],[60,120],[140,210]]\n[[0,15],[60,70]]\n8",
    "expectedOutput": "[60,68]"
   },
   {
    "id": "acc-sse-s3-r1-q1-v2",
    "input": "[[10,50],[60,120],[140,210]]\n[[0,15],[60,70]]\n12",
    "expectedOutput": "[]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s3-r1-q1-h1",
    "input": "[[1,5]]\n[[2,3]]\n2",
    "expectedOutput": "[]"
   },
   {
    "id": "acc-sse-s3-r1-q1-h2",
    "input": "[[0,10]]\n[[5,15]]\n5",
    "expectedOutput": "[5,10]"
   },
   {
    "id": "acc-sse-s3-r1-q1-h3",
    "input": "[[1,2]]\n[[3,4]]\n1",
    "expectedOutput": "[]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[][]} slots1\n * @param {number[][]} slots2\n * @param {number} duration\n * @return {number[]}\n */\nfunction minAvailableDuration(slots1, slots2, duration) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def minAvailableDuration(self, slots1: List[List[int]], slots2: List[List[int]], duration: int) -> List[int]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<int> minAvailableDuration(vector<vector<int>>& slots1, vector<vector<int>>& slots2, int duration) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N+M)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "acc-sse-s3-r1-q2"
 },
 "acc-sse-s3-r1-q2": {
  "id": "acc-sse-s3-r1-q2",
  "title": "Shared Availability Windows",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Two Pointers",
  "tags": [
   "Accenture Round 1",
   "Two Pointers",
   "Set 3"
  ],
  "paragraphs": [
   "Given two sorted lists of disjoint intervals, return their intersection."
  ],
  "examples": [
   {
    "input": "a = [[0,2],[5,10],[13,23],[24,25]], b = [[1,5],[8,12],[15,24],[25,26]]",
    "output": "[[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]"
   },
   {
    "input": "a = [[1,3],[5,9]], b = []",
    "output": "[]"
   }
  ],
  "constraints": [
   "Target O(N+M) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s3-r1-q2-v1",
    "input": "[[0,2],[5,10],[13,23],[24,25]]\n[[1,5],[8,12],[15,24],[25,26]]",
    "expectedOutput": "[[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]"
   },
   {
    "id": "acc-sse-s3-r1-q2-v2",
    "input": "[[1,3],[5,9]]\n[]",
    "expectedOutput": "[]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s3-r1-q2-h1",
    "input": "[]\n[[4,8],[10,12]]",
    "expectedOutput": "[]"
   },
   {
    "id": "acc-sse-s3-r1-q2-h2",
    "input": "[[1,7]]\n[[3,10]]",
    "expectedOutput": "[[3,7]]"
   },
   {
    "id": "acc-sse-s3-r1-q2-h3",
    "input": "[[1,2]]\n[[3,4]]",
    "expectedOutput": "[]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[][]} a\n * @param {number[][]} b\n * @return {number[][]}\n */\nfunction intervalIntersection(a, b) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def intervalIntersection(self, a: List[List[int]], b: List[List[int]]) -> List[List[int]]:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    vector<vector<int>> intervalIntersection(vector<vector<int>>& a, vector<vector<int>>& b) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N+M)",
   "space": "O(1)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "acc-sse-s4-r1-q1": {
  "id": "acc-sse-s4-r1-q1",
  "title": "Batches Divisible by K",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Prefix Sum",
  "tags": [
   "Accenture Round 1",
   "Prefix Sum",
   "Set 4"
  ],
  "paragraphs": [
   "Return the number of contiguous subarrays whose sum is divisible by k."
  ],
  "examples": [
   {
    "input": "nums = [4,5,0,-2,-3,1], k = 5",
    "output": "7"
   },
   {
    "input": "nums = [5], k = 9",
    "output": "0"
   }
  ],
  "constraints": [
   "Target O(N) time and O(K) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s4-r1-q1-v1",
    "input": "[4,5,0,-2,-3,1]\n5",
    "expectedOutput": "7"
   },
   {
    "id": "acc-sse-s4-r1-q1-v2",
    "input": "[5]\n9",
    "expectedOutput": "0"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s4-r1-q1-h1",
    "input": "[2,2,2]\n2",
    "expectedOutput": "6"
   },
   {
    "id": "acc-sse-s4-r1-q1-h2",
    "input": "[1,2,3]\n1",
    "expectedOutput": "6"
   },
   {
    "id": "acc-sse-s4-r1-q1-h3",
    "input": "[-1,2,9]\n2",
    "expectedOutput": "2"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @param {number} k\n * @return {number}\n */\nfunction subarraysDivByK(nums, k) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def subarraysDivByK(self, nums: List[int], k: int) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int subarraysDivByK(vector<int>& nums, int k) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(K)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "acc-sse-s4-r1-q2"
 },
 "acc-sse-s4-r1-q2": {
  "id": "acc-sse-s4-r1-q2",
  "title": "Continuous Multiple Window",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Prefix Sum",
  "tags": [
   "Accenture Round 1",
   "Prefix Sum",
   "Set 4"
  ],
  "paragraphs": [
   "Return true if some subarray of length at least 2 has a sum that is a multiple of k."
  ],
  "examples": [
   {
    "input": "nums = [23,2,4,6,7], k = 6",
    "output": "true"
   },
   {
    "input": "nums = [23,2,6,4,7], k = 6",
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
    "id": "acc-sse-s4-r1-q2-v1",
    "input": "[23,2,4,6,7]\n6",
    "expectedOutput": "true"
   },
   {
    "id": "acc-sse-s4-r1-q2-v2",
    "input": "[23,2,6,4,7]\n6",
    "expectedOutput": "true"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s4-r1-q2-h1",
    "input": "[23,2,6,4,7]\n13",
    "expectedOutput": "false"
   },
   {
    "id": "acc-sse-s4-r1-q2-h2",
    "input": "[1,0]\n2",
    "expectedOutput": "false"
   },
   {
    "id": "acc-sse-s4-r1-q2-h3",
    "input": "[5,0,0]\n3",
    "expectedOutput": "true"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @param {number} k\n * @return {boolean}\n */\nfunction checkSubarraySum(nums, k) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def checkSubarraySum(self, nums: List[int], k: int) -> bool:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    bool checkSubarraySum(vector<int>& nums, int k) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(K)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "acc-sse-s5-r1-q1": {
  "id": "acc-sse-s5-r1-q1",
  "title": "Longest Window Hitting a Target Sum",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Prefix Sum",
  "tags": [
   "Accenture Round 1",
   "Prefix Sum",
   "Set 5"
  ],
  "paragraphs": [
   "Return the length of the longest subarray summing exactly to k, or 0."
  ],
  "examples": [
   {
    "input": "nums = [1,-1,5,-2,3], k = 3",
    "output": "4"
   },
   {
    "input": "nums = [-2,-1,2,1], k = 1",
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
    "id": "acc-sse-s5-r1-q1-v1",
    "input": "[1,-1,5,-2,3]\n3",
    "expectedOutput": "4"
   },
   {
    "id": "acc-sse-s5-r1-q1-v2",
    "input": "[-2,-1,2,1]\n1",
    "expectedOutput": "2"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s5-r1-q1-h1",
    "input": "[1,2]\n10",
    "expectedOutput": "0"
   },
   {
    "id": "acc-sse-s5-r1-q1-h2",
    "input": "[0,0,0]\n0",
    "expectedOutput": "3"
   },
   {
    "id": "acc-sse-s5-r1-q1-h3",
    "input": "[3,-3,3]\n3",
    "expectedOutput": "3"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @param {number} k\n * @return {number}\n */\nfunction maxSubArrayLen(nums, k) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def maxSubArrayLen(self, nums: List[int], k: int) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int maxSubArrayLen(vector<int>& nums, int k) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "acc-sse-s5-r1-q2"
 },
 "acc-sse-s5-r1-q2": {
  "id": "acc-sse-s5-r1-q2",
  "title": "Windows With K Odd Events",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Prefix Sum",
  "tags": [
   "Accenture Round 1",
   "Prefix Sum",
   "Set 5"
  ],
  "paragraphs": [
   "Return the number of contiguous subarrays containing exactly k odd numbers."
  ],
  "examples": [
   {
    "input": "nums = [1,1,2,1,1], k = 3",
    "output": "2"
   },
   {
    "input": "nums = [2,4,6], k = 1",
    "output": "0"
   }
  ],
  "constraints": [
   "Target O(N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s5-r1-q2-v1",
    "input": "[1,1,2,1,1]\n3",
    "expectedOutput": "2"
   },
   {
    "id": "acc-sse-s5-r1-q2-v2",
    "input": "[2,4,6]\n1",
    "expectedOutput": "0"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s5-r1-q2-h1",
    "input": "[2,2,2,1,2,2,1,2,2,2]\n2",
    "expectedOutput": "16"
   },
   {
    "id": "acc-sse-s5-r1-q2-h2",
    "input": "[1]\n1",
    "expectedOutput": "1"
   },
   {
    "id": "acc-sse-s5-r1-q2-h3",
    "input": "[1,2,1]\n1",
    "expectedOutput": "4"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @param {number} k\n * @return {number}\n */\nfunction numberOfSubarrays(nums, k) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def numberOfSubarrays(self, nums: List[int], k: int) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int numberOfSubarrays(vector<int>& nums, int k) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(N)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "acc-sse-s6-r1-q1": {
  "id": "acc-sse-s6-r1-q1",
  "title": "Best Pair of Landmarks",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Dynamic Programming",
  "tags": [
   "Accenture Round 1",
   "Dynamic Programming",
   "Set 6"
  ],
  "paragraphs": [
   "Score of positions i < j is values[i] + values[j] + i - j. Return the maximum score."
  ],
  "examples": [
   {
    "input": "values = [8,1,5,2,6]",
    "output": "11"
   },
   {
    "input": "values = [1,2]",
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
    "id": "acc-sse-s6-r1-q1-v1",
    "input": "[8,1,5,2,6]",
    "expectedOutput": "11"
   },
   {
    "id": "acc-sse-s6-r1-q1-v2",
    "input": "[1,2]",
    "expectedOutput": "2"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s6-r1-q1-h1",
    "input": "[3,7,2,3]",
    "expectedOutput": "9"
   },
   {
    "id": "acc-sse-s6-r1-q1-h2",
    "input": "[10,1,1,10]",
    "expectedOutput": "17"
   },
   {
    "id": "acc-sse-s6-r1-q1-h3",
    "input": "[1,1,1]",
    "expectedOutput": "1"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} values\n * @return {number}\n */\nfunction maxScoreSightseeingPair(values) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def maxScoreSightseeingPair(self, values: List[int]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int maxScoreSightseeingPair(vector<int>& values) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "acc-sse-s6-r1-q2"
 },
 "acc-sse-s6-r1-q2": {
  "id": "acc-sse-s6-r1-q2",
  "title": "Minimum Card Flips for Uniform Face",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Greedy",
  "tags": [
   "Accenture Round 1",
   "Greedy",
   "Set 6"
  ],
  "paragraphs": [
   "Each card has a top and a bottom value. Return the minimum flips to make all tops equal or all bottoms equal, or -1."
  ],
  "examples": [
   {
    "input": "tops = [2,1,2,4,2,2], bottoms = [5,2,6,2,3,2]",
    "output": "2"
   },
   {
    "input": "tops = [3,5,1,2,3], bottoms = [3,6,3,3,4]",
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
    "id": "acc-sse-s6-r1-q2-v1",
    "input": "[2,1,2,4,2,2]\n[5,2,6,2,3,2]",
    "expectedOutput": "2"
   },
   {
    "id": "acc-sse-s6-r1-q2-v2",
    "input": "[3,5,1,2,3]\n[3,6,3,3,4]",
    "expectedOutput": "-1"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s6-r1-q2-h1",
    "input": "[1,1]\n[2,2]",
    "expectedOutput": "0"
   },
   {
    "id": "acc-sse-s6-r1-q2-h2",
    "input": "[1,2,1]\n[2,1,2]",
    "expectedOutput": "1"
   },
   {
    "id": "acc-sse-s6-r1-q2-h3",
    "input": "[4]\n[4]",
    "expectedOutput": "0"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} tops\n * @param {number[]} bottoms\n * @return {number}\n */\nfunction minDominoRotations(tops, bottoms) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def minDominoRotations(self, tops: List[int], bottoms: List[int]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int minDominoRotations(vector<int>& tops, vector<int>& bottoms) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "acc-sse-s7-r1-q1": {
  "id": "acc-sse-s7-r1-q1",
  "title": "Fewest Shuttles for Passengers",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Greedy",
  "tags": [
   "Accenture Round 1",
   "Greedy",
   "Set 7"
  ],
  "paragraphs": [
   "Each shuttle carries at most two people with a combined weight limit. Return the minimum shuttles needed."
  ],
  "examples": [
   {
    "input": "people = [1,2], limit = 3",
    "output": "1"
   },
   {
    "input": "people = [3,2,2,1], limit = 3",
    "output": "3"
   }
  ],
  "constraints": [
   "Target O(N log N) time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s7-r1-q1-v1",
    "input": "[1,2]\n3",
    "expectedOutput": "1"
   },
   {
    "id": "acc-sse-s7-r1-q1-v2",
    "input": "[3,2,2,1]\n3",
    "expectedOutput": "3"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s7-r1-q1-h1",
    "input": "[3,5,3,4]\n5",
    "expectedOutput": "4"
   },
   {
    "id": "acc-sse-s7-r1-q1-h2",
    "input": "[5,1,4,2]\n6",
    "expectedOutput": "2"
   },
   {
    "id": "acc-sse-s7-r1-q1-h3",
    "input": "[2,2,2,2]\n4",
    "expectedOutput": "2"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} people\n * @param {number} limit\n * @return {number}\n */\nfunction numShuttles(people, limit) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def numShuttles(self, people: List[int], limit: int) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int numShuttles(vector<int>& people, int limit) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N log N)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "acc-sse-s7-r1-q2"
 },
 "acc-sse-s7-r1-q2": {
  "id": "acc-sse-s7-r1-q2",
  "title": "Minimum Brackets to Insert",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Greedy",
  "tags": [
   "Accenture Round 1",
   "Greedy",
   "Set 7"
  ],
  "paragraphs": [
   "Return the minimum number of parentheses to add so the string becomes valid."
  ],
  "examples": [
   {
    "input": "s = \"())\"",
    "output": "1"
   },
   {
    "input": "s = \"(((\"",
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
    "id": "acc-sse-s7-r1-q2-v1",
    "input": "\"())\"",
    "expectedOutput": "1"
   },
   {
    "id": "acc-sse-s7-r1-q2-v2",
    "input": "\"(((\"",
    "expectedOutput": "3"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s7-r1-q2-h1",
    "input": "\"()\"",
    "expectedOutput": "0"
   },
   {
    "id": "acc-sse-s7-r1-q2-h2",
    "input": "\"()))((\"",
    "expectedOutput": "4"
   },
   {
    "id": "acc-sse-s7-r1-q2-h3",
    "input": "\"\"",
    "expectedOutput": "0"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} s\n * @return {number}\n */\nfunction minAddToMakeValid(s) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def minAddToMakeValid(self, s: str) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int minAddToMakeValid(string s) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "acc-sse-s8-r1-q1": {
  "id": "acc-sse-s8-r1-q1",
  "title": "Longest Zigzag Metric Run",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Dynamic Programming",
  "tags": [
   "Accenture Round 1",
   "Dynamic Programming",
   "Set 8"
  ],
  "paragraphs": [
   "Return the length of the longest subarray where consecutive differences strictly alternate in sign."
  ],
  "examples": [
   {
    "input": "arr = [9,4,2,10,7,8,8,1,9]",
    "output": "5"
   },
   {
    "input": "arr = [4,8,12,16]",
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
    "id": "acc-sse-s8-r1-q1-v1",
    "input": "[9,4,2,10,7,8,8,1,9]",
    "expectedOutput": "5"
   },
   {
    "id": "acc-sse-s8-r1-q1-v2",
    "input": "[4,8,12,16]",
    "expectedOutput": "2"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s8-r1-q1-h1",
    "input": "[100]",
    "expectedOutput": "1"
   },
   {
    "id": "acc-sse-s8-r1-q1-h2",
    "input": "[9,9]",
    "expectedOutput": "1"
   },
   {
    "id": "acc-sse-s8-r1-q1-h3",
    "input": "[1,3,2,4,3,5]",
    "expectedOutput": "6"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} arr\n * @return {number}\n */\nfunction maxTurbulenceSize(arr) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def maxTurbulenceSize(self, arr: List[int]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int maxTurbulenceSize(vector<int>& arr) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "acc-sse-s8-r1-q2"
 },
 "acc-sse-s8-r1-q2": {
  "id": "acc-sse-s8-r1-q2",
  "title": "Longest Shared Event Sequence",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Dynamic Programming",
  "tags": [
   "Accenture Round 1",
   "Dynamic Programming",
   "Set 8"
  ],
  "paragraphs": [
   "Return the length of the longest contiguous subarray appearing in both arrays."
  ],
  "examples": [
   {
    "input": "a = [1,2,3,2,1], b = [3,2,1,4,7]",
    "output": "3"
   },
   {
    "input": "a = [0,0,0,0,0], b = [0,0,0,0,0]",
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
    "id": "acc-sse-s8-r1-q2-v1",
    "input": "[1,2,3,2,1]\n[3,2,1,4,7]",
    "expectedOutput": "3"
   },
   {
    "id": "acc-sse-s8-r1-q2-v2",
    "input": "[0,0,0,0,0]\n[0,0,0,0,0]",
    "expectedOutput": "5"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s8-r1-q2-h1",
    "input": "[1,2]\n[3,4]",
    "expectedOutput": "0"
   },
   {
    "id": "acc-sse-s8-r1-q2-h2",
    "input": "[5]\n[5]",
    "expectedOutput": "1"
   },
   {
    "id": "acc-sse-s8-r1-q2-h3",
    "input": "[1,2,3]\n[2,3,4]",
    "expectedOutput": "2"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} a\n * @param {number[]} b\n * @return {number}\n */\nfunction findLength(a, b) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def findLength(self, a: List[int], b: List[int]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int findLength(vector<int>& a, vector<int>& b) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(M*N)",
   "space": "O(N)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "acc-sse-s9-r1-q1": {
  "id": "acc-sse-s9-r1-q1",
  "title": "Fewest Square-Sized Batches",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Dynamic Programming",
  "tags": [
   "Accenture Round 1",
   "Dynamic Programming",
   "Set 9"
  ],
  "paragraphs": [
   "Return the fewest perfect squares that sum to n."
  ],
  "examples": [
   {
    "input": "n = 12",
    "output": "3"
   },
   {
    "input": "n = 13",
    "output": "2"
   }
  ],
  "constraints": [
   "Target O(N sqrt N) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s9-r1-q1-v1",
    "input": "12",
    "expectedOutput": "3"
   },
   {
    "id": "acc-sse-s9-r1-q1-v2",
    "input": "13",
    "expectedOutput": "2"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s9-r1-q1-h1",
    "input": "1",
    "expectedOutput": "1"
   },
   {
    "id": "acc-sse-s9-r1-q1-h2",
    "input": "43",
    "expectedOutput": "3"
   },
   {
    "id": "acc-sse-s9-r1-q1-h3",
    "input": "100",
    "expectedOutput": "1"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number} n\n * @return {number}\n */\nfunction numSquares(n) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def numSquares(self, n: int) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int numSquares(int n) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N sqrt N)",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "acc-sse-s9-r1-q2"
 },
 "acc-sse-s9-r1-q2": {
  "id": "acc-sse-s9-r1-q2",
  "title": "Count Longest Rising Trends",
  "difficulty": "Hard",
  "company": "Accenture",
  "category": "Dynamic Programming",
  "tags": [
   "Accenture Round 1",
   "Dynamic Programming",
   "Set 9"
  ],
  "paragraphs": [
   "Return the number of longest strictly increasing subsequences."
  ],
  "examples": [
   {
    "input": "nums = [1,3,5,4,7]",
    "output": "2"
   },
   {
    "input": "nums = [2,2,2,2,2]",
    "output": "5"
   }
  ],
  "constraints": [
   "Target O(N^2) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s9-r1-q2-v1",
    "input": "[1,3,5,4,7]",
    "expectedOutput": "2"
   },
   {
    "id": "acc-sse-s9-r1-q2-v2",
    "input": "[2,2,2,2,2]",
    "expectedOutput": "5"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s9-r1-q2-h1",
    "input": "[1]",
    "expectedOutput": "1"
   },
   {
    "id": "acc-sse-s9-r1-q2-h2",
    "input": "[1,2,4,3,5,4,7,2]",
    "expectedOutput": "3"
   },
   {
    "id": "acc-sse-s9-r1-q2-h3",
    "input": "[3,1,2]",
    "expectedOutput": "1"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[]} nums\n * @return {number}\n */\nfunction findNumberOfLIS(nums) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def findNumberOfLIS(self, nums: List[int]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int findNumberOfLIS(vector<int>& nums) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N^2)",
   "space": "O(N)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "acc-sse-s10-r1-q1": {
  "id": "acc-sse-s10-r1-q1",
  "title": "Cheapest Top-to-Bottom Path in a Triangle",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Dynamic Programming",
  "tags": [
   "Accenture Round 1",
   "Dynamic Programming",
   "Set 10"
  ],
  "paragraphs": [
   "Move to adjacent numbers on the row below; return the minimum path sum from top to bottom in O(N) extra space."
  ],
  "examples": [
   {
    "input": "triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]",
    "output": "11"
   },
   {
    "input": "triangle = [[-10]]",
    "output": "-10"
   }
  ],
  "constraints": [
   "Target O(N^2) time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s10-r1-q1-v1",
    "input": "[[2],[3,4],[6,5,7],[4,1,8,3]]",
    "expectedOutput": "11"
   },
   {
    "id": "acc-sse-s10-r1-q1-v2",
    "input": "[[-10]]",
    "expectedOutput": "-10"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s10-r1-q1-h1",
    "input": "[[1],[2,3]]",
    "expectedOutput": "3"
   },
   {
    "id": "acc-sse-s10-r1-q1-h2",
    "input": "[[1],[1,1],[1,1,1]]",
    "expectedOutput": "3"
   },
   {
    "id": "acc-sse-s10-r1-q1-h3",
    "input": "[[5],[9,6],[4,6,8],[0,7,1,5]]",
    "expectedOutput": "18"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {number[][]} triangle\n * @return {number}\n */\nfunction minimumTotal(triangle) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def minimumTotal(self, triangle: List[List[int]]) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int minimumTotal(vector<vector<int>>& triangle) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N^2)",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 2,
  "nextProblemId": "acc-sse-s10-r1-q2"
 },
 "acc-sse-s10-r1-q2": {
  "id": "acc-sse-s10-r1-q2",
  "title": "Windows Using At Most K Services",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Sliding Window",
  "tags": [
   "Accenture Round 1",
   "Sliding Window",
   "Set 10"
  ],
  "paragraphs": [
   "Return the number of substrings of s that contain at most k distinct characters."
  ],
  "examples": [
   {
    "input": "s = \"abc\", k = 2",
    "output": "5"
   },
   {
    "input": "s = \"aab\", k = 1",
    "output": "4"
   }
  ],
  "constraints": [
   "Target O(N) time and O(K) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s10-r1-q2-v1",
    "input": "\"abc\"\n2",
    "expectedOutput": "5"
   },
   {
    "id": "acc-sse-s10-r1-q2-v2",
    "input": "\"aab\"\n1",
    "expectedOutput": "4"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s10-r1-q2-h1",
    "input": "\"a\"\n1",
    "expectedOutput": "1"
   },
   {
    "id": "acc-sse-s10-r1-q2-h2",
    "input": "\"abcabc\"\n3",
    "expectedOutput": "21"
   },
   {
    "id": "acc-sse-s10-r1-q2-h3",
    "input": "\"xxyz\"\n2",
    "expectedOutput": "8"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string} s\n * @param {number} k\n * @return {number}\n */\nfunction countAtMostKDistinct(s, k) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def countAtMostKDistinct(self, s: str, k: int) -> int:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version.\nclass Solution {\npublic:\n    int countAtMostKDistinct(string s, int k) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N)",
   "space": "O(K)"
  },
  "taskIndex": 2,
  "totalTasks": 2,
  "nextProblemId": null
 },
 "acc-sse-s1-r2-q1": {
  "id": "acc-sse-s1-r2-q1",
  "title": "Circular Task Queue",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Design",
  "tags": [
   "Accenture Round 2",
   "Design",
   "Set 1"
  ],
  "paragraphs": [
   "Implement a fixed-capacity circular queue (enQueue, deQueue, Front, Rear, isEmpty, isFull). Return each call's result (null for the constructor; Front and Rear return -1 when empty).",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
  ],
  "examples": [
   {
    "input": "ops = [\"CircularQueue\",\"enQueue\",\"enQueue\",\"enQueue\",\"enQueue\",\"Rear\",\"isFull\",\"deQueue\",\"enQueue\",\"Rear\"], args = [[3],[1],[2],[3],[4],[],[],[],[4],[]]",
    "output": "[null,true,true,true,false,3,true,true,true,4]"
   },
   {
    "input": "ops = [\"CircularQueue\",\"Front\",\"isEmpty\"], args = [[2],[],[]]",
    "output": "[null,-1,true]"
   }
  ],
  "constraints": [
   "Target O(1) per op time and O(K) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s1-r2-q1-v1",
    "input": "[\"CircularQueue\",\"enQueue\",\"enQueue\",\"enQueue\",\"enQueue\",\"Rear\",\"isFull\",\"deQueue\",\"enQueue\",\"Rear\"]\n[[3],[1],[2],[3],[4],[],[],[],[4],[]]",
    "expectedOutput": "[null,true,true,true,false,3,true,true,true,4]"
   },
   {
    "id": "acc-sse-s1-r2-q1-v2",
    "input": "[\"CircularQueue\",\"Front\",\"isEmpty\"]\n[[2],[],[]]",
    "expectedOutput": "[null,-1,true]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s1-r2-q1-h1",
    "input": "[\"CircularQueue\",\"enQueue\",\"deQueue\",\"deQueue\"]\n[[1],[5],[],[]]",
    "expectedOutput": "[null,true,true,false]"
   },
   {
    "id": "acc-sse-s1-r2-q1-h2",
    "input": "[\"CircularQueue\",\"enQueue\",\"enQueue\",\"isFull\",\"Front\"]\n[[2],[7],[8],[],[]]",
    "expectedOutput": "[null,true,true,true,7]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string[]} ops\n * @param {number[][]} args\n * @return {any[]}\n */\nfunction runCircularQueue(ops, args) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def runCircularQueue(self, ops: List[str], args: List[List[int]]) -> list:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version. Each element of an any[] value is passed as a JSON string in C++.\nclass Solution {\npublic:\n    vector<string> runCircularQueue(vector<string>& ops, vector<vector<int>>& args) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(1) per op",
   "space": "O(K)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-sse-s2-r2-q1": {
  "id": "acc-sse-s2-r2-q1",
  "title": "Stack With Bulk Increment",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Design",
  "tags": [
   "Accenture Round 2",
   "Design",
   "Set 2"
  ],
  "paragraphs": [
   "Implement a bounded stack with push, pop and increment(k, val) that adds val to the bottom k elements. Return each call's result (null except pop, which returns -1 when empty).",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
  ],
  "examples": [
   {
    "input": "ops = [\"CustomStack\",\"push\",\"push\",\"pop\",\"push\",\"push\",\"push\",\"increment\",\"increment\",\"pop\",\"pop\",\"pop\",\"pop\"], args = [[3],[1],[2],[],[2],[3],[4],[5,100],[2,100],[],[],[],[]]",
    "output": "[null,null,null,2,null,null,null,null,null,103,202,201,-1]"
   },
   {
    "input": "ops = [\"CustomStack\",\"pop\"], args = [[1],[]]",
    "output": "[null,-1]"
   }
  ],
  "constraints": [
   "Target O(1) amortised time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s2-r2-q1-v1",
    "input": "[\"CustomStack\",\"push\",\"push\",\"pop\",\"push\",\"push\",\"push\",\"increment\",\"increment\",\"pop\",\"pop\",\"pop\",\"pop\"]\n[[3],[1],[2],[],[2],[3],[4],[5,100],[2,100],[],[],[],[]]",
    "expectedOutput": "[null,null,null,2,null,null,null,null,null,103,202,201,-1]"
   },
   {
    "id": "acc-sse-s2-r2-q1-v2",
    "input": "[\"CustomStack\",\"pop\"]\n[[1],[]]",
    "expectedOutput": "[null,-1]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s2-r2-q1-h1",
    "input": "[\"CustomStack\",\"push\",\"push\",\"increment\",\"pop\"]\n[[2],[1],[2],[1,5],[]]",
    "expectedOutput": "[null,null,null,null,2]"
   },
   {
    "id": "acc-sse-s2-r2-q1-h2",
    "input": "[\"CustomStack\",\"push\",\"push\",\"push\",\"pop\"]\n[[1],[9],[8],[7],[]]",
    "expectedOutput": "[null,null,null,null,9]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string[]} ops\n * @param {number[][]} args\n * @return {any[]}\n */\nfunction runCustomStack(ops, args) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def runCustomStack(self, ops: List[str], args: List[List[int]]) -> list:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version. Each element of an any[] value is passed as a JSON string in C++.\nclass Solution {\npublic:\n    vector<string> runCustomStack(vector<string>& ops, vector<vector<int>>& args) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(1) amortised",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-sse-s3-r2-q1": {
  "id": "acc-sse-s3-r2-q1",
  "title": "Build a HashMap From Scratch",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Design",
  "tags": [
   "Accenture Round 2",
   "Design",
   "Set 3"
  ],
  "paragraphs": [
   "Implement put, get (-1 if absent) and remove without a built-in map. Return each call's result (null for put, remove and the constructor).",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
  ],
  "examples": [
   {
    "input": "ops = [\"MyHashMap\",\"put\",\"put\",\"get\",\"get\",\"put\",\"get\",\"remove\",\"get\"], args = [[],[1,1],[2,2],[1],[3],[2,1],[2],[2],[2]]",
    "output": "[null,null,null,1,-1,null,1,null,-1]"
   },
   {
    "input": "ops = [\"MyHashMap\",\"get\"], args = [[],[5]]",
    "output": "[null,-1]"
   }
  ],
  "constraints": [
   "Target O(1) avg per op time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s3-r2-q1-v1",
    "input": "[\"MyHashMap\",\"put\",\"put\",\"get\",\"get\",\"put\",\"get\",\"remove\",\"get\"]\n[[],[1,1],[2,2],[1],[3],[2,1],[2],[2],[2]]",
    "expectedOutput": "[null,null,null,1,-1,null,1,null,-1]"
   },
   {
    "id": "acc-sse-s3-r2-q1-v2",
    "input": "[\"MyHashMap\",\"get\"]\n[[],[5]]",
    "expectedOutput": "[null,-1]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s3-r2-q1-h1",
    "input": "[\"MyHashMap\",\"put\",\"put\",\"get\"]\n[[],[1000000,3],[1000000,4],[1000000]]",
    "expectedOutput": "[null,null,null,4]"
   },
   {
    "id": "acc-sse-s3-r2-q1-h2",
    "input": "[\"MyHashMap\",\"remove\",\"get\"]\n[[],[1],[1]]",
    "expectedOutput": "[null,null,-1]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string[]} ops\n * @param {number[][]} args\n * @return {any[]}\n */\nfunction runHashMap(ops, args) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def runHashMap(self, ops: List[str], args: List[List[int]]) -> list:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version. Each element of an any[] value is passed as a JSON string in C++.\nclass Solution {\npublic:\n    vector<string> runHashMap(vector<string>& ops, vector<vector<int>>& args) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(1) avg per op",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-sse-s4-r2-q1": {
  "id": "acc-sse-s4-r2-q1",
  "title": "Number Pool Allocator",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Design",
  "tags": [
   "Accenture Round 2",
   "Design",
   "Set 4"
  ],
  "paragraphs": [
   "Manage numbers 0..n-1: get (smallest-index free number or -1), check availability and release. Return each call's result (null for release and the constructor).",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
  ],
  "examples": [
   {
    "input": "ops = [\"PhoneDirectory\",\"get\",\"get\",\"check\",\"get\",\"check\",\"release\",\"check\"], args = [[3],[],[],[2],[],[2],[2],[2]]",
    "output": "[null,0,1,true,2,false,null,true]"
   },
   {
    "input": "ops = [\"PhoneDirectory\",\"get\",\"get\"], args = [[1],[],[]]",
    "output": "[null,0,-1]"
   }
  ],
  "constraints": [
   "Target O(1) per op time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s4-r2-q1-v1",
    "input": "[\"PhoneDirectory\",\"get\",\"get\",\"check\",\"get\",\"check\",\"release\",\"check\"]\n[[3],[],[],[2],[],[2],[2],[2]]",
    "expectedOutput": "[null,0,1,true,2,false,null,true]"
   },
   {
    "id": "acc-sse-s4-r2-q1-v2",
    "input": "[\"PhoneDirectory\",\"get\",\"get\"]\n[[1],[],[]]",
    "expectedOutput": "[null,0,-1]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s4-r2-q1-h1",
    "input": "[\"PhoneDirectory\",\"get\",\"release\",\"get\"]\n[[2],[],[0],[]]",
    "expectedOutput": "[null,0,null,1]"
   },
   {
    "id": "acc-sse-s4-r2-q1-h2",
    "input": "[\"PhoneDirectory\",\"check\"]\n[[2],[1]]",
    "expectedOutput": "[null,true]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string[]} ops\n * @param {number[][]} args\n * @return {any[]}\n */\nfunction runNumberPool(ops, args) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def runNumberPool(self, ops: List[str], args: List[List[int]]) -> list:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version. Each element of an any[] value is passed as a JSON string in C++.\nclass Solution {\npublic:\n    vector<string> runNumberPool(vector<string>& ops, vector<vector<int>>& args) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(1) per op",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-sse-s5-r2-q1": {
  "id": "acc-sse-s5-r2-q1",
  "title": "Session Token Expiry Manager",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Design",
  "tags": [
   "Accenture Round 2",
   "Design",
   "Set 5"
  ],
  "paragraphs": [
   "Tokens (integer ids) expire timeToLive seconds after creation or renewal; renewing an expired token does nothing; a token expiring exactly at time t counts as expired. countUnexpired(t) returns live tokens. Return each call's result (null except countUnexpired).",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
  ],
  "examples": [
   {
    "input": "ops = [\"AuthenticationManager\",\"renew\",\"generate\",\"countUnexpired\",\"generate\",\"renew\",\"renew\",\"countUnexpired\"], args = [[5],[1,2],[1,3],[6],[2,7],[1,8],[1,10],[15]]",
    "output": "[null,null,null,1,null,null,null,0]"
   },
   {
    "input": "ops = [\"AuthenticationManager\",\"generate\",\"countUnexpired\",\"countUnexpired\"], args = [[2],[1,0],[1],[2]]",
    "output": "[null,null,1,0]"
   }
  ],
  "constraints": [
   "Target O(N) per count time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s5-r2-q1-v1",
    "input": "[\"AuthenticationManager\",\"renew\",\"generate\",\"countUnexpired\",\"generate\",\"renew\",\"renew\",\"countUnexpired\"]\n[[5],[1,2],[1,3],[6],[2,7],[1,8],[1,10],[15]]",
    "expectedOutput": "[null,null,null,1,null,null,null,0]"
   },
   {
    "id": "acc-sse-s5-r2-q1-v2",
    "input": "[\"AuthenticationManager\",\"generate\",\"countUnexpired\",\"countUnexpired\"]\n[[2],[1,0],[1],[2]]",
    "expectedOutput": "[null,null,1,0]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s5-r2-q1-h1",
    "input": "[\"AuthenticationManager\",\"generate\",\"generate\",\"countUnexpired\"]\n[[10],[1,0],[2,5],[9]]",
    "expectedOutput": "[null,null,null,2]"
   },
   {
    "id": "acc-sse-s5-r2-q1-h2",
    "input": "[\"AuthenticationManager\",\"countUnexpired\"]\n[[3],[1]]",
    "expectedOutput": "[null,0]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string[]} ops\n * @param {number[][]} args\n * @return {any[]}\n */\nfunction runAuthManager(ops, args) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def runAuthManager(self, ops: List[str], args: List[List[int]]) -> list:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version. Each element of an any[] value is passed as a JSON string in C++.\nclass Solution {\npublic:\n    vector<string> runAuthManager(vector<string>& ops, vector<vector<int>>& args) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N) per count",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-sse-s6-r2-q1": {
  "id": "acc-sse-s6-r2-q1",
  "title": "Parking Slot Reservation System",
  "difficulty": "Easy",
  "company": "Accenture",
  "category": "Design",
  "tags": [
   "Accenture Round 2",
   "Design",
   "Set 6"
  ],
  "paragraphs": [
   "A lot has big (1), medium (2) and small (3) slots. addCar(type) parks a car if a slot of that type is free. Return each call's result (null for the constructor).",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
  ],
  "examples": [
   {
    "input": "ops = [\"ParkingSystem\",\"addCar\",\"addCar\",\"addCar\",\"addCar\"], args = [[1,1,0],[1],[2],[3],[1]]",
    "output": "[null,true,true,false,false]"
   },
   {
    "input": "ops = [\"ParkingSystem\",\"addCar\"], args = [[0,0,0],[2]]",
    "output": "[null,false]"
   }
  ],
  "constraints": [
   "Target O(1) per op time and O(1) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s6-r2-q1-v1",
    "input": "[\"ParkingSystem\",\"addCar\",\"addCar\",\"addCar\",\"addCar\"]\n[[1,1,0],[1],[2],[3],[1]]",
    "expectedOutput": "[null,true,true,false,false]"
   },
   {
    "id": "acc-sse-s6-r2-q1-v2",
    "input": "[\"ParkingSystem\",\"addCar\"]\n[[0,0,0],[2]]",
    "expectedOutput": "[null,false]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s6-r2-q1-h1",
    "input": "[\"ParkingSystem\",\"addCar\",\"addCar\"]\n[[2,0,0],[1],[1]]",
    "expectedOutput": "[null,true,true]"
   },
   {
    "id": "acc-sse-s6-r2-q1-h2",
    "input": "[\"ParkingSystem\",\"addCar\",\"addCar\",\"addCar\"]\n[[1,1,1],[3],[3],[2]]",
    "expectedOutput": "[null,true,false,true]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string[]} ops\n * @param {number[][]} args\n * @return {any[]}\n */\nfunction runParking(ops, args) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def runParking(self, ops: List[str], args: List[List[int]]) -> list:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version. Each element of an any[] value is passed as a JSON string in C++.\nclass Solution {\npublic:\n    vector<string> runParking(vector<string>& ops, vector<vector<int>>& args) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(1) per op",
   "space": "O(1)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-sse-s7-r2-q1": {
  "id": "acc-sse-s7-r2-q1",
  "title": "Product of the Last K Readings",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Design / Prefix Product",
  "tags": [
   "Accenture Round 2",
   "Design / Prefix Product",
   "Set 7"
  ],
  "paragraphs": [
   "Support add(num) and getProduct(k) for the product of the last k numbers, in O(1) per call (handle zeros). Return each call's result (null for add and the constructor).",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
  ],
  "examples": [
   {
    "input": "ops = [\"ProductOfNumbers\",\"add\",\"add\",\"add\",\"add\",\"add\",\"getProduct\",\"getProduct\",\"getProduct\",\"add\",\"getProduct\"], args = [[],[3],[0],[2],[5],[4],[2],[3],[4],[8],[2]]",
    "output": "[null,null,null,null,null,null,20,40,0,null,32]"
   },
   {
    "input": "ops = [\"ProductOfNumbers\",\"add\",\"getProduct\"], args = [[],[5],[1]]",
    "output": "[null,null,5]"
   }
  ],
  "constraints": [
   "Target O(1) per op time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s7-r2-q1-v1",
    "input": "[\"ProductOfNumbers\",\"add\",\"add\",\"add\",\"add\",\"add\",\"getProduct\",\"getProduct\",\"getProduct\",\"add\",\"getProduct\"]\n[[],[3],[0],[2],[5],[4],[2],[3],[4],[8],[2]]",
    "expectedOutput": "[null,null,null,null,null,null,20,40,0,null,32]"
   },
   {
    "id": "acc-sse-s7-r2-q1-v2",
    "input": "[\"ProductOfNumbers\",\"add\",\"getProduct\"]\n[[],[5],[1]]",
    "expectedOutput": "[null,null,5]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s7-r2-q1-h1",
    "input": "[\"ProductOfNumbers\",\"add\",\"add\",\"getProduct\"]\n[[],[0],[4],[2]]",
    "expectedOutput": "[null,null,null,0]"
   },
   {
    "id": "acc-sse-s7-r2-q1-h2",
    "input": "[\"ProductOfNumbers\",\"add\",\"add\",\"add\",\"getProduct\"]\n[[],[2],[3],[4],[3]]",
    "expectedOutput": "[null,null,null,null,24]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string[]} ops\n * @param {number[][]} args\n * @return {any[]}\n */\nfunction runProductOfNumbers(ops, args) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def runProductOfNumbers(self, ops: List[str], args: List[List[int]]) -> list:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version. Each element of an any[] value is passed as a JSON string in C++.\nclass Solution {\npublic:\n    vector<string> runProductOfNumbers(vector<string>& ops, vector<vector<int>>& args) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(1) per op",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-sse-s8-r2-q1": {
  "id": "acc-sse-s8-r2-q1",
  "title": "Ordered Event Stream Release",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Design",
  "tags": [
   "Accenture Round 2",
   "Design",
   "Set 8"
  ],
  "paragraphs": [
   "Events arrive as (id, value) in any order; after each insert, return the longest run of consecutive values starting at the next unreleased id. Return each call's result (null for the constructor).",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
  ],
  "examples": [
   {
    "input": "ops = [\"OrderedStream\",\"insert\",\"insert\",\"insert\",\"insert\",\"insert\"], args = [[5],[3,30],[1,10],[2,20],[5,50],[4,40]]",
    "output": "[null,[],[10],[20,30],[],[40,50]]"
   },
   {
    "input": "ops = [\"OrderedStream\",\"insert\"], args = [[2],[2,2]]",
    "output": "[null,[]]"
   }
  ],
  "constraints": [
   "Target O(N) total time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s8-r2-q1-v1",
    "input": "[\"OrderedStream\",\"insert\",\"insert\",\"insert\",\"insert\",\"insert\"]\n[[5],[3,30],[1,10],[2,20],[5,50],[4,40]]",
    "expectedOutput": "[null,[],[10],[20,30],[],[40,50]]"
   },
   {
    "id": "acc-sse-s8-r2-q1-v2",
    "input": "[\"OrderedStream\",\"insert\"]\n[[2],[2,2]]",
    "expectedOutput": "[null,[]]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s8-r2-q1-h1",
    "input": "[\"OrderedStream\",\"insert\",\"insert\"]\n[[2],[1,1],[2,2]]",
    "expectedOutput": "[null,[1],[2]]"
   },
   {
    "id": "acc-sse-s8-r2-q1-h2",
    "input": "[\"OrderedStream\",\"insert\",\"insert\",\"insert\"]\n[[3],[3,3],[2,2],[1,1]]",
    "expectedOutput": "[null,[],[],[1,2,3]]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string[]} ops\n * @param {number[][]} args\n * @return {any[]}\n */\nfunction runOrderedStream(ops, args) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def runOrderedStream(self, ops: List[str], args: List[List[int]]) -> list:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version. Each element of an any[] value is passed as a JSON string in C++.\nclass Solution {\npublic:\n    vector<string> runOrderedStream(vector<string>& ops, vector<vector<int>>& args) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N) total",
   "space": "O(N)"
  },
  "taskIndex": 1,
  "totalTasks": 1,
  "nextProblemId": null
 },
 "acc-sse-s9-r2-q1": {
  "id": "acc-sse-s9-r2-q1",
  "title": "Slot Number Lookup",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Design / Heap",
  "tags": [
   "Accenture Round 2",
   "Design / Heap",
   "Set 9"
  ],
  "paragraphs": [
   "change(index, number) sets a slot's number; find(number) returns the smallest index holding it, or -1. Return each call's result (null for change and the constructor).",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
  ],
  "examples": [
   {
    "input": "ops = [\"NumberContainers\",\"find\",\"change\",\"change\",\"change\",\"change\",\"find\",\"change\",\"find\"], args = [[],[10],[2,10],[1,10],[3,10],[5,10],[10],[1,20],[10]]",
    "output": "[null,-1,null,null,null,null,1,null,2]"
   },
   {
    "input": "ops = [\"NumberContainers\",\"find\"], args = [[],[5]]",
    "output": "[null,-1]"
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
    "input": "[\"NumberContainers\",\"find\",\"change\",\"change\",\"change\",\"change\",\"find\",\"change\",\"find\"]\n[[],[10],[2,10],[1,10],[3,10],[5,10],[10],[1,20],[10]]",
    "expectedOutput": "[null,-1,null,null,null,null,1,null,2]"
   },
   {
    "id": "acc-sse-s9-r2-q1-v2",
    "input": "[\"NumberContainers\",\"find\"]\n[[],[5]]",
    "expectedOutput": "[null,-1]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s9-r2-q1-h1",
    "input": "[\"NumberContainers\",\"change\",\"change\",\"find\"]\n[[],[1,7],[1,8],[7]]",
    "expectedOutput": "[null,null,null,-1]"
   },
   {
    "id": "acc-sse-s9-r2-q1-h2",
    "input": "[\"NumberContainers\",\"change\",\"change\",\"find\"]\n[[],[4,2],[3,2],[2]]",
    "expectedOutput": "[null,null,null,3]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string[]} ops\n * @param {number[][]} args\n * @return {any[]}\n */\nfunction runNumberContainers(ops, args) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def runNumberContainers(self, ops: List[str], args: List[List[int]]) -> list:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version. Each element of an any[] value is passed as a JSON string in C++.\nclass Solution {\npublic:\n    vector<string> runNumberContainers(vector<string>& ops, vector<vector<int>>& args) {\n        // Write your solution here\n    }\n};\n"
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
  "title": "Room Booking Calendar",
  "difficulty": "Medium",
  "company": "Accenture",
  "category": "Design / Intervals",
  "tags": [
   "Accenture Round 2",
   "Design / Intervals",
   "Set 10"
  ],
  "paragraphs": [
   "book(start, end) books [start, end) if it does not overlap an existing booking, and returns whether it succeeded. Return each call's result (null for the constructor).",
   "Round 2 is a technical interview: after your code works you will explain the logic, complexity and edge cases in plain language."
  ],
  "examples": [
   {
    "input": "ops = [\"MyCalendar\",\"book\",\"book\",\"book\"], args = [[],[10,20],[15,25],[20,30]]",
    "output": "[null,true,false,true]"
   },
   {
    "input": "ops = [\"MyCalendar\",\"book\",\"book\"], args = [[],[1,2],[1,2]]",
    "output": "[null,true,false]"
   }
  ],
  "constraints": [
   "Target O(N) per op time and O(N) space.",
   "Handle empty, single-element and duplicate-heavy inputs.",
   "Write readable code with clear names."
  ],
  "visibleTestCases": [
   {
    "id": "acc-sse-s10-r2-q1-v1",
    "input": "[\"MyCalendar\",\"book\",\"book\",\"book\"]\n[[],[10,20],[15,25],[20,30]]",
    "expectedOutput": "[null,true,false,true]"
   },
   {
    "id": "acc-sse-s10-r2-q1-v2",
    "input": "[\"MyCalendar\",\"book\",\"book\"]\n[[],[1,2],[1,2]]",
    "expectedOutput": "[null,true,false]"
   }
  ],
  "hiddenTestCases": [
   {
    "id": "acc-sse-s10-r2-q1-h1",
    "input": "[\"MyCalendar\",\"book\",\"book\",\"book\"]\n[[],[5,10],[0,5],[0,6]]",
    "expectedOutput": "[null,true,true,false]"
   },
   {
    "id": "acc-sse-s10-r2-q1-h2",
    "input": "[\"MyCalendar\",\"book\"]\n[[],[0,1]]",
    "expectedOutput": "[null,true]"
   }
  ],
  "starterTemplates": {
   "javascript": "/**\n * @param {string[]} ops\n * @param {number[][]} args\n * @return {any[]}\n */\nfunction runCalendar(ops, args) {\n  // Write your solution here\n}\n",
   "python": "from typing import List\n\nclass Solution:\n    def runCalendar(self, ops: List[str], args: List[List[int]]) -> list:\n        # Write your solution here\n        pass\n",
   "cpp": "#include <vector>\n#include <string>\nusing namespace std;\n\n// Signature mirrors the JavaScript version. Each element of an any[] value is passed as a JSON string in C++.\nclass Solution {\npublic:\n    vector<string> runCalendar(vector<string>& ops, vector<vector<int>>& args) {\n        // Write your solution here\n    }\n};\n"
  },
  "optimalComplexity": {
   "time": "O(N) per op",
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
