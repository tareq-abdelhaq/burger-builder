import {Component} from "react";
import Order from "../../components/Order/Order"
import classes from "./Orders.module.css"
import axios from "../../axios";
import Spinner from "../../components/UI/Spinner/Spinner";
import FailureModal from "../../components/UI/FailureModal/FailureModal";
import Modal from "../../components/UI/Modal/Modal";
class Orders extends Component
{

    state = {
        orders: [],
        loading: false,
        hasError: false,
        errorMessage: ""
    }

    componentDidMount() {
        this.setState({loading: true})
        //response =>
        axios.get("orders.json")
            .then(response => {
                const fetchedOrders = []
                for(let key in response.data){
                    fetchedOrders.push({...response.data[key],id:key})
                }
                this.setState({orders: fetchedOrders,loading:false})
            }).catch(err => {
                this.setState({hasError: true,errorMessage: err,loading:false})
        })

    }

    cancelOrdersHistoryHandler = () => {
        this.setState({hasError: false})
    }

    render()
    {
        let content = this.state.orders.map(order => {
            return <Order key={order.id} ingredients={order.ingredients} price={order.price}/>
        })
        if (this.state.hasError){
            content = <Modal visible={this.state.hasError} cancel={this.cancelOrdersHistoryHandler}><FailureModal>Something went wrong </FailureModal></Modal>
        }
        if (this.state.loading)
        {
            content = <Spinner />
        }
        return (
            <div className={classes.Orders}>
                {content}
            </div>
        )
    }
}

export default Orders;