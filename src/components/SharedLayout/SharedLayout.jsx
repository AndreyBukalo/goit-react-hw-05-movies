import { Outlet,NavLink } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Movie">Movie</NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
