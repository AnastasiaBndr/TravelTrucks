import css from "./Card.module.css";

import { addFeatured, deleteFeatured } from "../../redux/featuredSlice";
import { selectFeatured } from "../../redux/selectors";

import { swapTwoWords } from "../../helpers";
import { IconHeart, IconLocation, IconStar } from "../../assets/icons";
import Button from "../../particles/Button";
import Categories from "../../particles/Categories";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";

export default function Card({ camper }) {
  const {
    id,
    name,
    location,
    reviews = [],
    description,
    price,
    rating,
    gallery,
  } = camper;

  const dispatch = useDispatch();
  const featuredCampers = useSelector(selectFeatured);
  const isFavorite = featuredCampers.some((item) => item.id === camper.id);

  const handleAddFavorite = () => {
    if (isFavorite) {
      dispatch(deleteFeatured(camper.id));
    } else {
      dispatch(addFeatured(camper));
    }
  };

  return (
    <>
      <div className={css["card-container"]}>
        <img
          className={css.image}
          src={gallery[0]?.thumb}
          alt={`Image of ${name}`}
        />
        <div className={css["info-container"]}>
          <div className={css["name-price-container"]}>
            <h3 className={css.name}>{name}</h3>
            <div>
              <p>€{price},00</p>
              <button type="button" onClick={handleAddFavorite}>
                <IconHeart
                  className={clsx(css.icon, isFavorite && css.featured)}
                />
              </button>
            </div>
          </div>

          <div className={css["reviews-location-container"]}>
            <IconStar className={css.star} />

            <p>
              {rating}({reviews.length} Reviews)
              <IconLocation className={css["icon-location"]} /> 
              <span className={css.location}>{swapTwoWords(location)}</span>
            </p>
          </div>
          <span className={css.description}>{description}</span>
          <Categories camper={camper} />
          <Button
            onClick={() =>
              window.open(`/catalog/${id}`, "_blank", "noopener,noreferrer")
            }
          >
            Show more
          </Button>
        </div>
      </div>
    </>
  );
}
