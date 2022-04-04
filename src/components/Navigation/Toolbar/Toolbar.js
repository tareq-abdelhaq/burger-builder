import classes from "./Toolbar.module.css"
import Logo from "../../Logo/Logo";


const toolbar = (props) => (

    <header className={classes.Toolbar}>
        <Logo />
        <nav>
            <ul>
                <li>Burger Builder</li>
                <li>Order History</li>
                <li>Sign up</li>
                <li>Login</li>
            </ul>
        </nav>
        <div>Menu</div>
    </header>


)

export default toolbar;