// ============================================================
// EDUCATION  (refinement §8)
// Lead with the two B.S. degrees; the M.S. line is hidden by
// default (toggle below). Coursework is grouped, quantitative
// first, and uses only her real courses.
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

  // ── EDITABLE: minors ──
  minors: ["Game Design", "Physical Computing"],

  // ── TOGGLE (default OFF): Accelerated M.S. line ──
  // Khushi isn't formally enrolled yet; leaving this off avoids
  // pigeonholing her as education-only. Set true to surface it later.
  showMastersLine: false,
  mastersLine: "Accelerated M.S. in Learning Engineering (in progress)",

  // Grouped coursework — quantitative/computational first (§8).
  coursework: [
    {
      group: "Quantitative & Computational",
      items: [
        "Introduction to Machine Learning",
        "Modern Regression",
        "Statistical Inference",
        "Probability",
        "Linear Algebra for Data Science",
        "Principles of Imperative Computation",
        "Systems Thinking and Discrete-Event Simulation",
      ],
    },
    {
      group: "Design & Learning",
      items: [
        "Evidence-Based Educational Design",
        "E-Learning Design Principles and Methods",
        "Experience Design",
      ],
    },
  ],
} as const;
