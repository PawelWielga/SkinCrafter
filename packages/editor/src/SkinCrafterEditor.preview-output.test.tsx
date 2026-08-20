import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import SkinCrafterEditor from './SkinCrafterEditor';
import type { SkinCrafterSkinOutput } from './publicTypes';
import combineTextures from './utils/combineTextures';

vi.mock('./components/three/three-preview', () => ({
  default: ({ texture }: { texture: string | null }) => (
    <div data-testid="three-preview" data-preview-texture={texture ?? ''} />
  ),
}));

vi.mock('./utils/combineTextures', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./utils/combineTextures')>();
  return { ...actual, default: vi.fn() };
});

const GENERATED_TEXTURE = 'data:image/png;base64,Z3JheXNjYWxlLXRpbnQ=';
const mockedCombineTextures = vi.mocked(combineTextures);

describe('SkinCrafterEditor preview/output texture parity', () => {
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
});
