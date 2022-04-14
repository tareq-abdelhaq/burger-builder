import classes from "./NavigationList.module.css"
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationList = () => (
    <ul className={classes.NavigationList}>
        <NavigationItem link="/">Burger Builder</NavigationItem>
        <NavigationItem link="/orders">Order History</NavigationItem>
        <NavigationItem link="/auth">login / sign up</NavigationItem>
    </ul>
)

export default navigationList;