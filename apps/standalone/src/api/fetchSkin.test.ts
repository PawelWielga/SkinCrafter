import fetchSkin from './fetchSkin';

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

  it('throws when user not found', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ success: false }),
    });

    await expect(fetchSkin('unknown')).rejects.toThrow('User not found');
  });

  it('throws when profile fetch fails', async () => {
    mockFetch.mockResolvedValueOnce({ ok: false });

    await expect(fetchSkin('Steve')).rejects.toThrow('User not found');
  });

  it('throws when texture missing', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
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

    await expect(fetchSkin('Steve')).rejects.toThrow('Skin texture not found');
  });
});
