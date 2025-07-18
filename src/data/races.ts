export const races = [
  'Human',
  //   'Elf',
  //   'Dwarf',
  //   'Orc',
  //   'Zombie',
  //   'Skeleton',
  //   'Enderman',
  'Template',
] as const;

export type Race = (typeof races)[number];

export default races;
