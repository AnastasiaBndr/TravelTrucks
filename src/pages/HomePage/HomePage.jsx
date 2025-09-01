import css from "./HomePage.module.css";
import Button from "../../particles/Button";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className={css.hero}>
      <div className={css["content-container"]}>
        <h1 className={css.title}>Campest of your dreams</h1>
        <h2 className={css.description}>
          You can find everything you want in our catalog
        </h2>
        <Button onClick={() => navigate("/catalog")}>View Now!</Button>
      </div>
    </div>
  );
}
