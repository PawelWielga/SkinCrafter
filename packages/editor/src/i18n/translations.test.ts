import { describe, expect, it } from 'vitest';
import { translations } from './translations';

describe('Polish translations', () => {
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
});
