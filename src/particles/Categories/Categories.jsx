import { categoriesData } from "../../data";

import css from "./Categories.module.css";

export default function Categories({ camper }) {
  return (
    <ul className={css.options}>
      {categoriesData.map(({ label, icon: Icon, key, alwaysShow, size }) => {
        const value = camper[key];

        if (!alwaysShow && !value) return null;

        return (
          <li key={key} className={css["option-item"]}>
            {Icon && (
              <Icon
                width={size.width}
                height={size.height}
                className={css["option-icon"]}
              />
            )}
            {typeof label === "function" ? label(value) : label}
          </li>
        );
      })}
    </ul>
  );
}
