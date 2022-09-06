import { useState, useEffect, Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchByReviews } from '../Api/api';

export const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState(() => []);
  useEffect(() => {
    fetchByReviews(id).then(data => {
      setReviews(data);
    });
  }, [id]);

  return (
    <div>
          {reviews.map(
              ({ id, author, content, created_at,author_details: { rating } }) => {
            
           return (
             <li key={id}>
               <p>{author}</p>
               <p>{content}</p>
               <p>{rating}</p>
               <p>{created_at}</p>
             </li>
           );
          }
      )}
    </div>
  );
};
