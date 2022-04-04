import Logo from "../../Logo/Logo";
import NavigationList from "../NavigationList/NavigationList";
import classes from "./SideDrawer.module.css"

const sideDrawer = () => {

    return (
        <aside className={classes.SideDrawer}>
            <Logo height="6%"/>
            <nav>
                <NavigationList />
            </nav>
        </aside>
    )
}

export default sideDrawer;
