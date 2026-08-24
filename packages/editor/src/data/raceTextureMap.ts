import type { SkinCrafterSkinModel } from '../publicTypes';
import type { Race } from './races';
import {
  defineTextureLayers,
  resolveTextureLayers,
  type ResolvedTextureLayers,
  type TextureLayers,
} from './textureLayers';

export type Sex = 'Male' | 'Female' | 'None';

interface RaceTextureVariant {
  sex: Sex;
  textureLayers: TextureLayers;
}

type RaceTextureVariants = Partial<Record<SkinCrafterSkinModel, RaceTextureVariant>>;

const raceTextureMap: Record<Race, RaceTextureVariants> = {
  Human: {
    classic: {
      sex: 'Male',
      textureLayers: defineTextureLayers({
        tintable: 'textures/race/human/male.tintable.png',
        fixed: 'textures/race/human/male.fixed.png',
      }),
    },
    slim: {
      sex: 'Female',
      textureLayers: defineTextureLayers({
        tintable: 'textures/race/human/female.tintable.png',
        fixed: 'textures/race/human/female.fixed.png',
      }),
    },
  },
  Bear: {
    classic: {
      sex: 'Male',
      textureLayers: defineTextureLayers({ fixed: 'textures/race/bear/male.fixed.png' }),
    },
  },
  Orc: {
    classic: {
      sex: 'Male',
      textureLayers: defineTextureLayers({
        tintable: 'textures/race/orc/male.tintable.png',
        fixed: 'textures/race/orc/male.fixed.png',
      }),
    },
  },
  Zombie: {
    classic: {
      sex: 'Male',
      textureLayers: defineTextureLayers({
        tintable: 'textures/race/zombie/male.tintable.png',
        fixed: 'textures/race/zombie/male.fixed.png',
      }),
    },
  },
  Template: {
    classic: {
      sex: 'None',
      textureLayers: defineTextureLayers({
        tintable: 'textures/race/template/none.tintable.png',
        fixed: 'textures/race/template/none.fixed.png',
      }),
    },
  },
};

export function getAvailableSexes(race: Race): Sex[] {
  const sexes = Object.values(raceTextureMap[race]).flatMap((variant) =>
    variant ? [variant.sex] : []
  );
  return [...new Set(sexes)];
}

export function getRaceTextureLayers(
  race: Race,
  skinModel: SkinCrafterSkinModel,
  assetBaseUrl?: string
): ResolvedTextureLayers | null {
  const variant = raceTextureMap[race][skinModel];
  return variant ? resolveTextureLayers(variant.textureLayers, assetBaseUrl) : null;
}

export default raceTextureMap;
