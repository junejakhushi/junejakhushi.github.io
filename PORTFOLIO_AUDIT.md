# Portfolio Audit

Audit performed before the "learning data scientist" repositioning pass.
Scope: reposition for a Data Scientist / Research Manager role at an early-stage
AI-education company, while keeping the site useful for data science, learning
engineering, HCI, and ed-tech opportunities generally.

---

## 1. Current structure

Astro 5 + TypeScript + Tailwind v4, fully static, deployed to GitHub Pages via
`.github/workflows/deploy.yml`. Content is already separated from markup — every
section reads from a typed file in `src/data/`.

```
src/
  data/         profile.ts, experience.ts, projects.ts, skills.ts,
                education.ts, philosophy.ts
  components/   Nav, Hero, ExperienceTimeline, Projects, Philosophy,
                Skills, Education, Footer
  layouts/      Base.astro   (meta, OG, JSON-LD Person, scroll-reveal)
  pages/        index.astro  ← the ONLY route
  styles/       global.css   (design tokens in a Tailwind @theme block)
public/         og.png, robots.txt
scripts/        generate-og.mjs
legacy/         previous card-deck site (reference only, not built)
```

**Routing:** single-page long scroll. There are **no project routes** — every
project opens a shared native `<dialog>` modal populated from data attributes.

**Design system:** warm neutral base (cream/sand), near-black ink, one deep
terracotta accent, Fraunces (display) + Inter (body), all tokens centralized in
the `@theme` block. Preserved as-is by this pass.

**Reusable patterns to build on:** `.shell` (max-width container), `.eyebrow`,
`.section`, `[data-reveal]` (IntersectionObserver reveal, no-JS safe), the card
grid, and the filter + modal island in `Projects.astro`.

---

## 2. Content inconsistencies found

| # | Issue | Location | Resolution |
|---|---|---|---|
| 1 | **Graduation date wrong** — shows `Expected May 2028` | `education.ts`, `profile.ts` eyebrow | → **May 2027** (confirmed) |
| 2 | **Minor wrong** — shows `Minors: Game Design · Physical Computing` (two minors, carried from the old card-deck site) | `education.ts` | → single **Design for Learning** (confirmed directly) |
| 3 | **Accelerated M.S. toggle exists** but there are no plans to enroll | `education.ts` (`showMastersLine`) | → **removed entirely**, not just hidden |
| 4 | **Availability language too generic/student-flavored** — "Open to Fall 2026 & Summer 2027 internships" | `profile.ts` | → part-time/contract now, full-time from May 2027 |
| 5 | **Missing role** — Software Engineering Intern, Decimal Point | `experience.ts` | → added (June 2026–Present) |
| 6 | **Experience ordered strictly by date**, so the most relevant evaluation work isn't guaranteed to lead | `experience.ts` | → reordered by relevance |
| 7 | **Hero over-broad** — lists many technologies rather than a specialization | `Hero.astro`, `profile.ts` | → specialization-first headline |
| 8 | **No resume affordance** — removed in a previous pass; no PDF in the repo | site-wide | → button restored w/ documented placeholder path |
| 9 | **Project titles vague** — `LL3` is meaningless to a recruiter | `projects.ts` | → descriptive public title, LL3 kept as subtitle |
| 10 | **Projects are summaries, not evidence** — no question→data→method→finding→decision chain | `projects.ts` | → 4 structured case studies |
| 11 | **Skills taxonomy under-sells the quantitative engine** | `skills.ts` | → regrouped, DS/stats first |
| 12 | **SEO metadata generic** | `Base.astro` | → learning-data-scientist framing |

---

## 3. Broken / incomplete links

- **No broken links found.** All in-page anchors (`#work`, `#projects`,
  `#about`, `#contact`) resolve to existing sections.
- **No empty project routes** — because no project routes existed at all. Any
  case-study page added must be complete on arrival (see §5).
- `og.png` and `robots.txt` resolve at the root; `sitemap-index.xml` is
  generated at build.
- ⚠️ **A resume link is a new risk**: there is no PDF in the repo, so the button
  will 404 until the file is added. Documented in the README.

---

## 4. Missing project details

The following are needed for the evidence-to-decision chain but are **not
present anywhere in the repository**. They are left as source-code placeholders
and **conditionally hidden in production** rather than invented:

- Sample sizes for every study (`[ADD VERIFIED SAMPLE SIZE]`).
- Model names / versions used in the LLM evaluation work.
- Concrete agreement statistics (κ values), accuracy or precision figures.
- Deployment status of the feedback system (shipped vs. internal).
- Any publication, award, or named partner organization.

The only quantitative claims carried forward are ones already established in the
repo or supplied directly: **200+ students** observed (Eberly), **$5K+ in 6
weeks** (Unifly), **30% manual overhead reduction** (Unifly), **45% support
query reduction** (Vinsol), and the newly supplied OAK finding (feedback time
≈2×, practice iterations ≈−40%, no corresponding performance gain).

---

## 5. Proposed changes

1. **Facts** — graduation May 2027; single minor "Design for Learning"; delete
   the M.S. toggle; new availability copy (long + short variants).
2. **Config** — new `src/data/site.ts` holding feature flags (application
   banner) and the resume path, so nothing is hardcoded across components.
3. **Banner** — reusable `Banner.astro`, enabled via the config flag.
4. **Hero** — specialization headline, supporting copy, three credibility
   indicators, resume button alongside existing links.
5. **Experience** — add Decimal Point; reorder by relevance; rewrite bullets to
   lead with evaluation/analysis method.
6. **Case studies** — new `src/data/caseStudies.ts` (typed) + a
   `/projects/[slug]` dynamic route for the four featured studies, each with
   problem → questions → data → methods → outcome and a CSS/HTML evidence-chain
   diagram (no raster images, accessible, responsive).
7. **Featured section** — "Selected Data and Research Work" above the gallery,
   surfacing question/data/methods/result/decision/role/tools per card.
8. **Gallery** — reorder data/research first; retitle vague entries; featured
   cards link to their case-study page, the rest keep the existing modal.
9. **New sections** — "How I Evaluate Learning Systems" (4 steps) and
   stakeholder-communication audiences.
10. **Skills** — new taxonomy; design/game/facilitation retained as a secondary
    group.
11. **Contact + SEO** — evidence-focused heading/copy; updated title,
    description, OG, and JSON-LD.

**Preserved:** design tokens, palette, typography, monogram, layout rhythm,
the projects filter, the modal interaction, reveal behavior, and the
`prefers-reduced-motion` contract.

---

## 6. Facts requiring verification

| Fact | Status | Action |
|---|---|---|
| Minor: Design for Learning | ✅ confirmed directly | displayed |
| Graduation: May 2027 | ✅ confirmed directly | displayed |
| No accelerated M.S. | ✅ confirmed directly | toggle deleted |
| Decimal Point dates (June 2026–Present) | ✅ supplied | displayed, no invented metrics |
| OAK reflection finding (≈2× feedback time, ≈−40% practice iterations, no perf gain) | ✅ supplied | phrased as a within-study finding, not causal/universal |
| Teaching Assistant role | ⚠️ "if retained" | **retained** — remove if unwanted |
| Resume PDF | ❌ not in repo | placeholder path + README instructions |
| Sample sizes, model names, κ values, accuracy figures | ❌ unknown | placeholders, hidden in production |
| Audiences: superintendents / publishers / policymakers / funders | ❌ unsupported | **not claimed** |
| Causal-inference depth | ⚠️ foundations only | hedged language only ("foundations", "developing expertise") |

---

## 7. Tooling note

`package.json` defines only `dev`, `build`, `preview`, `astro` — there is **no
lint, format, or test script** in this repository. Quality gating for this pass
is therefore: `astro check` (type checking, dependency added) plus
`astro build` (production build), and manual responsive/a11y verification in a
browser.
