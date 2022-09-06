import React from 'react';
import PropTypes from 'prop-types';
import { renderPoster } from 'components/Api/api';

export const MovieItem = ({ id, title, vote_average, poster_path }) => {
    let imgUrl = renderPoster + poster_path;
    if (poster_path === null) {
      imgUrl = 'https://i.postimg.cc/MTBLYYMP/poster-not-available.jpg';
    }
  return (
    <li>
      <h1>{title}</h1>
      <img src={imgUrl} alt={title} />
      <p>{vote_average}</p>
    </li>
  );
};

// ImageGalleryItem.propTypes = {
//   webformatURL: PropTypes.string,
//   largeImageURL: PropTypes.string,
//   tags: PropTypes.string,
//   onClick: PropTypes.func.isRequired,
// };
