import { describe, expect, it } from 'vitest';
import { resolveAssetUrl } from './assetResolver';

describe('resolveAssetUrl', () => {
  it('uses bundled package assets by default', () => {
    const url = resolveAssetUrl('textures/race/human/male.png');
    expect(url).toBeTruthy();
    expect(url).not.toBe('/textures/race/human/male.png');
  });

  it('supports a host asset base below a non-root route', () => {
    expect(resolveAssetUrl('textures/hat/duck.png', '/character/skincrafter-assets/')).toBe(
      '/character/skincrafter-assets/textures/hat/duck.png'
    );
  });
});
