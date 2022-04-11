import React, {Component} from "react";
import {connect} from "react-redux"
import {Outlet}  from "react-router-dom"
import CheckOutSummery from "../../components/Order/CheckOutSummery/CheckOutSummery";
import withRouter from "../../hoc/withRouter";

class CheckOut extends Component
{

    render() {
        return (
            <>
                <CheckOutSummery ingredients={this.props.ingredients}/>
                <Outlet />
            </>
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

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(CheckOut))