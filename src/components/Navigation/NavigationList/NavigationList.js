import classes from "./NavigationList.module.css"
import NavigationItem from "./NavigationItem/NavigationItem";
import {connect} from "react-redux";

const navigationList = (props) => (
    <ul className={classes.NavigationList}>
        <NavigationItem link="/">Burger Builder</NavigationItem>
        {props.isAuthenticated && <NavigationItem link="/orders">Order History</NavigationItem>}
        {!props.isAuthenticated ?  <NavigationItem link="/auth">login / sign up</NavigationItem> :
            <NavigationItem link="/logout">logout</NavigationItem>}
    </ul>
)

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(navigationList);