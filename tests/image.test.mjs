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
