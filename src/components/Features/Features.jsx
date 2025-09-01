import css from "./Features.module.css";
import { useSelector } from "react-redux";

import { selectCamper } from "../../redux/selectors";

import Categories from "../../particles/Categories";

export default function Features() {
  const camper = useSelector(selectCamper);
  const { engine, transmission, tv, kitchen, AC, bathroom } = camper;
  console.log(camper);

  return (
    <>
      FEATURES
      <Categories
                  engine={engine}
                  transmission={transmission}
                  tv={tv}
                  kitchen={kitchen}
                  AC={AC}
                  bathroom={bathroom}
                />
    </>
  );
}
