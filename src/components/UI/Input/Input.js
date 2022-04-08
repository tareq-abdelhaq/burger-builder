import PropTypes from "prop-types"
import classes from "./Input.module.css"

const input = (props) => {
    let inputElement
    switch(props.inputtype){
        case "input":
            inputElement = <input className={classes.InputElement} {...props}/>
            break
        case "textarea":
            inputElement = <textarea className={classes.InputElement} {...props}/>
            break
        case "select":
            inputElement =
                <select className={classes.InputElement} {...props}>
                    {props.options.map(option => <option key={option} value={option}>{option}</option>)}
                </select>
            break
        default:
            inputElement = <input className={classes.InputElement} {...props}/>

    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label} id={props.id}>{props.label}</label>
            {inputElement}
        </div>
    )
}

input.propTypes = {
    inputtype: PropTypes.string.isRequired
}


export default input;