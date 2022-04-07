import {Component} from "react";
import Modal from "../../UI/Modal/Modal";

class Forum extends Component
{
    render() {
        return(
            <Modal visible>
                <form>
                    <input type="text" placeholder="your name"/>
                    <input type="text" placeholder="phone number"/>
                    <input type="text" placeholder="street name number"/>
                    <input type="text" placeholder="building number number"/>
                    <input type="text" placeholder="Floor number"/>
                    <input type="submit" value="make order"/>
                </form>
            </Modal>
        )
    }
}
export default Forum;