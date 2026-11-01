# Homepage JS Error and Mobile LCP Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove the `<path> attribute d` console error and bring mobile LCP from 9.2 s (reported on production) to under 2.5 s, with a mobile Lighthouse performance score of 90 or more.

**Architecture:** A build-time script generates resized WebP copies of the images in `public/optimized/`, and a small helper builds their URLs. Components use those copies, the hero image is preloaded, and project images stop loading up front. Two main-thread costs are also removed: an off-screen physics loop and a JS-driven marquee.

**Tech Stack:** React 19, Vite 6, Tailwind 4, framer-motion, sharp (new dev dependency), `node:test` (built in, Node 22).

## Global Constraints

- Work on a branch, `fix/homepage-lcp`, not `main`.
- Originals in `public/` are kept. Generated files go in `public/optimized/`, which is git-ignored.
- `public/optimized/` is created by `prebuild`, so production must build with `npm run build`, not a direct `vite build`.
- Paths with spaces (`elbey hotel`, `hotel manager`) must be percent-encoded, because `srcset` splits on whitespace.
- Don't change the visual design, copy, or animations beyond what a task states.
- Commit messages end with: `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`

## Findings

Measured on 2026-11-01 with Lighthouse 12 and Edge, against a local production build (`vite preview`).

| Metric | Mobile | Desktop |
| --- | --- | --- |
| Performance score | 59 | 69 |
| LCP | 25.6 s | 5.0 s |
| Total blocking time | 600 ms | 220 ms |
| CLS | 0 | 0 |
| Page weight | 14.9 MB | 15.4 MB |

These scores are not directly comparable with the reported production scores (93 desktop, 75 mobile). Use them only as a before/after baseline for local runs. Task 10 re-measures production.

| # | Problem | Evidence | Fix |
| --- | --- | --- | --- |
| 1 | Console error | `index.html:13` contains a leftover `<path class="custom-path" d="...">`. Nothing else references it. | Task 1 |
| 2 | The LCP element is `ramy.png` (1.1 MB) | Lighthouse LCP element. It is only discovered after the JS runs. | Tasks 2-3 |
| 3 | Mobile downloads every project image at full size, 13.1 MB in total | The hover preview in `Projects.jsx:159-170` renders 10 eager `<img>` inside a `hidden md:block` parent. `display: none` does not stop eager images from loading. The mobile list images at `Projects.jsx:90` are also eager. | Tasks 2, 4 |
| 4 | Main thread is busy even with the panel hidden | `Skills.jsx:97-160` calls `setPositions` on every animation frame, forever, which re-renders all of `Skills`. It also runs on mobile, where the panel is `hidden lg:flex`. Long tasks: 280 ms, 252 ms, 159 ms. | Task 7 |
| 5 | Hero marquee runs in JS | `Hero.jsx:69-81` animates through framer-motion on the main thread. | Task 7 |
| 6 | 458 KB font, no `font-display` | `src/assets/font/Roboto.ttf`. The WOFF2 latin subset of the same family is about 30 KB. | Task 6 |
| 7 | Project page code ships with the homepage | 62 KB of the 153 KB JS bundle is unused on load. | Task 8 |
| 8 | SEO score 83 | Missing meta description and `robots.txt`. | Task 9 |

Measured WebP sizes (sharp, tested on the real files):

| Image | Original | WebP |
| --- | --- | --- |
| `ramy.png` | 1105 KB | 49 KB at 640w, 101 KB at 1021w (transparency kept) |
| The 10 project images on the homepage | 13,081 KB | 323 KB in total at 800w |

## File Structure

| File | Action | Responsibility |
| --- | --- | --- |
| `scripts/optimize-images.mjs` | Create | Generates `public/optimized/**` from `public/**` |
| `src/utils/image.js` | Create | Builds optimized image URLs and `srcset` strings |
| `tests/index-html.test.mjs` | Create | Guards SVG path validity and preload URLs |
| `tests/image.test.mjs` | Create | Guards the helper and generated files |
| `public/robots.txt` | Create | Crawl rules |
| `index.html` | Modify | Remove broken SVG, add preload and description |
| `src/components/Hero.jsx` | Modify | Responsive hero image, CSS marquee |
| `src/components/Projects.jsx` | Modify | Deferred hover preview, lazy mobile images |
| `src/components/ScrollableProjects.jsx` | Modify | Responsive images |
| `src/components/Contact.jsx`, `Testimonials.jsx`, `NextProject.jsx`, `src/pages/project.jsx` | Modify | Use optimized images |
| `src/components/Skills.jsx` | Modify | Pause physics when off-screen |
| `src/index.css`, `src/main.jsx` | Modify | New font, marquee keyframes |
| `src/App.jsx` | Modify | Lazy-load the project route |

---

### Task 1: Remove the broken SVG

**Files:**
- Modify: `index.html:11-15`, `package.json`
- Test: `tests/index-html.test.mjs`

**Interfaces:**
- Produces: `npm test` (runs `node --test`), used by every later task.

- [ ] **Step 0: Create the branch**

```bash
git checkout -b fix/homepage-lcp
```

- [ ] **Step 1: Write the failing test**

Create `tests/index-html.test.mjs`:

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

test('SVG paths in index.html start with a moveto command', () => {
  for (const [, d] of html.matchAll(/\sd="([^"]*)"/g)) {
    assert.match(d, /^[Mm]/);
  }
});
```

In `package.json`, add this to `scripts`:

```json
"test": "node --test"
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test`
Expected: FAIL, because `"..."` does not match `/^[Mm]/`.

- [ ] **Step 3: Remove the leftover markup**

Delete these lines from `index.html`:

```html
    <div class="absolute top-0 w-full h-[calc(100%+300px)]">
      <svg>
        <path class="custom-path" d="..."></path>
      </svg>
    </div>
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npm test`
Expected: PASS

- [ ] **Step 5: Check in the browser**

Run: `npm run dev`, open the homepage, and open the console.
Expected: no `<path> attribute d` error, and the layout is unchanged.

- [ ] **Step 6: Commit**

```bash
git add index.html package.json tests/index-html.test.mjs
git commit -m "fix: remove leftover SVG path causing console error"
```

---

### Task 2: Image pipeline and URL helper

**Files:**
- Create: `scripts/optimize-images.mjs`, `src/utils/image.js`
- Modify: `package.json`, `.gitignore`
- Test: `tests/image.test.mjs`

**Interfaces:**
- Produces:
  - `optimized(src: string, width: number): string`. `optimized('/elbey hotel/1.png', 800)` returns `/optimized/elbey%20hotel/1.png-800.webp`. The original extension stays in the name because `verticCity/1.jpg` and `verticCity/1.png` both exist and would otherwise collide.
  - `srcSet(src: string, widths: number[]): string`
  - `SCREENSHOT_WIDTHS = [800, 1600]`
- Generated widths: `ramy.png` 640 and 1021; `ramy2.png` 260; `logos/*` 200; `ceos/*` 160; project folders 800 and 1600.

- [ ] **Step 1: Write the failing tests**

Create `tests/image.test.mjs`:

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { optimized, srcSet, SCREENSHOT_WIDTHS } from '../src/utils/image.js';
import { projects } from '../src/utils/info.js';

const onDisk = (url) =>
  existsSync(
    fileURLToPath(new URL(`../public${decodeURI(url)}`, import.meta.url))
  );

test('optimized encodes spaces', () => {
  assert.equal(
    optimized('/elbey hotel/1.png', 800),
    '/optimized/elbey%20hotel/1.png-800.webp'
  );
});

test('optimized keeps jpg and png variants apart', () => {
  assert.notEqual(
    optimized('/verticCity/1.jpg', 800),
    optimized('/verticCity/1.png', 800)
  );
});

test('srcSet has one candidate per width with no raw spaces in URLs', () => {
  const candidates = srcSet('/hotel manager/1.png', [800, 1600]).split(', ');
  assert.equal(candidates.length, 2);
  for (const candidate of candidates) {
    assert.equal(candidate.split(' ').length, 2);
  }
});

test('every project image has generated files', () => {
  for (const project of projects) {
    for (const image of project.images) {
      for (const width of SCREENSHOT_WIDTHS) {
        assert.ok(onDisk(optimized(image, width)), `${image} at ${width}`);
      }
    }
    // ScrollableProjects always shows the 1.png in each project's folder.
    const shot = project.images[0].replace(/[^/]+$/, '1.png');
    assert.ok(onDisk(optimized(shot, 800)), shot);
    if (project.logo) {
      assert.ok(onDisk(optimized(project.logo, 200)), project.logo);
    }
  }
});

test('hero and contact images have generated files', () => {
  assert.ok(onDisk(optimized('/ramy.png', 640)));
  assert.ok(onDisk(optimized('/ramy.png', 1021)));
  assert.ok(onDisk(optimized('/ramy2.png', 260)));
});
```

- [ ] **Step 2: Run the tests to verify they fail**

Run: `npm test`
Expected: FAIL with a module-not-found error for `src/utils/image.js`.

- [ ] **Step 3: Write the helper**

Create `src/utils/image.js`:

```js
export const SCREENSHOT_WIDTHS = [800, 1600];

export function optimized(src, width) {
  const path = src.replace(/^\//, '');
  return encodeURI(`/optimized/${path}-${width}.webp`);
}

export function srcSet(src, widths) {
  return widths.map((width) => `${optimized(src, width)} ${width}w`).join(', ');
}
```

- [ ] **Step 4: Write the generator**

Run:

```bash
npm install -D sharp@^0.34
```

Create `scripts/optimize-images.mjs`:

```js
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
```

In `package.json`, add these to `scripts`:

```json
"images": "node scripts/optimize-images.mjs",
"prebuild": "npm run images",
"predev": "npm run images",
"pretest": "npm run images"
```

Add this to `.gitignore`:

```
public/optimized
```

- [ ] **Step 5: Run the tests to verify they pass**

Run: `npm test`
Expected: PASS. The script reports files written on the first run, and `wrote 0 file(s)` on later runs.

- [ ] **Step 6: Commit**

```bash
git add scripts/optimize-images.mjs src/utils/image.js tests/image.test.mjs package.json package-lock.json .gitignore
git commit -m "feat: generate optimized WebP images at build time"
```

---

### Task 3: Fast hero image

**Files:**
- Modify: `src/components/Hero.jsx:31-35`, `index.html` (head)
- Test: `tests/index-html.test.mjs`

**Interfaces:**
- Consumes: `optimized`, `srcSet` from Task 2.

- [ ] **Step 1: Write the failing test**

Add to the end of `tests/index-html.test.mjs`:

```js
import { srcSet } from '../src/utils/image.js';

test('index.html preloads the hero image with the sizes Hero uses', () => {
  assert.ok(html.includes(`imagesrcset="${srcSet('/ramy.png', [640, 1021])}"`));
  assert.ok(html.includes('imagesizes="(min-width: 768px) 92vh, 78vh"'));
});
```

Move the new `import` line up with the other imports at the top of the file.

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test`
Expected: FAIL on the preload assertion.

- [ ] **Step 3: Add the preload**

In `index.html`, add after the viewport `<meta>`:

```html
    <link
      rel="preload"
      as="image"
      type="image/webp"
      imagesrcset="/optimized/ramy.png-640.webp 640w, /optimized/ramy.png-1021.webp 1021w"
      imagesizes="(min-width: 768px) 92vh, 78vh"
      fetchpriority="high"
    />
```

- [ ] **Step 4: Update the hero image**

In `src/components/Hero.jsx`, add the import:

```jsx
import { optimized, srcSet } from '../utils/image';
```

Replace the `ramy.png` `<img>` with:

```jsx
      <img
        src={optimized('/ramy.png', 1021)}
        srcSet={srcSet('/ramy.png', [640, 1021])}
        sizes="(min-width: 768px) 92vh, 78vh"
        width={1021}
        height={1117}
        fetchPriority="high"
        alt=""
        className="md:h-screen h-[85%] w-auto absolute bottom-0 right-[50%] translate-x-1/2 object-cover z-20 pointer-events-none"
      />
```

`w-auto` is needed because the new `width` attribute would otherwise fix the width and distort the image.

- [ ] **Step 5: Run the test and check the page**

Run: `npm test`
Expected: PASS

Run: `npm run dev`, then check the hero at 390 px and 1440 px wide.
Expected: same size and position as before, and the Network tab shows one `ramy.png-*.webp` request, not two.

- [ ] **Step 6: Commit**

```bash
git add index.html src/components/Hero.jsx tests/index-html.test.mjs
git commit -m "perf: preload a responsive WebP hero image"
```

---

### Task 4: Stop loading project images up front

**Files:**
- Modify: `src/components/Projects.jsx`, `src/components/ScrollableProjects.jsx:53-59`

**Interfaces:**
- Consumes: `optimized`, `srcSet`, `SCREENSHOT_WIDTHS` from Task 2.

The result is checked in the browser, because the behaviour under test is what the browser downloads.

- [ ] **Step 1: Record the failure**

Run: `npm run dev`. In DevTools, set a mobile viewport, disable the cache, and reload at the top of the page.
Expected: the Network tab lists all project screenshots before any scrolling.

- [ ] **Step 2: Update `Projects.jsx`**

Add the import:

```jsx
import { optimized, srcSet, SCREENSHOT_WIDTHS } from '../utils/image';
```

Add this state next to the other `useState` calls:

```jsx
  const [previewReady, setPreviewReady] = useState(false);
```

Replace `manageModal` with:

```jsx
  const manageModal = (active, index) => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) return;
    if (active) setPreviewReady(true);
    setModal({ active, index });
  };
```

Replace the mobile image with:

```jsx
            <img
              src={optimized(project.images[0], 800)}
              srcSet={srcSet(project.images[0], SCREENSHOT_WIDTHS)}
              sizes="100vw"
              loading="lazy"
              decoding="async"
              alt={project.name}
              className="block md:hidden w-full h-[220px] object-cover rounded-md"
            />
```

Replace the hover preview image with:

```jsx
              {previewReady && (
                <img
                  src={optimized(project.images[0], 800)}
                  alt={project.name}
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                />
              )}
```

Add `loading="lazy"` to the tech stack icon `<img>` (`src={tech.image}`).

- [ ] **Step 3: Update `ScrollableProjects.jsx`**

Add the import:

```jsx
import { optimized, srcSet, SCREENSHOT_WIDTHS } from '../utils/image';
```

Replace the `<img>` with:

```jsx
            <img
              src={optimized(item.src, 800)}
              srcSet={srcSet(item.src, SCREENSHOT_WIDTHS)}
              sizes="(min-width: 1024px) 640px, 480px"
              alt={item.name}
              loading="lazy"
              decoding="async"
              draggable={false}
              className="h-60 sm:h-72 md:h-84 lg:h-96 w-auto rounded-2xl sm:rounded-3xl border border-gray-200/90 shadow-sm hover:shadow-md transition-shadow object-cover"
            />
```

- [ ] **Step 4: Verify**

Repeat Step 1.
Expected on mobile: no project images load until you scroll near the Projects section, and only `.webp` files load.

Then use a desktop viewport and hover a project row.
Expected: the preview shows the right image, and it moves correctly between rows. The marquee images still display, including `elbey hotel` and `hotel manager`.

- [ ] **Step 5: Commit**

```bash
git add src/components/Projects.jsx src/components/ScrollableProjects.jsx
git commit -m "perf: defer project images until they are needed"
```

---

### Task 5: Optimize the remaining images

**Files:**
- Modify: `src/components/Contact.jsx:216-220`, `src/components/Testimonials.jsx`, `src/components/Skills.jsx:278`, `src/components/NextProject.jsx:28-35`, `src/pages/project.jsx:69-73,177-192`

**Interfaces:**
- Consumes: `optimized`, `srcSet`, `SCREENSHOT_WIDTHS` from Task 2.

- [ ] **Step 1: Update `Contact.jsx`**

Add `import { optimized } from '../utils/image';` and replace the `<img>` with:

```jsx
          <img
            src={optimized('/ramy2.png', 260)}
            alt="Rami Djebeli"
            width={130}
            height={130}
            loading="lazy"
            className="w-[130px] h-[130px] rounded-full mb-8"
          />
```

- [ ] **Step 2: Update `Testimonials.jsx`**

Add `import { optimized } from '../utils/image';`. Replace every occurrence of:

```jsx
src={testimonial.image}
```

with:

```jsx
src={optimized(testimonial.image, 160)}
loading="lazy"
```

- [ ] **Step 3: Update `Skills.jsx`**

Add `loading="lazy"` to the `<img>` with `src={lang.image}`, so the icons in the hidden panel don't load on mobile.

- [ ] **Step 4: Update `NextProject.jsx`**

Add `import { optimized } from '../utils/image';` and change the image source to:

```jsx
          src={image ? optimized(image, 800) : undefined}
```

- [ ] **Step 5: Update `src/pages/project.jsx`**

Add:

```jsx
import { optimized, srcSet, SCREENSHOT_WIDTHS } from '../utils/image';
```

Change the logo source to:

```jsx
              src={optimized(project.logo, 200)}
```

Replace the primary image with:

```jsx
            <img
              src={optimized(project.images[0], 1600)}
              srcSet={srcSet(project.images[0], SCREENSHOT_WIDTHS)}
              sizes="(min-width: 1400px) 1272px, 100vw"
              alt="Project Screenshot"
              className="w-full rounded-lg shadow-xl"
            />
```

Replace the additional images with:

```jsx
          <img
            key={i}
            src={optimized(image, 1600)}
            srcSet={srcSet(image, SCREENSHOT_WIDTHS)}
            sizes="(min-width: 1400px) 1272px, 100vw"
            loading="lazy"
            decoding="async"
            alt={`Screenshot ${i + 2}`}
            className="w-full mt-12 rounded-lg shadow-md"
          />
```

- [ ] **Step 6: Verify**

Run: `npm test`
Expected: PASS

Run: `npm run dev`. Open the homepage, then visit all 10 project pages from the Projects list.
Expected: the Network tab shows no 404 for any image, and logos stay sharp.

- [ ] **Step 7: Commit**

```bash
git add src/components/Contact.jsx src/components/Testimonials.jsx src/components/Skills.jsx src/components/NextProject.jsx src/pages/project.jsx
git commit -m "perf: serve optimized images across remaining components"
```

---

### Task 6: Replace the font

**Files:**
- Modify: `src/main.jsx`, `src/index.css:6-13`, `package.json`
- Delete: `src/assets/font/Roboto.ttf`

The package was checked: version 5.3.0 declares `font-family: 'Roboto Variable'`, `font-display: swap`, and weights 100-900, with `unicode-range` subsets. The current TTF is also variable, so weights should look the same.

- [ ] **Step 1: Install the package**

```bash
npm install @fontsource-variable/roboto@^5.3.0
```

- [ ] **Step 2: Import it**

In `src/main.jsx`, add above `./i18n`:

```jsx
import '@fontsource-variable/roboto';
```

- [ ] **Step 3: Update the CSS**

In `src/index.css`, delete the `@font-face` block and change the `body` rule to:

```css
body {
  font-family: 'Roboto Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
```

- [ ] **Step 4: Delete the old font**

```bash
git rm src/assets/font/Roboto.ttf
```

- [ ] **Step 5: Verify**

Run: `npm run build`
Expected: succeeds, with `.woff2` files listed and no `Roboto-*.ttf`.

Run: `npm run preview`, then open the homepage in French and in Arabic.
Expected: Roboto renders in French, the Arabic font stack is unchanged, and the Network tab shows a small latin `.woff2`.

- [ ] **Step 6: Commit**

```bash
git add src/main.jsx src/index.css package.json package-lock.json
git commit -m "perf: use subsetted WOFF2 Roboto with font-display swap"
```

---

### Task 7: Reduce main-thread work

**Files:**
- Modify: `src/components/Skills.jsx`, `src/components/Hero.jsx`, `src/index.css`

- [ ] **Step 1: Pause the physics loop when off-screen**

In `src/components/Skills.jsx`, add after the `descriptionInView` declaration:

```jsx
  // False while scrolled away and always false when the panel is hidden on
  // mobile, so the frame loop below never runs there.
  const floatersInView = useInView(containerRef);
```

Change the start of the frame loop effect (line 97) to:

```jsx
  useEffect(() => {
    if (!floatersInView) return;

    const animate = () => {
```

Change its dependency array (line 160) to:

```jsx
  }, [positions, velocities, mousePosition, containerSize, floatersInView]);
```

Change the inner `motion.div` `animate` prop (lines 262-269) to:

```jsx
                  animate={
                    floatersInView
                      ? {
                          y: [0, -5, 0],
                          rotate: [
                            positions[index].rotation,
                            positions[index].rotation + 3,
                            positions[index].rotation,
                          ],
                        }
                      : undefined
                  }
```

- [ ] **Step 2: Add the CSS marquee**

In `src/index.css`, add after the `marquee` keyframes:

```css
@keyframes hero-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(calc(-100% / 6)); }
}

.hero-marquee {
  animation: hero-marquee 40s linear infinite;
}
```

- [ ] **Step 3: Use it in the hero**

In `src/components/Hero.jsx`, make these changes:

1. Remove the `framer-motion` import.
2. Change the React import to `import React from 'react';`.
3. Remove `marqueeRef`, the `width` state, and the `useEffect`.
4. Replace the `motion.div` and its children with the block below.

Each copy now has right padding instead of a gap on the parent, so one copy's width is exactly one loop.

```jsx
        <div
          className="hero-marquee flex w-max text-white whitespace-nowrap"
          style={{ animationDirection: isRTL ? 'reverse' : 'normal' }}
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex md:gap-12 gap-4 items-center whitespace-nowrap pr-8 md:pr-12">
              <p className="lg:text-[240px] md:text-[170px] text-[100px] sm:text-[120px] leading-none z-10">
                {t('hero.name')}
              </p>
              <div className="lg:h-[20px] md:h-[15px] h-[8px] md:w-[200px] w-[100px] bg-white"></div>
            </div>
          ))}
        </div>
```

- [ ] **Step 4: Verify**

Run: `npm run build && npm run preview`, then check the following:

- The marquee moves in the same direction and at about the same speed as before in French, and in the opposite direction in Arabic. There is no jump at the loop point; shorten the duration to 4 s in DevTools to see it quickly.
- At desktop width, the floating icons in Skills still move and react to the mouse.
- In the Performance panel on a mobile viewport, record 5 s at the top of the page. No recurring `Skills` work should appear.

- [ ] **Step 5: Commit**

```bash
git add src/components/Skills.jsx src/components/Hero.jsx src/index.css
git commit -m "perf: pause off-screen physics and run hero marquee in CSS"
```

---

### Task 8: Split the project page from the homepage bundle

**Files:**
- Modify: `src/App.jsx`

- [ ] **Step 1: Lazy-load the route**

Replace `src/App.jsx` with:

```jsx
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main';

const Project = lazy(() => import('./pages/project'));

function App() {
  return (
    <BrowserRouter>
      <div className=" ">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/project/:name" element={<Project />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
```

- [ ] **Step 2: Verify**

Run: `npm run build`
Expected: a separate `project-*.js` chunk.

Run: `npm run preview`. Click from the homepage into a project, then reload directly on `/project/<name>`.
Expected: both work.

- [ ] **Step 3: Commit**

```bash
git add src/App.jsx
git commit -m "perf: lazy-load the project route"
```

---

### Task 9: SEO basics

**Files:**
- Modify: `index.html`
- Create: `public/robots.txt`

- [ ] **Step 1: Add the description**

In `index.html`, add after `<title>`:

```html
    <meta
      name="description"
      content="Djebeli Rami, ingénieur logiciel full-stack à Constantine, Algérie. Portfolio de projets web et mobile, compétences et contact."
    />
```

- [ ] **Step 2: Add `public/robots.txt`**

```
User-agent: *
Allow: /
```

- [ ] **Step 3: Commit**

```bash
git add index.html public/robots.txt
git commit -m "chore: add meta description and robots.txt"
```

---

### Task 10: Measure and ship

**Files:** none, unless a target is missed.

Targets:

| Metric | Baseline (production, reported) | Target |
| --- | --- | --- |
| Console errors | 1 | 0 |
| Mobile LCP | 9.2 s | under 2.5 s |
| Mobile score | 75 | 90 or more |
| Desktop score | 93 | 93 or more |
| Homepage weight on mobile, local run | 14.9 MB | under 1 MB |

- [ ] **Step 1: Measure locally**

Chrome isn't installed on this machine, so Lighthouse uses Edge. In Git Bash, with `npm run build && npm run preview -- --port 4873 --strictPort` running in a second terminal:

```bash
export CHROME_PATH="/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"
npx lighthouse@12 http://localhost:4873/ --quiet --output=html --output-path=./lh-mobile.html --view --chrome-flags="--headless=new --no-sandbox"
```

Expected: `errors-in-console` passes, and LCP and page weight are far below the local baseline of 25.6 s and 14.9 MB. Delete `lh-mobile.html` afterwards.

- [ ] **Step 2: Deploy**

Merge `fix/homepage-lcp` and deploy. Confirm that the host runs `npm run build` so `prebuild` generates `public/optimized/`.

- [ ] **Step 3: Measure production**

Run https://pagespeed.web.dev/ on the production URL, and run Lighthouse in a Chromium browser, for mobile and desktop.

If LCP is still above 2.5 s, check these in the Network tab, because they couldn't be measured locally:

- **Compression:** JS and CSS responses should have `content-encoding: br` or `gzip`.
- **Caching:** `/assets/*` should have a long `cache-control`.
- **TTFB:** should be under about 600 ms. A slow or distant server sets a floor under LCP that this plan can't remove, and the fix would be a CDN.

## Not in this plan

These were left out on purpose:

- **`LazyMotion` for framer-motion:** touches 12 files for uncertain savings. Revisit only if blocking time stays above 200 ms after Task 7.
- **Splitting i18n by language, or lazy-loading homepage sections:** adds async loading and risks breaking anchor navigation, for small gains.
- **Contrast failures (accessibility score 93):** the fix changes the design. The failures are the nav `h1` over the hero (2.34:1) and the project numbers (2.84:1).
