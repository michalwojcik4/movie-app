import { useContext } from 'react';
import { TermContext } from '../Movies/Movies';

import css from './SearchTerm.module.css';

export function SearchTerm() {
  const { handleSearch, searchTerm, setSearchTerm } = useContext(TermContext);
  return (
    <form onSubmit={handleSearch} className={css.form}>
      <button type="submit" className={css.form__button}>Search</button>
      <input
      className={css.form__input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
    </form>
  );
}
