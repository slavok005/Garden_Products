import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

import { allCategoriesReducer } from "./reducers/categoriesRedusers";
import { productsReducer } from "./reducers/productsReducers";
import { singleProductReducer } from "./reducers/singleProductReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  categories: allCategoriesReducer,
  singleProduct: singleProductReducer
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
