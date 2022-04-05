import classes from "./Modal.module.css"
import BackDrop from "../Backdrop/Backdrop";
import {PureComponent} from "react";


class Modal extends PureComponent {

    render() {
        return (
            <>
                <BackDrop visible={this.props.visible} hide={this.props.cancel}/>
                <div className={`${classes.Modal}`}
                     style=
                         {{
                             transform: this.props.visible ? "translateY(0)" : "translateY(-100vh)",
                             opacity: this.props.visible ? "1" : "0",
                             scale: this.props.visible ? "1" : "0"
                         }}
                >
                    {this.props.children}
                </div>
            </>
        )
    }
}

export default Modal;