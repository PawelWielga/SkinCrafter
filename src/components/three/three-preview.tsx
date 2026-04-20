import React, { useEffect, useRef, useCallback, useMemo, useState } from 'react';
import * as THREE from 'three';
import applyPose, { Pose } from './pose-utils';
import createBox from './create-box';
import {
  headMap,
  bodyMap,
  armMap,
  legMap,
  headOverlayMap,
  bodyOverlayMap,
  armOverlayMap,
  legOverlayMap,
  leftArmMap,
  leftLegMap,
  leftArmOverlayMap,
  leftLegOverlayMap,
} from './skin-maps';

interface ThreePreviewProps {
  texture: string | null;
  pose?: Pose;
  showOverlay?: boolean;
  bottomOffset?: number;
  style?: React.CSSProperties;
}

const getClampedDPR = () => Math.min(window.devicePixelRatio || 1, 2);
const CHARACTER_CENTER_Y = 0;
const CHARACTER_CAMERA_DISTANCE = 44;
const MIN_CAMERA_DISTANCE = 24;
const MAX_CAMERA_DISTANCE = 72;
const WHEEL_ZOOM_SPEED = 0.04;
const OVERLAY_EXPAND = 0.5;
const RIGHT_ARM_X = -6;
const LEFT_ARM_X = 6;
const RIGHT_LEG_X = -2;
const LEFT_LEG_X = 2;

export default function ThreePreview({
  texture,
  pose = 'default',
  showOverlay = true,
  bottomOffset = 0,
  style,
}: ThreePreviewProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);

  const rendererRef = useRef<THREE.WebGLRenderer>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const sceneRef = useRef<THREE.Scene>();
  const rotationRef = useRef<number>(0);
  const cameraDistanceRef = useRef<number>(CHARACTER_CAMERA_DISTANCE);

  const [containerHeight, setContainerHeight] = useState<number>(0);

  // Body parts.
  const armLRef = useRef<THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial[]> | null>(null);
  const armRRef = useRef<THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial[]> | null>(null);
  const legLRef = useRef<THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial[]> | null>(null);
  const legRRef = useRef<THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial[]> | null>(null);

  // Overlays.
  const armLOLRef = useRef<THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial[]> | null>(null);
  const armROLRef = useRef<THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial[]> | null>(null);
  const legLOLRef = useRef<THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial[]> | null>(null);
  const legROLRef = useRef<THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial[]> | null>(null);

  const headOLRef = useRef<THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial[]> | null>(null);
  const bodyOLRef = useRef<THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial[]> | null>(null);

  const overlayRefs = useMemo(
    () => [headOLRef, bodyOLRef, armLOLRef, armROLRef, legLOLRef, legROLRef] as const,
    []
  );

  const applyPoseLocal = useCallback((p: Pose) => {
    applyPose(p, {
      armL: armLRef.current,
      armR: armRRef.current,
      legL: legLRef.current,
      legR: legRRef.current,
      armLOL: armLOLRef.current,
      armROL: armROLRef.current,
      legLOL: legLOLRef.current,
      legROL: legROLRef.current,
    });
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Initial size.
    const width = container.clientWidth || 1;
    const height = container.clientHeight || 1;

    // Keep antialiasing off so Minecraft textures stay crisp.
    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(getClampedDPR());
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Camera.
    const camera = new THREE.PerspectiveCamera(52, width / height, 0.1, 1000);
    camera.position.set(0, CHARACTER_CENTER_Y, cameraDistanceRef.current);
    camera.lookAt(0, CHARACTER_CENTER_Y, 0);
    cameraRef.current = camera;

    // Scene.
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Light is harmless with MeshBasicMaterial and keeps the scene ready for future material changes.
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(10, 10, 10);
    scene.add(light);

    // Character pivot group.
    const group = new THREE.Group();
    group.position.y = -10;
    group.rotation.y = rotationRef.current;
    scene.add(group);

    // Texture.
    const loader = new THREE.TextureLoader();
    const src = texture ?? '/textures/steve.png';

    const onTextureLoad = (tex: THREE.Texture) => {
      tex.magFilter = THREE.NearestFilter;
      tex.minFilter = THREE.NearestFilter;
      tex.generateMipmaps = false;
      tex.wrapS = THREE.ClampToEdgeWrapping;
      tex.wrapT = THREE.ClampToEdgeWrapping;

      // Head and torso.
      const head = createBox(tex, 8, 8, 8, 0, 22, 0, headMap);
      const body = createBox(tex, 8, 12, 4, 0, 12, 0, bodyMap);

      // Limbs.
      const armR = createBox(tex, 4, 12, 4, RIGHT_ARM_X, 12, 0, armMap);
      const armL = createBox(tex, 4, 12, 4, LEFT_ARM_X, 12, 0, leftArmMap);
      const legR = createBox(tex, 4, 12, 4, RIGHT_LEG_X, 0, 0, legMap);
      const legL = createBox(tex, 4, 12, 4, LEFT_LEG_X, 0, 0, leftLegMap);

      armRRef.current = armR;
      armLRef.current = armL;
      legRRef.current = legR;
      legLRef.current = legL;

      // Expand overlays so the second skin layer reads clearly above the base model.
      const expand = OVERLAY_EXPAND;
      const headOL = createBox(tex, 8, 8, 8, 0, 22, 0, headOverlayMap, {
        transparent: true,
        expand,
      });
      const bodyOL = createBox(tex, 8, 12, 4, 0, 12, 0, bodyOverlayMap, {
        transparent: true,
        expand,
      });
      const armROL = createBox(tex, 4, 12, 4, RIGHT_ARM_X, 12, 0, armOverlayMap, {
        transparent: true,
        expand,
      });
      const armLOL = createBox(tex, 4, 12, 4, LEFT_ARM_X, 12, 0, leftArmOverlayMap, {
        transparent: true,
        expand,
      });
      const legROL = createBox(tex, 4, 12, 4, RIGHT_LEG_X, 0, 0, legOverlayMap, {
        transparent: true,
        expand,
      });
      const legLOL = createBox(tex, 4, 12, 4, LEFT_LEG_X, 0, 0, leftLegOverlayMap, {
        transparent: true,
        expand,
      });

      headOLRef.current = headOL;
      bodyOLRef.current = bodyOL;
      armROLRef.current = armROL;
      armLOLRef.current = armLOL;
      legROLRef.current = legROL;
      legLOLRef.current = legLOL;

      // Add meshes to the scene.
      group.add(head, body, armR, armL, legR, legL, headOL, bodyOL, armROL, armLOL, legROL, legLOL);

      // Overlay visibility.
      overlayRefs.forEach((ref) => {
        if (ref.current) ref.current.visible = showOverlay;
      });

      // Apply the current pose.
      applyPoseLocal(pose);
    };

    const tex = loader.load(src, onTextureLoad, undefined, (err) =>
      console.error('Texture load failed', err)
    );

    // Animation.
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      group.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Resize.
    const handleResize = () => {
      if (!container || !rendererRef.current || !cameraRef.current) return;
      const newWidth = container.clientWidth || 1;
      const newHeight = container.clientHeight || 1;
      rendererRef.current.setPixelRatio(getClampedDPR());
      rendererRef.current.setSize(newWidth, newHeight);
      cameraRef.current.aspect = newWidth / newHeight;
      cameraRef.current.updateProjectionMatrix();
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);
    window.addEventListener('resize', handleResize);
    handleResize();

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();

      const nextDistance = THREE.MathUtils.clamp(
        cameraDistanceRef.current + event.deltaY * WHEEL_ZOOM_SPEED,
        MIN_CAMERA_DISTANCE,
        MAX_CAMERA_DISTANCE
      );

      cameraDistanceRef.current = nextDistance;
      camera.position.z = nextDistance;
      camera.lookAt(0, CHARACTER_CENTER_Y, 0);
      camera.updateProjectionMatrix();
    };

    container.addEventListener('wheel', handleWheel, { passive: false });

    // Cleanup.
    return () => {
      container.removeEventListener('wheel', handleWheel);
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);

      rotationRef.current = group.rotation.y;

      // Dispose scene geometries and materials.
      if (sceneRef.current) {
        sceneRef.current.traverse((o) => {
          const m = o as THREE.Mesh;
          if (m.geometry) m.geometry.dispose();
          const mats = (Array.isArray(m.material) ? m.material : [m.material]).filter(
            Boolean
          ) as THREE.Material[];
          mats.forEach((mat) => mat.dispose?.());
        });
      }

      tex?.dispose?.();

      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      container.innerHTML = '';
    };
  }, [texture, applyPoseLocal, pose, showOverlay, overlayRefs]);

  // React to pose changes.
  useEffect(() => {
    applyPoseLocal(pose);
  }, [pose, applyPoseLocal]);

  // React to overlay visibility changes.
  useEffect(() => {
    overlayRefs.forEach((ref) => {
      if (ref.current) ref.current.visible = showOverlay;
    });
  }, [showOverlay, overlayRefs]);

  // Fit preview height to the available viewport space.
  useEffect(() => {
    const updateHeight = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const viewportHeight = document.documentElement.clientHeight;
      const height = viewportHeight - rect.top - bottomOffset;
      setContainerHeight(height > 0 ? height : 0);
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [bottomOffset]);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        minHeight: 200,
        height: containerHeight ? `${containerHeight}px` : '100%',
        position: 'relative',
        touchAction: 'none',
        ...(style ?? {}),
      }}
    />
  );
}
