import css from "./Reviews.module.css";
import { useSelector } from "react-redux";

import { selectCamper } from "../../redux/selectors";

export default function Reviews() {
  const camper = useSelector(selectCamper);

  console.log(camper);

  return <>REVIEWS</>;
}
