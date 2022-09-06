import { Outlet, useParams, Link, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { fetchByID } from '../components/Api/api';

export const MovieDetails = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState(() => []);
  useEffect(() => {
    fetchByID(id).then(data => {
      setMovies(data);
    });
  }, [movies]);



  return (
    <main>
      <div>
        <h1>{movies.title}</h1>
        <Link to="cast">
          <button>CAST</button>
        </Link>
        <Link to="reviews">
          <button>Reviews</button>
        </Link>
        <Outlet />
      </div>
    </main>
  );
};
