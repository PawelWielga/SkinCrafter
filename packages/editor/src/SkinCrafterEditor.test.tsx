import { useState } from 'react';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { defaultAppearance, normalizeTextureLayerOrder } from './data/appearance';
import SkinCrafterEditor from './SkinCrafterEditor';
import type {
  SkinCrafterError,
  SkinCrafterPersistenceAdapter,
  SkinCrafterSkinOutput,
  SkinCrafterState,
} from './publicTypes';
import combineTextures, { TextureLoadError } from './utils/combineTextures';

vi.mock('./components/three/three-preview', () => ({
  default: ({ onError }: { onError?: (error: SkinCrafterError) => void }) => (
    <button
      type="button"
      data-testid="three-preview"
      onClick={() => onError?.({
        code: 'preview_texture_load_failed',
        category: 'preview',
        message: 'Preview texture failed',
        assetUrl: '/preview.png',
      })}
    >
      preview
    </button>
  ),
}));

vi.mock('./utils/combineTextures', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./utils/combineTextures')>();
  return { ...actual, default: vi.fn() };
});

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
  let reject!: (reason?: unknown) => void;
  const promise = new Promise<T>((promiseResolve, promiseReject) => {
    resolve = promiseResolve;
    reject = promiseReject;
  });
  return { promise, resolve, reject };
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

  it('honors initial appearance supplied by a host', async () => {
    render(<SkinCrafterEditor initialSkin={{ appearance: { ...defaultAppearance, sex: 'Female' } }} />);
    expect(screen.getByRole('button', { name: 'Female' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByTestId('three-preview')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByTestId('skincrafter-editor')).toHaveAttribute(
        'data-skincrafter-generation-status',
        'ready'
      );
    });
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

  it('supports controlled state and reports edits to the host', async () => {
    const state = createState();
    const onStateChange = vi.fn();
    render(<SkinCrafterEditor value={state} onStateChange={onStateChange} />);
    await waitFor(() => {
      expect(screen.getByTestId('skincrafter-editor')).toHaveAttribute(
        'data-skincrafter-generation-status',
        'ready'
      );
    });
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

  it('keeps a successful generation ready when host notification callbacks throw', async () => {
    const callbackFailure = new Error('host callback failed');
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => undefined);
    const onError = vi.fn();
    const onSkinChange = vi.fn(() => {
      throw callbackFailure;
    });
    const onStatusChange = vi.fn((status: string) => {
      if (status === 'ready') throw callbackFailure;
    });

    render(
      <SkinCrafterEditor
        onSkinChange={onSkinChange}
        onStatusChange={onStatusChange}
        onError={onError}
      />
    );

    await waitFor(() => {
      expect(screen.getByTestId('skincrafter-editor')).toHaveAttribute(
        'data-skincrafter-generation-status',
        'ready'
      );
    });

    expect(onSkinChange).toHaveBeenCalledTimes(1);
    expect(onStatusChange.mock.calls.map(([status]) => status)).toEqual(['generating', 'ready']);
    expect(onError).not.toHaveBeenCalled();
    expect(screen.getByRole('button', { name: 'Download character skin' })).toBeEnabled();
    expect(consoleError).toHaveBeenCalledTimes(2);
    expect(consoleError).toHaveBeenCalledWith('SkinCrafter host callback failed', callbackFailure);

    consoleError.mockRestore();
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

  it('surfaces a generic composition rejection through status and error callbacks', async () => {
    const cause = new Error('canvas export failed');
    const onError = vi.fn();
    const onStatusChange = vi.fn();
    mockedCombineTextures.mockRejectedValueOnce(cause);

    render(
      <SkinCrafterEditor onError={onError} onStatusChange={onStatusChange} />
    );

    await waitFor(() => expect(onError).toHaveBeenCalledTimes(1));
    expect(onError).toHaveBeenCalledWith({
      code: 'generation_failed',
      category: 'generation',
      message: 'Failed to generate the current skin.',
      cause,
    });
    expect(onStatusChange.mock.calls.map(([status]) => status)).toEqual(['generating', 'error']);
    expect(screen.getByTestId('skincrafter-editor')).toHaveAttribute(
      'data-skincrafter-generation-status',
      'error'
    );
    expect(screen.getByRole('alert')).toHaveTextContent(
      'The skin could not be generated. Change the selection and try again.'
    );
  });

  it('invalidates the previous output immediately and cannot save it after the current asset fails', async () => {
    const failedGeneration = createDeferred<string>();
    mockedCombineTextures
      .mockResolvedValueOnce(DEFAULT_SKIN_DATA_URL)
      .mockImplementationOnce(() => failedGeneration.promise);
    const onSave = vi.fn();
    const onError = vi.fn();
    const onStatusChange = vi.fn();

    render(
      <SkinCrafterEditor
        onSave={onSave}
        onError={onError}
        onStatusChange={onStatusChange}
      />
    );

    const download = screen.getByRole('button', { name: 'Download character skin' });
    await waitFor(() => expect(download).toBeEnabled());

    fireEvent.click(screen.getByRole('button', { name: 'Bear' }));
    await waitFor(() => expect(download).toBeDisabled());
    expect(screen.getByTestId('skincrafter-editor')).not.toHaveAttribute(
      'data-skincrafter-generation-status',
      'ready'
    );

    const cause = new Error('404');
    const failure = new TextureLoadError('/missing-bear.png', cause);
    await act(async () => {
      failedGeneration.reject(failure);
      await failedGeneration.promise.catch(() => undefined);
    });

    await waitFor(() => expect(onError).toHaveBeenCalledTimes(1));
    expect(onError).toHaveBeenCalledWith({
      code: 'asset_load_failed',
      category: 'asset',
      message: 'Failed to load skin texture asset: /missing-bear.png',
      assetUrl: '/missing-bear.png',
      cause,
    });
    expect(download).toBeDisabled();
    fireEvent.click(download);
    expect(onSave).not.toHaveBeenCalled();
    expect(screen.getByRole('alert')).toHaveTextContent(
      'A skin texture could not be loaded. Check the selected assets and try again.'
    );
    expect(onStatusChange.mock.calls.at(-1)?.[0]).toBe('error');
  });

  it('ignores a stale generation failure after the newest state has become ready', async () => {
    const staleGeneration = createDeferred<string>();
    const newestGeneration = createDeferred<string>();
    mockedCombineTextures
      .mockResolvedValueOnce(DEFAULT_SKIN_DATA_URL)
      .mockImplementationOnce(() => staleGeneration.promise)
      .mockImplementationOnce(() => newestGeneration.promise);
    const onError = vi.fn();
    const onStatusChange = vi.fn();
    const outputs: SkinCrafterSkinOutput[] = [];

    render(
      <SkinCrafterEditor
        onSkinChange={(skin) => outputs.push(skin)}
        onError={onError}
        onStatusChange={onStatusChange}
      />
    );
    await waitFor(() => expect(outputs).toHaveLength(1));

    fireEvent.click(screen.getByRole('button', { name: 'Bear' }));
    await waitFor(() => expect(mockedCombineTextures).toHaveBeenCalledTimes(2));
    fireEvent.click(screen.getByRole('button', { name: 'Human' }));
    await waitFor(() => expect(mockedCombineTextures).toHaveBeenCalledTimes(3));

    await act(async () => {
      newestGeneration.resolve(NEW_SKIN_DATA_URL);
      await newestGeneration.promise;
    });
    await waitFor(() => {
      expect(screen.getByTestId('skincrafter-editor')).toHaveAttribute(
        'data-skincrafter-generation-status',
        'ready'
      );
    });

    await act(async () => {
      staleGeneration.reject(new Error('obsolete failure'));
      await staleGeneration.promise.catch(() => undefined);
    });
    await flushAsyncUpdates();

    expect(onError).not.toHaveBeenCalled();
    expect(onStatusChange.mock.calls.at(-1)?.[0]).toBe('ready');
    expect(outputs).toHaveLength(2);
    expect(outputs[1].dataUrl).toBe(NEW_SKIN_DATA_URL);
    expect(screen.getByRole('button', { name: 'Download character skin' })).toBeEnabled();
  });

  it('shows localized preview failures and forwards them without changing generation readiness', async () => {
    const onError = vi.fn();
    render(<SkinCrafterEditor locale="pl" onError={onError} />);

    await waitFor(() => {
      expect(screen.getByTestId('skincrafter-editor')).toHaveAttribute(
        'data-skincrafter-generation-status',
        'ready'
      );
    });

    fireEvent.click(screen.getByTestId('three-preview'));

    expect(onError).toHaveBeenCalledWith({
      code: 'preview_texture_load_failed',
      category: 'preview',
      message: 'Preview texture failed',
      assetUrl: '/preview.png',
    });
    expect(screen.getByRole('alert')).toHaveTextContent(
      'Nie udalo sie uruchomic podgladu 3D. Edycja i pobieranie skina moga nadal dzialac.'
    );
    expect(screen.getByTestId('skincrafter-editor')).toHaveAttribute(
      'data-skincrafter-generation-status',
      'ready'
    );
  });
});
