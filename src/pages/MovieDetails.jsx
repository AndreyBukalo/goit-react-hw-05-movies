import { Outlet, useParams, Link } from 'react-router-dom';
import { Container } from 'components/SharedLayout/SharedLayoutStyled';
import { useState, useEffect, Suspense } from 'react';
import { fetchByID } from '../components/Api/api';
import { renderPoster } from '../components/Api/api';
import {
  Wrapper,
  Image,
  Desc,
  TextWrap,
} from 'components/TrendMoviesItem/movieDetailsStyled';
export const MovieDetails = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState('');
  useEffect(() => {
    fetchByID(id).then(data => {
      setMovies(data);
    });
  }, [id]);

  let imgUrl = renderPoster + movies.poster_path;
  if (movies.poster_path === null) {
    imgUrl = 'https://i.postimg.cc/MTBLYYMP/poster-not-available.jpg';
  }
  const { title, overview, genres, release_date, vote_average } = movies;
  console.log(movies);
  return (
    <Container>
      {movies && (
        <section>
          <Wrapper>
            <Image src={imgUrl} alt={title} />
            <Desc>
              <h1>{title}</h1>
              <p>{overview}</p>
            </Desc>
          </Wrapper>
          <Desc>
            <p>
              <TextWrap>Genres: </TextWrap>
              {genres.map(gen => gen.name).join(', ')}
            </p>
            <p>
              <TextWrap>Release Date:</TextWrap> {release_date}
            </p>
            <p>
              <TextWrap>Rating:</TextWrap> {vote_average.toFixed(1)}
            </p>
          </Desc>
          <Link to="cast">
            <button>CAST</button>
          </Link>
          <Link to="reviews">
            <button>Reviews</button>
          </Link>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </section>
      )}
    </Container>
  );
};
