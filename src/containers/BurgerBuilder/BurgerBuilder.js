import React,{Component} from "react"
import {connect} from "react-redux";
import { fetchIngredients } from "../../store/actions/index"
import classes from "./BurgerBuilder.module.css"
import Burger from "../../components/Burger/Burger"
import BuildControls from "../../components/Burger/BuildControls/BuildControls"
import Modal from "../../components/UI/Modal/Modal"
import OrderSummery from "../../components/Burger/OrderSummery/OrderSummery"
import Spinner from "../../components/UI/Spinner/Spinner"
import FailureModal from "../../components/UI/FailureModal/FailureModal";
import SuccessModal from "../../components/UI/SuccessModal/SuccessModal";
import withRouter from "../../hoc/withRouter"




class BurgerBuilder extends Component
{
    state = {
        orderModalVisible: false,
        loading: false,
        hasError: false,
        success: false
    }

    componentDidMount() {
        this.props.fetchIngredients()
    }

    orderSummeryHandler = () => {
        this.setState({orderModalVisible: true,success: false,hasError:false})
    }
    orderCancelHandler = () => {
        this.setState({orderModalVisible: false})
    }
    orderContinueHandler = () => {
        this.props.navigate("/checkout")
    }
    render(){
        const ingredients = Object.values(this.props.ingredients).reduce((prevSum,currVal) => prevSum+currVal ,0)
        const purchasable = ingredients > 0 ;

        let modal = <OrderSummery ingredients={this.props.ingredients}
                                    totalPrice={this.props.totalPrice}
                                    cancel={this.orderCancelHandler}
                                    continue={this.orderContinueHandler}
                      />
        if (this.state.loading){
            modal = <Spinner />
        }
        if (this.props.hasError){
            modal = <FailureModal>{this.props.errorMessage}</FailureModal>
        }
        if (this.state.success){
            modal = <SuccessModal> we received you order successfully</SuccessModal>
        }
        return(
            <div className={classes.BurgerBuilder}>
                <Modal visible={this.state.orderModalVisible} cancel={this.orderCancelHandler} >
                    {modal}
                </Modal>
                {
                    Object.keys(this.props.ingredients).length !== 0 || this.props.hasError ?
                    <BuildControls ingredients={this.props.ingredients}
                                totalPrice={this.props.totalPrice}
                                purchasable={purchasable}
                                showOrderSummery={this.orderSummeryHandler}
                    />
                    :
                    <Spinner />
                }
                <Burger ingredients={this.props.ingredients}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice,
        hasError: state.hasError,
        errorMessage: state.errorMessage
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchIngredients: () => dispatch(fetchIngredients())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(BurgerBuilder));