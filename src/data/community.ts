// ============================================================
// THINGS I DO WITH PEOPLE: community building.
//
// Structurally complete, content-incomplete on purpose. The first
// entries are real. The ones marked `todo: true` are placeholders
// with the shape to copy: drop in three or four more without
// touching any layout code. No em dashes in copy.
// ============================================================

export const communityIntro =
  "I keep ending up at the centre of a group of people doing something. Sometimes I set it up on purpose, sometimes I just built a thing and people showed up. Either way, this is the part of my work I care about most.";

export interface CommunityEntry {
  title: string;
  blurb: string;
  meta?: string;
  /** Marks a placeholder Khushi still needs to fill in. */
  todo?: boolean;
}

export const community: CommunityEntry[] = [
  {
    title: "A pan-India fundraising fellowship",
    meta: "2025 · The Unifly Collective",
    blurb:
      "I designed and ran a fundraising fellowship across India. It raised over $5,000 in six weeks on almost no budget, and I onboarded and scheduled every volunteer myself.",
  },
  {
    title: "Samvaad",
    meta: "Card game",
    blurb:
      "A card game I built to get strangers into real conversation. It is up in the projects, but it belongs here too: it is the clearest example of designing for connection on purpose.",
  },
  {
    title: "Precalculus TA",
    meta: "Carnegie Mellon",
    blurb:
      "I TA precalculus at CMU. Office hours turn into a standing group of people figuring things out together, which is community work whether or not the job title says so.",
  },
  {
    title: "Streakbreaker and Waypoint Wars",
    meta: "In progress",
    blurb:
      "Both are community products by design. Streakbreaker only works because other people are doing the sidequests with you, and Waypoint Wars runs on hunts the community writes and remixes.",
  },

  // ── Placeholders. Copy this shape, drop the todo flag when real. ──
  {
    title: "TODO: a club, event, or space you ran",
    meta: "Example",
    blurb:
      "TODO: one or two sentences on something you organised, a club, an event, a workshop, a night. Say what it was, who it was for, and what made it work.",
    todo: true,
  },
  {
    title: "TODO: one more",
    blurb:
      "TODO: copy this shape for anything else where you brought people together. Keep it to two sentences and delete the todo flag when it is real.",
    todo: true,
  },
];
