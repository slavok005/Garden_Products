import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  getProductsByCategory,
  getSingleProduct,
} from "../../components/requests/products";
import { useDispatch, useSelector } from "react-redux";
import s from "./index.module.scss";
import SingleProductCard from "../../components/SingleProductCard";
import { ThemeContext } from "../../ThemeContext";

export default function SingleProductPage() {
  const { theme } = useContext(ThemeContext);
  const { product_id } = useParams();

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch, id]);

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
    <div
      className={`${s.single_prdouct_page} ${
        theme === "dark" ? s["single_prdouct_page_dark"] : ""
      }`}
    >
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
            {productsByCategoryState?.categoryTitle?.title}
          </Link>
        </div>
        <div className={s.line}></div>
        <div className={s.crumbBox}>
          <div className={s.crumbTextBlack}>{singleProductState?.title}</div>
        </div>
      </div>
      <SingleProductCard />
    </div>
  );
}
