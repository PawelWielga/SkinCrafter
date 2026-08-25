import { webcrypto } from 'node:crypto';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { InvalidInitialSkinError, loadImportedSkin } from './importedSkin';

const PNG_SIGNATURE = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];

function createPngBlob(
  width = 64,
  height = 64,
  type = 'image/png',
  trailingBytes: number[] = []
): Blob {
  const bytes = new Uint8Array(24 + trailingBytes.length);
  bytes.set(PNG_SIGNATURE, 0);
  const view = new DataView(bytes.buffer);
  view.setUint32(8, 13);
  bytes.set([0x49, 0x48, 0x44, 0x52], 12);
  view.setUint32(16, width);
  view.setUint32(20, height);
  bytes.set(trailingBytes, 24);
  return new Blob([bytes], { type });
}

class SuccessfulImage {
  naturalWidth = 64;
  naturalHeight = 64;
  width = 64;
  height = 64;
  onload: (() => void) | null = null;
  onerror: ((cause: unknown) => void) | null = null;

  set src(_value: string) {
    queueMicrotask(() => this.onload?.());
  }
}

beforeEach(() => {
  vi.stubGlobal('crypto', webcrypto);
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('imported Minecraft skin validation', () => {
  it.each(['classic', 'slim'] as const)(
    'accepts a decodable 64x64 PNG with explicit %s model metadata',
    async (model) => {
      vi.stubGlobal('Image', SuccessfulImage);
      const image = createPngBlob();

      const loaded = await loadImportedSkin(image, model);

      expect(loaded.model).toBe(model);
      expect(loaded.dataUrl).toMatch(/^data:image\/png;base64,/);
      expect(loaded.fingerprint).toBe(
        '7843eba05d86b934a4da1083207247512876d7c7c0a7b22ffc586957bca01b5d'
      );
      expect(loaded.fingerprint).toMatch(/^[0-9a-f]{64}$/);
    }
  );

  it('uses image bytes rather than Blob identity for the deterministic fingerprint', async () => {
    vi.stubGlobal('Image', SuccessfulImage);

    const first = await loadImportedSkin(createPngBlob(), 'classic');
    const second = await loadImportedSkin(createPngBlob(), 'classic');

    expect(second.fingerprint).toBe(first.fingerprint);
    expect(second.dataUrl).toBe(first.dataUrl);
  });

  it('distinguishes different imported PNG bytes with the same model and dimensions', async () => {
    vi.stubGlobal('Image', SuccessfulImage);

    const first = await loadImportedSkin(createPngBlob(64, 64, 'image/png', [0x01]), 'classic');
    const second = await loadImportedSkin(createPngBlob(64, 64, 'image/png', [0x02]), 'classic');

    expect(second.fingerprint).not.toBe(first.fingerprint);
  });

  it('fails closed instead of using a weak fallback when Web Crypto is unavailable', async () => {
    vi.stubGlobal('Image', SuccessfulImage);
    vi.stubGlobal('crypto', undefined);

    await expect(loadImportedSkin(createPngBlob(), 'classic')).rejects.toEqual(
      expect.objectContaining({
        name: 'InvalidInitialSkinError',
        message: 'Initial skin fingerprint could not be computed because Web Crypto is unavailable.',
      })
    );
  });

  it('rejects non-PNG MIME input', async () => {
    await expect(loadImportedSkin(createPngBlob(64, 64, 'image/jpeg'), 'classic')).rejects.toEqual(
      expect.objectContaining({
        name: 'InvalidInitialSkinError',
        message: 'Initial skin must use the image/png MIME type.',
      })
    );
  });

  it('rejects unsupported Minecraft skin dimensions before preview/generation', async () => {
    await expect(loadImportedSkin(createPngBlob(64, 32), 'classic')).rejects.toEqual(
      expect.objectContaining({
        name: 'InvalidInitialSkinError',
        message: 'Initial skin must be a 64x64 Minecraft PNG.',
      })
    );
  });

  it('rejects malformed PNG bytes', async () => {
    const image = new Blob([new Uint8Array(24)], { type: 'image/png' });

    await expect(loadImportedSkin(image, 'classic')).rejects.toBeInstanceOf(InvalidInitialSkinError);
  });

  it('rejects a PNG that passes header validation but cannot be decoded', async () => {
    const decodeFailure = new Event('error');
    class FailingImage extends SuccessfulImage {
      override set src(_value: string) {
        queueMicrotask(() => this.onerror?.(decodeFailure));
      }
    }
    vi.stubGlobal('Image', FailingImage);

    await expect(loadImportedSkin(createPngBlob(), 'slim')).rejects.toEqual(
      expect.objectContaining({
        name: 'InvalidInitialSkinError',
        message: 'Initial skin PNG could not be decoded.',
        cause: decodeFailure,
      })
    );
  });
});
