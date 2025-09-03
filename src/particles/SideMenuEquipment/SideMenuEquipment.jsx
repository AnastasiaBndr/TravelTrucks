import css from "./SideMenuEquipment.module.css";
import {
  IconAC,
  IconAutomatic,
  IconKitchen,
  IconTV,
  IconBathroom,
  IconWater,
  IconGas,
  IconFridge,
  IconRadio,
  IconPetrol,
  IconGrid,
  IconGrid1x2,
  IconGrid3x3,
} from "../../assets/icons";
import { useSelector } from "react-redux";
import { selectFilter } from "../../redux/selectors";

const equipmentOptions = [
  { id: "AC-1", label: "AC", Icon: IconAC },
  { id: "transmission-1", label: "Automatic", Icon: IconAutomatic },
  { id: "transmission-2", label: "Manual", Icon: IconAutomatic },
  { id: "kitchen-1", label: "Kitchen", Icon: IconKitchen },
  { id: "TV-1", label: "TV", Icon: IconTV },
  { id: "bathroom-1", label: "Bathroom", Icon: IconBathroom },
  { id: "water-1", label: "Water", Icon: IconWater },
  { id: "gas-1", label: "Gas", Icon: IconGas },
  { id: "refrigerator-1", label: "Refrigerator", Icon: IconFridge },
  { id: "radio-1", label: "Radio", Icon: IconRadio },
  { id: "engine-1", label: "Petrol", Icon: IconPetrol },
  { id: "engine-2", label: "Diesel", Icon: IconPetrol },
];

const typeOptions = [
  { id: "Panel Truck", label: "Panel Truck", Icon: IconGrid1x2 },
  { id: "Fully Integrated-1", label: "Fully Integrated", Icon: IconGrid },
  { id: "Alcove-1", label: "Alcove", Icon: IconGrid3x3 },
];

export default function SideMenuEquipment({ typeProp = "", onChange }) {
  const boxType = typeProp === "equipment" ? true : false;
  const filter = useSelector(selectFilter);
  return (
    <>
      {boxType ? (
        <ul className={css["vehicle-container"]}>
          {equipmentOptions.map((option) => (
            <li key={option.id}>
              <input
                type="checkbox"
                id={option.id}
                name={typeProp}
                className={css["input"]}
                onChange={onChange}
                value={option.label}
                checked={filter.equipment?.includes(option.label.toLowerCase())}
              />
              <label htmlFor={option.id} className={css["item"]}>
                <option.Icon width={32} height={32} />
                {option.label}
              </label>
            </li>
          ))}
        </ul>
      ) : (
        <ul className={css["vehicle-container"]}>
          {typeOptions.map((option) => (
            <li key={option.id}>
              <input
                type="radio"
                id={option.id}
                name={typeProp}
                className={css["input"]}
                onChange={onChange}
                value={option.label.toLowerCase()}
                checked={filter.type === option.label.toLowerCase()}
              />
              <label htmlFor={option.id} className={css["item"]}>
                <option.Icon width={32} height={32} />
                {option.label}
              </label>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
