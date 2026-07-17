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
    text: "Currently seeking a part-time learning data science or research role for Fall 2026, with the possibility of transitioning full-time after May 2028.",
    // Shown instead of `text` on narrow screens, to keep the first
    // screen compact. Keep the two consistent.
    textShort: "Seeking a part-time data / research role · Fall 2026",
  },

  /**
   * Targeted resume.
   * ⚠️ Place the PDF at `public/Khushi_Juneja_Data_Research_Resume.pdf`.
   * Until that file exists this link will 404 — set `enabled: false` to hide
   * every resume button until the PDF is added. See README → "Resume".
   */
  resume: {
    // OFF until the PDF exists — flip to true once the file is in place.
    enabled: false,
    path: "/Khushi_Juneja_Data_Research_Resume.pdf",
    label: "View targeted resume",
  },
} as const;
