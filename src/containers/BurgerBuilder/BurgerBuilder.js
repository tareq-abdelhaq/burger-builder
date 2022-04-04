import React,{Component} from "react"
import Burger from "../../components/Burger/Burger"
import BuildControls from "../../components/Burger/BuildControls/BuildControls"
import Modal from "../../components/UI/Modal/Modal"
import OrderSummery from "../../components/Burger/OrderSummery/OrderSummery"

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
            meat: 0
        },
        totalPrice: 4,
        orderModalVisible: false
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
    orderSummeryHandler = () => {
        this.setState({orderModalVisible: true})
    }
    orderCancelHandler = () => {
        this.setState({orderModalVisible: false})
    }
    orderContinueHandler = () => {
        alert("we received your Order")
        this.setState({orderModalVisible: false})
    }
    render(){

        const ingredients = Object.values(this.state.ingredients).reduce((prevSum,currVal) => prevSum+currVal ,0)
        const purchasable = ingredients > 0 ;


        return(
            <>
                <Modal visible={this.state.orderModalVisible} cancel={this.orderCancelHandler}>
                    <OrderSummery ingredients={this.state.ingredients} totalPrice={this.state.totalPrice}
                                  prices={BURGER_INGREDIENTS_PRICES}
                                  cancel={this.orderCancelHandler} continue={this.orderContinueHandler}
                    />
                </Modal>
                <BuildControls ingredients={this.state.ingredients}
                               less={this.lessIngredientHandler}
                               more={this.moreIngredientHandler}
                               totalPrice={this.state.totalPrice}
                               purchasable={purchasable}
                               showOrderSummery={this.orderSummeryHandler}
                />
                <Burger ingredients={this.state.ingredients}/>
            </>
        )
    }
}

export default BurgerBuilder