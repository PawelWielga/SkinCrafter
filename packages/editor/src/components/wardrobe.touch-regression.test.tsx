import { fireEvent, render, screen } from '@testing-library/react';
import { expect, it, vi } from 'vitest';
import {
  defaultAppearance,
  normalizeTextureLayerOrder,
  type TextureLayerCategoryId,
} from '../data/appearance';
import { translate, type TranslationKey } from '../i18n/translations';
import Wardrobe from './wardrobe';

const t = (key: TranslationKey): string => translate('en', key);

function fireTouchPointer(
  target: Element,
  type: 'pointerdown' | 'pointermove' | 'pointerup',
  clientY: number
): void {
  const event = new MouseEvent(type, {
    bubbles: true,
    cancelable: true,
    button: 0,
    clientX: 160,
    clientY,
  });
  Object.defineProperties(event, {
    pointerId: { value: 7 },
    pointerType: { value: 'touch' },
  });
  fireEvent(target, event);
}

function getRenderedLayerOrder(container: HTMLElement): TextureLayerCategoryId[] {
  return [...container.querySelectorAll<HTMLElement>('.layer-order-list > [data-layer-id]')].map(
    (card) => card.dataset.layerId as TextureLayerCategoryId
  );
}

it('keeps touch preview stable when the dragged card moves under the pointer', () => {
  const onLayerOrderChange = vi.fn();
  const layerOrder = normalizeTextureLayerOrder(null);
  const { container } = render(
    <Wardrobe
      appearance={{ ...defaultAppearance }}
      textureLayerOrder={layerOrder}
      onAppearanceChange={vi.fn()}
      onLayerOrderChange={onLayerOrderChange}
      t={t}
    />
  );

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

  const hatHeading = screen.getByRole('heading', { name: 'Hat' });
  const hatCard = hatHeading.closest<HTMLElement>('[data-layer-id="hat"]');
  expect(hatCard).not.toBeNull();

  fireTouchPointer(hatHeading, 'pointerdown', 20);
  fireTouchPointer(hatCard!, 'pointermove', 170);

  const previewOrder = [
    'shirt',
    'hat',
    'pants',
    'shoes',
    'accessory',
  ] satisfies TextureLayerCategoryId[];
  expect(getRenderedLayerOrder(container)).toEqual(previewOrder);
  expect(onLayerOrderChange).not.toHaveBeenCalled();

  fireTouchPointer(hatCard!, 'pointermove', 170);

  expect(getRenderedLayerOrder(container)).toEqual(previewOrder);
  expect(onLayerOrderChange).not.toHaveBeenCalled();

  fireTouchPointer(hatCard!, 'pointerup', 170);

  expect(onLayerOrderChange).toHaveBeenCalledTimes(1);
  expect(onLayerOrderChange).toHaveBeenCalledWith(previewOrder);
});
