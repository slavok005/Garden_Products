import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import s from "./index.module.scss";
import { getProductsByCategory } from "../../components/requests/products.js";
import ProductsCard from "../../components/ProductCard/index.jsx";

function ProductsByCategoryPage() {
  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(getProductsByCategory(id));
    }
  }, [dispatch, id]);

  const productsByCategoryState = useSelector(
    (store) => store.productsByCategory || {}
  );

  const productsData = productsByCategoryState.data || [];
  const productsCategory = productsByCategoryState.category || {};

  return (
    <section>
      {productsCategory && productsCategory.title ? (
        <>
          <div className={s.breadcrumbs}>
            <div className={s.crumbBox}>
              <Link to="/" className={s.crumbText}>
                Main page
              </Link>
            </div>
            <div className={s.line}></div>
            <div className={s.crumbBox}>
              <Link to="/categories/" className={s.crumbText}>
                Categories
              </Link>
            </div>
            <div className={s.line}></div>
            <div className={s.crumbBox}>
              <div className={s.crumbTextBlack}>{productsCategory.title}</div>
            </div>
          </div>

          <div className={s.ProductsByCategoryPage}>
            <div className={s.productsList}>
              {productsData.length > 0 ? (
                productsData.map((element) => (
                  <ProductsCard key={element.id} {...element} />
                ))
              ) : (
                <p>No products found</p>
              )}
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
}

export default ProductsByCategoryPage;
