import React, { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import applyPose, { Pose } from './pose-utils';
import createBox from './create-box';
import {
  headMap, bodyMap, armMap, legMap,
  headOverlayMap, bodyOverlayMap, armOverlayMap, legOverlayMap,
  leftArmMap, leftLegMap, leftArmOverlayMap, leftLegOverlayMap,
} from './skin-maps';

type Props = {
  texture: string | null;
  pose: Pose;
  showOverlay: boolean;

  onCanvasReady?: (canvas: HTMLCanvasElement | null) => void;
};

// Clamp DPR to avoid frying GPUs on HiDPI
const getClampedDPR = () => Math.min(window.devicePixelRatio || 1, 2);

export default function ThreePreview({ texture, pose, showOverlay, onCanvasReady }: Props): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const textureRef = useRef<THREE.Texture | null>(null);

  // Body parts
  const headRef = useRef<THREE.Object3D | null>(null);
  const bodyRef = useRef<THREE.Object3D | null>(null);
  const armLRef = useRef<THREE.Object3D | null>(null);
  const armRRef = useRef<THREE.Object3D | null>(null);
  const legLRef = useRef<THREE.Object3D | null>(null);
  const legRRef = useRef<THREE.Object3D | null>(null);

  // Overlays
  const headOLRef = useRef<THREE.Object3D | null>(null);
  const bodyOLRef = useRef<THREE.Object3D | null>(null);
  const armLOLRef = useRef<THREE.Object3D | null>(null);
  const armROLRef = useRef<THREE.Object3D | null>(null);
  const legLOLRef = useRef<THREE.Object3D | null>(null);
  const legROLRef = useRef<THREE.Object3D | null>(null);

  const overlayRefs = [headOLRef, bodyOLRef, armLOLRef, armROLRef, legLOLRef, legROLRef];

  const initScene = useCallback(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // Scene & Camera
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 1000);
    camera.position.set(0, 10, 42);
    camera.lookAt(0, 10, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
    renderer.setPixelRatio(getClampedDPR());
    renderer.setSize(container.clientWidth, container.clientHeight, false);

    container.innerHTML = '';
      if (typeof onCanvasReady === 'function') onCanvasReady(null); // clear
    container.appendChild(renderer.domElement);
    if (typeof onCanvasReady === 'function') onCanvasReady(renderer.domElement);

    // Simple light
    const light = new THREE.DirectionalLight(0xffffff, 0.9);
    light.position.set(1, 1, 1);
    scene.add(light);

    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;

    // Resize handling
    let ro: ResizeObserver | null = null;
    const handleResize = () => {
      if (!rendererRef.current || !cameraRef.current || !containerRef.current) return;
      const w = containerRef.current.clientWidth || 1;
      const h = containerRef.current.clientHeight || 1;
      rendererRef.current.setPixelRatio(getClampedDPR());
      rendererRef.current.setSize(w, h, false);
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
    };
    if ('ResizeObserver' in window) {
      ro = new ResizeObserver(handleResize);
      ro.observe(container);
    } else {
      window.addEventListener('resize', handleResize);
    }
    handleResize();

    // Animation loop
    renderer.setAnimationLoop(() => {
      if (!rendererRef.current || !sceneRef.current || !cameraRef.current) return;
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    });

    // Cleanup
    return () => {
      renderer.setAnimationLoop(null);
      if (ro) ro.disconnect(); else window.removeEventListener('resize', handleResize);
      // dispose textures
      textureRef.current?.dispose();
      // dispose scene
      scene.traverse((obj) => {
        const mesh = obj as THREE.Mesh;
        if (mesh.geometry) mesh.geometry.dispose();
        const mats = (Array.isArray(mesh.material) ? mesh.material : [mesh.material]).filter(Boolean) as THREE.Material[];
        mats.forEach((m) => m.dispose?.());
      });
      renderer.dispose();
      container.innerHTML = '';
      if (typeof onCanvasReady === 'function') onCanvasReady(null);
      sceneRef.current = null;
      cameraRef.current = null;
      rendererRef.current = null;
      textureRef.current = null;
      headRef.current = bodyRef.current = armLRef.current = armRRef.current = legLRef.current = legRRef.current = null;
      headOLRef.current = bodyOLRef.current = armLOLRef.current = armROLRef.current = legLOLRef.current = legROLRef.current = null;
    };
  }, []);

  // Build character boxes when texture is ready
  const buildCharacter = useCallback((tex: THREE.Texture) => {
    if (!sceneRef.current) return;

    const transparentMat = (opacity: number) => new THREE.MeshBasicMaterial({ map: tex, transparent: opacity < 1, opacity, side: THREE.FrontSide });

    // Base parts
    const head = createBox(0, 16, 0, headMap, tex, { expand: 0.0 });
    const body = createBox(0, 8, 0, bodyMap, tex, { expand: 0.0 });
    const armR = createBox(-6, 8, 0, armMap, tex, { expand: 0.0 });
    const armL = createBox(6, 8, 0, leftArmMap, tex, { expand: 0.0 });
    const legR = createBox(-2, 0, 0, legMap, tex, { expand: 0.0 });
    const legL = createBox(2, 0, 0, leftLegMap, tex, { expand: 0.0 });

    headRef.current = head;
    bodyRef.current = body;
    armRRef.current = armR;
    armLRef.current = armL;
    legRRef.current = legR;
    legLRef.current = legL;

    // Overlays (slightly expanded)
    const headOL = createBox(0, 16, 0, headOverlayMap, tex, { expand: 0.05, transparent: true });
    const bodyOL = createBox(0, 8, 0, bodyOverlayMap, tex, { expand: 0.05, transparent: true });
    const armROL = createBox(-6, 8, 0, armOverlayMap, tex, { expand: 0.05, transparent: true });
    const armLOL = createBox(6, 8, 0, leftArmOverlayMap, tex, { expand: 0.05, transparent: true });
    const legROL = createBox(-2, 0, 0, legOverlayMap, tex, { expand: 0.05, transparent: true });
    const legLOL = createBox(2, 0, 0, leftLegOverlayMap, tex, { expand: 0.05, transparent: true });

    headOLRef.current = headOL;
    bodyOLRef.current = bodyOL;
    armROLRef.current = armROL;
    armLOLRef.current = armLOL;
    legROLRef.current = legROL;
    legLOLRef.current = legLOL;

    // Group them a bit for easier transforms (optional)

    // Add to scene
    sceneRef.current.add(head, body, armR, armL, legR, legL, headOL, bodyOL, armROL, armLOL, legROL, legLOL);
  }, []);

  // Init once
  useEffect(() => initScene(), [initScene]);

  // Load texture when prop changes
  const applyPoseLocal = useCallback((p: Pose) => {
    applyPose(p, {
      armL: armLRef.current, armR: armRRef.current,
      legL: legLRef.current, legR: legRRef.current,
      armLOL: armLOLRef.current, armROL: armROLRef.current,
      legLOL: legLOLRef.current, legROL: legROLRef.current,
    });
  }, []);

  useEffect(() => {
    if (!texture) {
      // hide meshes if no texture
      return;
    }
    const loader = new THREE.TextureLoader();
    const tex = loader.load(texture, () => {
      tex.minFilter = THREE.NearestFilter;
      tex.magFilter = THREE.NearestFilter;
      tex.generateMipmaps = false;
      tex.wrapS = THREE.ClampToEdgeWrapping;
      tex.wrapT = THREE.ClampToEdgeWrapping;
      textureRef.current?.dispose();
      textureRef.current = tex;
      // Rebuild character for new texture
      if (sceneRef.current) {
        // Clear previous character meshes
        const toRemove: THREE.Object3D[] = [];
        sceneRef.current.traverse((o) => {
          // Heuristic: only remove Mesh with map === old texture or name 'character'
          if ((o as any).isMesh) {
            toRemove.push(o);
          }
        });
        toRemove.forEach((o) => {
          sceneRef.current!.remove(o);
          // dispose safely
          const mesh = o as THREE.Mesh;
          mesh.geometry?.dispose?.();
          const mats = (Array.isArray(mesh.material) ? mesh.material : [mesh.material]).filter(Boolean) as THREE.Material[];
          mats.forEach((m) => m.dispose?.());
        });
      }
      buildCharacter(tex);
      applyPoseLocal(pose);
    });
    return () => {
      // loader-managed, texture will be disposed on next replacement/cleanup
    };
  }, [texture, buildCharacter, applyPoseLocal, pose]);

  // React on pose changes
  useEffect(() => {
    applyPoseLocal(pose);
  }, [pose, applyPoseLocal]);

  // Toggle overlays visibility
  useEffect(() => {
    overlayRefs.forEach((ref) => {
      if (ref.current) ref.current.visible = showOverlay;
    });
  }, [showOverlay]);

  return <div ref={containerRef} className="w-full min-h-[200px] h-80 md:h-full relative" />;
}
