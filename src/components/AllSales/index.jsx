import React, { useState, useEffect } from "react";
import s from "./index.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../requests/products";
import ProductsCard from "../ProductCard";
import {
  sortAllProductsAction,
  sortByPriceAction,
} from "../../store/reducers/productsReducers";
import Skeleton from "../Skeleton";

function AllSales() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts);
  }, []);
  const productsState = useSelector((store) => store.products);
  const [discountedProducts] = useState(true);
  const discountedProductsData = productsState.data || [];

  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");

  const handleMinValue = (e) => setMinValue(e.target.value || 0);
  const handleMaxValue = (e) => setMaxValue(e.target.value || Infinity);

  const handleOrder = (e) => dispatch(sortAllProductsAction(e.target.value));

  useEffect(() => {
    dispatch(
      sortByPriceAction({
        min: minValue,
        max: maxValue,
      })
    );
  }, [minValue, maxValue]);

  return (
    <div className={s.products}>
      <h2>Discount Items</h2>
      <div className={s.sortproductscontainer}>
        <div className={s.sortedby}>
          <div className={s.sortedbyprice}>
            <b>Price</b>
            <input
              type="number"
              value={minValue}
              onChange={handleMinValue}
              placeholder="from"
            />
            <input
              type="number"
              value={maxValue}
              onChange={handleMaxValue}
              placeholder="to"
            />
            <button></button>
          </div>
          <div className={s.sortedoptin}>
            <b>Sorted</b>
            <select onInput={handleOrder} className={s.sortedoptinselect}>
              <option value="default">By Default</option>
              <option value="price_asc">By price ASC</option>
              <option value="price_desc">By price DESC</option>
              <option value="title">By title (A-Z)</option>
            </select>
          </div>
        </div>
      </div>

      <div className={s.productsList}>
        {discountedProductsData.length > 0 ? (
          discountedProductsData
            .filter((product) => {
              return discountedProducts ? product.discont_price !== null : true;
            })
            .filter((el) => el.visible)
            .map((el) => <ProductsCard key={el.id} {...el} />)
        ) : (
          <Skeleton length={12} />
        )}
      </div>
    </div>
  );
}

export default AllSales;
