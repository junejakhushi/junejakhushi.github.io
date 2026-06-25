// ============================================================
// PROJECTS  (brief §5.5)
// To add a project: copy one object, fill the fields, and it
// auto-appears in the grid. `tags` drive the filter UI; reuse
// existing tag strings so filters stay tidy.
// Suggested tags: Learning Design · Data/ML · Research ·
//                 Hardware/CV · Games · Product
// ============================================================

export type ProjectTag =
  | "Learning Design"
  | "Data/ML"
  | "Research"
  | "Hardware/CV"
  | "Games"
  | "Product";

export interface Project {
  title: string;
  summary: string; // one-liner, shown on the card
  description: string; // longer, shown in the detail modal
  tags: ProjectTag[];
  tech?: string[];
}

export const projects: Project[] = [
  {
    title: "Free-Throw Physics Simulator",
    summary:
      "A free-throw game that turns Newtonian mechanics into tactile play.",
    description:
      "A learning tool for Newtonian mechanics built as a free-throw simulation game. A real-time computer-vision system tracks shot kinematics, with a scoring model and feedback loop that turns abstract physics into tactile play. (Originally started in 11th grade out of frustration with a lifeless physics textbook.)",
    tags: ["Hardware/CV", "Learning Design"],
    tech: ["Raspberry Pi", "OpenCV", "Python"],
  },
  {
    title: "CMU CS Academy Learning Redesign",
    summary:
      "End-to-end redesign of a learning experience, measured for outcome gains.",
    description:
      "End-to-end redesign of a learning experience: scoped learning objectives, restructured content flows, and built an evaluation framework to measure problem-solving outcome gains.",
    tags: ["Learning Design", "Research", "Product"],
  },
  {
    title: "TeachingTeachers",
    summary:
      "An evidence-based PD intervention for classroom problem-solving at scale.",
    description:
      "An evidence-based professional-development intervention giving teachers structured diagnostic protocols and feedback loops to support classroom problem-solving at scale.",
    tags: ["Learning Design", "Research"],
  },
  {
    title: "Evidence-Based Math PD Design",
    summary:
      "A PD program tackling math anxiety with 5th-grade math teachers.",
    description:
      "A professional-development program for 5th-grade math teachers addressing student math anxiety, grounded in research on teacher efficacy and formative-feedback design.",
    tags: ["Learning Design", "Research"],
  },
  {
    title: "Cognitive Task Analysis & Instructional Redesign",
    summary:
      "An empirical study comparing video instruction vs. learning-by-doing.",
    description:
      "An empirical study comparing video instruction vs. learning-by-doing; applied CTA and cognitive-load analysis to redesign the instructional sequence based on learner performance.",
    tags: ["Research", "Learning Design"],
  },
  {
    title: "Discrete-Event Simulation of School Funding",
    summary:
      "Modeling how funding allocation drives student outcomes — and where to intervene.",
    description:
      "Modeled how funding allocation drives student outcomes and tested interventions to identify high-leverage policy levers for reducing inequity.",
    tags: ["Data/ML", "Research"],
    tech: ["AnyLogic"],
  },
  {
    title: "Samvaad",
    summary: "A card game that builds real social ties among strangers.",
    description:
      "A card game designed to facilitate structured dialogue among strangers. Tested at CMU — participants consistently formed stronger social ties through a single session than through standard interaction.",
    tags: ["Games", "Learning Design"],
  },
  {
    title: "LL3",
    summary:
      "A study of pattern-seeking cognition and apophenia in teenagers.",
    description:
      "A study exploring pattern-seeking cognition and apophenia in teenagers using game-like prompts; designed measurement instruments to observe behavior across repeated trials.",
    tags: ["Research", "Games"],
  },
];

// Filter order for the UI (only tags actually in use are shown).
export const tagOrder: ProjectTag[] = [
  "Learning Design",
  "Data/ML",
  "Research",
  "Hardware/CV",
  "Games",
  "Product",
];
