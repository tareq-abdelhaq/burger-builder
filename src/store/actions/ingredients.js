import * as actionTypes from "./actionTypes"

import axios from "../../axios";

const initializeIngredients = (ingredients) => {
    return {
        type: actionTypes.INITIALIZE_INGREDIENTS,
        ingredients: ingredients
    }
}

const handleInitializeIngredients = (message) => {
    return {
        type: actionTypes.HANDLE_INITIALIZE_INGREDIENTS,
        errorMessage: message
    }
}

export const fetchIngredients = () => {
    return dispatch => {
        axios.get("ingredients.json")
            .then(response => {
                dispatch(initializeIngredients(response.data))
            })
            .catch(error => {
                dispatch(handleInitializeIngredients(error))
            })
    }

}
export const addIngredient = (ingredientName) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientType: ingredientName
    }
}

export const removeIngredient = (ingredientName) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientType: ingredientName
    }
}

