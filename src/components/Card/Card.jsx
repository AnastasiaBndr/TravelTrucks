import css from "./Card.module.css";

export default function Card({ name, location, description, price, rating,image }) {
    return (
        <>
            <img src={image.thumb} alt={description} />
            <div>
              <h3>{name}</h3>
            <span>{price}</span>
            <span>{rating}</span> <span>
                {location}
            </span>
            <span>{description}</span>  
            </div>
            
        </>)
}