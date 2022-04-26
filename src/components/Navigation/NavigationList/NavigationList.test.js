import { configure,shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { navigationList  as NavigationList } from "./NavigationList";
import NavigationItem from "./NavigationItem/NavigationItem";

configure({adapter: new Adapter()})

describe("<NavigationList />",() => {
    let wrapper
    beforeEach(() => {
        wrapper  = shallow(<NavigationList />);
    })
   it("should render two <NavigationItem /> in case we are not authenticated",() => {

       expect(wrapper.find(NavigationItem)).toHaveLength(2);
   });
    it('should render three <NavigationItem /> in case we are authenticated', function () {
        wrapper.setProps({isAuthenticated: true})
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });
    it("should render a <NavigationItem /> with Link prop to the logout Route when we are authenticated",() => {
        wrapper.setProps({isAuthenticated: true})
        expect(wrapper.contains(<NavigationItem link="/logout">logout</NavigationItem>)).toBeTruthy();
    })
});