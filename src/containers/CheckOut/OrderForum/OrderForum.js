import {Component} from "react";
import classes from "./OrderForum.module.css"
import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import axios from "../../../axios"
import SuccessModal from "../../../components/UI/SuccessModal/SuccessModal";
import Modal from "../../../components/UI/Modal/Modal";
import withRouter from "../../../hoc/withRouter";
import Input from "../../../components/UI/Input/Input";

class OrderForum extends Component
{

    state = {
        orderForm: {
            username: "",
            email: "",
            phoneNumber: "",
            city: "",
            streetName: "",
            buildingNumber: "",
            floorNumber: "",
            apartmentNumber: "",
            deliveryMethod: "Fastest"
        },
        loading: false,
        success: false,
        modalVisible: false

    }

    inputChangeHandler = (e) => {
        this.setState({orderForm: {...this.state.orderForm,[e.target.name]: e.target.value}})

        this.setState(prevState => {
            return {
                ...prevState,
                orderForm: {
                    ...(prevState.orderForm),
                    [e.target.name]: e.target.value
                }
            }
        })
    }

   submitOrderHandler = (e) =>
    {
        e.preventDefault();
        this.setState({loading: true})
         const order = {
             ingredients: this.props.ingredients,
             price: this.props.totalPrice,
             customer: {
                     name: this.state.orderForm.username,
                     email: this.state.orderForm.email,
                     phoneNumber: this.state.orderForm.phoneNumber
                 },
                 address: {
                     streetName: this.state.orderForm.streetName,
                     buildingNo: this.state.orderForm.buildingNumber,
                     floorNumber: this.state.orderForm.floorNumber,
                     apartNumber: this.state.orderForm.apartmentNumber
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
                                    <Input label="username" inputtype="input" type="text" name="username" id="username"
                                           value={this.state.orderForm.username} onChange={this.inputChangeHandler}/>
                                    <Input label="email" inputtype="input" type="email" name="email" id="email"
                                           value={this.state.orderForm.email} onChange={this.inputChangeHandler}/>
                                    <Input label="phone number" inputtype="input" type="text" name="phoneNumber" id="phoneNumber"
                                           value={this.state.orderForm.phoneNumber} onChange={this.inputChangeHandler}/>
                                    <Input label="city" inputtype="input" type="text" name="city" id="city"
                                           value={this.state.orderForm.city} onChange={this.inputChangeHandler}/>
                                    <Input label="street name" inputtype="input" type="text" name="streetName" id="street"
                                           value={this.state.orderForm.streetName} onChange={this.inputChangeHandler}/>
                                    <Input label="buildingNo" inputtype="input" type="text" name="buildingNumber" id="buildingNumber"
                                           value={this.state.orderForm.buildingNumber} onChange={this.inputChangeHandler}/>
                                    <Input label="floorNo" inputtype="input" type="text" name="floorNumber" id="floorNumber"
                                           value={this.state.orderForm.floorNumber} onChange={this.inputChangeHandler}/>
                                    <Input label="apartmentNo" inputtype="input" type="text" name="apartmentNumber" id="apartmentNumber"
                                           value={this.state.orderForm.apartmentNumber} onChange={this.inputChangeHandler}/>
                                    <Input inputtype="select" label="select a delivery method" options={["Fastest","Cheapest"]}
                                           value={this.state.orderForm.deliveryMethod} name="deliveryMethod" id="deliveryMethod"
                                           onChange={this.inputChangeHandler}
                                    />
                                    <Button btnType="Success" clicked={this.submitOrderHandler}>Make Order</Button>
                                </form>
                            </>
                        }
                    </div>
                )
        }
}
export default withRouter(OrderForum);