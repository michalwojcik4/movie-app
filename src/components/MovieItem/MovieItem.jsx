import css from './MovieItem.module.css';

export function MovieItem({ movie }) {
  const urlImage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <li className={css.list__item}>
      <img className={css.list__img} src={urlImage} alt={movie.title} />
    </li>
  );
}
