import React from "react"
import Layout from "./containers/Layout/Layout";
import {Routes,Route} from "react-router-dom"
import * as actions from "./store/actions/"
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import CheckOut from "./containers/CheckOut/CheckOut";
import Orders from "./containers/Orders/Orders";
import OrderForum from "./containers/CheckOut/OrderForum/OrderForum";
import Auth from "./containers/Auth/Auth";
import { connect } from "react-redux";
import Logout from "./containers/Auth/Logout/Logout";
import {Navigate} from "react-router-dom";


class App extends React.Component{

  componentDidMount() {
      const token = window.localStorage.getItem("token")
      const userId = window.localStorage.getItem("userId")
      const expirationDate = window.localStorage.getItem("expirationDate")

      if (new Date() <= new Date(expirationDate))
      {
          this.props.restoreAuthentication(token,userId,expirationDate)
      }
  }
    render() {

    let routes
    if (!this.props.isAuthenticated)
    {
        routes = (
            <Routes>
                <Route path="/" index element={<BurgerBuilder />}/>
                <Route path="/auth" element={<Auth/>}/>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        )
    }else
    {
        routes = (
            <Routes>
                <Route path="/" element={<BurgerBuilder />}/>
                <Route path="/checkout/" element={<CheckOut />}>
                    <Route path="order-forum" element={<OrderForum />} />
                </Route>
                <Route path="/logout" element={<Logout />}/>
                <Route path="/orders" element={<Orders />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        )
    }
    return (
       <Layout>
           {routes}
       </Layout>
    );
  }
}

const mapStateToProps = state => (
    {
        isAuthenticated: state.auth.token !== null
    }
)

const mapDispatchToProps = dispatch => (
    {
        restoreAuthentication: (token,userId,expirationDate) => dispatch(actions.restoreAuthenticationStatus(token,userId,expirationDate))
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(App);
