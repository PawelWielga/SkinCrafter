import defaultPreview from './assets/textures/preview/default.png?url&no-inline';
import humanMaleTintable from './assets/textures/race/human/male.tintable.png?url&no-inline';
import humanMaleFixed from './assets/textures/race/human/male.fixed.png?url&no-inline';
import humanFemaleTintable from './assets/textures/race/human/female.tintable.png?url&no-inline';
import humanFemaleFixed from './assets/textures/race/human/female.fixed.png?url&no-inline';
import bearMaleFixed from './assets/textures/race/bear/male.fixed.png?url&no-inline';
import orcMaleTintable from './assets/textures/race/orc/male.tintable.png?url&no-inline';
import orcMaleFixed from './assets/textures/race/orc/male.fixed.png?url&no-inline';
import zombieMaleTintable from './assets/textures/race/zombie/male.tintable.png?url&no-inline';
import zombieMaleFixed from './assets/textures/race/zombie/male.fixed.png?url&no-inline';
import templateNoneTintable from './assets/textures/race/template/none.tintable.png?url&no-inline';
import templateNoneFixed from './assets/textures/race/template/none.fixed.png?url&no-inline';
import eyesClassicTintable from './assets/textures/eyes/clasic.tintable.png?url&no-inline';
import eyesClassicFixed from './assets/textures/eyes/clasic.fixed.png?url&no-inline';
import eyesSmallTintable from './assets/textures/eyes/small.tintable.png?url&no-inline';
import eyesBigTintable from './assets/textures/eyes/big.tintable.png?url&no-inline';
import eyesBigFixed from './assets/textures/eyes/big.fixed.png?url&no-inline';
import duckHat from './assets/textures/hat/duck.png?url&no-inline';
import hoodie from './assets/textures/top/male/hoodie.png?url&no-inline';
import pants from './assets/textures/bottom/pants.png?url&no-inline';

// This manifest is the single logical-path -> packaged-URL contract for editor assets.
// `?no-inline` is intentional: Vite library mode otherwise inlines asset bytes regardless
// of build.assetsInlineLimit, which would make the main JavaScript bundle grow with textures.
const packagedAssetUrls = {
  'textures/preview/default.png': defaultPreview,
  'textures/race/human/male.tintable.png': humanMaleTintable,
  'textures/race/human/male.fixed.png': humanMaleFixed,
  'textures/race/human/female.tintable.png': humanFemaleTintable,
  'textures/race/human/female.fixed.png': humanFemaleFixed,
  'textures/race/bear/male.fixed.png': bearMaleFixed,
  'textures/race/orc/male.tintable.png': orcMaleTintable,
  'textures/race/orc/male.fixed.png': orcMaleFixed,
  'textures/race/zombie/male.tintable.png': zombieMaleTintable,
  'textures/race/zombie/male.fixed.png': zombieMaleFixed,
  'textures/race/template/none.tintable.png': templateNoneTintable,
  'textures/race/template/none.fixed.png': templateNoneFixed,
  'textures/eyes/clasic.tintable.png': eyesClassicTintable,
  'textures/eyes/clasic.fixed.png': eyesClassicFixed,
  'textures/eyes/small.tintable.png': eyesSmallTintable,
  'textures/eyes/big.tintable.png': eyesBigTintable,
  'textures/eyes/big.fixed.png': eyesBigFixed,
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

export const defaultPreviewTextureUrl = packagedAssetUrls['textures/preview/default.png'];
