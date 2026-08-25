import { render } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import ThreePreview from './three-preview';
import type { ThreePreviewRuntimeError } from './three-preview-runtime';

const { createRuntimeMock, runtimeMock } = vi.hoisted(() => ({
  createRuntimeMock: vi.fn(),
  runtimeMock: {
    dispose: vi.fn(),
    setTexture: vi.fn(),
    setModel: vi.fn(),
    setPose: vi.fn(),
    setShowOverlay: vi.fn(),
    setAutoRotate: vi.fn(),
  },
}));

vi.mock('./three-preview-runtime', () => ({
  createThreePreviewRuntime: createRuntimeMock,
}));

vi.mock('../../assetResolver', () => ({
  defaultPreviewTextureUrl: 'default-preview.png',
}));

describe('ThreePreview React lifecycle', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    createRuntimeMock.mockReturnValue(runtimeMock);
  });

  it('creates one runtime while pose, overlay, auto-rotate, texture and model props change', () => {
    const { rerender, unmount } = render(
      <ThreePreview
        texture="skin-a.png"
        pose="default"
        model="classic"
        showOverlay
        autoRotate
      />
    );

    expect(createRuntimeMock).toHaveBeenCalledTimes(1);

    rerender(
      <ThreePreview
        texture="skin-b.png"
        pose="walking"
        model="slim"
        showOverlay={false}
        autoRotate={false}
      />
    );

    expect(createRuntimeMock).toHaveBeenCalledTimes(1);
    expect(runtimeMock.setTexture).toHaveBeenLastCalledWith('skin-b.png');
    expect(runtimeMock.setModel).toHaveBeenLastCalledWith('slim');
    expect(runtimeMock.setPose).toHaveBeenLastCalledWith('walking');
    expect(runtimeMock.setShowOverlay).toHaveBeenLastCalledWith(false);
    expect(runtimeMock.setAutoRotate).toHaveBeenLastCalledWith(false);

    unmount();
    expect(runtimeMock.dispose).toHaveBeenCalledTimes(1);
  });

  it('retries the current texture without recreating the runtime when request revision changes', () => {
    const { rerender } = render(
      <ThreePreview texture="skin-a.png" textureRequestRevision={0} />
    );
    const initialTextureCalls = runtimeMock.setTexture.mock.calls.length;

    rerender(<ThreePreview texture="skin-a.png" textureRequestRevision={1} />);

    expect(createRuntimeMock).toHaveBeenCalledTimes(1);
    expect(runtimeMock.setTexture).toHaveBeenCalledTimes(initialTextureCalls + 1);
    expect(runtimeMock.setTexture).toHaveBeenLastCalledWith('skin-a.png');
  });

  it('maps runtime texture failures to the public preview error contract', () => {
    const onError = vi.fn();
    render(<ThreePreview texture="skin-a.png" onError={onError} />);

    const options = createRuntimeMock.mock.calls[0][1] as {
      onError?: (error: ThreePreviewRuntimeError) => void;
    };
    const cause = new Error('missing preview texture');
    options.onError?.({ code: 'texture_load_failed', textureUrl: 'skin-a.png', cause });

    expect(onError).toHaveBeenCalledWith({
      code: 'preview_texture_load_failed',
      category: 'preview',
      message: 'Failed to load preview texture: skin-a.png',
      assetUrl: 'skin-a.png',
      cause,
    });
  });

  it('surfaces WebGL initialization failures instead of throwing from the effect', () => {
    const cause = new Error('WebGL unavailable');
    const onError = vi.fn();
    createRuntimeMock.mockImplementationOnce(() => {
      throw cause;
    });

    expect(() => render(<ThreePreview texture="skin-a.png" onError={onError} />)).not.toThrow();
    expect(onError).toHaveBeenCalledWith({
      code: 'preview_webgl_initialization_failed',
      category: 'preview',
      message: 'Failed to initialize the WebGL skin preview.',
      cause,
    });
  });
});
