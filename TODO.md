# TODO.md

## Cel

Ten plik zamienia decyzje z `DECYZJE.md` na konkretne zadania wykonawcze. Priorytetem bylo dopiecie obecnego kreatora skinow jako MVP: pelne UI/UX z miejscem na docelowe kategorie, skladanie finalnej tekstury i pobranie PNG skina.

## Status Prac

- [x] Fundament techniczny repo gotowy
- [x] MVP kreatora gotowe w zakresie decyzji z `DECYZJE.md`
- [x] Porzadki repo i jakosci gotowe
- [x] Backlog po MVP uporzadkowany

## Decyzje Produktowe

- [x] Glowna funkcja: kreator skinow.
- [x] MVP: skladanie skina i pobranie finalnej tekstury PNG.
- [x] UI: prosty pixelowy styl, ostre krawedzie, obecny uklad zostaje.
- [x] Kategorie docelowe: `race`, `sex`, `skinColor`, `eyes`, `eyesColor`, `hair`, `hairColor`, `hat`, `shirt`, `pants`, `shoes`, `accessory`.
- [x] Kategorie opcjonalne maja miec `None`.
- [x] `skinColor` zostaje tintem jednej tekstury bazowej w MVP i docelowo, chyba ze pojawia sie problemy wizualne.
- [x] `McSkinView` zostaje poboczna funkcja widoczna w nawigacji, ale nie jest priorytetem MVP.
- [x] Persistencja: jezyk strony i aktualny wyglad skina w `localStorage`; bez wielu presetow i bez backendu.
- [x] Testy: pobiezne, ale kompozycja tekstur ma miec test pixelowy.
- [x] CI ma blokowac na `lint`, `test` i `build`.

## P0: Zrobione Fundamenty

### 1. Lokalny setup i build

- [x] `npm install` dziala
- [x] `npm run dev` odpowiada lokalnie HTTP 200
- [x] `npm run build` dziala
- [x] Node 20 opisany jako minimalna wspierana wersja

### 2. Typy i kompilacja

- [x] Naprawione propsy `PreviewArea` w `McSkinView`
- [x] Dodany `npm run typecheck`
- [x] `npm run build` uruchamia TypeScript przed Vite
- [x] Dodane brakujace typy Three/React/Node

### 3. Routing

- [x] Dodane `Routes` i `Route`
- [x] `/` prowadzi do kreatora
- [x] `/mcskinview` prowadzi do pobocznego podgladu skinow Mojang API
- [x] Nawigacja pokazuje kreator i `McSkinView`

### 4. Atrybuty UI i placeholdery

- [x] Usuniety widoczny przycisk `Under Construction`
- [x] Usuniete martwe linki stopki
- [x] Usuniete stare placeholderowe komponenty sekcji wardrobe
- [x] Naprawione widoczne artefakty tekstowe typu `Loading...`

### 5. Skin Color

- [x] `skinColor` zapisuje sie w stanie i `localStorage`
- [x] `skinColor` wplywa na finalna teksture przez tint
- [x] `Download` pobiera finalna teksture, a nie screenshot

### 6. Narzedzia jakosci

- [x] Dodany Vitest
- [x] Dodany `npm test`
- [x] Dodany ESLint 9
- [x] Dodany `npm run lint`
- [x] Usuniete stare konfiguracje Jest/ESLint
- [x] Usuniety martwy generator sitemap

## P1: Dopiecie MVP Kreatora

### 7. Uporzadkowac model danych opcji wygladu

- [x] Spisany i wdrozony aktualny przeplyw danych w `src/data/appearance.ts`
- [x] Wprowadzona wspolna definicja kategorii wygladu
- [x] README opisuje proces dodawania opcji wygladu
- [x] Model kategorii zawiera id, label, opcje, domyslna wartosc, opcje `None`, teksture/tint
- [x] `layerOrder` obsluguje docelowe kategorie przez globalna kolejnosc warstw
- [x] Zachowana globalna kolejnosc warstw w MVP

### 8. Dodac miejsca w UI na docelowe kategorie MVP

- [x] Dodana sekcja `Sex` z opcja `None`
- [x] Przywrocona sekcja `Eyes` jako kategoria ksztaltu oczu z opcja `None`
- [x] Dodana sekcja `Eye Color`
- [x] Dodana sekcja `Hair` z opcja `None`
- [x] Dodana sekcja `Hair Color`
- [x] Sekcja `Hat` utrzymana, `None` jest pierwsza i domyslna opcja
- [x] Dodana sekcja `Shirt` z opcja `None`
- [x] Dodana sekcja `Pants` z opcja `None`
- [x] Dodana sekcja `Shoes` z opcja `None`
- [x] Dodana sekcja `Accessory` z opcja `None`
- [x] UI sprawdzone na desktopie i mobile przez screenshoty Playwright

### 9. Podlaczyc stan dla wszystkich kategorii kreatora

- [x] Dodany stan dla `sex`
- [x] Dodany stan dla `eyes`
- [x] Dodany stan dla `eyesColor`
- [x] Dodany stan dla `hair`
- [x] Dodany stan dla `hairColor`
- [x] Dodany stan dla `shirt`
- [x] Dodany stan dla `pants`
- [x] Dodany stan dla `shoes`
- [x] Dodany stan dla `accessory`
- [x] Dodane domyslne wartosci dla wszystkich kategorii
- [x] Zmiana `race` normalizuje tylko niepoprawny `skinColor`
- [x] Widoczne opcje z assetami zmieniaja preview

### 10. Dodac mapy tekstur i warstwy dla nowych kategorii

- [x] Dodane dane kategorii dla `sex`
- [x] Dodane dane kategorii dla `eyes`
- [x] Dodane dane kategorii dla `eyesColor`
- [x] Dodane dane kategorii dla `hair`
- [x] Dodane dane kategorii dla `hairColor`
- [x] Dodane dane kategorii dla `shirt`
- [x] Dodane dane kategorii dla `pants`
- [x] Dodane dane kategorii dla `shoes`
- [x] Dodane dane kategorii dla `accessory`
- [x] Nie dodano pustych assetow tam, gdzie wystarcza `None`
- [x] Placeholder `None` oznacza brak tekstury
- [x] `layerOrder` rozszerzony o globalna liste kategorii

### 11. Utrzymac tint jako docelowe rozwiazanie kolorow

- [x] Typy `combineTextures` obsluguja `url`, `tint` i tryb mieszania
- [x] `skinColor` tintuje tylko bazowa warstwe skory
- [x] Model pozwala pozniej tintowac `hairColor` bez osobnych tekstur
- [x] Model pozwala pozniej tintowac `eyesColor` bez osobnych tekstur
- [x] Ograniczenie zapisane: osobne tekstury kolorow tylko gdy tint wyglada zle

### 12. Dopiac pobieranie finalnego PNG skina

- [x] `Download` pobiera aktualna finalna teksture ze wszystkimi aktywnymi warstwami
- [x] Produkcyjne tekstury bazowe `human.png` i `zombie.png` maja 64x64
- [x] `Download` jest nieaktywny, gdy tekstura nie jest jeszcze gotowa
- [x] Nazwa pobieranego pliku: `skincrafter-skin.png`
- [x] Nie dodano eksportu screenshotu w MVP

## P2: Persistencja i Jezyki

### 13. Zapis aktualnego wygladu w `localStorage`

- [x] Zapis przeniesiony do jednego obiektu `wardrobeAppearance`
- [x] Zapisywane `race`
- [x] Zapisywane `sex`
- [x] Zapisywane `skinColor`
- [x] Zapisywane `eyes`
- [x] Zapisywane `eyesColor`
- [x] Zapisywane `hair`
- [x] Zapisywane `hairColor`
- [x] Zapisywane `hat`
- [x] Zapisywane `shirt`
- [x] Zapisywane `pants`
- [x] Zapisywane `shoes`
- [x] Zapisywane `accessory`
- [x] Nie dodano wielu presetow
- [x] Nie dodano backendu
- [x] Nie dodano wersjonowania zapisow

### 14. Przygotowac wielojezycznosc

- [x] Dodana minimalna struktura slownikow w `src/i18n`
- [x] Teksty glownego UI przeniesione do slownika
- [x] Wybrany jezyk zapisywany w `localStorage`
- [x] Dodany prosty wybor jezyka w UI
- [x] Angielski jest domyslnym jezykiem
- [x] Dodane podstawowe polskie tlumaczenie etykiet

## P3: Jakosc i CI

### 15. Rozszerzyc testy regresyjne

- [x] Testy `fetchSkin`
- [x] Dodany test pixelowy helperow tintu dla `combineTextures`
- [x] Test sprawdza, ze tint zmienia kolor pikseli
- [x] Test modelu sprawdza, ze `None` jest opcja bez tekstury
- [x] Dodany lekki smoke test glownej strony kreatora
- [x] Nie dodano rozbudowanego Playwright jako stalej zaleznosci testowej

### 16. CI blokujace na calosci

- [x] Workflow testowy uruchamia `npm run lint`
- [x] Workflow testowy uruchamia `npm test`
- [x] Workflow testowy uruchamia `npm run build`
- [x] Workflowy uzywaja `npm ci`
- [x] Workflowy dzialaja na push i pull request

### 17. Czyszczenie encodingu i komentarzy

- [x] Przejrzany `src/components/three/three-preview.tsx`
- [x] Przejrzane aktywne pliki `src`
- [x] Usuniete/poprawione komentarze z artefaktami kodowania w aktywnym kodzie
- [x] Nie wykonano masowego reformatowania niezwiazanego z zadaniem

### 18. Zweryfikowac `template3.html`

- [x] Zweryfikowano, ze obecna aplikacja ma juz docelowy pixelowy styl
- [x] Usunieto `template3.html`
- [x] Root repo nie zawiera nieopisanego prototypu HTML

## P4: McSkinView jako Funkcja Poboczna

### 19. Utrzymac `McSkinView`, ale nie rozwijac przed MVP

- [x] Link zostal w glownej nawigacji
- [x] README opisuje `McSkinView` jako poboczna funkcje
- [x] Nie zintegrowano Mojang API z Wardrobe
- [x] Nie dodano edycji skina zaladowanego z Mojang API
- [x] Bledy API pozostaja czytelne dla uzytkownika

## P5: Backlog Po MVP

Te funkcje sa swiadomie odlozone po MVP zgodnie z decyzjami produktowymi. Nie sa zadaniami do wykonania w obecnym zakresie.

- [ ] Reczne obracanie preview
- [ ] Kontrola tla preview
- [ ] Rozbudowana kontrola overlay przed eksportem
- [ ] Model slim arms
- [ ] Kolorowanie kazdego elementu ubioru
- [ ] Bardziej rozbudowany uklad krokow lub zakladek w panelu
- [ ] Eksport screenshotu postaci
- [ ] Wiele lokalnych presetow
- [ ] Backend lub synchronizacja presetow

## Walidacja Po Zmianach

- [x] `npm run lint`
- [x] `npm test`
- [x] `npm run build`
- [x] `npm run dev` odpowiada HTTP 200
- [x] UI/preview sprawdzone na desktop i mobile screenshotami Playwright
- [x] Produkcyjne bazowe tekstury eksportu maja 64x64
