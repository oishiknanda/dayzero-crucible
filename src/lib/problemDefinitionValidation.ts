const isStr = (value: unknown): value is string => typeof value === "string" && value.length > 0;
const isStrArr = (value: unknown) => Array.isArray(value) && value.every((item) => typeof item === "string");
const isCases = (value: unknown) => Array.isArray(value) && value.every((item) => item && typeof item === "object" && isStr((item as { id?: unknown }).id));

// Keep this validation independent of database/server modules so built-in definitions can be checked on the client too.
export function isValidProblem(id: string, definition: unknown): boolean {
  if (!definition || typeof definition !== "object") return false;
  const problem = definition as Record<string, unknown>;
  const complexity = problem.optimalComplexity as Record<string, unknown> | undefined;
  return (
    problem.id === id && isStr(problem.title) && ["Easy", "Medium", "Hard"].indexOf(String(problem.difficulty)) >= 0 &&
    isStr(problem.company) && isStr(problem.category) && isStrArr(problem.tags) && isStrArr(problem.paragraphs) &&
    Array.isArray(problem.examples) && isStrArr(problem.constraints) && isCases(problem.visibleTestCases) &&
    isCases(problem.hiddenTestCases) && !!problem.starterTemplates && typeof problem.starterTemplates === "object" &&
    !!complexity && typeof complexity.time === "string" && typeof complexity.space === "string"
  );
}
