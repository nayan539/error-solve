// src/pages/Reviews.js
import React from "react";
import Layout from "../Components/Layout";
import ReviewCard from "../Components/ReviewCard";
import reviews from "../data/data";
const Reviews = () => {
  return (
    <Layout>
      <div className="flex flex-wrap justify-center">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </Layout>
  );
};
export default Reviews;
