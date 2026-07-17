// ============================================================
// METRICS & FINDINGS — the numbers shown as stat tiles / charts.
//
// ⚠️ CONTENT INTEGRITY: every value here must be traceable to real,
// supplied work. Do NOT add a number to make a chart look fuller.
// If a figure isn't verified, it does not belong in this file —
// leave the visual out instead.
//
// Current provenance:
//   200+ students      → Eberly Center classroom observation
//   30% overhead       → The Unifly Collective, donor-ops automation
//   45% fewer queries  → Vinsol, onboarding platform redesign
//   $5K+ / 6 weeks     → The Unifly Collective, fundraising fellowship
//   reflection finding → OAK Lab, AI-assisted Python tutoring study
// ============================================================

export interface Stat {
  value: string;
  label: string;
  context: string;
  source: string;
  /** Direction of the change, where the number represents one. */
  direction?: "up" | "down";
}

export const impactStats: Stat[] = [
  {
    value: "200+",
    label: "students observed",
    context:
      "Structured classroom observation across participating courses, coded into analyzable instructional data.",
    source: "Eberly Center",
  },
  {
    value: "30%",
    label: "manual overhead cut",
    context:
      "Automated donor-operations workflows: receipt generation, newsletter distribution, and CSR reporting.",
    source: "The Unifly Collective",
    direction: "down",
  },
  {
    value: "45%",
    label: "fewer support queries",
    context:
      "Measured after shipping an onboarding-platform redesign driven by new-hire user research.",
    source: "Vinsol",
    direction: "down",
  },
  {
    value: "$5K+",
    label: "raised in 6 weeks",
    context:
      "A pan-India fundraising fellowship built end to end and run at near-zero cost.",
    source: "The Unifly Collective",
  },
];

// ── The headline finding (OAK Lab) ───────────────────────────
// Values are the approximations supplied by Khushi. They are
// rendered with "≈" and framed as within-study results — never as
// a general causal claim about reflection.

export interface FindingMeasure {
  label: string;
  /** Percent change vs. the comparison condition. Drives bar length. */
  change: number;
  /** The label printed on the bar. Keep the "≈" — these are approximate. */
  display: string;
  kind: "increase" | "decrease" | "none";
}

export const reflectionFinding = {
  eyebrow: "Headline finding · OAK Lab",
  title: "Reflection changed behavior. It didn't change performance.",
  measures: [
    {
      label: "Time on feedback",
      change: 100,
      display: "≈ 2× (+100%)",
      kind: "increase",
    },
    {
      label: "Practice iterations",
      change: -40,
      display: "≈ −40%",
      kind: "decrease",
    },
    {
      label: "Performance",
      change: 0,
      display: "No measurable gain",
      kind: "none",
    },
  ] as FindingMeasure[],
  caption:
    "Change under the reflection condition versus comparison, in an AI-assisted Python tutoring study. Bars extend right for an increase and left for a decrease; values are approximate.",
  takeaway:
    "Practice iterations predicted final performance better than time spent on feedback, so reflection scaffolds should drive further practice, not just attention.",
  note: "A finding within this study and population, not a general causal claim about reflection.",
};
