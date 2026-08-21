import type { Race } from './races';
import {
  defineTextureLayers,
  resolveTextureLayers,
  type ResolvedTextureLayers,
  type TextureLayers,
} from './textureLayers';

export type Sex = 'Male' | 'Female' | 'None';

const raceTextureMap: Record<Race, Partial<Record<Sex, TextureLayers>>> = {
  Human: {
    Male: defineTextureLayers({
      tintable: 'textures/race/human/male.tintable.png',
      fixed: 'textures/race/human/male.fixed.png',
    }),
    Female: defineTextureLayers({
      tintable: 'textures/race/human/female.tintable.png',
      fixed: 'textures/race/human/female.fixed.png',
    }),
  },
  Bear: {
    Male: defineTextureLayers({ fixed: 'textures/race/bear/male.fixed.png' }),
  },
  Orc: {
    Male: defineTextureLayers({
      tintable: 'textures/race/orc/male.tintable.png',
      fixed: 'textures/race/orc/male.fixed.png',
    }),
  },
  Zombie: {
    Male: defineTextureLayers({
      tintable: 'textures/race/zombie/male.tintable.png',
      fixed: 'textures/race/zombie/male.fixed.png',
    }),
  },
  Template: {
    None: defineTextureLayers({
      tintable: 'textures/race/template/none.tintable.png',
      fixed: 'textures/race/template/none.fixed.png',
    }),
  },
};

export function getAvailableSexes(race: Race): Sex[] {
  return Object.keys(raceTextureMap[race]) as Sex[];
}

export function getRaceTextureLayers(
  race: Race,
  sex: string,
  assetBaseUrl?: string
): ResolvedTextureLayers | null {
  const textures = raceTextureMap[race];
  const fallbackSex = getAvailableSexes(race)[0];
  const selectedSex = sex as Sex;
  const layers = textures[selectedSex] ?? textures[fallbackSex];
  return layers ? resolveTextureLayers(layers, assetBaseUrl) : null;
}

export default raceTextureMap;
