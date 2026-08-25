import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { defaultAppearance } from './data/appearance';
import SkinCrafterEditor from './SkinCrafterEditor';
import type { SkinCrafterSkinModel, SkinCrafterSkinOutput } from './publicTypes';
import combineTextures from './utils/combineTextures';

const { loadImportedSkinMock } = vi.hoisted(() => ({
  loadImportedSkinMock: vi.fn(),
}));

vi.mock('./importedSkin', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./importedSkin')>();
  return { ...actual, loadImportedSkin: loadImportedSkinMock };
});

vi.mock('./components/three/three-preview', () => ({
  default: ({ texture, model }: { texture: string | null; model: SkinCrafterSkinModel }) => (
    <div data-testid="three-preview" data-texture={texture ?? ''} data-model={model} />
  ),
}));

vi.mock('./utils/combineTextures', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./utils/combineTextures')>();
  return { ...actual, default: vi.fn() };
});

const IMPORTED_DATA_URL = 'data:image/png;base64,aW1wb3J0ZWQ=';
const EDITED_DATA_URL = 'data:image/png;base64,ZWRpdGVk';
const mockedCombineTextures = vi.mocked(combineTextures);

describe('SkinCrafterEditor race model compatibility', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    loadImportedSkinMock.mockReset();
    mockedCombineTextures.mockReset();
    mockedCombineTextures.mockResolvedValue(EDITED_DATA_URL);
    loadImportedSkinMock.mockImplementation(async (_image: Blob, model: SkinCrafterSkinModel) => ({
      dataUrl: IMPORTED_DATA_URL,
      fingerprint: 'imported-bytes',
      model,
    }));
  });

  it('keeps an imported Slim skin on the Slim Human atlas and hides Classic-only races', async () => {
    const outputs: SkinCrafterSkinOutput[] = [];

    render(
      <SkinCrafterEditor
        initialSkin={{ image: new Blob(['slim'], { type: 'image/png' }), model: 'slim' }}
        assetBaseUrl="/assets"
        onSkinChange={(skin) => outputs.push(skin)}
      />
    );

    await waitFor(() => expect(outputs).toHaveLength(1));
    expect(mockedCombineTextures).not.toHaveBeenCalled();
    expect(screen.getByRole('button', { name: 'Human' })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Bear' })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Orc' })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Zombie' })).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Human' }));

    await waitFor(() => expect(outputs).toHaveLength(2));
    expect(mockedCombineTextures).toHaveBeenCalledTimes(1);
    expect(mockedCombineTextures.mock.calls[0][0]).toEqual([
      IMPORTED_DATA_URL,
      {
        url: '/assets/textures/race/human/female.tintable.png',
        role: 'tintable',
        tint: defaultAppearance.skinColor,
      },
      {
        url: '/assets/textures/race/human/female.fixed.png',
        role: 'fixed',
      },
    ]);
    expect(outputs[1].metadata.model).toBe('slim');
    expect(outputs[1].metadata.appearance.race).toBe('Human');
  });

  it('still lets an imported Classic skin switch to a Classic-only race', async () => {
    const outputs: SkinCrafterSkinOutput[] = [];

    render(
      <SkinCrafterEditor
        initialSkin={{ image: new Blob(['classic'], { type: 'image/png' }), model: 'classic' }}
        assetBaseUrl="/assets"
        onSkinChange={(skin) => outputs.push(skin)}
      />
    );

    await waitFor(() => expect(outputs).toHaveLength(1));
    expect(screen.getByRole('button', { name: 'Bear' })).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Bear' }));

    await waitFor(() => expect(outputs).toHaveLength(2));
    expect(mockedCombineTextures).toHaveBeenCalledTimes(1);
    expect(mockedCombineTextures.mock.calls[0][0]).toEqual([
      IMPORTED_DATA_URL,
      { url: '/assets/textures/race/bear/male.fixed.png', role: 'fixed' },
    ]);
    expect(outputs[1].metadata.model).toBe('classic');
    expect(outputs[1].metadata.appearance.race).toBe('Bear');
  });
});
