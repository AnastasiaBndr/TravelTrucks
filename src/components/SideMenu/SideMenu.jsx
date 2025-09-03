import { useDispatch, useSelector } from "react-redux";

import SideMenuEquipment from "../../particles/SideMenuEquipment";
import Button from "../../particles/Button";

import { swapTwoWords } from "../../helpers";

import { IconLocation } from "../../assets/icons";
import { selectCampers, selectFilter, selectFilteredCampers } from "../../redux/selectors";

import css from "./SideMenu.module.css";
import { setFilter } from "../../redux/filterSlice";

export default function SideMenu() {
  const campers = useSelector(selectCampers);
  const selectFiltered = useSelector(selectFilteredCampers);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const locations = [...new Set(campers.map((c) => c.location))];

  console.log(selectFiltered);

  const handleChange = (event) => {
    dispatch(setFilter({ location: event.target.value }));
  };

 const handleSelectChange = (e,key) => {
   const value = e.target.value;
   const checked = e.target.checked;

   dispatch((dispatch, getState) => {
     const currentValues = getState().filters.filter[key];

     let updatedValues;
     if (checked) {
       updatedValues = [...new Set([...currentValues, value])];
     } else {
       updatedValues = currentValues.filter((t) => t !== value);
     }

     dispatch(setFilter({ [key]: updatedValues }));
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
            onChange={handleChange}
            className={css["location-select"]}
            type="text"
            value={filter.location}
          >
            {locations.map((location) => {
              return (
                <option className={css.option} value={location}>
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
            typeProp={"equipment"}
            onChange={(e) => handleSelectChange(e, "equipment")}
          />
        </div>

        <div>
          <h3 className={css["category-title"]}>Vehicle type</h3>
          <SideMenuEquipment
            typeProp={"type"}
            onChange={(e) => handleSelectChange(e, "type")}
          />
        </div>
      </div>
      <Button>Search</Button>
    </div>
  );
}
