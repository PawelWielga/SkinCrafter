# DECYZJE.md

Ten plik sluzy do ustalenia nieoczywistych decyzji produktowych i technicznych przed dalszym rozwojem SkinCraftera. Dopisuj odpowiedzi pod pytaniami. Po uzupelnieniu mozna zamienic decyzje na konkretne zadania w `TODO.md`.

## Jak uzupelniac

Przy kazdym pytaniu wypelnij:

- Odpowiedz:
- Decyzja:
- Konsekwencje / notatki:

Jesli decyzja nie jest jeszcze gotowa, wpisz `do ustalenia`.

## 1. Zakres MVP

### 1.1 Jaki jest najwazniejszy cel pierwszej stabilnej wersji?

Odpowiedz: Pełne UI/UX aplikacji, z miejscem na wszytkie elementy kreacji do wyboru, na początku jako jednyna opcja w kategoriach może być 'NONE'

Decyzja:

Konsekwencje / notatki:

### 1.2 Czy MVP ma byc przede wszystkim kreatorem skina, czy narzedziem do podgladu/skladania screenshotow postaci?

Odpowiedz: Główna funkcja to kreator skinów

Decyzja:

Konsekwencje / notatki:

### 1.3 Jakie funkcje musza byc gotowe, zeby uznac MVP za skonczone?

Odpowiedz: Skłądnie skina i jego zapis/pobranie

Decyzja:

Konsekwencje / notatki:

### 1.4 Ktore funkcje sa wyraznie poza MVP?

Odpowiedz: podgląd skinów przez minecraftAPI

Decyzja:

Konsekwencje / notatki:

## 2. Priorytet: Wardrobe vs McSkinView

### 2.1 Czy `McSkinView` ma byc aktywna czescia produktu, czy tylko pobocznym narzedziem developerskim/demo?

Odpowiedz: dodatkowa poboczna funkcjonalność

Decyzja:

Konsekwencje / notatki:

### 2.2 Czy link do `McSkinView` powinien byc widoczny w glownej nawigacji dla uzytkownika?

Odpowiedz: tak

Decyzja:

Konsekwencje / notatki:

### 2.3 Czy funkcje Mojang API sa wazniejsze od rozwijania wlasnych warstw wygladu?

Odpowiedz: nie

Decyzja:

Konsekwencje / notatki:

### 2.4 Czy w przyszlosci uzytkownik powinien moc zaladowac skin z Mojang API i edytowac go w Wardrobe?

Odpowiedz: nie

Decyzja:

Konsekwencje / notatki:

## 3. Model Danych Kreatora

### 3.1 Czy opcje wygladu maja byc modelowane jako jedna wspolna struktura, czy jako osobne mapy dla kazdego typu warstwy?

Odpowiedz: nie rozumiem pytania, tak jak to jest teraz rozwiązane wydaje mi się że jest ok, Jeżeli widzisz jakieś problemy to zwróć mi na nie uwagę.

Decyzja:

Konsekwencje / notatki:

### 3.2 Jakie typy warstw powinny istniec docelowo?

Przyklady: race, skinColor, eyes, hair, hat, shirt, pants, shoes, accessory.

Odpowiedz:  race, sex, skinColor, eyes, eyes color, hair, hair color, hat, shirt, pants, shoes, accessory. 

Decyzja:

Konsekwencje / notatki: dodatkowo w kolejnej wersji aplikacji być może dodamy opcję kolorowania każdego z elementów ubioru.

### 3.3 Czy kazda opcja ma byc osobna tekstura PNG, czy czesc opcji moze byc generowana programowo?

Odpowiedz: może być generowana, ale głównie operamy się na PNG

Decyzja:

Konsekwencje / notatki:

### 3.4 Czy `skinColor` powinien pozostac tintem tekstury bazowej, czy docelowo powinien wybierac osobne tekstury?

Odpowiedz: zostawic tint jako rozwiazanie MVP i docelowe, chyba ze pojawia sie problemy wizualne

Decyzja: `skinColor` barwi jedna teksture bazowa przez tint; nie tworzymy osobnych tekstur koloru skory na MVP.

Konsekwencje / notatki: osobne tekstury koloru skory wracaja do rozwazenia tylko wtedy, gdy tint bedzie wygladal zle albo ograniczy jakosc assetow.

### 3.5 Czy kolejnosc warstw ma byc globalna, czy definiowana per opcja/kategoria?

Odpowiedz: w mvp globalne

Decyzja:

Konsekwencje / notatki:

### 3.6 Jak ma wygladac proces dodawania nowej opcji wygladu?

Odpowiedz: nową opcję wyglądu w MVP dodaje tylko developer poprzez edycje kodu/strony

Decyzja:

Konsekwencje / notatki:

## 4. Zakres Opcji Wygladu

### 4.1 Ktore rasy powinny byc widoczne w najblizszej wersji?

Odpowiedz: Human, Zombie

Decyzja:

Konsekwencje / notatki:

### 4.2 Czy `Template` ma zostac tylko opcja developerska?

Odpowiedz: tak

Decyzja:

Konsekwencje / notatki:

### 4.3 Czy sekcja `Eyes` ma wrocic jako pelna funkcja?

Odpowiedz: Tak

Decyzja:

Konsekwencje / notatki:

### 4.4 Jesli `Eyes` wraca, co dokladnie ma zmieniac?

Przyklady: ksztalt oczu, kolor oczu, styl brwi, osobna warstwa na glowie.

Odpowiedz: Eyes decyduje o kształcie oczu, od koloru jest kolejna sekcja.

Decyzja:

Konsekwencje / notatki:

### 4.5 Jakie kolejne kategorie ubioru sa najwazniejsze?

Odpowiedz: Na razie nie wiem

Decyzja:

Konsekwencje / notatki:

### 4.6 Czy uzytkownik powinien moc wybrac `None` dla kazdej kategorii opcjonalnej?

Odpowiedz: Tak

Decyzja:

Konsekwencje / notatki:

## 5. UI i UX

### 5.1 Czy aplikacja ma byc po angielsku, po polsku, czy przygotowana pod oba jezyki?

Odpowiedz: Wiele języków

Decyzja:

Konsekwencje / notatki:

### 5.2 Czy UI ma pozostac prosty i pixelowy, czy isc bardziej w kierunku rozbudowanego RPG character creatora?

Odpowiedz: Prosty pixelowy. ostre krawędzie

Decyzja:

Konsekwencje / notatki:

### 5.3 Czy panel opcji powinien byc zawsze widoczny, czy podzielony na zakladki/kroki?

Odpowiedz: na razie UI/UX zostaje tak jak jest

Decyzja:

Konsekwencje / notatki: do zastanowienia się później

### 5.4 Czy podglad 3D ma byc glownym elementem ekranu na mobile, czy panel edycji powinien miec pierwszenstwo?

Odpowiedz: 3d jest ok

Decyzja:

Konsekwencje / notatki:

### 5.5 Jakie akcje uzytkownik powinien miec na koncu pracy?

Przyklady: download PNG skina, download screenshotu, kopiowanie linku, zapis presetow lokalnie.

Odpowiedz: download png skina

Decyzja:

Konsekwencje / notatki:

## 6. Preview i Eksport

### 6.1 Czy `Download` ma pobierac finalna teksture skina, screenshot postaci, czy oba warianty?

Odpowiedz: finalna teksture skina

Decyzja:

Konsekwencje / notatki:

### 6.2 Czy uzytkownik powinien moc kontrolowac poze, obrot, tlo i overlay przed eksportem?

Odpowiedz: tak

Decyzja:

Konsekwencje / notatki:

### 6.3 Czy preview ma byc zawsze automatycznie obracane, czy uzytkownik powinien moc zatrzymac obrot?

Odpowiedz: w mvo obrót auto, potem dodamy ręczne obracanie

Decyzja:

Konsekwencje / notatki:

### 6.4 Czy aplikacja ma obslugiwac tylko klasyczny model Minecraft, czy tez slim arms?

Odpowiedz: na razie klasyczny, slim dodamy w aktualizacji

Decyzja:

Konsekwencje / notatki:

## 7. Persistencja i Presety

### 7.1 Ktore ustawienia powinny byc zapisywane w `localStorage`?

Odpowiedz: ustawienia jezyka strony i cały wygląd skin

Decyzja:

Konsekwencje / notatki:

### 7.2 Czy trzeba dodac wersjonowanie zapisanych ustawien?

Odpowiedz: nie

Decyzja:

Konsekwencje / notatki:

### 7.3 Czy uzytkownik powinien moc zapisac kilka presetow postaci?

Odpowiedz: nie, w localstorage trzymamy tylko aktualne ustawienie

Decyzja:

Konsekwencje / notatki:

### 7.4 Czy presety maja byc tylko lokalne, czy docelowo synchronizowane z backendem?

Odpowiedz: tylko lokalne

Decyzja:

Konsekwencje / notatki:

## 8. Testy i Jakosc

### 8.1 Ktore obszary musza miec testy przed dodawaniem nowych funkcji?

Odpowiedz: testy tylko pobierzne, nie ma tu krytycznnej logiki i ścieżek

Decyzja:

Konsekwencje / notatki:

### 8.2 Czy chcemy testy UI/smoke testy w jsdom, czy pelne testy przegladarkowe np. Playwright?

Odpowiedz: pobierzne testy wystarcza

Decyzja:

Konsekwencje / notatki:

### 8.3 Czy kompozycja tekstur powinna byc testowana pixelowo, czy wystarczy sprawdzanie wywolan i wymiarow canvas?

Odpowiedz: pixelowo

Decyzja:

Konsekwencje / notatki:

### 8.4 Czy CI ma blokowac merge na `lint`, `test` i `build`, czy tylko na `build`?

Odpowiedz: wszystko

Decyzja:

Konsekwencje / notatki:

## 9. Repo i Organizacja

### 9.1 Czy `template3.html` ma zostac jako referencja, czy powinien zostac usuniety/przeniesiony do dokumentacji?

Odpowiedz: jeżeli styl z template jest już wcielony do aplikacji to można usunąć

Decyzja:

Konsekwencje / notatki:

### 9.2 Czy stare komentarze z artefaktami kodowania powinny byc wyczyszczone teraz, czy przy okazji pracy w konkretnych plikach?

Odpowiedz: czyścimy od razu

Decyzja:

Konsekwencje / notatki:

### 9.3 Czy repo ma trzymac assety skina tylko w `public/textures`, czy potrzebna jest dodatkowa struktura dla zrodel assetow?

Odpowiedz: w `public/textures`

Decyzja:

Konsekwencje / notatki:

## 10. Backlog Produktowy

### 10.1 Jakie trzy funkcje powinny powstac jako pierwsze po stabilizacji?

Odpowiedz: to co jest musimy dopiąć do działąnie nic wiecej nie dodajemy

Decyzja:

Konsekwencje / notatki:

### 10.2 Jakie funkcje sa mile widziane, ale nie powinny blokowac MVP?

Odpowiedz: na razie nie ma nic poza tym co mamy już

Decyzja:

Konsekwencje / notatki:

### 10.3 Jakie decyzje trzeba podjac przed dodaniem kolejnych assetow graficznych?

Odpowiedz: brak

Decyzja:

Konsekwencje / notatki:

### 10.4 Jaki jest najblizszy konkretny etap po uzupelnieniu tego pliku?

Odpowiedz: zapisanie zadanań w todo

Decyzja:

Konsekwencje / notatki:
