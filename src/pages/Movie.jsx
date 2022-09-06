import { SearchBox } from "components/SearchBar/SearchBar";
import { useSearchParams } from 'react-router-dom';
import { fetchBySearchMovies } from "components/Api/api";
import { useEffect, useState } from "react";
import { TrendMovies } from "components/TrendMovies/TrendMovies";




export const Movie = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const productName = searchParams.get('query') ?? '';
    const updateQueryString = query => {
      const nextParams = query !== '' ? { query } : {};
      setSearchParams(nextParams);
    };


 const [movies, setMovies] = useState(() => []);
 useEffect(() => {
   fetchBySearchMovies(searchParams).then(data => {
     setMovies(data);
   });
 }, [searchParams]);

    return (
      <>
        <SearchBox value={productName} onChange={updateQueryString} />
            {movies && <TrendMovies movies={movies} />}
      </>
    );
};
