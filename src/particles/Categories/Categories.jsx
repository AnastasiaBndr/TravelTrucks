import { capitalizeFirstLetter } from "../../helpers";

import {
  IconHeart,
  IconLocation,
  IconStar,
  IconAC,
  IconBathroom,
  IconAutomatic,
  IconTV,
  IconFuel,
  IconKitchen,
} from "../../assets/icons";

import css from "./Categories.module.css";

export default function Categories({
  transmission,
  engine,
  kitchen,
  bathroom,
  tv,
  AC,
}) {
  return (
    <ul className={css.options}>
      <li className={css["option-item"]}>
        <IconAutomatic height={15} width={20} className={css["option-icon"]} />
        {capitalizeFirstLetter(transmission)}
      </li>
      <li className={css["option-item"]}>
        <IconFuel height={20} width={20} className={css["option-icon"]} />
        {capitalizeFirstLetter(engine)}
      </li>
      {kitchen && (
        <li className={css["option-item"]}>
          <IconKitchen height={18} width={20} className={css["option-icon"]} />
          Kitchen
        </li>
      )}
      {bathroom && (
        <li className={css["option-item"]}>
          <IconBathroom height={15} width={20} className={css["option-icon"]} />
          Bathroom
        </li>
      )}
      {tv && (
        <li className={css["option-item"]}>
          <IconTV height={15} width={20} className={css["option-icon"]} />
          TV
        </li>
      )}
      {AC && (
        <li className={css["option-item"]}>
          <IconAC height={17.5} width={17.5} className={css["option-icon"]} />
          AC
        </li>
      )}
    </ul>
  );
}
