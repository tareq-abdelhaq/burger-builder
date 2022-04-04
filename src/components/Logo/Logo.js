import classes from "./Logo.module.css";
import burgerLogo from "../../assets/images/burger-logo.png"

const logo = () => (
    <img src={burgerLogo} alt="Burger Logo" className={classes.Logo}/>
)

export default logo;