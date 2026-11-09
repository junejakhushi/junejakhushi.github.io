# Khushi Juneja - Portfolio

A static portfolio built with [Astro](https://astro.build) and Tailwind CSS v4,
deployed to GitHub Pages at `junejakhushi.github.io`. Light/dark theme, no
framework runtime, content kept in data files so copy changes never touch layout.

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run preview    # serve the built site
npm run check      # type-check (astro check)
```

## Where content lives

All content is in `src/data/*.json` and `src/content/projects/*.md`. You should
not need to edit any `.astro` file to update copy.

| What | File |
| --- | --- |
| Name, location, positioning, "currently" line, contact links, resume flag, About paragraphs, Education | `src/data/site.json` |
| Experience timeline | `src/data/experience.json` |
| Skills chips | `src/data/skills.json` |
| Projects (cards + detail pages) | `src/content/projects/*.md` |

Copy rule: no em dashes anywhere. Use commas, colons, or an en dash (`–`) for
date ranges.

### Add or edit a project

Each project is one Markdown file in `src/content/projects/`. The file name is
the URL: `waypoint-wars.md` becomes `/projects/waypoint-wars`. Frontmatter drives
the card and the filter grid; the Markdown body is the detail page.

```markdown
---
title: My Project
year: 2026
status: Building            # Shipped | Building | Research
featured: true              # show in the featured row (optional)
order: 7                    # lower sorts first (optional)
summary: One line shown on the card.
categories: ["Software & AI"]   # one or more of the five filters
tags: ["AI", "React"]           # small labels on the card
builtWith: ["Python", "React"]  # renders the Stack section
links:                          # optional, renders the Links section
  - { label: "GitHub", href: "https://github.com/..." }
monogram: MP                    # optional 2-3 letters for the tile
image: { src: "/projects/my-project.png", alt: "..." }  # optional screenshot
---

## Overview
What it is and why it exists.

## My role
## Problem
## What I built
## Results / what I learned
```

Valid `categories`: `Software & AI`, `Research & Data`, `Games & Interaction`,
`Hardware & Physical Computing`, `Product`. Stack and Links come from frontmatter,
so do not repeat them in the body. Until you add an `image`, the card shows a
monogram tile; drop a screenshot in `public/projects/<slug>.png` and set `image`
to swap it in.

### Add or edit a role

Edit `src/data/experience.json`. Order in the file is the display order
(reverse-chronological). Each entry:

```json
{
  "role": "Software Engineering Intern",
  "org": "Company, City",
  "dates": "May 2026 – Present",
  "summary": "One line shown collapsed.",
  "bullets": ["Expands to 2 to 3 bullets.", "..."]
}
```

### Edit skills

Edit `src/data/skills.json`: an array of `{ "label", "items": [...] }` groups.

## Resume

The resume link is hidden until you turn it on. Put the PDF at
`public/Khushi_Juneja_Resume.pdf`, then set `resume.enabled` to `true` in
`src/data/site.json`. The link appears in the hero and stays hidden everywhere
otherwise.

## Design tokens

Colors, fonts, and the type scale are defined once in `src/styles/global.css`
under `@theme`, with a dark override below it. Change the accent or palette
there and the whole site follows. Fonts: Fraunces (display), Inter (body),
Space Mono (labels).

## Social preview image

`public/og.png` is generated from `scripts/generate-og.mjs`. Re-run it after a
name, positioning, or palette change:

```bash
node scripts/generate-og.mjs
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes to GitHub Pages. `astro.config.mjs` sets `base: "/"` because this is a
user site served from the domain root.
