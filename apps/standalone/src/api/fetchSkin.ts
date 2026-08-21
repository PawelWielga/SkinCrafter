export type MinecraftSkinModel = 'classic' | 'slim';

export interface FetchedSkin {
  texture: string;
  model: MinecraftSkinModel;
}

export type FetchSkinErrorCode =
  | 'player_not_found'
  | 'skin_texture_missing'
  | 'rate_limited'
  | 'service_unavailable'
  | 'network_error'
  | 'invalid_response';

interface FetchSkinErrorOptions {
  status?: number;
  cause?: unknown;
}

export class FetchSkinError extends Error {
  readonly code: FetchSkinErrorCode;
  readonly status?: number;
  readonly cause?: unknown;

  constructor(code: FetchSkinErrorCode, options: FetchSkinErrorOptions = {}) {
    super(code);
    this.name = 'FetchSkinError';
    this.code = code;
    this.status = options.status;
    this.cause = options.cause;
  }
}

interface PlayerDbProperty {
  name: string;
  value: string;
}

interface PlayerDbPlayer {
  skin_texture?: string;
  properties?: PlayerDbProperty[];
}

interface PlayerDbResponse {
  success: boolean;
  data?: {
    player?: PlayerDbPlayer;
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

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null;

const isPlayerDbProperty = (value: unknown): value is PlayerDbProperty =>
  isRecord(value) && typeof value.name === 'string' && typeof value.value === 'string';

const parsePlayerDbResponse = (value: unknown): PlayerDbResponse => {
  if (!isRecord(value) || typeof value.success !== 'boolean') {
    throw new FetchSkinError('invalid_response');
  }

  if (!value.success) {
    return { success: false };
  }

  if (!isRecord(value.data) || !isRecord(value.data.player)) {
    throw new FetchSkinError('invalid_response');
  }

  const player = value.data.player;
  if (player.skin_texture !== undefined && typeof player.skin_texture !== 'string') {
    throw new FetchSkinError('invalid_response');
  }

  if (player.properties !== undefined) {
    if (!Array.isArray(player.properties) || !player.properties.every(isPlayerDbProperty)) {
      throw new FetchSkinError('invalid_response');
    }
  }

  return {
    success: true,
    data: {
      player: {
        skin_texture: player.skin_texture,
        properties: player.properties,
      },
    },
  };
};

const decodeTexturesProperty = (property?: PlayerDbProperty): DecodedTextures | null => {
  if (!property) {
    return null;
  }

  let decoded: unknown;
  try {
    decoded = JSON.parse(atob(property.value)) as unknown;
  } catch (cause) {
    throw new FetchSkinError('invalid_response', { cause });
  }

  if (!isRecord(decoded)) {
    throw new FetchSkinError('invalid_response');
  }

  const textures = decoded.textures;
  if (textures === undefined) {
    return {};
  }
  if (!isRecord(textures)) {
    throw new FetchSkinError('invalid_response');
  }

  const skin = textures.SKIN;
  if (skin === undefined) {
    return { textures: {} };
  }
  if (!isRecord(skin)) {
    throw new FetchSkinError('invalid_response');
  }

  if (skin.url !== undefined && typeof skin.url !== 'string') {
    throw new FetchSkinError('invalid_response');
  }

  const metadata = skin.metadata;
  if (metadata !== undefined && !isRecord(metadata)) {
    throw new FetchSkinError('invalid_response');
  }
  if (isRecord(metadata) && metadata.model !== undefined && typeof metadata.model !== 'string') {
    throw new FetchSkinError('invalid_response');
  }

  return {
    textures: {
      SKIN: {
        url: skin.url,
        metadata: isRecord(metadata) && typeof metadata.model === 'string'
          ? { model: metadata.model }
          : undefined,
      },
    },
  };
};

const errorForHttpStatus = (status: number): FetchSkinError => {
  if (status === 404) {
    return new FetchSkinError('player_not_found', { status });
  }
  if (status === 429) {
    return new FetchSkinError('rate_limited', { status });
  }
  if (status >= 500) {
    return new FetchSkinError('service_unavailable', { status });
  }
  return new FetchSkinError('invalid_response', { status });
};

export default async function fetchSkin(username: string): Promise<FetchedSkin> {
  let profileRes: Response;
  try {
    profileRes = await fetch(
      `https://playerdb.co/api/player/minecraft/${encodeURIComponent(username)}`
    );
  } catch (cause) {
    throw new FetchSkinError('network_error', { cause });
  }

  if (!profileRes.ok) {
    throw errorForHttpStatus(profileRes.status);
  }

  let rawProfile: unknown;
  try {
    rawProfile = await profileRes.json() as unknown;
  } catch (cause) {
    throw new FetchSkinError('invalid_response', { status: profileRes.status, cause });
  }

  const profile = parsePlayerDbResponse(rawProfile);
  if (!profile.success) {
    throw new FetchSkinError('player_not_found', { status: profileRes.status });
  }

  const player = profile.data?.player;
  if (!player) {
    throw new FetchSkinError('invalid_response', { status: profileRes.status });
  }

  const texturesProperty = player.properties?.find((property) => property.name === 'textures');
  const decodedSkin = decodeTexturesProperty(texturesProperty)?.textures?.SKIN;
  const textureUrl = decodedSkin?.url ?? player.skin_texture;

  if (!textureUrl) {
    throw new FetchSkinError('skin_texture_missing', { status: profileRes.status });
  }

  return {
    texture: normalizeTextureUrl(textureUrl),
    model: decodedSkin?.metadata?.model === 'slim' ? 'slim' : 'classic',
  };
}
