import { expect, test, type Page } from '@playwright/test';

const expectedLayerOrder = ['hat', 'shirt', 'pants', 'shoes', 'accessory'];

async function readLayerOrder(page: Page): Promise<string[]> {
  return page
    .locator('.layer-order-list > [data-layer-id]')
    .evaluateAll((cards) => cards.map((card) => (card as HTMLElement).dataset.layerId ?? ''));
}

async function expectNoHorizontalOverflow(page: Page): Promise<void> {
  await expect
    .poll(() =>
      page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth
      )
    )
    .toBeLessThanOrEqual(1);
}

test('desktop drag and keyboard layer ordering work in the real browser', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'chromium-desktop', 'desktop interaction audit');

  await page.goto('/');

  const hatCard = page.locator('[data-layer-id="hat"]');
  const shirtCard = page.locator('[data-layer-id="shirt"]');
  const hatDragHandle = hatCard.getByRole('button', { name: 'Drag layer Hat' });

  await expect(hatDragHandle).toBeVisible();
  await expect.poll(() => readLayerOrder(page)).toEqual(expectedLayerOrder);

  const shirtBox = await shirtCard.boundingBox();
  expect(shirtBox).not.toBeNull();

  const dataTransfer = await page.evaluateHandle(() => new DataTransfer());
  await hatDragHandle.dispatchEvent('dragstart', { dataTransfer });
  await shirtCard.dispatchEvent('dragover', {
    dataTransfer,
    clientX: shirtBox!.x + shirtBox!.width / 2,
    clientY: shirtBox!.y + shirtBox!.height - 2,
  });
  await expect.poll(() => readLayerOrder(page)).toEqual([
    'shirt',
    'hat',
    'pants',
    'shoes',
    'accessory',
  ]);
  await shirtCard.dispatchEvent('drop', {
    dataTransfer,
    clientX: shirtBox!.x + shirtBox!.width / 2,
    clientY: shirtBox!.y + shirtBox!.height - 2,
  });
  await dataTransfer.dispose();

  await expect.poll(() => readLayerOrder(page)).toEqual([
    'shirt',
    'hat',
    'pants',
    'shoes',
    'accessory',
  ]);

  const moveHatUp = hatCard.getByRole('button', { name: 'Move layer up Hat' });
  await moveHatUp.focus();
  await page.keyboard.press('Enter');
  await expect.poll(() => readLayerOrder(page)).toEqual(expectedLayerOrder);

  const shoesCard = page.locator('[data-layer-id="shoes"]');
  const moveShoesUp = shoesCard.getByRole('button', { name: 'Move layer up Shoes' });
  const shoesDragHandle = shoesCard.getByRole('button', { name: 'Drag layer Shoes' });
  const moveShoesDown = shoesCard.getByRole('button', { name: 'Move layer down Shoes' });

  await moveShoesUp.focus();
  await page.keyboard.press('Tab');
  await expect(shoesDragHandle).toBeFocused();
  expect(await shoesDragHandle.evaluate((element) => element.matches(':focus-visible'))).toBe(true);

  const focusStyle = await shoesDragHandle.evaluate((element) => {
    const style = getComputedStyle(element);
    return {
      outlineStyle: style.outlineStyle,
      outlineWidth: Number.parseFloat(style.outlineWidth),
    };
  });
  expect(focusStyle.outlineStyle).not.toBe('none');
  expect(focusStyle.outlineWidth).toBeGreaterThan(0);

  await page.keyboard.press('Tab');
  await expect(moveShoesDown).toBeFocused();
});

test('mobile preview survives portrait-landscape-portrait resizing without canvas replacement', async ({
  page,
}, testInfo) => {
  test.skip(testInfo.project.name !== 'chromium-mobile', 'mobile orientation audit');

  await page.goto('/');

  const previewSurface = page.locator('.skincrafter-preview-surface').first();
  const canvas = previewSurface.locator('canvas').first();
  await expect(previewSurface).toBeVisible();
  await expect(canvas).toBeVisible();
  await expect(page.locator('canvas')).toHaveCount(1);

  const portraitViewport = page.viewportSize();
  expect(portraitViewport).not.toBeNull();
  const originalCanvas = await canvas.elementHandle();

  const readPreviewMetrics = () =>
    previewSurface.evaluate((surface) => {
      const previewCanvas = surface.querySelector('canvas');
      if (!(previewCanvas instanceof HTMLCanvasElement)) {
        return null;
      }
      const canvasRect = previewCanvas.getBoundingClientRect();
      return {
        surfaceWidth: surface.clientWidth,
        surfaceHeight: surface.clientHeight,
        canvasWidth: canvasRect.width,
        canvasHeight: canvasRect.height,
      };
    });

  const expectPortraitFit = async (): Promise<void> => {
    await expect
      .poll(async () => {
        const metrics = await readPreviewMetrics();
        return Boolean(
          metrics &&
            metrics.surfaceWidth > 100 &&
            metrics.surfaceHeight > 100 &&
            Math.abs(metrics.surfaceWidth - metrics.canvasWidth) <= 2 &&
            Math.abs(metrics.surfaceHeight - metrics.canvasHeight) <= 2
        );
      })
      .toBe(true);
  };

  await expectPortraitFit();
  const initialMetrics = await readPreviewMetrics();
  expect(initialMetrics).not.toBeNull();

  await page.setViewportSize({
    width: portraitViewport!.height,
    height: portraitViewport!.width,
  });
  await expect(canvas).toBeVisible();
  await expect
    .poll(async () => {
      const metrics = await readPreviewMetrics();
      return Math.min(metrics?.canvasWidth ?? 0, metrics?.canvasHeight ?? 0);
    })
    .toBeGreaterThan(100);
  await expect(page.locator('canvas')).toHaveCount(1);
  await expectNoHorizontalOverflow(page);

  await page.setViewportSize(portraitViewport!);
  await expectPortraitFit();
  await expectNoHorizontalOverflow(page);

  const returnedMetrics = await readPreviewMetrics();
  expect(returnedMetrics).not.toBeNull();
  expect(Math.abs(returnedMetrics!.surfaceWidth - initialMetrics!.surfaceWidth)).toBeLessThanOrEqual(2);
  expect(Math.abs(returnedMetrics!.surfaceHeight - initialMetrics!.surfaceHeight)).toBeLessThanOrEqual(2);
  expect(Math.abs(returnedMetrics!.canvasWidth - initialMetrics!.canvasWidth)).toBeLessThanOrEqual(2);
  expect(Math.abs(returnedMetrics!.canvasHeight - initialMetrics!.canvasHeight)).toBeLessThanOrEqual(2);

  const currentCanvas = await canvas.elementHandle();
  expect(await originalCanvas?.evaluate((original, current) => original === current, currentCanvas)).toBe(
    true
  );
});

test('Polish and English creator UI stay usable without mobile horizontal overflow', async ({
  page,
}, testInfo) => {
  test.skip(testInfo.project.name !== 'chromium-mobile', 'mobile locale audit');

  await page.goto('/');

  const languageSelect = page.locator('nav select');
  const editor = page.getByTestId('skincrafter-editor');
  await expect(languageSelect).toBeVisible();
  await expect(editor).toBeVisible();

  for (const locale of ['pl', 'en']) {
    await languageSelect.selectOption(locale);
    await expect(languageSelect).toHaveValue(locale);
    await expectNoHorizontalOverflow(page);

    const unnamedVisibleButtons = await editor.locator('button:visible').evaluateAll((buttons) =>
      buttons.filter((button) => {
        const element = button as HTMLElement;
        return !(
          element.getAttribute('aria-label')?.trim() ||
          element.textContent?.trim() ||
          element.getAttribute('title')?.trim()
        );
      }).length
    );
    expect(unnamedVisibleButtons).toBe(0);
  }
});

test('repeated preview interactions keep one mounted WebGL canvas', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'chromium-desktop', 'desktop lifecycle audit');

  await page.goto('/');

  const canvases = page.locator('canvas');
  await expect(canvases).toHaveCount(1);
  const originalCanvas = await canvases.first().elementHandle();
  const changePose = page.getByRole('button', { name: 'Change Pose' });

  for (let cycle = 0; cycle < 20; cycle += 1) {
    await changePose.click();
  }

  await expect(canvases).toHaveCount(1);
  const currentCanvas = await canvases.first().elementHandle();
  expect(await originalCanvas?.evaluate((original, current) => original === current, currentCanvas)).toBe(
    true
  );
});
