import {Component} from "react";
import CheckOutSummery from "../../components/Order/CheckOutSummery/CheckOutSummery";
import withRouter from "../../hoc/withRouter";
class CheckOut extends Component
{
    state = {
        ingredients: {}
    }
    componentDidMount() {
       const searchParams = new URLSearchParams(this.props.location.search);
       const ingredients = {}
       searchParams.forEach((value,key)=>{
           ingredients[key] = +value
       })
       this.setState({ingredients: ingredients})
    }

    render() {
        return (
            <CheckOutSummery ingredients={this.state.ingredients}/>
        )
    }
}

export default withRouter(CheckOut)