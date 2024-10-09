import { loadAllProductsAction } from "../../store/reducers/productsReducers.js";

export const getAllProducts = (dispatch) => {
  fetch("http://localhost:3333/products/all")
    .then((res) => res.json())
    .then((json) => dispatch(loadAllProductsAction(json)))
    .catch((error) => console.error("Error fetching all products:", error));
};
