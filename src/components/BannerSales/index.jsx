import React, { useEffect } from "react";
import { getAllProducts } from "../requests/products.js";
import { useDispatch, useSelector } from "react-redux";
import s from "./index.module.scss";
import bag from './images/bag.svg'
import heart from './images/heart.svg'
import ProductsCard from "../ProductCard/index.jsx";

export default function BannerSales() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts);
  }, [dispatch]);

  const productsState = useSelector((store) => store.products);
 
  return (
    <div className={s.sales_container}>
      <div className={s.header}>
        <h2 className={s.sale_title}>Sale</h2>
        <div className={s.line}></div>
        {/* <button className={s.allSalesButton}>All sales</button> */}
        <button className={s.allProductsButton}>
          All Sales
          {/* <Link to="/sales">All Sales</Link> */}
        </button>
      </div>
      <div className={s.Sales}>
        {productsState.slice(0, 4).map((product) => (
          <ProductsCard key={product.id} {...product}/>
        ))}
      </div>
    </div>
  );
}
