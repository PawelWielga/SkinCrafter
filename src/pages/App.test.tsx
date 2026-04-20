import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import App from './App';

vi.mock('../components/three/three-preview', () => ({
  default: () => <div data-testid="three-preview" />,
}));

describe('App', () => {
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

  it('renders the wardrobe creator route', async () => {
    render(
      <MemoryRouter
        initialEntries={['/']}
        future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
      >
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('Customization')).toBeInTheDocument();
    expect(screen.getByText('Character Race')).toBeInTheDocument();
    expect(screen.getByText('Accessory')).toBeInTheDocument();
    expect(screen.getByTestId('three-preview')).toBeInTheDocument();
  });
});
