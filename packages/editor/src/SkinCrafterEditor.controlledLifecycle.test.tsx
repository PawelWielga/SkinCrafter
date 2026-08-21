import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import SkinCrafterEditor from './SkinCrafterEditor';
import {
  defaultAppearance,
  normalizeTextureLayerOrder,
  type AppearanceState,
} from './data/appearance';
import type {
  SkinCrafterPersistenceAdapter,
  SkinCrafterSerializedState,
  SkinCrafterSkinOutput,
  SkinCrafterState,
} from './publicTypes';
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

function createState(appearance: Partial<AppearanceState> = {}): SkinCrafterState {
  return {
    appearance: { ...defaultAppearance, ...appearance },
    layerOrder: [...normalizeTextureLayerOrder(null)],
  };
}

async function flushAsyncUpdates(): Promise<void> {
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  });
}

describe('SkinCrafterEditor controlled lifecycle', () => {
  beforeEach(() => {
    mockedCombineTextures.mockReset();
    mockedCombineTextures.mockResolvedValue('data:image/png;base64,aGVsbG8=');
  });

  it('continues from the last controlled state after value is removed', async () => {
    const outputs: SkinCrafterSkinOutput[] = [];
    const stateA = createState({ race: 'Human' });
    const stateB = createState({ race: 'Bear' });
    const onSkinChange = (skin: SkinCrafterSkinOutput) => outputs.push(skin);

    const { rerender } = render(
      <SkinCrafterEditor value={stateA} onSkinChange={onSkinChange} />
    );

    await waitFor(() => expect(outputs.at(-1)?.metadata.appearance.race).toBe('Human'));

    rerender(<SkinCrafterEditor value={stateB} onSkinChange={onSkinChange} />);
    await waitFor(() => expect(outputs.at(-1)?.metadata.appearance.race).toBe('Bear'));

    const generationCountBeforeRelease = mockedCombineTextures.mock.calls.length;
    rerender(<SkinCrafterEditor onSkinChange={onSkinChange} />);
    await flushAsyncUpdates();

    expect(screen.getByRole('button', { name: 'Bear' })).toHaveAttribute('aria-pressed', 'true');
    expect(mockedCombineTextures).toHaveBeenCalledTimes(generationCountBeforeRelease);

    fireEvent.click(screen.getByRole('button', { name: 'Duck' }));

    await waitFor(() => expect(outputs.at(-1)?.metadata.appearance.hat).toBe('Duck'));
    expect(outputs.at(-1)?.metadata.appearance.race).toBe('Bear');
  });

  it('does not restore an older local snapshot after an uncontrolled to controlled round trip', async () => {
    const controlledState = createState({ race: 'Human', hat: 'Duck' });
    const { rerender } = render(<SkinCrafterEditor />);

    await waitFor(() => {
      expect(screen.getByTestId('skincrafter-editor')).toHaveAttribute(
        'data-skincrafter-generation-status',
        'ready'
      );
    });

    fireEvent.click(screen.getByRole('button', { name: 'Bear' }));
    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Bear' })).toHaveAttribute('aria-pressed', 'true');
    });

    rerender(<SkinCrafterEditor value={controlledState} />);
    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Human' })).toHaveAttribute('aria-pressed', 'true');
      expect(screen.getByRole('button', { name: 'Duck' })).toHaveAttribute('aria-pressed', 'true');
    });

    rerender(<SkinCrafterEditor />);
    await flushAsyncUpdates();

    expect(screen.getByRole('button', { name: 'Human' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: 'Bear' })).toHaveAttribute('aria-pressed', 'false');
    expect(screen.getByRole('button', { name: 'Duck' })).toHaveAttribute('aria-pressed', 'true');
  });

  it('persists the last controlled snapshot when returning to uncontrolled mode', async () => {
    const saved: SkinCrafterSerializedState[] = [];
    const load = vi.fn(() => ({ status: 'empty' as const }));
    const persistence: SkinCrafterPersistenceAdapter = {
      load,
      save: (state) => saved.push(state),
    };
    const stateA = createState({ race: 'Human' });
    const stateB = createState({ race: 'Bear', hat: 'Duck' });

    const { rerender } = render(
      <SkinCrafterEditor value={stateA} persistence={persistence} />
    );

    await waitFor(() => {
      expect(screen.getByTestId('skincrafter-editor')).toHaveAttribute(
        'data-skincrafter-generation-status',
        'ready'
      );
    });
    expect(load).not.toHaveBeenCalled();
    expect(saved).toHaveLength(0);

    rerender(<SkinCrafterEditor value={stateB} persistence={persistence} />);
    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Bear' })).toHaveAttribute('aria-pressed', 'true');
      expect(screen.getByRole('button', { name: 'Duck' })).toHaveAttribute('aria-pressed', 'true');
    });

    rerender(<SkinCrafterEditor persistence={persistence} />);

    await waitFor(() => expect(saved).toHaveLength(1));
    expect(load).toHaveBeenCalledTimes(1);
    expect(saved[0]).toMatchObject({
      schemaVersion: 1,
      appearance: {
        race: 'Bear',
        hat: 'Duck',
      },
    });
  });
});
