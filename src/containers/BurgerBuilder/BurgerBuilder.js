import React,{Component} from "react"
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const BURGER_INGREDIENTS_PRICES = {
    salad: 0.4,
    bacon: 0.9,
    cheese: 1.1,
    meat: 1.5
}

class BurgerBuilder extends Component
{
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4
    }
    lessIngredientHandler = (type) => {
        this.setState(prevIngredients => {
            return {ingredients:
                    {
                        ...prevIngredients.ingredients,[type]: prevIngredients.ingredients[type] === 0 ? 0 :
                            prevIngredients.ingredients[type] - 1
                    }}
        })
        this.setState(prevState => {
            return {...prevState,totalPrice:parseFloat((prevState.totalPrice - BURGER_INGREDIENTS_PRICES[type]).toFixed(2))}
        })
    }
    moreIngredientHandler = (type) => {
        this.setState(prevIngredients => {
            return {ingredients: {...prevIngredients.ingredients,[type]: prevIngredients.ingredients[type] + 1}}
        })
        this.setState(prevState => {
            return {...prevState,totalPrice: parseFloat((prevState.totalPrice + BURGER_INGREDIENTS_PRICES[type]).toFixed(2))}
        })
    }
    render(){
        return(
            <>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredients={this.state.ingredients}
                               less={this.lessIngredientHandler}
                               more={this.moreIngredientHandler}
                               totalPrice={this.state.totalPrice}
                />
            </>
        )
    }
}

export default BurgerBuilder