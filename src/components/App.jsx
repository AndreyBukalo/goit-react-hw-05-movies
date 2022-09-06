import { Route, Routes, NavLink } from 'react-router-dom';
import { Home } from "../pages/Home"
import { MovieDetails } from 'pages/MovieDetails';
import { Cast } from '../components/Cast/Cast';
import { Reviews } from '../components/Reviews/Reviews';
import {
  fetchByID,
  fetchTrendMovies,
  fetchByCredits,
  fetchByReviews,
  fetchBySearchMovies,
} from './Api/api';
import { Movie } from 'pages/Movie';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  
  fetchBySearchMovies('Home').then(data => console.log(data));
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home /> }/>
        <Route path="/movie/" element={<Movie/>} />
        <Route path="/movie/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        </Route>
      </Routes>

  );
};
