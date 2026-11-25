import { redirect } from "next/navigation";
import { isFounder } from "@/lib/auth/founder";
import QuestionEditor from "@/components/founder/QuestionEditor";

export const dynamic = "force-dynamic";

export default async function FounderQuestionsPage() {
  if (!(await isFounder())) redirect("/founder");
  return <QuestionEditor />;
}
