import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import {
  defaultAppearance,
  normalizeTextureLayerOrder,
  normalizeWardrobeColors,
  type AppearanceState,
  type WardrobeColorState,
} from '../data/appearance';
import { translate, type TranslationKey } from '../i18n/translations';
import type { SkinCrafterSkinModel } from '../publicTypes';
import { WardrobeColorPalettes } from './wardrobe';
import Wardrobe from './wardrobe';

const t = (key: TranslationKey): string => translate('en', key);

function renderWardrobe(
  appearance: AppearanceState,
  skinModel?: SkinCrafterSkinModel,
  wardrobeColors: WardrobeColorState = normalizeWardrobeColors(undefined),
  onWardrobeColorChange = vi.fn()
) {
  return render(
    <Wardrobe
      appearance={appearance}
      textureLayerOrder={normalizeTextureLayerOrder(null)}
      wardrobeColors={wardrobeColors}
      onAppearanceChange={vi.fn()}
      onWardrobeColorChange={onWardrobeColorChange}
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
        wardrobeColors={normalizeWardrobeColors(undefined)}
        onAppearanceChange={vi.fn()}
        onWardrobeColorChange={vi.fn()}
        onLayerOrderChange={vi.fn()}
        t={t}
        skinModel="slim"
      />
    );

    expect(screen.queryByRole('button', { name: t('option.shirt.Hoodie') })).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: t('option.hat.Duck') })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: t('option.pants.Pants') })).toBeInTheDocument();
  });

  it('shows no contextual palette for None or fixed-only wardrobe selections', () => {
    const { rerender } = renderWardrobe({ ...defaultAppearance, hat: 'Duck' }, 'classic');
    expect(screen.queryByTestId('wardrobe-color-palettes')).not.toBeInTheDocument();

    rerender(
      <Wardrobe
        appearance={{ ...defaultAppearance, shirt: 'None', pants: 'Pants' }}
        textureLayerOrder={normalizeTextureLayerOrder(null)}
        wardrobeColors={normalizeWardrobeColors(undefined)}
        onAppearanceChange={vi.fn()}
        onWardrobeColorChange={vi.fn()}
        onLayerOrderChange={vi.fn()}
        t={t}
        skinModel="classic"
      />
    );
    expect(screen.queryByTestId('wardrobe-color-palettes')).not.toBeInTheDocument();
  });

  it('shows the Hoodie palette inside the shirt card and changes only its declared slot', () => {
    const onWardrobeColorChange = vi.fn();
    renderWardrobe(
      { ...defaultAppearance, shirt: 'Hoodie' },
      'classic',
      normalizeWardrobeColors(undefined),
      onWardrobeColorChange
    );

    const group = screen.getByRole('group', { name: t('wardrobeColor.primary') });
    expect(group).toBeInTheDocument();
    expect(screen.getByRole('button', { name: `${t('wardrobeColor.primary')}: #4A6FA5` }))
      .toHaveAttribute('aria-pressed', 'true');

    fireEvent.click(
      screen.getByRole('button', { name: `${t('wardrobeColor.primary')}: #A33A3A` })
    );
    expect(onWardrobeColorChange).toHaveBeenCalledWith('shirt', 'Hoodie', 'primary', '#A33A3A');
  });

  it('renders one accessible palette per unique slot and updates slots independently', () => {
    const onChange = vi.fn();
    const { rerender } = render(
      <WardrobeColorPalettes
        colorSlots={[
          {
            id: 'primary',
            labelKey: 'wardrobeColor.primary',
            defaultColor: '#4A6FA5',
            palette: ['#4A6FA5', '#A33A3A'],
          },
          {
            id: 'secondary',
            labelKey: 'wardrobeColor.secondary',
            defaultColor: '#D6B15D',
            palette: ['#D6B15D', '#7047A3'],
          },
        ]}
        colors={{ primary: '#A33A3A', secondary: '#D6B15D' }}
        onChange={onChange}
        t={t}
      />
    );

    expect(screen.getAllByRole('group')).toHaveLength(2);
    expect(screen.getByRole('button', { name: `${t('wardrobeColor.primary')}: #A33A3A` }))
      .toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: `${t('wardrobeColor.secondary')}: #D6B15D` }))
      .toHaveAttribute('aria-pressed', 'true');

    fireEvent.click(
      screen.getByRole('button', { name: `${t('wardrobeColor.secondary')}: #7047A3` })
    );
    expect(onChange).toHaveBeenCalledWith('secondary', '#7047A3');

    rerender(
      <WardrobeColorPalettes
        colorSlots={[
          {
            id: 'primary',
            labelKey: 'wardrobeColor.primary',
            defaultColor: '#4A6FA5',
            palette: ['#4A6FA5', '#A33A3A'],
          },
          {
            id: 'secondary',
            labelKey: 'wardrobeColor.secondary',
            defaultColor: '#D6B15D',
            palette: ['#D6B15D', '#7047A3'],
          },
        ]}
        colors={{ primary: '#A33A3A', secondary: '#7047A3' }}
        onChange={onChange}
        t={t}
      />
    );
    expect(screen.getByRole('button', { name: `${t('wardrobeColor.primary')}: #A33A3A` }))
      .toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: `${t('wardrobeColor.secondary')}: #7047A3` }))
      .toHaveAttribute('aria-pressed', 'true');
  });

  it('restores the stored slot color after switching away from and back to a colorable item', () => {
    const colors = normalizeWardrobeColors({
      shirt: { Hoodie: { primary: '#7047A3' } },
    });
    const { rerender } = renderWardrobe(
      { ...defaultAppearance, shirt: 'Hoodie' },
      'classic',
      colors
    );

    expect(screen.getByRole('button', { name: `${t('wardrobeColor.primary')}: #7047A3` }))
      .toHaveAttribute('aria-pressed', 'true');

    rerender(
      <Wardrobe
        appearance={{ ...defaultAppearance, shirt: 'None' }}
        textureLayerOrder={normalizeTextureLayerOrder(null)}
        wardrobeColors={colors}
        onAppearanceChange={vi.fn()}
        onWardrobeColorChange={vi.fn()}
        onLayerOrderChange={vi.fn()}
        t={t}
        skinModel="classic"
      />
    );
    expect(screen.queryByRole('group', { name: t('wardrobeColor.primary') })).not.toBeInTheDocument();

    rerender(
      <Wardrobe
        appearance={{ ...defaultAppearance, shirt: 'Hoodie' }}
        textureLayerOrder={normalizeTextureLayerOrder(null)}
        wardrobeColors={colors}
        onAppearanceChange={vi.fn()}
        onWardrobeColorChange={vi.fn()}
        onLayerOrderChange={vi.fn()}
        t={t}
        skinModel="classic"
      />
    );
    expect(screen.getByRole('button', { name: `${t('wardrobeColor.primary')}: #7047A3` }))
      .toHaveAttribute('aria-pressed', 'true');
  });
});
