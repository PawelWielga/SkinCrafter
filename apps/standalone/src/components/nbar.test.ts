import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import NBar, { getEnvironmentBadge, getLanguageOption } from './nbar';

describe('standalone environment badge', () => {
  it('is hidden for the production root build', () => {
    expect(getEnvironmentBadge('/')).toBeNull();
  });

  it('labels the dev Pages preview', () => {
    expect(getEnvironmentBadge('/dev/')).toBe('DEV');
  });
});

describe('standalone language selector', () => {
  it('uses bundled SVG flags instead of platform-dependent emoji', () => {
    const english = getLanguageOption('en');
    const polish = getLanguageOption('pl');
    const portuguese = getLanguageOption('pt-BR');

    expect(english).toMatchObject({ label: 'English' });
    expect(polish).toMatchObject({ label: 'Polski' });
    expect(portuguese).toMatchObject({ label: 'Português' });

    for (const option of [english, polish, portuguese]) {
      expect(option.flagSrc).toMatch(/^(?:data:image\/svg\+xml|.*\.svg(?:\?.*)?$)/);
    }
  });

  it('styles the selected language green and unselected languages gray', () => {
    render(
      React.createElement(
        MemoryRouter,
        { initialEntries: ['/'] },
        React.createElement(NBar, {
          language: 'pl',
          onLanguageChange: () => undefined,
        })
      )
    );

    const selected = screen.getByText('Polski').closest('button');
    const english = screen.getByText('English').closest('button');
    const portuguese = screen.getByText('Português').closest('button');

    expect(selected?.className).toContain('bg-green-700');
    expect(selected?.className).toContain('text-white');
    expect(selected?.className).not.toContain('bg-amber-500');

    for (const option of [english, portuguese]) {
      expect(option?.className).toContain('bg-gray-100');
      expect(option?.className).toContain('text-gray-700');
    }
  });
});
