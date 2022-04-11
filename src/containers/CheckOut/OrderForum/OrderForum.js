import {Component} from "react";
import {connect} from "react-redux";
import classes from "./OrderForum.module.css"
import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import axios from "../../../axios"
import SuccessModal from "../../../components/UI/SuccessModal/SuccessModal";
import Modal from "../../../components/UI/Modal/Modal";
import withRouter from "../../../hoc/withRouter";
import Input from "../../../components/UI/Input/Input";
import order from "../../../components/Order/Order";

class OrderForum extends Component
{

    state = {
        orderForm: {
            username: {
                inputtype: "input",
                value: "",
                valid: false,
                touched: false,
                invalidMessage: "",
                validationRules: {
                    required: true,
                    minLength: 6
                }
            },
            email: {
                inputtype: "input",
                value: "",
                valid: false,
                touched: false,
                invalidMessage: "",
                validationRules: {
                    required: true
                }
            },
            phoneNumber: {
                inputtype: "input",
                value: "",
                valid: false,
                touched: false,
                invalidMessage: "",
                validationRules: {
                    required: true,
                    numeric: true
                },
            },
            city: {
                inputtype: "input",
                value: "",
                valid: false,
                touched: false,
                invalidMessage: "",
                validationRules: {
                    required: true,
                },
            },
            streetName: {
                inputtype: "input",
                value: "",
                valid: false,
                touched: false,
                invalidMessage: "",
                validationRules: {
                    required: true,
                },
            },
            buildingNumber: {
                inputtype: "input",
                value: "",
                valid: false,
                touched: false,
                invalidMessage: "",
                validationRules: {
                    required: true,
                    numeric: true
                },
            },
            floorNumber: {
                inputtype: "input",
                value: "",
                valid: false,
                touched: false,
                invalidMessage: "",
                validationRules: {
                    required: true,
                    numeric: true
                },
            },
            apartmentNumber: {
                inputtype: "input",
                value: "",
                valid: false,
                touched: false,
                invalidMessage: "",
                validationRules: {
                    required: true,
                    numeric: true
                },
            },
            deliveryMethod: {
                inputtype: "select",
                options: [{value: "fastest",displayedValue: "Fastest"},{value: "cheapest",displayedValue: "Cheapest"}],
                value: "Fastest",
                valid: true,
                validationRules: {}
            },
        },
        valid: false,
        loading: false,
        success: false,
        modalVisible: false,
        hasError: false,
        errorMessage: ""

    }

    checkFormValidity = (value,rules,fieldName) => {
        const validity = {valid: true,invalidMessage: ""}
        if (rules.required){
            if (value.trim() === ""){
                validity.valid = false;
                validity.invalidMessage = `${fieldName} mustn't be empty`
            }
        }
        if (rules.minLength){
            if (validity.valid && value.length < rules.minLength){
                validity.valid = false;
                validity.invalidMessage = `${fieldName} must be at least ${rules.minLength} characters`
            }
        }
        if (rules.numeric)
        {
            if (validity.valid && isNaN(value)){
                validity.valid = false;
                validity.invalidMessage = `${fieldName} must be a valid number`
            }
        }

        return validity
    }

    inputChangeHandler = (e) => {
        const updatedOrderForm = {...this.state.orderForm}
        updatedOrderForm[e.target.name].value = e.target.value;
        const {valid,invalidMessage} = this.checkFormValidity(e.target.value,updatedOrderForm[e.target.name].validationRules,e.target.name)
        updatedOrderForm[e.target.name].valid = valid
        updatedOrderForm[e.target.name].invalidMessage = invalidMessage
        updatedOrderForm[e.target.name].touched = true;
        let formValid = true;
        for (let field in updatedOrderForm){
            if (!updatedOrderForm[field].valid){
                formValid = false
            }
        }
        this.setState({orderForm: updatedOrderForm,valid: formValid})
    }

   submitOrderHandler = (e) =>
    {
        e.preventDefault();
        this.setState({loading: true})
         const order = {
             ingredients: this.props.ingredients,
             price: this.props.totalPrice,
             customer: {
                     name: this.state.orderForm.username.value,
                     email: this.state.orderForm.email.value,
                     phoneNumber: this.state.orderForm.phoneNumber.value
                 },
                 address: {
                     streetName: this.state.orderForm.streetName.value,
                     buildingNo: this.state.orderForm.buildingNumber.value,
                     floorNumber: this.state.orderForm.floorNumber.value,
                     apartNumber: this.state.orderForm.apartmentNumber.value
                 }
             }
        axios.post("/orders.json",order)
        .then(()=> this.setState({loading: false,success: true,modalVisible:true}))
   }

   cancelModalHandler = () => {
       this.props.navigate("/",{replace: true})
   }

    render() {
        const orderForm = this.state.orderForm
        const inputElements = [];

        for(let key in orderForm){
            inputElements.push(<Input key={key} name={key} inputtype={orderForm[key].inputtype} label={key}
                                      options={orderForm[key].options} value={orderForm[key].value}
                                      change={this.inputChangeHandler} valid={orderForm[key].valid}
                                      touched={orderForm[key].touched} invalidMessage={orderForm[key].invalidMessage}/>)
        }


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
                                    {inputElements}
                                    <Button btnType="Success" clicked={this.submitOrderHandler} disabled={!this.state.valid}>
                                        Make Order
                                    </Button>
                                </form>
                            </>
                        }
                    </div>
                )
        }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(OrderForum));