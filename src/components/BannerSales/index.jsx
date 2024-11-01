import React, { useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import { getAllProducts } from "../requests/products.js";
import { useDispatch, useSelector } from "react-redux";
import s from "./index.module.scss";
import ProductsCard from "../ProductCard/index.jsx";
import { ThemeContext } from "../../ThemeContext.jsx";

export default function BannerSales() {

  const {theme} = useContext(ThemeContext);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts);
  }, [dispatch]);

  const productsState = useSelector((store) => store.products);

  const discountedProducts = productsState.data.filter(
    (product) => product.discont_price
  );
  
  return (
    <div className={s.sales_container}>
      <div className={s.header}>
        <h2 className={s.sale_title}>Sale</h2>
        <div className={s.line}></div>
        <Link to="/sales">
          <button className={`${s.allProductsButton} ${theme === 'dark' ? s['allProductsButton_dark'] : ''}`}>All Sales</button>
        </Link>        
      </div>
      <div className={s.Sales}>
        {discountedProducts.slice(0, 4).map((product) => (
          <ProductsCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
