import React from "react"
import Layout from "./containers/Layout/Layout";
import {Routes,Route} from "react-router-dom"
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import CheckOut from "./containers/CheckOut/CheckOut";
import Forum from "./components/Order/Forum/Forum";


class App extends React.Component{
  render() {
    return (
       <Layout>
           <Routes>
               <Route path="/" element={<BurgerBuilder />}/>
               <Route path="/checkout" element={<CheckOut />} />
               <Route path="/order-forum" element={<Forum />} />
           </Routes>
       </Layout>
    );
  }
}

export default App;
