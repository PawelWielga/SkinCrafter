import * as THREE from 'three';
import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  ThreePreviewRuntime,
  type ThreePreviewRuntimeDependencies,
  type ThreePreviewRuntimeOptions,
} from './three-preview-runtime';

type BoxMesh = THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial[]>;
type RuntimeInternals = { modelMeshes: BoxMesh[] };

const runtimes: ThreePreviewRuntime[] = [];

function createRuntime(model: 'classic' | 'slim' = 'classic'): ThreePreviewRuntime {
  const container = document.createElement('div');
  Object.defineProperty(container, 'clientWidth', { configurable: true, value: 320 });
  Object.defineProperty(container, 'clientHeight', { configurable: true, value: 480 });
  document.body.appendChild(container);

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
  } as unknown as THREE.WebGLRenderer;

  const textureLoader = {
    load: vi.fn((_url: string, onLoad?: (texture: THREE.Texture) => void): THREE.Texture => {
      const texture = new THREE.Texture();
      onLoad?.(texture);
      return texture;
    }),
  } as unknown as THREE.TextureLoader;

  const resizeObserver = {
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  } as unknown as ResizeObserver;

  const dependencies: ThreePreviewRuntimeDependencies = {
    createRenderer: () => renderer,
    createTextureLoader: () => textureLoader,
    createResizeObserver: () => resizeObserver,
    requestAnimationFrame: () => 1,
    cancelAnimationFrame: vi.fn(),
    addWindowResizeListener: vi.fn(),
    removeWindowResizeListener: vi.fn(),
    getDevicePixelRatio: () => 1,
  };

  const options: ThreePreviewRuntimeOptions = {
    textureUrl: 'diagnostic.png',
    pose: 'default',
    model,
    showOverlay: true,
    autoRotate: false,
  };

  const runtime = new ThreePreviewRuntime(container, options, dependencies);
  runtimes.push(runtime);
  return runtime;
}

function meshes(runtime: ThreePreviewRuntime): BoxMesh[] {
  return (runtime as unknown as RuntimeInternals).modelMeshes;
}

function expectBox(
  mesh: BoxMesh,
  dimensions: [number, number, number],
  position: [number, number, number]
): void {
  expect(mesh.geometry.parameters.width).toBeCloseTo(dimensions[0]);
  expect(mesh.geometry.parameters.height).toBeCloseTo(dimensions[1]);
  expect(mesh.geometry.parameters.depth).toBeCloseTo(dimensions[2]);
  expect(mesh.position.x).toBeCloseTo(position[0]);
  expect(mesh.position.y).toBeCloseTo(position[1]);
  expect(mesh.position.z).toBeCloseTo(position[2]);
}

afterEach(() => {
  runtimes.splice(0).forEach((runtime) => runtime.dispose());
  document.body.innerHTML = '';
  vi.restoreAllMocks();
});

describe('ThreePreviewRuntime Minecraft Java model parity', () => {
  it('builds the classic model with Java player dimensions, centers and outer-layer dilation', () => {
    const runtime = createRuntime('classic');
    const [
      head,
      body,
      rightArm,
      leftArm,
      rightLeg,
      leftLeg,
      headOverlay,
      bodyOverlay,
      rightSleeve,
      leftSleeve,
      rightPants,
      leftPants,
    ] = meshes(runtime);

    expectBox(head, [8, 8, 8], [0, 22, 0]);
    expectBox(body, [8, 12, 4], [0, 12, 0]);
    expectBox(rightArm, [4, 12, 4], [-6, 12, 0]);
    expectBox(leftArm, [4, 12, 4], [6, 12, 0]);
    expectBox(rightLeg, [4, 12, 4], [-1.9, 0, 0]);
    expectBox(leftLeg, [4, 12, 4], [1.9, 0, 0]);

    expectBox(headOverlay, [9, 9, 9], [0, 22, 0]);
    expectBox(bodyOverlay, [8.5, 12.5, 4.5], [0, 12, 0]);
    expectBox(rightSleeve, [4.5, 12.5, 4.5], [-6, 12, 0]);
    expectBox(leftSleeve, [4.5, 12.5, 4.5], [6, 12, 0]);
    expectBox(rightPants, [4.5, 12.5, 4.5], [-1.9, 0, 0]);
    expectBox(leftPants, [4.5, 12.5, 4.5], [1.9, 0, 0]);
  });

  it('builds slim three-pixel arms at the Java shoulder centers with matching sleeves', () => {
    const runtime = createRuntime('slim');
    const model = meshes(runtime);

    expectBox(model[2], [3, 12, 4], [-5.5, 12, 0]);
    expectBox(model[3], [3, 12, 4], [5.5, 12, 0]);
    expectBox(model[8], [3.5, 12.5, 4.5], [-5.5, 12, 0]);
    expectBox(model[9], [3.5, 12.5, 4.5], [5.5, 12, 0]);
  });

  it('replaces classic geometry completely when switching to slim and back', () => {
    const runtime = createRuntime('classic');

    expect(meshes(runtime)[2].geometry.parameters.width).toBe(4);

    runtime.setModel('slim');
    expect(meshes(runtime)).toHaveLength(12);
    expect(meshes(runtime)[2].geometry.parameters.width).toBe(3);
    expect(meshes(runtime)[8].geometry.parameters.width).toBe(3.5);

    runtime.setModel('classic');
    expect(meshes(runtime)).toHaveLength(12);
    expect(meshes(runtime)[2].geometry.parameters.width).toBe(4);
    expect(meshes(runtime)[8].geometry.parameters.width).toBe(4.5);
    expect(runtime.getDiagnostics().modelRevision).toBe(3);
  });
});
