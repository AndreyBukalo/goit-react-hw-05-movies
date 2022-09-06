import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieItem } from 'components/TrendMoviesItem/TrendMoviesItem';


export const TrendMovies = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title, vote_average, poster_path }) => (
        <li key={id}>
          <Link to={`/movie/${id}`}>
            <MovieItem
              title={title}
              poster_path={poster_path}
              vote_average={vote_average}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

// ImageGallery.propTypes = {
//   images: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       webformatURL: PropTypes.string,
//       largeImageURL: PropTypes.string,
//       tags: PropTypes.string,
//     })
//   ),
// };
