import classes from "./Backdrop.module.css"
import PropTypes from "prop-types";

const backdrop = (props) => (
    props.visible &&
    <div className={classes.BackDrop}
         onClick={props.hide}
    />
)


backdrop.prototype = {
    visible: PropTypes.bool.isRequired,
    hide: PropTypes.func.isRequired
}

export default backdrop;

