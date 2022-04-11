import * as actionTypes from "../actions/actionTypes"
import {BURGER_INGREDIENTS_PRICES} from "../../constants";
const initialState =
{
    ingredients: {},
    totalPrice: 4,
    hasError: false,
    errorMessage: "",
}

export const reducer = (state = initialState, action) =>
{
    switch (action.type){
        case actionTypes.INITIALIZE_INGREDIENTS:
            return {
                ...state,
                ingredients: {
                    salad: action.ingredients.salad,
                    bacon: action.ingredients.bacon,
                    cheese: action.ingredients.cheese,
                    meat: action.ingredients.meat
                },
                hasError: false,
                errorMessage: ""
            }
        case actionTypes.HANDLE_INITIALIZE_INGREDIENTS:
            return {
                ...state,
                hasError: true,
                errorMessage: action.errorMessage
            }
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientType]: state.ingredients[action.ingredientType] + 1
                },
                totalPrice: parseFloat((state.totalPrice + BURGER_INGREDIENTS_PRICES[action.ingredientType]).toFixed(2))
            }
        case actionTypes.REMOVE_INGREDIENT:
            if (state[action.ingredientType] !== 0 ){
                return {
                    ...state,
                    ingredients: {
                        ...state.ingredients,
                        [action.ingredientType]: state.ingredients[action.ingredientType] - 1
                    },
                    totalPrice: parseFloat((state.totalPrice - BURGER_INGREDIENTS_PRICES[action.ingredientType]).toFixed(2))
                }
            }
            return state
        default:
            return state;
    }
}

