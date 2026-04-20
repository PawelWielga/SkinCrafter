export type Language = 'en' | 'pl';

export const languages: Language[] = ['en', 'pl'];

export const defaultLanguage: Language = 'en';

export const translations = {
  en: {
    'app.title': 'SkinCrafter',
    'nav.wardrobe': 'Wardrobe',
    'nav.skinView': 'Skin View',
    'nav.language': 'Language',
    'panel.preview': 'Preview',
    'panel.customization': 'Customization',
    'action.changePose': 'Change Pose',
    'action.hideOverlay': 'Hide Overlay',
    'action.showOverlay': 'Show Overlay',
    'action.download': 'Download',
    'action.downloadSkin': 'Download character skin',
    'category.race': 'Character Race',
    'category.sex': 'Sex',
    'category.skinColor': 'Skin Color',
    'category.eyes': 'Eyes',
    'category.eyesColor': 'Eye Color',
    'category.hair': 'Hair',
    'category.hairColor': 'Hair Color',
    'category.hat': 'Hat',
    'category.shirt': 'Shirt',
    'category.pants': 'Pants',
    'category.shoes': 'Shoes',
    'category.accessory': 'Accessory',
    'option.none': 'None',
    'option.race.Human': 'Human',
    'option.race.Zombie': 'Zombie',
    'option.race.Template': 'Template',
    'option.hat.Duck': 'Duck',
    'option.color.blue': 'Blue',
    'option.color.green': 'Green',
    'option.color.brown': 'Brown',
    'option.color.blond': 'Blond',
    'option.color.black': 'Black',
  },
  pl: {
    'app.title': 'SkinCrafter',
    'nav.wardrobe': 'Kreator',
    'nav.skinView': 'Podglad',
    'nav.language': 'Jezyk',
    'panel.preview': 'Podglad',
    'panel.customization': 'Personalizacja',
    'action.changePose': 'Zmien Poze',
    'action.hideOverlay': 'Ukryj Warstwe',
    'action.showOverlay': 'Pokaz Warstwe',
    'action.download': 'Pobierz',
    'action.downloadSkin': 'Pobierz skin postaci',
    'category.race': 'Rasa Postaci',
    'category.sex': 'Plec',
    'category.skinColor': 'Kolor Skory',
    'category.eyes': 'Oczy',
    'category.eyesColor': 'Kolor Oczu',
    'category.hair': 'Wlosy',
    'category.hairColor': 'Kolor Wlosow',
    'category.hat': 'Czapka',
    'category.shirt': 'Koszulka',
    'category.pants': 'Spodnie',
    'category.shoes': 'Buty',
    'category.accessory': 'Dodatek',
    'option.none': 'Brak',
    'option.race.Human': 'Czlowiek',
    'option.race.Zombie': 'Zombie',
    'option.race.Template': 'Szablon',
    'option.hat.Duck': 'Kaczka',
    'option.color.blue': 'Niebieski',
    'option.color.green': 'Zielony',
    'option.color.brown': 'Brazowy',
    'option.color.blond': 'Blond',
    'option.color.black': 'Czarny',
  },
} as const;

export type TranslationKey = keyof (typeof translations)[typeof defaultLanguage];

export function isLanguage(value: string | null): value is Language {
  return !!value && languages.includes(value as Language);
}

export function translate(language: Language, key: TranslationKey): string {
  return translations[language][key] ?? translations[defaultLanguage][key] ?? key;
}
