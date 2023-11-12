import { NavLink, useLocation } from 'react-router-dom';

const MovieDetails = () => {
  const location = useLocation();
  return <NavLink to={location.state.from}>Go back</NavLink>;
};

export default MovieDetails;
