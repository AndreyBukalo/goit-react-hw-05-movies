import React from 'react';
import { Image, MovieHeader } from './TrendMoviesItemStyled';
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
      <p>{vote_average}</p>
    </>
  );
};

// ImageGalleryItem.propTypes = {
//   webformatURL: PropTypes.string,
//   largeImageURL: PropTypes.string,
//   tags: PropTypes.string,
//   onClick: PropTypes.func.isRequired,
// };
