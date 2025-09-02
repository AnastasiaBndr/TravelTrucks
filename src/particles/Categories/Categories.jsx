import { capitalizeFirstLetter } from "../../helpers";

import {
  IconAC,
  IconBathroom,
  IconAutomatic,
  IconTV,
  IconFuel,
  IconKitchen,
  IconFridge,
  IconGas,
  IconMicrowave,
  IconWater,
  IconRadio
} from "../../assets/icons";

import css from "./Categories.module.css";

export default function Categories({
  transmission,
  engine,
  kitchen,
  bathroom,
  tv,
  AC,
  gas,
  fridge,
  water,
  microwave,
  radio
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
      {gas && (
        <li className={css["option-item"]}>
          <IconGas height={20} width={20} className={css["option-icon"]} />
          Gas
        </li>
      )}
      {water && (
        <li className={css["option-item"]}>
          <IconWater height={22} width={19} className={css["option-icon"]} />
          Water
        </li>
      )}
      {fridge && (
        <li className={css["option-item"]}>
          <IconFridge height={20} width={20} className={css["option-icon"]} />
          Refrigerator
        </li>
      )}
      {microwave && (
        <li className={css["option-item"]}>
          <IconMicrowave
            height={20}
            width={20}
            className={css["option-icon"]}
          />
          Microwave
        </li>
      )}
      {radio && (
        <li className={css["option-item"]}>
          <IconRadio
            height={20}
            width={20}
            className={css["option-icon"]}
          />
          Radio
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
