import css from "./Button.module.css"

export default function Button({ children, onClick,type="button" }) {
    return (<button type={type} onClick={onClick} className={css.button}>
        {children}
    </button>)
}