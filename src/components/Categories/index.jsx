import React, { useState, useEffect } from 'react';
import s from './index.module.scss';

function Categories() {
  const [categories, setCategories] = useState([]);
  

  useEffect(() => {
    fetch('http://localhost:3333/categories/all')
      .then(res => res.json())
      .then(setCategories)
     
  }, []);

 const partCategories = categories.slice(0, 4);
  return (
    <div className={s.categories}>
      <div className={s.header}>
        <h2>Categories</h2>
        <div className={s.line}></div>
        <button className={s.allCategoriesButton}>All categories</button>
      </div>
      <div className={s.categoriesList}>
        {partCategories.map((element) => (
          <div key={element.id} className={s.categoryItem}>
            <img src={`http://localhost:3333${element.image}`} alt={element.title} />
            <p>{element.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;