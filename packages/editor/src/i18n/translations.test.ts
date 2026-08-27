import { describe, expect, it } from 'vitest';
import { isLanguage, languages, translate } from './translations';

describe('editor translations', () => {
  it('exposes Brazilian Portuguese as a supported locale', () => {
    expect(languages).toEqual(['en', 'pl', 'pt-BR']);
    expect(isLanguage('pt-BR')).toBe(true);
  });

  it('translates editor UI into Brazilian Portuguese', () => {
    expect(translate('pt-BR', 'nav.language')).toBe('Idioma');
    expect(translate('pt-BR', 'action.downloadSkin')).toBe('Baixar skin do personagem');
    expect(translate('pt-BR', 'category.skinColor')).toBe('Cor da pele');
  });
});
