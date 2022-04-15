import React,{lazy,Suspense} from "react"
import Layout from "./containers/Layout/Layout";
import {Routes,Route} from "react-router-dom"
import * as actions from "./store/actions/"
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import OrderForum from "./containers/CheckOut/OrderForum/OrderForum";
import { connect } from "react-redux";
import Logout from "./containers/Auth/Logout/Logout";
import {Navigate} from "react-router-dom";
import Spinner from "./components/UI/Spinner/Spinner";

const CheckOut = lazy(() => import("./containers/CheckOut/CheckOut"))
const Auth = lazy(() => import( "./containers/Auth/Auth"))
const Orders = lazy(() => import("./containers/Orders/Orders"))

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
                <Route path="/auth" element={<Suspense fallback={<Spinner />}><Auth/></Suspense>}/>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        )
    }else
    {
        routes = (
            <Routes>
                <Route path="/" element={<BurgerBuilder />}/>
                <Route path="/checkout/" element={<Suspense fallback={<Spinner />}> <CheckOut /> </Suspense>}>
                    <Route path="order-forum" element={<OrderForum />} />
                </Route>
                <Route path="/logout" element={<Logout />}/>
                <Route path="/orders" element={<Suspense fallback={<Spinner />}> <Orders /> </Suspense>} />
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
