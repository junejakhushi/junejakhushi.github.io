// ============================================================
// "How I Evaluate Learning Systems" — the four-step method.
// ============================================================

export interface MethodStep {
  title: string;
  body: string;
}

export const methodSteps: MethodStep[] = [
  {
    title: "Find the failure",
    body: "Talk to users, observe instruction, inspect interaction traces, and identify where the system is not serving teachers or learners.",
  },
  {
    title: "Build the evidence",
    body: "Define measures, create annotation criteria, construct datasets, and combine quantitative and qualitative evidence.",
  },
  {
    title: "Test the explanation",
    body: "Use experiments, statistical models, error analysis, and mixed-methods research to distinguish plausible stories from supported findings.",
  },
  {
    title: "Change the system",
    body: "Translate results into product, curriculum, assessment, or instructional decisions and continue measuring as the system evolves.",
  },
];
