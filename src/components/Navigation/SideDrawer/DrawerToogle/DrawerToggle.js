import classes from "./DrawerToggle.module.css"


const drawerToggle = (props) => (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
        <div className={classes.Dash} />
        <div className={classes.Dash} />
        <div className={classes.Dash} />
    </div>
)

export default drawerToggle;