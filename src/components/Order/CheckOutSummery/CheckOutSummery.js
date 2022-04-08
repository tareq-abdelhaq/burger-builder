import {Component} from "react"
import withRouter from "../../../hoc/withRouter";
import Burger from "../../Burger/Burger";
import classes from "./CheckOutSummery.module.css"
import Button from "../../UI/Button/Button";

class checkOutSummery extends Component{

    cancelOrderHandler = () =>
    {
        this.props.navigate(-1);
    }
    continueOrderHandler = () =>
    {
        this.props.navigate("order-forum",{replace:true})
    }
    render(){
        return (
            <div className={classes.CheckOutSummery}>
                <h1>we hope it tastes well !</h1>
                <article className={classes.Burger}>
                    <Burger ingredients={this.props.ingredients} classes={["CheckOutSummeryBurger"]}/>
                </article>
                <Button btnType="Danger" clicked={this.cancelOrderHandler}>cancel</Button>
                <Button btnType="Success" clicked={this.continueOrderHandler}>continue</Button>
            </div>
        )

    }
}

export default withRouter(checkOutSummery);