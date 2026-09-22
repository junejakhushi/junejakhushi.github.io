// ============================================================
// IDENTITY & CONTACT
// A college builder who makes things and brings people together.
// The research is one kind of work she does, not the whole identity.
// No em dashes in copy.
// ============================================================

export const profile = {
  name: "Khushi Juneja",
  pronouns: "she/her",
  location: "Pittsburgh, PA",
  locationLong: "Pittsburgh, PA",

  // Shown above the name in the hero. Place first.
  eyebrow: "Pittsburgh · Carnegie Mellon",

  // Hero headline.
  headline: "I make things, and the point is usually other people.",

  // Hero supporting line.
  positioning:
    "Apps, games, and the occasional research study. I like building systems that pull people together, and I can measure whether they actually worked.",

  // One line about where she is (hero).
  place: "Carnegie Mellon, Pittsburgh. Operations research and HCI, graduating 2028.",

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

  // One line for the contact section: what she is looking for.
  lookingFor:
    "I am looking for internships and collaborators for 2026 and beyond, on anything at the intersection of building, play, and people.",

  // Topic list for JSON-LD knowsAbout (SEO only).
  knowsAbout: [
    "Software Engineering",
    "Product Design",
    "Game Design",
    "Community Building",
    "Computer Vision",
    "Operations Research",
    "Statistics",
    "Learning Analytics",
    "Human-Computer Interaction",
    "AI Evaluation",
  ],
} as const;

export type Profile = typeof profile;
