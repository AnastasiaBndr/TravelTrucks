import css from "./Reviews.module.css";
import { useSelector } from "react-redux";

import { selectCamper, selectIsLoading } from "../../redux/selectors";
import { IconStar } from "../../assets/icons";

import Loader from "../Loader";

export default function Reviews() {
  const camper = useSelector(selectCamper);
  const reviews = camper.reviews || [];
  const loading = useSelector(selectIsLoading);

  const handleStars = (review) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <li key={i}>
          <IconStar
            className={i < review.reviewer_rating ? css.filled : css.icon}
          />
        </li>
      );
    }
    return stars;
  };

  return (<>{loading && <Loader/>}
    <ul className={css["reviews-container"]}>
      {reviews.map((review) => {
        return (
          <li
            key={
              review.id ||
              `${camper.id}-${review.reviewer_name}-${review.comment.slice(0, 10)}`
            }
          >
            <div className={css["avatar-name-container"]}>
              <div className={css.avatar}>{review.reviewer_name[0]}</div>
              <div>
                <p>{review.reviewer_name}</p>
                <ul className={css["stars-container"]}>
                  {handleStars(review)}
                </ul>
              </div>
            </div>

            <p className={css.comment}>{review.comment}</p>
          </li>
        );
      })}
    </ul>
  </>
    
  );
}
