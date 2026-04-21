export const shirts = ['None', 'Hoodie'] as const;
export type Shirt = (typeof shirts)[number];

const shirtTextureMap: Record<Shirt, string | null> = {
  None: null,
  Hoodie: '/textures/top/male/hoodie.png',
};

export default shirtTextureMap;