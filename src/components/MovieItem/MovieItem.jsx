import css from './MovieItem.module.css';

export function MovieItem({ movie }) {
  const urlImage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <li className={css.list__item}>
      {movie.poster_path ? (
        <img className={css.list__img} src={urlImage} alt={movie.title} />
      ) : (
        <div className={css.list__noimg}><p>No Image</p></div>
      )}
    </li>
  );
}
