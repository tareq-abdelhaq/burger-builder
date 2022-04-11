import classes from "./BuildControl.module.css"
import * as actionTypes from "../../../../store/actions";
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
        addMoreIngredient: (type) => dispatch({type: actionTypes.ADD_MORE_INGREDIENT,ingredientType: type}),
        lessIngredient: (type) => dispatch({type: actionTypes.LESS_INGREDIENT,ingredientType: type})
    }
}

export default connect(null,mapDispatchToProps)(buildControl);