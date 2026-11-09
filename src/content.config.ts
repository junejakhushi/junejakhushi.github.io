// ============================================================
// Content collections.
// Projects live as Markdown files in src/content/projects/*.md.
// The frontmatter drives the cards and the filter grid; the Markdown
// body (## Overview, ## My role, ## Problem, ## What I built,
// ## Results / what I learned) renders the detail page. Stack and
// Links come from the frontmatter below, so the body never repeats them.
// ============================================================
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// The five filter buckets used on the homepage.
export const CATEGORIES = [
  "Software & AI",
  "Research & Data",
  "Games & Interaction",
  "Hardware & Physical Computing",
  "Product",
] as const;

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    year: z.number(),
    status: z.enum(["Shipped", "Building", "Research"]),
    summary: z.string(),
    categories: z.array(z.enum(CATEGORIES)).nonempty(),
    tags: z.array(z.string()).default([]),
    builtWith: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    // Lower sorts first within its group. Defaults keep file order loose.
    order: z.number().default(100),
    links: z
      .array(z.object({ label: z.string(), href: z.string() }))
      .default([]),
    // Optional real screenshot; until then a monogram tile renders.
    image: z.object({ src: z.string(), alt: z.string() }).optional(),
    // Optional 2 to 3 letter tile monogram; defaults to the title initials.
    monogram: z.string().optional(),
    // Optional diverging-bar finding (used by the OAK study page only).
    finding: z
      .object({
        title: z.string(),
        caption: z.string(),
        takeaway: z.string(),
        note: z.string(),
        measures: z.array(
          z.object({
            label: z.string(),
            change: z.number(),
            display: z.string(),
            kind: z.enum(["increase", "decrease", "none"]),
          }),
        ),
      })
      .optional(),
  }),
});

export const collections = { projects };
