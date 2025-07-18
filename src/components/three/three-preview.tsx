import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import applyPose from './pose-utils';
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

type Pose = 'default' | 'tpose' | 'walking';

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
  const containerRef = useRef<HTMLDivElement | null>(null);
  const armLRef = useRef<THREE.Object3D | null>(null);
  const armRRef = useRef<THREE.Object3D | null>(null);
  const legLRef = useRef<THREE.Object3D | null>(null);
  const legRRef = useRef<THREE.Object3D | null>(null);
  const armLOLRef = useRef<THREE.Object3D | null>(null);
  const armROLRef = useRef<THREE.Object3D | null>(null);
  const legLOLRef = useRef<THREE.Object3D | null>(null);
  const legROLRef = useRef<THREE.Object3D | null>(null);
  const headOLRef = useRef<THREE.Object3D | null>(null);
  const bodyOLRef = useRef<THREE.Object3D | null>(null);

  const overlayRefs: Array<React.RefObject<THREE.Object3D>> = [
    headOLRef,
    bodyOLRef,
    armLOLRef,
    armROLRef,
    legLOLRef,
    legROLRef,
  ];

  const applyPoseLocal = (p: Pose): void =>
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

  useEffect(() => {
    const container = containerRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      52,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 40;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(10, 10, 10);
    scene.add(light);

    const group = new THREE.Group();
    scene.add(group);
    group.position.y = -10;

    const loader = new THREE.TextureLoader();
    loader.load(texture || '/textures/steve.png', (tex) => {
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
        if (ref.current) {
          ref.current.visible = showOverlay;
        }
      });

      applyPoseLocal(pose);
    });

    const animate = () => {
      requestAnimationFrame(animate);
      group.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      renderer.dispose();
      container.innerHTML = '';
    };
  }, [texture]);

  useEffect(() => {
    applyPoseLocal(pose);
  }, [pose]);

  useEffect(() => {
    overlayRefs.forEach((ref) => {
      if (ref.current) {
        ref.current.visible = showOverlay;
      }
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
