import React from "react";
import Products from "../../components/AllProducts";
import s from "./index.module.scss";
import { Link } from "react-router-dom";

const AllProductsPage = () => {
  return (
    <div className={s.container}>
       <div className={s.breadcrumbs}>
        <div className={s.crumbBox}>
          <Link to="/" className={s.crumbText}>
            Main page
          </Link>
        </div>
        <div className={s.line}></div>
        <div className={s.crumbBox}>
          <div className={s.crumbTextBlack}>
            All products
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default AllProductsPage;
