import * as actionTypes from "../actions/actionTypes"

const initialState = {
    token: null,
    userId: null
}

export const auth = (state = initialState, action) =>
{
    switch (action.type){
        case actionTypes.AUTHENTICATE_USER:
            return {
                ...state,
                token: action.authData.idToken,
                userId: action.authData.localId,
            }
        case actionTypes.LOGIN_USER:
            return {
                ...state,
                token: action.authData.idToken,
                userId: action.authData.localId,
            }
        case actionTypes.LOGOUT_USER:
            return {
                ...state,
                token: null,
                userId: null,
            }
        default:
            return {...state}
    }
}