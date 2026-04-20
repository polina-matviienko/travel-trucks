"use client";

import ReviewCard from "../ReviewCard/ReviewCard";
import { Review } from "@/types/camper";
import css from "./CamperReviews.module.css";

interface CamperReviewsProps {
  reviews: Review[];
}

export default function CamperReviews({ reviews }: CamperReviewsProps) {
  if (!reviews || reviews.length === 0) {
    return <p className={css.noReviews}>No reviews yet for this camper.</p>;
  }

  return (
    <ul className={css.reviewList}>
      {reviews.map((review, index) => (
        <li key={index}>
          <ReviewCard review={review} />
        </li>
      ))}
    </ul>
  );
}
