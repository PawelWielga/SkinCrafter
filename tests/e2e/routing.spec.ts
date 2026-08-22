import { expect, test } from '@playwright/test';

test('direct navigation to an unknown route shows Not Found and returns without a reload', async ({
  page,
}) => {
  let documentNavigationRequests = 0;
  page.on('request', (request) => {
    if (request.isNavigationRequest() && request.frame() === page.mainFrame()) {
      documentNavigationRequests += 1;
    }
  });

  await page.goto('/does-not-exist');

  await expect(page.getByRole('heading', { name: 'Page not found', level: 1 })).toBeVisible();
  await expect(page.getByText('This address does not point to a SkinCrafter page.')).toBeVisible();

  const navigationRequestsBeforeReturn = documentNavigationRequests;
  await page.getByRole('link', { name: 'Back to creator' }).click();

  await expect(page).toHaveURL('http://127.0.0.1:4173/');
  await expect(page.getByTestId('skincrafter-editor')).toBeVisible();
  expect(documentNavigationRequests).toBe(navigationRequestsBeforeReturn);
});
