import classes from "./NavigationItem.module.css"


const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <a href={props.link} className={props.active && classes.active}>{props.children}</a>
    </li>
)

export default navigationItem;