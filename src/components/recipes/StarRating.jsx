import React from 'react';

function StarRating({ rating, setRating }) {
  return (
    <div className="rating m-2">
      {[1, 2, 3, 4, 5].map((value) => (
        <input
          key={value}
          type="radio"
          name="rating"
          value={value}
          className="mask mask-star-2 bg-orange-400"
          checked={rating === value}
          onChange={() => setRating(value)}
        />
      ))}
    </div>
  );
}

export default StarRating;