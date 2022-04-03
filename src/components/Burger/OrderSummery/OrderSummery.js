import classes from "./OrderSummery.module.css"
import Button from "../../../UI/Button/Button";

const orderSummery = (props) => {

    const ingredientsList = Object.keys(props.ingredients).map(ingredient => {
        return <li key={ingredient}>
                    <span>{ingredient} * {props.ingredients[ingredient]} = ${props.prices[ingredient] * props.ingredients[ingredient]}</span>
               </li>
    })

    return (
        <>
            <h3>your Order Summery </h3>

            <ul className={classes.PriceDetails}>
                <li><span>Basic Burger: $4</span></li>
                {ingredientsList}
            </ul>
            <hr />
            <p className={classes.TotalPrice}>total price: ${props.totalPrice}</p>
            <p>would you want to continue checkout your delicious burger ?</p>
            <Button btnType="Success" clicked={props.continue}>continue</Button>
            <Button btnType="Danger" clicked={props.cancel}>cancel</Button>
        </>
    )
}

export default orderSummery;