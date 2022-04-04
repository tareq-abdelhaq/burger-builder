import classes from "./Toolbar.module.css"
import Logo from "../../Logo/Logo";
import NavigationList from "../NavigationList/NavigationList"
import DrawerToggle from "../SideDrawer/DrawerToogle/DrawerToggle";

const toolbar = (props) => (

    <header className={classes.Toolbar}>
        <Logo height="60%"/>
        <nav>
          <NavigationList />
        </nav>
        <DrawerToggle clicked={props.drawerVisible}/>
    </header>


)

export default toolbar;