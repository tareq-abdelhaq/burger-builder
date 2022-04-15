import * as actionTypes from "./actionTypes"


export const authenticateUser = (authData,expiresIn) => {
    return {
        type: actionTypes.AUTHENTICATE_USER,
        authData: authData,
        expirationDate: expiresIn
    }
}

export const loginUser = (authData,expiresIn) => {
    return {
        type: actionTypes.LOGIN_USER,
        authData: authData,
        expirationDate: expiresIn
    }
}

export const logoutUser = () => {
    return {
        type: actionTypes.LOGOUT_USER,
    }
}

export const restoreAuthenticationStatus = (token,userId,expiresIn) => {
    return {
        type: actionTypes.RESTORE_AUTHENTICATION_STATUS,
        token: token,
        userId: userId,
        expirationDate: expiresIn
    }
}