import { useState } from 'react';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { defaultAppearance, normalizeTextureLayerOrder } from './data/appearance';
import SkinCrafterEditor from './SkinCrafterEditor';
import type { SkinCrafterPersistenceAdapter, SkinCrafterSkinOutput, SkinCrafterState } from './publicTypes';
import combineTextures from './utils/combineTextures';

vi.mock('./components/three/three-preview', () => ({
  default: () => <div data-testid="three-preview" />,
}));

vi.mock('./utils/combineTextures', () => ({
  default: vi.fn(),
}));

const DEFAULT_SKIN_DATA_URL = 'data:image/png;base64,aGVsbG8=';
const NEW_SKIN_DATA_URL = 'data:image/png;base64,bmV3';
const STALE_SKIN_DATA_URL = 'data:image/png;base64,b2xk';
const mockedCombineTextures = vi.mocked(combineTextures);

function createState(): SkinCrafterState {
  return {
    appearance: { ...defaultAppearance },
    layerOrder: [...normalizeTextureLayerOrder(null)],
  };
}

function createDeferred<T>() {
  let resolve!: (value: T) => void;
  const promise = new Promise<T>((promiseResolve) => {
    resolve = promiseResolve;
  });
  return { promise, resolve };
}

async function flushAsyncUpdates(): Promise<void> {
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  });
}

describe('SkinCrafterEditor public contract', () => {
  beforeEach(() => {
    mockedCombineTextures.mockReset();
    mockedCombineTextures.mockResolvedValue(DEFAULT_SKIN_DATA_URL);
  });

  it('honors initial appearance supplied by a host', () => {
    render(<SkinCrafterEditor initialSkin={{ appearance: { ...defaultAppearance, sex: 'Female' } }} />);
    expect(screen.getByRole('button', { name: 'Female' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByTestId('three-preview')).toBeInTheDocument();
  });

  it('emits upload-ready Blob/File data when the skin changes', async () => {
    const outputs: SkinCrafterSkinOutput[] = [];
    render(<SkinCrafterEditor onSkinChange={(skin) => outputs.push(skin)} />);
    await waitFor(() => expect(outputs).toHaveLength(1));
    expect(outputs[0].blob).toBeInstanceOf(Blob);
    expect(outputs[0].file).toBeInstanceOf(File);
    expect(outputs[0].file.name).toBe('skincrafter-skin.png');
    expect(outputs[0].metadata.mimeType).toBe('image/png');
    expect(outputs[0].metadata.width).toBe(64);
  });

  it('uses a host persistence adapter without owning localStorage', async () => {
    const saved: SkinCrafterState[] = [];
    const persistence: SkinCrafterPersistenceAdapter = {
      load: () => ({ appearance: { ...defaultAppearance, hat: 'Duck' } }),
      save: (state) => saved.push(state),
    };
    render(<SkinCrafterEditor persistence={persistence} />);
    expect(screen.getByRole('button', { name: 'Duck' })).toHaveAttribute('aria-pressed', 'true');
    await waitFor(() => expect(saved.length).toBeGreaterThan(0));
  });

  it('supports controlled state and reports edits to the host', () => {
    const state = createState();
    const onStateChange = vi.fn();
    render(<SkinCrafterEditor value={state} onStateChange={onStateChange} />);
    fireEvent.click(screen.getByRole('button', { name: 'Bear' }));
    expect(onStateChange).toHaveBeenCalledWith(
      expect.objectContaining({ appearance: expect.objectContaining({ race: 'Bear' }) })
    );
  });

  it('stabilizes composition when an inline onSkinChange callback updates host state', async () => {
    function Host() {
      const [skin, setSkin] = useState<SkinCrafterSkinOutput | null>(null);
      return (
        <>
          <div data-testid="host-skin-state">{skin ? 'ready' : 'pending'}</div>
          <SkinCrafterEditor
            onSkinChange={(nextSkin) => setSkin((currentSkin) => currentSkin ?? nextSkin)}
          />
        </>
      );
    }

    render(<Host />);

    await waitFor(() => expect(screen.getByTestId('host-skin-state')).toHaveTextContent('ready'));
    await flushAsyncUpdates();

    expect(mockedCombineTextures).toHaveBeenCalledTimes(1);
  });

  it('uses the latest onSkinChange callback without recomposing an unchanged skin', async () => {
    const generation = createDeferred<string>();
    mockedCombineTextures.mockImplementationOnce(() => generation.promise);
    const firstCallback = vi.fn();
    const latestCallback = vi.fn();

    const { rerender } = render(<SkinCrafterEditor onSkinChange={firstCallback} />);
    await waitFor(() => expect(mockedCombineTextures).toHaveBeenCalledTimes(1));

    rerender(<SkinCrafterEditor onSkinChange={latestCallback} />);
    await flushAsyncUpdates();
    expect(mockedCombineTextures).toHaveBeenCalledTimes(1);

    await act(async () => {
      generation.resolve(DEFAULT_SKIN_DATA_URL);
      await generation.promise;
    });

    await waitFor(() => expect(latestCallback).toHaveBeenCalledTimes(1));
    expect(firstCallback).not.toHaveBeenCalled();
    expect(mockedCombineTextures).toHaveBeenCalledTimes(1);
  });

  it('does not recompose semantically equal controlled state with a new object identity', async () => {
    const onSkinChange = vi.fn();
    const { rerender } = render(<SkinCrafterEditor value={createState()} onSkinChange={onSkinChange} />);

    await waitFor(() => expect(onSkinChange).toHaveBeenCalledTimes(1));
    expect(mockedCombineTextures).toHaveBeenCalledTimes(1);

    rerender(<SkinCrafterEditor value={createState()} onSkinChange={onSkinChange} />);
    await flushAsyncUpdates();

    expect(mockedCombineTextures).toHaveBeenCalledTimes(1);
    expect(onSkinChange).toHaveBeenCalledTimes(1);
  });

  it('recomposes and emits matching metadata when appearance really changes', async () => {
    const outputs: SkinCrafterSkinOutput[] = [];
    render(<SkinCrafterEditor onSkinChange={(skin) => outputs.push(skin)} />);

    await waitFor(() => expect(outputs).toHaveLength(1));
    fireEvent.click(screen.getByRole('button', { name: 'Bear' }));

    await waitFor(() => expect(outputs).toHaveLength(2));
    expect(mockedCombineTextures).toHaveBeenCalledTimes(2);
    expect(outputs[1].metadata.appearance.race).toBe('Bear');
    expect(outputs[1].dataUrl).toBe(DEFAULT_SKIN_DATA_URL);
  });

  it('ignores stale async generations and keeps output metadata tied to the winning snapshot', async () => {
    const staleGeneration = createDeferred<string>();
    const newestGeneration = createDeferred<string>();
    mockedCombineTextures
      .mockResolvedValueOnce(DEFAULT_SKIN_DATA_URL)
      .mockImplementationOnce(() => staleGeneration.promise)
      .mockImplementationOnce(() => newestGeneration.promise);
    const outputs: SkinCrafterSkinOutput[] = [];

    render(<SkinCrafterEditor onSkinChange={(skin) => outputs.push(skin)} />);
    await waitFor(() => expect(outputs).toHaveLength(1));

    fireEvent.click(screen.getByRole('button', { name: 'Bear' }));
    await waitFor(() => expect(mockedCombineTextures).toHaveBeenCalledTimes(2));

    fireEvent.click(screen.getByRole('button', { name: 'Human' }));
    await waitFor(() => expect(mockedCombineTextures).toHaveBeenCalledTimes(3));

    await act(async () => {
      newestGeneration.resolve(NEW_SKIN_DATA_URL);
      await newestGeneration.promise;
    });
    await waitFor(() => expect(outputs).toHaveLength(2));

    await act(async () => {
      staleGeneration.resolve(STALE_SKIN_DATA_URL);
      await staleGeneration.promise;
    });
    await flushAsyncUpdates();

    expect(outputs).toHaveLength(2);
    expect(outputs[1].dataUrl).toBe(NEW_SKIN_DATA_URL);
    expect(outputs[1].metadata.appearance.race).toBe('Human');
    expect(outputs[1].metadata.layerOrder).toEqual(normalizeTextureLayerOrder(null));
  });
});
