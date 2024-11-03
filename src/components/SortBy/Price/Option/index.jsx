import { sortAllProductsAction } from "../../../store/reducers/productsReducers";
import s from "./index.module.scss";
import React from "react";

const SortByOption = () => {
  const order = (e) => dispatch(sortAllProductsAction(e.target.value));

  return (
    <div className={s.sortedoptin}>
      <b>Sorted</b>
      <select onInput={order} className={s.sortedoptinselect}>
        <option label="by Default"></option>
        <option value="alphabet">by Alphabet</option>
        <option value="price-asc">Ascending price</option>
        <option value="price-desc">Descending price</option>
        <option value="discount-asc">Ascending discounts</option>
        <option value="discount-desc">Descending discounts</option>
      </select>
    </div>
  );
};

export default SortByOption;
