const redux = require("redux")
const axios  = require("./src/axios");
const initialStore = {
    ingredients: {}
}

const reduce = (state = initialStore,action) =>{
    if (action.type === "GET_INGREDIENTS"){
        return {...state.ingredients}
    }
    if (action.type === "INITIALISE_INGREDIENTS"){
        return {...action.ingredients}
    }
    return {...state}
}

const getIngredients = store => {
    return next => {
        return action => {
            if (action.type === "GET_INGREDIENTS"){
                axios.get("/ingredients.json")
                    .then(response =>{
                        store.dispatch({type: "INITIALISE_INGREDIENTS",ingredients: response.data})
                        return next(action)
                    })
            }
        }
    }
}

const store = redux.createStore(reduce,redux.applyMiddleware(getIngredients))

store.subscribe(()=> {
    console.log(store.getState())
})

store.dispatch({type: "INITIALISE_INGREDIENTS"})

