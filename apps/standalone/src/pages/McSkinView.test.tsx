import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('../api/fetchSkin', () => ({
  default: vi.fn(),
}));

vi.mock('@dihor/skincrafter-editor', async () => {
  const actual = await vi.importActual<typeof import('@dihor/skincrafter-editor')>(
    '@dihor/skincrafter-editor'
  );

  return {
    ...actual,
    SkinPreview: ({
      texture,
      model,
    }: {
      texture: string | null;
      model?: 'classic' | 'slim';
    }) => (
      <div
        data-testid="packaged-preview"
        data-texture={texture ?? ''}
        data-model={model ?? ''}
      />
    ),
  };
});

import fetchSkin from '../api/fetchSkin';
import McSkinView from './McSkinView';

const renderSkinView = () =>
  render(
    <MemoryRouter initialEntries={['/mcskinview']}>
      <McSkinView />
    </MemoryRouter>
  );

describe('McSkinView model integration', () => {
  const mockedFetchSkin = vi.mocked(fetchSkin);

  beforeEach(() => {
    mockedFetchSkin.mockReset();

    const store = new Map<string, string>();
    Object.defineProperty(window, 'localStorage', {
      configurable: true,
      value: {
        getItem: (key: string) => store.get(key) ?? null,
        setItem: (key: string, value: string) => store.set(key, value),
        removeItem: (key: string) => store.delete(key),
        clear: () => store.clear(),
      },
    });
    Object.defineProperty(globalThis, 'localStorage', {
      configurable: true,
      value: window.localStorage,
    });
  });

  it('passes detected slim and classic models to the packaged SkinPreview', async () => {
    mockedFetchSkin
      .mockResolvedValueOnce({
        texture: 'https://textures.minecraft.net/texture/alex',
        model: 'slim',
      })
      .mockResolvedValueOnce({
        texture: 'https://textures.minecraft.net/texture/steve',
        model: 'classic',
      });

    renderSkinView();

    const usernameInput = screen.getByLabelText('Minecraft username');

    fireEvent.change(usernameInput, { target: { value: 'Alex' } });
    fireEvent.click(screen.getByRole('button', { name: 'Load skin' }));

    await waitFor(() => {
      expect(screen.getByTestId('packaged-preview')).toHaveAttribute('data-model', 'slim');
      expect(screen.getByTestId('packaged-preview')).toHaveAttribute(
        'data-texture',
        'https://textures.minecraft.net/texture/alex'
      );
    });

    fireEvent.change(usernameInput, { target: { value: 'Steve' } });
    fireEvent.click(screen.getByRole('button', { name: 'Load skin' }));

    await waitFor(() => {
      expect(screen.getByTestId('packaged-preview')).toHaveAttribute('data-model', 'classic');
      expect(screen.getByTestId('packaged-preview')).toHaveAttribute(
        'data-texture',
        'https://textures.minecraft.net/texture/steve'
      );
    });

    expect(mockedFetchSkin).toHaveBeenNthCalledWith(1, 'Alex');
    expect(mockedFetchSkin).toHaveBeenNthCalledWith(2, 'Steve');
  });

  it('clears the previous texture and model when a later lookup fails', async () => {
    mockedFetchSkin
      .mockResolvedValueOnce({
        texture: 'https://textures.minecraft.net/texture/alex',
        model: 'slim',
      })
      .mockRejectedValueOnce(new Error('User not found'));

    renderSkinView();

    const usernameInput = screen.getByLabelText('Minecraft username');

    fireEvent.change(usernameInput, { target: { value: 'Alex' } });
    fireEvent.click(screen.getByRole('button', { name: 'Load skin' }));

    await waitFor(() => {
      expect(screen.getByTestId('packaged-preview')).toHaveAttribute('data-model', 'slim');
    });

    fireEvent.change(usernameInput, { target: { value: 'MissingPlayer' } });
    fireEvent.click(screen.getByRole('button', { name: 'Load skin' }));

    expect(await screen.findByText('User not found')).toBeInTheDocument();
    expect(screen.getByTestId('packaged-preview')).toHaveAttribute('data-texture', '');
    expect(screen.getByTestId('packaged-preview')).toHaveAttribute('data-model', 'classic');
  });
});
