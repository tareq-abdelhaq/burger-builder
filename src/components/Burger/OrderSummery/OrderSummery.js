import classes from "./OrderSummery.module.css"

const orderSummery = (props) => {

    const ingredientsList = Object.keys(props.ingredients).map(ingredient => {
        return <li key={ingredient}>
                    {ingredient} * {props.ingredients[ingredient]} = ${props.prices[ingredient] * props.ingredients[ingredient]}
               </li>
    })

    return (
        <>
            <h3>your Order Summery </h3>

            <ul className={classes.PriceDetails}>
                <li>Basic Burger: $4</li>
                {ingredientsList}
            </ul>
            <hr />
            <p className={classes.TotalPrice}>total price: ${props.totalPrice}</p>
            <p>would you want to continue checkout your delicious burger ?</p>
        </>
    )
}

export default orderSummery;