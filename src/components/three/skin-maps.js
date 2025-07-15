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
  front: [44, 20, 48, 32],
  back: [52, 20, 56, 32],
};

export const legMap = {
  left: [0, 20, 4, 32],
  right: [8, 20, 12, 32],
  top: [4, 16, 8, 20],
  bottom: [8, 16, 12, 20],
  front: [4, 20, 8, 32],
  back: [12, 20, 16, 32],
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
  front: [44, 36, 48, 48],
  back: [52, 36, 56, 48],
};

export const legOverlayMap = {
  left: [0, 36, 4, 48],
  right: [8, 36, 12, 48],
  top: [4, 32, 8, 36],
  bottom: [8, 32, 12, 36],
  front: [4, 36, 8, 48],
  back: [12, 36, 16, 48],
};

export const leftArmMap = {
  ...armMap,
  front: [armMap.front[2], armMap.front[1], armMap.front[0], armMap.front[3]],
  back: [armMap.back[2], armMap.back[1], armMap.back[0], armMap.back[3]],
};

export const leftLegMap = {
  ...legMap,
  front: [legMap.front[2], legMap.front[1], legMap.front[0], legMap.front[3]],
  back: [legMap.back[2], legMap.back[1], legMap.back[0], legMap.back[3]],
};

export const leftArmOverlayMap = {
  ...armOverlayMap,
  front: [armOverlayMap.front[2], armOverlayMap.front[1], armOverlayMap.front[0], armOverlayMap.front[3]],
  back: [armOverlayMap.back[2], armOverlayMap.back[1], armOverlayMap.back[0], armOverlayMap.back[3]],
};

export const leftLegOverlayMap = {
  ...legOverlayMap,
  front: [legOverlayMap.front[2], legOverlayMap.front[1], legOverlayMap.front[0], legOverlayMap.front[3]],
  back: [legOverlayMap.back[2], legOverlayMap.back[1], legOverlayMap.back[0], legOverlayMap.back[3]],
};
