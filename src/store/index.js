import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

import { allCategoriesReducer } from "./reducers/categoriesRedusers";
import { productsReducer } from "./reducers/productsReducers";
import { singleProductReducer } from "./reducers/singleProductReducer";
import { productsByCategoryReducer } from "./reducers/productsByCategory";


const rootReducer = combineReducers({
  products: productsReducer,
  categories: allCategoriesReducer,
  singleProduct: singleProductReducer,
  productsByCategory: productsByCategoryReducer
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
