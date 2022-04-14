import classes from "./NavigationList.module.css"
import NavigationItem from "./NavigationItem/NavigationItem";
import {connect} from "react-redux";

const navigationList = (props) => (
    <ul className={classes.NavigationList}>
        <NavigationItem link="/">Burger Builder</NavigationItem>
        <NavigationItem link="/orders">Order History</NavigationItem>
        {!props.authenticated && <NavigationItem link="/auth">login / sign up</NavigationItem>}
    </ul>
)

const mapStateToProps = state => {
    return {
        authenticated: state.auth.authenticated
    }
}

export default connect(mapStateToProps)(navigationList);