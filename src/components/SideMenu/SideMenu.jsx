import css from "./SideMenu.module.css";
import Button from "../../particles/Button";

export default function SideMenu() {
  return (
    <div>
      <div>
        <label id="location" htmlFor="">
          Location
        </label>
        <input htmlFor="location" type="text" />
      </div>
      <div>
        <span>Filters</span>
        <div>
          <h3>Vehicle equipment</h3>
          <ul>
            <li>
              <span>AC</span>
            </li>
            <li>
              <span>Automatic</span>
            </li>
            <li>
              <span>Kitchen</span>
            </li>
            <li>
              <span>TV</span>
            </li>
            <li>
              <span>Bathroom</span>
            </li>
          </ul>
        </div>

        <div>
          <h3>Vehicle type</h3>
          <ul>
            <li>
              <span>Van</span>
            </li>
            <li>
              <span>Fully Integrated</span>
            </li>
            <li>
              <span>Alcove</span>
            </li>
          </ul>
        </div>
      </div>
      <Button>Search</Button>
    </div>
  );
}
