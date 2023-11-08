import React, { useState, useEffect } from 'react';
import { useParams, Outlet, NavLink } from 'react-router-dom';
import { getMovieDetails } from '../../api/api';

import { Loader } from 'components/Loader/Loader';

import css from './MovieDetails.module.css';

export function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    getMovieDetails(movieId).then(data => {
      setMovieDetails(data);
    });
  }, [movieId]);

  return (
    <div>
      {movieDetails ? (
        <div className={css.box}>
          <div className={css.details}>
            <img
              className={css.details__img}
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.title}
            />
            <div className={css.details__context}>
              <h2>
                {movieDetails.title}{' '}
                <span>({movieDetails.release_date.slice(0, 4)})</span>
              </h2>
              <h3>Overview</h3>
              <p>{movieDetails.overview}</p>
              <h3>Genres</h3>
              <p>{movieDetails.genres.map(genre => genre.name).join(', ')}</p>
            </div>
          </div>
          <ul className={css.more_info_list}>
            <li>
              <NavLink
                to={`cast`}
                className={css.more_info_list__link}
                style={props => {
                  return {
                    color: props.isActive ? '#FFF' : '#000',
                    backgroundColor: props.isActive
                      ? 'rgb(72, 103, 195)'
                      : '#FFF',
                  };
                }}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`reviews`}
                className={css.more_info_list__link}
                style={props => {
                  return {
                    color: props.isActive ? '#FFF' : '#000',
                    backgroundColor: props.isActive
                      ? 'rgb(72, 103, 195)'
                      : '#FFF',
                  };
                }}
              >
                Reviews
              </NavLink>
            </li>
          </ul>

          <Outlet />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
