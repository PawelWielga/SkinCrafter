import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import SkinCrafterEditor from './SkinCrafterEditor';
import type { SkinCrafterSkinModel } from './publicTypes';
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

async function flushAsyncUpdates(): Promise<void> {
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  });
}

describe('SkinCrafterEditor generation identity', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockedCombineTextures.mockReset();
    mockedCombineTextures.mockResolvedValue(EDITED_DATA_URL);
    loadImportedSkinMock.mockReset();
    loadImportedSkinMock.mockImplementation(async (_image: Blob, model: SkinCrafterSkinModel) => ({
      dataUrl: IMPORTED_DATA_URL,
      fingerprint: 'imported-bytes',
      model,
    }));
  });

  it('does not regenerate when another control activates an already-active visual layer', async () => {
    const image = new Blob(['skin'], { type: 'image/png' });
    const onSkinChange = vi.fn();

    render(
      <SkinCrafterEditor
        initialSkin={{ image, model: 'classic' }}
        onSkinChange={onSkinChange}
      />
    );

    await waitFor(() => expect(onSkinChange).toHaveBeenCalledTimes(1));
    expect(mockedCombineTextures).not.toHaveBeenCalled();

    fireEvent.click(screen.getByRole('button', { name: 'Human' }));

    await waitFor(() => expect(onSkinChange).toHaveBeenCalledTimes(2));
    expect(mockedCombineTextures).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByRole('button', { name: 'Male' }));
    await flushAsyncUpdates();

    expect(screen.getByRole('button', { name: 'Male' })).toHaveAttribute('aria-pressed', 'true');
    expect(mockedCombineTextures).toHaveBeenCalledTimes(1);
    expect(onSkinChange).toHaveBeenCalledTimes(2);
  });
});
