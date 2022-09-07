import { Route, Routes} from 'react-router-dom';
import { Home } from "../pages/Home"
import { MovieDetails } from 'pages/MovieDetails';
import { Cast } from '../components/Cast/Cast';
import { Reviews } from '../components/Reviews/Reviews';
import  Movie  from 'pages/Movie';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  
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
