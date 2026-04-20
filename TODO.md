# TODO.md

## Cel

Ten plik porządkuje zadania, które warto wykonać przed dalszym rozwojem SkinCraftera. Priorytety zostały ułożone tak, żeby najpierw ustabilizować repozytorium, usunąć niespójności i dopiero potem rozwijać nowe funkcje kreatora postaci.

## Status Prac

- [ ] P0 zakończone
- [ ] P1 zakończone
- [ ] P2 zakończone

## P0: Blokery Przed Dalszym Rozwojem

### 1. Ustabilizować lokalne uruchamianie projektu

- [ ] Zweryfikować pełny lokalny setup po `npm install`
- [ ] Potwierdzić, że `npm run dev` działa na czystym repo
- [ ] Potwierdzić, że `npm run build` działa bez błędów
- [ ] Ustalić minimalną wspieraną wersję Node i zapisać ją spójnie w dokumentacji

Definition of done:
- projekt instaluje się i buduje bez ręcznych obejść
- instrukcje uruchomienia są zgodne z realnym stanem repo

### 2. Naprawić błędy kompilacji i zgodność typów

- [ ] Naprawić użycie `PreviewArea` w `src/pages/McSkinView.tsx`, aby zgadzało się z wymaganymi propsami
- [ ] Przejść przez komponenty i sprawdzić, czy nie ma innych rozjazdów między typami a użyciem
- [ ] Upewnić się, że TypeScript przechodzi dla wszystkich aktywnych ekranów

Definition of done:
- build TypeScript nie wywraca się na błędach propsów ani błędach typów

### 3. Uporządkować routing i rzeczywisty zakres aplikacji

- [ ] Zdecydować, czy aplikacja ma mieć realnie więcej niż jedną stronę
- [ ] Jeśli tak: wdrożyć prawdziwy routing przez `Routes` i `Route`
- [ ] Jeśli nie: usunąć z dokumentacji i kodu założenia o wielu trasach
- [ ] Zdecydować, czy `McSkinView` jest częścią MVP, czy funkcją poboczną

Definition of done:
- dokumentacja, entrypoint i realne ścieżki aplikacji opisują ten sam stan

### 4. Usunąć lub ukryć atrapy funkcji w UI

- [ ] Ukryć sekcję `Eyes`, jeśli nadal nie ma implementacji
- [ ] Albo zaimplementować działające opcje oczu i koloru oczu
- [ ] Przejrzeć UI pod kątem innych kontrolek, które wyglądają na gotowe, ale nic nie robią

Definition of done:
- użytkownik nie widzi opcji, które są tylko placeholderem

### 5. Naprawić najważniejszą niespójność funkcjonalną kreatora

- [ ] Zdecydować, czy wybór `Skin Color` ma faktycznie zmieniać wynikowy skin
- [ ] Jeśli tak: dodać realny mechanizm wpływu `skinColor` na finalną teksturę
- [ ] Jeśli nie: usunąć tę opcję z interfejsu do czasu pełnej implementacji
- [ ] Zweryfikować, że każda widoczna opcja w panelu faktycznie wpływa na podgląd

Definition of done:
- każda kontrolka w głównym kreatorze ma realny efekt w preview albo nie jest pokazywana

### 6. Przywrócić działającą podstawową ścieżkę jakości

- [ ] Dodać skrypt `test` do `package.json` albo usunąć martwy workflow testowy
- [ ] Uzupełnić brakujące zależności testowe, jeśli testy mają zostać
- [ ] Dodać skrypt `lint`, jeśli repo ma być rozwijane dalej w uporządkowany sposób
- [ ] Zsynchronizować `package.json`, `README.md` i workflowy GitHub Actions

Definition of done:
- repo ma działające, prawdziwe komendy jakościowe
- CI nie odwołuje się do nieistniejących skryptów

## P1: Porządkowanie Architektury i Repo

### 7. Uporządkować dokumentację projektu

- [ ] Zaktualizować `README.md`, żeby opisywał rzeczywisty produkt i obecne funkcje
- [ ] Ujednolicić opis routingu, builda, testów i sitemap
- [ ] Dodać krótki opis architektury głównych modułów

Definition of done:
- nowa osoba w projekcie może uruchomić aplikację i rozumie, co działa naprawdę

### 8. Naprawić lub usunąć martwe skrypty i stare konfiguracje

- [ ] Zweryfikować sens istnienia `generate-sitemap.js`
- [ ] Jeśli sitemap ma zostać: dodać brakujący skrypt i zależności oraz poprawić ścieżki wejściowe
- [ ] Jeśli sitemap nie jest potrzebny teraz: usunąć martwe odniesienia z dokumentacji
- [ ] Sprawdzić, czy repo nie zawiera innych nieużywanych plików konfiguracyjnych

Definition of done:
- w repo nie ma narzędzi, które wyglądają na aktywne, ale nie działają

### 9. Uporządkować model danych kreatora

- [ ] Przejrzeć `src/data/*` i ustalić spójny model dla opcji wyglądu
- [ ] Ograniczyć duplikację między listami opcji, mapami tekstur i kolejnością warstw
- [ ] Ustalić, które opcje są częścią MVP, a które są planowane dopiero później
- [ ] Przygotować strukturę łatwą do rozszerzania o nowe warstwy i elementy ubioru

Definition of done:
- dodanie nowego elementu wyglądu nie wymaga zgadywania, które pliki trzeba zmieniać

### 10. Uporządkować stan i persystencję

- [ ] Sprawdzić, czy `localStorage` przechowuje tylko aktywnie używane dane
- [ ] Dodać wersjonowanie lub strategię migracji ustawień, jeśli model danych ma się zmieniać
- [ ] Ustalić, które ustawienia użytkownika powinny być zachowywane między sesjami

Definition of done:
- persystencja jest przewidywalna i nie utrudnia dalszych zmian modelu danych

### 11. Naprawić problemy z encodingiem i tekstami w UI

- [ ] Przejrzeć pliki pod kątem błędnie zapisanych znaków
- [ ] Naprawić artefakty typu `Loadingâ€¦`
- [ ] Ustalić jeden standard językowy interfejsu
- [ ] Upewnić się, że pliki są zapisywane w poprawnym kodowaniu

Definition of done:
- UI nie zawiera uszkodzonych znaków ani przypadkowo mieszanych standardów tekstu

## P2: Przygotowanie Pod Rozwój Funkcji

### 12. Zbudować minimalną bazę testów regresyjnych

- [ ] Dodać testy dla `fetchSkin`
- [ ] Dodać testy dla logiki składania tekstur
- [ ] Dodać przynajmniej jeden smoke test dla głównej strony kreatora
- [ ] Określić, które obszary muszą być chronione testami przed rozwojem funkcji

Definition of done:
- najważniejsze elementy produktu mają podstawową ochronę przed regresją

### 13. Ustabilizować strukturę komponentów UI

- [ ] Rozdzielić komponenty gotowe produkcyjnie od eksperymentalnych
- [ ] Ograniczyć zależności między warstwą danych, widokiem i logiką kompozycji tekstur
- [ ] Ustalić spójny sposób dodawania nowych sekcji wardrobe

Definition of done:
- rozwijanie kolejnych opcji wyglądu nie wymaga przebudowy istniejących komponentów

### 14. Przygotować backlog funkcji produktowych po stabilizacji

- [ ] Spisać, które elementy wyglądu będą rozwijane jako następne
- [ ] Określić priorytet między funkcjami kreatora a `McSkinView`
- [ ] Ustalić zakres MVP i zakres wersji następnej
- [ ] Rozdzielić zadania techniczne od zadań stricte produktowych

Definition of done:
- po zamknięciu P0 i P1 jest gotowa realistyczna lista dalszego rozwoju

## Proponowana Kolejność Realizacji

1. Uruchamianie i build
2. Typy i błędy kompilacji
3. Routing i decyzja o rzeczywistym zakresie MVP
4. Usunięcie atrap z UI
5. Naprawa działania opcji `Skin Color`
6. Testy, lint i CI
7. Dokumentacja i martwe skrypty
8. Model danych i porządkowanie architektury
9. Backlog nowych funkcji

## Notatki

- Nie zaczynaj nowych funkcji produktowych przed zamknięciem większości P0.
- Jeśli podczas prac wyjdą kolejne martwe elementy UI lub stare konfiguracje, dopisuj je do odpowiedniej sekcji zamiast prowadzić osobną listę.
