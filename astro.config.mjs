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
    plugins: [tailwindcss()],
  },
});
