import React, { useEffect } from "react";
import { getAllProducts } from "../requests/products.js";
import { useDispatch, useSelector } from "react-redux";
import s from "./index.module.scss";
import bag from './images/bag.svg'
import heart from './images/heart.svg'

export default function BannerSales() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts);
  }, [dispatch]);

  const productsState = useSelector((store) => store.products);
  // Функция для сокращения текста до 3 слов
  const truncateDescription = (description) => {
    const words = description.split(" ");
    return words.length > 2 ? `${words.slice(0, 2).join(" ")}...` : description;
  };

  const truncateText = (text) => {
    const words = text.split(" ");
    return words.length > 3 ? `${words.slice(0, 3).join(" ")}...` : text;
  };
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
          <div key={product.id} className={s.ProductsCard}>
            <div className={s.discount_info}></div>
            <div className={s.icon_container}>
                    <img src={heart} className={s.icon} alt="Heart Icon" />
                    <img src={bag} className={s.icon} alt="Bag Icon" />
            </div>
            <img
              src={`http://localhost:3333${product.image}`}
              alt={product.title}
              className={s.productImage}
            />
            <div className={s.tegi}>
              <h3>{truncateText(product.title)}</h3>
              <div className={s.price_container}>
                <p className={s.old_price}>${product.price}</p>
                <p className={s.new_price}>$100</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
