import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { SharedLayout } from 'components/SharedLayout/SharedLayout ';
const Home = React.lazy(() => import('./components/Home/Home'));
const Movies = React.lazy(() => import('./components/Movies/Movies'));
const MovieDetails = React.lazy(() =>
  import('./components/MovieDetails/MovieDetails')
);
// const Cast = React.lazy(() => import('./components/Cast/Cast'));
// const Reviews = React.lazy(() => import('./components/Reviews/Reviews'));

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />} />
        </Route>
        <Route path="*" element={<SharedLayout />} />
      </Routes>
    </BrowserRouter>
  );
};
