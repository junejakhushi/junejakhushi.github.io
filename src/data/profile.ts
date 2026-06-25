// ============================================================
// IDENTITY & CONTACT  (brief §5.1 / §5.2)
// Edit anything here to update the hero, footer, and meta tags.
// ============================================================

export const profile = {
  name: "Khushi Juneja",
  pronouns: "she/her",
  location: "Pittsburgh, PA",

  // Positioning line (brief §1) — shown large in the hero.
  positioning:
    "She builds at the intersection of learning systems, educational design, and applied research — where rigor and practicality are both required, not traded off.",

  // Short headline (brief §5.1) — used in meta description.
  headline:
    "OR/Stats + HCI at Carnegie Mellon · building at the intersection of learning systems, educational design, and applied research.",

  // "What I'm looking for" (brief §5.2) — status chip + footer.
  lookingForChip: "Open to Fall 2026 & Summer 2027 research & product internships",
  lookingFor: [
    "Research & product roles at the intersection of learning systems, data, and design.",
    "Fall 2026 and Summer 2027 internships, research positions, and fellowships.",
    "Especially interested in orgs working on educational infrastructure, learning analytics, or evidence-based instructional tools.",
  ],

  email: "kjuneja@andrew.cmu.edu",
  links: {
    linkedin: "https://www.linkedin.com/in/kj3010/",
    github: "https://github.com/junejakhushi",
    site: "https://junejakhushi.github.io",
  },

  // Languages (brief §5.1 / §5.6)
  languages: [
    { name: "English", level: "fluent" },
    { name: "Hindi", level: "fluent" },
    { name: "German", level: "intermediate" },
  ],
} as const;

export type Profile = typeof profile;
