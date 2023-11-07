import React, { useState, useEffect } from 'react';
import { Link, useParams, Outlet} from 'react-router-dom';
import {getMovieDetails} from '../../api/api';

export function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);


  useEffect(() => {
    getMovieDetails(movieId).then((data) => {
      setMovieDetails(data);
    });
  }, [movieId]);

  return (
    <div>
      {movieDetails ? (
        <div>
          <h1>{movieDetails.title}</h1>
          <p>{movieDetails.overview}</p>
          <Link to={`cast`}>Cast</Link>
          <Link to={`reviews`}>Reviews</Link>
          <Outlet />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}