import { useState } from 'react';
import { TrendMovies } from 'components/TrendMovies/TrendMovies';
import SearchBox from 'components/SearchBar/SearchBar';

const Movie = () => {
  const [movies, setMovies] = useState(null);
  return (
    <section>
      <SearchBox setMovies={setMovies} />
      {movies && <TrendMovies movies={movies} />}
    </section>
  );
};

export default Movie;
