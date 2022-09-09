import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchByReviews } from '../Api/api';
import { TextWrap } from 'components/TrendMoviesItem/movieDetailsStyled';
import { List, Header, TextName, Text, RatingText } from './ReviewsStyled';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState(() => []);
  useEffect(() => {
    fetchByReviews(id).then(data => {
      setReviews(data);
    });
  }, [id]);

  return (
    <>
      {reviews.length === 0 ? (
        <TextName>No Reviews</TextName>
      ) : (
        <List>
          <Header>Users Reviews</Header>
          {reviews.map(
            ({
              id,
              author,
              content,
              created_at,
              author_details: { rating },
            }) => {
              return (
                <li key={id}>
                  <TextName> Author: {author}</TextName>
                  <Text>
                    <TextWrap>Review:</TextWrap> {content}
                  </Text>
                  <RatingText>Rating: {rating ? rating : 'N/A'}</RatingText>
                  <RatingText>
                    Date: {new Date(created_at).toLocaleDateString('en-US')}
                  </RatingText>
                </li>
              );
            }
          )}
        </List>
      )}
    </>
  );
};

export default Reviews;
