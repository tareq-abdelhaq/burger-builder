import * as actionTypes from "../actions/actionTypes"

const initialState = {
    token: null,
    userId: null,
    expirationData: null
}

export const auth = (state = initialState, action) =>
{
    switch (action.type){
        case actionTypes.AUTHENTICATE_USER:
            return {
                ...state,
                token: action.authData.idToken,
                userId: action.authData.localId,
                expirationData: action.expirationDate
            }
        case actionTypes.LOGIN_USER:
            return {
                ...state,
                token: action.authData.idToken,
                userId: action.authData.localId,
                expirationData: action.expirationDate

            }
        case actionTypes.LOGOUT_USER:
            return {
                ...state,
                token: null,
                userId: null,
                expirationData: null
            }
        case actionTypes.RESTORE_AUTHENTICATION_STATUS:
            return {
                ...state,
                token: action.token,
                userId: action.userId,
                expirationData: action.expirationDate
            }
        default:
            return {...state}
    }
}