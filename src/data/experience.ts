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
      "Building and training an LLM-backed feedback system grounded in learning-sciences principles to deliver scalable, personalized tutoring feedback — curating and labeling tutoring-interaction data, fine-tuning models, and evaluating outputs.",
      'Developing LLM "coders" for qualitative review of multimodal (video) tutoring transcripts, automating expert-level coding of tutoring moves.',
      "Benchmarking model-to-human inter-rater agreement (Cohen's κ) and improving coding precision by conditioning on video signals rather than text-only input.",
    ],
  },
  {
    role: "Research Assistant",
    org: "Optimized Algorithms and Knowledge (OAK) Lab",
    location: "Pittsburgh, PA",
    dates: "Jan 2026 – Present",
    current: true,
    bullets: [
      "Developing a scalable NLP pipeline (benchmarking + automated scoring) that classifies learner reflection depth, self-explanation quality, and error diagnosis in an AI-assisted Python tutoring study.",
      "Building the labeling and evaluation workflow (annotation-schema design, feature extraction, model scoring, inter-rater reliability) and translating qualitative data into learning-engineering insights and scaffold redesigns that improve transfer and metacognitive monitoring.",
      "Designing and running a metacognitive calibration study collecting developmental data from children aged 3 to 7 — owning instrumentation, protocol, and measurement design.",
    ],
  },
  {
    role: "Teaching Assistant",
    org: "CMU Mathematical Sciences Department",
    location: "Pittsburgh, PA",
    dates: "Jan 2026 – Present",
    current: true,
    bullets: [
      "Supporting the first iteration of a redesigned math course for 30 students with histories of repeated failure, refining instructional sequences and assessment design with scaffolding, targeted retrieval, and spaced reinforcement.",
      "Diagnosing recurring misconceptions and designing targeted practice and formative assessments to rebuild algebra, functions, and quantitative reasoning.",
      "Leading weekly office hours and small-group sessions, instrumenting student progression to inform iterative course redesign.",
    ],
  },
  {
    role: "Student Partner",
    org: "Eberly Center for Teaching Excellence & Educational Innovation",
    location: "Pittsburgh, PA",
    dates: "Aug 2025 – May 2026",
    bullets: [
      "Conducting classroom observations across 200+ students, delivering PAITE-compliant feedback to shift course design toward active learning and equitable participation.",
      "Redesigning the observation protocol into a structured coding scheme that translates qualitative pedagogy notes into analyzable data.",
      "Standardizing pedagogy codes to raise inter-observer reliability and enable quantitative analysis of instructional practice.",
    ],
  },
  {
    role: "Strategy & Impact Intern",
    org: "The Unifly Collective (Education Equity Nonprofit)",
    location: "Remote",
    dates: "Jun 2025 – Aug 2025",
    bullets: [
      "Automated core donor-operations workflows (receipt generation, newsletter distribution, CSR reporting), cutting manual overhead by 30%.",
      "Designed a custom literacy and numeracy diagnostic instrument to assess school readiness and enable data-driven program rollout.",
      "Built a pan-India retail fundraising fellowship end to end (curriculum, peer-accountability structure, capstone formats), raising $5K+ in 6 weeks at near-zero cost.",
    ],
  },
  {
    role: "Product Management Intern",
    org: "Vinsol Pvt Ltd",
    location: "New Delhi, India",
    dates: "May 2025 – Jul 2025",
    bullets: [
      "Led the revamp of the internal training platform: user research with new hires, mapping onboarding pain points, and a roadmap to streamline task progression.",
      "Scoped requirements and delivered accessible React components, redesigning key workflows to improve navigation and task sequencing.",
      "Measured post-launch impact, reducing new-hire support queries by 45% and improving onboarding speed.",
    ],
  },
  {
    role: "Data Analysis Research Assistant",
    org: "OH! Lab, Human-Computer Interaction Institute",
    location: "Pittsburgh, PA",
    dates: "Jan 2025 – May 2025",
    bullets: [
      "Conducted thematic and quantitative analysis of Yiya AirScience interview data to assess language impact on STEM learning in multilingual, low-resource settings.",
      "Fit hierarchical models to qualitative codes and midline/endline assessment data to identify friction points for low-literacy, low-tech learners.",
      "Translated findings into content segmentation, pacing, and input-design refinements, improving accuracy and response speed in pilot tests.",
    ],
  },
];
