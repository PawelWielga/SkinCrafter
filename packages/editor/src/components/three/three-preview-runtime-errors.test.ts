import * as THREE from 'three';
import { describe, expect, it, vi } from 'vitest';
import {
  ThreePreviewRuntime,
  type ThreePreviewRuntimeDependencies,
} from './three-preview-runtime';

interface TextureRequest {
  texture: THREE.Texture;
  onError?: (error: unknown) => void;
}

function createDependencies(requests: TextureRequest[]): ThreePreviewRuntimeDependencies {
  const renderer = {
    domElement: document.createElement('canvas'),
    outputColorSpace: THREE.LinearSRGBColorSpace,
    toneMapping: THREE.NoToneMapping,
    setClearColor: vi.fn(),
    setPixelRatio: vi.fn(),
    setSize: vi.fn(),
    render: vi.fn(),
    dispose: vi.fn(),
    forceContextLoss: vi.fn(),
  } as unknown as THREE.WebGLRenderer;

  const textureLoader = {
    load: vi.fn(
      (
        _url: string,
        _onLoad?: (texture: THREE.Texture) => void,
        _onProgress?: (event: ProgressEvent<EventTarget>) => void,
        onError?: (error: unknown) => void
      ) => {
        const texture = new THREE.Texture();
        requests.push({ texture, onError });
        return texture;
      }
    ),
  } as unknown as THREE.TextureLoader;

  const resizeObserver = {
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  } as unknown as ResizeObserver;

  return {
    createRenderer: () => renderer,
    createTextureLoader: () => textureLoader,
    createResizeObserver: () => resizeObserver,
    requestAnimationFrame: () => 1,
    cancelAnimationFrame: vi.fn(),
    addWindowResizeListener: vi.fn(),
    removeWindowResizeListener: vi.fn(),
    getDevicePixelRatio: () => 1,
  };
}

describe('ThreePreviewRuntime reliability errors', () => {
  it('reports only the newest texture request failure with its URL', () => {
    const requests: TextureRequest[] = [];
    const container = document.createElement('div');
    const onError = vi.fn();
    const runtime = new ThreePreviewRuntime(
      container,
      {
        textureUrl: 'skin-a.png',
        pose: 'default',
        model: 'classic',
        showOverlay: true,
        autoRotate: true,
        onError,
      },
      createDependencies(requests)
    );

    runtime.setTexture('skin-b.png');
    const staleCause = new Error('stale failure');
    const currentCause = new Error('current failure');

    requests[0].onError?.(staleCause);
    expect(onError).not.toHaveBeenCalled();

    requests[1].onError?.(currentCause);
    expect(onError).toHaveBeenCalledTimes(1);
    expect(onError).toHaveBeenCalledWith({
      code: 'texture_load_failed',
      textureUrl: 'skin-b.png',
      cause: currentCause,
    });

    runtime.dispose();
  });
});
