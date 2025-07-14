import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreePreview() {
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
    loader.load('/textures/steve.png', (texture) => {
      texture.magFilter = THREE.NearestFilter;
      texture.minFilter = THREE.NearestFilter;

      const texSize = 64;

      const setUV = (mat, rect) => {
        mat.map = texture.clone();
        mat.map.magFilter = THREE.NearestFilter;
        mat.map.minFilter = THREE.NearestFilter;
        mat.map.repeat.set((rect[2] - rect[0]) / texSize, (rect[3] - rect[1]) / texSize);
        mat.map.offset.set(rect[0] / texSize, 1 - rect[3] / texSize);
        mat.map.needsUpdate = true;
      };

      const createBox = (w, h, d, x, y, z, uvMap) => {
        const geometry = new THREE.BoxGeometry(w, h, d);
        const materials = [
          new THREE.MeshBasicMaterial(), // right
          new THREE.MeshBasicMaterial(), // left
          new THREE.MeshBasicMaterial(), // top
          new THREE.MeshBasicMaterial(), // bottom
          new THREE.MeshBasicMaterial(), // front
          new THREE.MeshBasicMaterial(), // back
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

      const head = createBox(8, 8, 8, 0, 22, 0, headMap);
      const body = createBox(8, 12, 4, 0, 12, 0, bodyMap);
      const armL = createBox(4, 12, 4, -6, 12, 0, armMap);
      const armR = createBox(4, 12, 4, 6, 12, 0, armMap);
      const legL = createBox(4, 12, 4, -2, 0, 0, legMap);
      const legR = createBox(4, 12, 4, 2, 0, 0, legMap);

      group.add(head, body, armL, armR, legL, legR);
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
  }, []);

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
