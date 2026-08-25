import { expect, test } from '@playwright/test';

test('mcskinview keeps decorative icons bundled without Font Awesome runtime requests', async ({
  page,
}) => {
  const externalIconRequests: string[] = [];

  page.on('request', (request) => {
    const url = request.url();
    if (/cdnjs\.cloudflare\.com|font-?awesome/i.test(url)) {
      externalIconRequests.push(url);
    }
  });

  await page.goto('/mcskinview');

  await expect(page.getByRole('button', { name: 'Load Skin' })).toBeVisible();
  await expect(page.locator('svg[aria-hidden="true"][focusable="false"]')).toHaveCount(3);
  await expect(
    page.locator('link[rel="stylesheet"][href*="cdnjs.cloudflare.com"], link[href*="font-awesome"]')
  ).toHaveCount(0);
  expect(externalIconRequests).toEqual([]);
});
