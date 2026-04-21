export const pants = ['None', 'Pants'] as const;
export type Pants = (typeof pants)[number];

const pantsTextureMap: Record<Pants, string | null> = {
  None: null,
  Pants: '/textures/bottom/pants.png',
};

export default pantsTextureMap;