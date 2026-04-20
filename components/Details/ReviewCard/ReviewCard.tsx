"use client";

import Stars from "@/components/UI/Stars/Stars";
import { getInitial } from "@/lib/formatters";
import { Review } from "@/types/camper";
import css from "./ReviewCard.module.css";

interface CamperReviewCardProps {
  review: Review;
}

export default function CamperReviewCard({ review }: CamperReviewCardProps) {
  const initial = getInitial(review.reviewer_name);

  return (
    <article className={css.reviewCard}>
      <div className={css.header}>
        <div className={css.avatar} aria-hidden="true">
          {initial}
        </div>

        <div className={css.info}>
          <h4 className={css.name}>{review.reviewer_name}</h4>
          <Stars rating={review.reviewer_rating} />
        </div>
      </div>

      <p className={css.comment}>{review.comment}</p>
    </article>
  );
}
