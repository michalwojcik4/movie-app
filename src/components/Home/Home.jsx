import { useState, useEffect } from 'react';

import InfiniteScroll from 'react-infinite-scroll-component';

import { getTrendingMovies } from '../../api/api';
import { MoviesList } from 'components/MoviesList/MoviesList';

export function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [page, setPage] = useState(1);

  const removeDuplicatesById = (data, key) => {
    return [...new Map(data.map(x => [key(x), x])).values()];
  };

  useEffect(() => {
    getTrendingMovies(page).then(data => {
      setTrendingMovies(prevData =>
        removeDuplicatesById([...prevData, ...data.results], item => item.id)
      );
    });
  }, [page]);

  const loadMore = () => {
    setPage(page + 1);
  };

  return (
    <InfiniteScroll
      dataLength={trendingMovies.length} // Liczba elementów w liście
      next={() => loadMore()} // Funkcja do wywołania, gdy trzeba wczytać więcej elementów
      hasMore={true} // Jeśli ma być więcej elementów do wczytania
      loader={<h4>Loading...</h4>} // Komunikat ładowania
    >
      <MoviesList data={trendingMovies} />
    </InfiniteScroll>
  );
}
