import css from "./TruckTable.module.css";
import { capitalizeFirstLetter } from "../../helpers";

export default function TruckTable({
  camper: { width, tank, height, form, length, consumption },
}) {
  return (
    <table>
      <caption className={css.title}>Vehicle details</caption>
      <tbody>
        <tr>
          <td className={css.first}>Form</td>
          <td className={css.first}>{capitalizeFirstLetter(form)}</td>
        </tr>
        <tr>
          <td>Length</td>
          <td>{length}</td>
        </tr>
        <tr>
          <td>Width</td>
          <td>{width}</td>
        </tr>
        <tr>
          <td>Height</td>
          <td>{height}</td>
        </tr>
        <tr>
          <td>Tank</td>
          <td>{tank}</td>
        </tr>
        <tr>
          <td>Consumption</td>
          <td>{consumption}</td>
        </tr>
      </tbody>
    </table>
  );
}
