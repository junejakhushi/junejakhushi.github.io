// ============================================================
// Shared project/case-study tag vocabulary.
// Lives in its own module so both projects.ts and caseStudies.ts
// can use it without a circular import.
// Method-first: a recruiter should see the transferable skill.
// ============================================================

export type ProjectTag =
  | "LLM Evaluation"
  | "Learning Analytics"
  | "Machine Learning"
  | "Statistics"
  | "Mixed Methods"
  | "Study Design"
  | "Simulation"
  | "Computer Vision"
  | "Game Design"
  | "Learning Design";

/** Filter order in the UI (only tags actually in use are rendered). */
export const tagOrder: ProjectTag[] = [
  "LLM Evaluation",
  "Learning Analytics",
  "Machine Learning",
  "Statistics",
  "Mixed Methods",
  "Study Design",
  "Simulation",
  "Computer Vision",
  "Game Design",
  "Learning Design",
];
