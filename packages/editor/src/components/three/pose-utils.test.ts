import * as THREE from 'three';
import { describe, expect, it } from 'vitest';
import applyPose from './pose-utils';

function refs() {
  return {
    armL: new THREE.Object3D(),
    armR: new THREE.Object3D(),
    legL: new THREE.Object3D(),
    legR: new THREE.Object3D(),
    armLOL: new THREE.Object3D(),
    armROL: new THREE.Object3D(),
    legLOL: new THREE.Object3D(),
    legROL: new THREE.Object3D(),
  };
}

function expectVector(actual: THREE.Vector3, expected: [number, number, number]): void {
  expect(actual.x).toBeCloseTo(expected[0], 6);
  expect(actual.y).toBeCloseTo(expected[1], 6);
  expect(actual.z).toBeCloseTo(expected[2], 6);
}

describe('applyPose Minecraft pivots', () => {
  it('uses Java player-model default centers, including the ±1.9 leg pivots', () => {
    const parts = refs();

    applyPose('default', parts);

    expectVector(parts.armR.position, [-6, 12, 0]);
    expectVector(parts.armL.position, [6, 12, 0]);
    expectVector(parts.legR.position, [-1.9, 0, 0]);
    expectVector(parts.legL.position, [1.9, 0, 0]);
  });

  it('rotates the classic arms around the shoulder pivots instead of around mesh centers', () => {
    const parts = refs();

    applyPose('tpose', parts);

    expect(parts.armR.rotation.z).toBeCloseTo(-Math.PI / 2);
    expect(parts.armL.rotation.z).toBeCloseTo(Math.PI / 2);
    expectVector(parts.armR.position, [-9, 17, 0]);
    expectVector(parts.armL.position, [9, 17, 0]);
    expectVector(parts.armROL.position, [-9, 17, 0]);
    expectVector(parts.armLOL.position, [9, 17, 0]);
  });

  it('keeps the same shoulder pivots for slim arms while using their half-pixel center offset', () => {
    const parts = refs();

    applyPose('tpose', parts, { rightArmX: -5.5, leftArmX: 5.5 });

    expectVector(parts.armR.position, [-9, 16.5, 0]);
    expectVector(parts.armL.position, [9, 16.5, 0]);
  });

  it('rotates walking limbs around shoulders and hips with outer layers locked to base layers', () => {
    const parts = refs();

    applyPose('walking', parts);

    expectVector(parts.armR.position, [-6, 13.171573, -2.828427]);
    expectVector(parts.armL.position, [6, 13.171573, 2.828427]);
    expectVector(parts.legR.position, [-1.9, 1.757359, 4.242641]);
    expectVector(parts.legL.position, [1.9, 1.757359, -4.242641]);

    expectVector(parts.armROL.position, [
      parts.armR.position.x,
      parts.armR.position.y,
      parts.armR.position.z,
    ]);
    expectVector(parts.armLOL.position, [
      parts.armL.position.x,
      parts.armL.position.y,
      parts.armL.position.z,
    ]);
    expectVector(parts.legROL.position, [
      parts.legR.position.x,
      parts.legR.position.y,
      parts.legR.position.z,
    ]);
    expectVector(parts.legLOL.position, [
      parts.legL.position.x,
      parts.legL.position.y,
      parts.legL.position.z,
    ]);
  });
});
