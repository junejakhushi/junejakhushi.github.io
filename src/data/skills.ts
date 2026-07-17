// ============================================================
// SKILLS — data science first, with design/game/facilitation kept
// as a secondary group (not removed).
//
// ⚠️ CAUSAL-INFERENCE LANGUAGE: her evidence supports foundations —
// experimentation, statistics, measurement, behavioral analysis,
// study design. Use hedged phrasing only ("foundations",
// "developing expertise"). Never claim expert/district-scale
// quasi-experimental leadership.
// ============================================================

export interface SkillGroup {
  label: string;
  items: string[];
  /** Rendered smaller/secondary. */
  secondary?: boolean;
}

export const skills: SkillGroup[] = [
  {
    label: "Data Science & Statistics",
    items: [
      "Python",
      "R",
      "SQL",
      "pandas",
      "NumPy",
      "Regression",
      "Hierarchical models",
      "Statistical inference",
      "Experimental design",
      "A/B testing",
      "Causal-inference foundations",
    ],
  },
  {
    label: "ML & Evaluation",
    items: [
      "LLM evaluation",
      "NLP",
      "Automated scoring",
      "Golden datasets",
      "Model-to-human benchmarking",
      "Error analysis",
      "Inter-rater reliability",
      "Cohen's κ",
      "Feature extraction",
      "Multimodal pipelines",
    ],
  },
  {
    label: "Education & Behavioral Research",
    items: [
      "Learning analytics",
      "Mixed methods",
      "Classroom observation",
      "Qualitative coding",
      "Study design",
      "Cognitive task analysis",
      "Measurement design",
      "Survey design",
      "Impact evaluation",
    ],
  },
  {
    label: "Engineering & Tools",
    items: [
      "JavaScript",
      "React",
      "Flask",
      "Git",
      "C",
      "AnyLogic",
      "Qualtrics",
      "R Markdown",
      "ggplot2",
      "OpenCV",
      "Anthropic API",
    ],
  },
  {
    label: "Design & Facilitation",
    secondary: true,
    items: [
      "Game design",
      "Experience/interaction design",
      "UX research",
      "Instructional design",
      "Figma",
      "Facilitation",
    ],
  },
  {
    label: "Languages",
    secondary: true,
    items: ["English (fluent)", "Hindi (fluent)", "German (intermediate)"],
  },
];
