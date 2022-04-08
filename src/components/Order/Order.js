import classes from "./Order.module.css"

const Order = (props) => {
    const ingredients =  [];
    for (let ingredient in props.ingredients)
    {
        ingredients.push({name: ingredient, amount: props.ingredients[ingredient]})
    }
    const ingredientsOutput = ingredients.map(ingredient => {
        return <span
                    style={{
                        textTransform: "capitalize",display: "inline-block", margin: "0 1rem",
                        border: "1px solid #CCC", padding: "1rem"
                        }}
                     key={ingredient.name}>{`${ingredient.name}(${ingredient.amount})`}
               </span>
    })
    return (
        <div className={classes.Order}>
            <p>ingredients: {ingredientsOutput}</p>
            <p><strong>price: {props.price}</strong></p>
        </div>
    )

}

export default Order