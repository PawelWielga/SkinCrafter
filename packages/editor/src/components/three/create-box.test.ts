import * as THREE from 'three';
import { describe, expect, it } from 'vitest';
import createBox from './create-box';
import { headMap } from './skin-maps';

const MATERIAL_FACES = ['right', 'left', 'top', 'bottom', 'front', 'back'] as const;

describe('createBox Minecraft texture mapping', () => {
  it('uses pixel-perfect texture sampling and the canonical bottom-face orientation', () => {
    const texture = new THREE.Texture();
    const box = createBox(texture, 8, 8, 8, 0, 0, 0, headMap);

    MATERIAL_FACES.forEach((face, index) => {
      const map = box.material[index].map;
      expect(map, face).not.toBeNull();
      expect(map?.magFilter, face).toBe(THREE.NearestFilter);
      expect(map?.minFilter, face).toBe(THREE.NearestFilter);
      expect(map?.generateMipmaps, face).toBe(false);
      expect(map?.wrapS, face).toBe(THREE.ClampToEdgeWrapping);
      expect(map?.wrapT, face).toBe(THREE.ClampToEdgeWrapping);
    });

    const top = box.material[2].map;
    const bottom = box.material[3].map;

    expect(top?.repeat.y).toBeCloseTo(8 / 64);
    expect(top?.offset.y).toBeCloseTo(1 - 8 / 64);
    expect(bottom?.repeat.y).toBeCloseTo(-8 / 64);
    expect(bottom?.offset.y).toBeCloseTo(1);
  });

  it('applies Minecraft outer-layer expansion and alpha handling without affecting base layers', () => {
    const texture = new THREE.Texture();

    const base = createBox(texture, 8, 12, 4, 0, 0, 0, headMap);
    const outer = createBox(texture, 8, 12, 4, 0, 0, 0, headMap, {
      transparent: true,
      expand: 0.5,
    });

    expect(base.geometry.parameters).toMatchObject({ width: 8, height: 12, depth: 4 });
    expect(outer.geometry.parameters).toMatchObject({
      width: 8.5,
      height: 12.5,
      depth: 4.5,
    });

    base.material.forEach((material) => {
      expect(material.transparent).toBe(false);
      expect(material.alphaTest).toBe(0);
    });
    outer.material.forEach((material) => {
      expect(material.transparent).toBe(true);
      expect(material.alphaTest).toBeCloseTo(0.1);
    });
  });
});
