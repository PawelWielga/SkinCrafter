import { describe, expect, it, vi } from 'vitest';
import { createBrowserStorage } from './browserStorage';

describe('browserStorage', () => {
  it('distinguishes a missing value from unavailable storage', () => {
    const getItem = vi.fn(() => null);
    const storage = createBrowserStorage(() => ({
      getItem,
      setItem: vi.fn(),
    }));

    expect(storage.read('missing')).toEqual({ status: 'available', value: null });
    expect(getItem).toHaveBeenCalledWith('missing');
  });

  it('returns unavailable when resolving localStorage throws', () => {
    const storage = createBrowserStorage(() => {
      throw new DOMException('Storage blocked', 'SecurityError');
    });

    expect(storage.read('key')).toEqual({ status: 'unavailable' });
    expect(storage.write('key', 'value')).toBe(false);
  });

  it('returns unavailable when getItem throws', () => {
    const storage = createBrowserStorage(() => ({
      getItem: () => {
        throw new DOMException('Storage blocked', 'SecurityError');
      },
      setItem: vi.fn(),
    }));

    expect(storage.read('key')).toEqual({ status: 'unavailable' });
  });

  it('reports a failed write without throwing', () => {
    const storage = createBrowserStorage(() => ({
      getItem: vi.fn(() => null),
      setItem: () => {
        throw new DOMException('Quota exceeded', 'QuotaExceededError');
      },
    }));

    expect(() => storage.write('key', 'value')).not.toThrow();
    expect(storage.write('key', 'value')).toBe(false);
  });
});
