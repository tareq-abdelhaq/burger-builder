import * as actionTypes from "./actionTypes"


export const initializeIngredients = (ingredients) => {
    return {
        type: actionTypes.INITIALIZE_INGREDIENTS,
        ingredients: ingredients
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

