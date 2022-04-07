import {Component} from "react";
import classes from "./OrderForum.module.css"
import Button from "../../../components/UI/Button/Button";

class OrderForum extends Component
{

    state = {
        username: "",
        email: "",
        phoneNumber: "",
        address: {
            city: "",
            streetName: "",
            buildingNumber: null,
            floorNumber: null,
            apartmentNumber: null
        }
    }
    render() {
        return(
            <div className={classes.OrderForum}>
                <h3> Enter your Contact Data </h3>
                <form>
                    <input type="text" placeholder="your name"/>
                    <input type="email" placeholder="email"/>
                    <input type="text" placeholder="street name"/>
                    <input type="text" placeholder="building number"/>
                    <input type="text" placeholder="Floor number"/>
                    <Button btnType="Success" clicked={(e) => {e.preventDefault();console.log("Order Sent")}}>Make Order</Button>
                </form>
            </div>
        )
    }
}
export default OrderForum;