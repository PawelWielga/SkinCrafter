import * as THREE from 'three';
import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  ThreePreviewRuntime,
  type ThreePreviewRuntimeDependencies,
  type ThreePreviewRuntimeOptions,
} from './three-preview-runtime';

interface TextureRequest {
  texture: THREE.Texture;
  onLoad?: (texture: THREE.Texture) => void;
  onError?: (error: unknown) => void;
}

interface RuntimeHarness {
  container: HTMLDivElement;
  dependencies: ThreePreviewRuntimeDependencies;
  createRenderer: ReturnType<typeof vi.fn>;
  rendererDispose: ReturnType<typeof vi.fn>;
  rendererForceContextLoss: ReturnType<typeof vi.fn>;
  rendererRender: ReturnType<typeof vi.fn>;
  cancelAnimationFrame: ReturnType<typeof vi.fn>;
  resizeDisconnect: ReturnType<typeof vi.fn>;
  removeWindowResizeListener: ReturnType<typeof vi.fn>;
  textureRequests: TextureRequest[];
  resolveTexture: (index: number) => THREE.Texture;
  runNextAnimationFrame: () => void;
}

const mountedRuntimes: ThreePreviewRuntime[] = [];

const defaultOptions: ThreePreviewRuntimeOptions = {
  textureUrl: 'skin-a.png',
  pose: 'default',
  model: 'classic',
  showOverlay: true,
  autoRotate: true,
};

function createHarness(): RuntimeHarness {
  const container = document.createElement('div');
  Object.defineProperty(container, 'clientWidth', { configurable: true, value: 320 });
  Object.defineProperty(container, 'clientHeight', { configurable: true, value: 480 });
  document.body.appendChild(container);

  const rendererDispose = vi.fn();
  const rendererForceContextLoss = vi.fn();
  const rendererRender = vi.fn();
  const canvas = document.createElement('canvas');
  const renderer = {
    domElement: canvas,
    outputColorSpace: THREE.LinearSRGBColorSpace,
    toneMapping: THREE.NoToneMapping,
    setClearColor: vi.fn(),
    setPixelRatio: vi.fn(),
    setSize: vi.fn(),
    render: rendererRender,
    dispose: rendererDispose,
    forceContextLoss: rendererForceContextLoss,
  } as unknown as THREE.WebGLRenderer;
  const createRenderer = vi.fn(() => renderer);

  const textureRequests: TextureRequest[] = [];
  const textureLoader = {
    load: vi.fn(
      (
        _url: string,
        onLoad?: (texture: THREE.Texture) => void,
        _onProgress?: (event: ProgressEvent<EventTarget>) => void,
        onError?: (error: unknown) => void
      ) => {
        const texture = new THREE.Texture();
        textureRequests.push({ texture, onLoad, onError });
        return texture;
      }
    ),
  } as unknown as THREE.TextureLoader;

  const resizeDisconnect = vi.fn();
  const resizeObserver = {
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: resizeDisconnect,
  } as unknown as ResizeObserver;

  let nextAnimationFrameId = 1;
  const animationFrames = new Map<number, FrameRequestCallback>();
  const requestAnimationFrame = vi.fn((callback: FrameRequestCallback) => {
    const id = nextAnimationFrameId++;
    animationFrames.set(id, callback);
    return id;
  });
  const cancelAnimationFrame = vi.fn((id: number) => {
    animationFrames.delete(id);
  });

  const addWindowResizeListener = vi.fn();
  const removeWindowResizeListener = vi.fn();

  const dependencies: ThreePreviewRuntimeDependencies = {
    createRenderer,
    createTextureLoader: () => textureLoader,
    createResizeObserver: () => resizeObserver,
    requestAnimationFrame,
    cancelAnimationFrame,
    addWindowResizeListener,
    removeWindowResizeListener,
    getDevicePixelRatio: () => 3,
  };

  return {
    container,
    dependencies,
    createRenderer,
    rendererDispose,
    rendererForceContextLoss,
    rendererRender,
    cancelAnimationFrame,
    resizeDisconnect,
    removeWindowResizeListener,
    textureRequests,
    resolveTexture: (index: number) => {
      const request = textureRequests[index];
      if (!request) throw new Error(`Missing texture request ${index}`);
      request.onLoad?.(request.texture);
      return request.texture;
    },
    runNextAnimationFrame: () => {
      const frame = animationFrames.entries().next().value as
        | [number, FrameRequestCallback]
        | undefined;
      if (!frame) throw new Error('No animation frame scheduled');
      animationFrames.delete(frame[0]);
      frame[1](0);
    },
  };
}

function createRuntime(
  harness: RuntimeHarness,
  options: Partial<ThreePreviewRuntimeOptions> = {}
): ThreePreviewRuntime {
  const runtime = new ThreePreviewRuntime(
    harness.container,
    { ...defaultOptions, ...options },
    harness.dependencies
  );
  mountedRuntimes.push(runtime);
  return runtime;
}

afterEach(() => {
  mountedRuntimes.splice(0).forEach((runtime) => runtime.dispose());
  document.body.innerHTML = '';
  vi.restoreAllMocks();
});

describe('ThreePreviewRuntime', () => {
  it('keeps one renderer and one model geometry set across non-structural updates', () => {
    const harness = createHarness();
    const runtime = createRuntime(harness);

    harness.resolveTexture(0);
    const initial = runtime.getDiagnostics();

    expect(harness.createRenderer).toHaveBeenCalledTimes(1);
    expect(harness.container.querySelectorAll('canvas')).toHaveLength(1);
    expect(initial.modelRevision).toBe(1);
    expect(initial.textureRevision).toBe(1);
    expect(initial.meshCount).toBe(12);
    expect(initial.rightArmWidth).toBe(4);

    runtime.setPose('walking');
    runtime.setShowOverlay(false);
    runtime.setAutoRotate(false);
    runtime.setTexture('skin-b.png');
    harness.resolveTexture(1);

    const updated = runtime.getDiagnostics();
    expect(harness.createRenderer).toHaveBeenCalledTimes(1);
    expect(harness.container.querySelectorAll('canvas')).toHaveLength(1);
    expect(updated.modelRevision).toBe(1);
    expect(updated.textureRevision).toBe(2);
    expect(updated.overlayVisible).toEqual([false, false, false, false, false, false]);
  });

  it('preserves camera distance and rotation while texture, pose and overlay change', () => {
    const harness = createHarness();
    const runtime = createRuntime(harness);
    harness.resolveTexture(0);

    harness.runNextAnimationFrame();
    harness.container.dispatchEvent(new WheelEvent('wheel', { deltaY: 100, cancelable: true }));
    const before = runtime.getDiagnostics();

    expect(before.rotation).toBeCloseTo(0.01);
    expect(before.cameraDistance).toBe(48);
    expect(harness.rendererRender).toHaveBeenCalledTimes(1);

    runtime.setPose('tpose');
    runtime.setShowOverlay(false);
    runtime.setTexture('skin-b.png');
    harness.resolveTexture(1);

    const after = runtime.getDiagnostics();
    expect(after.rotation).toBeCloseTo(before.rotation);
    expect(after.cameraDistance).toBe(before.cameraDistance);
    expect(after.modelRevision).toBe(before.modelRevision);
  });

  it('ignores and disposes a stale asynchronous texture load', () => {
    const harness = createHarness();
    const runtime = createRuntime(harness);
    const staleTexture = harness.textureRequests[0].texture;
    const staleDispose = vi.spyOn(staleTexture, 'dispose');

    runtime.setTexture('skin-b.png');
    harness.resolveTexture(0);

    expect(staleDispose).toHaveBeenCalledTimes(1);
    expect(runtime.getDiagnostics().meshCount).toBe(0);

    harness.resolveTexture(1);
    expect(runtime.getDiagnostics()).toMatchObject({
      modelRevision: 1,
      textureRevision: 1,
      meshCount: 12,
    });
  });

  it('rebuilds geometry only when the classic/slim model shape changes', () => {
    const geometryDispose = vi.spyOn(THREE.BoxGeometry.prototype, 'dispose');
    const harness = createHarness();
    const runtime = createRuntime(harness);
    harness.resolveTexture(0);

    expect(runtime.getDiagnostics().rightArmWidth).toBe(4);
    expect(runtime.getDiagnostics().modelRevision).toBe(1);

    runtime.setModel('slim');

    expect(runtime.getDiagnostics().rightArmWidth).toBe(3);
    expect(runtime.getDiagnostics().modelRevision).toBe(2);
    expect(geometryDispose).toHaveBeenCalledTimes(12);
    expect(harness.createRenderer).toHaveBeenCalledTimes(1);
  });

  it('disposes renderer, model resources, textures and pending animation on unmount', () => {
    const geometryDispose = vi.spyOn(THREE.BoxGeometry.prototype, 'dispose');
    const materialDispose = vi.spyOn(THREE.MeshBasicMaterial.prototype, 'dispose');
    const textureDispose = vi.spyOn(THREE.Texture.prototype, 'dispose');
    const harness = createHarness();
    const runtime = createRuntime(harness);
    harness.resolveTexture(0);

    runtime.dispose();

    expect(geometryDispose).toHaveBeenCalledTimes(12);
    expect(materialDispose).toHaveBeenCalledTimes(72);
    expect(textureDispose.mock.calls.length).toBeGreaterThanOrEqual(73);
    expect(harness.rendererDispose).toHaveBeenCalledTimes(1);
    expect(harness.rendererForceContextLoss).toHaveBeenCalledTimes(1);
    expect(harness.cancelAnimationFrame).toHaveBeenCalledTimes(1);
    expect(harness.resizeDisconnect).toHaveBeenCalledTimes(1);
    expect(harness.removeWindowResizeListener).toHaveBeenCalledTimes(1);
    expect(harness.container.querySelectorAll('canvas')).toHaveLength(0);
  });

  it('disposes a texture that finishes loading after the runtime was disposed', () => {
    const harness = createHarness();
    const runtime = createRuntime(harness);
    const lateTexture = harness.textureRequests[0].texture;
    const lateDispose = vi.spyOn(lateTexture, 'dispose');

    runtime.dispose();
    expect(lateDispose).toHaveBeenCalledTimes(1);

    harness.resolveTexture(0);
    expect(lateDispose).toHaveBeenCalledTimes(1);
    expect(runtime.getDiagnostics().rendererAttached).toBe(false);
  });
});
