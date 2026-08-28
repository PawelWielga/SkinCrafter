import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('../api/fetchSkin', async (importOriginal) => {
  const actual = await importOriginal<typeof import('../api/fetchSkin')>();
  return {
    ...actual,
    default: vi.fn(),
  };
});

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

import fetchSkin, { FetchSkinError } from '../api/fetchSkin';
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

  it('renders bundled decorative icons without changing accessible controls', () => {
    const { container } = renderSkinView();

    expect(container.querySelectorAll('[data-standalone-icon][aria-hidden="true"]')).toHaveLength(3);
    expect(screen.getByRole('button', { name: 'Load Skin' })).toBeEnabled();
    expect(screen.getByLabelText('Minecraft username')).toBeEnabled();
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
    fireEvent.click(screen.getByRole('button', { name: 'Load Skin' }));

    await waitFor(() => {
      expect(screen.getByTestId('packaged-preview')).toHaveAttribute('data-model', 'slim');
      expect(screen.getByTestId('packaged-preview')).toHaveAttribute(
        'data-texture',
        'https://textures.minecraft.net/texture/alex'
      );
    });

    fireEvent.change(usernameInput, { target: { value: 'Steve' } });
    fireEvent.click(screen.getByRole('button', { name: 'Load Skin' }));

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

  it('shows a localized validation error for an empty username in English', () => {
    renderSkinView();

    fireEvent.click(screen.getByRole('button', { name: 'Load Skin' }));

    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a Minecraft username.');
    expect(mockedFetchSkin).not.toHaveBeenCalled();
  });

  it('shows a localized validation error for an empty username in Polish', () => {
    localStorage.setItem('skincrafterLanguage', 'pl');
    renderSkinView();

    fireEvent.click(screen.getByRole('button', { name: 'Wczytaj Skin' }));

    expect(screen.getByRole('alert')).toHaveTextContent('Podaj nazwę gracza Minecraft.');
    expect(mockedFetchSkin).not.toHaveBeenCalled();
  });

  it('shows player-not-found in Polish and clears the previous skin', async () => {
    localStorage.setItem('skincrafterLanguage', 'pl');
    mockedFetchSkin
      .mockResolvedValueOnce({
        texture: 'https://textures.minecraft.net/texture/alex',
        model: 'slim',
      })
      .mockRejectedValueOnce(new FetchSkinError('player_not_found'));

    renderSkinView();

    const usernameInput = screen.getByLabelText('Nazwa gracza Minecraft');

    fireEvent.change(usernameInput, { target: { value: 'Alex' } });
    fireEvent.click(screen.getByRole('button', { name: 'Wczytaj Skin' }));

    await waitFor(() => {
      expect(screen.getByTestId('packaged-preview')).toHaveAttribute('data-model', 'slim');
    });

    fireEvent.change(usernameInput, { target: { value: 'MissingPlayer' } });
    fireEvent.click(screen.getByRole('button', { name: 'Wczytaj Skin' }));

    expect(await screen.findByRole('alert')).toHaveTextContent('Nie znaleziono gracza Minecraft.');
    expect(screen.getByTestId('packaged-preview')).toHaveAttribute('data-texture', '');
    expect(screen.getByTestId('packaged-preview')).toHaveAttribute('data-model', 'classic');
  });

  it('shows service failure in Polish instead of claiming the player does not exist', async () => {
    localStorage.setItem('skincrafterLanguage', 'pl');
    mockedFetchSkin.mockRejectedValueOnce(new FetchSkinError('service_unavailable'));

    renderSkinView();

    fireEvent.change(screen.getByLabelText('Nazwa gracza Minecraft'), {
      target: { value: 'Steve' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Wczytaj Skin' }));

    const alert = await screen.findByRole('alert');
    expect(alert).toHaveTextContent('PlayerDB jest chwilowo niedostępne. Spróbuj ponownie później.');
    expect(alert).not.toHaveTextContent('Nie znaleziono gracza Minecraft.');
  });

  it('shows a stable localized network error instead of a raw browser message', async () => {
    localStorage.setItem('skincrafterLanguage', 'pl');
    mockedFetchSkin.mockRejectedValueOnce(new FetchSkinError('network_error'));

    renderSkinView();

    fireEvent.change(screen.getByLabelText('Nazwa gracza Minecraft'), {
      target: { value: 'Steve' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Wczytaj Skin' }));

    const alert = await screen.findByRole('alert');
    expect(alert).toHaveTextContent(
      'Nie udało się połączyć z PlayerDB. Sprawdź połączenie i spróbuj ponownie.'
    );
    expect(alert).not.toHaveTextContent('Failed to fetch');
  });

  it('falls back to a localized invalid-response message for unknown failures', async () => {
    mockedFetchSkin.mockRejectedValueOnce(new Error('browser-specific message'));

    renderSkinView();

    fireEvent.change(screen.getByLabelText('Minecraft username'), {
      target: { value: 'Steve' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Load Skin' }));

    const alert = await screen.findByRole('alert');
    expect(alert).toHaveTextContent('PlayerDB returned an unexpected response. Try again later.');
    expect(alert).not.toHaveTextContent('browser-specific message');
  });
});
