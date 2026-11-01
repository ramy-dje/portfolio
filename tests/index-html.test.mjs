import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { srcSet } from '../src/utils/image.js';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

test('SVG paths in index.html start with a moveto command', () => {
  for (const [, d] of html.matchAll(/\sd="([^"]*)"/g)) {
    assert.match(d, /^[Mm]/);
  }
});

test('index.html preloads the hero image with the sizes Hero uses', () => {
  assert.ok(html.includes(`imagesrcset="${srcSet('/ramy.png', [640, 1021])}"`));
  assert.ok(html.includes('imagesizes="(min-width: 768px) 92vh, 78vh"'));
});
