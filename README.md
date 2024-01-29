# Movie App

Movie App to aplikacja do przeglądania i wyszukiwania filmów przy użyciu
themoviedb.org API. Aplikacja umożliwia przeglądanie najpopularniejszych filmów,
wyszukiwanie filmów po słowie kluczu oraz wyświetlanie szczegółowych informacji
o filmie, zespołu aktorskim i recenzjach.

## Demo

https://michalwojcik4.github.io/film-search-engine/

## Instalacja

1. Sklonuj repozytorium: git clone
   https://github.com/michalwojcik4/goit-react-hw-05-movies.git

2. Przejdź do katalogu projektu: cd goit-react-hw-05-movies

3. Zainstaluj zależności: npm install

4. Uruchom aplikację: npm start

Aplikacja powinna uruchomić się na `http://localhost:3000/`.

## Konfiguracja

Zanim uruchomisz aplikację, upewnij się, że masz klucz API themoviedb.org.
Możesz go uzyskać, rejestrując się na
[themoviedb.org](https://www.themoviedb.org/). Stwórz i wklej swój klucz API do
pliku `.env`.

```javascript
REACT_APP_API_KEY = 'TWÓJ_KLUCZ_API'; // Wprowadź swój klucz API themoviedb.org
```

## Użycie

- Strona główna wyświetla listę najpopularniejszych filmów dzisiaj.
- Strona "Movies" umożliwia wyszukiwanie filmów po słowie kluczu.
- Po kliknięciu na film na liście lub wynik wyszukiwania, użytkownik zostaje
  przeniesiony na stronę z szczegółowymi informacjami o filmie.
- Na stronie z informacjami o filmie dostępne są zakładki "Cast" i "Reviews" z
  dodatkowymi informacjami.

## Struktura projektu

- /src - główny katalog projektu.
- /components - komponenty React.
- /api - funkcje do obsługi zapytań do themoviedb.org API.
- App.js - komponent główny obsługujący routing.
- index.js - plik startowy aplikacji.

## Stylizacja

Stylizacja komponentów jest realizowana za pomocą CSS-modułów. Możesz dostosować
stylizację według własnych preferencji, modyfikując odpowiednie pliki CSS.

## Autor

michalwojcik4
