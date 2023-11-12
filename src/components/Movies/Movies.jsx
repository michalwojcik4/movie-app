import React, { createContext, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

import { searchMovies } from '../../api/api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchTerm } from 'components/SearchTerm/SearchTerm';
import { Loader } from 'components/Loader/Loader';

import css from './Movies.module.css';

export const TermContext = createContext();

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const removeDuplicatesById = (data, key) => {
    return [...new Map(data.map(x => [key(x), x])).values()];
  };

  const handleSearch = e => {
    e.preventDefault();
    if (searchTerm === '') return;
    setSearchParams({ query: searchTerm });
    setSearchResults([]);
  };

  useEffect(() => {
    if (!query) return;
    searchMovies(query, page).then(data => {
      setSearchResults(prevData =>
        removeDuplicatesById([...prevData, ...data.results], item => item.id)
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, page]);

  const loadMore = () => {
    setPage(page + 1);
  };

  return (
    <InfiniteScroll
      className={css.conteiner}
      dataLength={searchResults.length}
      next={() => loadMore()}
      hasMore={true}
      loader={<Loader />}
    >
      <TermContext.Provider
        value={{
          searchTerm,
          setSearchTerm,
          handleSearch,
        }}
      >
        <SearchTerm />
      </TermContext.Provider>
      {searchResults && <MoviesList data={searchResults} />}
    </InfiniteScroll>
  );
};

export default Movies;
