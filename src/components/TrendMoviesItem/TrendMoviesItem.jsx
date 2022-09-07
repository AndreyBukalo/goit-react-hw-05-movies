import React from 'react';
import { Image, MovieHeader, Rating } from './TrendMoviesItemStyled';
import PropTypes from 'prop-types';
import { renderPoster } from 'components/Api/api';

export const MovieItem = ({ title, vote_average, poster_path }) => {
    let imgUrl = renderPoster + poster_path;
    if (poster_path === null) {
      imgUrl = 'https://i.postimg.cc/MTBLYYMP/poster-not-available.jpg';
    }
  return (
    <>
      <MovieHeader>{title}</MovieHeader>
      <Image src={imgUrl} alt={title} />
      <Rating>{vote_average.toFixed(1)}</Rating>
    </>
  );
};

// ImageGalleryItem.propTypes = {
//   webformatURL: PropTypes.string,
//   largeImageURL: PropTypes.string,
//   tags: PropTypes.string,
//   onClick: PropTypes.func.isRequired,
// };
