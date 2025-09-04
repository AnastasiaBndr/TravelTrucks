import { NavLink } from "react-router";
import { useSelector } from "react-redux";
import clsx from "clsx";

import { selectFeatured } from "../../redux/selectors";

import css from "./Header.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Header() {
  const featured = useSelector(selectFeatured);
  return (
    <div className={css["header-container"]}>
      <div>
        <span className={css["travel-trucks"]}>
          Travel<span className={css.travel}>Trucks</span>
        </span>
      </div>
      <div className={css["links-container"]}>
        <NavLink to={"/"} className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to={"/catalog"} className={buildLinkClass}>
          Catalog
        </NavLink>
      </div>
      {featured.length > 0 && (
        <NavLink to={"/featured"} className={buildLinkClass}>
          Featured
        </NavLink>
      )}
    </div>
  );
}
