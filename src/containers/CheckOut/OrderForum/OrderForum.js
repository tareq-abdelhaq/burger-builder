import {Component} from "react";
import classes from "./OrderForum.module.css"
import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import axios from "../../../axios"
import SuccessModal from "../../../components/UI/SuccessModal/SuccessModal";
import Modal from "../../../components/UI/Modal/Modal";
import withRouter from "../../../hoc/withRouter";

class OrderForum extends Component
{

    state = {
        username: "",
        email: "",
        phoneNumber: "",
        city: "",
        streetName: "",
        buildingNumber: "",
        floorNumber: "",
        apartmentNumber: "",
        loading: false,
        success: false,
        modalVisible: false

    }

    inputChangeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    orderHandler = (e) =>
    {
        e.preventDefault();
        this.setState({loading: true})
         const order = {
             ingredients: this.props.ingredients,
             price: this.props.totalPrice,
             customer: {
                     name: this.state.username,
                     email: this.state.email,
                     phoneNumber: this.state.phoneNumber
                 },
                 address: {
                     streetName: this.state.streetName,
                     buildingNo: this.state.buildingNumber,
                     floorNumber: this.state.floorNumber,
                     apartNumber: this.state.apartmentNumber
                 }
             }
        axios.post("/orders.json",order)
        .then(()=> this.setState({loading: false,success: true,modalVisible:true}))
   }

   cancelModalHandler = () => {
       this.props.navigate("/",{replace: true})
   }

    render() {
        return(
                this.state.success ?
                    <Modal visible={this.state.modalVisible} cancel={this.cancelModalHandler}>
                        <SuccessModal> we have received your order </SuccessModal>
                    </Modal> :
                    <div className={classes.OrderForum}>
                        {this.state.loading ? <Spinner/> :
                            <>
                                <h3> Enter your Contact Data </h3>
                                <form>
                                    <input type="text" placeholder="your name" name="username" value={this.state.username} onChange={this.inputChangeHandler}/>
                                    <input type="email" placeholder="email" name="email" value={this.state.email} onChange={this.inputChangeHandler}/>
                                    <input type="text" placeholder="phone number" name="phoneNumber" value={this.state.phoneNumber} onChange={this.inputChangeHandler}/>
                                    <input type="text" placeholder="city" name="city" value={this.state.city} onChange={this.inputChangeHandler}/>
                                    <input type="text" placeholder="street" name="streetName" value={this.state.streetName} onChange={this.inputChangeHandler}/>
                                    <input type="text" placeholder="building number" name="buildingNumber" value={this.state.buildingNumber} onChange={this.inputChangeHandler}/>
                                    <input type="text" placeholder="Floor number" name="floorNumber" value={this.state.floorNumber} onChange={this.inputChangeHandler}/>
                                    <input type="text" placeholder="Apartment number" name="apartmentNumber" value={this.state.apartmentNumber} onChange={this.inputChangeHandler}/>
                                    <Button btnType="Success" clicked={this.orderHandler}>Make Order</Button>
                                </form>
                            </>
                        }
                    </div>
                )
        }
}
export default withRouter(OrderForum);