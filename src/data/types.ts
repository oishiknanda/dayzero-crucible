export interface TestCase {
  id: string;
  input: string;
  expectedOutput: string;
  explanation?: string;
  isHidden?: boolean;
}

export interface StarterTemplates {
  python?: string;
  javascript?: string;
  cpp?: string;
  java?: string;
  behavioral?: string;
}

export interface ProblemDefinition {
  id: string;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  company: "Amazon" | "Google" | "Accenture" | "Zomato";
  category: string;
  tags: string[];
  paragraphs: string[];
  examples: Array<{
    input: string;
    output: string;
    explanation?: string;
  }>;
  constraints: string[];
  visibleTestCases: TestCase[];
  hiddenTestCases: TestCase[];
  starterTemplates: StarterTemplates;
  solutionReference?: string;
  optimalComplexity: {
    time: string;
    space: string;
  };
  bulletPoints?: string[];
  nextProblemId?: string | null;
  taskIndex?: number;
  totalTasks?: number;

}