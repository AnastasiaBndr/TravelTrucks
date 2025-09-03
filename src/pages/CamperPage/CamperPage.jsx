import { useEffect } from "react";
import { useParams, NavLink, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";

import { fetchById } from "../../redux/campersOps";
import { selectCamper, selectIsLoading } from "../../redux/selectors";

import { IconStar, IconLocation } from "../../assets/icons";
import { swapTwoWords } from "../../helpers";

import CamperForm from "../../components/CamperForm";
import Loader from "../../components/Loader";
import css from "./CamperPage.module.css";

const buildLinkClass = ({ isActive }) =>
  clsx(css.navigation, isActive && css.active);

const CamperPage = () => {
  const { id } = useParams();
  const camper = useSelector(selectCamper);
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchById(id));
  }, [dispatch, id]);

  if (!camper?.gallery) return null;

  const { name, rating, reviews, location, price, gallery, description } =
    camper;

  return (
    <>
      {loading && <Loader />}
      <div className={css["camper-page-container"]}>
        <Header
          name={name}
          rating={rating}
          reviews={reviews}
          location={location}
          price={price}
        />

        <ImageGallery gallery={gallery} />

        <p className={css.description}>{description}</p>

        <Navigation />

        <div className={css["outlet-form-container"]}>
          <Outlet />
          <CamperForm />
        </div>
      </div>
    </>
  );
};

export default CamperPage;

const Header = ({ name, rating, reviews, location, price }) => (
  <div className={css["name-reviews-price-container"]}>
    <h2 className={css.name}>{name}</h2>
    <div className={css["reviews-location-container"]}>
      <p>
        <IconStar className={css.star} />
        <span>
          {rating} ({reviews.length} Reviews)
        </span>
        <IconLocation className={css["icon-location"]} />
        {swapTwoWords(location)}
      </p>
    </div>
    <h2 className={css.price}>€{price}</h2>
  </div>
);

const ImageGallery = ({ gallery }) => (
  <ul className={css["images-container"]}>
    {gallery.map((image, index) => (
      <li key={index} className={css["image-container"]}>
        <img
          className={css["image"]}
          src={image.thumb}
          alt={`Gallery image ${index + 1}`}
        />
      </li>
    ))}
  </ul>
);

const Navigation = () => (
  <div className={css["navigation-container"]}>
    <NavLink className={buildLinkClass} to="features">
      Features
    </NavLink>
    <NavLink className={buildLinkClass} to="reviews">
      Reviews
    </NavLink>
  </div>
);
