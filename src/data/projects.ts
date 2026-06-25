// ============================================================
// PROJECTS  (refinement §6)
// Each project leads with a METHOD-FIRST eyebrow so a non-education
// recruiter sees the transferable skill before the domain.
// `tags` drive the filter UI (method-forward vocabulary).
// To add a project: copy one object, fill the fields — it auto-
// appears in the grid and in any matching filters.
// ============================================================

export type ProjectTag =
  | "Machine Learning"
  | "NLP"
  | "Computer Vision"
  | "Simulation"
  | "Statistics"
  | "Game Design"
  | "UX"
  | "Study Design"
  | "Research"
  | "Learning Design";

export interface Project {
  title: string;
  eyebrow: string; // method-first line shown atop the card
  summary: string; // one-liner, shown on the card
  description: string; // longer, shown in the detail modal
  tags: ProjectTag[];
  tech?: string[];
}

// Ordered to front-load the technical/quant and play work, then learning.
export const projects: Project[] = [
  {
    title: "Automated Scoring of Open-Ended Learner Text",
    eyebrow: "NLP · Automated Scoring · Machine Learning",
    summary:
      "An NLP pipeline that scores open-ended responses and benchmarks against human raters.",
    description:
      "A scalable NLP pipeline (feature extraction, automated scoring, benchmarking, and inter-rater reliability) that classifies open-ended learner text — reflection depth, self-explanation quality, and error diagnosis — in an AI-assisted Python tutoring study. Built from the OAK Lab research and validated against expert annotators.",
    tags: ["NLP", "Machine Learning", "Research"],
    tech: ["Python"],
  },
  {
    title: "Free-Throw Physics Simulator",
    eyebrow: "Computer Vision · Real-Time Systems · Game-Based Design",
    summary:
      "A free-throw game that turns Newtonian mechanics into tactile play.",
    description:
      "A learning tool for Newtonian mechanics built as a free-throw simulation game. A real-time computer-vision system tracks shot kinematics, with a scoring model and feedback loop that turns abstract physics into tactile play. (Originally started in 11th grade out of frustration with a lifeless physics textbook.)",
    tags: ["Computer Vision", "Game Design"],
    tech: ["Raspberry Pi", "OpenCV", "Python"],
  },
  {
    title: "Discrete-Event Simulation of School Funding",
    eyebrow: "Simulation · Operations Research · Modeling",
    summary:
      "Modeling how funding allocation drives outcomes — and where to intervene.",
    description:
      "Modeled how funding allocation drives student outcomes and tested interventions to identify high-leverage levers for reducing inequity.",
    tags: ["Simulation", "Statistics", "Research"],
    tech: ["AnyLogic"],
  },
  {
    title: "Samvaad",
    eyebrow: "Game Design · Social Systems · Facilitation",
    summary: "A card game that builds real social ties among strangers.",
    description:
      "A card game designed to facilitate structured dialogue among strangers. Tested at CMU — participants consistently formed stronger social ties through a single session than through standard interaction.",
    tags: ["Game Design", "Research"],
  },
  {
    title: "LL3",
    eyebrow: "Study Design · Play & Cognition · Behavioral Research",
    summary:
      "A study of pattern-seeking cognition and apophenia in teenagers.",
    description:
      "A study exploring pattern-seeking cognition and apophenia in teenagers using game-like prompts; designed measurement instruments to observe behavior across repeated trials.",
    tags: ["Study Design", "Game Design", "Research"],
  },
  {
    title: "CMU CS Academy Learning Redesign",
    eyebrow: "Learning Design · UX · Evaluation",
    summary:
      "End-to-end redesign of a learning experience, measured for outcome gains.",
    description:
      "End-to-end redesign of a learning experience: scoped learning objectives, restructured content flows, and built an evaluation framework to measure problem-solving outcome gains.",
    tags: ["UX", "Learning Design", "Research"],
  },
  {
    title: "Cognitive Task Analysis & Instructional Redesign",
    eyebrow: "Research · Study Design · Evaluation",
    summary:
      "An empirical study comparing video instruction vs. learning-by-doing.",
    description:
      "An empirical study comparing video instruction vs. learning-by-doing; applied CTA and cognitive-load analysis to redesign the instructional sequence based on learner performance.",
    tags: ["Research", "Study Design", "Learning Design"],
  },
  {
    title: "TeachingTeachers",
    eyebrow: "Research · Study Design · Learning Design",
    summary:
      "An evidence-based PD intervention for classroom problem-solving at scale.",
    description:
      "An evidence-based professional-development intervention giving teachers structured diagnostic protocols and feedback loops to support classroom problem-solving at scale.",
    tags: ["Research", "Study Design", "Learning Design"],
  },
  {
    title: "Evidence-Based Math PD Design",
    eyebrow: "Research · Study Design · Learning Design",
    summary:
      "A PD program tackling math anxiety with 5th-grade math teachers.",
    description:
      "A professional-development program for 5th-grade math teachers addressing student math anxiety, grounded in research on teacher efficacy and formative-feedback design.",
    tags: ["Research", "Study Design", "Learning Design"],
  },
];

// Filter order for the UI (method-first; only tags in use are shown).
export const tagOrder: ProjectTag[] = [
  "Machine Learning",
  "NLP",
  "Computer Vision",
  "Simulation",
  "Statistics",
  "Game Design",
  "UX",
  "Study Design",
  "Research",
  "Learning Design",
];
