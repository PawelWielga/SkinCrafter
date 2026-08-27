import { expect, test } from '@playwright/test';

test('appearance color palettes are real sub-controls inside their owner cards', async ({ page }) => {
  await page.goto('/');

  const eyesCard = page.getByRole('heading', { name: 'Eyes' }).locator('..');
  const raceCard = page.getByRole('heading', { name: 'Race' }).locator('..');

  await expect(eyesCard).toBeVisible();
  await expect(raceCard).toBeVisible();
  await expect(eyesCard.getByRole('group', { name: 'Eye Color' })).toBeVisible();
  await expect(raceCard.getByRole('group', { name: 'Skin Color' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Eye Color' })).toHaveCount(0);

  const eyesCardCount = await page.locator('.wardrobe-option-card').evaluateAll((cards) =>
    cards.filter((card) => card.querySelector('h3')?.textContent?.trim() === 'Eyes').length
  );
  expect(eyesCardCount).toBe(1);
});
