import fetchSkin from '../fetchSkin';

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

  it('resolves to skin url on success', async () => {
    const username = 'Steve';
    const skinUrl = 'https://textures.minecraft.net/texture/skin123';

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () =>
        Promise.resolve({
          success: true,
          data: {
            player: {
              skin_texture: skinUrl,
            },
          },
        }),
    });

    await expect(fetchSkin(username)).resolves.toBe(skinUrl);
    expect(mockFetch).toHaveBeenCalledWith('https://playerdb.co/api/player/minecraft/Steve');
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

  it('falls back to decoded texture properties', async () => {
    const skinUrl = 'http://textures.minecraft.net/texture/skin123';

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
                  value: btoa(JSON.stringify({ textures: { SKIN: { url: skinUrl } } })),
                },
              ],
            },
          },
        }),
    });

    await expect(fetchSkin('Steve')).resolves.toBe('https://textures.minecraft.net/texture/skin123');
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
