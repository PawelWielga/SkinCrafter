import { expect, test } from '@playwright/test';

test('eye color is rendered as one shared frame with eyes at desktop and mobile breakpoints', async ({ page }) => {
  await page.goto('/');

  const eyesHeading = page.getByRole('heading', { name: 'Eyes' });
  const eyeColorHeading = page.getByRole('heading', { name: 'Eye Color' });
  const eyesCard = eyesHeading.locator('..');
  const eyeColorCard = eyeColorHeading.locator('..');

  await expect(eyesCard).toBeVisible();
  await expect(eyeColorCard).toBeVisible();

  const metrics = await page.locator('.wardrobe-option-card').evaluateAll((cards) => {
    const findCard = (heading: string): HTMLElement => {
      const card = cards.find((candidate) =>
        candidate.querySelector('h3')?.textContent?.trim() === heading
      );
      if (!(card instanceof HTMLElement)) {
        throw new Error(`Missing wardrobe card: ${heading}`);
      }
      return card;
    };

    const eyes = findCard('Eyes');
    const eyeColor = findCard('Eye Color');
    const eyesRect = eyes.getBoundingClientRect();
    const eyeColorRect = eyeColor.getBoundingClientRect();
    const eyesStyle = getComputedStyle(eyes);
    const eyeColorStyle = getComputedStyle(eyeColor);
    const eyeColorHeading = eyeColor.querySelector('h3');

    return {
      eyesBorderBottom: Number.parseFloat(eyesStyle.borderBottomWidth),
      eyeColorBorderTop: Number.parseFloat(eyeColorStyle.borderTopWidth),
      eyeColorMarginTop: Number.parseFloat(eyeColorStyle.marginTop),
      verticalGap: eyeColorRect.top - eyesRect.bottom,
      leftDelta: Math.abs(eyesRect.left - eyeColorRect.left),
      widthDelta: Math.abs(eyesRect.width - eyeColorRect.width),
      eyeColorHeadingPosition: eyeColorHeading ? getComputedStyle(eyeColorHeading).position : '',
    };
  });

  expect(metrics.eyesBorderBottom).toBe(0);
  expect(metrics.eyeColorBorderTop).toBe(0);
  expect(metrics.eyeColorMarginTop).toBe(0);
  expect(Math.abs(metrics.verticalGap)).toBeLessThanOrEqual(1);
  expect(metrics.leftDelta).toBeLessThanOrEqual(1);
  expect(metrics.widthDelta).toBeLessThanOrEqual(1);
  expect(metrics.eyeColorHeadingPosition).toBe('static');
});
