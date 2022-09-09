import React from 'react';
import { List, ListItem, Links } from './TrendMoviesStyled';
import PropTypes from 'prop-types';
import { MovieItem } from 'components/TrendMoviesItem/TrendMoviesItem';
import { useLocation } from 'react-router-dom';

export const TrendMovies = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(({ id, title, vote_average, poster_path }) => (
        <ListItem key={id}>
          <Links to={`/movie/${id}`} state={{ from: location }}>
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

TrendMovies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ),
};
