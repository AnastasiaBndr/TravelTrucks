import { useEffect } from "react";
import { useParams, NavLink, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchById } from "../../redux/campersOps";
import { selectCamper } from "../../redux/selectors";

import { IconStar, IconLocation } from "../../assets/icons";

import { swapTwoWords } from "../../helpers";

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
        <div>
          <h2>{camper.name}</h2>
          <div className={css["reviews-location-container"]}>
            <IconStar className={css.star} />
            <span>
              {camper.rating}({camper.reviews.length} Reviews)
              <IconLocation className={css["icon-location"]} />{" "}
              {swapTwoWords(camper.location)}
            </span>
            <p>€{camper.price}</p>
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
          <span>{camper.description}</span>
          <div>
            <NavLink to={"features"}>Features</NavLink>
            <NavLink to={"reviews"}>Reviews</NavLink>
          </div>

          <Outlet />
        </div>
      )}
    </>
  );
}
