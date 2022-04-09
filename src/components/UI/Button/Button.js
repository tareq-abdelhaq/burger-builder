import classes from "./Button.module.css"
import PropTypes from "prop-types"

const button = (props) => (
    <button className={[classes.Button,classes[props.btnType]].join(" ")}
            onClick={props.clicked} disabled={props.disabled}
    >
        {props.children}
    </button>
)

button.propTypes = {
    btnType: PropTypes.string.isRequired,
    clicked: PropTypes.func.isRequired
}

export default button;