import classes from "./BuildControl.module.css"
import * as actionCreators from "../../../../store/actions/index";

import {connect} from "react-redux";

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.ingredient}</div>
        <button className={classes.Less} disabled={props.amount === 0} onClick={() => props.lessIngredient(props.ingredient)}>Less</button>
        <button className={classes.More} onClick={() => props.addMoreIngredient(props.ingredient)}>More</button>
    </div>
)

const mapDispatchToProps = dispatch => {
    return {
        addMoreIngredient: (type) => dispatch(actionCreators.addIngredient(type)),
        lessIngredient: (type) => dispatch(actionCreators.removeIngredient(type))
    }
}

export default connect(null,mapDispatchToProps)(buildControl);