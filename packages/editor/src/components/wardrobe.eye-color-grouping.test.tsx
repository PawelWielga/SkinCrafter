import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { defaultAppearance, normalizeTextureLayerOrder } from '../data/appearance';
import { translate, type TranslationKey } from '../i18n/translations';
import Wardrobe from './wardrobe';

const t = (key: TranslationKey): string => translate('en', key);

describe('appearance color grouping', () => {
  it('renders eye color as a real sub-control inside the Eyes card', () => {
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
    const eyeColorGroup = screen.getByRole('group', { name: t('category.eyesColor') });

    expect(eyesCard).not.toBeNull();
    expect(screen.queryByRole('heading', { name: t('category.eyesColor') })).not.toBeInTheDocument();
    expect(eyesCard?.contains(eyeColorGroup)).toBe(true);
    expect(eyesCard?.querySelector('[data-skincrafter-icon="fa-eye"]')).not.toBeNull();
  });

  it('uses the same owner-card structure for skin color and hair color', () => {
    const onAppearanceChange = vi.fn();
    render(
      <Wardrobe
        appearance={{ ...defaultAppearance }}
        textureLayerOrder={normalizeTextureLayerOrder(null)}
        onAppearanceChange={onAppearanceChange}
        onLayerOrderChange={vi.fn()}
        t={t}
      />
    );

    const raceCard = screen
      .getByRole('heading', { name: t('category.race') })
      .closest<HTMLElement>('.wardrobe-option-card');
    const hairCard = screen
      .getByRole('heading', { name: t('category.hair') })
      .closest<HTMLElement>('.wardrobe-option-card');
    const skinColorGroup = screen.getByRole('group', { name: t('category.skinColor') });
    const hairColorGroup = screen.getByRole('group', { name: t('category.hairColor') });

    expect(raceCard?.contains(skinColorGroup)).toBe(true);
    expect(hairCard?.contains(hairColorGroup)).toBe(true);
    expect(screen.queryByRole('heading', { name: t('category.hairColor') })).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Hair Color: #D6B15D' }));
    expect(onAppearanceChange).toHaveBeenCalledWith('hairColor', '#D6B15D');
  });
});
