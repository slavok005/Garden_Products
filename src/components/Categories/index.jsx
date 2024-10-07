import React, { useState, useEffect } from 'react';
import s from './index.module.scss';

function Categories() {
  const [categories, setCategories] = useState([]);
  

  useEffect(() => {
    fetch('http://localhost:3333/categories/all')
      .then(res => res.json())
      .then(setCategories)
     
  }, []);

 
  return (
    <div className={s.categories}>
      <div className={s.header}>
        <h2>Categories</h2>
        <button className={s.allCategoriesButton}>All categories</button>
      </div>
      <div className={s.categoriesList}>
        {categories.map(({ id, name, image }) => (
          <div key={id} className={s.categoryItem}>
            <img src={`http://localhost:3333${image}`} alt={name} />
            <p>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;