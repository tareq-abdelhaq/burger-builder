import classes from "./Layout.module.css"
const layout = (props) => {
    return (
        <>
            <header>
                <nav>navigation</nav>
            </header>
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