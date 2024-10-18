import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { allCategoriesReducer } from "./reducers/categoriesRedusers";
import { productsReducer } from "./reducers/productsReducers";
import { singleProductReducer } from "./reducers/singleProductReducer";
import { productsByCategoryReducer } from "./reducers/productsByCategory";
import { cartReducer } from "./reducers/cartReducer";
import { favoriteReducer } from "./reducers/favoriteReducer";


const rootReducer = combineReducers({
  products: productsReducer,
  categories: allCategoriesReducer,
  singleProduct: singleProductReducer,
  productsByCategory: productsByCategoryReducer,
  cart: cartReducer,
  favorite: favoriteReducer
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
