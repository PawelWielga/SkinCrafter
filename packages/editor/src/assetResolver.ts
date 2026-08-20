import humanMale from './assets/textures/race/human/male.png?url&no-inline';
import humanFemale from './assets/textures/race/human/female.png?url&no-inline';
import bearMale from './assets/textures/race/bear/male.png?url&no-inline';
import orcMale from './assets/textures/race/orc/male.png?url&no-inline';
import zombieMale from './assets/textures/race/zombie/male.png?url&no-inline';
import templateNone from './assets/textures/race/template/none.png?url&no-inline';
import eyesClassic from './assets/textures/eyes/clasic.png?url&no-inline';
import eyesSmall from './assets/textures/eyes/small.png?url&no-inline';
import eyesBig from './assets/textures/eyes/big.png?url&no-inline';
import duckHat from './assets/textures/hat/duck.png?url&no-inline';
import hoodie from './assets/textures/top/male/hoodie.png?url&no-inline';
import pants from './assets/textures/bottom/pants.png?url&no-inline';

// This manifest is the single logical-path -> packaged-URL contract for wardrobe assets.
// `?no-inline` is intentional: Vite library mode otherwise inlines asset bytes regardless
// of build.assetsInlineLimit, which would make the main JavaScript bundle grow with the wardrobe.
const packagedAssetUrls = {
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

export type SkinCrafterAssetPath = keyof typeof packagedAssetUrls;
export const skinCrafterAssetPaths = Object.keys(packagedAssetUrls) as SkinCrafterAssetPath[];

export function resolveAssetUrl(path: SkinCrafterAssetPath, assetBaseUrl?: string): string {
  if (!assetBaseUrl) {
    return packagedAssetUrls[path];
  }

  return `${assetBaseUrl.replace(/\/+$/, '')}/${path.replace(/^\/+/, '')}`;
}

export const defaultPreviewTextureUrl = packagedAssetUrls['textures/race/human/male.png'];
