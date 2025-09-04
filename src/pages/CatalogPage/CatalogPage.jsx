import { useSelector } from "react-redux";

import SideMenu from "../../components/SideMenu/SideMenu";
import Loader from "../../components/Loader";
import Card from "../../components/Card/Card";
import Error from "../../components/Error";

import css from "./CatalogPage.module.css";

import {
  selectIsLoading,
  selectFilteredCampers,
  selectTotal,
  selectError,
  selectCampers,
} from "../../redux/selectors";

export default function Catalog({ loadMore }) {
  const filteredCampers = useSelector(selectFilteredCampers) || [];
  const campers = useSelector(selectCampers) || [];
  const totalHits = useSelector(selectTotal) ?? 0;
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <div className={css["catalog-button-container"]}>
      <div className={css["catalog-container"]}>
        <SideMenu />
        {filteredCampers.length > 0 && (
          <ul className={css["catalog-items"]}>
            {filteredCampers.map((camper) => {
              return (
                <li key={camper.id}>
                  <Card camper={camper} />
                </li>
              );
            })}
          </ul>
        )}

        {!loading && (filteredCampers.length === 0 || error) && <Error />}
      </div>
      {loading && <Loader />}

      {!loading &&
        campers.length < totalHits &&
        campers.length > 0 &&
        filteredCampers.length > 0 &&
        !error && (
          <button className={css["load-more-button"]} onClick={loadMore}>
            {"Load more"}
          </button>
        )}
    </div>
  );
}
