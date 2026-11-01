import { mkdir, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const PUBLIC = fileURLToPath(new URL('../public', import.meta.url));
const OUT = path.join(PUBLIC, 'optimized');

const RULES = [
  { match: /^ramy\.png$/, widths: [640, 1021], quality: 80 },
  { match: /^ramy2\.png$/, widths: [260], quality: 80 },
  { match: /^logos\//, widths: [200], quality: 80 },
  { match: /^ceos\//, widths: [160], quality: 80 },
  {
    match:
      /^(bubble|ecosmart|elbey hotel|hotel manager|kalam|madar|nexo|novadoc|tessam|verticCity)\//,
    widths: [800, 1600],
    quality: 75,
  },
];

async function isFresh(input, output) {
  try {
    return (await stat(output)).mtimeMs >= (await stat(input)).mtimeMs;
  } catch {
    return false;
  }
}

let written = 0;
const entries = await readdir(PUBLIC, { recursive: true, withFileTypes: true });

for (const entry of entries) {
  if (!entry.isFile() || !/\.(png|jpe?g)$/i.test(entry.name)) continue;
  const input = path.join(entry.parentPath, entry.name);
  const relative = path.relative(PUBLIC, input).split(path.sep).join('/');
  if (relative.startsWith('optimized/')) continue;
  const rule = RULES.find(({ match }) => match.test(relative));
  if (!rule) continue;

  for (const width of rule.widths) {
    const output = path.join(OUT, `${relative}-${width}.webp`);
    if (await isFresh(input, output)) continue;
    await mkdir(path.dirname(output), { recursive: true });
    await sharp(input)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: rule.quality })
      .toFile(output);
    written += 1;
  }
}

console.log(`optimize-images: wrote ${written} file(s)`);
