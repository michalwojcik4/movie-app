import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../api/api';

import css from './Cast.module.css';

export function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCast(movieId).then(data => {
      setCast(data.cast);
    });
  }, [movieId]);

  return (
    <div>
      <ul className={css.list}>
        {cast.map(actor => (
          <li key={actor.id} className={css.list__item}>
            <img
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={cast.name}
              className={css.list__img}
            />
            <p>{actor.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
