import { NavLink } from 'react-router-dom';

import css from './Nav.module.css';

export const Nav = () => {
  return (
    <nav className={css.nav}>
      <p className={css.nav__logo}>
        Movie <span>App</span>
      </p>
      <ul className={css.nav__list}>
        <li>
          <NavLink
            className={css.nav__link}
            style={props => {
              return {
                color: props.isActive ? '#FFF' : '#000',
                backgroundColor: props.isActive ? 'rgb(72, 103, 195)' : '#FFF',
              };
            }}
            to="/goit-react-hw-05-movies"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={css.nav__link}
            style={props => {
              return {
                color: props.isActive ? '#FFF' : '#000',
                backgroundColor: props.isActive ? 'rgb(72, 103, 195)' : '#FFF',
              };
            }}
            to="/movies"
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
