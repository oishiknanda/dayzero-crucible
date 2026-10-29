import { ProblemDefinition } from "./types";

export const AMAZON_ROUND2_PROBLEMS: Record<string, ProblemDefinition> = {
  "amz-intern-r2-s1-q1": {
    "id": "amz-intern-r2-s1-q1",
    "title": "Binary Tree Maximum Path Sum",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Trees",
    "tags": [
      "Amazon Round 2",
      "Trees",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Trees aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Binary Tree Maximum Path Sum. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-intern-r2-s1-q2": {
    "id": "amz-intern-r2-s1-q2",
    "title": "Word Break Segmentation",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Dynamic Programming",
    "tags": [
      "Amazon Round 2",
      "Dynamic Programming",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Dynamic Programming aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Word Break Segmentation. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-intern-r2-s2-q1": {
    "id": "amz-intern-r2-s2-q1",
    "title": "Lowest Common Ancestor in Binary Tree",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Trees",
    "tags": [
      "Amazon Round 2",
      "Trees",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Trees aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Lowest Common Ancestor in Binary Tree. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-intern-r2-s2-q2": {
    "id": "amz-intern-r2-s2-q2",
    "title": "Coin Change Minimum Denominations",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Dynamic Programming",
    "tags": [
      "Amazon Round 2",
      "Dynamic Programming",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Dynamic Programming aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Coin Change Minimum Denominations. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-intern-r2-s3-q1": {
    "id": "amz-intern-r2-s3-q1",
    "title": "Validate Binary Search Tree",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Trees",
    "tags": [
      "Amazon Round 2",
      "Trees",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Trees aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Validate Binary Search Tree. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-intern-r2-s3-q2": {
    "id": "amz-intern-r2-s3-q2",
    "title": "Longest Increasing Subsequence",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Dynamic Programming",
    "tags": [
      "Amazon Round 2",
      "Dynamic Programming",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Dynamic Programming aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Longest Increasing Subsequence. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-intern-r2-s4-q1": {
    "id": "amz-intern-r2-s4-q1",
    "title": "Binary Tree Right Side View",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "BFS / Trees",
    "tags": [
      "Amazon Round 2",
      "BFS / Trees",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in BFS / Trees aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Binary Tree Right Side View. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-intern-r2-s4-q2": {
    "id": "amz-intern-r2-s4-q2",
    "title": "House Robber Circular Layout",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Dynamic Programming",
    "tags": [
      "Amazon Round 2",
      "Dynamic Programming",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Dynamic Programming aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve House Robber Circular Layout. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-intern-r2-s5-q1": {
    "id": "amz-intern-r2-s5-q1",
    "title": "Serialize and Deserialize Binary Tree",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Trees / Design",
    "tags": [
      "Amazon Round 2",
      "Trees / Design",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Trees / Design aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Serialize and Deserialize Binary Tree. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-intern-r2-s5-q2": {
    "id": "amz-intern-r2-s5-q2",
    "title": "Unique Paths Grid Obstacles",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Dynamic Programming",
    "tags": [
      "Amazon Round 2",
      "Dynamic Programming",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Dynamic Programming aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Unique Paths Grid Obstacles. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-intern-r2-s6-q1": {
    "id": "amz-intern-r2-s6-q1",
    "title": "Kth Smallest Element in a BST",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "BST",
    "tags": [
      "Amazon Round 2",
      "BST",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in BST aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Kth Smallest Element in a BST. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-intern-r2-s6-q2": {
    "id": "amz-intern-r2-s6-q2",
    "title": "Partition Equal Subset Sum",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Dynamic Programming",
    "tags": [
      "Amazon Round 2",
      "Dynamic Programming",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Dynamic Programming aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Partition Equal Subset Sum. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-intern-r2-s7-q1": {
    "id": "amz-intern-r2-s7-q1",
    "title": "Path Sum III Target Frequency",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Trees / Prefix Sum",
    "tags": [
      "Amazon Round 2",
      "Trees / Prefix Sum",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Trees / Prefix Sum aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Path Sum III Target Frequency. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-intern-r2-s7-q2": {
    "id": "amz-intern-r2-s7-q2",
    "title": "Decode Ways Numeric Encodings",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Dynamic Programming",
    "tags": [
      "Amazon Round 2",
      "Dynamic Programming",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Dynamic Programming aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Decode Ways Numeric Encodings. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-intern-r2-s8-q1": {
    "id": "amz-intern-r2-s8-q1",
    "title": "Construct Binary Tree from Preorder and Inorder",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Trees",
    "tags": [
      "Amazon Round 2",
      "Trees",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Trees aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Construct Binary Tree from Preorder and Inorder. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-intern-r2-s8-q2": {
    "id": "amz-intern-r2-s8-q2",
    "title": "Maximal Square in Binary Grid",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Dynamic Programming",
    "tags": [
      "Amazon Round 2",
      "Dynamic Programming",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Dynamic Programming aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Maximal Square in Binary Grid. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-intern-r2-s9-q1": {
    "id": "amz-intern-r2-s9-q1",
    "title": "Flatten Binary Tree to Linked List",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Trees",
    "tags": [
      "Amazon Round 2",
      "Trees",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Trees aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Flatten Binary Tree to Linked List. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-intern-r2-s9-q2": {
    "id": "amz-intern-r2-s9-q2",
    "title": "Target Sum Expression Signs",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Dynamic Programming",
    "tags": [
      "Amazon Round 2",
      "Dynamic Programming",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Dynamic Programming aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Target Sum Expression Signs. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-intern-r2-s10-q1": {
    "id": "amz-intern-r2-s10-q1",
    "title": "Binary Tree Zigzag Level Order Traversal",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Trees / BFS",
    "tags": [
      "Amazon Round 2",
      "Trees / BFS",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Trees / BFS aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Binary Tree Zigzag Level Order Traversal. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-intern-r2-s10-q2": {
    "id": "amz-intern-r2-s10-q2",
    "title": "Combination Sum IV Permutations",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Dynamic Programming",
    "tags": [
      "Amazon Round 2",
      "Dynamic Programming",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Dynamic Programming aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Combination Sum IV Permutations. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde1-r2-s1-q1": {
    "id": "amz-sde1-r2-s1-q1",
    "title": "Prefix Trees & Search Autocomplete",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Tries",
    "tags": [
      "Amazon Round 2",
      "Tries",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Tries aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Prefix Trees & Search Autocomplete. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde1-r2-s1-q2": {
    "id": "amz-sde1-r2-s1-q2",
    "title": "Top-K Frequent Streaming Items",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Heaps",
    "tags": [
      "Amazon Round 2",
      "Heaps",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Heaps aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Top-K Frequent Streaming Items. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde1-r2-s2-q1": {
    "id": "amz-sde1-r2-s2-q1",
    "title": "Word Search II Multi-Prefix Matrix",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Tries / Backtracking",
    "tags": [
      "Amazon Round 2",
      "Tries / Backtracking",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Tries / Backtracking aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Word Search II Multi-Prefix Matrix. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde1-r2-s2-q2": {
    "id": "amz-sde1-r2-s2-q2",
    "title": "Find Median from Data Stream",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Two Heaps",
    "tags": [
      "Amazon Round 2",
      "Two Heaps",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Two Heaps aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Find Median from Data Stream. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde1-r2-s3-q1": {
    "id": "amz-sde1-r2-s3-q1",
    "title": "Design Add and Search Words Data Structure",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Tries",
    "tags": [
      "Amazon Round 2",
      "Tries",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Tries aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Design Add and Search Words Data Structure. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde1-r2-s3-q2": {
    "id": "amz-sde1-r2-s3-q2",
    "title": "Task Scheduler Cooldown Management",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Priority Queue",
    "tags": [
      "Amazon Round 2",
      "Priority Queue",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Priority Queue aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Task Scheduler Cooldown Management. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde1-r2-s4-q1": {
    "id": "amz-sde1-r2-s4-q1",
    "title": "Replace Words Shortest Root Replacement",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Tries",
    "tags": [
      "Amazon Round 2",
      "Tries",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Tries aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Replace Words Shortest Root Replacement. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde1-r2-s4-q2": {
    "id": "amz-sde1-r2-s4-q2",
    "title": "Reorganize String Distance Adjacent",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Greedy / Heap",
    "tags": [
      "Amazon Round 2",
      "Greedy / Heap",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Greedy / Heap aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Reorganize String Distance Adjacent. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde1-r2-s5-q1": {
    "id": "amz-sde1-r2-s5-q1",
    "title": "Map Sum Pairs Prefix Key Aggregation",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Tries",
    "tags": [
      "Amazon Round 2",
      "Tries",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Tries aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Map Sum Pairs Prefix Key Aggregation. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde1-r2-s5-q2": {
    "id": "amz-sde1-r2-s5-q2",
    "title": "Kth Largest Element in an Array",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "QuickSelect / Heap",
    "tags": [
      "Amazon Round 2",
      "QuickSelect / Heap",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in QuickSelect / Heap aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Kth Largest Element in an Array. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde1-r2-s6-q1": {
    "id": "amz-sde1-r2-s6-q1",
    "title": "Maximum XOR of Two Numbers in an Array",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Bitwise Trie",
    "tags": [
      "Amazon Round 2",
      "Bitwise Trie",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Bitwise Trie aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Maximum XOR of Two Numbers in an Array. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde1-r2-s6-q2": {
    "id": "amz-sde1-r2-s6-q2",
    "title": "Sort Characters By Frequency",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Heap / Bucket Sort",
    "tags": [
      "Amazon Round 2",
      "Heap / Bucket Sort",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Heap / Bucket Sort aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Sort Characters By Frequency. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde1-r2-s7-q1": {
    "id": "amz-sde1-r2-s7-q1",
    "title": "Stream of Characters Suffix Matcher",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Aho-Corasick / Trie",
    "tags": [
      "Amazon Round 2",
      "Aho-Corasick / Trie",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Aho-Corasick / Trie aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Stream of Characters Suffix Matcher. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde1-r2-s7-q2": {
    "id": "amz-sde1-r2-s7-q2",
    "title": "Merge K Sorted Package Streams",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Min-Heap",
    "tags": [
      "Amazon Round 2",
      "Min-Heap",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Min-Heap aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Merge K Sorted Package Streams. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde1-r2-s8-q1": {
    "id": "amz-sde1-r2-s8-q1",
    "title": "Implement Magic Dictionary Fuzzy Search",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Tries",
    "tags": [
      "Amazon Round 2",
      "Tries",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Tries aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Implement Magic Dictionary Fuzzy Search. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde1-r2-s8-q2": {
    "id": "amz-sde1-r2-s8-q2",
    "title": "Minimum Cost to Connect Sticks",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Min-Heap",
    "tags": [
      "Amazon Round 2",
      "Min-Heap",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Min-Heap aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Minimum Cost to Connect Sticks. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde1-r2-s9-q1": {
    "id": "amz-sde1-r2-s9-q1",
    "title": "Longest Word with All Prefixes Present",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Tries",
    "tags": [
      "Amazon Round 2",
      "Tries",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Tries aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Longest Word with All Prefixes Present. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde1-r2-s9-q2": {
    "id": "amz-sde1-r2-s9-q2",
    "title": "Campus Bikes Worker-Bike Proximity",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Heap / Sorting",
    "tags": [
      "Amazon Round 2",
      "Heap / Sorting",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Heap / Sorting aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Campus Bikes Worker-Bike Proximity. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde1-r2-s10-q1": {
    "id": "amz-sde1-r2-s10-q1",
    "title": "Palindrome Pairs Prefix Suffix Matching",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Tries / Hash",
    "tags": [
      "Amazon Round 2",
      "Tries / Hash",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Tries / Hash aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Palindrome Pairs Prefix Suffix Matching. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde1-r2-s10-q2": {
    "id": "amz-sde1-r2-s10-q2",
    "title": "Furthest Building You Can Reach",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Min-Heap",
    "tags": [
      "Amazon Round 2",
      "Min-Heap",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Min-Heap aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Furthest Building You Can Reach. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde2-r2-s1-q1": {
    "id": "amz-sde2-r2-s1-q1",
    "title": "AWS AZ Network Delay Dijkstra Simulation",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Graphs",
    "tags": [
      "Amazon Round 2",
      "Graphs",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Graphs aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve AWS AZ Network Delay Dijkstra Simulation. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde2-r2-s1-q2": {
    "id": "amz-sde2-r2-s1-q2",
    "title": "Critical Server Connections Tarjan Bridges",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "DFS Low-Link",
    "tags": [
      "Amazon Round 2",
      "DFS Low-Link",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in DFS Low-Link aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Critical Server Connections Tarjan Bridges. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde2-r2-s2-q1": {
    "id": "amz-sde2-r2-s2-q1",
    "title": "Course Schedule Cycle Prerequisite Detection",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Topological Sort",
    "tags": [
      "Amazon Round 2",
      "Topological Sort",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Topological Sort aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Course Schedule Cycle Prerequisite Detection. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde2-r2-s2-q2": {
    "id": "amz-sde2-r2-s2-q2",
    "title": "Shortest Path in Binary Matrix with Obstacles",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "BFS Shortest Path",
    "tags": [
      "Amazon Round 2",
      "BFS Shortest Path",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in BFS Shortest Path aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Shortest Path in Binary Matrix with Obstacles. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde2-r2-s3-q1": {
    "id": "amz-sde2-r2-s3-q1",
    "title": "Accounts Merge Connected Identity Components",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Union Find",
    "tags": [
      "Amazon Round 2",
      "Union Find",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Union Find aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Accounts Merge Connected Identity Components. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde2-r2-s3-q2": {
    "id": "amz-sde2-r2-s3-q2",
    "title": "Word Ladder II Shortest Transformation Paths",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Bidirectional BFS",
    "tags": [
      "Amazon Round 2",
      "Bidirectional BFS",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Bidirectional BFS aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Word Ladder II Shortest Transformation Paths. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde2-r2-s4-q1": {
    "id": "amz-sde2-r2-s4-q1",
    "title": "Number of Connected Island Enclaves",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Disjoint Set",
    "tags": [
      "Amazon Round 2",
      "Disjoint Set",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Disjoint Set aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Number of Connected Island Enclaves. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde2-r2-s4-q2": {
    "id": "amz-sde2-r2-s4-q2",
    "title": "Cheapest Flights Within K Transit Stops",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Bellman-Ford / BFS",
    "tags": [
      "Amazon Round 2",
      "Bellman-Ford / BFS",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Bellman-Ford / BFS aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Cheapest Flights Within K Transit Stops. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde2-r2-s5-q1": {
    "id": "amz-sde2-r2-s5-q1",
    "title": "Reconstruct Itinerary Eulerian Path",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Hierholzer Algorithm",
    "tags": [
      "Amazon Round 2",
      "Hierholzer Algorithm",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Hierholzer Algorithm aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Reconstruct Itinerary Eulerian Path. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde2-r2-s5-q2": {
    "id": "amz-sde2-r2-s5-q2",
    "title": "Alien Dictionary Character Precedence",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Topological Sort",
    "tags": [
      "Amazon Round 2",
      "Topological Sort",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Topological Sort aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Alien Dictionary Character Precedence. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde2-r2-s6-q1": {
    "id": "amz-sde2-r2-s6-q1",
    "title": "Graph Valid Tree Connectivity Detection",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Union Find",
    "tags": [
      "Amazon Round 2",
      "Union Find",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Union Find aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Graph Valid Tree Connectivity Detection. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde2-r2-s6-q2": {
    "id": "amz-sde2-r2-s6-q2",
    "title": "All Nodes Distance K in Binary Tree Graph",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Graph Conversion",
    "tags": [
      "Amazon Round 2",
      "Graph Conversion",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Graph Conversion aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve All Nodes Distance K in Binary Tree Graph. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde2-r2-s7-q1": {
    "id": "amz-sde2-r2-s7-q1",
    "title": "Minimum Height Trees Centroid Discovery",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Tree Pruning",
    "tags": [
      "Amazon Round 2",
      "Tree Pruning",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Tree Pruning aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Minimum Height Trees Centroid Discovery. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde2-r2-s7-q2": {
    "id": "amz-sde2-r2-s7-q2",
    "title": "Path with Maximum Probability Dijkstra",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Max-Probability Graph",
    "tags": [
      "Amazon Round 2",
      "Max-Probability Graph",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Max-Probability Graph aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Path with Maximum Probability Dijkstra. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde2-r2-s8-q1": {
    "id": "amz-sde2-r2-s8-q1",
    "title": "Clone Graph Multi-Reference Serialization",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "DFS / Hash",
    "tags": [
      "Amazon Round 2",
      "DFS / Hash",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in DFS / Hash aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Clone Graph Multi-Reference Serialization. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde2-r2-s8-q2": {
    "id": "amz-sde2-r2-s8-q2",
    "title": "Rotting Oranges Multi-Source BFS Decay",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Multi-Source BFS",
    "tags": [
      "Amazon Round 2",
      "Multi-Source BFS",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Multi-Source BFS aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Rotting Oranges Multi-Source BFS Decay. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde2-r2-s9-q1": {
    "id": "amz-sde2-r2-s9-q1",
    "title": "Pacific Atlantic Water Flow Dual Wavefront",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Wavefront DFS",
    "tags": [
      "Amazon Round 2",
      "Wavefront DFS",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Wavefront DFS aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Pacific Atlantic Water Flow Dual Wavefront. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde2-r2-s9-q2": {
    "id": "amz-sde2-r2-s9-q2",
    "title": "Is Graph Bipartite 2-Coloring Check",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Graph Coloring",
    "tags": [
      "Amazon Round 2",
      "Graph Coloring",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Graph Coloring aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Is Graph Bipartite 2-Coloring Check. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde2-r2-s10-q1": {
    "id": "amz-sde2-r2-s10-q1",
    "title": "Evaluate Division Directed Weighted Graphs",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "Weighted Union-Find",
    "tags": [
      "Amazon Round 2",
      "Weighted Union-Find",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Weighted Union-Find aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Evaluate Division Directed Weighted Graphs. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde2-r2-s10-q2": {
    "id": "amz-sde2-r2-s10-q2",
    "title": "Snakes and Ladders Min-Move Game Graph",
    "difficulty": "Medium",
    "company": "Amazon",
    "category": "BFS Game State",
    "tags": [
      "Amazon Round 2",
      "BFS Game State",
      "Medium"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in BFS Game State aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Snakes and Ladders Min-Move Game Graph. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde3-r2-s1-q1": {
    "id": "amz-sde3-r2-s1-q1",
    "title": "High-Throughput Sliding Window Rate Limiter",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Concurrency / Window",
    "tags": [
      "Amazon Round 2",
      "Concurrency / Window",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Concurrency / Window aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve High-Throughput Sliding Window Rate Limiter. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde3-r2-s1-q2": {
    "id": "amz-sde3-r2-s1-q2",
    "title": "CloudWatch Telemetry Segment Tree Range Index",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Segment Trees",
    "tags": [
      "Amazon Round 2",
      "Segment Trees",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Segment Trees aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve CloudWatch Telemetry Segment Tree Range Index. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde3-r2-s2-q1": {
    "id": "amz-sde3-r2-s2-q1",
    "title": "Distributed LRU Cache Eviction and Synchronization",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "System DSA",
    "tags": [
      "Amazon Round 2",
      "System DSA",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in System DSA aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Distributed LRU Cache Eviction and Synchronization. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde3-r2-s2-q2": {
    "id": "amz-sde3-r2-s2-q2",
    "title": "Log Consensus Term Raft State Machine",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "State Machine",
    "tags": [
      "Amazon Round 2",
      "State Machine",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in State Machine aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Log Consensus Term Raft State Machine. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde3-r2-s3-q1": {
    "id": "amz-sde3-r2-s3-q1",
    "title": "Atomic Lock Lease Distributed Time Sync",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Distributed Locks",
    "tags": [
      "Amazon Round 2",
      "Distributed Locks",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Distributed Locks aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Atomic Lock Lease Distributed Time Sync. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde3-r2-s3-q2": {
    "id": "amz-sde3-r2-s3-q2",
    "title": "Prefix Range Aggregation Dynamic Fenwick Tree",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Binary Indexed Tree",
    "tags": [
      "Amazon Round 2",
      "Binary Indexed Tree",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Binary Indexed Tree aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Prefix Range Aggregation Dynamic Fenwick Tree. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde3-r2-s4-q1": {
    "id": "amz-sde3-r2-s4-q1",
    "title": "Event Sourced Stream Conflict Resolution Order",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Vector Clocks",
    "tags": [
      "Amazon Round 2",
      "Vector Clocks",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Vector Clocks aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Event Sourced Stream Conflict Resolution Order. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde3-r2-s4-q2": {
    "id": "amz-sde3-r2-s4-q2",
    "title": "Multi-Version Concurrency Key-Value Snapshot Engine",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "MVCC B-Tree",
    "tags": [
      "Amazon Round 2",
      "MVCC B-Tree",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in MVCC B-Tree aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Multi-Version Concurrency Key-Value Snapshot Engine. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde3-r2-s5-q1": {
    "id": "amz-sde3-r2-s5-q1",
    "title": "Deadlock Detection in Distributed Transaction Graphs",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Wait-For Graphs",
    "tags": [
      "Amazon Round 2",
      "Wait-For Graphs",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Wait-For Graphs aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Deadlock Detection in Distributed Transaction Graphs. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde3-r2-s5-q2": {
    "id": "amz-sde3-r2-s5-q2",
    "title": "Consistent Hash Ring Partition Rebalancing",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Ring Hashing",
    "tags": [
      "Amazon Round 2",
      "Ring Hashing",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Ring Hashing aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Consistent Hash Ring Partition Rebalancing. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde3-r2-s6-q1": {
    "id": "amz-sde3-r2-s6-q1",
    "title": "Circuit Breaker Exponential Backoff State Registry",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Resiliency Systems",
    "tags": [
      "Amazon Round 2",
      "Resiliency Systems",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Resiliency Systems aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Circuit Breaker Exponential Backoff State Registry. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde3-r2-s6-q2": {
    "id": "amz-sde3-r2-s6-q2",
    "title": "Sparse Matrix Stream Vector Multiplication",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Sparse Indexing",
    "tags": [
      "Amazon Round 2",
      "Sparse Indexing",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Sparse Indexing aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Sparse Matrix Stream Vector Multiplication. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde3-r2-s7-q1": {
    "id": "amz-sde3-r2-s7-q1",
    "title": "Distributed Task Scheduler Dependencies Directed Acyclic Graph",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Parallel DAG Engine",
    "tags": [
      "Amazon Round 2",
      "Parallel DAG Engine",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Parallel DAG Engine aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Distributed Task Scheduler Dependencies Directed Acyclic Graph. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde3-r2-s7-q2": {
    "id": "amz-sde3-r2-s7-q2",
    "title": "Dynamic Priority Burst Queue Manager",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Multi-Level Feedback",
    "tags": [
      "Amazon Round 2",
      "Multi-Level Feedback",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Multi-Level Feedback aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Dynamic Priority Burst Queue Manager. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde3-r2-s8-q1": {
    "id": "amz-sde3-r2-s8-q1",
    "title": "Replicated WAL Commit Log Compaction Processor",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "WAL / LSM-Tree",
    "tags": [
      "Amazon Round 2",
      "WAL / LSM-Tree",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in WAL / LSM-Tree aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Replicated WAL Commit Log Compaction Processor. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde3-r2-s8-q2": {
    "id": "amz-sde3-r2-s8-q2",
    "title": "SkipList High-Throughput Concurrent Order Index",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "SkipList",
    "tags": [
      "Amazon Round 2",
      "SkipList",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in SkipList aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve SkipList High-Throughput Concurrent Order Index. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde3-r2-s9-q1": {
    "id": "amz-sde3-r2-s9-q1",
    "title": "Idempotent Message Deduplication Window",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Bloom Filter / Sliding",
    "tags": [
      "Amazon Round 2",
      "Bloom Filter / Sliding",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Bloom Filter / Sliding aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Idempotent Message Deduplication Window. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde3-r2-s9-q2": {
    "id": "amz-sde3-r2-s9-q2",
    "title": "Heavy Hitters Streaming Space-Saving Algorithm",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Count-Min Sketch",
    "tags": [
      "Amazon Round 2",
      "Count-Min Sketch",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Count-Min Sketch aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Heavy Hitters Streaming Space-Saving Algorithm. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde3-r2-s10-q1": {
    "id": "amz-sde3-r2-s10-q1",
    "title": "Distributed Barrier Synchronization Coordinator",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Consensus Primitives",
    "tags": [
      "Amazon Round 2",
      "Consensus Primitives",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Consensus Primitives aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Distributed Barrier Synchronization Coordinator. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-sde3-r2-s10-q2": {
    "id": "amz-sde3-r2-s10-q2",
    "title": "Adaptive Quorum Read-Repair Consistency Checker",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Gossip Protocol",
    "tags": [
      "Amazon Round 2",
      "Gossip Protocol",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Gossip Protocol aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Adaptive Quorum Read-Repair Consistency Checker. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-principal-r2-s1-q1": {
    "id": "amz-principal-r2-s1-q1",
    "title": "Multi-Region Planetary Consensus Quorum Lease",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Enterprise Architecture",
    "tags": [
      "Amazon Round 2",
      "Enterprise Architecture",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Enterprise Architecture aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Multi-Region Planetary Consensus Quorum Lease. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-principal-r2-s1-q2": {
    "id": "amz-principal-r2-s1-q2",
    "title": "Distributed Telemetry HyperLogLog Cardinality Estimation",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Probabilistic Algorithms",
    "tags": [
      "Amazon Round 2",
      "Probabilistic Algorithms",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Probabilistic Algorithms aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Distributed Telemetry HyperLogLog Cardinality Estimation. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-principal-r2-s2-q1": {
    "id": "amz-principal-r2-s2-q1",
    "title": "Global Transaction Two-Phase Commit Saga Coordinator",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Distributed Transactions",
    "tags": [
      "Amazon Round 2",
      "Distributed Transactions",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Distributed Transactions aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Global Transaction Two-Phase Commit Saga Coordinator. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-principal-r2-s2-q2": {
    "id": "amz-principal-r2-s2-q2",
    "title": "Global Multi-Tenant Traffic Throttle Token Bucket",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Traffic Governance",
    "tags": [
      "Amazon Round 2",
      "Traffic Governance",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Traffic Governance aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Global Multi-Tenant Traffic Throttle Token Bucket. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-principal-r2-s3-q1": {
    "id": "amz-principal-r2-s3-q1",
    "title": "Failure Domain Blast Radius Partition Evaluator",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Topology Analysis",
    "tags": [
      "Amazon Round 2",
      "Topology Analysis",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Topology Analysis aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Failure Domain Blast Radius Partition Evaluator. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-principal-r2-s3-q2": {
    "id": "amz-principal-r2-s3-q2",
    "title": "Dynamic Consistent Ring Partition Shard Migrator",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Shard Coordination",
    "tags": [
      "Amazon Round 2",
      "Shard Coordination",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Shard Coordination aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Dynamic Consistent Ring Partition Shard Migrator. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-principal-r2-s4-q1": {
    "id": "amz-principal-r2-s4-q1",
    "title": "Cross-Region Active-Active CRDT State Conflict Resolver",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "CRDTs",
    "tags": [
      "Amazon Round 2",
      "CRDTs",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in CRDTs aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Cross-Region Active-Active CRDT State Conflict Resolver. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-principal-r2-s4-q2": {
    "id": "amz-principal-r2-s4-q2",
    "title": "Multi-Cluster Global Edge Routing Latency Optimizer",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Network Flow",
    "tags": [
      "Amazon Round 2",
      "Network Flow",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Network Flow aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Multi-Cluster Global Edge Routing Latency Optimizer. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-principal-r2-s5-q1": {
    "id": "amz-principal-r2-s5-q1",
    "title": "Byzantine Resilient Configuration Consensus Mesh",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "BFT Consensus",
    "tags": [
      "Amazon Round 2",
      "BFT Consensus",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in BFT Consensus aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Byzantine Resilient Configuration Consensus Mesh. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-principal-r2-s5-q2": {
    "id": "amz-principal-r2-s5-q2",
    "title": "Tiered Cold-Hot Storage Lifecycle Migration Engine",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Storage Systems",
    "tags": [
      "Amazon Round 2",
      "Storage Systems",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Storage Systems aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Tiered Cold-Hot Storage Lifecycle Migration Engine. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-principal-r2-s6-q1": {
    "id": "amz-principal-r2-s6-q1",
    "title": "Enterprise Access Control Hierarchical RBAC Invariant Checker",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Graph Access Control",
    "tags": [
      "Amazon Round 2",
      "Graph Access Control",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Graph Access Control aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Enterprise Access Control Hierarchical RBAC Invariant Checker. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-principal-r2-s6-q2": {
    "id": "amz-principal-r2-s6-q2",
    "title": "Asynchronous Message Bus Blast-Proof Dead-Letter Quarantine",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Message Brokers",
    "tags": [
      "Amazon Round 2",
      "Message Brokers",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Message Brokers aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Asynchronous Message Bus Blast-Proof Dead-Letter Quarantine. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-principal-r2-s7-q1": {
    "id": "amz-principal-r2-s7-q1",
    "title": "Autonomous Canary Release Health Metric Correlator",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Operational Intelligence",
    "tags": [
      "Amazon Round 2",
      "Operational Intelligence",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Operational Intelligence aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Autonomous Canary Release Health Metric Correlator. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-principal-r2-s7-q2": {
    "id": "amz-principal-r2-s7-q2",
    "title": "Distributed Ledger Immutable Audit Trail Cryptographic Verifier",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Merkle Trees",
    "tags": [
      "Amazon Round 2",
      "Merkle Trees",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Merkle Trees aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Distributed Ledger Immutable Audit Trail Cryptographic Verifier. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-principal-r2-s8-q1": {
    "id": "amz-principal-r2-s8-q1",
    "title": "Planetary Object Store Deduplication Chunk Fingerprinter",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Content Addressed Storage",
    "tags": [
      "Amazon Round 2",
      "Content Addressed Storage",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Content Addressed Storage aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Planetary Object Store Deduplication Chunk Fingerprinter. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-principal-r2-s8-q2": {
    "id": "amz-principal-r2-s8-q2",
    "title": "Zero-Downtime Schema Evolution Invariant Validator",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Database Systems",
    "tags": [
      "Amazon Round 2",
      "Database Systems",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Database Systems aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Zero-Downtime Schema Evolution Invariant Validator. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-principal-r2-s9-q1": {
    "id": "amz-principal-r2-s9-q1",
    "title": "Multi-Zone Power Outage Resilient Failover Orchestrator",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Disaster Recovery",
    "tags": [
      "Amazon Round 2",
      "Disaster Recovery",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Disaster Recovery aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Multi-Zone Power Outage Resilient Failover Orchestrator. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-principal-r2-s9-q2": {
    "id": "amz-principal-r2-s9-q2",
    "title": "Elastic Horizontal Scaler Predictive Queue Pressure Sensor",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Control Theory",
    "tags": [
      "Amazon Round 2",
      "Control Theory",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Control Theory aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Elastic Horizontal Scaler Predictive Queue Pressure Sensor. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-principal-r2-s10-q1": {
    "id": "amz-principal-r2-s10-q1",
    "title": "Cross-Cloud Hybrid Mesh Wireguard Tunnel Multi-Path Balancer",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Software Defined Network",
    "tags": [
      "Amazon Round 2",
      "Software Defined Network",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Software Defined Network aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Cross-Cloud Hybrid Mesh Wireguard Tunnel Multi-Path Balancer. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  },
  "amz-principal-r2-s10-q2": {
    "id": "amz-principal-r2-s10-q2",
    "title": "Event Horizon Log Deduplication Distributed Window Buffer",
    "difficulty": "Hard",
    "company": "Amazon",
    "category": "Stream Processing",
    "tags": [
      "Amazon Round 2",
      "Stream Processing",
      "Hard"
    ],
    "paragraphs": [
      "This challenge evaluates core competencies in Stream Processing aligned with Amazon's Leadership Principles and technical assessment standards.",
      "Design an optimal algorithm to solve Event Horizon Log Deduplication Distributed Window Buffer. Ensure all time and space asymptotic boundaries are strictly respected."
    ],
    "examples": [
      {
        "input": "data = [1, 2, 3], threshold = 2",
        "output": "[1, 2]",
        "explanation": "Standard baseline test scenario."
      },
      {
        "input": "data = [10, 20], threshold = 5",
        "output": "[10]",
        "explanation": "Boundary condition scenario."
      }
    ],
    "constraints": [
      "Input sizes range up to 10^5 elements.",
      "Operations must complete within 2.0 seconds execution limit.",
      "Memory allocation must remain within 256MB."
    ],
    "starterTemplates": {
      "python": "def solve(data, param=None):\n    # Write your solution here\n    return []",
      "javascript": "function solve(data, param) {\n    // Write your solution here\n    return [];\n}",
      "cpp": "#include <vector>\nusing namespace std;\n\nvector<int> solve(vector<int>& data, int param) {\n    return {};\n}",
      "java": "import java.util.*;\n\npublic class Solution {\n    public int[] solve(int[] data, int param) {\n        return new int[0];\n    }\n}"
    },
    "visibleTestCases": [
      {
        "id": "v-1",
        "input": "[1, 2, 3], 2",
        "expectedOutput": "[1, 2]",
        "isHidden": false
      },
      {
        "id": "v-2",
        "input": "[10, 20, 30], 1",
        "expectedOutput": "[10]",
        "isHidden": false
      },
      {
        "id": "v-3",
        "input": "[], 0",
        "expectedOutput": "[]",
        "isHidden": false
      }
    ],
    "hiddenTestCases": [
      {
        "id": "h-1",
        "input": "[100, 200, 300, 400], 3",
        "expectedOutput": "[100, 200, 300]",
        "isHidden": true
      },
      {
        "id": "h-2",
        "input": "[-5, -10, 15], 2",
        "expectedOutput": "[-5, -10]",
        "isHidden": true
      }
    ],
    "optimalComplexity": {
      "time": "O(N log N) or O(N)",
      "space": "O(N)"
    }
  }
};
