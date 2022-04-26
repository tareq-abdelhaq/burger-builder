import classes from "./NavigationList.module.css"
import NavigationItem from "./NavigationItem/NavigationItem";
import {connect} from "react-redux";

export const navigationList = (props) => (
    <ul className={classes.NavigationList}>
        <NavigationItem link="/" hide={props.hide}>Burger Builder</NavigationItem>
        {props.isAuthenticated && <NavigationItem link="/orders" hide={props.hide}>Order History</NavigationItem>}
        {!props.isAuthenticated ?  <NavigationItem link="/auth" hide={props.hide}>login / sign up</NavigationItem> :
            <NavigationItem link="/logout" hide={props.hide}>logout</NavigationItem>}
    </ul>
)

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(navigationList);