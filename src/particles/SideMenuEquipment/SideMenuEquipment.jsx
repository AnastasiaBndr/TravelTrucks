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
  IconGrid3x3
} from "../../assets/icons";
import { useSelector } from "react-redux";
import { selectFilter } from "../../redux/selectors";

const equipmentOptions = [
  { id: "AC", label: "AC", Icon: IconAC },
  { id: "automatic", label: "Automatic", Icon: IconAutomatic },
  { id: "kitchen", label: "Kitchen", Icon: IconKitchen },
  { id: "TV", label: "TV", Icon: IconTV },
  { id: "bathroom", label: "Bathroom", Icon: IconBathroom },
  { id: "water", label: "Water", Icon: IconWater },
  { id: "gas", label: "Gas", Icon: IconGas },
  { id: "refrigerator", label: "Refrigerator", Icon: IconFridge },
  { id: "radio", label: "Radio", Icon: IconRadio },
  { id: "petrol", label: "Petrol", Icon: IconPetrol },
];

const type = [
  { id: "Van", label: "Van", Icon: IconGrid1x2 },
  { id: "Fully Integrated", label: "Fully Integrated", Icon: IconGrid },
  { id: "Alcove", label: "Alcove", Icon: IconGrid3x3 },
];

export default function SideMenuEquipment({ typeProp="", onChange}) {
  const arr = typeProp === "equipment" ? equipmentOptions : type;
  const filter = useSelector(selectFilter);
  return (
    <ul className={css["vehicle-equipment-container"]}>
      {arr.map((option) => (
        <li key={option.id}>
          <input
            type="checkbox"
            id={option.id}
            name={option.id}
            className={css["equipment-input"]}
            onChange={onChange}
            value={option.label}
            checked={filter[typeProp].includes(option.label)}
          />
          <label htmlFor={option.id} className={css["equipment-item"]}>
            <option.Icon width={32} height={32} />
            {option.label}
          </label>
        </li>
      ))}
    </ul>
  );
}