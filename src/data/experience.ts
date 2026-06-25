// ============================================================
// EXPERIENCE  (brief §5.4) — reverse-chronological.
// To add a role: copy one object, fill the fields, place it in
// chronological order. `current: true` adds the "Now" emphasis.
// ============================================================

export interface ExperienceEntry {
  role: string;
  org: string;
  orgUrl?: string;
  location: string;
  dates: string;
  current?: boolean;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: "AI Engineering Intern",
    org: "Personalized Learning and Scalable Tutoring Solutions",
    location: "Pittsburgh, PA",
    dates: "May 2026 – Present",
    current: true,
    bullets: [
      "Training and fine-tuning LLMs on labeled interaction data and shipping them into a production feedback system grounded in learning-sciences principles.",
      "Building evaluation harnesses and benchmarking model-to-human agreement (Cohen's κ) to validate model quality.",
      "Engineering a multimodal (video) data pipeline with LLM-based labeling, validated against expert annotators, and improving precision by conditioning on video signals over text alone.",
    ],
  },
  {
    role: "Research Assistant",
    org: "Optimized Algorithms and Knowledge (OAK) Lab",
    location: "Pittsburgh, PA",
    dates: "Jan 2026 – Present",
    current: true,
    bullets: [
      "Building a scalable NLP pipeline — feature extraction, automated scoring, benchmarking, and inter-rater reliability — that classifies open-ended text (reflection depth, self-explanation quality, error diagnosis) in an AI-assisted Python tutoring study.",
      "Translating model output into learning-engineering insights and scaffold redesigns that improve transfer and metacognitive monitoring.",
      "Designing and running a controlled metacognitive-calibration study with developmental data collection (children aged 3–7) — owning instrumentation, protocol, and measurement design.",
    ],
  },
  {
    role: "Teaching Assistant",
    org: "CMU Mathematical Sciences Department",
    location: "Pittsburgh, PA",
    dates: "Jan 2026 – Present",
    current: true,
    bullets: [
      "Redesigning instruction and assessment for a 30-student course (students with histories of repeated failure) — scaffolding, retrieval practice, spaced reinforcement, and misconception diagnosis.",
      "Designing targeted practice and formative assessments to rebuild algebra, functions, and quantitative reasoning.",
      "Instrumenting student progression across weekly office hours and small-group sessions to drive iterative course redesign.",
    ],
  },
  {
    role: "Student Partner",
    org: "Eberly Center for Teaching Excellence & Educational Innovation",
    location: "Pittsburgh, PA",
    dates: "Aug 2025 – May 2026",
    bullets: [
      "Built a structured coding scheme converting qualitative classroom observations into quantitative, analyzable data across 200+ students.",
      "Standardized pedagogy codes to raise inter-rater reliability and enable quantitative analysis of instructional practice.",
      "Delivered PAITE-compliant feedback that shifted course design toward active learning and equitable participation.",
    ],
  },
  {
    role: "Strategy & Impact Intern",
    org: "The Unifly Collective (Education Equity Nonprofit)",
    location: "Remote",
    dates: "Jun 2025 – Aug 2025",
    bullets: [
      "Automated core operational workflows (receipt generation, newsletter distribution, CSR reporting), cutting manual overhead by 30%.",
      "Designed a custom literacy and numeracy diagnostic instrument to assess school readiness and enable data-driven program rollout.",
      "Built and ran a pan-India fundraising fellowship end to end (curriculum, peer-accountability structure, capstone formats), raising $5K+ in 6 weeks at near-zero cost.",
    ],
  },
  {
    role: "Product Management Intern",
    org: "Vinsol Pvt Ltd",
    location: "New Delhi, India",
    dates: "May 2025 – Jul 2025",
    bullets: [
      "Shipped accessible React components and redesigned key workflows from new-hire user research, improving navigation and task sequencing.",
      "Scoped requirements and mapped onboarding pain points into a roadmap to streamline task progression.",
      "Measured post-launch impact: reduced new-hire support queries by 45% and improved onboarding speed.",
    ],
  },
  {
    role: "Data Analysis Research Assistant",
    org: "OH! Lab, Human-Computer Interaction Institute",
    location: "Pittsburgh, PA",
    dates: "Jan 2025 – May 2025",
    bullets: [
      "Fit hierarchical models to mixed qualitative/quantitative data (interview codes + midline/endline assessments) to find friction points for low-literacy, low-tech learners in multilingual STEM settings.",
      "Ran thematic + statistical analysis of Yiya AirScience data to assess language impact on STEM learning in low-resource settings.",
      "Drove content segmentation, pacing, and input-design changes that improved measured accuracy and response speed in pilots.",
    ],
  },
];
