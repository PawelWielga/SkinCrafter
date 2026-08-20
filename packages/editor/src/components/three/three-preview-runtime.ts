import * as THREE from 'three';
import createBox from './create-box';
import applyPose, { type Pose } from './pose-utils';
import {
  armMap,
  armOverlayMap,
  bodyMap,
  bodyOverlayMap,
  headMap,
  headOverlayMap,
  leftArmMap,
  leftArmOverlayMap,
  leftLegMap,
  leftLegOverlayMap,
  legMap,
  legOverlayMap,
  slimArmMap,
  slimArmOverlayMap,
  slimLeftArmMap,
  slimLeftArmOverlayMap,
} from './skin-maps';

export type SkinModel = 'classic' | 'slim';

type BoxMesh = THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial[]>;

interface ModelParts {
  armL: BoxMesh | null;
  armR: BoxMesh | null;
  legL: BoxMesh | null;
  legR: BoxMesh | null;
  armLOL: BoxMesh | null;
  armROL: BoxMesh | null;
  legLOL: BoxMesh | null;
  legROL: BoxMesh | null;
  headOL: BoxMesh | null;
  bodyOL: BoxMesh | null;
}

export interface ThreePreviewRuntimeError {
  code: 'texture_load_failed';
  textureUrl: string;
  cause?: unknown;
}

export interface ThreePreviewRuntimeOptions {
  textureUrl: string;
  pose: Pose;
  model: SkinModel;
  showOverlay: boolean;
  autoRotate: boolean;
  onError?: (error: ThreePreviewRuntimeError) => void;
}

export interface ThreePreviewRuntimeDependencies {
  createRenderer: () => THREE.WebGLRenderer;
  createTextureLoader: () => THREE.TextureLoader;
  createResizeObserver: (callback: ResizeObserverCallback) => ResizeObserver;
  requestAnimationFrame: (callback: FrameRequestCallback) => number;
  cancelAnimationFrame: (handle: number) => void;
  addWindowResizeListener: (listener: () => void) => void;
  removeWindowResizeListener: (listener: () => void) => void;
  getDevicePixelRatio: () => number;
}

export interface ThreePreviewRuntimeDiagnostics {
  rendererAttached: boolean;
  modelRevision: number;
  textureRevision: number;
  meshCount: number;
  rightArmWidth: number | null;
  overlayVisible: boolean[];
  cameraDistance: number;
  rotation: number;
}

const CHARACTER_CENTER_Y = 0;
const CHARACTER_CAMERA_DISTANCE = 44;
const MIN_CAMERA_DISTANCE = 24;
const MAX_CAMERA_DISTANCE = 72;
const WHEEL_ZOOM_SPEED = 0.04;
const HEAD_OVERLAY_EXPAND = 1;
const BODY_OVERLAY_EXPAND = 0.5;
const RIGHT_ARM_X = -6;
const LEFT_ARM_X = 6;
const SLIM_RIGHT_ARM_X = -5.5;
const SLIM_LEFT_ARM_X = 5.5;
const RIGHT_LEG_X = -1.9;
const LEFT_LEG_X = 1.9;

const emptyModelParts = (): ModelParts => ({
  armL: null,
  armR: null,
  legL: null,
  legR: null,
  armLOL: null,
  armROL: null,
  legLOL: null,
  legROL: null,
  headOL: null,
  bodyOL: null,
});

const defaultDependencies: ThreePreviewRuntimeDependencies = {
  createRenderer: () => new THREE.WebGLRenderer({ antialias: false, alpha: true }),
  createTextureLoader: () => new THREE.TextureLoader(),
  createResizeObserver: (callback) => new ResizeObserver(callback),
  requestAnimationFrame: (callback) => window.requestAnimationFrame(callback),
  cancelAnimationFrame: (handle) => window.cancelAnimationFrame(handle),
  addWindowResizeListener: (listener) => window.addEventListener('resize', listener),
  removeWindowResizeListener: (listener) => window.removeEventListener('resize', listener),
  getDevicePixelRatio: () => window.devicePixelRatio || 1,
};

export class ThreePreviewRuntime {
  private readonly renderer: THREE.WebGLRenderer;
  private readonly camera: THREE.PerspectiveCamera;
  private readonly scene: THREE.Scene;
  private readonly group: THREE.Group;
  private readonly textureLoader: THREE.TextureLoader;
  private readonly resizeObserver: ResizeObserver;
  private readonly onError?: (error: ThreePreviewRuntimeError) => void;
  private readonly disposedTextures = new WeakSet<THREE.Texture>();
  private readonly pendingTextures = new Map<number, THREE.Texture>();

  private parts = emptyModelParts();
  private modelMeshes: BoxMesh[] = [];
  private currentTexture: THREE.Texture | null = null;
  private requestedTextureUrl: string | null = null;
  private textureLoadVersion = 0;
  private animationFrameId: number | null = null;
  private disposed = false;
  private pose: Pose;
  private model: SkinModel;
  private showOverlay: boolean;
  private autoRotate: boolean;
  private cameraDistance = CHARACTER_CAMERA_DISTANCE;
  private modelRevision = 0;
  private textureRevision = 0;

  constructor(
    private readonly container: HTMLElement,
    options: ThreePreviewRuntimeOptions,
    private readonly dependencies: ThreePreviewRuntimeDependencies = defaultDependencies
  ) {
    this.pose = options.pose;
    this.model = options.model;
    this.showOverlay = options.showOverlay;
    this.autoRotate = options.autoRotate;
    this.onError = options.onError;

    const width = container.clientWidth || 1;
    const height = container.clientHeight || 1;

    this.renderer = dependencies.createRenderer();
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.NoToneMapping;
    this.renderer.setPixelRatio(this.getClampedDpr());
    this.renderer.setSize(width, height);
    container.appendChild(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera(52, width / height, 0.1, 1000);
    this.camera.position.set(0, CHARACTER_CENTER_Y, this.cameraDistance);
    this.camera.lookAt(0, CHARACTER_CENTER_Y, 0);

    this.scene = new THREE.Scene();
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(10, 10, 10);
    this.scene.add(light);

    this.group = new THREE.Group();
    this.group.position.y = -10;
    this.scene.add(this.group);

    this.textureLoader = dependencies.createTextureLoader();

    this.resizeObserver = dependencies.createResizeObserver(this.handleResize);
    this.resizeObserver.observe(container);
    dependencies.addWindowResizeListener(this.handleResize);
    container.addEventListener('wheel', this.handleWheel, { passive: false });

    this.handleResize();
    this.scheduleAnimationFrame();
    this.setTexture(options.textureUrl);
  }

  setTexture(textureUrl: string): void {
    if (this.disposed || textureUrl === this.requestedTextureUrl) return;

    this.requestedTextureUrl = textureUrl;
    const requestVersion = ++this.textureLoadVersion;
    let completedSynchronously = false;

    const pendingTexture = this.textureLoader.load(
      textureUrl,
      (texture) => {
        completedSynchronously = true;
        this.pendingTextures.delete(requestVersion);
        this.handleTextureLoaded(requestVersion, texture);
      },
      undefined,
      (error) => {
        completedSynchronously = true;
        const pending = this.pendingTextures.get(requestVersion);
        if (pending) {
          this.disposeTexture(pending);
          this.pendingTextures.delete(requestVersion);
        }
        if (!this.disposed && requestVersion === this.textureLoadVersion) {
          this.onError?.({ code: 'texture_load_failed', textureUrl, cause: error });
        }
      }
    );

    if (!completedSynchronously) {
      this.pendingTextures.set(requestVersion, pendingTexture);
    }
  }

  setModel(model: SkinModel): void {
    if (this.disposed || model === this.model) return;
    this.model = model;
    if (this.currentTexture) {
      this.buildModel(this.currentTexture);
    }
  }

  setPose(pose: Pose): void {
    if (this.disposed || pose === this.pose) return;
    this.pose = pose;
    this.applyCurrentPose();
  }

  setShowOverlay(showOverlay: boolean): void {
    if (this.disposed || showOverlay === this.showOverlay) return;
    this.showOverlay = showOverlay;
    this.applyOverlayVisibility();
  }

  setAutoRotate(autoRotate: boolean): void {
    if (this.disposed) return;
    this.autoRotate = autoRotate;
  }

  getDiagnostics(): ThreePreviewRuntimeDiagnostics {
    const rightArmWidth = this.parts.armR?.geometry.parameters.width;
    return {
      rendererAttached: this.renderer.domElement.parentNode === this.container,
      modelRevision: this.modelRevision,
      textureRevision: this.textureRevision,
      meshCount: this.modelMeshes.length,
      rightArmWidth: typeof rightArmWidth === 'number' ? rightArmWidth : null,
      overlayVisible: this.getOverlayMeshes().map((mesh) => mesh.visible),
      cameraDistance: this.cameraDistance,
      rotation: this.group.rotation.y,
    };
  }

  dispose(): void {
    if (this.disposed) return;
    this.disposed = true;
    this.textureLoadVersion += 1;

    this.container.removeEventListener('wheel', this.handleWheel);
    this.dependencies.removeWindowResizeListener(this.handleResize);
    this.resizeObserver.disconnect();

    if (this.animationFrameId !== null) {
      this.dependencies.cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }

    this.pendingTextures.forEach((texture) => this.disposeTexture(texture));
    this.pendingTextures.clear();

    this.disposeModel();
    if (this.currentTexture) {
      this.disposeTexture(this.currentTexture);
      this.currentTexture = null;
    }

    this.renderer.dispose();
    if (this.renderer.domElement.parentNode === this.container) {
      this.container.removeChild(this.renderer.domElement);
    }
  }

  private readonly handleResize = (): void => {
    if (this.disposed) return;
    const width = this.container.clientWidth || 1;
    const height = this.container.clientHeight || 1;
    this.renderer.setPixelRatio(this.getClampedDpr());
    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  };

  private readonly handleWheel = (event: WheelEvent): void => {
    if (this.disposed) return;
    event.preventDefault();
    this.cameraDistance = THREE.MathUtils.clamp(
      this.cameraDistance + event.deltaY * WHEEL_ZOOM_SPEED,
      MIN_CAMERA_DISTANCE,
      MAX_CAMERA_DISTANCE
    );
    this.camera.position.z = this.cameraDistance;
    this.camera.lookAt(0, CHARACTER_CENTER_Y, 0);
    this.camera.updateProjectionMatrix();
  };

  private scheduleAnimationFrame(): void {
    this.animationFrameId = this.dependencies.requestAnimationFrame(() => {
      if (this.disposed) return;
      if (this.autoRotate) {
        this.group.rotation.y += 0.01;
      }
      this.renderer.render(this.scene, this.camera);
      this.scheduleAnimationFrame();
    });
  }

  private getClampedDpr(): number {
    return Math.min(this.dependencies.getDevicePixelRatio(), 2);
  }

  private handleTextureLoaded(requestVersion: number, texture: THREE.Texture): void {
    if (this.disposed || requestVersion !== this.textureLoadVersion) {
      this.disposeTexture(texture);
      return;
    }

    this.configureTexture(texture);
    const previousTexture = this.currentTexture;

    if (this.modelMeshes.length === 0) {
      this.buildModel(texture);
    } else {
      this.replaceModelTexture(texture);
    }

    this.currentTexture = texture;
    this.textureRevision += 1;

    if (previousTexture && previousTexture !== texture) {
      this.disposeTexture(previousTexture);
    }
  }

  private configureTexture(texture: THREE.Texture): void {
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter;
    texture.generateMipmaps = false;
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
  }

  private buildModel(texture: THREE.Texture): void {
    this.disposeModel();

    const isSlim = this.model === 'slim';
    const armWidth = isSlim ? 3 : 4;
    const rightArmX = isSlim ? SLIM_RIGHT_ARM_X : RIGHT_ARM_X;
    const leftArmX = isSlim ? SLIM_LEFT_ARM_X : LEFT_ARM_X;
    const rightArmMap = isSlim ? slimArmMap : armMap;
    const leftArmTextureMap = isSlim ? slimLeftArmMap : leftArmMap;
    const rightArmOverlayTextureMap = isSlim ? slimArmOverlayMap : armOverlayMap;
    const leftArmOverlayTextureMap = isSlim ? slimLeftArmOverlayMap : leftArmOverlayMap;

    const head = createBox(texture, 8, 8, 8, 0, 22, 0, headMap);
    const body = createBox(texture, 8, 12, 4, 0, 12, 0, bodyMap);
    const armR = createBox(texture, armWidth, 12, 4, rightArmX, 12, 0, rightArmMap);
    const armL = createBox(texture, armWidth, 12, 4, leftArmX, 12, 0, leftArmTextureMap);
    const legR = createBox(texture, 4, 12, 4, RIGHT_LEG_X, 0, 0, legMap);
    const legL = createBox(texture, 4, 12, 4, LEFT_LEG_X, 0, 0, leftLegMap);

    const headOverlayOptions = { transparent: true, expand: HEAD_OVERLAY_EXPAND };
    const bodyOverlayOptions = { transparent: true, expand: BODY_OVERLAY_EXPAND };

    const headOL = createBox(
      texture,
      8,
      8,
      8,
      0,
      22,
      0,
      headOverlayMap,
      headOverlayOptions
    );
    const bodyOL = createBox(
      texture,
      8,
      12,
      4,
      0,
      12,
      0,
      bodyOverlayMap,
      bodyOverlayOptions
    );
    const armROL = createBox(
      texture,
      armWidth,
      12,
      4,
      rightArmX,
      12,
      0,
      rightArmOverlayTextureMap,
      bodyOverlayOptions
    );
    const armLOL = createBox(
      texture,
      armWidth,
      12,
      4,
      leftArmX,
      12,
      0,
      leftArmOverlayTextureMap,
      bodyOverlayOptions
    );
    const legROL = createBox(
      texture,
      4,
      12,
      4,
      RIGHT_LEG_X,
      0,
      0,
      legOverlayMap,
      bodyOverlayOptions
    );
    const legLOL = createBox(
      texture,
      4,
      12,
      4,
      LEFT_LEG_X,
      0,
      0,
      leftLegOverlayMap,
      bodyOverlayOptions
    );

    this.parts = {
      armL,
      armR,
      legL,
      legR,
      armLOL,
      armROL,
      legLOL,
      legROL,
      headOL,
      bodyOL,
    };
    this.modelMeshes = [
      head,
      body,
      armR,
      armL,
      legR,
      legL,
      headOL,
      bodyOL,
      armROL,
      armLOL,
      legROL,
      legLOL,
    ];
    this.group.add(...this.modelMeshes);
    this.modelRevision += 1;

    this.applyOverlayVisibility();
    this.applyCurrentPose();
  }

  private replaceModelTexture(texture: THREE.Texture): void {
    this.modelMeshes.forEach((mesh) => {
      mesh.material.forEach((material) => {
        const previousMap = material.map;
        if (!previousMap) return;

        const replacementMap = texture.clone();
        replacementMap.magFilter = THREE.NearestFilter;
        replacementMap.minFilter = THREE.NearestFilter;
        replacementMap.generateMipmaps = false;
        replacementMap.colorSpace = THREE.SRGBColorSpace;
        replacementMap.wrapS = previousMap.wrapS;
        replacementMap.wrapT = previousMap.wrapT;
        replacementMap.repeat.copy(previousMap.repeat);
        replacementMap.offset.copy(previousMap.offset);
        replacementMap.center.copy(previousMap.center);
        replacementMap.rotation = previousMap.rotation;
        replacementMap.flipY = previousMap.flipY;
        replacementMap.needsUpdate = true;

        material.map = replacementMap;
        material.needsUpdate = true;
        this.disposeTexture(previousMap);
      });
    });
  }

  private applyCurrentPose(): void {
    const isSlim = this.model === 'slim';
    applyPose(
      this.pose,
      {
        armL: this.parts.armL,
        armR: this.parts.armR,
        legL: this.parts.legL,
        legR: this.parts.legR,
        armLOL: this.parts.armLOL,
        armROL: this.parts.armROL,
        legLOL: this.parts.legLOL,
        legROL: this.parts.legROL,
      },
      {
        leftArmX: isSlim ? SLIM_LEFT_ARM_X : LEFT_ARM_X,
        rightArmX: isSlim ? SLIM_RIGHT_ARM_X : RIGHT_ARM_X,
      }
    );
  }

  private applyOverlayVisibility(): void {
    this.getOverlayMeshes().forEach((mesh) => {
      mesh.visible = this.showOverlay;
    });
  }

  private getOverlayMeshes(): BoxMesh[] {
    return [
      this.parts.headOL,
      this.parts.bodyOL,
      this.parts.armLOL,
      this.parts.armROL,
      this.parts.legLOL,
      this.parts.legROL,
    ].filter((mesh): mesh is BoxMesh => mesh !== null);
  }

  private disposeModel(): void {
    this.modelMeshes.forEach((mesh) => {
      this.group.remove(mesh);
      mesh.geometry.dispose();
      mesh.material.forEach((material) => {
        if (material.map) {
          this.disposeTexture(material.map);
          material.map = null;
        }
        material.dispose();
      });
    });
    this.modelMeshes = [];
    this.parts = emptyModelParts();
  }

  private disposeTexture(texture: THREE.Texture): void {
    if (this.disposedTextures.has(texture)) return;
    this.disposedTextures.add(texture);
    texture.dispose();
  }
}

export function createThreePreviewRuntime(
  container: HTMLElement,
  options: ThreePreviewRuntimeOptions,
  dependencies?: ThreePreviewRuntimeDependencies
): ThreePreviewRuntime {
  return new ThreePreviewRuntime(container, options, dependencies);
}
