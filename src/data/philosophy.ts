// ============================================================
// HOW I THINK — design philosophy  (refinement §2A)
// Reframed around designing systems & experiences for people
// (games, social/experience design, and data work) — learning
// is one domain among several, not the limit.
// ============================================================

export interface PhilosophyPoint {
  title: string;
  body: string;
}

export const philosophy: PhilosophyPoint[] = [
  {
    title: "Play is a serious design tool.",
    body: "Samvaad worked because structured play lowers social stakes and unlocks genuine connection; the Free-Throw Simulator worked because embodied feedback beats a diagram. I reach for game mechanics and play where they earn their place, to change how people engage with a system, not as decoration.",
  },
  {
    title: "You can't design for people without measuring it.",
    body: "The NLP pipeline, the cognitive-task-analysis study, the observation protocols: they exist because intuition isn't enough. Good design is testable: if I can't tell whether an experience worked, I haven't finished designing it.",
  },
  {
    title: "The best systems work within real constraints.",
    body: "Limited time, shoestring budgets, messy data. Elegance, for me, is solving the actual problem with what actually exists, not the ideal version of either.",
  },
];

export const philosophyHeading = "Why I build the way I do.";

export const pullQuote =
  "People deserve better systems and spaces, and building them is tractable.";
