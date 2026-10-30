export interface ProblemExample {
  input: string;
  output: string;
  explanation?: string;
}

export interface ProblemDefinition {
  id: string;
  title: string;
  taskIndex?: number;
  setId?: number;
  role?: string;
  nextProblemId?: string;
  paragraphs?: string[];
  description?: string;
  category?: string;
  difficulty?: string;
  examples?: ProblemExample[];
  constraints?: string[];
  starterCode?: string;
  starterTemplates?: Record<string, string>;
  testCases?: Array<{ input: any; expected: any }>;
  [key: string]: any;
}