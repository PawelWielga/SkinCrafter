import React, { useEffect, useRef, useCallback } from 'react';
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
}

export default function ThreePreview({
  texture,
  pose = 'default',
  showOverlay = true,
}: ThreePreviewProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const rotationRef = useRef<number>(0);

  const armLRef = useRef<THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial[]> | null>(null);
  const armRRef = useRef<THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial[]> | null>(null);
  const legLRef = useRef<THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial[]> | null>(null);
  const legRRef = useRef<THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial[]> | null>(null);

  const armLOLRef = useRef<THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial[]> | null>(null);
  const armROLRef = useRef<THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial[]> | null>(null);
  const legLOLRef = useRef<THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial[]> | null>(null);
  const legROLRef = useRef<THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial[]> | null>(null);

  const headOLRef = useRef<THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial[]> | null>(null);
  const bodyOLRef = useRef<THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial[]> | null>(null);

  const overlayRefs = [headOLRef, bodyOLRef, armLOLRef, armROLRef, legLOLRef, legROLRef] as const;

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

    // Set initial sizes
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Camera
    const camera = new THREE.PerspectiveCamera(52, width / height, 0.1, 1000);
    camera.position.z = 40;
    cameraRef.current = camera;

    // Scene
    const scene = new THREE.Scene();

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(10, 10, 10);
    scene.add(light);

    const group = new THREE.Group();
    group.position.y = -10;
    group.rotation.y = rotationRef.current;
    scene.add(group);

    const loader = new THREE.TextureLoader();
    const src = texture ?? '/textures/steve.png';

    loader.load(src, (tex) => {
      tex.magFilter = THREE.NearestFilter;
      tex.minFilter = THREE.NearestFilter;

      const head = createBox(tex, 8, 8, 8, 0, 22, 0, headMap);
      const body = createBox(tex, 8, 12, 4, 0, 12, 0, bodyMap);

      const armL = createBox(tex, 4, 12, 4, -6, 12, 0, leftArmMap);
      const armR = createBox(tex, 4, 12, 4, 6, 12, 0, armMap);
      const legL = createBox(tex, 4, 12, 4, -2, 0, 0, leftLegMap);
      const legR = createBox(tex, 4, 12, 4, 2, 0, 0, legMap);

      armLRef.current = armL;
      armRRef.current = armR;
      legLRef.current = legL;
      legRRef.current = legR;

      const headOL = createBox(tex, 8, 8, 8, 0, 22, 0, headOverlayMap, {
        transparent: true,
        expand: 0.5,
      });
      const bodyOL = createBox(tex, 8, 12, 4, 0, 12, 0, bodyOverlayMap, {
        transparent: true,
        expand: 0.5,
      });
      const armLOL = createBox(tex, 4, 12, 4, -6, 12, 0, leftArmOverlayMap, {
        transparent: true,
        expand: 0.5,
      });
      const armROL = createBox(tex, 4, 12, 4, 6, 12, 0, armOverlayMap, {
        transparent: true,
        expand: 0.5,
      });
      const legLOL = createBox(tex, 4, 12, 4, -2, 0, 0, leftLegOverlayMap, {
        transparent: true,
        expand: 0.5,
      });
      const legROL = createBox(tex, 4, 12, 4, 2, 0, 0, legOverlayMap, {
        transparent: true,
        expand: 0.5,
      });

      headOLRef.current = headOL;
      bodyOLRef.current = bodyOL;
      armLOLRef.current = armLOL;
      armROLRef.current = armROL;
      legLOLRef.current = legLOL;
      legROLRef.current = legROL;

      group.add(head, body, armL, armR, legL, legR, headOL, bodyOL, armLOL, armROL, legLOL, legROL);

      overlayRefs.forEach((ref) => {
        if (ref.current) ref.current.visible = showOverlay;
      });

      applyPoseLocal(pose);
    });

    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      group.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      if (container && rendererRef.current && cameraRef.current) {
        const newWidth = container.clientWidth;
        const newHeight = container.clientHeight;
        rendererRef.current.setSize(newWidth, newHeight);
        cameraRef.current.aspect = newWidth / newHeight;
        cameraRef.current.updateProjectionMatrix();
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial sizing

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      rotationRef.current = group.rotation.y;
      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      container.innerHTML = '';
    };
  }, [texture, applyPoseLocal]);

  useEffect(() => {
    applyPoseLocal(pose);
  }, [pose, applyPoseLocal]);

  useEffect(() => {
    overlayRefs.forEach((ref) => {
      if (ref.current) ref.current.visible = showOverlay;
    });
  }, [showOverlay]);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '400px',
        position: 'relative',
      }}
    />
  );
}
