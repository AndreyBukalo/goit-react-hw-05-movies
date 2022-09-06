import React from 'react';
import { List, ListItem, Links } from './TrendMoviesStyled';

import PropTypes from 'prop-types';
import { MovieItem } from 'components/TrendMoviesItem/TrendMoviesItem';


export const TrendMovies = ({ movies }) => {
  return (
    <List>
      {movies.map(({ id, title, vote_average, poster_path }) => (
        <ListItem key={id}>
          <Links to={`/movie/${id}`}>
            <MovieItem
              title={title}
              poster_path={poster_path}
              vote_average={vote_average}
            />
          </Links>
        </ListItem>
      ))}
    </List>
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
