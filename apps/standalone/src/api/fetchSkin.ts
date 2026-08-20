export type MinecraftSkinModel = 'classic' | 'slim';

export interface FetchedSkin {
  texture: string;
  model: MinecraftSkinModel;
}

interface PlayerDbProperty {
  name: string;
  value: string;
}

interface PlayerDbResponse {
  success: boolean;
  data?: {
    player?: {
      skin_texture?: string;
      properties?: PlayerDbProperty[];
    };
  };
}

interface DecodedTextures {
  textures?: {
    SKIN?: {
      url?: string;
      metadata?: {
        model?: string;
      };
    };
  };
}

const normalizeTextureUrl = (url: string): string => url.replace(/^http:\/\//, 'https://');

const decodeTexturesProperty = (property?: PlayerDbProperty): DecodedTextures | null => {
  if (!property) {
    return null;
  }

  try {
    return JSON.parse(atob(property.value)) as DecodedTextures;
  } catch {
    return null;
  }
};

export default async function fetchSkin(username: string): Promise<FetchedSkin> {
  const profileRes = await fetch(
    `https://playerdb.co/api/player/minecraft/${encodeURIComponent(username)}`
  );

  if (!profileRes.ok) {
    throw new Error('User not found');
  }

  const profile: PlayerDbResponse = await profileRes.json();
  const player = profile.data?.player;

  if (!profile.success || !player) {
    throw new Error('User not found');
  }

  const texturesProperty = player.properties?.find((property) => property.name === 'textures');
  const decodedSkin = decodeTexturesProperty(texturesProperty)?.textures?.SKIN;
  const textureUrl = decodedSkin?.url ?? player.skin_texture;

  if (!textureUrl) {
    throw new Error('Skin texture not found');
  }

  return {
    texture: normalizeTextureUrl(textureUrl),
    model: decodedSkin?.metadata?.model === 'slim' ? 'slim' : 'classic',
  };
}
