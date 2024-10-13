import React, { useState, useEffect } from 'react';
import s from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from '../requests/categories';

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
          <div key={element.id} className={s.categoryItem}>
            <img src={`http://localhost:3333${element.image}`} alt={element.title} />
            <p>{element.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllCategories;