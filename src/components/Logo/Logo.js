import classes from "./Logo.module.css";
import burgerLogo from "../../assets/images/burger-logo.png"
import {NavLink} from "react-router-dom";

const logo = (props) => (
    <NavLink to="/">
        <img src={burgerLogo} alt="Burger Logo" className={classes.Logo}
             style={{height: props.height}}
        />
    </NavLink>
)

export default logo;