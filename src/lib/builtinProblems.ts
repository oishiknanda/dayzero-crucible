// Every built-in question definition in the code, by id. Used by "Reset to built-in default" in the question editor.
import { PROBLEMS_DATABASE } from "../data/problemsRegistry";
import { GOOGLE_ALL_PROBLEMS } from "../data/problems/google/googleProblems";
import { ACCENTURE_ALL_PROBLEMS } from "../data/problems/accenture/accentureProblems";
import { ZOMATO_ALL_PROBLEMS } from "../data/problems/zomato/zomatoProblems";

export function builtinProblem(id: string): unknown {
  const sources: Array<Record<string, unknown>> = [GOOGLE_ALL_PROBLEMS, ACCENTURE_ALL_PROBLEMS, ZOMATO_ALL_PROBLEMS, PROBLEMS_DATABASE as unknown as Record<string, unknown>];
  for (const s of sources) if (s[id]) return s[id];
  return undefined;
}
