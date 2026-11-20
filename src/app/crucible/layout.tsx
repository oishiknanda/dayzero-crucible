import type { ReactNode } from "react";
import ProblemOverrides from "../../components/ProblemOverrides";

export default function CrucibleLayout({ children }: { children: ReactNode }) {
  return <ProblemOverrides>{children}</ProblemOverrides>;
}
