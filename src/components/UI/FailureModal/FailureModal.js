import classes from "./FailureModal.module.css"

const failureModal = (props) => (
    <div className={classes.FailureModal}>
        {props.children}
    </div>
)

export default failureModal;