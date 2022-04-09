import PropTypes from "prop-types"
import classes from "./Input.module.css"

const input = (props) => {
    let inputElement
    let classNames = [classes.InputElement]
    if (props.touched){
        classNames.push(props.valid ? "" : classes.InValid)
    }
    switch(props.inputtype){
        case "input":
            inputElement = <input
                            className={classNames.join(" ")}
                            name={props.name}
                            id={props.label}
                            value={props.value}
                            onChange={props.change}
                          />
            break
        case "select":
            inputElement =
                <select className={classes.InputElement} id={props.label} name={props.name} value={props.value} onChange={props.change}>
                    {props.options.map(option => <option key={option.value} value={option.value}>{option.displayedValue}</option>)}
                </select>
            break
        default:
            inputElement = <input className={classes.InputElement} id={props.label} name={props.name} value={props.value} onChange={props.change}/>

    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label} htmlFor={props.label}>{props.label}</label>
            {inputElement}
            {props.valid ? null :  <p className={classes.InvalidMessage}>{props.invalidMessage}</p>}
        </div>
    )
}

input.propTypes = {
    inputtype: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
}


export default input;