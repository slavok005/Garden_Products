import React, { useEffect } from "react";
import { getAllProducts } from "../requests/products.js";
import { useDispatch, useSelector } from "react-redux";
import s from "./index.module.scss";

export default function BannerSales() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts);
  }, [dispatch]);

  const productsState = useSelector((store) => store.products);
 
  return (
    <div className={s.BanCon}>
      <div className={s.BanSal}>
        <h2 className={s.discount}>Sale</h2>
        <div className={s.line}></div>
        <button className={s.allProductsButton}>All sales</button>
      </div>
      <div className={s.Sales}>
        {productsState.map((product) => (
          <div key={product.id} className={s.ProductsCard}>
            <dav className={s.tegi}>
          <img src={product.image} alt={product.title} className={s.productImage} />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            </dav>
          </div>
        ))}
      </div>
    </div>
  );
}
