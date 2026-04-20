import { expect, test } from '@playwright/test';

test('wardrobe layout fits desktop viewport and renders the preview', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { name: 'SkinCrafter' })).toBeVisible();
  await expect(page.getByRole('heading', { name: /preview/i })).toBeVisible();

  const canvas = page.locator('canvas').first();
  await expect(canvas).toBeVisible();

  const canvasBox = await canvas.boundingBox();
  expect(canvasBox?.width).toBeGreaterThan(100);
  expect(canvasBox?.height).toBeGreaterThan(100);

  const metrics = await page.evaluate(() => ({
    bodyScrollHeight: document.body.scrollHeight,
    bodyClientHeight: document.body.clientHeight,
    documentScrollHeight: document.documentElement.scrollHeight,
    documentClientHeight: document.documentElement.clientHeight,
    viewportWidth: window.innerWidth,
  }));

  if (metrics.viewportWidth >= 768) {
    expect(metrics.documentScrollHeight).toBeLessThanOrEqual(metrics.documentClientHeight + 1);
    expect(metrics.bodyScrollHeight).toBeLessThanOrEqual(metrics.bodyClientHeight + 1);
  }
});

test('skin view uses the same two-panel desktop layout', async ({ page }) => {
  await page.goto('/mcskinview');

  await expect(page.getByRole('heading', { name: 'SkinCrafter' })).toBeVisible();
  await expect(page.getByLabel('Language')).toBeVisible();
  await expect(page.getByRole('heading', { name: /preview/i })).toBeVisible();
  await expect(page.getByRole('heading', { name: /load minecraft skin/i })).toBeVisible();
  await expect(page.getByLabel('Minecraft username')).toBeVisible();

  const canvas = page.locator('canvas').first();
  await expect(canvas).toBeVisible();

  const layout = await page.evaluate(() => {
    const previewHeading = [...document.querySelectorAll('h2')].find((heading) =>
      /preview/i.test(heading.textContent ?? '')
    );
    const form = document.querySelector('form');
    const previewRect = previewHeading?.closest('section')?.getBoundingClientRect();
    const formRect = form?.closest('section')?.getBoundingClientRect();

    return {
      documentScrollHeight: document.documentElement.scrollHeight,
      documentClientHeight: document.documentElement.clientHeight,
      previewWidth: previewRect?.width ?? 0,
      formWidth: formRect?.width ?? 0,
      formLeft: formRect?.left ?? 0,
      previewLeft: previewRect?.left ?? 0,
      viewportWidth: window.innerWidth,
    };
  });

  if (layout.viewportWidth >= 768) {
    expect(layout.previewWidth).toBeGreaterThan(layout.viewportWidth * 0.4);
    expect(layout.formWidth).toBeGreaterThan(layout.viewportWidth * 0.4);
    expect(layout.formLeft).toBeGreaterThan(layout.previewLeft);
    expect(layout.documentScrollHeight).toBeLessThanOrEqual(layout.documentClientHeight + 1);
  }
});
