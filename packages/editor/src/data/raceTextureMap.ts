import { resolveAssetUrl, type SkinCrafterAssetPath } from '../assetResolver';
import type { Race } from './races';

export type Sex = 'Male' | 'Female' | 'None';

const raceTextureMap: Record<Race, Partial<Record<Sex, SkinCrafterAssetPath>>> = {
  Human: {
    Male: 'textures/race/human/male.png',
    Female: 'textures/race/human/female.png',
  },
  Bear: { Male: 'textures/race/bear/male.png' },
  Orc: { Male: 'textures/race/orc/male.png' },
  Zombie: { Male: 'textures/race/zombie/male.png' },
  Template: { None: 'textures/race/template/none.png' },
};

export function getAvailableSexes(race: Race): Sex[] {
  return Object.keys(raceTextureMap[race]) as Sex[];
}

export function getRaceTextureUrl(race: Race, sex: string, assetBaseUrl?: string): string {
  const textures = raceTextureMap[race];
  const fallbackSex = getAvailableSexes(race)[0];
  const selectedSex = sex as Sex;
  const path = textures[selectedSex] ?? textures[fallbackSex];
  return path ? resolveAssetUrl(path, assetBaseUrl) : '';
}

export default raceTextureMap;
