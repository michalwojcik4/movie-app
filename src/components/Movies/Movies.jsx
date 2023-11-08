import React, { createContext, useState } from 'react';

import { searchMovies } from '../../api/api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchTerm } from 'components/SearchTerm/SearchTerm';

import css from './Movie.module.css'

export const TermContext = createContext();

export function Movies() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = e => {
    e.preventDefault();
    searchMovies(searchTerm).then(data => {
      setSearchResults(data.results);
    });
  };

  return (
    <div className={css.conteiner}>
      <TermContext.Provider
        value={{
          searchTerm,
          setSearchTerm,
          handleSearch,
        }}
      ><SearchTerm/></TermContext.Provider>
      <MoviesList data={searchResults} />
    </div>
  );
}
