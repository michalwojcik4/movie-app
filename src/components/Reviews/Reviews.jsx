import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../api/api';

import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(data => {
      setReviews(data.results);
    });
  }, [movieId]);

  return (
    <>
      {reviews.length !== 0 ? (
        <div>
          <ul className={css.list}>
            {reviews.map(review => (
              <li key={review.id} className={css.list__item}>
                <blockquote>
                  <p>{review.content}</p>
                  <footer className={css.list__author}>{review.author}</footer>
                </blockquote>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div><p>Sorry, No reviews on this film.</p></div>
      )}
    </>
  );
}

export default Reviews;