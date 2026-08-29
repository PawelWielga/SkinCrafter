import { describe, expect, it } from 'vitest';
import { createThemeStyle } from './themeStyle';

describe('createThemeStyle', () => {
  it('returns no overrides when no theme is provided', () => {
    expect(createThemeStyle()).toEqual({});
  });

  it('maps SkinCrafterTheme values to editor CSS variables', () => {
    expect(createThemeStyle({
      accent: '#111111',
      accentStrong: '#222222',
      surface: '#333333',
      text: '#444444',
      muted: '#555555',
      border: '#666666',
    })).toEqual({
      '--skincrafter-accent': '#111111',
      '--skincrafter-accent-strong': '#222222',
      '--skincrafter-surface': '#333333',
      '--skincrafter-text': '#444444',
      '--skincrafter-muted': '#555555',
      '--skincrafter-border': '#666666',
    });
  });
});
