import Logo from "../../Logo/Logo";
import NavigationList from "../NavigationList/NavigationList";
import Backdrop from "../../UI/Backdrop/Backdrop";
import classes from "./SideDrawer.module.css"

const sideDrawer = (props) => {

    return (
        <>
            <Backdrop visible={props.visible} hide={props.drawerHidden}/>
            <aside className={[classes.SideDrawer, props.visible ? classes.open : classes.close].join(" ")}>
                <Logo height="6%"/>
                <nav>
                    <NavigationList hide={props.drawerHidden}/>
                </nav>
            </aside>
        </>
    )
}

export default sideDrawer;
