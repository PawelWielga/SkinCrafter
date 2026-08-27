import { en } from './locales/en';
import { pl } from './locales/pl';
import { ptBR } from './locales/pt-BR';

export const translations = {
  en,
  pl,
  'pt-BR': ptBR,
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof en;

export const languages = Object.keys(translations) as Language[];
export const defaultLanguage: Language = 'en';

export function isLanguage(value: string | null): value is Language {
  return !!value && languages.includes(value as Language);
}

export function translate(language: Language, key: TranslationKey): string {
  return translations[language][key] ?? translations[defaultLanguage][key] ?? key;
}
