import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import clsx from "clsx";

import { selectCampers, selectFilter } from "../../redux/selectors";
import { setFilter } from "../../redux/filterSlice";

import SideMenuFilters from "../../particles/SideMenuFilters";
import Button from "../../particles/Button";
import { IconLocation } from "../../assets/icons";
import { swapTwoWords } from "../../helpers";

import css from "./SideMenu.module.css";

const opposites = {
  automatic: "manual",
  manual: "automatic",
  petrol: "diesel",
  diesel: "petrol",
};

export default function SideMenu() {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const filter = useSelector(selectFilter);

  const [equipment, setEquipment] = useState(filter.equipment);
  const [location, setLocation] = useState(filter.location ?? "");
  const [type, setType] = useState(filter.type);

  const locations = [...new Set(campers.map((c) => c.location))];

  const handleDataSubmit = (e) => {
    e.preventDefault();
    dispatch(setFilter({ equipment, location, type }));
    setEquipment([]);
    setLocation("");
    setType("");
  };

  const handleFieldChange = (e, field) => {
    const value = e.target.value;
    if (field === "location") setLocation(value);
    if (field === "type") setType(value);
  };

  const handleEquipmentChange = (e) => {
    const value = e.target.value.toLowerCase();
    const checked = e.target.checked;

    let updatedValues = [...equipment];

    if (checked) {
      const opposite = opposites[value];
      if (opposite) {
        updatedValues = updatedValues.filter((v) => v !== opposite);
      }
      if (!updatedValues.includes(value)) {
        updatedValues.push(value);
      }
    } else {
      updatedValues = updatedValues.filter((v) => v !== value);
    }

    setEquipment(updatedValues);
  };

  return (
    <form className={css["side-menu"]} onSubmit={handleDataSubmit}>
      {/* Location */}
      <div>
        <label className={css["location-title"]} htmlFor="location">
          Location
        </label>
        <div className={css["input-icon-container"]}>
          <IconLocation
            width={20}
            height={20}
            className={clsx(
              css["location-icon"],
              location === "" && css["icon-placeholder"]
            )}
          />
          <select
            id="location"
            onChange={(e) => handleFieldChange(e, "location")}
            value={typeof location === `string` ? location : ""}
            className={clsx(
              css["location-select"],
              location === "" && css.placeholder
            )}
          >
            <option className={css.option} value=""></option>
            {locations.map((loc) => (
              <option key={loc} className={css.option} value={loc}>
                {swapTwoWords(loc)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Filters */}
      <div className={css["filters-container"]}>
        <p className={css["filters-title"]}>Filters</p>

        {/* Equipment */}
        <div>
          <h3 className={css["category-title"]}>Vehicle equipment</h3>
          <SideMenuFilters
            typeProp="equipment"
            equipmentFilter={equipment}
            onChange={handleEquipmentChange}
          />
        </div>

        {/* Vehicle Type */}
        <div>
          <h3 className={css["category-title"]}>Vehicle type</h3>
          <SideMenuFilters
            typeProp="type"
            typeFilter={type}
            onChange={(e) => handleFieldChange(e, "type")}
          />
        </div>
      </div>

      <Button type="submit" className={css["side-menu-button"]}>
        Search
      </Button>
    </form>
  );
}
