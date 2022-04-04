import classes from "./Toolbar.module.css"
import Logo from "../../Logo/Logo";
import NavigationList from "../NavigationList/NavigationList"

const toolbar = (props) => (

    <header className={classes.Toolbar}>
        <Logo height="60%"/>
        <nav>
          <NavigationList />
        </nav>
        <div>Menu</div>
    </header>


)

export default toolbar;