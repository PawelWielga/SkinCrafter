import * as THREE from 'three';
import { describe, expect, it } from 'vitest';
import createBox from './create-box';
import { headMap } from './skin-maps';

const MATERIAL_FACES = ['right', 'left', 'top', 'bottom', 'front', 'back'] as const;

describe('createBox Minecraft texture mapping', () => {
  it('uses pixel-perfect sampling and canonical transforms on all six cube faces', () => {
    const texture = new THREE.Texture();
    const box = createBox(texture, 8, 8, 8, 0, 0, 0, headMap);

    MATERIAL_FACES.forEach((face, index) => {
      const map = box.material[index].map;
      const rect = headMap[face];
      const width = (rect[2] - rect[0]) / 64;
      const height = (rect[3] - rect[1]) / 64;
      const isBottom = face === 'bottom';

      expect(map, face).not.toBeNull();
      expect(map?.magFilter, face).toBe(THREE.NearestFilter);
      expect(map?.minFilter, face).toBe(THREE.NearestFilter);
      expect(map?.generateMipmaps, face).toBe(false);
      expect(map?.wrapS, face).toBe(THREE.RepeatWrapping);
      expect(map?.wrapT, face).toBe(THREE.RepeatWrapping);
      expect(map?.repeat.x, face).toBeCloseTo(width);
      expect(map?.repeat.y, face).toBeCloseTo(isBottom ? -height : height);
      expect(map?.offset.x, face).toBeCloseTo(rect[0] / 64);
      expect(map?.offset.y, face).toBeCloseTo(
        isBottom ? 1 - rect[1] / 64 : 1 - rect[3] / 64
      );
      expect(box.material[index].side, face).toBe(THREE.DoubleSide);
    });
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
      expect(material.side).toBe(THREE.DoubleSide);
    });
    outer.material.forEach((material) => {
      expect(material.transparent).toBe(true);
      expect(material.alphaTest).toBeCloseTo(0.1);
      expect(material.side).toBe(THREE.DoubleSide);
    });
  });
});
