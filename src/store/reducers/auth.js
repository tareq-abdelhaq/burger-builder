import * as actionTypes from "../actions/actionTypes"

const initialState = {
    email: "",
    password: "",
    authenticated: false
}

export const auth = (state = initialState, action) =>
{
    switch (action.type){
        case actionTypes.AUTHENTICATE_USER:
            return {
                ...state,
                email: action.authData.email,
                password: action.authData.password,
                authenticated: true
            }
        case actionTypes.LOGIN_USER:
            return {
                ...state,
                email: action.authData.email,
                password: action.authData.password,
                authenticated: true
            }
        default:
            return {...state}
    }
}