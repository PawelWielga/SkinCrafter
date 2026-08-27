import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { defaultAppearance, normalizeTextureLayerOrder } from '../data/appearance';
import { translate, type TranslationKey } from '../i18n/translations';
import Wardrobe from './wardrobe';

const t = (key: TranslationKey): string => translate('en', key);

describe('eye color grouping', () => {
  it('keeps eye color immediately after eyes with the icons used by the shared-frame styles', () => {
    render(
      <Wardrobe
        appearance={{ ...defaultAppearance }}
        textureLayerOrder={normalizeTextureLayerOrder(null)}
        onAppearanceChange={vi.fn()}
        onLayerOrderChange={vi.fn()}
        t={t}
      />
    );

    const eyesCard = screen
      .getByRole('heading', { name: t('category.eyes') })
      .closest<HTMLElement>('.wardrobe-option-card');
    const eyeColorCard = screen
      .getByRole('heading', { name: t('category.eyesColor') })
      .closest<HTMLElement>('.wardrobe-option-card');

    expect(eyesCard).not.toBeNull();
    expect(eyeColorCard).not.toBeNull();
    expect(eyesCard?.nextElementSibling).toBe(eyeColorCard);
    expect(eyesCard?.querySelector('[data-skincrafter-icon="fa-eye"]')).not.toBeNull();
    expect(
      eyeColorCard?.querySelector('[data-skincrafter-icon="fa-eye-dropper"]')
    ).not.toBeNull();
  });
});
