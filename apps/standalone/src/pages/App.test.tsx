import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { SkinCrafterPersistenceAdapter } from '@dihor/skincrafter-editor';

vi.mock('@dihor/skincrafter-editor', async () => {
  const actual = await vi.importActual<typeof import('@dihor/skincrafter-editor')>(
    '@dihor/skincrafter-editor'
  );
  return {
    ...actual,
    SkinCrafterEditor: ({
      locale,
      persistence,
    }: {
      locale?: string;
      persistence?: SkinCrafterPersistenceAdapter;
    }) => {
      const loaded = persistence?.load();
      const persistenceStatus = loaded
        && typeof loaded === 'object'
        && 'status' in loaded
        ? String(loaded.status)
        : 'legacy';

      return (
        <div
          data-testid="packaged-editor"
          data-locale={locale}
          data-persistence-status={persistenceStatus}
        >
          Packaged SkinCrafter editor
        </div>
      );
    },
    SkinPreview: () => <div data-testid="packaged-preview">Packaged SkinCrafter preview</div>,
  };
});

import App from './App';

function installLocalStorage(storage: Pick<Storage, 'getItem' | 'setItem'>): void {
  Object.defineProperty(window, 'localStorage', {
    configurable: true,
    value: storage,
  });
  Object.defineProperty(globalThis, 'localStorage', {
    configurable: true,
    value: window.localStorage,
  });
}

describe('standalone app package integration', () => {
  beforeEach(() => {
    const store = new Map<string, string>();
    installLocalStorage({
      getItem: (key: string) => store.get(key) ?? null,
      setItem: (key: string, value: string) => {
        store.set(key, value);
      },
    });
    document.documentElement.lang = 'en';
  });

  it('renders the creator through the reusable package', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByTestId('packaged-editor')).toBeInTheDocument();
    expect(screen.getByTestId('packaged-editor')).toHaveAttribute('data-locale', 'en');
    expect(document.documentElement).toHaveAttribute('lang', 'en');
  });

  it('synchronizes the document language when the user changes locale', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByLabelText('Language: English'));
    fireEvent.click(screen.getByRole('menuitemradio', { name: 'Polski' }));
    expect(screen.getByTestId('packaged-editor')).toHaveAttribute('data-locale', 'pl');
    expect(document.documentElement).toHaveAttribute('lang', 'pl');

    fireEvent.click(screen.getByLabelText('Jezyk: Polski'));
    fireEvent.click(screen.getByRole('menuitemradio', { name: 'English' }));
    expect(screen.getByTestId('packaged-editor')).toHaveAttribute('data-locale', 'en');
    expect(document.documentElement).toHaveAttribute('lang', 'en');
  });

  it('mounts with default language and in-memory wardrobe state when storage reads throw', () => {
    installLocalStorage({
      getItem: () => {
        throw new DOMException('Storage blocked', 'SecurityError');
      },
      setItem: vi.fn(),
    });

    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByTestId('packaged-editor')).toHaveAttribute('data-locale', 'en');
    expect(screen.getByTestId('packaged-editor')).toHaveAttribute(
      'data-persistence-status',
      'empty'
    );
    expect(document.documentElement).toHaveAttribute('lang', 'en');
  });

  it('keeps the selected language in memory when storage writes throw', () => {
    installLocalStorage({
      getItem: () => null,
      setItem: () => {
        throw new DOMException('Quota exceeded', 'QuotaExceededError');
      },
    });

    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByLabelText('Language: English'));
    fireEvent.click(screen.getByRole('menuitemradio', { name: 'Polski' }));

    expect(screen.getByTestId('packaged-editor')).toHaveAttribute('data-locale', 'pl');
    expect(document.documentElement).toHaveAttribute('lang', 'pl');
  });

  it('renders the skin-view route through the packaged preview', () => {
    render(
      <MemoryRouter initialEntries={['/mcskinview']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByTestId('packaged-preview')).toBeInTheDocument();
    expect(screen.getByLabelText('Minecraft username')).toBeInTheDocument();
  });

  it('renders an unknown route and returns to the creator through client-side routing', () => {
    render(
      <MemoryRouter initialEntries={['/does-not-exist']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: 'Page not found', level: 1 })).toBeInTheDocument();
    expect(screen.getByText('This address does not point to a SkinCrafter page.')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('link', { name: 'Back to creator' }));

    expect(screen.getByTestId('packaged-editor')).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Page not found' })).not.toBeInTheDocument();
  });

  it('localizes the unknown-route page using the persisted standalone language', () => {
    installLocalStorage({
      getItem: (key: string) => (key === 'skincrafterLanguage' ? 'pl' : null),
      setItem: vi.fn(),
    });

    render(
      <MemoryRouter initialEntries={['/does-not-exist']}>
        <App />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', { name: 'Nie znaleziono strony', level: 1 })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Wróć do kreatora' })).toBeInTheDocument();
    expect(document.documentElement).toHaveAttribute('lang', 'pl');
  });
});
