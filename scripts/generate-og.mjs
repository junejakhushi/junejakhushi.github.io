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
const paper = "#fffdf7";
const ink = "#1c1611";
const ink2 = "#463c31";
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

  <!-- Name -->
  <text x="80" y="300" font-family="${serif}" font-size="118" font-weight="600"
        letter-spacing="-3" fill="${ink}">Khushi Juneja</text>

  <!-- Role -->
  <text x="84" y="372" font-family="${sans}" font-size="30" font-weight="600"
        letter-spacing="0.5" fill="${accent}">OR/Stats + HCI · Carnegie Mellon University</text>

  <!-- Tagline (two lines) -->
  <text x="84" y="432" font-family="${sans}" font-size="27" fill="${ink2}">Building at the intersection of learning systems, educational</text>
  <text x="84" y="470" font-family="${sans}" font-size="27" fill="${ink2}">design, and applied research.</text>

  <!-- Looking-for chip -->
  <rect x="84" y="520" width="640" height="56" rx="28" fill="${accentTint}" stroke="${accentBorder}" stroke-width="1.5"/>
  <circle cx="120" cy="548" r="7" fill="${accent}"/>
  <text x="140" y="557" font-family="${sans}" font-size="23" font-weight="600"
        fill="${accent}">Open to Fall 2026 &amp; Summer 2027 research &amp; product roles</text>

  <!-- Site URL -->
  <text x="1120" y="557" font-family="${sans}" font-size="22" font-weight="600"
        fill="${muted}" text-anchor="end">junejakhushi.github.io</text>
</svg>
`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log("Wrote", out);
