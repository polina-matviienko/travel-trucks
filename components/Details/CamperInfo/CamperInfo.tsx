import { FaStar } from "react-icons/fa";
import { HiOutlineMap } from "react-icons/hi2";
import { Camper } from "@/types/camper";
import css from "./CamperInfo.module.css";

interface CamperInfoProps {
  camper: Camper;
}

export default function CamperInfo({ camper }: CamperInfoProps) {
  return (
    <div className={css.contentBlock}>
      <h2 className={css.name}>{camper.name}</h2>

      <div className={css.metaRow}>
        <div className={css.rating}>
          <FaStar className={css.starIcon} />
          {camper.rating}({camper.totalReviews} Reviews)
        </div>
        <div className={css.location}>
          <HiOutlineMap className={css.mapIcon} />
          <span>{camper.location}</span>
        </div>
      </div>

      <p className={css.price}>€{camper.price}</p>

      <p className={css.description}>{camper.description}</p>
    </div>
  );
}
