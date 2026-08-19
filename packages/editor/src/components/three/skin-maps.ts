export type UVRect = [number, number, number, number];

export type Direction = 'left' | 'right' | 'top' | 'bottom' | 'front' | 'back';

export type RectMap = Record<Direction, UVRect>;

// The keys match Three.js BoxGeometry material slots:
// right = +X face, left = -X face. For a character facing the camera, +X is
// the character's left side, so the texture rectangles look intentionally swapped.
export const headMap: RectMap = {
  left: [0, 8, 8, 16],
  right: [16, 8, 24, 16],
  top: [8, 0, 16, 8],
  bottom: [16, 0, 24, 8],
  front: [8, 8, 16, 16],
  back: [24, 8, 32, 16],
};

export const bodyMap: RectMap = {
  right: [28, 20, 32, 32],
  left: [16, 20, 20, 32],
  top: [20, 16, 28, 20],
  bottom: [28, 16, 36, 20],
  front: [20, 20, 28, 32],
  back: [32, 20, 40, 32],
};

export const armMap: RectMap = {
  left: [40, 20, 44, 32],
  right: [48, 20, 52, 32],
  top: [44, 16, 48, 20],
  bottom: [48, 16, 52, 20],
  front: [44, 20, 48, 32],
  back: [52, 20, 56, 32],
};

export const slimArmMap: RectMap = {
  left: [40, 20, 44, 32],
  right: [47, 20, 51, 32],
  top: [44, 16, 47, 20],
  bottom: [47, 16, 50, 20],
  front: [44, 20, 47, 32],
  back: [51, 20, 54, 32],
};

export const legMap: RectMap = {
  left: [0, 20, 4, 32],
  right: [8, 20, 12, 32],
  top: [4, 16, 8, 20],
  bottom: [8, 16, 12, 20],
  front: [4, 20, 8, 32],
  back: [12, 20, 16, 32],
};

export const headOverlayMap: RectMap = {
  left: [32, 8, 40, 16],
  right: [48, 8, 56, 16],
  top: [40, 0, 48, 8],
  bottom: [48, 0, 56, 8],
  front: [40, 8, 48, 16],
  back: [56, 8, 64, 16],
};

export const bodyOverlayMap: RectMap = {
  right: [28, 36, 32, 48],
  left: [16, 36, 20, 48],
  top: [20, 32, 28, 36],
  bottom: [28, 32, 36, 36],
  front: [20, 36, 28, 48],
  back: [32, 36, 40, 48],
};

export const armOverlayMap: RectMap = {
  left: [40, 36, 44, 48],
  right: [48, 36, 52, 48],
  top: [44, 32, 48, 36],
  bottom: [48, 32, 52, 36],
  front: [44, 36, 48, 48],
  back: [52, 36, 56, 48],
};

export const slimArmOverlayMap: RectMap = {
  left: [40, 36, 44, 48],
  right: [47, 36, 51, 48],
  top: [44, 32, 47, 36],
  bottom: [47, 32, 50, 36],
  front: [44, 36, 47, 48],
  back: [51, 36, 54, 48],
};

export const legOverlayMap: RectMap = {
  left: [0, 36, 4, 48],
  right: [8, 36, 12, 48],
  top: [4, 32, 8, 36],
  bottom: [8, 32, 12, 36],
  front: [4, 36, 8, 48],
  back: [12, 36, 16, 48],
};

export const leftArmMap: RectMap = {
  left: [32, 52, 36, 64],
  right: [40, 52, 44, 64],
  top: [36, 48, 40, 52],
  bottom: [40, 48, 44, 52],
  front: [36, 52, 40, 64],
  back: [44, 52, 48, 64],
};

export const slimLeftArmMap: RectMap = {
  left: [32, 52, 36, 64],
  right: [39, 52, 43, 64],
  top: [36, 48, 39, 52],
  bottom: [39, 48, 42, 52],
  front: [36, 52, 39, 64],
  back: [43, 52, 46, 64],
};

export const leftLegMap: RectMap = {
  left: [16, 52, 20, 64],
  right: [24, 52, 28, 64],
  top: [20, 48, 24, 52],
  bottom: [24, 48, 28, 52],
  front: [20, 52, 24, 64],
  back: [28, 52, 32, 64],
};

export const leftArmOverlayMap: RectMap = {
  left: [48, 52, 52, 64],
  right: [56, 52, 60, 64],
  top: [52, 48, 56, 52],
  bottom: [56, 48, 60, 52],
  front: [52, 52, 56, 64],
  back: [60, 52, 64, 64],
};

export const slimLeftArmOverlayMap: RectMap = {
  left: [48, 52, 52, 64],
  right: [55, 52, 59, 64],
  top: [52, 48, 55, 52],
  bottom: [55, 48, 58, 52],
  front: [52, 52, 55, 64],
  back: [59, 52, 62, 64],
};

export const leftLegOverlayMap: RectMap = {
  left: [0, 52, 4, 64],
  right: [8, 52, 12, 64],
  top: [4, 48, 8, 52],
  bottom: [8, 48, 12, 52],
  front: [4, 52, 8, 64],
  back: [12, 52, 16, 64],
};
