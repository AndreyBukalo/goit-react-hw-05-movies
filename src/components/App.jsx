import { Route, Routes, NavLink } from 'react-router-dom';
import { Home } from "../pages/Home"
import { Movie } from 'pages/Movie';
import { fetchTrendMovies } from './Api/api';

export const App = () => {
  fetchTrendMovies().then(data => console.log(data))
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Movie">Movie</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};
