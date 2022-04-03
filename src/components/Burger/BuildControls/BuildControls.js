import classes from "./BuildControls.module.css"
import BuildControl from "./BuildControl/BuildControl";

const buildControls = (props) => {
    const buildControls = Object.keys(props.ingredients).map((ingredient,index) => {
        return <BuildControl key={ingredient+index} ingredient={ingredient}/>
    })

    return (
        <div className={classes.BuildControls}>
            {buildControls}
        </div>
    )
}

export default buildControls;