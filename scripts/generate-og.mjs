// ============================================================
// Generates the 1200x630 social preview image at public/og.png.
// Run with:  node scripts/generate-og.mjs
// Re-run if the name, positioning, or palette change.
// ============================================================
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = resolve(__dirname, "../public/og.png");

// Palette mirrors src/styles/global.css (light theme).
const paper = "#faf9f6";
const ink = "#17150f";
const muted = "#6c685f";
const accent = "#2f4a8c";
const border = "#d4d0c6";

const serif = "Georgia, 'Times New Roman', serif";
const sans = "Helvetica, Arial, sans-serif";

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="${paper}"/>
  <line x1="0" y1="188" x2="1200" y2="188" stroke="${border}" stroke-width="1.5"/>
  <line x1="0" y1="500" x2="1200" y2="500" stroke="${border}" stroke-width="1.5"/>

  <!-- KJ monogram tile -->
  <rect x="80" y="86" width="84" height="84" rx="18" fill="${ink}"/>
  <text x="122" y="144" font-family="${serif}" font-size="40" font-weight="700"
        fill="${paper}" text-anchor="middle">KJ</text>
  <text x="182" y="140" font-family="${sans}" font-size="26" font-weight="600"
        letter-spacing="1" fill="${muted}">Khushi Juneja</text>

  <!-- Name, large -->
  <text x="78" y="330" font-family="${serif}" font-size="104" font-weight="600"
        letter-spacing="-4" fill="${ink}">Khushi Juneja</text>

  <!-- Positioning -->
  <text x="80" y="398" font-family="${sans}" font-size="27" font-weight="500"
        fill="${muted}">Math (OR &amp; Statistics) and HCI at Carnegie Mellon.</text>
  <text x="80" y="436" font-family="${sans}" font-size="27" font-weight="500"
        fill="${muted}">I build software, run research, and design things people use.</text>

  <!-- Builder / researcher marker -->
  <circle cx="90" cy="560" r="7" fill="${accent}"/>
  <text x="110" y="569" font-family="${sans}" font-size="23" font-weight="600"
        fill="${ink}">Builder and researcher</text>
  <text x="1120" y="569" font-family="${sans}" font-size="22" font-weight="600"
        fill="${muted}" text-anchor="end">junejakhushi.github.io</text>
</svg>
`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log("Wrote", out);
