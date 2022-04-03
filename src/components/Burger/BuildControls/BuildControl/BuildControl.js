import classes from "./BuildControl.module.css"

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.ingredient}</div>
        <button className={classes.Less} disabled={props.amount === 0} onClick={() => props.less(props.ingredient)}>Less</button>
        <button className={classes.More} onClick={() => props.more(props.ingredient)}>More</button>
    </div>
)


export default buildControl;