import classes from "./OrderSummery.module.css"
import Button from "../../UI/Button/Button";
import {Component} from "react";

class OrderSummery extends Component{

    render() {
        const ingredientsList = Object.keys(this.props.ingredients).map(ingredient => {
            return <li key={ingredient}>
                <span>{ingredient} * {this.props.ingredients[ingredient]} = ${this.props.prices[ingredient] * this.props.ingredients[ingredient]}</span>
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
                <p className={classes.TotalPrice}>total price: ${this.props.totalPrice}</p>
                <p>would you want to continue checkout your delicious burger ?</p>
                <Button btnType="Success" clicked={this.props.continue}>continue</Button>
                <Button btnType="Danger" clicked={this.props.cancel}>cancel</Button>
            </>
        )
    }




}

export default OrderSummery;