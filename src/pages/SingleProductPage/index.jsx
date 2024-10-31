import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  getProductsByCategory,
  getSingleProduct,
} from "../../components/requests/products";
import { useDispatch, useSelector } from "react-redux";
import s from "./index.module.scss";
import SingleProductCard from "../../components/SingleProductCard";

export default function SingleProductPage() {
  const { product_id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleProduct(product_id));
  }, [dispatch]);

  const singleProductState = useSelector((store) => store.singleProduct);
  const categoriesID = singleProductState?.categoryId;

  const productsByCategoryState = useSelector(
    (store) => store.productsByCategory
  );

  useEffect(() => {
    if (categoriesID) {
      dispatch(getProductsByCategory(categoriesID));
    }
  }, [dispatch, categoriesID]);

  return (
    <div>
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
          <Link to={`/categories/${categoriesID}`} className={s.crumbText}>
            {productsByCategoryState?.category?.title || "Loading..."}{" "}
          </Link>
        </div>
        <div className={s.line}></div>
        <div className={s.crumbBox}>
          <div className={s.crumbTextBlack}>
            {singleProductState?.title || "Loading..."}
          </div>
        </div>
      </div>

      <SingleProductCard />
    </div>
  );
}
