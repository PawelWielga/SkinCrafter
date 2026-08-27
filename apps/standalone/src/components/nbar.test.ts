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
});
