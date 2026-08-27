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

test('all visible editor controls follow the authored keyboard tab order', async ({ page }) => {
  await page.goto('/');

  const editor = page.getByTestId('skincrafter-editor');
  await expect(editor).toBeVisible();
  await expect(editor).toHaveAttribute('data-skincrafter-generation-status', 'ready');

  const candidateSelector = [
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'a[href]',
    '[tabindex]:not([tabindex="-1"])',
  ].join(', ');

  const audit = await editor.locator(candidateSelector).evaluateAll((elements) => {
    let focusIndex = 0;
    let positiveTabIndex = 0;

    for (const element of elements) {
      if (!(element instanceof HTMLElement)) continue;

      const style = getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      const visible =
        style.display !== 'none' &&
        style.visibility !== 'hidden' &&
        rect.width > 0 &&
        rect.height > 0;

      if (!visible || element.tabIndex < 0) continue;
      if (element.tabIndex > 0) positiveTabIndex += 1;

      element.dataset.p2FocusIndex = String(focusIndex);
      focusIndex += 1;
    }

    return { count: focusIndex, positiveTabIndex };
  });

  expect(audit.count).toBeGreaterThan(10);
  expect(audit.positiveTabIndex).toBe(0);

  const first = editor.locator('[data-p2-focus-index="0"]');
  await first.focus();
  await expect(first).toBeFocused();

  for (let index = 1; index < audit.count; index += 1) {
    await page.keyboard.press('Tab');
    await expect(editor.locator(`[data-p2-focus-index="${index}"]`)).toBeFocused();
  }

  const hideOverlay = page.getByRole('button', { name: 'Hide Overlay' });
  await hideOverlay.focus();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('button', { name: 'Show Overlay' })).toBeVisible();
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

  const languageMenu = page.locator('nav summary');
  const editor = page.getByTestId('skincrafter-editor');
  await expect(languageMenu).toBeVisible();
  await expect(editor).toBeVisible();

  const locales = [
    { label: 'Polski', triggerLabel: 'Jezyk: Polski' },
    { label: 'English', triggerLabel: 'Language: English' },
  ];

  for (const locale of locales) {
    await languageMenu.click();
    await page.getByRole('menuitemradio', { name: locale.label }).click();
    await expect(languageMenu).toHaveAttribute('aria-label', locale.triggerLabel);
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
