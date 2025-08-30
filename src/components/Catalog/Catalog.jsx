import css from "./Catalog.module.css";
import SideMenu from "../SideMenu/SideMenu";
import Card from "../Card";
import { useSelector } from "react-redux";

import { selectCampers } from "../../redux/selectors";



export default function Header() {

    const campers = useSelector(selectCampers || []);

    console.log(campers);

    return (
        campers.length > 0 &&
        <div className={css["catalog-container"]}>

            <SideMenu />
            <div>
                <ul>
                    {campers.map(camper => {
                        return <li key={camper.id}>
                            <Card
                                name={camper.name}
                                price={camper.price}
                                rating={camper.rating}
                                location={camper.location}
                                description={camper.description}
                                image={camper.gallery[0]}
                            />
                        </li>

                    })}
                </ul>
            </div>
        </div>)
}