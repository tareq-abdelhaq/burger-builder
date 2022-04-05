import classes from "./SuccessModal.module.css"

const successModal = (props) => (
    <div className={classes.SuccessModal}>
        {props.children}
    </div>
)

export default successModal;