import {
  translate as translateEditor,
  type Language,
  type TranslationKey as EditorTranslationKey,
} from '@dihor/skincrafter-editor';

export type SkinViewTranslationKey =
  | 'skinView.error.usernameRequired'
  | 'skinView.error.playerNotFound'
  | 'skinView.error.skinTextureMissing'
  | 'skinView.error.network'
  | 'skinView.error.serviceUnavailable'
  | 'skinView.error.rateLimited'
  | 'skinView.error.invalidResponse';

export type StandaloneTranslationKey = EditorTranslationKey | SkinViewTranslationKey;

const standaloneTranslations: Record<Language, Record<SkinViewTranslationKey, string>> = {
  en: {
    'skinView.error.usernameRequired': 'Please enter a Minecraft username.',
    'skinView.error.playerNotFound': 'Minecraft player not found.',
    'skinView.error.skinTextureMissing': 'This player does not have an available skin texture.',
    'skinView.error.network': 'Could not reach PlayerDB. Check your connection and try again.',
    'skinView.error.serviceUnavailable': 'PlayerDB is temporarily unavailable. Try again later.',
    'skinView.error.rateLimited': 'Too many player lookup requests. Try again in a moment.',
    'skinView.error.invalidResponse': 'PlayerDB returned an unexpected response. Try again later.',
  },
  pl: {
    'skinView.error.usernameRequired': 'Podaj nazwe gracza Minecraft.',
    'skinView.error.playerNotFound': 'Nie znaleziono gracza Minecraft.',
    'skinView.error.skinTextureMissing': 'Ten gracz nie ma dostepnej tekstury skina.',
    'skinView.error.network': 'Nie udalo sie polaczyc z PlayerDB. Sprawdz polaczenie i sprobuj ponownie.',
    'skinView.error.serviceUnavailable': 'PlayerDB jest chwilowo niedostepne. Sprobuj ponownie pozniej.',
    'skinView.error.rateLimited': 'Za duzo zapytan o graczy. Sprobuj ponownie za chwile.',
    'skinView.error.invalidResponse': 'PlayerDB zwrocilo nieoczekiwana odpowiedz. Sprobuj ponownie pozniej.',
  },
};

function isSkinViewTranslationKey(key: StandaloneTranslationKey): key is SkinViewTranslationKey {
  return key in standaloneTranslations.en;
}

export function translateStandalone(language: Language, key: StandaloneTranslationKey): string {
  return isSkinViewTranslationKey(key)
    ? standaloneTranslations[language][key]
    : translateEditor(language, key);
}
