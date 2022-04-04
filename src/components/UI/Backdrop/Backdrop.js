import classes from "./Backdrop.module.css"

const backdrop = (props) => (
    props.visible &&
    <div className={classes.BackDrop}
         onClick={props.hide}
    />
)

export default backdrop;