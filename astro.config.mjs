// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// User site served from the domain root. base must be "/".
// Astro is used only as a build-time generator: the output is plain
// HTML with one stylesheet and a little vanilla JS, no framework runtime.
export default defineConfig({
  site: "https://junejakhushi.github.io",
  base: "/",
  trailingSlash: "ignore",
  integrations: [sitemap()],
});
