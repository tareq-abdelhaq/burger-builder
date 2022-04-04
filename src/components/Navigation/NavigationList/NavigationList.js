import classes from "./NavigationList.module.css"
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationList = () => (
    <ul className={classes.NavigationList}>
        <NavigationItem link="/" active={true}>Burger Builder</NavigationItem>
        <NavigationItem link="/">Order History</NavigationItem>
        <NavigationItem link="/">Login</NavigationItem>
        <NavigationItem link="/">Sign up</NavigationItem>
    </ul>
)

export default navigationList;