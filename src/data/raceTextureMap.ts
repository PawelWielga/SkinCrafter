import type { Race } from './races';

export type Sex = 'Male' | 'Female' | 'None';

const raceTextureMap: Record<Race, Partial<Record<Sex, string>>> = {
  Human: {
    Male: '/textures/race/human/male.png',
    Female: '/textures/race/human/female.png',
  },
  // Elf: {
  //   Male: '/textures/race/elf/male.png',
  //   Female: '/textures/race/elf/female.png',
  // },
  // Dwarf: {
  //   Male: '/textures/race/dwarf/male.png',
  //   Female: '/textures/race/dwarf/female.png',
  // },
  // Orc: {
  //   Male: '/textures/race/orc/male.png',
  // },
  Zombie: {
    Male: '/textures/race/zombie/male.png',
  },
  // Skeleton: {
  //   None: '/textures/race/skeleton/none.png',
  // },
  // Enderman: {
  //   None: '/textures/race/enderman/none.png',
  // },
  Template: {
    None: '/textures/race/template/none.png',
  },
};

export function getAvailableSexes(race: Race): Sex[] {
  return Object.keys(raceTextureMap[race]) as Sex[];
}

export function getRaceTextureUrl(race: Race, sex: string): string {
  const textures = raceTextureMap[race];
  const fallbackSex = getAvailableSexes(race)[0];
  const selectedSex = sex as Sex;

  return textures[selectedSex] ?? textures[fallbackSex] ?? '';
}

export default raceTextureMap;
