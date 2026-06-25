// ============================================================
// SKILLS  (brief §5.6) — four grouped, scannable lists.
// ============================================================

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    label: "Research & Analysis",
    items: [
      "NLP",
      "Machine learning",
      "Mixed methods",
      "Qualitative coding",
      "Thematic analysis",
      "Statistical inference",
      "Regression",
      "Hierarchical/mixed models",
      "A/B testing",
      "Study design",
      "Educational data mining",
      "Automated scoring",
      "Evaluation frameworks",
    ],
  },
  {
    label: "Design & Instruction",
    items: [
      "Instructional design",
      "Scaffolding",
      "Curriculum design",
      "Formative assessment",
      "Cognitive task analysis",
      "Learning analytics",
      "Evidence-based design",
      "UX research",
      "Facilitation",
    ],
  },
  {
    label: "Tools & Tech",
    items: [
      "Python",
      "R",
      "SQL",
      "JavaScript",
      "C",
      "React",
      "Flask",
      "OpenCV",
      "Raspberry Pi",
      "Git",
      "Qualtrics",
      "AnyLogic",
      "DataShop",
      "Figma",
      "RMarkdown",
      "ggplot2",
      "pandas/NumPy",
      "Anthropic API",
    ],
  },
  {
    label: "Languages",
    items: ["English (fluent)", "Hindi (fluent)", "German (intermediate)"],
  },
];
