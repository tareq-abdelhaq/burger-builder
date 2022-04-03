import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from "./Burger.module.css"

const burger = (props) => {

    const ingredients = Object.keys(props.ingredients).map(ingredient => {
        return [...Array(props.ingredients[ingredient])].map((_,index)=>{
            return <BurgerIngredient key={ingredient+index} type={ingredient} />
        })
    })

    return (
        <article className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {ingredients}
            <BurgerIngredient type="bread-bottom"/>
        </article>
    )
}


export default burger