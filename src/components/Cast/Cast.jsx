import { Container } from 'components/SharedLayout/SharedLayoutStyled';
import { useState, useEffect, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { fetchByCredits } from '../Api/api'
import { renderPoster } from '../Api/api';
import { List, Image, ListItem } from './CastStyled';
import { Desc } from 'components/TrendMoviesItem/movieDetailsStyled';
export const Cast = () => {
  const { id } = useParams();
  const [casts, setCasts] = useState([]);
  useEffect(() => {
    fetchByCredits(id).then(data => {
      setCasts(data);
    });
  }, [id]);


    return (
      <Container>
        {!casts.length > 0 ? (
          <p>No casts</p>
        ) : (
          <List>
            {casts.map(({ cast_id, character, name, profile_path }) => (
              <ListItem key={cast_id}>
                <Image
                  src={
                    profile_path
                      ? renderPoster + profile_path
                      : 'https://dummyimage.com/200x300/8c898c/ffffff.jpg&text=Photo+not+available'
                  }
                  alt={name}
                />
                <Desc>
                  <p>{name}</p>
                  <p>{character}</p>
                </Desc>
              </ListItem>
            ))}
          </List>
        )}
      </Container>
    );
};
