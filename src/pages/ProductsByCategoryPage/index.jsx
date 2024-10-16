import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import s from "./index.module.scss";
import { getProductsByCategory } from "../../components/requests/products.js";
import ProductsCard from "../../components/ProductCard/index.jsx";

function ProductsByCategoryPage() {
  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsByCategory(id));
  }, []);

  const productsByCategoryState = useSelector(
    (store) => store.productsByCategory
  );

  const productsData = productsByCategoryState.data;
  const productsCategory = productsByCategoryState.category;

  return (
    <div>
      {productsCategory && productsCategory.title ? (
        <div className={s.productsList}>
          {productsData.map((element) => (
            <ProductsCard key={element.id} {...element} />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}


export default ProductsByCategoryPage;
