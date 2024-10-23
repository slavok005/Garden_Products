import React from "react";
import Products from "../../components/AllProducts";
import s from "./index.module.scss";
import { Link } from "react-router-dom";

const AllProductsPage = () => {
  return (
    <div className={s.container}>
      <div className={s.breadcrumbs}>
        <Link className={s.crumbBox} to="/">
          <div>
            <span className={s.crumbText}>Main page</span>
          </div>
        </Link>
        <div className={s.line}></div>
        <Link className={s.crumbBox} to="/products">
          <span className={s.crumbTextBlack}>All products</span>
        </Link>
      </div>
      <Products />
    </div>
  );
};

export default AllProductsPage;
