import { describe, expect, it } from 'vitest';
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
  type RectMap,
} from './skin-maps';

function cubeMap(u: number, v: number, width: number, height: number, depth: number): RectMap {
  return {
    left: [u, v + depth, u + depth, v + depth + height],
    right: [
      u + width + depth,
      v + depth,
      u + width + depth * 2,
      v + depth + height,
    ],
    top: [u + depth, v, u + width + depth, v + depth],
    bottom: [u + width + depth, v, u + width * 2 + depth, v + depth],
    front: [u + depth, v + depth, u + width + depth, v + depth + height],
    back: [
      u + width + depth * 2,
      v + depth,
      u + width * 2 + depth * 2,
      v + depth + height,
    ],
  };
}

const cases: Array<{ name: string; actual: RectMap; expected: RectMap }> = [
  { name: 'head base', actual: headMap, expected: cubeMap(0, 0, 8, 8, 8) },
  { name: 'head overlay', actual: headOverlayMap, expected: cubeMap(32, 0, 8, 8, 8) },
  { name: 'body base', actual: bodyMap, expected: cubeMap(16, 16, 8, 12, 4) },
  { name: 'body overlay', actual: bodyOverlayMap, expected: cubeMap(16, 32, 8, 12, 4) },
  { name: 'classic right arm base', actual: armMap, expected: cubeMap(40, 16, 4, 12, 4) },
  {
    name: 'classic right sleeve',
    actual: armOverlayMap,
    expected: cubeMap(40, 32, 4, 12, 4),
  },
  { name: 'slim right arm base', actual: slimArmMap, expected: cubeMap(40, 16, 3, 12, 4) },
  {
    name: 'slim right sleeve',
    actual: slimArmOverlayMap,
    expected: cubeMap(40, 32, 3, 12, 4),
  },
  { name: 'classic left arm base', actual: leftArmMap, expected: cubeMap(32, 48, 4, 12, 4) },
  {
    name: 'classic left sleeve',
    actual: leftArmOverlayMap,
    expected: cubeMap(48, 48, 4, 12, 4),
  },
  {
    name: 'slim left arm base',
    actual: slimLeftArmMap,
    expected: cubeMap(32, 48, 3, 12, 4),
  },
  {
    name: 'slim left sleeve',
    actual: slimLeftArmOverlayMap,
    expected: cubeMap(48, 48, 3, 12, 4),
  },
  { name: 'right leg base', actual: legMap, expected: cubeMap(0, 16, 4, 12, 4) },
  { name: 'right pants leg', actual: legOverlayMap, expected: cubeMap(0, 32, 4, 12, 4) },
  { name: 'left leg base', actual: leftLegMap, expected: cubeMap(16, 48, 4, 12, 4) },
  { name: 'left pants leg', actual: leftLegOverlayMap, expected: cubeMap(0, 48, 4, 12, 4) },
];

describe('Minecraft Java 64x64 UV atlas maps', () => {
  it.each(cases)('$name matches the canonical six-face cube layout', ({ actual, expected }) => {
    expect(actual).toEqual(expected);
  });

  it('keeps modern left and right limbs on independent atlas regions', () => {
    expect(armMap.front).not.toEqual(leftArmMap.front);
    expect(legMap.front).not.toEqual(leftLegMap.front);
    expect(armOverlayMap.front).not.toEqual(leftArmOverlayMap.front);
    expect(legOverlayMap.front).not.toEqual(leftLegOverlayMap.front);
  });
});
