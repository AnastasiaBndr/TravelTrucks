import css from "./Card.module.css";

import { useNavigate } from "react-router-dom";

import { swapTwoWords } from "../../helpers";
import { IconHeart, IconLocation, IconStar } from "../../assets/icons";
import Button from "../../particles/Button";
import Categories from "../../particles/Categories";

export default function Card({
  id,
  name,
  location,
  reviews = 0,
  description,
  price,
  rating,
  image,
  tv,
  transmission,
  AC,
  kitchen,
  engine,
  bathroom,
  gas,
  fridge,
  water,
  microwave,
}) {
  const navigate = useNavigate();

  return (
    <>
      <div className={css["card-container"]}>
        <img className={css.image} src={image.thumb} alt={description} />
        <div className={css["info-container"]}>
          <div className={css["name-price-container"]}>
            <h3 className={css.name}>{name}</h3>
            <div>
              <p>€{price}</p>
              <IconHeart className={css.icon} />
            </div>
          </div>

          <div className={css["reviews-location-container"]}>
            <IconStar className={css.star} />
            <span>
              {rating}({reviews} Reviews)
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
            fridge={fridge}
            water={water}
            microwave={microwave}
          />
          <Button onClick={() => navigate(`/catalog/${id}`)}>Show more</Button>
        </div>
      </div>
    </>
  );
}
