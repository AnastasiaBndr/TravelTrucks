import { useSelector } from "react-redux";

import Loader from "../../components/Loader";
import Card from "../../components/Card/Card";
import Error from "../../components/Error";

import css from "./FeaturedPage.module.css";

import {
  selectIsLoading,
  selectFeatured,
  selectError,
} from "../../redux/selectors";

export default function FeaturedPage() {
  const campers = useSelector(selectFeatured || []);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      {campers.length > 0 && (
        <div>
          <ul className={css["catalog-items"]}>
            {campers.map((camper) => {
              return (
                <li key={camper.id}>
                  <Card camper={camper} />
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {(campers.length === 0 || error) && <Error />}

      {loading && <Loader />}
    </>
  );
}
