import { useSelector } from "react-redux";

import { selectCamper, selectIsLoading } from "../../redux/selectors";

import Categories from "../../particles/Categories";
import TruckTable from "../../particles/TruckTable";
import Loader from "../Loader";

import css from "./Features.module.css";

export default function Features() {
  const camper = useSelector(selectCamper);
  const loading = useSelector(selectIsLoading);

  return (
    <>
      {loading && <Loader />}
      <div className={css["features-container"]}>
        <Categories camper={camper} />
        <TruckTable camper={camper} />
      </div>
    </>
  );
}
