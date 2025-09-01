import css from "./Card.module.css";

import { useNavigate } from "react-router-dom";

import { swapTwoWords, capitalizeFirstLetter } from "../../helpers";
import {
    IconHeart,
    IconLocation,
    IconStar,
    IconAC,
    IconBathroom,
    IconAutomatic,
    IconTV,
    IconFuel,
    IconKitchen
} from "../../assets/icons";
import Button from "../../particles/Button";

export default function Card({ id, name, location, reviews = 0, description, price, rating, image, tv, transmission, AC, kitchen, engine, bathroom }) {
    const navigate = useNavigate();

    return (
        <>
            <div className={css["card-container"]}>
                <img className={css.image} src={image.thumb} alt={description} />
                <div className={css["info-container"]}>
                    <div className={css["name-price-container"]}>
                        <h3 className={css.name}>{name}</h3>
                        <div >
                            <span >€{price}
                            </span><IconHeart className={css.icon} />
                        </div>

                    </div>

                    <div className={css["price-location-container"]}>
                        <IconStar className={css.star} />
                        <span>{rating}({reviews} Reviews)
                            <IconLocation className={css["icon-location"]} /> {swapTwoWords(location)}</span>

                    </div>
                    <span className={css.description}>{description}</span>
                    <ul className={css.options}>
                        <li className={css["option-item"]}><IconAutomatic height={15} width={20} className={css["option-icon"]} />{capitalizeFirstLetter(transmission)}</li>
                        <li className={css["option-item"]}><IconFuel height={20} width={20} className={css["option-icon"]} />{capitalizeFirstLetter(engine)}</li>
                        {kitchen && <li className={css["option-item"]}><IconKitchen height={18} width={20} className={css["option-icon"]} />Kitchen</li>}
                        {bathroom && <li className={css["option-item"]}><IconBathroom height={15} width={20} className={css["option-icon"]} />Bathroom</li>}
                        {tv && <li className={css["option-item"]}><IconTV height={15} width={20} className={css["option-icon"]} />TV</li>}
                        {AC && <li className={css["option-item"]}><IconAC height={17.5} width={17.5} className={css["option-icon"]} />AC</li>}
                    </ul>
                    <Button onClick={() => navigate(`/catalog/${id}`)}>Show more</Button>
                </div>
            </div>


        </>)
}