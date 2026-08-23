import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import {
  defaultAppearance,
  normalizeTextureLayerOrder,
  type AppearanceState,
} from '../data/appearance';
import { translate, type TranslationKey } from '../i18n/translations';
import type { SkinCrafterSkinModel } from '../publicTypes';
import Wardrobe from './wardrobe';

const t = (key: TranslationKey): string => translate('en', key);

function renderWardrobe(
  appearance: AppearanceState,
  skinModel?: SkinCrafterSkinModel
) {
  return render(
    <Wardrobe
      appearance={appearance}
      textureLayerOrder={normalizeTextureLayerOrder(null)}
      onAppearanceChange={vi.fn()}
      onLayerOrderChange={vi.fn()}
      t={t}
      skinModel={skinModel}
    />
  );
}

describe('Wardrobe explicit texture color controls', () => {
  it('does not show a misleading skin color control for a fixed-only race', () => {
    renderWardrobe({
      ...defaultAppearance,
      race: 'Bear',
      sex: 'Male',
      skinColor: '#5D4037',
    });

    expect(screen.queryByRole('group', { name: t('category.skinColor') })).not.toBeInTheDocument();
    expect(screen.getByRole('group', { name: t('category.race') })).toBeInTheDocument();
  });

  it('keeps the skin color control for a race with a tintable layer', () => {
    renderWardrobe({ ...defaultAppearance });

    expect(screen.getByRole('group', { name: t('category.skinColor') })).toBeInTheDocument();
  });

  it('keeps shared wardrobe variants visible while filtering model-specific options', () => {
    const { rerender } = renderWardrobe(defaultAppearance, 'classic');

    expect(screen.getByRole('button', { name: t('option.shirt.Hoodie') })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: t('option.hat.Duck') })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: t('option.pants.Pants') })).toBeInTheDocument();

    rerender(
      <Wardrobe
        appearance={defaultAppearance}
        textureLayerOrder={normalizeTextureLayerOrder(null)}
        onAppearanceChange={vi.fn()}
        onLayerOrderChange={vi.fn()}
        t={t}
        skinModel="slim"
      />
    );

    expect(screen.queryByRole('button', { name: t('option.shirt.Hoodie') })).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: t('option.hat.Duck') })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: t('option.pants.Pants') })).toBeInTheDocument();
  });
});
