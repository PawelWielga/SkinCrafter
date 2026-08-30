import { describe, expect, it, vi } from 'vitest';
import type { SkinModel } from '../skinModel';

vi.mock('./characterTextureDefinitions', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./characterTextureDefinitions')>();
  return {
    ...actual,
    getEyeDefinition: (_eye: string, skinModel: SkinModel) => skinModel === 'slim'
      ? {
          skinModel: 'slim' as const,
          textureLayers: {
            tintable: [{ texture: '/slim-eyes.png', colorSlot: 'iris' }],
          },
          colorSlots: [{
            id: 'iris',
            labelKey: 'category.eyesColor' as const,
            defaultColor: '#2F5D9B',
            palette: ['#2F5D9B', '#2F8F4E', '#5B3A29'],
          }],
        }
      : {
          skinModel: 'classic' as const,
          textureLayers: { fixed: '/classic-eyes.png' },
        },
  };
});

import { defaultAppearance, isColorControlEffective } from './appearance';

describe('appearance color-control active model', () => {
  it('uses the explicit active model instead of re-deriving it from semantic sex', () => {
    const importedSlimAppearance = { ...defaultAppearance, sex: 'Male' };

    expect(isColorControlEffective('eyesColor', importedSlimAppearance, undefined, 'slim')).toBe(true);
    expect(isColorControlEffective('eyesColor', importedSlimAppearance, undefined, 'classic')).toBe(false);
  });
});
