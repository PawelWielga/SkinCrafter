import { render } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import ThreePreview from './three-preview';

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
});
