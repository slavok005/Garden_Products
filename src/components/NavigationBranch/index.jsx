import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import s from "./index.module.scss";

const NavigationBranch = () => {
    const location = useLocation(); // Получаем текущий маршрут
    const pathnames = location.pathname.split('/').filter(Boolean); // Разбиваем путь на части
  
    return (
      <div>
        <div>
          {/* Для каждого сегмента пути создаём кнопку */}
          <button className={s.navigationbutton}>
            <Link to="/">Main Page</Link>
          </button>
          {pathnames.map((_, index) => {
            const pathTo = `/${pathnames.slice(0, index + 1).join('/')}`; // Создаём путь для каждого сегмента
            return (
              <button className={s.navigationbutton} key={pathTo}>
                <Link to={pathTo}>{pathnames[index]}</Link>
              </button>
            );
          })}
        </div>
      </div>
    );
  };

export default NavigationBranch;