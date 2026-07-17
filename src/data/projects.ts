// ============================================================
// PROJECTS — the gallery.
//
// The four featured case studies are NOT duplicated here: they live
// in src/data/caseStudies.ts and are merged into `galleryItems`
// below, so their content has exactly one source of truth.
//
// This file holds the remaining projects, which open in the modal
// (they have no dedicated page).
//
// To add a project: copy one object into `projects`. It auto-appears
// in the gallery and in any matching filters.
// ============================================================

import type { ProjectTag } from "./tags";
import { caseStudies } from "./caseStudies";

export interface Project {
  title: string;
  /** Optional internal/short name shown under the title (e.g. "LL3"). */
  subtitle?: string;
  /** Method-first line shown atop the card. */
  eyebrow: string;
  summary: string;
  description: string;
  tags: ProjectTag[];
  tech?: string[];
}

export const projects: Project[] = [
  {
    title: "Cognitive Task Analysis & Instructional Redesign",
    eyebrow: "Study Design · Cognitive Load · Evaluation",
    summary:
      "An empirical study comparing video instruction vs. learning-by-doing.",
    description:
      "An empirical study comparing video instruction vs. learning-by-doing; applied cognitive task analysis and cognitive-load analysis to redesign the instructional sequence based on learner performance.",
    tags: ["Study Design", "Mixed Methods", "Learning Design"],
  },
  {
    title: "Evidence-Based Math Professional Development",
    eyebrow: "Study Design · Instructional Research",
    summary:
      "A PD program tackling math anxiety with 5th-grade math teachers.",
    description:
      "A professional-development program for 5th-grade math teachers addressing student math anxiety, grounded in research on teacher efficacy and formative-feedback design.",
    tags: ["Study Design", "Learning Design"],
  },
  {
    title: "Discrete-Event Simulation of School Funding",
    eyebrow: "Simulation · Operations Research · Modeling",
    summary:
      "Modeling how funding allocation drives outcomes, and where to intervene.",
    description:
      "Modeled how funding allocation drives student outcomes and tested interventions to identify high-leverage levers for reducing inequity.",
    tags: ["Simulation", "Statistics"],
    tech: ["AnyLogic"],
  },
  {
    title: "CMU CS Academy Learning Redesign",
    eyebrow: "Learning Design · UX · Evaluation",
    summary:
      "End-to-end redesign of a learning experience, measured for outcome gains.",
    description:
      "End-to-end redesign of a learning experience: scoped learning objectives, restructured content flows, and built an evaluation framework to measure problem-solving outcome gains.",
    tags: ["Learning Design", "Study Design"],
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
    title: "Samvaad",
    eyebrow: "Game Design · Social Systems · Facilitation",
    summary: "A card game that builds real social ties among strangers.",
    description:
      "A card game designed to facilitate structured dialogue among strangers. Tested at CMU: participants consistently formed stronger social ties through a single session than through standard interaction.",
    tags: ["Game Design"],
  },
  {
    title: "Pattern-Seeking and Metacognition Study",
    subtitle: "LL3",
    eyebrow: "Study Design · Play & Cognition · Behavioral Research",
    summary:
      "A study of pattern-seeking cognition and apophenia in teenagers.",
    description:
      "A study exploring pattern-seeking cognition and apophenia in teenagers using game-like prompts; designed measurement instruments to observe behavior across repeated trials.",
    tags: ["Study Design", "Game Design"],
  },
];

// ── Unified gallery model ─────────────────────────────────────
// Case studies link out to their own page; everything else opens
// the modal. One shape so the grid renders from a single list.

export interface GalleryItem {
  title: string;
  subtitle?: string;
  eyebrow: string;
  summary: string;
  tags: ProjectTag[];
  tech?: string[];
  /** Present → the card links to a dedicated case-study page. */
  href?: string;
  /** Present → the card opens the modal. */
  description?: string;
}

/** Data & research work first, then the broader creative/technical work. */
export const galleryItems: GalleryItem[] = [
  ...caseStudies.map((c) => ({
    title: c.cardTitle,
    eyebrow: c.eyebrow,
    summary: c.summary,
    tags: c.tags,
    tech: c.tools,
    href: `/projects/${c.slug}`,
  })),
  ...projects.map((p) => ({
    title: p.title,
    subtitle: p.subtitle,
    eyebrow: p.eyebrow,
    summary: p.summary,
    tags: p.tags,
    tech: p.tech,
    description: p.description,
  })),
];
