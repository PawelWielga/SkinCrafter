import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { defaultAppearance, normalizeTextureLayerOrder } from './data/appearance';
import SkinCrafterEditor from './SkinCrafterEditor';
import type { SkinCrafterPersistenceAdapter, SkinCrafterSkinOutput, SkinCrafterState } from './publicTypes';

vi.mock('./components/three/three-preview', () => ({
  default: () => <div data-testid="three-preview" />,
}));

vi.mock('./utils/combineTextures', () => ({
  default: vi.fn(async () => 'data:image/png;base64,aGVsbG8='),
}));

describe('SkinCrafterEditor public contract', () => {
  beforeEach(() => vi.clearAllMocks());

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
    const state: SkinCrafterState = {
      appearance: defaultAppearance,
      layerOrder: normalizeTextureLayerOrder(null),
    };
    const onStateChange = vi.fn();
    render(<SkinCrafterEditor value={state} onStateChange={onStateChange} />);
    fireEvent.click(screen.getByRole('button', { name: 'Bear' }));
    expect(onStateChange).toHaveBeenCalledWith(
      expect.objectContaining({ appearance: expect.objectContaining({ race: 'Bear' }) })
    );
  });
});
