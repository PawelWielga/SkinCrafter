import humanMale from './assets/textures/race/human/male.png?url';
import humanFemale from './assets/textures/race/human/female.png?url';
import bearMale from './assets/textures/race/bear/male.png?url';
import orcMale from './assets/textures/race/orc/male.png?url';
import zombieMale from './assets/textures/race/zombie/male.png?url';
import templateNone from './assets/textures/race/template/none.png?url';
import eyesClassic from './assets/textures/eyes/clasic.png?url';
import eyesSmall from './assets/textures/eyes/small.png?url';
import eyesBig from './assets/textures/eyes/big.png?url';
import duckHat from './assets/textures/hat/duck.png?url';
import hoodie from './assets/textures/top/male/hoodie.png?url';
import pants from './assets/textures/bottom/pants.png?url';

const bundledAssets = {
  'textures/race/human/male.png': humanMale,
  'textures/race/human/female.png': humanFemale,
  'textures/race/bear/male.png': bearMale,
  'textures/race/orc/male.png': orcMale,
  'textures/race/zombie/male.png': zombieMale,
  'textures/race/template/none.png': templateNone,
  'textures/eyes/clasic.png': eyesClassic,
  'textures/eyes/small.png': eyesSmall,
  'textures/eyes/big.png': eyesBig,
  'textures/hat/duck.png': duckHat,
  'textures/top/male/hoodie.png': hoodie,
  'textures/bottom/pants.png': pants,
} as const;

export type SkinCrafterAssetPath = keyof typeof bundledAssets;

export function resolveAssetUrl(path: SkinCrafterAssetPath, assetBaseUrl?: string): string {
  if (!assetBaseUrl) {
    return bundledAssets[path];
  }

  return `${assetBaseUrl.replace(/\/+$/, '')}/${path.replace(/^\/+/, '')}`;
}

export const defaultPreviewTextureUrl = bundledAssets['textures/race/human/male.png'];
