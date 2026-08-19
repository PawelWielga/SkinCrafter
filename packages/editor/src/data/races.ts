export const races = ['Human', 'Bear', 'Orc', 'Zombie'] as const;
export type Race = (typeof races)[number] | 'Template';
export default races;
