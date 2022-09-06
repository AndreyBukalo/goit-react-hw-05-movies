import { useState, useEffect, Suspense } from 'react';
import { useParams ,Link} from 'react-router-dom';
import { fetchByCredits } from '../Api/api'

export const Cast = () => {
  const { id } = useParams();
  const [casts, setCasts] = useState(() => []);
  useEffect(() => {
    fetchByCredits(id).then(data => {
      setCasts(data);
    });
  }, [id]);

    return (
     
        <div>
          {casts.map(({ character, name, profile_path }) => (
            <li>
              <p>{name}</p>
            </li>
          ))}
        </div>
    
    );
};
