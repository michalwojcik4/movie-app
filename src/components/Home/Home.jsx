import { useState, useEffect } from 'react';

import InfiniteScroll from 'react-infinite-scroll-component';

import { getTrendingMovies } from '../../api/api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';

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
      dataLength={trendingMovies.length}
      next={() => loadMore()}
      hasMore={true}
      loader={<Loader/>}
    >
      <MoviesList data={trendingMovies} />
    </InfiniteScroll>
  );
}
