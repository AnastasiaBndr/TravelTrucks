import css from "./Features.module.css";
import { useSelector } from "react-redux";

import { selectCamper } from "../../redux/selectors";

import Categories from "../../particles/Categories";
import TruckTable from "../../particles/TruckTable";
import Form from "../CamperForm";

export default function Features() {
  const camper = useSelector(selectCamper);
  const {
    engine,
    transmission,
    tv,
    kitchen,
    AC,
    bathroom,
    gas,
    refrigerator,
    water,
    microwave,
    width,
    tank,
    radio,
    height,
    form,
    length,
    consumption,
  } = camper;
  console.log(camper);

  return (

      <div className={css["features-container"]}>
        <Categories
          engine={engine}
          transmission={transmission}
          tv={tv}
          kitchen={kitchen}
          AC={AC}
          bathroom={bathroom}
          gas={gas}
          fridge={refrigerator}
          water={water}
          microwave={microwave}
          radio={radio}
        />
        <TruckTable
          width={width}
          length={length}
          consumption={consumption}
          form={form}
          tank={tank}
          height={height}
        />
      </div>

  );
}
