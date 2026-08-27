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
  await expect(english).toHaveClass(/bg-amber-500/);
  await expect(english).toHaveClass(/text-green-950/);
  await expect(polish).toHaveClass(/bg-green-700/);
});
