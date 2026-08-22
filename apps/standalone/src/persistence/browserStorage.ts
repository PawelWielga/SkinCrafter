export type BrowserStorageReadResult =
  | { status: 'available'; value: string | null }
  | { status: 'unavailable' };

export interface SafeBrowserStorage {
  read: (key: string) => BrowserStorageReadResult;
  write: (key: string, value: string) => boolean;
}

type StorageLike = Pick<Storage, 'getItem' | 'setItem'>;

export function createBrowserStorage(
  getStorage: () => StorageLike = () => window.localStorage
): SafeBrowserStorage {
  return {
    read: (key) => {
      try {
        return { status: 'available', value: getStorage().getItem(key) };
      } catch {
        return { status: 'unavailable' };
      }
    },
    write: (key, value) => {
      try {
        getStorage().setItem(key, value);
        return true;
      } catch {
        return false;
      }
    },
  };
}

export const browserStorage = createBrowserStorage();
