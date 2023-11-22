import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { SharedLayout } from 'components/SharedLayout/SharedLayout ';
const Home = React.lazy(() => import('./components/Home/Home'));
const Movies = React.lazy(() => import('./components/Movies/Movies'));
const MovieDetails = React.lazy(() =>
  import('./components/MovieDetails/MovieDetails')
);
const Cast = React.lazy(() => import('./components/Cast/Cast'));
const Reviews = React.lazy(() => import('./components/Reviews/Reviews'));

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/goit-react-hw-05-movies" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<SharedLayout />} />
      </Routes>
    </BrowserRouter>
  );
};
