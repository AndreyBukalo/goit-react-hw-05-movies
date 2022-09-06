import React from 'react';
import PropTypes from 'prop-types';
import { MovieItem } from 'components/TrendMoviesItem/TrendMoviesItem';


export const TrendMovies = ({ movies, onClick }) => {
  return (
    <ul>
      {movies.map(({ id, title, vote_average, poster_path }) => (
        <MovieItem
          key={id}
          title={title}
          poster_path={poster_path}
          vote_average={vote_average}
        />
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
