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
    const skinUrl = 'https://example.com/skin.png';

    mockFetch
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve({ id: 'uuid123' }),
      })
      .mockResolvedValueOnce({
        ok: true,
        json: () =>
          Promise.resolve({
            properties: [
              {
                name: 'textures',
                value: btoa(JSON.stringify({ textures: { SKIN: { url: skinUrl } } })),
              },
            ],
          }),
      });

    await expect(fetchSkin(username)).resolves.toBe(skinUrl);
  });

  it('throws when user not found', async () => {
    mockFetch.mockResolvedValueOnce({ ok: false });

    await expect(fetchSkin('unknown')).rejects.toThrow('User not found');
  });

  it('throws when session fetch fails', async () => {
    mockFetch
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve({ id: 'uuid123' }),
      })
      .mockResolvedValueOnce({ ok: false });

    await expect(fetchSkin('Steve')).rejects.toThrow('Failed to fetch profile');
  });

  it('throws when texture missing', async () => {
    mockFetch
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve({ id: 'uuid123' }),
      })
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve({ properties: [] }),
      });

    await expect(fetchSkin('Steve')).rejects.toThrow('Skin texture not found');
  });
});
