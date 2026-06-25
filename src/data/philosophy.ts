// ============================================================
// HOW I THINK — design philosophy  (brief §5.7)
// ============================================================

export interface PhilosophyPoint {
  title: string;
  body: string;
}

export const philosophy: PhilosophyPoint[] = [
  {
    title: "Play is a serious design tool.",
    body: "Structured play lowers social stakes and raises genuine engagement; embodied feedback teaches better than a diagram. Use game mechanics where they earn their place, not as decoration.",
  },
  {
    title: "You can't design learning without measuring it.",
    body: "The NLP pipeline, the CTA study, the Eberly observation protocol exist because intuition alone isn't enough. Good instructional design is testable — if you can't tell whether it worked, you haven't finished designing it.",
  },
  {
    title: "The best interventions work within constraints.",
    body: "Real budgets, real time limits. Elegance means solving the actual problem with what actually exists.",
  },
];

export const pullQuote =
  "Students deserve better systems, and building them is tractable.";
