import {configure,shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17"
import {BurgerBuilder} from "./BurgerBuilder";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

configure({adapter: new Adapter()});

describe("<BurgerBuilder />",() => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<BurgerBuilder ingredients={{salad: 0}}/>);
    })
    it('should render <BuildControls /> if there is ingredients passed', () => {
        expect(wrapper.find(BuildControls)).toHaveLength(1);
    });
});