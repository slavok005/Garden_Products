import React, { useState, useEffect } from 'react';
import s from './index.module.scss';

function AllCategories() {
  const [allcategories, setAllCategories] = useState([]);
  

  useEffect(() => {
    fetch('http://localhost:3333/categories/all')
      .then(res => res.json())
      .then(setAllCategories)

  }, []);

const partCategories = allcategories.slice(0, 5);
  return (
    <div className={s.categories}>
      <div className={s.header}>
        <h2>Categories</h2>
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

export default AllCategories;