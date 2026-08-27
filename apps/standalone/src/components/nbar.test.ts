import { describe, expect, it } from 'vitest';
import { getEnvironmentBadge, getLanguageOptionLabel } from './nbar';

describe('standalone environment badge', () => {
  it('is hidden for the production root build', () => {
    expect(getEnvironmentBadge('/')).toBeNull();
  });

  it('labels the dev Pages preview', () => {
    expect(getEnvironmentBadge('/dev/')).toBe('DEV');
  });
});

describe('standalone language selector', () => {
  it('shows flags and full language names in the default language', () => {
    expect(getLanguageOptionLabel('en')).toBe('🇬🇧 English');
    expect(getLanguageOptionLabel('pl')).toBe('🇵🇱 Polish');
  });
});
