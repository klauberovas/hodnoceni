import { useState } from 'react';
import { Star } from '../Star';
import './style.css';

export const Rating = () => {
  const [value, setValue] = useState(0);
  const [rating, setRating] = useState(0);

  return (
    <div className="rating">
      <div className="rating__value">{value}</div>
      <div className="rating__stars">
        <Star
          value={1}
          onSelect={setValue}
          glowing={rating >= 1}
          onRating={setRating}
        />
        <Star
          value={2}
          onSelect={setValue}
          glowing={rating >= 2}
          onRating={setRating}
        />
        <Star
          value={3}
          onSelect={setValue}
          glowing={rating >= 3}
          onRating={setRating}
        />
        <Star
          value={4}
          onSelect={setValue}
          glowing={rating >= 4}
          onRating={setRating}
        />
        <Star
          value={5}
          onSelect={setValue}
          glowing={rating >= 5}
          onRating={setRating}
        />
      </div>
    </div>
  );
};
