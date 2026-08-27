import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import SkinCrafterEditor from './SkinCrafterEditor';
import combineTextures from './utils/combineTextures';

const { loadImportedSkinMock } = vi.hoisted(() => ({
  loadImportedSkinMock: vi.fn(),
}));

vi.mock('./importedSkin', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./importedSkin')>();
  return { ...actual, loadImportedSkin: loadImportedSkinMock };
});

vi.mock('./components/three/three-preview', () => ({
  default: () => <div data-testid="three-preview" />,
}));

vi.mock('./utils/combineTextures', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./utils/combineTextures')>();
  return { ...actual, default: vi.fn() };
});

const IMPORTED_DATA_URL = 'data:image/png;base64,aW1wb3J0ZWQ=';
const EDITED_DATA_URL = 'data:image/png;base64,ZWRpdGVk';
const mockedCombineTextures = vi.mocked(combineTextures);

async function renderImportedEditor(): Promise<void> {
  render(
    <SkinCrafterEditor
      initialSkin={{
        image: new Blob(['skin'], { type: 'image/png' }),
        model: 'classic',
      }}
    />
  );
  await waitFor(() => expect(loadImportedSkinMock).toHaveBeenCalledTimes(1));
  await waitFor(() => expect(screen.getByRole('button', { name: 'Download character skin' })).toBeEnabled());
  expect(mockedCombineTextures).not.toHaveBeenCalled();
}

describe('imported skin visual layer ownership', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockedCombineTextures.mockReset();
    mockedCombineTextures.mockResolvedValue(EDITED_DATA_URL);
    loadImportedSkinMock.mockReset();
    loadImportedSkinMock.mockResolvedValue({
      dataUrl: IMPORTED_DATA_URL,
      fingerprint: 'imported-bytes',
      model: 'classic',
    });
  });

  it('activates the complete eyes visual layer when only eye color changes', async () => {
    await renderImportedEditor();

    fireEvent.click(screen.getByRole('button', { name: 'Eye Color: #2F8F4E' }));

    await waitFor(() => expect(mockedCombineTextures).toHaveBeenCalledTimes(1));
    expect(mockedCombineTextures.mock.calls[0][0]).toEqual([
      IMPORTED_DATA_URL,
      expect.objectContaining({
        url: expect.stringContaining('/textures/eyes/clasic.tintable.png'),
        role: 'tintable',
        tint: '#2F8F4E',
      }),
      expect.objectContaining({
        url: expect.stringContaining('/textures/eyes/clasic.fixed.png'),
        role: 'fixed',
      }),
    ]);
  });

  it('activates the complete race visual layer when only skin color changes', async () => {
    await renderImportedEditor();

    fireEvent.click(screen.getByRole('button', { name: 'Skin Color: #E0AC69' }));

    await waitFor(() => expect(mockedCombineTextures).toHaveBeenCalledTimes(1));
    expect(mockedCombineTextures.mock.calls[0][0]).toEqual([
      IMPORTED_DATA_URL,
      expect.objectContaining({
        url: expect.stringContaining('/textures/race/human/male.tintable.png'),
        role: 'tintable',
        tint: '#E0AC69',
      }),
      expect.objectContaining({
        url: expect.stringContaining('/textures/race/human/male.fixed.png'),
        role: 'fixed',
      }),
    ]);
  });

  it('activates the race owner layer and slim atlas when sex changes', async () => {
    await renderImportedEditor();

    fireEvent.click(screen.getByRole('button', { name: 'Female' }));

    await waitFor(() => expect(mockedCombineTextures).toHaveBeenCalledTimes(1));
    expect(mockedCombineTextures.mock.calls[0][0]).toEqual([
      IMPORTED_DATA_URL,
      expect.objectContaining({
        url: expect.stringContaining('/textures/race/human/female.tintable.png'),
        role: 'tintable',
      }),
      expect.objectContaining({
        url: expect.stringContaining('/textures/race/human/female.fixed.png'),
        role: 'fixed',
      }),
    ]);
  });
});
