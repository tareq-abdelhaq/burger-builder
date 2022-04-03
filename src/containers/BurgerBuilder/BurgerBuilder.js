import React,{Component} from "react"
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";


class BurgerBuilder extends Component
{
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        }
    }
    lessIngredientHandler = (type) => {
        this.setState(prevIngredients => {
            return {ingredients:
                    {
                        ...prevIngredients.ingredients,[type]: prevIngredients.ingredients[type] === 0 ? 0 :
                            prevIngredients.ingredients[type] - 1
                    }}
        })
    }
    moreIngredientHandler = (type) => {
        this.setState(prevIngredients => {
            return {ingredients: {...prevIngredients.ingredients,[type]: prevIngredients.ingredients[type] + 1}}
        })
    }
    render(){
        return(
            <>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredients={this.state.ingredients} less={this.lessIngredientHandler} more={this.moreIngredientHandler}/>
            </>
        )
    }
}

export default BurgerBuilder