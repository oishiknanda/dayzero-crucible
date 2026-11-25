import { redirect } from "next/navigation";
import { isFounder } from "@/lib/auth/founder";
import ProctoringReport from "@/components/founder/ProctoringReport";

export const dynamic = "force-dynamic";

export default async function FounderProctoringPage() {
  if (!(await isFounder())) redirect("/founder");
  return <ProctoringReport />;
}
