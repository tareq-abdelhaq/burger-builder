import {useNavigate, useParams, useLocation} from "react-router-dom";

const withRouter = (Component) => {

    return (props) => {
        const navigate = useNavigate()
        const params = useParams()
        const location = useLocation();
        return(
                <Component {...props} navigate={navigate} params={params} location={location}/>
            )
    }
}

export default withRouter;