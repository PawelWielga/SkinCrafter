import { describe, expect, it } from 'vitest';
import { getEnvironmentBadge, getLanguageOption } from './nbar';

describe('standalone environment badge', () => {
  it('is hidden for the production root build', () => {
    expect(getEnvironmentBadge('/')).toBeNull();
  });

  it('labels the dev Pages preview', () => {
    expect(getEnvironmentBadge('/dev/')).toBe('DEV');
  });
});

describe('standalone language selector', () => {
  it('uses local SVG flags instead of platform-dependent emoji', () => {
    expect(getLanguageOption('en')).toMatchObject({ label: 'English' });
    expect(getLanguageOption('pl')).toMatchObject({ label: 'Polski' });
    expect(getLanguageOption('pt-BR')).toMatchObject({ label: 'Português' });

    expect(getLanguageOption('en').flagSrc).toMatch(/gb\.svg$/);
    expect(getLanguageOption('pl').flagSrc).toMatch(/pl\.svg$/);
    expect(getLanguageOption('pt-BR').flagSrc).toMatch(/br\.svg$/);
  });
});
