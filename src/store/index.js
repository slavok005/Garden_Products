import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { allProductsReducer } from "./reducers/productsReducers";
import { allCategoriesReducer } from "./reducers/categoriesRedusers";

const rootReducer = combineReducers({
  products: allProductsReducer,
  categories: allCategoriesReducer
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
