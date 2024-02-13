import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(starIndex) {
    setRating(starIndex);
  }

  function handleMouseEnter(starIndex) {
    setHover(starIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, i) => {
        i += 1;

        return (
          <FaStar
            key={i}
            className={i <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(i)}
            onMouseMove={() => handleMouseEnter(i)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
}
