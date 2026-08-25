import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import type { SkinCrafterError } from '../publicTypes';
import PreviewArea from './previewArea';

vi.mock('./three/three-preview', () => ({
  default: ({
    onError,
    textureRequestRevision,
  }: {
    onError?: (error: SkinCrafterError) => void;
    textureRequestRevision?: number;
  }) => (
    <button
      type="button"
      data-testid="three-preview"
      data-retry-revision={textureRequestRevision ?? 0}
      onClick={() =>
        onError?.({
          code: 'preview_texture_load_failed',
          category: 'preview',
          message: 'Failed to load preview texture: skin.png',
          assetUrl: 'skin.png',
        })
      }
    >
      fail preview
    </button>
  ),
}));

describe('PreviewArea texture recovery', () => {
  it('offers a localized retry path for a failed preview texture', () => {
    render(<PreviewArea texture="skin.png" t={(key) => key} />);

    fireEvent.click(screen.getByRole('button', { name: 'fail preview' }));

    expect(screen.getByRole('alert')).toHaveTextContent('error.preview');
    expect(screen.getByTestId('three-preview')).toHaveAttribute('data-retry-revision', '0');

    fireEvent.click(screen.getByRole('button', { name: 'action.retryPreview' }));

    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    expect(screen.getByTestId('three-preview')).toHaveAttribute('data-retry-revision', '1');
  });
});
