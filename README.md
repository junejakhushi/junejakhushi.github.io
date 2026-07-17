# Khushi Juneja — Portfolio

A fast, accessible, editorial portfolio positioning Khushi as a **learning data
scientist**: LLM evaluation, learning analytics, statistical and mixed-methods
research, and AI-supported education.

Built with **Astro + TypeScript + Tailwind CSS v4**, fully static, deployed to
**GitHub Pages** at <https://junejakhushi.github.io>.

All content lives in typed data files under `src/data/` — you can add a project,
edit a bullet, or change a date without touching markup.

---

## Run locally

```bash
npm install      # one time
npm run dev      # dev server → http://localhost:4321
npm run check    # type check (astro check)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

> There is no lint/format/test script in this repo. `npm run check` +
> `npm run build` are the quality gates.

---

## Where content lives

Everything visible on the site comes from `src/data/`. Edit a file, save, done.

| File | Controls |
| --- | --- |
| `src/data/profile.ts` | Name, pronouns, eyebrow (**graduation date**), headline, positioning, credibility indicators, **availability**, email, links, languages, stakeholder audiences, JSON-LD topics |
| `src/data/experience.ts` | **The experience timeline** — every role and bullet |
| `src/data/caseStudies.ts` | **The four featured case studies** — powers both the homepage cards *and* the `/projects/<slug>` pages |
| `src/data/projects.ts` | The remaining gallery projects + the merged `galleryItems` list |
| `src/data/tags.ts` | The shared filter vocabulary (`ProjectTag`) |
| `src/data/skills.ts` | Skill groups (`secondary: true` renders a group as secondary) |
| `src/data/education.ts` | Degrees, honors, minor, **graduation date**, coursework |
| `src/data/methods.ts` | The "How I evaluate learning systems" steps |
| `src/data/philosophy.ts` | "How I Think" points + pull quote |
| `src/data/site.ts` | **Feature flags** — application banner, resume button |

### Where the experience data is stored

`src/data/experience.ts`. It's an array of `ExperienceEntry`. Roles are ordered
**by relevance, not strictly by date** — the evaluation/analysis work leads.
To add a role, copy an object and place it where you want it to appear:

```ts
{
  role: "Data Scientist",
  org: "Some Lab",
  location: "Pittsburgh, PA",
  dates: "Jan 2027 – Present",
  current: true,          // adds the "Now" badge
  bullets: ["Lead with the method or verb..."],
},
```

### Where the case-study content is stored

`src/data/caseStudies.ts` — one object per case study. Each entry renders in
**two** places automatically, so there's a single source of truth:

1. a card in "Selected Data and Research Work" on the homepage, and
2. a full page at `/projects/<slug>` (statically generated).

To add a case study, copy an object and fill every required field. The `slug`
becomes the URL. `diagram` + `diagramAlt` render the accessible evidence-chain
visual (HTML/CSS — no images).

Optional fields (like `scale`) are **hidden when omitted** — that's deliberate.
Only fill them with verified values. See "Content integrity" below.

### Adding a regular (non-case-study) project

`src/data/projects.ts` — these open in the modal rather than getting a page:

```ts
{
  title: "My Project",
  subtitle: "Internal name",           // optional
  eyebrow: "Method · Method · Method", // the method-first line on the card
  summary: "One line on the card.",
  description: "Longer text in the modal.",
  tags: ["Machine Learning", "Statistics"],  // must come from tags.ts
  tech: ["Python"],                    // optional
},
```

---

## How to update the graduation date

It appears in **two** places — update both:

1. `src/data/profile.ts` → `eyebrow: "Carnegie Mellon University · Expected May 2027"`
2. `src/data/education.ts` → `expected: "Expected May 2027"`

Also check `availability` / `availabilityShort` in `profile.ts` and the contact
copy in `src/components/Footer.astro`, which reference **May 2027**.

---

## How to enable or disable the application banner

`src/data/site.ts`:

```ts
banner: {
  enabled: true,   // ← set to false to hide the banner site-wide
  text: "Currently seeking a part-time learning data science or research role, …",
},
```

It's a single flag read by `src/components/Banner.astro`. Nothing is hardcoded
elsewhere — changing `enabled` removes it from every page.

---

## Resume

⚠️ **The resume PDF is not in the repo yet, so the button currently 404s.**

Place the file at exactly:

```
public/Khushi_Juneja_Data_Research_Resume.pdf
```

Once it's there, the existing "View targeted resume" buttons (hero + contact)
will work with no code change — anything in `public/` is served from the site
root.

To change the filename or label, edit `src/data/site.ts`:

```ts
resume: {
  enabled: true,   // ← set to false to hide every resume button
  path: "/Khushi_Juneja_Data_Research_Resume.pdf",
  label: "View targeted resume",
},
```

**Until you add the PDF, either drop the file in or set `enabled: false`** —
don't ship a broken resume link to recruiters.

---

## Content integrity

This site deliberately does **not** claim: sample sizes, model names, accuracy
or precision figures, district/publisher partnerships, publications, awards, or
causal findings that aren't supported.

- Unverified fields are left **undefined and conditionally hidden**, not filled
  with guesses. Placeholder markers live in source comments only.
- Causal-inference language is hedged on purpose ("foundations", "developing
  expertise", "experience analyzing controlled studies"). See the warning
  comment at the top of `src/data/skills.ts`.
- Findings are phrased as within-study results, not universal claims.

See `PORTFOLIO_AUDIT.md` for the full list of facts requiring verification.

---

## Design tokens

One place: the `@theme` block at the top of `src/styles/global.css` — accent
color, fonts, type scale, spacing.

## Social preview image

`public/og.png` (1200×630) is generated by `scripts/generate-og.mjs`:

```bash
node scripts/generate-og.mjs && npm run build
```

---

## Deploy to GitHub Pages

The repo is the user site `junejakhushi.github.io`, so it serves from the root.

Push to `main` and the included workflow (`.github/workflows/deploy.yml`) builds
and deploys automatically:

```bash
git add -A && git commit -m "Update content" && git push
```

Repo → **Settings → Pages → Source = GitHub Actions** must be set (one time).

---

## What's where

```
public/            og.png, robots.txt   (+ resume PDF once added)
scripts/           generate-og.mjs
src/
  data/            ← all editable content + site config
  components/      Banner, Nav, Hero, FeaturedWork, Methods,
                   ExperienceTimeline, Projects, EvidenceChain,
                   Stakeholders, Philosophy, Skills, Education,
                   Footer, ResumeButton
  layouts/         Base.astro   (meta, OG, JSON-LD, scroll reveal)
  pages/
    index.astro           the homepage
    projects/[slug].astro the four case-study pages
  styles/global.css       design tokens + base styles
PORTFOLIO_AUDIT.md  audit + facts needing verification
legacy/             the previous card-deck site (reference only)
```

## Notes

- **Accessibility:** semantic landmarks, one `<h1>` per page, keyboard support
  (the project modal is a native `<dialog>`), visible focus rings, AA contrast,
  diagrams are real markup with text alternatives, and `prefers-reduced-motion`
  disables all reveals/animation.
- **Performance:** near-zero JS, self-hosted fonts with `font-display: swap`.
- **SEO:** OG + Twitter tags, JSON-LD `Person`, sitemap, robots.txt, canonical
  URLs; each case-study page sets its own title and description.
