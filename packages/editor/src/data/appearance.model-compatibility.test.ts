import { describe, expect, it, vi } from 'vitest';
import type { SkinModel } from '../skinModel';

const { slimOnlyTexture } = vi.hoisted(() => ({
  slimOnlyTexture: 'data:image/png;base64,c2xpbS1vbmx5',
}));

vi.mock('./shirtTextureMap', () => ({
  shirts: ['None', 'Hoodie', 'SlimOnly'] as const,
  getShirtDefinition: (
    shirt: string,
    skinModel: SkinModel
  ) => {
    if (shirt === 'Hoodie' && skinModel === 'classic') {
      return {
        skinModel: 'classic' as const,
        textureLayers: { fixed: 'data:image/png;base64,Y2xhc3NpYw==' },
      };
    }
    if (shirt === 'SlimOnly' && skinModel === 'slim') {
      return {
        skinModel: 'slim' as const,
        textureLayers: { fixed: slimOnlyTexture },
      };
    }
    return null;
  },
}));

import {
  buildTextureInputsForCategories,
  defaultAppearance,
  getOptions,
  normalizeAppearance,
  textureLayerCategories,
} from './appearance';

describe('appearance model compatibility transitions', () => {
  it('removes a slim-only wardrobe selection when switching from slim to classic', () => {
    const slim = normalizeAppearance({
      ...defaultAppearance,
      sex: 'Female',
      shirt: 'SlimOnly',
    });

    expect(getOptions('shirt', slim).map((option) => option.id)).toContain('SlimOnly');
    expect(slim.shirt).toBe('SlimOnly');
    expect(
      buildTextureInputsForCategories(
        slim,
        textureLayerCategories,
        ['shirt'],
        undefined,
        'slim'
      )
    ).toEqual([{ url: slimOnlyTexture, role: 'fixed' }]);

    const classic = normalizeAppearance({ ...slim, sex: 'Male' });
    expect(classic.sex).toBe('Male');
    expect(classic.shirt).toBe('None');
    expect(getOptions('shirt', classic).map((option) => option.id)).not.toContain('SlimOnly');

    expect(
      buildTextureInputsForCategories(
        { ...classic, shirt: 'SlimOnly' },
        textureLayerCategories,
        ['shirt'],
        undefined,
        'classic'
      )
    ).toEqual([]);
  });
});
