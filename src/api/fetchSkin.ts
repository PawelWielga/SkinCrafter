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
  textures: {
    SKIN?: {
      url: string;
    };
  };
}

const normalizeTextureUrl = (url: string): string => url.replace(/^http:\/\//, 'https://');

export default async function fetchSkin(username: string): Promise<string> {
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

  if (player.skin_texture) {
    return normalizeTextureUrl(player.skin_texture);
  }

  const texturesProp = player.properties?.find((p) => p.name === 'textures');
  if (!texturesProp) {
    throw new Error('Skin texture not found');
  }

  const decoded: DecodedTextures = JSON.parse(atob(texturesProp.value));
  const textureUrl = decoded.textures.SKIN?.url;
  if (!textureUrl) {
    throw new Error('Skin texture not found');
  }

  return normalizeTextureUrl(textureUrl);
}
