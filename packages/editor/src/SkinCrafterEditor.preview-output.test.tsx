import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import SkinCrafterEditor from './SkinCrafterEditor';
import type { SkinCrafterSkinOutput } from './publicTypes';
import combineTextures from './utils/combineTextures';

vi.mock('./components/three/three-preview', () => ({
  default: ({ texture, model }: { texture: string | null; model?: string }) => (
    <div
      data-testid="three-preview"
      data-preview-texture={texture ?? ''}
      data-preview-model={model ?? ''}
    />
  ),
}));

vi.mock('./utils/combineTextures', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./utils/combineTextures')>();
  return { ...actual, default: vi.fn() };
});

const GENERATED_TEXTURE = 'data:image/png;base64,Z3JheXNjYWxlLXRpbnQ=';
const BASE_TEXTURE = 'data:image/png;base64,YmFzZS1za2lu';
const HOODIE_TEXTURE = 'data:image/png;base64,aG9vZGllLXNraW4=';
const NEWEST_TEXTURE = 'data:image/png;base64,bmV3ZXN0LXNraW4=';
const STALE_TEXTURE = 'data:image/png;base64,c3RhbGUtc2tpbg==';
const mockedCombineTextures = vi.mocked(combineTextures);

function createDeferred<T>() {
  let resolve!: (value: T) => void;
  let reject!: (reason?: unknown) => void;
  const promise = new Promise<T>((promiseResolve, promiseReject) => {
    resolve = promiseResolve;
    reject = promiseReject;
  });
  return { promise, resolve, reject };
}

describe('SkinCrafterEditor preview/output texture parity', () => {
  beforeEach(() => {
    mockedCombineTextures.mockReset();
  });

  it('sends the exact composed texture to both preview and exported output', async () => {
    const outputs: SkinCrafterSkinOutput[] = [];
    mockedCombineTextures.mockResolvedValue(GENERATED_TEXTURE);

    render(<SkinCrafterEditor onSkinChange={(skin) => outputs.push(skin)} />);

    await waitFor(() => expect(outputs).toHaveLength(1));
    expect(outputs[0].dataUrl).toBe(GENERATED_TEXTURE);
    expect(screen.getByTestId('three-preview')).toHaveAttribute(
      'data-preview-texture',
      GENERATED_TEXTURE
    );
  });

  it('keeps the last valid selected skin visible while a first-use wardrobe asset is loading', async () => {
    const firstWardrobeGeneration = createDeferred<string>();
    const outputs: SkinCrafterSkinOutput[] = [];
    mockedCombineTextures
      .mockResolvedValueOnce(BASE_TEXTURE)
      .mockImplementationOnce(() => firstWardrobeGeneration.promise);

    render(
      <SkinCrafterEditor
        initialSkin={{ appearance: { sex: 'Female' } }}
        onSkinChange={(skin) => outputs.push(skin)}
      />
    );

    await waitFor(() => expect(outputs).toHaveLength(1));
    expect(screen.getByTestId('three-preview')).toHaveAttribute('data-preview-texture', BASE_TEXTURE);
    expect(screen.getByTestId('three-preview')).toHaveAttribute('data-preview-model', 'slim');

    fireEvent.click(screen.getByRole('button', { name: 'Hoodie' }));
    await waitFor(() => expect(mockedCombineTextures).toHaveBeenCalledTimes(2));

    expect(screen.getByTestId('skincrafter-editor')).toHaveAttribute(
      'data-skincrafter-generation-status',
      'generating'
    );
    expect(screen.getByTestId('three-preview')).toHaveAttribute('data-preview-texture', BASE_TEXTURE);
    expect(screen.getByTestId('three-preview')).toHaveAttribute('data-preview-model', 'slim');
    expect(screen.getByRole('button', { name: 'Download character skin' })).toBeDisabled();

    await act(async () => {
      firstWardrobeGeneration.resolve(HOODIE_TEXTURE);
      await firstWardrobeGeneration.promise;
    });

    await waitFor(() => expect(outputs).toHaveLength(2));
    expect(outputs[1].dataUrl).toBe(HOODIE_TEXTURE);
    expect(screen.getByTestId('three-preview')).toHaveAttribute('data-preview-texture', HOODIE_TEXTURE);
    expect(screen.getByTestId('three-preview')).toHaveAttribute('data-preview-model', 'slim');
  });

  it('keeps preview stable across rapid cache-miss selections and ignores a stale completion', async () => {
    const staleWardrobeGeneration = createDeferred<string>();
    const newestWardrobeGeneration = createDeferred<string>();
    const outputs: SkinCrafterSkinOutput[] = [];
    mockedCombineTextures
      .mockResolvedValueOnce(BASE_TEXTURE)
      .mockImplementationOnce(() => staleWardrobeGeneration.promise)
      .mockImplementationOnce(() => newestWardrobeGeneration.promise);

    render(<SkinCrafterEditor onSkinChange={(skin) => outputs.push(skin)} />);

    await waitFor(() => expect(outputs).toHaveLength(1));
    expect(screen.getByTestId('three-preview')).toHaveAttribute('data-preview-texture', BASE_TEXTURE);

    fireEvent.click(screen.getByRole('button', { name: 'Hoodie' }));
    await waitFor(() => expect(mockedCombineTextures).toHaveBeenCalledTimes(2));
    expect(screen.getByTestId('three-preview')).toHaveAttribute('data-preview-texture', BASE_TEXTURE);

    fireEvent.click(screen.getByRole('button', { name: 'Duck' }));
    await waitFor(() => expect(mockedCombineTextures).toHaveBeenCalledTimes(3));
    expect(screen.getByTestId('three-preview')).toHaveAttribute('data-preview-texture', BASE_TEXTURE);

    await act(async () => {
      newestWardrobeGeneration.resolve(NEWEST_TEXTURE);
      await newestWardrobeGeneration.promise;
    });

    await waitFor(() => expect(outputs).toHaveLength(2));
    expect(outputs[1].dataUrl).toBe(NEWEST_TEXTURE);
    expect(screen.getByTestId('three-preview')).toHaveAttribute('data-preview-texture', NEWEST_TEXTURE);

    await act(async () => {
      staleWardrobeGeneration.resolve(STALE_TEXTURE);
      await staleWardrobeGeneration.promise;
    });

    expect(outputs).toHaveLength(2);
    expect(screen.getByTestId('three-preview')).toHaveAttribute('data-preview-texture', NEWEST_TEXTURE);
  });
});
