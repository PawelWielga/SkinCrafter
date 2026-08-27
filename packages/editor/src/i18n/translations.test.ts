import { describe, expect, it } from 'vitest';
import { defaultLanguage, isLanguage, languages, translate, translations } from './translations';

describe('editor translations', () => {
  it('keeps every registered locale aligned with the default-language keys', () => {
    const defaultKeys = Object.keys(translations[defaultLanguage]).sort();

    for (const language of languages) {
      expect(Object.keys(translations[language]).sort()).toEqual(defaultKeys);
    }
  });

  it('derives the supported language list from the locale registry', () => {
    expect(languages).toEqual(Object.keys(translations));
  });

  it('uses Polish diacritics in localized UI copy', () => {
    expect(translations.pl).toMatchObject({
      'nav.skinView': 'Podgląd',
      'nav.language': 'Język',
      'panel.preview': 'Podgląd',
      'action.changePose': 'Zmień Pozę',
      'action.hideOverlay': 'Ukryj Warstwę',
      'action.showOverlay': 'Pokaż Warstwę',
      'action.disableAutoRotate': 'Zatrzymaj Obrót',
      'action.enableAutoRotate': 'Włącz Obrót',
      'action.dragLayer': 'Przeciągnij warstwę',
      'action.moveLayerUp': 'Przesuń warstwę wyżej',
      'action.moveLayerDown': 'Przesuń warstwę niżej',
      'action.retryPreview': 'Ponów Podgląd',
      'error.assetLoad':
        'Nie udało się wczytać tekstury skina. Sprawdź wybrane elementy i spróbuj ponownie.',
      'error.generation':
        'Nie udało się wygenerować skina. Zmień wybór i spróbuj ponownie.',
      'error.initialSkin': 'Przekazany skin nie jest prawidłowym plikiem PNG Minecraft 64x64.',
      'error.preview':
        'Nie udało się uruchomić podglądu 3D. Edycja i pobieranie skina mogą nadal działać.',
      'category.sex': 'Płeć',
      'category.skinColor': 'Kolor Skóry',
      'category.hair': 'Włosy',
      'category.hairColor': 'Kolor Włosów',
      'option.sex.Male': 'Mężczyzna',
      'option.race.Human': 'Człowiek',
      'option.race.Bear': 'Niedźwiedź',
      'option.eyes.Small': 'Małe',
      'option.eyes.Big': 'Duże',
      'option.color.brown': 'Brązowy',
    });
  });

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
