import css from "./Button.module.css";
import clsx from "clsx";

export default function Button({
  children,
  onClick,
  type = "button",
  className = "",
}) {
  return (
    <button type={type} onClick={onClick} className={clsx(css.button, className)}>
      {children}
    </button>
  );
}
