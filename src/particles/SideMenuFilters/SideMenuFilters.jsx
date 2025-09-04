import { typeOptions, equipmentOptions } from "../../data";
import css from "./SideMenuFilters.module.css";

export default function SideMenuFilters({
  typeProp = "",
  onChange,
  equipmentFilter = [],
  typeFilter = "",
}) {
  const isEquipment = typeProp === "equipment";
  const options = isEquipment ? equipmentOptions : typeOptions;

  return (
    <ul className={css["vehicle-container"]}>
      {options.map((option) => {
        const isChecked = isEquipment
          ? equipmentFilter.includes(option.label.toLowerCase())
          : typeFilter === option.label.toLowerCase();

        return (
          <li key={option.id}>
            <input
              type={isEquipment ? "checkbox" : "radio"}
              id={option.id}
              name={typeProp}
              className={css.input}
              onChange={onChange}
              value={option.label.toLowerCase()}
              checked={isChecked}
            />
            <label htmlFor={option.id} className={css.item}>
              <option.Icon className={css["menu-icon"] } width={32} height={32} />
              {option.label}
            </label>
          </li>
        );
      })}
    </ul>
  );
}
