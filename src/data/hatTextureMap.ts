export const hats = ['None', 'Duck'] as const;
export type Hat = (typeof hats)[number];

const hatTextureMap: Record<Hat, string | null> = {
  None: null,
  Duck: '/textures/hat/duck.png',
};

export default hatTextureMap;
