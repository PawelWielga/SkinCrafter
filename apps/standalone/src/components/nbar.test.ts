import { describe, expect, it } from 'vitest';
import { getEnvironmentBadge } from './nbar';

describe('standalone environment badge', () => {
  it('is hidden for the production root build', () => {
    expect(getEnvironmentBadge('/')).toBeNull();
  });

  it('labels the dev Pages preview', () => {
    expect(getEnvironmentBadge('/dev/')).toBe('DEV');
  });
});
