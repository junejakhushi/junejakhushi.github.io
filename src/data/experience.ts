// ============================================================
// EXPERIENCE: ordered by relevance to learning data science /
// research (not strictly reverse-chronological).
// To add a role: copy one object and place it by relevance.
// `current: true` adds the "Now" emphasis.
// ============================================================

export interface ExperienceEntry {
  role: string;
  org: string;
  orgUrl?: string;
  location: string;
  dates: string;
  current?: boolean;
  /** One line, shown on the homepage. Folds in the number where it
   *  has context. No em dashes. */
  line: string;
  /** Kept for reference; not rendered on the homepage. */
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: "AI Engineering Intern",
    org: "Personalized Learning & Scalable Tutoring Solutions",
    location: "Pittsburgh, PA",
    dates: "May 2026 – Present",
    current: true,
    line: "I build the evaluation harnesses that check whether LLM tutoring feedback is any good, benchmarking model output against expert annotation.",
    bullets: [
      "Build evaluation harnesses for LLM-powered educational feedback systems, benchmarking model outputs against expert annotations using inter-rater agreement and error analysis.",
      "Train and evaluate models on labeled teacher and learner interaction data, developing golden datasets and structured scoring pipelines for continuous product evaluation.",
      "Engineer a multimodal pipeline combining video, text, and LLM-based labeling to identify instructional interactions at scale.",
      "Translate model failures and interaction patterns into recommendations for feedback-system design, annotation protocols, and learning-science-aligned improvements.",
    ],
  },
  {
    role: "Research Assistant",
    org: "Optimized Algorithms and Knowledge (OAK) Lab",
    location: "Pittsburgh, PA",
    dates: "Jan 2026 – Present",
    current: true,
    line: "I analyse behavioural traces from an AI Python tutor and build NLP pipelines that score how students reflect.",
    bullets: [
      "Build a scalable NLP pipeline to classify reflection depth, self-explanation quality, and error diagnosis in open-ended learner responses.",
      "Analyze behavioral traces from an AI-assisted Python tutoring experiment, connecting feedback engagement, reflection, practice behavior, and learning outcomes.",
      "Surfaced the finding that a reflection intervention approximately doubled feedback time and reduced practice iterations by roughly 40% without a corresponding performance gain.",
      "Design instrumentation, protocols, and measurement systems for a controlled metacognitive-calibration study with children ages 3–7.",
      "Translate quantitative and qualitative findings into tutoring-system and scaffold redesign recommendations.",
    ],
  },
  {
    role: "Software Engineering Intern",
    org: "Decimal Point, Mathematics Education Game",
    location: "Pittsburgh, PA",
    dates: "Jun 2026 – Present",
    current: true,
    line: "I work on a mathematics-learning game, extending its JavaScript codebase and its tutoring logic.",
    bullets: [
      "Contribute to the development and evaluation of an interactive mathematics-learning game grounded in learning-science principles.",
      "Extend an existing JavaScript codebase and collaborate with researchers and designers on learner interactions, tutoring logic, and experimentation.",
      "Translate learning objectives and research requirements into implementable product features and evaluation plans.",
    ],
  },
  {
    role: "Student Partner",
    org: "Eberly Center for Teaching Excellence & Educational Innovation",
    location: "Pittsburgh, PA",
    dates: "Aug 2025 – May 2026",
    line: "I ran structured observations across courses serving more than 200 students and turned them into codeable instructional data.",
    bullets: [
      "Conducted structured classroom observations across courses serving more than 200 students.",
      "Built a coding scheme that converted qualitative classroom observations into quantitative, analyzable instructional data.",
      "Standardized pedagogy codes to improve inter-rater reliability.",
      "Delivered privacy-conscious, PAITE-compliant findings that supported active learning and equitable participation.",
    ],
  },
  {
    role: "Data Analysis Research Assistant",
    org: "OH! Lab, Human-Computer Interaction Institute",
    location: "Pittsburgh, PA",
    dates: "Jan 2025 – May 2025",
    line: "I analysed multilingual STEM learning data from low-resource settings with mixed methods.",
    bullets: [
      "Analyzed multilingual STEM-learning data from low-resource settings using mixed qualitative and quantitative methods.",
      "Fit hierarchical models combining interview codes with midline and endline assessments.",
      "Evaluated the effects of language, content pacing, segmentation, and input design on learner performance.",
      "Translated findings into changes for subsequent learning-product pilots.",
    ],
  },
  {
    role: "Strategy & Impact Intern",
    org: "The Unifly Collective (Education Equity Nonprofit)",
    location: "Remote",
    dates: "Jun 2025 – Aug 2025",
    line: "I ran a pan-India fundraising fellowship that raised over $5,000 in six weeks, and automated operations to cut overhead 30%.",
    bullets: [
      "Designed a literacy and numeracy diagnostic instrument to assess school readiness and enable data-driven program rollout.",
      "Automated core operational workflows (receipt generation, newsletter distribution, CSR reporting), cutting manual overhead by 30%.",
      "Built and ran a pan-India fundraising fellowship end to end, raising $5K+ in 6 weeks at near-zero cost.",
    ],
  },
  {
    role: "Product Management Intern",
    org: "Vinsol Pvt Ltd",
    location: "New Delhi, India",
    dates: "May 2025 – Jul 2025",
    line: "I shipped accessible React workflows from new-hire research and cut support queries 45%.",
    bullets: [
      "Shipped accessible React components and redesigned key workflows from new-hire user research.",
      "Measured post-launch impact: reduced new-hire support queries by 45% and improved onboarding speed.",
    ],
  },
  {
    role: "Teaching Assistant",
    org: "CMU Mathematical Sciences Department",
    location: "Pittsburgh, PA",
    dates: "Jan 2026 – Present",
    current: true,
    line: "I redesign instruction for a 30-student course and TA it every week.",
    bullets: [
      "Redesigning instruction and assessment for a 30-student course: scaffolding, retrieval practice, and misconception diagnosis.",
      "Instrumenting student progression across office hours and small-group sessions to drive iterative course redesign.",
    ],
  },
];
