import classes from "./BuildControls.module.css"
import BuildControl from "./BuildControl/BuildControl";



const buildControls = (props) => {
    const buildControls = Object.keys(props.ingredients).map((ingredient,index) => {
        return <BuildControl key={ingredient+index} ingredient={ingredient} less={props.less} more={props.more} amount={props.ingredients[ingredient]}/>
    })

    return (
        <div className={classes.BuildControls}>
            <p className={classes.Price}>current price: <em>${props.totalPrice}</em></p>
            {buildControls}
            <button className={classes.OrderButton} disabled={!props.purchasable}>order now </button>
        </div>
    )
}

export default buildControls;