import classes from "./Logo.module.css";
import burgerLogo from "../../assets/images/burger-logo.png"

const logo = (props) => (
    <img src={burgerLogo} alt="Burger Logo" className={classes.Logo}
         style={{height: props.height}}
    />
)

export default logo;