import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreePreview({ texture }) {
  const containerRef = useRef();

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

      const texSize = 64;

      const setUV = (mat, rect) => {
        mat.map = tex.clone();
        mat.map.magFilter = THREE.NearestFilter;
        mat.map.minFilter = THREE.NearestFilter;
        mat.map.repeat.set((rect[2] - rect[0]) / texSize, (rect[3] - rect[1]) / texSize);
        mat.map.offset.set(rect[0] / texSize, 1 - rect[3] / texSize);
        mat.map.needsUpdate = true;
      };

      const createBox = (w, h, d, x, y, z, uvMap, options = {}) => {
        const { transparent = false, expand = 0 } = options;
        const geometry = new THREE.BoxGeometry(w + expand, h + expand, d + expand);
        const materials = [
          new THREE.MeshBasicMaterial({ transparent }), // right
          new THREE.MeshBasicMaterial({ transparent }), // left
          new THREE.MeshBasicMaterial({ transparent }), // top
          new THREE.MeshBasicMaterial({ transparent }), // bottom
          new THREE.MeshBasicMaterial({ transparent }), // front
          new THREE.MeshBasicMaterial({ transparent }), // back
        ];

        setUV(materials[0], uvMap.right);
        setUV(materials[1], uvMap.left);
        setUV(materials[2], uvMap.top);
        setUV(materials[3], uvMap.bottom);
        setUV(materials[4], uvMap.front);
        setUV(materials[5], uvMap.back);

        const box = new THREE.Mesh(geometry, materials);
        box.position.set(x, y, z);
        return box;
      };

      const headMap = {
        left: [0, 8, 8, 16],
        right: [16, 8, 24, 16],
        top: [8, 0, 16, 8],
        bottom: [16, 0, 24, 8],
        front: [8, 8, 16, 16],
        back: [24, 8, 32, 16],
      };

      const bodyMap = {
        right: [28, 20, 32, 32],
        left: [16, 20, 20, 32],
        top: [20, 16, 28, 20],
        bottom: [28, 16, 36, 20],
        front: [20, 20, 28, 32],
        back: [32, 20, 40, 32],
      };

      const armMap = {
        right: [40, 20, 44, 32],
        left: [48, 20, 52, 32],
        top: [44, 16, 48, 20],
        bottom: [48, 16, 52, 20],
        front: [44, 20, 48, 32],
        back: [52, 20, 56, 32],
      };

      const legMap = {
        right: [0, 20, 4, 32],
        left: [8, 20, 12, 32],
        top: [4, 16, 8, 20],
        bottom: [8, 16, 12, 20],
        front: [4, 20, 8, 32],
        back: [12, 20, 16, 32],
      };

      const headOverlayMap = {
        left: [32, 8, 40, 16],
        right: [48, 8, 56, 16],
        top: [40, 0, 48, 8],
        bottom: [48, 0, 56, 8],
        front: [40, 8, 48, 16],
        back: [56, 8, 64, 16],
      };

      const bodyOverlayMap = {
        right: [28, 36, 32, 48],
        left: [16, 36, 20, 48],
        top: [20, 32, 28, 36],
        bottom: [28, 32, 36, 36],
        front: [20, 36, 28, 48],
        back: [32, 36, 40, 48],
      };

      const armOverlayMap = {
        right: [40, 36, 44, 48],
        left: [48, 36, 52, 48],
        top: [44, 32, 48, 36],
        bottom: [48, 32, 52, 36],
        front: [44, 36, 48, 48],
        back: [52, 36, 56, 48],
      };

      const legOverlayMap = {
        right: [0, 36, 4, 48],
        left: [8, 36, 12, 48],
        top: [4, 32, 8, 36],
        bottom: [8, 32, 12, 36],
        front: [4, 36, 8, 48],
        back: [12, 36, 16, 48],
      };

      const head = createBox(8, 8, 8, 0, 22, 0, headMap);
      const body = createBox(8, 12, 4, 0, 12, 0, bodyMap);
      const armL = createBox(4, 12, 4, -6, 12, 0, armMap);
      const armR = createBox(4, 12, 4, 6, 12, 0, armMap);
      const legL = createBox(4, 12, 4, -2, 0, 0, legMap);
      const legR = createBox(4, 12, 4, 2, 0, 0, legMap);

      const headOL = createBox(8, 8, 8, 0, 22, 0, headOverlayMap, {
        transparent: true,
        expand: 0.5,
      });
      const bodyOL = createBox(8, 12, 4, 0, 12, 0, bodyOverlayMap, {
        transparent: true,
        expand: 0.5,
      });
      const armLOL = createBox(4, 12, 4, -6, 12, 0, armOverlayMap, {
        transparent: true,
        expand: 0.5,
      });
      const armROL = createBox(4, 12, 4, 6, 12, 0, armOverlayMap, {
        transparent: true,
        expand: 0.5,
      });
      const legLOL = createBox(4, 12, 4, -2, 0, 0, legOverlayMap, {
        transparent: true,
        expand: 0.5,
      });
      const legROL = createBox(4, 12, 4, 2, 0, 0, legOverlayMap, {
        transparent: true,
        expand: 0.5,
      });

      group.add(
        head,
        body,
        armL,
        armR,
        legL,
        legR,
        headOL,
        bodyOL,
        armLOL,
        armROL,
        legLOL,
        legROL
      );
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
