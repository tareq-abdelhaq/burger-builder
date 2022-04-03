import classes from "./Modal.module.css"

const modal = (props) => (
    <div className={`${classes.Modal}`}
         style=
             {{
                transform: props.visible ? "translateY(0)" : "translateY(-100vh)",
                opacity: props.visible ? "1" : "0",
                 scale: props.visible ? "1" : "0"
            }}
    >
        {props.children}
    </div>
)

export default modal;