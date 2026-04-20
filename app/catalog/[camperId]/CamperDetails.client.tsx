"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchCamperById, fetchCamperReviews } from "@/lib/campersApi";
import CamperInfo from "@/components/Details/CamperInfo/CamperInfo";
import CamperGallery from "@/components/Details/Gallery/Gallery";
import VehicleDetails from "@/components/Details/VehicleDetails/VehicleDetails";
import CamperReviews from "@/components/Details/CamperReviews/CamperReviews";
import BookingForm from "@/components/Details/BookingForm/BookingForm";
import Loader from "@/components/UI/Loader/Loader";
import css from "./Details.module.css";

export default function CamperDetailsClient() {
  const params = useParams();
  const id = params?.camperId as string;

  const { data: camper, isLoading: isCamperLoading } = useQuery({
    queryKey: ["camper", id],
    queryFn: () => fetchCamperById(id),
    enabled: !!id,
  });

  const { data: reviews, isLoading: isReviewsLoading } = useQuery({
    queryKey: ["camperReviews", id],
    queryFn: () => fetchCamperReviews(id),
    enabled: !!id,
  });

  if (isCamperLoading || isReviewsLoading) {
    return <Loader />;
  }

  if (!camper) {
    return (
      <div className={css.errorContainer}>
        <p>No camper was found.</p>
      </div>
    );
  }

  return (
    <>
      <h1 className="visually-hidden">{camper.name}</h1>

      <section className={css.topSection}>
        <div className={css.galleryColumn}>
          <CamperGallery camper={camper} />
        </div>
        <div className={css.infoColumn}>
          <CamperInfo camper={camper} />
          <VehicleDetails camper={camper} />
        </div>
      </section>

      <section className={css.bottomSection} aria-labelledby="reviews-heading">
        <h2 id="reviews-heading" className={css.sectionTitle}>
          Reviews
        </h2>

        <div className={css.bottomWrapper}>
          <div className={css.reviewsList}>
            <CamperReviews reviews={reviews || []} />
          </div>

          <aside className={css.bookingForm}>
            <BookingForm camperId={id} />
          </aside>
        </div>
      </section>
    </>
  );
}
