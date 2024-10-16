import React, { useState, useEffect } from "react";
import s from "./index.module.scss";
import { getAllCategories } from "../requests/categories";
import { useDispatch, useSelector } from "react-redux";
import CategoriesItem from "../CategoriesItem/index";

function AllCategories() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories);
  }, []);

  const categoriesState = useSelector((store) => store.categories);

  return (
    <div className={s.categories}>
      <div className={s.header}>
        <h2>Categories</h2>
      </div>
      <div className={s.categoriesList}>
        {categoriesState.map((element) => (
          <CategoriesItem key={element.id} {...element} />
        ))}
      </div>
    </div>
  );
}

export default AllCategories;
