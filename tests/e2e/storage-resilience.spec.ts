import { expect, test } from '@playwright/test';

test('creator remains usable when browser storage is unavailable', async ({ page }) => {
  const pageErrors: string[] = [];
  page.on('pageerror', (error) => pageErrors.push(error.message));

  await page.addInitScript(() => {
    const blockedStorageAccess = () => {
      throw new DOMException('Storage blocked for test', 'SecurityError');
    };

    Object.defineProperty(Storage.prototype, 'getItem', {
      configurable: true,
      value: blockedStorageAccess,
    });
    Object.defineProperty(Storage.prototype, 'setItem', {
      configurable: true,
      value: blockedStorageAccess,
    });
  });

  await page.goto('/');

  const editor = page.getByTestId('skincrafter-editor');
  await expect(editor).toBeVisible();
  await expect(editor).toHaveAttribute('data-skincrafter-generation-status', 'ready');

  const hoodie = page.getByRole('button', { name: 'Hoodie' });
  await hoodie.click();
  await expect(hoodie).toHaveAttribute('aria-pressed', 'true');
  await expect(editor).toHaveAttribute('data-skincrafter-generation-status', 'ready');

  const languageSelect = page.locator('nav select');
  await languageSelect.selectOption('pl');
  await expect(languageSelect).toHaveValue('pl');
  await expect(page.getByRole('button', { name: 'Bluza' })).toHaveAttribute(
    'aria-pressed',
    'true'
  );

  expect(pageErrors).toEqual([]);
});
