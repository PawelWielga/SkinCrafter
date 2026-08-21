import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import {
  defaultAppearance,
  normalizeTextureLayerOrder,
  type TextureLayerCategoryId,
} from '../data/appearance';
import { translate, type TranslationKey } from '../i18n/translations';
import { createLayerPreviewOrder } from './layerDrag';
import Wardrobe from './wardrobe';

const t = (key: TranslationKey): string => translate('en', key);

function createDataTransfer(): DataTransfer {
  const values = new Map<string, string>();
  return {
    effectAllowed: 'none',
    dropEffect: 'none',
    getData: vi.fn((format: string) => values.get(format) ?? ''),
    setData: vi.fn((format: string, value: string) => values.set(format, value)),
    setDragImage: vi.fn(),
  } as unknown as DataTransfer;
}

function renderWardrobe(onLayerOrderChange = vi.fn()) {
  const layerOrder = normalizeTextureLayerOrder(null);
  const result = render(
    <Wardrobe
      appearance={{ ...defaultAppearance }}
      textureLayerOrder={layerOrder}
      onAppearanceChange={vi.fn()}
      onLayerOrderChange={onLayerOrderChange}
      t={t}
    />
  );

  return { ...result, layerOrder, onLayerOrderChange };
}

function getRenderedLayerOrder(container: HTMLElement): TextureLayerCategoryId[] {
  return [...container.querySelectorAll<HTMLElement>('.layer-order-list > [data-layer-id]')].map(
    (card) => card.dataset.layerId as TextureLayerCategoryId
  );
}

function mockCardRect(card: HTMLElement, top: number, height = 80): void {
  vi.spyOn(card, 'getBoundingClientRect').mockReturnValue({
    x: 0,
    y: top,
    top,
    left: 0,
    right: 320,
    bottom: top + height,
    width: 320,
    height,
    toJSON: () => ({}),
  } as DOMRect);
}

function mockDynamicLayerCardRects(container: HTMLElement): void {
  const cards = [
    ...container.querySelectorAll<HTMLElement>('.layer-order-list > [data-layer-id]'),
  ];
  cards.forEach((card) => {
    vi.spyOn(card, 'getBoundingClientRect').mockImplementation(() => {
      const currentCards = [
        ...container.querySelectorAll<HTMLElement>('.layer-order-list > [data-layer-id]'),
      ];
      const top = currentCards.indexOf(card) * 100;
      return {
        x: 0,
        y: top,
        top,
        left: 0,
        right: 320,
        bottom: top + 80,
        width: 320,
        height: 80,
        toJSON: () => ({}),
      } as DOMRect;
    });
  });
}

function fireTouchPointer(
  target: Element,
  type: 'pointerdown' | 'pointermove' | 'pointerup',
  options: { pointerId: number; clientX: number; clientY: number; button?: number }
): void {
  const event = new MouseEvent(type, {
    bubbles: true,
    cancelable: true,
    button: options.button ?? 0,
    clientX: options.clientX,
    clientY: options.clientY,
  });
  Object.defineProperties(event, {
    pointerId: { value: options.pointerId },
    pointerType: { value: 'touch' },
  });
  fireEvent(target, event);
}

describe('Wardrobe host isolation and layer ordering', () => {
  it('renders package-owned icons without creating compatibility globals', () => {
    const browserWindow = window as Window & { global?: unknown };
    const previousDescriptor = Object.getOwnPropertyDescriptor(browserWindow, 'global');
    Reflect.deleteProperty(browserWindow, 'global');

    try {
      const { container } = renderWardrobe();

      expect(Object.prototype.hasOwnProperty.call(browserWindow, 'global')).toBe(false);
      expect(container.querySelector('.fas')).toBeNull();
      expect(container.querySelector('[class~="fa-eye"]')).toBeNull();
      expect(container.querySelectorAll('svg[data-skincrafter-icon]').length).toBeGreaterThan(0);
    } finally {
      Reflect.deleteProperty(browserWindow, 'global');
      if (previousDescriptor) {
        Object.defineProperty(browserWindow, 'global', previousDescriptor);
      }
    }
  });

  it('builds preview order without mutating the committed layer order', () => {
    const layerOrder = normalizeTextureLayerOrder(null);
    const original = [...layerOrder];

    const preview = createLayerPreviewOrder(layerOrder, 'hat', 'pants', 'before');

    expect(preview).toEqual([
      'shirt',
      'hat',
      'pants',
      'shoes',
      'accessory',
    ] satisfies TextureLayerCategoryId[]);
    expect(layerOrder).toEqual(original);
  });

  it('shows a live mouse preview and commits only on drop', () => {
    const onLayerOrderChange = vi.fn();
    const { container } = renderWardrobe(onLayerOrderChange);
    const dataTransfer = createDataTransfer();
    const dragHandle = screen.getByRole('button', { name: 'Drag layer Hat' });
    const pantsCard = screen
      .getByRole('heading', { name: 'Pants' })
      .closest<HTMLElement>('[data-layer-id="pants"]');
    expect(pantsCard).not.toBeNull();
    mockCardRect(pantsCard!, 100);

    fireEvent.dragStart(dragHandle, {
      dataTransfer,
      clientX: 40,
      clientY: 220,
    });

    fireEvent.dragOver(pantsCard!, { dataTransfer, clientY: 110 });

    expect(onLayerOrderChange).not.toHaveBeenCalled();
    expect(getRenderedLayerOrder(container)).toEqual([
      'shirt',
      'hat',
      'pants',
      'shoes',
      'accessory',
    ] satisfies TextureLayerCategoryId[]);
    expect(pantsCard).toHaveClass('drop-before');
    expect(screen.getByTestId('layer-drag-ghost')).toBeInTheDocument();

    fireEvent.drop(pantsCard!, { dataTransfer, clientY: 110 });

    expect(onLayerOrderChange).toHaveBeenCalledTimes(1);
    expect(onLayerOrderChange).toHaveBeenCalledWith([
      'shirt',
      'hat',
      'pants',
      'shoes',
      'accessory',
    ] satisfies TextureLayerCategoryId[]);
    expect(screen.queryByTestId('layer-drag-ghost')).not.toBeInTheDocument();
  });

  it('keeps the mouse preview and marker stable when reordered DOM moves under the pointer', () => {
    const onLayerOrderChange = vi.fn();
    const { container } = renderWardrobe(onLayerOrderChange);
    const dataTransfer = createDataTransfer();
    const dragHandle = screen.getByRole('button', { name: 'Drag layer Hat' });
    const layerList = container.querySelector<HTMLElement>('.layer-order-list');
    expect(layerList).not.toBeNull();
    mockDynamicLayerCardRects(container);

    fireEvent.dragStart(dragHandle, { dataTransfer, clientX: 40, clientY: 20 });
    fireEvent.dragOver(layerList!, { dataTransfer, clientY: 170 });

    const previewOrder = [
      'shirt',
      'hat',
      'pants',
      'shoes',
      'accessory',
    ] satisfies TextureLayerCategoryId[];
    expect(getRenderedLayerOrder(container)).toEqual(previewOrder);
    expect(
      screen.getByRole('heading', { name: 'Shirt' }).closest('[data-layer-id="shirt"]')
    ).toHaveClass('drop-after');

    fireEvent.dragOver(layerList!, { dataTransfer, clientY: 170 });
    fireEvent.dragOver(layerList!, { dataTransfer, clientY: 170 });

    expect(getRenderedLayerOrder(container)).toEqual(previewOrder);
    expect(
      screen.getByRole('heading', { name: 'Shirt' }).closest('[data-layer-id="shirt"]')
    ).toHaveClass('drop-after');
    expect(onLayerOrderChange).not.toHaveBeenCalled();

    fireEvent.drop(layerList!, { dataTransfer, clientY: 170 });

    expect(onLayerOrderChange).toHaveBeenCalledTimes(1);
    expect(onLayerOrderChange).toHaveBeenCalledWith(previewOrder);
  });

  it('handles rapid downward desktop drag changes deterministically', () => {
    const onLayerOrderChange = vi.fn();
    const { container } = renderWardrobe(onLayerOrderChange);
    const dataTransfer = createDataTransfer();
    const dragHandle = screen.getByRole('button', { name: 'Drag layer Hat' });
    const layerList = container.querySelector<HTMLElement>('.layer-order-list');
    expect(layerList).not.toBeNull();
    mockDynamicLayerCardRects(container);

    fireEvent.dragStart(dragHandle, { dataTransfer, clientX: 40, clientY: 20 });
    fireEvent.dragOver(layerList!, { dataTransfer, clientY: 170 });
    fireEvent.dragOver(layerList!, { dataTransfer, clientY: 270 });
    fireEvent.dragOver(layerList!, { dataTransfer, clientY: 370 });

    const previewOrder = [
      'shirt',
      'pants',
      'shoes',
      'hat',
      'accessory',
    ] satisfies TextureLayerCategoryId[];
    expect(getRenderedLayerOrder(container)).toEqual(previewOrder);
    expect(
      screen.getByRole('heading', { name: 'Shoes' }).closest('[data-layer-id="shoes"]')
    ).toHaveClass('drop-after');

    fireEvent.drop(layerList!, { dataTransfer, clientY: 370 });

    expect(onLayerOrderChange).toHaveBeenCalledWith(previewOrder);
  });

  it('handles upward desktop drag without oscillating the destination', () => {
    const onLayerOrderChange = vi.fn();
    const { container } = renderWardrobe(onLayerOrderChange);
    const dataTransfer = createDataTransfer();
    const dragHandle = screen.getByRole('button', { name: 'Drag layer Accessory' });
    const layerList = container.querySelector<HTMLElement>('.layer-order-list');
    expect(layerList).not.toBeNull();
    mockDynamicLayerCardRects(container);

    fireEvent.dragStart(dragHandle, { dataTransfer, clientX: 40, clientY: 420 });
    fireEvent.dragOver(layerList!, { dataTransfer, clientY: 30 });
    fireEvent.dragOver(layerList!, { dataTransfer, clientY: 30 });

    const previewOrder = [
      'accessory',
      'hat',
      'shirt',
      'pants',
      'shoes',
    ] satisfies TextureLayerCategoryId[];
    expect(getRenderedLayerOrder(container)).toEqual(previewOrder);
    expect(
      screen.getByRole('heading', { name: 'Hat' }).closest('[data-layer-id="hat"]')
    ).toHaveClass('drop-before');

    fireEvent.drop(layerList!, { dataTransfer, clientY: 30 });

    expect(onLayerOrderChange).toHaveBeenCalledWith(previewOrder);
  });

  it('restores the original order when a mouse drag is cancelled', () => {
    const onLayerOrderChange = vi.fn();
    const { container, layerOrder } = renderWardrobe(onLayerOrderChange);
    const dataTransfer = createDataTransfer();
    const dragHandle = screen.getByRole('button', { name: 'Drag layer Hat' });
    const shoesCard = screen
      .getByRole('heading', { name: 'Shoes' })
      .closest<HTMLElement>('[data-layer-id="shoes"]');
    expect(shoesCard).not.toBeNull();
    mockCardRect(shoesCard!, 300);

    fireEvent.dragStart(dragHandle, { dataTransfer, clientX: 40, clientY: 220 });
    fireEvent.dragOver(shoesCard!, { dataTransfer, clientY: 370 });

    expect(getRenderedLayerOrder(container)).not.toEqual(layerOrder);
    expect(onLayerOrderChange).not.toHaveBeenCalled();

    fireEvent.dragEnd(dragHandle, { dataTransfer });

    expect(getRenderedLayerOrder(container)).toEqual(layerOrder);
    expect(onLayerOrderChange).not.toHaveBeenCalled();
    expect(screen.queryByTestId('layer-drag-ghost')).not.toBeInTheDocument();
  });

  it('supports touch preview from the card heading and commits on pointer release', () => {
    const onLayerOrderChange = vi.fn();
    const { container } = renderWardrobe(onLayerOrderChange);
    const cardTops: Record<TextureLayerCategoryId, number> = {
      hat: 0,
      shirt: 100,
      pants: 200,
      shoes: 300,
      accessory: 400,
    };
    const layerCards = [
      ...container.querySelectorAll<HTMLElement>('.layer-order-list > [data-layer-id]'),
    ];
    layerCards.forEach((card) => {
      const layer = card.dataset.layerId as TextureLayerCategoryId;
      mockCardRect(card, cardTops[layer]);
    });

    const hatHeading = screen.getByRole('heading', { name: 'Hat' });
    const hatCard = hatHeading.closest<HTMLElement>('[data-layer-id="hat"]');
    expect(hatCard).not.toBeNull();

    fireTouchPointer(hatHeading, 'pointerdown', {
      pointerId: 7,
      clientX: 160,
      clientY: 240,
    });

    const ghost = screen.getByTestId('layer-drag-ghost');
    expect(ghost).toHaveClass('is-touch');

    fireTouchPointer(hatCard!, 'pointermove', {
      pointerId: 7,
      clientX: 160,
      clientY: 210,
    });

    expect(onLayerOrderChange).not.toHaveBeenCalled();
    expect(getRenderedLayerOrder(container)).toEqual([
      'shirt',
      'hat',
      'pants',
      'shoes',
      'accessory',
    ] satisfies TextureLayerCategoryId[]);

    fireTouchPointer(hatCard!, 'pointerup', {
      pointerId: 7,
      clientX: 160,
      clientY: 210,
    });

    expect(onLayerOrderChange).toHaveBeenCalledWith([
      'shirt',
      'hat',
      'pants',
      'shoes',
      'accessory',
    ] satisfies TextureLayerCategoryId[]);
    expect(screen.queryByTestId('layer-drag-ghost')).not.toBeInTheDocument();
  });

  it('preserves keyboard-accessible nudge controls for layer ordering', () => {
    const onLayerOrderChange = vi.fn();
    renderWardrobe(onLayerOrderChange);

    fireEvent.click(screen.getByRole('button', { name: 'Move layer down Hat' }));

    expect(onLayerOrderChange).toHaveBeenCalledWith([
      'shirt',
      'hat',
      'pants',
      'shoes',
      'accessory',
    ] satisfies TextureLayerCategoryId[]);
  });
});
