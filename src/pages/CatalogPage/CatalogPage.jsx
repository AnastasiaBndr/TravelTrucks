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
  selectFilter,
} from "../../redux/selectors";

export default function Catalog({ loadMore }) {
  const filteredCampers = useSelector(selectFilteredCampers) || [];
  const campers = useSelector(selectCampers) || [];
  const totalHits = useSelector(selectTotal) ?? 0;
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const {
    equipment = [],
    location = "",
    type = "",
  } = useSelector(selectFilter);

  return (
    <div className={css["catalog-button-container"]}>
      <div className={css["catalog-container"]}>
        <SideMenu />
        <div>
          <div className={css["your-search-for"]}>
            {(equipment.length > 0 || type != "" || location != "") && (
              <>
                {equipment.length > 0 && (
                  <ul>
                    {equipment.map((item) => {
                      return <li key={ item} className={css["search-item"]}>{item}</li>;
                    })}
                  </ul>
                )}
                {location != "" && (
                  <p className={css["search-item"]}>{location}</p>
                )}
                {type != "" && <p className={css["search-item"]}>{type}</p>}
              </>
            )}
          </div>

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
