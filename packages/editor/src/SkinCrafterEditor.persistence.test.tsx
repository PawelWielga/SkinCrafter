import { render, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import SkinCrafterEditor from './SkinCrafterEditor';
import { defaultAppearance } from './data/appearance';
import type {
  SkinCrafterPersistenceAdapter,
  SkinCrafterSerializedState,
} from './publicTypes';

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
  it('passes the current versioned wire format to the host save adapter', async () => {
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
});
