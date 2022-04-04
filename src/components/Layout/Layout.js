import classes from "./Layout.module.css"
import Toolbar from "../Navigation/Toolbar/Toolbar";
const layout = (props) => {
    return (
        <>
            <Toolbar />
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