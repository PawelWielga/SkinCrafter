import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import SkinCrafterEditor from './SkinCrafterEditor';
import {
  defaultAppearance,
  normalizeTextureLayerOrder,
  normalizeWardrobeColors,
} from './data/appearance';
import type { SkinCrafterSkinOutput, SkinCrafterState } from './publicTypes';
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

function createControlledState(): SkinCrafterState {
  return {
    appearance: { ...defaultAppearance, shirt: 'Hoodie' },
    layerOrder: [...normalizeTextureLayerOrder(null)],
    wardrobeColors: normalizeWardrobeColors(undefined),
  };
}

async function flushAsyncUpdates(): Promise<void> {
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  });
}

describe('SkinCrafterEditor controlled imported wardrobe colors', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockedCombineTextures.mockReset();
    loadImportedSkinMock.mockReset();
    mockedCombineTextures.mockResolvedValue(EDITED_DATA_URL);
    loadImportedSkinMock.mockResolvedValue({
      dataUrl: IMPORTED_DATA_URL,
      fingerprint: 'imported-bytes',
      model: 'classic',
    });
  });

  it('waits for the controlled value to accept a wardrobe color before composing over an import', async () => {
    const image = new Blob(['skin'], { type: 'image/png' });
    const outputs: SkinCrafterSkinOutput[] = [];
    const onStateChange = vi.fn();
    const state = createControlledState();

    const { rerender } = render(
      <SkinCrafterEditor
        initialSkin={{ image, model: 'classic' }}
        value={state}
        onStateChange={onStateChange}
        onSkinChange={(skin) => outputs.push(skin)}
      />
    );

    await waitFor(() => expect(outputs).toHaveLength(1));
    expect(outputs[0].dataUrl).toBe(IMPORTED_DATA_URL);
    expect(mockedCombineTextures).not.toHaveBeenCalled();

    fireEvent.click(screen.getByRole('button', { name: /#A33A3A/ }));

    expect(onStateChange).toHaveBeenCalledTimes(1);
    const nextState = onStateChange.mock.calls[0][0] as SkinCrafterState;
    expect(nextState.wardrobeColors?.shirt?.Hoodie?.primary).toBe('#A33A3A');

    await flushAsyncUpdates();
    expect(mockedCombineTextures).not.toHaveBeenCalled();
    expect(outputs).toHaveLength(1);

    rerender(
      <SkinCrafterEditor
        initialSkin={{ image, model: 'classic' }}
        value={nextState}
        onStateChange={onStateChange}
        onSkinChange={(skin) => outputs.push(skin)}
      />
    );

    await waitFor(() => expect(mockedCombineTextures).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(outputs).toHaveLength(2));

    expect(mockedCombineTextures.mock.calls[0][0]).toEqual([
      IMPORTED_DATA_URL,
      {
        url: expect.stringContaining('hoodie'),
        role: 'tintable',
        tint: '#A33A3A',
      },
    ]);
    expect(outputs[1].metadata.wardrobeColors.shirt?.Hoodie?.primary).toBe('#A33A3A');

    fireEvent.click(screen.getByRole('button', { name: /#4A6FA5/ }));

    expect(onStateChange).toHaveBeenCalledTimes(2);
    const baselineColorState = onStateChange.mock.calls[1][0] as SkinCrafterState;
    expect(baselineColorState.wardrobeColors?.shirt?.Hoodie?.primary).toBe('#4A6FA5');

    rerender(
      <SkinCrafterEditor
        initialSkin={{ image, model: 'classic' }}
        value={baselineColorState}
        onStateChange={onStateChange}
        onSkinChange={(skin) => outputs.push(skin)}
      />
    );

    await waitFor(() => expect(mockedCombineTextures).toHaveBeenCalledTimes(2));
    await waitFor(() => expect(outputs).toHaveLength(3));
    expect(mockedCombineTextures.mock.calls[1][0]).toEqual([
      IMPORTED_DATA_URL,
      {
        url: expect.stringContaining('hoodie'),
        role: 'tintable',
        tint: '#4A6FA5',
      },
    ]);
    expect(outputs[2].dataUrl).toBe(EDITED_DATA_URL);
    expect(outputs[2].metadata.wardrobeColors.shirt?.Hoodie?.primary).toBe('#4A6FA5');
  });
});
