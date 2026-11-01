import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

test('SVG paths in index.html start with a moveto command', () => {
  for (const [, d] of html.matchAll(/\sd="([^"]*)"/g)) {
    assert.match(d, /^[Mm]/);
  }
});
