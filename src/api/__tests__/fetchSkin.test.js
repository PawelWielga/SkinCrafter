import fetchSkin from '../fetchSkin';

describe('fetchSkin', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
    if (!global.atob) {
      global.atob = (str) => Buffer.from(str, 'base64').toString('binary');
    }
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('resolves to skin url on success', async () => {
    const username = 'Steve';
    const skinUrl = 'https://example.com/skin.png';

    global.fetch
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve({ id: 'uuid123' })
      })
      .mockResolvedValueOnce({
        ok: true,
        json: () =>
          Promise.resolve({
            properties: [
              {
                name: 'textures',
                value: btoa(
                  JSON.stringify({ textures: { SKIN: { url: skinUrl } } })
                )
              }
            ]
          })
      });

    await expect(fetchSkin(username)).resolves.toBe(skinUrl);
  });

  it('throws when user not found', async () => {
    global.fetch.mockResolvedValueOnce({ ok: false });

    await expect(fetchSkin('unknown')).rejects.toThrow('User not found');
  });

  it('throws when session fetch fails', async () => {
    global.fetch
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve({ id: 'uuid123' })
      })
      .mockResolvedValueOnce({ ok: false });

    await expect(fetchSkin('Steve')).rejects.toThrow('Failed to fetch profile');
  });

  it('throws when texture missing', async () => {
    global.fetch
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve({ id: 'uuid123' })
      })
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve({ properties: [] })
      });

    await expect(fetchSkin('Steve')).rejects.toThrow('Skin texture not found');
  });
});
