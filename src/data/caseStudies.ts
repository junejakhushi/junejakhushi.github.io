// ============================================================
// CASE STUDIES — the four featured data/research studies.
//
// Each entry powers BOTH:
//   • a card in the "Selected Data and Research Work" section, and
//   • a dedicated page at /projects/<slug>.
//
// CONTENT INTEGRITY RULES for this file:
//   • Never invent sample sizes, model names, accuracy/precision
//     figures, partners, deployment status, publications, or awards.
//   • Optional fields left `undefined` are HIDDEN in production —
//     that is deliberate. Fill them in only with verified values.
//   • `status` must honestly distinguish ongoing from completed work.
// ============================================================

import type { ProjectTag } from "./tags";

export interface EvidenceChainStep {
  label: string;
}

export interface CaseStudy {
  slug: string;
  /** Long title used on the dedicated page + <title>. */
  title: string;
  /** Shorter title used on cards and in the gallery. */
  cardTitle: string;
  subtitle?: string;
  summary: string;
  status: "Ongoing" | "Completed";
  /** Method-first line shown on the gallery card. */
  eyebrow: string;
  /** Drives the gallery filter. */
  tags: ProjectTag[];

  // ── Featured-card evidence chain (kept short) ──
  question: string;
  evidence: string;
  methodsShort: string;
  /** Key finding. For ongoing work this describes what the system yields. */
  result: string;
  /** The product / curriculum / instructional decision enabled. */
  decision: string;
  role: string;
  tools: string[];

  // ── Dedicated page ──
  problem: string;
  researchQuestions: string[];
  data: string[];
  methods: string[];
  outcome: string[];
  /** Rendered as an accessible HTML/CSS diagram (no raster image). */
  diagram: EvidenceChainStep[];
  /** Plain-language text alternative for the diagram. */
  diagramAlt: string;

  /**
   * Verified scale of the study, e.g. "200+ students".
   * Hidden entirely when undefined.
   */
  scale?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "llm-evaluation-educational-feedback",
    title: "Evaluating LLM-Generated Feedback Against Human Judgment",
    cardTitle: "LLM Evaluation for Educational Feedback",
    summary:
      "An evaluation system for determining whether AI-generated educational feedback matches expert judgment and provides useful learning support.",
    status: "Ongoing",
    eyebrow: "LLM Evaluation · Benchmarking · Error Analysis",
    tags: ["LLM Evaluation", "Machine Learning", "Study Design"],

    question:
      "Does AI-generated feedback actually match expert judgment — and where does it systematically fail?",
    evidence:
      "Labeled educational interaction records, expert annotations, model-generated labels, and text plus video-derived signals.",
    methodsShort:
      "Golden datasets, model-to-human agreement, inter-rater reliability, confusion matrices, category-level error analysis.",
    result:
      "A continuous evaluation harness that surfaces category-level failure modes rather than a single aggregate score.",
    decision:
      "Failure modes feed directly into feedback-system design, prompt/model iteration, and annotation-protocol redesign.",
    role: "AI Engineering Intern — evaluation design, dataset construction, and analysis.",
    tools: ["Python", "Anthropic API", "pandas", "NumPy"],
    // scale: "[ADD VERIFIED SAMPLE SIZE]" — omitted until verified.

    problem:
      "LLM-powered feedback can sound plausible without being instructionally correct, specific, or useful. Product teams need continuous evaluation that goes beyond generic language-model benchmarks — evaluation grounded in what expert educators would actually judge as good feedback.",
    researchQuestions: [
      "How consistently do model judgments align with expert human annotations?",
      "Which categories of teacher or learner interactions produce systematic model failures?",
      "Does multimodal context improve classification compared with text alone?",
      "How should evaluation results change the product or the annotation system?",
    ],
    data: [
      "Labeled educational interaction records",
      "Expert / human annotations",
      "Model-generated labels and scores",
      "Text and, where applicable, video-derived signals",
    ],
    methods: [
      "Golden dataset construction",
      "Structured annotation criteria",
      "Model-to-human agreement",
      "Cohen's κ and other inter-rater reliability measures",
      "Confusion matrices and category-level error analysis",
      "Prompt and model iteration",
      "Comparison of text-only and multimodal conditions",
    ],
    outcome: [
      "The evaluation system supports continuous assessment of feedback quality as models and prompts change, rather than a one-off benchmark run.",
      "Category-level error analysis identifies where the model fails systematically, which is more actionable for a product team than an aggregate agreement score.",
      "Findings inform redesign of both the feedback system and the annotation criteria used to judge it — evaluation and product improve together.",
      "This work is ongoing; agreement statistics and failure-mode results are not reported here.",
    ],
    diagram: [
      { label: "Interaction data" },
      { label: "Human annotation" },
      { label: "Model evaluation" },
      { label: "Error analysis" },
      { label: "Product changes" },
      { label: "Continuous re-evaluation" },
    ],
    diagramAlt:
      "A six-stage evaluation loop: interaction data is human-annotated, then used to evaluate the model; error analysis drives product changes, which feed back into continuous re-evaluation.",
  },

  {
    slug: "learning-analytics-ai-tutoring",
    title: "From Tutoring Traces to Learning-System Decisions",
    cardTitle: "Learning Analytics for AI-Assisted Tutoring",
    summary:
      "Connecting feedback engagement, reflection, and practice behavior to learning performance in an AI-assisted Python tutoring experiment.",
    status: "Ongoing",
    eyebrow: "Learning Analytics · NLP Scoring · Experimental Analysis",
    tags: ["Learning Analytics", "Machine Learning", "Statistics", "Study Design"],

    question:
      "How do feedback engagement, reflection, and repeated practice relate to learning performance in an AI-assisted Python tutoring environment?",
    evidence:
      "Open-ended learner responses, feedback-viewing behavior, practice iterations, experimental condition, and end-of-activity performance.",
    methodsShort:
      "NLP-based automated scoring, human-labeled benchmarking, behavioral trace analysis, experimental comparison.",
    result:
      "In this study, a reflection condition roughly doubled feedback engagement time and reduced practice iterations by about 40% — without a corresponding performance gain. Practice iterations were more predictive of final performance.",
    decision:
      "Reflection prompts are not automatically beneficial: scaffolds should be designed around productive action and additional practice, not attention alone.",
    role: "Research Assistant — pipeline development, trace analysis, and redesign recommendations.",
    tools: ["Python", "NLP", "pandas", "R"],

    problem:
      "Reflection is widely assumed to help learners. But in an AI-assisted tutoring system, an intervention that increases attention to feedback is only valuable if it changes what learners do next — and ultimately what they can do. That requires connecting process measures to outcomes rather than trusting the assumption.",
    researchQuestions: [
      "How do feedback engagement, reflection, and repeated practice relate to learning performance?",
      "Does a reflection intervention change learner behavior — and does that change translate into performance?",
      "Which process measures actually predict final performance?",
    ],
    data: [
      "Open-ended learner responses",
      "Feedback-viewing behavior",
      "Practice iterations",
      "Experimental condition",
      "End-of-activity and transfer performance",
    ],
    methods: [
      "NLP-based automated scoring of open-ended responses",
      "Human-labeled benchmarking",
      "Feature extraction",
      "Inter-rater reliability",
      "Behavioral trace analysis",
      "Experimental comparison across conditions",
      "Statistical association between process measures and outcomes",
    ],
    outcome: [
      "Within the analyzed study, the reflection condition approximately doubled time spent engaging with feedback and reduced practice iterations by roughly 40%, but did not produce a corresponding performance improvement.",
      "Practice iterations were more predictive of final performance than feedback engagement time.",
      "The implication for design: adding reflection prompts is not automatically beneficial. Reflection scaffolds should be built around productive action, error correction, and opportunities for additional practice rather than attention alone.",
      "These are findings within this study and this population — not a general causal claim about reflection.",
    ],
    diagram: [
      { label: "Experimental condition" },
      { label: "Feedback engagement" },
      { label: "Practice behavior" },
      { label: "Performance" },
      { label: "Scaffold redesign" },
    ],
    diagramAlt:
      "An evidence chain: experimental condition affects feedback engagement, which affects practice behavior, which relates to performance — and the result informs scaffold redesign.",
  },

  {
    slug: "multilingual-stem-evaluation",
    title: "Mixed-Methods Evaluation of Multilingual STEM Learning",
    cardTitle: "Mixed-Methods Analysis of Multilingual STEM Learning",
    summary:
      "Finding where multilingual learners hit friction in low-literacy, low-technology STEM settings — and what content design should change.",
    status: "Completed",
    eyebrow: "Mixed Methods · Hierarchical Modeling · Evaluation",
    tags: ["Mixed Methods", "Statistics", "Learning Analytics"],

    question:
      "Where do learners experience friction, and how do language and content design relate to accuracy and response speed?",
    evidence:
      "Interview codes, midline and endline assessments, and learner response data from low-resource settings.",
    methodsShort:
      "Thematic analysis, hierarchical modeling, and mixed-methods synthesis.",
    result:
      "Identified friction points for low-literacy, low-tech learners by combining qualitative codes with assessment data.",
    decision:
      "Evidence for changes to content segmentation, pacing, language use, and input design in subsequent pilots.",
    role: "Data Analysis Research Assistant — analysis and synthesis.",
    tools: ["R", "hierarchical models", "thematic analysis"],

    problem:
      "In multilingual, low-literacy, low-technology learning environments, a STEM product can underperform for reasons that neither assessment scores nor interviews explain on their own. Understanding friction required combining what learners said with how they actually performed.",
    researchQuestions: [
      "Where do learners experience friction in a multilingual STEM learning product?",
      "How do language and content design relate to accuracy and response speed?",
      "Which design changes are best supported by the combined qualitative and quantitative evidence?",
    ],
    data: [
      "Interview codes",
      "Midline assessments",
      "Endline assessments",
      "Learner interaction and response data",
    ],
    methods: [
      "Thematic analysis of interview data",
      "Hierarchical modeling combining interview codes with assessment data",
      "Mixed-methods synthesis",
    ],
    outcome: [
      "Surfaced friction points specific to low-literacy, low-tech learners that neither the assessments nor the interviews revealed alone.",
      "Produced evidence for changes to content segmentation, pacing, language use, and input design.",
      "Findings were delivered to researchers, learning designers, and implementation teams and fed subsequent learning-product pilots.",
      "The analysis describes associations within the studied cohorts; it does not establish causal effects.",
    ],
    diagram: [
      { label: "Interviews + assessments" },
      { label: "Thematic coding" },
      { label: "Hierarchical modeling" },
      { label: "Friction points" },
      { label: "Content & input redesign" },
    ],
    diagramAlt:
      "A five-stage chain: interviews and assessments are thematically coded, combined through hierarchical modeling to identify friction points, which inform content and input redesign.",
  },

  {
    slug: "classroom-observation-analytics",
    title: "Turning Classroom Observation Into Actionable Instructional Data",
    cardTitle: "Classroom Observation and Instructional Analytics",
    summary:
      "Converting qualitative classroom evidence into structured, analyzable instructional data — without erasing the context that made it meaningful.",
    status: "Completed",
    scale: "200+ students observed",
    eyebrow: "Observation Analytics · Coding Schemes · Reliability",
    tags: ["Mixed Methods", "Study Design", "Learning Analytics"],

    question:
      "How can qualitative classroom observation become structured data that faculty can actually act on?",
    evidence:
      "Structured observations across courses serving more than 200 students.",
    methodsShort:
      "Pedagogical coding scheme, inter-rater reliability, privacy-conscious reporting.",
    result:
      "A coding scheme that converts open-ended observation into quantitative instructional data with improved inter-rater reliability.",
    decision:
      "Faculty recommendations on active learning, participation equity, and alignment with learning objectives.",
    role: "Student Partner — protocol redesign, coding scheme, and faculty reporting.",
    tools: ["Qualitative coding", "inter-rater reliability", "observation protocols"],

    problem:
      "Classroom observation produces rich evidence that is hard to aggregate: narrative notes don't compare across courses or observers. The usual fix — reducing observation to a checklist — throws away the context that made the evidence useful in the first place.",
    researchQuestions: [
      "How can open-ended classroom observation be structured without erasing context?",
      "Can pedagogy codes be standardized well enough to compare across observers and courses?",
      "What do the resulting data say about active learning and participation equity?",
    ],
    data: [
      "Structured classroom observations across courses serving 200+ students",
      "Pedagogy codes applied to observed instructional moves",
      "Observer notes retained alongside codes for context",
    ],
    methods: [
      "Structured qualitative observation",
      "Pedagogical coding scheme design",
      "Code standardization across observers",
      "Inter-rater reliability",
      "Privacy-conscious, PAITE-compliant reporting",
      "Analysis of active learning, participation equity, and alignment with learning objectives",
    ],
    outcome: [
      "Qualitative classroom evidence was converted into structured, analyzable instructional data while keeping the observational context attached to each code.",
      "Standardizing pedagogy codes improved inter-rater reliability, making comparison across observers and courses meaningful.",
      "Recommendations were communicated directly to faculty, in a privacy-conscious and PAITE-compliant form, to support active learning and equitable participation.",
    ],
    diagram: [
      { label: "Classroom observation" },
      { label: "Pedagogy coding scheme" },
      { label: "Reliability checks" },
      { label: "Instructional analytics" },
      { label: "Faculty recommendations" },
    ],
    diagramAlt:
      "A five-stage chain: classroom observation is encoded with a pedagogy coding scheme, validated by reliability checks, aggregated into instructional analytics, and delivered as faculty recommendations.",
  },
];

export const caseStudyBySlug = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);
