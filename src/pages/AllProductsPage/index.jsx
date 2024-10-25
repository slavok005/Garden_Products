import React, { useEffect, useState } from "react";
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
<<<<<<< HEAD
        <div className={s.crumbBox}>
          <div className={s.crumbTextBlack}>
            All products
          </div>
        </div>
      </div>
      <Products />
=======
        <Link className={s.crumbBox} to="/products">
          <span className={s.crumbTextBlack}>All products</span>
        </Link>
      </div>      
      <Products/>
>>>>>>> 79cd8526c1b64975dcef4da1819496cf0d41e62b
    </div>
  );
};

export default AllProductsPage;
