// ============================================================
// EDUCATION
// Coursework is grouped, quantitative first.
// To change the graduation date, update `expected` here AND
// `eyebrow` in src/data/profile.ts.
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

  // Single confirmed minor.
  minor: "Design for Learning",

  // Grouped coursework — quantitative/computational first.
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
