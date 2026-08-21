import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import SkinCrafterEditor from './SkinCrafterEditor';
import { defaultAppearance } from './data/appearance';
import type {
  SkinCrafterPersistenceAdapter,
  SkinCrafterSerializedState,
} from './publicTypes';
import { parseSkinCrafterState } from './stateSerialization';
import combineTextures from './utils/combineTextures';

vi.mock('./components/three/three-preview', () => ({
  default: () => <div data-testid="three-preview" />,
}));

vi.mock('./utils/combineTextures', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./utils/combineTextures')>();
  return {
    ...actual,
    default: vi.fn(),
  };
});

const mockedCombineTextures = vi.mocked(combineTextures);

beforeEach(() => {
  mockedCombineTextures.mockReset();
  mockedCombineTextures.mockResolvedValue('data:image/png;base64,aGVsbG8=');
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('SkinCrafterEditor persistence serialization', () => {
  it('keeps legacy adapter load values compatible and saves the current versioned wire format', async () => {
    const saved: SkinCrafterSerializedState[] = [];
    const persistence: SkinCrafterPersistenceAdapter = {
      load: () => ({ appearance: { ...defaultAppearance, hat: 'Duck' } }),
      save: (state) => saved.push(state),
    };

    render(<SkinCrafterEditor persistence={persistence} />);

    await waitFor(() => expect(saved.length).toBeGreaterThan(0));
    expect(saved[0]).toMatchObject({
      schemaVersion: 1,
      appearance: { hat: 'Duck' },
    });
  });

  it('loads an explicit compatible persistence result and keeps it writable', async () => {
    const saved: SkinCrafterSerializedState[] = [];
    const persistence: SkinCrafterPersistenceAdapter = {
      load: () => ({
        status: 'loaded',
        state: { appearance: { ...defaultAppearance, hat: 'Duck' } },
      }),
      save: (state) => saved.push(state),
    };

    render(<SkinCrafterEditor persistence={persistence} />);

    expect(screen.getByRole('button', { name: 'Duck' })).toHaveAttribute('aria-pressed', 'true');
    await waitFor(() => expect(saved.length).toBeGreaterThan(0));
    expect(saved[0].appearance.hat).toBe('Duck');
  });

  it('treats an explicit empty persistence result as writable defaults', async () => {
    const saved: SkinCrafterSerializedState[] = [];
    const persistence: SkinCrafterPersistenceAdapter = {
      load: () => ({ status: 'empty' }),
      save: (state) => saved.push(state),
    };

    render(<SkinCrafterEditor persistence={persistence} />);

    await waitFor(() => expect(saved.length).toBeGreaterThan(0));
    expect(saved[0].appearance).toEqual(defaultAppearance);
  });

  it('keeps persistence blocked when initialSkin overrides an incompatible stored record', async () => {
    const save = vi.fn();
    const persistence: SkinCrafterPersistenceAdapter = {
      load: () => ({ status: 'incompatible' }),
      save,
    };

    render(
      <SkinCrafterEditor
        initialSkin={{ appearance: { ...defaultAppearance, hat: 'Duck' } }}
        persistence={persistence}
      />
    );

    expect(screen.getByRole('button', { name: 'Duck' })).toHaveAttribute('aria-pressed', 'true');
    await waitFor(() => {
      expect(screen.getByTestId('skincrafter-editor')).toHaveAttribute(
        'data-skincrafter-generation-status',
        'ready'
      );
    });
    expect(save).not.toHaveBeenCalled();
  });

  it('re-checks compatibility before saving to a replacement persistence adapter', async () => {
    const firstSave = vi.fn();
    const firstPersistence: SkinCrafterPersistenceAdapter = {
      load: () => ({ status: 'empty' }),
      save: firstSave,
    };
    const replacementLoad = vi.fn(() => ({ status: 'incompatible' as const }));
    const replacementSave = vi.fn();
    const replacementPersistence: SkinCrafterPersistenceAdapter = {
      load: replacementLoad,
      save: replacementSave,
    };

    const { rerender } = render(<SkinCrafterEditor persistence={firstPersistence} />);

    await waitFor(() => expect(firstSave).toHaveBeenCalled());

    rerender(<SkinCrafterEditor persistence={replacementPersistence} />);

    await waitFor(() => expect(replacementLoad).toHaveBeenCalledTimes(1));
    expect(replacementSave).not.toHaveBeenCalled();

    fireEvent.click(screen.getByRole('button', { name: 'Duck' }));
    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Duck' })).toHaveAttribute('aria-pressed', 'true');
    });

    expect(replacementSave).not.toHaveBeenCalled();
  });

  it('preserves an unsupported future schema on mount and after user edits', async () => {
    const futureState = {
      schemaVersion: 2,
      appearance: { ...defaultAppearance, hat: 'Duck' },
      layerOrder: ['hat', 'shirt', 'pants', 'shoes', 'accessory'],
      futureOnlyField: 'keep-me',
    };
    let storedState: unknown = futureState;
    const save = vi.fn((state: SkinCrafterSerializedState) => {
      storedState = state;
    });
    const persistence: SkinCrafterPersistenceAdapter = {
      load: () => {
        const parsed = parseSkinCrafterState(storedState);
        if (parsed.success) {
          return { status: 'loaded', state: parsed.state };
        }
        return parsed.error.code === 'unsupported_schema_version'
          ? { status: 'incompatible' }
          : { status: 'empty' };
      },
      save,
    };

    render(<SkinCrafterEditor persistence={persistence} />);

    await waitFor(() => {
      expect(screen.getByTestId('skincrafter-editor')).toHaveAttribute(
        'data-skincrafter-generation-status',
        'ready'
      );
    });
    expect(save).not.toHaveBeenCalled();
    expect(storedState).toEqual(futureState);

    fireEvent.click(screen.getByRole('button', { name: 'Duck' }));
    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Duck' })).toHaveAttribute('aria-pressed', 'true');
    });

    expect(save).not.toHaveBeenCalled();
    expect(storedState).toEqual(futureState);
  });

  it('falls back to in-memory state and blocks writes when persistence load throws', async () => {
    const cause = new Error('storage read blocked');
    const load = vi.fn(() => {
      throw cause;
    });
    const save = vi.fn();
    const onError = vi.fn();
    const persistence: SkinCrafterPersistenceAdapter = { load, save };

    render(<SkinCrafterEditor persistence={persistence} onError={onError} />);

    await waitFor(() => {
      expect(screen.getByTestId('skincrafter-editor')).toHaveAttribute(
        'data-skincrafter-generation-status',
        'ready'
      );
    });

    expect(load).toHaveBeenCalledTimes(1);
    expect(save).not.toHaveBeenCalled();
    expect(onError).toHaveBeenCalledTimes(1);
    expect(onError).toHaveBeenCalledWith(expect.objectContaining({
      code: 'persistence_load_failed',
      category: 'persistence',
      cause,
    }));
    expect(screen.getByRole('button', { name: 'Duck' })).toBeEnabled();
  });

  it('isolates an initial save failure and does not retry the broken adapter on every edit', async () => {
    const cause = new Error('storage quota exceeded');
    const save = vi.fn(() => {
      throw cause;
    });
    const onError = vi.fn();
    const persistence: SkinCrafterPersistenceAdapter = {
      load: () => ({ status: 'empty' }),
      save,
    };

    render(<SkinCrafterEditor persistence={persistence} onError={onError} />);

    await waitFor(() => {
      expect(onError).toHaveBeenCalledWith(expect.objectContaining({
        code: 'persistence_save_failed',
        category: 'persistence',
        cause,
      }));
    });
    await waitFor(() => {
      expect(screen.getByTestId('skincrafter-editor')).toHaveAttribute(
        'data-skincrafter-generation-status',
        'ready'
      );
    });

    expect(save).toHaveBeenCalledTimes(1);
    fireEvent.click(screen.getByRole('button', { name: 'Duck' }));
    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Duck' })).toHaveAttribute('aria-pressed', 'true');
    });

    expect(save).toHaveBeenCalledTimes(1);
    expect(onError).toHaveBeenCalledTimes(1);
  });

  it('keeps generation healthy when a later persistence save fails', async () => {
    const cause = new Error('storage became unavailable');
    const save = vi.fn()
      .mockImplementationOnce(() => undefined)
      .mockImplementation(() => {
        throw cause;
      });
    const onError = vi.fn();
    const onStatusChange = vi.fn();
    const persistence: SkinCrafterPersistenceAdapter = {
      load: () => ({ status: 'empty' }),
      save,
    };

    render(
      <SkinCrafterEditor
        persistence={persistence}
        onError={onError}
        onStatusChange={onStatusChange}
      />
    );

    await waitFor(() => expect(save).toHaveBeenCalledTimes(1));
    await waitFor(() => {
      expect(screen.getByTestId('skincrafter-editor')).toHaveAttribute(
        'data-skincrafter-generation-status',
        'ready'
      );
    });

    fireEvent.click(screen.getByRole('button', { name: 'Duck' }));

    await waitFor(() => {
      expect(onError).toHaveBeenCalledWith(expect.objectContaining({
        code: 'persistence_save_failed',
        category: 'persistence',
        cause,
      }));
    });
    await waitFor(() => {
      expect(screen.getByTestId('skincrafter-editor')).toHaveAttribute(
        'data-skincrafter-generation-status',
        'ready'
      );
    });

    expect(save).toHaveBeenCalledTimes(2);
    expect(onStatusChange).not.toHaveBeenCalledWith('error');

    fireEvent.click(screen.getByRole('button', { name: 'Hoodie' }));
    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Hoodie' })).toHaveAttribute('aria-pressed', 'true');
    });
    expect(save).toHaveBeenCalledTimes(2);
  });

  it('does not crash when the host error callback throws while reporting persistence failure', async () => {
    const persistenceCause = new Error('storage read blocked');
    const callbackCause = new Error('host telemetry failed');
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => undefined);
    const persistence: SkinCrafterPersistenceAdapter = {
      load: () => {
        throw persistenceCause;
      },
      save: vi.fn(),
    };

    render(
      <SkinCrafterEditor
        persistence={persistence}
        onError={() => {
          throw callbackCause;
        }}
      />
    );

    await waitFor(() => {
      expect(screen.getByTestId('skincrafter-editor')).toHaveAttribute(
        'data-skincrafter-generation-status',
        'ready'
      );
    });

    expect(consoleError).toHaveBeenCalledWith('SkinCrafter host callback failed', callbackCause);
  });
});