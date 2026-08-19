import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import {
  defaultAppearance,
  normalizeTextureLayerOrder,
  type TextureLayerCategoryId,
} from '../data/appearance';
import { translate, type TranslationKey } from '../i18n/translations';
import Wardrobe from './wardrobe';

const t = (key: TranslationKey): string => translate('en', key);

function createDataTransfer(): DataTransfer {
  const values = new Map<string, string>();
  return {
    effectAllowed: 'none',
    dropEffect: 'none',
    getData: vi.fn((format: string) => values.get(format) ?? ''),
    setData: vi.fn((format: string, value: string) => values.set(format, value)),
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

  it('reorders layers with native drag-and-drop inside the editor boundary', () => {
    const onLayerOrderChange = vi.fn();
    renderWardrobe(onLayerOrderChange);
    const dataTransfer = createDataTransfer();

    fireEvent.dragStart(screen.getByRole('button', { name: 'Drag layer Hat' }), {
      dataTransfer,
    });

    const pantsCard = screen
      .getByRole('heading', { name: 'Pants' })
      .closest<HTMLElement>('[data-layer-id="pants"]');
    expect(pantsCard).not.toBeNull();

    fireEvent.dragOver(pantsCard!, { dataTransfer });
    fireEvent.drop(pantsCard!, { dataTransfer });

    expect(onLayerOrderChange).toHaveBeenCalledWith([
      'shirt',
      'hat',
      'pants',
      'shoes',
      'accessory',
    ] satisfies TextureLayerCategoryId[]);
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
