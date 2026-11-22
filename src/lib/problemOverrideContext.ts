"use client";

import { createContext } from "react";
import type { ProblemDefinition } from "../data/types";

export type ProblemOverrideData = {
  problems: Record<string, ProblemDefinition>;
  sets: Record<string, string[]>;
};

export const ProblemOverrideContext = createContext<ProblemOverrideData>({ problems: {}, sets: {} });
