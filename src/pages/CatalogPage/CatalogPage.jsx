import { useSelector } from "react-redux";

import SideMenu from "../../components/SideMenu/SideMenu";
import Loader from "../../components/Loader";
import Card from "../../components/Card/Card";

import css from "./CatalogPage.module.css";

import { selectCampers, selectIsLoading } from "../../redux/selectors";

export default function Catalog({ loadMore }) {
  const campers = useSelector(selectCampers || []);
  const loading = useSelector(selectIsLoading);


  return (
    <>
      {loading && <Loader />}
      {campers.length > 0 && (
        <div className={css["catalog-button-container"]}>
          <div className={css["catalog-container"]}>
            <SideMenu/>
            <div>
              <ul className={css["catalog-items"]}>
                {campers.map((camper) => {
                  return (
                    <li key={camper.id}>
                      <Card
                        id={camper.id}
                        name={camper.name}
                        price={camper.price}
                        rating={camper.rating}
                        location={camper.location}
                        description={camper.description}
                        image={camper.gallery[0]}
                        reviews={camper.reviews.length}
                        transmission={camper.transmission}
                        AC={camper.AC}
                        kitchen={camper.kitchen}
                        engine={camper.engine}
                        bathroom={camper.bathroom}
                        tv={camper.TV}
                        gas={camper.gas}
                        fridge={camper.refrigerator}
                        water={camper.water}
                        microwave={camper.microwave}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <button className={css["load-more-button"]} onClick={loadMore}>
            {"Load more"}
          </button>
        </div>
      )}
    </>
  );
}
