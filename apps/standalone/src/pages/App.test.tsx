import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('@dihor/skincrafter-editor', async () => {
  const actual = await vi.importActual<typeof import('@dihor/skincrafter-editor')>(
    '@dihor/skincrafter-editor'
  );
  return {
    ...actual,
    SkinCrafterEditor: ({ locale }: { locale?: string }) => (
      <div data-testid="packaged-editor" data-locale={locale}>Packaged SkinCrafter editor</div>
    ),
    SkinPreview: () => <div data-testid="packaged-preview">Packaged SkinCrafter preview</div>,
  };
});

import App from './App';

describe('standalone app package integration', () => {
  beforeEach(() => {
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

  it('renders the creator through the reusable package', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByTestId('packaged-editor')).toBeInTheDocument();
    expect(screen.getByTestId('packaged-editor')).toHaveAttribute('data-locale', 'en');
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
});
