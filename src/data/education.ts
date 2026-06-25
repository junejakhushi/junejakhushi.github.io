// ============================================================
// EDUCATION  (brief §5.3)
// ============================================================

export const education = {
  school: "Carnegie Mellon University",
  location: "Pittsburgh, PA",
  expected: "Expected May 2028",
  honors: "Dean's List with High Honors",

  degrees: [
    {
      type: "B.S.",
      field: "Mathematical Sciences (Operations Research & Statistics)",
    },
    {
      type: "B.S.",
      field: "Human-Computer Interaction",
    },
  ],

  // ── EDITABLE: displayed minor ──
  // Pick one of: "Design for Learning" | "Game Design" | "Physical Computing"
  minor: "Design for Learning",

  // ── TOGGLE (default OFF): Accelerated M.S. line (brief §5.3) ──
  // Set to true to surface the M.S. once it's official.
  showMastersLine: false,
  mastersLine: "Accelerated M.S. in Learning Engineering (in progress)",

  coursework: [
    "Introduction to Machine Learning",
    "Modern Regression",
    "Statistical Inference",
    "Probability",
    "Linear Algebra for Data Science",
    "Principles of Imperative Computation",
    "Evidence-Based Educational Design",
    "E-Learning Design Principles and Methods",
    "Experience Design",
    "Systems Thinking and Discrete-Event Simulation",
  ],
} as const;
