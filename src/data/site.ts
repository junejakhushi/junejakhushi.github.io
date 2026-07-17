// ============================================================
// SITE CONFIG — feature flags & shared paths.
// Change behaviour here rather than editing components.
// ============================================================

export const site = {
  /**
   * Application banner.
   * Set `enabled: false` to hide it site-wide (nothing else to change).
   */
  banner: {
    enabled: true,
    text: "Currently seeking a part-time learning data science or research role, with the possibility of transitioning full-time after May 2027.",
  },

  /**
   * Targeted resume.
   * ⚠️ Place the PDF at `public/Khushi_Juneja_Data_Research_Resume.pdf`.
   * Until that file exists this link will 404 — set `enabled: false` to hide
   * every resume button until the PDF is added. See README → "Resume".
   */
  resume: {
    enabled: true,
    path: "/Khushi_Juneja_Data_Research_Resume.pdf",
    label: "View targeted resume",
  },
} as const;
