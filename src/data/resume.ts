// ============================================================
// RESUME VERSIONS  (brief §5.9)
// Three tailored one-page PDFs live in /public/resume/.
// The primary "Resume" button defaults to `id: "learning-engineering"`.
// To swap the default, change `defaultResumeId` below.
// To add/replace a PDF: drop it in /public/resume/ and update `file`.
// ============================================================

export interface ResumeVersion {
  id: string;
  label: string; // shown in the switcher
  file: string; // path under /public
}

export const resumes: ResumeVersion[] = [
  {
    id: "learning-engineering",
    label: "Learning Engineering",
    file: "/resume/khushi-juneja-learning-engineering.pdf",
  },
  {
    id: "ed-data-science",
    label: "Ed Data Science",
    file: "/resume/khushi-juneja-ed-data-science.pdf",
  },
  {
    id: "data-science",
    label: "Data Science",
    file: "/resume/khushi-juneja-data-science.pdf",
  },
];

export const defaultResumeId = "learning-engineering";

export const defaultResume =
  resumes.find((r) => r.id === defaultResumeId) ?? resumes[0];
