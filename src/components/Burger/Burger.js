import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from "./Burger.module.css"

const burger = (props) => {

    let ingredients = Object.keys(props.ingredients).map(ingredient => {
        return [...Array(props.ingredients[ingredient])].map((_,index)=>{
            return <BurgerIngredient key={ingredient+index} type={ingredient} />
        })
    }).reduce((prevIngredient,currentIngredient) =>
        prevIngredient.concat(currentIngredient),[])

    ingredients = ingredients.length === 0 ? <p>please start adding ingredients !</p> : ingredients

    return (
        <>
            <article className={classes.Burger}>
                <BurgerIngredient type="bread-top"/>
                {ingredients}
                <BurgerIngredient type="bread-bottom"/>
            </article>
        </>
    )
}


export default burger