export type FetchSkinResult = { ok: true; url: string } | { ok: false; error: string };

const cache = new Map<string, string>();

function sleep(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}

async function fetchWithTimeout(input: RequestInfo | URL, init: RequestInit & { timeout?: number } = {}): Promise<Response> {
  const { timeout = 8000, ...rest } = init;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    return await fetch(input, { ...rest, signal: controller.signal });
  } finally {
    clearTimeout(id);
  }
}

interface MojangProfile {
  id: string;
  name: string;
}

interface SessionProfileProperty {
  name: string;
  value: string;
}

interface MojangSessionProfile {
  properties: SessionProfileProperty[];
}

interface DecodedTextures {
  textures: {
    SKIN: {
      url: string;
    };
  };
}

async function getJson<T>(url: string, init?: RequestInit & { timeout?: number }): Promise<T> {
  const res = await fetchWithTimeout(url, { ...init });
  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }
  return res.json();
}

async function tryFetch<T>(fn: () => Promise<T>, retries = 1): Promise<T> {
  let lastErr: unknown;
  for (let i = 0; i <= retries; i++) {
    try {
      return await fn();
    } catch (err) {
      lastErr = err;
      if (i < retries) {
        await sleep(400 * (i + 1)); // simple backoff
        continue;
      }
    }
  }
  throw lastErr instanceof Error ? lastErr : new Error('Unknown error');
}

export default async function fetchSkin(username: string): Promise<FetchSkinResult> {
  const key = username.trim().toLowerCase();
  if (!key) {
    return { ok: false, error: 'Empty username' };
  }
  if (cache.has(key)) {
    return { ok: true, url: cache.get(key)! };
  }

  try {
    const profile = await tryFetch<MojangProfile>(() =>
      getJson<MojangProfile>(`https://api.mojang.com/users/profiles/minecraft/${encodeURIComponent(key)}`, { timeout: 5000 })
    );

    const sessionProfile = await tryFetch<MojangSessionProfile>(() =>
      getJson<MojangSessionProfile>(`https://sessionserver.mojang.com/session/minecraft/profile/${profile.id}`, { timeout: 5000 })
    );

    const texturesProp = sessionProfile.properties.find((p) => p.name === 'textures');
    if (!texturesProp) {
      return { ok: false, error: 'Skin texture not found' };
    }
    const decoded: DecodedTextures = JSON.parse(atob(texturesProp.value));
    const url = decoded.textures.SKIN?.url;
    if (!url) {
      return { ok: false, error: 'Skin URL missing' };
    }
    cache.set(key, url);
    return { ok: true, url };
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Unknown error';
    return { ok: false, error: msg };
  }
}
