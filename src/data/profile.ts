// ============================================================
// IDENTITY & CONTACT  (refinement §3 / §4)
// Repositioned for three audiences: data/ML/research,
// experience/game/social design, and learning engineering.
// Learning is the throughline, not the limit.
// ============================================================

export const profile = {
  name: "Khushi Juneja",
  pronouns: "she/her",
  location: "Pittsburgh, PA",
  eyebrow: "Carnegie Mellon University · Expected May 2028",

  // Hero positioning (refinement §3). `positioning` is the lead sentence;
  // `throughline` is set in bold beneath it.
  positioning:
    "Operations Research / Statistics + Human-Computer Interaction at Carnegie Mellon. I build and evaluate systems and experiences for people: ML/NLP pipelines, computer vision, game-based tools, and simulations, grounded in research and evidence.",
  throughline: "using data, design, and technology to understand how people think, make decisions, and interact with systems",

  // Short headline — used in meta description / OG (refinement §3).
  headline:
    "OR/Statistics + HCI at Carnegie Mellon. Builds and evaluates systems and experiences for people: ML/NLP pipelines, computer vision, game-based tools, and simulation, grounded in research.",

  // Status chip in the hero.
  lookingForChip: "Open to Fall 2026 & Summer 2027 internships, research & fellowships",

  // "What I'm looking for" role families (refinement §4).
  lookingFor: [
    {
      label: "Data, ML & research.",
      body: "Data science, machine learning/AI, and quantitative research where I can build real systems and back them with evidence.",
    },
    {
      label: "Experience, game & social design.",
      body: "Designing experiences, games, and social/interactive systems: entertainment, play, and human connection are a serious part of my work.",
    },
    {
      label: "Learning engineering & ed-data.",
      body: "Teams building learning systems, analytics, and evidence-based tools.",
    },
  ],
  // Short closing line (refinement §4).
  lookingForCoda:
    "",

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

  // Broad topic list for JSON-LD knowsAbout (refinement §3).
  knowsAbout: [
    "Data Science",
    "Machine Learning",
    "Natural Language Processing",
    "Computer Vision",
    "Discrete-Event Simulation",
    "Operations Research",
    "Statistics",
    "Game Design",
    "Experience Design",
    "Human-Computer Interaction",
    "Learning Engineering",
  ],
} as const;

export type Profile = typeof profile;
