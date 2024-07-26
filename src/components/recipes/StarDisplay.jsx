import React from 'react';

function StarDisplay({ rating }) {
  return (
    <div className="rating rating-sm">
      {[1, 2, 3, 4, 5].map((value) => (
        <input
          key={value}
          type="radio"
          name={`rating-${value}`}
          className={`mask mask-star ${value <= rating ? 'bg-yellow-500' : 'bg-gray-300'}`}
          readOnly
          checked={value === rating}
        />
      ))}
    </div>
  );
}

export default StarDisplay;