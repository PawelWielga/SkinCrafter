import { expect, test } from '@playwright/test';

test('mobile layer reorder controls provide non-overlapping minimum touch targets', async ({
  page,
}, testInfo) => {
  test.skip(testInfo.project.name !== 'chromium-mobile', 'mobile accessibility regression');

  await page.goto('/');

  const shoesCard = page.locator('[data-layer-id="shoes"]');
  const controls = shoesCard.locator('.layer-order-controls');
  const heading = shoesCard.locator('h3');
  const dragHandle = shoesCard.getByRole('button', { name: 'Drag layer Shoes' });
  const moveUp = shoesCard.getByRole('button', { name: 'Move layer up Shoes' });
  const moveDown = shoesCard.getByRole('button', { name: 'Move layer down Shoes' });

  await expect(shoesCard).toBeVisible();
  await expect(moveUp).toBeVisible();
  await expect(moveDown).toBeVisible();
  await expect(dragHandle).toBeHidden();

  const controlsBox = await controls.boundingBox();
  const headingBox = await heading.boundingBox();
  const upBox = await moveUp.boundingBox();
  const downBox = await moveDown.boundingBox();

  expect(controlsBox).not.toBeNull();
  expect(headingBox).not.toBeNull();
  expect(upBox).not.toBeNull();
  expect(downBox).not.toBeNull();

  for (const target of [upBox!, downBox!]) {
    expect(target.width).toBeGreaterThanOrEqual(24);
    expect(target.height).toBeGreaterThanOrEqual(24);
  }

  expect(upBox!.y + upBox!.height).toBeLessThanOrEqual(downBox!.y + 1);
  expect(controlsBox!.x + controlsBox!.width).toBeLessThanOrEqual(headingBox!.x + 1);

  await moveUp.focus();
  await expect(moveUp).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(moveDown).toBeFocused();
});
