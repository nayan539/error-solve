import React from 'react';
import { reviews } from '../Components/ReviewList';
const Reviews = () => {
  return (
    <div>
      {reviews.map((review) => (
        <div key={review.id}>{review.name}</div>
      ))}
    </div>
  );
};
export default Reviews;
