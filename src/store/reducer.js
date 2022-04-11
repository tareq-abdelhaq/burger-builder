import * as actionTypes from "./actions"
import {BURGER_INGREDIENTS_PRICES} from "../constants";

const initialState =
{
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice: 4
}

export const reducer = (state = initialState, action) =>
{
    switch (action.type){
        case actionTypes.ADD_MORE_INGREDIENT:
            return {
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientType]: state.ingredients[action.ingredientType] + 1
                },
                totalPrice: parseFloat((state.totalPrice + BURGER_INGREDIENTS_PRICES[action.ingredientType]).toFixed(2))
            }
        case actionTypes.LESS_INGREDIENT:
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

