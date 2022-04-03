import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from "./Burger.module.css"

const burger = () => {


    return (
        <article className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="bread-bottom"/>
        </article>
    )
}


export default burger