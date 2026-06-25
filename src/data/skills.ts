// ============================================================
// SKILLS  (refinement §7) — five groups that lead with technical
// and quantitative depth, with a distinct design/experience cluster.
// ============================================================

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    label: "Programming & Data",
    items: ["Python", "R", "SQL", "JavaScript", "C", "pandas", "NumPy", "Git"],
  },
  {
    label: "Machine Learning & Statistics",
    items: [
      "NLP",
      "Machine learning",
      "LLM fine-tuning",
      "Regression",
      "Statistical inference",
      "Hierarchical/mixed models",
      "Probability",
      "A/B testing",
      "Experimental design",
    ],
  },
  {
    label: "Systems, Modeling & Tools",
    items: [
      "OpenCV",
      "AnyLogic (discrete-event simulation)",
      "Optimization",
      "React",
      "Flask",
      "Anthropic API",
      "Qualtrics",
      "DataShop",
    ],
  },
  {
    label: "Design & Research",
    items: [
      "Game design",
      "Experience/interaction design",
      "UX research",
      "Study design",
      "Mixed methods",
      "Qualitative coding",
      "Instructional design",
      "Facilitation",
      "Figma",
    ],
  },
  {
    label: "Languages",
    items: ["English (fluent)", "Hindi (fluent)", "German (intermediate)"],
  },
];
