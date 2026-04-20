import { FaStar } from "react-icons/fa";
import css from "./Stars.module.css";

interface StarsProps {
  rating: number;
}

const Stars = ({ rating }: StarsProps) => {
  const totalStars = 5;

  return (
    <div className={css.starsWrapper}>
      {[...Array(totalStars)].map((_, index) => {
        const starNumber = index + 1;
        return (
          <FaStar
            key={index}
            className={starNumber <= rating ? css.starFilled : css.starEmpty}
          />
        );
      })}
    </div>
  );
};

export default Stars;
