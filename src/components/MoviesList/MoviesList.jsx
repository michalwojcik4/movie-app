import { Link } from 'react-router-dom';

import { MovieItem } from 'components/MovieItem/MovieItem';

import css from './MovieList.module.css';

export function MoviesList({ data }) {
  return (
    <ul className={css.list}>
      {data.map(movie => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          <MovieItem movie={movie} />
        </Link>
      ))}
    </ul>
  );
}
