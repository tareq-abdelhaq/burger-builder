import React from "react"
import Layout from "./containers/Layout/Layout";
import {Routes,Route} from "react-router-dom"
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import CheckOut from "./containers/CheckOut/CheckOut";
import Orders from "./containers/Orders/Orders";
import OrderForum from "./containers/CheckOut/OrderForum/OrderForum";
import Auth from "./containers/Auth/Auth";
import { connect } from "react-redux";


class App extends React.Component{
  render() {
    return (
       <Layout>
           <Routes>
               <Route path="/" element={<BurgerBuilder />}/>
               {!this.props.authenticated && <Route path="/auth" element={<Auth/>}/>}
               <Route path="/checkout/" element={<CheckOut />}>
                   <Route path="order-forum" element={<OrderForum />} />
               </Route>
               <Route path="/orders" element={<Orders />} />
           </Routes>
       </Layout>
    );
  }
}

const mapStateToProps = state => {
    return {
        authenticated: state.auth.authenticated
    }
}

export default connect(mapStateToProps)(App);
