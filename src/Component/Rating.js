import React, { useState } from 'react';

const RatingSystem = () => {
  const [rating, setRating] = useState(0);

  const handleMouseEnter = (value) => {
    setRating(value);
  };

  const handleMouseLeave = () => {
    setRating(0);
  };

  return (
    <div onMouseLeave={handleMouseLeave}>
      {[1, 2, 3, 4, 5].map((value) => (
        <span key={value} onMouseEnter={() => handleMouseEnter(value)}>
          {value <= rating ? "⭐️" : "☆"}
        </span>
      ))}
    </div>
  );
};

export default RatingSystem;