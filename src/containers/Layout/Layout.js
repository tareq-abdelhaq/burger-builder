import {Component} from "react"
import classes from "./Layout.module.css"
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component
{
    state = {
        visibleDrawer: false
    }

    menuClickedHandler = () => {
        this.setState({visibleDrawer: true})
    }

    backdropHandler = () => {
        this.setState({visibleDrawer: false})
    }

    render(){
        return (
            <>
                <Toolbar drawerVisible={this.menuClickedHandler}/>
                <SideDrawer drawerHidden={this.backdropHandler} visible={this.state.visibleDrawer}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </>
        )
    }

}

export default Layout;