import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import {
  defaultAppearance,
  normalizeTextureLayerOrder,
  type TextureLayerCategoryId,
} from '../data/appearance';
import { translate, type TranslationKey } from '../i18n/translations';
import Wardrobe, { createLayerPreviewOrder } from './wardrobe';

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

    fireEvent.dragStart(dragHandle, {
      dataTransfer,
      clientX: 40,
      clientY: 220,
    });

    const pantsCard = screen
      .getByRole('heading', { name: 'Pants' })
      .closest<HTMLElement>('[data-layer-id="pants"]');
    expect(pantsCard).not.toBeNull();
    mockCardRect(pantsCard!, 100);

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

  it('restores the original order when a mouse drag is cancelled', () => {
    const onLayerOrderChange = vi.fn();
    const { container, layerOrder } = renderWardrobe(onLayerOrderChange);
    const dataTransfer = createDataTransfer();
    const dragHandle = screen.getByRole('button', { name: 'Drag layer Hat' });

    fireEvent.dragStart(dragHandle, { dataTransfer, clientX: 40, clientY: 220 });

    const shoesCard = screen
      .getByRole('heading', { name: 'Shoes' })
      .closest<HTMLElement>('[data-layer-id="shoes"]');
    expect(shoesCard).not.toBeNull();
    mockCardRect(shoesCard!, 300);
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
    const layerCards = [
      ...container.querySelectorAll<HTMLElement>('.layer-order-list > [data-layer-id]'),
    ];
    layerCards.forEach((card, index) => mockCardRect(card, index * 100));

    const hatHeading = screen.getByRole('heading', { name: 'Hat' });
    const hatCard = hatHeading.closest<HTMLElement>('[data-layer-id="hat"]');
    expect(hatCard).not.toBeNull();

    fireEvent.pointerDown(hatHeading, {
      pointerId: 7,
      pointerType: 'touch',
      button: 0,
      clientX: 160,
      clientY: 240,
    });

    const ghost = screen.getByTestId('layer-drag-ghost');
    expect(ghost).toHaveClass('is-touch');

    fireEvent.pointerMove(hatCard!, {
      pointerId: 7,
      pointerType: 'touch',
      clientX: 160,
      clientY: 110,
    });

    expect(onLayerOrderChange).not.toHaveBeenCalled();
    expect(getRenderedLayerOrder(container)).toEqual([
      'shirt',
      'hat',
      'pants',
      'shoes',
      'accessory',
    ] satisfies TextureLayerCategoryId[]);

    fireEvent.pointerUp(hatCard!, {
      pointerId: 7,
      pointerType: 'touch',
      clientX: 160,
      clientY: 110,
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
