import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import SkinCrafterEditor from './SkinCrafterEditor';
import { defaultAppearance } from './data/appearance';
import type {
  SkinCrafterPersistenceAdapter,
  SkinCrafterSerializedState,
} from './publicTypes';
import { parseSkinCrafterState } from './stateSerialization';

vi.mock('./components/three/three-preview', () => ({
  default: () => <div data-testid="three-preview" />,
}));

vi.mock('./utils/combineTextures', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./utils/combineTextures')>();
  return {
    ...actual,
    default: vi.fn().mockResolvedValue('data:image/png;base64,aGVsbG8='),
  };
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
});
