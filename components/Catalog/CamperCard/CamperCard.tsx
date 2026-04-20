"use client";

import Image from "next/image";
import { Camper } from "@/types/camper";
import { AppLink } from "@/components/UI/Button/Button";
import { Badge } from "@/components/UI/Badge/Badge";
import { FaStar } from "react-icons/fa";
import { HiOutlineMap } from "react-icons/hi2";
import css from "./CamperCard.module.css";

interface CamperCardProps {
  camper: Camper;
}

const CamperCard = ({ camper }: CamperCardProps) => {
  return (
    <article className={css.card}>
      <div className={css.imageWrapper}>
        <Image
          src={camper.coverImage}
          alt={camper.name}
          fill
          className={css.img}
          sizes="(max-width: 768px) 100vw, 219px"
        />
      </div>

      <div className={css.content}>
        <div className={css.header}>
          <div className={css.titleRow}>
            <h2 className={css.name}>{camper.name}</h2>
            <span className={css.price}>€{camper.price}</span>
          </div>

          <div className={css.infoRow}>
            <div className={css.rating}>
              <FaStar className={css.starIcon} />
              <span className={css.ratingText}>
                {camper.rating} ({camper.totalReviews} Reviews)
              </span>
            </div>
            <div className={css.location}>
              <HiOutlineMap className={css.mapIcon} />
              <span>{camper.location}</span>
            </div>
          </div>
        </div>

        <p className={css.description}>{camper.description}</p>

        <div className={css.badges}>
          <Badge type={camper.transmission} showIcon />
          <Badge type={camper.engine} showIcon />
          <Badge type={camper.form} showIcon />
        </div>

        <AppLink
          href={`/catalog/${camper.id}`}
          variant="primary"
          className={css.moreDetailsBtn}
          target="_blank"
          rel="noopener noreferrer"
        >
          Show more
        </AppLink>
      </div>
    </article>
  );
};

export default CamperCard;
