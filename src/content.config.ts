// ============================================================
// Projects collection. Each project is a Markdown file in
// src/content/projects/. All content is in the frontmatter; the
// detail page renders What / How / Result / Stack / Links from it.
// ============================================================
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

export const CATEGORIES = [
  "Software & AI",
  "Research & Data",
  "Hardware",
  "Games",
] as const;

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    year: z.number(),
    status: z.enum(["Shipped", "Building", "Research"]),
    summary: z.string(),
    categories: z.array(z.enum(CATEGORIES)).nonempty(),
    order: z.number().default(100),
    builtWith: z.array(z.string()).default([]),
    links: z
      .array(z.object({ label: z.string(), href: z.string() }))
      .default([]),
    image: z.object({ src: z.string(), alt: z.string() }).optional(),
    // Short plain sections for the detail page.
    what: z.string(),
    how: z.string().optional(),
    result: z.string().optional(),
  }),
});

export const collections = { projects };
