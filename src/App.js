import React from "react"
import Layout from "./containers/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

class App extends React.Component{
  render() {
    return (
       <Layout>
           <BurgerBuilder />
       </Layout>
    );
  }
}

export default App;
