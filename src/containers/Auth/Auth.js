import { Component } from "react"
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import classes from "./Auth.module.css"
import Spinner from "../../components/UI/Spinner/Spinner";
import {authenticateUser, loginUser, logoutUser} from "../../store/actions/";
import {API_KEY} from "../../firebase";
import { axiosAuth } from "../../axios"
import { connect } from "react-redux"
import withRouter from "../../hoc/withRouter";

class Auth extends Component
{
    state = {
        signupForm: {
          email: {
              inputtype: "input",
              type: "email",
              value: "",
              valid: false,
              inValidMessage: "",
              touched: false,
              rules: {
                  require: true,
                  isEmail: true
              }
          },
          password: {
              inputtype: "input",
              type: "password",
              value: "",
              valid: false,
              inValidMessage: "",
              touched: false,
              rules: {
                  required: true,
                  minLength: 8,
                  includeNumber: true,
                  includeCapitalCase: true,
                  matchConfirmPassword: true,
              }
          },
          confirmPassword: {
              inputtype: "input",
              type: "password",
              value: "",
              valid: false,
              inValidMessage: "",
              touched: false,
              rules: {
                  required: true,
                  matchPassword: true
              }
          },
        },
        signupFormValid: false,
        loginForm: {
            email: {
                inputtype: "input",
                type: "email",
                value: "",
                valid: false,
                inValidMessage: "",
                rules: {
                    required: true
                }
            },
            password: {
                inputtype: "input",
                type: "password",
                value: "",
                valid: false,
                inValidMessage: "",
                rules: {
                    required: true
                }
            }
        },
        isSignup: true,
        loginFormValid: false,
        loading: false,
        hasError: false,
        error: {}
    }
    checkValidity = (field,value,rules) => {
        const validity = {field: field, valid: true,inValidMessage: ""}

        if (rules.required)
        {
            if(value.trim() === "")
            {
                validity.valid = false
                validity.inValidMessage = `${field} cannot be empty`
            }

        }
        if (rules.minLength)
        {
            if (validity.valid && value.trim().length < rules.minLength)
            {
                validity.valid = false
                validity.inValidMessage = `${field} must contains at least ${rules.minLength} characters`
            }
        }
        if (rules.isEmail)
        {
            const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            if (validity.valid && !pattern.test(value))
            {
                validity.valid =  false
                validity.inValidMessage = `${field} must be a valid one`
            }
        }
        if(rules.includeNumber)
        {
            const pattern = /\d/
            if (validity.valid && !pattern.test(value))
            {
                validity.valid = false
                validity.inValidMessage = `${field} must contains at least one number`
            }
        }
        if(rules.includeCapitalCase)
        {
            const pattern = /[A-Z]/
            if (validity.valid && !pattern.test(value))
            {
                validity.valid = false
                validity.inValidMessage = `${field} must contains at least one uppercase letter`
            }

        }
        if (rules.matchConfirmPassword)
        {
            if (validity.valid &&
                this.state.signupForm.confirmPassword.value.trim() !== ""
                && value !== this.state.signupForm.confirmPassword.value){
                // changes the validity of confirmPassword field and not the password
                validity.field = "confirmPassword"
                validity.valid = false
                validity.inValidMessage = "passwords don't match"
            }
        }
        if (rules.matchPassword)
        {
            if (validity.valid && value !== this.state.signupForm.password.value){
                validity.valid = false
                validity.inValidMessage = "passwords don't match"
            }
        }
        return validity;
    }
    signupInputChangeHandler = (event) => {
        const signupForm = {...this.state.signupForm}
        const {field, valid, inValidMessage} = this.checkValidity(event.target.name , event.target.value,this.state.signupForm[event.target.name].rules)
        signupForm[event.target.name].value = event.target.value
        /* change the validity of the field coming from the checkSignupInputValidity
        just in case if it's tweaked to be the confirmPassword and not the password
        */

        signupForm[field].valid = valid
        signupForm[field].inValidMessage = inValidMessage
        signupForm[event.target.name].touched = true
        let signupFormValid = true
        for (let field in signupForm)
        {
            if (!signupForm[field].valid){
                signupFormValid = false
            }
        }

        this.setState({signupForm: signupForm, signupFormValid: signupFormValid})
    }

    loginInputChangedHandler = (event) => {
        const loginForm = {...this.state.loginForm}
        const {valid,inValidMessage} = this.checkValidity(event.target.name,event.target.value,loginForm[event.target.name].rules)
        loginForm[event.target.name].value = event.target.value
        loginForm[event.target.name].valid = valid
        loginForm[event.target.name].inValidMessage = inValidMessage
        let formValid = true
        for(let field in loginForm){
            if (!loginForm[field].valid)
            {
                formValid = false
            }
        }

        this.setState({loginForm: loginForm, loginFormValid: formValid})
    }

    signupSubmitHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true, hasError: false})
        const authData = {
            email: this.state.signupForm.email.value,
            password: this.state.signupForm.password.value,
            returnSecureToken: true
        }
        axiosAuth.post(`/accounts:signUp?key=${API_KEY}`,authData)
            .then((response) => {
                this.props.authenticate(response.data)
                setTimeout(() => {
                    this.props.logout()
                },response.data.expiresIn * 1000)
                this.setState({loading: false, hasError: false})
                /*
                    navigate the user to the home page if all ingredients are zeros, which means he
                    hasn't start building his burger yet, otherwise redirect him to the checkout
                 */
                Object.value(this.props.ingredients).reduce((prev,next) => {
                    return prev+next
                },0) ? this.props.navigate("/checkout", {replace: true}) : this.props.navigate("/")
            })
            .catch(error => {
                this.setState({loading: false, hasError: true, error: error.response.data.error})
            })
    }

    loginSubmitHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true, hasError: false})
        const authData = {
            email: this.state.loginForm.email.value,
            password: this.state.loginForm.password.value,
            returnSecureToken: true
        }
        axiosAuth.post(`/accounts:signInWithPassword?key=${API_KEY}`,authData)
            .then(response => {
                this.props.loginUser(response.data)
                setTimeout(() => {
                    this.props.logout()
                },response.data.expiresIn * 1000)
                this.setState({loading: false, hasError: false})
                /*
                  navigate the user to the home page if all ingredients are zeros, which means he
                  hasn't start building his burger yet, otherwise redirect him to the checkout
               */
                Object.values(this.props.ingredients).reduce((prev,next) => {
                    return prev+next
                },0) ? this.props.navigate("/checkout", {replace: true}) : this.props.navigate("/")

            })
            .catch(error => {
                this.setState({loading: false, hasError: true, error: error.response.data.error})
            })
    }
    switchHandler = () => {
        this.setState(prevState => {
            return {isSignup: !prevState.isSignup, error: {},hasError: false}
        })
    }
    render() {
        const signupForm = this.state.signupForm
        const signupFormElements = []
        for(let field in signupForm){
            signupFormElements.push( <Input key={field} name={field} inputtype={signupForm[field].inputtype}
                                            label={field} value={signupForm[field].value}
                                            type={signupForm[field].type}
                                            invalidMessage={signupForm[field].inValidMessage}
                                            touched={signupForm[field].touched}
                                            valid={signupForm[field].valid}
                                            blur={this.signupInputChangeHandler}
                                            change={this.signupInputChangeHandler} />)
        }
        const loginForm = this.state.loginForm
        const loginFormElements = []
        for(let field in loginForm){
            loginFormElements.push( <Input key={field} name={field} inputtype={loginForm[field].inputtype}
                                           label={field} value={loginForm[field].value} type={loginForm[field].type}
                                           valid={loginForm[field].valid} invalidMessage={loginForm[field].inValidMessage}
                                           change={this.loginInputChangedHandler} />)
        }

        let content =  (<div className={classes.Auth}>
                            {this.state.isSignup ?
                            <article className={classes.Signup}>
                                <h3 className={classes.Header}>sign up</h3>
                                <form>
                                    {signupFormElements}
                                    <Button btnType="Success" clicked={this.signupSubmitHandler}
                                            disabled={!this.state.signupFormValid}>
                                        sign up
                                    </Button>
                                    {this.state.hasError && <p className={classes.Error}>{this.state.error.message}</p>}
                                </form>
                            </article> :
                            <article className={classes.Login}>
                                <h3 className={classes.Header}>login</h3>
                                <form>
                                    {loginFormElements}
                                    <Button btnType="Success" clicked={this.loginSubmitHandler}
                                            disabled={!this.state.loginFormValid}>
                                        login
                                    </Button>
                                    {this.state.hasError && <p className={classes.Error}>{this.state.error.message}</p>}
                                </form>
                            </article>}
                        <Button btnType="Danger" clicked={this.switchHandler}>switch to {this.state.isSignup ? "login" : "signup"}</Button>
                        </div>)
        if (this.state.loading)
        {
            content = <Spinner />
        }
        return content
    }
}

const mapStateToProps = state => (
    {
        ingredients: state.ings.ingredients
    }
)

const mapDispatchToProps = dispatch => (
    {
        authenticate: (authData) => dispatch(authenticateUser(authData)),
        loginUser: (authData) => dispatch(loginUser(authData)),
        logout: () => dispatch(logoutUser())
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Auth))