import { MovieItem } from 'components/MovieItem/MovieItem';

import css from './MovieList.module.css';

export function MoviesList({ data }) {
  return (
    <ul className={css.list}>
      {data.map(movie => (
        <MovieItem movie={movie} key={movie.id} />
      ))}
    </ul>
  );
}
