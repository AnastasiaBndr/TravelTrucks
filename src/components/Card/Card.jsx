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
    reviews = 0,
    description,
    price,
    rating,
    gallery,
    tv,
    transmission,
    AC,
    kitchen,
    engine,
    bathroom,
    gas,
    refrigerator,
    water,
    microwave,
  } = camper;
  const dispatch = useDispatch();
  const featuredCampers = useSelector(selectFeatured);

  const handleAddFavorite = () => {
    const isFavorite = featuredCampers.some((item) => item.id === camper.id);

    if (isFavorite) {
      dispatch(deleteFeatured(camper.id));
    } else {
      dispatch(addFeatured(camper));
    }
  };

  return (
    <>
      <div className={css["card-container"]}>
        <img className={css.image} src={gallery[0].thumb} alt={description} />
        <div className={css["info-container"]}>
          <div className={css["name-price-container"]}>
            <h3 className={css.name}>{name}</h3>
            <div>
              <p>€{price},00</p>
              <button type="button" onClick={handleAddFavorite}>
                <IconHeart
                  className={clsx(
                    css.icon,
                    featuredCampers.some((item) => item.id === camper.id) &&
                      css.featured
                  )}
                />
              </button>
            </div>
          </div>

          <div className={css["reviews-location-container"]}>
            <IconStar className={css.star} />

            <span>
              {rating}({reviews.length} Reviews)
              <IconLocation className={css["icon-location"]} />{" "}
              {swapTwoWords(location)}
            </span>
          </div>
          <span className={css.description}>{description}</span>
          <Categories
            engine={engine}
            transmission={transmission}
            tv={tv}
            kitchen={kitchen}
            AC={AC}
            bathroom={bathroom}
            gas={gas}
            fridge={refrigerator}
            water={water}
            microwave={microwave}
          />
          <Button onClick={() => window.open(`/catalog/${id}`, "_blank")}>
            Show more
          </Button>
        </div>
      </div>
    </>
  );
}
