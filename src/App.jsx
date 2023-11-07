import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './components/Home/Home';
import { Movies } from './components/Movies/Movies';
import { Nav } from 'components/Nav/Nav';

export const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />}>

        </Route>
      </Routes>
    </BrowserRouter>
  );
};
