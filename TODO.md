# TODO.md

## Cel

Ten plik zamienia decyzje z `DECYZJE.md` na konkretne zadania wykonawcze. Priorytetem jest dopiecie obecnego kreatora skinow jako MVP: pelne UI/UX z miejscem na docelowe kategorie, skladanie finalnej tekstury i pobranie PNG skina.

## Status Prac

- [x] Fundament techniczny repo gotowy
- [ ] MVP kreatora gotowe
- [ ] Porzadki repo i jakosci gotowe
- [ ] Backlog po MVP uporzadkowany

## Decyzje Produktowe

- Glowna funkcja: kreator skinow.
- MVP: skladanie skina i pobranie finalnej tekstury PNG.
- UI: prosty pixelowy styl, ostre krawedzie, obecny uklad zostaje.
- Kategorie docelowe: `race`, `sex`, `skinColor`, `eyes`, `eyesColor`, `hair`, `hairColor`, `hat`, `shirt`, `pants`, `shoes`, `accessory`.
- Kategorie opcjonalne maja miec `None`.
- `skinColor` zostaje tintem jednej tekstury bazowej w MVP i docelowo, chyba ze pojawia sie problemy wizualne.
- `McSkinView` zostaje poboczna funkcja widoczna w nawigacji, ale nie jest priorytetem MVP.
- Persistencja: jezyk strony i aktualny wyglad skina w `localStorage`; bez wielu presetow i bez backendu.
- Testy: pobiezne, ale kompozycja tekstur ma miec test pixelowy.
- CI ma blokowac na `lint`, `test` i `build`.

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
- [x] Ukryta atrapa sekcji `Eyes`
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

- [ ] Spisac aktualny przeplyw danych: `races`, `skinColorMap`, `raceTextureMap`, `hatTextureMap`, `layerOrder`, `combineTextures`
- [ ] Zdecydowac technicznie, czy zostajemy przy osobnych mapach, czy wprowadzamy wspolna definicje kategorii
- [ ] Jesli zostajemy przy osobnych mapach: opisac w README lub komentarzu, ktore pliki trzeba zmienic przy dodawaniu opcji
- [ ] Jesli wprowadzamy wspolna definicje: przygotowac jeden model kategorii z id, label, opcjami, domyslna wartoscia, opcja `None`, tekstura/tint
- [ ] Upewnic sie, ze `layerOrder` obsluguje docelowe kategorie bez zgadywania kolejnosci
- [ ] Zachowac globalna kolejnosc warstw w MVP

Definition of done:
- dodanie nowej kategorii lub opcji ma jasno opisany i powtarzalny proces
- widoczna kategoria zawsze ma stan, wartosc domyslna i realny wplyw albo `None`

### 8. Dodac miejsca w UI na docelowe kategorie MVP

- [ ] Dodac sekcje `Sex` z opcja `None` lub jedna domyslna opcja, jesli brak assetow
- [ ] Przywrocic sekcje `Eyes` jako pelna kategorie ksztaltu oczu
- [ ] Dodac sekcje `Eye Color` jako osobna kategorie koloru oczu
- [ ] Dodac sekcje `Hair` z opcja `None`
- [ ] Dodac sekcje `Hair Color`
- [ ] Utrzymac sekcje `Hat`, ale upewnic sie, ze `None` jest pierwsza i domyslna opcja
- [ ] Dodac sekcje `Shirt` z opcja `None`
- [ ] Dodac sekcje `Pants` z opcja `None`
- [ ] Dodac sekcje `Shoes` z opcja `None`
- [ ] Dodac sekcje `Accessory` z opcja `None`
- [ ] Upewnic sie, ze UI nadal miesci sie na desktopie i mobile

Definition of done:
- kreator pokazuje komplet docelowych kategorii
- kategorie bez assetow nie udaja gotowej funkcji, tylko maja jasna opcje `None`
- obecny pixelowy styl i ostre krawedzie pozostaja spojne

### 9. Podlaczyc stan dla wszystkich kategorii kreatora

- [ ] Dodac stan dla `sex`
- [ ] Dodac stan dla `eyes`
- [ ] Dodac stan dla `eyesColor`
- [ ] Dodac stan dla `hair`
- [ ] Dodac stan dla `hairColor`
- [ ] Dodac stan dla `shirt`
- [ ] Dodac stan dla `pants`
- [ ] Dodac stan dla `shoes`
- [ ] Dodac stan dla `accessory`
- [ ] Dodac domyslne wartosci dla wszystkich kategorii
- [ ] Upewnic sie, ze zmiana `race` nie psuje pozostalych ustawien
- [ ] Upewnic sie, ze widoczne opcje z assetami zmieniaja preview

Definition of done:
- kazda sekcja UI ma kontrolowany stan
- finalna tekstura buduje sie ze wszystkich aktywnych warstw

### 10. Dodac mapy tekstur i warstwy dla nowych kategorii

- [ ] Dodac pliki danych dla `sex`
- [ ] Dodac pliki danych dla `eyes`
- [ ] Dodac pliki danych dla `eyesColor`
- [ ] Dodac pliki danych dla `hair`
- [ ] Dodac pliki danych dla `hairColor`
- [ ] Dodac pliki danych dla `shirt`
- [ ] Dodac pliki danych dla `pants`
- [ ] Dodac pliki danych dla `shoes`
- [ ] Dodac pliki danych dla `accessory`
- [ ] Dodac foldery assetow w `public/textures/*` tylko tam, gdzie potrzebne sa realne PNG
- [ ] Dodac placeholder `None` jako brak tekstury, a nie pusty asset PNG
- [ ] Rozszerzyc `layerOrder` o nowe warstwy w kolejnosci globalnej

Definition of done:
- kazda docelowa kategoria ma swoje miejsce w danych
- brak assetu oznacza `None`, nie martwa kontrolke

### 11. Utrzymac tint jako docelowe rozwiazanie kolorow

- [ ] Uporzadkowac typy `combineTextures`, zeby warstwa mogla miec `url`, `tint` i opcjonalny tryb mieszania
- [ ] Upewnic sie, ze `skinColor` tintuje tylko bazowa warstwe skory
- [ ] Przygotowac mozliwosc tintowania `hairColor` bez osobnych tekstur koloru wlosow
- [ ] Przygotowac mozliwosc tintowania `eyesColor` bez osobnych tekstur koloru oczu, jesli assety beda na to pozwalac
- [ ] Zapisac ograniczenie: osobne tekstury kolorow tylko gdy tint wyglada zle

Definition of done:
- kolor skory dziala przez tint
- model nie wymusza mnozenia osobnych PNG dla kazdego koloru

### 12. Dopiac pobieranie finalnego PNG skina

- [ ] Zweryfikowac, ze `Download` pobiera aktualna finalna teksture ze wszystkimi warstwami
- [ ] Upewnic sie, ze pobierany plik ma poprawny rozmiar Minecraft skin PNG
- [ ] Upewnic sie, ze `Download` jest nieaktywny lub bezpieczny, gdy tekstura nie jest jeszcze gotowa
- [ ] Ustalic nazwe pobieranego pliku, np. `skincrafter-skin.png`
- [ ] Nie dodawac eksportu screenshotu w MVP

Definition of done:
- uzytkownik moze zbudowac skina i pobrac finalny PNG

## P2: Persistencja i Jezyki

### 13. Zapis aktualnego wygladu w `localStorage`

- [ ] Zmienic zapis z pojedynczych kluczy na jeden obiekt aktualnego wygladu albo jasno opisac obecny zestaw kluczy
- [ ] Zapisywac `race`
- [ ] Zapisywac `sex`
- [ ] Zapisywac `skinColor`
- [ ] Zapisywac `eyes`
- [ ] Zapisywac `eyesColor`
- [ ] Zapisywac `hair`
- [ ] Zapisywac `hairColor`
- [ ] Zapisywac `hat`
- [ ] Zapisywac `shirt`
- [ ] Zapisywac `pants`
- [ ] Zapisywac `shoes`
- [ ] Zapisywac `accessory`
- [ ] Nie dodawac wielu presetow
- [ ] Nie dodawac backendu
- [ ] Nie dodawac wersjonowania zapisow na tym etapie

Definition of done:
- po odswiezeniu strony aktualny wyglad skina wraca
- nie ma zapisu ustawien dla funkcji, ktore nie istnieja w UI

### 14. Przygotowac wielojezycznosc

- [ ] Wybrac minimalna strukture slownikow, np. `src/i18n`
- [ ] Przeniesc teksty glownego UI do slownika
- [ ] Dodac zapis wybranego jezyka w `localStorage`
- [ ] Dodac prosty wybor jezyka w UI
- [ ] Utrzymac angielski jako domyslny jezyk, dopoki nie ma pelnych tlumaczen
- [ ] Przygotowac polskie tlumaczenie podstawowych etykiet, jesli nie rozbije to zakresu MVP

Definition of done:
- teksty glownego kreatora nie sa zaszyte bezposrednio w komponentach
- wybor jezyka jest zapamietywany lokalnie

## P3: Jakosc i CI

### 15. Rozszerzyc testy regresyjne

- [x] Testy `fetchSkin`
- [ ] Dodac test pixelowy dla `combineTextures`
- [ ] Sprawdzic w tescie, ze tint zmienia kolor pikseli finalnej tekstury
- [ ] Sprawdzic w tescie, ze warstwa `None` nie zmienia finalnej tekstury
- [ ] Dodac lekki smoke test glownej strony kreatora
- [ ] Nie dodawac rozbudowanego Playwright na tym etapie

Definition of done:
- najwazniejsza logika skladania tekstur ma minimalna ochrone
- testy pozostaja szybkie i pobiezne

### 16. CI blokujace na calosci

- [ ] Zaktualizowac workflow testowy, zeby uruchamial `npm run lint`
- [ ] Zaktualizowac workflow testowy, zeby uruchamial `npm test`
- [ ] Zaktualizowac workflow testowy, zeby uruchamial `npm run build`
- [ ] Upewnic sie, ze workflowy uzywaja `npm ci`
- [ ] Upewnic sie, ze workflowy dzialaja na push i pull request

Definition of done:
- CI blokuje zmiany, jesli nie przejdzie lint, test albo build

### 17. Czyszczenie encodingu i komentarzy

- [ ] Przejrzec `src/components/three/three-preview.tsx`
- [ ] Przejrzec `src/components/three/pose-utils.ts`
- [ ] Przejrzec pozostale pliki `src`
- [ ] Usunac albo poprawic komentarze z artefaktami kodowania
- [ ] Nie robic masowego reformatowania niezwiazanego z zadaniem

Definition of done:
- aktywny kod nie zawiera uszkodzonych znakow w komentarzach ani UI

### 18. Zweryfikowac `template3.html`

- [ ] Porownac styl `template3.html` z obecna aplikacja
- [ ] Jesli styl jest juz przeniesiony: usunac `template3.html`
- [ ] Jesli zawiera nadal przydatne wzorce: przeniesc je do dokumentacji lub osobnej notatki
- [ ] Nie zostawiac pliku jako nieopisanego prototypu w root repo

Definition of done:
- root repo nie zawiera niejasnego prototypu bez przeznaczenia

## P4: McSkinView jako Funkcja Poboczna

### 19. Utrzymac `McSkinView`, ale nie rozwijac przed MVP

- [ ] Zostawic link w glownej nawigacji
- [ ] Oznaczyc w README, ze to poboczna funkcja
- [ ] Nie integrowac Mojang API z Wardrobe
- [ ] Nie dodawac edycji skina zaladowanego z Mojang API
- [ ] Upewnic sie, ze bledy API sa czytelne dla uzytkownika

Definition of done:
- `McSkinView` dziala jako osobna sciezka, ale nie blokuje kreatora MVP

## P5: Po MVP

### 20. Funkcje odlozone na pozniej

- [ ] Reczne obracanie preview
- [ ] Kontrola tla preview
- [ ] Rozbudowana kontrola overlay przed eksportem
- [ ] Model slim arms
- [ ] Kolorowanie kazdego elementu ubioru
- [ ] Bardziej rozbudowany uklad krokow lub zakladek w panelu
- [ ] Eksport screenshotu postaci
- [ ] Wiele lokalnych presetow
- [ ] Backend lub synchronizacja presetow

Definition of done:
- zadania po MVP nie mieszaja sie z obecnym zakresem

## Walidacja Po Kazdej Wiekszej Zmianie

- [ ] `npm run lint`
- [ ] `npm test`
- [ ] `npm run build`
- [ ] Jesli zmieniany jest UI/preview: sprawdzic desktop i mobile w przegladarce
- [ ] Jesli zmieniany jest eksport: pobrac PNG i obejrzec wynik
