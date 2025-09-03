import { useDispatch, useSelector } from "react-redux";

import SideMenuEquipment from "../../particles/SideMenuEquipment";
import Button from "../../particles/Button";

import { swapTwoWords } from "../../helpers";

import { IconLocation } from "../../assets/icons";
import { selectCampers } from "../../redux/selectors";

import css from "./SideMenu.module.css";
import { setFilter } from "../../redux/filterSlice";

const opposites = {
  automatic: "manual",
  manual: "automatic",
  petrol: "diesel",
  diesel: "petrol",
};

export default function SideMenu() {
  const campers = useSelector(selectCampers);
  const dispatch = useDispatch();
  const locations = [...new Set(campers.map((c) => c.location))];
  const equipmentProp = "equipment";
  const typeProp = "type";

  const handleChange = (event, key) => {
    dispatch(setFilter({ [key]: event.target.value }));
  };

  const handleSelectChange = (e) => {
    const value = e.target.value.toLowerCase();
    const checked = e.target.checked;

    dispatch((dispatch, getState) => {
      const currentValues = getState().filters.filter.equipment;

      let updatedValues = [...currentValues];

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

      dispatch(setFilter({ equipment: updatedValues }));
    });
  };

  return (
    <div className={css["side-menu"]}>
      <div>
        <label
          className={css["location-title"]}
          id="location"
          htmlFor="location"
        >
          Location
        </label>
        <div className={css["input-icon-container"]}>
          <IconLocation
            width={20}
            height={20}
            className={css["location-icon"]}
          />
          <select
            id="location"
            onChange={(e) => handleChange(e, "location")}
            className={css["location-select"]}
            type="text"
          >
            <option className={css.option} value={""}></option>
            {locations.map((location) => {
              return (
                <option key={location} className={css.option} value={location}>
                  {swapTwoWords(location)}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className={css["filters-container"]}>
        <p className={css["filters-title"]}>Filters</p>
        <div>
          <h3 className={css["category-title"]}>Vehicle equipment</h3>
          <SideMenuEquipment
            typeProp={equipmentProp}
            onChange={(e) => handleSelectChange(e, equipmentProp)}
          />
        </div>

        <div>
          <h3 className={css["category-title"]}>Vehicle type</h3>
          <SideMenuEquipment
            typeProp={typeProp}
            onChange={(e) => handleChange(e, typeProp)}
          />
        </div>
      </div>
      <Button>Search</Button>
    </div>
  );
}
