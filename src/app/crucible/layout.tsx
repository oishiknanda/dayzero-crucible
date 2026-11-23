import type { ReactNode } from "react";
import { Suspense } from "react";
import ProblemOverrides from "../../components/ProblemOverrides";

export default function CrucibleLayout({ children }: { children: ReactNode }) {
  return <Suspense fallback={null}><ProblemOverrides>{children}</ProblemOverrides></Suspense>;
}
