const isDev = import.meta.env.DEV;
export const races = [
  'Human',
  'Zombie',
  ...(isDev ? ['Template'] : []),
  //   'Elf',
  //   'Dwarf',
  //   'Orc',
  //   'Zombie',
  //   'Skeleton',
  //   'Enderman',
] as const;

export type Race = (typeof races)[number];

export default races;
