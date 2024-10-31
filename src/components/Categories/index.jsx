import React, { useState, useEffect, useContext } from "react";
import s from "./index.module.scss";
import { Link } from "react-router-dom";
import CategoriesItem from "../CategoriesItem/index.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../requests/categories";
import { ThemeContext } from "../../ThemeContext.jsx";

function Categories() {
  const {theme} = useContext(ThemeContext);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories);
  }, []);

  const categoriesState = useSelector((store) => store.categories);

  const partCategories = categoriesState.slice(0, 4);

  return (
    <div className={s.categories}>
      <div className={s.header}>
        <h2>Categories</h2>
        <div className={s.line}></div>
        <button className={`${s.allCategoriesButton} ${theme === 'dark' ? s['allCategoriesButton-dark'] : ''}`}>
          <Link to="/categories">All Categories</Link>
        </button>
      </div>

      <div className={s.categoriesList}>
        {partCategories.map((element) => (
          <CategoriesItem key={element.id} {...element} />
        ))}
      </div>
        </div>
  );
}

export default Categories;
