import { useState, useEffect } from 'react';

import InfiniteScroll from 'react-infinite-scroll-component';
import { useMovieAPI } from '../../api/api';

import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const { getTrendingMovies } = useMovieAPI();
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [page, setPage] = useState(1);

  const removeDuplicatesById = (data, key) => {
    return [...new Map(data.map(x => [key(x), x])).values()];
  };

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const data = await getTrendingMovies(page);
        setTrendingMovies(prevData =>
          removeDuplicatesById([...prevData, ...data.results], item => item.id)
        );
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchTrendingMovies();
  }, [getTrendingMovies, page]);

  const loadMore = () => {
    setPage(page + 1);
  };

  return (
    <InfiniteScroll
      dataLength={trendingMovies.length}
      next={() => loadMore()}
      hasMore={true}
      loader={<Loader />}
    >
      <MoviesList data={trendingMovies} />
    </InfiniteScroll>
  );
};

export default Home;
