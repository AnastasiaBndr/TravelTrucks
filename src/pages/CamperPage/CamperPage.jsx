import { useEffect } from "react";
import { useParams, NavLink, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchById } from "../../redux/campersOps";
import { selectCamper } from "../../redux/selectors";

import { IconStar, IconLocation } from "../../assets/icons";

import { swapTwoWords } from "../../helpers";
import CamperForm from "../../components/CamperForm";

import css from "./CamperPage.module.css";

export default function CamperPage() {
  const id = useParams().id;
  const camper = useSelector(selectCamper);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchById(id));
  }, [dispatch, id]);

  console.log(camper);
  return (
    <>
      {camper.rating && (
        <div className={css["camper-page-container"]}>
          <div className={css["name-reviews-price-container"]}>
            <h2 className={css.name}>{camper.name}</h2>
            <div className={css["reviews-location-container"]}>
              <p>
                <IconStar className={css.star} />
                <span>
                  {camper.rating}({camper.reviews.length} Reviews)
                </span>
                <IconLocation className={css["icon-location"]} />{" "}
                {swapTwoWords(camper.location)}
              </p>
            </div>
            <h2 className={css.price}>€{camper.price}</h2>
          </div>
          <ul className={css["images-container"]}>
            {camper.gallery.map((image) => {
              return (
                <li className={css["image-container"]}>
                  <img className={css["image"]} src={image.thumb}></img>
                </li>
              );
            })}
          </ul>
          <p className={css.description}>{camper.description}</p>
          <div>
            <NavLink to={"features"}>Features</NavLink>
            <NavLink to={"reviews"}>Reviews</NavLink>
          </div>
          <div className={css["outlet-form-container"]}>
            <Outlet />
            <CamperForm/>
</div>
          
        </div>
      )}
    </>
  );
}
