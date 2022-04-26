import {ingredients as ingredientsReducer} from "./ingredients";
import * as ActionTypes from "../actions/actionTypes";
import {BURGER_INGREDIENTS_PRICES} from "../../constants";

describe("ingredients reducer",() => {
    it('should increase the amount of an ingredient by one and change the total price when we add an ingredient', () => {
        expect(ingredientsReducer({
            ingredients: {salad:0,bacon:1,cheese:0,meat:0},
            totalPrice: 4,
        }, {type: ActionTypes.ADD_INGREDIENT, ingredientType: "bacon"})).toEqual({
            ingredients: {salad:0,bacon:2,cheese:0,meat:0},
            totalPrice: 4 + BURGER_INGREDIENTS_PRICES.bacon ,
        })
    })
})