// ============================================================
// Generates the 1200×630 social preview image at public/og.png.
// Run with:  node scripts/generate-og.mjs
// Re-run if the name / tagline / palette change.
// ============================================================
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = resolve(__dirname, "../public/og.png");

// Palette mirrors src/styles/global.css
const cream = "#faf6ee";
const ink = "#1c1611";
const muted = "#6f6354";
const accent = "#a8402a";
const accentTint = "#f7e9e2";
const accentBorder = "#e7c3b4";
const sand = "#c9b99a";

const serif = "Georgia, 'Times New Roman', 'PT Serif', serif";
const sans = "Helvetica, Arial, sans-serif";

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="100%" cy="0%" r="75%">
      <stop offset="0%" stop-color="${sand}" stop-opacity="0.45"/>
      <stop offset="55%" stop-color="${sand}" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="${cream}"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect x="0" y="0" width="1200" height="10" fill="${accent}"/>

  <!-- KJ monogram tile -->
  <rect x="80" y="78" width="92" height="92" rx="20" fill="${ink}"/>
  <text x="126" y="140" font-family="${serif}" font-size="44" font-weight="700"
        fill="${cream}" text-anchor="middle">KJ</text>

  <text x="188" y="138" font-family="${sans}" font-size="26" font-weight="600"
        letter-spacing="1" fill="${muted}">Khushi Juneja</text>

  <!-- Headline (two lines) -->
  <text x="80" y="270" font-family="${serif}" font-size="72" font-weight="600"
        letter-spacing="-2" fill="${ink}">Learning data scientist</text>
  <text x="80" y="348" font-family="${serif}" font-size="72" font-weight="600"
        letter-spacing="-2" fill="${ink}">building evidence for AI-</text>
  <text x="80" y="426" font-family="${serif}" font-size="72" font-weight="600"
        letter-spacing="-2" fill="${ink}">powered education.</text>

  <!-- Role -->
  <text x="84" y="478" font-family="${sans}" font-size="26" font-weight="600"
        letter-spacing="0.5" fill="${accent}">OR/Statistics + HCI · Carnegie Mellon University</text>

  <!-- Specialization chip -->
  <rect x="84" y="516" width="700" height="56" rx="28" fill="${accentTint}" stroke="${accentBorder}" stroke-width="1.5"/>
  <circle cx="120" cy="544" r="7" fill="${accent}"/>
  <text x="140" y="553" font-family="${sans}" font-size="22" font-weight="600"
        fill="${accent}">LLM evaluation · Learning analytics · Mixed-methods research</text>

  <!-- Site URL -->
  <text x="1120" y="557" font-family="${sans}" font-size="22" font-weight="600"
        fill="${muted}" text-anchor="end">junejakhushi.github.io</text>
</svg>
`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log("Wrote", out);
