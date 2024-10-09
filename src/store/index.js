import { createStore, combineReducers, applyMiddleware } from "redux";
import { allProductsReducer } from "./reducers/productsReducers";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  products: allProductsReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
