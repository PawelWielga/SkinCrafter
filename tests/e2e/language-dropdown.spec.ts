import { expect, test } from '@playwright/test';

test('language dropdown follows the standalone pixel button styling', async ({ page }) => {
  await page.goto('/');

  const trigger = page.getByLabel('Language: English');
  await expect(trigger).toBeVisible();
  await expect(trigger).toHaveClass(/pixel-button/);
  await expect(trigger).toHaveClass(/pixel-border/);
  await expect(trigger).toHaveClass(/h-9/);
  await expect(trigger).toHaveClass(/bg-green-700/);

  await trigger.click();

  const menu = page.getByRole('menu', { name: 'Language' });
  const english = page.getByRole('menuitemradio', { name: 'English' });
  const polish = page.getByRole('menuitemradio', { name: 'Polski' });

  await expect(menu).toBeVisible();
  await expect(menu).toHaveClass(/pixel-border/);
  await expect(english).toHaveClass(/pixel-button/);
  await expect(english).toHaveClass(/pixel-border/);
  await expect(english).toHaveClass(/bg-green-700/);
  await expect(english).toHaveClass(/text-white/);
  await expect(polish).toHaveClass(/bg-gray-100/);
  await expect(polish).toHaveClass(/text-gray-700/);
});

test('language trigger aligns to the right edge on mobile', async ({ page }) => {
  const viewport = page.viewportSize();
  test.skip(!viewport || viewport.width >= 640, 'mobile layout only');

  await page.goto('/');

  const trigger = page.getByLabel('Language: English');
  const triggerBox = await trigger.boundingBox();

  expect(triggerBox).not.toBeNull();
  expect(Math.abs(viewport!.width - 16 - (triggerBox!.x + triggerBox!.width))).toBeLessThanOrEqual(2);
});
