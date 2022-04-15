import {Component} from "react";
import { connect } from "react-redux"
import {logoutUser} from "../../../store/actions"
import {Navigate} from "react-router-dom";

class Logout extends Component
{
    componentDidMount()
    {
        this.props.logout()
        window.localStorage.removeItem("token")
        window.localStorage.removeItem("userId")
        window.localStorage.removeItem("expirationDate")
    }
    render() {
        return(
            <Navigate to="/" />
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logoutUser())
    }
}

export default connect(null,mapDispatchToProps)(Logout)