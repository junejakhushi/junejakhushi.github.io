// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// User site → served from the domain root. base must be "/".
export default defineConfig({
  site: "https://junejakhushi.github.io",
  base: "/",
  trailingSlash: "ignore",
  integrations: [sitemap()],
  vite: {
    // Cast: @tailwindcss/vite resolves its own copy of Vite, so its Plugin
    // type is structurally identical but nominally different from Astro's.
    // Types-only mismatch; the plugin works correctly at build time.
    plugins: [/** @type {any} */ (tailwindcss())],
  },
});
