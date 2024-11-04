import imageBaseUrl from "../../config";
import { loadAllCategoriesAction } from "../../store/reducers/categoriesRedusers";

export const getAllCategories = (dispatch) => {
    fetch(`${imageBaseUrl}/categories/all`)
      .then((res) => res.json())
      .then((json) => dispatch(loadAllCategoriesAction(json)))
      .catch((error) => console.error("Error fetching all products:", error));
  };