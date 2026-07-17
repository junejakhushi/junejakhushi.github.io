// ============================================================
// IDENTITY & CONTACT
// Positioning: learning data scientist working across LLM
// evaluation, learning analytics, statistical/mixed-methods
// research, and AI-supported education.
// ============================================================

export const profile = {
  name: "Khushi Juneja",
  pronouns: "she/her",
  location: "Pittsburgh, PA",
  locationLong: "Pittsburgh, PA — open to remote and international work",

  // Shown above the name in the hero. Update the graduation date here
  // AND in src/data/education.ts (`expected`).
  eyebrow: "Carnegie Mellon University · Expected May 2028",
  // Shown on narrow screens to keep the first screen compact.
  eyebrowShort: "CMU · Expected May 2028",

  // Hero headline — specialization first.
  headline: "Learning data scientist building evidence for AI-powered education.",

  // Hero supporting copy.
  positioning:
    "I build and evaluate learning systems using LLM evals, interaction data, statistical modeling, and mixed-methods research. My work turns teacher and learner behavior into evidence that improves products, curriculum, and instruction.",

  // Three compact credibility indicators shown near the hero.
  credibility: [
    "LLM evaluation and human benchmarking",
    "Interaction and learning analytics",
    "Experimental and mixed-methods research",
  ],

  // ── AVAILABILITY ──
  // `availability` is the full sentence; `availabilityShort` is used on
  // narrow screens. Update both together.
  availability:
    "Open to part-time and contract roles in learning data science, AI evaluation, and education research from Fall 2026, with full-time availability beginning May 2028.",
  availabilityShort:
    "Part-time from Fall 2026 · Full-time May 2028",

  email: "kjuneja@andrew.cmu.edu",
  links: {
    linkedin: "https://www.linkedin.com/in/kj3010/",
    github: "https://github.com/junejakhushi",
    site: "https://junejakhushi.github.io",
  },

  languages: [
    { name: "English", level: "fluent" },
    { name: "Hindi", level: "fluent" },
    { name: "German", level: "intermediate" },
  ],

  // Audiences she has actually communicated findings to.
  // Do NOT add superintendents / publishers / policymakers / funders —
  // those are not supported by her current work.
  stakeholders: [
    {
      audience: "Faculty and instructors",
      context: "Classroom observation findings and course-design recommendations (Eberly Center).",
    },
    {
      audience: "Learning scientists",
      context: "Evaluation results, scoring criteria, and scaffold redesign proposals (OAK Lab).",
    },
    {
      audience: "Product and engineering collaborators",
      context: "Model failure modes and annotation-protocol changes translated into build decisions.",
    },
    {
      audience: "Education nonprofit leaders",
      context: "Diagnostic instrument design and program rollout evidence (The Unifly Collective).",
    },
    {
      audience: "Donors and CSR partners",
      context: "Impact and operations reporting for a fundraising fellowship.",
    },
    {
      audience: "Curriculum and instructional stakeholders",
      context: "Content segmentation, pacing, and input-design changes from learner evidence (OH! Lab).",
    },
  ],

  // Topic list for JSON-LD knowsAbout.
  knowsAbout: [
    "LLM Evaluation",
    "Learning Analytics",
    "Data Science",
    "Natural Language Processing",
    "Statistical Modeling",
    "Mixed-Methods Research",
    "Experimental Design",
    "Educational Data Mining",
    "Human-Computer Interaction",
    "Learning Engineering",
  ],
} as const;

export type Profile = typeof profile;
