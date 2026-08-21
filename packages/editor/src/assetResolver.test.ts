import { describe, expect, it } from 'vitest';
import {
  defaultPreviewTextureUrl,
  resolveAssetUrl,
  skinCrafterAssetPaths,
} from './assetResolver';

describe('resolveAssetUrl', () => {
  it('uses emitted package assets instead of inline PNG payloads by default', () => {
    for (const path of skinCrafterAssetPaths) {
      const url = resolveAssetUrl(path);
      expect(url).toBeTruthy();
      expect(url).not.toMatch(/^data:image\/png(?:;base64)?,/i);
      expect(url).not.toBe(`/${path}`);
    }
  });

  it('keeps the default preview on the dedicated packaged preview manifest entry', () => {
    expect(defaultPreviewTextureUrl).toBe(resolveAssetUrl('textures/preview/default.png'));
  });

  it('supports a host asset base below a non-root route', () => {
    expect(resolveAssetUrl('textures/hat/duck.png', '/character/skincrafter-assets/')).toBe(
      '/character/skincrafter-assets/textures/hat/duck.png'
    );
  });

  it('supports absolute host asset bases without changing the logical path', () => {
    expect(
      resolveAssetUrl('textures/bottom/pants.png', 'https://cdn.example.test/skincrafter/')
    ).toBe('https://cdn.example.test/skincrafter/textures/bottom/pants.png');
  });
});
