import { CartReducer } from "./Card";
import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
    cart : CartReducer
})

export const store = createStore(rootReducer)