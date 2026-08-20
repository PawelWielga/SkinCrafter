import { expect, test } from '@playwright/test';

test('wardrobe layout fits desktop viewport and renders the preview', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('img', { name: 'SkinCrafter logo' })).toBeVisible();
  await expect(page.getByTestId('skincrafter-editor')).toBeVisible();
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

test('layer drag handles are hidden only on mobile', async ({ page }, testInfo) => {
  await page.goto('/');

  const dragHandle = page.locator('.layer-order-handle').first();
  const nudgeControl = page.locator('.layer-order-nudge').first();

  await expect(dragHandle).toHaveCount(1);
  await expect(nudgeControl).toBeVisible();

  if (testInfo.project.name === 'chromium-mobile') {
    await expect(dragHandle).toBeHidden();
  } else {
    await expect(dragHandle).toBeVisible();
  }
});

test('layer order controls keep their full height across the mobile breakpoint', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'chromium-desktop', 'responsive transition regression');

  await page.setViewportSize({ width: 900, height: 720 });
  await page.goto('/');

  const shoesCard = page.locator('[data-layer-id="shoes"]');
  const controls = shoesCard.locator('.layer-order-controls');
  const dragHandle = shoesCard.getByRole('button', { name: 'Drag layer Shoes' });
  const moveUp = shoesCard.getByRole('button', { name: 'Move layer up Shoes' });
  const moveDown = shoesCard.getByRole('button', { name: 'Move layer down Shoes' });

  await expect(shoesCard).toBeVisible();
  await expect(dragHandle).toBeVisible();

  const desktopControlsBox = await controls.boundingBox();
  const desktopCardBox = await shoesCard.boundingBox();
  const desktopHandleBox = await dragHandle.boundingBox();
  const desktopUpBox = await moveUp.boundingBox();
  const desktopDownBox = await moveDown.boundingBox();

  expect(desktopControlsBox).not.toBeNull();
  expect(desktopCardBox).not.toBeNull();
  expect(desktopHandleBox).not.toBeNull();
  expect(desktopUpBox).not.toBeNull();
  expect(desktopDownBox).not.toBeNull();
  expect(desktopControlsBox!.height).toBeGreaterThan(60);
  expect(desktopUpBox!.y).toBeLessThan(desktopHandleBox!.y);
  expect(desktopHandleBox!.y).toBeLessThan(desktopDownBox!.y);
  expect(Math.abs(desktopUpBox!.height - desktopHandleBox!.height)).toBeLessThanOrEqual(1);
  expect(Math.abs(desktopDownBox!.height - desktopHandleBox!.height)).toBeLessThanOrEqual(1);

  await moveUp.focus();
  await page.keyboard.press('Tab');
  await expect(dragHandle).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(moveDown).toBeFocused();

  expect(await controls.evaluate((element) => getComputedStyle(element).transitionProperty)).toContain(
    'gap'
  );
  expect(await moveUp.evaluate((element) => getComputedStyle(element).transitionProperty)).toContain(
    'flex-basis'
  );

  await page.setViewportSize({ width: 600, height: 720 });
  await expect(dragHandle).toBeHidden();
  await expect.poll(async () => (await moveUp.boundingBox())?.height ?? 0).toBeGreaterThan(
    desktopUpBox!.height + 5
  );

  const mobileControlsBox = await controls.boundingBox();
  const mobileCardBox = await shoesCard.boundingBox();
  const mobileUpBox = await moveUp.boundingBox();
  const mobileDownBox = await moveDown.boundingBox();

  expect(mobileControlsBox).not.toBeNull();
  expect(mobileCardBox).not.toBeNull();
  expect(mobileUpBox).not.toBeNull();
  expect(mobileDownBox).not.toBeNull();
  expect(Math.abs(mobileControlsBox!.height - desktopControlsBox!.height)).toBeLessThanOrEqual(1);
  expect(Math.abs(mobileCardBox!.height - desktopCardBox!.height)).toBeLessThanOrEqual(1);
  expect(mobileUpBox!.height).toBeGreaterThan(mobileControlsBox!.height * 0.45);
  expect(mobileDownBox!.height).toBeGreaterThan(mobileControlsBox!.height * 0.45);
  expect(Math.abs(mobileUpBox!.height - mobileDownBox!.height)).toBeLessThanOrEqual(1);
  expect(mobileUpBox!.height + mobileDownBox!.height).toBeGreaterThan(mobileControlsBox!.height * 0.9);
});

test('mobile preview stays stable when resize fires while scrolled below it', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'chromium-mobile', 'mobile regression coverage');

  await page.goto('/');

  const previewSurface = page.locator('.skincrafter-preview-surface').first();
  const canvas = previewSurface.locator('canvas').first();
  const canvases = page.locator('canvas');

  await expect(previewSurface).toBeVisible();
  await expect(canvas).toBeVisible();
  await expect(canvases).toHaveCount(1);

  const originalCanvasHandle = await canvas.elementHandle();
  const readMetrics = async () => previewSurface.evaluate((surface) => {
    const previewCanvas = surface.querySelector('canvas');
    if (!(previewCanvas instanceof HTMLCanvasElement)) {
      throw new Error('Preview canvas is missing');
    }

    const canvasRect = previewCanvas.getBoundingClientRect();
    return {
      surfaceHeight: surface.clientHeight,
      surfaceWidth: surface.clientWidth,
      canvasHeight: canvasRect.height,
      canvasWidth: canvasRect.width,
    };
  });

  const initial = await readMetrics();
  expect(initial.surfaceHeight).toBeGreaterThan(200);
  expect(Math.abs(initial.canvasHeight - initial.surfaceHeight)).toBeLessThanOrEqual(2);
  expect(Math.abs(initial.canvasWidth - initial.surfaceWidth)).toBeLessThanOrEqual(2);

  for (let cycle = 0; cycle < 2; cycle += 1) {
    await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
    await expect.poll(
      () => previewSurface.evaluate((surface) => surface.getBoundingClientRect().top)
    ).toBeLessThan(0);

    await page.evaluate(() => window.dispatchEvent(new Event('resize')));

    const whileScrolled = await readMetrics();
    expect(Math.abs(whileScrolled.surfaceHeight - initial.surfaceHeight)).toBeLessThanOrEqual(2);
    expect(Math.abs(whileScrolled.canvasHeight - whileScrolled.surfaceHeight)).toBeLessThanOrEqual(2);
    expect(Math.abs(whileScrolled.canvasWidth - whileScrolled.surfaceWidth)).toBeLessThanOrEqual(2);

    await page.evaluate(() => window.scrollTo(0, 0));
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);

    const afterReturn = await readMetrics();
    expect(Math.abs(afterReturn.surfaceHeight - initial.surfaceHeight)).toBeLessThanOrEqual(2);
    expect(Math.abs(afterReturn.canvasHeight - initial.canvasHeight)).toBeLessThanOrEqual(2);
    expect(Math.abs(afterReturn.canvasWidth - initial.canvasWidth)).toBeLessThanOrEqual(2);
    await expect(canvases).toHaveCount(1);
  }

  const currentCanvasHandle = await canvas.elementHandle();
  expect(
    await originalCanvasHandle?.evaluate((original, current) => original === current, currentCanvasHandle)
  ).toBe(true);
});

test('preview controls keep a single real WebGL canvas mounted', async ({ page }) => {
  await page.goto('/');

  const canvases = page.locator('canvas');
  await expect(canvases).toHaveCount(1);
  const originalCanvas = canvases.first();
  const originalHandle = await originalCanvas.elementHandle();

  await page.getByRole('button', { name: 'Change Pose' }).click();
  await page.getByRole('button', { name: 'Hide Overlay' }).click();
  await page.getByRole('button', { name: 'Stop Rotation' }).click();

  await expect(canvases).toHaveCount(1);
  const currentHandle = await canvases.first().elementHandle();
  expect(await originalHandle?.evaluate((canvas, current) => canvas === current, currentHandle)).toBe(true);
});

test('skin view uses the same two-panel desktop layout', async ({ page }) => {
  await page.goto('/mcskinview');

  await expect(page.getByRole('img', { name: 'SkinCrafter logo' })).toBeVisible();
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

test('navbar keeps browser navigation on the public route paths', async ({ page }) => {
  await page.goto('/');

  await page.locator('a[href="/mcskinview"]').click();
  await expect(page).toHaveURL(/\/mcskinview$/);
  await expect(page.getByLabel('Minecraft username')).toBeVisible();

  await page.locator('a[href="/"]').click();
  await expect(page).toHaveURL(/\/$/);
  await expect(page.getByTestId('skincrafter-editor')).toBeVisible();
});
