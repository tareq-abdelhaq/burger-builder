import React, {Component} from "react";
import CheckOutSummery from "../../components/Order/CheckOutSummery/CheckOutSummery";
import withRouter from "../../hoc/withRouter";
import {Routes,Route} from "react-router-dom";
import OrderForum from "./OrderForum/OrderForum";

class CheckOut extends Component
{
    state = {
        ingredients: {},
        totalPrice: null
    }
    componentDidMount() {
       const searchParams = new URLSearchParams(this.props.location.search);
       const ingredients = {}
       let totalPrice = null;
       searchParams.forEach((value,key)=>{
           if (key === "totalPrice"){
               totalPrice = value
           }else{
               ingredients[key] = +value
           }
       })
       this.setState({ingredients: ingredients,totalPrice:totalPrice})
    }

    render() {
        return (
            <>
            <CheckOutSummery ingredients={this.state.ingredients}/>
                <Routes>
                    <Route path="/order-forum" element={<OrderForum ingredients={this.state.ingredients} totalPrice={this.state.totalPrice}/>} />
                </Routes>
            </>
        )
    }
}

export default withRouter(CheckOut)