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
}

interface RuntimeHarness {
  container: HTMLDivElement;
  dependencies: ThreePreviewRuntimeDependencies;
  createRenderer: ReturnType<typeof vi.fn>;
  setPointerCapture: ReturnType<typeof vi.fn>;
  releasePointerCapture: ReturnType<typeof vi.fn>;
  textureRequests: TextureRequest[];
  resolveTexture: (index: number) => void;
  runNextAnimationFrame: (timestamp: number) => void;
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

  let capturedPointerId: number | null = null;
  const setPointerCapture = vi.fn((pointerId: number) => {
    capturedPointerId = pointerId;
  });
  const releasePointerCapture = vi.fn((pointerId: number) => {
    if (capturedPointerId === pointerId) capturedPointerId = null;
  });
  const hasPointerCapture = vi.fn((pointerId: number) => capturedPointerId === pointerId);
  Object.defineProperties(container, {
    setPointerCapture: { configurable: true, value: setPointerCapture },
    releasePointerCapture: { configurable: true, value: releasePointerCapture },
    hasPointerCapture: { configurable: true, value: hasPointerCapture },
  });

  const canvas = document.createElement('canvas');
  const renderer = {
    domElement: canvas,
    outputColorSpace: THREE.LinearSRGBColorSpace,
    toneMapping: THREE.NoToneMapping,
    setClearColor: vi.fn(),
    setPixelRatio: vi.fn(),
    setSize: vi.fn(),
    render: vi.fn(),
    dispose: vi.fn(),
    forceContextLoss: vi.fn(),
  } as unknown as THREE.WebGLRenderer;
  const createRenderer = vi.fn(() => renderer);

  const textureRequests: TextureRequest[] = [];
  const textureLoader = {
    load: vi.fn(
      (
        _url: string,
        onLoad?: (texture: THREE.Texture) => void,
        _onProgress?: (event: ProgressEvent<EventTarget>) => void,
        _onError?: (error: unknown) => void
      ) => {
        const texture = new THREE.Texture();
        textureRequests.push({ texture, onLoad });
        return texture;
      }
    ),
  } as unknown as THREE.TextureLoader;

  const resizeObserver = {
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
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

  const dependencies: ThreePreviewRuntimeDependencies = {
    createRenderer,
    createTextureLoader: () => textureLoader,
    createResizeObserver: () => resizeObserver,
    requestAnimationFrame,
    cancelAnimationFrame,
    addWindowResizeListener: vi.fn(),
    removeWindowResizeListener: vi.fn(),
    getDevicePixelRatio: () => 1,
  };

  return {
    container,
    dependencies,
    createRenderer,
    setPointerCapture,
    releasePointerCapture,
    textureRequests,
    resolveTexture: (index: number) => {
      const request = textureRequests[index];
      if (!request) throw new Error(`Missing texture request ${index}`);
      request.onLoad?.(request.texture);
    },
    runNextAnimationFrame: (timestamp: number) => {
      const frame = animationFrames.entries().next().value as
        | [number, FrameRequestCallback]
        | undefined;
      if (!frame) throw new Error('No animation frame scheduled');
      animationFrames.delete(frame[0]);
      frame[1](timestamp);
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

function dispatchPointer(
  target: HTMLElement,
  type: 'pointerdown' | 'pointermove' | 'pointerup' | 'pointercancel' | 'lostpointercapture',
  options: {
    pointerId?: number;
    clientX?: number;
    clientY?: number;
    pointerType?: string;
    button?: number;
  } = {}
): void {
  const event = new Event(type, { bubbles: true, cancelable: true }) as PointerEvent;
  Object.defineProperties(event, {
    pointerId: { value: options.pointerId ?? 1 },
    clientX: { value: options.clientX ?? 0 },
    clientY: { value: options.clientY ?? 0 },
    pointerType: { value: options.pointerType ?? 'mouse' },
    button: { value: options.button ?? 0 },
  });
  target.dispatchEvent(event);
}

function advanceOneSecond(harness: RuntimeHarness, fps: number): void {
  harness.runNextAnimationFrame(0);
  for (let frame = 1; frame <= fps; frame += 1) {
    harness.runNextAnimationFrame((frame * 1000) / fps);
  }
}

afterEach(() => {
  mountedRuntimes.splice(0).forEach((runtime) => runtime.dispose());
  document.body.innerHTML = '';
  vi.restoreAllMocks();
});

describe('ThreePreviewRuntime pointer rotation', () => {
  it('rotates horizontally and vertically with pointer capture and grab cursors', () => {
    const harness = createHarness();
    const runtime = createRuntime(harness, { autoRotate: false });

    expect(harness.container.style.cursor).toBe('grab');
    dispatchPointer(harness.container, 'pointerdown', { pointerId: 7, clientX: 20, clientY: 30 });
    expect(harness.setPointerCapture).toHaveBeenCalledWith(7);
    expect(harness.container.style.cursor).toBe('grabbing');

    dispatchPointer(harness.container, 'pointermove', {
      pointerId: 7,
      clientX: 50,
      clientY: 50,
    });

    expect(runtime.getDiagnostics()).toMatchObject({
      rotationX: expect.closeTo(0.2, 5),
      rotationY: expect.closeTo(0.3, 5),
      rotationZ: 0,
      isDragging: true,
    });

    dispatchPointer(harness.container, 'pointerup', { pointerId: 7, clientX: 50, clientY: 50 });
    expect(harness.releasePointerCapture).toHaveBeenCalledWith(7);
    expect(runtime.getDiagnostics().isDragging).toBe(false);
    expect(harness.container.style.cursor).toBe('grab');
  });

  it('uses the same pointer path for touch and stylus input', () => {
    const harness = createHarness();
    const runtime = createRuntime(harness, { autoRotate: false });

    dispatchPointer(harness.container, 'pointerdown', {
      pointerId: 2,
      clientX: 0,
      clientY: 0,
      pointerType: 'touch',
    });
    dispatchPointer(harness.container, 'pointermove', {
      pointerId: 2,
      clientX: 10,
      clientY: 10,
      pointerType: 'touch',
    });
    dispatchPointer(harness.container, 'pointerup', { pointerId: 2, pointerType: 'touch' });

    dispatchPointer(harness.container, 'pointerdown', {
      pointerId: 3,
      clientX: 10,
      clientY: 10,
      pointerType: 'pen',
    });
    dispatchPointer(harness.container, 'pointermove', {
      pointerId: 3,
      clientX: 20,
      clientY: 20,
      pointerType: 'pen',
    });
    dispatchPointer(harness.container, 'pointerup', { pointerId: 3, pointerType: 'pen' });

    expect(runtime.getDiagnostics().rotationX).toBeCloseTo(0.2);
    expect(runtime.getDiagnostics().rotationY).toBeCloseTo(0.2);
    expect(harness.setPointerCapture).toHaveBeenCalledTimes(2);
  });

  it('clamps vertical tilt at approximately plus or minus 50 degrees', () => {
    const harness = createHarness();
    const runtime = createRuntime(harness, { autoRotate: false });
    const limit = THREE.MathUtils.degToRad(50);

    dispatchPointer(harness.container, 'pointerdown', { clientX: 0, clientY: 0 });
    dispatchPointer(harness.container, 'pointermove', { clientX: 0, clientY: 1000 });
    expect(runtime.getDiagnostics().rotationX).toBeCloseTo(limit);

    dispatchPointer(harness.container, 'pointermove', { clientX: 0, clientY: -1000 });
    expect(runtime.getDiagnostics().rotationX).toBeCloseTo(-limit);
  });

  it('suspends auto-rotation while dragging then resumes Y and smoothly restores X', () => {
    const harness = createHarness();
    const runtime = createRuntime(harness);
    harness.runNextAnimationFrame(0);

    dispatchPointer(harness.container, 'pointerdown', { clientX: 0, clientY: 0 });
    dispatchPointer(harness.container, 'pointermove', { clientX: 30, clientY: 40 });
    const duringDrag = runtime.getDiagnostics();

    harness.runNextAnimationFrame(1000);
    expect(runtime.getDiagnostics().rotationY).toBeCloseTo(duringDrag.rotationY);

    dispatchPointer(harness.container, 'pointerup');
    const released = runtime.getDiagnostics();
    harness.runNextAnimationFrame(1016.6667);
    const resumed = runtime.getDiagnostics();

    expect(resumed.rotationY).toBeGreaterThan(released.rotationY);
    expect(Math.abs(resumed.rotationX)).toBeLessThan(Math.abs(released.rotationX));
    expect(Math.abs(resumed.rotationX)).toBeGreaterThan(0);
    expect(resumed.rotationZ).toBe(0);
  });

  it('restores tilt when auto-rotate is explicitly enabled and preserves orientation when disabled', () => {
    const harness = createHarness();
    const runtime = createRuntime(harness, { autoRotate: false });

    dispatchPointer(harness.container, 'pointerdown', { clientX: 0, clientY: 0 });
    dispatchPointer(harness.container, 'pointermove', { clientX: 40, clientY: 40 });
    dispatchPointer(harness.container, 'pointerup');
    harness.runNextAnimationFrame(0);
    const paused = runtime.getDiagnostics();

    runtime.setAutoRotate(true);
    harness.runNextAnimationFrame(16.6667);
    const playing = runtime.getDiagnostics();
    expect(playing.rotationY).toBeGreaterThan(paused.rotationY);
    expect(Math.abs(playing.rotationX)).toBeLessThan(Math.abs(paused.rotationX));

    runtime.setAutoRotate(false);
    const beforePausedFrame = runtime.getDiagnostics();
    harness.runNextAnimationFrame(33.3334);
    const afterPausedFrame = runtime.getDiagnostics();
    expect(afterPausedFrame.rotationX).toBeCloseTo(beforePausedFrame.rotationX);
    expect(afterPausedFrame.rotationY).toBeCloseTo(beforePausedFrame.rotationY);
  });

  it('ends dragging safely on pointercancel and lostpointercapture', () => {
    const harness = createHarness();
    const runtime = createRuntime(harness, { autoRotate: false });

    dispatchPointer(harness.container, 'pointerdown', { pointerId: 4 });
    dispatchPointer(harness.container, 'pointercancel', { pointerId: 4 });
    expect(runtime.getDiagnostics().isDragging).toBe(false);
    expect(harness.container.style.cursor).toBe('grab');

    dispatchPointer(harness.container, 'pointerdown', { pointerId: 5 });
    dispatchPointer(harness.container, 'lostpointercapture', { pointerId: 5 });
    expect(runtime.getDiagnostics().isDragging).toBe(false);
    expect(harness.container.style.cursor).toBe('grab');
  });
});

describe('ThreePreviewRuntime time-based auto-rotation', () => {
  it('rotates at equivalent speed at 60, 120 and 144 Hz', () => {
    const rotations = [60, 120, 144].map((fps) => {
      const harness = createHarness();
      const runtime = createRuntime(harness);
      advanceOneSecond(harness, fps);
      return runtime.getDiagnostics().rotationY;
    });

    expect(rotations[0]).toBeCloseTo(0.61, 5);
    expect(rotations[1]).toBeCloseTo(rotations[0], 5);
    expect(rotations[2]).toBeCloseTo(rotations[0], 5);
  });

  it('clamps a large animation-frame gap to prevent a visible jump', () => {
    const harness = createHarness();
    const runtime = createRuntime(harness);

    harness.runNextAnimationFrame(0);
    const beforeGap = runtime.getDiagnostics().rotationY;
    harness.runNextAnimationFrame(5000);
    const afterGap = runtime.getDiagnostics().rotationY;

    expect(afterGap - beforeGap).toBeCloseTo(0.03, 5);
  });
});

describe('ThreePreviewRuntime interaction lifecycle', () => {
  it('preserves camera distance and both manual axes across preview updates and model rebuilds', () => {
    const harness = createHarness();
    const runtime = createRuntime(harness, { autoRotate: false });
    harness.resolveTexture(0);

    dispatchPointer(harness.container, 'pointerdown', { clientX: 0, clientY: 0 });
    dispatchPointer(harness.container, 'pointermove', { clientX: 25, clientY: 20 });
    dispatchPointer(harness.container, 'pointerup');
    harness.container.dispatchEvent(new WheelEvent('wheel', { deltaY: 100, cancelable: true }));
    const before = runtime.getDiagnostics();

    runtime.setPose('walking');
    runtime.setShowOverlay(false);
    runtime.setModel('slim');
    runtime.setTexture('skin-b.png');
    harness.resolveTexture(1);
    const after = runtime.getDiagnostics();

    expect(after.rotationX).toBeCloseTo(before.rotationX);
    expect(after.rotationY).toBeCloseTo(before.rotationY);
    expect(after.cameraDistance).toBe(before.cameraDistance);
    expect(after.rightArmWidth).toBe(3);
    expect(harness.createRenderer).toHaveBeenCalledTimes(1);
  });

  it('removes pointer listeners, releases capture and restores cursor on dispose', () => {
    const harness = createHarness();
    const removeEventListener = vi.spyOn(harness.container, 'removeEventListener');
    const runtime = createRuntime(harness, { autoRotate: false });

    dispatchPointer(harness.container, 'pointerdown', { pointerId: 9 });
    expect(harness.container.style.cursor).toBe('grabbing');
    runtime.dispose();

    expect(harness.releasePointerCapture).toHaveBeenCalledWith(9);
    expect(harness.container.style.cursor).toBe('');
    expect(removeEventListener).toHaveBeenCalledWith('pointerdown', expect.any(Function));
    expect(removeEventListener).toHaveBeenCalledWith('pointermove', expect.any(Function));
    expect(removeEventListener).toHaveBeenCalledWith('pointerup', expect.any(Function));
    expect(removeEventListener).toHaveBeenCalledWith('pointercancel', expect.any(Function));
    expect(removeEventListener).toHaveBeenCalledWith('lostpointercapture', expect.any(Function));
  });
});
