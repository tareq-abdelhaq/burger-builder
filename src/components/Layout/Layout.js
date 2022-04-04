import classes from "./Layout.module.css"
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
const layout = (props) => {
    return (
        <>
            <Toolbar />
            <SideDrawer />
            <main className={classes.Content}>
                {props.children}
            </main>
            <footer>
                footer
            </footer>
        </>
    )
}

export default layout;