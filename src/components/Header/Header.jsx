import { NavLink } from "react-router";
import css from "./Header.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Header() {
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
    </div>
  );
}
