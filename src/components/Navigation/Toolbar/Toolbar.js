import classes from "./Toolbar.module.css"

const toolbar = (props) => (

    <header className={classes.Toolbar}>
        <div>Logo</div>
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