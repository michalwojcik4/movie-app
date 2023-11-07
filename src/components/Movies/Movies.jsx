import React, { useState } from 'react';

import { searchMovies } from '../../api/api';
import { MoviesList } from 'components/MoviesList/MoviesList';

export function Movies() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = e => {
    e.preventDefault();
    searchMovies(searchTerm).then(data => {
      setSearchResults(data.results);
    });
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <button type="submit">Search</button>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </form>
      <MoviesList data={searchResults} />
    </div>
  );
}
