// ============================================================
// HOW I GOT HERE — origin narrative  (brief §5.8, optional)
// Toggle the whole section on/off in src/pages/index.astro.
// ============================================================

export interface TimelineBeat {
  when: string;
  text: string;
}

export const timeline: TimelineBeat[] = [
  {
    when: "7th grade",
    text: "Sketching redesigns of her classroom — imagining school built around how students actually think. Didn't know the term “instructional design” yet.",
  },
  {
    when: "11th grade",
    text: "Built a computer-vision system to gamify kinematics after staring at a lifeless physics textbook.",
  },
  {
    when: "At CMU",
    text: "Designed social card games to spark genuine conversation among strangers; watched friendships form in real time.",
  },
  {
    when: "Through research",
    text: "Courses, labs, and nonprofits gave her formal vocabulary — learning engineering, scaffolding theory, cognitive load, spaced reinforcement.",
  },
  {
    when: "Today",
    text: "Works across data, design, product, and research. The throughline hasn't changed: students deserve better systems.",
  },
];
