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
  it('shows compact native language labels with country flags', () => {
    expect(getLanguageOption('en')).toEqual({ flag: '🇬🇧', label: 'English' });
    expect(getLanguageOption('pl')).toEqual({ flag: '🇵🇱', label: 'Polski' });
    expect(getLanguageOption('pt-BR')).toEqual({ flag: '🇧🇷', label: 'Português' });
  });
});
