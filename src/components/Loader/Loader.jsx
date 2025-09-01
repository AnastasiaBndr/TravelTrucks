import css from "./Loader.module.css";
import { BeatLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
};

export default function Loader() {
  return (
    <div className={css.loader}>
      <BeatLoader
        color={"black"}
        size={30}
        loading={true}
        cssOverride={override}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
