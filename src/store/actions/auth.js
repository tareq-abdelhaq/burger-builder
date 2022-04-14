import * as actionTypes from "./actionTypes"


export const authenticateUser = (authData) => {
    return {
        type: actionTypes.AUTHENTICATE_USER,
        authData: authData
    }
}

export const loginUser = (authData) => {
    return {
        type: actionTypes.LOGIN_USER,
        authData: authData
    }
}

export const logoutUser = () => {
    return {
        type: actionTypes.LOGOUT_USER,
    }
}