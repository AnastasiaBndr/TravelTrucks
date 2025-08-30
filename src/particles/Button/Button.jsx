import css from "./Button.module.css"

export default function Button({ children, onClick }) {
    return (<button onClick={onClick} className={css.button}>
        {children}
    </button>)
}