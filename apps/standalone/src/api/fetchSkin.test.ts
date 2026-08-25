import fetchSkin, { FetchSkinError } from './fetchSkin';

describe('fetchSkin', () => {
  let mockFetch: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    mockFetch = vi.fn();
    globalThis.fetch = mockFetch as unknown as typeof fetch;
    if (!globalThis.atob) {
      globalThis.atob = (str: string) => Buffer.from(str, 'base64').toString('binary');
    }
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('returns the direct skin texture as a classic model when metadata is unavailable', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: () =>
        Promise.resolve({
          success: true,
          data: {
            player: {
              skin_texture: 'http://textures.minecraft.net/texture/skin123',
            },
          },
        }),
    });

    await expect(fetchSkin('Steve')).resolves.toEqual({
      texture: 'https://textures.minecraft.net/texture/skin123',
      model: 'classic',
    });
    expect(mockFetch).toHaveBeenCalledWith('https://playerdb.co/api/player/minecraft/Steve');
  });

  it('returns a slim model from Mojang texture metadata', async () => {
    const skinUrl = 'http://textures.minecraft.net/texture/alex123';

    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: () =>
        Promise.resolve({
          success: true,
          data: {
            player: {
              properties: [
                {
                  name: 'textures',
                  value: btoa(
                    JSON.stringify({
                      textures: {
                        SKIN: {
                          url: skinUrl,
                          metadata: { model: 'slim' },
                        },
                      },
                    })
                  ),
                },
              ],
            },
          },
        }),
    });

    await expect(fetchSkin('Alex')).resolves.toEqual({
      texture: 'https://textures.minecraft.net/texture/alex123',
      model: 'slim',
    });
  });

  it('treats decoded skin metadata without slim as classic', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: () =>
        Promise.resolve({
          success: true,
          data: {
            player: {
              properties: [
                {
                  name: 'textures',
                  value: btoa(
                    JSON.stringify({
                      textures: {
                        SKIN: {
                          url: 'https://textures.minecraft.net/texture/classic123',
                        },
                      },
                    })
                  ),
                },
              ],
            },
          },
        }),
    });

    await expect(fetchSkin('Steve')).resolves.toEqual({
      texture: 'https://textures.minecraft.net/texture/classic123',
      model: 'classic',
    });
  });

  it('reads model metadata even when player.skin_texture is also present', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: () =>
        Promise.resolve({
          success: true,
          data: {
            player: {
              skin_texture: 'https://textures.minecraft.net/texture/fallback123',
              properties: [
                {
                  name: 'textures',
                  value: btoa(
                    JSON.stringify({
                      textures: {
                        SKIN: {
                          url: 'http://textures.minecraft.net/texture/authoritative123',
                          metadata: { model: 'slim' },
                        },
                      },
                    })
                  ),
                },
              ],
            },
          },
        }),
    });

    await expect(fetchSkin('Alex')).resolves.toEqual({
      texture: 'https://textures.minecraft.net/texture/authoritative123',
      model: 'slim',
    });
  });

  it('uses player.skin_texture as a URL fallback without losing decoded model metadata', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: () =>
        Promise.resolve({
          success: true,
          data: {
            player: {
              skin_texture: 'http://textures.minecraft.net/texture/fallback123',
              properties: [
                {
                  name: 'textures',
                  value: btoa(
                    JSON.stringify({
                      textures: {
                        SKIN: {
                          metadata: { model: 'slim' },
                        },
                      },
                    })
                  ),
                },
              ],
            },
          },
        }),
    });

    await expect(fetchSkin('Alex')).resolves.toEqual({
      texture: 'https://textures.minecraft.net/texture/fallback123',
      model: 'slim',
    });
  });

  it('classifies HTTP 404 as player_not_found', async () => {
    mockFetch.mockResolvedValueOnce({ ok: false, status: 404 });

    await expect(fetchSkin('MissingPlayer')).rejects.toMatchObject({
      code: 'player_not_found',
      status: 404,
    });
  });

  it('classifies an authoritative success=false payload as player_not_found', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: () => Promise.resolve({ success: false }),
    });

    await expect(fetchSkin('unknown')).rejects.toMatchObject({
      code: 'player_not_found',
      status: 200,
    });
  });

  it('classifies HTTP 429 as rate_limited', async () => {
    mockFetch.mockResolvedValueOnce({ ok: false, status: 429 });

    await expect(fetchSkin('Steve')).rejects.toMatchObject({
      code: 'rate_limited',
      status: 429,
    });
  });

  it.each([500, 503])('classifies HTTP %s as service_unavailable', async (status) => {
    mockFetch.mockResolvedValueOnce({ ok: false, status });

    await expect(fetchSkin('Steve')).rejects.toMatchObject({
      code: 'service_unavailable',
      status,
    });
  });

  it('classifies fetch rejection as network_error and preserves the cause', async () => {
    const cause = new TypeError('Failed to fetch');
    mockFetch.mockRejectedValueOnce(cause);

    await expect(fetchSkin('Steve')).rejects.toMatchObject({
      code: 'network_error',
      cause,
    });
  });

  it('classifies invalid JSON as invalid_response and preserves the parser failure', async () => {
    const cause = new SyntaxError('Unexpected token');
    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: () => Promise.reject(cause),
    });

    await expect(fetchSkin('Steve')).rejects.toMatchObject({
      code: 'invalid_response',
      status: 200,
      cause,
    });
  });

  it('classifies an unexpected success payload as invalid_response', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: () => Promise.resolve({ success: true, data: {} }),
    });

    await expect(fetchSkin('Steve')).rejects.toMatchObject({
      code: 'invalid_response',
    });
  });

  it('classifies a malformed textures property as invalid_response', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: () =>
        Promise.resolve({
          success: true,
          data: {
            player: {
              skin_texture: 'https://textures.minecraft.net/texture/fallback123',
              properties: [{ name: 'textures', value: 'not-json-base64' }],
            },
          },
        }),
    });

    const error = await fetchSkin('Steve').catch((cause: unknown) => cause);
    expect(error).toBeInstanceOf(FetchSkinError);
    expect(error).toMatchObject({ code: 'invalid_response' });
  });

  it('classifies a successful profile without a skin texture as skin_texture_missing', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: () =>
        Promise.resolve({
          success: true,
          data: {
            player: {
              properties: [],
            },
          },
        }),
    });

    await expect(fetchSkin('Steve')).rejects.toMatchObject({
      code: 'skin_texture_missing',
      status: 200,
    });
  });

  it.each([
    ['malformed', 'not a URL'],
    ['data', 'data:image/png;base64,AAAA'],
    ['blob', 'blob:https://textures.minecraft.net/skin123'],
    ['file', 'file:///tmp/skin.png'],
    ['unexpected host', 'https://example.com/texture/skin123'],
    ['lookalike host', 'https://textures.minecraft.net.example.com/texture/skin123'],
    ['custom port', 'https://textures.minecraft.net:444/texture/skin123'],
    ['credentials', 'https://user:password@textures.minecraft.net/texture/skin123'],
  ])('classifies a %s texture URL as invalid_response', async (_caseName, textureUrl) => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: () =>
        Promise.resolve({
          success: true,
          data: {
            player: {
              skin_texture: textureUrl,
            },
          },
        }),
    });

    const error = await fetchSkin('Steve').catch((cause: unknown) => cause);
    expect(error).toBeInstanceOf(FetchSkinError);
    expect(error).toMatchObject({
      code: 'invalid_response',
      status: 200,
    });
  });

  it('rejects an invalid decoded texture URL instead of falling back to player.skin_texture', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: () =>
        Promise.resolve({
          success: true,
          data: {
            player: {
              skin_texture: 'https://textures.minecraft.net/texture/fallback123',
              properties: [
                {
                  name: 'textures',
                  value: btoa(
                    JSON.stringify({
                      textures: {
                        SKIN: {
                          url: 'https://example.com/texture/authoritative123',
                          metadata: { model: 'slim' },
                        },
                      },
                    })
                  ),
                },
              ],
            },
          },
        }),
    });

    await expect(fetchSkin('Alex')).rejects.toMatchObject({
      code: 'invalid_response',
      status: 200,
    });
  });
});
