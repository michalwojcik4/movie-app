import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { SharedLayout } from 'components/SharedLayout/SharedLayout ';

import { Home } from 'components/Home/Home';
import { Movies } from 'components/Movies/Movies';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';

// const Home = React.lazy(() => import('./components/Home/Home.jsx'));
// const Movies = React.lazy(() => import('./components/Movies/Movies'));
// const MovieDetails = React.lazy(() =>
//   import('./components/MovieDetails/MovieDetails')
// );
// const Cast = React.lazy(() => import('./components/Cast/Cast'));
// const Reviews = React.lazy(() => import('./components/Reviews/Reviews'));

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
