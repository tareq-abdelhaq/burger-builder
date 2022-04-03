import classes from "./BurgerIngredient.module.css"
import PropTypes from "prop-types"

const burgerIngredient = (props) =>
{
    switch(props.type){
        case "bread-bottom":
            return <div className={classes.BreadBottom} />
        case "bread-top":
            return (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1} />
                    <div className={classes.Seeds2}/>
                </div>
            )
        case "meat":
            return <div className={classes.Meat} />
        case "cheese":
            return <div className={classes.Cheese}/>
        case "bacon":
            return <div className={classes.Bacon}/>
        case "salad":
            return <div className={classes.Salad}/>
        default:
            return null
    }
}

burgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}


export default burgerIngredient;