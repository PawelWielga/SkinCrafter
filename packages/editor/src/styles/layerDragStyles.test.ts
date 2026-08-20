import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { expect, it } from 'vitest';

it('keeps touch-action disabled for layer headings outside the mobile-only media query', () => {
  const css = readFileSync(resolve(process.cwd(), 'src/styles/main.css'), 'utf8');
  const touchRule = css.indexOf(
    '.skincrafter-editor .layer-order-card h3 { left: 2.45rem; max-width: calc(100% - 2.9rem); touch-action: none; }'
  );
  const mobileMediaQuery = css.indexOf('@media (max-width: 767px)');

  expect(touchRule).toBeGreaterThan(-1);
  expect(mobileMediaQuery).toBeGreaterThan(-1);
  expect(touchRule).toBeLessThan(mobileMediaQuery);
});
