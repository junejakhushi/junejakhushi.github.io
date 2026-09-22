// ============================================================
// SITE CONFIG — feature flags & shared paths.
// Change behaviour here rather than editing components.
// ============================================================

export const site = {
  /**
   * Announcement banner. Off by default; the "what I am looking for"
   * line lives in the Contact section instead.
   */
  banner: {
    enabled: false,
    text: "",
    textShort: "",
  },

  /**
   * Resume link.
   * Place the PDF at `public/Khushi_Juneja_Resume.pdf`, then flip
   * `enabled` to true. Until then every resume button stays hidden so
   * nothing 404s.
   */
  resume: {
    enabled: false,
    path: "/Khushi_Juneja_Resume.pdf",
    label: "Resume (PDF)",
  },
} as const;
