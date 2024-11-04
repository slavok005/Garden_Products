import { fetchData } from "../../api";
import { loadProductsByCategoryAction } from "../../store/reducers/productsByCategory";
import { loadAllProductsAction } from "../../store/reducers/productsReducers";
import { loadSingleProductAction } from "../../store/reducers/singleProductReducer";


export const getAllProducts = (dispatch) => {
  fetchData("products/all")
    .then((res) => res.json())
    .then((json) => dispatch(loadAllProductsAction(json)))
    .catch((error) => console.error("Error fetching all products:", error));
};
export const getSingleProduct = (id) => {  
  return dispatch => {
    fetchData(`products${id}`)
    .then(res => res.json())
    .then(json => dispatch(loadSingleProductAction(json)))
    .catch(error => console.error("Error fetching single product:", error));
};
}
export const getProductsByCategory = (id) => {
  return dispatch => {
    fetchData(`categories${id}`)
    .then(res => res.json())
    .then(json => dispatch(loadProductsByCategoryAction(json)))
    .catch(error => console.error("Error fetching all products:", error));
};
}