import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { useState } from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { defaultAppearance, normalizeTextureLayerOrder } from './data/appearance';
import { InvalidInitialSkinError } from './importedSkin';
import SkinCrafterEditor from './SkinCrafterEditor';
import type {
  SkinCrafterSkinModel,
  SkinCrafterSkinOutput,
  SkinCrafterState,
} from './publicTypes';
import combineTextures from './utils/combineTextures';

const { loadImportedSkinMock, previewPropsMock } = vi.hoisted(() => ({
  loadImportedSkinMock: vi.fn(),
  previewPropsMock: vi.fn(),
}));

vi.mock('./importedSkin', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./importedSkin')>();
  return { ...actual, loadImportedSkin: loadImportedSkinMock };
});

vi.mock('./components/three/three-preview', () => ({
  default: ({ texture, model }: { texture: string | null; model: SkinCrafterSkinModel }) => {
    previewPropsMock({ texture, model });
    return <div data-testid="three-preview" data-texture={texture ?? ''} data-model={model} />;
  },
}));

vi.mock('./utils/combineTextures', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./utils/combineTextures')>();
  return { ...actual, default: vi.fn() };
});

const IMPORTED_DATA_URL = 'data:image/png;base64,aW1wb3J0ZWQ=';
const SECOND_IMPORTED_DATA_URL = 'data:image/png;base64,c2Vjb25k';
const EDITED_DATA_URL = 'data:image/png;base64,ZWRpdGVk';
const GENERATED_DATA_URL = 'data:image/png;base64,Z2VuZXJhdGVk';
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

describe('SkinCrafterEditor imported skin contract', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockedCombineTextures.mockReset();
    loadImportedSkinMock.mockReset();
    mockedCombineTextures.mockResolvedValue(GENERATED_DATA_URL);
    loadImportedSkinMock.mockImplementation(async (_image: Blob, model: SkinCrafterSkinModel) => ({
      dataUrl: IMPORTED_DATA_URL,
      fingerprint: 'same-bytes',
      model,
    }));
  });

  it.each(['classic', 'slim'] as const)(
    'uses an imported 64x64 PNG unchanged as the initial %s output and preview',
    async (model) => {
      const image = new Blob(['skin'], { type: 'image/png' });
      const outputs: SkinCrafterSkinOutput[] = [];

      render(
        <SkinCrafterEditor
          initialSkin={{ image, model }}
          onSkinChange={(skin) => outputs.push(skin)}
        />
      );

      await waitFor(() => expect(outputs).toHaveLength(1));

      expect(outputs[0].dataUrl).toBe(IMPORTED_DATA_URL);
      expect(outputs[0].metadata.model).toBe(model);
      expect(mockedCombineTextures).not.toHaveBeenCalled();
      expect(screen.getByTestId('three-preview')).toHaveAttribute('data-texture', IMPORTED_DATA_URL);
      expect(screen.getByTestId('three-preview')).toHaveAttribute('data-model', model);
      expect(screen.getByRole('button', { name: 'Download character skin' })).toBeEnabled();
    }
  );

  it('normalizes imported initial wardrobe state against the declared skin model', async () => {
    const image = new Blob(['skin'], { type: 'image/png' });
    const outputs: SkinCrafterSkinOutput[] = [];

    render(
      <SkinCrafterEditor
        initialSkin={{ image, model: 'slim', appearance: { shirt: 'Hoodie' } }}
        onSkinChange={(skin) => outputs.push(skin)}
      />
    );

    await waitFor(() => expect(outputs).toHaveLength(1));

    expect(outputs[0].metadata.model).toBe('slim');
    expect(outputs[0].metadata.appearance.shirt).toBe('None');
    expect(mockedCombineTextures).not.toHaveBeenCalled();
  });

  it('normalizes controlled imported wardrobe state against the declared skin model', async () => {
    const image = new Blob(['skin'], { type: 'image/png' });
    const value = createState();
    value.appearance.shirt = 'Hoodie';
    const outputs: SkinCrafterSkinOutput[] = [];
    const onStateChange = vi.fn();

    render(
      <SkinCrafterEditor
        initialSkin={{ image, model: 'slim' }}
        value={value}
        onStateChange={onStateChange}
        onSkinChange={(skin) => outputs.push(skin)}
      />
    );

    await waitFor(() => expect(outputs).toHaveLength(1));

    expect(outputs[0].metadata.model).toBe('slim');
    expect(outputs[0].metadata.appearance.shirt).toBe('None');
    fireEvent.click(screen.getByRole('button', { name: 'Big' }));
    expect(onStateChange).toHaveBeenCalledWith(expect.objectContaining({
      appearance: expect.objectContaining({ shirt: 'None', eyes: 'Big' }),
    }));
  });

  it('lets a controlled sex edit switch away from the imported model compatibility', async () => {
    const image = new Blob(['skin'], { type: 'image/png' });
    const outputs: SkinCrafterSkinOutput[] = [];
    const initialState = createState();
    initialState.appearance.sex = 'Female';
    const changedState = createState();
    changedState.appearance.sex = 'Male';
    changedState.appearance.shirt = 'Hoodie';
    mockedCombineTextures.mockResolvedValueOnce(EDITED_DATA_URL);

    const { rerender } = render(
      <SkinCrafterEditor
        initialSkin={{ image, model: 'slim' }}
        value={initialState}
        onSkinChange={(skin) => outputs.push(skin)}
      />
    );

    await waitFor(() => expect(outputs).toHaveLength(1));

    rerender(
      <SkinCrafterEditor
        initialSkin={{ image, model: 'slim' }}
        value={changedState}
        onSkinChange={(skin) => outputs.push(skin)}
      />
    );

    await waitFor(() => expect(outputs).toHaveLength(2));
    expect(outputs[1].metadata.model).toBe('classic');
    expect(outputs[1].metadata.appearance.shirt).toBe('Hoodie');
    expect(mockedCombineTextures).toHaveBeenCalledTimes(1);
  });

  it('keeps an explicit controlled model switch latched when the host echoes the baseline sex', async () => {
    const image = new Blob(['skin'], { type: 'image/png' });
    const outputs: SkinCrafterSkinOutput[] = [];

    function ControlledHost(): React.JSX.Element {
      const [value, setValue] = useState(createState());
      return (
        <SkinCrafterEditor
          initialSkin={{ image, model: 'slim' }}
          value={value}
          onStateChange={setValue}
          onSkinChange={(skin) => outputs.push(skin)}
        />
      );
    }

    render(<ControlledHost />);

    await waitFor(() => expect(outputs).toHaveLength(1));
    expect(outputs[0].metadata.model).toBe('slim');
    expect(screen.queryByRole('button', { name: 'Hoodie' })).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Male' }));

    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Hoodie' })).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole('button', { name: 'Hoodie' }));

    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Hoodie' })).toHaveAttribute('aria-pressed', 'true');
    });
    await waitFor(() => expect(outputs.at(-1)?.metadata.appearance.shirt).toBe('Hoodie'));
    expect(outputs.at(-1)?.metadata.model).toBe('classic');
  });

  it('composes only the explicitly edited wardrobe category over the imported pixels', async () => {
    const image = new Blob(['skin'], { type: 'image/png' });
    const outputs: SkinCrafterSkinOutput[] = [];
    mockedCombineTextures.mockResolvedValueOnce(EDITED_DATA_URL);

    render(
      <SkinCrafterEditor
        initialSkin={{ image, model: 'classic' }}
        onSkinChange={(skin) => outputs.push(skin)}
      />
    );

    await waitFor(() => expect(outputs).toHaveLength(1));
    expect(mockedCombineTextures).not.toHaveBeenCalled();

    fireEvent.click(screen.getByRole('button', { name: 'Duck' }));

    await waitFor(() => expect(outputs).toHaveLength(2));
    expect(mockedCombineTextures).toHaveBeenCalledTimes(1);
    const compositionInputs = mockedCombineTextures.mock.calls[0][0];
    expect(compositionInputs).toHaveLength(2);
    expect(compositionInputs[0]).toBe(IMPORTED_DATA_URL);
    expect(compositionInputs[1]).toEqual({
      url: expect.any(String),
      role: 'fixed',
    });
    expect(outputs[1].dataUrl).toBe(EDITED_DATA_URL);
    expect(outputs[1].metadata.model).toBe('classic');
  });

  it('treats controlled appearance changes as explicit edits without depending on object identity', async () => {
    const image = new Blob(['skin'], { type: 'image/png' });
    const outputs: SkinCrafterSkinOutput[] = [];
    const initialState = createState();
    const changedState = createState();
    changedState.appearance.hat = 'Duck';
    mockedCombineTextures.mockResolvedValueOnce(EDITED_DATA_URL);

    const { rerender } = render(
      <SkinCrafterEditor
        initialSkin={{ image, model: 'classic' }}
        value={initialState}
        onSkinChange={(skin) => outputs.push(skin)}
      />
    );

    await waitFor(() => expect(outputs).toHaveLength(1));

    rerender(
      <SkinCrafterEditor
        initialSkin={{ image, model: 'classic' }}
        value={changedState}
        onSkinChange={(skin) => outputs.push(skin)}
      />
    );

    await waitFor(() => expect(outputs).toHaveLength(2));
    expect(mockedCombineTextures).toHaveBeenCalledTimes(1);
    expect(mockedCombineTextures.mock.calls[0][0]).toHaveLength(2);
  });

  it('does not regenerate when a new Blob instance contains the same imported bytes and model', async () => {
    const firstImage = new Blob(['same'], { type: 'image/png' });
    const equivalentImage = new Blob(['same'], { type: 'image/png' });
    const outputs: SkinCrafterSkinOutput[] = [];

    const { rerender } = render(
      <SkinCrafterEditor
        initialSkin={{ image: firstImage, model: 'classic' }}
        value={createState()}
        onSkinChange={(skin) => outputs.push(skin)}
      />
    );

    await waitFor(() => expect(outputs).toHaveLength(1));

    rerender(
      <SkinCrafterEditor
        initialSkin={{ image: equivalentImage, model: 'classic' }}
        value={createState()}
        onSkinChange={(skin) => outputs.push(skin)}
      />
    );

    await waitFor(() => expect(loadImportedSkinMock).toHaveBeenCalledTimes(2));
    await flushAsyncUpdates();

    expect(outputs).toHaveLength(1);
    expect(mockedCombineTextures).not.toHaveBeenCalled();
  });

  it('ignores a stale imported image load after a newer image has become authoritative', async () => {
    const firstLoad = createDeferred<{ dataUrl: string; fingerprint: string; model: 'classic' }>();
    const secondLoad = createDeferred<{ dataUrl: string; fingerprint: string; model: 'slim' }>();
    loadImportedSkinMock
      .mockImplementationOnce(() => firstLoad.promise)
      .mockImplementationOnce(() => secondLoad.promise);
    const firstImage = new Blob(['first'], { type: 'image/png' });
    const secondImage = new Blob(['second'], { type: 'image/png' });
    const outputs: SkinCrafterSkinOutput[] = [];

    const { rerender } = render(
      <SkinCrafterEditor
        initialSkin={{ image: firstImage, model: 'classic' }}
        onSkinChange={(skin) => outputs.push(skin)}
      />
    );
    await waitFor(() => expect(loadImportedSkinMock).toHaveBeenCalledTimes(1));

    rerender(
      <SkinCrafterEditor
        initialSkin={{ image: secondImage, model: 'slim' }}
        onSkinChange={(skin) => outputs.push(skin)}
      />
    );
    await waitFor(() => expect(loadImportedSkinMock).toHaveBeenCalledTimes(2));

    await act(async () => {
      secondLoad.resolve({
        dataUrl: SECOND_IMPORTED_DATA_URL,
        fingerprint: 'second-bytes',
        model: 'slim',
      });
      await secondLoad.promise;
    });
    await waitFor(() => expect(outputs).toHaveLength(1));

    await act(async () => {
      firstLoad.resolve({
        dataUrl: IMPORTED_DATA_URL,
        fingerprint: 'first-bytes',
        model: 'classic',
      });
      await firstLoad.promise;
    });
    await flushAsyncUpdates();

    expect(outputs).toHaveLength(1);
    expect(outputs[0].dataUrl).toBe(SECOND_IMPORTED_DATA_URL);
    expect(outputs[0].metadata.model).toBe('slim');
    expect(screen.getByTestId('three-preview')).toHaveAttribute('data-texture', SECOND_IMPORTED_DATA_URL);
  });

  it('surfaces invalid import data through the typed input error contract and keeps save disabled', async () => {
    const cause = new InvalidInitialSkinError('Initial skin must be a 64x64 Minecraft PNG.');
    loadImportedSkinMock.mockRejectedValueOnce(cause);
    const onError = vi.fn();
    const onStatusChange = vi.fn();
    const onSkinChange = vi.fn();

    render(
      <SkinCrafterEditor
        initialSkin={{ image: new Blob(['bad'], { type: 'image/png' }), model: 'classic' }}
        onError={onError}
        onStatusChange={onStatusChange}
        onSkinChange={onSkinChange}
      />
    );

    await waitFor(() => expect(onError).toHaveBeenCalledTimes(1));

    expect(onError).toHaveBeenCalledWith(expect.objectContaining({
      code: 'invalid_initial_skin',
      category: 'input',
      message: 'Initial skin must be a 64x64 Minecraft PNG.',
    }));
    expect(onStatusChange.mock.calls.at(-1)?.[0]).toBe('error');
    expect(onSkinChange).not.toHaveBeenCalled();
    expect(screen.getByTestId('skincrafter-editor')).toHaveAttribute(
      'data-skincrafter-generation-status',
      'error'
    );
    expect(screen.getByRole('button', { name: 'Download character skin' })).toBeDisabled();
    expect(screen.getByRole('alert')).toHaveTextContent(
      'The supplied skin is not a valid 64x64 Minecraft PNG.'
    );
  });

  it('returns to normal semantic generation when the host removes the imported base', async () => {
    const image = new Blob(['skin'], { type: 'image/png' });
    const outputs: SkinCrafterSkinOutput[] = [];
    mockedCombineTextures.mockResolvedValueOnce(GENERATED_DATA_URL);

    const { rerender } = render(
      <SkinCrafterEditor
        initialSkin={{ image, model: 'classic' }}
        onSkinChange={(skin) => outputs.push(skin)}
      />
    );
    await waitFor(() => expect(outputs).toHaveLength(1));

    rerender(<SkinCrafterEditor onSkinChange={(skin) => outputs.push(skin)} />);

    await waitFor(() => expect(outputs).toHaveLength(2));
    expect(mockedCombineTextures).toHaveBeenCalledTimes(1);
    expect(outputs[1].dataUrl).toBe(GENERATED_DATA_URL);
  });
});
