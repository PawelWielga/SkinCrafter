export const headMap = {
  left: [0, 8, 8, 16],
  right: [16, 8, 24, 16],
  top: [8, 0, 16, 8],
  bottom: [16, 0, 24, 8],
  front: [8, 8, 16, 16],
  back: [24, 8, 32, 16],
};

export const bodyMap = {
  right: [28, 20, 32, 32],
  left: [16, 20, 20, 32],
  top: [20, 16, 28, 20],
  bottom: [28, 16, 36, 20],
  front: [20, 20, 28, 32],
  back: [32, 20, 40, 32],
};

export const armMap = {
  left: [40, 20, 44, 32],
  right: [48, 20, 52, 32],
  top: [44, 16, 48, 20],
  bottom: [48, 16, 52, 20],
  front: [48, 20, 44, 32],
  back: [56, 20, 52, 32],
};

export const legMap = {
  left: [0, 20, 4, 32],
  right: [8, 20, 12, 32],
  top: [4, 16, 8, 20],
  bottom: [8, 16, 12, 20],
  front: [8, 20, 4, 32],
  back: [16, 20, 12, 32],
};

export const headOverlayMap = {
  left: [32, 8, 40, 16],
  right: [48, 8, 56, 16],
  top: [40, 0, 48, 8],
  bottom: [48, 0, 56, 8],
  front: [40, 8, 48, 16],
  back: [56, 8, 64, 16],
};

export const bodyOverlayMap = {
  right: [28, 36, 32, 48],
  left: [16, 36, 20, 48],
  top: [20, 32, 28, 36],
  bottom: [28, 32, 36, 36],
  front: [20, 36, 28, 48],
  back: [32, 36, 40, 48],
};

export const armOverlayMap = {
  left: [40, 36, 44, 48],
  right: [48, 36, 52, 48],
  top: [44, 32, 48, 36],
  bottom: [48, 32, 52, 36],
  front: [48, 36, 44, 48],
  back: [56, 36, 52, 48],
};

export const legOverlayMap = {
  left: [0, 36, 4, 48],
  right: [8, 36, 12, 48],
  top: [4, 32, 8, 36],
  bottom: [8, 32, 12, 36],
  front: [8, 36, 4, 48],
  back: [16, 36, 12, 48],
};

export const leftArmMap = {
  ...armMap,
};

export const leftLegMap = {
  ...legMap,
};

export const leftArmOverlayMap = {
  ...armOverlayMap,
};

export const leftLegOverlayMap = {
  ...legOverlayMap,
};
