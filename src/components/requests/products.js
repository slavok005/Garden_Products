import { loadAllProductsAction } from "../../store/reducers/productsReducers";

import { loadSingleProductAction } from "../../store/reducers/singleProductReducer";


export const getAllProducts = (dispatch) => {
  fetch("http://localhost:3333/products/all")
    .then((res) => res.json())
    .then((json) => dispatch(loadAllProductsAction(json)))
    .catch((error) => console.error("Error fetching all products:", error));
};
export const getSingleProduct = (id) => {
  return dispatch => {
    fetch(`http://localhost:3333/products/${id}`)
    .then(res => res.json())
    .then(json => dispatch(loadSingleProductAction(json)))
    .catch(error => console.error("Error fetching all products:", error));
};
}
