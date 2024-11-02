import React, { useContext, useEffect, useState } from "react";
import Products from "../../components/AllProducts";
import s from "./index.module.scss";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../ThemeContext";

const AllProductsPage = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <div className={`${s.container} ${theme === 'dark' ? s['container_dark'] : ''}`}>
      <div className={s.breadcrumbs}>
        <div className={s.crumbBox}>
          <Link to="/" className={s.crumbText}>
            <div className={s.crumbText}>
              Main page
            </div>
          </Link>
        </div>
        <div className={s.line}></div>
        <Link className={s.crumbBox} to="/products">
          <span className={`${s.crumbTextMain} ${theme === 'dark' ? s['crumbTextMain-dark'] : ''}`}>
            All products
          </span>
        </Link>
      </div>      
      <Products/>
    </div>
  );
};

export default AllProductsPage;
