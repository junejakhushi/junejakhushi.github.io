# Khushi Juneja — Portfolio

A fast, accessible, editorial single-page portfolio. Built with **Astro +
TypeScript + Tailwind CSS v4**, deployed to **GitHub
Pages** at <https://junejakhushi.github.io>.

---

## Run locally

```bash
npm install      # one time
npm run dev      # start dev server → http://localhost:4321
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

Requires Node 18.20+ / 20+ (any current LTS works).

---

## Edit content

Everything visible on the page comes from `src/data/`. Edit a file, save, and
the page updates. No component edits needed for routine content changes.

| File | Controls |
| --- | --- |
| `src/data/profile.ts` | Name, pronouns, positioning line, "looking for" chip, email, social links, languages |
| `src/data/experience.ts` | The experience timeline |
| `src/data/projects.ts` | The projects grid + filters + detail modals |
| `src/data/skills.ts` | The four skill groups |
| `src/data/education.ts` | Degrees, honors, **minor**, **M.S. toggle**, coursework |
| `src/data/philosophy.ts` | "How I Think" points + pull quote |

### Add a new project

Open `src/data/projects.ts` and copy one object in the `projects` array:

```ts
{
  title: "My New Project",
  eyebrow: "Machine Learning · NLP · Evaluation",  // method-first line on the card
  summary: "One line shown on the card.",
  description: "The longer write-up shown in the detail modal.",
  tags: ["Machine Learning", "NLP"],   // drives the filter chips
  tech: ["Python", "PyTorch"],          // optional — omit if not relevant
},
```

It auto-appears in the grid and in any matching filters. Reuse existing
method-first tag strings (`Machine Learning`, `NLP`, `Computer Vision`,
`Simulation`, `Statistics`, `Game Design`, `UX`, `Study Design`, `Research`,
`Learning Design`) so the filter row stays tidy; new tags appear automatically
if used. Each project's `eyebrow` is the method-first line a recruiter reads
first.


## Design tokens (colors, fonts, spacing)

One place: the `@theme` block at the top of `src/styles/global.css`.

- **Accent** — change `--color-accent` (and `--color-accent-strong` for hover).
  Current accent is a deep terracotta.
- **Fonts** — `--font-display` (Fraunces) and `--font-sans` (Inter), both
  self-hosted via `@fontsource-variable` (no external requests).
- **Type scale** — `--text-hero`, `--text-h2`, `--text-h3`.

---

## Social preview image

`public/og.png` (1200×630) is generated from `scripts/generate-og.mjs`.
Re-generate after changing the name, tagline, or palette:

```bash
node scripts/generate-og.mjs
npm run build   # so dist/og.png is refreshed
```

---

## What's where

```
public/
  robots.txt
  og.png             generated social image
scripts/
  generate-og.mjs    regenerates og.png
src/
  data/              ← all editable content lives here
  components/        Nav, Hero, ExperienceTimeline, Projects, Philosophy,
                     Skills, Education, Footer
  layouts/Base.astro head/meta/OG/JSON-LD + scroll-reveal script
  pages/index.astro  assembles the page in IA order
  styles/global.css  design tokens + base styles
.github/workflows/deploy.yml
legacy/              the previous card-deck site, kept for reference
```

## Notes

- **Accessibility:** semantic landmarks, full keyboard support (the project
  modal uses a native `<dialog>`), visible focus rings, AA contrast, and
  `prefers-reduced-motion` is respected (all reveals/animation disabled).
- **Performance:** near-zero JS (small inline islands only), self-hosted fonts
  with `font-display: swap`, no render-blocking external requests.
- **SEO:** Open Graph + Twitter tags, JSON-LD `Person` schema, `sitemap.xml`,
  `robots.txt`, and a canonical URL — all wired in `src/layouts/Base.astro`.
