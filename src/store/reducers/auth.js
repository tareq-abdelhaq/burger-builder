import * as actionTypes from "../actions/actionTypes"

const initialState = {
    token: null,
    userId: null,
    authenticated: false
}

export const auth = (state = initialState, action) =>
{
    switch (action.type){
        case actionTypes.AUTHENTICATE_USER:
            return {
                ...state,
                token: action.authData.idToken,
                userId: action.authData.localId,
                authenticated: true
            }
        case actionTypes.LOGIN_USER:
            return {
                ...state,
                token: action.authData.idToken,
                userId: action.authData.localId,
                authenticated: true
            }
        default:
            return {...state}
    }
}