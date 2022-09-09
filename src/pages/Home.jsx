import { TrendMovies } from 'components/TrendMovies/TrendMovies';
import { fetchTrendMovies } from 'components/Api/api';
import { useState } from 'react';
import { useEffect } from 'react';

 const Home = () => {
  const [movies, setMovies] = useState(() => []);
  useEffect(() => {
    fetchTrendMovies().then(data => {
      setMovies([...data]);
    });
  }, []);
  return (
    <main>
      <TrendMovies movies={movies} />
    </main>
  );
};
export default Home;