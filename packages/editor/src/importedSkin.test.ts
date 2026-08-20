import { afterEach, describe, expect, it, vi } from 'vitest';
import { InvalidInitialSkinError, loadImportedSkin } from './importedSkin';

const PNG_SIGNATURE = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];

function createPngBlob(width = 64, height = 64, type = 'image/png'): Blob {
  const bytes = new Uint8Array(24);
  bytes.set(PNG_SIGNATURE, 0);
  const view = new DataView(bytes.buffer);
  view.setUint32(8, 13);
  bytes.set([0x49, 0x48, 0x44, 0x52], 12);
  view.setUint32(16, width);
  view.setUint32(20, height);
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
      expect(loaded.fingerprint).toMatch(/^[0-9a-f]{8}$/);
    }
  );

  it('uses image bytes rather than Blob identity for the deterministic fingerprint', async () => {
    vi.stubGlobal('Image', SuccessfulImage);

    const first = await loadImportedSkin(createPngBlob(), 'classic');
    const second = await loadImportedSkin(createPngBlob(), 'classic');

    expect(second.fingerprint).toBe(first.fingerprint);
    expect(second.dataUrl).toBe(first.dataUrl);
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
