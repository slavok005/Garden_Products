import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import s from "./index.module.scss";

const NavigationBranch = () => {
    const location = useLocation(); // Получаем текущий маршрут
    const pathnames = location.pathname.split('/').filter(Boolean); // Разбиваем путь на части
    const pathNamesMap = {
        products: 'All Products',
        sales: 'All Sales',
        categories: "Categories",
        favorites: "Liked products"
      };
  
    return (
      <div>
        <div className={s.navigation_branch}>
          {/* Для каждого сегмента пути создаём кнопку */}
          <button className={s.mainpagebutton}>
            <Link to="/" className='mainpagebutton'>Main Page</Link>
          </button>

          <div className={s.line}></div>

          {pathnames.map((segment, index) => {
            const pathTo = `/${pathnames.slice(0, index + 1).join('/')}`; // Создаём путь для каждого сегмента
            const displayName = pathNamesMap[segment] || segment;
            return (
              <button className={s.navigationbutton} key={pathTo}>
                <Link to={pathTo}>{displayName}</Link>
              </button>
            );
          })}
        </div>
      </div>
    );
  };

export default NavigationBranch;